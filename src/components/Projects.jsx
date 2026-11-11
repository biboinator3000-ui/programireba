import { useState } from "react";
import { projects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const categories = ["ყველა", ...new Set(projects.map((project) => project.category))];
  const [activeCategory, setActiveCategory] = useState("ყველა");
  const visibleProjects =
    activeCategory === "ყველა"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="projects-title"
            index="03"
            eyebrow="შერჩეული ნამუშევრები"
            title="პროდუქტები, შექმნილი ზრუნვითა და გააზრებით."
            description="რამდენიმე პროექტი, რომლებიც აჩვენებს, როგორ ვფიქრობ ინტერფეისებზე, სისტემებსა და მათ მომხმარებლებზე."
          />
        </Reveal>

        <div className="projects__toolbar">
          <div className="filters" role="group" aria-label="პროექტების გაფილტვრა კატეგორიის მიხედვით">
            {categories.map((category) => {
              const isActive = category === activeCategory;
              const count =
                category === "ყველა"
                  ? projects.length
                  : projects.filter((project) => project.category === category).length;

              return (
                <button
                  key={category}
                  className={`filter${isActive ? " is-active" : ""}`}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                >
                  {category}
                  <span className="filter__count">{count}</span>
                </button>
              );
            })}
          </div>

          <p className="projects__count" aria-live="polite">
            {visibleProjects.length} პროექტი
          </p>
        </div>

        <Reveal delay={100}>
          <div className="projects__grid">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
