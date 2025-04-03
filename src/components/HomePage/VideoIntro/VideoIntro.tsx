import { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import Container from "../../Reusable/Container/Container";
import SectionHeading from "../../Reusable/SectionHeading/SectionHeading";
import { VIDEOS } from "../../../assets";

const VideoIntro = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  const handleEnd = () => {
    setIsPlaying(false);
  };

  return (
    <Container>
      <div className="mt-28 text-center relative">
        <SectionHeading
          subHeading="A Glimpse Into My Work"
          heading="🚀 My Journey as a MERN Frontend Developer"
        />
        <p className="text-[#939393] font-Poppins text-[12px] md:text-base font-normal max-w-[800px] text-center mx-auto">
          Watch this short video to get an insight into my skills, projects, and
          passion for crafting seamless, high-performance web applications.
          Let’s build something amazing together! Let me know if you need any
          tweaks! 🎬🔥
        </p>
        <div className="relative mt-8 w-full max-w-5xl mx-auto">
          {/* Video */}
          <video
            ref={videoRef}
            src={VIDEOS.intro}
            className="w-full rounded-lg"
            onEnded={handleEnd}
            controls={isPlaying}
          />

          {/* Play Button */}
          {!isPlaying && (
            <motion.button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 1, opacity: 0.8 }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-800 shadow-lg">
                <FaPlay className="text-white text-3xl" />
              </div>
            </motion.button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default VideoIntro;
