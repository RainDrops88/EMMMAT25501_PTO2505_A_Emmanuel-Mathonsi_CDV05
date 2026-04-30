import { Link } from 'react-router-dom';
import resume from '../assets/E.Mathonsi Resume.pdf';

export default function Header() {
    return (
        <header className="header hover">
            <h1>Emmanuel Mathonsi</h1>
            <ul  className="nav-links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><a href="https://docs.google.com/document/d/1TKJlskvbrC4UlIvwEUAyDw2RRkYGi-hMpJsz1SSqgdY/edit?usp=sharing"  target="_blank">Resume</a></li>
            </ul>
        </header>
    )
}