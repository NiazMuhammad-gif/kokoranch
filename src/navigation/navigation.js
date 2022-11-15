import React, { Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// layout
import Layout from "../components/layout";
//  traderSideBar
import TraderSideBar from "../components/traderSideBar";
// Full Screen Loader
import FullScreenLoader from "../components/FullScreenLoader";
// VendorSideBar
import VendorSideBar from "../pages/dashboard/vendor/SideBar";

// PROTECTIVE ROUTE
import ProtectedRoute from "./authetication";
import { useDispatch, useSelector } from "react-redux";
import { CHECK_TOKEN } from "../redux/actions/authentication";
import ServiceOrderIndividual from "../pages/dashboard/vendor/ServiceOrderIndividual";

// SCREENS
const Login = React.lazy(() => import("../pages/auth/login"));
const Register = React.lazy(() => import("../pages/auth/register"));
const VendorRegister = React.lazy(() => import("../pages/auth/vendorRegister"));
const About = React.lazy(() => import("../pages/screens/about"));
const ContactUs = React.lazy(() => import("../pages/screens/contact"));
const Terms = React.lazy(() => import("../pages/screens/termsConditions"));
const FAQS = React.lazy(() => import("../pages/screens/faqs"));
const Policy = React.lazy(() => import("../pages/screens/privacyPolicy"));
const Categories = React.lazy(() => import("../pages/screens/categories"));
const SubCategories = React.lazy(() =>
  import("../pages/screens/subCategories")
);
const SubSubCategories = React.lazy(() =>
  import("../pages/screens/subSubCategories")
);
const AgricultureServices = React.lazy(() =>
  import("../pages/screens/agricultureServices")
);
const MedicalMariguanaAds = React.lazy(() =>
  import("../pages/screens/medicalMariguanaAds")
);
const Products = React.lazy(() => import("../pages/screens/products"));
const Product = React.lazy(() => import("../pages/screens/product"));
const SellerProducts = React.lazy(() =>
  import("../pages/screens/sellerproducts")
);
const SellerServices = React.lazy(() =>
  import("../pages/screens/sellerServices")
);
const SellerTrades = React.lazy(() => import("../pages/screens/sellerTrades"));
const Cart = React.lazy(() => import("../pages/screens/cart"));
const Checkout = React.lazy(() => import("../pages/screens/checkout"));
const Payment = React.lazy(() => import("../pages/screens/payment"));
const Search = React.lazy(() => import("../pages/screens/search"));
const Services = React.lazy(() => import("../pages/screens/services"));
const Service = React.lazy(() => import("../pages/screens/service"));
const SignupSuccess = React.lazy(() =>
  import("../pages/screens/signupsuccess")
);
const VendorSignupSuccess = React.lazy(() =>
  import("../pages/screens/vendorSignupSuccess")
);
const Trades = React.lazy(() => import("../pages/screens/trades"));
const Trade = React.lazy(() => import("../pages/screens/trade"));
const MyProfile = React.lazy(() => import("../pages/dashboard/user/MyProfile"));
const AddressBook = React.lazy(() =>
  import("../pages/dashboard/user/AddressBook")
);
const Inbox = React.lazy(() => import("../pages/dashboard/user/inbox"));
const OrdersInfo = React.lazy(() =>
  import("../pages/dashboard/user/ordersInfo")
);
const TradeRequest = React.lazy(() =>
  import("../pages/dashboard/user/tradeRequest")
);
const Wishlist = React.lazy(() => import("../pages/dashboard/user/wishlist"));
const OrderPlaced = React.lazy(() => import("../pages/screens/orderPlaced"));
const TraderProfile = React.lazy(() =>
  import("../pages/dashboard/trader/profile")
);
const TraderTrades = React.lazy(() =>
  import("../pages/dashboard/trader/trades")
);
const TraderTradeRequests = React.lazy(() =>
  import("../pages/dashboard/trader/tradeRequests")
);
const TraderIndox = React.lazy(() =>
  import("../pages/dashboard/trader/traderInbox")
);
const TraderSettings = React.lazy(() =>
  import("../pages/dashboard/trader/tradderSettings")
);

// VENDOR STUFF
const VendorProfile = React.lazy(() =>
  import("../pages/dashboard/vendor/profile")
);
const VendorServiceOrders = React.lazy(() =>
  import("../pages/dashboard/vendor/ServiceOrders")
);

const Home = React.lazy(() => import("../pages/screens/home"));
export default function Navigation() {
  // INITIZING STORAGES
  const { isAuthenticated, userType } = useSelector(
    (state) => state.authReducer
  );
  const tokenStorage = localStorage.getItem("token");

  const dispatch = useDispatch();
  // CHECKING FOR AUTHENTICATION
  useEffect(() => {
    if (tokenStorage && !isAuthenticated) {
      dispatch(CHECK_TOKEN(tokenStorage));
    }
  }, [tokenStorage, isAuthenticated]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <Home />
            </Layout>
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          !isAuthenticated ? (
            <Suspense fallback={<FullScreenLoader />}>
              <Layout>
                <Login />
              </Layout>
            </Suspense>
          ) : userType == "buyer" ? (
            <Navigate to={"/my-profile"} />
          ) : (
            <Navigate to={"/trader-profile"} />
          )
        }
      />
      <Route
        path="/register"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <Register />{" "}
            </Layout>
          </Suspense>
        }
      />
      <Route
        path="/signup-success"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <SignupSuccess />
            </Layout>
          </Suspense>
        }
      />
      <Route
        path="/vendor-signup-success"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <VendorSignupSuccess />
            </Layout>
          </Suspense>
        }
      />
      <Route
        path="/vendor-register"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <VendorRegister />
            </Layout>
          </Suspense>
        }
      />
      <Route
        path="/about"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              {" "}
              <About />
            </Layout>
          </Suspense>
        }
      />
      <Route
        path="/contact"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <ContactUs />
            </Layout>
          </Suspense>
        }
      />
      <Route
        path="/terms"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <Terms />
            </Layout>
          </Suspense>
        }
      />
      <Route
        path="/faq"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <FAQS />
            </Layout>
          </Suspense>
        }
      />
      <Route
        path="/policy"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <Policy />
            </Layout>
          </Suspense>
        }
      />
      <Route
        path="/categories"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <Categories />
            </Layout>
          </Suspense>
        }
      />
      <Route
        path="/sub_categories/:id"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <SubCategories />
            </Layout>
          </Suspense>
        }
      />
      <Route
        path="/sub_sub_categories/:id"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <SubSubCategories />
            </Layout>
          </Suspense>
        }
      />

      <Route
        path="/agricultural-services"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <AgricultureServices />
            </Layout>
          </Suspense>
        }
      />
      <Route
        path="/medical-mariguana"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <MedicalMariguanaAds />
            </Layout>
          </Suspense>
        }
      />
      <Route
        path="/products/:id"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <Products />
            </Layout>
          </Suspense>
        }
      />
      <Route
        path="/products"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <Products />
            </Layout>
          </Suspense>
        }
      />
      <Route
        path="/product/:id"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <Product />
            </Layout>
          </Suspense>
        }
      />
      <Route
        path="/seller-products"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <SellerProducts />
            </Layout>
          </Suspense>
        }
      />
      <Route
        path="/seller-services"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <SellerServices />
            </Layout>
          </Suspense>
        }
      />
      <Route
        path="/seller-trades/:traderId"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <SellerTrades />
            </Layout>
          </Suspense>
        }
      />
      <Route
        path="/cart"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <Cart />
            </Layout>
          </Suspense>
        }
      />
      <Route
        path="/checkout"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <Checkout />
            </Layout>
          </Suspense>
        }
      />
      <Route
        path="/payment"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <Payment />
            </Layout>
          </Suspense>
        }
      />
      <Route
        path="/search/:searchCategory/:searchText"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <Search />
            </Layout>
          </Suspense>
        }
      />
      <Route
        path="/search"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <Search />
            </Layout>
          </Suspense>
        }
      />
      <Route
        path="/service/:serviceId"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <Service />
            </Layout>
          </Suspense>
        }
      />
      <Route
        path="/services"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <Services />
            </Layout>
          </Suspense>
        }
      />
      <Route
        path="/trades"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <Trades />
            </Layout>
          </Suspense>
        }
      />
      <Route
        path="/trade/:id"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <Trade />
            </Layout>
          </Suspense>
        }
      />

      {/* BUYER DASBOARD ROUTES  */}
      <Route
        path="/my-profile"
        element={
          <ProtectedRoute redirectTo={"/login"}>
            <Suspense fallback={<FullScreenLoader />}>
              <Layout>
                <MyProfile />
              </Layout>
            </Suspense>
          </ProtectedRoute>
        }
      />
      <Route
        path="/address-book"
        element={
          <ProtectedRoute redirectTo={"/login"}>
            <Suspense fallback={<FullScreenLoader />}>
              <Layout>
                <AddressBook />
              </Layout>
            </Suspense>
          </ProtectedRoute>
        }
      />
      <Route
        path="/inbox"
        element={
          <ProtectedRoute redirectTo={"/login"}>
            <Suspense fallback={<FullScreenLoader />}>
              <Layout>
                <Inbox />
              </Layout>
            </Suspense>
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders-info"
        element={
          <ProtectedRoute redirectTo={"/login"}>
            <Suspense fallback={<FullScreenLoader />}>
              <Layout>
                <OrdersInfo />
              </Layout>
            </Suspense>
          </ProtectedRoute>
        }
      />
      <Route
        path="/trade-request"
        element={
          <ProtectedRoute redirectTo={"/login"}>
            <Suspense fallback={<FullScreenLoader />}>
              <Layout>
                <TradeRequest />
              </Layout>
            </Suspense>
          </ProtectedRoute>
        }
      />
      <Route
        path="/wishlist"
        element={
          <ProtectedRoute redirectTo={"/login"}>
            <Suspense fallback={<FullScreenLoader />}>
              <Layout>
                <Wishlist />
              </Layout>
            </Suspense>
          </ProtectedRoute>
        }
      />
      <Route
        path="/order-placed"
        element={
          <ProtectedRoute redirectTo={"/login"}>
            <Suspense fallback={<FullScreenLoader />}>
              <Layout>
                <OrderPlaced />
              </Layout>
            </Suspense>
          </ProtectedRoute>
        }
      />
      <Route
        path="/trader-profile"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <TraderSideBar>
              <TraderProfile />
            </TraderSideBar>
          </Suspense>
        }
      />
      <Route
        path="/trader-trades"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <TraderSideBar>
              <TraderTrades />
            </TraderSideBar>
          </Suspense>
        }
      />
      <Route
        path="/trader-trade-request"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <TraderSideBar>
              <TraderTradeRequests />
            </TraderSideBar>
          </Suspense>
        }
      />
      <Route
        path="/trader-inbox"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <TraderSideBar>
              <TraderIndox />
            </TraderSideBar>
          </Suspense>
        }
      />
      <Route
        path="/trader-settings"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <TraderSideBar>
              <TraderSettings />
            </TraderSideBar>
          </Suspense>
        }
      />
      <Route
        path="/vendor-profile"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorProfile />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/vendor-serviceorders"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorServiceOrders />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/vendor-serviceorder"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <ServiceOrderIndividual />
            </VendorSideBar>
          </Suspense>
        }
      />
    </Routes>
  );
}
