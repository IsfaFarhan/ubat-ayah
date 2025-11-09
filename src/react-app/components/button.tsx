type Props = {
  title: string;
  text_color: string;
  icon: string;
  button_color: string;
  drop_shadow: string;
  onClick?: () => void;
};

export default function Buttons({
  title,
  icon,
  button_color,
  onClick,
  text_color,
  drop_shadow,
}: Props) {
  return (
    <div>
      <button
        className="flex flex-row justify-center-safe items-center py-2 px-6 w-full font-medium rounded-4xl cursor-pointer"
        style={{
          color: text_color,
          backgroundColor: button_color,
          filter: drop_shadow,
        }}
        onClick={onClick}
      >
        <img src={icon} alt={`${title} icon`} className="w-6 h-6 mr-4" />
        {title}
      </button>
    </div>
  );
}
