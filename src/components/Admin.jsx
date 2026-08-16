import { useState } from "react";
import { portfolio } from "../data/portfolio";
import { STORAGE_KEY } from "../data/override";
import { Button } from "./ui";

/* --------------------------------------------------------------------------
 *  Hidden local admin panel  ->  open  #admin
 *  Lets a non developer tweak every value and preview it instantly.
 *  Changes live in this browser only – copy the JSON into
 *  src/data/portfolio.js to make them permanent.
 * ------------------------------------------------------------------------ */
export default function Admin() {
  const [value, setValue] = useState(() => JSON.stringify(portfolio, null, 2));
  const [message, setMessage] = useState("");

  const save = () => {
    try {
      JSON.parse(value);
      localStorage.setItem(STORAGE_KEY, value);
      setMessage("Saved. Reloading…");
      setTimeout(() => {
        window.location.hash = "";
        window.location.reload();
      }, 600);
    } catch (err) {
      setMessage("Invalid JSON: " + err.message);
    }
  };

  const reset = () => {
    localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
  };

  const download = () => {
    const blob = new Blob([value], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "portfolio.json";
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="container mx-auto px-6 py-32 max-w-4xl">
      <div className="glass rounded-3xl p-8">
        <h1 className="text-3xl font-bold font-heading mb-2">
          <span className="text-gradient">Admin Panel</span>
        </h1>
        <p className="text-gray-400 mb-8 text-sm">
          Edit the content below (name, bio, skills, experience, education,
          services, projects, contact, social links) and press Save. The change
          is stored in this browser only — paste the same JSON into{" "}
          <code className="text-primary">src/data/portfolio.js</code> to make it
          permanent for everyone.
        </p>

        <label htmlFor="cfg" className="sr-only">
          Portfolio configuration
        </label>
        <textarea
          id="cfg"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          spellCheck={false}
          className="w-full h-[500px] bg-black/40 border border-white/10 rounded-xl p-4 font-mono text-xs text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
        />

        {message ? <p className="mt-4 text-sm text-primary">{message}</p> : null}

        <div className="flex flex-wrap gap-4 mt-6">
          <Button onClick={save}>Save &amp; Preview</Button>
          <Button variant="outline" onClick={download}>
            Download JSON
          </Button>
          <Button variant="outline" onClick={reset}>
            Reset
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              window.location.hash = "";
            }}
          >
            Back to site
          </Button>
        </div>
      </div>
    </div>
  );
}
