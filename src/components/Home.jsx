import ProfilePic from '../assets/profile1.png';

export default function Home () {
    return (
        <main>
            <section id="profile">
                <div className="profile">
                    <h3>Hello<span className='dot'>.</span></h3>
                    <h2><span className='line'></span>I'm Emmanuel</h2>
                    <h1>Software Developer</h1>
                </div>
                <div className="profile-image">
                    <img src={ProfilePic} alt="Profile picture" />
                </div>
            </section>
            <section id="scroller">
                <ul className="technologies inner_scroll">
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>Tailwind</li>
                    <li>JavaScript</li>
                    <li>C++</li>
                    <li>React</li>
                    <li>Figma</li>
                    <li>Git</li>
                    <li>GitHub</li>
                </ul>
            </section>
            <section id="summary">
                <p>I am a software developer with a passion for creating innovative solutions 
                    to complex problems. I have experience in various programming languages and 
                    frameworks, and I am always eager to learn new technologies. My goal is to 
                    contribute to impactful projects that make a difference in people's lives.</p>
            </section>

            
        </main>
    )
}