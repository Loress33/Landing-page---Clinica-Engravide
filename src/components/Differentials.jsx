import { differentials } from "../content";
import Icon from "./Icon";
import "./Differentials.css";

export default function Differentials() {
  return (
    <section className="section section--dark differentials">
      <div className="container differentials__inner">
        <div className="differentials__text">
          <span className="eyebrow">{differentials.eyebrow}</span>
          <h2 className="section-title">{differentials.title}</h2>
        </div>

        <ul className="differentials__list">
          {differentials.items.map((item) => (
            <li key={item}>
              <Icon name="check" size={18} strokeWidth={2.2} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
