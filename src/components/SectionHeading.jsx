export default function SectionHeading({ id, index, eyebrow, title, description }) {
  return (
    <header className="section-heading">
      <div className="section-heading__lead">
        <p className="eyebrow">
          <span className="eyebrow__index">{index}</span>
          <span>{eyebrow}</span>
        </p>
        <h2 className="section-heading__title" id={id}>
          {title}
        </h2>
      </div>
      {description && <p className="section-heading__description">{description}</p>}
    </header>
  );
}
