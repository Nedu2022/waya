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
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  return (
    <section className="relative py-12 md:py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={
            inView
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 24, filter: "blur(8px)" }
          }
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.12em] text-primary mb-4">
            How WayaBank Works
          </span>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-dark mb-5">
            WayaBank provides users the platform to carryout financial
            activities
          </h2>
          
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="text-center"
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={
                inView
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 28, filter: "blur(8px)" }
              }
              transition={{
                delay: 0.15 + i * 0.15,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="w-16 h-16 mx-auto mb-5 bg-primary/[0.08] text-primary rounded-2xl flex items-center justify-center">
                {step.icon}
              </div>
              <div className="text-xs font-bold text-primary mb-2">
                Step {step.num}
              </div>
              <h3 className="text-[clamp(1rem,1.8vw,1.125rem)] font-bold text-dark mb-2">
                {step.title}
              </h3>
              <p className="text-[clamp(0.8125rem,1.3vw,0.9375rem)] leading-relaxed text-slate-500">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
