import { useState } from 'react';
import './Certifications.css';

const Certifications = () => {
    const [showAll, setShowAll] = useState(false);

    const certifications = [
        'Certified in Prompt Engineering for ChatGPT through the Great Learning on 2024',
        'Certified in Data Dive Datathon through the Qlik on 2024',
        'Certified in Python (Basic) through the HackerRank on 2025',
        'Certified in DBMS through the NPTEL on 2025',
        'Certified in React JS through the Simplilearn on 2025'
    ];

    const displayedCerts = showAll ? certifications : certifications.slice(0, 6);

    return (
        <section id="certifications" className="section certifications">
            <div className="container">
                <h2 className="section-title">Certifications</h2>

                <div className="cert-grid grid grid-2">
                    {displayedCerts.map((cert, index) => (
                        <div key={index} className="cert-card glass-card">
                            <div className="cert-icon">🏆</div>
                            <p>{cert}</p>
                        </div>
                    ))}
                </div>

                {certifications.length > 6 && (
                    <div className="show-more-container">
                        <button
                            className="btn btn-outline"
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? 'Show Less' : `Show All (${certifications.length})`}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Certifications;
