import { useEffect, useRef } from 'react'
import styles from './UiVideo.module.css'
import cn from 'classnames'

const UiVideo = ({src, classes, playbackRate=1.0}) => {
    const videoRef = useRef(null);

    useEffect(() => {
        videoRef.current.playbackRate = playbackRate;
    }, [])

  return (
    <>
        <video 
            loop
            autoPlay
            muted
            ref={videoRef}
            className={cn(styles.video, classes)} 
        >
            <source src={src} />
        </video>
    </>
  )
}

export default UiVideo;
