import { RawImg, CustomCode, ProductCard } from "@/components";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <title style={{ display: "none", fontFamily: "sans-serif", lineHeight: "normal" }}>
        Handly - Webflow Ecommerce website template
      </title>
      
      <div style={{ backgroundColor: "rgb(255, 255, 255)", minHeight: "100%" }}>
        <div role="banner" style={{ paddingBottom: "15px", paddingTop: "15px", position: "relative", zIndex: "1000" }}>
          <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "100%", paddingLeft: "150px", paddingRight: "150px" }}>
            <div style={{ alignItems: "center", display: "grid", gap: "40px", gridGap: "40px", gridRowGap: "40px", gridTemplate: "auto / 0.5fr 1.5fr 0.5fr", gridTemplateRows: "auto", justifyItems: "center", rowGap: "40px" }}>
              <a aria-current="page" aria-label="home" href="https://handly-wbs.webflow.io/" style={{ borderColor: "rgb(51, 51, 51)", color: "rgb(51, 51, 51)", cursor: "pointer", float: "left", gridArea: "span 1 / span 1 / span 1 / span 1", gridRow: "span 1 / span 1", justifySelf: "start", outlineColor: "rgb(51, 51, 51)", position: "relative", textDecorationColor: "rgb(51, 51, 51)", textEmphasisColor: "rgb(51, 51, 51)" }}>
                <RawImg
                  loading="lazy"
                  alt="image"
                  image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fbc8f1bc1d9dd0f7d9e8fb_handly.svg"
                  css={{ borderColor: "rgb(51, 51, 51)", color: "rgb(51, 51, 51)", cursor: "pointer", display: "inline-block", maxWidth: "100%", outlineColor: "rgb(51, 51, 51)", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", textDecorationColor: "rgb(51, 51, 51)", textEmphasisColor: "rgb(51, 51, 51)", verticalAlign: "middle" }}
                />
              </a>
              <nav role="navigation" style={{ float: "right", justifySelf: "start", position: "relative" }}>
                <a aria-current="page" href="https://handly-wbs.webflow.io/" style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", display: "inline-block", marginLeft: "auto", marginRight: "auto", maxWidth: "100%", outlineColor: "rgb(255, 255, 255)", paddingBottom: "10px", paddingLeft: "20px", paddingRight: "20px", paddingTop: "10px", position: "relative", textAlign: "left", textDecoration: "underline solid rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textDecorationLine: "underline", textEmphasisColor: "rgb(255, 255, 255)", transitionDuration: "0.3s", transitionTimingFunction: "ease-in-out", verticalAlign: "top" }}>
                  Home
                </a>
                <Link to="/about" style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", display: "inline-block", marginLeft: "auto", marginRight: "auto", maxWidth: "100%", outlineColor: "rgb(255, 255, 255)", paddingBottom: "10px", paddingLeft: "20px", paddingRight: "20px", paddingTop: "10px", position: "relative", textAlign: "left", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)", transitionDuration: "0.3s", transitionTimingFunction: "ease-in-out", verticalAlign: "top", textDecoration: "none" }}>
                  About
                </Link>
                <div style={{ display: "inline-block", marginLeft: "auto", marginRight: "auto", maxWidth: "100%", position: "relative", textAlign: "left", zIndex: "0" }}>
                  <div aria-controls="w-dropdown-list-0" aria-haspopup="menu" aria-expanded="false" role="button" tabIndex={0} style={{ alignItems: "center", borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", display: "flex", marginLeft: "auto", marginRight: "auto", outlineColor: "rgb(255, 255, 255)", paddingBottom: "10px", paddingLeft: "20px", paddingRight: "40px", paddingTop: "10px", position: "relative", textAlign: "left", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)", textWrap: "nowrap", transitionDuration: "0.3s", transitionTimingFunction: "ease-in-out", userSelect: "none", verticalAlign: "top", whiteSpace: "nowrap" }}>
                    <div style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", outlineColor: "rgb(255, 255, 255)", textAlign: "left", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)", textWrap: "nowrap", userSelect: "none", whiteSpace: "nowrap" }}>
                      Page
                    </div>
                    <div aria-hidden="true" style={{ borderColor: "rgb(255, 255, 255)", bottom: "0px", color: "rgb(255, 255, 255)", cursor: "pointer", fontFamily: "webflow-icons", height: "16px", lineHeight: "16px", marginBottom: "auto", marginLeft: "auto", marginRight: "20px", marginTop: "auto", outlineColor: "rgb(255, 255, 255)", position: "absolute", right: "0px", speak: "none", textAlign: "left", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)", textWrap: "nowrap", top: "0px", userSelect: "none", whiteSpace: "nowrap", width: "16px" }}>
                    </div>
                  </div>
                  <nav aria-labelledby="w-dropdown-toggle-0" style={{ backgroundColor: "rgb(230, 230, 230)", borderBottom: "1px solid rgb(0, 0, 0)", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderBottomStyle: "solid", borderBottomWidth: "1px", borderLeft: "1px solid rgb(0, 0, 0)", borderLeftStyle: "solid", borderLeftWidth: "1px", borderRadius: "10px", borderRight: "1px solid rgb(0, 0, 0)", borderRightStyle: "solid", borderRightWidth: "1px", borderStyle: "solid", borderTop: "1px solid rgb(0, 0, 0)", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", borderTopStyle: "solid", borderTopWidth: "1px", borderWidth: "1px", display: "none", marginTop: "10px", minWidth: "100%", opacity: "0", paddingBottom: "20px", paddingLeft: "20px", paddingRight: "20px", paddingTop: "20px", position: "absolute", textAlign: "left", transformStyle: "preserve-3d" }}>
                    <a aria-current="page" tabIndex={0} href="https://handly-wbs.webflow.io/" style={{ cursor: "pointer", marginLeft: "auto", marginRight: "auto", paddingBottom: "6px", paddingRight: "20px", paddingTop: "6px", position: "relative", textAlign: "left", textDecoration: "underline solid rgb(0, 0, 0)", textDecorationLine: "underline", textWrap: "nowrap", verticalAlign: "top", whiteSpace: "nowrap" }}>
                      Home
                    </a>
                    <a tabIndex={0} href="https://handly-wbs.webflow.io/home-2" style={{ cursor: "pointer", marginLeft: "auto", marginRight: "auto", paddingBottom: "6px", paddingRight: "20px", paddingTop: "6px", position: "relative", textAlign: "left", textWrap: "nowrap", verticalAlign: "top", whiteSpace: "nowrap" }}>
                      Home 2
                    </a>
                    <Link tabIndex={0} to="/shop" style={{ cursor: "pointer", marginLeft: "auto", marginRight: "auto", paddingBottom: "6px", paddingRight: "20px", paddingTop: "6px", position: "relative", textAlign: "left", textWrap: "nowrap", verticalAlign: "top", whiteSpace: "nowrap", textDecoration: "none", color: "inherit" }}>
                      Shop
                    </Link>
                    <Link tabIndex={0} to="/about" style={{ cursor: "pointer", marginLeft: "auto", marginRight: "auto", paddingBottom: "6px", paddingRight: "20px", paddingTop: "6px", position: "relative", textAlign: "left", textWrap: "nowrap", verticalAlign: "top", whiteSpace: "nowrap", textDecoration: "none", color: "inherit" }}>
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
                <Link to="/contact" style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", display: "inline-block", marginLeft: "auto", marginRight: "auto", maxWidth: "100%", outlineColor: "rgb(255, 255, 255)", paddingBottom: "10px", paddingLeft: "20px", paddingRight: "20px", paddingTop: "10px", position: "relative", textAlign: "left", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)", transitionDuration: "0.3s", transitionTimingFunction: "ease-in-out", verticalAlign: "top", textDecoration: "none" }}>
                  Contact
                </Link>
              </nav>
              <div style={{ alignItems: "center", display: "flex", gap: "20px", gridGap: "20px", gridRowGap: "20px", justifyContent: "flex-end", justifySelf: "end", rowGap: "20px" }}>
                <div>
                  <a href="https://handly-wbs.webflow.io/#" style={{ cursor: "pointer", maxWidth: "100%", position: "relative", textDecoration: "underline solid rgb(0, 0, 0)", textDecorationLine: "underline" }}>
                    <RawImg
                      loading="lazy"
                      alt="image"
                      image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fd278b7f9a9dfa2b0b0730_search-magnifier.svg"
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
                  <a role="button" aria-haspopup="dialog" aria-label="Open empty cart" href="https://handly-wbs.webflow.io/#" style={{ alignItems: "center", borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", display: "flex", maxWidth: "100%", outlineColor: "rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)" }}>
                    <RawImg
                      loading="lazy"
                      alt="image"
                      image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fd27bca25c5fa66526db0c_cart.svg"
                      css={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", height: "24px", maxWidth: "100%", outlineColor: "rgb(255, 255, 255)", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)", verticalAlign: "middle", width: "24px" }}
                    />
                    <div style={{ backgroundColor: "rgb(255, 255, 255)", borderBottomLeftRadius: "9px", borderBottomRightRadius: "9px", borderRadius: "9px", borderTopLeftRadius: "9px", borderTopRightRadius: "9px", cursor: "pointer", fontSize: "11px", fontWeight: "700", height: "18px", lineHeight: "18px", marginLeft: "8px", minWidth: "18px", paddingLeft: "6px", paddingRight: "6px", position: "absolute", right: "-40%", textAlign: "center", top: "-30%" }}>
                      0
                    </div>
                  </a>
                  <div style={{ alignItems: "stretch", backgroundColor: "rgba(0, 0, 0, 0.8)", bottom: "0px", display: "none", justifyContent: "flex-end", left: "0px", position: "fixed", right: "0px", top: "0px", zIndex: "1001" }}>
                    <div role="dialog" style={{ backgroundColor: "rgb(255, 255, 255)", boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 25px 0px", display: "flex", flexDirection: "column", flexFlow: "column nowrap", maxWidth: "480px", minWidth: "320px", overflowX: "auto", overflowY: "auto", width: "100%" }}>
                      <div style={{ alignItems: "center", borderBottom: "1px solid rgb(230, 230, 230)", borderBottomStyle: "solid", borderBottomWidth: "1px", borderColor: "rgb(0, 0, 0) rgb(0, 0, 0) rgb(230, 230, 230)", display: "flex", flexShrink: "0", justifyContent: "space-between", paddingBottom: "16px", paddingLeft: "24px", paddingRight: "24px", paddingTop: "16px", position: "relative", borderStyle: "none none solid" }}>
                        <h6 style={{ fontFamily: "Generalsans, sans-serif", fontSize: "28px", lineHeight: "36.4px" }}>
                          Your Cart
                        </h6>
                        <a role="button" aria-label="Close cart" style={{ cursor: "pointer", height: "16px", maxWidth: "100%", textDecoration: "underline solid rgb(0, 0, 0)", textDecorationLine: "underline", width: "16px" }}>
                          <RawImg
                            loading="lazy"
                            alt="image"
                            image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fbb69eea85400f3511ee30_search-close.svg"
                            css={{ cursor: "pointer", display: "inline-block", maxWidth: "100%", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle", zIndex: "999" }}
                          />
                        </a>
                      </div>
                      <div style={{ display: "flex", flexBasis: "0%", flexDirection: "column", flexFlow: "column nowrap", flexGrow: "1" }}>
                        <form style={{ display: "none", flexBasis: "0%", flexDirection: "column", flexFlow: "column nowrap", flexGrow: "1", justifyContent: "flex-start" }}>
                          <div style={{ flexBasis: "0%", flexGrow: "1", overflowX: "auto", overflowY: "auto", paddingBottom: "12px", paddingLeft: "24px", paddingRight: "24px", paddingTop: "12px" }}>
                          </div>
                          <div style={{ borderColor: "rgb(230, 230, 230) rgb(0, 0, 0) rgb(0, 0, 0)", borderTop: "1px solid rgb(230, 230, 230)", borderTopStyle: "solid", borderTopWidth: "1px", borderWidth: "1px 0px 0px", display: "flex", flexDirection: "column", flexFlow: "column nowrap", flexShrink: "0", paddingBottom: "24px", paddingLeft: "24px", paddingRight: "24px", paddingTop: "16px", borderStyle: "solid none none" }}>
                            <div aria-atomic="true" aria-live="polite" style={{ alignItems: "baseline", display: "flex", flexShrink: "0", justifyContent: "space-between", marginBottom: "16px" }}>
                              <div>Subtotal</div>
                              <div style={{ fontWeight: "700" }}>
                              </div>
                            </div>
                            <div>
                              <div style={{ display: "none" }}>
                                <a role="button" aria-label="Apple Pay" aria-haspopup="dialog" tabIndex={0} style={{ alignItems: "center", backgroundColor: "rgb(0, 0, 0)", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundSize: "100% 50%", borderBottomLeftRadius: "2px", borderBottomRightRadius: "2px", borderColor: "rgb(255, 255, 255)", borderRadius: "2px", borderTopLeftRadius: "2px", borderTopRightRadius: "2px", color: "rgb(255, 255, 255)", cursor: "pointer", display: "flex", height: "38px", marginBottom: "8px", minHeight: "30px", outlineColor: "rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)" }}>
                                  <div style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", outlineColor: "rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)" }}>
                                  </div>
                                </a>
                                <a role="button" tabIndex={0} aria-haspopup="dialog" style={{ alignItems: "center", backgroundColor: "rgb(0, 0, 0)", borderBottomLeftRadius: "2px", borderBottomRightRadius: "2px", borderColor: "rgb(255, 255, 255)", borderRadius: "2px", borderTopLeftRadius: "2px", borderTopRightRadius: "2px", color: "rgb(255, 255, 255)", cursor: "pointer", display: "none", height: "38px", justifyContent: "center", marginBottom: "8px", outlineColor: "rgb(255, 255, 255)", paddingLeft: "15px", paddingRight: "15px", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)" }}>
                                  <CustomCode
                                    $tagName="div"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewbox="0 0 16 16"
                                    $name="SVG"
                                    code="&lt;svg class=&quot;w-commerce-commercequickcheckoutgoogleicon&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; width=&quot;16&quot; height=&quot;16&quot; viewBox=&quot;0 0 16 16&quot; style=&quot;
  border-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  cursor: pointer;
  height: 16px;
  margin-right: 8px;
  outline-color: rgb(255, 255, 255);
  overflow-clip-margin: content-box;
  overflow-x: hidden;
  overflow-y: hidden;
  text-decoration-color: rgb(255, 255, 255);
  text-emphasis-color: rgb(255, 255, 255);
  width: 16px;&quot;&gt;&lt;defs&gt;&lt;polygon id=&quot;google-mark-a&quot; points=&quot;0 .329 3.494 .329 3.494 7.649 0 7.649&quot;&gt;&lt;/polygon&gt;&lt;polygon id=&quot;google-mark-c&quot; points=&quot;.894 0 13.169 0 13.169 6.443 .894 6.443&quot;&gt;&lt;/polygon&gt;&lt;/defs&gt;&lt;g fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;&gt;&lt;path fill=&quot;#4285F4&quot; d=&quot;M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469&quot;&gt;&lt;/path&gt;&lt;path fill=&quot;#34A853&quot; d=&quot;M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16&quot;&gt;&lt;/path&gt;&lt;g transform=&quot;translate(0 4)&quot;&gt;&lt;mask id=&quot;google-mark-b&quot; fill=&quot;#fff&quot;&gt;&lt;use xlink:href=&quot;#google-mark-a&quot;&gt;&lt;/use&gt;&lt;/mask&gt;&lt;path fill=&quot;#FBBC04&quot; d=&quot;M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337&quot; mask=&quot;url(#google-mark-b)&quot;&gt;&lt;/path&gt;&lt;/g&gt;&lt;mask id=&quot;google-mark-d&quot; fill=&quot;#fff&quot;&gt;&lt;use xlink:href=&quot;#google-mark-c&quot;&gt;&lt;/use&gt;&lt;/mask&gt;&lt;path fill=&quot;#EA4335&quot; d=&quot;M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291&quot; mask=&quot;url(#google-mark-d)&quot;&gt;&lt;/path&gt;&lt;/g&gt;&lt;/svg&gt;"
                                    css={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", height: "16px", marginRight: "8px", outlineColor: "rgb(255, 255, 255)", overflowClipMargin: "content-box", overflowX: "hidden", overflowY: "hidden", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)", width: "16px" }}
                                  />
                                  <CustomCode
                                    $tagName="div"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewbox="0 0 16 16"
                                    $name="SVG"
                                    code="&lt;svg class=&quot;w-commerce-commercequickcheckoutmicrosofticon&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;16&quot; height=&quot;16&quot; viewBox=&quot;0 0 16 16&quot; style=&quot;
  border-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  cursor: pointer;
  height: 16px;
  margin-right: 8px;
  outline-color: rgb(255, 255, 255);
  overflow-clip-margin: content-box;
  overflow-x: hidden;
  overflow-y: hidden;
  text-decoration-color: rgb(255, 255, 255);
  text-emphasis-color: rgb(255, 255, 255);
  width: 16px;&quot;&gt;&lt;g fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;&gt;&lt;polygon fill=&quot;#F05022&quot; points=&quot;7 7 1 7 1 1 7 1&quot;&gt;&lt;/polygon&gt;&lt;polygon fill=&quot;#7DB902&quot; points=&quot;15 7 9 7 9 1 15 1&quot;&gt;&lt;/polygon&gt;&lt;polygon fill=&quot;#00A4EE&quot; points=&quot;7 15 1 15 1 9 7 9&quot;&gt;&lt;/polygon&gt;&lt;polygon fill=&quot;#FFB700&quot; points=&quot;15 15 9 15 9 9 15 9&quot;&gt;&lt;/polygon&gt;&lt;/g&gt;&lt;/svg&gt;"
                                    css={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", height: "16px", marginRight: "8px", outlineColor: "rgb(255, 255, 255)", overflowClipMargin: "content-box", overflowX: "hidden", overflowY: "hidden", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)", width: "16px" }}
                                  />
                                  <div style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", outlineColor: "rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)" }}>
                                    Pay with browser.
                                  </div>
                                </a>
                              </div>
                              <a href="https://handly-wbs.webflow.io/checkout" style={{ alignItems: "center", backgroundColor: "rgb(0, 0, 0)", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px", borderColor: "rgb(255, 255, 255)", borderRadius: "5px", borderTopLeftRadius: "5px", borderTopRightRadius: "5px", color: "rgb(255, 255, 255)", cursor: "pointer", justifyContent: "center", outlineColor: "rgb(255, 255, 255)", paddingBottom: "12px", paddingLeft: "28px", paddingRight: "28px", paddingTop: "12px", textAlign: "center", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)", transitionDuration: "0.3s", transitionProperty: "transform", transitionTimingFunction: "ease-in-out" }}>
                                Continue to Checkout
                              </a>
                            </div>
                          </div>
                        </form>
                        <div style={{ alignItems: "center", display: "flex", flexBasis: "0%", flexDirection: "column", flexFlow: "column nowrap", flexGrow: "1", justifyContent: "center", paddingBottom: "100px", paddingTop: "100px", textAlign: "center" }}>
                          <RawImg
                            loading="eager"
                            alt="image"
                            image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fbb69eea85400f3511ee2f_empty-cart-image.svg"
                            css={{ marginBottom: "60px", maxWidth: "100%", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", textAlign: "center", verticalAlign: "middle", width: "230px" }}
                          />
                          <div style={{ textAlign: "center" }}>
                            <p style={{ marginBottom: "10px", textAlign: "center" }}>
                              No products inside your bag.
                            </p>
                            <a href="https://handly-wbs.webflow.io/shop" style={{ backgroundColor: "rgb(0, 0, 0)", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px", borderColor: "rgb(255, 255, 255)", borderRadius: "5px", borderTopLeftRadius: "5px", borderTopRightRadius: "5px", color: "rgb(255, 255, 255)", cursor: "pointer", display: "inline-block", justifyContent: "center", outlineColor: "rgb(255, 255, 255)", paddingBottom: "12px", paddingLeft: "28px", paddingRight: "28px", paddingTop: "12px", textAlign: "center", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)", transitionDuration: "0.3s", transitionProperty: "transform", transitionTimingFunction: "ease-in-out" }}>
                              Start Shopping
                            </a>
                          </div>
                        </div>
                        <div aria-live="assertive" style={{ backgroundColor: "rgb(233, 34, 34)", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px", borderColor: "rgb(255, 255, 255)", borderRadius: "5px", borderTopLeftRadius: "5px", borderTopRightRadius: "5px", color: "rgb(255, 255, 255)", display: "none", flexShrink: "0", marginBottom: "24px", marginLeft: "24px", marginRight: "24px", outlineColor: "rgb(255, 255, 255)", paddingBottom: "15px", paddingLeft: "20px", paddingRight: "20px", paddingTop: "15px", textAlign: "center", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)" }}>
                          <div style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", outlineColor: "rgb(255, 255, 255)", textAlign: "center", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)" }}>
                            Product is not available in this quantity.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-label="menu" role="button" tabIndex={0} aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false" style={{ cursor: "pointer", display: "none", float: "right", fontSize: "24px", paddingBottom: "18px", paddingLeft: "18px", paddingRight: "18px", paddingTop: "18px", position: "relative", userSelect: "text" }}>
                  <div style={{ cursor: "pointer", fontFamily: "webflow-icons", fontSize: "24px", speak: "none", userSelect: "text" }}>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "none", left: "0px", overflowX: "hidden", overflowY: "hidden", position: "absolute", right: "0px", top: "100%", width: "100%" }}>
          </div>
        </div>
        <section style={{ backgroundColor: "rgb(0, 0, 0)", marginTop: "-100px", overflowX: "hidden", overflowY: "hidden", position: "relative", zIndex: "9" }}>
          <div style={{ display: "grid", gap: "0px", gridGap: "0px", gridRowGap: "0px", gridTemplate: "auto / 1fr 1fr", gridTemplateRows: "auto", rowGap: "0px", transformStyle: "preserve-3d", transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
            <div style={{ alignItems: "flex-start", display: "flex", flexDirection: "column", flexFlow: "column nowrap", marginBottom: "60px", marginLeft: "150px", marginRight: "150px", marginTop: "195px", overflowX: "hidden", overflowY: "hidden" }}>
              <div style={{ backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 0, 0)", borderRadius: "20px", padding: "60px", border: "2px solid rgb(0, 0, 0)", maxWidth: "600px" }}>
                <h1 style={{ fontFamily: "Generalsans, sans-serif", fontSize: "48px", lineHeight: "56px", marginBottom: "30px", textAlign: "center", fontWeight: "bold" }}>
                  Get Your Free Trial Kit
                </h1>

                <div style={{ textAlign: "center", marginBottom: "40px" }}>
                  <div style={{ fontSize: "18px", marginBottom: "20px" }}>
                    with free shipping when you add your card
                  </div>

                  <div style={{ fontSize: "64px", fontWeight: "bold", fontFamily: "monospace", marginBottom: "20px" }}>
                    <span id="timer">05:00</span>
                  </div>

                  <div style={{ fontSize: "14px", color: "rgb(100, 100, 100)" }}>
                    Limited time offer
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "40px", fontSize: "16px" }}>
                  <div style={{ textAlign: "center", flex: "1" }}>
                    <div style={{ fontWeight: "bold", marginBottom: "5px" }}>1. Choose</div>
                    <div style={{ color: "rgb(100, 100, 100)" }}>Product set</div>
                  </div>
                  <div style={{ textAlign: "center", flex: "1" }}>
                    <div style={{ fontWeight: "bold", marginBottom: "5px" }}>2. Add</div>
                    <div style={{ color: "rgb(100, 100, 100)" }}>Card details</div>
                  </div>
                  <div style={{ textAlign: "center", flex: "1" }}>
                    <div style={{ fontWeight: "bold", marginBottom: "5px" }}>3. Get</div>
                    <div style={{ color: "rgb(100, 100, 100)" }}>For free</div>
                  </div>
                </div>

                <Link to="/shop" style={{ display: "block", backgroundColor: "rgb(0, 0, 0)", color: "rgb(255, 255, 255)", padding: "18px 40px", borderRadius: "10px", textAlign: "center", textDecoration: "none", fontSize: "18px", fontWeight: "bold", cursor: "pointer", border: "2px solid rgb(0, 0, 0)", transition: "all 0.3s ease" }}>
                  TRY NOW
                </Link>

                <script dangerouslySetInnerHTML={{ __html: `
                  (function() {
                    let timeLeft = 300; // 5 minutes in seconds
                    const timer = document.getElementById('timer');

                    function updateTimer() {
                      const minutes = Math.floor(timeLeft / 60);
                      const seconds = timeLeft % 60;
                      if (timer) {
                        timer.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
                      }

                      if (timeLeft > 0) {
                        timeLeft--;
                        setTimeout(updateTimer, 1000);
                      }
                    }

                    updateTimer();
                  })();
                ` }} />
              </div>
              <div style={{ alignItems: "center", display: "flex", gap: "100px", gridGap: "100px", gridRowGap: "100px", marginTop: "130px", position: "relative", rowGap: "100px", backgroundColor: "rgb(0, 0, 0)" }}>
                <div style={{ backgroundImage: "linear-gradient(90deg, rgb(0, 0, 0) 23%, rgba(0, 0, 0, 0))", bottom: "0%", height: "60px", left: "0%", position: "absolute", top: "0%", width: "60px", zIndex: "9" }}>
                </div>
                <div style={{ alignItems: "center", display: "flex", gap: "100px", gridGap: "100px", gridRowGap: "100px", rowGap: "100px", transformStyle: "preserve-3d", willChange: "transform", transform: "matrix(1, 0, 0, 1, -197.194, 0)" }}>
                  <RawImg
                    loading="eager"
                    alt="client-image"
                    image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/661368739ad17a69dea56d7c_client-image-01.svg"
                    css={{ flexShrink: "0", maxWidth: "100%", opacity: "0.5", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle" }}
                  />
                  <RawImg
                    loading="eager"
                    alt="client-image"
                    image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/66136871d5fd66e6b235209d_client-image-05.svg"
                    css={{ flexShrink: "0", maxWidth: "100%", opacity: "0.5", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle" }}
                  />
                  <RawImg
                    loading="eager"
                    alt="client-image"
                    image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/66136870565b0c68e626eb7c_client-image-04.svg"
                    css={{ flexShrink: "0", maxWidth: "100%", opacity: "0.5", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle" }}
                  />
                  <RawImg
                    loading="eager"
                    alt="client-image"
                    image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/661368702a7e161501e9857f_client-image-03.svg"
                    css={{ flexShrink: "0", maxWidth: "100%", opacity: "0.5", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle" }}
                  />
                  <RawImg
                    loading="eager"
                    alt="client-image"
                    image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/66136870fa18242c4bc8b3aa_client-image-02.svg"
                    css={{ flexShrink: "0", maxWidth: "100%", opacity: "0.5", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle" }}
                  />
                </div>
                <div style={{ backgroundImage: "linear-gradient(270deg, rgb(0, 0, 0) 23%, rgba(0, 0, 0, 0))", bottom: "0%", height: "60px", position: "absolute", right: "0%", top: "0%", width: "60px", zIndex: "9" }}>
                </div>
              </div>
            </div>
            <div style={{ height: "100%", position: "relative", width: "100%", zIndex: "9" }}>
              <RawImg
                loading="eager"
                alt="image"
                image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fbc2cf1ebc99661b97949e_hero-image.jpg"
                css={{ display: "inline-block", height: "100%", maxWidth: "100%", objectFit: "cover", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle", width: "100%" }}
              />
              <div style={{ backgroundColor: "rgb(0, 0, 0)", bottom: "0%", left: "0%", opacity: "0.25", position: "absolute", right: "0%", top: "0%" }}>
              </div>
            </div>
          </div>
        </section>
        <section style={{ gap: "16px", gridGap: "16px", gridRowGap: "16px", gridTemplate: "auto auto / 1fr 1fr", gridTemplateRows: "auto auto", paddingBottom: "150px", paddingTop: "150px", rowGap: "16px" }}>
          <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "100%", paddingLeft: "150px", paddingRight: "150px" }}>
            <div style={{ display: "grid", gap: "80px", gridGap: "80px", gridRowGap: "80px", gridTemplate: "auto / 0.75fr 1fr 1fr", gridTemplateRows: "auto", rowGap: "80px", transformStyle: "preserve-3d", transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
              <div>
                <div style={{ textTransform: "uppercase" }}>
                  About Hand Washing
                </div>
              </div>
              <div>
                <h2 style={{ fontFamily: "Generalsans, sans-serif", fontSize: "46px", lineHeight: "59.8px" }}>
                  Handly experience hand wash elevating hand hygiene to the next
                  level
                </h2>
              </div>
              <div>
                <p style={{ marginBottom: "30px" }}>
                  Emphasizes the commitment to improving hand standards. With
                  our superior products and effective solutions, we strive to
                  elevate your hand cleanliness and health.
                </p>
                <p style={{ marginBottom: "30px" }}>
                  Offers valuable information on the importance of handwashing,
                  proper techniques, and benefits of maintaining clean hands.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section style={{ gap: "16px", gridGap: "16px", gridRowGap: "16px", gridTemplate: "auto auto / 1fr 1fr", gridTemplateRows: "auto auto", paddingBottom: "150px", rowGap: "16px" }}>
          <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "100%", paddingLeft: "150px", paddingRight: "150px" }}>
            <div style={{ marginBottom: "50px", transformStyle: "preserve-3d", transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
              <h2 style={{ fontFamily: "Generalsans, sans-serif", fontSize: "70px", lineHeight: "91px", marginBottom: "10px" }}>
                Featured products
              </h2>
            </div>
            <div>
              <div role="list" style={{ display: "grid", gap: "50px", gridGap: "50px", gridRowGap: "50px", gridTemplate: "auto / 1fr 1fr 1fr", gridTemplateRows: "auto", rowGap: "50px", transformStyle: "preserve-3d", transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
                <ProductCard
                  id="sparklesoft-hand-wash"
                  name="Sparklesoft hand wash"
                  image="https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/662235ae210b04851586d4a5_product-image-04.jpg"
                  hoverImage="https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/65fbf73159858f314a83e98f_product-hover-04.jpg"
                  description="Experience the ultimate in hand care with Sparklesoft hand wash. Our advanced formula combines gentle cleansing agents with moisturizing elements to leave your hands feeling incredibly soft and clean. Enriched with natural extracts and vitamins, this luxurious hand wash provides deep cleansing while maintaining your skin's natural moisture balance. Perfect for daily use, it effectively removes dirt and bacteria while leaving a subtle, refreshing scent."
                  linkTo="/product/sparklesoft-hand-wash"
                />
                <ProductCard
                  id="soothesuds-hand-wash"
                  name="Soothesuds hand wash"
                  image="https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/6622361dc4e8a0f82d73b13e_product-image-08.jpg"
                  hoverImage="https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/65fbf77715e580b72226ce27_product-hover-08.jpg"
                  description="Soothesuds hand wash delivers exceptional comfort and protection for sensitive skin. Our hypoallergenic formula is specially crafted with calming botanical extracts including chamomile and aloe vera to soothe and nourish delicate skin. This gentle yet effective hand wash removes impurities without causing irritation, making it ideal for frequent use. The pH-balanced formula helps maintain healthy skin while providing long-lasting moisturization and protection."
                  linkTo="/product/soothesuds-hand-wash"
                />
                <ProductCard
                  id="vitalguard-hand-wash"
                  name="Vitalguard hand wash"
                  image="https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/6622366ca8850ec53ff1b22a_product-image-12.jpg"
                  hoverImage="https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/65fc0c78abb09415fe40b4cc_product-hover-12.jpg"
                  description="Vitalguard hand wash offers superior antimicrobial protection without compromising on gentleness. Formulated with advanced cleansing technology and enriched with vitamin E and essential oils, this powerful hand wash eliminates 99.9% of germs while keeping your hands soft and hydrated. The refreshing citrus scent invigorates your senses while the rich, creamy lather provides a luxurious washing experience. Dermatologist-tested and suitable for all skin types."
                  linkTo="/product/vitalguard-hand-wash"
                />
              </div>
            </div>
          </div>
        </section>
        <section style={{ gap: "16px", gridGap: "16px", gridRowGap: "16px", gridTemplate: "auto auto / 1fr 1fr", gridTemplateRows: "auto auto", overflowX: "hidden", overflowY: "hidden", paddingBottom: "150px", rowGap: "16px", transformStyle: "preserve-3d", transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
          <div style={{ display: "flex", gap: "20px", gridGap: "20px", gridRowGap: "20px", rowGap: "20px", transformStyle: "preserve-3d", willChange: "transform", transform: "matrix(1, 0, 0, 1, -710.64, 0)" }}>
            <h3 style={{ flexShrink: "0", fontFamily: "Generalsans, sans-serif", fontSize: "110px", fontWeight: "500", lineHeight: "143px" }}>
              Germ-free handwash
            </h3>
            <h3 style={{ borderColor: "rgba(0, 0, 0, 0)", color: "rgba(0, 0, 0, 0)", flexShrink: "0", fontFamily: "Generalsans, sans-serif", fontSize: "110px", fontWeight: "500", lineHeight: "143px", outlineColor: "rgba(0, 0, 0, 0)", textDecorationColor: "rgba(0, 0, 0, 0)", textEmphasisColor: "rgba(0, 0, 0, 0)" }}>
              Germ-free handwash
            </h3>
            <h3 style={{ flexShrink: "0", fontFamily: "Generalsans, sans-serif", fontSize: "110px", fontWeight: "500", lineHeight: "143px" }}>
              Germ-free handwash
            </h3>
            <h3 style={{ borderColor: "rgba(0, 0, 0, 0)", color: "rgba(0, 0, 0, 0)", flexShrink: "0", fontFamily: "Generalsans, sans-serif", fontSize: "110px", fontWeight: "500", lineHeight: "143px", outlineColor: "rgba(0, 0, 0, 0)", textDecorationColor: "rgba(0, 0, 0, 0)", textEmphasisColor: "rgba(0, 0, 0, 0)" }}>
              Germ-free handwash
            </h3>
            <h3 style={{ flexShrink: "0", fontFamily: "Generalsans, sans-serif", fontSize: "110px", fontWeight: "500", lineHeight: "143px" }}>
              Germ-free handwash
            </h3>
            <h3 style={{ borderColor: "rgba(0, 0, 0, 0)", color: "rgba(0, 0, 0, 0)", flexShrink: "0", fontFamily: "Generalsans, sans-serif", fontSize: "110px", fontWeight: "500", lineHeight: "143px", outlineColor: "rgba(0, 0, 0, 0)", textDecorationColor: "rgba(0, 0, 0, 0)", textEmphasisColor: "rgba(0, 0, 0, 0)" }}>
              Germ-free handwash
            </h3>
            <h3 style={{ flexShrink: "0", fontFamily: "Generalsans, sans-serif", fontSize: "110px", fontWeight: "500", lineHeight: "143px" }}>
              Germ-free handwash
            </h3>
          </div>
        </section>
        <section style={{ transformStyle: "preserve-3d", transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
          <div style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", height: "880px", outlineColor: "rgb(255, 255, 255)", overflowX: "hidden", overflowY: "hidden", position: "relative", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)" }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              src="https://cdn.builder.io/o/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2Fa5c3e99879f44e4abffe8a2d7a390e96?alt=media&token=85445969-515e-425f-a463-f51efacfbe91&apiKey=aa57fa3495ed440bb8d5e43633a5eae3"
              style={{
                borderColor: "rgb(255, 255, 255)",
                bottom: "-100%",
                color: "rgb(255, 255, 255)",
                height: "100%",
                left: "-100%",
                marginBottom: "auto",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "auto",
                objectFit: "cover",
                outlineColor: "rgb(255, 255, 255)",
                overflowClipMargin: "content-box",
                overflowX: "clip",
                overflowY: "clip",
                position: "absolute",
                right: "-100%",
                textDecorationColor: "rgb(255, 255, 255)",
                textEmphasisColor: "rgb(255, 255, 255)",
                top: "-100%",
                width: "100%",
                zIndex: "-100"
              }}
            />
          </div>
        </section>
        <section style={{ backgroundColor: "rgb(230, 230, 230)", paddingBottom: "130px", paddingTop: "130px" }}>
          <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "100%", paddingLeft: "150px", paddingRight: "150px" }}>
            <div style={{ alignItems: "start", display: "grid", gap: "50px", gridGap: "50px", gridRowGap: "50px", gridTemplate: "auto / 1fr 1fr 1fr", gridTemplateRows: "auto", rowGap: "50px", transformStyle: "preserve-3d", transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
              <div style={{ alignItems: "flex-start", display: "flex", gap: "40px", gridGap: "40px", gridRowGap: "40px", rowGap: "40px" }}>
                <RawImg
                  loading="eager"
                  alt="image"
                  image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fc082b30a465c9184424cc_testimonial-iamge-01.jpg"
                  css={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", height: "150px", maxWidth: "100%", objectFit: "cover", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle", width: "150px" }}
                />
                <div style={{ alignItems: "flex-start", display: "flex", flexDirection: "column", flexFlow: "column nowrap", gap: "15px", gridGap: "15px", gridRowGap: "15px", rowGap: "15px" }}>
                  <RawImg
                    loading="eager"
                    alt="image"
                    image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fc0aa67c049f14eee2ce71_star.svg"
                    css={{ maxWidth: "100%", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle" }}
                  />
                  <p>
                    It effectively removes dirt and germs while leaving my hands
                    feeling soft and moisturized. I'm truly impressed!
                  </p>
                  <h3 style={{ fontFamily: "Generalsans, sans-serif", fontSize: "20px", lineHeight: "26px" }}>
                    Amanda Reed
                  </h3>
                </div>
              </div>
              <div style={{ alignItems: "flex-start", display: "flex", gap: "40px", gridGap: "40px", gridRowGap: "40px", rowGap: "40px" }}>
                <RawImg
                  loading="eager"
                  alt="image"
                  image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fc082aa4571ab9e53a791a_testimonial-iamge-02.jpg"
                  css={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", height: "150px", maxWidth: "100%", objectFit: "cover", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle", width: "150px" }}
                />
                <div style={{ alignItems: "flex-start", display: "flex", flexDirection: "column", flexFlow: "column nowrap", gap: "15px", gridGap: "15px", gridRowGap: "15px", rowGap: "15px" }}>
                  <RawImg
                    loading="eager"
                    alt="image"
                    image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fc0aa67c049f14eee2ce71_star.svg"
                    css={{ maxWidth: "100%", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle" }}
                  />
                  <p>
                    I trust Handly to keep my hands clean & germ-free throughout
                    the day. It's gentle on the skin with a pleasant scent.
                  </p>
                  <h3 style={{ fontFamily: "Generalsans, sans-serif", fontSize: "20px", lineHeight: "26px" }}>
                    Samuel Bishop
                  </h3>
                </div>
              </div>
              <div style={{ alignItems: "flex-start", display: "flex", gap: "40px", gridGap: "40px", gridRowGap: "40px", rowGap: "40px" }}>
                <RawImg
                  loading="eager"
                  alt="image"
                  image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fc082bdf245a9c01b342c1_testimonial-iamge-03.jpg"
                  css={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", height: "150px", maxWidth: "100%", objectFit: "cover", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle", width: "150px" }}
                />
                <div style={{ alignItems: "flex-start", display: "flex", flexDirection: "column", flexFlow: "column nowrap", gap: "15px", gridGap: "15px", gridRowGap: "15px", rowGap: "15px" }}>
                  <RawImg
                    loading="eager"
                    alt="image"
                    image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fc0aa67c049f14eee2ce71_star.svg"
                    css={{ maxWidth: "100%", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle" }}
                  />
                  <p>
                    Handly has become a staple in our household with young kids,
                    keeping their hands clean is a constant battle.
                  </p>
                  <h3 style={{ fontFamily: "Generalsans, sans-serif", fontSize: "20px", lineHeight: "26px" }}>
                    Carolyn Ortiz
                  </h3>
                </div>
              </div>
              <div style={{ alignItems: "flex-start", display: "flex", gap: "40px", gridGap: "40px", gridRowGap: "40px", rowGap: "40px" }}>
                <RawImg
                  loading="eager"
                  alt="image"
                  image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fc082bcfef8e35ac0bea86_testimonial-iamge-04.jpg"
                  css={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", height: "150px", maxWidth: "100%", objectFit: "cover", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle", width: "150px" }}
                />
                <div style={{ alignItems: "flex-end", display: "flex", flexDirection: "column", flexFlow: "column nowrap", gap: "15px", gridGap: "15px", gridRowGap: "15px", order: "-1", rowGap: "15px", textAlign: "right" }}>
                  <RawImg
                    loading="eager"
                    alt="image"
                    image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fc0aa67c049f14eee2ce71_star.svg"
                    css={{ maxWidth: "100%", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", textAlign: "right", verticalAlign: "middle" }}
                  />
                  <p style={{ textAlign: "right" }}>
                    I suffer from dry, sensitive skin, so finding a handwash
                    that doesn't irritate my hands has been a struggle.
                  </p>
                  <h3 style={{ fontFamily: "Generalsans, sans-serif", fontSize: "20px", lineHeight: "26px", textAlign: "right" }}>
                    Bryan Knight
                  </h3>
                </div>
              </div>
              <div style={{ alignItems: "flex-start", display: "flex", gap: "40px", gridGap: "40px", gridRowGap: "40px", rowGap: "40px" }}>
                <RawImg
                  loading="eager"
                  alt="image"
                  image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fc082b8d5111b352a007b6_testimonial-iamge-05.jpg"
                  css={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", height: "150px", maxWidth: "100%", objectFit: "cover", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle", width: "150px" }}
                />
                <div style={{ alignItems: "flex-end", display: "flex", flexDirection: "column", flexFlow: "column nowrap", gap: "15px", gridGap: "15px", gridRowGap: "15px", order: "-1", rowGap: "15px", textAlign: "right" }}>
                  <RawImg
                    loading="eager"
                    alt="image"
                    image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fc0aa67c049f14eee2ce71_star.svg"
                    css={{ maxWidth: "100%", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", textAlign: "right", verticalAlign: "middle" }}
                  />
                  <p style={{ textAlign: "right" }}>
                    Whether I'm at home or on the go, I can always rely on this
                    product to keep my hands clean and fresh.
                  </p>
                  <h3 style={{ fontFamily: "Generalsans, sans-serif", fontSize: "20px", lineHeight: "26px", textAlign: "right" }}>
                    Billy Vasquez
                  </h3>
                </div>
              </div>
              <div style={{ alignItems: "flex-start", display: "flex", gap: "40px", gridGap: "40px", gridRowGap: "40px", rowGap: "40px" }}>
                <RawImg
                  loading="eager"
                  alt="image"
                  image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fc082bd484174479d6b86c_testimonial-iamge-06.jpg"
                  css={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", height: "150px", maxWidth: "100%", objectFit: "cover", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle", width: "150px" }}
                />
                <div style={{ alignItems: "flex-end", display: "flex", flexDirection: "column", flexFlow: "column nowrap", gap: "15px", gridGap: "15px", gridRowGap: "15px", order: "-1", rowGap: "15px", textAlign: "right" }}>
                  <RawImg
                    loading="eager"
                    alt="image"
                    image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fc0aa67c049f14eee2ce71_star.svg"
                    css={{ maxWidth: "100%", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", textAlign: "right", verticalAlign: "middle" }}
                  />
                  <p style={{ textAlign: "right" }}>
                    After trying Handly Handwash, I'll never go back to the old
                    handwash brand. The difference in quality is astounding!
                  </p>
                  <h3 style={{ fontFamily: "Generalsans, sans-serif", fontSize: "20px", lineHeight: "26px", textAlign: "right" }}>
                    Dennis Barrett
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ gap: "16px", gridGap: "16px", gridRowGap: "16px", gridTemplate: "auto auto / 1fr 1fr", gridTemplateRows: "auto auto", paddingBottom: "150px", paddingTop: "150px", rowGap: "16px" }}>
          <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "100%", paddingLeft: "150px", paddingRight: "150px" }}>
            <div style={{ marginBottom: "50px", transformStyle: "preserve-3d", transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
              <h2 style={{ fontFamily: "Generalsans, sans-serif", fontSize: "70px", lineHeight: "91px", marginBottom: "10px" }}>
                Recent product
              </h2>
            </div>
            <div>
              <div role="list" style={{ display: "grid", gap: "50px", gridGap: "50px", gridRowGap: "50px", gridTemplate: "auto / 1fr 1fr 1fr", gridTemplateRows: "auto", rowGap: "50px", transformStyle: "preserve-3d", transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
                <ProductCard
                  id="freshcrisp-hand-wash"
                  name="Freshcrisp hand wash"
                  image="https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/662235861f5ef2481f56129a_product-image-02.jpg"
                  hoverImage="https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/65fbf6fb7c049f14eed0b443_product-hover-02.jpg"
                  description="Freshcrisp hand wash provides an invigorating cleansing experience with its refreshing formula. Infused with natural citrus extracts and essential oils, this energizing hand wash awakens your senses while thoroughly cleansing your hands. The crisp, clean scent provides long-lasting freshness throughout the day. Our unique blend of moisturizing agents ensures your hands stay soft and hydrated even with frequent washing, making it perfect for busy lifestyles."
                  linkTo="https://handly-wbs.webflow.io/product/freshcrisp-hand-wash"
                />
                <ProductCard
                  id="velvetclean-hand-wash"
                  name="Velvetclean hand wash"
                  image="https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/6622359994a9f767467f0509_product-image-03.jpg"
                  hoverImage="https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/66190e6ea0abc1a95b2d1d94_instagram-image-05.jpg"
                  description="Velvetclean hand wash delivers luxurious cleansing with an ultra-smooth, velvety texture. This premium formula combines silk proteins and shea butter to create a rich, creamy lather that pampers your skin while providing deep cleansing action. The elegant floral fragrance leaves a sophisticated scent that lingers delicately on your hands. Dermatologist-approved and enriched with anti-aging properties, this hand wash transforms daily handwashing into a spa-like experience."
                  linkTo="https://handly-wbs.webflow.io/product/velvetclean-hand-wash"
                />
                <ProductCard
                  id="refreshrinse-hand-wash"
                  name="Refreshrinse hand wash"
                  image="https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/662235dad1b814ae15864300_product-image-06.jpg"
                  hoverImage="https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/65fbf744c43eb79a541fec5a_product-hover-05.jpg"
                  description="Refreshrinse hand wash offers the perfect balance of effective cleansing and gentle care. Formulated with cooling menthol and eucalyptus extracts, this refreshing hand wash provides an instant boost of energy while removing impurities. The pH-balanced formula is ideal for all skin types and provides antibacterial protection without drying your hands. The revitalizing mint scent creates an instant feeling of cleanliness and freshness that lasts for hours."
                  linkTo="https://handly-wbs.webflow.io/product/refreshrinse-hand-wash"
                />
                <ProductCard
                  id="cleanscent-hand-wash"
                  name="Cleanscent hand wash"
                  image="https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/662235f3434322eac6a406f1_product-image-05.jpg"
                  hoverImage="https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/65fbf755ba06eefad1ef33a7_product-hover-06.jpg"
                  description="Cleanscent hand wash features a signature aromatic blend that elevates your handwashing routine. This premium formulation combines the finest botanical extracts with advanced cleansing technology to provide superior hygiene while maintaining skin health. The distinctive fragrance profile includes notes of lavender, bergamot, and white tea, creating a calming and sophisticated scent experience. Enriched with antioxidants and vitamins, this hand wash protects and nourishes your skin with every use."
                  linkTo="https://handly-wbs.webflow.io/product/cleanscent-hand-wash"
                />
                <ProductCard
                  id="clean-plus-hand-wash"
                  name="Clean plus hand wash"
                  image="https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/66223606cde825c4cfde2da4_product-image-07.jpg"
                  hoverImage="https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/65fbf768ea85400f354f68a9_product-hover-07.jpg"
                  description="Clean Plus hand wash delivers enhanced cleansing power with added antibacterial protection. This advanced formula eliminates 99.99% of harmful bacteria and viruses while being gentle on your skin. Enriched with pro-vitamin B5 and glycerin, it provides deep moisturization and skin barrier protection. The clean, fresh scent is subtle yet long-lasting, making it perfect for professional environments and everyday use. Clinically tested and recommended by healthcare professionals."
                  linkTo="https://handly-wbs.webflow.io/product/clean-plus-hand-wash"
                />
                <ProductCard
                  id="zenguard-hand-wash"
                  name="Zenguard hand wash"
                  image="https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/662236302c073d26c21a00ff_product-image-09.jpg"
                  hoverImage="https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/65fbf7859ab5b855de666d51_product-hover-09.jpg"
                  description="Zenguard hand wash provides ultimate protection with calming aromatherapy benefits. This unique formula combines powerful antimicrobial agents with stress-relieving essential oils including chamomile, sandalwood, and jasmine. The gentle yet effective cleansing action removes dirt and germs while the therapeutic fragrance promotes relaxation and well-being. Specially formulated for sensitive skin, this hand wash creates a zen-like experience that soothes both body and mind with every wash."
                  linkTo="https://handly-wbs.webflow.io/product/zenguard-hand-wash"
                />
              </div>
            </div>
          </div>
        </section>
        <section style={{ gap: "16px", gridGap: "16px", gridRowGap: "16px", gridTemplate: "auto auto / 1fr 1fr", gridTemplateRows: "auto auto", overflowX: "hidden", overflowY: "hidden", paddingBottom: "150px", rowGap: "16px" }}>
          <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "100%", paddingLeft: "150px", paddingRight: "150px" }}>
            <div style={{ marginBottom: "50px", transformStyle: "preserve-3d", transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
              <h2 style={{ fontFamily: "Generalsans, sans-serif", fontSize: "70px", lineHeight: "91px", marginBottom: "10px" }}>
                Best selling
              </h2>
            </div>
            <div>
              <div role="list" style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ maxWidth: "600px", width: "100%" }}>
                  <ProductCard
                    id="purelux-hand-wash"
                    name="Purelux hand wash"
                    image="https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/66223551115d6051274fb427_product-image-01.jpg"
                    hoverImage="https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/66223551115d6051274fb427_product-image-01.jpg"
                    description="Purelux hand wash represents the pinnacle of luxury hand care, combining premium ingredients with exceptional performance. This exclusive formula features rare botanical extracts, silk proteins, and precious oils that create an indulgent cleansing experience unlike any other. The sophisticated fragrance blend incorporates notes of white musk, vanilla orchid, and subtle hints of gold leaf essence. With its rich, velvety texture and long-lasting moisturizing benefits, Purelux transforms everyday handwashing into a luxurious ritual that pampers your skin while providing superior cleansing power."
                    linkTo="/product/purelux-hand-wash"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ gap: "16px", gridGap: "16px", gridRowGap: "16px", gridTemplate: "auto auto / 1fr 1fr", gridTemplateRows: "auto auto", paddingBottom: "150px", rowGap: "16px" }}>
          <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "100%", paddingLeft: "150px", paddingRight: "150px" }}>
            <div style={{ marginBottom: "50px", transformStyle: "preserve-3d", transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
              <h2 style={{ fontFamily: "Generalsans, sans-serif", fontSize: "70px", lineHeight: "91px", marginBottom: "10px" }}>
                Recent blogs
              </h2>
            </div>
            <div>
              <div role="list" style={{ display: "grid", gap: "50px", gridGap: "50px", gridRowGap: "50px", gridTemplate: "auto / 1fr 1fr", gridTemplateRows: "auto", rowGap: "50px", transformStyle: "preserve-3d", transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
                <div role="listitem">
                  <a href="https://handly-wbs.webflow.io/blog/understanding-the-e-commerce-sales-funnel" style={{ cursor: "pointer", display: "grid", gap: "30px", gridGap: "30px", gridRowGap: "30px", gridTemplate: "auto / 1fr 1fr", gridTemplateRows: "auto", maxWidth: "100%", rowGap: "30px" }}>
                    <div style={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", cursor: "pointer", height: "100%", overflowX: "hidden", overflowY: "hidden", width: "100%" }}>
                      <RawImg
                        loading="eager"
                        alt="image"
                        image="https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/66050c0da0bf251c2654a612_blog-image-01.jpg"
                        css={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", cursor: "pointer", display: "inline-block", height: "100%", maxWidth: "100%", objectFit: "cover", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", transformStyle: "preserve-3d", verticalAlign: "middle", width: "100%", transform: "matrix(1, 0, 0, 1, 0, 0)" }}
                      />
                    </div>
                    <div style={{ cursor: "pointer", display: "flex", flexDirection: "column", flexFlow: "column nowrap", gap: "10px", gridGap: "10px", gridRowGap: "10px", rowGap: "10px" }}>
                      <div style={{ cursor: "pointer" }}>
                        March 28, 2024
                      </div>
                      <h3 style={{ cursor: "pointer", fontFamily: "Generalsans, sans-serif", fontSize: "22px", fontWeight: "500", lineHeight: "28.6px" }}>
                        Understanding the e-commerce sales funnel
                      </h3>
                    </div>
                  </a>
                </div>
                <div role="listitem">
                  <a href="https://handly-wbs.webflow.io/blog/strategies-for-sustainable-online-retail" style={{ cursor: "pointer", display: "grid", gap: "30px", gridGap: "30px", gridRowGap: "30px", gridTemplate: "auto / 1fr 1fr", gridTemplateRows: "auto", maxWidth: "100%", rowGap: "30px" }}>
                    <div style={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", cursor: "pointer", height: "100%", overflowX: "hidden", overflowY: "hidden", width: "100%" }}>
                      <RawImg
                        loading="eager"
                        alt="image"
                        image="https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/66050c1bbecd91d4831bc90a_blog-image-02.jpg"
                        css={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", cursor: "pointer", display: "inline-block", height: "100%", maxWidth: "100%", objectFit: "cover", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", transformStyle: "preserve-3d", verticalAlign: "middle", width: "100%", transform: "matrix(1, 0, 0, 1, 0, 0)" }}
                      />
                    </div>
                    <div style={{ cursor: "pointer", display: "flex", flexDirection: "column", flexFlow: "column nowrap", gap: "10px", gridGap: "10px", gridRowGap: "10px", rowGap: "10px" }}>
                      <div style={{ cursor: "pointer" }}>
                        March 28, 2024
                      </div>
                      <h3 style={{ cursor: "pointer", fontFamily: "Generalsans, sans-serif", fontSize: "22px", fontWeight: "500", lineHeight: "28.6px" }}>
                        Strategies for sustainable online retail
                      </h3>
                    </div>
                  </a>
                </div>
                <div role="listitem">
                  <a href="https://handly-wbs.webflow.io/blog/optimizing-your-store-for-smartphone-users" style={{ cursor: "pointer", display: "grid", gap: "30px", gridGap: "30px", gridRowGap: "30px", gridTemplate: "auto / 1fr 1fr", gridTemplateRows: "auto", maxWidth: "100%", rowGap: "30px" }}>
                    <div style={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", cursor: "pointer", height: "100%", overflowX: "hidden", overflowY: "hidden", width: "100%" }}>
                      <RawImg
                        loading="eager"
                        alt="image"
                        image="https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/66050c27c14ee6f135425138_blog-image-03.jpg"
                        css={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", cursor: "pointer", display: "inline-block", height: "100%", maxWidth: "100%", objectFit: "cover", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", transformStyle: "preserve-3d", verticalAlign: "middle", width: "100%", transform: "matrix(1, 0, 0, 1, 0, 0)" }}
                      />
                    </div>
                    <div style={{ cursor: "pointer", display: "flex", flexDirection: "column", flexFlow: "column nowrap", gap: "10px", gridGap: "10px", gridRowGap: "10px", rowGap: "10px" }}>
                      <div style={{ cursor: "pointer" }}>
                        March 28, 2024
                      </div>
                      <h3 style={{ cursor: "pointer", fontFamily: "Generalsans, sans-serif", fontSize: "22px", fontWeight: "500", lineHeight: "28.6px" }}>
                        Optimizing your store for smartphone users
                      </h3>
                    </div>
                  </a>
                </div>
                <div role="listitem">
                  <a href="https://handly-wbs.webflow.io/blog/crafting-tailored-shopping-experiences" style={{ cursor: "pointer", display: "grid", gap: "30px", gridGap: "30px", gridRowGap: "30px", gridTemplate: "auto / 1fr 1fr", gridTemplateRows: "auto", maxWidth: "100%", rowGap: "30px" }}>
                    <div style={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", cursor: "pointer", height: "100%", overflowX: "hidden", overflowY: "hidden", width: "100%" }}>
                      <RawImg
                        loading="eager"
                        alt="image"
                        image="https://cdn.prod.website-files.com/65fbb5117e4ee1d7a1fe121f/66050c33861bdab9fbf4168f_blog-image-04.jpg"
                        css={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", cursor: "pointer", display: "inline-block", height: "100%", maxWidth: "100%", objectFit: "cover", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", transformStyle: "preserve-3d", verticalAlign: "middle", width: "100%", transform: "matrix(1, 0, 0, 1, 0, 0)" }}
                      />
                    </div>
                    <div style={{ cursor: "pointer", display: "flex", flexDirection: "column", flexFlow: "column nowrap", gap: "10px", gridGap: "10px", gridRowGap: "10px", rowGap: "10px" }}>
                      <div style={{ cursor: "pointer" }}>
                        March 28, 2024
                      </div>
                      <h3 style={{ cursor: "pointer", fontFamily: "Generalsans, sans-serif", fontSize: "22px", fontWeight: "500", lineHeight: "28.6px" }}>
                        Crafting tailored shopping experiences
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer style={{ backgroundColor: "rgb(0, 0, 0)", paddingBottom: "100px", paddingTop: "100px" }}>
          <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "100%", paddingLeft: "150px", paddingRight: "150px" }}>
            <div style={{ alignItems: "start", display: "grid", gap: "40px", gridGap: "40px", gridRowGap: "40px", gridTemplate: "auto / 1fr 0.5fr 0.5fr 0.75fr 1fr", gridTemplateRows: "auto", rowGap: "40px", transformStyle: "preserve-3d", transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
              <div style={{ alignItems: "flex-start", display: "flex", flexDirection: "column", flexFlow: "column nowrap", height: "100%" }}>
                <a aria-current="page" href="https://handly-wbs.webflow.io/" style={{ cursor: "pointer", maxWidth: "100%", textDecoration: "underline solid rgb(0, 0, 0)", textDecorationLine: "underline" }}>
                  <RawImg
                    loading="eager"
                    alt="handly-logo"
                    image="https://cdn.prod.website-files.com/65f9834ec170577cb6334d0d/65fbc8f1bc1d9dd0f7d9e8fb_handly.svg"
                    css={{ cursor: "pointer", display: "inline-block", maxWidth: "100%", overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle" }}
                  />
                </a>
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
                <a aria-current="page" href="https://handly-wbs.webflow.io/" style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", outlineColor: "rgb(255, 255, 255)", textDecoration: "underline solid rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textDecorationLine: "underline", textEmphasisColor: "rgb(255, 255, 255)" }}>
                  Home
                </a>
                <a href="https://handly-wbs.webflow.io/home-2" style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", outlineColor: "rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)" }}>
                  Home 2
                </a>
                <Link to="/about" style={{ borderColor: "rgb(255, 255, 255)", color: "rgb(255, 255, 255)", cursor: "pointer", outlineColor: "rgb(255, 255, 255)", textDecorationColor: "rgb(255, 255, 255)", textEmphasisColor: "rgb(255, 255, 255)", textDecoration: "none" }}>
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
