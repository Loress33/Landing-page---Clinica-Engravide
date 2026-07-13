import { useState } from "react";
import { quickForm, site } from "../content";
import "./QuickForm.css";

const initialState = { name: "", phone: "", age: "", tryingTime: "" };

export default function QuickForm() {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sem backend: monta a mensagem e abre o WhatsApp já preenchido.
    // Se no futuro vocês quiserem salvar os leads (planilha, CRM, e-mail),
    // é só trocar este bloco por uma chamada fetch() para a API de vocês.
    const message = [
      "Olá! Gostaria de agendar uma consulta.",
      `Nome: ${form.name}`,
      `Telefone: ${form.phone}`,
      `Idade: ${form.age}`,
      form.tryingTime ? `Tempo tentando engravidar: ${form.tryingTime}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form className="quick-form" onSubmit={handleSubmit}>
      <div className="quick-form__text">
        <h3>{quickForm.title}</h3>
        <p>{quickForm.subtitle}</p>
      </div>

      <div className="quick-form__row">
        <div className="quick-form__fields">
          <div className="quick-form__field">
            <label htmlFor="qf-name">{quickForm.fields.name}</label>
            <input
              id="qf-name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Seu nome"
            />
          </div>

          <div className="quick-form__field">
            <label htmlFor="qf-phone">{quickForm.fields.phone}</label>
            <input
              id="qf-phone"
              name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="(11) 99999-9999"
            />
          </div>

          <div className="quick-form__field">
            <label htmlFor="qf-age">{quickForm.fields.age}</label>
            <input
              id="qf-age"
              name="age"
              type="number"
              min="18"
              max="60"
              required
              value={form.age}
              onChange={handleChange}
              placeholder="Idade"
            />
          </div>

          <div className="quick-form__field">
            <label htmlFor="qf-trying">{quickForm.fields.tryingTime}</label>
            <select
              id="qf-trying"
              name="tryingTime"
              required
              value={form.tryingTime}
              onChange={handleChange}
            >
              <option value="" disabled>
                Selecione
              </option>
              {quickForm.tryingTimeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="quick-form__submit">
          <span className="quick-form__label-spacer" aria-hidden="true">
            &nbsp;
          </span>
          <button type="submit" className="btn btn--primary">
            {quickForm.submitLabel}
          </button>
        </div>
      </div>

      <span className="quick-form__disclaimer">{quickForm.disclaimer}</span>
    </form>
  );
}
