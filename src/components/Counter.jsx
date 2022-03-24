import { useState } from 'react';
import { MdMotionPhotosPause, MdOutlineNotStarted } from 'react-icons/md';

const Counter = () => {
  const [stopped, setStopped] = useState(false);

const onClick =(e) => {
  console.log('onclickstop/start')
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
        {/* <h1>{!countDownMin ? '00:00' : countDownMin}</h1> */}
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
