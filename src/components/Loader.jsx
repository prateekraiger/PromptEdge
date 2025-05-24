import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="boxes">
        <div className="box">
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className="box">
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className="box">
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className="box">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom right, #111827, #1f2937);

  .boxes {
    --size: 32px;
    --duration: 800ms;
    height: calc(var(--size) * 2);
    width: calc(var(--size) * 3);
    position: relative;
    transform-style: preserve-3d;
    transform-origin: 50% 50%;
    margin-top: calc(var(--size) * 1.5 * -1);
    transform: rotateX(60deg) rotateZ(45deg) rotateY(0deg) translateZ(0px);
  }

  .boxes .box {
    width: var(--size);
    height: var(--size);
    top: 0;
    left: 0;
    position: absolute;
    transform-style: preserve-3d;
  }

  .boxes .box:nth-child(1) {
    transform: translate(100%, 0);
    -webkit-animation: box1 var(--duration) linear infinite;
    animation: box1 var(--duration) linear infinite;
  }

  .boxes .box:nth-child(2) {
    transform: translate(0, 100%);
    -webkit-animation: box2 var(--duration) linear infinite;
    animation: box2 var(--duration) linear infinite;
  }

  .boxes .box:nth-child(3) {
    transform: translate(100%, 100%);
    -webkit-animation: box3 var(--duration) linear infinite;
    animation: box3 var(--duration) linear infinite;
  }

  .boxes .box:nth-child(4) {
    transform: translate(200%, 0);
    -webkit-animation: box4 var(--duration) linear infinite;
    animation: box4 var(--duration) linear infinite;
  }

  .boxes .box > div {
    --background: #8b5cf6; /* Violet-500 */
    --top: auto;
    --right: auto;
    --bottom: auto;
    --left: auto;
    --translateZ: calc(var(--size) / 2);
    --rotateY: 0deg;
    --rotateX: 0deg;
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--background);
    top: var(--top);
    right: var(--right);
    bottom: var(--bottom);
    left: var(--left);
    transform: rotateY(var(--rotateY)) rotateX(var(--rotateX))
      translateZ(var(--translateZ));
  }

  .boxes .box > div:nth-child(1) {
    --top: 0;
    --left: 0;
  }

  .boxes .box > div:nth-child(2) {
    --background: #a78bfa; /* Violet-400 */
    --right: 0;
    --rotateY: 90deg;
  }

  .boxes .box > div:nth-child(3) {
    --background: #c4b5fd; /* Violet-300 */
    --rotateX: -90deg;
  }

  .boxes .box > div:nth-child(4) {
    --background: #ddd6fe; /* Violet-200 */
    --top: 0;
    --left: 0;
    --translateZ: calc(var(--size) * 3 * -1);
  }

  @-webkit-keyframes box1 {
    0%,
    50% {
      transform: translate(100%, 0);
    }

    100% {
      transform: translate(200%, 0);
    }
  }

  @keyframes box1 {
    0%,
    50% {
      transform: translate(100%, 0);
    }

    100% {
      transform: translate(200%, 0);
    }
  }

  @-webkit-keyframes box2 {
    0% {
      transform: translate(0, 100%);
    }

    50% {
      transform: translate(0, 0);
    }

    100% {
      transform: translate(100%, 0);
    }
  }

  @keyframes box2 {
    0% {
      transform: translate(0, 100%);
    }

    50% {
      transform: translate(0, 0);
    }

    100% {
      transform: translate(100%, 0);
    }
  }

  @-webkit-keyframes box3 {
    0%,
    50% {
      transform: translate(100%, 100%);
    }

    100% {
      transform: translate(0, 100%);
    }
  }

  @keyframes box3 {
    0%,
    50% {
      transform: translate(100%, 100%);
    }

    100% {
      transform: translate(0, 100%);
    }
  }

  @-webkit-keyframes box4 {
    0% {
      transform: translate(200%, 0);
    }

    50% {
      transform: translate(200%, 100%);
    }

    100% {
      transform: translate(100%, 100%);
    }
  }

  @keyframes box4 {
    0% {
      transform: translate(200%, 0);
    }

    50% {
      transform: translate(200%, 100%);
    }

    100% {
      transform: translate(100%, 100%);
    }
  }
`;

export default Loader;
