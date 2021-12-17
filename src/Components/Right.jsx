import React from "react";
import styled from "styled-components";

function Right() {
  return (
    <Container>
      <FollowCard>
        <Title>
          <span>Add to Your Feed</span>
          <img src="/Assets/feed-icon.svg" alt="" />
        </Title>
        <FeedList>
          <li>
            <div>
              <span>#stuck</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <div>
              <span>#vedio</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <div>
              <span>#vedio</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>
        <Recommendation>
          View all recommendations
          <img src="/images/right-icon.svg" alt="" />
        </Recommendation>
        <BannerCard>
          <img
            src="https://bannersmall.com/wp-content/uploads/2018/07/Ad-word_New-logo_2x.png"
            alt=""
          />
        </BannerCard>
      </FollowCard>
    </Container>
  );
}

// Styling
const Container = styled.div`
  grid-area: rightside;
`;
const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;
const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
  img{
    width: 5%;
  }
`;
const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    & > div {
      display: flex;
      flex-direction: column;
    }
    button {
      background-color: transparent;
      padding: 14px;
      color: var(--main-color);
      align-items: center;
      border: 1.5px solid var(--main-color);
      border-radius: 15px;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      outline: none;
    }
  }
`;
const Recommendation = styled.div`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
`;
const BannerCard = styled(FollowCard)`
  img {
    width: 100%;
    height: 100%;
  }
`;
export default Right;