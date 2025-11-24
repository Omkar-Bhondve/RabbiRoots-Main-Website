import {
  Clock,
  ChevronDown,
  Shield,
  Truck,
  RotateCcw,
  Star,
} from "lucide-react";
import { useState } from "react";
import Category from "../components/Categories/Category";

const categories = [
  {
    name: "Cigar",
    items: [],
  },
  {
    name: "Pan",
    items: [],
  },
  {
    name: "Health",
    items: [],
  },
  {
    name: "Protein",
    items: [],
  },
  {
    name: "Masks",
    items: [],
  },
];

const products = [
  {
    id: 1,
    name: "Am Safe-X Disposable Surgical 3 Ply Mask...",
    price: 239,
    originalPrice: 699,
    discount: "65% OFF",
    image:
      "https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=400",
    deliveryTime: "12 MINS",
    packInfo: "50 pieces",
    hasOptions: true,
  },
  {
    id: 2,
    name: "Dettol Original Instant Hand Sanitizer",
    price: 30,
    originalPrice: 35,
    discount: "14% OFF",
    image:
      "https://images.pexels.com/photos/4167449/pexels-photo-4167449.jpeg?auto=compress&cs=tinysrgb&w=400",
    deliveryTime: "18 MINS",
    packInfo: "200 ml",
  },
  {
    id: 3,
    name: "Dettol Original Alcohol Based Hand Sanitizer",
    price: 106,
    originalPrice: 125,
    discount: "15% OFF",
    image:
      "https://images.pexels.com/photos/4167449/pexels-photo-4167449.jpeg?auto=compress&cs=tinysrgb&w=400",
    deliveryTime: "18 MINS",
    packInfo: "200 ml",
  },
  {
    id: 4,
    name: "Filixtrue Disposable 3 Ply Mask (Blue)",
    price: 219,
    originalPrice: 499,
    discount: "56% OFF",
    image:
      "https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=400",
    deliveryTime: "18 MINS",
    packInfo: "1 pack (50 pieces)",
  },
  {
    id: 5,
    name: "SynoCare 3-Ply Disposable Surgical...",
    price: 289,
    originalPrice: 500,
    discount: "42% OFF",
    image:
      "https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=400",
    deliveryTime: "12 MINS",
    packInfo: "1 pack (50 pieces)",
  },
  {
    id: 6,
    name: "Control D N95 Mask (5 pcs, White)",
    price: 170,
    originalPrice: 250,
    discount: "32% OFF",
    image:
      "https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=400",
    deliveryTime: "18 MINS",
    packInfo: "1 pack (5 pieces)",
  },
  {
    id: 7,
    name: "Filixtrue Disposable Surgical 3 Ply Mask",
    price: 388,
    discount: "60% OFF",
    image:
      "https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=400",
    deliveryTime: "18 MINS",
    packInfo: "1 pack (100 pieces)",
  },
  {
    id: 8,
    name: "QUARANT Kids Disposable 3 Ply Mas...",
    price: 299,
    discount: "40% OFF",
    image:
      "https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=400",
    deliveryTime: "12 MINS",
    packInfo: "1 pack (50 pieces)",
  },
  {
    id: 9,
    name: "QUARANT Kids Disposable 3 Ply Mas...",
    price: 349,
    discount: "30% OFF",
    image:
      "https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=400",
    deliveryTime: "12 MINS",
    packInfo: "1 pack (50 pieces)",
  },
  {
    id: 10,
    name: "Am Safe-X Disposable Bouffant Caps (White)",
    price: 299,
    discount: "50% OFF",
    image:
      "https://images.pexels.com/photos/4167450/pexels-photo-4167450.jpeg?auto=compress&cs=tinysrgb&w=400",
    deliveryTime: "12 MINS",
    packInfo: "1 pack (100 pieces)",
  },
  {
    id: 11,
    name: "QUARANT KF94 Korean Style Designe...",
    price: 299,
    discount: "75% OFF",
    image:
      "https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=400",
    deliveryTime: "12 MINS",
    packInfo: "10 pieces",
  },
  {
    id: 12,
    name: "Am Safe-X Medium Disposable Nitrile Gloves",
    price: 278,
    discount: "72% OFF",
    image:
      "https://images.pexels.com/photos/4167450/pexels-photo-4167450.jpeg?auto=compress&cs=tinysrgb&w=400",
    deliveryTime: "12 MINS",
    packInfo: "1 pack (50 pieces)",
  },
  {
    id: 13,
    name: "Am Safe-X Disposable Surgical 3 Ply Mask (Blue)",
    price: 239,
    discount: "65% OFF",
    image:
      "https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&w=400",
    deliveryTime: "12 MINS",
    packInfo: "50 pieces",
    date: new Date().toISOString().split("T")[0],
  },
  {
    id: 14,
    name: "Dettol Original Instant Hand Sanitizer",
    price: 30,
    discount: "14% OFF",
    image:
      "https://images.pexels.com/photos/3985211/pexels-photo-3985211.jpeg?auto=compress&cs=tinysrgb&w=400",
    deliveryTime: "18 MINS",
    packInfo: "50 ml",
    date: new Date().toISOString().split("T")[0],
  },
  {
    id: 15,
    name: "Dettol Original Alcohol Based Hand Sanitizer",
    price: 106,
    discount: "15% OFF",
    image:
      "https://images.pexels.com/photos/4158251/pexels-photo-4158251.jpeg?auto=compress&cs=tinysrgb&w=400",
    deliveryTime: "18 MINS",
    packInfo: "200 ml",
    date: new Date().toISOString().split("T")[0],
  },
  {
    id: 16,
    name: "Filixtrue Disposable 3 Ply Mask",
    price: 219,
    discount: "56% OFF",
    image:
      "https://images.pexels.com/photos/4328824/pexels-photo-4328824.jpeg?auto=compress&cs=tinysrgb&w=400",
    deliveryTime: "18 MINS",
    packInfo: "50 pieces",
    date: new Date().toISOString().split("T")[0],
  },
  {
    id: 17,
    name: "SynoCare Disposable Black Surgical Masks",
    price: 289,
    discount: "42% OFF",
    image:
      "https://images.pexels.com/photos/6813956/pexels-photo-6813956.jpeg?auto=compress&cs=tinysrgb&w=400",
    deliveryTime: "12 MINS",
    packInfo: "1 pack (50 pieces)",
    date: new Date().toISOString().split("T")[0],
  },
  {
    id: 18,
    name: "Control D N95 Protective Mask (White, Pack of 5)",
    price: 170,
    discount: "32% OFF",
    image:
      "https://images.pexels.com/photos/6996764/pexels-photo-6996764.jpeg?auto=compress&cs=tinysrgb&w=400",
    deliveryTime: "18 MINS",
    packInfo: "5 pieces",
    date: new Date().toISOString().split("T")[0],
  },
  {
    id: 19,
    name: "QUARANT Kids Disposable 3 Ply Mask",
    price: 299,
    discount: "40% OFF",
    image:
      "https://images.pexels.com/photos/4473881/pexels-photo-4473881.jpeg?auto=compress&cs=tinysrgb&w=400",
    deliveryTime: "12 MINS",
    packInfo: "1 pack (50 pieces)",
    date: new Date().toISOString().split("T")[0],
  },
  {
    id: 20,
    name: "Disposable Bouffant Hair Caps",
    price: 299,
    discount: "50% OFF",
    image:
      "https://images.pexels.com/photos/8732940/pexels-photo-8732940.jpeg?auto=compress&cs=tinysrgb&w=400",
    deliveryTime: "12 MINS",
    packInfo: "100 caps",
    date: new Date().toISOString().split("T")[0],
  },
  {
    id: 21,
    name: "QUARANT KF94 Korean Style Designer Masks",
    price: 349,
    discount: "30% OFF",
    image:
      "https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&w=400",
    deliveryTime: "18 MINS",
    packInfo: "10 pieces",
    date: new Date().toISOString().split("T")[0],
  },
  {
    id: 22,
    name: "Am Safe-X Nitrile Gloves (Blue)",
    price: 278,
    discount: "72% OFF",
    image:
      "https://images.pexels.com/photos/4167547/pexels-photo-4167547.jpeg?auto=compress&cs=tinysrgb&w=400",
    deliveryTime: "12 MINS",
    packInfo: "50 pieces",
    date: new Date().toISOString().split("T")[0],
  },
  {
    id: 23,
    name: "Hand Wash Liquid Refill Pack",
    price: 89,
    discount: "20% OFF",
    image:
      "https://images.pexels.com/photos/7362924/pexels-photo-7362924.jpeg?auto=compress&cs=tinysrgb&w=400",
    deliveryTime: "16 MINS",
    packInfo: "500 ml",
    date: new Date().toISOString().split("T")[0],
  },
  {
    id: 24,
    name: "Dettol Antibacterial Soap (Pack of 3)",
    price: 124,
    discount: "18% OFF",
    image:
      "https://images.pexels.com/photos/4210379/pexels-photo-4210379.jpeg?auto=compress&cs=tinysrgb&w=400",
    deliveryTime: "15 MINS",
    packInfo: "3 soaps",
    date: new Date().toISOString().split("T")[0],
  },
];

