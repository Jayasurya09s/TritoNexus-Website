import React from "react";
import TermsSection from "@/components/TermsSection";

const Terms = () => {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 mb-4 shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            Terms & Conditions
          </h1>
          <p className="text-xl text-gray-300">
            Using TritoNexus means agreeing to the following.
          </p>
        </div>

        <div className="space-y-8">
          <TermsSection title="Acceptance of Terms">
            <p>By accessing TritoNexus, you agree to comply with these terms.</p>
          </TermsSection>

          <TermsSection title="Accounts & Responsibility">
            <p>Users must provide valid information and protect their credentials.</p>
            <p>Minimum age requirement: 13+.</p>
          </TermsSection>

          <TermsSection title="What TritoNexus Offers">
            <p>Collaborative workspace, dashboards, task timelines, and AI assistant.</p>
            <p>Available as-is without guaranteed uptime.</p>
          </TermsSection>

          <TermsSection title="User Conduct">
            <p>No offensive content, spamming, hacking, or data abuse.</p>
            <p>Respectful interaction with teammates is mandatory.</p>
          </TermsSection>

          <TermsSection title="Content & Ownership">
            <p>You own your task and project data.</p>
            <p>We retain the right to analyze data anonymously for improvements.</p>
          </TermsSection>

          <TermsSection title="Termination">
            <p>We reserve the right to suspend accounts for violating terms.</p>
            <p>Warnings may or may not be given depending on severity.</p>
          </TermsSection>

          <TermsSection title="Liability Limits">
            <p>We're not responsible for indirect losses from data corruption or misuse.</p>
          </TermsSection>

          <TermsSection title="Legal Jurisdiction">
            <p>All legal disputes fall under Indian cyber law and Telangana High Court jurisdiction.</p>
          </TermsSection>

          <TermsSection title="Modifications">
            <p>Terms may be updated; changes will be shown with date tags.</p>
            <p>Continued use implies acceptance of changes.</p>
          </TermsSection>

          <TermsSection title="Contact for Legal Issues">
            <p>Email <span className="text-pink-400 hover:text-pink-300 transition-colors">legal@tritonexus.tech</span> for complaints, violations, or formal inquiries.</p>
          </TermsSection>
        </div>

        <div className="text-center mt-12 text-gray-400 text-sm">
          <p>Last updated: May 10, 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;