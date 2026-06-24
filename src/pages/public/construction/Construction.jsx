import SEO from "../../../components/SEO";
import CtaSection from "../about/sections/CtaSection";
import { CONSTRUCTION_CONTENT } from "./sections/content";
import {
  HeroSection,
  IntroSection,
  TopChoiceSection,
  PurchaseSection,
  SupportSection,
  WhyChooseSection,
  CalculatorBanner,
  FloatingCalculatorButton,
} from "../shared/LoanPageSections";

const c = CONSTRUCTION_CONTENT;

export default function Construction() {
  return (
    <>
      <SEO
        title="Construction Loans Melbourne | Build with Confidence"
        description="Construction Loans Melbourne tailored to your build. Secure land, construction, and renovation finance with expert guidance."
        keywords="Construction Loans Melbourne"
        canonical="https://traikosfinance.com/construction-renovation-loans"
        appendSiteName={false}
      />

      <main id="main-content" tabIndex={-1} className="text-black flex-1">
        <HeroSection content={c.hero} />
        <IntroSection content={c.intro} />
        <TopChoiceSection content={c.topSection} />
        <PurchaseSection content={c.secondary} />
        <SupportSection content={c.support} />
        <WhyChooseSection content={c.whyChoose} />
        <CalculatorBanner />
        <div className="bg-black">
          <CtaSection />
        </div>
      </main>

      <FloatingCalculatorButton />
    </>
  );
}
