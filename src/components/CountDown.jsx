import { useState, useEffect, useRef } from 'react';
// import Counter from './Counter';
import { MdMotionPhotosPause, MdOutlineNotStarted } from 'react-icons/md';

const CountDown = () => {
  // format MM:SS use should be able to start the countdown in minutes
  // const [seconds, setSeconds] = useState(0);
  // const [minutes, setMinutes] = useState(0);
  const [timer, setTimer] = useState(0);

  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const inputref = useRef('');

  useEffect(() => {
    console.log('useEfect in effect');

    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTimer((prevState) => prevState - 1);
      }, 1000);
    } else if (!isActive && timer !== 0) {
      clearInterval(interval);
    }
    // Stop interval and state at 0
    if (timer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  const onChange = (e) => {
    // const showMin = Math.floor(e.target.value/60)%60

    setTimer(~~e.target.value);

    // setSeconds(~~e.target.value);
  };
  // console.log('minutes', minutes);
  // console.log('seconds', seconds);
  console.log('timer', timer);

  //   Initialize the count down timer and pass to counter formatted
  const onCountDown = (e) => {
    console.log('clicked');
    setIsActive(!isActive);
  };

  const onOffCounter =() => {
    console.log('onOffounter');
    setIsActive(!isActive);
    setIsPaused(true) //TODO STOPPED HERE WORK ON/OFF
  }
  //TODO SPEED BUTTONS
  //TODO DEPLOYMENT DATE ADJUSTEMENTS


  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minute = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minute % 60}`.slice(-2);
    console.log('getMinutes', getMinutes);
    console.log('getSeconds', getSeconds);

    // const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
    return `${getMinutes} : ${getSeconds}`;
  };

  console.log(formatTime());
  return (
    <div className='countDownWrapper'>
      <label className='countDownLabel'>Count Down:</label>

      <input
        type='text'
        value={timer}
        onChange={onChange}
        placeholder='(Min)'
      />
      {!isActive && <button onClick={onCountDown}>Start</button>}
      {isActive && <button disabled>Start</button>}

      {/* Counter */}
      {/* <Counter /> */}
      <div>
        <h1>{!isActive ? '00 : 00' : formatTime()}</h1>
        <button onClick={onOffCounter}>
          {isActive ? <MdOutlineNotStarted /> : <MdMotionPhotosPause />}
        </button>
      </div>
      <div>
        <button>1x</button>
        <button>1.5x</button>
        <button>2x</button>
      </div>
    </div>
  );
};

export default CountDown;
