import { useState, useEffect, useRef } from 'react';

const useCounter = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isSpeed15, setIsSpeed15] = useState(false);
  const [isSpeed2, setIsSpeed2] = useState(false);
  const [defSpeed, setDefSpeed] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    let interval = null;
    console.log("TIMER in custom hook",timer);
    // *RUN TIMER
    if (isActive) {
      interval = setInterval(() => {
        setTimer((prevState) => prevState - 1);
      }, 1000);

      // * SPEED UP COUNTER 1.5x
      if (isSpeed15 && !isSpeed2 && !defSpeed) {
        clearInterval(interval);
        interval = setInterval(() => {
          setTimer((prevState) => prevState - 1);
        }, 1000 / 1.5);
      }

      // * SPEED UP COUNTER 2x
      if (isSpeed2 && !isSpeed15 && !defSpeed) {
        clearInterval(interval);
        interval = setInterval(() => {
          setTimer((prevState) => prevState - 1);
        }, 1000 / 2);
      }
      // * DEFAULT SPEED
      if (defSpeed && !isSpeed15 && !isSpeed2) {
        clearInterval(interval);
        interval = setInterval(() => {
          setTimer((prevState) => prevState - 1);
        }, 1000);
      }
    }

    //* TIMER BEING PAUSED
    else if (!isActive && timer !== 0) {
      clearInterval(interval);
    }

    // *VALIDATE STOP AT TIMER=0 AND REF=0 SET STATE 0 AND CLEARINTERVAL
    if (timer <= 0 || inputRef.current.value <= 0) {
      clearInterval(interval);
      setTimer(0);
    }

    
   
    
    // *CLEAN UP ON AFTER UNMOUNTED
    return () => clearInterval(interval);


  }, [, isActive, timer, inputRef, isPaused, defSpeed, isSpeed2, isSpeed15]);

  return {
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
    setIsSpeed15,
  };
};
export default useCounter;
