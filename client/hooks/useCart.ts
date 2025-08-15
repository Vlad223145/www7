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

// Global cart state to prevent multiple instances
let globalCartState: CartState = { item: null, isOpen: false };
let globalSetters: Array<(state: CartState) => void> = [];

const updateGlobalCart = (newState: CartState) => {
  globalCartState = newState;
  globalSetters.forEach(setter => setter(newState));

  // Save to localStorage
  if (typeof window !== "undefined") {
    localStorage.setItem("handly_cart", JSON.stringify(newState));
    console.log("💾 Saving cart to localStorage:", newState);
  }
};

export function useCart() {
  const [cart, setCartState] = useState<CartState>(globalCartState);

  // Register this setter
  useEffect(() => {
    globalSetters.push(setCartState);
    return () => {
      globalSetters = globalSetters.filter(setter => setter !== setCartState);
    };
  }, []);

  // Load from localStorage on initial mount
  useEffect(() => {
    if (typeof window !== "undefined" && globalCartState.item === null) {
      const saved = localStorage.getItem("handly_cart");
      if (saved) {
        try {
          const parsedCart = JSON.parse(saved);
          console.log("📦 Loading cart from localStorage:", parsedCart);
          updateGlobalCart(parsedCart);
        } catch (error) {
          console.error("Error parsing cart from localStorage:", error);
        }
      }
    }
  }, []);

  const addToCart = (
    product: CartItem,
  ): { success: boolean; message?: string } => {
    console.log("🛒 ADD TO CART CALLED");
    console.log("Product:", product);
    console.log("Current global cart state:", globalCartState);

    if (globalCartState.item && globalCartState.item.id !== product.id) {
      console.log("❌ Different product in cart, rejecting");
      return {
        success: false,
        message:
          "You can only have one product in your cart. Please remove the current item first.",
      };
    }

    // If same product, update quantity
    if (globalCartState.item && globalCartState.item.id === product.id) {
      const newQuantity = (globalCartState.item.quantity || 1) + (product.quantity || 1);
      const updatedItem = { ...globalCartState.item, quantity: newQuantity };
      console.log("🔄 Updating existing item:", updatedItem);
      updateGlobalCart({ ...globalCartState, item: updatedItem, isOpen: true });
    } else {
      // Add new product
      const newItem = { ...product, quantity: product.quantity || 1 };
      console.log("➕ Adding new item:", newItem);
      updateGlobalCart({ ...globalCartState, item: newItem, isOpen: true });
    }

    console.log("✅ Cart updated successfully");
    return { success: true };
  };

  const removeFromCart = () => {
    console.log("🗑️ Removing item from cart");
    updateGlobalCart({ ...globalCartState, item: null });
  };

  const clearCart = () => {
    console.log("🧹 Clearing cart");
    updateGlobalCart({ item: null, isOpen: false });
    if (typeof window !== "undefined") {
      localStorage.removeItem("handly_cart");
    }
  };

  const openCart = () => {
    console.log("👁️ Opening cart");
    updateGlobalCart({ ...globalCartState, isOpen: true });
  };

  const closeCart = () => {
    console.log("✖️ Closing cart");
    updateGlobalCart({ ...globalCartState, isOpen: false });
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
