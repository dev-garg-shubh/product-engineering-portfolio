import { ArrowUpRight, ContactRound, Download, Mail } from "lucide-react";
import { profile } from "../config/profile";

export function ContactActions({ centered = false, showEmailAddress = false }: {
  centered?: boolean;
  showEmailAddress?: boolean;
}) {
  return (
    <div className={`hero-actions${centered ? " centered" : ""}`} aria-label="Contact and portfolio actions">
      <a className="button primary" href={`mailto:${profile.email}`}>
        <Mail size={18} aria-hidden="true" />
        {showEmailAddress ? profile.email : "Email"}
      </a>
      <a className="button secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
        <ContactRound size={18} aria-hidden="true" />
        LinkedIn
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
      <a className="button ghost" href={profile.cv} download>
        <Download size={18} aria-hidden="true" />
        {showEmailAddress ? "Download CV" : "CV"}
      </a>
    </div>
  );
}
