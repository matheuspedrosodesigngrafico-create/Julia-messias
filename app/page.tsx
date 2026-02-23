import About from '@/components/landing/About';
import CallToAction from '@/components/landing/CallToAction';
import Hero from '@/components/landing/Hero';
import Services from '@/components/landing/Services';
import Testimonials from '@/components/landing/Testimonials';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
