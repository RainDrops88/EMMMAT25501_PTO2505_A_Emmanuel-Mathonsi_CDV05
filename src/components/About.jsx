import profilePicture from "../assets/profile.png";
export default function About () {
    return (
        <main className="about">
            <section id="about">
                <div className="p-summary">
                    <h2>Professional Summay</h2>
                
                    <p>
                        I am a passionate and dedicated Software Developer with a strong foundation 
                        in programming.I have hands-on experience in building dynamic and responsive
                        websites using various programming languages and frameworks,
                        I am committed to continuous learning and growth in the field of 
                        Software Development. My goal is to contribute to impactful projects 
                        that make a difference in people's lives.
                        I am currently seeking opportunities to apply my skills and knowledge in a collaborative
                        and innovative environment where I can contribute to the success of the team and
                        further develop my expertise in software development.
                    </p>
                    <p>
                        I am currently employed as an Air Traffic Service Assistant at the South African Air Force
                        and under training to becoming an Air traffic Controller. My current post is an entry-level 
                        managerial position that requires me to assist in the management of air traffic control operations,
                        ensuring the safe and efficient movement of aircraft within controlled airspace. I am responsible for 
                        coordinating with air traffic controllers, monitoring flight paths, and providing support to ensure 
                        the safety of all aircraft operating within our airspace. which has given me the opportunity to develop strong 
                        communication, problem-solving, and decision-making skills, as well as the ability to work effectively under pressure.
                    </p>
                </div>
                <div className="profile-image">
                    <img src={profilePicture} alt="Profile Image" />
                </div>
            </section>
            <div className="work-skills">
                <section id="work-experience">
                    <h2>Experience</h2>
                    <div className="experience">
                        <p className="duration">June 2023 - Present</p>
                        <h3 className="post">Air Traffic Control Trainee</h3>
                        <p className="company">Sout African Air Force</p>
                        <p className="location">Langebaanweg, Wester Cape</p>
                        <ul className="responsibilities">
                            <li>Monitoring air traffic patterns to provide safe and efficient flight operations.</li>
                            <li>Coordinate with pilots and ground staff to relay critical information for operational efficiency.</li>
                            <li>Developd proficiency in air traffic control procedures through rigorous training.</li>
                        </ul>
                    </div>
                    <div className="experience">
                        <p className="duration">April 2019 - June 2023</p>
                        <h3 className="post">Air Traffic Service Assistant</h3>
                        <p className="company">Sout African Air Force</p>
                        <p className="location">Hoedsruit, Limpopo</p>
                        <ul className="responsibilities">
                            <li>Liaising with the air traffic controllers and other stakeholders to ensure smooth operations.</li>
                            <li>Assisting in the management of air traffic control operations.</li>
                            <li>Participated in training sessions to develop skills in aviation safety and regulations.</li>
                        </ul>
                    </div>
                </section>
                <section id="skills">
                    <div className="p-skills">
                        <h2>Professional Skills</h2>
                        <ul>
                            <li>Strong communication</li>
                            <li>Data Interpretation</li>
                            <li>Leadership Qualities</li>
                            <li>Web Development</li>
                            <li>Problem-solving</li>
                            <li>Git and Version Control</li>
                            <li>Visual Observation</li>
                        </ul>
                    </div>
                    <div className="t-skills">
                        <h2>Technical Skills</h2>
                        <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>C++</li>
                            <li>Git and GitHub</li>
                            <li>Figma</li>
                            <li>Tailwind</li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    )
}