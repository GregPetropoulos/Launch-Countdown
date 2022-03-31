
import CountDown from '../CountDown';
// import TimeZone from '../TimeZone';
const Home = () => {
  return (
    <div className='container'>
      <h1>Countdown Counter</h1>
      <main>
        <section>
          <CountDown />
        </section>
        {/* <section>
          <small>Estimated deployment time</small>
        <TimeZone/>
        </section> */}
      </main>
    </div>
  );
};

export default Home;
