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