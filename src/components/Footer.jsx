import { portfolio } from "../data/portfolio";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./SocialIcons";

const ICONS = {
  youtube: YoutubeIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  linkedin: LinkedinIcon,
  github: GithubIcon,
};

export default function Footer() {
  const { footer, socialLinks, personal } = portfolio;

  const socials = Object.entries(socialLinks).filter(
    ([key, url]) => ICONS[key] && url
  );

  return (
    <footer className="border-t border-white/10 bg-[#050505] py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-2xl font-bold font-heading"
          >
            <span className="text-gradient-animated">{footer.logo}</span>
          </a>

          <div className="flex items-center space-x-4">
            {socials.map(([key, url]) => {
              const Icon = ICONS[key];
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key}
                  title={key}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>{footer.copyright}</p>
          <div className="flex items-center gap-6">
            {personal.resume ? (
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="hover:text-white transition-colors"
              >
                {personal.resumeLabel}
              </a>
            ) : null}
            <a
              href={footer.adminHref}
              className="hover:text-white transition-colors"
            >
              {footer.adminLabel}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
