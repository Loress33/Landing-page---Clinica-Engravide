import { steps } from "../content";
import "./Steps.css";

// Posições das células (viewBox 64×64) para cada estágio de divisão do
// embrião: 1 célula, 2, 4, 8 e a mórula. Uma etapa da jornada por estágio.
function ring(count, radius, cellR, offset = 0) {
  return Array.from({ length: count }, (_, i) => {
    const a = offset + (i / count) * Math.PI * 2;
    return [32 + radius * Math.cos(a), 32 + radius * Math.sin(a), cellR];
  });
}

const stages = [
  [[32, 32, 21]],
  [
    [20.5, 32, 12.5],
    [43.5, 32, 12.5],
  ],
  ring(4, 10.5, 10, Math.PI / 4),
  [[32, 32, 7], ...ring(7, 15, 7, -Math.PI / 2)],
  [[32, 32, 5], ...ring(6, 10, 5), ...ring(12, 19.5, 5.2, Math.PI / 12)],
];

function Embryo({ stage }) {
  const cells = stages[Math.min(stage, stages.length - 1)];
  return (
    <svg className="steps__embryo" viewBox="0 0 64 64" aria-hidden="true">
      <circle className="steps__zona" cx="32" cy="32" r="30" />
      {cells.map(([cx, cy, r], i) => (
        <circle key={i} className="steps__cell" cx={cx} cy={cy} r={r} />
      ))}
    </svg>
  );
}

export default function Steps() {
  return (
    <section className="section steps">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{steps.title}</h2>
          <p className="section-subtitle">{steps.subtitle}</p>
        </div>

        <ol className="steps__timeline">
          {steps.items.map((item, i) => (
            <li key={item.step} className="steps__item">
              <Embryo stage={i} />
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
