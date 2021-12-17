import React from "react";
import styled from "styled-components";
import { ImCross } from "react-icons/im";
import { BsFillImageFill } from "react-icons/bs";
import { RiVideoFill } from "react-icons/ri";
import { MdModeComment } from "react-icons/md";
import { useState } from "react";

function PostModal(props) {
  // state for textarea text
  const [editorText, setEditorText] = useState("");
  const reset = (e) => {
    setEditorText("");
    props.handleClick(e);
  };

  return (
    <>
      {props.showModal === "open" && (
        <Container>
          <Content>
            <Header>
              <h2>Create a Post</h2>
              <button onClick={(event) => reset(event)}>
                <ImCross />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                <img src="/Assets/user.svg" alt="" />
                <span>Name</span>
              </UserInfo>
              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="What to you want to talk about"
                  autoFocus={true}
                />
              </Editor>
            </SharedContent>
            <ShareCreation>
              <AttachAssets>
                <AssetButton>
                  <BsFillImageFill />
                </AssetButton>
                <AssetButton>
                  <RiVideoFill />
                </AssetButton>
              </AttachAssets>
              <ShareComment>
                <AssetButton>
                  <MdModeComment /> Anyone
                </AssetButton>
              </ShareComment>
              <PostButton disabled={!editorText ? true : false}>Post</PostButton>
            </ShareCreation>
          </Content>
        </Container>
      )}
    </>
  );
}

// Styling
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  color: black;
  background-color: rgba(0, 0, 0, 0.5);
  animation: 1s;
`;
const Content = styled.div`
  width: 100%;
  max-width: 522px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 12px;
  margin: 0 auto;
`;
const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);
    &:first-child {
      pointer-events: none;
    }
  }
`;
const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  img {
    width: 40px;
    height: 40px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;
const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;
const AttachAssets = styled.div`
  align-items: center;
  display: flex;
  padding-right: 8px;
`;
const AssetButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  padding: 5px;
  min-width: auto;
  color: rgba(0, 0, 0, 0.5);
`;
const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
`;
const PostButton = styled.button`
  min-width: 60px;
  border-radius: 20px;
  padding-left: 16px;
  border: 1px;
  padding-right: 16px;
  background: var(--main-color);
  color: white;
  &:hover {
    background: white;
    color: var(--main-color);
    border: 1px solid var(--main-color);
  }
`;
const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
  }
  input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;
export default PostModal;