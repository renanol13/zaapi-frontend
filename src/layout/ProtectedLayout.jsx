import Container from "./Container";
import Header from "./Header";
import NavBar from "./NavBar";

const ProtectedLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default ProtectedLayout;
