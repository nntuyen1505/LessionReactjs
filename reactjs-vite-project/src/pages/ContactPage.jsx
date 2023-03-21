import React, { useState } from "react";
import Field from "../components/Field";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({});
  const [error, setError] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const errorObject = {};

    //validate
    if (!form.name?.trim()) {
      errorObject.name = "Please fill in this field";
    }
    if (!form.phone?.trim()) {
      errorObject.phone = "Please fill in this field";
    } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
      errorObject.phone = "Please enter this phone";
    }
    if (!form.email?.trim()) {
      errorObject.email = "Please fill in this field";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      errorObject.email = "Please enter this email";
    }

    if (
      form.website?.trim() &&
      !/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(
        form.website
      )
    ) {
      errorObject.website = "Please fill in this field";
    }
    if (!form.title?.trim()) {
      errorObject.title = "Please fill in this field";
    }
    if (!form.content?.trim()) {
      errorObject.content = "Please fill in this field";
    }

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
        <div className="register-course">
          <section className="section-1 wrap container">
            {/* <div class="main-sub-title">liên hệ</div> */}
            <h2 className="main-title">HỢP TÁC CÙNG Spacedev</h2>
            <p className="top-des">
              Đừng ngần ngại liên hệ với <strong>Spacedev</strong> để cùng nhau
              tạo ra những sản phẩm giá trị, cũng như việc hợp tác với các đối
              tác tuyển dụng và công ty trong và ngoài nước.
            </p>
            <form className="form" onSubmit={onSubmit}>
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
                label={"website"}
                placeholder={"Đường dẫn website http://"}
                type={"text"}
                required
                {...register("website")}
              />

              <Field
                label={"Tiêu đề"}
                placeholder={"Tiêu đề"}
                type={"text"}
                required
                {...register("title")}
              />

              <Field
                label={"Nội dung"}
                placeholder={"Nội dung"}
                type={"text"}
                required
                {...register("content")}
                renderInput={(props) => (
                  <textarea {...props} id cols={30} rows={10} />
                )}
              />
              <button className="btn main rect">đăng ký</button>
            </form>
          </section>
          {/* <div class="register-success">
                <div class="contain">
                    <div class="main-title">đăng ký thành công</div>
                    <p>
                        <strong>Chào mừng Vương Đặng đã trở thành thành viên mới của Spacedev Team.</strong> <br>
                        Cảm ơn bạn đã đăng ký khóa học tại <strong>Spacedev</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                        hoặc số điện thoại của bạn.
                    </p>
                </div>
                <a href="/" class="btn main rect">về trang chủ</a>
            </div> */}
        </div>
      </main>
      <Footer />
    </>
  );
}
