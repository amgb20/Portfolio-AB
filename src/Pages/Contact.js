import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, email_2 } = contactDetails;
  return (
    <main className="container mx-auto max-width section pb-20">
      <div className="max-w-2xl mx-auto card-engineering p-8 md:p-12">
        <p className="font-mono text-sm text-accent-cyan mb-4">$ mail --to</p>
        <h1 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-8">
          For any questions, drop an email
        </h1>
        <div className="space-y-6">
          <a href={`mailto:${email}`} className="link-cyan block text-lg md:text-xl">
            {email}
          </a>
          <p className="font-mono text-sm text-text-muted text-center">or</p>
          <a
            href={`mailto:${email_2}`}
            className="link-cyan block text-lg md:text-xl"
          >
            {email_2}
          </a>
        </div>
      </div>
    </main>
  );
}

export default Contact;
