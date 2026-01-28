import { Star } from "lucide-react";

const TestimonialCard = ({
  text = "I’ve been burning Glareen Lavender Agarbatti Sticks every evening for weeks, and the calming floral scent never disappoints. Each stick offers a steady, 45-minute burn that fills my living room with a soothing lavender aroma—perfect for unwinding after a busy day. I’ve reordered twice already and always keep an extra box on hand. Truly the best lavender incense I’ve tried!",
  image = "https://randomuser.me/api/portraits/men/32.jpg",
  location = "Punjab",
  name = "Mayank yadav",
  rating = 5,
}) => {
  return (
    <div className="w-full flex justify-center bg-[#f6e1a8] py-10 px-4">
      <div className="relative w-full max-w-4xl bg-white px-6 md:px-14 py-10 md:py-14">
        {/* Left small line */}
        <div className="absolute left-[18%] bottom-[34%] hidden md:block">
          <div className="h-0.5 w-40 bg-cyan-200" />
        </div>

        <p className="text-center text-lg md:text-xl leading-relaxed text-gray-800 font-medium">
          <span className="bg-gray-200/90 px-2 py-1">{text}</span>
        </p>

        {/* Avatar */}
        <div className="mt-10 flex flex-col items-center">
          <img
            src={image}
            alt={name}
            className="w-20 h-20 rounded-full object-cover"
          />

          <h3 className="mt-5 text-lg font-semibold text-gray-900">{name}</h3>
          <p className="mt-1 text-gray-500">{location}</p>

          {/* Stars */}
          <div className="mt-4 flex gap-1">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star
                key={idx}
                className={`w-5 h-5 ${
                  idx < rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
