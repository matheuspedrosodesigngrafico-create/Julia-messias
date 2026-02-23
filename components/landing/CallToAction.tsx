import { Button } from '@/components/ui/button';

const CallToAction = () => {
  const whatsappLink = `https://wa.me/5514999999999?text=${encodeURIComponent("Olá, gostaria de agendar minha consulta.")}`;
  return (
    <section id="cta" className="bg-primary">
      <div className="container py-20 text-center">
        <h2 className="font-headline text-3xl font-bold text-primary-foreground md:text-4xl">
          Seu próximo passo é simples:{' '}
          <br />
          <span className="text-[#3d1e74]">agende uma consulta.</span>
        </h2>
        <div className="mt-8">
          <Button size="lg" variant="secondary" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Agendar minha consulta
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
