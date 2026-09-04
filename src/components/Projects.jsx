import { useState } from "react";

function Projects() {

    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            name: "Smart OPD",
            description:
                "A web application built to solve a practical problem. It includes a responsive interface and backend functionality.",
            tech: ["React.js", "FastAPI", "SQLAlchemy", "MySQL"],
            github: "https://github.com/ShyamChavda005/smart_opd.git",
            demo: "https://example.com"
        },
        {
            name: "GScheme",
            description:
                "A full-stack application focused on clean UI, API integration, and efficient data management.",
            tech: ["React.js", "Node.js", "Express.js", "SQLite"],
            github: "https://github.com/ShyamChavda005/scheme_finder.git",
            demo: "https://example.com"
        },
        {
            name: "Student Record Management ",
            description:
                "A full-stack application focused on clean UI, API integration, and efficient data management.",
            tech: ["Java", "JDBC", "MySQL"],
            github: "https://github.com/ShyamChavda005/JDBC-CRUD-SMS.git",
            demo: "https://example.com"
        },
        {
            name: "HealthCare Appointment Booking",
            description:
                "A full-stack application focused on clean UI, API integration, and efficient data management.",
            tech: ["PHP", "BootStrap", "JavaScript", "MySQL"],
            github: "https://github.com/ShyamChavda005/Online-appointment-system.git",
            demo: "https://example.com"
        }
    ];

    return (
        <section id="projects" className="max-w-5xl mx-auto px-4 sm:px-6 mb-12 sm:mb-20 scroll-mt-20 sm:scroll-mt-24">

            <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-slate-100">
                Projects
            </h2>

            {/* Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

                {projects.map((project, index) => (
                    <div key={index} onClick={() => setSelectedProject(project)} className="bg-slate-900 cursor-pointer border border-gray-700 rounded-2xl p-5 sm:p-6 transition-colors hover:bg-slate-800">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 text-slate-200">
                            {project.name}
                        </h3>

                        <p className="text-sm sm:text-base text-gray-400 line-clamp-2 mb-4">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((p, key) => (
                                <span key={key} className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs sm:text-sm text-slate-300">
                                    {p}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}

            </div>


            {/* Project Details */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 sm:p-6 backdrop-blur-sm">

                    <div className="relative w-full max-w-lg rounded-2xl border border-slate-700 bg-slate-900 p-5 sm:p-7 shadow-xl">

                        {/* Close */}
                        <button onClick={() => setSelectedProject(null)} className="absolute right-4 top-4 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer text-lg p-1">
                            ✕
                        </button>

                        <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-100 pr-6">
                            {selectedProject.name}
                        </h3>

                        <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-6">
                            {selectedProject.description}
                        </p>

                        {/* Links */}
                        <div className="flex flex-wrap gap-4 text-sm font-medium">
                            <a href={selectedProject.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="text-blue-400 bg-slate-800 px-4 py-2 hover:text-blue-300 transition-colors rounded-full border border-slate-700">
                                GitHub →
                            </a>

                            <a href={selectedProject.demo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="text-slate-100 bg-slate-700 px-4 py-2 hover:text-blue-300 transition-colors rounded-full">
                                Live Demo
                            </a>
                        </div>

                    </div>

                </div>
            )}

        </section>
    );
}

export default Projects;