
/**
 * project details such as year, title, brief, technologies, responsibilities and gitHub link.
 *
 * @param {Object} props
 * @param {Object} props.project - The project data object to display.
 * @param {string} props.project.id - Unique ID of the project.
 * @param {number} props.project.year - Year of the project.
 * @param {string} props.project.title - Title of the project.
 * @param {string} props.project.brief - Project brief.
 * @param {Array<Object>} props.project.technologies - Technologies used o the project.
 * @param {string} props.project.responsibilities - The responsibilities of the project.
 * @param {string} props.project.link - The link to GitHud project.
 *
 * @returns {JSX.Element} The rendered project card component.
 */

export default function Project (props){
    return (
        
        <div className="project-card">
            <h3 className="year">{props.year}</h3>
            <h2 className="title">{props.title}</h2>
            <p className="brief"><strong>Brief: </strong>{props.brief}</p>
            <p className="techs"><strong>Technologies: </strong>
            {props.technologies}</p>
            <p className="responsibilities"><strong>Responsibilities: </strong>{props.responsibilities}</p>
            <p className="link"><a href={props.link} target="_blank" rel="noopener noreferrer">GitHub link</a></p>

        </div>
       
    )
}