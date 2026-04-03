import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Sun, Volume2, Thermometer, Palette, Recycle, Leaf, HeartPulse, Ratio, Badge, BadgeCheck, Wrench, Percent, BookCheck, ShieldCheck, LightbulbIcon, SparkleIcon } from 'lucide-react';

const benefits = [
  {
    icon: <BadgeCheck className="w-10 h-10 text-primary" />,
    title: 'Designed Around You',
    description: 'Every space is planned to match your lifestyle and preferences.',
  },
  {
    icon: <SparkleIcon className="w-10 h-10 text-primary" />,
    title: 'End-to-End Interior Solutions',
    description: 'From design to execution, everything managed under one roof.',
  },
  {
    icon: <LightbulbIcon className="w-10 h-10 text-primary" />,
    title: 'Expert Planning & Execution',
    description: 'Structured project planning for smooth, timely delivery.',
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: 'In-House Team',
    description: 'No third parties, complete control and seamless coordination.',
  },
  {
    icon: <Percent className="w-10 h-10 text-primary" />,
    title: 'Transparent Pricing',
    description: 'Clear estimates with no hidden costs.',
  },
  {
    icon: <BookCheck className="w-10 h-10 text-primary" />,
    title: 'Easy Consultation',
    description: 'Visit us or get started with a quick consultation.',
  },
];

export default function KeyBenefitsSection() {
  return (
    <section id="benefits" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-body text-primary sm:text-4xl">What Makes Armoire Homes Different?</h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.slice(0, 6).map((benefit, index) => (
            <Card key={index} className="bg-background border-border/20 hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-6">
                <div className='flex items-center gap-4'>
                    {benefit.icon}
                    <CardTitle className="font-body text-xl">{benefit.title}</CardTitle>
                </div>
                <CardDescription className="mt-4 text-base text-muted-foreground pt-4 border-t border-border/20">{benefit.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}