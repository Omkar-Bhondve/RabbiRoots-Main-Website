import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-2xl border border-gray-200">

        <h1 className="text-4xl font-bold mb-3 text-gray-900">About Us</h1>
        <p className="text-gray-500 mb-8">Who we are & what we stand for</p>

        <p className="text-gray-700 leading-relaxed mb-10">
          Welcome to <b>RabbiRoots</b> — your lightning-fast grocery, food, and 
          daily essentials delivery service.  
          Our mission is simple: <b>to bring fresh groceries, vegetables, fruits, snacks, 
          and household items to your doorstep in minutes.</b>
        </p>

        <Section title="1. Our Story">
          <p className="text-gray-600 leading-relaxed">
            We started <b>RabbiRoots</b> with one clear goal — making everyday shopping 
            effortless. Long queues, delays, and store visits take time.  
            So we built a service that brings everything you need, right when you need it.
          </p>
        </Section>

        <Section title="2. What We Deliver">
          <List>
            <Item text="Fresh fruits & vegetables" />
            <Item text="Groceries & household essentials" />
            <Item text="Dairy, bread, snacks, and beverages" />
            <Item text="Personal care & hygiene products" />
            <Item text="Frozen food, chocolates, and packaged goods" />
          </List>
        </Section>

        <Section title="3. Why Choose Us">
          <List>
            <Item label="Superfast Delivery" text="Your order delivered in minutes." />
            <Item label="Fresh & Quality Items" text="We source directly from trusted partners." />
            <Item label="Affordable Prices" text="Best deals, discounts, and transparent pricing." />
            <Item label="Live Order Tracking" text="Know exactly when your delivery arrives." />
            <Item label="24/7 Support" text="Always here to help with your order." />
          </List>
        </Section>

        <Section title="4. Our Vision">
          <p className="text-gray-600 leading-relaxed">
            We aim to become your daily partner — delivering groceries and essentials at lightning speed, 
            making your day more productive and stress-free.
          </p>
        </Section>

        <Section title="5. Our Team">
          <p className="text-gray-600 leading-relaxed">
            We are a young, passionate team of engineers, delivery partners, designers, and dreamers 
            who want to modernize how India shops for essentials.
          </p>
        </Section>

        <Section title="6. Our Commitment">
          <List>
            <Item text="Deliver fresh & genuine products" />
            <Item text="Keep your data secure & private" />
            <Item text="Provide transparent pricing & offers" />
            <Item text="Ensure reliable, fast, and friendly service" />
          </List>
        </Section>

        <Section title="7. Contact Us">
          <p className="text-gray-600 leading-relaxed">
            Want to connect with us?  
            Email:  
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

export default AboutUs;
