import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "Godot", category: "game development" },
  { name: "Gamemaker",  category: "game development" },
  { name: "GDvelop",  category: "game development" },


  // Backend
  { name: "Python",  category: "desenvolvimento de software" },
  { name: "C++",  category: "desenvolvimento de software" },
  { name: "HTML/CSS", category: "desenvolvimento de software" },
  { name: "Java",  category: "desenvolvimento de software" },
  { name: "JavaScript",  category: "desenvolvimento de software" },
  { name: "Java",  category: "desenvolvimento de software" },
  { name: "React",  category: "desenvolvimento de software" },
  { name: "Node.js",  category: "desenvolvimento de software" },
  { name: "Electron", category: "desenvolvimento de software" },
  { name: "Express",  category: "desenvolvimento de software" },
  { name: "PostgreSQL", category: "desenvolvimento de software" },
  { name: "Power Apps", category: "desenvolvimento de software" },
  

  // Tools
  { name: "Photoshop", category: "ferramentas" },
  { name: "Blender", category: "ferramentas" },
  { name: "Adobe Illustrator", category: "ferramentas" },
  { name: "Adobe Premiere", category: "ferramentas" },
  { name: "Adobe Animate", category: "ferramentas" },
  { name: "Aseprite", category: "ferramentas" },
  { name: "Git/GitHub",  category: "ferramentas" },
  { name: "Docker", category: "ferramentas" },
  { name: "Figma",  category: "ferramentas" },
  { name: "VS Code", category: "ferramentas" },
  { name: "Power Automate", category: "desenvolvimento de software" },
  { name: "Power BI", category: "desenvolvimento de software" },
];

const categories = ["tudo", "game development", "desenvolvimento de software", "ferramentas"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("tudo");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "tudo" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Nossas <span className="text-primary"> habilidades</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover
              flex flex-col items-center justify-center"
            >
              <div >
                <h3 className="font-semibold text-lg text-center"> {skill.name}</h3>
              </div>


              <div className="text-right mt-1">

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
