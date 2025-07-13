import { Briefcase, Code, User } from "lucide-react";
const team = [
  {
    name: "Osvaldo Saboia",
    image: "/team/osvaldo.jpeg",
    description: "Desenvolvedor de software/ Design gráfico/ Ilustração digital",
  },
  {
    name: "Pedro Ferreira",
    image: "/team/pedro.jpeg",
    description: "Desenvolvedor de software/ Game development / Game design",
  },
  {
    name: "Erika Boueres",
    image: "/team/erika.png",
    description: "Game design/ Narrativa/ Design de personagem",
  },
  {
    name: "Diogo Soares",
    image: "/team/diogo.png",
    description: "Desenvolvedor de software/ Game development",
  },
  {
    name: "Gabriel Sales",
    image: "/team/sales.png",
    description: "Game design/ Game development",
  },
  {
    name: "Matheus Neves",
    image: "/team/matheus.png",
    description: "Game design/ Game development",
  },
];
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* ---------- título principal ---------- */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary">nós</span>
        </h2>

        {/* ---------- texto institucional ---------- */}
        <div className="grid grid-cols-1 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Transformando ideias em soluções tecnológicas e divertidas
            </h3>

            <p className="text-muted-foreground">
              A Orinn Studio é uma empresa independente especializada no
              desenvolvimento de jogos, softwares e designs criativos.
              Combinamos inovação tecnológica e criatividade artística para
              transformar ideias em projetos únicos e funcionais. Trabalhamos
              com paixão para entregar experiências singulares e soluções
              personalizadas que atendam às necessidades de cada cliente.
            </p>

            <p className="text-muted-foreground">
              Valorizamos a qualidade, a originalidade e a interação, sempre
              buscando transmitir emoção e propósito em tudo o que fazemos. Mais
              do que oferecer serviços, queremos construir parcerias sólidas e
              proporcionar resultados que superem as expectativas dos nossos
              clientes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Entre em contato
              </a>
            </div>
          </div>
        </div>

        {/* ---------- seção da equipe ---------- */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Nossa <span className="text-primary">Equipe</span>
          </h3>

          {/* primeira linha – 4 pessoas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.slice(0, 4).map((person) => (
              <div key={person.name} className="flex flex-col items-center text-center">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-primary"
                />
                <h4 className="font-semibold">{person.name}</h4>
                <p className="text-sm text-muted-foreground">{person.description}</p>
              </div>
            ))}
          </div>

          {/* segunda linha – 2 pessoas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 max-w-lg mx-auto">
            {team.slice(4).map((person) => (
              <div key={person.name} className="flex flex-col items-center text-center">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-primary"
                />
                <h4 className="font-semibold">{person.name}</h4>
                <p className="text-sm text-muted-foreground">{person.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* ---------- fim seção da equipe ---------- */}
      </div>
    </section>
  );
};