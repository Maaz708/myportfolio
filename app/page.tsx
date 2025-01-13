import { HeroSection } from '@/components/sections/hero';
import { SkillsOverview } from '@/components/sections/skills-overview';
import { ProjectsSection } from '@/components/sections/projects';
import { ExperienceSection } from '@/components/sections/experience';
//import { ServicesOverview } from '@/components/sections/services-overview';

export default function Home() {
  return (
    <div className="relative" bg-gradient-to-r from-blue-500 to-purple-600>
      <HeroSection />
      <SkillsOverview />
      <ProjectsSection />
      <ExperienceSection />

    </div>
  );
}