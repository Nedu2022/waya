import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SendIcon,
  ReceiptIcon,
  WalletIcon,
  PiggyBankIcon,
  TrendingUpIcon,
  ShieldIcon,
  WayaArrowIcon,
} from "./icons/CustomIcons";
import PremiumBackground from "./PremiumBackground";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const phoneY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 80]), {
    stiffness: 60,
    damping: 30,
  });
  const phoneScale = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [1, 0.96]),
    { stiffness: 60, damping: 30 },
  );

  return (
    <section
      className="relative pt-28 pb-12 md:pt-36 md:pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-[#FAFAFA]"
      ref={(el) => {
        ref(el);
        sectionRef.current = el;
      }}
    >
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <PremiumBackground />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-slate-200/60
                         rounded-full text-[0.8125rem] font-semibold text-slate-800 mb-8 shadow-sm"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(255,107,0,0.8)]" />
              CBN Licensed Digital Bank
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[clamp(2.25rem,5.5vw,4.25rem)] font-extrabold leading-[1.05]
                         tracking-tight text-dark mb-6"
            >
              Digital Banking:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#FF8F3F]">
                10X Better, Faster
              </span>{" "}
              & Cheaper!
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[clamp(0.9375rem,1.5vw,1.125rem)] leading-relaxed text-slate-500 mb-10 max-w-[480px]"
            >
              Wire your money, your way. Bank of the new age, digitally built
              for you! Open an account in minutes, send money, pay bills, access
              loans all from one powerful app.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4 mb-14"
            >
              <a
                href="https://wayabank.ng/register"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-semibold
                            rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.05),0_8px_24px_rgba(255,107,0,0.25)]
                            hover:shadow-[0_4px_12px_rgba(0,0,0,0.1),0_12px_32px_rgba(255,107,0,0.4)]
                            hover:-translate-y-1 transition-all duration-400 ease-[0.16,1,0.3,1] overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-[0.16,1,0.3,1]" />
                <span className="relative z-10">Create Free Account</span>
                <span className="relative z-10 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors duration-400">
                  <WayaArrowIcon />
                </span>
              </a>
              <a
                href="https://wayabank.ng/api-docs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-800 font-semibold
                            rounded-2xl border border-slate-200/80 shadow-sm
                            hover:bg-white hover:border-slate-300 hover:shadow-md hover:-translate-y-1 transition-all duration-400 ease-[0.16,1,0.3,1]"
              >
                API Documentation
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex gap-10">
              {[
                { value: "500K+", label: "Active Users" },
                { value: "₦2B+", label: "Daily Volume" },
                { value: "99.9%", label: "Uptime" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-[clamp(1.25rem,3vw,1.75rem)] font-extrabold text-dark tracking-tight">
                    {s.value}
                  </span>
                  <span className="text-[clamp(0.6875rem,1vw,0.8125rem)] font-medium text-slate-400">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex justify-center lg:justify-end"
            style={{ y: phoneY, scale: phoneScale }}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]
                            rounded-full bg-gradient-radial from-primary/10 to-transparent animate-pulse-glow"
            />

            <div className="relative z-10 animate-float-delay">
              <div className="phone-mockup w-[280px] h-[560px] lg:w-[300px] lg:h-[600px] rounded-[40px] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-dark to-[#0F0F1A] p-6 pt-14 flex flex-col">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <p className="text-white/50 text-xs">Good morning,</p>
                      <p className="text-white text-base font-bold">
                        Adewale 👋
                      </p>
                    </div>
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                      AO
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary to-[#FF8F3F] rounded-2xl p-5 mb-5">
                    <p className="text-white/80 text-[0.6875rem] font-medium mb-1">
                      Total Balance
                    </p>
                    <p className="text-white text-[1.75rem] font-extrabold tracking-tight">
                      ₦8,450,250
                    </p>
                    <div className="flex justify-between mt-3">
                      <div className="text-white/70 text-[0.625rem]">
                        Acct No.
                        <br />
                        <strong className="text-white text-xs">
                          801 234 5678
                        </strong>
                      </div>
                      <div className="text-white/70 text-[0.625rem]">
                        Savings
                        <br />
                        <strong className="text-white text-xs">
                          ₦2,100,000
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-3 mb-5">
                    {[
                      { icon: <SendIcon />, label: "Send" },
                      { icon: <ReceiptIcon />, label: "Bills" },
                      { icon: <WalletIcon />, label: "Top Up" },
                      { icon: <PiggyBankIcon />, label: "Save" },
                    ].map((a, i) => (
                      <motion.div
                        key={a.label}
                        className="flex flex-col items-center gap-1.5"
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                      >
                        <div className="w-10 h-10 bg-white/[0.07] rounded-xl flex items-center justify-center text-primary">
                          {a.icon}
                        </div>
                        <span className="text-white/40 text-[0.5625rem] font-medium">
                          {a.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-white/50 text-[0.6875rem] font-semibold mb-2">
                    Recent Activity
                  </p>
                  {[
                    {
                      emoji: "💰",
                      name: "Salary Credit",
                      date: "Today, 9:41 AM",
                      amount: "+₦850,000",
                      credit: true,
                    },
                    {
                      emoji: "📺",
                      name: "DSTV Payment",
                      date: "Yesterday",
                      amount: "-₦24,500",
                      credit: false,
                    },
                    {
                      emoji: "🔄",
                      name: "Transfer In",
                      date: "Feb 18",
                      amount: "+₦125,000",
                      credit: true,
                    },
                  ].map((t, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3 py-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.4 + i * 0.1, duration: 0.5 }}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${t.credit ? "bg-accent-green/10" : "bg-red-500/10"}`}
                      >
                        {t.emoji}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-xs font-semibold truncate">
                          {t.name}
                        </p>
                        <p className="text-white/30 text-[0.625rem]">
                          {t.date}
                        </p>
                      </div>
                      <span
                        className={`text-xs font-bold ${t.credit ? "text-accent-green" : "text-red-400"}`}
                      >
                        {t.amount}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                className="absolute -left-12 bottom-28 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg hidden lg:flex"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  delay: 1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="w-9 h-9 bg-accent-green/20 rounded-lg flex items-center justify-center text-accent-green">
                  <TrendingUpIcon />
                </div>
                <div>
                  <p className="text-[0.6875rem] text-white/60">Daily Volume</p>
                  <p className="text-sm font-bold text-white">₦2.1B+</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-8 top-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg hidden lg:flex"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  delay: 1.2,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="w-9 h-9 bg-accent-blue/20 rounded-lg flex items-center justify-center text-accent-blue">
                  <ShieldIcon />
                </div>
                <div>
                  <p className="text-[0.6875rem] text-white/60">Security</p>
                  <p className="text-sm font-bold text-white">Secured</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
