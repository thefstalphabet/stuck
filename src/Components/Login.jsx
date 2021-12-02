import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";

function Login() {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/Assets/logo2.png" alt="logo" />
        </a>
        <div>
          <Join>Join Now</Join>
          <SignIn>Sign In</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Be Imagine, Be Artistic, and let’s Engage</h1>
          <img src="/Assets/friends.svg" alt="image1" />
        </Hero>
        <Form>
          <Google>
            <FcGoogle />
            Sign In with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
}

// Styling
const Container = styled.div`
  padding: 0px;
`;
const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a > img {
    width: auto;
    height: 50px;

    // On mobile screen
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;
const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;
const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px var(--main-color);
  color: var(--main-color);
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);

  &:hover {
    background-color: var(--main-color);
    color: #ffffff;
    text-decoration: none;
  }
`;
const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;
const Hero = styled.div`
  width: 100%;
  text-align: center;

  h1 {
    padding-bottom: 0;
    width: 40%;
    font-size: 50px;
    color: var(--main-color);
    font-weight: 400;
    line-height: 70px;
    text-align: left;

    @media (max-width: 830px) {
      text-align: center;
      font-size: 30px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    width: 37rem;
    height: auto;
    position: absolute;
    bottom: 130px;
    right: -10px;

    @media (max-width: 830px) {
      top: 230px;
      width: 27rem;
      position: initial;
    }
  }
`;
const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  
  @media (max-width: 768px) {
    margin-top: 20px;
    width: 100%;
  }
`;
const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border: 2px solid var(--main-color);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: var(--main-color);
  border-radius: 24px;
  transition-duration: 167ms;

  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;

export default Login;
