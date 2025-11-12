import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { createUnifiedProducts } from "../Data/ProductsItems";
import Loader from "../Components/Loader";
import { useDispatch } from "react-redux";
import { addToCart } from "../Features/CartSlice";
import { Truck, Shield, Repeat, Star } from "lucide-react";

function ShowItem() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [addSuccess, setAddSuccess] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const dispatch = useDispatch();

  // Ensure id is parsed as a number for comparison
  const allProducts = createUnifiedProducts();
  const item = allProducts.find(
    (product) =>
      String(product.globalId) === String(id) ||
      Number(product.globalId) === Number(id)
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (item) document.title = `${item.name} • RabbiRoots`;
    return () => (document.title = "RabbiRoots");
  }, [item]);

  useEffect(() => setSelectedImageIndex(0), [item]);

  const related = useMemo(
    () => allProducts.filter((p) => p.globalId !== item?.globalId).slice(0, 12),
    [allProducts, item]
  );

  if (!item && !loading) {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold text-red-600">Item Not Found</h1>
        <p>No item found with ID: {id}</p>
      </div>
    );
  }

  if (loading) return <Loader />;

  const formatPrice = (price) => {
    if (typeof price === "string" && price.includes("₹")) return price;
    if (typeof price === "number") return `₹${price}`;
    return price;
  };

  const handleAddToCart = () => {
    if (!item) return;
    dispatch(addToCart({ ...item, quantity }));
    setAddSuccess(true);
    setTimeout(() => setAddSuccess(false), 1200);
  };

  const increase = () => setQuantity((q) => Math.min(99, q + 1));
  const decrease = () => setQuantity((q) => Math.max(1, q - 1));

  const gallery =
    item?.images && item.images.length ? item.images : [item.image];

  return (
    <div className="py-12 px-4 lg:px-20 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Image gallery - Light background with subtle styling */}
        <div className="lg:w-1/2 bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200">
          {/* Main image display */}
          <div className="bg-gradient-to-br from-white to-gray-100 rounded-xl p-6 mb-4 ">
            <div className="aspect-square bg-white rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src={gallery[selectedImageIndex]}
                alt={`${item.name} - ${selectedImageIndex + 1}`}
                className="w-full h-full object-contain p-4"
              />
            </div>
          </div>

          {/* Thumbnail grid */}
          {gallery.length > 1 && (
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <p className="text-xs text-gray-600 font-semibold mb-3">
                Click to view images
              </p>
              <div className="grid grid-cols-4 gap-3">
                {gallery.map((g, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all hover:shadow-md ${
                      idx === selectedImageIndex
                        ? "border-green-500 shadow-md"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    title={`Image ${idx + 1}`}
                  >
                    <img
                      src={g}
                      alt={`thumbnail-${idx}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Description below gallery */}
          <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">
              About this product
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {item.description ||
                item.short ||
                "No description available for this product."}
            </p>
          </div>
        </div>

        {/* Right: Details - White background with premium styling */}
        <div className="lg:w-1/2 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col">
          <h1 className="text-3xl font-extrabold mb-2 text-gray-800">
            {item.name}
          </h1>

          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
            <div className="flex items-center text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm text-gray-600 font-medium">
              (based on 235 reviews)
            </span>
          </div>

          {/* Pricing section */}
          <div className="mb-6 bg-green-50 rounded-lg p-4 border border-green-200">
            <div className="text-3xl font-extrabold text-green-600">
              {formatPrice(item.price)}
            </div>
            {item.originalPrice && (
              <div className="text-sm text-gray-500 line-through mt-1">
                {formatPrice(item.originalPrice)}
              </div>
            )}
            {item.discount && (
              <div className="text-sm font-semibold text-orange-600 mt-2">
                {item.discount} off
              </div>
            )}
          </div>

          {/* Details section */}
          <div className="mb-6 bg-gray-50 rounded-lg p-4 border border-gray-200">
            <p className="mb-2">
              <span className="font-semibold text-gray-800">Size:</span>{" "}
              <span className="text-gray-600">{item.size || "Standard"}</span>
            </p>
            <p>
              <span className="font-semibold text-gray-800">Delivery:</span>{" "}
              <span className="text-gray-600">
                {item.deliveryTime || "Standard delivery"}
              </span>
            </p>
          </div>

          {/* Quantity + Add to cart */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={decrease}
                className="px-4 py-2 hover:bg-gray-100 font-bold text-gray-700"
              >
                −
              </button>
              <div className="px-5 py-2 font-semibold text-gray-800 border-l border-r border-gray-200">
                {quantity}
              </div>
              <button
                onClick={increase}
                className="px-4 py-2 hover:bg-gray-100 font-bold text-gray-700"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={addSuccess}
              className={`flex-1 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:opacity-95 transition-all cursor-pointer ${
                addSuccess ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {addSuccess ? "✓ Added to Cart" : "Add to Cart"}
            </button>
          </div>

          {/* Trust badges */}
          <div className="mt-auto bg-gradient-to-b from-orange-50 to-green-50 rounded-lg p-5 border border-orange-100">
            <h4 className="font-bold text-gray-800 mb-4">
              Why shop from RabbiRoots?
            </h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center">
                <Truck className="text-orange-500 mb-2" size={24} />
                <div className="font-semibold text-sm text-gray-800">
                  Fast Delivery
                </div>
                <div className="text-xs text-gray-600">Within 30 mins</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="text-green-500 mb-2" size={24} />
                <div className="font-semibold text-sm text-gray-800">
                  Secure
                </div>
                <div className="text-xs text-gray-600">Verified products</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <Repeat className="text-blue-500 mb-2" size={24} />
                <div className="font-semibold text-sm text-gray-800">
                  Easy Returns
                </div>
                <div className="text-xs text-gray-600">7-day policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">
          Related products in this category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {related.map((p) => (
            <div key={p.globalId} className="bg-white rounded-lg p-3 shadow-sm">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-36 object-contain mb-2"
              />
              <div className="text-sm font-medium line-clamp-2">{p.name}</div>
              <div className="text-sm text-gray-700">
                {formatPrice(p.price)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShowItem;
