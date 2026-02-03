import { useMemo, useState } from "react";

const COUNTRIES = ["India", "United States", "United Kingdom", "Canada"];

const EnquirySection = ({
  enquiryType = "bulk", // bulk | export | distributor | international
}) => {
  const [qty, setQty] = useState(10);

  const fields = useMemo(() => {
    // base fields used everywhere
    const base = ["name", "email", "products", "message"];

    if (enquiryType === "bulk") return base;

    if (enquiryType === "export" || enquiryType === "distributor") {
      return ["name", "companyname", "email", "products", "message"];
    }

    if (enquiryType === "international") {
      return ["name", "country", "phone", "email", "products", "message"];
    }

    return base;
  }, [enquiryType]);

  const [form, setForm] = useState({
    name: "",
    companyname: "",
    country: "",
    phone: "",
    email: "",
    products: "",
    message: "",
  });

  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });

  const handleQty = (type) => {
    if (type === "inc") setQty((p) => p + 1);
    if (type === "dec") setQty((p) => Math.max(1, p - 1));
  };

  const onChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const resetForm = () => {
    setForm({
      name: "",
      companyname: "",
      country: "",
      phone: "",
      email: "",
      products: "",
      message: "",
    });
    setQty(10);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, ok: null, msg: "" });

    try {
      // Send only the fields that are shown + qty + enquiryType
      const payload = {
        enquiryType,
        qty,
      };

      fields.forEach((key) => {
        payload[key] = form[key];
      });

      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.message || "Failed to submit enquiry");

      setStatus({
        loading: false,
        ok: true,
        msg: "Submitted! We’ll contact you soon.",
      });
      resetForm();
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
          {/* Name */}
          {fields.includes("name") && (
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Name*"
              className="w-full bg-white border border-gray-400 px-4 py-3 outline-none"
              required
            />
          )}

          {/* Company Name */}
          {fields.includes("companyname") && (
            <input
              type="text"
              name="companyname"
              value={form.companyname}
              onChange={onChange}
              placeholder="Company Name*"
              className="w-full bg-white border border-gray-400 px-4 py-3 outline-none"
              required
            />
          )}

          {/* Country dropdown */}
          {fields.includes("country") && (
            <select
              name="country"
              value={form.country}
              onChange={onChange}
              className="w-full bg-white border border-gray-400 px-4 py-3 outline-none"
              required
            >
              <option value="">Select Country</option>
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          )}

          {/* Phone */}
          {fields.includes("phone") && (
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={onChange}
              placeholder="Mobile*"
              className="w-full bg-white border border-gray-400 px-4 py-3 outline-none"
              required
            />
          )}

          {/* Email */}
          {fields.includes("email") && (
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="Email*"
              className="w-full bg-white border border-gray-400 px-4 py-3 outline-none"
              required
            />
          )}

          {/* Products + Qty */}
          {fields.includes("products") && (
            <div className="flex flex-col md:flex-row md:items-center gap-5">
              <input
                type="text"
                name="products"
                value={form.products}
                onChange={onChange}
                placeholder="Products of Interest*"
                className="w-full md:flex-1 bg-white border border-gray-400 px-4 py-3 outline-none"
                required
              />

              <div className="flex items-center justify-between md:justify-end gap-4">
                <p className="text-white font-semibold text-lg">Quantity</p>

                <div className="flex items-center">
                  <input
                    value={qty}
                    readOnly
                    className="w-24 text-center bg-white border border-gray-400 px-3 py-3 outline-none"
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
          )}

          {/* Message */}
          {fields.includes("message") && (
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Message"
              rows={5}
              className="w-full bg-white border border-gray-400 px-4 py-3 outline-none resize-none"
            />
          )}

          {/* Submit */}
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
