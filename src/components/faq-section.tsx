import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "Do you handle complete home interiors?",
      answer: "Yes, we manage design, planning, and execution end-to-end."
    },
    {
      question: "How long does a project take?",
      answer: "Most projects are completed within a few weeks."
    },
    {
      question: "Do you offer customised designs?",
      answer: "Yes, every design is tailored to your space and needs."
    },
    {
      question: "Do you have an in-house team?",
      answer: "Yes, everything is handled by our in-house team."
    },
  ]
  
  export default function FaqSection() {
    return (
      <section id="faq" className="py-20 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-body text-primary sm:text-4xl">FAQs</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold text-left">{`Q${index+1}: ${faq.question}`}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    )
  }
  