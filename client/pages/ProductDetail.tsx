import { useParams, Link } from "react-router-dom";
import { RawImg, Cart, useToast } from "@/components";
import { useCart } from "@/hooks/useCart";

interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  hoverImage: string;
  description: string;
  composition: string;
  effects: string;
  usage: string;
  ingredients: string[];
  features: string[];
}

const products: Record<string, Product> = {
  "sparklesoft-hand-wash": {
    id: "sparklesoft-hand-wash",
    name: "Sparklesoft hand wash",
    price: "$ 27.00 USD",
    originalPrice: "$ 40.00 USD",
    image:
      "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/662235ae210b04851586d4a5_product-image-04.jpg",
    hoverImage:
      "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/65fbf73159858f314a83e98f_product-hover-04.jpg",
    description:
      "Gentle yet effective hand wash with sparkling clean formula that removes dirt and germs while keeping hands soft and moisturized.",
    composition:
      "Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Glycerin, Sodium Chloride, Parfum, Citric Acid, Sodium Benzoate, Potassium Sorbate",
    effects:
      "Deep cleansing action that eliminates 99.9% of germs and bacteria. Maintains skin's natural moisture barrier while providing a refreshing sparkle finish.",
    usage:
      "Apply to wet hands, lather thoroughly for 20 seconds, then rinse with clean water. Use as often as needed throughout the day.",
    ingredients: [
      "Natural glycerin",
      "Vitamin E",
      "Aloe vera extract",
      "Tea tree oil",
      "Chamomile extract",
    ],
    features: [
      "Antibacterial formula",
      "Moisturizing properties",
      "Fresh fragrance",
      "Dermatologically tested",
      "Suitable for sensitive skin",
    ],
  },
  "soothesuds-hand-wash": {
    id: "soothesuds-hand-wash",
    name: "Soothesuds hand wash",
    price: "$ 68.00 USD",
    originalPrice: "$ 75.00 USD",
    image:
      "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/6622361dc4e8a0f82d73b13e_product-image-08.jpg",
    hoverImage:
      "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/65fbf77715e580b72226ce27_product-hover-08.jpg",
    description:
      "Luxurious soothing hand wash enriched with calming botanicals to cleanse and comfort sensitive skin with every use.",
    composition:
      "Aqua, Decyl Glucoside, Cocamidopropyl Betaine, Glycerin, Aloe Barbadensis Leaf Juice, Chamomilla Recutita Extract, Lavandula Angustifolia Oil",
    effects:
      "Gentle cleansing action that soothes irritation and reduces inflammation. Provides long-lasting moisture and comfort for dry, sensitive hands.",
    usage:
      "Dispense into wet hands, massage gently to create a rich lather, rinse thoroughly. Perfect for daily use, especially for sensitive skin.",
    ingredients: [
      "Organic aloe vera",
      "Chamomile extract",
      "Lavender oil",
      "Calendula extract",
      "Shea butter",
    ],
    features: [
      "Hypoallergenic formula",
      "Calming properties",
      "Natural botanicals",
      "Fragrance-free option",
      "pH balanced",
    ],
  },
  "vitalguard-hand-wash": {
    id: "vitalguard-hand-wash",
    name: "Vitalguard hand wash",
    price: "$ 30.00 USD",
    originalPrice: "$ 50.00 USD",
    image:
      "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/6622366ca8850ec53ff1b22a_product-image-12.jpg",
    hoverImage:
      "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/65fc0c78abb09415fe40b4cc_product-hover-12.jpg",
    description:
      "Advanced protection hand wash with vital nutrients and antioxidants that defend against germs while nourishing skin cells.",
    composition:
      "Aqua, Sodium Cocoyl Isethionate, Cocamidopropyl Betaine, Glycerin, Tocopheryl Acetate, Ascorbic Acid, Panthenol, Citric Acid",
    effects:
      "Superior antimicrobial protection with added vitamins C and E. Strengthens skin barrier function and provides antioxidant defense against environmental damage.",
    usage:
      "Apply to damp hands, work into a rich foam for 20-30 seconds, rinse completely. Ideal for frequent use in high-exposure environments.",
    ingredients: [
      "Vitamin C complex",
      "Vitamin E",
      "Pro-vitamin B5",
      "Antioxidant blend",
      "Protective ceramides",
    ],
    features: [
      "Advanced protection",
      "Vitamin enriched",
      "Antioxidant boost",
      "Long-lasting defense",
      "Professional grade",
    ],
  },
  "freshcrisp-hand-wash": {
    id: "freshcrisp-hand-wash",
    name: "Freshcrisp hand wash",
    price: "$ 60.00 USD",
    image:
      "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/662235861f5ef2481f56129a_product-image-02.jpg",
    hoverImage:
      "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/65fbf6fb7c049f14eed0b443_product-hover-02.jpg",
    description:
      "Invigorating hand wash with crisp citrus blend that energizes while providing thorough cleansing and refreshing sensation.",
    composition:
      "Aqua, Sodium Lauryl Sulfate, Citrus Limon Peel Oil, Citrus Aurantium Dulcis Oil, Menthol, Glycerin, Sodium Chloride",
    effects:
      "Energizing citrus formula that awakens the senses while effectively removing dirt and bacteria. Leaves hands feeling fresh, clean, and revitalized.",
    usage:
      "Pump into wet hands, lather vigorously for 20 seconds enjoying the crisp fragrance, rinse thoroughly with water.",
    ingredients: [
      "Lemon essential oil",
      "Orange extract",
      "Natural menthol",
      "Refreshing botanicals",
      "Energizing compounds",
    ],
    features: [
      "Citrus energizing",
      "Refreshing sensation",
      "Natural essential oils",
      "Mood boosting",
      "Crisp clean finish",
    ],
  },
  "velvetclean-hand-wash": {
    id: "velvetclean-hand-wash",
    name: "Velvetclean hand wash",
    price: "$ 50.00 USD",
    image:
      "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/6622359994a9f767467f0509_product-image-03.jpg",
    hoverImage:
      "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/66190e6ea0abc1a95b2d1d94_instagram-image-05.jpg",
    description:
      "Luxurious velvet-soft hand wash that transforms rough hands into silky smooth perfection with premium moisturizing ingredients.",
    composition:
      "Aqua, Cocamide DEA, Glycerin, Silk Protein, Hyaluronic Acid, Jojoba Oil, Vitamin E, Parfum, Preservatives",
    effects:
      "Ultra-moisturizing formula that softens even the roughest hands. Silk proteins create a velvet-like texture while hyaluronic acid provides deep hydration.",
    usage:
      "Apply to wet hands, massage gently to create luxurious lather, rinse well. Use daily for silky soft hands.",
    ingredients: [
      "Silk proteins",
      "Hyaluronic acid",
      "Jojoba oil",
      "Vitamin E",
      "Luxury moisturizers",
    ],
    features: [
      "Velvet soft texture",
      "Premium moisturizing",
      "Silk protein enriched",
      "Luxury formulation",
      "Spa-quality results",
    ],
  },
  "refreshrinse-hand-wash": {
    id: "refreshrinse-hand-wash",
    name: "Refreshrinse hand wash",
    price: "$ 45.00 USD",
    image:
      "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/662235dad1b814ae15864300_product-image-06.jpg",
    hoverImage:
      "https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/65fbf744c43eb79a541fec5a_product-hover-05.jpg",
    description:
      "Cooling refresh hand wash with mint and eucalyptus that provides instant refreshment and thorough cleansing experience.",
    composition:
      "Aqua, Sodium Laureth Sulfate, Mentha Piperita Oil, Eucalyptus Globulus Oil, Glycerin, Cooling Agents, Natural Extracts",
    effects:
      "Instant cooling sensation that refreshes tired hands while providing effective cleansing. Mint and eucalyptus oils invigorate and energize.",
    usage:
      "Dispense into wet hands, enjoy the cooling sensation as you lather for 20 seconds, rinse with cool water for maximum refresh.",
    ingredients: [
      "Peppermint oil",
      "Eucalyptus extract",
      "Cooling menthol",
      "Refreshing botanicals",
      "Natural coolants",
    ],
    features: [
      "Instant cooling",
      "Refreshing mint",
      "Energizing eucalyptus",
      "Invigorating sensation",
      "Natural cooling agents",
    ],
  },
};

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? products[productId] : null;
  const { addToCart } = useCart();
  const { showToast, ToastContainer } = useToast();

  if (!product) {
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        <h1>Product Not Found</h1>
        <Link to="/shop">Back to Shop</Link>
      </div>
    );
  }

  return (
    <>
      <title style={{ display: "none" }}>{product.name} - Handly</title>

      <div
        style={{ backgroundColor: "rgb(255, 255, 255)", minHeight: "100vh" }}
      >
        {/* Header */}
        <div
          role="banner"
          style={{
            paddingBottom: "15px",
            paddingTop: "15px",
            position: "relative",
            zIndex: "1000",
          }}
        >
          <div
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "100%",
              paddingLeft: "150px",
              paddingRight: "150px",
            }}
          >
            <div
              style={{
                alignItems: "center",
                display: "grid",
                gap: "40px",
                gridTemplate: "auto / 0.5fr 1.5fr 0.5fr",
                justifyItems: "center",
              }}
            >
              <Link
                to="/"
                style={{
                  gridArea: "span 1 / span 1",
                  justifySelf: "start",
                  textDecoration: "none",
                }}
              >
                <RawImg
                  loading="lazy"
                  alt="handly logo"
                  image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fbc8f1bc1d9dd0f7d9e8fb_handly.svg"
                  css={{
                    display: "inline-block",
                    maxWidth: "100%",
                    verticalAlign: "middle",
                  }}
                />
              </Link>

              <nav style={{ justifySelf: "start" }}>
                <Link
                  to="/"
                  style={{
                    padding: "10px 20px",
                    textDecoration: "none",
                    color: "rgb(0, 0, 0)",
                  }}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  style={{
                    padding: "10px 20px",
                    textDecoration: "none",
                    color: "rgb(0, 0, 0)",
                  }}
                >
                  About
                </Link>
                <Link
                  to="/shop"
                  style={{
                    padding: "10px 20px",
                    textDecoration: "none",
                    color: "rgb(0, 0, 0)",
                    fontWeight: "bold",
                  }}
                >
                  Shop
                </Link>
                <Link
                  to="/contact"
                  style={{
                    padding: "10px 20px",
                    textDecoration: "none",
                    color: "rgb(0, 0, 0)",
                  }}
                >
                  Contact
                </Link>
              </nav>

              <div style={{ justifySelf: "end" }}>
                <Link
                  to="/"
                  style={{
                    padding: "10px",
                    textDecoration: "none",
                    color: "rgb(0, 0, 0)",
                  }}
                >
                  ← Back
                </Link>
                <Cart />
              </div>
            </div>
          </div>
        </div>

        {/* Product Detail Content */}
        <div style={{ padding: "100px 150px" }}>
          <div
            style={{
              display: "grid",
              gridTemplate: "auto / 1fr 1fr",
              gap: "80px",
              alignItems: "start",
            }}
          >
            {/* Product Images */}
            <div>
              <div
                style={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  marginBottom: "20px",
                }}
              >
                <RawImg
                  alt={product.name}
                  loading="eager"
                  image={product.image}
                  css={{
                    width: "100%",
                    height: "600px",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplate: "auto / 1fr 1fr",
                  gap: "20px",
                }}
              >
                <RawImg
                  alt={product.name}
                  loading="lazy"
                  image={product.image}
                  css={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                />
                <RawImg
                  alt={product.name}
                  loading="lazy"
                  image={product.hoverImage}
                  css={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1
                style={{
                  fontSize: "48px",
                  fontFamily: "Generalsans, sans-serif",
                  marginBottom: "20px",
                  lineHeight: "1.2",
                }}
              >
                {product.name}
              </h1>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  marginBottom: "30px",
                }}
              >
                <div
                  style={{
                    fontSize: "32px",
                    fontWeight: "bold",
                    fontFamily: "Generalsans, sans-serif",
                  }}
                >
                  {product.price}
                </div>
                {product.originalPrice && (
                  <div
                    style={{
                      fontSize: "24px",
                      textDecoration: "line-through",
                      opacity: "0.5",
                    }}
                  >
                    {product.originalPrice}
                  </div>
                )}
              </div>

              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  marginBottom: "40px",
                  color: "rgb(100, 100, 100)",
                }}
              >
                {product.description}
              </p>

              {/* Features */}
              <div style={{ marginBottom: "40px" }}>
                <h3
                  style={{
                    fontSize: "24px",
                    fontFamily: "Generalsans, sans-serif",
                    marginBottom: "20px",
                  }}
                >
                  Key Features
                </h3>
                <div style={{ display: "grid", gap: "10px" }}>
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          backgroundColor: "rgb(0, 0, 0)",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div style={{ marginBottom: "30px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Size
                </label>
                <select
                  style={{
                    width: "100%",
                    padding: "15px",
                    borderRadius: "10px",
                    border: "2px solid rgb(230, 230, 230)",
                    fontSize: "16px",
                  }}
                >
                  <option>200ml</option>
                  <option>500ml</option>
                  <option>700ml</option>
                </select>
              </div>

              {/* Add to Cart */}
              <div
                style={{ display: "flex", gap: "20px", marginBottom: "40px" }}
              >
                <input
                  type="number"
                  defaultValue="1"
                  min="1"
                  style={{
                    width: "80px",
                    padding: "15px",
                    borderRadius: "10px",
                    border: "2px solid rgb(230, 230, 230)",
                    textAlign: "center",
                  }}
                />
                <button
                  onClick={() => {
                    const cartItem = {
                      id: product.id,
                      name: product.name,
                      image: product.image,
                      price: product.price
                    };

                    const result = addToCart(cartItem);

                    if (result.success) {
                      showToast(`${product.name} added to cart!`, 'success');
                    } else {
                      showToast(result.message || 'Could not add to cart', 'error');
                    }
                  }}
                  style={{
                    flex: "1",
                    backgroundColor: "rgb(0, 0, 0)",
                    color: "rgb(255, 255, 255)",
                    padding: "15px 30px",
                    borderRadius: "10px",
                    border: "none",
                    fontSize: "18px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Add to Cart
                </button>
              </div>

              {/* Product Details Tabs */}
              <div
                style={{
                  borderTop: "1px solid rgb(230, 230, 230)",
                  paddingTop: "40px",
                }}
              >
                <div style={{ marginBottom: "30px" }}>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontFamily: "Generalsans, sans-serif",
                      marginBottom: "15px",
                    }}
                  >
                    Composition
                  </h3>
                  <p style={{ lineHeight: "1.6", color: "rgb(100, 100, 100)" }}>
                    {product.composition}
                  </p>
                </div>

                <div style={{ marginBottom: "30px" }}>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontFamily: "Generalsans, sans-serif",
                      marginBottom: "15px",
                    }}
                  >
                    Effects
                  </h3>
                  <p style={{ lineHeight: "1.6", color: "rgb(100, 100, 100)" }}>
                    {product.effects}
                  </p>
                </div>

                <div style={{ marginBottom: "30px" }}>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontFamily: "Generalsans, sans-serif",
                      marginBottom: "15px",
                    }}
                  >
                    Usage
                  </h3>
                  <p style={{ lineHeight: "1.6", color: "rgb(100, 100, 100)" }}>
                    {product.usage}
                  </p>
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontFamily: "Generalsans, sans-serif",
                      marginBottom: "15px",
                    }}
                  >
                    Active Ingredients
                  </h3>
                  <div style={{ display: "grid", gap: "8px" }}>
                    {product.ingredients.map((ingredient, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <div
                          style={{
                            width: "6px",
                            height: "6px",
                            backgroundColor: "rgb(100, 100, 100)",
                            borderRadius: "50%",
                          }}
                        ></div>
                        <span style={{ color: "rgb(100, 100, 100)" }}>
                          {ingredient}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
