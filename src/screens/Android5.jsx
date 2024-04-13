import ButtonComponent from "../components/ButtonComponent";
import HeadingComponent from "../components/HeadingComponent";
import InputFieldComponent from "../components/InputFieldComponent";
import Card from "../components/Card";
import HorizontalDivider from "../components/HorizontalDivider";
import Link from "../components/helpers/Link";
import IconButton from "../components/helpers/IconButton";
import ParagraphComponent from "../components/ParagraphComponent";
import image4 from "../assets/google.png";
import image5 from "../assets/facebook.png";

const Android5 = () => {
  const HighlightText = () => {
    return (
      <>
        Don’t have an account yet? <Link text="Create an account" />
      </>
    );
  };

  return (
    <Card>
      <HeadingComponent text="Welcome Back" />
      <InputFieldComponent type="email" placeholder="Email" />
      <InputFieldComponent
        type="password"
        placeholder="Password"
        showPasswordToggle={true}
      />
      <Link text="Forgot your password ?" />
      <ButtonComponent label="Sign In" />
      <HorizontalDivider />
      <div className="flex items-center justify-center space-x-4">
        {" "}
        <IconButton imageUrl={image4} />
        <IconButton imageUrl={image5} />
      </div>
      <div className="p-5">
        {" "}
        <ParagraphComponent text={<HighlightText />} position="center" />
      </div>
    </Card>
  );
};

export default Android5;
