import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
      className="relative py-12 md:py-20 lg:py-28 bg-slate-50/70"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.12em] text-primary mb-4">
            Explore other Businesses by WayaLinks Limited
          </span>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-dark mb-5">
            More Than Just a Bank
          </h2>
          <p className="text-[clamp(0.9375rem,1.5vw,1.0625rem)] leading-relaxed text-slate-500">
            Explore our connected ecosystem of financial and social solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.link}
              className="group block bg-white rounded-3xl p-8 border border-slate-100
                         shadow-[0_0_0_1px_rgba(0,0,0,0.02),0_2px_8px_-4px_rgba(0,0,0,0.06)]
                         hover:-translate-y-2 hover:shadow-lg transition-all duration-500"
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.1 + i * 0.12,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                className={`w-14 h-14 ${p.color} rounded-2xl flex items-center justify-center text-white text-lg font-extrabold mb-6
                            group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500`}
              >
                {p.abbr}
              </div>
              <h3 className="text-[clamp(1rem,1.8vw,1.125rem)] font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                {p.name}
              </h3>
              <p className="text-[clamp(0.8125rem,1.3vw,0.9375rem)] leading-relaxed text-slate-500">
                {p.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
