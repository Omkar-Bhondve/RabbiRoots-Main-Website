import React from "react";

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-2xl border border-gray-200">

        <h1 className="text-4xl font-bold mb-3 text-gray-900">Return & Refund Policy</h1>
        <p className="text-gray-500 mb-8">Fresh groceries. Fair return policy.</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          At <b>RabbiRoots</b>, we aim to deliver the freshest groceries, vegetables, fruits, 
          and essentials. If something doesn’t meet your expectations, our return and refund policy 
          ensures a smooth and hassle-free experience.
        </p>

        {/* Section 1 */}
        <Section title="1. Items Eligible for Return / Replacement">
          <List>
            <Item text="Damaged or spoiled vegetables, fruits, or groceries." />
            <Item text="Wrong item delivered." />
            <Item text="Missing items from your order." />
            <Item text="Expired products delivered." />
            <Item text="Leakage or tampered packaging for dairy, liquids, or packaged goods." />
          </List>
          <p className="text-gray-600 leading-relaxed mt-3">
            You must report the issue within <b>2 hours</b> of delivery for perishable items.
          </p>
        </Section>

        {/* Section 2 */}
        <Section title="2. Items Not Eligible for Return">
          <List>
            <Item text="Products that were consumed or partially used." />
            <Item text="Fresh items kept unrefrigerated for long durations." />
            <Item text="Items damaged after delivery due to mishandling." />
            <Item text="Products with no issue but returned due to personal preference." />
          </List>
        </Section>

        {/* Section 3 */}
        <Section title="3. How to Request a Return or Refund">
          <p className="text-gray-600 leading-relaxed mb-4">
            You can request a return/refund through:
          </p>
          <List>
            <Item label="In-App Support" text="Open the order → Tap 'Report Issue'." />
            <Item label="Email" text="support@yourdomain.com" />
            <Item label="Phone" text="+91 98765 43210" />
          </List>
          <p className="text-gray-600 leading-relaxed mt-3">
            Please attach a photo of the damaged or incorrect item for faster resolution.
          </p>
        </Section>

        {/* Section 4 */}
        <Section title="4. Refund Timeline">
          <List>
            <Item label="Wallet Refund" text="Instant refund to your in-app wallet." />
            <Item label="UPI Refund" text="2–3 working days." />
            <Item label="Bank / Card Refund" text="3–7 working days." />
          </List>
        </Section>

        {/* Section 5 */}
        <Section title="5. Replacement Policy">
          <p className="text-gray-600 leading-relaxed">
            If the replacement item is available, we will send it immediately.  
            If not, we’ll issue a full refund based on the payment method you used.
          </p>
        </Section>

        {/* Section 6 */}
        <Section title="6. Order Cancellation">
          <List>
            <Item text="Orders can be cancelled before the store starts preparing your items." />
            <Item text="If items are packed or out for delivery, cancellation may not be possible." />
          </List>
        </Section>

        {/* Section 7 */}
        <Section title="7. Contact Us">
          <p className="text-gray-600 leading-relaxed">
            For return or refund queries, reach out at:
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
          <p className="text-gray-700">
            <b>Phone:</b> +91 98765 43210
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

export default ReturnPolicy;
