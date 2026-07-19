import React from "react";

function Footer() {
  return (
    <footer className="mt-auto border-t border-border-subtle py-4">
      <p className="text-xs text-center text-text-muted font-mono w-full">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-accent-cyan">Alexandre Benoit</span>. All Rights
        Reserved.
      </p>
    </footer>
  );
}

export default Footer;
