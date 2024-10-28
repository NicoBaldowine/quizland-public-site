'use client';

import { useState, FormEvent } from 'react';

interface FormData {
  reason: string;
  title: string;
  email: string;
  message: string;
}

interface FormErrors {
  reason?: string;
  title?: string;
  email?: string;
  message?: string;
}

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    reason: '',
    title: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.reason) {
      newErrors.reason = 'Please select a reason for contact';
    }
    if (!formData.title.trim()) {
      newErrors.title = 'Please enter a title';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message. We will get back to you soon!'
      });
      
      setFormData({ reason: '', title: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'There was an error submitting your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailBlur = () => {
    if (formData.email && !emailRegex.test(formData.email)) {
      setErrors(prev => ({
        ...prev,
        email: 'Please enter a valid email address'
      }));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setFormData({ ...formData, email: newEmail });
    
    // Only clear error if it exists
    if (errors.email) {
      setErrors({ ...errors, email: undefined });
    }
  };

  const handleBlur = (field: keyof FormData) => {
    const value = formData[field];
    const newErrors = { ...errors };

    switch (field) {
      case 'reason':
        if (!value) {
          newErrors.reason = 'Please select a reason for contact';
        }
        break;
      case 'title':
        if (!value.trim()) {
          newErrors.title = 'Please enter a title';
        }
        break;
      case 'email':
        if (!value.trim()) {
          newErrors.email = 'Please enter your email';
        } else if (!emailRegex.test(value)) {
          newErrors.email = 'Please enter a valid email address';
        }
        break;
      case 'message':
        if (!value.trim()) {
          newErrors.message = 'Please enter your message';
        }
        break;
    }

    setErrors(newErrors);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#101827]">
      <main className="flex-grow text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="mb-8 text-gray-300">
            Here you can contact us if you have any questions, suggestions, or bugs to report.
          </p>

          <form 
            onSubmit={handleSubmit}
            className="space-y-6"
            noValidate
          >
            <div className="space-y-1">
              <div className="relative">
                <select
                  value={formData.reason}
                  onChange={(e) => {
                    setFormData({ ...formData, reason: e.target.value });
                    if (errors.reason) {
                      setErrors({ ...errors, reason: undefined });
                    }
                  }}
                  onBlur={() => handleBlur('reason')}
                  className={`w-full px-4 py-3 rounded-lg bg-[#2E394E] border ${
                    errors.reason ? 'border-red-500' : 'border-[#3A4351]'
                  } focus:border-[#8A90A0] focus:outline-none transition-colors text-white appearance-none`}
                >
                  <option value="">Select reason for contact</option>
                  <option value="question">Question</option>
                  <option value="improvement">Improvement</option>
                  <option value="bug">Report a Bug</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
            </div>

            <div className="space-y-1">
              <div className="relative">
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => {
                    setFormData({ ...formData, title: e.target.value });
                    if (errors.title) {
                      setErrors({ ...errors, title: undefined });
                    }
                  }}
                  onBlur={() => handleBlur('title')}
                  placeholder="Title"
                  maxLength={50}
                  className={`w-full px-4 py-3 rounded-lg bg-[#2E394E] border ${
                    errors.title ? 'border-red-500' : 'border-[#3A4351]'
                  } focus:border-[#8A90A0] focus:outline-none transition-colors placeholder-[#6E7A92] text-white`}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-[#6E7A92]">
                  {formData.title.length}/50
                </span>
              </div>
              {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
            </div>

            <div className="space-y-1">
              <input
                type="email"
                value={formData.email}
                onChange={handleEmailChange}
                onBlur={() => handleBlur('email')}
                placeholder="Your email"
                className={`w-full px-4 py-3 rounded-lg bg-[#2E394E] border ${
                  errors.email ? 'border-red-500' : 'border-[#3A4351]'
                } focus:border-[#8A90A0] focus:outline-none transition-colors placeholder-[#6E7A92] text-white`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="space-y-1">
              <div className="relative">
                <textarea
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) {
                      setErrors({ ...errors, message: undefined });
                    }
                  }}
                  onBlur={() => handleBlur('message')}
                  placeholder="Message"
                  maxLength={500}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg bg-[#2E394E] border ${
                    errors.message ? 'border-red-500' : 'border-[#3A4351]'
                  } focus:border-[#8A90A0] focus:outline-none transition-colors placeholder-[#6E7A92] text-white resize-none`}
                />
                <span className="absolute right-4 bottom-4 text-sm text-[#6E7A92]">
                  {formData.message.length}/500
                </span>
              </div>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            {submitStatus.message && (
              <div className={`p-4 rounded-lg ${
                submitStatus.type === 'success' ? 'bg-green-900/50 text-green-200' : 'bg-red-900/50 text-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#182236] text-white px-6 py-3 rounded-lg flex items-center justify-center border border-[#748098] transition-all duration-300 hover:bg-[#2E394E] hover:border-[#8A90A0] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
