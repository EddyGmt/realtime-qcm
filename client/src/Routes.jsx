import {Route, Router} from "react-router-dom";
import JoinRoom from "./components/JoinRoom";
import Room from "./components/Room";

function Routes(){

    return(
        <Router>
            <Routes>
                <Route path="/" element={JoinRoom}/>
                <Route path="/salle/:roomId" element={Room}/>
            </Routes>
        </Router>
    );
}