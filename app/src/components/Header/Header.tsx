import React, { FC } from 'react';
import styles from './Header.module.scss';

type HeaderProps = {
  title: string
}

export const Header: FC<HeaderProps> = ({ title }) => (
    <header className={styles.wrapper}>
      <h1 className={styles.h1}>{ title }</h1>
    </header>
);
