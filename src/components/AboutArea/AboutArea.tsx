import React, { FC } from 'react';
import styles from './AboutArea.module.scss';

interface AboutAreaProps {}

const AboutArea: FC<AboutAreaProps> = () => (
  <div className={styles.AboutArea}>
    AboutArea Component
  </div>
);

export default AboutArea;
