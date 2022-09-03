import Cookies from "js-cookie";

var config = () => {
  var cookie = Cookies.get("Authorization");
  if (cookie) {
    var con = {
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    };
    return con;
  }
};

export default config;
