import {
  Children,
  KeyboardEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type CarouselProps = {
  children: ReactNode;
  initialIndex?: number;
  index?: number;
  onIndexChange?: (index: number) => void;
  loop?: boolean;
  showDots?: boolean;
  showArrows?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
};

export function Carousel({
  children,
  initialIndex = 0,
  index: controlledIndex,
  onIndexChange,
  loop = true,
  showDots = true,
  showArrows = true,
  autoPlay = false,
  autoPlayInterval = 5000,
  className = "",
}: CarouselProps) {
  const slides = Children.toArray(children);
  const count = slides.length;

  const [internalIndex, setInternalIndex] = useState(initialIndex);
  const index = controlledIndex ?? internalIndex;

  const touchStartX = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const setIndex = useCallback(
    (nextIndex: number) => {
      if (count === 0) return;

      let newIndex = nextIndex;

      if (loop) {
        newIndex = (nextIndex + count) % count;
      } else {
        newIndex = Math.max(0, Math.min(nextIndex, count - 1));
      }

      if (controlledIndex === undefined) {
        setInternalIndex(newIndex);
      }

      onIndexChange?.(newIndex);
    },
    [count, loop, controlledIndex, onIndexChange],
  );

  const next = useCallback(() => {
    setIndex(index + 1);
  }, [index, setIndex]);

  const previous = useCallback(() => {
    setIndex(index - 1);
  }, [index, setIndex]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        next();
        break;

      case "ArrowLeft":
        event.preventDefault();
        previous();
        break;

      case "Home":
        event.preventDefault();
        setIndex(0);
        break;

      case "End":
        event.preventDefault();
        setIndex(count - 1);
        break;
    }
  };

  // Auto play
  useEffect(() => {
    if (!autoPlay || count <= 1 || isPaused) return;

    const interval = setInterval(() => {
      next();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, count, isPaused, next]);

  // Keep index valid if slide count changes
  useEffect(() => {
    if (index >= count && count > 0) {
      setIndex(count - 1);
    }
  }, [count, index, setIndex]);

  if (!count) return null;

  return (
    <div
      className={`relative w-full outline-none focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-4 ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={(event) => {
        setIsPaused(true);
        touchStartX.current = event.touches[0].clientX;
      }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null) return;

        const endX = event.changedTouches[0].clientX;
        const delta = touchStartX.current - endX;

        if (Math.abs(delta) > 50) {
          delta > 0 ? next() : previous();
        }

        touchStartX.current = null;

        // Resume autoplay after interaction
        setIsPaused(false);
      }}
    >
      {/* Viewport */}
      <div className="w-full overflow-hidden rounded-xl">
        {/* Track */}
        <div
          className="flex will-change-transform"
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: "transform 350ms ease",
          }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="min-w-0 flex-[0_0_100%]"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              aria-hidden={i !== index}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      {showArrows && (
        <>
          <button
            type="button"
            onClick={previous}
            disabled={!loop && index === 0}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-xl transition hover:bg-black/80"
          >
            <IoIosArrowBack color="white" />
          </button>

          <button
            type="button"
            onClick={next}
            disabled={!loop && index === count - 1}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-xl transition hover:bg-black/80"
          >
            <IoIosArrowForward color="white" />
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && (
        <div
          className="mt-3 flex justify-center gap-2"
          aria-label="Choose slide"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all duration-200 ${
                i === index
                  ? "w-6 bg-gray-900"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
