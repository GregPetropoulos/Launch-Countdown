import React from 'react';
import London from '../London';
import SaltLakeCity from '../SaltLakeCity';
import NewYorkCity from '../NewYorkCity';
import Counter from '../Counter';
import CountDown from '../CountDown';

const Home = () => {
  return (
    <div className='container'>
      <h1>Countdown</h1>
      <main>
        <section>
          <CountDown />
        </section>
        <section>
          <small>Estimated deployment time</small>
          <London />
          <NewYorkCity />
          <SaltLakeCity />
        </section>
      </main>
    </div>
  );
};

export default Home;
