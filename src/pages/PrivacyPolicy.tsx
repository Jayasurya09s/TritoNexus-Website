import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="text-purple-300 hover:text-pink-300 hover:bg-white/5">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        
        {/* Header with gradient text */}
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-purple-300 via-violet-300 to-pink-300 text-transparent bg-clip-text tracking-tight">
          Privacy Policy
        </h1>
        
        {/* Subtitle with soft glow */}
        <p className="text-xl md:text-2xl text-center mb-12 text-purple-100 font-light drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
          Your trust matters. Here's how we handle your data.
        </p>

        {/* Content blocks */}
        <div className="space-y-10">
          {/* Introduction */}
          <Section title="Introduction">
            <p>TritoNexus respects your privacy and is committed to protecting your data.</p>
            <p>This policy explains how we collect, use, and safeguard your information.</p>
          </Section>

          {/* What We Collect */}
          <Section title="What We Collect">
            <p>User name, email, project tasks, progress data.</p>
            <p>Optional: profile images, feedback, comments.</p>
          </Section>

          {/* How We Use It */}
          <Section title="How We Use It">
            <p>For task management, personalized dashboards, chatbot optimization.</p>
            <p>To improve our services using anonymous analytics.</p>
          </Section>

          {/* Sharing & Third Parties */}
          <Section title="Sharing & Third Parties">
            <p>We use Firebase, MongoDB, and optional analytics providers.</p>
            <p>No third-party sales or promotional sharing.</p>
          </Section>

          {/* Security Measures */}
          <Section title="Security Measures">
            <p>Encrypted databases, secure login methods, access control.</p>
            <p>Regular audits for vulnerabilities.</p>
          </Section>

          {/* Cookies & Tracking */}
          <Section title="Cookies & Tracking">
            <p>Uses cookies for session management and basic analytics.</p>
          </Section>

          {/* User Rights */}
          <Section title="User Rights">
            <p>Request data deletion, correction, or a copy of your data.</p>
            <p>Email <span className="text-pink-300">support@tritonexus.tech</span> for actions.</p>
          </Section>

          {/* Changes to This Policy */}
          <Section title="Changes to This Policy">
            <p>You'll be notified via email or dashboard alerts.</p>
          </Section>

          {/* Contact Us */}
          <Section title="Contact Us">
            <p>Questions? Reach out to <span className="text-pink-300">privacy@tritonexus.tech</span></p>
          </Section>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-sm text-purple-300/80">
          <p>Last updated: May 10, 2025</p>
        </div>
      </div>
    </div>
  );
};

// Section component with glassmorphism styling
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 shadow-lg transition-all duration-300 hover:bg-white/10">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 bg-gradient-to-r from-purple-300 via-violet-200 to-pink-300 text-transparent bg-clip-text">{title}</h2>
      <div className="space-y-3 text-lg text-purple-50/90 font-light">
        {children}
      </div>
    </div>
  );
};

export default PrivacyPolicy;