import Navbar from "@/components/layout/navbar";
import AppSection from "@/components/sections/app-section";
import AppDownloadSection from "@/components/sections/appdownload-section";
import EcosystemSection from "@/components/sections/ecosystem-section";
import FaqSection from "@/components/sections/faq-section";
import FooterSection from "@/components/sections/footer-section";
import HeroSection from "@/components/sections/hero-section";
import PricingSection from "@/components/sections/pricing-section";
import ProblemsSection from "@/components/sections/problems-section";
import StepsSection from "@/components/sections/step-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import TransformationSection from "@/components/sections/transformation-section";
export default function HomePage() {
    return (
        <main className="bg-white">
            <Navbar />
            <HeroSection />
            <ProblemsSection />
            <EcosystemSection />
            <StepsSection />
            <AppSection />
            <PricingSection />
            <TransformationSection />
            <AppDownloadSection />
            <TestimonialsSection />
            <FaqSection />
            <FooterSection />
        </main>
    );
}