import { useEffect } from "react";

export const SITE_URL = "https://alexandrebenoit.com";
const BRAND = "Alexandre Benoit";
const DEFAULT_TITLE = "Alexandre Benoit — ML Engineer & Scientist";
const DEFAULT_DESCRIPTION =
  "Machine Learning Engineer & Scientist (University of Cambridge MPhil). Publications, university and side projects, and research on ML for energy systems, path planning and graph neural networks.";

function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

// Updates document title and key meta tags per route. Note: social scrapers do
// not execute JS, so the static defaults in public/index.html are the source of
// truth for link previews; this keeps browser tabs, history and canonical URLs
// accurate during client-side navigation.
export default function Seo({ title, description, path = "" }) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${BRAND}` : DEFAULT_TITLE;
    const desc = description || DEFAULT_DESCRIPTION;
    const url = `${SITE_URL}${path}`;

    document.title = fullTitle;
    setMeta("name", "description", desc);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", desc);
    setCanonical(url);
  }, [title, description, path]);

  return null;
}
