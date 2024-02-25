import { createQuiz, getQuizById } from './quizService';


jest.mock('axios', () => ({
    post: jest.fn(),
    get: jest.fn(),
}));

describe('createQuiz', () => {
    it('should create a new quiz', async () => {
        
        const mockResponse = { data: { id: '123', title: 'Sample Quiz' } };
        axios.post.mockResolvedValueOnce(mockResponse);

        const quizData = { title: 'Sample Quiz', questions: [] };
        const result = await createQuiz(quizData);

        expect(result).toEqual(mockResponse.data);
        expect(axios.post).toHaveBeenCalledWith('/api/quiz', quizData);
    });

    it('should handle errors during quiz creation', async () => {
        
        axios.post.mockRejectedValueOnce(new Error('Failed to create quiz'));

        const quizData = { title: 'Sample Quiz', questions: [] };
        await expect(createQuiz(quizData)).rejects.toThrow('Failed to create quiz');
    });
});

describe('getQuizById', () => {
    it('should fetch a quiz by its ID', async () => {
        
        const mockResponse = { data: { id: '123', title: 'Sample Quiz' } };
        axios.get.mockResolvedValueOnce(mockResponse);

        const quizId = '123';
        const result = await getQuizById(quizId);

        expect(result).toEqual(mockResponse.data);
        expect(axios.get).toHaveBeenCalledWith(`/api/quiz/${quizId}`);
    });

    it('should handle errors during quiz fetching', async () => {
        
        axios.get.mockRejectedValueOnce(new Error('Failed to fetch quiz'));

        const quizId = '123';
        await expect(getQuizById(quizId)).rejects.toThrow('Failed to fetch quiz');
    });
});
