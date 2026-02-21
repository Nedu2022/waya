import { ShieldIcon, LockIcon } from "./icons/CustomIcons";

const company = ["About Us", "Blog", "Careers", "Press & Media", "Contact Us"];
const services = [
  "Personal Banking",
  "Business Banking",
  "Loans",
  "POS Terminal",
  "API Documentation",
];
const legal = [
  "Terms & Conditions",
  "Privacy Policy",
  "Cookie Policy",
  "AML Policy",
  "FAQs",
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-0">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 lg:gap-12 pb-16 border-b border-white/[0.06]">
          <div>
            <a href="#" className="inline-block mb-4">
              <img src="/logo.svg" alt="WayaBank" className="h-8" />
            </a>
            <p className="text-[0.9375rem] leading-relaxed text-white/50 max-w-xs mb-6">
              Wire your money, your way. Bank of the new age, digitally built
              for you!
            </p>
            <div className="flex gap-3">
              {[
                {
                  label: "Facebook",
                  path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
                },
                {
                  label: "Twitter",
                  path: "M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768m2.46-2.46l6.772-6.772",
                },
                {
                  label: "Instagram",
                  paths: [
                    "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
                    "M17.5 6.5h.01",
                  ],
                  rect: true,
                },
                {
                  label: "LinkedIn",
                  paths: [
                    "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z",
                  ],
                  rect2: true,
                  circle: true,
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/[0.05] flex items-center justify-center text-white/40
                              hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {s.rect && (
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    )}
                    {s.rect2 && <rect width="4" height="12" x="2" y="9" />}
                    {s.circle && <circle cx="4" cy="4" r="2" />}
                    {s.path && <path d={s.path} />}
                    {s.paths?.map((p, i) => (
                      <path key={i} d={p} />
                    ))}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {[
            { title: "Company", links: company },
            { title: "Services", links: services },
            { title: "Legal", links: legal },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-[0.9375rem] font-bold text-white mb-5">
                {col.title}
              </h4>
              <div className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-sm text-white/40 hover:text-primary transition-colors duration-200"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-6">
          <p className="text-xs text-white/30">
            © 2026 WayaBank. All rights reserved. Licensed by the Central Bank
            of Nigeria.
          </p>
          <div className="flex gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-white/5 rounded-lg text-xs font-semibold text-white/70 border border-white/10 hover:bg-white/10 transition-colors">
              <ShieldIcon
                width={14}
                height={14}
                className="text-accent-green"
              />{" "}
              CBN Licensed
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-white/5 rounded-lg text-xs font-semibold text-white/70 border border-white/10 hover:bg-white/10 transition-colors">
              <LockIcon width={14} height={14} className="text-accent-green" />{" "}
              PCI DSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
