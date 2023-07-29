import { styled } from "styled-components";
import Object from "../../PresentationHeader/Object";

function SlideCanvas({ canvasSpec, objects }) {
  return (
    <Canvas spec={canvasSpec}>
      {objects &&
        objects.map((object) => <Object key={object._id} type={object.type} />)}
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
  border: 1px solid #222;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export default SlideCanvas;
