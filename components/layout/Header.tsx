import { Button } from '@/components/ui/button';
import { Leaf, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const whatsappLink = `https://wa.me/5514999999999?text=${encodeURIComponent("Olá, gostaria de agendar minha consulta.")}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-headline text-foreground">
            <span className="font-bold">Júlia</span> Messias
          </span>
        </Link>
        <Button asChild className="hidden sm:inline-flex">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-4 w-4" />
            Agendar Consulta
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
