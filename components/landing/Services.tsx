import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Atendimento psicológico infantil',
  },
  {
    title: 'Orientação para pais e responsáveis',
  },
  {
    title: 'Acompanhamento do desenvolvimento',
  },
  {
    title: 'Intervenção em situações específicas',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Nossos serviços
          </h2>
          <div className="mt-8 flex flex-col gap-4">
            {services.map((service) => (
              <Button key={service.title} variant="secondary" size="lg" asChild className="w-full justify-between">
                <Link href="#">
                  {service.title}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
