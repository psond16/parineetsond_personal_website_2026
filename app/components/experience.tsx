export default function Experience() {
  const experiences = [
    {
      title: "Frontend Developer",
      date: "Sept - Dec 2025",
      description: [
        "Designed and coded frontend interface for a local bakery website using HTML, Tailwind CSS, JavaScript, and Astro.",
        "Translated the bakery owner’s requirements into interactive layouts and responsive UI components.",
        "Created wireframes in Figma and implemented production-ready code.",
        "Managed code with Git/GitHub and ensured styling consistency and accessibility."
      ],
      image: "/Sweet-T2.png"
    },
    {
      title: "Student Usher",
      date: "Jan - Present",
      description: [
        "Assisted with seating, ticket verification, and crowd guidance at Credit Union 1 Arena.",
        "Helped guests with directions and ensured a smooth event experience."
      ],
      image: "/CU1.png"
    },
    {
      title: "Dev Mentor",
      date: "Feb - Present",
      description: [
        "Supported students with Git, HTML, CSS, and web dev concepts.",
        "Helped debug code and improve problem-solving skills.",
        "Explained real-world development workflows and collaboration."
      ],
      image: "/mentor.png"
    }
  ];

  return (
    <div className="py-20" id="experience">
      <h1 className="text-3xl font-bold text-center mb-2 font-playfair">My Journey</h1>
      <p className="text-center text-gray-500 mb-12 font-playfair italic">(so far...)</p>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 transform -translate-x-1/2"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`mb-16 flex items-center w-full ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Content */}
            <div className="w-1/2 px-6">
              <div className="bg-white shadow-lg rounded-2xl p-6">
                <h2 className="text-xl font-semibold">{exp.title}</h2>
                <h4 className="text-sm text-gray-500 mb-3">{exp.date}</h4>

                <ul className="list-disc pl-5 space-y-2 text-sm">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Center Dot */}
            {/* Connector Line */}
            <div className="w-0 relative">
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 ${
                  index % 2 === 0
                    ? "left-1/2 translate-x-0 w-10 h-[2px] bg-black"
                    : "right-1/2 -translate-x-0 w-10 h-[2px] bg-black"
                }`}
              >
                {/* Arrow tip */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 ${
                    index % 2 === 0
                      ? "right-0 border-l-8 border-l-black border-y-4 border-y-transparent"
                      : "left-0 border-r-8 border-r-black border-y-4 border-y-transparent"
                  }`}
                />
              </div>
            </div>

            {/* Image */}
            <div className="w-1/2 px-12">
              <img
                src={exp.image}
                alt={exp.title}
                className="rounded-2xl shadow-md w-full h-60 object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}