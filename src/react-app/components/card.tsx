type Prop = {
  gambar: string;
  masa: string;
  bil_ubat: string;
  cara_simpan?: string | null;
  tujuan_ubat: string;
  peringatan?: string | null;
};

export default function Card({
  gambar,
  masa,
  bil_ubat,
  tujuan_ubat,
  peringatan,
  cara_simpan,
}: Prop) {
  const peringatans =
    peringatan === "" ? null : (
      <div className="flex justify-center-safe items-center-safe ounded-2xl rounded-lg border border-[#Ff5252]">
        <p className="text-center text-[#FF5252] py-2 px-2">{peringatan}</p>
      </div>
    );

  const caraSimpan =
    cara_simpan === "" ? null : (
      <div className="flex justify-center-safe items-center-safe bg-[#DDF2FF] rounded-2xl border border-[#AADEFF]">
        <p className="text-start py-2 px-2">{cara_simpan}</p>
      </div>
    );
  return (
    <div className="flex flex-col justify-center-safe items-center-safe p-5 gap-3 max-w-[330px] bg-white rounded-2xl border border-[#E0E0E0]">
      <div className="flex justify-center-safe items-center-safe">
        <h2 className="text-center text-lg">{tujuan_ubat}</h2>
      </div>
      <div className="flex">
        <img src={`/ubat/${gambar}.png`} alt={tujuan_ubat} className="flex" />
      </div>
      <div className="flex flex-col gap-3 w-full">
        <div className="flex justify-center-safe items-center-safe bg-[#ebeff9] py-2 px-2 rounded-lg border border-[#C2D4FF]">
          <p className="text-center">{masa}</p>
        </div>
        <div className="flex justify-center-safe items-center-safe bg-[#FFEBB8] py-2 px-2 rounded-lg border border-[#FFDB81]">
          <p className="text-center">{bil_ubat}</p>
        </div>
        {caraSimpan}

        {peringatans}
      </div>
    </div>
  );
}
