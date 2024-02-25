import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import QuizForm from './QuizForm';

test('renders quiz form with input fields', () => {
    render(<QuizForm />);
    const quizTitleInput = screen.getByPlaceholderText('Enter quiz title');
    expect(quizTitleInput).toBeInTheDocument();

    const addButton = screen.getByText('Add Question');
    expect(addButton).toBeInTheDocument();

    const saveButton = screen.getByText('Save Quiz');
    expect(saveButton).toBeInTheDocument();
});

test('adding a question to the quiz', () => {
    render(<QuizForm />);
    const addButton = screen.getByText('Add Question');
    fireEvent.click(addButton);

    
});

test('saving the quiz', () => {
    render(<QuizForm />);
    const saveButton = screen.getByText('Save Quiz');
    fireEvent.click(saveButton);

    
});
