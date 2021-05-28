import React from "react";
import { useCart } from "@frontastic/frontastic-js";
import Link from "next/link";
import MenuIcon from "../../../components/icons/menu-icon";
import Logo from "../../../components/icons/logo-catwalk";
import IconSearch from "../../../components/icons/search";
import IconHeart from "../../../components/icons/heart";
import IconCart from "../../../components/icons/cart";

const Header = () => {
  const { data } = useCart();
  if (!data) return null;
  return (
    <div>
      <div className="bg-white h-12 px-4 flex justify-between items-center lg:h-16 lg:px-8">
        <div className="flex justify-center items-center">
          <MenuIcon className="mr-4 lg:hidden" />
          <Link href="/">
            <a>
              <Logo className="" />
            </a>
          </Link>
        </div>
        <div className="grid gap-5 grid-cols-3">
          <IconSearch className="" />
          <IconHeart className="" />
          <div className="relative">
            <Link href="/checkout/cart">
              <a>
                <IconCart className="" />
                {data.cart.lineItems.length > 0 ? (
                  <div className="absolute text-white bg-indigo-600 -top-2 -right-2 text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    <div className="" />
                    <p className="">{data.cart.lineItems.length}</p>
                  </div>
                ) : null}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
