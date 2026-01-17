import Hero from "../components/sections/Hero";
import WhatIDo from "../components/sections/WhatIDo";
import FeaturedWork from "../components/sections/FeaturedWork";
import ContactCTA from "../components/sections/ContactCTA";

export default function Home() {
  return (
    <div className="space-y-14">
      <Hero />
      <WhatIDo />
      <FeaturedWork />
      <ContactCTA />
    </div>
  );
}
