export default function DropdownHeader({ isShow, onClick }) {
  return (
    <>
      <div
        onClick={onClick}
        values={isShow}
        style={{
          border: "1px solid #D3D3D3",
          borderRadius: "7px",
          marginLeft: "30px",
          display: isShow ? "flex" : "none",
          zIndex: "999",
          top: "50px",
          right: "33px",
          position: "absolute",
          flexDirection: "column",
          backgroundColor: "#fff",
          padding: "15px",
        }}
      >
        <ul style={{ listStyle: "none" }}>
          <li>Lịch sử tra cứu</li>
          <li>Tin đã lưu</li>
          <li>Quản lí tài khoản</li>
          <li>Đăng xuất</li>
        </ul>
      </div>
    </>
  );
}
