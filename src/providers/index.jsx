import store from "../lib/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function AppProviders({ children }) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {children}
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          limit={3}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </BrowserRouter>
    </Provider>
  );
}

export default AppProviders;
