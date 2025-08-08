import Image from "next/image";
import ai from "@/public/ai.jpg";
export default function Home() {
  return (
    <div className="flex gap-4">
      <div className="w-[400px] flex flex-col items-center h-[400px] bg-white rounded-2xl p-10">
        <Image
          src={ai}
          width="200"
          height="150"
          alt="Vercel"
          className="rounded-full object-cover w-[100px] h-[100px]"
        />
        <h4 className="text-2xl text-black font-bold">Faizan</h4>
      </div>
      <div className="w-[400px] relative object-cover flex flex-col items-center h-[400px] bg-white rounded-2xl p-10">
        <Image
          src={ai}
          fill={true}
          quality={100}
          placeholder="blur"
          blurDataURL=""
        />
      </div>
    </div>
  );
}