function App() {
  const [sidebarCategories, setSidebarCategories] = useState(
    categories.map((cat) => ({ ...cat, expanded: false }))
  );
  const [selectedCategory, setSelectedCategory] = useState(0);

  const toggleCategory = (index) => {
    setSidebarCategories((prev) =>
      prev.map((cat, i) => ({
        ...cat,
        expanded: i === index ? !cat.expanded : cat.expanded,
      }))
    );
  };

  const handleCategoryClick = (index) => {
    setSelectedCategory(index);
  };

  const renderCategoryContent = (categoryIndex) => {
    switch (categoryIndex) {
      case 0:
        return {
          title: "Buy Cigar Online",
          description: "Explore our Cigar products",
        };
      case 1:
        return {
          title: "Buy Pan Masala Online",
          description: "Premium pan masala products for you",
        };
      case 2:
        return {
          title: "Buy Health & Wellness Supplements Online",
          description: "Get the best health and wellness supplements",
        };
      case 3:
        return {
          title: "Buy Protein and Workout Supplements Online",
          description: "Premium protein and workout supplements for fitness",
        };
      case 4:
        return {
          title: "Buy Masks & Sanitizers Online",
          description: "Shop for masks and sanitizers for health protection",
        };
      default:
        return {
          title: "Welcome to Our Store",
          description: "Select a category to browse products",
        };
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col py-3 md:py-6 px-3 md:px-22 max-lg:px-8 shadow-sm bg-gray-100">
      <div className="flex gap-2 md:gap-4 p-2 md:p-6 flex-1 overflow-hidden flex-col md:flex-row">
        <aside className="hidden md:flex w-full md:w-28 sticky top-0 flex-shrink-0 shadow-lg md:h-screen overflow-y-auto bg-white p-2 md:p-3 rounded-lg flex-col gap-2">
          <h2 className="text-xs md:text-sm font-semibold text-gray-700 mb-2 md:mb-3 text-center">
            Products
          </h2>
          <div className="flex flex-col gap-2 md:gap-3">
            {products.slice(0, 5).map((prod) => (
              <div
                key={prod.id}
                className="flex flex-col items-center text-center rounded p-1 md:p-2 bg-white hover:shadow-sm transition"
              >
                <div className="w-12 h-12 md:w-15 md:h-15 mb-1 rounded overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xs text-gray-700 w-16 md:w-20 break-words">
                  {prod.name}
                </div>
              </div>
            ))}
          </div>
        </aside>

        <main className="flex-1 shadow-lg p-3 md:p-6 bg-white rounded-lg overflow-y-auto">
          <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-2">
            {renderCategoryContent(selectedCategory).title}
          </h1>
          <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">
            {renderCategoryContent(selectedCategory).description}
          </p>
          <hr className="mb-4 md:mb-6" />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-lg p-2 md:p-3 hover:shadow-md transition-shadow duration-200 relative group"
              >
                <div className="absolute top-1 md:top-2 left-1 md:left-2 bg-orange-500 text-white text-xs font-bold px-1.5 md:px-2 py-0.5 rounded z-10">
                  {product.discount}
                </div>

                <div className="aspect-square mb-1 md:mb-2 flex items-center justify-center bg-gray-50 rounded overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-2"
                  />
                </div>

                <div className="flex items-center gap-0.5 text-gray-600 text-xs mb-1">
                  <Clock size={10} />
                  <span className="font-semibold text-xs">
                    {product.deliveryTime}
                  </span>
                </div>

                <h3 className="text-xs font-medium text-gray-900 mb-1 line-clamp-2 h-8">
                  {product.name}
                </h3>

                <p className="text-xs text-gray-600 mb-1 md:mb-2">
                  {product.packInfo}
                </p>

                <div className="flex items-center justify-between gap-1">
                  <div>
                    <span className="text-xs md:text-sm font-bold text-gray-900">
                      ₹{product.price}
                    </span>
                    {product.originalPrice && (
                      <p className="text-xs text-gray-500 line-through">
                        ₹{product.originalPrice}
                      </p>
                    )}
                  </div>

                  {product.hasOptions ? (
                    <button className="bg-white border-2 border-green-600 text-green-600 text-xs font-semibold px-1.5 md:px-2 py-1 rounded hover:bg-green-500 hover:text-white transition-all duration-200">
                      ADD
                    </button>
                  ) : (
                    <button className="bg-white border-2 border-green-600 text-green-600 text-xs font-semibold px-2 md:px-3 py-1 rounded hover:bg-green-500 hover:text-white transition-all duration-200">
                      ADD
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
