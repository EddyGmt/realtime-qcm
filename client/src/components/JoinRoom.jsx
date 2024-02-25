import {useState} from "react";


function JoinRoom() {
    const [userName, setUserName] = useState("");
    const [room, setRoom] = useState("");

    const joinRoom = () => {
        if(userName !== ""){
            socket.emit("join_room", room);
        }
    }
    return (<>
        <h1>Rejoignez la salle pour commencer le QCM</h1>
        <input type="text" placeholder="Entrez votre nom" onChange={(event) => {
            setUserName(event.target.value)
        }}/>
        <button onClick={joinRoom}>Rejoindre la salle</button>
    </>);
}

export default JoinRoom;