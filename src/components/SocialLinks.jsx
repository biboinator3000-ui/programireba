import { socialLinks } from "../data/portfolio";
import Icon from "./Icon";

export default function SocialLinks({ variant = "cards" }) {
  return (
    <ul className={`socials socials--${variant}`} aria-label="სოციალური პროფილები">
      {socialLinks.map((link) => {
        const isExternal = link.href.startsWith("http");

        return (
          <li key={link.id}>
            <a
              className="socials__link"
              href={link.href}
              {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <span className="socials__icon">
                <Icon name={link.icon} size={18} />
              </span>
              <span className="socials__text">
                <span className="socials__label">{link.label}</span>
                {variant === "cards" && <span className="socials__handle">{link.handle}</span>}
              </span>
              {variant === "cards" && <Icon name="arrow-up-right" size={16} className="socials__arrow" />}
              {isExternal && <span className="sr-only"> (იხსნება ახალ ჩანართში)</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
