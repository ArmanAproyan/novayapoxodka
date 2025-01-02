'use client'
import React from 'react';
import styles from './style.module.scss';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), {ssr: false});
const VideoPlayer: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <span>Где мы находимся</span>
      </div>
      <div className={styles.playerWrapper}>
        <ReactPlayer
          className={styles.player}
          url="https://www.youtube.com/watch?v=4cYwwam1QjA"
          controls
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};


export default VideoPlayer;
