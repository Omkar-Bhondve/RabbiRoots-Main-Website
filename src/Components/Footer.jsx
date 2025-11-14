import React from "react";
import "remixicon/fonts/remixicon.css";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10 px-4 sm:px-8 md:px-16 lg:px-22">
      <div className="w-full mx-auto max-w-7xl">
        <div className="w-full flex flex-col gap-10 md:gap-8 md:flex-row md:items-start md:justify-between">
          {/* Useful Links Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Partner Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4 md:invisible">Partner</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Partner
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Franchise
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Seller
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Warehouse
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Deliver
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Recipes & Bistro Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4 md:invisible">
              Recipes & Bistro
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Recipes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Bistro
                </a>
              </li>
               <li>
                <a href="#" className="hover:underline">
                  District
                </a>
              </li>
            </ul>
          </div>

          {/* Categories Section */}
          <div className="mb-8 md:mb-0 w-full sm:w-auto md:w-[340px]">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
              <h3 className="text-lg font-bold">Categories</h3>
              <a
                href="#"
                className="text-green-500 text-sm hover:underline mt-2 sm:mt-0"
              >
                see all
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Vegetables & Fruits
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cold Drinks & Juices
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Bakery & Biscuits
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Dry Fruits, Masala & Oil
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Paan Corner
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Pharma & Wellness
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Ice Creams & Frozen Desserts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Beauty & Cosmetics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Electronics & Electricals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Toys & Games
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Rakhi Gifts
                  </a>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Dairy & Breakfast
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Instant & Frozen Food
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sweet Tooth
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sauces & Spreads
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Organic & Premium
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cleaning Essentials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Personal Care
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Magazines
                  </a>
                </li>
                
              </ul>
            </div>
          </div>

          {/* More Categories Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4 md:invisible">
              More Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Munchies
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tea, Coffee & Health Drinks
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Atta, Rice & Dal
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Chicken, Meat & Fish
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Baby Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Home & Office
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pet Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Fashion & Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Books
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  E-Gift Cards
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-300" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-4 md:space-y-0">
          <p className="text-center md:text-left">
            © RabbiRoots Commerce Private Limited, 2024-2025
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-4">
              <span className="font-semibold text-gray-700">Download App</span>
              <a href="#">
                <i className="ri-apple-fill"></i>
              </a>
              <a href="#">
                <i className="ri-google-play-fill"></i>
              </a>
            </div>
            <div className="flex space-x-4 mt-2 sm:mt-0">
              <a href="#" aria-label="Facebook">
                <i className="ri-facebook-circle-fill"></i>
              </a>
              <a href="#" aria-label="X (Twitter)">
                <i className="ri-twitter-x-fill"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="ri-linkedin-box-fill"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-500 text-center md:text-left">
          <p>
            "RabbiRoots" is owned & managed by "RabbiRoot Commerce Private Limited" and
            is not related, linked or interconnected in whatsoever manner or
            nature, to "GROFFR.COM" which is a real estate services business
            operated by "Redstone Consultancy Services Private Limited".
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
