import styles from "./header.module.css";
import { useRef, useCallback, useEffect, useState } from "react";
// import SearchBox from "../searchbox/index";
import DropdownHeader from "../dropdownHeader/index";
import { Switch } from '@chakra-ui/react'
// import SearchHistory from '../searchHistory/index'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function HeaderPage() {
  const [isShow, setIsShow] = useState(false);
  const [currentType, setCurrentType] = useState("");
  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const MenuKhuVuc = [
    {
      id: "1",
      name: "Khu Vực",
      type: "1",
      option: [
        {
          id: "1",
          lable: "Tỉnh/Thành Phố",
          select: [
            {
              id: "1",
              options: "Đà Nẵng",
            },
            {
              id: "2",
              options: "Hà Nội",
            },
            {
              id: "2",
              options: "Hồ Chí Minh",
            },
          ],
        },
        {
          id: "2",
          lable: "Quận/Huyện",
          select: [
            {
              id: "1",
              options: "Đà Nẵng",
            },
            {
              id: "2",
              options: "Hà Nội",
            },
            {
              id: "2",
              options: "Hồ Chí Minh",
            },
          ],
        },
        {
          id: "3",
          lable: "Xã/Phường",
          select: [
            {
              id: "1",
              options: "Đà Nẵng",
            },
            {
              id: "2",
              options: "Hà Nội",
            },
            {
              id: "2",
              options: "Hồ Chí Minh",
            },
          ],
        },
        {
          id: "4",
          lable: "Dự án",
          select: [
            {
              id: "1",
              options: "Đà Nẵng",
            },
            {
              id: "2",
              options: "Hà Nội",
            },
            {
              id: "2",
              options: "Hồ Chí Minh",
            },
          ],
        },
      ],
    },
    {
      id: "2",
      name: "Tờ thửa",
      type: "2",
      option: [
        {
          id: "1",
          lable: "Số tờ",
          select: [],
        },
        {
          id: "2",
          lable: "Số thửa",
          select: [],
        },
        {
          id: "3",
          lable: "Quận/Huyện",
          select: [
            {
              id: "1",
              options: "Đà Nẵng",
            },
            {
              id: "2",
              options: "Hà Nội",
            },
            {
              id: "2",
              options: "Hồ Chí Minh",
            },
          ],
        },
      ],
    },
  ];
  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "#FFFFFF",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          height: "60px",
        }}
      >
        <img
          src="https://staticfile.batdongsan.com.vn/images/logo/standard/red/logo.svg"
          alt=""
          style={{ width: "180px", marginRight: "50px" }}
        />
        <div className={styles.menuHeader}>
          {MenuKhuVuc.map((item, index) => {
            return (
              <>
                <button
                  key={index}
                  // value={currentType}
                  onClick={() => {
                    setCurrentType(item.type);
                    setIsShow(!isShow);
                    // console.log('currenType',currentType)
                  }}
                  style={{
                    border: "1px solid #D3D3D3",
                    width: "35%",
                    height: "40px",
                    borderRadius: "7px",
                    marginLeft: "30px",
                  }}
                  id={item.id}
                >
                  <div style={{ textAlign: "center", paddingTop: "5px" }}>
                    {item.name}
                    {/* <FontAwesomeIcon icon={faChevronDown} /> */}
                  </div>
                </button>
                {currentType === item.type ? (
                  <div
                    values={currentType}
                    style={{
                      border: "1px solid #D3D3D3",
                      height: "auto",
                      borderRadius: "7px",
                      display: !isShow ? "none" : "flex",
                      flexDirection: "column",
                      position: "absolute!important",
                      zIndex: "1000",
                      backgroundColor: "#fff",
                      padding: "7px",
                      marginTop: "43px",
                      width: "10%",
                      left: "328px",
                      position: "absolute",
                    }}
                  >
                    {item.option.map((values, index) => {
                      return (
                        <>
                          <label>{values.lable}</label>
                          <select
                            style={{
                              border: "1px solid #D3D3D3",
                              borderRadius: "5px",
                            }}
                          >
                            {values.select.map((option) => {
                              return <option>{option.options}</option>;
                            })}
                          </select>
                        </>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
        <Switch id='email-alerts' />
        {/* <label className={styles.switch}>
          <input type="checkbox" className={styles.checkbox} checked />
          <div className={`${styles.slider} ${styles.round}`}></div>
        </label> */}
        <div style={{ width: "100px", marginLeft: "10px" }}>Xem tin BDS</div>
        <div
          direction="vertical"
          style={{
            width: "50%",
            height: "42px",
            border: "none",
            outline: "none",
            borderRadius: "20px",
            padding: "0px 56px 6px 46px",
            display: "flex",
          }}
        >
          {/* <SearchBox /> */}
        </div>

        <div>
          <button
            style={{ marginLeft: "150px" }}
            type="primary"
            onClick={() => {
              setIsShowDropdown(!isShowDropdown);
            }}
          >
            Đăng Nhập
          </button>
          <DropdownHeader
            isShow={isShowDropdown}
            onClick={() => {
              console.log("");
            }}
          />
          {/* <SearchHistory /> */}
        </div>
      </div>
    </>
  );
}
export default HeaderPage;
