import SEO from '../../../components/SEO';
import CtaSection from '../about/sections/CtaSection';
import { SMSF_CONTENT } from './sections/content';
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

const c = SMSF_CONTENT;

export default function Smsf() {
  return (
    <>
      <SEO
        title="SMSF Property Loans Melbourne | Traikos Finance"
        description="SMSF Property Loans Melbourne tailored to your fund. Explore lending options, build wealth, and grow your retirement portfolio."
        keywords="SMSF Property Loans Melbourne"
        canonical="https://traikosfinance.com/smsf-loans"
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
