import {type FC} from 'react'
import { Outlet } from 'react-router-dom';

import styles from './destination.module.css';

interface DestinationProps {
    title: string,
    subtitle: string,
     image: string,
      description: string,
       distance: string,
        travelTime: string
}

export  const Destination:FC<DestinationProps> = ({ title, subtitle, image, description, distance, travelTime }) =>{
//   const { title, subtitle, image, description, distance, travelTime } = props;

  return (
    <section className={styles.main}>
      <div className={styles.titlePlanet}>
        <h2 className={styles.title}>{subtitle}</h2>
        <div className={styles.planet}>
          <img src={image} alt={title} />
        </div>
      </div>
      <div className={styles.textBoxAndOutlet}>
        <div className={styles.textBox}>
          <h1>{title}</h1>
          <p>{description}</p>
          <div>
            <hr className={styles.hr} />
          </div>
          <div className={styles.infoBox}>
            <div className={styles.leftInfo}>
              <p>AVG. DISTANCE</p>
              <h2>{distance}</h2>
            </div>
            <div className={styles.rightInfo}>
              <p>EST. TRAVEL TIME</p>
              <h2>{travelTime}</h2>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </section>
  );
}

