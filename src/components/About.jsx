import { facts, profile, stats } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="about-title"
            index="01"
            eyebrow="ჩემ შესახებ"
            title="ინჟინერია დიზაინერის თვალით."
            description="მაინტერესებს დეტალები, რომლებსაც ადამიანები გრძნობენ, მაგრამ იშვიათად ამჩნევენ — განლაგების რიტმი, ინტერაქციის სისწრაფე და სიტყვები ღილაკში."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="about__grid">
            <aside className="about__panel">
              <div>
                <p className="about__panel-eyebrow">მოკლე შესავალი</p>
                <p className="about__panel-text">
                  მე {profile.name} ვარ — ფრონტენდ ინჟინერი და ინტერფეისის დიზაინერი ბერლინიდან.
                  პროდუქტის გუნდებთან ერთად ამბიციურ იდეებს ვაქცევ ინტერფეისებად, რომლებიც
                  რეალურად გამოდის.
                </p>
              </div>
              <div className="about__panel-footer">
                <span className="about__signature" aria-hidden="true">
                  {profile.initials}
                </span>
                <span>{profile.role}</span>
              </div>
            </aside>

            <div className="about__content">
              <div className="about__paragraphs">
                {profile.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <dl className="about__facts">
                {facts.map((fact) => (
                  <div className="about__fact" key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="about__stats">
                {stats.map((stat) => (
                  <div className="stat" key={stat.label}>
                    <span className="stat__value">{stat.value}</span>
                    <span className="stat__label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
