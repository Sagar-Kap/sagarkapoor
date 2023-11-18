import AboutSection from "@components/front-page/about-section";
import ContactSection from "@components/front-page/contact-section";
import HeroSection from "@components/front-page/hero";
import RecentBlogSection from "@components/front-page/recent-blog-section";
import SkillsSection from "@components/front-page/skills-section";
import WorksSection from "@components/front-page/works-section";

const HomePage = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <SkillsSection></SkillsSection>
      <WorksSection></WorksSection>
      <RecentBlogSection></RecentBlogSection>
      <ContactSection></ContactSection>
    </>
  );
};

export default HomePage;
