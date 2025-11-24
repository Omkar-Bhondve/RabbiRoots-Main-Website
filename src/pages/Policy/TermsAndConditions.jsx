import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-2xl border border-gray-200">

        <h1 className="text-4xl font-bold mb-3 text-gray-900">Terms & Conditions</h1>
        <p className="text-gray-500 mb-8">
          Please read these Terms carefully before using our services.
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          These Terms & Conditions (“Terms”) govern the use of <b>RabbiRoots</b>’s 
          grocery, food, and essentials delivery platform. By accessing or using our app/website, 
          you agree to these Terms.
        </p>

        {/* Section 1 */}
        <Section title="1. Eligibility">
          <List>
            <Item text="You must be at least 13 years old to use our services." />
            <Item text="You must provide accurate contact, address, and payment information." />
          </List>
        </Section>

        {/* Section 2 */}
        <Section title="2. Account Responsibilities">
          <List>
            <Item text="You are responsible for maintaining the confidentiality of your account." />
            <Item text="Any activity under your account is your responsibility." />
            <Item text="Notify us immediately if you suspect unauthorized access." />
          </List>
        </Section>

        {/* Section 3 */}
        <Section title="3. Ordering & Delivery">
          <List>
            <Item text="Orders cannot always be cancelled once preparation begins." />
            <Item text="Delivery time may vary depending on location, store availability, and traffic." />
            <Item text="We may cancel an order if items are unavailable or due to operational issues." />
          </List>
        </Section>

        {/* Section 4 */}
        <Section title="4. Pricing & Payments">
          <List>
            <Item text="Prices may change based on market conditions and product availability." />
            <Item text="Taxes, delivery charges, or platform fees may apply." />
            <Item text="Payments must be made via UPI, cards, wallet, or COD (if enabled)." />
          </List>
        </Section>

        {/* Section 5 */}
        <Section title="5. Refunds & Returns">
          <p className="text-gray-600 leading-relaxed mb-3">
            Refunds and returns follow our official policy:
          </p>
          <a
            href="/return-policy"
            className="text-blue-600 underline font-medium"
          >
            View Return & Refund Policy
          </a>
        </Section>

        {/* Section 6 */}
        <Section title="6. Prohibited Activities">
          <List>
            <Item text="Placing fake orders or misuse of coupons/offers." />
            <Item text="Using abusive language towards delivery partners or staff." />
            <Item text="Tampering with products or reporting false issues." />
            <Item text="Trying to hack, reverse-engineer, or disrupt the platform." />
          </List>
        </Section>

        {/* Section 7 */}
        <Section title="7. Service Availability">
          <p className="text-gray-600 leading-relaxed">
            We may modify, pause, or discontinue parts of the service due to maintenance, 
            store availability, or operational reasons.
          </p>
        </Section>

        {/* Section 8 */}
        <Section title="8. Offers, Coupons & Discounts">
          <List>
            <Item text="Offers may be time-sensitive and subject to conditions." />
            <Item text="Misuse of offers may lead to account suspension." />
          </List>
        </Section>

        {/* Section 9 */}
        <Section title="9. Limitation of Liability">
          <p className="text-gray-600 leading-relaxed">
            We are not responsible for:
          </p>
          <List>
            <Item text="Delays caused by traffic, weather, or unforeseen issues." />
            <Item text="Incorrect addresses provided by the user." />
            <Item text="Any loss beyond the value of the order." />
          </List>
        </Section>

        {/* Section 10 */}
        <Section title="10. Account Suspension or Termination">
          <List>
            <Item text="We may suspend or terminate accounts involved in fraud or violations." />
            <Item text="Repeated cancellations, abuse, or misuse can lead to restrictions." />
          </List>
        </Section>

        {/* Section 11 */}
        <Section title="11. Changes to These Terms">
          <p className="text-gray-600 leading-relaxed">
            We may update these Terms periodically. Continued use of the service means you 
            accept the updated Terms.
          </p>
        </Section>

        {/* Section 12 */}
        <Section title="12. Contact Us">
          <p className="text-gray-600 leading-relaxed">
            For questions or complaints, contact us at:
          </p>
          <p className="text-gray-700 mt-2">
            <b>Email:</b>{" "}
            <a
              href="mailto:support@yourdomain.com"
              className="text-blue-600 underline font-medium"
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

export default TermsAndConditions;
