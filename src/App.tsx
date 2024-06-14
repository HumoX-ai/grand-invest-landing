import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import { ThemeProvider } from "./components/theme-provider";
import AboutUs from "./pages/AboutUs";
import Page404 from "./pages/Page404";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
