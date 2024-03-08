import moment from "moment";

export const formatAmount = (amount: number) => {
  if (isNaN(amount) || amount === 0) {
    return "₦0.00";
  }
  return amount.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
  });
};

export const processNumber = (phoneNumber: string) => {
  if (phoneNumber) {
    let phone = phoneNumber.replace(/\s+/g, ""); //Remove spaces
    let firstDigit = phone.charAt(0);

    if (firstDigit == "0") {
      return "+234" + phone.slice(1);
    } else if (firstDigit == "2") {
      return "+2" + phone.slice(1);
    } else if (firstDigit == "+") {
      return phone;
    }
  }
  return "";
};

export const validateEmail = (email: string) => {
  if (email) {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  }
};

export const validatePassword = (password: string) => {
  if (password) {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d\s])[\s\S]{8,}$/;
    return regex.test(password);
  }
};

export const validatePhone = (phone: string) => {
  if (phone.length) {
    if (phone.charAt(0) == "0" && phone.length !== 11) {
      return false;
    } else if (phone.charAt(0) == "2" && phone.length !== 13) {
      return false;
    } else {
      return true;
    }
  }
};

export const formatDate = (
  date: Date,
  pastTime = false,
  style = "Do MMM YYYY"
): string => {
  if (!pastTime) return moment.utc(date).format(style);

  return moment(date).fromNow();
};
