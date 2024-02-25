import './App.css';
import { io } from 'socket.io-client';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizForm from "./components/QuizForm";
import AnswerOptions from "./components/AnswerOptions";
import QuestionList from "./components/QuestionList";
import Room from "./components/Room";

const socket = io.connect('http://localhost:3001');

function App() {
    const [userName, setUserName] = useState("");
    const [room, setRoom] = useState("");
    const navigate = useNavigate();

    const joinRoom = () => {
        if (userName !== "" && room !== "") {
            socket.emit("join_room", room);
            navigate('/salle');
        }
    }

    return (
        <div className="App">
            <QuizForm />
            <QuestionList />
            <AnswerOptions />
            <br></br>
            <h1>Rejoignez la salle pour commencer le QCM</h1>
            <input type="text" placeholder="Entrez votre nom" onChange={(event) => {
                setUserName(event.target.value)
            }}/>
            <input type="text" placeholder="N° de la salle" onChange={(event) => {
                setRoom(event.target.value)
            }}/>
            <button onClick={joinRoom}>Rejoindre la salle</button>
        </div>
    );
}

export default App;
