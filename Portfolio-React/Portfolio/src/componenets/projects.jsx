import Card from './card';

const projects = [
    {
        title: "HealTogether",
        description: "Built a comprehensive health platform to connect users with medical experts and mentors, fostering a supportive environment for mental and physical wellness. Integrated AI algorithms for personalized diagnostic suggestions, wellness insights, and habit tracking. Prioritized user privacy with secure authentication and encrypted communication.",
        image: "https://placehold.co/600x300/0f172a/22d3ee?text=HealTogether",
        tags: ["React", "AI/ML", "Healthcare", "Authentication"]
    },
    {
        title: "Antariksh Saathi",
        description: "Developed an intelligent chatbot leveraging MOSDAC APIs to deliver real-time satellite and environmental data — weather, air quality, vegetation indices — in a conversational format. Enhanced with NLP for complex queries, location-based updates, and data visualization, making satellite insights accessible to students and researchers.",
        image: "https://placehold.co/600x300/0f172a/22d3ee?text=Antariksh+Saathi",
        tags: ["Chatbot", "NLP", "Satellite Data", "MOSDAC API"]
    }
];

function Projects() {
    return (
        <section className="bg-slate-900 py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-white text-center mb-10">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map(project => (
                        <Card
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            tags={project.tags}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
