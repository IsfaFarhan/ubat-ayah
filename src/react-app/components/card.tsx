/* import cair_darah_1 from "../assets/ubat/cair_darah_1.png";
import cair_darah_2 from "../assets/ubat/cair_darah_2.png";
import darah_tinggi_malam from "../assets/ubat/darah_tinggi_malam.png";
import darah_tinggi_pagi from "../assets/ubat/darah_tinggi_pagi.png";
import gastrik from "../assets/ubat/gastrik.png";
import jantung_1 from "../assets/ubat/jantung_1.png";
import jantung_3_kali from "../assets/ubat/jantung_3_kali.png";
import kencing_manis_1 from "../assets/ubat/kencing_manis_1.png";
import kencing_manis_2 from "../assets/ubat/kencing_manis_2.png";
import kolestrol_1 from "../assets/ubat/kolestrol_1.png";
import kolestrol_2 from "../assets/ubat/kolestrol_2.png";
import sakit_dada from "../assets/ubat/sakit_dada.png"; */

type Prop = {
  gambar: string;
  masa: string;
  bil_ubat: string;
  tujuan_ubat: string;
  peringatan: string;
};

export default function Card({
  gambar,
  masa,
  bil_ubat,
  tujuan_ubat,
  peringatan,
}: Prop) {
  const warn = peringatan === "" ? "1px solid [#ff5252]" : "";
  return (
    <div className="flex flex-col justify-center-safe items-center-safe p-5 gap-3 max-w-[330px] bg-white rounded-2xl border border-[#E0E0E0]">
      <div className="flex">
        <img src={`/ubat/${gambar}.png`} alt={tujuan_ubat} className="flex" />
      </div>
      <div className="flex flex-col gap-3 w-full">
        <div className="flex justify-center-safe items-center-safe bg-[#ebeff9] py-2 px-6 rounded-lg border border-[#C2D4FF]">
          <p className="text-center">{masa}</p>
        </div>
        <div className="flex justify-center-safe items-center-safe bg-[#FFEBB8] py-2 px-6 rounded-lg border border-[#FFDB81]">
          <p className="text-center">{bil_ubat}</p>
        </div>
        <div className="flex justify-center-safe items-center-safe">
          <p className="text-center">{tujuan_ubat}</p>
        </div>
        <div
          className="flex justify-center-safe items-center-safe py-2 px-6"
          style={{ border: warn }}
        >
          <p className="text-center text-[#FF5252]">{peringatan}</p>
        </div>
      </div>
    </div>
  );
}
