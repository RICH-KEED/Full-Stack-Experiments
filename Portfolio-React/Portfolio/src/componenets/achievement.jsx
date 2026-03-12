const achievements = [
    {
        icon: "🏆",
        name: "Smart India Hackathon 2024 — Finalist",
        description: "Reached the national finals of SIH 2024, competing among thousands of teams across India with an AI-powered solution for real-world problem statements."
    },
    {
        icon: "🤖",
        name: "ISRO Antariksh Saathi Chatbot",
        description: "Built and deployed a satellite data chatbot using MOSDAC APIs as part of an ISRO-aligned project, delivering real-time environmental insights through natural language."
    },
    {
        icon: "🌐",
        name: "Full-Stack Web Developer",
        description: "Developed and deployed multiple full-stack applications using React, Node.js, and databases including MongoDB, SQL, and Neo4j, with live production deployments."
    },
    {
        icon: "⭐",
        name: "5-Star C++ on HackerRank",
        description: "Achieved a 5-star rating in C++ on HackerRank through consistent problem solving and mastery of data structures and algorithms."
    },
    {
        icon: "🧠",
        name: "AI/ML Project — RAG-based LLM System",
        description: "Designed and implemented a Retrieval-Augmented Generation (RAG) pipeline using LLMs for intelligent document querying and domain-specific question answering."
    },
    {
        icon: "📱",
        name: "Cross-Platform App Development",
        description: "Built cross-platform mobile applications using Flutter with seamless UI/UX, integrating REST APIs and Firebase for real-time data synchronization."
    }
];

function AchievementCard({ icon, name, description }) {
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-cyan-500 hover:shadow-cyan-500/20 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl mb-3">{icon}</div>
            <h3 className="text-lg font-bold text-white mb-2">{name}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
        </div>
    );
}

function Achievement() {
    return (
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-white text-center mb-10">Achievements</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map(a => (
                        <AchievementCard key={a.name} icon={a.icon} name={a.name} description={a.description} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Achievement;