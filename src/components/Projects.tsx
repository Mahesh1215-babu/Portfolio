import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'AI-Based Chatbot for Greens & More Company',
            description: 'An AI-powered chatbot designed to provide instant customer support for Greens & More Company by answering queries related to products, orders, nutrition, and services. It uses NLP and machine learning to deliver accurate, real-time responses and improve customer engagement.',
            tech: ['Python', 'NLP', 'Machine Learning'],
            icon: '🤖'
        },
        {
            title: 'Universal Campaign Marketing Insights & Visualization',
            description: 'This project analyzes multi-channel campaign data to uncover customer behavior, campaign effectiveness, and ROI. Interactive dashboards and visualizations help decision-makers track KPIs, compare campaigns, and optimize marketing strategies using data-driven insights.',
            tech: ['SQL', 'Power BI', 'Data Analysis'],
            icon: '📊'
        },
        {
            title: 'Plantation Chatbot',
            description: 'The Plantation Chatbot is an AI-powered assistant that provides instant guidance on tree plantation, plant care, watering schedules, and environmental benefits. It improves awareness and supports sustainable practices through simple, conversational interactions.',
            tech: ['Python', 'AI'],
            icon: '🌱'
        }
    ];

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title">Projects</h2>

                <div className="projects-grid grid grid-3">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card glass-card">
                            <div className="project-icon">{project.icon}</div>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tech-stack">
                                {project.tech.map((tech, idx) => (
                                    <span key={idx} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
