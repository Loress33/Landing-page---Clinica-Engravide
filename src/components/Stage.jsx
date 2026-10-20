import { useEffect, useRef, useState } from "react";
import { stagePhotos } from "../content";
import "./Stage.css";

const keys = Object.keys(stagePhotos);

// Loop sem som; só baixa e toca quando a sua seção está ativa
function StageVideo({ photo, on }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (on && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (started) video.play().catch(() => {});
      else setStarted(true);
    } else {
      video.pause();
    }
  }, [on, started]);

  return (
    <video
      ref={ref}
      className={`stage__photo ${on ? "stage__photo--on" : ""}`}
      src={started ? photo.video : undefined}
      poster={photo.src}
      muted
      loop
      playsInline
      preload="none"
      aria-label={photo.alt}
    />
  );
}

/**
 * Página dividida: à esquerda a folha com o texto (os filhos), à direita
 * uma foto que não sai do lugar. Cada seção da folha diz qual foto quer
 * com data-photo="retrato | recepcao | consultorio | video"; quando a seção passa
 * pelo meio da tela, a foto troca devagar.
 */
export default function Stage({ children }) {
  const [active, setActive] = useState(keys[0]);
  const sheetRef = useRef(null);

  useEffect(() => {
    const sections = sheetRef.current?.querySelectorAll("[data-photo]");
    if (!sections?.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.dataset.photo);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="split">
      <figure className="stage" aria-live="off">
        {keys.map((key, i) => {
          const photo = stagePhotos[key];
          const on = active === key;
          if (photo.video) {
            return <StageVideo key={key} photo={photo} on={on} />;
          }
          return (
            <img
              key={key}
              className={`stage__photo ${on ? "stage__photo--on" : ""}`}
              src={photo.src}
              srcSet={`${photo.srcSmall} 720w, ${photo.src} 1100w`}
              sizes="(max-width: 899px) 100vw, 50vw"
              alt={photo.alt}
              width="1100"
              height="1375"
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "auto"}
              decoding={i === 0 ? "sync" : "async"}
            />
          );
        })}
        <figcaption className="stage__bar">
          <span>{stagePhotos[active].caption}</span>
          <span>{stagePhotos[active].detail}</span>
        </figcaption>
      </figure>

      <div className="split__sheet" ref={sheetRef}>
        {children}
      </div>
    </div>
  );
}
