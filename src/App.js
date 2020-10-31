import { useState, useEffect } from "react";
import axios from "axios";

//import styled-components
import { Navbar } from "./styles/App-styles";
import { Theme, GlobalStyle } from "./styles/Theme";

const App = () => {
    // React Hooks
    const [starter, setStarter] = useState("test");

    // initial server request when app mounts to update state
    useEffect(() => {
        (async () => {
            const { data } = await axios("/api/starter");
            setStarter(data);
        })();
    }, []);

    //returning DOM elements
    return (
        <Theme>
            <GlobalStyle />
            {starter && <Navbar>{starter}</Navbar>}
        </Theme>
    );
};

export default App;
