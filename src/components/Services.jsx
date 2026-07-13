import { services } from "../content";
import Icon from "./Icon";
import "./Services.css";

export default function Services() {
  return (
    <section id="tratamentos" className="section services">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">{services.eyebrow}</span>
          <h2 className="section-title">{services.title}</h2>
        </div>

        <div className="services__grid">
          {services.items.map((item) => (
            <details className="services__card" key={item.title}>
              <summary className="services__summary">
                <span className="services__icon">
                  <Icon name={item.icon} size={24} />
                </span>
                <div className="services__heading">
                  <h3>{item.title}</h3>
                  <span className="services__hint">Clique para ver mais</span>
                </div>
                <span className="services__toggle" aria-hidden="true" />
              </summary>
              <div className="services__details">
                <p>{item.description}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
