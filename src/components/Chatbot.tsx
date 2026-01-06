import { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
}

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Hi! I'm Mahesh's AI assistant. Ask me about his projects, skills, or experience! 👋", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now(),
            text: inputValue,
            sender: 'user'
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');

        // Process response with a small delay to simulate thinking
        setTimeout(() => {
            const botResponse = getBotResponse(userMessage.text);
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                text: botResponse,
                sender: 'bot'
            }]);
        }, 600);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    const getBotResponse = (input: string): string => {
        const lowerInput = input.toLowerCase();

        // Greetings
        if (lowerInput.match(/\b(hi|hello|hey|greetings|morning|afternoon|evening)\b/)) {
            return "Hello! I'm Mahesh's AI assistant. I can tell you about his projects, skills, experience, and more from his resume.";
        }

        // Age / Personal / Hobbies / Languages
        if (lowerInput.match(/(age|old|born|birth|dob)/)) {
            return "Mahesh was born on 17 July 2004. He is a young professional passionate about technology.";
        }
        if (lowerInput.match(/(hobby|hobbies|interest|like)/)) {
            return "Mahesh enjoys Painting, Reading books, and Travelling in his free time.";
        }
        if (lowerInput.match(/(language|speak|tongue)/)) {
            return "Mahesh is fluent in English, Hindi, and Telugu.";
        }

        // Education
        if (lowerInput.match(/(education|college|study|degree|b\.?tech|cgpa|school)/)) {
            return "Education:\n• B.Tech in IT from Vidya Jyothi Institute of Technology (CGPA: 9.35)\n• Intermediate (MPC) from Royal Junior College (97.3%)\n• SSC from Govt. High School (CGPA: 10.0)";
        }

        // Experience
        if (lowerInput.match(/(experience|job|role|intern|work)/)) {
            return "Mahesh has experience as an AI-based Chatbot Frontend Developer. He also has operations handling experience, including supervising and time management in stores.";
        }

        // Projects (Updated with Twitter project)
        if (lowerInput.match(/(project|work|built|portfolio|created|list)/)) {
            return "Key Projects:\n1. AI-Based Chatbot for Greens & More\n2. Universal Campaign Marketing Insights (SQL, Power BI)\n3. Twitter Data Analysis (NLP & Sentiment Analysis)\n4. Plantation Chatbot";
        }

        // Skills (Expanded list)
        if (lowerInput.match(/(skill|tech|stack|language|python|react|sql|java|html|css|excel|tableau)/)) {
            return "Technical Skills:\n• Languages: Python, Java, C, SQL, JavaScript\n• Web: React.js, Node.js, HTML, CSS, Fast API\n• Data/Tools: Power BI, Tableau, Excel\n• Domain: NLP, AI/Chatbot Development";
        }

        // Contact / Socials
        if (lowerInput.match(/(contact|email|reach|hire|number|phone|github|linkedin)/)) {
            return "Contact:\n📞 +91 99596 08446\n📧 chintalamaheshbabu1005@gmail.com\n🔗 github.com/Mahesh1215-babu";
        }

        // Certifications
        if (lowerInput.match(/(cert|certificate|course|learn)/)) {
            return "Certifications:\n• Prompt Engineering (Great Learning)\n• Data Dive Datathon (Qlik)\n• Python Basic (HackerRank)\n• DBMS (NPTEL)\n• React JS (Simplilearn)";
        }

        // Objective / About
        if (lowerInput.match(/(who|about|bio|intro|objective|goal)/)) {
            return "Career Objective: Curious and eager to apply skills in a good work environment. Looking to face new challenges and contribute to organizational growth while continuously updating knowledge.";
        }

        // Default
        return "I'm not sure about that. You can ask about my Education, Experience, Projects, Skills, or Contact info!";
    };

    return (
        <div className="chatbot-container">
            {!isOpen && (
                <button
                    className="chatbot-toggle"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open chat"
                >
                    💬
                </button>
            )}

            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <h3>Portfolio Assistant</h3>
                        <button
                            className="close-btn"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close chat"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="chatbot-messages">
                        {messages.map(msg => (
                            <div key={msg.id} className={`message ${msg.sender}`}>
                                {msg.text.split('\n').map((line, i) => (
                                    <div key={i}>{line}</div>
                                ))}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="chatbot-input">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask me anything..."
                        />
                        <button
                            className="send-btn"
                            onClick={handleSend}
                            disabled={!inputValue.trim()}
                        >
                            ➤
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
