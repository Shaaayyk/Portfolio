import Image from "next/image";

export default function ServiceCard({image}) {
  return (
    <div className="text-center flex flex-col flex-1 items-center col shadow-lg p-10 my-10 rounded-xl dark:bg-white">
      <Image src={image} width={100} height={100} />
      <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
      <p className="py-2">
        Creating elegant designs suited for your needs following core design
        theory.
      </p>
      <h4 className="py-4 text-teal-600">Design tools I use</h4>
      <p className="text-gray-800 py-1">Photoshop</p>
      <p className="text-gray-800 py-1">Illustrator</p>
      <p className="text-gray-800 py-1">Figma</p>
    </div>
  );
}
