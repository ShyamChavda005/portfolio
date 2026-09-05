
function Footer() {
    return (
        <>
            <div className="py-6 sm:py-5 px-4 sm:px-10 w-full mx-auto">
                <p className="border-b border-blue-400/40"> </p>
            </div>

            <footer id="footer" className="max-w-5xl mx-auto px-4 pb-10">
                <div className="flex justify-center items-center gap-6 mb-4 pt-5">
                    <a href="https://github.com/shyamchavda005" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                        <img src="/github.png" alt="GitHub" className="w-7 h-7 sm:w-8 sm:h-8 object-contain bg-white rounded-full p-0.5" />
                    </a>

                    <a href="https://www.linkedin.com/in/shyamchavda005" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                        <img src="/linkedin.png" alt="LinkedIn" className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
                    </a>

                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shyamchavda005@gmail.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                        <img src="https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg" alt="Email" className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
                    </a>
                </div>

                <div className="flex justify-center items-center sm:text-sm text-slate-400 text-center">
                    <p className="text-md"> © 2026 Shyam Chavda · Software Engineer </p>
                </div>
            </footer>
        </>
    )
}

export default Footer;