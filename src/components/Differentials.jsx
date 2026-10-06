import { differentials } from "../content";
import "./Differentials.css";

export default function Differentials() {
  return (
    <section className="section section--dark differentials">
      <div className="container differentials__inner">
        <h2 className="section-title">{differentials.title}</h2>

        <ul className="differentials__list">
          {differentials.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
