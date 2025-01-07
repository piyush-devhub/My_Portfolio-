import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import TapnDine from '../../assets/TapnDine_Logo.png';
import WeatherApp from '../../assets/WeatherApp_Logo.png';
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