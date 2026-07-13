import { symptoms } from "../content";
import Icon from "./Icon";
import "./Symptoms.css";

export default function Symptoms() {
  return (
    <section id="sintomas" className="section section--soft symptoms">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">{symptoms.eyebrow}</span>
          <h2 className="section-title">{symptoms.title}</h2>
          <p className="section-subtitle">{symptoms.subtitle}</p>
        </div>

        <div className="symptoms__grid">
          {symptoms.items.map((item) => (
            <div className="symptoms__card" key={item}>
              <span className="symptoms__check">
                <Icon name="check" size={16} strokeWidth={2.2} />
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
