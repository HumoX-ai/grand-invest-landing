import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import { ThemeProvider } from "./components/theme-provider";
import { ParallaxProvider } from "react-scroll-parallax";
import AboutUs from "./pages/AboutUs";
import Page404 from "./pages/Page404";
import Downloads from "./pages/Downloads";
import DownloadDetail from "./pages/Downloads/download-detail";
import Contacts from "./pages/Contacts";
import ExchangeRates from "./pages/ExchangeRates";
import Robots from "./pages/Robots";
import Forma from "./pages/Forma";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <ParallaxProvider>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/downloads" element={<Downloads />}>
                <Route path=":id" element={<DownloadDetail />} />
              </Route>
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/exchange-rates" element={<ExchangeRates />} />
              <Route path="/robots" element={<Robots />} />
            </Route>
            <Route path="*" element={<Page404 />} />
            <Route path="/form" element={<Forma />} />
          </Routes>
        </ThemeProvider>
      </ParallaxProvider>
    </BrowserRouter>
  );
}

export default App;
