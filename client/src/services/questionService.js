
const questions = [
    { id: 1, text: 'Question 1', options: ['Option 1', 'Option 2', 'Option 3'], correctOption: 1 },
    { id: 2, text: 'Question 2', options: ['Option 1', 'Option 2', 'Option 3'], correctOption: 2 },
    { id: 3, text: 'Question 3', options: ['Option 1', 'Option 2', 'Option 3'], correctOption: 3 }
];


export const getAllQuestions = () => {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve(questions);
        }, 1000);
    });
};


