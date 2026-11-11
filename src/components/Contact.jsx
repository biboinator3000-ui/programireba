import { useEffect, useRef, useState } from "react";
import { profile } from "../data/portfolio";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="contact-title"
            index="04"
            eyebrow="კონტაქტი"
            title={
              <>
                გაქვთ იდეა? მოდით, ერთად <span className="text-accent">განვახორციელოთ</span>.
              </>
            }
            description="ღია ვარ ფრილანს პროექტებისთვის, პროდუქტული პარტნიორობისთვის და ხანდახან ამბიციური გვერდითი იდეებისთვის."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="contact-panel">
            <div className="contact-panel__intro">
              <p className="contact-panel__label">დაიწყეთ საუბარი</p>
              <a className="contact-panel__email" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>

              <div className="contact-panel__actions">
                <a className="btn btn--primary" href={`mailto:${profile.email}`}>
                  ელფოსტის გაგზავნა
                  <Icon name="arrow-up-right" size={18} />
                </a>
                <button className="btn btn--ghost" type="button" onClick={copyEmail}>
                  <Icon name={copied ? "check" : "copy"} size={17} />
                  {copied ? "დაკოპირებულია" : "მისამართის კოპირება"}
                </button>
              </div>

              <p className="contact-panel__status" role="status">
                {copied
                  ? "ელფოსტის მისამართი დაკოპირებულია."
                  : "ჩვეულებრივ ვპასუხობ 1–2 სამუშაო დღეში."}
              </p>

              <dl className="contact-panel__details">
                <div>
                  <dt>მდებარეობა</dt>
                  <dd>{profile.location}</dd>
                </div>
                <div>
                  <dt>ხელმისაწვდომობა</dt>
                  <dd>{profile.availability}</dd>
                </div>
              </dl>
            </div>

            <div className="contact-panel__elsewhere">
              <p className="contact-panel__label">სოციალური ქსელები</p>
              <SocialLinks />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
