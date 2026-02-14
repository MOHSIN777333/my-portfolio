function Hero() {
  return (
    <section
      className="bg-gray-50
     dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight dark:text-white">
              Build Modern{" "}
              <span className="text-indigo-600 dark:text-emerald-600">
                Web Apps
              </span>{" "}
              Easily
            </h1>

            <p className="mt-6 text-lg text-gray-600 dark:text-white/30">
              Create fast, responsive and scalable applications using React and
              Tailwind CSS. Start building your next project today.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                className="dark:bg-emerald-800 dark:hover:bg-emerald-900
              bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                Get Started
              </button>
              <button
                className="dark:border-emerald-600 dark:text-emerald-600 dark:hover:bg-emerald-400/30 dark:hover:text-white/30
              border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Hero"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
