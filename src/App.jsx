import React, { useState, useRef } from 'react';
import './App.css';
import celebrationGif from './gif/YESS.gif';

function App() {
  const [accepted, setAccepted] = useState(false);
  const [yesButtonScale, setYesButtonScale] = useState(1);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });
  const [noHovered, setNoHovered] = useState(false);
  const buttonContainerRef = useRef(null);

  const handleNoHover = () => {
    // Get the container dimensions
    const container = buttonContainerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const buttonWidth = 120; // Approximate button width
    const buttonHeight = 50; // Approximate button height

    // Calculate random movement within bounds
    const maxLeft = containerRect.width - buttonWidth - 40; // 40px padding
    const maxTop = containerRect.height - buttonHeight - 20; // 20px padding

    const randomLeft = Math.random() * maxLeft;
    const randomTop = Math.random() * maxTop;

    setNoButtonPosition({ top: randomTop, left: randomLeft });
    
    // Increase Yes button size by 0.2 (which is 20%)
    setYesButtonScale(prev => prev + 0.2);
    
    // Mark that No button has been hovered
    if (!noHovered) {
      setNoHovered(true);
    }
  };

  const handleYesClick = () => {
    setAccepted(true);
  };

  return (
    <div className="App">
      <div className="card">
        {!accepted ? (
          <>
            <div className="heart-icon">💕</div>
            <h1 className="question">Washielah,</h1>
            <h2 className="subtext">Will You Be My Valentine?</h2>
            <p className="message">
              You make every day special, and I'd love to celebrate this Valentine's Day with you! 💝
            </p>
            <div className="button-container" ref={buttonContainerRef}>
              <button
                className="yes-button"
                onClick={handleYesClick}
                style={{ transform: `scale(${yesButtonScale})` }}
              >
                Yes! 💖
              </button>
              <button
                className="no-button"
                onMouseEnter={handleNoHover}
                onClick={handleNoHover}
                style={
                  noButtonPosition.top === 0 && noButtonPosition.left === 0
                    ? {} // Initial position (normal layout)
                    : {
                        position: 'absolute',
                        top: `${noButtonPosition.top}px`,
                        left: `${noButtonPosition.left}px`,
                        transition: 'all 0.3s ease'
                      }
                }
              >
                No
              </button>
            </div>
            {noHovered && (
              <p className="hint-message">I don't think the no likes you 😐</p>
            )}
          </>
        ) : (
          <div className="success">
            <h1 className="yay">Finally, Yay!! 🎉</h1>
            <p className="success-message">See you on the 14th Feb ye lucky lady 😏</p>
            <div className="gif-placeholder">
              <img 
                src={celebrationGif} 
                alt="Celebration" 
                className="celebration-gif"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
