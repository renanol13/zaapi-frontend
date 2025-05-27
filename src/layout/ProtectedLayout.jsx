import Container from "./Container";
import NavBar from "./NavBar";

const ProtectedLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container>{children}</Container>
    </>
  );
};

export default ProtectedLayout;
