import { useState, useEffect } from 'react';

interface CartItem {
  id: string;
  name: string;
  image: string;
  price?: string;
  quantity?: number;
}

interface CartState {
  item: CartItem | null;
  isOpen: boolean;
}

export function useCart() {
  const [cart, setCart] = useState<CartState>({ item: null, isOpen: false });

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('handly_cart');
      if (saved) {
        try {
          const parsedCart = JSON.parse(saved);
          console.log('Loaded cart from localStorage:', parsedCart);
          setCart(parsedCart);
        } catch (error) {
          console.error('Error parsing cart from localStorage:', error);
        }
      }
    }
  }, []);

  // Сохраняем состояние в localStorage при изменении
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('Saving cart to localStorage:', cart);
      localStorage.setItem('handly_cart', JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product: CartItem): { success: boolean; message?: string } => {
    console.log('addToCart called with:', product);
    console.log('Current cart state:', cart);

    if (cart.item && cart.item.id !== product.id) {
      return {
        success: false,
        message: "You can only have one product in your cart. Please remove the current item first."
      };
    }

    // If same product, update quantity
    if (cart.item && cart.item.id === product.id) {
      const newQuantity = (cart.item.quantity || 1) + (product.quantity || 1);
      const updatedItem = { ...cart.item, quantity: newQuantity };
      console.log('Updating existing item:', updatedItem);
      setCart(prev => ({ ...prev, item: updatedItem, isOpen: true }));
    } else {
      // Add new product
      const newItem = { ...product, quantity: product.quantity || 1 };
      console.log('Adding new item:', newItem);
      setCart(prev => ({ ...prev, item: newItem, isOpen: true }));
    }

    return { success: true };
  };

  const removeFromCart = () => {
    setCart(prev => ({ ...prev, item: null }));
  };

  const openCart = () => {
    setCart(prev => ({ ...prev, isOpen: true }));
  };

  const closeCart = () => {
    setCart(prev => ({ ...prev, isOpen: false }));
  };

  const hasItem = !!cart.item;
  const isEmpty = !cart.item;

  return {
    cart: cart.item,
    isOpen: cart.isOpen,
    hasItem,
    isEmpty,
    addToCart,
    removeFromCart,
    openCart,
    closeCart
  };
}
