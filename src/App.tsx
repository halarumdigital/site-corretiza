import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";


function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        <AppRoutes />
        <a
          href="https://wa.me/554984685771"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-xl"
          aria-label="WhatsApp"
        >
          <i className="ri-whatsapp-line text-white text-3xl"></i>
        </a>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
