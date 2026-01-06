import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            icon: '💻',
            skills: ['C', 'Python', 'Java', 'SQL']
        },
        {
            title: 'Web Technologies',
            icon: '🌐',
            skills: ['HTML', 'CSS', 'JavaScript']
        },
        {
            title: 'Frameworks',
            icon: '⚛️',
            skills: ['React', 'Node.js', 'TypeScript']
        },
        {
            title: 'Tools & Others',
            icon: '🛠️',
            skills: ['Gemini API', 'Data Analytics', 'Git', 'Excel', 'Power BI', 'Tableau', 'GitHub']
        }
    ];

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>

                <div className="skills-grid grid grid-2">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category glass-card">
                            <div className="category-header">
                                <span className="category-icon">{category.icon}</span>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="skills-list">
                                {category.skills.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
