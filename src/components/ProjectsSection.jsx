import { ArrowRight, HardDriveUpload, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Door environment design",
    description: "A environment design created in Unreal Engine featuring a mysterious, weathered door set within dense, overgrown cave foliage, evoking an atmosphere of hidden adventure and discovery",
    image: "/projects/CinematicsDoor.jpeg",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: " Torii gate environment",
    description:
      "A environment design created in Unreal Engine showing sunlight illuminating ancient stone steps leading up to a traditional red torii gate, framed by dense forest foliage for dramatic atmosphere",
    image: "/projects/Torii.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Box Puzzle Game",
    description:
      "The game features a cube as the main player character, where the primary objective is to solve puzzles and successfully complete each level to progress through the game.",
    image: "/projects/PuzzleGame.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
    {
    id: 3,
    title: "Box Runner Game",
    description:
      "This level-based game features a box-shaped player that moves continuously forward, with players controlling left and right movements to skillfully avoid obstacles and reach the finish line in each distinct stage.",
    image: "/projects/Box Collision.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
    {
    id: 3,
    title: "First Person Shooter Mechanics",
    description:
      "A simple first-person shooter was developed, integrating Chaos physics to create dynamic interactions",
    image: "/projects/FirstPersonShooter.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
   
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                
                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};
