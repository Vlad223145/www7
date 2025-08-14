import React from 'react';
import { useCart } from '@/hooks/useCart';

export const Cart: React.FC = () => {
  const { cart, isOpen, isEmpty, removeFromCart, openCart, closeCart } = useCart();

  return (
    <>
      {/* Fixed Cart Icon */}
      <div
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: "1002",
          background: "white",
          borderRadius: "50%",
          padding: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}
      >
        <button
          onClick={openCart}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "10px",
            position: "relative"
          }}
          aria-label={isEmpty ? "Open empty cart" : "Open cart"}
        >
          <img
            loading="lazy"
            alt="cart"
            src="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fd27bca25c5fa66526db0c_cart.svg"
            style={{
              cursor: "pointer",
              display: "inline-block",
              maxWidth: "100%",
              verticalAlign: "middle",
              width: "24px",
              height: "24px"
            }}
          />
          {/* Cart Badge */}
          {!isEmpty && (
            <div
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                backgroundColor: "rgb(255, 0, 0)",
                color: "white",
                borderRadius: "50%",
                width: "16px",
                height: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "10px",
                fontWeight: "bold"
              }}
            >
              1
            </div>
          )}
        </button>
      </div>

      {/* Cart Overlay */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "flex-end"
          }}
          onClick={closeCart}
        >
          {/* Cart Panel */}
          <div
            style={{
              backgroundColor: "white",
              width: "100%",
              maxWidth: "400px",
              height: "100%",
              padding: "20px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cart Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
                paddingBottom: "15px",
                borderBottom: "1px solid rgb(230, 230, 230)"
              }}
            >
              <h6
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  margin: 0
                }}
              >
                Your Cart
              </h6>
              <button
                onClick={closeCart}
                aria-label="Close cart"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "24px",
                  padding: "5px",
                  lineHeight: 1
                }}
              >
                ×
              </button>
            </div>

            {/* Cart Content */}
            <div style={{ flex: 1 }}>
              {isEmpty ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    textAlign: "center",
                    padding: "40px 20px"
                  }}
                >
                  <img
                    loading="lazy"
                    alt="empty cart"
                    src="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fbb69eea85400f3511ee2f_empty-cart-image.svg"
                    style={{
                      display: "inline-block",
                      maxWidth: "100%",
                      verticalAlign: "middle",
                      width: "120px",
                      height: "120px",
                      marginBottom: "20px",
                      opacity: 0.5
                    }}
                  />
                  <p
                    style={{
                      marginBottom: "10px",
                      textAlign: "center",
                      color: "rgb(100, 100, 100)"
                    }}
                  >
                    No products inside your cart.
                  </p>
                </div>
              ) : (
                <div>
                  {/* Cart Item */}
                  <div
                    style={{
                      display: "flex",
                      gap: "15px",
                      padding: "15px",
                      border: "1px solid rgb(230, 230, 230)",
                      borderRadius: "10px",
                      marginBottom: "20px"
                    }}
                  >
                    <img
                      src={cart!.image}
                      alt={cart!.name}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        borderRadius: "8px"
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <h4
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          margin: "0 0 5px 0"
                        }}
                      >
                        {cart!.name}
                      </h4>
                      {cart!.price && (
                        <p
                          style={{
                            fontSize: "14px",
                            color: "rgb(100, 100, 100)",
                            margin: "0 0 10px 0"
                          }}
                        >
                          {cart!.price}
                        </p>
                      )}
                      <button
                        onClick={removeFromCart}
                        style={{
                          backgroundColor: "rgb(220, 38, 38)",
                          color: "white",
                          border: "none",
                          borderRadius: "5px",
                          padding: "5px 10px",
                          fontSize: "12px",
                          cursor: "pointer"
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button
                    style={{
                      width: "100%",
                      backgroundColor: "rgb(0, 0, 0)",
                      color: "white",
                      border: "none",
                      borderRadius: "10px",
                      padding: "15px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      marginTop: "20px"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgb(50, 50, 50)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgb(0, 0, 0)";
                    }}
                  >
                    Continue to Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
