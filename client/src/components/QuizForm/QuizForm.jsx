import React, { useState } from 'react';

function QuizForm() {
    const [difficulty, setDifficulty] = useState('easy');
    const [numberOfQuestions, setNumberOfQuestions] = useState(5);
    const [category, setCategory] = useState('9');

    const handleDifficultyChange = (e) => {
        setDifficulty(e.target.value);
    };

    const handleNumberOfQuestionsChange = (e) => {
        setNumberOfQuestions(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
    };

    return (
        <div>
            <h2>Configuration du Quiz</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Difficulté:
                    <select value={difficulty} onChange={handleDifficultyChange}>
                        <option value="easy">Facile</option>
                        <option value="medium">Moyen</option>
                        <option value="hard">Dur</option>
                    </select>
                </label>
                <br />
                <label>
                    Nombre de Questions:
                    <input type="number" value={numberOfQuestions} onChange={handleNumberOfQuestionsChange} />
                </label>
                <br />
                <label>
                    Catégories:
                    <input type="text" value={category} onChange={handleCategoryChange} />
                </label>
                <br />
                <button type="submit">Commencer le Quiz</button>
            </form>
        </div>
    );
}

export default QuizForm;
