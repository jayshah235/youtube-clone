import Image from "../image-component";
import image from "../../assets/youtube.png";

export const InitialLoadUi = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: `translate(${-50}%, ${-50}%)`,
      }}
    >
      <Image src={image} />
    </div>
  );
};
