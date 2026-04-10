import { useState } from 'react';
import { Send, Mail, MessageSquare, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SectionLabel } from './About';
import emailjs from '@emailjs/browser';

const EMAILJS_USER_ID = '0RT6CTEgKh13HuZOX';
const EMAILJS_SERVICE_ID = 'service_s878amk';
const EMAILJS_TEMPLATE_ID = 'template_73lepd9';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { ref, visible } = useScrollAnimation();
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          project_type: form.subject,
          message: form.message,
        },
        EMAILJS_USER_ID
      );
      setSuccess(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setError('Something went wrong. Please try again or email me directly.');
    }

    setLoading(false);
  };

  const inputStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#f4f4f5',
    borderRadius: '0.75rem',
    padding: '0.875rem 1rem',
    fontSize: '0.875rem',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <section id="contact" className="py-28 px-6" style={{ background: '#08080c' }}>
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className="transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)' }}
        >
          <div className="text-center mb-16">
            <SectionLabel>Contact</SectionLabel>
            <h2
              className="text-white font-black mt-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
            >
              Let's build something
              <br />
              <span style={{ color: '#06b6d4' }}>great together.</span>
            </h2>
            <p className="text-zinc-400 mt-4 max-w-md mx-auto text-sm leading-relaxed">
              Have a project in mind? I'd love to hear about it. Fill out the form and I'll get back to you
              within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-2 flex flex-col gap-6">
              <ContactInfo
                icon={Mail}
                label="Email"
                value="AAelementsweb@gmail.com"
                sublabel="Fastest response"
              />
              <ContactInfo
                icon={MessageSquare}
                label="Response Time"
                value="Within 24 hours"
                sublabel="Usually much sooner"
              />

              <div
                className="p-6 rounded-2xl border"
                style={{
                  background: 'rgba(6,182,212,0.05)',
                  borderColor: 'rgba(6,182,212,0.2)',
                }}
              >
                <p className="text-sm font-semibold text-white mb-2">Working with me</p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  I'm a student, so I take on a limited number of projects at a time to ensure each one gets
                  my full attention. If I'm currently booked, I'll let you know and we can plan accordingly.
                </p>
              </div>
            </div>

            <div className="md:col-span-3">
              {success ? (
                <div
                  className="flex flex-col items-center justify-center text-center p-12 rounded-3xl border"
                  style={{
                    background: 'rgba(6,182,212,0.06)',
                    borderColor: 'rgba(6,182,212,0.25)',
                    minHeight: '400px',
                  }}
                >
                  <CheckCircle size={48} style={{ color: '#06b6d4' }} className="mb-4" />
                  <h3 className="text-white font-bold text-xl mb-2">Message sent!</h3>
                  <p className="text-zinc-400 text-sm max-w-xs">
                    Thanks for reaching out. I'll review your message and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-8 text-sm font-medium transition-colors"
                    style={{ color: '#06b6d4' }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4 p-8 rounded-3xl border"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    borderColor: 'rgba(255,255,255,0.07)',
                  }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-zinc-400">Your Name</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(6,182,212,0.5)')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-zinc-400">Email Address</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(6,182,212,0.5)')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-zinc-400">Project Type</label>
                    <div className="relative">
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="w-full appearance-none py-3.5 px-4 pr-10 rounded-xl text-sm"
                        style={{ 
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: form.subject ? '#f4f4f5' : '#71717a',
                          outline: 'none',
                          cursor: 'pointer',
                          transition: 'border-color 0.2s, box-shadow 0.2s'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'rgba(6,182,212,0.5)';
                          e.target.style.boxShadow = '0 0 0 3px rgba(6,182,212,0.1)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                          e.target.style.boxShadow = 'none';
                        }}
                      >
                        <option value="" style={{ background: '#111' }}>Select a service...</option>
                        <option value="Starter Website" style={{ background: '#111' }}>Starter Website — ₦20,000</option>
                        <option value="Professional Website" style={{ background: '#111' }}>Professional Website — ₦50,000</option>
                        <option value="Premium Project" style={{ background: '#111' }}>Premium Project — ₦150,000+</option>
                        <option value="Custom / Not Sure" style={{ background: '#111' }}>Custom / Not Sure</option>
                      </select>
                      <div 
                        className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                        style={{ color: '#06b6d4' }}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-zinc-400">Tell me about your project</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your project, goals, timeline, or anything else you'd like me to know..."
                      rows={5}
                      required
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(6,182,212,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-xs">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      boxShadow: '0 0 30px rgba(6,182,212,0.25)',
                    }}
                  >
                    {loading ? (
                      <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                    ) : (
                      <>
                        <Send size={14} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({
  icon: Icon,
  label,
  value,
  sublabel,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  sublabel: string;
}) {
  return (
    <div
      className="flex items-start gap-4 p-5 rounded-2xl border"
      style={{
        background: 'rgba(255,255,255,0.03)',
        borderColor: 'rgba(255,255,255,0.07)',
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: 'rgba(6,182,212,0.1)' }}
      >
        <Icon size={16} style={{ color: '#06b6d4' }} />
      </div>
      <div>
        <p className="text-zinc-500 text-xs mb-0.5">{label}</p>
        <p className="text-white text-sm font-semibold">{value}</p>
        <p className="text-zinc-600 text-xs mt-0.5">{sublabel}</p>
      </div>
    </div>
  );
}
