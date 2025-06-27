import React, { useState, useRef } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { useInView } from '../hooks/useInView';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formInView = useInView(formRef, { threshold: 0.1 });
  const infoInView = useInView(infoRef, { threshold: 0.1 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const { name, email, subject, message } = formState;

  const fullMessage = `
    👋 Hello, my name is ${name}.
    📧 Email: ${email}
    📝 Subject: ${subject}
    💬 Message: ${message}
  `;

  const whatsappURL = `https://wa.me/917569466854?text=${encodeURIComponent(fullMessage)}`;

  window.open(whatsappURL, '_blank');

  setFormState({ name: '', email: '', subject: '', message: '' });
  setIsSubmitted(true);
  setTimeout(() => setIsSubmitted(false), 5000);
};

  return (
    <section id="contact" className="py-24 bg-neutral-50 dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-indigo-50 dark:bg-indigo-900/10 rounded-tl-full opacity-60"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeading
          subtitle="Get In Touch"
          title="Let's Work Together"
          alignment="center"
        />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mt-16 items-start">
          {/* Contact Info */}
          <div
            ref={infoRef}
            className={`rounded-2xl shadow-xl p-8 transition-all duration-1000 bg-white dark:bg-gray-900 ${
              infoInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6 text-neutral-900 dark:text-white">Contact Information</h3>
            <div className="space-y-6 text-neutral-700 dark:text-neutral-300">
              <InfoItem icon={<Mail size={20} />} title="Email" text="gvenkatnarasimh965@gmail.com" link="mailto:gvenkatnarasimh965@gmail.com" />
              <InfoItem icon={<Phone size={20} />} title="Phone" text="+917569466854" link="tel:+917569466854" />
              <InfoItem icon={<MapPin size={20} />} title="Location" text="Hindupur, Andhra Pradesh, India" />
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h4 className="font-medium text-neutral-900 dark:text-white mb-4">Connect</h4>
              <div className="flex space-x-4">
                {socials.map(({ href, icon }, i) => (
                  <a key={i} href={href} className="p-3 bg-neutral-100 dark:bg-gray-800 rounded-full text-neutral-600 dark:text-white hover:bg-indigo-100 dark:hover:bg-indigo-600/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`rounded-2xl shadow-xl p-8 transition-all duration-1000 delay-300 bg-white dark:bg-gray-900 ${
              formInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6 text-neutral-900 dark:text-white">Send Message</h3>

            <div className="grid grid-cols-1 gap-6">
              {['name', 'email', 'subject'].map((field) => (
                <InputField
                  key={field}
                  name={field}
                  label={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formState[field as keyof typeof formState]}
                  onChange={handleChange}
                />
              ))}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-neutral-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-neutral-900 dark:text-white focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:focus:ring-indigo-500 focus:ring-opacity-50 transition-colors"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full px-6 py-3 rounded-md flex items-center justify-center gap-2 ${
                    isSubmitted
                      ? 'bg-green-600 text-white'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white transition-colors'
                  }`}
                >
                  {isSubmitting ? (
                    <LoadingSpinner />
                  ) : isSubmitted ? (
                    <SuccessCheck />
                  ) : (
                    <>
                      Send Message <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

// Extracted Components
const InputField = ({ name, label, value, onChange }: any) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
      {label}
    </label>
    <input
      type={name === 'email' ? 'email' : 'text'}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full px-4 py-3 rounded-md border border-neutral-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:focus:ring-indigo-500 focus:ring-opacity-50 transition-colors"
      placeholder={label}
    />
  </div>
);

const InfoItem = ({ icon, title, text, link }: any) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 mr-4 p-3 bg-indigo-100 dark:bg-indigo-700/30 rounded-full text-indigo-600 dark:text-indigo-400">
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-neutral-900 dark:text-white">{title}</h4>
      {link ? (
        <a href={link} className="text-neutral-600 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
          {text}
        </a>
      ) : (
        <p className="text-neutral-600 dark:text-neutral-300">{text}</p>
      )}
    </div>
  </div>
);

const LoadingSpinner = () => (
  <span className="inline-flex items-center">
    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    Sending...
  </span>
);

const SuccessCheck = () => (
  <span className="inline-flex items-center">
    <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
    Message Sent!
  </span>
);

const socials = [
  {
    href: 'https://www.linkedin.com/in/g-venkata-narasimha-789850280/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: 'https://www.facebook.com/share/1Bmn5kprab/?mibextid=qi2Omg',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/venkat__2066?utm_source=qr&igsh=dGxvbTUxaTFhZHh2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
      </svg>
    ),
  },
];
