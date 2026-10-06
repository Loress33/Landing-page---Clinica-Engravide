import { testimonials } from "../content";
import Button from "./Button";
import "./Testimonials.css";

export default function Testimonials() {
  const video = testimonials.featuredVideo;

  return (
    <section id="depoimentos" className="section testimonials">
      <div className="container">
        <div className="testimonials__featured">
          <div className="testimonials__video-player">
            <video
              controls
              playsInline
              preload="none"
              poster={encodeURI(video.poster)}
              src={encodeURI(video.src)}
              aria-label={video.title}
            />
          </div>

          <div className="testimonials__intro">
            <h2 className="section-title">{testimonials.title}</h2>
            <p className="section-subtitle">{testimonials.subtitle}</p>
            <p className="testimonials__video-note">{video.description}</p>
            <Button href={video.ctaHref} variant="outline" target="_blank" rel="noopener noreferrer">
              {video.ctaLabel}
            </Button>
          </div>
        </div>

        <ul className="testimonials__reviews">
          {testimonials.writtenReviews.map((review) => (
            <li className="testimonials__review" key={review.author}>
              <blockquote>
                <p>{review.text}</p>
              </blockquote>
              <p className="testimonials__author">
                <strong>{review.author}</strong>
                <span>Avaliação no {review.source}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
