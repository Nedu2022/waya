import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  LandmarkIcon,
  LockIcon,
  ShieldCheckIcon,
  HeadphonesIcon,
} from "./icons/CustomIcons";

const items = [
  {
    icon: <LandmarkIcon />,
    title: "CBN Licensed",
    desc: "Fully licensed and regulated by the Central Bank of Nigeria.",
    bg: "bg-primary/[0.07]",
    clr: "text-primary",
  },
  {
    icon: <LockIcon />,
    title: "256-bit Encryption",
    desc: "Your data is protected with highly secure encryption.",
    bg: "bg-accent-blue/[0.07]",
    clr: "text-accent-blue",
  },
  {
    icon: <ShieldCheckIcon />,
    title: "Fraud Protection",
    desc: "Active monitoring to detect and block fraudulent activities.",
    bg: "bg-accent-green/[0.07]",
    clr: "text-accent-green",
  },
  {
    icon: <HeadphonesIcon />,
    title: "24/7 Support",
    desc: "Our dedicated team is always ready to help, day or night.",
    bg: "bg-accent-purple/[0.07]",
    clr: "text-accent-purple",
  },
];

export default function Trust() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      className="relative py-12 md:py-20 lg:py-28 bg-slate-50/70"
      ref={ref}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-accent-green/[0.03] rounded-full blur-3xl animate-blob-delay-2" />
        <div className="absolute inset-0 dot-pattern opacity-25" />
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.12em] text-primary mb-4">
            Trust & Security
          </span>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-dark mb-5">
            Your Money is Safe With Us
          </h2>
          <p className="text-[clamp(0.9375rem,1.5vw,1.0625rem)] leading-relaxed text-slate-500">
            Wayabank is regulated by the Central Bank of Nigeria and uses
            world-class security to protect your finances.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="card-hover bg-white text-center rounded-2xl p-8 border border-slate-100
                         shadow-[0_0_0_1px_rgba(0,0,0,0.02),0_1px_3px_rgba(0,0,0,0.03)]"
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.1 + i * 0.08,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                className={`w-14 h-14 rounded-full ${item.bg} ${item.clr} flex items-center justify-center mx-auto mb-5`}
              >
                {item.icon}
              </div>
              <h3 className="text-[clamp(0.875rem,1.5vw,1rem)] font-bold text-dark mb-2">
                {item.title}
              </h3>
              <p className="text-[clamp(0.8125rem,1.2vw,0.875rem)] leading-relaxed text-slate-500">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
