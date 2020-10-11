import React, { useState, useRef } from "react";
import { useSpeechRecognition } from "react-speech-kit";
import "./listen.css";
import Generatepdf from '../Generatepdf';
function Example() {
    const [value, setValue] = useState("");
const[toggle , settoggle] = useState(false);



    const { listen, listening, stop } = useSpeechRecognition({
        onResult: (result) => {
            setValue(value + " " + result );
        },
    });
    const textAreaRef = useRef(null);

  

    return (
    <>
        {
            (toggle)?
        <Generatepdf text={value} />
        :
        <div>
     
            <div class="neon-head">
            
                <p id="code">V<span>I</span><span>ZE</span><span>N</span></p>
            </div>         
        <textarea
        maxLength="930"
            placeholder="What you say is displayed here..."
            rows="4"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            ref={textAreaRef}
        />
        <div className="row-flex">
            <button onMouseDown={listen} onMouseUp={stop}>
                Hold to Speak 🎤
            </button>
            {listening && <div style={{color:'white',fontSize:'2rem',fontWeigth:'700',}}>Go ahead I'm listening 😉</div>}
       
        <button className="gen" onClick={e=>settoggle(true)}>
                            Generate PDF
                        </button> </div>          
        </div>
        }
        
    </>
    );
}
export default Example;
