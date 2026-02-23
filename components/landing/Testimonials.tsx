'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
    {
        name: 'João Guilherme',
        text: 'A Julia é uma profissional incrível! Me ajudou a ver as coisas de uma nova perspectiva e a lidar com minha ansiedade. Sou muito grato.',
        initials: 'JG',
        imageId: 'testimonial-1',
      },
      {
        name: 'Ana Paula',
        text: 'O processo terapêutico com a Julia foi transformador. Aprendi muito sobre mim e sobre como construir relações mais saudáveis.',
        initials: 'AP',
        imageId: 'testimonial-2',
      },
      {
        name: 'Gustavo Pereira',
        text: 'Recomendo a Julia de olhos fechados. Uma profissional competente, ética e muito acolhedora. Me senti seguro desde a primeira sessão.',
        initials: 'GP',
        imageId: 'testimonial-3',
      },
      {
        name: 'Clara Santos',
        text: 'Encontrei na terapia um espaço para ser eu mesma, sem julgamentos. A Julia conduz as sessões com muita sensibilidade e maestria.',
        initials: 'CS',
        imageId: 'testimonial-4',
      },
      {
        name: 'Lore Silva',
        text: 'Eu não sabia o que esperar da terapia, mas a experiência superou todas as minhas expectativas. A Julia me ajudou a reencontrar minha força interior.',
        initials: 'LS',
        imageId: 'testimonial-5',
      },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-secondary py-20 sm:py-28">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
            Depoimentos de pacientes
          </h2>
        </div>
        <Carousel
          opts={{
            align: 'start',
          }}
          className="relative w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const image = PlaceHolderImages.find(p => p.id === testimonial.imageId);
              return (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <Card className="relative h-full rounded-xl bg-background p-6 pt-12 text-left shadow-lg">
                     <div className="absolute left-6 top-[-1.5rem]">
                        <Avatar className="h-12 w-12 border-4 border-secondary">
                            {image && <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />}
                            <AvatarFallback className="bg-primary/10 font-bold text-primary">
                            {testimonial.initials}
                            </AvatarFallback>
                        </Avatar>
                     </div>
                    <CardContent className="p-0">
                      <p className="italic text-foreground/80">
                        "{testimonial.text}"
                      </p>
                      <p className="mt-4 w-full text-right font-bold text-primary">
                        - {testimonial.name}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-1rem] top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-[-1rem] top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
