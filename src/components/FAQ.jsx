import { useState } from "react";
import { faq } from "../content";
import "./FAQ.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <section id="faq" className="section section--soft faq">
      <div className="container faq__inner">
        <div className="section-header">
          <span className="eyebrow">{faq.eyebrow}</span>
          <h2 className="section-title">{faq.title}</h2>
        </div>

        <div className="faq__list">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div className={`faq__item ${isOpen ? "faq__item--open" : ""}`} key={item.question}>
                <button
                  className="faq__question"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className="faq__icon">{isOpen ? "−" : "+"}</span>
                </button>
                <div className="faq__answer">
                  <p>{item.answer || "EDITAR: adicionar resposta para esta pergunta."}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
