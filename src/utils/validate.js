export const validateSignIn = (email, password) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";
  return null;
};
export const validateSignUp = (f_name, l_name, email, password) => {
  const isF_nameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(f_name);
  const isL_nameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(l_name);
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isF_nameValid) return "First Name is not valid";
  if (!isL_nameValid) return "Last Name is not valid";
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";
  return null;
};
