import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-4 mt-auto bg-white/80 dark:bg-dark-mode/80 backdrop-blur-sm border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto max-width">
        <p className="text-sm text-center text-dark-content dark:text-light-content">
          © {currentYear}{" "}
          <span className="text-gradient font-semibold">Alexandre Benoit</span>
          {" "}— All Rights Reserved.
        </p>
        <div className="flex justify-center gap-6 mt-3">
          <a 
            href="https://github.com/alexandrebenoit" 
            target="_blank" 
            rel="noreferrer noopener"
            className="text-xs text-dark-content dark:text-light-content hover:text-gradient transition-colors duration-300"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/alexandrebenoit" 
            target="_blank" 
            rel="noreferrer noopener"
            className="text-xs text-dark-content dark:text-light-content hover:text-gradient transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a 
            href="/contact" 
            className="text-xs text-dark-content dark:text-light-content hover:text-gradient transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
