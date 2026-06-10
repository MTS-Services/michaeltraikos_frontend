import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/public/home_page/Home";
import NotFoundPage from "../pages/NotFoundPage";
import PrivacyPage from "../pages/public/privacy_policy_page/PrivacyPage";
import DisclaimerPage from "../pages/public/disclaimer_page/DisclaimerPage";
import ComplimentsPage from "../pages/public/compliments_page/ComplimentsPage";
import ContactPage from "../pages/public/contact/ContactPage";
import RootLayout from "../layouts/RootLayout";
import About from "../pages/public/about/About";
import FirstHome from "../pages/public/first_home/FirstHome";
import NextHome from "../pages/public/next_home/NextHome";
import Investment from "../pages/public/investment/Investment";
import Construction from "../pages/public/construction/Construction";
import Smsf from "../pages/public/smsf/Smsf";
import Refinancing from "../pages/public/refinancing/Refinancing";
import Calculators from "../pages/public/calculators/Calculators";
import FaqPage from "../pages/public/faq_page/FaqPage";
import SeoFaqPage from "../pages/public/seo_faq_page/SeoFaqPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about-us", element: <About /> },
      { path: "first-home-buyer-loans", element: <FirstHome /> },
      { path: "next-home-buyer-loans", element: <NextHome /> },
      { path: "investment-property-loans", element: <Investment /> },
      { path: "construction-renovation-loans", element: <Construction /> },
      { path: "smsf-loans", element: <Smsf /> },
      { path: "refinancing", element: <Refinancing /> },
      { path: "calculators", element: <Calculators /> },
      { path: "faqs", element: <FaqPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "privacy-policy-2", element: <PrivacyPage /> },
      { path: "disclaimer", element: <DisclaimerPage /> },
      { path: "compliments", element: <ComplimentsPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  {
    path: "/seo-faq",
    element: <SeoFaqPage />,
  },
]);

export default router;
