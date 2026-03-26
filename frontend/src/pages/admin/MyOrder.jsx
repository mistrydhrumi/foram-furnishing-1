import OrderCard from "@/components/OrderCard";
import axios from "axios";
import React, { useEffect, useState } from "react";


const MyOrder = () => {
  
  const [userOrder, setUserOrder] = useState([]);

  // Get all orders
  const getUserOrders = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      const res = await axios.get(
        `${import.meta.env.VITE_URL}/api/v1/orders/myorder`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (res.data.success) {
        setUserOrder(res.data.orders);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  // Download Invoice
  const downloadInvoice = async (orderId) => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      const response = await fetch(
        `${import.meta.env.VITE_URL}/api/v1/orders/invoice/${orderId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `invoice-${orderId}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error("Invoice download failed:", error);
    }
  };

  useEffect(() => {
    getUserOrders();
  }, []);

  return (
    <>
    <OrderCard userOrder={userOrder}/>
    </>
  );
};

export default MyOrder;