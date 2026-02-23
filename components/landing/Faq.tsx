import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Como funciona a primeira sessão?',
    answer: 'É um momento de acolhimento onde entenderemos sua demanda e como posso te ajudar. A primeira sessão é uma oportunidade para nos conhecermos, você me contar o que te traz à terapia e definirmos juntos os próximos passos.',
  },
  {
    question: 'Atende convênios?',
    answer: 'Não atendo convênios diretamente, mas forneço recibo para solicitação de reembolso junto ao seu plano de saúde. Verifique com sua operadora as condições para reembolso de sessões de psicoterapia.',
  },
  {
    question: 'Onde estacionar?',
    answer: 'Temos facilidade de estacionamento no entorno da clínica. Existem vagas na rua e estacionamentos privados próximos para sua comodidade.',
  },
];

const Faq = () => {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="container max-w-4xl">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
            Dúvidas Frequentes
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-bold text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
