// import React, { useEffect, useRef } from "react";
// import ReactDOM from "react-dom";
// import PropTypes from "prop-types";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faSearch } from "@fortawesome/free-solid-svg-icons";

// let searchBox;
// const SearchBox = (props) => {
//   const { onPlacesChanged } = props;
//   const inputRef = useRef(null);

//   const handlePlacesChanged = () => {
//     if (onPlacesChanged) {
//       onPlacesChanged(searchBox?.getPlaces());
//     }
//   };

//   // useEffect(() => {
//   //   // eslint-disable-next-line react/no-find-dom-node
//   //   const input = ReactDOM.findDOMNode(inputRef.current);
//   //   searchBox = new google.maps.places.SearchBox(input);
//   //   searchBox.addListener("places_changed", handlePlacesChanged);

//   //   return () => {
//   //     google.maps.event.clearInstanceListeners(searchBox);
//   //   };
//   // }, []);

//   // eslint-disable-next-line react/jsx-props-no-spreading
//   return (
//     <>
//       <input
//         ref={inputRef}
//         //   id="pac-input"
//         style={{
//           border: "1px solid #D3D3D3",
//           width: "100%",
//           borderRadius: "7px",
//           height: "40px",
//           padding: "17px",
//         }}
//         {...props}
//         placeholder="Nhập tọa độ, số tờ số thửa ..."
//       />
//       {/* <FontAwesomeIcon
//         style={{
//           color: "#ffff",
//           position: "absolute",
//           top: "1px",
//           left: "175px",
//           fontSize: "20px",
//         }}
//         icon={faSearch}
//         // onClick={()=>{console.log()}}
//       /> */}
//     </>
//   );
//   //    <input ref={inputRef} {...props} type="text" />;
// };

// // SearchBox.propTypes = {
// //   placeholder: PropTypes.string,
// //   onPlacesChanged: PropTypes.func,
// // };

// export default SearchBox;


