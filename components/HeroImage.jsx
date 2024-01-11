import Image from "next/image";
import shay from "../public/shay-wave.png";

export default function HeroImage() {
  return (
    <div className="relative mx-auto overflow-hidden bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 md:h-96 md:w-96">
      <Image src={shay} fill style={{ objectFit: "cover" }} />
    </div>
  );
}
