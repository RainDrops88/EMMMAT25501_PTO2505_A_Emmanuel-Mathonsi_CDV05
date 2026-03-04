import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header hover">
            <h1>Emmanuel Mathonsi</h1>
            <ul  className="nav-links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="#projects">Projects</Link></li>
                <li><Link to="/resume">My resume</Link></li>
            </ul>
        </header>
    )
}