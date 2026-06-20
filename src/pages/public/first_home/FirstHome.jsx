import SEO from "../../../components/SEO";
import CtaSection from "../about/sections/CtaSection";
import { FIRST_HOME_CONTENT } from "./sections/content";
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

const c = FIRST_HOME_CONTENT;

export default function FirstHome() {
  return (
    <>
      <SEO
        title="First Home Buyer Loans Melbourne | Traikos Finance"
        description="First Home Buyer Loans Melbourne tailored to your needs. Get expert guidance, lender options, pre-approval support, and finance solutions."
        keywords="First Home Buyer Loans Melbourne"
        canonical="https://traikosfinance.com/first-home-buyer-loans"
      />

      <main id="main-content" tabIndex={-1} className="text-black flex-1">
        <HeroSection content={c.hero} />
        <IntroSection content={c.intro} />
        <TopChoiceSection content={c.topChoice} />
        <PurchaseSection content={c.purchase} />
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
