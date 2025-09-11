// components/Skills.tsx
export default function Skills() {
    const skills = ['JavaScript', 'React.js', 'Node.js', 'TypeScript', 'Python', 'CSS', 'Neo4j'];

    return (
        <section id="skills" className="min-h-screen flex flex-col justify-center items-center bg-black px-4 text-white text-center">
            <div className="max-w-4xl">
                <h2 className="text-3xl font-bold mb-6">Skills</h2>
                <p className="text-lg">
                    {skills.join(' • ')}
                </p>
            </div>
        </section>
    );
}
