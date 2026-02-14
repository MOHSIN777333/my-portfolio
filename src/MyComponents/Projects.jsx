function Projects() {
  const projects = [
    {
      title: "MERN E-Commerce App",
      description:
        "Full-stack e-commerce application with authentication, product management and Stripe payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      tech: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "Task Management App",
      description:
        "A full-stack task manager with JWT authentication, CRUD operations and responsive UI.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
      tech: ["React", "Express", "MongoDB"],
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website built with React and Tailwind CSS showcasing projects and skills.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tech: ["React", "Tailwind CSS"],
    },
  ];

  return (
    <section
      className=" dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300
    bg-white py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2
            className="dark:text-emerald-600
          text-3xl sm:text-4xl font-bold text-gray-800"
          >
            My Projects
          </h2>
          <p
            className="dark:text-white
          mt-4 text-gray-600"
          >
            Some of the projects I have built using the MERN stack.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="dark:bg-gray-600/30
              bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3
                  className="dark:text-emerald-600
                text-xl font-semibold text-gray-800"
                >
                  {project.title}
                </h3>

                <p
                  className="dark:text-white
                mt-3 text-gray-600 text-sm"
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="dark:bg-gray-600/30 dark:text-gray-100/30
                      bg-indigo-100 text-indigo-600 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-4">
                  <button
                    className="dark:bg-emerald-800 dark:hover:bg-emerald-900
                  bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition"
                  >
                    Live Demo
                  </button>
                  <button
                    className="dark:border-emerald-600 dark:text-emerald-600 dark:hover:bg-emerald-400/30
                  border border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg text-sm hover:bg-indigo-50 transition"
                  >
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
