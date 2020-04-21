import React, { useRef, useEffect } from 'react';

export const AudioPlayer = ({ audio }) => {

    const player = useRef(null);

    useEffect(() => {
        if (audio) {
            const audioPlayer = player.current;
            audioPlayer.volume = 0;

            audioPlayer.pause();
            audioPlayer.src = audio;
            audioPlayer.play();

            const volumeInterval = setInterval(() => {
                audioPlayer.volume <= 0.5 ?
                    audioPlayer.volume += 0.1 :
                    clearInterval(volumeInterval);
            }, 1000);

        }
    }, [audio])

    return (
        <audio ref={player}>
            <source />
        </audio>
    )
}