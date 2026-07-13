import { useEffect, useState } from "react";
import { site, nav } from "../content";
import Button from "./Button";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container header__inner">
        <a href="#hero" className="header__logo">
          <img
            src="/logo.svg"
            alt={site.clinicName}
            className="header__logo-image"
          />
        </a>

        <nav className={`header__nav ${open ? "header__nav--open" : ""}`}>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <Button href="#contato" variant="primary">
            Agendar consulta
          </Button>
          <button
            className={`header__burger ${open ? "header__burger--open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
