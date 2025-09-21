"use client";

import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

import { useMusicStore } from "@/components/libs/stores/music.store";

const bgMusic = "/bg_music.mp3";

export default function MusicBtn() {
  const { isMusic, setMusic } = useMusicStore();
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const audioElement = new Audio(bgMusic);
    audioElement.loop = true;
    setAudio(audioElement);

    return () => {
      audioElement.pause();
      audioElement.currentTime = 0; // Reset audio
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !audio) return;

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden" || !isMusic) {
        audio.pause();
      } else if (isMusic) {
        audio.play();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup listener on unmount
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isMusic, audio]);

  useEffect(() => {
    if (typeof window === "undefined" || !audio) return;

    if (isMusic && document.visibilityState === "visible") {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isMusic, audio]);

  return (
    <button
      onClick={() => setMusic(!isMusic)}
      className={`${isMusic ? "animate-bounce" : ""} bg-white fixed right-5 xxs:right-10 bottom-16 z-50 p-2 text-xl xxs:text-3xl rounded-full shadow-md`}
    >
      {isMusic ? (
        <Icon icon="icon-park-twotone:pause-one" />
      ) : (
        <Icon icon="icon-park-twotone:play" />
      )}
    </button>
  );
}
