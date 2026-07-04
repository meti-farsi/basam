import { Star, BarChart2, PlayCircle, MessageCircle } from "lucide-react";

const defaultAvatars = ["/images/avatar-1.jpg", "/images/avatar-2.jpg", "/images/avatar-3.jpg"];

export default function CourseCard({
  title,
  author = "purepearl studio",
  image = "/images/course-1.jpg",
  lessons = 17,
  duration = "2 hours 16 mins",
  comments = 59,
  rating = 4.5,
  level = "Beginner",
  price = 25,
  avatars = defaultAvatars,
}) {
  const thumb = image;

  return (
    <div className="flex flex-col gap-4 border border-[#e5e5e5] rounded-2xl p-3 sm:p-4 hover:shadow-md transition-shadow">
      <div className="relative rounded-xl overflow-hidden aspect-[400/260] bg-[#d9d9d9]">
        <img alt={title} src={thumb} className="h-full w-full object-cover" />
        <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1.5">
          <span className="flex items-center gap-1 bg-black/60 text-white text-[11px] px-2 py-1 rounded-full">
            <PlayCircle className="h-3 w-3" /> {lessons} Lessons
          </span>
          <span className="bg-black/60 text-white text-[11px] px-2 py-1 rounded-full">
            {duration}
          </span>
          <span className="flex items-center gap-1 bg-black/60 text-white text-[11px] px-2 py-1 rounded-full">
            <MessageCircle className="h-3 w-3" /> {comments}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <p className="font-['Poppins:SemiBold'] text-[#242528] text-base leading-tight truncate">
            {title}
          </p>
          <span className="flex items-center gap-1 text-[#242528] text-sm shrink-0">
            <Star className="h-4 w-4 fill-[#d4fb20] text-[#d4fb20]" /> {rating}
          </span>
        </div>
        <p className="font-['Satoshi:Regular'] text-[#4b4c53] text-sm">
          by <span className="text-[#003be2]">{author}</span>
        </p>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 border border-[#ced0d3] rounded-full px-3 py-1 text-xs text-[#4b4c53]">
            <BarChart2 className="h-3.5 w-3.5" /> {level}
          </span>
          <div className="flex -space-x-2">
            {avatars.map((src, i) => (
              <img
                key={i}
                alt=""
                src={src}
                className="h-6 w-6 rounded-full border-2 border-white object-cover"
              />
            ))}
            <span className="h-6 w-6 rounded-full bg-[#d4fb20] border-2 border-white flex items-center justify-center text-[10px] font-['Satoshi:Medium'] text-[#242528]">
              26+
            </span>
          </div>
        </div>

        <p className="font-['Poppins:SemiBold'] text-[#003be2] text-lg">
          ${price}
          <span className="font-['Satoshi:Regular'] text-[#4b4c53] text-sm">/lifetime</span>
        </p>
      </div>
    </div>
  );
}
