import React from "react";
import Image from "next/image";
import Link from "next/link";
import {HiShoppingCart} from "react-icons/hi"
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const MenuItem = ({ product }) => {
  const cart = useSelector((state) => state.cart);
  const findCart = cart.products.find((item) => item._id === product._id);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addProduct({
        ...product,
        extras: [{ text: "empty" }],
        price: product.prices[0],
        quantity: 1,
      })
    );
  };

  return (
   <div className="bg-slate-600 h-[400px]">
   <div className="w-full bg-[#f1f2f3] h-[210px] grid place-content-center">


   <Link href={`/product/${product._id}`}>
          <div className="relative w-36 h-36 hover:scale-110 transition-all">
          <Image src={product.img} alt="" layout="fill" priority />
          </div>
        </Link>

   </div>

    <div className="p-[25px] text-white">
    <h4 className="text-xl font-semibold">{product.title}</h4>
        <p className="text-[15px]">{product.desc}</p>

      <div className="flex justify-between items-center mt-3">
      <span>${product.prices[0]}</span>

      <button
            className="btn-primary !w-10 !h-10 !rounded-full !p-0 grid place-content-center"
            disabled={findCart}
            onClick={handleClick}
          >
        <HiShoppingCart/></button> 
      </div>

    </div>
      
    </div>
  )
}

export default MenuItem
