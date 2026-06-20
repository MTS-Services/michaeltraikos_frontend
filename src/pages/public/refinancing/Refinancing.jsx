import SEO from '../../../components/SEO';
import CtaSection from '../about/sections/CtaSection';
import { REFINANCING_CONTENT } from './sections/content';
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

const c = REFINANCING_CONTENT;

export default function Refinancing() {
  return (
    <>
      <SEO
        title="Home Loan Refinancing Melbourne | Traikos Finance"
        description="Home Loan Refinancing Melbourne to reduce repayments, access equity, compare lenders, and secure a more competitive loan."
        keywords="Home Loan Refinancing Melbourne"
        canonical="https://traikosfinance.com/refinancing"
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
