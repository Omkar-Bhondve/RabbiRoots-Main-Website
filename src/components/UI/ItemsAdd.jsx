import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../features/CartSlice.js";
function ItemsAdd({ clone, toggleClone }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const itemPrice = 29;
  const deliveryCharge = 25;
  const handlingCharge = 2;
  const smallCartCharge = 20;

  const subtotal = cartItems.reduce(
    (total, item) =>
      total +
      parseFloat(String(item.price).replace(/[^0-9.-]+/g, "")) * item.quantity,
    0
  );

  const grandTotal =
    subtotal + deliveryCharge + handlingCharge + smallCartCharge;

  const formattedGrandTotal = grandTotal.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });

  const formattedDeliveryCharge = deliveryCharge.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });

  const formattedHandlingCharge = handlingCharge.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });

  const formattedSmallCartCharge = smallCartCharge.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return (
    <div
      className={
        `w-full h-screen bg-[#00000087] fixed top-0 left-0 z-50 transition-opacity duration-300` +
        (clone ? " opacity-100" : " opacity-0") +
        " " +
        (clone ? "pointer-events-auto" : "pointer-events-none")
      }
    >
      <div className="w-[25rem] max-sm:w-full absolute right-0 top-0 h-full bg-zinc-100 shadow-lg transform transition-transform duration-300 ease-in-out px-4">
        {/* Header */}
        <div className="flex justify-between items-center rounded-md p-4 border-b border-gray-200 max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:w-full bg-white mt-4">
          <h2 className="text-md font-semibold text-gray-800">My Cart</h2>
          <button
            onClick={toggleClone}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            <i className="ri-close-line"></i>
          </button>
        </div>

        <div className="p-4 bg-white border-b border-gray-100 mt-3 rounded-xl max-sm:mt-20">
          <div className="flex items-center gap-2 mb-2">
            <svg
              className="w-6 h-5 text-zinc-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <div>
              <span className="text-zinc-800 font-medium text-sm">
                Delivery in 11 minutes
              </span>
              <p className="text-gray-600 text-[10px]">Shipment</p>
            </div>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="p-4 text-center text-gray-600">
            Your cart is empty.
          </div>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-white border-b border-gray-100 mt-3 rounded-xl"
            >
              <div className="flex items-start gap-3">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-normal text-gray-800 text-[12px]">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.size}</p>
                  <p className="font-semibold text-gray-800 mt-1 text-[11px]">
                    {item.price}
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-green-500 rounded-md py-1">
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="w-8 h-8 text-white  flex items-center justify-center font-bold "
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-bold text-white">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="w-8 h-8 text-white  flex items-center justify-center font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))
        )}

        <div className="p-4 bg-white border-b border-gray-100 rounded-xl mt-3">
          <h3 className="font-bold text-gray-800 mb-3">Bill details</h3>

          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="text-gray-700">Items total</span>
              </div>
              <span className="font-medium">
                {subtotal.toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                })}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
                <span className="text-gray-700">Delivery charge</span>
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="font-medium">{formattedDeliveryCharge}</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span className="text-gray-700">Handling charge</span>
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="font-medium">{formattedHandlingCharge}</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                  />
                </svg>
                <span className="text-gray-700">Small cart charge</span>
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="font-medium">{formattedSmallCartCharge}</span>
            </div>
          </div>

          <div className="flex justify-between items-center pt-3 mt-3 border-t border-gray-200">
            <span className="font-bold text-gray-800">Grand total</span>
            <span className="font-bold text-gray-800">
              {formattedGrandTotal}
            </span>
          </div>
        </div>

        <div className="p-4 bg-white border-b border-gray-100 rounded-xl mt-3">
          <h3 className="font-bold text-gray-800 mb-2">Cancellation Policy</h3>
          <p className="text-gray-600 text-[13px]">
            Orders cannot be cancelled once packed for delivery. In case of
            unexpected delays, a refund will be provided, if applicable.
          </p>
        </div>

        <div className="w-[90%] rounded-md absolute bottom-4 left-0 m-auto right-0 bg-green-600 p-2">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-white text-sm font-bold">
                {formattedGrandTotal}
              </p>
              <p className="text-white text-[10px] opacity-90">TOTAL</p>
            </div>
            <button className="text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors">
              Login to Proceed
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemsAdd;
