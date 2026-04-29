const footerLinks = {
  Programs: ["Data Science", "ML & AI", "Product Management", "Leadership"],
  Company: ["About", "Case Studies", "Careers", "Blog"],
  Contact: [
    "enterprise@accredian.com",
    "+91-9555-999-999",
    "Gurugram, Haryana, India",
  ],
};

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[var(--ink)] text-white"
      aria-label="Site footer"
    >
      {/* Top rule */}
      <div className="h-px bg-[var(--border-dark)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12">

          {/* Brand Column */}
          <div>
            <div className="mb-5">
              <img src="/logo.webp" alt="Accredian Logo" className="h-7 w-auto brightness-0 invert opacity-90" />
            </div>
            <p className="text-sm text-white/35 leading-relaxed mb-8 max-w-[280px]">
              India&apos;s most trusted enterprise learning platform. Partner with
              IITs, IIMs, and global universities to upskill your workforce.
            </p>
            <div className="flex gap-2.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-linkedin"
                className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 hover:bg-white/12 flex items-center justify-center transition-colors text-xs text-white/50 hover:text-white font-semibold"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-twitter"
                className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 hover:bg-white/12 flex items-center justify-center transition-colors text-xs text-white/50 hover:text-white"
                aria-label="Twitter / X"
              >
                𝕏
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-5">Programs</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.Programs.map((item) => (
                <li key={item}>
                  <a
                    href="#features"
                    className="text-sm text-white/45 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-5">Company</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.Company.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-white/45 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-5">Contact</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.Contact.map((item) => (
                <li key={item} className="text-sm text-white/45">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-white/20">© 2024 Accredian. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/20 hover:text-white/50 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-white/20 hover:text-white/50 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
