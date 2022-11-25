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
// import ProtectedRoute from "./authetication";
// import { useDispatch, useSelector } from "react-redux";
// import { CHECK_TOKEN } from "../redux/actions/authentication";
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
//  TRADER STUFF
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
const VendorProducts = React.lazy(() =>
  import("../pages/dashboard/vendor/Products")
);
const VendorProductDetails = React.lazy(() =>
  import("../pages/dashboard/vendor/ProductDetails")
);
const VendorProductDetailsEdit = React.lazy(() =>
  import("../pages/dashboard/vendor/EditProductDetails")
);
const VendorProductDetailsAdd = React.lazy(() =>
  import("../pages/dashboard/vendor/AddProductDetails")
);
const VendorServices = React.lazy(() =>
  import("../pages/dashboard/vendor/Services")
);
const VendorServicesDetailsEdit = React.lazy(() =>
  import("../pages/dashboard/vendor/EditServiceDetails")
);
const VendorServicesDetails = React.lazy(() =>
  import("../pages/dashboard/vendor/ServiceDetails")
);
const VendorServiceOrders = React.lazy(() =>
  import("../pages/dashboard/vendor/ServiceOrders")
);
const VendorServiceOrderDetails = React.lazy(() =>
  import("../pages/dashboard/vendor/ServiceOrderDetails")
);
const VendorProductOrders = React.lazy(() =>
  import("../pages/dashboard/vendor/ProductOrders")
);
const VendorProductOrderDetails = React.lazy(() =>
  import("../pages/dashboard/vendor/ProductOrderDetails")
);
const VendorProductShippingDetail = React.lazy(() =>
  import("../pages/dashboard/vendor/ProductShippingDetail")
);
const VendorProductShippingDetailEdit = React.lazy(() =>
  import("../pages/dashboard/vendor/ProductShippingDetailEdit")
);
const FeaturedProductsAndServices = React.lazy(() =>
  import("../pages/dashboard/vendor/Featured")
);
const ViewFeaturedProductsAndServices = React.lazy(() =>
  import("../pages/dashboard/vendor/ViewFeaturedDetails")
);
const EditFeaturedProductsAndService = React.lazy(() =>
  import("../pages/dashboard/vendor/EditFeatured")
);
const PaymentFeaturedComponent = React.lazy(() =>
  import("../pages/dashboard/vendor/Payment")
);
const VendorInbox = React.lazy(() => import("../pages/dashboard/vendor/inbox"));

const VendorRatingAndReview = React.lazy(() =>
  import("../pages/dashboard/vendor/RatingReview")
);

const VendorSettings = React.lazy(() =>
  import("../pages/dashboard/vendor/Settings")
);
const VendorMedicalMerijuana = React.lazy(() =>
  import("../pages/dashboard/vendor/MedicalMerijouana")
);
const VendorNotifications = React.lazy(() =>
  import("../pages/dashboard/vendor/Notifications")
);
const Home = React.lazy(() => import("../pages/screens/home"));
export default function Navigation() {
  // INITIZING STORAGES
  // const { isAuthenticated, userType } = useSelector(
  //   (state) => state.authReducer
  // );
  // const tokenStorage = localStorage.getItem("token");

  // const dispatch = useDispatch();
  // CHECKING FOR AUTHENTICATION
  // useEffect(() => {
  //   if (tokenStorage && !isAuthenticated) {
  //     dispatch(CHECK_TOKEN(tokenStorage));
  //   }
  // }, [tokenStorage, isAuthenticated]); // eslint-disable-line react-hooks/exhaustive-deps

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
        path="/vendor-my-products"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorProducts />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/vendor-my-products/details"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorProductDetails />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/vendor-my-products/details/edit"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorProductDetailsEdit />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/vendor-my-products/add-product"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorProductDetailsAdd />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/vendor-agricultural-services"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorServices />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/vendor-agricultural-services/details"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorServicesDetails />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/vendor-agricultural-services/details/edit"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorServicesDetailsEdit />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/vendor-agricultural-services/add-service"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorServicesDetailsEdit />
            </VendorSideBar>
          </Suspense>
        }
      />

      <Route
        path="/vendor-productshippingdetails"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorProductShippingDetail />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/vendor-productshippingdetails/edit"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorProductShippingDetailEdit />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/vendor-featured-products-services"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <FeaturedProductsAndServices />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/vendor-make-it-featured"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <EditFeaturedProductsAndService />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/vendor-make-it-featured/view-featured-details"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <ViewFeaturedProductsAndServices />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/vendor-make-it-featured/payment"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <PaymentFeaturedComponent />
            </VendorSideBar>
          </Suspense>
        }
      />

      <Route
        path="/vendor-productorders"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorProductOrders />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/vendor-productorders/details"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorProductOrderDetails />
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
        path="/vendor-serviceorders/details"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorServiceOrderDetails />
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
      <Route
        path="/vendor-inbox"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorInbox />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/vendor-rating-and-review"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorRatingAndReview />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/vendor-settings"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorSettings />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/vendor-medical-merijuana"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorMedicalMerijuana />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/vendor-notifications/"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorNotifications />
            </VendorSideBar>
          </Suspense>
        }
      />
    </Routes>
  );
}
