function Intro() {
    return (
        <div className="intro bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 min-h-screen flex items-center justify-center px-4 py-16">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-white space-y-6">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">Hi, I'm an <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">AI ENGINEER</span></h1>
                    <p className="text-lg text-blue-100 leading-relaxed">Second-year B.E (CSE) student with strong programming and problem-solving skills. Experienced in C/C++ and Python, with hands-on exposure to AI/ML, computer vision, and RAG-based LLM systems. Skilled in web and app development using React and Flutter, and proficient in databases including SQL, MongoDB, and Neo4j. Passionate about building innovative projects, contributing to hackathons, and applying technical knowledge to real-world solutions.</p>
                    <div className="pt-4">
                        <button className="bg-gradient-to-r from-cyan-400 to-blue-400 text-blue-900 font-bold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105">Get In Touch</button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img src="src/assets/abhi.png" alt="AI Engineer" className="w-full max-w-md rounded-2xl shadow-2xl shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-shadow duration-300" />
                </div>
            </div>
        </div>
    );
}

export default Intro;