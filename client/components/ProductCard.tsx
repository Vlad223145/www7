import React, { useState } from 'react';
import { RawImg } from './RawImg';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  hoverImage: string;
  description: string;
  linkTo?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  image,
  hoverImage,
  description,
  linkTo
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const handleTryClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (linkTo) {
      window.open(linkTo, '_blank');
    }
  };

  return (
    <div 
      role="listitem"
      style={{ perspective: '1000px', cursor: 'pointer' }}
      onClick={handleCardClick}
    >
      <div 
        style={{
          position: 'relative',
          width: '100%',
          height: '700px',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front Side */}
        <div 
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}
        >
          <div 
            style={{ 
              borderBottomLeftRadius: "10px", 
              borderBottomRightRadius: "10px", 
              borderRadius: "10px", 
              borderTopLeftRadius: "10px", 
              borderTopRightRadius: "10px", 
              cursor: "pointer", 
              overflowX: "hidden", 
              overflowY: "hidden", 
              position: "relative",
              height: '600px' 
            }}
          >
            <RawImg
              alt="product-image"
              loading="eager"
              image={image}
              css={{ 
                borderBottomLeftRadius: "10px", 
                borderBottomRightRadius: "10px", 
                borderRadius: "10px", 
                borderTopLeftRadius: "10px", 
                borderTopRightRadius: "10px", 
                cursor: "pointer", 
                display: "inline-block", 
                height: "600px", 
                maxWidth: "100%", 
                objectFit: "cover", 
                overflowClipMargin: "content-box", 
                overflowX: "clip", 
                overflowY: "clip", 
                verticalAlign: "middle", 
                width: "100%" 
              }}
            />
            <RawImg
              alt="product-image"
              loading="eager"
              image={hoverImage}
              css={{ 
                borderBottomLeftRadius: "10px", 
                borderBottomRightRadius: "10px", 
                borderRadius: "10px", 
                borderTopLeftRadius: "10px", 
                borderTopRightRadius: "10px", 
                bottom: "0%", 
                cursor: "pointer", 
                height: "600px", 
                left: "0%", 
                maxWidth: "100%", 
                objectFit: "cover", 
                opacity: "0", 
                overflowClipMargin: "content-box", 
                overflowX: "clip", 
                overflowY: "clip", 
                position: "absolute", 
                right: "0%", 
                top: "0%", 
                verticalAlign: "middle", 
                width: "100%",
                transition: 'opacity 0.3s ease'
              }}
              style={{
                ':hover': {
                  opacity: 1
                }
              }}
            />
          </div>
          <div 
            style={{ 
              alignItems: "center", 
              display: "flex", 
              flexDirection: "column", 
              gap: "15px", 
              justifyContent: "center"
            }}
          >
            <h3 style={{ 
              fontSize: "22px", 
              lineHeight: "28.6px",
              textAlign: "center",
              margin: 0
            }}>
              {name}
            </h3>
            <button
              onClick={handleTryClick}
              style={{
                backgroundColor: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#333';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#000';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Try
            </button>
          </div>
        </div>

        {/* Back Side */}
        <div 
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            backgroundColor: '#fff',
            color: '#000',
            borderRadius: '10px',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            border: '1px solid #e5e5e5',
            boxSizing: 'border-box'
          }}
        >
          <h3 style={{ 
            fontSize: "28px", 
            lineHeight: "36px",
            marginBottom: "20px",
            fontWeight: "bold"
          }}>
            {name}
          </h3>
          <p style={{
            fontSize: "16px",
            lineHeight: "24px",
            color: "#333",
            maxWidth: "100%",
            margin: 0
          }}>
            {description}
          </p>
          <button
            onClick={handleTryClick}
            style={{
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              padding: '12px 24px',
              fontSize: '16px',
              fontWeight: '500',
              cursor: 'pointer',
              marginTop: '30px',
              transition: 'all 0.2s ease',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#333';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#000';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Try
          </button>
        </div>
      </div>
    </div>
  );
};
