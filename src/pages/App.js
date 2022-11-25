// IMPORTING GLOBAL DEPENDENCIES
import { ToastContainer } from "react-toastify";

// Auth
import Navigation from "../navigation/navigation";

// IMPORTING REDUX PROVIDER
import { Provider } from "react-redux";
// GETTING STORE TO PROVIDE TO REDUX PROVIDER
import store from "../redux/store";

// IMPORTING ALL THE STYLING

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "react-phone-input-2/lib/style.css";
import "../assets/styles/Sass/globals.scss";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <ToastContainer
          style={{ fontSize: 10 }}
          theme="dark"
          position="bottom-left"
          closeOnClick={true}
          pauseOnHover={true}
        />
        <Navigation />
      </Provider>
    </>
  );
}

export default App;
