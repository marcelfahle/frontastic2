import NotFound from "./not-found";
import ProductSlider from "./product-slider";
import ProductDetails from "./product-details";
import Footer from "./footer";
import Header from "./header";
import Hero from "./content/hero";
import Markdown from "./content/markdown";
import Newsletter from "./forms/newsletter";
import HorizontalSpacer from "./layout/horizontal-spacer";
import Benefits from "./content/benefits";
import Cart from "./cart";
import Checkout from "./checkout";

export const components = {
  "frontastic/boost/product/product-slider": ProductSlider,
  "frontastic/boost/product/product-details": ProductDetails,
  "frontastic/boost/footer": Footer,
  "frontastic/boost/header/main-menu": Header,
  "frontastic/boost/content/tile-v2": Hero,
  "frontastic/boost/helpers/horizontal-spacer": HorizontalSpacer,
  "frontastic/boost/content/markdown": Markdown,
  "frontastic/boost/forms/newsletter-block": Newsletter,
  "frontastic/boost/content/feature-service": Benefits,
  "frontastic/boost/cart": Cart,
  "frontastic/boost/checkout": Checkout,
  default: NotFound
};
