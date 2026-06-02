export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 border border-[#58a6ff]/30 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          FCC Compliance
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          IoT Security Update<br />Compliance Scanner
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Automatically discover IoT devices on your network, verify firmware versions against security databases, and generate audit-ready FCC compliance reports in minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors"
          >
            Start Free Trial — $49/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          {[
            ['500+', 'Device Fingerprints'],
            ['FCC', 'Regulation Ready'],
            ['Real-time', 'Scan Results'],
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-bold text-xl">{stat}</div>
              <div className="text-[#8b949e] text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/50 rounded-xl p-8 max-w-sm mx-auto relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-4 py-1 rounded-full">
            MOST POPULAR
          </div>
          <div className="text-center mb-6">
            <div className="text-white font-bold text-xl mb-1">Professional</div>
            <div className="text-4xl font-bold text-white">
              $49<span className="text-[#8b949e] text-lg font-normal">/mo</span>
            </div>
            <div className="text-[#8b949e] text-sm mt-1">Cancel anytime</div>
          </div>
          <ul className="space-y-3 mb-8">
            {[
              'Unlimited network scans',
              'FCC compliance PDF reports',
              'Firmware vulnerability database',
              'Email alerts for new CVEs',
              'Up to 1,000 devices per scan',
              'Priority support',
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors w-full"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'What IoT devices can the scanner detect?',
              a: 'Our scanner identifies over 500 device types including smart cameras, routers, smart TVs, industrial sensors, medical devices, and more using passive fingerprinting and active probing techniques.',
            },
            {
              q: 'How does FCC compliance reporting work?',
              a: 'After each scan, we cross-reference discovered devices against FCC IoT security requirements and generate a detailed PDF report showing compliant and non-compliant devices with remediation steps.',
            },
            {
              q: 'Is my network data stored or shared?',
              a: 'Scan results are encrypted and stored only in your account. We never share your network topology or device data with third parties. You can delete all data at any time.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <div className="text-white font-semibold mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        <p>&copy; {new Date().getFullYear()} IoT Security Update Checker. All rights reserved.</p>
      </footer>
    </main>
  )
}
