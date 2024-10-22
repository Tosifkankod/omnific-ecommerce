import { useEffect, useState } from "react";
import CartItem from "./CartItem/CartItem";
import { ref, set, push } from 'firebase/database';
import {database} from '../../../config'
import Footer from "../Footer/Footer";

const Cart = () => {
  const [cartData, setCartData] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [address, setAddress] = useState({
    fullName: "",
    line1: "",
    line2: "",
    pincode: "",
    state: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("COD");

  // Sync cartData with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartData));
  }, [cartData]);

  const handleOnIncrement = (id) => {
    setCartData((prev) => {
      return prev.map((item) => {
        return item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
      });
    });
  };

  const handleOnDecrement = (id) => {
    setCartData((prev) => {
      return prev.map((item) => {
        return item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
          : item; // Ensure quantity doesn't go below 0
      });
    });
  };

  const handleOnRemove = (id) => {
    setCartData((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  // Calculate total price
  const totalPrice = cartData.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  // Handle form input changes
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleOnSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    e.preventDefault();

    // Merge all data (cartData, address, paymentMethod) into one object
    const orderData = {
      cart: cartData,
      address: address,
      paymentMethod: paymentMethod,
      totalPrice: totalPrice,
      orderDate: new Date().toISOString(),
    };

    // Push the merged data to Firebase
    const ordersRef = ref(database, "orders");
    const newOrderRef = push(ordersRef); // Create a new entry in the "orders" node
    set(newOrderRef, orderData) // Save the order data
      .then(() => {
        console.log("Order data saved successfully!");
        // Optionally reset the form or show success message
        setAddress({
          fullName: "",
          line1: "",
          line2: "",
          pincode: "",
          state: "",
        });
        setCartData([]);
      })
      .catch((error) => {
        console.error("Error saving order data: ", error);
      });
  };

  return (
    <>
      <section className="bg-white py-8 antialiased md:py-4">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {cartData.length > 0 ? (
                  cartData.map((item) => (
                    <CartItem
                      image={item.thumbnail}
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      quantity={item.quantity}
                      handleOnIncrement={handleOnIncrement}
                      handleOnDecrement={handleOnDecrement}
                      handleOnRemove={handleOnRemove}
                      price={item.price}
                    />
                  ))
                ) : (
                  <h1>Your cart is empty.</h1>
                )}
              </div>

              {/* Address Section */}
              <section className="bg-white py-8 antialiased md:py-4">
                <h1 className="text-2xl font-bold mb-4">Address</h1>
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                  <form className="mx-auto" onSubmit={handleOnSubmit}>
                    <div className="mb-5">
                      <label
                        htmlFor="fullName"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={address.fullName}
                        onChange={handleOnChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="line1"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Address Line 1
                      </label>
                      <input
                        type="text"
                        id="line1"
                        name="line1"
                        value={address.line1}
                        onChange={handleOnChange}
                        placeholder="Flat No, House No, Building, Company, Apartment"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="line2"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Address Line 2
                      </label>
                      <input
                        type="text"
                        id="line2"
                        name="line2"
                        value={address.line2}
                        onChange={handleOnChange}
                        placeholder="Flat No, House No, Building, Company, Apartment"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="pincode"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        6 Digit Pincode
                      </label>
                      <input
                        type="number"
                        id="pincode"
                        name="pincode"
                        min="6"
                        max="6"
                        value={address.pincode}
                        onChange={handleOnChange}
                        placeholder="000000"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="state"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={address.state}
                        onChange={handleOnChange}
                        placeholder="State"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </section>

              {/* Payment Method Section */}
              <section>
                <h1 className="text-xl font-bold p-2 mb-4">
                  Select Payment Method
                </h1>
                <div className="rounded-md p-2 flex cursor-pointer justify-between shadow-md">
                  <label
                    htmlFor="COD"
                    className="text-xl w-full cursor-pointer"
                  >
                    Cash On Delivery
                  </label>
                  <input
                    name="payment-method"
                    id="COD"
                    type="radio"
                    checked={paymentMethod === "COD"}
                    onChange={() => setPaymentMethod("COD")}
                  />
                </div>
                <div className="rounded-md p-2 flex justify-between cursor-pointer shadow-md mt-4">
                  <label
                    htmlFor="UPI"
                    className="text-xl w-full cursor-pointer"
                  >
                    Online Payment UPI / Credit / Debit
                  </label>
                  <input
                    id="UPI"
                    type="radio"
                    name="payment-method"
                    checked={paymentMethod === "UPI"}
                    onChange={() => setPaymentMethod("UPI")}
                  />
                </div>
              </section>
            </div>

            {/* Order Summary Section */}
            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full sticky top-10">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                <p className="text-xl font-semibold text-gray-900">
                  Order Summary
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500">
                        Original price
                      </dt>
                      <dd className="text-base font-medium text-gray-900">
                        Rs. {totalPrice.toFixed(2)}
                      </dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                    <dt className="text-base font-bold text-gray-900">Total</dt>
                    <dd className="text-base font-bold text-gray-900">
                      Rs. {totalPrice.toFixed(2)}
                    </dd>
                  </dl>
                </div>

                <button
                  onClick={handleOnSubmit}
                  href="#"
                  className="flex bg-blue-400 w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Cart;
