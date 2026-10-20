import { useState } from "react";
import { intake, site, whatsappUrl } from "../content";
import "./Intake.css";

// A mesma regra do FAQ: até 35 anos, investigar após 12 meses de
// tentativa; a partir dos 35, após 6 meses; com diagnóstico ou histórico,
// sem esperar prazo.
function guidance({ age, option, chosen }) {
  const medical = chosen.filter((item) => !intake.planningItems.includes(item));
  const planning = chosen.length > medical.length;

  if (medical.length) {
    return "Com o que você marcou, a orientação é buscar avaliação sem esperar um prazo de tentativas.";
  }
  if (!age || !option) {
    return planning ? "Para planejar o caminho, a consulta pode acontecer a qualquer momento." : null;
  }
  const years = Number(age);
  const limit = years >= 35 ? 6 : 12;
  if (option.months === 0) {
    return planning
      ? "Para planejar o caminho, a consulta pode acontecer a qualquer momento."
      : "Antes de começar a tentar, uma consulta de planejamento ajuda a chegar com tudo em dia.";
  }
  if (option.months >= limit) {
    return `Com ${years} anos e tentando ${option.phrase}, já é hora de investigar.`;
  }
  return `${years >= 35 ? "A partir dos 35 anos" : "Até os 35 anos"}, a referência é investigar após ${limit} meses de tentativa. Se algo preocupa você, a consulta pode ser antes.`;
}

export default function Intake() {
  const [form, setForm] = useState({ name: "", age: "", tryingTime: "" });
  const [selected, setSelected] = useState([]);

  const allItems = intake.groups.flatMap((g) => g.items);
  const chosen = allItems.filter((item) => selected.includes(item));
  const option = intake.tryingTimeOptions.find((o) => o.label === form.tryingTime);
  const validAge = Number(form.age) >= 18 && Number(form.age) <= 60 ? form.age : "";
  const advice = guidance({ age: validAge, option, chosen });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggle = (item) =>
    setSelected((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]));

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sem backend: monta a mensagem e abre o WhatsApp já preenchido.
    // Se no futuro vocês quiserem salvar os leads (planilha, CRM, e-mail),
    // é só trocar este bloco por uma chamada fetch() para a API de vocês.
    const message = [
      site.whatsappMessage,
      `Nome: ${form.name}`,
      `Idade: ${form.age}`,
      `Tempo tentando engravidar: ${form.tryingTime}`,
      chosen.length ? "Me identifiquei com:" : null,
      ...chosen.map((item) => `- ${item}`),
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  };

  let row = 0;

  return (
    <section id="agendar" className="sheet__section intake" data-photo="consultorio">
      <div className="sheet__col">
        <h2 data-reveal>{intake.title}</h2>
        <p className="intake__intro" data-reveal style={{ "--i": 1 }}>
          {intake.subtitle}
        </p>

        <form className="intake__form" onSubmit={handleSubmit}>
          <div className="intake__fields" data-reveal style={{ "--i": 2 }}>
            <div className="intake__field intake__field--wide">
              <label htmlFor="in-name">{intake.fields.name}</label>
              <input
                id="in-name"
                name="name"
                type="text"
                autoComplete="given-name"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="intake__field">
              <label htmlFor="in-age">{intake.fields.age}</label>
              <input
                id="in-age"
                name="age"
                type="number"
                inputMode="numeric"
                min="18"
                max="60"
                required
                value={form.age}
                onChange={handleChange}
              />
            </div>
            <div className="intake__field intake__field--time">
              <label htmlFor="in-trying">{intake.fields.tryingTime}</label>
              <select id="in-trying" name="tryingTime" required value={form.tryingTime} onChange={handleChange}>
                <option value="" disabled>
                  Selecione
                </option>
                {intake.tryingTimeOptions.map((opt) => (
                  <option key={opt.label} value={opt.label}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {intake.groups.map((group) => (
            <fieldset className="intake__group" key={group.label}>
              <legend>{group.label}</legend>
              <ul>
                {group.items.map((item) => {
                  const isOn = selected.includes(item);
                  row += 1;
                  return (
                    <li key={item} data-reveal style={{ "--i": row % 4 }}>
                      <label className={`intake__row ${isOn ? "intake__row--on" : ""}`}>
                        <input
                          type="checkbox"
                          className="visually-hidden"
                          checked={isOn}
                          onChange={() => toggle(item)}
                        />
                        <span className="intake__dot" aria-hidden="true" />
                        <span className="intake__name">{item}</span>
                        <span className="intake__state" aria-hidden="true">
                          {isOn ? "marcado" : ""}
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </fieldset>
          ))}

          <div className="intake__result" aria-live="polite">
            <p className={`lead intake__advice ${advice ? "" : "intake__advice--empty"}`} key={advice || "empty"}>
              {advice || "Preencha sua idade e o tempo de tentativa para ver a orientação."}
            </p>
            <p className="intake__note">{intake.note}</p>
          </div>

          <button type="submit" className="btn intake__submit">
            {intake.submitLabel}
          </button>
          <p className="intake__note">{intake.disclaimer}</p>
        </form>
      </div>
    </section>
  );
}
