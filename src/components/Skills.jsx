import { skillGroups } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section className="section skills" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="skills-title"
            index="02"
            eyebrow="უნარები"
            title="ინსტრუმენტები სრული გამოცდილების შესაქმნელად."
            description="თავისუფლად ვმუშაობ სტეკის სხვადასხვა დონეზე და ყველაზე მეტად იქ, სადაც ინტერფეისის დიზაინი ფრონტენდს ხვდება."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="skills__grid">
            {skillGroups.map((group) => (
              <SkillCard key={group.id} skill={group} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
