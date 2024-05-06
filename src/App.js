import {
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaTelegramPlane,
  FaArrowDown,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { SiMisskey } from "react-icons/si";

import Equipment from "./components/Equipment";
import EtherStatus from "./components/EtherStatus";

import equipmentList from "./equipments.json";
import Experience from "./components/Experience";
import Cv from "./components/Cv";

function App() {

  return (
    <div className="App">
      <div className="h-screen flex content-center flex-wrap items-center justify-center md:px-12 px-12 pb-32 md:pb-0 ">
        <img
          src="/icon.png"
          alt="logo"
          className="h-32 md:mr-28 mx-auto md:mx-0 "
        />
        <div className="flex flex-col ">
          <h1 className="md:text-3xl font-bold text-2xl my-4 md:my-0 mx-auto md:mx-0">
            Kenforever
          </h1>
          <h2 className="text-xl mx-auto md:mx-0 text-center md:text-left">
            Blockchain | EVM | Solidity | DevOps | Python | Linux | Photograph |
            +853 & +886
          </h2>
          <div className="flex items-center justify-center md:justify-start space-x-4 mt-6">
            <a
              href="https://github.com/kenforever"
              className="flex items-center justify-center md:justify-start "
            >
              <FaGithub size={20} />{" "}
            </a>
            <a
              href="https://x.com/kenf0rever"
              className="flex items-center justify-center md:justify-start "
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="mailto:ken@kenforever.cc"
              className="flex items-center justify-center md:justify-start "
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="https://t.me/kenforever"
              className="flex items-center justify-center md:justify-start "
            >
              <FaTelegramPlane size={20} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 mx-auto text-center mb-4 h-8 w-5 rounded-full cursor-pointer animate-bounce">
          <FaArrowDown size={20} />
        </div>
      </div>

      <div className="flex items-center justify-center my-6 mx-2 space-x-6 space-y-6 md:mx-56">
        <div className="mx-4 ">
          <div className="mb-32">
            <h2 className="text-2xl mb-2 justify-center text-center font-bold">
              About Me
            </h2>
            <div className="rounded-full border w-64 border-indigo-200 justify-center mx-auto mb-2"></div>
            <div className="md:flex md:flex-wrap md:justify-evenly mx-0 2xl:mx-64 justify-center text-center">
              <p className="text-md tracking-wider leading-relaxed">
                Hi! 我目前專注於 EVM 生態的開發和研究，但也有興趣於其他生態，如
                BTC, Solana, Cosmos 等。
                <br />
                除了區塊鏈，我也對 DevOps 和 AI 相當感興趣，對 Linux, Docker,
                GCP 等都有一定經驗。
              </p>
            </div>
          </div>

          <div className="my-32">
            <h2 className="text-2xl mb-2 justify-center text-center font-bold">
              Experience
            </h2>
            <div className="rounded-full border w-64 border-indigo-200 justify-center mx-auto mb-2"></div>
            <div className="md:flex md:flex-wrap justify-evenly mx-0 2xl:mx-64  text-center">
              <Experience
                title="社長"
                place="北科大區塊鏈研究社"
                time="2023 ~ 2024"
                url="https://ntutblockchain.com"
              />
              <Experience
                title="運維"
                place="伊香保溫泉伺服器"
                time="2020 ~ present"
                url="https://ikaho.world"
              />
              <Experience
                title="contributor"
                place="XueDAO"
                time="2024 ~ present"
                url="https://xuedao.xyz/"
              />
              <Experience
                title="student"
                place="Plan B summer school"
                time="2023 Summer"
                url="https://planb.lugano.ch/summer-school/"
              />
              <Experience
                title="panel speaker"
                place="Taiwan Builder house"
                time="2023 Summer"
                url="https://www.taiwanbuilderhouse.com/"
              />
            </div>
          </div>

          <div className="my-32">
            <h2 className="text-2xl mb-2 justify-center text-center font-bold">
              CV
            </h2>
            <div className="rounded-full border w-64 border-indigo-200 justify-center mx-auto mb-2"></div>
              <Cv />
          </div>

          <div className="my-32">
            <h2 className="text-2xl mb-2 justify-center text-center font-bold">
              這家伙剩多少 ETH?
            </h2>
            <div className="rounded-full border w-64 border-indigo-200 justify-center mx-auto mb-2"></div>
            <EtherStatus />
          </div>

          <div className="mb-32 max-w-100 ">
            <h2 className="text-2xl mb-2 justify-center text-center font-bold">
              現在使用中的設備
            </h2>
            <div className="rounded-full border w-64 border-indigo-200 justify-center mx-auto mb-2"></div>
            <div className="md:flex md:flex-wrap md:justify-evenly mx-0 2xl:mx-64">
              <Equipment
                name="Laptop"
                key="Laptop"
                items={equipmentList.Laptop.items}
                color={equipmentList.Laptop.color}
              />
              <Equipment
                name="Desktop"
                key="Desktop"
                items={equipmentList.Desktop.items}
                color={equipmentList.Desktop.color}
              />
              <Equipment
                name="Home Server"
                key="Home Server"
                items={equipmentList["Home Server"].items}
                color={equipmentList["Home Server"].color}
              />
              <Equipment
                name="Camera"
                key="Camera"
                items={equipmentList.Camera.items}
                color={equipmentList.Camera.color}
              />
              <Equipment
                name="Phone"
                key="Phone"
                items={equipmentList.Phone.items}
                color={equipmentList.Phone.color}
              />
              <Equipment
                name="Accessories"
                key="Accessories"
                items={equipmentList.Accessories.items}
                color={equipmentList.Accessories.color}
              />
            </div>
          </div>

          <div className="max-w-100 ">
            <h2 className="text-2xl mb-2 justify-center text-center font-bold">
              Keep in touch!
            </h2>
            <div className="rounded-full border w-64 border-indigo-200 justify-center mx-auto mb-2"></div>
          </div>
          <div className="flex items-center justify-evenly mx-0 flex-wrap md:mx-80">
            <button
              className="flex items-center justify-center my-2 rounded-lg p-8 md:w-40 bg-slate-200/80 hover:bg-slate-200 text-slate-900"
              onClick={() =>
                window.open("https://github.com/kenforever", "_blank")
              }
            >
              <FaGithub size={40} />{" "}
            </button>

            <button
              className="flex items-center justify-center my-2 rounded-lg p-8 md:w-40 bg-slate-200/80 hover:bg-slate-200 text-slate-900"
              onClick={() =>
                window.open("https://www.instagram.com/leongfu/", "_blank")
              }
            >
              <FaInstagram size={40} />{" "}
            </button>

            <button
              className="flex items-center justify-center my-2 rounded-lg p-8 md:w-40 bg-slate-200/80 hover:bg-slate-200 text-slate-900"
              onClick={() =>
                window.open("https://www.facebook.com/fuchoi.leong", "_blank")
              }
            >
              <FaFacebook size={40} />{" "}
            </button>

            <button
              className="flex items-center justify-center my-2 rounded-lg p-8 md:w-40 bg-slate-200/80 hover:bg-slate-200 text-slate-900"
              onClick={() =>
                window.open("https://nya.one/@kenforever", "_blank")
              }
            >
              <SiMisskey size={40} />{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="pt-10 pb-6 max-w-100 flex justify-evenly mx-0 2xl:mx-64">
        <div>BUIDL with web3 @2024</div>
      </div>
    </div>
  );
}

export default App;
