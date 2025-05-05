import React, { useState, useEffect } from 'react';
import './TypingText.css'; // Import your CSS file for styling

export default function TypingText({ texts }) {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const typingSpeed = 100;

    useEffect(() => {
        let isCancelled = false;

        const runTyping = async () => {
            for (let i = 0; i < texts.length-1; i++) {
                if (isCancelled) return;

                await typeText(texts[i]);
                await new Promise(res => setTimeout(res, 1000)); 
                await deleteText();
                await new Promise(res => setTimeout(res, 300)); 
            }
            //Dont want to delete the last message.
            await typeText(texts[texts.length-1]);
        };

        runTyping();

        return () => {
            isCancelled = true;
        };
    }, [texts]);
    
    function typeText(text) {
        return new Promise((resolve) => {
            setIsTyping(true);
            let index = 0;
            let currentText = ''; 
            let id = setInterval(() => {
                currentText += text[index];
                setDisplayedText(currentText);
                index++;
                if (index >= text.length) {
                    clearInterval(id);
                    setIsTyping(false);
                    resolve();
                }
            }, typingSpeed);
        });
    }
    function deleteText() {
        return new Promise((resolve) => {
            setIsTyping(true);
            let id = setInterval(() => {
                setDisplayedText(prev => {
                    if (prev.length === 0) {
                        setIsTyping(false);
                        clearInterval(id);
                        resolve();
                        return '';
                    }
                    return prev.slice(0, -1);
                });
            }, typingSpeed); 
        });
    }
   
   

    return (
        <span className="typing-text">
          {displayedText}
          <span className={`cursor ${!isTyping ? 'blinking' : ''}`}>|</span>
        </span>
      );
}
