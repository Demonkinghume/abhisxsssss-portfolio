/* --------------------------------------------------------------------------
 *  Optional local "admin mode" support.
 *
 *  Anything saved from the hidden admin panel (open  yoursite.com/#admin )
 *  is stored in the browser only (localStorage) and merged on top of
 *  src/data/portfolio.js.  Nothing is uploaded anywhere, no keys required.
 *
 *  For a permanent change, always edit src/data/portfolio.js.
 * ------------------------------------------------------------------------ */
import { portfolio } from "./portfolio";

export const STORAGE_KEY = "portfolio-local-override";

function isPlainObject(v) {
  return v && typeof v === "object" && !Array.isArray(v);
}

function deepMerge(target, source) {
  Object.keys(source).forEach((key) => {
    if (isPlainObject(source[key]) && isPlainObject(target[key])) {
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  });
  return target;
}

export function applyLocalOverride() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    deepMerge(portfolio, JSON.parse(raw));
  } catch {
    /* ignore malformed data */
  }
}
