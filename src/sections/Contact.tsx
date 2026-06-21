import { ContactActions } from "../components/ContactActions";
import { MotionBlock } from "../components/MotionBlock";
import type { PortfolioView } from "../hooks/usePortfolioView";

const contactCopy = {
  overview: {
    title: "Available for remote full-stack developer roles.",
    body: "I am currently freelancing and open to remote teams that need polished React interfaces, backend-aware product flows, APIs, data systems, and reliable delivery.",
  },
  technical: {
    title: "Good systems get better through thoughtful conversation.",
    body: "I enjoy exchanging notes on product architecture, real-time data, interface decisions, reliability, developer tooling, and the tradeoffs that keep software understandable as it grows.",
  },
};

export function Contact({ view }: { view: PortfolioView }) {
  const copy = contactCopy[view];

  return (
    <section className="contact-section" id="contact">
      <MotionBlock className="contact-inner">
        <p className="eyebrow">Contact</p>
        <h2>{copy.title}</h2>
        <p>{copy.body}</p>
        <ContactActions centered showEmailAddress />
      </MotionBlock>
    </section>
  );
}
