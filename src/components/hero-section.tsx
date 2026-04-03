import Image from "next/image";
import { Button } from "./ui/button";
import LeadForm from "./lead-form";

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-secondary/20">
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/ddqqlfsjp/image/upload/v1753860915/3d-rendering-white-wood-living-room-near-bedroom-upstair_agc7xh.jpg"
          alt="Dream Kitchen Home Interior"
          data-ai-hint="modern interior"
          fill
          className="object-cover"
          priority
        />
        {/* Mobile: 80% black, Desktop (sm+): 60% black */}
        <div className="absolute inset-0 bg-black/80 sm:bg-black/70" />
      </div>

      <div className="relative container mx-auto px-4 py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white max-w-2xl text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-body tracking-tight">
Premium Home Interior Solutions in Noida and Greater Noida            </h1>
            <p className="mt-6 text-lg md:text-xl font-body text-gray-300">
             We plan, design, and execute complete home interiors seamlessly under one roof, ensuring a smooth, hassle-free experience for every homeowner.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <a href="#lead-form">Get a Free Quote</a>
              </Button>
            </div>
          </div>
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
