import './App.css';
import { io } from 'socket.io-client';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizForm from "./components/QuizForm";
import QuestionList from "./components/QuestionList/QuestionList.jsx";
import AnswerOptions from "./components/AnswerOptions/AnswerOptions.jsx";


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

/*function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<JoinRoom socket={socket} />}></Route>
                    <Route path="/chat" element={<Room socket={socket} />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}*/

export default App;
