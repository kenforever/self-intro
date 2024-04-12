import { FaGithub, FaTwitter, FaEnvelope, FaTelegramPlane, FaArrowDown } from "react-icons/fa";
import IntroCard from "./components/InfoCard";

function App() {
  return (
    <div className="App" >
      <div className="h-screen flex content-center flex-wrap items-center justify-center md:px-12 px-12 pb-32 md:pb-0 ">
        <img src="/icon.png" alt="logo" className="h-32 md:mr-28 mx-auto md:mx-0 " />
        <div className="flex flex-col ">
          <h1 className="md:text-3xl font-bold text-2xl my-4 md:my-0 mx-auto md:mx-0">Kenforever</h1>
          <h2 className="text-xl mx-auto md:mx-0 text-center md:text-left">Blockchain | EVM | Solidity | DevOps | Python | Linux | +853 & +886</h2>
          <div className="flex items-center justify-center md:justify-start space-x-4 mt-6">
          <a href="https://github.com/kenforever" className="flex items-center justify-center md:justify-start "><FaGithub size={20}/> </a>
          <a href="https://x.com/kenf0rever" className="flex items-center justify-center md:justify-start "><FaTwitter size={20}/></a>
          <a href="mailto:ken@kenforever.cc" className="flex items-center justify-center md:justify-start "><FaEnvelope size={20}/></a>
          <a href="https://t.me/kenforever" className="flex items-center justify-center md:justify-start "><FaTelegramPlane size={20}/></a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 mx-auto text-center mb-4 h-8 w-5 rounded-full cursor-pointer animate-bounce">
          <FaArrowDown size={20} />
        </div>

      </div>
      <div className="flex items-center justify-center my-6 mx-8 flex space-x-6 space-y-6">
        <IntroCard />
        </div>
    </div>
  );  
}

export default App;
