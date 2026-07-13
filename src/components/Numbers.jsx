import { numbers } from "../content";
import "./Numbers.css";

export default function Numbers() {
  return (
    <section className="section numbers">
      <div className="container">
        <h2 className="section-title numbers__title">{numbers.title}</h2>

        <div className="numbers__grid">
          {numbers.items.map((item) => (
            <div className="numbers__item" key={item.label}>
              <span className="numbers__value">{item.value}</span>
              <span className="numbers__label">{item.label}</span>
            </div>
          ))}
        </div>

        <p className="numbers__disclaimer">{numbers.disclaimer}</p>
      </div>
    </section>
  );
}
