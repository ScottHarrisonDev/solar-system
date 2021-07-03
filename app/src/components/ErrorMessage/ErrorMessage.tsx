import React, { FC } from 'react';
import styles from './ErrorMessage.module.scss';

type ErrorMessageProps = {
  message: string
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => (
    <div className={styles.wrapper}>
      {message}
    </div>
);
