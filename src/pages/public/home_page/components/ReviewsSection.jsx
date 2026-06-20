import { useRef, useState, useCallback, useEffect } from "react";

// Google "G" logo SVG
function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

// Star rating
function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="#f4b400"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function VerifiedBadge() {
  return (
    <span
      className="inline-flex items-center justify-center w-[15px] h-[15px] rounded-full bg-[#4285F4] shrink-0"
      aria-label="Verified review"
      title="Verified review"
    >
      <svg width="9" height="9" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
      </svg>
    </span>
  );
}

function getReviewPreview(text, maxChars = 145) {
  const normalized = text.trim().replace(/\s+/g, " ");
  if (normalized.length <= maxChars) {
    return { preview: normalized, isTruncated: false };
  }

  const trimmed = normalized.slice(0, maxChars);
  const lastSpace = trimmed.lastIndexOf(" ");
  const cutoff = lastSpace > maxChars - 30 ? lastSpace : maxChars;
  const preview = trimmed.slice(0, cutoff).replace(/[.\s…]+$/, "");

  return { preview: `${preview}...`, isTruncated: true };
}

function ReviewCard({ review, onReadMore }) {
  if (!review) return null;
  const initial = review.name.charAt(0).toUpperCase();
  const { preview, isTruncated } = getReviewPreview(review.text);

  return (
    <div
      className="w-full shrink-0 flex flex-col justify-between rounded-xl p-5"
      style={{
        minHeight: "200px",
        background: "#1c1c1c",
        border: "1px solid #c9a84c55",
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          {review.avatar ? (
            <img
              src={review.avatar}
              alt={review.name}
              className="w-9 h-9 rounded-full object-cover shrink-0"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0"
              style={{ background: review.color }}
            >
              {initial}
            </div>
          )}
          <div>
            <p className="text-white text-sm font-semibold leading-tight">
              {review.name}
            </p>
            <p className="text-white/40 text-[0.65rem]">{review.ago}</p>
          </div>
        </div>
        <GoogleIcon />
      </div>

      {/* Stars + verified */}
      <div className="flex items-center gap-1.5 mb-3">
        <Stars />
        <VerifiedBadge />
      </div>

      {/* Review text */}
      <p className="text-white/70 text-xs leading-relaxed flex-1 mb-3">
        {preview}
      </p>

      {/* Read more / Google quote */}
      <div className="flex items-end justify-between">
        {isTruncated && (
          <button
            onClick={() => onReadMore(review)}
            className="text-white/40 text-[0.65rem] hover:text-white/70 transition-colors"
          >
            Read more
          </button>
        )}
        <span
          className="text-[#c9a84c] text-2xl leading-none ml-auto"
          aria-hidden="true"
        >
          "
        </span>
      </div>
    </div>
  );
}

// ─── Desktop-only scrollable card ───────────────────────────────────────────
function DesktopReviewCard({ review, onReadMore }) {
  if (!review) return null;
  const initial = review.name.charAt(0).toUpperCase();
  const { preview, isTruncated } = getReviewPreview(review.text);

  return (
    <div
      className="shrink-0 w-[260px] flex flex-col justify-between rounded-xl p-5"
      style={{
        minHeight: "200px",
        background: "#1c1c1c",
        border: "1px solid #c9a84c55",
      }}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          {review.avatar ? (
            <img src={review.avatar} alt={review.name} className="w-9 h-9 rounded-full object-cover shrink-0" referrerPolicy="no-referrer" />
          ) : (
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0" style={{ background: review.color }}>
              {initial}
            </div>
          )}
          <div>
            <p className="text-white text-xs font-semibold leading-tight">{review.name}</p>
            <p className="text-white/40 text-[0.65rem]">{review.ago}</p>
          </div>
        </div>
        <GoogleIcon />
      </div>
      <div className="flex items-center gap-1.5 mb-3">
        <Stars />
        <VerifiedBadge />
      </div>
      <p className="text-white/70 text-xs leading-relaxed flex-1 mb-3">
        {preview}
      </p>
      <div className="flex items-end justify-between">
        {isTruncated && (
          <button onClick={() => onReadMore(review)} className="text-white/40 text-[0.65rem] hover:text-white/70 transition-colors">
            Read more
          </button>
        )}
        <span className="text-[#c9a84c] text-2xl leading-none ml-auto" aria-hidden="true">"</span>
      </div>
    </div>
  );
}

function ReviewModal({ review, onClose }) {
  if (!review) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <button
        aria-label="Close full review"
        className="absolute inset-0 bg-black/75"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-[#c9a84c55] bg-[#151515] p-6 md:p-8">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 h-8 w-8 rounded-full border border-white/25 text-white/80 hover:text-white hover:border-white/50 transition-colors flex items-center justify-center text-xl"
        >
          ×
        </button>

        <div className="mb-4">
          <p className="text-white text-lg font-semibold leading-tight">{review.name}</p>
          <p className="text-white/40 text-xs mt-1">{review.ago}</p>
        </div>

        <div className="flex items-center gap-1.5 mb-4">
          <Stars />
          <VerifiedBadge />
        </div>

        <p className="text-white/80 text-sm leading-7 whitespace-pre-line">
          {review.text}
        </p>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mobileIdx, setMobileIdx] = useState(0);
  const [activeReview, setActiveReview] = useState(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const fetchReviews = async () => {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || "https://api-michaeltraikos.maktechgroup.tech";

      try {
        const response = await fetch(`${baseUrl}/api/reviews`);
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }

        const result = await response.json();

        if (result.success && result.data?.length > 0) {
          const mappedReviews = result.data.map((r, id) => ({
            id,
            name: r.author_name,
            ago: r.relative_time_description,
            avatar: r.profile_photo_url,
            text: r.text.replace(/<br\s*\/?>/gi, "\n"),
            color: ["#e05a2b", "#5b9e6e", "#2e7d9e", "#7b5ea7", "#c0392b", "#1a6e3c"][id % 6],
          }));
          setReviews(mappedReviews);
        }
      } catch (error) {
        console.warn("Could not load reviews from backend:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    if (!activeReview) return;
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, [activeReview]);

  const scrollDesktop = useCallback((dir) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir * 276, behavior: "smooth" });
  }, []);

  const total = reviews.length;

  if (loading) {
    return (
      <section aria-label="Google reviews" className="bg-black py-16 px-4">
        <div className="flex justify-center items-center py-20 w-full">
          <div className="animate-pulse bg-white/5 backdrop-blur-md rounded-2xl h-40 w-full max-w-3xl border border-white/10"></div>
        </div>
      </section>
    );
  }

  if (total === 0) return null;

  return (
    <section aria-label="Google reviews" className="bg-black py-16 px-4">
      <ReviewModal review={activeReview} onClose={() => setActiveReview(null)} />

      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">What Our Clients Say</h2>
      </div>

      {/* ── Mobile layout ── */}
      <div className="md:hidden max-w-[400px] mx-auto w-full">
        <div className="relative">
          <ReviewCard review={reviews[mobileIdx]} onReadMore={setActiveReview} />
          <button
            onClick={() => setMobileIdx((i) => Math.max(0, i - 1))}
            disabled={mobileIdx === 0}
            aria-label="Previous review"
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-white/20 bg-black/70 flex items-center justify-center text-white text-lg disabled:opacity-30 hover:bg-white/10 transition-colors"
          >
            ‹
          </button>
          <button
            onClick={() => setMobileIdx((i) => Math.min(total - 1, i + 1))}
            disabled={mobileIdx === total - 1}
            aria-label="Next review"
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-white/20 bg-black/70 flex items-center justify-center text-white text-lg disabled:opacity-30 hover:bg-white/10 transition-colors"
          >
            ›
          </button>
        </div>
      </div>

      {/* ── Desktop layout ── */}
      <div className="hidden md:flex w-[90%] lg:w-[85%] max-w-7xl mx-auto items-start">
        <div className="relative flex-1 min-w-0">
          <button
            onClick={() => scrollDesktop(-1)}
            aria-label="Previous reviews"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 lg:-translate-x-12 z-10 w-10 h-10 rounded-full border border-white/20 bg-black flex items-center justify-center text-white hover:bg-white/10 transition-colors text-2xl"
          >
            ‹
          </button>
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto pb-4 pt-2 px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review) => (
              <DesktopReviewCard key={review.id} review={review} onReadMore={setActiveReview} />
            ))}
          </div>
          <button
            onClick={() => scrollDesktop(1)}
            aria-label="Next reviews"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 lg:translate-x-12 z-10 w-10 h-10 rounded-full border border-white/20 bg-black flex items-center justify-center text-white hover:bg-white/10 transition-colors text-2xl"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
