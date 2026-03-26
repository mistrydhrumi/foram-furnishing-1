import { ShoppingCart } from "lucide-react";
import React from "react";
import { Button } from "./button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { setCart } from "@/redux/productSlice";
import axios from "axios";

const ProductCard = ({ product }) => {

  const { _id, productImg, productPrice, productName } = product;

  const accessToken = localStorage.getItem("accessToken");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCart = async () => {
    try {

      const res = await axios.post(
        "http://localhost:8000/api/v1/cart/add",
        { productId: _id },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (res.data.success) {
        toast.success("Product added to cart");
        dispatch(setCart(res.data.cart));
      }

    } catch (error) {
      console.log(error.response?.data);
      toast.error(error.response?.data?.message || "Error adding to cart");
    }
  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden h-max">

      <div className="w-full h-full aspect-square overflow-hidden">
        <img
          onClick={() => navigate(`/product/${product._id}`)}
          src={productImg[0]?.url}
          alt={productName}
          className="w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="px-2 space-y-1">
        <h1 className="font-semibold h-12 line-clamp-2">
          {productName}
        </h1>

        <h2 className="font-bold">
          ₹{productPrice}
        </h2>

        <Button
          onClick={addToCart}
          className="bg-blue-600 mb-3 w-full"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>

      </div>
    </div>
  );
};

export default ProductCard;