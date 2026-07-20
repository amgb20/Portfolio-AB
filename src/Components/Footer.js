import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import { contactDetails, socialMediaUrl } from "../Details";

const navColumn = [
  { to: "/education", label: "Education" },
  { to: "/experience", label: "Experience" },
  { to: "/publications", label: "Publications" },
  { to: "/projects", label: "Projects" },
  { to: "/off-the-clock", label: "Off the Clock" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-bg-alt">
      <div className="app-container-wide py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link
              to="/"
              className="font-serif text-xl font-bold tracking-tight text-text-primary no-underline"
            >
              Alexandre Benoit
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-text-muted">
              Machine Learning Engineer &amp; Scientist — University of Cambridge
              (MPhil). Agentic systems &amp; physical-world problems.
            </p>
            <p className="mt-3 text-sm font-medium text-text-primary">
              London &middot; New York
            </p>
            <SocialLinks className="mt-5" />
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-text-light">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2.5">
              {navColumn.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-text-muted no-underline transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-text-light">
              Connect
            </h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${contactDetails.email_2}`}
                  className="text-sm text-text-muted no-underline transition-colors hover:text-accent"
                >
                  {contactDetails.email_2}
                </a>
              </li>
              <li>
                <a
                  href={socialMediaUrl.linkdein}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-text-muted no-underline transition-colors hover:text-accent"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border-subtle pt-6 text-center text-sm text-text-light">
          &copy; {year} Alexandre Benoit. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
