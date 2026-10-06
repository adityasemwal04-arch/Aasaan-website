import React from 'react';
import HeroConnectedCore from '../components/HeroConnectedCore';
import LiveEventTicker from '../components/LiveEventTicker';
import WorkflowCascade from '../components/WorkflowCascade';
import RealTimeTimeline from '../components/RealTimeTimeline';
import IndustryExplorer from '../components/IndustryExplorer';
import AasaanAICopilot from '../components/AasaanAICopilot';
import SiloComparison from '../components/SiloComparison';
import ProductMatrix from '../components/ProductMatrix';
import ClientProofRail from '../components/ClientProofRail';
import IntegrationHub from '../components/IntegrationHub';
import FinalCTA from '../components/FinalCTA';

export default function HomePage({ onOpenDemo }) {
  return (
    <>
      {/* Section 1: Hero Central Nervous System */}
      <HeroConnectedCore onOpenDemo={onOpenDemo} />

      {/* Real-time Enterprise Telemetry Stream */}
      <LiveEventTicker />

      {/* Section 2: "Everything talks to everything" Lifecycle Workflow */}
      <WorkflowCascade />

      {/* Section 3: "See your business as it happens" Granular Audit Stream */}
      <RealTimeTimeline />

      {/* Section 4: Tailored Operational Architectures (AWM, Manufacturing, Retail, etc.) */}
      <IndustryExplorer onOpenDemo={onOpenDemo} />

      {/* Section 5: Aasaan AI Copilot Simulator */}
      <AasaanAICopilot onOpenDemo={onOpenDemo} />

      {/* Section 6: "One System. Zero Silos." Interactive Transformation */}
      <SiloComparison />

      {/* Section 7: Product Editions (ERP Global, ERP Lite, AWM) */}
      <ProductMatrix onOpenDemo={onOpenDemo} />

      {/* Section 8: Verified Client Case Studies (Tadweeer, Resustainability, etc.) */}
      <ClientProofRail onOpenDemo={onOpenDemo} />

      {/* Section 9: 10-Category Enterprise Integration Hub */}
      <IntegrationHub onOpenDemo={onOpenDemo} />

      {/* Section 10: Final High-Impact CTA */}
      <FinalCTA onOpenDemo={onOpenDemo} />
    </>
  );
}
