import React from "react";
import Header from "./MyComponents/Header";
import Hero from "./MyComponents/Hero";
import About from "./MyComponents/About";
import Skills from "./MyComponents/Skills";
import Projects from "./MyComponents/Projects";
import Contact from "./MyComponents/Contact";
import Footer from "./MyComponents/Footer";
import FloatingThemeToggle from "./config/FloatingThemeToggle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300 min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Contact />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <FloatingThemeToggle />
      </div>
    </BrowserRouter>
  );
}

export default App;
