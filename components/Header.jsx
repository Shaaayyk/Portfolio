import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Header({setDarkMode}) {
  return (
    <nav className="py-10 mb-12 flex justify-between dark:text-white">
      <h1 className="text-xl font-burtons">Shaaayyk</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            className="cursor-pointer text-2xl"
            onClick={() => setDarkMode(prevState => !prevState)}
          />
        </li>
        <li>
          <a
            target="_blank"
            className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8 border-none"
            href="https://drive.google.com/file/d/1VZg1ZCCi_iIcjFe2wrj5U-MwNtirX6yG/view?usp=sharing"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
