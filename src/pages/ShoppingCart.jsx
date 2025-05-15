import React, { useState } from "react";
import { FaPlus, FaMinus, FaTrash, FaTicketAlt } from "react-icons/fa";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Negrese crocante",
      image: "src/assets/negrese-crocante.jpg",
      quantity: 2,
      price: 18,
    },
    {
      id: 2,
      title: "Brioșe etajate",
      image: "src/assets/briose-stratificate.jpg",
      quantity: 5,
      price: 30,
    },
    {
      id: 3,
      title: "Tort Opera",
      image: "src/assets/tort-opera.jpg",
      quantity: 1,
      price: 200,
    },
    {
      id: 4,
      title: "Tarte cu mere",
      image: "src/assets/tarte-mere.png",
      quantity: 4,
      price: 20,
    },
    {
      id: 5,
      title: "Crème Brûlée cu espresso",
      image: "src/assets/cremebrulee-cafea.jpg",
      quantity: 2,
      price: 18,
    },
  ]);
  const [coupon, setCoupon] = useState("");
  const [shipping, setShipping] = useState("standard");

  const handleQuantityChange = (id, delta) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  const shippingCost =
    shipping === "express" ? 30 : shipping === "courier" ? 25 : 10;
  const discount = coupon === "DISCOUNT10" ? 0.1 * subtotal : 0;
  const totalPrice = subtotal + shippingCost - discount;

  return (
    <div className="flex flex-col md:flex-row justify-between gap-8 p-8 bg-yellow-100 min-h-screen">
      {/* Left Side */}
      <div className="flex-1 space-y-6">
        <h2 className="text-2xl font-bold">
          COȘ DE CUMPĂRĂTURI ({totalItems} produse)
        </h2>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center border rounded-lg p-4 bg-white shadow-sm"
          >
            {/* Left side: image, title, quantity on mobile */}
            <div className="flex flex-col md:flex-row items-start w-full md:w-1/2 gap-4">
              <div className="flex gap-4 items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <span className="font-medium text-lg">{item.title}</span>
              </div>

              {/* Quantity controls on mobile only */}
              <div className="flex md:hidden items-center gap-2 mt-2 ml-1">
                <button
                  className="px-2 py-1 border rounded-md hover:bg-gray-200"
                  onClick={() => handleQuantityChange(item.id, -1)}
                >
                  <FaMinus />
                </button>
                <span className="px-4 text-md font-semibold">
                  {item.quantity}
                </span>
                <button
                  className="px-2 py-1 border rounded-md hover:bg-gray-200"
                  onClick={() => handleQuantityChange(item.id, 1)}
                >
                  <FaPlus />
                </button>
              </div>
            </div>

            {/* Quantity controls on desktop */}
            <div className="hidden md:flex items-center justify-center w-full md:w-1/4 mt-4 md:mt-0 gap-2">
              <button
                className="px-2 py-1 border rounded-md hover:bg-gray-200"
                onClick={() => handleQuantityChange(item.id, -1)}
              >
                <FaMinus />
              </button>
              <span className="px-4 text-md font-semibold">
                {item.quantity}
              </span>
              <button
                className="px-2 py-1 border rounded-md hover:bg-gray-200"
                onClick={() => handleQuantityChange(item.id, 1)}
              >
                <FaPlus />
              </button>
            </div>

            {/* Price and delete */}
            <div className="flex w-full md:w-1/4 mt-4 md:mt-0 justify-between md:justify-end items-center gap-4">
              <span className="text-lg font-semibold">{item.price} lei</span>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleRemoveItem(item.id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}

        <button className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">
          Înapoi la magazin
        </button>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md space-y-6">
        <h3 className="text-xl font-semibold mb-4">REZUMAT</h3>
        <p className="text-gray-700">Total produse: {totalItems}</p>
        <p className="text-gray-700">Subtotal: {subtotal} lei</p>

        <div>
          <label className="block mb-1 text-gray-700">
            Opțiuni de livrare:
          </label>
          <select
            value={shipping}
            onChange={(e) => setShipping(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="standard">Standard - 10 lei</option>
            <option value="courier">Curier - 25 lei</option>
            <option value="express">Express - 30 lei</option>
          </select>
        </div>

        <div>
          <label className="flex items-center gap-2 text-gray-700">
            <FaTicketAlt /> Cod cupon:
          </label>
          <input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Ex: DISCOUNT10"
            className="w-full p-2 border mt-1 rounded-md"
          />
        </div>

        <hr className="my-4" />

        <p className="text-gray-700 font-medium">
          Cost livrare: {shippingCost} lei
        </p>
        <p className="text-gray-700 font-medium">
          Reducere: -{discount.toFixed(2)} lei
        </p>

        <h4 className="text-lg font-bold">
          Total: {totalPrice.toFixed(2)} lei
        </h4>

        <button className="w-full mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
          Finalizează comanda
        </button>

        <div className="mt-6">
          <button className="text-sm text-blue-600 hover:underline">
            Vrei să te autentifici pentru comandă?
          </button>
          <p className="text-xs text-gray-600 mt-1">
            Autentificarea va salva coșul și va completa automat datele pentru
            comenzile viitoare.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
