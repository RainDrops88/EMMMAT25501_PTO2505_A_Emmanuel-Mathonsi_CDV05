import ProfilePic from '../assets/profile1.png';

export default function Home () {
    return (
        <main className='home'>
            <section id="profile">
                <div className="profile-image">
                    <img src={ProfilePic} alt="Profile picture" />
                </div>
                <div className="profile">
                    <h3>Hi<span className='dot'>.</span></h3>
                    <h3><span className='line'></span>I'm Emmanuel</h3>
                    <h3>A Frontend Developer dedicated to building innovative,
                         user-focused solutions to complex challenges. With hands-on experience
                          across diverse programming languages and frameworks, I bring both 
                          technical expertise and a strong drive to continuously expand my knowledge
                           of emerging technologies. My goal is to contribute to impactful projects 
                           that enhance user experiences and create meaningful value in people’s 
                           lives
                    </h3>
                </div>
                
            </section>
            <section id="scroller">
                <ul className="technologies inner_scroll hover">
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
                
            </section>

            
        </main>
    )
}