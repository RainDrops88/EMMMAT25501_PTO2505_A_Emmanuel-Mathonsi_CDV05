import Project from "./Projects";

/**
 * Displays a grid layout of projects preview cards. Each card includes
 * project details such as year, title, brief, technologies, responsibilities and gitHub link.
 *
 * @param {Object} props
 * @param {Array<Object>} props.projects - Array of project objects to display.
 *
 * @returns {JSX.Element} The rendered grid of project cards.
 *
 */

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