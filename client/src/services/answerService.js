
const answers = [
    { id: 1, questionId: 1, selectedOption: 2 },
    { id: 2, questionId: 2, selectedOption: 1 },
    { id: 3, questionId: 3, selectedOption: 3 }
];


export const submitAnswer = (answer) => {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            answers.push(answer);
            resolve(answer);
        }, 1000);
    });
};


