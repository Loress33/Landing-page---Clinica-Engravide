import { useEffect, useRef } from "react";
import "./VideoDialog.css";

/**
 * Vídeo completo, com som e controles, numa janela por cima da página.
 * `video` = { src, poster, title } ou null (fechado).
 */
export default function VideoDialog({ video, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (video && !dialog.open) dialog.showModal();
    if (!video && dialog.open) dialog.close();
  }, [video]);

  return (
    <dialog
      ref={ref}
      className="player"
      aria-label={video?.title}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
    >
      {video ? (
        <div className="player__inner">
          <video
            className="player__video"
            src={encodeURI(video.src)}
            poster={encodeURI(video.poster)}
            controls
            autoPlay
            playsInline
          />
          <div className="player__bar">
            <p>{video.title}</p>
            <button type="button" className="btn btn--tone" onClick={onClose}>
              Fechar
            </button>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
