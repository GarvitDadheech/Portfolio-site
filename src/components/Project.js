import '../styles/Project.css';
import ProjectCard from './ProjectCard';
function Project() {
    const data = [
        {
          title: "AI customer support chatbot",
          description: "An AI chatbot which can answer hotel related queries.",
          techStack: "JavaScript, Axios, Node.js",
          linkCode: "https://github.com/GarvitDadheech/AI-ChatbotForHotels",
          linkDemo: "https://github.com/GarvitDadheech/AI-ChatbotForHotels",
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
          title: "Speed Type Game",
          description:
            "A speed type game which can tell your typing speed.",
          techStack: "Html, Css, JavaScript",
          linkCode: "https://github.com/GarvitDadheech/Speed-Type",
          linkDemo: "hhttps://garvitdadheech.github.io/Speed-Type/",
          Img: "https://dev-portfolio-template.netlify.app/static/media/three.d4f751d1.svg",
        },
      ];
      return (
        <div className="ProjectSectionParent" id="Project">
            {/* <div className='project-head'> */}
                <h1 className='project-heading'>Projects</h1>
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