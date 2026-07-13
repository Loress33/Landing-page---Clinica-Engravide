import { testimonials } from "../content";
import Button from "./Button";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="section testimonials">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">{testimonials.eyebrow}</span>
          <h2 className="section-title">{testimonials.title}</h2>
          <p className="section-subtitle">{testimonials.subtitle}</p>
        </div>

        <div className="testimonials__featured-video">
          <div className="testimonials__video-player">
            <video controls playsInline preload="metadata" src={encodeURI(testimonials.featuredVideo.src)} />
          </div>

          <div className="testimonials__video-copy">
            <h3>{testimonials.featuredVideo.title}</h3>
            <p>{testimonials.featuredVideo.description}</p>
            <Button
              href={testimonials.featuredVideo.ctaHref}
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {testimonials.featuredVideo.ctaLabel}
            </Button>
          </div>
        </div>

        <div className="testimonials__reviews">
          {testimonials.writtenReviews.map((review, i) => (
            <div className="testimonials__review" key={i}>
              <div className="testimonials__stars">★★★★★</div>
              <p>&ldquo;{review.text}&rdquo;</p>
              <div className="testimonials__author">
                <strong>{review.author}</strong>
                <span>{review.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
