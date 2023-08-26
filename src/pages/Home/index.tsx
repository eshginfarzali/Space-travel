import {Link} from 'react-router-dom'
import  {type FC} from 'react';
import styles from './home.module.css';

export const Home:FC = () => {
  return (
    <>
      <section className={styles.main}>
        <div className={styles.spaceExplore}>
          <div className={styles.space}>
            <p>SO, YOU WANT TO TRAVEL TO</p>
            <h1>SPACE</h1>
            <div>
              <span>
                Let’s face it; if you want to go to space, 
                you might as well genuinely go to outer space and
                 not hover kind of on the edge of it. Well sit back, 
                 and relax because we’ll give you a truly out of 
                 this world experience!
              </span>
            </div>

          </div>
           <Link to='./destination/moon'>
          <div className={styles.explore}>
            <p>
           EXPLORE
              </p>

          </div>
           </Link>

        </div>

      </section>
    </>
  );
};
