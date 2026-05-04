import { SiJavascript, SiTypescript, SiReact, SiHtml5, SiCss, SiCplusplus, SiGithub, SiFigma, SiTailwindcss } from "react-icons/si";
import profilePicture from "../assets/profile.png";
export default function About () {
    return (
        <main className="about">
            <section id="about">
                <div className="p-summary">
                    <h2>Professional Summay</h2>
                
                    <p>
                        I am a highly motivated and dedicated Software Developer with a strong foundation in programming. 
                        I have hands-on experience in developing dynamic, responsive websites using a range of programming 
                        languages and frameworks. Committed to continuous learning and professional growth, I strive to stay 
                        current with emerging technologies and best practices in software development. My objective is to contribute to 
                        impactful projects that create meaningful value for users. I am currently seeking opportunities within a collaborative 
                        and innovative environment where I can apply my skills,
                        support team success, and further enhance my technical expertise.
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
                <div className="about-image">
                    <img src={profilePicture} alt="Profile Image" />
                </div>
            
            </section>
            <div className="work-skills">
                <div className="experiance-education">
                <section id="work-experience">
                    <h2>Experience</h2>
                    <div className="experience">
                        <p className="duration">April 2018 - Present</p>
                        <h3 className="post">Air Traffic Control Trainee, Air Traffic Service Assistant, Command Post Assistant</h3>
                        <p className="company">South African Air Force</p>
                        <ul className="responsibilities">
                            <li>Monitoring air traffic patterns to provide safe and efficient flight operations.</li>
                            <li>Coordinate with pilots and ground staff to relay critical information for operational efficiency.</li>
                            <li>Developd proficiency in air traffic control procedures through rigorous training.</li>
                            <li>Liaising with the air traffic controllers and other stakeholders to ensure smooth operations.</li>
                            <li>Assisting in the management of air traffic control operations.</li>
                            <li>Participated in training sessions to develop skills in aviation safety and regulations.</li>
                        </ul>
                    </div>
                </section>
                <section id="education">
                    <h2>Education</h2>
                    <div className="education">
                        <div className="education-1">
                            <p className="duration">April 2025 - April 2026</p>
                            <h3 className="qualification">Software Development</h3>
                            <p className="institution">CodeSpace Academy</p>
                        </div>
                        <div className="divider"></div>
                        <div className="education-2">
                            <p className="duration">January 2011 - December 2014</p>
                            <h3 className="qualification">Matric/Grade 12</h3>
                            <p className="institution">M.L. Nkuna High School</p>
                        </div>
                    </div>
                    

                </section>
                </div>
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
                            <li><SiJavascript className="skill-icon" /> JavaScript</li>
                            <li><SiTypescript className="skill-icon" /> TypeScript</li>
                            <li><SiReact className="skill-icon" /> React</li>
                            <li><SiHtml5 className="skill-icon" /> HTML</li>
                            <li><SiCss className="skill-icon" /> CSS</li>
                            <li><SiCplusplus className="skill-icon" /> C++</li>
                            <li><SiGithub className="skill-icon" /> Git and GitHub</li>
                            <li><SiFigma className="skill-icon" /> Figma</li>
                            <li><SiTailwindcss className="skill-icon" /> Tailwind</li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    )
}
