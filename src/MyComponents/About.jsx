import { useState } from "react";
import aboutPic from "../assets/aboutPic.jpg";

function About() {
  const [showMore, setShowMore] = useState(false);

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
              src={aboutPic}
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

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Full Stack MERN Developer passionate about building scalable and
              modern applications.
            </p>
          </div>

          {/* About Content */}
          <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              I’m{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Mohsin Ali
              </span>
              , a passionate Full Stack Developer who enjoys building modern,
              responsive, and user-friendly applications. I focus on writing
              clean, maintainable code and designing scalable systems.
            </p>

            <p>
              On the frontend, I work with HTML, CSS, JavaScript, React.js,
              Next.js, TypeScript, and Tailwind CSS to create interactive and
              visually appealing user interfaces.
            </p>

            <p>
              On the backend, I use Node.js, Express.js, MongoDB, and PostgreSQL
              to build secure and structured systems with strong database
              design.
            </p>

            <p>
              Currently, I’m expanding my expertise in
              <span className="text-indigo-600 dark:text-emerald-400 font-medium">
                {" "}
                React Native{" "}
              </span>
              to develop cross-platform mobile applications alongside web
              solutions.
            </p>
          </div>

          {/* Why Work With Me Card */}
          {/* Why Work With Me Card */}
          <div className="mt-12 bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 transition">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-emerald-400 mb-6">
              Why Work With Me?
            </h3>

            {/* Always Visible Short Intro */}
            <p className="text-gray-600 dark:text-gray-300">
              I focus on delivering clean, scalable, and professional solutions.
            </p>

            {/* Hidden Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                showMore ? "max-h-96 mt-6 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="grid sm:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
                <li>✔ Strong frontend & backend expertise</li>
                <li>✔ Experience with modern technologies</li>
                <li>✔ Solid database & system architecture knowledge</li>
                <li>✔ Focus on clean & scalable code</li>
                <li>✔ Continuous learner & fast adapter</li>
                <li>✔ Client satisfaction is my priority</li>
              </ul>
            </div>

            {/* Toggle Button */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-8 bg-indigo-600 dark:bg-emerald-800 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 dark:hover:bg-emerald-900 transition"
            >
              {showMore ? "Show Less" : "Learn More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
