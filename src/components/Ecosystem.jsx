import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { WayaArrowIcon } from "./icons/CustomIcons";

const products = [
  {
    name: "WayaGram",
    abbr: "WG",
    color: "bg-accent-blue",
    desc: "Discover beautiful places, people, conversations, vendors and clients. Chat and call clients, friends and family",
    link: "#",
  },
  {
    name: "WayaPay",
    abbr: "WP",
    color: "bg-accent-green",
    desc: "Accept payment on your website or mobile application via card, USSD, bank, wallet, PayAttitude.",
    link: "#",
  },
  {
    name: "WayaPOS",
    abbr: "WS",
    color: "bg-primary",
    desc: "Accepts MasterCard, VISA and Verve cards payment and perform other mobile banking services at your physical store with Wayapos Terminal POS device.",
    link: "#",
  },
];

export default function Ecosystem() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      className="relative py-12 md:py-20 lg:py-28"
      id="ecosystem"
      ref={ref}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-accent-green/[0.04] rounded-full blur-3xl animate-blob-delay-2" />
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.12em] text-primary mb-4">
            Explore other Businesses by WayaLinks Limited
          </span>
          <h2 className="text-[clamp(1.875rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-dark mb-5">
            More Than Just a Bank
          </h2>
          <p className="text-base lg:text-[1.0625rem] leading-relaxed text-slate-500">
            Explore our connected ecosystem of financial and social solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              className="card-hover bg-white rounded-2xl p-8 border border-slate-100 text-center
                         shadow-[0_0_0_1px_rgba(0,0,0,0.02),0_2px_4px_rgba(0,0,0,0.02),0_8px_16px_rgba(0,0,0,0.03)]"
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{
                delay: 0.1 + i * 0.1,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                className={`w-16 h-16 ${p.color} rounded-2xl flex items-center justify-center mx-auto mb-5
                              text-white text-xl font-extrabold`}
              >
                {p.abbr}
              </div>
              <h3 className="text-xl font-bold text-dark mb-2.5">{p.name}</h3>
              <p className="text-[0.9375rem] leading-relaxed text-slate-500 mb-6">
                {p.desc}
              </p>
              <a
                href={p.link}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary
                                          group hover:gap-2.5 transition-all duration-300"
              >
                Explore{" "}
                <WayaArrowIcon
                  width={15}
                  height={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
