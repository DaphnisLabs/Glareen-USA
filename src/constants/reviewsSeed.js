import { productDataMap } from "../constants";

/**
 * DEMO / PREVIEW MOCK REVIEWS
 * ---------------------------
 * These are SAMPLE / MOCK reviews for preview and stakeholder demos only.
 * They are NOT real customer reviews.
 *
 * Visibility is controlled by:
 * VITE_ENABLE_MOCK_REVIEWS=true
 */

const IS_MOCK_REVIEWS_ENABLED =
  import.meta.env.VITE_ENABLE_MOCK_REVIEWS === "true";

const reviewerNames = [
  "Emily Carter",
  "Jason Miller",
  "Sophia Reed",
  "Daniel Brooks",
  "Olivia Turner",
  "Liam Parker",
  "Ava Mitchell",
  "Noah Bennett",
  "Mia Collins",
  "Ethan Foster",
  "Arjun Mehta",
  "Priya Nair",
  "Rohan Kapoor",
  "Ananya Rao",
  "Karan Malhotra",
  "Neha Verma",
  "Rahul Sharma",
  "Isha Patel",
];

const titlePool = {
  "dhoop-sticks": [
    "Beautiful fragrance",
    "Really happy with this one",
    "Great for evening routines",
    "Lovely clean burn",
    "A new favorite at home",
  ],
  "dhoop-cones": [
    "Rich aroma and easy to use",
    "Perfect for relaxing evenings",
    "Strong but pleasant fragrance",
    "Burns nicely and evenly",
    "Would buy again",
  ],
  "incense-sticks": [
    "Fresh scent and long-lasting",
    "Exactly what I was looking for",
    "Very calming fragrance",
    "Lovely for daily use",
    "Beautiful aroma in the room",
  ],
};

const bodyPool = {
  "dhoop-sticks": [
    "Really enjoyed the fragrance. It feels premium, burns evenly, and works very well during my evening wind-down routine.",
    "The scent is smooth and pleasant without being overpowering. Packaging was neat and the overall experience felt premium.",
    "I have been using this for meditation and the aroma fills the room beautifully. Clean burn and very easy to enjoy daily.",
    "This one has a very balanced fragrance and a consistent burn. Definitely one of the better products I have tried recently.",
    "The product quality feels solid and the fragrance lasts well. Great option for creating a calm atmosphere at home.",
  ],
  "dhoop-cones": [
    "The cone format gives a richer aroma and I really liked how easy it was to use. Great for a cozy evening setup.",
    "Very nice fragrance and the burn time felt good. It creates a relaxing mood without feeling too strong.",
    "I liked the depth of the aroma on this one. Works well in the living room and leaves a pleasant scent behind.",
    "The packaging looked good and the cones burned consistently. Overall a really satisfying experience.",
    "This has become part of my evening routine. Strong enough to notice, but still smooth and enjoyable.",
  ],
  "incense-sticks": [
    "Lovely fragrance and very easy to use every day. The scent feels clean, calming, and long-lasting.",
    "This one worked really well for daily rituals and quiet evenings. I liked the smooth aroma and steady burn.",
    "The room smelled wonderful after using this. Nice quality and a fragrance that feels both fresh and comforting.",
    "I was pleasantly surprised by how balanced the scent was. It burns nicely and gives a premium feel overall.",
    "A very nice incense option for home use. The aroma is relaxing and the product presentation also feels polished.",
  ],
};

function getCategoryForHandle(handle) {
  const matchedEntry = Object.entries(productDataMap).find(([, items]) =>
    items.some((item) => item.handle === handle)
  );

  return matchedEntry ? matchedEntry[0] : "incense-sticks";
}

function formatDate(daysAgo) {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return d.toISOString().slice(0, 10);
}

function buildMockReviewsForProduct(product, category, indexOffset = 0) {
  const titles = titlePool[category] || titlePool["incense-sticks"];
  const bodies = bodyPool[category] || bodyPool["incense-sticks"];

  return Array.from({ length: 3 }).map((_, idx) => {
    const titleIndex = (indexOffset + idx) % titles.length;
    const bodyIndex = (indexOffset + idx) % bodies.length;
    const nameIndex = (indexOffset * 2 + idx) % reviewerNames.length;

    return {
      id: `${product.handle}-mock-${idx + 1}`,
      rating: idx === 2 ? 4 : 5,
      title: titles[titleIndex],
      body: `${bodies[bodyIndex]} ${
        idx === 1 ? `“${product.title}” stood out to me in particular.` : ""
      }`.trim(),
      name: reviewerNames[nameIndex],
      date: formatDate(7 + indexOffset * 2 + idx),
      images: [],
      _mock: true,
    };
  });
}

function buildSeedMap() {
  const result = {};
  const allProducts = Object.values(productDataMap).flat();

  allProducts.forEach((product, index) => {
    const category = getCategoryForHandle(product.handle);
    result[product.handle] = buildMockReviewsForProduct(product, category, index);
  });

  return result;
}

export const seedReviewsByHandle = IS_MOCK_REVIEWS_ENABLED ? buildSeedMap() : {};
export const areMockSeedReviewsEnabled = IS_MOCK_REVIEWS_ENABLED;