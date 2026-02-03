const TermsOfService = () => {
    return (
      <div className="w-full bg-white">
        <div className="mx-auto max-w-3xl px-4 py-14 md:py-20">
          <h1 className="text-center text-5xl md:text-6xl font-light text-gray-900">
            Terms of service
          </h1>
  
          <p className="mt-6 text-center text-gray-500">
            Last updated: February 2, 2026
          </p>
  
          <div className="mt-12 space-y-8 text-[15px] leading-7 text-gray-700">
            <Section title="Overview">
              <p>
                This website is operated by <b>Glareen USA</b> (“Glareen”, “we”,
                “us”, or “our”). By accessing or using this website, you agree
                to be bound by these Terms of Service.
              </p>
            </Section>
  
            <Section title="Use of the Website">
              <p>
                You must be at least 18 years old to use this website. You agree
                not to use the site for any unlawful or prohibited purpose.
              </p>
            </Section>
  
            <Section title="Products and Purchases">
              <p>
                Products displayed on this website are sold through
                <b> Amazon.com</b>. Pricing, availability, payments, shipping,
                returns, and refunds are handled by Amazon and governed by
                Amazon’s policies.
              </p>
            </Section>
  
            <Section title="Accuracy of Information">
              <p>
                We strive to ensure product information is accurate, but we do
                not guarantee that descriptions, pricing, or images are error-free.
              </p>
            </Section>
  
            <Section title="Third-Party Links">
              <p>
                This website may contain links to third-party websites, including
                Amazon.com. We are not responsible for the content or policies of
                third-party sites.
              </p>
            </Section>
  
            <Section title="Limitation of Liability">
              <p>
                To the maximum extent permitted by law, Glareen USA shall not be
                liable for any indirect, incidental, or consequential damages
                arising from your use of this website.
              </p>
            </Section>
  
            <Section title="Indemnification">
              <p>
                You agree to indemnify and hold harmless Glareen USA from any
                claims arising out of your use of the website or violation of
                these Terms.
              </p>
            </Section>
  
            <Section title="Governing Law">
              <p>
                These Terms of Service shall be governed by and construed in
                accordance with the laws of the <b>United States</b>, without
                regard to conflict of law principles.
              </p>
            </Section>
  
            <Section title="Changes to These Terms">
              <p>
                We may update these Terms at any time. Continued use of the
                website after changes constitutes acceptance of the updated
                Terms.
              </p>
            </Section>
  
            <Section title="Contact Information">
              <p>
                Questions about these Terms should be sent to{" "}
                <a
                  href="mailto:market@glareen.com"
                  className="underline"
                >
                  market@glareen.com
                </a>
                .
              </p>
            </Section>
          </div>
        </div>
      </div>
    );
  };
  
  export default TermsOfService;
  
  const Section = ({ title, children }) => (
    <section className="space-y-3">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
        {title}
      </h2>
      {children}
    </section>
  );
  