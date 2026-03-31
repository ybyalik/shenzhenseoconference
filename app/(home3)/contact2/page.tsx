'use client';

import { useState } from 'react';

/* ─── Hero ─── */
function ContactHero() {
  return (
    <section className="pt-28 md:pt-36 pb-10 md:pb-16">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20 text-center">
        <h1 className="text-[40px] md:text-[50px] font-extrabold leading-[1.0] uppercase mb-4 md:mb-6">
          Have Questions?
        </h1>
        <p className="text-base md:text-lg text-[#020725] leading-[1.3]">
          Send a Message
        </p>
      </div>
    </section>
  );
}

/* ─── Inquiry Cards ─── */
function InquiryCards() {
  return (
    <section className="pb-10 md:pb-16">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* General Inquiries */}
          <div className="bg-[#f5f5f5] rounded-lg p-6 md:p-8 flex flex-col justify-between min-h-[200px] md:min-h-[240px]">
            <h2 className="text-[24px] md:text-[32px] font-extrabold leading-[1.1] uppercase text-[#4657db]">
              General<br />Inquires
            </h2>
            <div>
              <p className="text-sm md:text-base font-semibold text-[#020725] leading-[1.3] mb-1">
                For ticketing, visa related,<br />or general questions:
              </p>
              <p className="text-sm md:text-base text-[#020725]">
                <a href="mailto:support@shenzhenseoconference.com" className="hover:text-[#4657db] transition-colors">support@shenzhenseoconference.com</a>
              </p>
            </div>
          </div>

          {/* Sponsorship Inquiries */}
          <div className="bg-[#f5f5f5] rounded-lg p-6 md:p-8 flex flex-col justify-between min-h-[200px] md:min-h-[240px]">
            <h2 className="text-[24px] md:text-[32px] font-extrabold leading-[1.1] uppercase text-[#4657db]">
              Sponsorship<br />Inquires
            </h2>
            <div>
              <p className="text-sm md:text-base font-semibold text-[#020725] leading-[1.3] mb-1">
                For sponsorship<br />related inquiries:
              </p>
              <p className="text-sm md:text-base text-[#020725]">
                <a href="mailto:sponsor@shenzhenseoconference.com" className="hover:text-[#4657db] transition-colors">sponsor@shenzhenseoconference.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact Form ─── */
function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [requestInvitation, setRequestInvitation] = useState(false);
  const [nationality, setNationality] = useState('');
  const [passportNo, setPassportNo] = useState('');
  const [passportIssuingOffice, setPassportIssuingOffice] = useState('');
  const [dateOfIssue, setDateOfIssue] = useState('');
  const [passportExpiration, setPassportExpiration] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [durationOfStay, setDurationOfStay] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const inputClass = "px-4 py-3 bg-white border border-gray-200 rounded text-sm text-[#020725] placeholder:text-[#020725]/40 focus:outline-none focus:border-[#4657db] transition-colors";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName, lastName, email,
          additionalMessage: message,
          requestInvitationLetter: requestInvitation,
          ...(requestInvitation && { nationality, passportNo, passportIssuingOffice, dateOfIssue, passportExpiration, jobTitle, durationOfStay }),
        }),
      });
      setSuccess(true);
      setFirstName(''); setLastName(''); setEmail(''); setMessage('');
      setRequestInvitation(false); setNationality(''); setPassportNo('');
      setPassportIssuingOffice(''); setDateOfIssue(''); setPassportExpiration('');
      setJobTitle(''); setDurationOfStay('');
    } catch {
      // handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#f5f5f5] py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[28px] md:text-[40px] font-extrabold leading-[1.0] uppercase mb-4 md:mb-6">
            Get In Touch
          </h2>
          <p className="text-base md:text-lg text-[#020725] leading-[1.3] max-w-[500px] mx-auto">
            Send us a message or request a business invitation letter for your visa application
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-[700px] mx-auto flex flex-col gap-5 md:gap-6 bg-white p-6 md:p-8">
          {/* Name row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#020725]">First Name*</label>
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Your First Name" required className={inputClass} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#020725]">Last Name*</label>
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Your Last Name" required className={inputClass} />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-[#020725]">Email Address*</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" required className={inputClass} />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-[#020725]">Message (Optional)</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              rows={4}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Checkbox */}
          <label className="flex items-center gap-3 bg-[#f5f5f5] rounded px-4 py-3.5 cursor-pointer">
            <input
              type="checkbox"
              checked={requestInvitation}
              onChange={(e) => setRequestInvitation(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-[#4657db] focus:ring-[#4657db]"
            />
            <span className="text-sm text-[#020725]/60">Request a Business Invitation</span>
          </label>

          {/* Conditional invitation fields */}
          {requestInvitation && (
            <div className="flex flex-col gap-5 md:gap-6 border-t border-gray-200 pt-5 md:pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[#020725]">Nationality*</label>
                  <input type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} placeholder="Your Nationality" required className={inputClass} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[#020725]">Passport No.*</label>
                  <input type="text" value={passportNo} onChange={(e) => setPassportNo(e.target.value)} placeholder="Your Passport Number" required className={inputClass} />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#020725]">Passport Issuing Office*</label>
                <input type="text" value={passportIssuingOffice} onChange={(e) => setPassportIssuingOffice(e.target.value)} placeholder="Issuing Office" required className={inputClass} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[#020725]">Date of Issue*</label>
                  <input type="date" value={dateOfIssue} onChange={(e) => setDateOfIssue(e.target.value)} required className={inputClass} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[#020725]">Passport Expiration Date*</label>
                  <input type="date" value={passportExpiration} onChange={(e) => setPassportExpiration(e.target.value)} required className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[#020725]">Job Title*</label>
                  <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="Your Job Title" required className={inputClass} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[#020725]">Estimated Duration of Stay in China*</label>
                  <input type="text" value={durationOfStay} onChange={(e) => setDurationOfStay(e.target.value)} placeholder="e.g. 5 days" required className={inputClass} />
                </div>
              </div>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-[#4657db] text-white text-base font-semibold rounded hover:bg-[#4657db]/90 transition-colors disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Contact Us'}
          </button>

          {success && (
            <p className="text-sm text-green-600 text-center">
              {requestInvitation
                ? "We'll process your business invitation letter request and contact you soon."
                : "Thank you for your message! We'll get back to you soon."}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function Contact2() {
  return (
    <div className="font-[var(--font-sora)]">
      <ContactHero />
      <InquiryCards />
      <ContactForm />
    </div>
  );
}
