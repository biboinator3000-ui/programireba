import { useEffect, useRef, useState } from "react";
import { navLinks, profile, sectionIds } from "../data/portfolio";
import useActiveSection from "../hooks/useActiveSection";
import Icon from "./Icon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(sectionIds);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector("a")?.focus();

    const background = [document.getElementById("main"), document.querySelector(".footer")].filter(
      Boolean
    );
    background.forEach((node) => node.setAttribute("inert", ""));

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      background.forEach((node) => node.removeAttribute("inert"));
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 901px)");
    const closeOnDesktop = (event) => {
      if (event.matches) setIsOpen(false);
    };

    desktopQuery.addEventListener("change", closeOnDesktop);

    return () => desktopQuery.removeEventListener("change", closeOnDesktop);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`header${isScrolled ? " is-scrolled" : ""}${isOpen ? " is-open" : ""}`}>
      <div className="container header__inner">
        <a className="logo" href="#home" aria-label={`${profile.name} — მთავარი`} onClick={closeMenu}>
          <span className="logo__mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="logo__name">{profile.name}</span>
        </a>

        <nav className="nav" aria-label="მთავარი ნავიგაცია">
          <ul className="nav__list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <li key={link.id}>
                  <a
                    className={`nav__link${isActive ? " is-active" : ""}`}
                    href={`#${link.id}`}
                    aria-current={isActive ? "location" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <a className="btn btn--primary btn--sm header__cta" href="#contact">
          ვისაუბროთ
          <Icon name="arrow-up-right" size={15} />
        </a>

        <button
          ref={toggleRef}
          className="nav-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "მენიუს დახურვა" : "მენიუს გახსნა"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <Icon name={isOpen ? "close" : "menu"} size={22} />
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu" id="mobile-menu" ref={menuRef}>
          <nav aria-label="მობილური ნავიგაცია">
            <ul className="mobile-menu__list">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;

                return (
                  <li key={link.id}>
                    <a
                      className={`mobile-menu__link${isActive ? " is-active" : ""}`}
                      href={`#${link.id}`}
                      aria-current={isActive ? "location" : undefined}
                      onClick={closeMenu}
                    >
                      <span>{link.label}</span>
                      <Icon name="arrow-up-right" size={20} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <a className="btn btn--primary mobile-menu__cta" href="#contact" onClick={closeMenu}>
            პროექტის დაწყება
            <Icon name="arrow-right" size={18} />
          </a>

          <div className="mobile-menu__meta">
            <p>{profile.email}</p>
            <p>
              {profile.location} · {profile.workStyle}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
