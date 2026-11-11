import { profile } from "../data/portfolio";
import Icon from "./Icon";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__availability">
            <span className="pulse-dot" aria-hidden="true" />
            {profile.availability}
          </p>

          <h1 className="hero__title" id="hero-title">
            გამარჯობა, მე {profile.firstName} ვარ. ვქმნი{" "}
            <span className="accent-underline">მარტივ</span> და სწრაფ ინტერფეისებს.
          </h1>

          <p className="hero__lede">
            ვარ ფრონტენდ ინჟინერი და ინტერფეისის დიზაინერი ბერლინიდან. ბოლო ექვსი წლის
            განმავლობაში ვეხმარები პროდუქტის გუნდებს, რთული იდეები მკაფიო, ხელმისაწვდომ და სწრაფ
            გამოცდილებად აქციონ.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              ნამუშევრების ნახვა
              <Icon name="arrow-right" size={18} />
            </a>
            <a className="btn btn--ghost" href="#contact">
              ვითანამშრომლოთ
            </a>
          </div>

          <div className="hero__meta">
            <span className="hero__meta-item">
              <span className="meta-dot" aria-hidden="true" />
              ამჟამად: {profile.company}
            </span>
            <span className="hero__meta-item">
              <Icon name="map-pin" size={16} />
              {profile.location} · {profile.workStyle}
            </span>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__glow" />
          <div className="hero__ring hero__ring--one" />
          <div className="hero__ring hero__ring--two" />

          <div className="monogram-card">
            <div className="monogram-card__top">
              <span>პორტფოლიო</span>
              <span>ბერლინი, DE</span>
            </div>
            <span className="monogram-card__mark">{profile.initials}</span>
            <div className="monogram-card__bottom">
              <span className="monogram-card__role">{profile.role}</span>
              <span className="monogram-card__badge">
                <Icon name="arrow-up-right" size={18} />
              </span>
            </div>
          </div>

          <span className="tech-chip tech-chip--one">React</span>
          <span className="tech-chip tech-chip--two">TypeScript</span>
          <span className="tech-chip tech-chip--three">
            <span className="chip-dot" />
            დიზაინ-სისტემები
          </span>
        </div>
      </div>

      <div className="container hero__scroll">
        <a className="scroll-link" href="#about">
          <span className="scroll-link__line" aria-hidden="true" />
          გადაფურცლეთ ქვემოთ
        </a>
      </div>
    </section>
  );
}
