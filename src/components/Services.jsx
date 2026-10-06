import { services } from "../content";
import Icon from "./Icon";
import "./Services.css";

export default function Services() {
  return (
    <section id="tratamentos" className="section services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{services.title}</h2>
          <p className="section-subtitle">{services.subtitle}</p>
        </div>

        <ul className="services__grid">
          {services.items.map((item) => (
            <li className="services__item" key={item.title}>
              <Icon name={item.icon} size={26} strokeWidth={1.4} className="services__icon" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
