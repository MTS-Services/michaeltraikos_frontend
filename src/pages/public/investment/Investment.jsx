import SEO from '../../../components/SEO';
import CtaSection from '../about/sections/CtaSection';
import { INVESTMENT_CONTENT } from './sections/content';
import {
  HeroSection,
  IntroSection,
  TopChoiceSection,
  PurchaseSection,
  SupportSection,
  WhyChooseSection,
  CalculatorBanner,
  FloatingCalculatorButton,
} from '../shared/LoanPageSections';

const c = INVESTMENT_CONTENT;

export default function Investment() {
  return (
    <>
      <SEO
        title="Investment Property Loans Melbourne | Traikos Finance"
        description="Investment Property Loans Melbourne tailored to your goals. Secure the right loan structure, access equity, and grow your portfolio."
        keywords="Investment Property Loans Melbourne"
        canonical="https://traikosfinance.com/investment-property-loans"
      />

      <main id="main-content" tabIndex={-1} className="text-black flex-1">
        <HeroSection       content={c.hero} />
        <IntroSection      content={c.intro} />
        <TopChoiceSection  content={c.topSection} />
        <PurchaseSection   content={c.secondary} />
        <SupportSection    content={c.support} />
        <WhyChooseSection  content={c.whyChoose} />
        <CalculatorBanner />
        <div className='bg-black'>
                 <CtaSection />
               </div>
      </main>

      <FloatingCalculatorButton />
    </>
  );
}
