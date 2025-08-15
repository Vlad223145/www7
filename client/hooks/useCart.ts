import { useState, useEffect } from "react";

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
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("handly_cart");
      if (saved) {
        try {
          const parsedCart = JSON.parse(saved);
          setCart(parsedCart);
        } catch (error) {
        }
      }
    }
  }, []);

  // Сохраняем состояние в localStorage при изменении
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("handly_cart", JSON.stringify(cart));
      // Add to window for debugging
      (window as any).debugCart = cart;
      console.log("💾 Saving cart to localStorage:", cart);
    }
  }, [cart]);

  const addToCart = (
    product: CartItem,
  ): { success: boolean; message?: string } => {
    console.log("🛒 ADD TO CART CALLED");
    console.log("Product:", product);
    console.log("Current cart state:", cart);

    if (cart.item && cart.item.id !== product.id) {
      console.log("❌ Different product in cart, rejecting");
      return {
        success: false,
        message:
          "You can only have one product in your cart. Please remove the current item first.",
      };
    }

    // If same product, update quantity
    if (cart.item && cart.item.id === product.id) {
      const newQuantity = (cart.item.quantity || 1) + (product.quantity || 1);
      const updatedItem = { ...cart.item, quantity: newQuantity };
      console.log("🔄 Updating existing item:", updatedItem);
      setCart((prev) => {
        const newState = { ...prev, item: updatedItem, isOpen: true };
        console.log("New cart state will be:", newState);
        return newState;
      });
    } else {
      // Add new product
      const newItem = { ...product, quantity: product.quantity || 1 };
      console.log("➕ Adding new item:", newItem);
      setCart((prev) => {
        const newState = { ...prev, item: newItem, isOpen: true };
        console.log("New cart state will be:", newState);
        return newState;
      });
    }

    return { success: true };
  };

  const removeFromCart = () => {
    setCart((prev) => ({ ...prev, item: null }));
  };

  const clearCart = () => {
    setCart({ item: null, isOpen: false });
    if (typeof window !== "undefined") {
      localStorage.removeItem("handly_cart");
    }
  };

  const openCart = () => {
    setCart((prev) => ({ ...prev, isOpen: true }));
  };

  const closeCart = () => {
    setCart((prev) => ({ ...prev, isOpen: false }));
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
    clearCart,
    openCart,
    closeCart,
  };
}
