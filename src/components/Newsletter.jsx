import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUpRightIcon } from "./icons/CustomIcons";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <section
      className="relative py-12 md:py-20 lg:py-24 bg-gradient-to-br from-primary via-[#FF8F3F] to-primary overflow-hidden"
      id="contact"
      ref={ref}
    >
      <div className="absolute inset-0 wave-pattern pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[350px] h-[350px] rounded-full bg-white/[0.06] blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-white/[0.04] blur-3xl" />
        <div className="absolute top-16 left-16 w-3 h-3 rounded-full bg-white/20 animate-float" />
        <div className="absolute top-32 right-24 w-2 h-2 rounded-full bg-white/15 animate-float-delay" />
        <div className="absolute bottom-20 left-1/3 w-2.5 h-2.5 rounded-full bg-white/10 animate-float" />
      </div>

      <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={
            inView
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 24, filter: "blur(8px)" }
          }
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-extrabold text-white leading-tight tracking-tight mb-6">
            Be the First to Know About our Promotions, Giveaways, and Amazing
            Business Offers
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://wayabank.ng/register?type=personal"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white text-primary font-semibold
                          rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-[0.9375rem] whitespace-nowrap"
            >
              Create Wayabank Personal Account
              <ArrowUpRightIcon width={16} height={16} />
            </a>
            <a
              href="https://wayabank.ng/register?type=business"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-white font-semibold
                          rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-sm
                          hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300 text-[0.9375rem] whitespace-nowrap"
            >
              Create Wayabank Business Account
            </a>
          </div>

          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              setEmail("");
            }}
          >
            <input
              type="email"
              placeholder="Enter your email for updates"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3.5 rounded-xl border-2 border-white/20 bg-white/10 text-white
                         placeholder-white/50 text-[0.9375rem] font-medium outline-none backdrop-blur-sm
                         focus:border-white/40 focus:bg-white/15 transition-all duration-300"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-white text-primary font-semibold rounded-xl
                                             shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
