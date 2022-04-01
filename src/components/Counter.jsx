import { useState } from 'react';
import { MdMotionPhotosPause, MdOutlineNotStarted } from 'react-icons/md';

const Counter = () => {
  const [stopped, setStopped] = useState(false);

const onClick =(e) => {
  setStopped(!stopped)
  if(stopped){
    // stop
    setInterval(()=> { 
    })
  }
  if(!stopped){
    // start
  }
}
  return (
    <div>
      <div>
        <button onClick={onClick}>
          {stopped ? <MdOutlineNotStarted /> : <MdMotionPhotosPause />}
        </button>
      </div>
      <button>1x</button>
      <button>1.5x</button>
      <button>2x</button>
    </div>
  );
};

export default Counter;
