import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FingerprintIcon,
  BarChart3Icon,
  SendIcon,
  ReceiptIcon,
  WalletIcon,
  PiggyBankIcon,
} from "./icons/CustomIcons";

const appFeatures = [
  {
    icon: <FingerprintIcon width={20} height={20} />,
    title: "Open an Account in minutes",
    desc: "Take care of all your business expenses in one place. Pay bills and buy airtime easily without switching platforms.",
  },
  {
    icon: <SendIcon width={20} height={20} />,
    title: "Send or receive money with ease",
    desc: "We designed a banking app to make your busy lifestyle easy. Transfer or receive money with just an email address or phone number.",
  },
  {
    icon: <BarChart3Icon width={20} height={20} />,
    title: "We just help you manage it",
    desc: "Save it, spend it, send it. It\u2019s up to you. Whatever you choose to do with your money, we\u2019ll make sure it\u2019s done better and safer.",
  },
];

export default function AppShowcase() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section
      className="relative py-12 md:py-20 lg:py-28 bg-slate-50/70"
      id="app"
      ref={ref}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 right-0 w-[400px] h-[400px] bg-accent-purple/[0.04] rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-primary/[0.04] rounded-full blur-3xl animate-blob-delay-4" />
        <svg
          className="absolute top-20 left-10 w-40 h-40 opacity-[0.06]"
          viewBox="0 0 160 160"
        >
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#FF6B00"
            strokeWidth="2"
            strokeDasharray="8 6"
          />
        </svg>
        <svg
          className="absolute bottom-40 right-20 w-24 h-24 opacity-[0.05]"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#2563EB"
            strokeWidth="2"
            strokeDasharray="6 8"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent-purple/[0.08] rounded-full blur-3xl animate-pulse-glow" />
              <div className="phone-mockup w-[260px] h-[520px] rounded-[36px] overflow-hidden relative z-10">
                <div className="w-full h-full bg-gradient-to-b from-dark to-[#0F0F1A] p-5 pt-12 flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-white/50 text-xs">Welcome back,</p>
                      <p className="text-white text-sm font-bold">Chioma 💫</p>
                    </div>
                    <div className="w-9 h-9 bg-accent-purple rounded-full flex items-center justify-center text-white text-xs font-bold">
                      CO
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-accent-purple to-purple-400 rounded-2xl p-5 mb-5">
                    <p className="text-white/80 text-[0.625rem] font-medium mb-1">
                      Available Balance
                    </p>
                    <p className="text-white text-2xl font-extrabold tracking-tight">
                      ₦3,750,800
                    </p>
                    <div className="flex justify-between mt-3">
                      <div className="text-white/60 text-[0.5625rem]">
                        Account
                        <br />
                        <strong className="text-white text-[0.6875rem]">
                          Savings Plan
                        </strong>
                      </div>
                      <div className="text-white/60 text-[0.5625rem]">
                        Interest
                        <br />
                        <strong className="text-white text-[0.6875rem]">
                          ₦47,500
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2.5">
                    {[
                      {
                        icon: <SendIcon width={16} height={16} />,
                        label: "Send",
                      },
                      {
                        icon: <ReceiptIcon width={16} height={16} />,
                        label: "Bills",
                      },
                      {
                        icon: <WalletIcon width={16} height={16} />,
                        label: "Fund",
                      },
                      {
                        icon: <PiggyBankIcon width={16} height={16} />,
                        label: "Save",
                      },
                    ].map((a) => (
                      <div
                        key={a.label}
                        className="flex flex-col items-center gap-1"
                      >
                        <div className="w-9 h-9 bg-white/[0.06] rounded-xl flex items-center justify-center text-accent-purple">
                          {a.icon}
                        </div>
                        <span className="text-white/35 text-[0.5rem] font-medium">
                          {a.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.12em] text-primary mb-4">
              The Easy-to-use Banking Platform
            </span>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-dark mb-5">
              We re-engineered this app to proudly enable you do alot, and
              perform financial transactions with ease.
            </h2>
            <p className="text-[clamp(0.9375rem,1.5vw,1.0625rem)] leading-relaxed text-slate-500 mb-8">
              All you need is the reciever's email address or phone number.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              {appFeatures.map((f, i) => (
                <motion.div
                  key={f.title}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.35 + i * 0.1, duration: 0.5 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/[0.08] text-primary flex items-center justify-center shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <p className="font-bold text-dark mb-0.5 text-[clamp(0.875rem,1.5vw,1rem)]">
                      {f.title}
                    </p>
                    <p className="text-[clamp(0.8125rem,1.2vw,0.875rem)] text-slate-500 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://apps.apple.com/ng/app/waya-pay-chat/id1579011487"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-2.5 bg-dark text-white rounded-xl
                            hover:bg-navy-light hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 border border-white/10"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 384 512"
                  fill="currentColor"
                >
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.1-44.6-35.9-2.8-74.3 22.7-93.1 22.7-18.9 0-46.5-20.9-72.8-20.9-38.3 0-72.8 24.3-95.2 60.3-44.5 73.8-31 169.1 11.2 232.5 21.4 32.1 46.9 66.7 82.5 65.5 33.1-1.2 46.6-21.6 86.8-21.6 39.9 0 52.3 21.6 86.8 21.1 36.3-.5 58.7-32 79.5-63 25-37.1 35.5-73.4 36-75.1-1-1.3-67.6-25-67.6-92.1zm-85.7-187.3c18.5-22.6 30.6-54.8 27.2-86.2-27.9 1.1-60.6 18.9-79.6 41.6-16 18.8-30.1 52.1-26 82.9 31.4 2.4 60.1-16.1 78.4-38.3z" />
                </svg>
                <span className="flex flex-col text-left">
                  <span className="text-[0.625rem] text-white/70 font-medium leading-none mb-0.5">
                    Download on the
                  </span>
                  <span className="text-[1.0625rem] font-bold leading-none tracking-tight">
                    App Store
                  </span>
                </span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.wayapaychat.wayapay"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-2.5 bg-dark text-white rounded-xl
                            hover:bg-navy-light hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 border border-white/10"
              >
                <svg
                  className="w-[1.375rem] h-[1.375rem]"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                <span className="flex flex-col text-left">
                  <span className="text-[0.625rem] text-white/70 font-medium leading-none mb-0.5">
                    GET IT ON
                  </span>
                  <span className="text-[1.0625rem] font-bold leading-none tracking-tight">
                    Google Play
                  </span>
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
