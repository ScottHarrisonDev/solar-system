import React, { FC } from 'react';
import styles from './ImageWrapper.module.scss';

type ImageWrapperProps = {
  path: string,
  alt: string
}

export const ImageWrapper: FC<ImageWrapperProps> = ({ path, alt }) => (
    <div className={styles.wrapper}>
      <img className={styles.img} src={path} alt={alt} />
    </div>
);
