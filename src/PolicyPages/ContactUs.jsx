import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-2xl border border-gray-200">

        <h1 className="text-4xl font-bold mb-3 text-gray-900">Contact Us</h1>
        <p className="text-gray-500 mb-8">We’re here to help you anytime</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          At <b>RabbiRoots</b>, your feedback and questions matter to us. Whether it’s 
          about orders, delivery issues, refunds, or business inquiries — we’ve always got your back.
        </p>

        <Section title="1. Customer Support">
          <p className="text-gray-600 leading-relaxed">
            For any order-related help like delivery issues, missing items, or late orders, reach us at:
          </p>

          <ContactItem label="Email" value="support@yourdomain.com" link />
          <ContactItem label="Phone" value="+91 98765 43210" />
          <ContactItem label="Support Hours" value="24/7 available" />
        </Section>

        <Section title="2. Business & Partnership Inquiries">
          <p className="text-gray-600 leading-relaxed">
            Want to partner with us for groceries, vegetables, bakery items, dairy, or FMCG products?
          </p>

          <ContactItem label="Business Email" value="business@yourdomain.com" link />
        </Section>

        <Section title="3. Press & Media">
          <p className="text-gray-600 leading-relaxed">
            For press releases, media coverage, collaborations, or interviews, contact:
          </p>

          <ContactItem label="Media Email" value="media@yourdomain.com" link />
        </Section>

        <Section title="4. Registered Office Address">
          <p className="text-gray-600 leading-relaxed">
            <b>RabbiRoots</b><br/>
            123 Market Street,<br/>
            Mumbai, Maharashtra - 400001<br/>
            India
          </p>
        </Section>

        <Section title="5. Follow Us">
          <p className="text-gray-600 leading-relaxed mb-3">
            Stay updated with offers, announcements, and exciting deals:
          </p>

          <ul className="space-y-2">
            <SocialItem platform="Instagram" link="https://instagram.com" />
            <SocialItem platform="Facebook" link="https://facebook.com" />
            <SocialItem platform="Twitter" link="https://twitter.com" />
            <SocialItem platform="LinkedIn" link="https://linkedin.com" />
          </ul>
        </Section>

      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-2xl font-semibold mb-4 text-gray-900">{title}</h2>
    {children}
  </div>
);

const ContactItem = ({ label, value, link }) => (
  <p className="text-gray-600 leading-snug mt-2">
    <b>{label}:</b>{" "}
    {link ? (
      <a href={`mailto:${value}`} className="text-blue-600 underline font-medium">
        {value}
      </a>
    ) : (
      value
    )}
  </p>
);

const SocialItem = ({ platform, link }) => (
  <li className="flex items-center gap-3">
    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium underline">
      {platform}
    </a>
  </li>
);

export default ContactUs;
