import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

export default function Social() {
  return (
    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
    <AiFillTwitterCircle className="cursor-pointer"/>
    <AiFillLinkedin className="cursor-pointer"/>
    <AiFillYoutube className="cursor-pointer"/>
  </div>
  )
}
