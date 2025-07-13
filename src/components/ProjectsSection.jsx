import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "HermesHub",
    description: "Uma aplicação desktop de chat interno para empresas.",
    image: "/projects/project1.png",
    tags: ["React", "Electron", "Docker"],
    demoUrl: "",
  },
  {
    id: 2,
    title: "Natt e o caminho do equilíbrio",
    description:
      "Jogo sério sobre um robô que deve manter seu equilíbrio nutricional enquanto navega pelas fases e se alimenta.",
    image: "/projects/project2.png",
    tags: ["Godot", "Aseprite", "Mobile"],
    demoUrl: "https://orinnstudio.itch.io/natt-e-o-caminho-do-equilbrio",
  },
  {
    id: 3,
    title: "HEXXED",
    description:
      "Jogo sobre uma pequena bruxa que se apaixonou pelo novo colega da escola. Vencedor do prêmio Guarnicê de cinema do ano de 2024 como Melhor Jogos Maranhense por júri técnico e Melhor Narrativa",
    image: "/projects/project3.png",
    tags: ["Gamemaker", "Aseprite", "Desktop"],
    demoUrl: "https://orinnstudio.itch.io/hexxed",
  },
  {
    id: 4,
    title: "Rasga Mortalha",
    description:
      "Um jogo sobre uma coruja que viaja pelo tempo. Vencedor na categoria Melhor Jogo Digital da UNDB Game Jam 2024",
    image: "/projects/project4.png",
    tags: ["Gamemaker", "Aseprite", "Desktop"],
    demoUrl: "https://orinnstudio.itch.io/rasga-mortalha",
  },
  {
    id: 5,
    title: "Eurídice",
    description:
      "Jogo sobre o mito de Orfeu. Vencedor na categoria Melhor Jogo Digital da UNDB Game Jam 2025",
    image: "/projects/project5.png",
    tags: ["Godot", "Photoshop", "Desktop"],
    demoUrl: "https://orinnstudio.itch.io/eurdice",
  },
  {
    id: 6,
    title: "Foffoquei",
    description:
      "Um jogo sobre fofocas de imprensa e bolhas sociais, feito durante a Global Game Jam 2025.",
    image: "/projects/project6.png",
    tags: ["Godot", "Photoshop", "Desktop"],
    demoUrl: "https://orinnstudio.itch.io/foffoquei",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Projetos <span className="text-primary">desenvolvidos</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Aqui estão os principais projetos desenvolvidos pelo nosso estúdio.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* imagem */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* conteúdo */}
              <div className="p-6">
                {/* tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* título + descrição */}
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* ícone de demo (exibe só se tiver URL) */}
                {project.demoUrl && (
                  <div className="flex">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* botão externo */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://orinnstudio.itch.io"
          >
            Acesse nosso Itch.io <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};