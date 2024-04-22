import axios from "./api";

export async function checkAuthentication() {
  const jwt_token = localStorage.getItem("jwt-token");
  try {
    if (jwt_token) {
      // Nếu có jwt_token, kiểm tra xem người dùng đã xác thực chưa bằng cách gọi API
      const response = await axios.get("/users/me");
      if (response) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function sendMeRequest() {
  const jwt_token = localStorage.getItem("jwt-token");
  try {
    if (jwt_token) {
      let response = await axios.get("/users/me");
      return response;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function sendLoginRequest(emailx, passwordx) {
  try {
    const response = axios.post("/login", {
      email: emailx,
      password: passwordx,
    });

    if (response) {
      return response;
    } else {
      throw new Error("Cannot log in");
    }
  } catch {
    return null;
  }
}

export async function sendLogoutRequest() {
  // let jwt_token = localStorage.getItem("jwt-token");
  axios
    .post("/logout")
    .then((response) => {
      localStorage.removeItem("jwt-token");
    })
    .catch((error) => {
      console.log(error);
    });
}
