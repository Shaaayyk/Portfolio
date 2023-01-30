import Image from "next/image";
import deved from "../public/dev-ed-wave.png";

export default function HeroImage() {
  return (
    <div className="relative mx-auto overflow-hidden bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 md:h-96 md:w-96">
      <Image src={deved} fill style={{ objectFit: "cover" }} />
    </div>
  );
}
