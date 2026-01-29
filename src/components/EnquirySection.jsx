import { useState } from "react";

const EnquirySection = () => {
  const [qty, setQty] = useState(10);

  const [form, setForm] = useState({
    name: "",
    email: "",
    products: "",
    message: "",
  });

  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });

  const handleQty = (type) => {
    if (type === "inc") return setQty((p) => p + 1);
    if (type === "dec") return setQty((p) => Math.max(1, p - 1));
  };

  const onChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, ok: null, msg: "" });

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, qty }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.message || "Failed to submit enquiry");
      }

      setStatus({ loading: false, ok: true, msg: "Submitted! Check your email." });
      setForm({ name: "", email: "", products: "", message: "" });
      setQty(10);
    } catch (err) {
      setStatus({ loading: false, ok: false, msg: err.message || "Error" });
    }
  };

  return (
    <section className="w-full bg-[#2b2b2b] py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-white text-3xl md:text-4xl font-medium mb-10">
          Enter the Details
        </h2>

        <form onSubmit={onSubmit} className="mx-auto w-full max-w-3xl space-y-6">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Name"
            className="w-full bg-white border border-gray-400 px-4 py-3 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="Email"
            className="w-full bg-white border border-gray-400 px-4 py-3 outline-none"
            required
          />

          <div className="flex flex-col md:flex-row md:items-center gap-5">
            <input
              type="text"
              name="products"
              value={form.products}
              onChange={onChange}
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

          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            placeholder="Message"
            rows={5}
            className="w-full bg-white border border-gray-400 px-4 py-3 outline-none resize-none"
          />

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={status.loading}
              className="bg-[#f4b400] hover:bg-[#e3a700] transition text-black font-medium px-14 py-3 disabled:opacity-60"
            >
              {status.loading ? "Sending..." : "Send"}
            </button>
          </div>

          {status.ok !== null && (
            <p className={`text-center ${status.ok ? "text-green-400" : "text-red-400"}`}>
              {status.msg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EnquirySection;
