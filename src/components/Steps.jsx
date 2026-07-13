import { steps } from "../content";
import "./Steps.css";

export default function Steps() {
  return (
    <section className="section section--soft steps">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">{steps.eyebrow}</span>
          <h2 className="section-title">{steps.title}</h2>
        </div>

        <ol className="steps__timeline">
          {steps.items.map((item) => (
            <li key={item.step} className="steps__item">
              <span className="steps__circle">{item.step}</span>
              <div className="steps__body">
                <p className="steps__label">Etapa {item.step}</p>
                <h3>{item.title}</h3>
                {item.description ? <p>{item.description}</p> : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
