import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "./Gallery.css";

const images = [
  { src: "/src/assets/gallery/Picture1.jpg", alt: "LSPP highlight 1" },
  { src: "/src/assets/gallery/Picture2.jpg", alt: "LSPP highlight 2" },
  { src: "/src/assets/gallery/Picture3.jpg", alt: "LSPP highlight 3" },
  { src: "/src/assets/gallery/Picture4.jpg", alt: "LSPP highlight 4" },
  { src: "/src/assets/gallery/Picture5.jpg", alt: "LSPP highlight 5" },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  function prev() {
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  }

  function next() {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  }

  function openLightbox(i: number) {
    setCurrent(i);
    setLightboxOpen(true);
  }

  function closeLightbox() {
    setLightboxOpen(false);
  }

  return (
    <section className="gl-section">
      <div className="gl-header">
        <p className="gl-eyebrow">Memories</p>
        <h2 className="gl-heading">Pixel-Perfect Highlights</h2>
        <p className="gl-sub">
          Some nostalgic memoREELs from the Student Partnership Program.
        </p>
      </div>

      <div className="gl-carousel">
        <button
          className="gl-btn gl-btn-left"
          onClick={prev}
          aria-label="Previous image"
        >
          <ChevronLeft size={22} />
        </button>

        <div className="gl-track">
          {images.map((img, i) => (
            <div
              key={i}
              className={`gl-slide ${i === current ? "gl-slide--active" : ""} ${
                i === (current - 1 + images.length) % images.length
                  ? "gl-slide--prev"
                  : ""
              } ${i === (current + 1) % images.length ? "gl-slide--next" : ""}`}
              onClick={() => openLightbox(i)}
            >
              <img src={img.src} alt={img.alt} />
              <div className="gl-slide-overlay">
                <span>View</span>
              </div>
            </div>
          ))}
        </div>

        <button
          className="gl-btn gl-btn-right"
          onClick={next}
          aria-label="Next image"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <div className="gl-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`gl-dot ${i === current ? "gl-dot--active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>

      {lightboxOpen && (
        <div className="gl-lightbox" onClick={closeLightbox}>
          <button
            className="gl-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <button
            className="gl-lightbox-btn gl-lightbox-btn--left"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="gl-lightbox-img" onClick={(e) => e.stopPropagation()}>
            <img src={images[current].src} alt={images[current].alt} />
          </div>

          <button
            className="gl-lightbox-btn gl-lightbox-btn--right"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>

          <div className="gl-lightbox-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`gl-dot ${i === current ? "gl-dot--active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrent(i);
                }}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
