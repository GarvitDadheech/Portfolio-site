import '../styles/Project.css';
import ProjectCard from './ProjectCard';
function Project() {
    const data = [
        {
          title: "GeoGeniusQuiz",
          description: "A quiz taking website",
          techStack: "HTML , CSS , JavaScript",
          linkCode: "https://github.com/GarvitDadheech/GeoGeniusQuiz",
          linkDemo: "https://garvitdadheech.github.io/GeoGeniusQuiz/",
          Img: "https://dev-portfolio-template.netlify.app/static/media/one.a3146128.svg",
        },
        {
          title: "Wall Panel Placing",
          description: "Placing wall panels on walls using meta quest",
          techStack: "Unity, C#",
          linkCode: "https://github.com/GarvitDadheech/WallPanelPlacingOnWall-POC",
          linkDemo: "https://github.com/GarvitDadheech/WallPanelPlacingOnWall-POC",
          Img: "https://dev-portfolio-template.netlify.app/static/media/two.721a0672.svg",
        },
        {
          title: "Image Compressor",
          description:
            "An image compressor which compresses images.",
          techStack: "Python, Numpy",
          linkCode: "https://github.com/GarvitDadheech/Image-Compression",
          linkDemo: "https://github.com/GarvitDadheech/Image-Compression",
          Img: "https://dev-portfolio-template.netlify.app/static/media/three.d4f751d1.svg",
        },
      ];
      return (
        <div className="ProjectSectionParent" id="Project">
            {/* <div className='project-head'> */}
                <h1>Projects</h1>
            {/* </div> */}
          <div className="ProjectSection">
            {data.map((item, index) => (
              <ProjectCard key={index} data={item} />
            ))}
          </div>
        </div>
      );
}
export default Project;