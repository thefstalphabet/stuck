import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import Left from "../Components/Left";
import Middle from "../Components/Middle";
import Right from "../Components/Right";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

function Home(props) {
  return (
    <Conatiner>
      {!props.user && <Navigate to="/" />}
      <Header />
      <Section>
        Welcome to the <span>Stuck! Community,</span> Helping you open windows
        of opportunity worldwide.
      </Section>
      <Layout>
        <Left />
        <Middle />
        <Right />
      </Layout>
    </Conatiner>
  );
}

const Conatiner = styled.div``;
const Section = styled.div`
  /* padding-top: 80px; */
  margin-top: 25px;
  text-align: center;
  font-size: 15px;
  font-weight: 400px;

  span {
    font-weight: 600;
  }
`;
const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside middle rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  margin: 25px 10px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Home);
