import React, { useState, useEffect } from 'react'

import './SpeechToText.css'

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from "react-use-clipboard";

const SpeechToText = () => {

    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration: 1000
    });

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Your browser does not </span>
    }
    // console.log(transcript);
    return (
        <div className='main-section' onClick={() => setTextToCopy(transcript)}>
            <div className='heading'>
                <h2>Speech to text </h2>
                <p>This is a speech recongnization app , that conver speecht to text</p>
            </div>
            <div className='section'>
                <div className='container'>
                    <div className='main-content'>
                        <p> {transcript}</p>
                    </div>
                    <div className='btns'>
                        <button className='btn' onClick={setCopied}>
                            {isCopied ? "Copied!!" : 'Copy'}
                        </button>
                        <button onClick={startListening} className="btn">Start</button>
                        <button onClick={SpeechRecognition.stopListening} className="btn">Stop</button>
                        <button onClick={resetTranscript} className="btn">Reset</button>
                    </div>
                </div>
            </div>
            <footer>
                <h4>Made By @Robo With 💛</h4>
            </footer>
        </div>
    )
}

export default SpeechToText

