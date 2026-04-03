import { Bed, Heart, ShowerHead } from "lucide-react";

type CardProps = {
  image: string;
  title: string;
  number: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  button?: string;
  button1?: string;
};

export default function Cards({
  image,
  title,
  number,
  location,
  price,
  beds,
  baths,
  button,
  button1,
}: CardProps) {
  return (
    <div className=" w-full overflow-hidden group bg-transparent transition-all duration-300 hover:-translate-y-2 my-10">
      <div className="relative overflow-hidden cards">
        <img
          src={image}
          alt={title}
          className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute bottom-4 right-4 bg-white/70 backdrop-blur-md p-3 rounded-md cursor-pointer hover:scale-110 transition">
          <Heart className="w-6 h-6 hidden lg:block text-black hover:fill-black transition-all duration-300" />
        </div>
      </div>

      <div className="p-5 bg-[#f6f4f1] flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h2 className="text-xs uppercase tracking-[2px] text-black">
              {title}
            </h2>
            <p className="text-xs text-gray-500">{number}</p>
            <p className="text-xs text-gray-400 uppercase tracking-wide">
              {location}
            </p>
          </div>

          <h2 className="text-xl md:text-2xl font-serif">{price}</h2>
        </div>

        <div className="w-full h-[1px] bg-black/10"></div>

        <div className="flex justify-between items-center text-sm text-gray-600">
          <div className="flex gap-4">
            <span className="flex gap-2">
              <Bed /> {beds}
            </span>
            <span className="flex gap-2">
              <ShowerHead /> {baths}
            </span>
          </div>

          <span className="uppercase text-[10px] tracking-wide">
            South-facing garden
          </span>
        </div>

        <div className="flex gap-3 flex-wrap mt-2">
          {button && (
            <button className="bg-[#c7c0b3] px-4 py-2 text-xs uppercase tracking-wide hover:bg-black hover:text-white transition">
              {button}
            </button>
          )}

          {button1 && (
            <button className="bg-[#c7c0b3] px-4 py-2 text-xs uppercase tracking-wide hover:bg-black hover:text-white transition">
              {button1}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}