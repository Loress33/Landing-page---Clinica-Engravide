import { useState } from "react";
import { instagramVideos } from "../content";
import Button from "./Button";
import "./InstagramVideos.css";

export default function InstagramVideos() {
  const [activeVideo, setActiveVideo] = useState(null);

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
                <video controls playsInline preload="metadata" src={encodeURI(video.src)} />
                <button
                  type="button"
                  className="instagram-videos__zoom"
                  onClick={() => setActiveVideo(video)}
                >
                  Ampliar
                </button>
              </div>

              <div className="instagram-videos__content">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <p className="instagram-videos__note">
                  Clique no vídeo para abrir maior e ver melhor os controles.
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="instagram-videos__footer">
          <Button href={instagramVideos.ctaHref} variant="outline" target="_blank" rel="noopener noreferrer">
            {instagramVideos.ctaLabel}
          </Button>
        </div>

        {activeVideo ? (
          <div className="instagram-videos__modal" role="dialog" aria-modal="true" aria-label={activeVideo.title}>
            <button
              type="button"
              className="instagram-videos__backdrop"
              onClick={() => setActiveVideo(null)}
              aria-label="Fechar vídeo"
            />
            <div className="instagram-videos__modal-panel">
              <button type="button" className="instagram-videos__close" onClick={() => setActiveVideo(null)} aria-label="Fechar">
                ×
              </button>
              <div className="instagram-videos__modal-player">
                <video controls autoPlay playsInline preload="auto" src={encodeURI(activeVideo.src)} />
              </div>
              <div className="instagram-videos__modal-copy">
                <h3>{activeVideo.title}</h3>
                <p>{activeVideo.description}</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}