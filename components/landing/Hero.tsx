import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const Hero = () => {
  const whatsappLink = `https://wa.me/5514999999999?text=${encodeURIComponent("Olá, gostaria de agendar minha consulta.")}`;
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] w-full">
      {heroImage && (
        <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
            quality={100}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
      <div className="container relative flex h-full items-center">
        <div className="max-w-xl text-left ml-[150px]">
          <h1 className="font-headline text-4xl font-bold text-primary-foreground md:text-6xl lg:text-7xl">
            Ajudamos seu filho a lidar <br /> com <span className="text-primary">emoções <br /> e desafios</span><br />desde cedo.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-primary-foreground/80 md:text-xl">
            Cuidar da saúde emocional na infância <br /> é investir em um futuro mais leve e equilibrado.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild className="justify-start pl-[40px] font-semibold transition-transform duration-300 hover:scale-105 uppercase" style={{width: 'calc(100% - 178px)'}}>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                AGENDE SUA SESSÃO
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
