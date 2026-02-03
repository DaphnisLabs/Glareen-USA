import Accordion from "./Accordian";

const ProductAccordionSection = ({ items = [] }) => {
  if (!items.length) return null;

  return (
    <div className="w-full bg-white py-10">
      <div className="mx-auto max-w-6xl px-4">
        {items.content}
        <Accordion items={items} />
      </div>
    </div>
  );
};

export default ProductAccordionSection;
