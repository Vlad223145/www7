import { useState, useEffect } from 'react';

interface CartItem {
  id: string;
  name: string;
  image: string;
  price?: string;
}

interface CartState {
  item: CartItem | null;
  isOpen: boolean;
}

export function useCart() {
  const [cart, setCart] = useState<CartState>(() => {
    // Загружаем состояние корзины из localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('handly_cart');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return { item: null, isOpen: false };
        }
      }
    }
    return { item: null, isOpen: false };
  });

  // Сохраняем состояние в localStorage при изменении
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('handly_cart', JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product: CartItem): { success: boolean; message?: string } => {
    if (cart.item && cart.item.id !== product.id) {
      return {
        success: false,
        message: "You can only have one product in your cart. Please remove the current item first."
      };
    }
    
    setCart(prev => ({ ...prev, item: product, isOpen: true }));
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
