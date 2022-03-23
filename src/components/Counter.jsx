import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(48);

  return (
    <div>
        <div>
      <h1>{counter}</h1><button>startstopicon</button>
        </div>
        <button >1x</button>
        <button >1.5x</button>
        <button >2x</button>
    </div>
  );
};

export default Counter;
