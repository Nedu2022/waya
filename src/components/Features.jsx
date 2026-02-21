import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  PersonalBankIcon,
  TSAIcon,
  AirtimeIcon,
  ShieldCheckIcon,
  ArrowLeftRightIcon,
  ElectricityIcon,
} from "./icons/CustomIcons";
import PremiumBackground from "./PremiumBackground";

const features = [
  {
    icon: <ShieldCheckIcon width={22} height={22} />,
    title: "Safe And Secure",
    desc: "Transactions are safe and secure when you send and receive money and our fees are low (10N).",
    color: "bg-primary/[0.08] text-primary",
  },
  {
    icon: <ArrowLeftRightIcon width={22} height={22} />,
    title: "USSD Access",
    desc: "No internet? No problem. Waya has free USSD codes so you can simply dial to make transactions.",
    color: "bg-accent-blue/[0.08] text-accent-blue",
  },
  {
    icon: <TSAIcon width="24" height="24" />,
    title: "Qr Code Scanner",
    desc: "Quick and easy transactions by scanning a QR code.",
    color: "bg-accent-green/[0.08] text-accent-green",
  },
  {
    icon: <AirtimeIcon width="24" height="24" />,
    title: "Agents",
    desc: "Make deposits, withdrawals, transfers, cash out and bills payment via Wayabank Agent.",
    color: "bg-accent-purple/[0.08] text-accent-purple",
  },
  {
    icon: <PersonalBankIcon width={22} height={22} />,
    title: "Merchants, Agents And Agents Aggregator",
    desc: "Make extra cash as a Wayabank Merchant, Agents or Agents Aggregator. Earn commissions every time your customer pays you using Wayabank.",
    color: "bg-primary/[0.08] text-primary",
  },
  {
    icon: <ElectricityIcon width="22" height="28" />,
    title: "24/7 Support",
    desc: "Our support and engineering team are ever on standby to give you necessary support you need.",
    color: "bg-accent-blue/[0.08] text-accent-blue",
  },
];

export default function Features() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      className="relative py-12 md:py-20 lg:py-28 bg-slate-50/70"
      id="features"
      ref={ref}
    >
      <PremiumBackground />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.12em] text-primary mb-4">
            Why Wayabank
          </span>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-dark mb-5">
            Download Wayabank and start enjoying our great features.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gradient-to-br from-primary/[0.06] to-accent-blue/[0.06] rounded-3xl p-6 lg:p-12 flex items-center justify-center">
              <div className="phone-mockup w-[240px] h-[480px] rounded-[36px] overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-b from-dark to-[#0F0F1A] p-5 pt-12">
                  <div className="text-center pt-6">
                    <p className="text-white/40 text-[0.6875rem] mb-2">
                      Analytics Dashboard
                    </p>
                    <p className="text-white text-xl font-extrabold mb-6">
                      ₦4,250,000
                    </p>
                    <div className="flex justify-center gap-6 mb-8">
                      <div className="text-center">
                        <p className="text-accent-green text-sm font-bold">
                          +12.5%
                        </p>
                        <p className="text-white/30 text-[0.5625rem]">Income</p>
                      </div>
                      <div className="text-center">
                        <p className="text-red-400 text-sm font-bold">-4.2%</p>
                        <p className="text-white/30 text-[0.5625rem]">
                          Expenses
                        </p>
                      </div>
                    </div>
                    <div className="flex items-end justify-center gap-1.5 h-28 px-4">
                      {[45, 65, 40, 80, 55, 90, 70, 60, 85, 50, 75, 95].map(
                        (h, i) => {
                          let color = "rgba(255,255,255,0.06)";
                          if (i === 11) color = "#FF6B00";
                          else if (i % 3 === 0) color = "#22C55E";
                          else if (i % 3 === 1) color = "#F87171";
                          else color = "#A855F7";

                          return (
                            <motion.div
                              key={i}
                              className="w-3 rounded-t-sm"
                              style={{ background: color }}
                              initial={{ height: 0, opacity: 0 }}
                              animate={
                                inView
                                  ? { height: `${h}%`, opacity: 1 }
                                  : { height: 0, opacity: 0 }
                              }
                              transition={{
                                delay: 0.6 + i * 0.06,
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1],
                              }}
                            />
                          );
                        },
                      )}
                    </div>
                    <div className="flex justify-between px-4 pt-2">
                      {[
                        "J",
                        "F",
                        "M",
                        "A",
                        "M",
                        "J",
                        "J",
                        "A",
                        "S",
                        "O",
                        "N",
                        "D",
                      ].map((m, i) => (
                        <span
                          key={`${m}-${i}`}
                          className="text-white/20 text-[0.5rem]"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="flex gap-5 p-5 bg-white/50 backdrop-blur-xl rounded-2xl border border-white/80 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.05)] hover:bg-white/80 transition-colors"
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  delay: 0.15 + i * 0.08,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${f.color}`}
                >
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-[clamp(0.9375rem,1.6vw,1.0625rem)] font-bold text-dark mb-1.5">
                    {f.title}
                  </h3>
                  <p className="text-[clamp(0.8125rem,1.2vw,0.875rem)] leading-relaxed text-slate-500">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
