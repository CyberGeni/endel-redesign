// SoundToggle.js
import React, { useState, useEffect } from 'react';

const SoundToggle = ({ onToggle, soundSrc }) => {
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);
  const [audioPosition, setAudioPosition] = useState(0);
  const audioRef = React.createRef();

  useEffect(() => {
    const audio = audioRef.current;
    audio.currentTime = audioPosition;
  }, [audioPosition]);

  const handleToggle = () => {
    const updatedValue = !isSoundEnabled;
    setIsSoundEnabled(updatedValue);
    onToggle(updatedValue);

    const audio = audioRef.current;

    if (updatedValue) {
      console.log("Playing audio");
      audio.play().then(() => {
        console.log("Audio played successfully");
      }).catch(error => {
        console.error("Error playing audio:", error);
      });
    } else {
      console.log("Pausing audio");
      setAudioPosition(audio.currentTime); // Save the current playback position
      audio.pause();
      audio.currentTime = 0;
    }
  };

  return (
    <div>
      <label className='text-white fixed bottom-4 left-4'>
        Enable Sound
        <input
          type="checkbox"
          checked={isSoundEnabled}
          onChange={handleToggle}
        />
      </label>
      <audio ref={audioRef} loop>
        <source src={soundSrc} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default SoundToggle;
