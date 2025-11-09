import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Card from "../components/card";
import ContentHeader from "../components/contentHeader";

type Items = {
  id: number;
  gambar: string;
  masa: string;
  bil_ubat: string;
  tujuan_ubat: string;
  peringatan: string;
};

export default function Content() {
  const { day_time } = useParams<{ day_time: string }>();
  const [items, setItems] = useState<Items[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!day_time) return;

    const url = `${import.meta.env.BASE_URL}${day_time}.json`;
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then(setItems)
      .finally(() => setLoading(false));
  }, [day_time]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="relative h-24">
        <ContentHeader day_time={day_time || ""} />
      </div>
      <p className="text-start">
        Di nasihatkan untuk mengambil ubat pada waktunya
      </p>
      <div className="flex flex-col gap-10">
        {items.map((i) => (
          <Card
            key={i.id}
            gambar={i.gambar}
            masa={i.masa}
            bil_ubat={i.bil_ubat}
            tujuan_ubat={i.tujuan_ubat}
            peringatan={i.peringatan}
          />
        ))}
      </div>
    </div>
  );
}
