const ShippingPolicy = () => {
    return (
      <div className="w-full bg-white">
        <div className="mx-auto max-w-3xl px-4 py-14 md:py-20">
          <h1 className="text-center text-5xl md:text-6xl font-light text-gray-900">
            Shipping policy
          </h1>
  
          <p className="mt-6 text-center text-gray-500">
            Last updated: February 2, 2026
          </p>
  
          <div className="mt-12 space-y-8 text-[15px] leading-7 text-gray-700">
            <p>
              This Shipping Policy applies to orders placed through our website
              and fulfilled via <b>Amazon.com</b>. All purchases are completed on
              Amazon and are subject to Amazon’s shipping policies and terms.
            </p>
  
            <Section title="Order Processing">
              <p>
                Orders are processed and fulfilled by Amazon. Processing times,
                shipping speeds, and delivery estimates are determined by Amazon
                at checkout.
              </p>
            </Section>
  
            <Section title="Shipping Rates & Delivery Estimates">
              <p>
                Shipping charges and delivery timelines are calculated and shown
                at checkout on Amazon.com. Available shipping options may vary
                depending on your location and selected delivery method.
              </p>
            </Section>
  
            <Section title="International Shipping">
              <p>
                Amazon may offer international shipping to select countries.
                International customers are responsible for any customs duties,
                taxes, or import fees imposed by their country.
              </p>
            </Section>
  
            <Section title="Order Tracking">
              <p>
                Once your order ships, Amazon will provide tracking details via
                email or through your Amazon account. Tracking updates may take
                up to 24 hours to appear.
              </p>
            </Section>
  
            <Section title="Delivery Issues">
              <p>
                If your package is delayed, missing, or marked as delivered but
                not received, please contact Amazon Customer Support directly for
                assistance, as Amazon manages all shipping and delivery.
              </p>
            </Section>
  
            <Section title="Lost or Stolen Packages">
              <p>
                Glareen USA is not responsible for lost or stolen packages.
                Delivery issues must be resolved with Amazon or the carrier
                handling your shipment.
              </p>
            </Section>
  
            <Section title="Contact Us">
              <p>
                For general shipping questions related to our products, contact
                us at{" "}
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
  
  export default ShippingPolicy;
  
  /* helpers */
  const Section = ({ title, children }) => (
    <section className="space-y-3">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
        {title}
      </h2>
      {children}
    </section>
  );
  