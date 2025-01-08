import React from "react";
import styles from "./HeroStyles.module.css";
import Heroimg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterIconDark from "../../assets/twitter-light.svg";
import twitterIconLight from "../../assets/twitter-dark.svg";
import githubIconLight from "../../assets/github-light.svg";
import githubIconDark from "../../assets/github-dark.svg";
import linkedInLight from "../../assets/linkedin-light.svg";
import linkedInDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterIconDark : twitterIconLight;
  const githubIcon = theme === "light" ? githubIconLight : githubIconDark;
  const linkedIn = theme === "light" ? linkedInLight : linkedInDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={Heroimg} alt="Your Profile avatar" />
        <img
          onClick={toggleTheme}
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Piyush <br /> Kere
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com/piyush-devhub" target="_blank">
            <img src={githubIcon} alt="GitHub Icon" />
          </a>
          <a href="https://www.linkedin.com/in/piyush-kere-7a156828a/" target="_blank">
            <img src={linkedIn} alt="LinkedIn Icon" />
          </a>
        </span>

        <p className={styles.description}>
          Final year IT Grad with passion to learn Web Development and i build
          projects
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
