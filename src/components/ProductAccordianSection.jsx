import Accordion from "./Accordian";

const ProductAccordionSection = () => {
  const items = [
    {
      title: "KEY BENEFITS",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Long lasting fragrance</li>
          <li>Premium quality ingredients</li>
          <li>Relaxing and soothing aroma</li>
        </ul>
      ),
    },
    {
      title: "HOW TO USE",
      content: (
        <p>
          Apply a small amount on pulse points like wrist, neck, and behind
          ears.
        </p>
      ),
    },
    {
      title: "FAQ'S",
      content: (
        <p>Yes, it’s safe for daily use. Store in a cool and dry place.</p>
      ),
    },
    {
      title: "OTHER INFORMATION",
      content: <p>Net Quantity: 10ml • Shelf life: 24 months</p>,
    },
    {
      title: "ALL INGREDIENTS",
      content: <p>Bergamot, Jasmine, Musk, Natural Oils</p>,
    },
  ];

  return (
    <div className="w-full bg-white py-10">
      <div className="mx-auto max-w-6xl px-4">
        <Accordion items={items} />
      </div>
    </div>
  );
};

export default ProductAccordionSection;
