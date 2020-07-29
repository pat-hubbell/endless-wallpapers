import React from "react";
import styled from "styled-components";

export default function Images() {
  return <Imgs.Container id="image-container"></Imgs.Container>;
}

const Imgs = {
  Container: styled.div`
    margin: 10px 30%;

    & img {
      margin-top: 10px;
      width: 100%;
    }
  `,
};