import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { UserPlusIcon, WalletIcon, RocketIcon } from "./icons/CustomIcons";

const steps = [
  {
    num: 1,
    icon: <UserPlusIcon />,
    title: "Download WayaBank App",
    desc: "It only takes a few minutes to start enjoying free benefits. Download Wayabank on Google Play or the App Store.",
  },
  {
    num: 2,
    icon: <WalletIcon />,
    title: "Verify Your Account",
    desc: "You need to verify your email address, phone number and BVN to ensure your account security.",
  },
  {
    num: 3,
    icon: <RocketIcon />,
    title: "Start Transacting",
    desc: "Start enjoying WayaBank. Make savings, withdrawal, transfers, bills payment and others",
  },
];

export default function HowItWorks() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      className="relative py-12 md:py-20 lg:py-28"
      id="how-it-works"
      ref={ref}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.12em] text-primary mb-4">
            How WayaBank Works
          </span>
          <h2 className="text-[clamp(1.875rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-dark mb-5">
            WayaBank provides users the platform to carryout financial
            activities
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-11 left-[calc(16.66%+44px)] right-[calc(16.66%+44px)] h-0.5 bg-gradient-to-r from-primary via-primary/30 to-primary" />

          <div className="grid lg:grid-cols-3 gap-10 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="text-center relative z-10"
                initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
                animate={
                  inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
                }
                transition={{
                  delay: 0.15 + i * 0.15,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div
                  className="w-[88px] h-[88px] mx-auto mb-6 rounded-full border-[3px] border-primary
                                bg-primary/[0.06] flex items-center justify-center
                                text-3xl font-extrabold text-primary"
                >
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-[0.9375rem] leading-relaxed text-slate-500 max-w-xs mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
