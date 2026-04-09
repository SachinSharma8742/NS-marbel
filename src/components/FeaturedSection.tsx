import { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

/* ── Product Data ─────────────────────────────────────────────── */
const productData: Record<number, string> = {
  1: "Krishna Murti (Dancing Pose)",
  2: "Nandi / Kamdhenu Cow Statue",
  3: "Durga Mata Murti (Lion Mount, Multi Arms)",
  4: "Lord Ganesha Murti (Seated on Lotus)",
  5: "Krishna Murti Pair (Dancing)",
  6: "Durga Mata Murti (Lion Mount, Alternate Style)",
  8: "Hanuman Ji Murti (Carrying Mountain & Gada)",
  9: "Radha Krishna Murti (Seated with Cow)",
  12: "Saraswati Mata Murti (Veena, White Marble)",
  13: "Lord Ganesha Murti (Seated, Colored)",
  14: "Lord Shiva Murti (Standing with Trishul & Nandi)",
  15: "Lord Ganesha Murti (White Marble, Arch Frame)",
  16: "Bal Krishna Murti (Child Krishna on Lotus)",
  17: "Lakshmi Narayan Murti (Seated Pair)",
  18: "Ram Parivar Murti (Standing Figures)",
  19: "Krishna Murti (White Marble, Flute Pose)",
  20: "Krishna Murti Pair (Standing on Lotus Base)",
  21: "Krishna Murti Pair (Black & White Variant)"
};

const allIds = [1, 2, 3, 4, 5, 6, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

interface Product {
  id: number;
  title: string;
  image: string;
  alt: string;
}

/* ── Fisher-Yates shuffle ─────────────────────────────────────── */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ── Scrolling Row Component ──────────────────────────────────── */
const SPEED = 0.6;          // px per frame
const RESUME_DELAY = 2000;  // ms after drag release

interface ScrollRowProps {
  items: Product[];
  direction: 'left' | 'right';
  progress: any; // scrollYProgress for parallax
}

function ScrollRow({ items, direction, progress }: ScrollRowProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const offsetRef = useRef(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [, forceRender] = useState(0);

  // Parallax transform
  const yTranslate = useTransform(progress, [0, 1], direction === 'left' ? [-20, 20] : [20, -20]);

  // Triple the items for seamless infinite loop
  const tripled = useMemo(() => [...items, ...items, ...items], [items]);

  // Measure one "set" width
  const getSetWidth = useCallback(() => {
    if (!trackRef.current) return 0;
    return trackRef.current.scrollWidth / 3;
  }, []);

  // Core animation tick
  const tick = useCallback(() => {
    if (isDragging.current) {
      animRef.current = requestAnimationFrame(tick);
      return;
    }

    const setW = getSetWidth();
    if (setW === 0) {
      animRef.current = requestAnimationFrame(tick);
      return;
    }

    if (direction === 'left') {
      offsetRef.current -= SPEED;
      if (offsetRef.current <= -setW) offsetRef.current += setW;
    } else {
      offsetRef.current += SPEED;
      if (offsetRef.current >= 0) offsetRef.current -= setW;
    }

    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
    }

    animRef.current = requestAnimationFrame(tick);
  }, [direction, getSetWidth]);

  // Start animation
  useEffect(() => {
    // Initialize right-scrolling row to start from -setW so it scrolls right
    if (direction === 'right') {
      const setW = getSetWidth();
      if (setW > 0) offsetRef.current = -setW;
    }
    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, [tick, direction, getSetWidth]);

  // ── Drag handlers ──────────────────────────────────────────
  const startDrag = useCallback((clientX: number) => {
    isDragging.current = true;
    dragStartX.current = clientX;
    dragStartOffset.current = offsetRef.current;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  }, []);

  const moveDrag = useCallback((clientX: number) => {
    if (!isDragging.current) return;
    const delta = clientX - dragStartX.current;
    let newOffset = dragStartOffset.current + delta;

    // Wrap within bounds
    const setW = getSetWidth();
    if (setW > 0) {
      while (newOffset > 0) newOffset -= setW;
      while (newOffset < -setW) newOffset += setW;
    }

    offsetRef.current = newOffset;
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
    }
  }, [getSetWidth]);

  const endDrag = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    resumeTimer.current = setTimeout(() => {
      forceRender((n) => n + 1); // triggers re-render, animation continues from offsetRef
    }, RESUME_DELAY);
  }, []);

  // Mouse events
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    startDrag(e.clientX);
  }, [startDrag]);

  const onMouseMove = useCallback((e: React.MouseEvent) => moveDrag(e.clientX), [moveDrag]);
  const onMouseUp = useCallback(() => endDrag(), [endDrag]);
  const onMouseLeave = useCallback(() => { if (isDragging.current) endDrag(); }, [endDrag]);

  // Touch events
  const onTouchStart = useCallback((e: React.TouchEvent) => startDrag(e.touches[0].clientX), [startDrag]);
  const onTouchMove = useCallback((e: React.TouchEvent) => moveDrag(e.touches[0].clientX), [moveDrag]);
  const onTouchEnd = useCallback(() => endDrag(), [endDrag]);

  return (
    <div
      className="relative w-full py-6"
      style={{ overflowX: 'clip', overflowY: 'visible', cursor: isDragging.current ? 'grabbing' : 'grab' }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Fade masks on edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10"
           style={{ background: 'linear-gradient(to right, #0B0B0C, transparent)' }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10"
           style={{ background: 'linear-gradient(to left, #0B0B0C, transparent)' }} />

      <div
        ref={trackRef}
        className="flex gap-5 will-change-transform select-none"
        style={{ transform: `translate3d(${offsetRef.current}px, 0, 0)` }}
      >
        {tripled.map((item, i) => (
          <motion.div
            key={`${item.id}-${i}`}
            className="flex-shrink-0 group"
            style={{ width: '280px', y: yTranslate }}
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-3 gold-glow-hover transition-shadow duration-500">
              <img
                src={item.image}
                alt={item.alt}
                draggable={false}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Title on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="font-serif text-sm text-marble leading-tight">{item.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── Main Section ─────────────────────────────────────────────── */
export default function FeaturedSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const inView = useInView(ref, { once: true, margin: '-80px' });

  // Shuffle on mount → random placement each time
  const [row1, row2] = useMemo(() => {
    const shuffled = shuffle(
      allIds.map((id) => ({
        id,
        title: productData[id],
        image: `/images/processed/img_${id}.png`,
        alt: productData[id],
      }))
    );
    const mid = Math.ceil(shuffled.length / 2);
    return [shuffled.slice(0, mid), shuffled.slice(mid)];
  }, []);

  return (
    <section ref={ref} id="collection" className="relative w-full py-24 overflow-hidden bg-[#0D0D0E]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-[clamp(34px,4vw,56px)] text-marble mb-3">
            Divine <em className="text-gradient-gold italic">Forms</em>
          </h2>
          <p className="font-sans font-light text-secondary text-sm tracking-ultra uppercase">
            Hand-carved Makrana marble · Custom sizes available
          </p>
        </motion.div>
      </div>

      {/* Row 1 — scrolls left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="mb-5"
      >
        <ScrollRow items={row1} direction="left" progress={scrollYProgress} />
      </motion.div>

      {/* Row 2 — scrolls right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <ScrollRow items={row2} direction="right" progress={scrollYProgress} />
      </motion.div>
    </section>
  );
}
