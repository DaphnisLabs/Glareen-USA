import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

const showcaseItems = [
  {
    id: "showcase-1",
    video: "/showcase/videos/showcase-1.mp4",
  },
  {
    id: "showcase-2",
    video: "/showcase/videos/showcase-2.mp4",
  },
  {
    id: "showcase-3",
    video: "/showcase/videos/showcase-3.mp4",
  },
  {
    id: "showcase-4",
    video: "/showcase/videos/showcase-4.mp4",
  },
];

const ProductShowcase = () => {
  const scrollRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < maxScrollLeft - 2);
  };

  const scrollLeft = () => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollBy({
      left: -340,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollBy({
      left: 340,
      behavior: "smooth",
    });
  };

  const openVideo = (item) => {
    setActiveVideo(item);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      updateScrollState();
    }, 50);

    const handleResize = () => updateScrollState();

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!activeVideo) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeVideo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideo]);

  return (
    <>
      <section className="w-full py-10 md:py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#343434]">
              Showcase
            </h2>
          </div>

          <div className="relative">
            {canScrollLeft && (
              <button
                type="button"
                onClick={scrollLeft}
                aria-label="Scroll showcase left"
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-white/95 border border-gray-200 shadow-md flex items-center justify-center hover:bg-white"
              >
                <ChevronLeft className="h-5 w-5 text-gray-800" />
              </button>
            )}

            {canScrollRight && (
              <button
                type="button"
                onClick={scrollRight}
                aria-label="Scroll showcase right"
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-white/95 border border-gray-200 shadow-md flex items-center justify-center hover:bg-white"
              >
                <ChevronRight className="h-5 w-5 text-gray-800" />
              </button>
            )}

            <div
              ref={scrollRef}
              onScroll={updateScrollState}
              className="overflow-x-auto scroll-smooth touch-pan-x px-4 sm:px-6 md:px-10 pb-3 premium-scrollbar"
            >
              <div className="flex gap-5 py-2 w-max">
                {showcaseItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => openVideo(item)}
                    className="relative flex-shrink-0 w-[260px] sm:w-[290px] h-[460px] sm:h-[520px] overflow-hidden rounded-[24px] bg-black shadow-[0_14px_40px_rgba(0,0,0,0.14)]"
                  >
                    <video
                      src={item.video}
                      muted
                      loop
                      autoPlay
                      playsInline
                      preload="metadata"
                      fetchpriority="high"
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute left-4 top-4 rounded-full bg-black/45 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-white/90 backdrop-blur-sm">
                      PREVIEW
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-black/35 backdrop-blur-sm">
                        <Play
                          className="h-8 w-8 text-white ml-1"
                          fill="currentColor"
                        />
                      </div>
                    </div>

                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-black/55 px-5 py-3 text-center backdrop-blur-sm">
                      <p className="text-[11px] font-semibold tracking-[0.16em] text-white uppercase whitespace-nowrap">
                        Tap to watch full video
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {activeVideo && (
        <div
          className="fixed inset-0 z-[80] bg-black/80 flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-md sm:max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeVideo}
              aria-label="Close video"
              className="absolute -top-12 right-0 h-10 w-10 rounded-full bg-white/10 text-white flex items-center justify-center backdrop-blur-sm hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="overflow-hidden rounded-[24px] bg-black shadow-2xl">
              <video
                key={activeVideo.id}
                src={activeVideo.video}
                controls
                autoPlay
                playsInline
                className="w-full max-h-[85vh] bg-black"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductShowcase;