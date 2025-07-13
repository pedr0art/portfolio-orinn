import {
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Entre em <span className="text-primary">contato</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tem algum projeto em mente ou deseja colaborar? Fale conosco —
          estamos abertos a novas ideias.
        </p>

        {/* bloco de informações */}
        <div className="space-y-8 max-w-md mx-auto">
          {/* e‑mail */}
          <div className="flex items-center justify-center gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">E‑mail</h4>
              <a
                href="mailto:orinnestudio@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                orinnestudio@gmail.com
              </a>
            </div>
          </div>

          {/* telefone */}
          <div className="flex items-center justify-center gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Telefone</h4>
              <a
                href="tel:+5598985652883"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +55 98 98565‑2883
              </a>
            </div>
          </div>

          {/* localização */}
          <div className="flex items-center justify-center gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Localização</h4>
              <span className="text-muted-foreground">
                São Luís, Maranhão, Brasil
              </span>
            </div>
          </div>
        </div>

        {/* redes sociais */}
        <div className="pt-12 text-center">
          <h4 className="font-medium mb-4">Conecte‑se conosco</h4>
          <a
            href="https://www.instagram.com/orinn.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-foreground/80 hover:text-primary transition-colors"
          >
            <Instagram size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};
