import { RawImg, CustomCode } from "@/components";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <title style={{ display: "none", fontFamily: "sans-serif", lineHeight: "normal" }}>
        About | Handly - Webflow Ecommerce website template
      </title>

      <div style={{ backgroundColor: "rgb(255, 255, 255)", minHeight: "100%" }}>
        <div role="banner" style={{ paddingBottom: "15px", paddingTop: "15px", position: "relative", zIndex: "1000" }}>
          <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "100%", paddingLeft: "150px", paddingRight: "150px" }}>
            <div style={{ alignItems: "center", display: "grid", gap: "40px", gridGap: "40px", gridRowGap: "40px", gridTemplate: "auto / 0.5fr 1.5fr 0.5fr", gridTemplateRows: "auto", justifyItems: "center", rowGap: "40px" }}>
              <Link aria-label="home" to="/" style={{ borderColor: "rgb(51, 51, 51)", color: "rgb(51, 51, 51)", cursor: "pointer", float: "left", gridArea: "span 1 / span 1 / span 1 / span 1", gridRow: "span 1 / span 1", justifySelf: "start", outlineColor: "rgb(51, 51, 51)", position: "relative", textDecorationColor: "rgb(51, 51, 51)", textEmphasisColor: "rgb(51, 51, 51)", textDecoration: "none" }}>
                <RawImg
                  loading="lazy"
                  alt="image"
                  image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/662761db600f236897b11e6c_handly-dark.svg"
                  css={{ borderColor: "rgb(51, 51, 51)", color: "rgb(51, 51, 51)", cursor: "pointer", display: "inline-block", maxWidth: "100%", outlineColor: "rgb(51, 51, 51)", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", textDecorationColor: "rgb(51, 51, 51)", textEmphasisColor: "rgb(51, 51, 51)", verticalAlign: "middle" }}
                />
              </Link>
              <nav role="navigation" style={{ float: "right", justifySelf: "center", position: "relative" }}>
                <Link to="/" style={{ cursor: "pointer", display: "inline-block", marginLeft: "auto", marginRight: "auto", maxWidth: "100%", paddingBottom: "10px", paddingLeft: "20px", paddingRight: "20px", paddingTop: "10px", position: "relative", textAlign: "left", transitionDuration: "0.3s", transitionTimingFunction: "ease-in-out", verticalAlign: "top", textDecoration: "none", color: "inherit" }}>
                  Home
                </Link>
                <Link aria-current="page" to="/about" style={{ cursor: "pointer", display: "inline-block", marginLeft: "auto", marginRight: "auto", maxWidth: "100%", paddingBottom: "10px", paddingLeft: "20px", paddingRight: "20px", paddingTop: "10px", position: "relative", textAlign: "left", textDecoration: "underline solid rgb(0, 0, 0)", textDecorationLine: "underline", transitionDuration: "0.3s", transitionTimingFunction: "ease-in-out", verticalAlign: "top" }}>
                  About
                </Link>
                <div style={{ display: "inline-block", marginLeft: "auto", marginRight: "auto", maxWidth: "100%", position: "relative", textAlign: "left", zIndex: "0" }}>
                  <div aria-controls="w-dropdown-list-0" aria-haspopup="menu" aria-expanded="false" role="button" tabIndex={0} style={{ alignItems: "center", cursor: "pointer", display: "flex", marginLeft: "auto", marginRight: "auto", paddingBottom: "10px", paddingLeft: "20px", paddingRight: "40px", paddingTop: "10px", position: "relative", textAlign: "left", textWrap: "nowrap", transitionDuration: "0.3s", transitionTimingFunction: "ease-in-out", userSelect: "none", verticalAlign: "top", whiteSpace: "nowrap" }}>
                    <div style={{ cursor: "pointer", textAlign: "left", textWrap: "nowrap", userSelect: "none", whiteSpace: "nowrap" }}>
                      Page
                    </div>
                    <div aria-hidden="true" style={{ bottom: "0px", cursor: "pointer", fontFamily: "webflow-icons", height: "16px", lineHeight: "16px", marginBottom: "auto", marginLeft: "auto", marginRight: "20px", marginTop: "auto", position: "absolute", right: "0px", speak: "none", textAlign: "left", textWrap: "nowrap", top: "0px", userSelect: "none", whiteSpace: "nowrap", width: "16px" }}>
                    </div>
                  </div>
                  <nav aria-labelledby="w-dropdown-toggle-0" style={{ backgroundColor: "rgb(230, 230, 230)", borderBottom: "1px solid rgb(0, 0, 0)", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderBottomStyle: "solid", borderBottomWidth: "1px", borderLeft: "1px solid rgb(0, 0, 0)", borderLeftStyle: "solid", borderLeftWidth: "1px", borderRadius: "10px", borderRight: "1px solid rgb(0, 0, 0)", borderRightStyle: "solid", borderRightWidth: "1px", borderStyle: "solid", borderTop: "1px solid rgb(0, 0, 0)", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", borderTopStyle: "solid", borderTopWidth: "1px", borderWidth: "1px", display: "none", marginTop: "10px", minWidth: "100%", opacity: "0", paddingBottom: "20px", paddingLeft: "20px", paddingRight: "20px", paddingTop: "20px", position: "absolute", textAlign: "left", transformStyle: "preserve-3d" }}>
                    <Link tabIndex={0} to="/" style={{ cursor: "pointer", marginLeft: "auto", marginRight: "auto", paddingBottom: "6px", paddingRight: "20px", paddingTop: "6px", position: "relative", textAlign: "left", textWrap: "nowrap", verticalAlign: "top", whiteSpace: "nowrap", textDecoration: "none", color: "inherit" }}>
                      Home
                    </Link>
                    <a tabIndex={0} href="https://handly-wbs.webflow.io/home-2" style={{ cursor: "pointer", marginLeft: "auto", marginRight: "auto", paddingBottom: "6px", paddingRight: "20px", paddingTop: "6px", position: "relative", textAlign: "left", textWrap: "nowrap", verticalAlign: "top", whiteSpace: "nowrap" }}>
                      Home 2
                    </a>
                    <Link tabIndex={0} to="/shop" style={{ cursor: "pointer", marginLeft: "auto", marginRight: "auto", paddingBottom: "6px", paddingRight: "20px", paddingTop: "6px", position: "relative", textAlign: "left", textWrap: "nowrap", verticalAlign: "top", whiteSpace: "nowrap", textDecoration: "none", color: "inherit" }}>
                      Shop
                    </Link>
                    <Link aria-current="page" tabIndex={0} to="/about" style={{ cursor: "pointer", marginLeft: "auto", marginRight: "auto", paddingBottom: "6px", paddingRight: "20px", paddingTop: "6px", position: "relative", textAlign: "left", textDecoration: "underline solid rgb(0, 0, 0)", textDecorationLine: "underline", textWrap: "nowrap", verticalAlign: "top", whiteSpace: "nowrap" }}>
                      About
                    </Link>
                    <Link tabIndex={0} to="/contact" style={{ cursor: "pointer", marginLeft: "auto", marginRight: "auto", paddingBottom: "6px", paddingRight: "20px", paddingTop: "6px", position: "relative", textAlign: "left", textWrap: "nowrap", verticalAlign: "top", whiteSpace: "nowrap", textDecoration: "none", color: "inherit" }}>
                      Contact
                    </Link>
                    <Link tabIndex={0} to="/blog" style={{ cursor: "pointer", marginLeft: "auto", marginRight: "auto", paddingBottom: "6px", paddingRight: "20px", paddingTop: "6px", position: "relative", textAlign: "left", textWrap: "nowrap", verticalAlign: "top", whiteSpace: "nowrap", textDecoration: "none", color: "inherit" }}>
                      Blog
                    </Link>
                    <Link tabIndex={0} to="/faqs" style={{ cursor: "pointer", marginLeft: "auto", marginRight: "auto", paddingBottom: "6px", paddingRight: "20px", paddingTop: "6px", position: "relative", textAlign: "left", textWrap: "nowrap", verticalAlign: "top", whiteSpace: "nowrap", textDecoration: "none", color: "inherit" }}>
                      FAQs
                    </Link>
                    <Link tabIndex={0} to="/privacy-policy" style={{ cursor: "pointer", marginLeft: "auto", marginRight: "auto", paddingBottom: "6px", paddingRight: "20px", paddingTop: "6px", position: "relative", textAlign: "left", textWrap: "nowrap", verticalAlign: "top", whiteSpace: "nowrap", textDecoration: "none", color: "inherit" }}>
                      Privacy Policy
                    </Link>
                  </nav>
                </div>
                <Link to="/contact" style={{ cursor: "pointer", display: "inline-block", marginLeft: "auto", marginRight: "auto", maxWidth: "100%", paddingBottom: "10px", paddingLeft: "20px", paddingRight: "20px", paddingTop: "10px", position: "relative", textAlign: "left", transitionDuration: "0.3s", transitionTimingFunction: "ease-in-out", verticalAlign: "top", textDecoration: "none", color: "inherit" }}>
                  Contact
                </Link>
              </nav>
              <div style={{ alignItems: "center", display: "flex", gap: "20px", gridGap: "20px", gridRowGap: "20px", justifyContent: "flex-end", justifySelf: "end", rowGap: "20px" }}>
                <div>
                  <a href="https://handly-wbs.webflow.io/about#" style={{ cursor: "pointer", maxWidth: "100%", position: "relative", textDecoration: "underline solid rgb(0, 0, 0)", textDecorationLine: "underline" }}>
                    <RawImg
                      loading="lazy"
                      alt="image"
                      image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fbb69eea85400f3511ee32_search-magnifier-dark.svg"
                      css={{ cursor: "pointer", display: "inline-block", height: "24px", maxWidth: "100%", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle", width: "24px" }}
                    />
                    <RawImg
                      loading="lazy"
                      alt="image"
                      image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fbb69eea85400f3511ee30_search-close.svg"
                      css={{ cursor: "pointer", display: "none", height: "20px", maxWidth: "100%", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", position: "fixed", right: "110px", top: "80px", verticalAlign: "middle", width: "20px", zIndex: "999" }}
                    />
                  </a>
                  <div style={{ alignItems: "center", backgroundColor: "rgb(230, 230, 230)", bottom: "0%", display: "none", justifyContent: "center", left: "0%", position: "fixed", right: "0%", textAlign: "center", top: "0%", zIndex: "99" }}>
                    <div style={{ textAlign: "center" }}>
                      <h1 style={{ fontFamily: "Generalsans, sans-serif", fontSize: "56px", lineHeight: "72.8px", marginBottom: "10px", textAlign: "center" }}>
                        Search here
                      </h1>
                      <form action="/search" style={{ display: "flex", gap: "20px", gridGap: "20px", gridRowGap: "20px", marginBottom: "15px", rowGap: "20px", textAlign: "center", width: "700px" }}>
                        <input maxLength={256} name="query" placeholder="Search…" type="search" required style={{ backgroundColor: "rgb(255, 255, 255)", borderBottom: "1px solid rgb(230, 230, 230)", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px", borderBottomStyle: "solid", borderBottomWidth: "1px", borderColor: "rgb(230, 230, 230)", borderLeft: "1px solid rgb(230, 230, 230)", borderLeftStyle: "solid", borderLeftWidth: "1px", borderRadius: "5px", borderRight: "1px solid rgb(230, 230, 230)", borderRightStyle: "solid", borderRightWidth: "1px", borderTop: "1px solid rgb(230, 230, 230)", borderTopLeftRadius: "5px", borderTopRightRadius: "5px", borderTopStyle: "solid", borderTopWidth: "1px", borderWidth: "1px", cursor: "text", fontSize: "14px", height: "52px", lineHeight: "20px", overflowX: "clip", overflowY: "clip", paddingBottom: "10px", paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px", transitionDuration: "0.3s", transitionProperty: "border-color", transitionTimingFunction: "ease-in-out", verticalAlign: "middle", width: "100%" }} />
                        <input type="submit" value="Search" style={{ appearance: "button", backgroundColor: "rgb(0, 0, 0)", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px", borderColor: "rgb(255, 255, 255)", borderRadius: "5px", borderTopLeftRadius: "5px", borderTopRightRadius: "5px", color: "rgb(255, 255, 255)", cursor: "pointer", justifyContent: "center", outlineColor: "rgb(255, 255, 255)", overflowX: "clip", overflowY: "clip", paddingBottom: "12px", paddingLeft: "28px", paddingRight: "28px", paddingTop: "12px", textAlign: "center", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)", textWrap: "nowrap", transitionDuration: "0.3s", transitionProperty: "transform", transitionTimingFunction: "ease-in-out", userSelect: "none", whiteSpace: "pre", whiteSpaceCollapse: "preserve" }} />
                      </form>
                    </div>
                  </div>
                </div>
                <div style={{ position: "relative" }}>
                  <a role="button" aria-haspopup="dialog" aria-label="Open empty cart" href="https://handly-wbs.webflow.io/about#" style={{ alignItems: "center", borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", display: "flex", maxWidth: "100%", outlineColor: "rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)" }}>
                    <RawImg
                      loading="lazy"
                      alt="image"
                      image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fbb69eea85400f3511ee31_cart-dark.svg"
                      css={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", height: "24px", maxWidth: "100%", outlineColor: "rgb(255, 255, 255)", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)", verticalAlign: "middle", width: "24px" }}
                    />
                    <div style={{ backgroundColor: "rgb(0, 0, 0)", borderBottomLeftRadius: "9px", borderBottomRightRadius: "9px", borderColor: "rgb(255, 255, 255)", borderRadius: "9px", borderTopLeftRadius: "9px", borderTopRightRadius: "9px", color: "rgb(255, 255, 255)", cursor: "pointer", fontSize: "11px", fontWeight: "700", height: "18px", lineHeight: "18px", marginLeft: "8px", minWidth: "18px", outlineColor: "rgb(255, 255, 255)", paddingLeft: "6px", paddingRight: "6px", position: "absolute", right: "-40%", textAlign: "center", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)", top: "-30%" }}>
                      0
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section style={{ paddingBottom: "100px", paddingTop: "100px" }}>
          <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "1410px", paddingLeft: "30px", paddingRight: "30px" }}>
            <div style={{ transformStyle: "preserve-3d", width: "80%", transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
              <h1 style={{ fontFamily: "Generalsans, sans-serif", fontSize: "74px", lineHeight: "96.2px", marginBottom: "10px" }}>
                Our story: delving into the roots and evolution of Handly
              </h1>
              <p style={{ marginBottom: "30px" }}>
                Demesne far hearted about the supposed venture and excited to
                see had has. Dependent on so extremely delivered by. Yet no
                jokes worse her why. Bed one supposing breakfast day fulfilled
                off depending questions. Whatever boy her exertion his extended.
                Ecstatic followed handsome drawings entirely mrs one yet
                outweigh Of acceptance, insipidity remarkably is an invitation.
              </p>
            </div>
            <div style={{ height: "100%", transformStyle: "preserve-3d", width: "100%", transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
              <RawImg
                loading="eager"
                alt="image"
                image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/660fcdc291c7eed827aff1b6_about-hero-image.jpg"
                css={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", display: "inline-block", height: "100%", maxWidth: "100%", objectFit: "cover", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", transformStyle: "preserve-3d", verticalAlign: "middle", width: "100%", willChange: "transform", transform: "matrix(1, 0, 0, 1, 0, 29.994)" }}
              />
            </div>
          </div>
        </section>

        <section style={{ paddingBottom: "100px" }}>
          <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "1410px", paddingLeft: "30px", paddingRight: "30px" }}>
            <div style={{ display: "grid", gap: "30px", gridGap: "30px", gridRowGap: "30px", gridTemplate: "auto / 1fr 1fr 1fr", gridTemplateRows: "auto", marginTop: "40px", rowGap: "30px", transformStyle: "preserve-3d", transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
              <div style={{ alignItems: "center", display: "flex", flexDirection: "column", flexFlow: "column nowrap", justifyContent: "center", textAlign: "center" }}>
                <h2 style={{ fontFamily: "Generalsans, sans-serif", fontSize: "54px", lineHeight: "70.2px", marginBottom: "10px", textAlign: "center" }}>
                  15+
                </h2>
                <div style={{ textAlign: "center" }}>
                  Products
                </div>
              </div>
              <div style={{ alignItems: "center", display: "flex", flexDirection: "column", flexFlow: "column nowrap", justifyContent: "center", textAlign: "center" }}>
                <h2 style={{ fontFamily: "Generalsans, sans-serif", fontSize: "54px", lineHeight: "70.2px", marginBottom: "10px", textAlign: "center" }}>
                  15K+
                </h2>
                <div style={{ textAlign: "center" }}>
                  Happy customers
                </div>
              </div>
              <div style={{ alignItems: "center", display: "flex", flexDirection: "column", flexFlow: "column nowrap", justifyContent: "center", textAlign: "center" }}>
                <h2 style={{ fontFamily: "Generalsans, sans-serif", fontSize: "54px", lineHeight: "70.2px", marginBottom: "10px", textAlign: "center" }}>
                  10K
                </h2>
                <div style={{ textAlign: "center" }}>
                  Customers reviews
                </div>
              </div>
              <div style={{ alignItems: "center", display: "flex", flexDirection: "column", flexFlow: "column nowrap", justifyContent: "center", textAlign: "center" }}>
                <h2 style={{ fontFamily: "Generalsans, sans-serif", fontSize: "54px", lineHeight: "70.2px", marginBottom: "10px", textAlign: "center" }}>
                  2012
                </h2>
                <div style={{ textAlign: "center" }}>
                  Since
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "1410px", paddingLeft: "30px", paddingRight: "30px" }}>
            <div style={{ alignItems: "start", display: "grid", gap: "50px", gridGap: "50px", gridRowGap: "50px", gridTemplate: "auto / 1fr 1fr", gridTemplateRows: "auto", rowGap: "50px", transformStyle: "preserve-3d", transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
              <div style={{ position: "sticky", top: "50px" }}>
                <RawImg
                  loading="eager"
                  alt="image"
                  image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/6613df10bda7bb4737c6a480_founder-image.jpg"
                  css={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", display: "inline-block", maxWidth: "100%", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle" }}
                />
              </div>
              <div style={{ alignItems: "flex-start", display: "flex", flexDirection: "column", flexFlow: "column nowrap" }}>
                <p style={{ marginBottom: "30px" }}>
                  Emma is the visionary behind Handwash. With a background in
                  public health and a passion for sustainability, she founded
                  Handwash to address the need for eco-friendly and effective
                  hand hygiene solutions. Her commitment to using natural
                  ingredients and reducing plastic waste has been the driving
                  force behind the company's mission to promote healthier habits
                  while minimizing environmental impact.
                </p>
                <p style={{ opacity: "0.5" }}>
                  With a focus on embracing the present moment and navigating
                  through life's challenges with resilience and positivity, this
                  book provides practical advice and uplifting anecdotes to
                  inspire readers.
                </p>
                <RawImg
                  loading="eager"
                  alt="sign"
                  image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/6613e21e0f7fd19021c39b52_founder-sign.svg"
                  css={{ marginTop: "60px", maxWidth: "100%", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle" }}
                />
              </div>
            </div>
          </div>
        </section>

        <section style={{ gap: "16px", gridGap: "16px", gridRowGap: "16px", gridTemplate: "auto auto / 1fr 1fr", gridTemplateRows: "auto", paddingTop: "150px", rowGap: "16px" }}>
          <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "1410px", paddingLeft: "30px", paddingRight: "30px" }}>
            <div style={{ alignItems: "start", display: "grid", gap: "30px", gridGap: "30px", gridRowGap: "30px", gridTemplate: "auto / 1fr 1fr 1fr", gridTemplateRows: "auto", rowGap: "30px", transformStyle: "preserve-3d", transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
              <div style={{ alignItems: "center", display: "flex", flexDirection: "column", flexFlow: "column nowrap", gridArea: "span 1 / span 1 / span 1 / span 1", gridRow: "span 1 / span 1", textAlign: "center" }}>
                <RawImg
                  loading="eager"
                  alt="image"
                  image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/6603a1e6132bf183494b6a49_feature-icon-06.svg"
                  css={{ height: "50px", marginBottom: "20px", maxWidth: "100%", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", textAlign: "center", verticalAlign: "middle", width: "50px" }}
                />
                <h3 style={{ fontFamily: "Generalsans, sans-serif", fontSize: "28px", lineHeight: "36.4px", marginBottom: "10px", textAlign: "center" }}>
                  Free shipping
                </h3>
                <p style={{ textAlign: "center" }}>
                  Free shipping is available for all orders placed on our
                  website, regardless of order value or size.
                </p>
              </div>
              <div style={{ alignItems: "center", display: "flex", flexDirection: "column", flexFlow: "column nowrap", gridArea: "span 1 / span 1 / span 1 / span 1", gridRow: "span 1 / span 1", textAlign: "center" }}>
                <RawImg
                  loading="eager"
                  alt="image"
                  image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/6603a1e6132bf183494b6a4a_feature-icon-07.svg"
                  css={{ height: "50px", marginBottom: "20px", maxWidth: "100%", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", textAlign: "center", verticalAlign: "middle", width: "50px" }}
                />
                <h3 style={{ fontFamily: "Generalsans, sans-serif", fontSize: "28px", lineHeight: "36.4px", marginBottom: "10px", textAlign: "center" }}>
                  Easy refund
                </h3>
                <p style={{ textAlign: "center" }}>
                  To be eligible for a refund, your item must be unused, in the
                  same condition that you received it.
                </p>
              </div>
              <div style={{ alignItems: "center", display: "flex", flexDirection: "column", flexFlow: "column nowrap", gridArea: "span 1 / span 1 / span 1 / span 1", gridRow: "span 1 / span 1", textAlign: "center" }}>
                <RawImg
                  loading="eager"
                  alt="image"
                  image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/660fa4b9872ba97ebcd3f28c_customer-service.svg"
                  css={{ height: "50px", marginBottom: "20px", maxWidth: "100%", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", textAlign: "center", verticalAlign: "middle", width: "50px" }}
                />
                <h3 style={{ fontFamily: "Generalsans, sans-serif", fontSize: "28px", lineHeight: "36.4px", marginBottom: "10px", textAlign: "center" }}>
                  Online support
                </h3>
                <p style={{ textAlign: "center" }}>
                  Our live chat feature allows you to connect with a member of
                  our support team in real-time.
                </p>
              </div>
              <div style={{ alignItems: "center", display: "flex", flexDirection: "column", flexFlow: "column nowrap", gridArea: "span 1 / span 1 / span 1 / span 1", gridRow: "span 1 / span 1", textAlign: "center" }}>
                <RawImg
                  loading="eager"
                  alt="image"
                  image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/6603a1e6132bf183494b6a4b_feature-icon-09.svg"
                  css={{ height: "50px", marginBottom: "20px", maxWidth: "100%", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", textAlign: "center", verticalAlign: "middle", width: "50px" }}
                />
                <h3 style={{ fontFamily: "Generalsans, sans-serif", fontSize: "28px", lineHeight: "36.4px", marginBottom: "10px", textAlign: "center" }}>
                  Flexible payment
                </h3>
                <p style={{ textAlign: "center" }}>
                  We accept all major credit and debit cards, including Visa,
                  Mastercard, American Express, and Discover.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ gap: "16px", gridGap: "16px", gridRowGap: "16px", gridTemplate: "auto auto / 1fr 1fr", gridTemplateRows: "auto", paddingBottom: "150px", paddingTop: "150px", rowGap: "16px" }}>
          <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "100%", paddingLeft: "150px", paddingRight: "150px" }}>
            <div style={{ marginBottom: "50px", textAlign: "center", transformStyle: "preserve-3d", transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
              <a target="_blank" href="https://www.instagram.com/" style={{ cursor: "pointer", display: "inline", fontFamily: "Generalsans, sans-serif", fontSize: "46px", textAlign: "center" }}>
                @handly
              </a>
            </div>
            <div style={{ alignItems: "center", display: "grid", gap: "30px", gridGap: "30px", gridRowGap: "30px", gridTemplate: "auto / 1fr 1fr 1fr 1fr 1fr", gridTemplateRows: "auto", rowGap: "30px", transformStyle: "preserve-3d", transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
              <a target="_blank" href="https://www.instagram.com/" style={{ cursor: "pointer", maxWidth: "100%", textDecoration: "underline solid rgb(0, 0, 0)", textDecorationLine: "underline", transitionDuration: "0.3s", transitionProperty: "transform", transitionTimingFunction: "ease-in-out" }}>
                <RawImg
                  loading="eager"
                  alt="image"
                  image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/66025df31f0943e4ca9e0e40_instagram-image-01.jpg"
                  css={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", cursor: "pointer", display: "inline-block", maxWidth: "100%", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle" }}
                />
              </a>
              <a target="_blank" href="https://www.instagram.com/" style={{ cursor: "pointer", maxWidth: "100%", textDecoration: "underline solid rgb(0, 0, 0)", textDecorationLine: "underline", transitionDuration: "0.3s", transitionProperty: "transform", transitionTimingFunction: "ease-in-out" }}>
                <RawImg
                  loading="eager"
                  alt="image"
                  image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/66025df469487388cc164d1a_instagram-image-02.jpg"
                  css={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", cursor: "pointer", display: "inline-block", maxWidth: "100%", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle" }}
                />
              </a>
              <a target="_blank" href="https://www.instagram.com/" style={{ cursor: "pointer", maxWidth: "100%", textDecoration: "underline solid rgb(0, 0, 0)", textDecorationLine: "underline", transitionDuration: "0.3s", transitionProperty: "transform", transitionTimingFunction: "ease-in-out" }}>
                <RawImg
                  loading="eager"
                  alt="image"
                  image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/66025df469487388cc164d28_instagram-image-03.jpg"
                  css={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", cursor: "pointer", display: "inline-block", maxWidth: "100%", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle" }}
                />
              </a>
              <a target="_blank" href="https://www.instagram.com/" style={{ cursor: "pointer", maxWidth: "100%", textDecoration: "underline solid rgb(0, 0, 0)", textDecorationLine: "underline", transitionDuration: "0.3s", transitionProperty: "transform", transitionTimingFunction: "ease-in-out" }}>
                <RawImg
                  loading="eager"
                  alt="image"
                  image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/66025df4f140513d2e11a1de_instagram-image-04.jpg"
                  css={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", cursor: "pointer", display: "inline-block", maxWidth: "100%", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle" }}
                />
              </a>
              <a target="_blank" href="https://www.instagram.com/" style={{ cursor: "pointer", maxWidth: "100%", textDecoration: "underline solid rgb(0, 0, 0)", textDecorationLine: "underline", transitionDuration: "0.3s", transitionProperty: "transform", transitionTimingFunction: "ease-in-out" }}>
                <RawImg
                  loading="eager"
                  alt="image"
                  image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/66025df4233cd4dbbca1828f_instagram-image-05.jpg"
                  css={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", cursor: "pointer", display: "inline-block", maxWidth: "100%", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle" }}
                />
              </a>
            </div>
          </div>
        </section>

        <footer style={{ backgroundColor: "rgb(0, 0, 0)", paddingBottom: "100px", paddingTop: "100px" }}>
          <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "100%", paddingLeft: "150px", paddingRight: "150px" }}>
            <div style={{ alignItems: "start", display: "grid", gap: "40px", gridGap: "40px", gridRowGap: "40px", gridTemplate: "auto / 1fr 0.5fr 0.5fr 0.75fr 1fr", gridTemplateRows: "auto", rowGap: "40px", transformStyle: "preserve-3d", transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
              <div style={{ alignItems: "flex-start", display: "flex", flexDirection: "column", flexFlow: "column nowrap", height: "100%" }}>
                <Link to="/" style={{ cursor: "pointer", maxWidth: "100%", textDecoration: "none" }}>
                  <RawImg
                    loading="eager"
                    alt="handly-logo"
                    image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fbc8f1bc1d9dd0f7d9e8fb_handly.svg"
                    css={{ cursor: "pointer", display: "inline-block", maxWidth: "100%", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle" }}
                  />
                </Link>
                <div style={{ marginTop: "auto" }}>
                  <div style={{ alignItems: "center", display: "flex", gap: "15px", gridGap: "15px", gridRowGap: "15px", justifyContent: "flex-start", marginBottom: "20px", rowGap: "15px" }}>
                    <a target="_blank" href="https://www.facebook.com/" style={{ alignItems: "center", backgroundColor: "rgb(255, 255, 255)", borderBottomLeftRadius: "100%", borderBottomRightRadius: "100%", borderRadius: "100%", borderTopLeftRadius: "100%", borderTopRightRadius: "100%", cursor: "pointer", display: "flex", height: "40px", justifyContent: "center", maxWidth: "100%", transitionDuration: "0.3s", transitionProperty: "transform", transitionTimingFunction: "ease-in-out", width: "40px" }}>
                      <RawImg
                        loading="lazy"
                        alt="social-icon"
                        image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fac6b7d9c143aac5a658b1_facebook.svg"
                        css={{ cursor: "pointer", maxWidth: "100%", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle" }}
                      />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/" style={{ alignItems: "center", backgroundColor: "rgb(255, 255, 255)", borderBottomLeftRadius: "100%", borderBottomRightRadius: "100%", borderRadius: "100%", borderTopLeftRadius: "100%", borderTopRightRadius: "100%", cursor: "pointer", display: "flex", height: "40px", justifyContent: "center", maxWidth: "100%", transitionDuration: "0.3s", transitionProperty: "transform", transitionTimingFunction: "ease-in-out", width: "40px" }}>
                      <RawImg
                        loading="lazy"
                        alt="social-icon"
                        image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fac6b7530d73ae13026bd3_instagram.svg"
                        css={{ cursor: "pointer", height: "24px", maxWidth: "100%", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle", width: "24px" }}
                      />
                    </a>
                    <a target="_blank" href="https://twitter.com/" style={{ alignItems: "center", backgroundColor: "rgb(255, 255, 255)", borderBottomLeftRadius: "100%", borderBottomRightRadius: "100%", borderRadius: "100%", borderTopLeftRadius: "100%", borderTopRightRadius: "100%", cursor: "pointer", display: "flex", height: "40px", justifyContent: "center", maxWidth: "100%", transitionDuration: "0.3s", transitionProperty: "transform", transitionTimingFunction: "ease-in-out", width: "40px" }}>
                      <RawImg
                        loading="lazy"
                        alt="social-icon"
                        image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fac6b745b7739a4b740206_twitter-x.svg"
                        css={{ cursor: "pointer", height: "24px", maxWidth: "100%", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle", width: "24px" }}
                      />
                    </a>
                    <a target="_blank" href="https://dribbble.com/" style={{ alignItems: "center", backgroundColor: "rgb(255, 255, 255)", borderBottomLeftRadius: "100%", borderBottomRightRadius: "100%", borderRadius: "100%", borderTopLeftRadius: "100%", borderTopRightRadius: "100%", cursor: "pointer", display: "flex", height: "40px", justifyContent: "center", maxWidth: "100%", transitionDuration: "0.3s", transitionProperty: "transform", transitionTimingFunction: "ease-in-out", width: "40px" }}>
                      <RawImg
                        loading="lazy"
                        alt="social-icon"
                        image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fac6b73bbd3aadd4ff0938_dribble.svg"
                        css={{ cursor: "pointer", height: "24px", maxWidth: "100%", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle", width: "24px" }}
                      />
                    </a>
                  </div>
                  <div>
                    <p style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", outlineColor: "rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)" }}>
                      <span>Designed by </span>
                      <a target="_blank" href="https://webestica.com/" style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", display: "inline", outlineColor: "rgb(255, 255, 255)", textDecoration: "underline solid rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textDecorationLine: "underline", textEmphasisColor: "rgb(255, 255, 255)" }}>
                        Webestica
                      </a>
                      <span>, Powered by </span>
                      <a target="_blank" href="https://webflow.com/" style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", display: "inline", outlineColor: "rgb(255, 255, 255)", textDecoration: "underline solid rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textDecorationLine: "underline", textEmphasisColor: "rgb(255, 255, 255)" }}>
                        Webflow
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ alignItems: "flex-start", display: "flex", flexDirection: "column", flexFlow: "column nowrap", gap: "10px", gridArea: "span 1 / span 1 / span 1 / span 1", gridGap: "10px", gridRow: "span 1 / span 1", gridRowGap: "10px", rowGap: "10px" }}>
                <Link to="/" style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", outlineColor: "rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)", textDecoration: "none" }}>
                  Home
                </Link>
                <a href="https://handly-wbs.webflow.io/home-2" style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", outlineColor: "rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)" }}>
                  Home 2
                </a>
                <Link aria-current="page" to="/about" style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", outlineColor: "rgb(255, 255, 255)", textDecoration: "underline solid rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textDecorationLine: "underline", textEmphasisColor: "rgb(255, 255, 255)" }}>
                  About
                </Link>
                <Link to="/shop" style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", outlineColor: "rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)", textDecoration: "none" }}>
                  Shop
                </Link>
                <Link to="/contact" style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", outlineColor: "rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)", textDecoration: "none" }}>
                  Contact
                </Link>
                <Link to="/blog" style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", outlineColor: "rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)", textDecoration: "none" }}>
                  Blog
                </Link>
                <Link to="/faqs" style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", outlineColor: "rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)", textDecoration: "none" }}>
                  FAQs
                </Link>
                <Link to="/privacy-policy" style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", outlineColor: "rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)", textDecoration: "none" }}>
                  Privacy Policy
                </Link>
              </div>
              <div style={{ alignItems: "flex-start", display: "flex", flexDirection: "column", flexFlow: "column nowrap", gap: "10px", gridArea: "span 1 / span 1 / span 1 / span 1", gridGap: "10px", gridRow: "span 1 / span 1", gridRowGap: "10px", rowGap: "10px" }}>
                <a href="https://handly-wbs.webflow.io/utility-pages/style-guide" style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", outlineColor: "rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)" }}>
                  Style Guide
                </a>
                <a href="https://handly-wbs.webflow.io/utility-pages/instructions" style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", outlineColor: "rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)" }}>
                  Instructions
                </a>
                <a href="https://handly-wbs.webflow.io/utility-pages/licenses" style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", outlineColor: "rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)" }}>
                  Licenses
                </a>
                <a href="https://handly-wbs.webflow.io/utility-pages/changelog" style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", outlineColor: "rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)" }}>
                  Changelog
                </a>
                <a href="https://handly-wbs.webflow.io/404" style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", outlineColor: "rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)" }}>
                  Error 404
                </a>
                <a href="https://handly-wbs.webflow.io/401" style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", outlineColor: "rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)" }}>
                  Password Protected
                </a>
                <a href="https://handly-wbs.webflow.io/utility-pages/link-in-bio" style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", outlineColor: "rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)" }}>
                  Link in Bio
                </a>
                <a href="https://handly-wbs.webflow.io/utility-pages/coming-soon" style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", outlineColor: "rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)" }}>
                  Coming Soon
                </a>
              </div>
              <div style={{ alignItems: "flex-start", display: "flex", flexDirection: "column", flexFlow: "column nowrap", gap: "10px", gridGap: "10px", gridRowGap: "10px", rowGap: "10px" }}>
                <a href="mailto:hello@gmail.com" style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", outlineColor: "rgb(255, 255, 255)", textDecoration: "underline solid rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textDecorationLine: "underline", textEmphasisColor: "rgb(255, 255, 255)", transitionDuration: "0.3s", transitionProperty: "opacity", transitionTimingFunction: "ease-in-out" }}>
                  hello@example.com
                </a>
                <a href="tel:+1(555)123-4567" style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", outlineColor: "rgb(255, 255, 255)", textDecoration: "underline solid rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textDecorationLine: "underline", textEmphasisColor: "rgb(255, 255, 255)", transitionDuration: "0.3s", transitionProperty: "opacity", transitionTimingFunction: "ease-in-out" }}>
                  +1 (555) 123-4567
                </a>
                <div style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", outlineColor: "rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)" }}>
                  Chicago HQ Estica Cop. Macomb, MI 48042
                </div>
              </div>
              <div style={{ alignItems: "flex-start", display: "flex", flexDirection: "column", flexFlow: "column nowrap", height: "100%" }}>
                <p style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", marginBottom: "25px", outlineColor: "rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)" }}>
                  By employing these mechanisms, effective handwashing
                  significantly reduces the spread of harmful germs and
                  bacteria.
                </p>
                <div style={{ flexDirection: "column", flexFlow: "column nowrap" }}>
                  <form name="wf-form-Footer-Form" method="get" aria-label="Footer Form">
                    <div style={{ position: "relative" }}>
                      <input maxLength={256} name="Email" placeholder="Email address" type="email" required style={{ appearance: "auto", backgroundColor: "rgb(0, 0, 0)", borderBottom: "1px solid rgb(230, 230, 230)", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px", borderBottomStyle: "solid", borderBottomWidth: "1px", borderColor: "rgb(230, 230, 230)", borderLeft: "1px solid rgb(230, 230, 230)", borderLeftStyle: "solid", borderLeftWidth: "1px", borderRadius: "5px", borderRight: "1px solid rgb(230, 230, 230)", borderRightStyle: "solid", borderRightWidth: "1px", borderTop: "1px solid rgb(230, 230, 230)", borderTopLeftRadius: "5px", borderTopRightRadius: "5px", borderTopStyle: "solid", borderTopWidth: "1px", borderWidth: "1px", color: "rgb(255, 255, 255)", cursor: "text", fontSize: "14px", height: "52px", lineHeight: "20px", outlineColor: "rgb(255, 255, 255)", overflowX: "clip", overflowY: "clip", paddingBottom: "10px", paddingLeft: "10px", paddingRight: "140px", paddingTop: "10px", position: "relative", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)", transitionDuration: "0.3s", transitionProperty: "border-color", transitionTimingFunction: "ease-in-out", verticalAlign: "middle", width: "100%" }} />
                      <input type="submit" value="Subscribe!" style={{ appearance: "button", backgroundColor: "rgb(255, 255, 255)", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px", borderRadius: "5px", borderTopLeftRadius: "5px", borderTopRightRadius: "5px", bottom: "10px", cursor: "pointer", marginRight: "10px", overflowX: "clip", overflowY: "clip", paddingLeft: "20px", paddingRight: "20px", position: "absolute", right: "0%", textAlign: "center", textWrap: "nowrap", top: "10px", transitionDuration: "0.3s", transitionProperty: "none", transitionTimingFunction: "ease-in-out", userSelect: "none", whiteSpace: "pre", whiteSpaceCollapse: "preserve" }} />
                    </div>
                  </form>
                  <div tabIndex={-1} role="region" aria-label="Footer Form success" style={{ backgroundColor: "rgb(3, 205, 105)", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px", borderColor: "rgb(255, 255, 255)", borderRadius: "5px", borderTopLeftRadius: "5px", borderTopRightRadius: "5px", color: "rgb(255, 255, 255)", display: "none", outlineColor: "rgb(255, 255, 255)", paddingBottom: "15px", paddingLeft: "15px", paddingRight: "15px", paddingTop: "15px", textAlign: "center", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)" }}>
                    <div style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", outlineColor: "rgb(255, 255, 255)", textAlign: "center", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)" }}>
                      Thank you! Your submission has been received!
                    </div>
                  </div>
                  <div tabIndex={-1} role="region" aria-label="Footer Form failure" style={{ backgroundColor: "rgb(233, 34, 34)", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px", borderColor: "rgb(255, 255, 255)", borderRadius: "5px", borderTopLeftRadius: "5px", borderTopRightRadius: "5px", color: "rgb(255, 255, 255)", display: "none", marginTop: "10px", outlineColor: "rgb(255, 255, 255)", paddingBottom: "15px", paddingLeft: "20px", paddingRight: "20px", paddingTop: "15px", textAlign: "center", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)" }}>
                    <div style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", outlineColor: "rgb(255, 255, 255)", textAlign: "center", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)" }}>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <a href="https://webflow.com/templates/designers/webestica" style={{ alignItems: "center", backgroundColor: "rgb(255, 255, 255)", borderBottom: "1px solid rgba(0, 0, 0, 0.1)", borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px", borderBottomStyle: "solid", borderBottomWidth: "1px", borderColor: "rgba(0, 0, 0, 0.1)", borderLeft: "1px solid rgba(0, 0, 0, 0.1)", borderLeftStyle: "solid", borderLeftWidth: "1px", borderRadius: "30px", borderRight: "1px solid rgba(0, 0, 0, 0.1)", borderRightStyle: "solid", borderRightWidth: "1px", borderTop: "1px solid rgba(0, 0, 0, 0.1)", borderTopLeftRadius: "30px", borderTopRightRadius: "30px", borderTopStyle: "solid", borderTopWidth: "1px", borderWidth: "1px", bottom: "30px", cursor: "pointer", display: "flex", fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif', fontSize: "12px", fontWeight: "700", gap: "6px", gridGap: "6px", gridRowGap: "6px", lineHeight: "16.8px", maxWidth: "100%", paddingBottom: "1px", paddingLeft: "2px", paddingRight: "10px", paddingTop: "1px", position: "fixed", right: "30px", rowGap: "6px", zIndex: "9" }}>
          <RawImg
            loading="lazy"
            alt="image"
            image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fad1098759a51dee94e928_63a59d6f6df355075be6d82a_wbs-icon.svg"
            css={{ cursor: "pointer", fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif', fontSize: "12px", fontWeight: "700", lineHeight: "16.8px", maxWidth: "100%", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle" }}
          />
          <div style={{ cursor: "pointer", fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif', fontSize: "12px", fontWeight: "700", lineHeight: "16.8px" }}>
            More Templates
          </div>
        </a>

        <div style={{ display: "none" }}>
        </div>
      </div>
    </>
  );
}
