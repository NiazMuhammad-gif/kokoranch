import React, { Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// layout
import Layout from "../components/layout";
// //  traderSideBar
// import TraderSideBar from "../components/traderSideBar";
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
const VendorRegister = React.lazy(() => import("../pages/auth/vendorRegister"));

const VendorSignupSuccess = React.lazy(() =>
  import("../pages/screens/vendorSignupSuccess")
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
            <VendorSideBar>
              <VendorProfile />
            </VendorSideBar>
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
        path="/my-products"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorProducts />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/my-products/details"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorProductDetails />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/my-products/details/edit"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorProductDetailsEdit />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/my-products/add-product"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorProductDetailsEdit />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/agricultural-services"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorServices />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/agricultural-services/details"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorServicesDetails />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/agricultural-services/details/edit"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorServicesDetailsEdit />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/agricultural-services/add-service"
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
        path="/featured-products-services"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <FeaturedProductsAndServices />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/make-it-featured"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <EditFeaturedProductsAndService />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/make-it-featured/view-featured-details"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <ViewFeaturedProductsAndServices />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/make-it-featured/payment"
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
    </Routes>
  );
}
