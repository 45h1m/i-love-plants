"use client";
import React from 'react';
import Image from 'next/image';
import { useCart } from '@/context/cartContext';

const CartPage: React.FC = () => {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getTotalPrice 
  } = useCart();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 bg-color">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary-green">Your Cart</h1>
      
      {cart.length === 0 ? (
        <div className="text-center text-muted-green">
          Your cart is empty
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {cart.map((item) => (
              <div 
                key={item.id} 
                className="flex flex-col sm:flex-row items-center border-b border-primary-green pb-4 justify-between space-y-4 sm:space-y-0"
              >
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full">
                  <Image 
                    src={item.thumbnail} 
                    alt={item.name} 
                    width={80} 
                    height={80} 
                    className="rounded-lg border border-green mb-2 sm:mb-0"
                  />
                  <div className="text-center sm:text-left w-full">
                    <h2 className="font-semibold text-dark-green">{item.name}</h2>
                    <p className="text-muted-green">{formatCurrency(item.price)}</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full justify-center sm:justify-end">
                  <div className="flex items-center border border-primary-green rounded mb-2 sm:mb-0">
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="px-3 py-1 bg-light-green text-dark-green"
                    >
                      -
                    </button>
                    <span className="px-4 text-dark-green">{item.quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="px-3 py-1 bg-light-green text-dark-green"
                    >
                      +
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-primary-green hover:text-secondary-green"
                    >
                      Remove
                    </button>
                    
                    <p className="font-semibold text-dark-green">
                      {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <button 
              onClick={clearCart}
              className="bg-secondary-green text-white px-4 py-2 rounded hover:bg-primary-green w-full sm:w-auto"
            >
              Clear Cart
            </button>
            
            <div className="text-center sm:text-right w-full">
              <p className="text-xl font-bold text-dark-green mb-2">
                Total: {formatCurrency(getTotalPrice())}
              </p>
              <button 
                className="bg-primary-green text-white px-6 py-2 rounded hover:bg-secondary-green w-full sm:w-auto"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;