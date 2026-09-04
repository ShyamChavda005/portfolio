
function Contact() {
    return (
        <>
            <section id="contact" className="max-w-5xl mx-auto px-4 sm:px-6 mb-12 sm:mb-20 scroll-mt-20 sm:scroll-mt-24">

                <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-slate-100">
                    Let's Connect
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

                    <a href="https://www.linkedin.com/in/shyamchavda005" target="__blank" className="w-full">
                        <div className="flex justify-center items-center gap-3 sm:gap-4 rounded-2xl border border-gray-700 px-4 sm:px-6 py-4 sm:py-5 transition-colors hover:bg-slate-800">
                            <img src="../src/assets/linkedin.png" alt="LinkedIn" className="w-8 h-8 sm:w-10 sm:h-10 object-contain shrink-0" />

                            <span className="text-base sm:text-lg text-gray-100 font-medium truncate">
                                LinkedIn
                            </span>
                        </div>
                    </a>

                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shyamchavda005@gmail.com" target="__blank" rel="noopener noreferrer" className="w-full">
                        <div className="flex justify-center items-center gap-3 sm:gap-4 rounded-2xl border border-gray-700 px-4 sm:px-6 py-4 sm:py-5 transition-colors hover:bg-slate-800">
                            <img src="https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg" alt="Gmail" className="w-8 h-8 sm:w-10 sm:h-10 object-contain shrink-0" />

                            <span className="text-xs sm:text-base md:text-lg text-gray-100 font-medium truncate">
                                shyamchavda005@gmail.com
                            </span>
                        </div>
                    </a>
                </div>
            </section>

        </>
    )
}

export default Contact;