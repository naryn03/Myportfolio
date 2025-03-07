import resume from "../assets/Ashish.pdf"
const Resume = () => {
  return (
        <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"><a href={resume}>Resume</a></button>
  )
}

export default Resume
