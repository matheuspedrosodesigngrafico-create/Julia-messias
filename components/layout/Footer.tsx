import { Leaf } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container flex h-24 items-center justify-center text-center">
          <p className="text-sm text-primary-foreground/80">&copy; {new Date().getFullYear()} Equilibrium Pathways. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
