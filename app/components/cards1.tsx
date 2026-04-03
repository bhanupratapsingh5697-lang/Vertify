type CardProps = {
  image: string;
  title: string;
  desc: string;
};

export default function Cards1({ image, title, desc }: CardProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-full images h-full md:h-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full  h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-3xl font-serif leading-snug text-black">
          {title}
        </h2>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}
