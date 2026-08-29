import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ImageToPDF from './pages/ImageToPDF';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsConditions from './pages/legal/TermsConditions';
import CookiePolicy from './pages/legal/CookiePolicy';
import DMCAPolicy from './pages/legal/DMCAPolicy';
import Disclaimer from './pages/legal/Disclaimer';
import SitemapPage from './pages/SitemapPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/image-to-pdf"
          element={
            <Layout>
              <ImageToPDF />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          }
        />
        <Route
          path="/terms"
          element={
            <Layout>
              <TermsConditions />
            </Layout>
          }
        />
        <Route
          path="/cookie-policy"
          element={
            <Layout>
              <CookiePolicy />
            </Layout>
          }
        />
        <Route
          path="/dmca"
          element={
            <Layout>
              <DMCAPolicy />
            </Layout>
          }
        />
        <Route
          path="/disclaimer"
          element={
            <Layout>
              <Disclaimer />
            </Layout>
          }
        />
        <Route
          path="/sitemap"
          element={
            <Layout>
              <SitemapPage />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFoundPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
