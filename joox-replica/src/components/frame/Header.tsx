import React from "react";

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
  return (
    <header>
      <div className="logo-wrap">
        <span className="logo"></span>
      </div>
      <div className="form-wrap">
        <form>
          <input
            type="text"
            placeholder="ค้นหาเพลง ศิลปิน อัลบัม และเพลย์ลิสต์"
            autoComplete="off"
            className="form-expand"
            value=""
          />
        </form>
      </div>
      <div className="btn-download-wrap">
        <button className="btn btn-round btn-green btn-download">
          โหลดแอป JOOX บนพีซี
        </button>
      </div>
      <div className="btn-wrap">
        <button className="btn btn-round btn-silhouette btn-login">
          เข้าสู่ระบบ
        </button>
      </div>
      <div className="btn-wrap">
        <button className="btn btn-round btn-silhouette bton-register">
          สมัครสมาชิก
        </button>
      </div>
    </header>
  );
};

export default Header;
