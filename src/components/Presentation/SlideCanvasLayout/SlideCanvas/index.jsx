import { styled } from "styled-components";

import Object from "../Object";

function SlideCanvas({ canvasSpec, objects, onObjectRightClick }) {
  return (
    <Canvas spec={canvasSpec}>
      {objects.map((object) => (
        <Object
          key={object._id}
          id={object._id}
          objectSpec={object}
          onRightClick={onObjectRightClick}
        />
      ))}
    </Canvas>
  );
}

const Canvas = styled.div`
  position: relative;
  width: ${({ spec }) => spec.width / spec.scaleX}px;
  height: ${({ spec }) => spec.height / spec.scaleY}px;
  transform: scaleX(${({ spec }) => spec.scaleX})
    scaleY(${({ spec }) => spec.scaleY})
    translate(${({ spec }) => spec.translate});
  overflow: hidden;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export default SlideCanvas;
