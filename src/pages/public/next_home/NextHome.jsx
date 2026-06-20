import SEO from "../../../components/SEO";
import CtaSection from "../about/sections/CtaSection";
import { NEXT_HOME_CONTENT } from "./sections/content";
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

const c = NEXT_HOME_CONTENT;

export default function NextHome() {
  return (
    <>
      <SEO
        title="Next Home Buyer Loans Melbourne | Traikos Finance"
        description="Next Home Buyer Loans Melbourne tailored to your move. Access equity, explore loan options, and buy your next home with confidence."
        keywords="Next Home Buyer Loans Melbourne"
        canonical="https://traikosfinance.com/next-home-buyer-loans"
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
