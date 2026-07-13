import { instagramVideos } from "../content";
import Button from "./Button";
import "./InstagramVideos.css";

export default function InstagramVideos() {
  return (
    <section id="videos" className="section section--soft instagram-videos">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">{instagramVideos.eyebrow}</span>
          <h2 className="section-title">{instagramVideos.title}</h2>
          <p className="section-subtitle">{instagramVideos.subtitle}</p>
        </div>

        <div className="instagram-videos__grid">
          {instagramVideos.items.map((video) => (
            <article className="instagram-videos__card" key={video.title}>
              <div className="instagram-videos__player">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={encodeURI(video.poster)}
                  src={encodeURI(video.src)}
                />
              </div>

              <div className="instagram-videos__content">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <p className="instagram-videos__note">Use os controles do player para assistir.</p>
              </div>
            </article>
          ))}
        </div>

        <div className="instagram-videos__footer">
          <Button href={instagramVideos.ctaHref} variant="outline" target="_blank" rel="noopener noreferrer">
            {instagramVideos.ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}