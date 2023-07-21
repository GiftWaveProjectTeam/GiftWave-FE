export const validateUserId = (userId: string) => {
  const userIdRegex = /^[a-zA-Z0-9]{8,30}$/;
  return userIdRegex.test(userId);
};

export const validateUserIdEmpty = (userId: string) => {
  return userId ? true : false;
};

export const validatePassword = (password: string) => {
  const passwordRegex = /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{8,15}/;
  return passwordRegex.test(password);
};

export const validateBirthday = (birthday: string) => {
  const [year, month, day] = birthday.split("-").map(Number);

  const curDate = new Date();
  const curYear = curDate.getFullYear();
  const curMonth = curDate.getMonth();
  const curDay = curDate.getDay();

  if (
    1900 <= year &&
    year <= curYear &&
    1 <= month &&
    month <= curMonth &&
    1 <= curDay &&
    curDay <= 31
  ) {
    return true;
  } else {
    return false;
  }
};

export const validatePasswordEmpty = (password: string) => {
  return password ? true : false;
};

export const validatePasswordConfirm = (
  password: string,
  passwordConfirm: string
) => {
  return password === passwordConfirm ? true : false;
};

export const validatePasswordConfirmEmpty = (passwordConfirm: string) => {
  return passwordConfirm ? true : false;
};

export const validatePhoneEmpty = (phone: string) => {
  return phone ? true : false;
};
