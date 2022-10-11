import { useMap } from "react-leaflet";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

const Zoom = () => {
  const map = useMap();
  console.log(map);

  const zoomIn = (e) => {
    e.preventDefault();
    map.setZoom(map.getZoom() + 1);
  };
  const zoomOut = (e) => {
    e.preventDefault();
    map.setZoom(map.getZoom() - 1);
  };

  return (
    <div
      style={{
        // border: "1px solid #D3D3D3",
        padding: "5px",
        cursor: "pointer",
        // borderRadius: "65px",
        display: "flex",
        width: "100%",
      }}
    >
      <a
        style={{
          padding: "5px",
          cursor: "pointer",
          border: "1px solid #D3D3D3",
          borderRadius: "65px",
        }}
        className="leaflet-control-zoom-in"
        href="/"
        title="Zoom in"
        role="button"
        aria-label="Zoom in"
        onClick={zoomIn}
      >
        +
      </a>

      <Slider
        aria-label="slider-ex-1"
        defaultValue={0}
        style={{ width: "65% !important", marginLeft: "10px" }}
        onChange={()=>{}}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <a
        style={{
          padding: "5px",
          cursor: "pointer",
          border: "1px solid #D3D3D3",
          borderRadius: "65px",
        }}
        className="leaflet-control-zoom-out"
        href="/"
        title="Zoom out"
        role="button"
        aria-label="Zoom out"
        onClick={zoomOut}
      >
        −
      </a>
    </div>
  );
};

export default Zoom;
