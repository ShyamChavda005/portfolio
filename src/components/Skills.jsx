function Skills() {
    return (
        <section id="skills" className="max-w-5xl mx-auto px-4 sm:px-6 mb-12 sm:mb-20 scroll-mt-20 sm:scroll-mt-24">

            <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-slate-100">
                Skills
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5">

                <div className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-gray-700 bg-gray-900 px-4 sm:px-6 py-4 sm:py-5 hover:border-gray-500 transition-colors">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="Java" className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow" />
                    <span className="text-sm sm:text-base md:text-lg text-gray-100 font-medium">
                        Java
                    </span>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-gray-700 bg-gray-900 px-4 sm:px-6 py-4 sm:py-5 hover:border-gray-500 transition-colors">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow" />
                    <span className="text-sm sm:text-base md:text-lg text-gray-100 font-medium">
                        Python
                    </span>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-gray-700 bg-gray-900 px-4 sm:px-6 py-4 sm:py-5 hover:border-gray-500 transition-colors">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow" />

                    <span className="text-sm sm:text-base md:text-lg text-gray-100 font-medium">
                        React
                    </span>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-gray-700 bg-gray-900 px-4 sm:px-6 py-4 sm:py-5 hover:border-gray-500 transition-colors">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-md drop-shadow" />

                    <span className="text-sm sm:text-base md:text-lg text-gray-100 font-medium">
                        JavaScript
                    </span>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-gray-700 bg-gray-900 px-4 sm:px-6 py-4 sm:py-5 hover:border-gray-500 transition-colors">
                    <img src="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" alt="MySQL" className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow" />

                    <span className="text-sm sm:text-base md:text-lg text-gray-100 font-medium">
                        MySQL
                    </span>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-gray-700 bg-gray-900 px-4 sm:px-6 py-4 sm:py-5 hover:border-gray-500 transition-colors">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg" alt="Fast API" className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow" />

                    <span className="text-sm sm:text-base md:text-lg text-gray-100 font-medium">
                        Fast API
                    </span>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-gray-700 bg-gray-900 px-4 sm:px-6 py-4 sm:py-5 hover:border-gray-500 transition-colors">
                    <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow" />

                    <span className="text-sm sm:text-base md:text-lg text-gray-100 font-medium">
                        Postman
                    </span>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-gray-700 bg-gray-900 px-4 sm:px-6 py-4 sm:py-5 hover:border-gray-500 transition-colors">
                    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="Git" className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow" />

                    <span className="text-sm sm:text-base md:text-lg text-gray-100 font-medium">
                        Git
                    </span>
                </div>

            </div>
        </section>
    );
}

export default Skills;