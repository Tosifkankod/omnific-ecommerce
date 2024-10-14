import { useEffect, useState } from "react";
import "./ProductPage.css";
import db from "../../assets/db.json";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { product } = useParams();
  const [productData, setProductData] = useState();

  const addToCartHandler = () => {
    // Retrieve the cart from localStorage, or initialize it as an empty array if null
    let data = JSON.parse(localStorage.getItem("cart")) ;
    data.push({...productData, quantity: 1});
    localStorage.setItem("cart", JSON.stringify(data));


    alert('added Successfully')
  };

  useEffect(() => {
    let item = db.find((item) => {
      return item.id == product;
    });

    setProductData(item);
  }, []);

  return (
    <div className="p-3 px-5">
      {productData ? (
        <div className="first flex flex-wrap flex-col lg:flex-row ">
          {/* left */}
          <div className="left flex-1    p-2">
            <div className="img-cont sm:h-[300px] md:h-[350px] lg:h-[500px] flex items-center justify-center border-yellow-300">
              <img
                className="w-full h-full object-contain"
                src={productData.image}
                alt=""
              />
            </div>
          </div>

          {/* RIGHT  */}
          <div className="right overflow-hidden flex-1 p-2  ">
            <h1 className="lg:text-2xl text-lg md:text-xl font-bold ">
              {productData.title}
            </h1>
            <div className="main-price flex items-end gap-2 mt-3">
              <p className="line-through text-xl text-red-600 ">
                ₹ {productData.mrp}
              </p>
              <h1 className="text-2xl lg:text-3xl font-bold">
                ₹ {productData.price}
              </h1>
            </div>

            {/* BUYNOW */}
            <button
              onClick={addToCartHandler}
              className="flex py-2 px-4 text-xl items-center gap-3 mt-4 rounded-md bg-blue-500 text-white hover:shadow-lg "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              Add To Cart
            </button>

            {/* ABOUT */}
            <div className="para mt-5 ">
              <h2 className="font-bold pl-3">About this Item</h2>
              <ul
                className="mt-3 list-disc  list-oustide pl-3 text-sm "
                itemType=""
              >
                <li>{productData.description}</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default ProductPage;
