import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import TextSection from "@/components/sections/TextSection";
import ProfileSection from "@/components/sections/ProfileSection";
import StepsSection from "@/components/sections/StepsSection";
import DepoimentsSection from "@/components/sections/DepoimentsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ActionSection from "@/components/sections/ActionSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">
      <Header />
      <HeroSection />
      <TextSection />
      <ProfileSection />
      <StepsSection />
      <DepoimentsSection />
      <CertificationsSection />
      <ActionSection />
      <Footer />
    </main>
  );
}