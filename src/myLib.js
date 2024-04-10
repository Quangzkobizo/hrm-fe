import axios from 'axios';

// export async function getUserLoggingIn(jwt_token) {
//     try {
//         const response = await axios.get(`http://localhost:8000/api/user/me`);
//         return response.data.info;
//     } catch (error) {
//         console.error("Error fetching info:", error);
//         return null;
//     }
// }

export async function login(emailz, passwordz){
    axios
        .post('http://localhost:8000/api/login',{
          email: emailz,
          password: passwordz,
        })
        .then((response)=>{
          console.log(response);
          return response;

          //this.errorMessage = "";
          //localStorage.setItem('jwt-token', response.data.authorisation.token);
          //this.$router.push('/dashboard');
        })
        .catch((error)=>{
          console.log("error : "+ error);
          return null;
          //this.errorMessage = "Wrong email or password"
        })
}