import { BrainCircuit, Brush, Cog } from "lucide-react";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 lg:px-20 relative flex flex-col items-center"
    >
      <div className="container mx-auto max-w-6xl md:max-w-7xl lg:max-w-8xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center px-2 md:px-10">
          About <span className="text-primary"> Me</span>
        </h2>

        {/* CENTERED grid! */}
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-5 gap-1 items-start justify-center">
          {/* Center the content columns */}
          <div className="lg:col-span-3 space-y-6 md:pr-8 lg:pr-12 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-center lg:text-left">
              Level Designer & Environment Artist
            </h3>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-center lg:text-left">
                Hey! I'm a Level Designer & Environment Artist with a passion for crafting game worlds that feel alive.
                I've been working with Unreal Engine 5 for over a year, creating environments that are not just beautiful,
                but meaningful to explore and play through.
              </p>

              <p className="text-muted-foreground leading-relaxed text-center lg:text-left">
                I'm deeply inspired by games like <em>Sekiro</em>, <em>Ghost of Tsushima</em>, and <em>Elden Ring</em>—especially their use
                of environmental storytelling, mood, and spatial design. I love designing fantasy worlds with a strong Japanese
                aesthetic: ancient temples, misty mountains, overgrown shrines, and hidden paths that reward curiosity.
              </p>

              <p className="text-muted-foreground leading-relaxed text-center lg:text-left">
                For me, great level design isn't just about where players go — it's about how the world makes them <em>feel</em> while they're there.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 gap-8 md:pl-8 lg:pl-12">
            <div className="gradient-border p-6 md:p-7 lg:p-8 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brush className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Environment design</h4>
                  <p className="text-muted-foreground">
                    Possess foundational knowledge in environment design for games using Unreal Engine.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 md:p-7 lg:p-8 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cog className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Level Design</h4>
                  <p className="text-muted-foreground">
                    Level Designer skilled in crafting immersive game environments and engaging gameplay using Unreal Engine.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 md:p-7 lg:p-8 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Logical Thinking</h4>
                  <p className="text-muted-foreground">
                    Skilled in problem-solving for game development using Blueprint visual scripting in Unreal Engine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
