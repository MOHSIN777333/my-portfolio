function Footer() {
  return (
    <footer
      className="bg-white text-gray-900 pt-16 pb-8
     dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-white">Mohsin Ali</h2>
            <p className="mt-4 text-gray-400">
              MERN Stack Developer building modern, scalable and
              high-performance web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="hover:text-indigo-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-indigo-400 transition">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-indigo-400 transition"
                >
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition"
              >
                🌐
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition"
              >
                💼
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition"
              >
                🐙
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Mohsin Ali. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
