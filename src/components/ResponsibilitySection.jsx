import { Flame, Leaf, Hand, PawPrint } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    title: "Zero Black Smoke",
    desc: "Breathe easy with our chemical-free incense, ensuring Zero Black smoke. Your well-being is our top priority!",
    Icon: Flame,
    accent: "#F4A96A",
  },
  {
    title: "Natural Ingredients",
    desc: "From temple flowers, our incense blends nature's finest for your enjoyment and also protects India's rivers.",
    Icon: Leaf,
    accent: "#8EC98A",
  },
  {
    title: "Hand Rolled",
    desc: "Light up our hand-rolled incense for a unique scent superhero experience, supporting artisan livelihoods along the way!",
    Icon: Hand,
    accent: "#C4A882",
  },
  {
    title: "Safe for Kids & Pets",
    desc: "Elevate your ambiance worry-free with our kid- & pet-friendly incense, creating a pleasant vibe for all, including your furry friends!",
    Icon: PawPrint,
    accent: "#A8C4C0",
  },
];

export default function ResponsibilitySection() {
    const nav = useNavigate()
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500;600&display=swap');

        .resp-section * { box-sizing: border-box; }

        .resp-section {
          font-family: 'Jost', sans-serif;
          padding: 40px 24px;
        }

        .resp-card {
          position: relative;
          overflow: hidden;
          border-radius: 40px;
          background: #3B4F48;
          min-height: 620px;
          padding: 64px 80px 64px 80px;
        }

        /* Subtle radial grain texture overlay */
        .resp-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 30% 20%, rgba(255,220,170,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 50% 70% at 90% 80%, rgba(80,120,100,0.15) 0%, transparent 55%);
          pointer-events: none;
          z-index: 0;
        }

        /* Decorative arc lines */
        .resp-arc {
          position: absolute;
          right: -60px;
          bottom: -60px;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.06);
          pointer-events: none;
          z-index: 0;
        }
        .resp-arc:nth-child(2) {
          right: -120px;
          bottom: -120px;
          width: 680px;
          height: 680px;
          border-color: rgba(255,255,255,0.04);
        }

        .resp-content {
          position: relative;
          z-index: 10;
          max-width: 1080px;
          padding-right: 280px;
        }

        /* Pill label */
        .resp-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.09);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 100px;
          padding: 6px 18px 6px 12px;
          margin-bottom: 28px;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.75);
        }
        .resp-pill-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #A8D5A2;
        }

        .resp-heading {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(36px, 5vw, 62px);
          font-weight: 500;
          line-height: 1.1;
          letter-spacing: -0.01em;
          color: #F5EFE6;
          text-align: center;
          margin: 0;
        }
        .resp-heading em {
          font-style: italic;
          color: #C9B99A;
        }

        .resp-tagline {
          text-align: center;
          margin-top: 18px;
          font-size: 15px;
          font-weight: 300;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
        }

        /* Thin divider */
        .resp-divider {
          width: 48px;
          height: 1px;
          background: rgba(255,255,255,0.2);
          margin: 36px auto;
        }

        .resp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px 56px;
        }

        .resp-feature {
          display: flex;
          gap: 18px;
          align-items: flex-start;
          padding: 24px;
          border-radius: 20px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          transition: background 0.3s, border-color 0.3s, transform 0.3s;
          cursor: default;
        }
        .resp-feature:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.14);
          transform: translateY(-3px);
        }

        .resp-icon-wrap {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.08);
        }

        .resp-feature-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 600;
          color: #F0E8DC;
          margin: 0 0 8px;
          line-height: 1.2;
        }

        .resp-feature-desc {
          font-size: 14.5px;
          line-height: 1.65;
          color: rgba(255,255,255,0.62);
          margin: 0;
          font-weight: 300;
        }

        .resp-cta-wrap {
          margin-top: 48px;
          display: flex;
          justify-content: center;
        }

        .resp-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #EDE1D0;
          color: #2C3B35;
          border: none;
          border-radius: 100px;
          padding: 16px 44px;
          font-family: 'Jost', sans-serif;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: transform 0.25s, box-shadow 0.25s, background 0.25s;
          box-shadow: 0 4px 24px rgba(0,0,0,0.25);
        }
        .resp-btn:hover {
          transform: translateY(-2px) scale(1.03);
          background: #F5EAD8;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }
        .resp-btn svg {
          transition: transform 0.25s;
        }
        .resp-btn:hover svg {
          transform: translateX(3px);
        }

        /* Hand image */
        .resp-hand {
          position: absolute;
          right: -12px;
          bottom: -10px;
          width: clamp(220px, 22vw, 380px);
          z-index: 20;
          pointer-events: none;
          filter: drop-shadow(-8px 0 40px rgba(0,0,0,0.3));
        }

        @media (max-width: 900px) {
          .resp-card { padding: 48px 32px 48px 32px; min-height: auto; }
          .resp-content { padding-right: 0; }
          .resp-grid { grid-template-columns: 1fr; gap: 20px; }
          .resp-hand { display: none; }
        }

        @media (max-width: 560px) {
          .resp-card { padding: 40px 20px; border-radius: 28px; }
          .resp-feature { padding: 18px; }
        }
      `}</style>

      <section className="resp-section">
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div className="resp-card">
            {/* Decorative arcs */}
            <div className="resp-arc" />
            <div className="resp-arc" />

            <div className="resp-content">
              {/* Pill badge */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="resp-pill">
                  <span className="resp-pill-dot" />
                  Our Commitment
                </div>
              </div>

              {/* Heading */}
              <h2 className="resp-heading">
                We craft our Incense
                <br />
                with <em>Responsibility</em>
              </h2>

              <p className="resp-tagline">Ethical · Sacred · Humane</p>

              <div className="resp-divider" />

              {/* Features grid */}
              <div className="resp-grid">
                {features.map(({ title, desc, Icon, accent }, i) => (
                  <div className="resp-feature" key={i}>
                    <div
                      className="resp-icon-wrap"
                      style={{
                        background: `${accent}18`,
                        border: `1px solid ${accent}30`,
                      }}
                    >
                      <Icon
                        strokeWidth={1.5}
                        style={{ width: 22, height: 22, color: accent }}
                      />
                    </div>
                    <div>
                      <h4 className="resp-feature-title">{title}</h4>
                      <p className="resp-feature-desc">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="resp-cta-wrap">
                <button onClick={() => nav('/collections/incense-sticks')} className="resp-btn">
                  Shop Now
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Hand image */}
            <img src="/hand.png" alt="Incense Hand" className="resp-hand" />
          </div>
        </div>
      </section>
    </>
  );
}
