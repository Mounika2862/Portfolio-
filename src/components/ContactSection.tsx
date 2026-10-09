import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Two Column Layout: Text on Left Side, Card Boxes on Right Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Side: Editorial & Explanatory Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 text-left space-y-6 pt-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-[11px] font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Available for Opportunities</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.12]">
              Let's build something useful.
            </h2>

            <p className="text-base text-neutral-600 leading-relaxed">
              Have an interesting project, AI product, or software engineering challenge? Whether you're exploring autonomous agents, scalable database pipelines, or academic collaboration, I'm always open to discussing new opportunities.
            </p>

            <div className="space-y-4 pt-4 border-t border-neutral-200">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  01
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">Direct Inquiries</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Messages submitted here are routed directly to Mounika's primary inbox for rapid follow-up.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  02
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">Interactive Assistance</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Use Info AI at the bottom right to check background, graduation, stack details, or tap direct contact channels.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Card Boxes */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5"
          >
            {/* Primary Action Card Box */}
            <div className="p-6 sm:p-8 rounded-[28px] bg-neutral-50/90 border border-neutral-200/90 shadow-sm relative overflow-hidden">
              {isSent ? (
                <div className="p-8 rounded-2xl bg-white border border-neutral-200 text-center space-y-3 shadow-2xs">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-neutral-900">Message Delivered</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed max-w-sm mx-auto">
                    Thank you, {name}! Your message has been routed to Mounika. She will review and respond directly to {email}.
                  </p>
                  <button
                    onClick={() => setIsSent(false)}
                    className="mt-3 px-4 py-2 text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="pb-1">
                    <h3 className="text-base font-bold text-neutral-900">
                      Send a Direct Message
                    </h3>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Fill out your details below to get in touch directly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jane Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-neutral-200 text-neutral-900 placeholder-neutral-400 text-xs focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                        Your Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. jane@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-neutral-200 text-neutral-900 placeholder-neutral-400 text-xs focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                      Message / Opportunity Details
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your team, project specifications, or collaboration..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-neutral-200 text-neutral-900 placeholder-neutral-400 text-xs focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all shadow-2xs resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 disabled:opacity-50 text-white text-xs font-semibold shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Direct Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Secondary Informational Card Box (Privacy Guard) */}
            <div className="p-5 rounded-2xl bg-neutral-50/70 border border-neutral-200/70 text-xs text-neutral-500 flex items-center justify-between">
              <span className="font-medium text-neutral-700">Privacy & Confidentiality Protected</span>
              <span className="text-[11px] text-neutral-400">Response time: &lt; 24h</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
