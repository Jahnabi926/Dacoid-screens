import ButtonComponent from "../components/ButtonComponent";
import CheckBoxComponent from "../components/CheckBoxComponent";
import HeadingComponent from "../components/HeadingComponent";
import InputFieldComponent from "../components/InputFieldComponent";
import Card from "../components/Card";
import HorizontalDivider from "../components/HorizontalDivider";
import IconButton from "../components/helpers/IconButton";
import Link from "../components/helpers/Link";
import image4 from "../assets/google.png";
import image5 from "../assets/facebook.png";
import ParagraphComponent from "../components/ParagraphComponent";

const Android4 = () => {
  const CheckBoxLabelText = () => {
    return (
      <>
        By proceeding, I agree to all <Link text="T&C" /> and{" "}
        <Link text="Privacy Policy" />
      </>
    );
  };

  const HighlightText = () => {
    return (
      <>
        Already have an account? <Link text="Login" />
      </>
    );
  };

  return (
    <Card>
      <HeadingComponent text="Create an account" />
      <InputFieldComponent type="text" placeholder="First Name" />
      <InputFieldComponent type="text" placeholder="Last Name" />
      <InputFieldComponent type="email" placeholder="Email" />
      <InputFieldComponent type="password" placeholder="Password" />
      <CheckBoxComponent label={<CheckBoxLabelText />} />
      <ButtonComponent label="Create an Account" />
      <HorizontalDivider />
      <div className="flex items-center justify-center space-x-4" id="android4">
        {" "}
        <IconButton imageUrl={image4} />
        <IconButton imageUrl={image5} />
      </div>
      <div className="p-5">
        {" "}
        <ParagraphComponent text={<HighlightText />} position="center"/>
      </div>
    </Card>
  );
};

export default Android4;
