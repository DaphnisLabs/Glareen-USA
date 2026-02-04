import { useEffect, useMemo, useState } from "react";
import { Star } from "lucide-react";

const STORAGE_PREFIX = "glareen_reviews_v1:";

function StarsRow({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

function getLocalReviews(handle) {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + handle);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function setLocalReviews(handle, reviews) {
  try {
    localStorage.setItem(STORAGE_PREFIX + handle, JSON.stringify(reviews));
  } catch {}
}

export default function ReviewsSection({ productHandle, seedReviews = [] }) {
  const [openForm, setOpenForm] = useState(false);
  const [userReviews, setUserReviews] = useState([]);

  // form
  const [rating, setRating] = useState(5);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const imagePreview = useMemo(
    () => (imageFile ? URL.createObjectURL(imageFile) : ""),
    [imageFile]
  );

  useEffect(() => {
    setUserReviews(getLocalReviews(productHandle));
  }, [productHandle]);

  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  const allReviews = useMemo(() => {
    // latest first for user reviews
    return [...userReviews, ...seedReviews];
  }, [userReviews, seedReviews]);

  const stats = useMemo(() => {
    const count = allReviews.length;
    const avg =
      count === 0
        ? 0
        : allReviews.reduce((sum, r) => sum + (Number(r.rating) || 0), 0) / count;

    const buckets = [0, 0, 0, 0, 0]; // 1..5
    allReviews.forEach((r) => {
      const rt = Math.min(5, Math.max(1, Number(r.rating) || 5));
      buckets[rt - 1] += 1;
    });

    return { count, avg, buckets };
  }, [allReviews]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !title.trim() || !body.trim()) {
      alert("Please fill Name, Title and Review content.");
      return;
    }

    const newReview = {
      id: "u-" + Date.now(),
      rating,
      title: title.trim(),
      body: body.trim(),
      name: name.trim(),
      email: email.trim(),
      date: new Date().toISOString().slice(0, 10),
      images: imagePreview ? [imagePreview] : [],
      _localPreviewOnly: Boolean(imagePreview), // since file is local
    };

    const next = [newReview, ...userReviews];
    setUserReviews(next);
    setLocalReviews(productHandle, next);

    // reset
    setRating(5);
    setTitle("");
    setBody("");
    setName("");
    setEmail("");
    setImageFile(null);
    setOpenForm(false);
  };

  const pct = (n) => {
    if (!stats.count) return "0%";
    return Math.round((n / stats.count) * 100) + "%";
  };

  return (
    <section className="mt-10">
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-900">
        Customer Reviews
      </h2>

      {/* Summary row */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left: avg */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <StarsRow rating={Math.round(stats.avg || 0)} />
          <p className="mt-2 text-lg text-gray-700">
            {stats.avg ? stats.avg.toFixed(2) : "0.00"} out of 5
          </p>
          <p className="text-gray-600">Based on {stats.count} reviews</p>
        </div>

        {/* Middle: bars */}
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((star) => {
            const count = stats.buckets[star - 1] || 0;
            return (
              <div key={star} className="flex items-center gap-3">
                <div className="flex items-center gap-1 w-16">
                  <span className="text-sm text-gray-700">{star}</span>
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </div>

                <div className="flex-1 h-3 bg-gray-100 rounded">
                  <div
                    className="h-3 bg-[#E0B341] rounded"
                    style={{ width: pct(count) }}
                  />
                </div>

                <div className="w-10 text-sm text-gray-600 text-right">
                  {count}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: button */}
        <div className="flex justify-center lg:justify-end">
          <button
            onClick={() => setOpenForm((v) => !v)}
            className="w-full max-w-sm bg-[#E0B341] hover:bg-[#d2a53a] transition text-white font-semibold py-4 rounded-md"
          >
            {openForm ? "Cancel review" : "Write a review"}
          </button>
        </div>
      </div>

      {/* Write form */}
      {openForm && (
        <form
          onSubmit={onSubmit}
          className="mt-10 max-w-3xl mx-auto border-t border-black/10 pt-10"
        >
          <h3 className="text-3xl font-semibold text-center">Write a review</h3>

          <div className="mt-6 flex flex-col items-center">
            <p className="text-gray-700">Rating</p>
            <div className="mt-2 flex gap-2">
              {Array.from({ length: 5 }).map((_, i) => {
                const v = i + 1;
                return (
                  <button
                    type="button"
                    key={v}
                    onClick={() => setRating(v)}
                    className="p-1"
                    aria-label={`Rate ${v}`}
                  >
                    <Star
                      className={`w-8 h-8 ${
                        v <= rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <div>
              <label className="block text-center text-gray-700 mb-2">
                Review Title
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-black/20 px-4 py-3 outline-none focus:border-[#E0B341]"
                placeholder="Give your review a title"
              />
            </div>

            <div>
              <label className="block text-center text-gray-700 mb-2">
                Review content
              </label>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="w-full min-h-35 border border-black/20 px-4 py-3 outline-none focus:border-[#E0B341]"
                placeholder="Start writing here..."
              />
            </div>

            <div className="text-center">
              <label className="block text-gray-700 mb-3">
                Picture/Video (optional)
              </label>

              <div className="flex flex-col items-center gap-3">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="preview"
                    className="h-28 w-28 object-cover border"
                  />
                ) : (
                  <div className="h-28 w-28 border flex items-center justify-center text-gray-400">
                    Upload
                  </div>
                )}

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                />
              </div>

              <p className="text-xs text-gray-500 mt-2">
                Note: uploaded images are only previewed locally (no backend yet).
              </p>
            </div>

            <div>
              <label className="block text-center text-gray-700 mb-2">
                Display name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-black/20 px-4 py-3 outline-none focus:border-[#E0B341]"
                placeholder="Display name"
              />
            </div>

            <div>
              <label className="block text-center text-gray-700 mb-2">
                Email address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-black/20 px-4 py-3 outline-none focus:border-[#E0B341]"
                placeholder="Your email address"
              />
            </div>

            <div className="flex justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => setOpenForm(false)}
                className="border border-[#E0B341] text-[#E0B341] px-8 py-3 font-semibold"
              >
                Cancel review
              </button>
              <button
                type="submit"
                className="bg-[#E0B341] hover:bg-[#d2a53a] transition text-white px-8 py-3 font-semibold"
              >
                Submit Review
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Reviews list */}
      <div className="mt-10 border-t border-black/10 pt-8 max-w-5xl mx-auto">
        <div className="flex items-center justify-between px-2">
          <p className="text-[#E0B341] font-medium">Most Recent</p>
        </div>

        <div className="mt-6 space-y-10">
          {allReviews.length === 0 ? (
            <p className="text-center text-gray-500">No reviews yet.</p>
          ) : (
            allReviews.map((r) => (
              <div
                key={r.id}
                className="border-b border-black/10 pb-8"
              >
                <StarsRow rating={Number(r.rating) || 5} />

                <div className="mt-3 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[#E0B341] font-semibold">{r.name}</p>
                    <p className="text-gray-800 font-semibold mt-2">
                      {r.title}
                    </p>
                  </div>

                  <div className="text-sm text-gray-500">
                    {r.date || ""}
                  </div>
                </div>

                <p className="mt-3 text-gray-700 whitespace-pre-line">
                  {r.body}
                </p>

                {r.images?.length ? (
                  <div className="mt-4 flex gap-3 flex-wrap">
                    {r.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`review-${idx}`}
                        className="h-20 w-20 object-cover border"
                      />
                    ))}
                  </div>
                ) : null}

                {r._localPreviewOnly ? (
                  <p className="mt-2 text-xs text-gray-400">
                    (Local preview review)
                  </p>
                ) : null}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
