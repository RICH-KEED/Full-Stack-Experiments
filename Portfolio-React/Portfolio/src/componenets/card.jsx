function Card({title, description, image, tags = []}) {
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-xl shadow-lg overflow-hidden flex flex-col hover:border-cyan-500 transition-colors duration-300 hover:shadow-cyan-500/20 hover:shadow-xl">
            <div className="overflow-hidden">
                <img src={image} alt={title} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-6 flex flex-col flex-1">
                <h5 className="mb-3 text-xl font-bold text-white">{title}</h5>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{description}</p>
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        {tags.map(tag => (
                            <span key={tag} className="text-xs bg-slate-700 text-cyan-400 px-2 py-1 rounded-full">{tag}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
};

export default Card;