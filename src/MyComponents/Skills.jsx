function Skills() {
  const skills = [
    { name: "MongoDB", level: "Database" },
    { name: "Express.js", level: "Backend Framework" },
    { name: "React.js", level: "Frontend Library" },
    { name: "Node.js", level: "Runtime Environment" },
    { name: "Tailwind CSS", level: "Styling Framework" },
    { name: "JavaScript (ES6+)", level: "Programming Language" },
  ];

  return (
    <section
      className=" dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300
    bg-gray-50 py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2
            className="dark:text-emerald-600
          text-3xl sm:text-4xl font-bold text-gray-800"
          >
            My Skills
          </h2>
          <p
            className="dark:text-white
          mt-4 text-gray-600"
          >
            Technologies I use to build modern full-stack applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="dark:bg-gray-600/30
              bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3
                className="dark:text-emerald-600
              text-xl font-semibold
               text-indigo-600"
              >
                {skill.name}
              </h3>
              <p className=" dark:text-white mt-2 text-gray-600">
                {skill.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
