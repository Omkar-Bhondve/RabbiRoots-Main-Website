import React from "react";  
import logoItem from "/logoItems.avif";

function CardText() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500">
        Home / Snacks & Munchies / <span className="text-gray-800 font-medium">Beanly Choco Hazelnut Spread with Breadsticks</span>
      </p>

      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-900 mt-2">
        Beanly Choco Hazelnut Spread with Breadsticks
      </h1>

      {/* Delivery time */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
        <span className="bg-gray-100 px-2 py-1 rounded-md text-gray-700 font-medium text-[10px]">11 MINS</span>
      </div>

      {/* Brand */}
      <div className="flex items-center justify-between border-b py-3">
        <div className="flex items-center gap-2">
          <img
            src={logoItem}
            alt="Brand"
            className="w-10 h-10 object-contain"
          />
          <div>
            <h4 className="text-[12px] font-bold leading-2">Beanly</h4>
            <a href="#" className="text-green-600 text-sm text-[12px]">Explore all products</a>
          </div>
        </div>
        <button className="text-gray-600 text-xl">→</button>
      </div>

      {/* Price Section */}
      <div className="py-4 flex items-center justify-between">
        <div>
          <p className="text-[12px] text-gray-700">52 g</p>
        <div className="flex items-center gap-3 mt-1">
          <p className="text-xl font-bold">₹99</p>
          <p className="line-through text-gray-400">₹150</p>
          <span className="bg-blue-100 text-blue-600 text-xs font-bold px-2 py-1 rounded">34% OFF</span>
        </div>
        <p className="text-xs text-gray-500">(Inclusive of all taxes)</p>
        </div>
        <button className="mt-4 bg-green-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-green-700">
          Add to cart
        </button>
      </div>

      {/* Why shop from Blinkit */}
      <div className="mt-8">
        <h2 className="text-lg font-bold mb-4">Why shop from blinkit?</h2>

        <div className="flex items-start gap-3 mb-4">
          <img src="/delivery.avif" alt="delivery" className="w-10 h-10" />
          <div>
            <h3 className="font-semibold text-[13px]">Superfast Delivery</h3>
            <p className="text-sm text-gray-600">Get your order delivered to your doorstep at the earliest from dark stores near you.</p>
          </div>
        </div>

        <div className="flex items-start gap-3 mb-4">
          <img src="/PricesOffers.avif" alt="offers" className="w-10 h-10" />
          <div>
            <h3 className="font-semibold text-[13px]">Best Prices & Offers</h3>
            <p className="text-sm text-gray-600">Best price destination with offers directly from the manufacturers.</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <img src="/Assortment.avif" alt="assortment" className="w-10 h-10" />
          <div>
            <h3 className="font-semibold text-[13px]">Wide Assortment</h3>
            <p className="text-sm text-gray-600">Choose from 5000+ products across food, personal care, household & other categories.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardText;
