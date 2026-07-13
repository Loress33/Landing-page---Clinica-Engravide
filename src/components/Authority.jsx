import { authority } from "../content";
import ImagePlaceholder from "./ImagePlaceholder";
import Icon from "./Icon";
import "./Authority.css";

export default function Authority() {
  return (
    <section id="autoridade" className="section authority">
      <div className="container authority__inner">
        <div className="authority__media">
          <ImagePlaceholder label={authority.photoLabel} src={authority.photoSrc} ratio="4 / 5" />
        </div>

        <div className="authority__content">
          <span className="eyebrow">{authority.eyebrow}</span>
          <h2 className="section-title">{authority.title}</h2>
          <p className="authority__bio">{authority.bio}</p>

          <ul className="authority__credentials">
            {authority.credentials.map((item) => (
              <li key={item}>
                <Icon name="check" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="authority__badges">
            {authority.badges.map((badge) => (
              <span key={badge} className="authority__badge">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
