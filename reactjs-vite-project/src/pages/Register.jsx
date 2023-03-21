import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Field from "../components/Field";
import { regexp, required, validate } from "../ultils/validate";

export default function Register() {
  const [form, setForm] = useState({});
  const [error, setError] = useState({});

  const onSubmit = () => {
    const errorObject = validate(
      {
        name: [required("Xin vui lòng nhập họ và tên")],
        phone: [required(), regexp("phone")],
        email: [required(), regexp("email")],
        facebook: [
          required(),
          regexp(
            /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/,
            "Xin vui lòng nhập đúng URL Facebook"
          ),
        ],
      },
      form
    );

    setError(errorObject);

    if (Object.keys(errorObject).length === 0) {
      console.log("Validate success :>> ");
    } else {
      console.log("Validate error :>> ");
    }
  };

  const register = (name) => {
    return {
      value: form[name] || "",
      onChange: (e) => setForm({ ...form, [name]: e.target.value }),
      error: error[name],
    };
  };
  return (
    <>
      <Header />
      <main id="main">
        <section className="register-course">
          <div className="container">
            <div className="wrap container">
              <div className="main-sub-title">ĐĂNG KÝ</div>
              <h1 className="main-title">Thực chiến Reactjs Advanced </h1>
              <div className="main-info">
                <div className="date">
                  <strong>Khai giảng:</strong> 15/11/2020
                </div>
                <div className="time">
                  <strong>Thời lượng:</strong> 18 buổi
                </div>
                <div className="time">
                  <strong>Học phí:</strong> 6,000,000 VND
                </div>
              </div>
              <div className="form">
                <Field
                  label={"Họ và tên"}
                  placeholder={"Họ và tên"}
                  type={"text"}
                  required
                  {...register("name")}
                />
                <Field
                  label={"Số điện thoại"}
                  placeholder={"Số điện thoại"}
                  type={"text"}
                  required
                  {...register("phone")}
                />
                <Field
                  label={"Email"}
                  placeholder={"Email của bạn"}
                  type={"text"}
                  required
                  {...register("email")}
                />

                <Field
                  label={"URL Facebook"}
                  placeholder={"https://facebook.com"}
                  type={"text"}
                  required
                  {...register("facebook")}
                />
                <Field
                  label={"Sử dụng COIN"}
                  placeholder={"Nội dung"}
                  type={"text"}
                  {...register("coin")}
                  renderInput={(props) => (
                    <div className="checkcontainer">
                      Hiện có <strong>300 COIN</strong>
                      <input type="checkbox" {...props} />
                      <span className="checkmark" />
                    </div>
                  )}
                />
                <Field
                  label={"Hình thức thanh toán"}
                  type={"text"}
                  {...register("payment")}
                  renderInput={(props) => (
                    <div className="select">
                      <div className="head">Chuyển khoản</div>
                      <div className="sub">
                        <a href="#">Chuyển khoản</a>
                        <a href="#">Thanh toán tiền mặt</a>
                      </div>
                    </div>
                  )}
                />
                <Field
                  label={"Ý kiến cá nhân"}
                  placeholder={"Mong muốn cá nhân và lịch bạn có thể học."}
                  type={"text"}
                  {...register("note")}
                />

                <button onClick={onSubmit} className="btn main rect">
                  đăng ký
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
