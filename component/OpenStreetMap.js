import React, { useState, useRef,  useEffect } from "react";
import { MapContainer, TileLayer, Marker,useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet-geosearch/dist/geosearch.css";
import icon from '../component/constants/index'
import Zoom from '../component/zoom/zoom'

const Map2 = () => {
  const [center, setCenter] = useState({ lat: -4.043477, lng: 39.668205 });
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();
  const router = useRouter();
  const [checkBoxVisible, setCheckBoxvisible] = useState(false);
  const [curentRadio, setCurentRadio] = useState("roadmap");

  const layerSetting = () => {
    setCheckBoxvisible(!checkBoxVisible);
  };

  function onChangeRadio(e) {
    const newCurentRadio = e.target.value;
    setCurentRadio(newCurentRadio);
  }

  function LeafletgeoSearch() {
    const map = useMap();
    useEffect(() => {
      const provider = new OpenStreetMapProvider();
  
      const searchControl = new GeoSearchControl({
        provider,
        marker: {
          icon
        }
      });
  
      map.addControl(searchControl);
  
      return () => map.removeControl(searchControl);
    }, []);
  
    return null;
  }

  return (
    <>
      <MapContainer
        center={center}
        zoom={ZOOM_LEVEL}
        ref={mapRef}
        style={{ height: "94vh" }}
        zoomControl={false}
        minZoom={3}
        maxZoom={18}
      >
        <LeafletgeoSearch />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          option={{
            subdomains:['mt1','mt2','mt3']
          }}
          
        />
        <div
          style={{
            position: "absolute",
            zIndex: "999",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              width: "385px",
              display: "flex",
              height: "35px",
              borderRadius: "5px",
              alignItems: "center",
              position: "absolute",
              left: "50px",
              top: "20px",
            }}
          >
            <div
              style={{
                width: "26%",
                fontSize: "15px",
                fontWeight: "700",
                paddingLeft: "10px",
              }}
              onClick={layerSetting}
            >
              Loại QH
            </div>
            <FontAwesomeIcon
              style={{
                fontSize: "15px",
                color: "#808494",
                cursor: "pointer",
                // display: checkBoxVisible ? "none" : "flex",
                // position: "absolute",
                // top: "0px",
                // left: "916px",
              }}
              icon={faChevronDown}
              onClick={layerSetting}
            />
            <Zoom />
          </div>
          <div
            id="layerCheckbox"
            style={{
              width: "193px",
              display: checkBoxVisible ? "flex" : "none",
              transition: "width 2s, height 4s",
              flexDirection: "column",
              backgroundColor: "white",
              // padding: "5px",
              borderRadius: "5px",
              boxShadow: "1px 2px #FFFFFF",
              position: "absolute",
              top: "59px",
              left: "50px",
            }}
          >
            <div style={{ padding: "20px" }}>
              <label className="lable-all" style={{ fontWeight: 700 }}>
                Loại bản đồ
              </label>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ marginTop: "5px" }}>
                  <input
                    type="radio"
                    name="curentRadio"
                    value="satellite"
                    checked={curentRadio === "satellite"}
                    onChange={onChangeRadio}
                  />
                  Google Map
                </label>

                <lable style={{ marginTop: "5px" }}>
                  <input
                    type="radio"
                    name="curentRadio"
                    value="openstreetmap"
                    checked={curentRadio === "openstreetmap"}
                    onChange={onChangeRadio}
                    onClick={() => router.push("/streetmap")}
                  />
                  Openstreetmap
                </lable>
              </div>
              <label className="lable-all" style={{ fontWeight: 700 }}>
                Bản đồ quy hoạch
              </label>
              <div style={{ marginTop: "5px" }}>
                <label>
                  <input type="checkbox" />
                  Nền bản đồ Việt Nam
                </label>
              </div>
              <div style={{ marginTop: "5px" }}>
                <label>
                  <input type="checkbox" />
                  Quy hoạch tổng thể
                </label>
              </div>
              <div style={{ marginTop: "5px" }}>
                <label>
                  <input type="checkbox" />
                  Quy hoạch phân khu
                </label>
              </div>
              <div style={{ marginTop: "5px" }}>
                <label>
                  <input type="checkbox" />
                  Quy hoạch phân lô
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* {location.loaded && !location.error && (
                  <Marker
                    position={[
                      location.coordinates.lat,
                      location.coordinates.lng,
                    ]}
                  >
                  </Marker>
                )} */}
      </MapContainer>
    </>
  );
};

export default Map2;
