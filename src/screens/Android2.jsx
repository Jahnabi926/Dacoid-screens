import ImageComponent from "../components/ImageComponent";
import HeadingComponent from "../components/HeadingComponent";
import ParagraphComponent from "../components/ParagraphComponent";
import image2 from "../assets/image16.png";
import Link from "../components/helpers/Link";
import IconButton from "../components/helpers/IconButton";
import image3 from "../assets/buttonNext.png";
import Card from "../components/Card";

const Android2 = () => {
  const handleButtonClick = () => {
    console.log("Next button for Anroid 2 clicked !");
  };

  return (
    <Card>
      <Link text="Skip" targetId="android4" applyPositionStyles={true} />
      <ImageComponent imageUrl={image2} />
      <HeadingComponent text="Get Burn"/>
      <ParagraphComponent text="Let's keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever" />
      <IconButton
        imageUrl={image3}
        onClick={handleButtonClick}
        applyPositionStyles={true}
      />
    </Card>
  );
};

export default Android2;
