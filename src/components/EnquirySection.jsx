import { useState } from "react";

const EnquirySection = () => {
  const [qty, setQty] = useState(10);

  const handleQty = (type) => {
    if (type === "inc") return setQty((p) => p + 1);
    if (type === "dec") return setQty((p) => Math.max(1, p - 1));
  };

  return (
    <section className="w-full bg-[#2b2b2b] py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-white text-3xl md:text-4xl font-medium mb-10">
          Enter the Details
        </h2>

        <form className="mx-auto w-full max-w-3xl space-y-6">
          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-white border border-gray-400 px-4 py-3 outline-none"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-white border border-gray-400 px-4 py-3 outline-none"
          />

          {/* Products + Quantity */}
          <div className="flex flex-col md:flex-row md:items-center gap-5">
            <input
              type="text"
              placeholder="Products of Interest"
              className="w-full md:flex-1 bg-white border border-gray-400 px-4 py-3 outline-none"
            />

            <div className="flex items-center justify-between md:justify-end gap-4">
              <p className="text-white font-semibold text-lg">Quantity</p>

              <div className="flex items-center">
                <input
                  value={qty}
                  readOnly
                  className="w-28 text-center bg-white border border-gray-400 px-3 py-3 outline-none"
                />

                <div className="flex flex-col ml-2">
                  <button
                    type="button"
                    onClick={() => handleQty("inc")}
                    className="text-white leading-none px-2"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQty("dec")}
                    className="text-white leading-none px-2"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full bg-white border border-gray-400 px-4 py-3 outline-none resize-none"
          />

          {/* Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-[#f4b400] hover:bg-[#e3a700] transition text-black font-medium px-14 py-3"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EnquirySection;
