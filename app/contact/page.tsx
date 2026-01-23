'use client';

import { useState, FormEvent } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    interest: '',
    message: '',
    consent: false,
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // For static export, we'll use a client-side form service
      // TODO: Replace with Azure Function endpoint or third-party service
      // For now, use mailto as fallback
      const mailtoLink = `mailto:info@zimax.net?subject=Contact Form: ${formData.interest}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0AOrganization: ${formData.organization || 'N/A'}%0ARole: ${formData.role || 'N/A'}%0AInterest: ${formData.interest}%0A%0AMessage:%0A${formData.message}`;
      
      // In production, replace with actual API endpoint (Azure Function)
      // const response = await fetch('https://your-function.azurewebsites.net/api/contact', { ... });
      
      // For now, show success and open mailto
      window.location.href = mailtoLink;
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        organization: '',
        role: '',
        interest: '',
        message: '',
        consent: false,
      });
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="bg-white">
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600">
              Get in touch about products, partnerships, or general inquiries
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {status === 'success' && (
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mb-8">
                <p className="text-green-700">
                  Thank you for your message! We'll get back to you soon.
                </p>
              </div>
            )}

            {status === 'error' && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded mb-8">
                <p className="text-red-700">
                  There was an error submitting your message. Please try again or email us directly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                  Role
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                  Interest *
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                >
                  <option value="">Select an option</option>
                  <option value="secai-radar">SecAI Radar</option>
                  <option value="ctxeco">ctxeco</option>
                  <option value="partnerships">Partnerships</option>
                  <option value="press">Press</option>
                  <option value="oss">Open Source</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label htmlFor="consent" className="ml-3 text-sm text-gray-600">
                  I consent to Zimax Networks processing my personal information in accordance with the{' '}
                  <a href="/legal/privacy" className="text-primary hover:underline">Privacy Policy</a>. *
                </label>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Other Ways to Reach Us</h3>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:info@zimax.net" className="text-primary hover:underline">
                    info@zimax.net
                  </a>
                </p>
                <p>
                  <strong>Security:</strong>{' '}
                  <a href="mailto:security@zimax.net" className="text-primary hover:underline">
                    security@zimax.net
                  </a>
                </p>
                <p>
                  <strong>Press:</strong>{' '}
                  <a href="mailto:press@zimax.net" className="text-primary hover:underline">
                    press@zimax.net
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
