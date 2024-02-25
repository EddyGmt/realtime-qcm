
const quizzes = [
    { id: 1, title: 'Quiz 1', questions: [1, 2, 3] },
    { id: 2, title: 'Quiz 2', questions: [4, 5, 6] },
    { id: 3, title: 'Quiz 3', questions: [7, 8, 9] }
];

// Function to fetch all quizzes
export const getAllQuizzes = () => {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve(quizzes);
        }, 1000);
    });
};


