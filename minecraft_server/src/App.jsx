import styles from "./style";
import { Navbar, Hero, Stats, Footer } from "./components";

const App = () => (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} w-full`}>
          <Navbar/>
        </div>
      </div>

      <div className={` bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}></div>
            <Hero/>
      </div>

      <div className={` bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}></div>
            <Stats/>
            </div>
      <Footer/>
    </div>
  );

export default App