import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "@/redux/productSlice";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

const Cart = () => {
  const { cart } = useSelector((store) => store.product);
  console.log(cart);

  const subtotal = cart?.totalPrice || 0;
  const shipping = subtotal > 299 ? 0 : 10;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const API = "http://localhost:8000/api/v1/cart";
  const accessToken = localStorage.getItem("accessToken");

  const loadCart = async () => {
  try {
    const res = await axios.get(API, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    if (res.data.success) {
      // You likely want to dispatch the cart data here
      dispatch(setCart(res.data.cart))
    }
  } catch (error) {
    console.log(error);
  }
}

  const handleUpdateQuantity = async (productId, type) => {
    try {
      const res = await axios.put(
        `${API}/update`,
        { productId, type },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      if (res.data.success) {
        dispatch(setCart(res.data.cart));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = async (productId) => {
    try {
      const res = await axios.delete(`${API}/remove`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data:{productId}
      });

      if (res.data.success) {
        dispatch(setCart(res.data.cart));
        toast.success("Product removed from cart");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    loadCart()
  },[dispatch])

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {cart?.items?.length > 0 ? (
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-7">
            Shopping Cart
          </h1>

          <div className="max-w-7xl mx-auto flex gap-7">
            {/* Cart Items */}
            <div className="flex flex-col gap-5 flex-1">
              {cart?.items?.map((product, index) => {
                return (
                  <Card key={index}>
                    <div className="flex justify-between items-center p-4">
                      <div className="flex items-center w-[350px]">
                        <img
                          src={product?.productId?.productImg?.[0]?.url}
                          alt=""
                          className="w-24 h-24 object-cover"
                        />

                        <div className="ml-5">
                          <h1 className="font-semibold truncate">
                            {product?.productId?.productName}
                          </h1>

                          <p>₹{product?.productId?.productPrice}</p>

                          {/* Quantity Buttons */}
                          <div className="flex items-center gap-2 mt-2">
                            <Button
                              onClick={() =>
                                handleUpdateQuantity(
                                  product.productId._id,
                                  "decrease",
                                )
                              }
                              variant="outline"
                            >
                              -
                            </Button>

                            <span>{product.quantity}</span>

                            <Button
                              onClick={() =>
                                handleUpdateQuantity(
                                  product.productId._id,
                                  "increase",
                                )
                              }
                              variant="outline"
                            >
                              +
                            </Button>
                          </div>
                        </div>
                      </div>

                      <p>
                        ₹{product?.productId?.productPrice * product?.quantity}
                      </p>

                      <p onClick={()=>handleRemove(product?.productId?._id)} className="flex text-red-500 items-center gap-1 cursor-pointer">
                        Remove
                        <Trash2 className="w-4 h-4" />
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Order Summary */}
            <Card className="w-[400px] h-fit">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal ({cart?.items?.length} items)</span>
                  <span>₹{subtotal.toLocaleString("en-IN")}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>₹{shipping}</span>
                </div>

                <div className="flex justify-between">
                  <span>Tax (5%)</span>
                  <span>₹{tax.toFixed(2)}</span>
                </div>

                <Separator />

                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>

                {/* Promo Code */}
                <div className="space-y-3 pt-4">
                  <div className="flex space-x-2">
                    <Input placeholder="Promo Code" />
                    <Button variant="outline">Apply</Button>
                  </div>

                  <Button onClick={()=>navigate(`/address`)} className="w-full bg-blue-600">PLACE ORDER</Button>

                  <Button variant="outline" className="w-full bg-transparent">
                    <Link to="/product">Continue Shopping</Link>
                  </Button>
                </div>

                <div className="text-sm text-muted-foreground pt-4">
                  <p>• Free shipping on orders over 299</p>
                  <p>• 30-days return policy</p>
                  <p>• Secure checkout with SSL encryption</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center">
          {/* Icon */}
          <div className="bg-blue-100 p-6 rounded-full">
            <ShoppingCart className="w-16 h-16 text-blue-600" />
          </div>

          {/* Title */}
          <h2 className="mt-6 text-2xl font-bold text-gray-800">
            Your Cart is Empty
          </h2>
          <p className="mt-2 text-gray-600">
            Looks like you haven't added anything to your cart yet
          </p>
          <Button
            onClick={() => navigate("/product")}
            className="mt-6 cursor-pointer bg-blue-600 text-white py-3 px-6 hover:bg-blue-700"
          >
            Start Shopping
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
