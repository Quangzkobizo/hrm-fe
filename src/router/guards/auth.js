import { checkAuthentication } from "../../apicall";

export const authGuard = async (router) => {
  router.beforeEach(async (to, from, next) => {
    try {
      // Kiểm tra xem người dùng đã đăng nhập chưa
      let isAuthenticated = await checkAuthentication();
      if (isAuthenticated) {
        // Nếu đã đã xác thực, không cho vào trang đăng nhập
        if (to.path === "/login") {
          next("/dashboard");
        } else {
          next();
        }
      } else {
        // Nếu chưa đăng nhập, kiểm tra xem route hiện tại có phải là trang đăng nhập không
        // Nếu đúng, tiếp tục cho phép điều hướng để tránh vòng lặp

        if (to.path === "/login") {
          next();
        } else {
          // Nếu không phải trang đăng nhập, chuyển hướng đến trang đăng nhập
          next("/login");
        }
      }
    } catch (error) {
      console.error(error);
      // Xử lý lỗi nếu cần thiết
      next(false);
    }
  });
};

export default authGuard;
