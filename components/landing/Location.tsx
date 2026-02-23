import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

const Location = () => {
  const officeImage = PlaceHolderImages.find(p => p.id === 'therapist-office');

  return (
    <section id="location" className="bg-secondary py-20 sm:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
          <div className="order-2 text-center md:order-1 md:text-left">
            <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
              Um ambiente preparado para você
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Localizado em uma região de fácil acesso em Bauru, o consultório foi planejado para oferecer o máximo de conforto e privacidade.
            </p>
            <div className="mt-6 flex items-start justify-center gap-4 md:justify-start">
              <MapPin className="h-8 w-8 flex-shrink-0 text-primary" />
              <div>
                <p className="font-bold text-foreground">Endereço:</p>
                <address className="not-italic text-foreground/80">
                  Rua Afonso Simonetti, 15-18
                  <br />
                  Vila São João da Boa Vista, Bauru - SP
                  <br />
                  CEP: 17060-456
                </address>
              </div>
            </div>
          </div>
          <div className="order-1 flex justify-center md:order-2">
            {officeImage && (
              <Image
                src={officeImage.imageUrl}
                alt={officeImage.description}
                width={800}
                height={600}
                data-ai-hint={officeImage.imageHint}
                className="rounded-lg object-cover shadow-lg transition-transform duration-300 hover:scale-105"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
