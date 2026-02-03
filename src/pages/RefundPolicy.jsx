const RefundPolicy = () => {
    return (
      <div className="w-full bg-white">
        <div className="mx-auto max-w-3xl px-4 py-14 md:py-20">
          <h1 className="text-center text-5xl md:text-6xl font-light text-gray-900">
            Return & refund policy
          </h1>
  
          <p className="mt-6 text-center text-gray-500">
            Last updated: February 2, 2026
          </p>
  
          <div className="mt-12 space-y-8 text-[15px] leading-7 text-gray-700">
            <p>
              All purchases of Glareen products are completed on{" "}
              <b>Amazon.com</b>. Returns and refunds are governed primarily by
              Amazon’s return and refund policies.
            </p>
  
            <Section title="Eligibility for Returns">
              <p>
                Returns may be accepted for items that are:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Damaged upon arrival</li>
                <li>Defective or faulty</li>
                <li>Expired (where applicable)</li>
              </ul>
              <p>
                Please inspect your order promptly upon delivery.
              </p>
            </Section>
  
            <Section title="How to Initiate a Return">
              <p>
                To start a return, please initiate the process through your
                Amazon account by following Amazon’s return instructions.
                Items returned without authorization from Amazon may not be
                accepted.
              </p>
            </Section>
  
            <Section title="Refunds">
              <p>
                Refunds are issued by Amazon once the returned item is received
                and inspected. Approved refunds are processed to the original
                payment method used at checkout.
              </p>
              <p>
                Refund timelines may vary depending on your bank or card issuer.
              </p>
            </Section>
  
            <Section title="Exchanges">
              <p>
                We do not offer direct exchanges. If an item is defective or
                damaged, please follow Amazon’s return process and place a new
                order if a replacement is desired.
              </p>
            </Section>
  
            <Section title="Contact Us">
              <p>
                For product-related questions, contact us at{" "}
                <a
                  href="mailto:market@glareen.com"
                  className="underline"
                >
                  market@glareen.com
                </a>
                . For order-specific issues, please contact Amazon Customer
                Support.
              </p>
            </Section>
          </div>
        </div>
      </div>
    );
  };
  
  export default RefundPolicy;
  
  const Section = ({ title, children }) => (
    <section className="space-y-3">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
        {title}
      </h2>
      {children}
    </section>
  );
  