import Buttons from "../components/button";
import logo from "./../assets/icons/pill_icon.svg";
import illust_ayah from "./../assets/illust_ayah.png";
import morningIcon from "./../assets/icons/morning_icon.svg";
import eveningIcon from "./../assets/icons/evening_icon.svg";
import nightIcon from "./../assets/icons/night_icon.svg";
import medIcon from "./../assets/icons/med_icon.svg";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="max-w-full h-100vh flex flex-col justify-between items-center">
      <div className="flex flex-row justify-items-start items-center min-w-full">
        <img src={logo} alt="Logo Ubat Ayah" className="w-8" />
        <h1>Ubat Ayah</h1>
      </div>
      <div>
        <img src={illust_ayah} alt="Logo Ubat Ayah" className="w-full" />
      </div>
      <div className="flex flex-col gap-5">
        <h2>Pilih dan klik waktu makan ubat</h2>
        <div className="flex flex-col gap-5 p-5">
          <Buttons
            title="Pagi"
            text_color="black"
            icon={morningIcon}
            button_color="#FFBF00"
            drop_shadow="drop-shadow(0px 8px 0px #FF9F2A)"
            onClick={() => navigate("/Pagi/med")}
          />
          <Buttons
            title="Petang"
            text_color="black"
            icon={eveningIcon}
            button_color="#c3d1eb"
            drop_shadow="drop-shadow(0px 8px 0px #5787E1)"
            onClick={() => navigate("/Petang/med")}
          />
          <Buttons
            title="Malam"
            text_color="white"
            icon={nightIcon}
            button_color="#2274a5"
            drop_shadow="drop-shadow(0px 8px 0px #175A82)"
            onClick={() => navigate("/Malam/med")}
          />
          <Buttons
            title="Bila Perlu"
            text_color="black"
            icon={medIcon}
            button_color="white"
            drop_shadow="drop-shadow(0px 8px 0px #B7B7B7)"
            onClick={() => navigate("/Perlu/med")}
          />
        </div>
      </div>
      <div>
        <p>Moga sihat selalu Ayah!</p>
      </div>
    </div>
  );
}
