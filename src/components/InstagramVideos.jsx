import { instagramVideos } from "../content";
import Button from "./Button";
import "./InstagramVideos.css";

export default function InstagramVideos() {
  return (
    <section id="videos" className="section section--mist instagram-videos">
      <div className="container">
        <div className="instagram-videos__head">
          <div className="section-header">
            <h2 className="section-title">{instagramVideos.title}</h2>
            <p className="section-subtitle">{instagramVideos.subtitle}</p>
          </div>
          <Button href={instagramVideos.ctaHref} variant="outline" target="_blank" rel="noopener noreferrer">
            {instagramVideos.ctaLabel}
          </Button>
        </div>

        <div className="instagram-videos__grid">
          {instagramVideos.items.map((video) => (
            <article className="instagram-videos__card" key={video.title}>
              <div className="instagram-videos__player">
                <video
                  controls
                  playsInline
                  preload="none"
                  poster={encodeURI(video.poster)}
                  src={encodeURI(video.src)}
                  aria-label={video.title}
                />
              </div>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
