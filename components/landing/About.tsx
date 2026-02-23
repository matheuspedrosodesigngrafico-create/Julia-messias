import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const About = () => {
  const psychologistImage = PlaceHolderImages.find(p => p.id === 'psychologist-portrait');

  return (
    <section id="about" className="bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
          <div className="text-center md:text-left">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Sobre Mim
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Olá, eu sou a Julia Messias. Acredito que a psicoterapia é um processo de liberdade. Meu objetivo é auxiliar você a compreender suas emoções, romper padrões limitantes e construir uma rotina com mais sentido e leveza.
            </p>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Com uma abordagem pautada na ética e na escuta ativa, ofereço um suporte personalizado para quem busca lidar com ansiedade, estresse, transições de carreira ou simplesmente deseja se conhecer melhor.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="rounded-[2.5rem] bg-[#3d1e74] p-3 shadow-lg">
                {psychologistImage && (
                <Image
                    src={psychologistImage.imageUrl}
                    alt={psychologistImage.description}
                    width={400}
                    height={600}
                    data-ai-hint={psychologistImage.imageHint}
                    className="rounded-[2rem] object-cover aspect-[2/3]"
                    quality={100}
                />
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
