import { useEffect, useState } from "react";
import {io} from "socket.io-client";
const socket = io.connect('http://localhost:3001');

function Room() {
    const [userCount, setUserCount] = useState(0);

    useEffect(() => {
        // Écouter l'événement émis par le serveur pour mettre à jour le compteur d'utilisateurs
        socket.on("user_count_update", (count) => {
            setUserCount(count);
        });

        return () => {
            // Nettoyer l'écouteur lorsque le composant est démonté
            socket.off("user_count_update");
        };
    }, []);

    return (
        <>
            <h1>Room</h1>
            <p>Nombre de personnes connectées : {userCount}</p>
        </>
    );
}

export default Room;
