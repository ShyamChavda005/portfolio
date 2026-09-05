
function Education() {
    return (
        <>
            <section id="education" className="max-w-5xl mx-auto px-4 sm:px-6 mb-12 sm:mb-20 scroll-mt-20 sm:scroll-mt-24">
                <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-slate-100">
                    Education
                </h2>

                <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 sm:p-6 transition-all duration-600 hover:border-slate-500 hover:bg-slate-800/70">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-slate-100">
                                Master of Computer Applications
                            </h3>

                            <p className="mt-1 text-sm sm:text-base text-slate-400">
                                <div className="flex mt-2 gap-2">
                                    <img src="/placeholder.png" alt="Location" className="rounded-full h-5 mt-1" />
                                    Parul University · Vadodara
                                </div>
                            </p>
                        </div>

                        <span className="text-md sm:text-sm text-slate-300">
                            2025 — 2027
                        </span>
                    </div>

                    <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-400 max-w-3xl">
                        Currently pursuing an MCA with a focus on Artificial Intelligence,
                        strengthening my foundation in software engineering, backend
                        development, algorithms, and intelligent systems.
                    </p>

                    <div className="flex flex-wrap gap-2 mt-5">
                        <span className="rounded-full border border-slate-300 bg-slate-800/80 px-3 py-1 text-xs text-slate-300">
                            Artificial Intelligence
                        </span>

                        <span className="rounded-full border border-slate-300 bg-slate-800/80 px-3 py-1 text-xs text-slate-300">
                            Software Engineering
                        </span>

                        <span className="rounded-full border border-slate-300 bg-slate-800/80 px-3 py-1 text-xs text-slate-300">
                            Problem Solving
                        </span>
                    </div>
                </div>

                <div className="bg-slate-900/70 mt-5 border border-slate-800 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-slate-500 hover:bg-slate-800/70">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-slate-100">
                                Bachelor of Computer Applications
                            </h3>

                            <div className="flex mt-2 gap-2">
                                <img src="/placeholder.png" alt="Location" className="rounded-full h-5 mt-1" />
                                <p className="mt-1 text-sm sm:text-base text-slate-400">
                                    Vivekanand College · Surat
                                </p>
                            </div>
                        </div>

                        <span className="text-md sm:text-sm text-slate-300">
                            2022 — 2025
                        </span>
                    </div>

                    <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-400 max-w-3xl">
                        Completed my graduation studies with a foundation in
                        programming, web development and problem solving
                        while continuously building practical web development skills.
                    </p>

                    <div className="flex flex-wrap gap-2 mt-5">
                        <span className="rounded-full border border-slate-300 bg-slate-800/80 px-3 py-1 text-xs text-slate-300">
                            Computer Science Fundamentals
                        </span>

                        <span className="rounded-full border border-slate-300 bg-slate-800/80 px-3 py-1 text-xs text-slate-300">
                            Web Development
                        </span>

                        <span className="rounded-full border border-slate-300 bg-slate-800/80 px-3 py-1 text-xs text-slate-300">
                            Problem Solving
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Education;