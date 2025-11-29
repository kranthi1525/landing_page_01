import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import HeroSection from "./pages/heroSection";
import Navbar from "./components/navbar";
import PlayfulFlair from "./pages/playfulFlair";
import Collections from "./pages/collections";
import WhyChoose from "./pages/whyChoose";
import Testimonials from "./pages/testimonials";
import CTABanners from "./pages/ctaBanners";
import Footer from "./components/footer";

// Shop page component
const ShopPage = () => (
  <>
    <Navbar />
    <div className="bg-[#FDFBF5] min-h-screen">
      <Collections />
      <Footer />
    </div>
  </>
);

// New Arrival page component
const NewArrivalPage = () => (
  <>
    <Navbar />
    <div className="bg-[#FDFBF5] min-h-screen">
      <section className="px-8 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#5F2C6F] mb-8">New Arrivals</h1>
          <p className="text-gray-600 mb-8">Discover our latest collection of trendy children's clothing!</p>
          <Collections />
        </div>
      </section>
      <Footer />
    </div>
  </>
);

// Category page component
const CategoryPage = () => (
  <>
    <Navbar />
    <div className="bg-[#FDFBF5] min-h-screen">
      <section className="px-8 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#5F2C6F] mb-8">Shop by Category</h1>
          <p className="text-gray-600 mb-8">Browse our collections by category to find exactly what you're looking for.</p>
          <Collections />
        </div>
      </section>
      <Footer />
    </div>
  </>
);

// About page component
const AboutPage = () => (
  <>
    <Navbar />
    <div className="bg-[#FDFBF5] min-h-screen">
      <section className="px-8 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#5F2C6F] mb-8">About Crayon Curves</h1>
          <p className="text-gray-600 mb-8">Learn more about our mission to bring colorful confidence to every child.</p>
          <WhyChoose />
          <Testimonials />
        </div>
      </section>
      <Footer />
    </div>
  </>
);

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <MainLayout />,
    children : [
      {
        path : "/",
        element : (
          <>
            <Navbar />
            <HeroSection />
          </>
        )
      },
      {
        path : "/shop",
        element : <ShopPage />
      },
      {
        path : "/new-arrival",
        element : <NewArrivalPage />
      },
      {
        path : "/category",
        element : <CategoryPage />
      },
      {
        path : "/about",
        element : <AboutPage />
      }
    ]
  }  
])

const App = () => {
  return (
    <main>
      <RouterProvider router={appRouter}></RouterProvider>
    </main>
  );
};

export default App;