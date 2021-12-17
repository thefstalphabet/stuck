import React from "react";
import styled from "styled-components";
import {
  AiFillLike,
  AiFillFire,
  AiFillHeart,
  AiOutlineLike,
} from "react-icons/ai";
import { MdInsertPhoto } from "react-icons/md";
import { FaFileVideo } from "react-icons/fa";
import { BiComment } from "react-icons/bi";
import { FiShare } from "react-icons/fi";
import { RiSendPlaneLine } from "react-icons/ri";
import { RiCalendarEventFill, RiArticleFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { connect } from "react-redux";
import PostModal from "./PostModal";
import { useState } from "react";

function Middle(props) {
  // State to close or display the model
  const [showModal, setShowModal] = useState("close");
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("close");
    }
  };

  return (
    <Container>
      <ShareBox>
        <div>
          {
            // If user exists then show its profile otherwisw show blank user profile
            props.user && props.user.photoURL ? (
              <img src={props.user.photoURL} alt="" />
            ) : (
              <img src="/Assets/user.svg" alt="" />
            )
          }
          <button onClick={handleClick}>Start a Post</button>
        </div>
        <div>
          <button>
            <MdInsertPhoto />
            <span>Photo</span>
          </button>
          <button>
            <FaFileVideo />
            <span>Video</span>
          </button>
          <button>
            <RiCalendarEventFill />
            <span>Event</span>
          </button>
          <button>
            <RiArticleFill />
            <span>Write Article</span>
          </button>
        </div>
      </ShareBox>
      <Article>
        <SharedActor>
          <a>
            <img src="/Assets/user.svg" alt="" />
            <div>
              <span>Title</span>
              <span>Info</span>
              <span>Date</span>
            </div>
          </a>
          <button>
            <BsThreeDots />
          </button>
        </SharedActor>
        <Discription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
          cupiditate.
        </Discription>
        <ShareTag>
          <a>
            <img src="/Assets/post.jpg" alt="" />
          </a>
        </ShareTag>
        <SocialCounts>
          <li>
            <button>
              <AiFillLike />
              <AiFillFire />
              <AiFillHeart />
              <span>78</span>
            </button>
          </li>
          <li>
            <a>2 Comments</a>
          </li>
        </SocialCounts>
        <SocialActions>
          <button>
            <AiOutlineLike />
            <span>Like</span>
          </button>
          <button>
            <BiComment />
            <span>Comment</span>
          </button>
          <button>
            <FiShare />
            <span>Share</span>
          </button>
          <button>
            <RiSendPlaneLine />
            <span>Send</span>
          </button>
        </SocialActions>
      </Article>
      <PostModal showModal={showModal} handleClick={handleClick} />
    </Container>
  );
}

// Styling
const Container = styled.div`
  grid-area: middle;
`;
const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-top: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: whilte;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.7);
      font-size: 16px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 400;
      span {
        margin-left: 2px;
        font-size: 14px
      }
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 0 16px 0 16px;
      padding-top: 10px;
      img {
        width: 45px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        font-size: 14px;
        border-radius: 35px;
        padding-left: 16px;
        border: 1.5px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      button {
        span {
          color: #0a66c2;
        }
      }
    }
  }
`;
const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;
const SharedActor = styled.div`
  padding-right: 40px;
  flex: no-wrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;
    img {
      width: 48px;
      height: 48px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(n + 1) {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
    font-size: 18px;
  }
`;
const Discription = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  text-align: left;
`;
const ShareTag = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: conatin;
    width: 100%;
    height: 100%;
  }
`;
const SocialCounts = styled.div`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 8px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 14px;
    button {
      color: var(--main-color);
      display: flex;
      border: none;
      font-size: 16px;
      background: transparent;
      span{
        color: rgba(0,0,0,0.8);
        margin-left: 5px;
      }
    }
  }
`;
const SocialActions = styled.div`
  align-items: center;
  display: flex;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: var(--main-color);

    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;

// State Managment
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Middle);