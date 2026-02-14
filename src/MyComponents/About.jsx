function About() {
  return (
    <section
      className=" dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300
    bg-white py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
              alt="About Us"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>

          {/* Content */}
          <div>
            <h2
              className="dark:text-emerald-600
            text-3xl sm:text-4xl font-bold text-gray-800"
            >
              About Us
            </h2>

            <p
              className="dark:text-white
            mt-6 text-gray-600 leading-relaxed"
            >
              We are passionate developers focused on building modern,
              responsive, and high-performance web applications. Our mission is
              to create clean and scalable digital solutions that help
              businesses grow.
            </p>

            <p
              className="dark:text-white
            mt-4 text-gray-600 leading-relaxed"
            >
              Using technologies like React and Tailwind CSS, we design
              user-friendly interfaces with strong performance and elegant
              design.
            </p>

            <button
              className="dark:bg-emerald-800 dark:hover:bg-emerald-900
            mt-8 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
