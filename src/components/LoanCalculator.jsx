import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function LoanCalculator() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const [amount, setAmount] = useState(500000);
  const [duration, setDuration] = useState(6);
  const interestRate = 0.04;

  const calculateLoan = () => {
    const principal = amount;
    const totalInterest = principal * interestRate * duration;
    const totalRepayment = principal + totalInterest;
    const monthlyRepayment = totalRepayment / duration;

    return {
      totalRepayment,
      monthlyRepayment,
      totalInterest,
    };
  };

  const { totalRepayment, monthlyRepayment, totalInterest } = calculateLoan();

  return (
    <section
      className="relative py-12 md:py-20 lg:py-28 overflow-hidden bg-white"
      id="loan-calculator"
      ref={ref}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-purple/3 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl animate-blob-delay-2" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.12em] text-accent-purple mb-4">
              Instant Loans
            </span>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold leading-[1.1] tracking-tight text-dark mb-6">
              Get the Funds You Need, <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-purple to-primary">
                Without the Wait
              </span>
            </h2>
            <p className="text-[clamp(0.9375rem,1.5vw,1.125rem)] leading-relaxed text-slate-500 mb-10">
              Calculate your loan easily. Transparent rates, no hidden fees, and
              instant disbursement straight into your Wayabank account. Pay back
              flexibly on your own terms.
            </p>

            <ul className="flex flex-col gap-4 mb-10">
              {[
                "Up to ₦5,000,000 without collateral",
                "Instant approval in under 5 minutes",
                "Flexible repayments from 1 to 12 months",
              ].map((benefit, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-700 font-medium text-[clamp(0.8125rem,1.3vw,0.9375rem)]"
                >
                  <div className="w-5 h-5 rounded-full bg-accent-green/20 text-accent-green flex items-center justify-center">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>

            <a
              href="https://wayabank.ng/register"
              className="inline-flex items-center gap-3 px-8 py-4 bg-dark text-white font-semibold
                         rounded-2xl shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:bg-slate-800 transition-all duration-300"
            >
              Apply Now
            </a>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-primary/10 to-transparent blur-2xl pointer-events-none" />

            <div className="relative bg-white/70 backdrop-blur-2xl rounded-[32px] p-8 lg:p-10 border border-white/80 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,0.6)]">
              <div className="mb-10">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-sm font-bold text-slate-400">
                    Loan Amount
                  </span>
                  <span className="text-2xl font-extrabold text-dark tracking-tight">
                    ₦{amount.toLocaleString("en-US")}
                  </span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="5000000"
                  step="50000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 rounded-full cursor-pointer appearance-none bg-slate-100 outline-none
                             [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 
                             [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white 
                             [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-primary 
                             [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition-all 
                             [&::-webkit-slider-thumb]:hover:scale-110"
                  style={{
                    background: `linear-gradient(to right, #FF6B00 0%, #FF6B00 ${((amount - 50000) / (5000000 - 50000)) * 100}%, #F1F5F9 ${((amount - 50000) / (5000000 - 50000)) * 100}%, #F1F5F9 100%)`,
                  }}
                />
                <div className="flex justify-between text-xs font-semibold text-slate-400 mt-3">
                  <span>₦50K</span>
                  <span>₦5M</span>
                </div>
              </div>

              <div className="mb-10">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-sm font-bold text-slate-400">
                    Duration
                  </span>
                  <span className="text-2xl font-extrabold text-dark tracking-tight">
                    {duration}{" "}
                    <span className="text-base text-slate-500 font-semibold">
                      months
                    </span>
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="1"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full h-2 rounded-full cursor-pointer appearance-none bg-slate-100 outline-none
                             [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 
                             [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white 
                             [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-accent-purple 
                             [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition-all 
                             [&::-webkit-slider-thumb]:hover:scale-110"
                  style={{
                    background: `linear-gradient(to right, #A855F7 0%, #A855F7 ${((duration - 1) / (12 - 1)) * 100}%, #F1F5F9 ${((duration - 1) / (12 - 1)) * 100}%, #F1F5F9 100%)`,
                  }}
                />
                <div className="flex justify-between text-xs font-semibold text-slate-400 mt-3">
                  <span>1 mo</span>
                  <span>12 mo</span>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-4 pb-4 border-b border-slate-200">
                  <span className="text-sm font-medium text-slate-500">
                    Monthly Repayment
                  </span>
                  <span className="text-lg font-bold text-dark">
                    ₦{Math.round(monthlyRepayment).toLocaleString("en-US")}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-4 pb-4 border-b border-slate-200">
                  <span className="text-sm font-medium text-slate-500">
                    Total Interest (4%/mo)
                  </span>
                  <span className="text-[0.9375rem] font-semibold text-slate-700">
                    ₦{Math.round(totalInterest).toLocaleString("en-US")}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="text-[0.9375rem] font-bold text-slate-800">
                    Total Repayment
                  </span>
                  <span className="text-[clamp(1.25rem,4vw,1.5rem)] font-extrabold text-primary tracking-tight">
                    ₦{Math.round(totalRepayment).toLocaleString("en-US")}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
