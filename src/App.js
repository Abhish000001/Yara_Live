import Header1 from "./Components/Header1"
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Blog1 from "./Components/page/Blog1"
import Login from "./Components/page/Login";
import Priceplane from "./Components/page/Priceplane";
import Products1 from "./Components/page/Products1"
import Responsiveheaders from "./Components/Responsiveheaders"
import Sidebar from "./Components/Sidebar";
import Topbars from "./Components/Topbars";
import Adminpanel from "./Components/adminePannel/Adminpanel";
import Prfile1 from "./Components/page/Profile1"
import Notifications from "./Components/page/Notifications";
import Reviews1 from "./Components/page/Reviews1"
import Events1 from "./Components/page/Events1"
import Team1 from "./Components/page/Team1";
import Analytics1 from "./Components/Analytics1";
import MessageInbox1 from "./Components/page/MessageInbox1";
import User from "./Components/User";
import Community from "./Components/page/Community";
import Page from "./Components/page/Page";
import Sideslide from "./Components/page/Sideslide";
import PrivacyPolicy from "./Components/page/PrivecyPolicy";
import AboutUs from "./Components/page/AboutUs";
import TransactionList from "./Components/page/TransactionList";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  const Test = ['/login', '/signUp'];

  const shouldShowHeaderFooter = !Test.includes(location.pathname);
  

  const isLoggedIn = localStorage.getItem('authToken');

  return (
    <>
      <div>
        {shouldShowHeaderFooter && <Header1 />}
        {shouldShowHeaderFooter && <Topbars />}
        {shouldShowHeaderFooter && <Sidebar />}
        {shouldShowHeaderFooter && <Responsiveheaders />}

        <Routes>
          <Route path="/responsiveheaders" element={<Responsiveheaders />} />
          <Route path="/topbar" element={<Topbars />} />
          {/* Protected Routes */}
          <Route path="/" element={isLoggedIn ? <Analytics1 /> : <Navigate to="/login" />} />
          <Route path="/messages" element={isLoggedIn ? <MessageInbox1 /> : <Navigate to="/login" />} />
          <Route path="/notifications" element={isLoggedIn ? <Notifications /> : <Navigate to="/login" />} />
          <Route path="/profiles/:userId" element={isLoggedIn ? <Prfile1 /> : <Navigate to="/login" />} />
          <Route path="/analytic" element={isLoggedIn ? <Analytics1 /> : <Navigate to="/login" />} />
          <Route path="/sideslide" element={isLoggedIn ? <Sideslide /> : <Navigate to="/login" />} />
          <Route path="/products" element={isLoggedIn ? <Products1 /> : <Navigate to="/login" />} />
          <Route path="/priceplane" element={isLoggedIn ? <Priceplane /> : <Navigate to="/login" />} />
          <Route path="/user" element={isLoggedIn ? <User /> : <Navigate to="/login" />} />
          <Route path="/blog" element={isLoggedIn ? <Blog1 /> : <Navigate to="/login" />} />
          <Route path="/reviews" element={isLoggedIn ? <Reviews1 /> : <Navigate to="/login" />} />
          <Route path="/events" element={isLoggedIn ? <Events1 /> : <Navigate to="/login" />} />
          <Route path="/team" element={isLoggedIn ? <Team1 /> : <Navigate to="/login" />} />
          <Route path="/community" element={isLoggedIn ? <Community /> : <Navigate to="/login" />} />
          <Route path="/page" element={isLoggedIn ? <Page /> : <Navigate to="/login" />} />
          <Route path="/privacyPolicy" element={isLoggedIn ? <PrivacyPolicy /> : <Navigate to="/login" />} />
          <Route path="/aboutUs" element={isLoggedIn ? <AboutUs /> : <Navigate to="/login" />} />
          <Route path="/transactionList" element={isLoggedIn ? <TransactionList /> : <Navigate to="/login" />} />

          {/* Login Route */}
          <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
