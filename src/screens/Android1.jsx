import ImageComponent from "../components/ImageComponent";
import HeadingComponent from "../components/HeadingComponent";
import ParagraphComponent from "../components/ParagraphComponent";
import image1 from "../assets/image13.png";
import Link from "../components/helpers/Link";
import IconButton from "../components/helpers/IconButton";
import image3 from "../assets/buttonNext.png";
import Card from "../components/Card";

const Android1 = () => {
  const handleButtonClick = () => {
    console.log("Next button for Anroid 1 clicked !");
  };

  return (
    <Card>
      <Link text="Skip" targetId="android4" applyPositionStyles={true} />
      <ImageComponent imageUrl={image1} />
      <HeadingComponent text="Track Your Goal" />
      <ParagraphComponent text="Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals" />
      <IconButton
        imageUrl={image3}
        onClick={handleButtonClick}
        applyPositionStyles={true}
      />
    </Card>
  );
};

export default Android1;
