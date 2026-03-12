function Contact()
{
    return(
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-16 px-4">
            <div className="max-w-xl mx-auto">
                <h2 className="text-4xl font-bold text-white text-center mb-10">Contact Me</h2>
                <form className="space-y-5">
                    <div>
                        <label htmlFor="input-email" className="block mb-2 text-sm font-medium text-slate-300">Your Email <span className="text-red-400">*</span></label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-slate-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/></svg>
                            </div>
                            <input type="email" id="input-email" className="block w-full pl-10 pr-3 py-2.5 bg-slate-800 border border-slate-600 text-white text-sm rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 placeholder:text-slate-500 outline-none" placeholder="name@example.com" required />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="input-subject" className="block mb-2 text-sm font-medium text-slate-300">Subject <span className="text-red-400">*</span></label>
                        <input type="text" id="input-subject" className="block w-full px-3 py-2.5 bg-slate-800 border border-slate-600 text-white text-sm rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 placeholder:text-slate-500 outline-none" placeholder="Let me know how I can help" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-300">Your Message</label>
                        <textarea id="message" rows="4" className="block w-full px-3 py-2.5 bg-slate-800 border border-slate-600 text-white text-sm rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 placeholder:text-slate-500 outline-none resize-none" placeholder="Write your thoughts here..."></textarea>
                    </div>
                    <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 focus:ring-4 focus:ring-cyan-400 focus:outline-none">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;