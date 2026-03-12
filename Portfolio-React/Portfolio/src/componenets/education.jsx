function Educationtable()
{
    return(
        <section className="bg-slate-900 py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-white text-center mb-10">Education</h2>
                <div className="overflow-x-auto rounded-xl border border-slate-700 shadow-lg">
                    <table className="w-full text-sm text-left text-slate-300">
                        <thead className="text-xs text-cyan-400 uppercase bg-slate-800 border-b border-slate-700">
                            <tr>
                                <th scope="col" className="px-6 py-4 font-semibold">Degree</th>
                                <th scope="col" className="px-6 py-4 font-semibold">Institution</th>
                                <th scope="col" className="px-6 py-4 font-semibold">Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-slate-900 border-b border-slate-700 hover:bg-slate-800 transition-colors">
                                <td className="px-6 py-4">10th Matriculation</td>
                                <td className="px-6 py-4">N.C.C Senior Secondary School</td>
                                <td className="px-6 py-4">2020</td>
                            </tr>
                            <tr className="bg-slate-900 border-b border-slate-700 hover:bg-slate-800 transition-colors">
                                <td className="px-6 py-4">12th (Senior Secondary)</td>
                                <td className="px-6 py-4">Gurukul Kurukshetra</td>
                                <td className="px-6 py-4">2022</td>
                            </tr>
                            <tr className="bg-slate-900 hover:bg-slate-800 transition-colors">
                                <td className="px-6 py-4">Bachelor Of Engineering</td>
                                <td className="px-6 py-4">Chandigarh University</td>
                                <td className="px-6 py-4">2028</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )            
};

export default Educationtable;