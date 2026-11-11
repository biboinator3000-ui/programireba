import Icon from "./Icon";
import TechBadge from "./TechBadge";

export default function SkillCard({ skill }) {
  return (
    <article className="skill-card">
      <div className="skill-card__top">
        <span className="skill-card__icon">
          <Icon name={skill.icon} size={22} />
        </span>
        <span className="skill-card__count">{String(skill.items.length).padStart(2, "0")}</span>
      </div>
      <h3 className="skill-card__title">{skill.label}</h3>
      <p className="skill-card__blurb">{skill.blurb}</p>
      <ul className="skill-card__list" aria-label={`${skill.label} — ტექნოლოგიები`}>
        {skill.items.map((item) => (
          <li key={item}>
            <TechBadge>{item}</TechBadge>
          </li>
        ))}
      </ul>
    </article>
  );
}
