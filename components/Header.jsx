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
            className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8 border-none"
            href="#"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
