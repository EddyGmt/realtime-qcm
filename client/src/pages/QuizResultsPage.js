import React, { useEffect, useState } from 'react';
import { getQuizResults } from '../services/quizService';

const QuizResultsPage = () => {
    const [quizResults, setQuizResults] = useState(null);

    useEffect(() => {
        const fetchQuizResults = async () => {
            try {
                const results = await getQuizResults();
                setQuizResults(results);
            } catch (error) {
                console.error('Error fetching quiz results:', error);
            }
        };
        fetchQuizResults();
    }, []);

    if (!quizResults) {
        return <div>Chargement...</div>;
    }

    return (
        <div>
            <h1>Résultats du Quiz</h1>
            {/* Display quiz results data here */}
        </div>
    );
};

export default QuizResultsPage;
