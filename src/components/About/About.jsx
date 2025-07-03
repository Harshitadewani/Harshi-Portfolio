import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/harshii.jpg'; // Make sure this path is correct

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#f9fafb] py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1f2937] mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1f2937] mb-4 leading-tight">
            Harshita Dewani
          </h2>
          {/* Typing Skills */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#6366f1] leading-tight">
            <span className="text-[#1f2937]">I am a </span>
            <ReactTypingEffect
              text={[
                'MERN Stack Developer',
                'Frontend Enthusiast',
                'DSA Learner',
                'Creative Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#6366f1]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-[#6b7280] mb-10 mt-8 leading-relaxed">
            I am a passionate MERN Stack developer pursuing B.Tech in AI & ML.
            I love building full-stack applications with clean UI and smooth UX.
            I have created projects like LMS, UMS, Note App, Tic Tac Toe Game, and more.
            I enjoy solving problems and exploring new technologies in web development.
          </p>
          {/* Resume Button */}
          <a
            href="/Harshita_Dewani_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105 animate-pulse hover:animate-none"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 8px #8245ec, 0 0 8px #8245ec, 0 0 20px #a855f7',
            }}
          >
           Download Resume
          </a>
        </div>

        {/* Right Side - Photo */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-[#ddd6fe] rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Harshita Dewani"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(99,102,241,0.2)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
