import React from "react";
function Footer() {
  return (
    <footer className="container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        © 2023 {" "}
        <a
          className="font-medium"
          href="https://pavanmg.in"
          target="_blank"
          rel="noreferrer noopener"
        >
        <span className="text-gradient font-medium"> Alexandre</span> &
        <span className="text-gradient font-medium"> Benoit.</span>
        </a>{" "}
        All Rights Reserved.
      </p>
    </footer>
  );
}
export default Footer;
