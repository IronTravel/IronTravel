import React, { useRef, useEffect } from 'react';

export const AudioPlayer = ({ audio, pause }) => {

    const player = useRef(null);

    useEffect(() => {
        const audioPlayer = player.current;

        if (audio) {
            audioPlayer.volume = 0;

            audioPlayer.pause();
            audioPlayer.src = audio;
            audioPlayer.play();

            const volumeInterval = setInterval(() => {
                audioPlayer.volume <= 0.3 ?
                    audioPlayer.volume += 0.02 :
                    clearInterval(volumeInterval);
            }, 500);
        } else {
            audioPlayer.pause();
        }

    }, [audio, pause])

    return (
        <audio ref={player}>
            <source />
        </audio>
    )
}