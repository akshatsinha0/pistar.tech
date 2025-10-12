"use client";
import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import { IProduct } from "@/types/product-d-t";
import ProductFeature from "./product-feature";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { add_cart_product, decrement, increment } from "@/redux/features/cart";
import { add_to_wishlist } from "@/redux/features/wishlist";
import { calculateDiscountedPrice } from "@/utils/utils";
import { auth } from "@/database/firebase"; // Import Firebase auth
import Odometer from "@/components/ui/Odometer";

const ProductDetailsArea = ({ product }: { product: IProduct }) => {
  const [isWishlistActive, setIsWishlistActive] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true); // New loading state
  const [isCartActive, setIsCartActive] = useState(false);
  const { wishlist } = useAppSelector((state) => state.wishlist);
  const { cart_products } = useAppSelector((state) => state.cart);

  // handle add wishlist
  const handleAddWishlist = (item: IProduct) => {
    dispatch(add_to_wishlist(item));
  };
  // handle add cart
  const handleAddCart = (item: IProduct) => {
    dispatch(add_cart_product(item));
  };

  useEffect(() => {
    // Check if user is logged in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsUserLoggedIn(!!user);
      setLoading(false); // Stop loading once user state is set
    });
    if (wishlist.length) {
      setIsWishlistActive(wishlist.some((p) => p.id === product.id));
    }
    if (cart_products.length) {
      setIsCartActive(cart_products.some((p) => p.id === product.id));
    }
  }, [cart_products, product.id, wishlist]);
  const {
    img,
    related_images,
    reviews,
    quantity,
    price,
    details,
    sm_desc,
    title,
    old_price,
  } = product || {};
  const isPreorderProduct = title === "Podiascanner Mat" || title === "Smart Chair";
  const { orderQuantity } = useAppSelector((state) => state.cart);
  const [activeImg, setActiveImg] = useState(related_images[0]);
  const dispatch = useAppDispatch();
  // handle image active
  const handleImageActive = (prdImd: StaticImageData) => {
    setActiveImg(prdImd);
  };
  useEffect(() => {
    if (related_images.length > 0) {
      setActiveImg(related_images[0]);
    }
  }, [related_images]);

  return (
    <div className="product-details-one mt-150 lg-mt-80 mb-150 lg-mb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 order-lg-2">
            <div className="tab-content product-img-tab-content h-100">
              <div className="active h-100">
                <a className="w-100 h-100 d-flex align-items-center justify-content-center">
                  <Image
                    src={activeImg}
                    alt="product-img"
                    className="lazy-img"
                    layout="responsive"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-1 order-lg-1">
            <ul className="nav flex-lg-column product-img-tab">
              {related_images.map((relImg, i) => (
                <li key={i} className="nav-item">
                  <button
                    onClick={() => handleImageActive(relImg)}
                    className={`nav-link ${
                      relImg === activeImg ? "active" : ""
                    }`}
                  >
                    <Image
                      src={relImg}
                      alt="nav-img"
                      className="m-auto lazy-img"
                      width={58}
                      height={76}
                      layout="responsive"
                      style={{ objectFit: "cover" }}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-6 order-lg-3">
            <div className="product-info ps-xxl-5 md-mt-40">
              <div className="stock-tag">In Stock</div>
              <h2 className="product-name">{title}</h2>
              <div className="price">
                {old_price && <del>₹{old_price}</del>} {price===49999 ? (<Odometer value={`₹${price}`} />) : (<>₹{price}</>)}
              </div>
              <p className="availability">{quantity} Piece Available </p>
              <p className="description-text">{sm_desc}</p>
              <ul className="product-feature style-none">
                {/* <li>Free delivery available</li>
                <li>Use promo-code and save up to 25%</li> */}
              </ul>
              <div className="customize-order">
                <div className="quantity d-flex align-items-center mt-40">
                  <h6>Quantity: you can add in cart </h6>
                  {/* <div className="button-group">
                    <ul className="style-none d-flex align-items-center">
                      <li>
                        <button
                          onClick={() => dispatch(decrement())}
                          className="value-decrease"
                        >
                          -
                        </button>
                      </li>
                      <li>
                        <input
                          type="number"
                          value={orderQuantity}
                          readOnly
                          className="product-value val"
                        />
                      </li>
                      <li>
                        <button
                          onClick={() => dispatch(increment())}
                          className="value-increase"
                        >
                          +{" "}
                        </button>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
              <div className="button-group mt-30 d-sm-flex align-items-center">
                {isUserLoggedIn ? (
                  !isCartActive ? (
                    <button
                      onClick={() => handleAddCart(product)}
                      type="button"
                      className="cart-button btn-four mt-15 me-sm-4 d-block signup-btn-one icon-link w-100"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <Link
                      href="/cart"
                      className="cart-button btn-four mt-15 me-sm-4 d-block active signup-btn-one icon-link w-100 "
                    >
                      View Cart
                    </Link>
                  )
                ) : (
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                    className="signup-btn-one icon-link w-100 "
                  >
                    <span
                      className="flex-fill text-center btn-ten tran3s w-100"
                      style={{ padding: "0px 15px" }}
                    >
                      {isPreorderProduct ? (
                        <>Preorder <i className="bi bi-bag-plus"></i></>
                      ) : (
                        <>Login to Buy <i className="bi bi-person-circle"></i></>
                      )}
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsArea;
