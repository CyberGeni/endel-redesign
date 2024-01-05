// SoundToggle.js
import React, { useState, useEffect } from 'react';
import sound from '../assets/sound.png'
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
      <label className='fixed bottom-8 md:bottom-[7.5%] left-4 md:left-[5%] flex items-center gap-1 bg-gradient-to-b from-[#14B3C8] to-[#25D1E8] p-1 bg-clip-text text-base md:text-lg text-transparent font-medium tracking-tighter'>
        <img src={sound} className='w-5 sm:w-8' alt="" />
        {isSoundEnabled ? 'Disable' : 'Enable'} Sound
        <input
          type="checkbox"
          checked={isSoundEnabled}
          onChange={handleToggle}
          className='appearance-none'
        />
      </label>
      <audio ref={audioRef} loop>
        <source src={soundSrc} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default SoundToggle;
