import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import QuizForm from './components/QuizForm';
import AnswerOptions from './components/AnswerOptions';
import QuestionList from './components/QuestionList';
import Room from './components/Room';
import App from "./App";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/salle" component={Room} />
                <Route path="/quiz-form" component={QuizForm} />
                <Route path="/answer-options" component={AnswerOptions} />
                <Route path="/question-list" component={QuestionList} />
            </Switch>
        </Router>
    );
};

export default AppRouter;
