import './Education.css';

const Education = () => {
    const educationData = [
        {
            degree: 'B.Tech in Information Technology',
            institution: 'Vidya Jyothi Institute of Technology',
            period: '2023 - Present',
            cgpa: 'CGPA: 9.24',
            location: 'Hyderabad, India',
            icon: '🎓'
        },
        {
            degree: 'Board of Intermediate Education (MPC)',
            institution: 'Royal Junior College',
            period: '2021 - 2023',
            cgpa: 'Percentage: 97.3%',
            location: 'Hyderabad, India',
            icon: '📚'
        },
        {
            degree: 'Secondary School Certificate',
            institution: 'Govt. High School, Deval Jham Singh',
            period: '2021',
            cgpa: 'CGPA: 10.0',
            location: 'Hyderabad, India',
            icon: '🏫'
        }
    ];

    return (
        <section id="education" className="section education">
            <div className="container">
                <h2 className="section-title">Education</h2>

                <div className="timeline">
                    {educationData.map((edu, index) => (
                        <div key={index} className="timeline-item glass-card">
                            <div className="timeline-icon">{edu.icon}</div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3>{edu.degree}</h3>
                                    <span className="timeline-period">{edu.period}</span>
                                </div>
                                <h4>{edu.institution}</h4>
                                <div className="timeline-details">
                                    <span className="cgpa">{edu.cgpa}</span>
                                    <span className="location">📍 {edu.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
