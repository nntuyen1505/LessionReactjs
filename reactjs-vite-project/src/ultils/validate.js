// rules = {
//   name: [{ required: true }],
//   email: [
//     { required: true, message: "Vui long nhap lai" },
//     { regexp: "", message: "xin vui long nhap dung dia chi email" },
//   ],
// };
// forms = {
//   name: "nguyen ngoc tuyen",
//   email: "sjdfnjsa@gamil.com",
// };

// errorObject = {
//   email: "xin vui long nhap dung dia chi email",
// };

const REGEXP = {
  phone: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  website:
    /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
};

const ERROR_MESSAGE = {
  required: "Please fill in this field",
  regexp: "Field not like format",
};

/**
 *
 * @param {*} rules
 * @param {*} form
 * @returns plan error object
 */

export const validate = (rules, form) => {
  console.log("form", form);
  let errorObject = {};
  for (let name in rules) {
    for (let rule of rules[name]) {
      if (rule.required) {
        if (!form[name]?.trim()) {
          if (form && form?.name?.length < 2) {
            console.log("abababbaba");
            errorObject.name = "Họ và tên phải lớn hơn 2 ký tự";
          }
          errorObject[name] = rule.message || ERROR_MESSAGE.required;
        }
      }

      if (rule.regexp && form[name]) {
        let regexp = rule.regexp;
        if (regexp in REGEXP) {
          regexp = REGEXP[regexp];
        } else if (!(regexp instanceof RegExp)) {
          regexp = new RegExp();
        }

        if (!regexp.test(form[name])) {
          errorObject[name] = rule.message || ERROR_MESSAGE.regexp;
        }
      }
    }
  }
  return errorObject;
};

export const required = (message) => ({
  required: true,
  message,
});

export const regexp = (pattern, message) => ({
  regexp: pattern,
  message,
});
