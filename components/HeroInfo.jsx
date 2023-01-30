import Social from "./Social";

export default function HeroInfo() {
  return (
    <>
      <div className="text-center px-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">
          Shay Kelley
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
          Developer and designer.
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-lg dark:text-gray-200">
          Freelancer providing services for programming and design content
          needs. Join me down below and let's get cracking!
        </p>
      </div>
      <Social />
    </>
  );
}
