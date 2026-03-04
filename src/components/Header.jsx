import { Link } from 'react-router-dom';
import resume from '../assets/E. Mathonsi CV.pdf';

export default function Header() {
    return (
        <header className="header hover">
            <h1>Emmanuel Mathonsi</h1>
            <ul  className="nav-links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><a href={resume} download="E. Mathonsi CV.pdf" rel="noopener noreferrer">Download Resume</a></li>
            </ul>
        </header>
    )
}