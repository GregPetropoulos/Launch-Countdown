import { MdMotionPhotosPause, MdOutlineNotStarted } from 'react-icons/md';
import useCounter from './hooks/useCounter';
// import TimeZone from './TimeZone';
import DeploymentTime from './DeploymentTime';


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
    setIsSpeed2(!isSpeed2);
    setIsSpeed15(false);
    setDefSpeed(false);
  };

  // *SECONDS CONVERSION FOR COUNTER DISPLAY
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
    if (timer < 60 * 60) {
      return `${m}:${s}`;
    } else {
      return `${h}:${m}:${s}`;
    }
  };
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
          <button className='disabled-btn'  alt='disabled start button'disabled>
            START
          </button>
        ) : (
          <button className='start-button' alt='start button' onClick={onCountDown}>
            START
          </button>
        )}
      </div>
      <div className='clock-wrapper'>
        <div className='end-half-message'>
          {timer === 0 && isActive && <h2>Time's up!</h2>}
          {timer > 0 && (~~inputRef.current.value * 60) / 2 === timer && (
            <h2>More than halfway there!</h2>
          )}
        </div>
        <div className='counter-button-wrapper'>
          <h1
            className={
              isActive && timer <= 20 && timer > 10
                ? 'countdown-20'
                : isActive && timer <= 10 && timer > 0
                ? 'countdown-blink'
                : 'clock-counter'
            }>
            {!isActive && !isPaused ? '00 : 00' : secondsToTime(timer)}
          </h1>
          <button className='stop-start-btn'  alt='stop and pause button' onClick={onOffCounter}>
            {isActive ? (
              <MdOutlineNotStarted size={65} />
            ) : (
              <MdMotionPhotosPause size={65} />
            )}
          </button>
        </div>
      </div>

      {/* **TODO COULD DRY THIS UP  */}
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

<DeploymentTime/>


        {/* <TimeZone
          timer={timer}
          isActive={isActive}
        /> */}
      </section>
    </div>
  );
};

export default CountDown;
