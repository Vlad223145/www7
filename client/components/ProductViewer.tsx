import React from 'react';
import { RawImg } from './RawImg';

interface Product {
  id: string;
  name: string;
  image: string;
  hoverImage: string;
  description: string;
  composition: string;
  effects: string;
  usage: string;
  ingredients: string[];
  features: string[];
}

interface ProductViewerProps {
  product: Product;
  onClose: () => void;
}

export const ProductViewer: React.FC<ProductViewerProps> = ({ product, onClose }) => {
  React.useEffect(() => {
    // Предотвращаем скролл на body когда модальное окно открыто
    const body = document.body;
    const originalOverflow = body.style.overflow;
    body.style.overflow = 'hidden';

    return () => {
      body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          maxWidth: '1200px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: '#f5f5f5',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            zIndex: 10
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#e5e5e5';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#f5f5f5';
          }}
        >
          ×
        </button>

        {/* Back Arrow */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: '#f5f5f5',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            zIndex: 10
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#e5e5e5';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#f5f5f5';
          }}
        >
          ←
        </button>

        {/* Product Content */}
        <div style={{ padding: '80px 60px 60px' }}>
          <div style={{ display: 'grid', gridTemplate: 'auto / 1fr 1fr', gap: '60px', alignItems: 'start' }}>
            {/* Product Images */}
            <div>
              <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', marginBottom: '20px' }}>
                <RawImg
                  alt={product.name}
                  loading="eager"
                  image={product.image}
                  css={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '20px' }}
                />
              </div>
              <div style={{ display: 'grid', gridTemplate: 'auto / 1fr 1fr', gap: '20px' }}>
                <RawImg
                  alt={product.name}
                  loading="lazy"
                  image={product.image}
                  css={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px', cursor: 'pointer' }}
                />
                <RawImg
                  alt={product.name}
                  loading="lazy"
                  image={product.hoverImage}
                  css={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px', cursor: 'pointer' }}
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 style={{ fontSize: '42px', fontFamily: 'Generalsans, sans-serif', marginBottom: '20px', lineHeight: '1.2' }}>
                {product.name}
              </h1>
              
              <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '30px', color: 'rgb(100, 100, 100)' }}>
                {product.description}
              </p>

              {/* Features */}
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '20px', fontFamily: 'Generalsans, sans-serif', marginBottom: '15px' }}>
                  Key Features
                </h3>
                <div style={{ display: 'grid', gap: '8px' }}>
                  {product.features.map((feature, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '6px', height: '6px', backgroundColor: 'rgb(0, 0, 0)', borderRadius: '50%' }}></div>
                      <span style={{ fontSize: '14px' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Try Button */}
              <button style={{ 
                width: '100%',
                backgroundColor: 'rgb(0, 0, 0)', 
                color: 'rgb(255, 255, 255)', 
                padding: '15px 30px', 
                borderRadius: '10px', 
                border: 'none', 
                fontSize: '18px', 
                fontWeight: 'bold', 
                cursor: 'pointer',
                marginBottom: '30px'
              }}>
                Try
              </button>

              {/* Product Details */}
              <div style={{ borderTop: '1px solid rgb(230, 230, 230)', paddingTop: '30px' }}>
                <div style={{ marginBottom: '25px' }}>
                  <h3 style={{ fontSize: '18px', fontFamily: 'Generalsans, sans-serif', marginBottom: '10px' }}>
                    Composition
                  </h3>
                  <p style={{ lineHeight: '1.6', color: 'rgb(100, 100, 100)', fontSize: '14px' }}>
                    {product.composition}
                  </p>
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <h3 style={{ fontSize: '18px', fontFamily: 'Generalsans, sans-serif', marginBottom: '10px' }}>
                    Effects
                  </h3>
                  <p style={{ lineHeight: '1.6', color: 'rgb(100, 100, 100)', fontSize: '14px' }}>
                    {product.effects}
                  </p>
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <h3 style={{ fontSize: '18px', fontFamily: 'Generalsans, sans-serif', marginBottom: '10px' }}>
                    Usage
                  </h3>
                  <p style={{ lineHeight: '1.6', color: 'rgb(100, 100, 100)', fontSize: '14px' }}>
                    {product.usage}
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: '18px', fontFamily: 'Generalsans, sans-serif', marginBottom: '10px' }}>
                    Active Ingredients
                  </h3>
                  <div style={{ display: 'grid', gap: '6px' }}>
                    {product.ingredients.map((ingredient, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '4px', height: '4px', backgroundColor: 'rgb(100, 100, 100)', borderRadius: '50%' }}></div>
                        <span style={{ color: 'rgb(100, 100, 100)', fontSize: '14px' }}>{ingredient}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
