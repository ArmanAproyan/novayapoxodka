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
    <iframe
        className={styles.player}
        src="https://www.youtube.com/embed/4cYwwam1QjA?autoplay=1&modestbranding=1&showinfo=0&rel=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    </div>
  );
};

export default VideoPlayer;
