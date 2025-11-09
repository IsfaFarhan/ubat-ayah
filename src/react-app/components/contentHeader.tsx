import Buttons from "./button";
import backIcon from "./../assets/icons/back_icon.svg";
import Pagi from "./../assets/icons/morning_icon.svg";
import Petang from "./../assets/icons/evening_icon.svg";
import Malam from "./../assets/icons/night_black_icon.svg";
import Perlu from "./../assets/icons/med_icon.svg";

type Props = {
  day_time: string;
};

export default function ContentHeader({ day_time }: Props) {
  return (
    <div className="flex flex-col gap-6 fixed top-0 pb-6 pt-4 bg-[#f4f4f4] w-full">
      <div className="flex w-fit">
        <Buttons
          title="Kembali"
          text_color="black"
          icon={backIcon}
          button_color="white"
          drop_shadow="drop-shadow(0px 8px 0px #B7B7B7)"
          onClick={() => window.history.back()}
        />
      </div>
      <div className="flex flex-row items-center-safe gap-2">
        <img
          src={
            day_time === "Pagi"
              ? Pagi
              : day_time === "Petang"
              ? Petang
              : day_time === "Malam"
              ? Malam
              : Perlu
          }
          alt="Icon waktu"
          className="w-8"
        />
        <h1>Ubat {day_time}</h1>
      </div>
    </div>
  );
}
