import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    value: 500000,
    suffix: "+",
    prefix: "",
    label: "Active Users",
    display: "500K",
  },
  {
    value: 2,
    suffix: "B+",
    prefix: "₦",
    label: "Daily Transactions",
    display: "₦2B",
  },
  {
    value: 150,
    suffix: "+",
    prefix: "",
    label: "Business Partners",
    display: "150",
  },
  {
    value: 99.9,
    suffix: "%",
    prefix: "",
    label: "Customer Satisfaction",
    display: "99.9",
  },
];

function Counter({ value, suffix, prefix, inView }) {
  const count = useMotionValue(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1],
      });
      return () => controls.stop();
    }
  }, [inView, value, count]);

  const display = useTransform(count, (v) => {
    let fmt = "";
    if (value >= 1000) {
      fmt = `${(v / 1000).toFixed(0)}K`;
    } else if (value % 1 !== 0) {
      fmt = v.toFixed(1);
    } else {
      fmt = Math.floor(v).toString();
    }
    return `${prefix}${fmt}${suffix}`;
  });

  return <motion.span>{display}</motion.span>;
}

export default function Stats() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section
      className="relative bg-navy py-12 lg:py-20 overflow-hidden"
      ref={ref}
    >
      {/* Subtle blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-primary/[0.06] rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-10 w-[250px] h-[250px] bg-accent-blue/[0.05] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10 lg:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center"
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="text-[clamp(1.5rem,5vw,2.5rem)] font-extrabold text-primary tracking-tight mb-1">
                <Counter
                  value={s.value}
                  suffix={s.suffix}
                  prefix={s.prefix}
                  inView={inView}
                />
              </div>
              <div className="text-sm text-white/50 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
