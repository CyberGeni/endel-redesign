import './App.css'
import Navbar from './components/Navbar'
import rays from './assets/rays.png'
import Main from './components/Main'
import SoundToggle from './components/SoundToggle'
import { useState } from 'react'
function App() {
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);

  const handleSoundToggle = (value) => {
    setIsSoundEnabled(value);
    console.log(soundSource)
  };

  const soundSource = '/src/assets/So-Far-So-Good.mp3';
  return (
    <>
      <div className="transition-all relative font-['Inter'] bg-[#00111C] bg-fixed min-h-screen">
        <img src={rays} className='absolute z-10 -top-6 w-full' alt="" />
        <Navbar />
        <Main />
        <SoundToggle onToggle={handleSoundToggle} soundSrc={soundSource} />
      </div>
    </>
  )
}

export default App
