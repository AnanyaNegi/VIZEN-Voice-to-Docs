import React, { useEffect } from "react";
import Listen from "./Components/Listen/Listen";
import { useSpeechSynthesis } from "react-speech-kit";


import "./App.css";

function App() {
    const { speak } = useSpeechSynthesis();
    useEffect(() => {
        speak("Hi I am HelpBot. I help People!");
        console.log("áctive");
    }, []);
    return (
        <div className="App">
            <Listen />
        </div>
    );
}

export default App;
