import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-2xl border border-gray-200">

        <h1 className="text-4xl font-bold mb-3 text-gray-900">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: <b>2025-11-14</b></p>

        <p className="text-gray-700 leading-relaxed mb-10">
          At <b>RabbiRoots</b>, we value your trust. This Privacy Policy explains how 
          we collect, use, and protect your personal data while providing food, grocery, and 
          vegetable delivery services.
        </p>

        {/* Section */}
        <Section title="1. Information We Collect">
          <List>
            <Item label="Personal Details" text="Name, mobile number, email." />
            <Item label="Delivery Address" text="Home, work, saved addresses & pin codes." />
            <Item label="Location Access" text="GPS location (with permission) to show nearby stores." />
            <Item label="Order Details" text="Items ordered, order history, cart details." />
            <Item label="Payment Info" text="UPI, masked card details, transaction IDs (no full card numbers stored)." />
            <Item label="Device Data" text="Device type, browser, OS, IP address." />
            <Item label="Cookies" text="Session cookies, preferences, analytics." />
          </List>
        </Section>

        <Section title="2. Why We Use Your Information">
          <List>
            <Item text="Deliver groceries, vegetables, and food to your address quickly." />
            <Item text="Show accurate delivery timing based on your location." />
            <Item text="Process secure payments & refunds." />
            <Item text="Prevent fraud, fake orders, and misuse." />
            <Item text="Improve app performance and user experience." />
            <Item text="Send order updates & delivery notifications." />
          </List>
        </Section>

        <Section title="3. Sharing Your Information">
          <p className="text-gray-600 leading-relaxed mb-4">
            We do not sell your data. We may share your information only with:
          </p>
          <List>
            <Item label="Delivery Partners" text="To complete your orders quickly." />
            <Item label="Payment Gateways" text="Secure payments (Razorpay, Paytm, Stripe, etc.)." />
            <Item label="Logistics Providers" text="Order fulfilment and dispatch." />
            <Item label="Analytics Services" text="Improve performance & user experience." />
            <Item label="Legal Authorities" text="Only when required by law." />
          </List>
        </Section>

        <Section title="4. Location Permissions">
          <p className="text-gray-600 leading-relaxed">
            We use your location to show nearby stores, estimate delivery time, and assign 
            the nearest delivery partner. You can disable location anytime, but features may not work properly.
          </p>
        </Section>

        <Section title="5. Data Security">
          <p className="text-gray-600 leading-relaxed">
            We protect your data using encrypted connections, secure servers, and strict 
            access policies. While no system is 100% secure, we take every step to keep your 
            information safe.
          </p>
        </Section>

        <Section title="6. Your Rights">
          <List>
            <Item text="Request access to your data." />
            <Item text="Correct or update your details." />
            <Item text="Delete your account & personal data." />
            <Item text="Opt-out of promotional messages anytime." />
          </List>
        </Section>

        <Section title="7. Children’s Privacy">
          <p className="text-gray-600">
            Our services are not meant for children under 13. We do not knowingly collect data from minors.
          </p>
        </Section>

        <Section title="8. Updates to This Policy">
          <p className="text-gray-600">
            We may update this policy as we improve our services. Changes will be updated on this page 
            and notified to users when required.
          </p>
        </Section>

        <Section title="9. Contact Us">
          <p className="text-gray-600">
            For privacy-related questions, email us at:
            <a
              href="mailto:support@yourdomain.com"
              className="text-blue-600 underline ml-1 font-medium"
            >
              support@yourdomain.com
            </a>
          </p>
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

const List = ({ children }) => (
  <ul className="space-y-3 pl-1">{children}</ul>
);

const Item = ({ label, text }) => (
  <li className="flex items-start gap-3">
    <div className="mt-1 w-2 h-2 bg-yellow-500 rounded-full"></div>
    <p className="text-gray-600 leading-snug">
      {label && <b>{label}: </b>}
      {text}
    </p>
  </li>
);

export default PrivacyPolicy;
