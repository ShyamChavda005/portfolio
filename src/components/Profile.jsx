function Profile() {
    return (
        <>
            <section id="profiles" className="max-w-5xl mx-auto px-4 sm:px-6 mb-12 sm:mb-20 scroll-mt-20 sm:scroll-mt-24">

                <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-slate-100">
                    Coding Profiles
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
                    <a href="https://leetcode.com/u/Shyam56" target="__blank">
                        <div className="flex justify-center items-center gap-4 rounded-2xl border border-gray-700 px-4 sm:px-6 py-4 sm:py-5 transition-colors hover:bg-slate-800">
                            <img src="/leetcode.png" alt="LeetCode" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                            <span className="text-base sm:text-lg text-gray-100 font-medium">
                                LeetCode
                            </span>
                        </div>
                    </a>

                    <a href="https://codeforces.com/profile/Shyam_Chavda" target="__blank">
                        <div className="flex justify-center items-center gap-4 rounded-2xl border border-gray-700 px-4 sm:px-6 py-4 sm:py-5 transition-colors hover:bg-slate-800">
                            <img src="/codeforces.png" alt="CodeForces" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                            <span className="text-base sm:text-lg text-gray-100 font-medium">
                                CodeForces
                            </span>
                        </div>
                    </a>

                    <a href="https://www.hackerrank.com/profile/shyamchavda56" target="__blank">
                        <div className="flex justify-center items-center gap-4 rounded-2xl border border-gray-700 px-4 sm:px-6 py-4 sm:py-5 transition-colors hover:bg-slate-800">
                            <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg" alt="HackerRank" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />

                            <span className="text-base sm:text-lg text-gray-100 font-medium">
                                HackerRank
                            </span>
                        </div>
                    </a>
                </div>
            </section>

        </>
    )
}

export default Profile;