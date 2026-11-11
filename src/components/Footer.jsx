import { navLinks, profile } from "../data/portfolio";
import Icon from "./Icon";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <a className="logo" href="#home" aria-label={`${profile.name} — მთავარზე დაბრუნება`}>
            <span className="logo__mark" aria-hidden="true">
              {profile.initials}
            </span>
            <span className="logo__name">{profile.name}</span>
          </a>
          <p className="footer__tagline">
            ფრონტენდ ინჟინერია და ინტერფეისის დიზაინი ბერლინიდან.
          </p>
          <a className="footer__top-link" href="#home">
            ზემოთ დაბრუნება
            <Icon name="arrow-up" size={16} />
          </a>
        </div>

        <div className="footer__middle">
          <nav aria-label="ფუტერის ნავიგაცია">
            <ul className="footer__nav">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <SocialLinks variant="compact" />
        </div>

        <div className="footer__bottom">
          <p>
            © {year} {profile.name}. ყველა უფლება დაცულია.
          </p>
          <p>React, ხელით დაწერილი CSS და ბევრი ზრუნვა.</p>
        </div>
      </div>
    </footer>
  );
}
