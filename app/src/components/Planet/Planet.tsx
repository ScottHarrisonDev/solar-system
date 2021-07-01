import React, { FC } from 'react';
import {ImageWrapper} from "../ImageWrapper/ImageWrapper";
import styles from './Planet.module.scss';

type PlanetProps = {
  name: string,
  picture: string,
  age: number,
  mass: string
}

const ageParser = (age: number): string => age.toLocaleString();

export const Planet: FC<PlanetProps> = ({ name, picture, age, mass }) => (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.name}>
          {name}
        </div>
        <ImageWrapper path={picture} alt={name} />
      </div>
      <div>
        <div>
          <span className={styles.statLabel}>Age:</span>
          <span>{ageParser(age)}</span>
        </div>
        <div>
          <span className={styles.statLabel}>Solar Mass:</span>
          <span>{mass}</span>
        </div>
      </div>
    </div>
);
