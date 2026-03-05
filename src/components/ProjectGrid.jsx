import Project from "./Projects";

export default function ProjectGrid({projects=[]}){
    if (!projects || projects.length === 0) {
        return <div className="message-container">No projects.</div>;
    }

    return (
        <main className="project">
            <div><h1>Projects</h1></div>
            <section className="projects">
                {projects.map((entry) => (
                    <Project 
                        key={entry.id}
                        year={entry.year}
                        title={entry.title}
                        brief={entry.brief}
                        technologies={entry.technologies.map(name => <span className="tech">{name}</span>)}
                        responsibilities={entry.responsibilities}
                        link={entry.link}
                    />
                ))}
            </section>
        </main>
    )
}