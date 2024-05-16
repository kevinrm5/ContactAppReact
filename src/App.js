import Home from "./pages/Home";
import Support from "./pages/Support";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ContactApp from "./pages/ContactList";
import NotFound from "./pages/404";
import Settings from "./pages/Settings";
import { db } from "./backend/app_backend";
import "./autoload";

function App() {
  let homePageSeen = db.get("HOME_PAGE_SEEN");
  let DEFAULT_ROUTE_PAGE;
  homePageSeen
    ? (DEFAULT_ROUTE_PAGE = <ContactApp />)
    : (DEFAULT_ROUTE_PAGE = <Home />);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={DEFAULT_ROUTE_PAGE} />
        <Route path="support" element={<Support />} />
        <Route path="contact" element={<ContactApp />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
