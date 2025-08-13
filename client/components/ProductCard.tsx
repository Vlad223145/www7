import React, { useState } from 'react';

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

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  hoverImage: string;
  description: string;
  linkTo?: string;
}

// Product data
const productsData: Record<string, Product> = {
  "sparklesoft-hand-wash": {
    id: "sparklesoft-hand-wash",
    name: "Sparklesoft hand wash",
    image: "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/662235ae210b04851586d4a5_product-image-04.jpg",
    hoverImage: "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/65fbf73159858f314a83e98f_product-hover-04.jpg",
    description: "Experience the ultimate in hand care with Sparklesoft hand wash. Our advanced formula combines gentle cleansing agents with moisturizing elements to leave your hands feeling incredibly soft and clean.",
    composition: "Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Glycerin, Sodium Chloride, Parfum, Citric Acid, Sodium Benzoate, Potassium Sorbate",
    effects: "Deep cleansing action that eliminates 99.9% of germs and bacteria. Maintains skin's natural moisture barrier while providing a refreshing sparkle finish.",
    usage: "Apply to wet hands, lather thoroughly for 20 seconds, then rinse with clean water. Use as often as needed throughout the day.",
    ingredients: ["Natural glycerin", "Vitamin E", "Aloe vera extract", "Tea tree oil", "Chamomile extract"],
    features: ["Antibacterial formula", "Moisturizing properties", "Fresh fragrance", "Dermatologically tested", "Suitable for sensitive skin"]
  },
  "soothesuds-hand-wash": {
    id: "soothesuds-hand-wash",
    name: "Soothesuds hand wash",
    image: "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/6622361dc4e8a0f82d73b13e_product-image-08.jpg",
    hoverImage: "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/65fbf77715e580b72226ce27_product-hover-08.jpg",
    description: "Soothesuds hand wash delivers exceptional comfort and protection for sensitive skin. Our hypoallergenic formula is specially crafted with calming botanical extracts.",
    composition: "Aqua, Decyl Glucoside, Cocamidopropyl Betaine, Glycerin, Aloe Barbadensis Leaf Juice, Chamomilla Recutita Extract, Lavandula Angustifolia Oil",
    effects: "Gentle cleansing action that soothes irritation and reduces inflammation. Provides long-lasting moisture and comfort for dry, sensitive hands.",
    usage: "Dispense into wet hands, massage gently to create a rich lather, rinse thoroughly. Perfect for daily use, especially for sensitive skin.",
    ingredients: ["Organic aloe vera", "Chamomile extract", "Lavender oil", "Calendula extract", "Shea butter"],
    features: ["Hypoallergenic formula", "Calming properties", "Natural botanicals", "Fragrance-free option", "pH balanced"]
  },
  "vitalguard-hand-wash": {
    id: "vitalguard-hand-wash",
    name: "Vitalguard hand wash",
    image: "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/6622366ca8850ec53ff1b22a_product-image-12.jpg",
    hoverImage: "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/65fc0c78abb09415fe40b4cc_product-hover-12.jpg",
    description: "Vitalguard hand wash offers superior antimicrobial protection without compromising on gentleness. Formulated with advanced cleansing technology and enriched with vitamin E.",
    composition: "Aqua, Sodium Cocoyl Isethionate, Cocamidopropyl Betaine, Glycerin, Tocopheryl Acetate, Ascorbic Acid, Panthenol, Citric Acid",
    effects: "Superior antimicrobial protection with added vitamins C and E. Strengthens skin barrier function and provides antioxidant defense against environmental damage.",
    usage: "Apply to damp hands, work into a rich foam for 20-30 seconds, rinse completely. Ideal for frequent use in high-exposure environments.",
    ingredients: ["Vitamin C complex", "Vitamin E", "Pro-vitamin B5", "Antioxidant blend", "Protective ceramides"],
    features: ["Advanced protection", "Vitamin enriched", "Antioxidant boost", "Long-lasting defense", "Professional grade"]
  },
  "freshcrisp-hand-wash": {
    id: "freshcrisp-hand-wash",
    name: "Freshcrisp hand wash",
    image: "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/662235861f5ef2481f56129a_product-image-02.jpg",
    hoverImage: "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/65fbf6fb7c049f14eed0b443_product-hover-02.jpg",
    description: "Freshcrisp hand wash provides an invigorating cleansing experience with its refreshing formula. Infused with natural citrus extracts and essential oils.",
    composition: "Aqua, Sodium Lauryl Sulfate, Citrus Limon Peel Oil, Citrus Aurantium Dulcis Oil, Menthol, Glycerin, Sodium Chloride",
    effects: "Energizing citrus formula that awakens the senses while effectively removing dirt and bacteria. Leaves hands feeling fresh, clean, and revitalized.",
    usage: "Pump into wet hands, lather vigorously for 20 seconds enjoying the crisp fragrance, rinse thoroughly with water.",
    ingredients: ["Lemon essential oil", "Orange extract", "Natural menthol", "Refreshing botanicals", "Energizing compounds"],
    features: ["Citrus energizing", "Refreshing sensation", "Natural essential oils", "Mood boosting", "Crisp clean finish"]
  },
  "velvetclean-hand-wash": {
    id: "velvetclean-hand-wash",
    name: "Velvetclean hand wash",
    image: "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/6622359994a9f767467f0509_product-image-03.jpg",
    hoverImage: "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/66190e6ea0abc1a95b2d1d94_instagram-image-05.jpg",
    description: "Velvetclean hand wash delivers luxurious cleansing with an ultra-smooth, velvety texture. This premium formula combines silk proteins and shea butter.",
    composition: "Aqua, Cocamide DEA, Glycerin, Silk Protein, Hyaluronic Acid, Jojoba Oil, Vitamin E, Parfum, Preservatives",
    effects: "Ultra-moisturizing formula that softens even the roughest hands. Silk proteins create a velvet-like texture while hyaluronic acid provides deep hydration.",
    usage: "Apply to wet hands, massage gently to create luxurious lather, rinse well. Use daily for silky soft hands.",
    ingredients: ["Silk proteins", "Hyaluronic acid", "Jojoba oil", "Vitamin E", "Luxury moisturizers"],
    features: ["Velvet soft texture", "Premium moisturizing", "Silk protein enriched", "Luxury formulation", "Spa-quality results"]
  },
  "refreshrinse-hand-wash": {
    id: "refreshrinse-hand-wash",
    name: "Refreshrinse hand wash",
    image: "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/662235dad1b814ae15864300_product-image-06.jpg",
    hoverImage: "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/65fbf744c43eb79a541fec5a_product-hover-05.jpg",
    description: "Refreshrinse hand wash offers the perfect balance of effective cleansing and gentle care. Formulated with cooling menthol and eucalyptus extracts.",
    composition: "Aqua, Sodium Laureth Sulfate, Mentha Piperita Oil, Eucalyptus Globulus Oil, Glycerin, Cooling Agents, Natural Extracts",
    effects: "Instant cooling sensation that refreshes tired hands while providing effective cleansing. Mint and eucalyptus oils invigorate and energize.",
    usage: "Dispense into wet hands, enjoy the cooling sensation as you lather for 20 seconds, rinse with cool water for maximum refresh.",
    ingredients: ["Peppermint oil", "Eucalyptus extract", "Cooling menthol", "Refreshing botanicals", "Natural coolants"],
    features: ["Instant cooling", "Refreshing mint", "Energizing eucalyptus", "Invigorating sensation", "Natural cooling agents"]
  },
  "cleanscent-hand-wash": {
    id: "cleanscent-hand-wash",
    name: "Cleanscent hand wash",
    image: "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/662235f3434322eac6a406f1_product-image-05.jpg",
    hoverImage: "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/65fbf755ba06eefad1ef33a7_product-hover-06.jpg",
    description: "Cleanscent hand wash features a signature aromatic blend that elevates your handwashing routine. This premium formulation combines the finest botanical extracts.",
    composition: "Aqua, Sodium Laureth Sulfate, Lavandula Angustifolia Oil, Citrus Bergamia Peel Oil, Camellia Sinensis Extract, Natural Fragrance",
    effects: "Superior cleansing with aromatherapy benefits. The distinctive fragrance promotes relaxation while providing effective antimicrobial protection.",
    usage: "Apply to wet hands, enjoy the aromatic experience while lathering for 20 seconds, rinse thoroughly for lasting fragrance.",
    ingredients: ["Lavender oil", "Bergamot extract", "White tea", "Botanical aromatics", "Essential oil blend"],
    features: ["Signature aromatics", "Premium botanicals", "Relaxing fragrance", "Antimicrobial action", "Luxury experience"]
  },
  "clean-plus-hand-wash": {
    id: "clean-plus-hand-wash",
    name: "Clean plus hand wash",
    image: "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/66223606cde825c4cfde2da4_product-image-07.jpg",
    hoverImage: "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/65fbf768ea85400f354f68a9_product-hover-07.jpg",
    description: "Clean Plus hand wash delivers enhanced cleansing power with added antibacterial protection. This advanced formula eliminates 99.99% of harmful bacteria.",
    composition: "Aqua, Sodium Cocoyl Isethionate, Triclosan, Pro-vitamin B5, Glycerin, Citric Acid, Natural Preservatives",
    effects: "Enhanced antibacterial protection that eliminates harmful pathogens while maintaining skin health. Pro-vitamin B5 strengthens the skin barrier.",
    usage: "Apply to wet hands, work into rich foam for 20-30 seconds for maximum protection, rinse completely with water.",
    ingredients: ["Pro-vitamin B5", "Antibacterial agents", "Skin conditioners", "Protective compounds", "Barrier enhancers"],
    features: ["99.99% germ protection", "Professional strength", "Skin barrier support", "Clinical grade", "Healthcare approved"]
  },
  "zenguard-hand-wash": {
    id: "zenguard-hand-wash",
    name: "Zenguard hand wash",
    image: "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/662236302c073d26c21a00ff_product-image-09.jpg",
    hoverImage: "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/65fbf7859ab5b855de666d51_product-hover-09.jpg",
    description: "Zenguard hand wash provides ultimate protection with calming aromatherapy benefits. This unique formula combines powerful antimicrobial agents with stress-relieving oils.",
    composition: "Aqua, Decyl Glucoside, Chamomilla Recutita Extract, Santalum Album Oil, Jasminum Officinale Extract, Natural Preservatives",
    effects: "Comprehensive protection with therapeutic aromatherapy. Reduces stress while providing effective cleansing and antimicrobial action.",
    usage: "Dispense into hands, breathe in the calming aroma while lathering gently, rinse for clean, relaxed hands.",
    ingredients: ["Chamomile extract", "Sandalwood oil", "Jasmine essence", "Calming botanicals", "Stress-relief blend"],
    features: ["Aromatherapy benefits", "Stress relief", "Calming properties", "Natural protection", "Zen experience"]
  },
  "purelux-hand-wash": {
    id: "purelux-hand-wash",
    name: "Purelux hand wash",
    image: "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/66223551115d6051274fb427_product-image-01.jpg",
    hoverImage: "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/66223551115d6051274fb427_product-image-01.jpg",
    description: "Purelux hand wash represents the pinnacle of luxury hand care, combining premium ingredients with exceptional performance. This exclusive formula features rare botanical extracts.",
    composition: "Aqua, Premium Surfactants, Silk Amino Acids, Gold Particles, Rare Botanical Extracts, Luxury Fragrance Blend",
    effects: "Ultimate luxury cleansing with precious ingredients. Gold particles provide gentle exfoliation while silk amino acids deliver unparalleled softness.",
    usage: "Apply to hands as a luxurious ritual, massage gently to activate precious ingredients, rinse for an extraordinary experience.",
    ingredients: ["Silk amino acids", "Gold particles", "Rare botanicals", "Precious oils", "Luxury essences"],
    features: ["Luxury formulation", "Gold-infused", "Silk proteins", "Rare ingredients", "Premium experience"]
  }
};

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
    e.stopPropagation();
    // Убираем все логики - больше не используется
  };

  const handleTryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = `/product/${id}`;
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  const handleImageHover = (e: React.MouseEvent, show: boolean) => {
    const hoverImg = e.currentTarget.querySelector('img:last-child') as HTMLImageElement;
    if (hoverImg) {
      hoverImg.style.opacity = show ? '1' : '0';
    }
  };

  const product = productsData[id];

  return (
    <div
      role="listitem"
      style={{
        perspective: '1000px'
      }}
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
              borderRadius: "10px",
              cursor: "pointer",
              overflow: "hidden",
              position: "relative",
              height: '600px'
            }}
            onClick={handleImageClick}
            onMouseEnter={(e) => handleImageHover(e, true)}
            onMouseLeave={(e) => handleImageHover(e, false)}
          >
            <img
              alt="product-image"
              loading="eager"
              src={image}
              style={{
                borderRadius: "10px",
                display: "block",
                height: "600px",
                maxWidth: "100%",
                objectFit: "cover",
                width: "100%",
                userSelect: "none",
                WebkitUserSelect: "none",
                draggable: false
              }}
            />
            <img
              alt="product-image"
              loading="eager"
              src={hoverImage}
              style={{
                borderRadius: "10px",
                bottom: "0%",
                height: "600px",
                left: "0%",
                maxWidth: "100%",
                objectFit: "cover",
                opacity: "0",
                position: "absolute",
                right: "0%",
                top: "0%",
                width: "100%",
                transition: 'opacity 0.3s ease',
                userSelect: "none",
                WebkitUserSelect: "none",
                draggable: false
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
