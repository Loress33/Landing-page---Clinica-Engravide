import { authority } from "../content";
import ImagePlaceholder from "./ImagePlaceholder";
import "./Authority.css";

export default function Authority() {
  return (
    <section id="autoridade" className="section authority">
      <div className="container authority__inner">
        <div className="authority__media">
          <ImagePlaceholder label={authority.photoLabel} src={authority.photoSrc} ratio="4 / 5" />
          <p className="authority__registry">
            {authority.badges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </p>
        </div>

        <div className="authority__content">
          <h2 className="section-title">{authority.title}</h2>
          <p className="authority__bio">{authority.bio}</p>

          <ul className="authority__credentials">
            {authority.credentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
