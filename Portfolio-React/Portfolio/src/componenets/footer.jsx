function Footer()
{
    return(
        <footer className="bg-gradient-to-r from-slate-900 to-slate-800 border-t border-slate-700 w-full">
            <div className="w-full mx-auto px-6 py-5 md:flex md:items-center md:justify-between">
                <span className="text-sm text-slate-400 sm:text-center">© 2026 <a href="https://richkeed.in" className="hover:underline text-slate-300">Abhineet™</a>. All Rights Reserved.</span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-slate-400 sm:mt-0 gap-4 md:gap-6">
                    <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
                    <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
                    <li><a href="#resume" className="hover:text-cyan-400 transition-colors">Resume</a></li>
                    <li><a href="#leetcode" className="hover:text-cyan-400 transition-colors">Leetcode</a></li>
                    <li><a href="#github" className="hover:text-cyan-400 transition-colors">Github</a></li>
                    <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;