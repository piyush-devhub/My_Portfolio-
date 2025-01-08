import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import TapnDine from '../../assets/TapNDine.png';
import GeminiLogo from '../../assets/GeminiLogo.png';
import WeatherApp from '../../assets/WeatherApp.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={TapnDine}
          link="https://github.com/piyush-devhub/Tap-N-Dine"
          h3="TapnDine"
          p="MERN Food Ordering App"
        />
        <ProjectCard
          src={GeminiLogo}
          link="https://github.com/piyush-devhub/Gemini-Clone"
          h3="Gemini Clone"
          p="GeminiAPI Integration"
        />
        <ProjectCard
          src={WeatherApp}
          link="https://github.com/piyush-devhub/Weather_App-Mini_Project_1-"
          h3="Weather App"
          p="WeatherAPI Integration"
        />
      </div>
    </section>
  );
}

export default Projects;
