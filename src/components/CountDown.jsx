import { MdMotionPhotosPause, MdOutlineNotStarted } from 'react-icons/md';
import useCounter from './hooks/useCounter';
import TimeZone from './TimeZone';
const CountDown = () => {
  const {
    isActive,
    setIsActive,
    timer,
    setTimer,
    setIsPaused,
    inputRef,
    isPaused,
    defSpeed,
    setDefSpeed,
    isSpeed2,
    setIsSpeed2,
    isSpeed15,
    setIsSpeed15
  } = useCounter();

  //* START THE COUNTDOWN
  const onCountDown = () => {
    setIsActive(!isActive);
    setTimer(inputRef.current.value * 60);
  };
  // * PLAY AND RESUME
  const onOffCounter = () => {
    setIsActive(!isActive);
    setIsPaused(!isPaused);
  };

  //* SPEED OF COUNTER CLICK EVENT HANDLE BY BOOLEAN LOGIC
  const defaultSpeed = () => {
    setDefSpeed(!defSpeed);
    setIsSpeed2(false);
    setIsSpeed15(false);
  };

  const speedUp15 = () => {
    setIsSpeed15(!isSpeed15);
    setIsSpeed2(false);
    setDefSpeed(false);
  };

  const speedUp2 = () => {
    // console.log('speedup2');
    setIsSpeed2(!isSpeed2);
    setIsSpeed15(false);
    setDefSpeed(false);
  };

  //TODO DEPLOYMENT DATE ADJUSTMENTS
  // TODO STYLE
  // TODO TOAST
  // TODO REFACTOR
  // TODO TEST
  // TODO OPTOMIZE

  const secondsToTime = (...sec) => {
    let h = Math.floor(sec / 3600)
      .toString()
      .padStart(2, '0');
    let m = Math.floor((sec % 3600) / 60)
      .toString()
      .padStart(2, '0');
    let s = Math.floor(sec % 60)
      .toString()
      .padStart(2, '0');
    return `${h}:${m}:${s}`;
  };
  console.log('TIMER Countdown.jsx', timer);
  // console.log(formatTime());
  // console.log('inputRef', inputRef.current.value);
  // console.log('inputRef', inputRef);
  // console.log('isSpeed15', isSpeed15);
  // console.log('isSpeed2', isSpeed2);
  // console.log('defSpeed', defSpeed);
  return (
    <div className='countDownWrapper'>
      <div className='label-input-wrapper'>
        <label className='countDownLabel'>Count Down:</label>

        <input
          type='number'
          ref={inputRef}
          placeholder='(Min)'
          min='0'
          required
        />
        {isActive || timer <= -1 || isPaused ? (
          <button className='disabled-btn' disabled>
            START
          </button>
        ) : (
          <button className='start-button' onClick={onCountDown}>
            START
          </button>
        )}
      </div>

      {/* Counter */}
      {/* <Counter /> */}
      <div className='clock-wrapper'>
        <div className='end-half-message'>
          {timer === 0 && isActive &&
            <p>Time's up!</p>}

            {(timer>0 && timer/2==timer)&& <p>“More than halfway there!”</p>}
{timer/2}

        </div>
        {/* TODO need to add a   : “More than halfway there!” */}
        {/* {inputRef.current === timer && <p>More than halfway there!</p>} */}
        {/* <div className='clock-wrapper'> */}
        <div>
          <h1 className='clock-counter'>
            {!isActive && !isPaused ? '00 : 00' : secondsToTime(timer)}
          </h1>
        </div>
        <button className='stop-start-btn' onClick={onOffCounter}>
          {isActive ? (
            <MdOutlineNotStarted size={85} />
          ) : (
            <MdMotionPhotosPause size={85} />
          )}
        </button>
      </div>
      <div className='speed-btn-wrapper' alt='speed-button'>
        {defSpeed ? (
          <button className='speed-btn' alt='speed-button' disabled>
            1X
          </button>
        ) : (
          <button
            className='speed-btn'
            alt='speed-button'
            onClick={defaultSpeed}>
            1X
          </button>
        )}
        {isSpeed15 ? (
          <button className='speed-btn' alt='speed-button' disabled>
            1.5X
          </button>
        ) : (
          <button className='speed-btn' alt='speed-button' onClick={speedUp15}>
            1.5X
          </button>
        )}
        {isSpeed2 ? (
          <button className='speed-btn' alt='speed-button' disabled>
            2X
          </button>
        ) : (
          <button className='speed-btn' alt='speed-button' onClick={speedUp2}>
            2X
          </button>
        )}
      </div>
      <section>
        <TimeZone
          timer={timer}
          secondsToTime={secondsToTime}
          isPaused={isPaused}
          isActive={isActive}
        />
      </section>
    </div>
  );
};

export default CountDown;
