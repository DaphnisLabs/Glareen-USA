import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const Accordion = ({ items = [], defaultOpenIndex = null }) => {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full border-t border-gray-200">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="border-b border-gray-200">
            {/* Header */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between py-6 px-2 md:px-4 text-left"
            >
              <span className="text-sm md:text-base tracking-widest font-medium text-gray-900 uppercase">
                {item.title}
              </span>

              <span className="text-gray-500">
                {isOpen ? (
                  <Minus className="w-6 h-6" />
                ) : (
                  <Plus className="w-6 h-6" />
                )}
              </span>
            </button>

            {/* Content */}
            <div
              className={`grid transition-all duration-300 ease-in-out px-2 md:px-4 ${
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden text-gray-600 text-sm leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
