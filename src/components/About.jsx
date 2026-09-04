
function About() {
    return (
        <section id="about" className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20 scroll-mt-20 sm:scroll-mt-24">

            <div className="mb-10 sm:mb-16">
                <div className="flex justify-center">
                    <p className="inline-block rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs sm:text-sm font-medium text-blue-400">
                        ° Software Engineer
                    </p>
                </div>

                <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-100 mb-4 mt-5">
                    Shyam Chavda
                </h1>


                <p className="text-center text-base sm:text-lg leading-relaxed mt-5 text-slate-400 mx-auto">
                    Computer Application student passionate about building reliable web applications and algorithmic problem-solving.
                </p>

                <div className="flex justify-center">
                    <a href="/Resume.pdf" download="Resume.pdf">
                        <button className="bg-blue-600 hover:bg-blue-700 text-slate-100 font-medium mt-6 py-2 px-5 rounded-full transition-colors hover:border-slate-500 cursor-pointer text-sm sm:text-base">
                            Download Resume
                        </button>
                    </a>
                </div>
            </div>

            <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-slate-100">
                    About
                </h2>

                <p className="text-sm sm:text-base leading-relaxed text-slate-400">
                    I am Shyam Chavda, a Master of Computer Applications <span className="text-slate-200 font-medium">(MCA)-(Batch-2027)</span> student at Parul University.
                    I enjoy building practical web applications and solving algorithmic 
                    problems. My primary focus is backend development, where I work with <span className="text-slate-200 font-medium"> Python, FastAPI, 
                    Pydantic, SQLAlchemy, and SQL </span> to build clean and reliable systems. I am continuously 
                    improving my problem-solving skills and exploring better ways to design and develop software.
                </p>
            </div>

        </section>
    );
}

export default About;
