import React from "react";

export default function Header() {
  return (
    <>
      <header id="header">
        <div className="wrap">
          <div className="menu-hambeger">
            <div className="button">
              <span />
              <span />
              <span />
            </div>
            <span className="text">menu</span>
          </div>
          <a href="./" className="logo">
            <img src="img/logo.svg" alt="" />
            <h1>Spacedev</h1>
          </a>
          <div className="right">
            <div className="have-login">
              <div className="account">
                <a href="./profile.html" className="info">
                  <div className="name">Đặng Thuyền Vương</div>
                  <div className="avatar">
                    <img src="img/avt.png" alt="" />
                  </div>
                </a>
              </div>
              <div className="hamberger"></div>
              <div className="sub">
                <a href="#">Khóa học của tôi</a>
                <a href="#">Thông tin tài khoản</a>
                <a href="#">Đăng xuất</a>
              </div>
            </div>
            {/* <div class="not-login bg-none">
                    <a href="#" class="btn-register">Đăng nhập</a>
                    <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
                </div> */}
          </div>
        </div>
        <div className="progress" />
      </header>
      <nav className="nav">
        <ul>
          <li>
            <a href="./signin.html">Đăng ký / Đăng nhập</a>
          </li>
          <li>
            <a href="./profile.html" className="account">
              <div className="avatar">
                <img src="img/avt.png" alt="" />
              </div>
              <div className="name">Đặng Thuyền Vương</div>
            </a>
          </li>
          <li>
            <a className="active" href="./">
              Trang chủ
            </a>
          </li>
          <li>
            <a href="./team.html">Spacedev Team</a>
          </li>
          <li>
            <a href="./course-list.html">Khóa Học</a>
          </li>
          <li>
            <a href="./project.html">Dự Án</a>
          </li>
          <li>
            <a href="./contact.html">Liên hệ</a>
          </li>
        </ul>
      </nav>
      <div className="overlay_nav" />
    </>
  );
}
