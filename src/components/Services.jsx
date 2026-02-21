import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  PersonalBankIcon,
  TSAIcon,
  AirtimeIcon,
  LoanIcon,
  SavingsIcon,
  ElectricityIcon,
  WayaArrowIcon,
} from "./icons/CustomIcons";

const services = [
  {
    icon: <PersonalBankIcon />,
    title: "Digital Personal Banking",
    desc: "Completely digital personal banking via web, mobile app and USSD. Available on Android and iOS devices, we allow customers to make savings and carry out payments.",
    color:
      "bg-primary/[0.06] text-primary group-hover:bg-primary/[0.08] transition-colors",
  },
  {
    icon: <TSAIcon width="24" height="24" />,
    title: "Digital Business Banking",
    desc: "Tailor-made for businesses. A complete digital platform that grants businesses an ability to make savings, carry out payments, gain commission and access Open APIs.",
    color:
      "bg-accent-blue/[0.06] text-accent-blue group-hover:bg-accent-blue/[0.08] transition-colors",
  },
  {
    icon: <ElectricityIcon width="22" height="28" />,
    title: "Request for POS terminal",
    desc: "Wayabank provides businesses with Point of Sale (POS) terminals to facilitate seamless transactions. Accept MasterCard, VISA, Verve cards, and perform mobile banking services.",
    color:
      "bg-accent-green/[0.06] text-accent-green group-hover:bg-accent-green/[0.08] transition-colors",
  },
  {
    icon: <LoanIcon />,
    title: "Loan Request",
    desc: "Wayabank offers a seamless loan request process tailored to meet your financial needs. Apply for a loan directly through our platform to provide quick access to funds.",
    color:
      "bg-accent-purple/[0.06] text-accent-purple group-hover:bg-accent-purple/[0.08] transition-colors",
  },
  {
    icon: <SavingsIcon />,
    title: "Request for Travel Loan",
    desc: "Wayabank offers a specialized service to provide you with the necessary financial documentation. Our process is quick and straightforward, helping you meet travel requirements without hassle.",
    color:
      "bg-primary/[0.06] text-primary group-hover:bg-primary/[0.08] transition-colors",
  },
];

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      className="relative py-12 md:py-20 lg:py-32"
      id="services"
      ref={ref}
    >
      {/* Absolute positioning element for premium backdrop feel */}
      <div className="absolute top-1/2 left-0 w-[1px] h-1/2 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/10 bg-primary/[0.03] text-xs font-semibold uppercase tracking-[0.1em] text-primary mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Our
            Services
          </span>
          <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-extrabold leading-[1.1] tracking-tight text-dark mb-6">
            WayaBank Services
          </h2>
          <p className="text-[1.0625rem] lg:text-[1.125rem] leading-relaxed text-slate-500">
            Are you a Business or an individual? Wayabank provides services that
            help individuals and businesses carryout financial activities easily
            without any delay and hinderance. Our users can make seamless cash
            transfers, withdrawal, pay bills, request and receive money.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="group relative overflow-hidden bg-white/60 backdrop-blur-xl rounded-[28px] p-8 lg:p-10 border border-white/80
                         shadow-[0_8px_32px_-12px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.7)] hover:-translate-y-2
                         hover:shadow-[0_20px_40px_-16px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.8)] transition-all duration-500 flex flex-col items-start"
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Subtle top glare effect */}
              <div className="absolute top-0 inset-x-0 h-[100px] bg-gradient-to-b from-white to-transparent opacity-60 pointer-events-none" />

              <div
                className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-opacity-10 shadow-sm ${s.color}`}
              >
                {s.icon}
              </div>
              <h3 className="relative text-[1.125rem] font-extrabold text-dark mb-3 tracking-tight group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="relative text-[0.9375rem] leading-relaxed text-slate-500 mb-10 flex-1">
                {s.desc}
              </p>

              {/* Premium minimal link using specific Arrow right */}
              <a
                href="#"
                className="relative mt-auto inline-flex items-center gap-3 text-[0.875rem] font-bold text-primary hover:text-primary-hover transition-colors"
              >
                <span className="relative overflow-hidden flex flex-col h-5">
                  <span className="transform transition-transform duration-400 ease-[0.16,1,0.3,1] group-hover:-translate-y-full">
                    Explore Service
                  </span>
                  <span className="absolute top-full left-0 transform transition-transform duration-400 ease-[0.16,1,0.3,1] group-hover:-translate-y-full text-primary-hover">
                    Explore Service
                  </span>
                </span>
                <span className="w-8 h-8 rounded-full bg-primary/[0.08] border border-primary/10 flex items-center justify-center transform transition-all duration-400 ease-[0.16,1,0.3,1] group-hover:bg-primary group-hover:border-primary group-hover:text-white group-hover:translate-x-1 shadow-sm">
                  <WayaArrowIcon width="12" height="12" />
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
