import Image from "../image-component";
import image from "../../assets/youtube.png";
import dummyImage from "../../assets/placeholdersrc.jpg";

export const InitialLoadUi = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: `translate(${-50}%, ${-50}%)`,
        width: '60px'
      }}
    >
      <Image loadingSrc={dummyImage} src={image} />
    </div>
  );
};
