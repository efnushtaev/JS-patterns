//
// It is useful when you need prevent creating equal object from different parts of app
//

const Singleton = (function () {
  let authUser;

  function auth() {
    const authUserData = new Object("Authorizated user");

    return authUserData;
  }

  return {
    getAuthUser: function () {
      if (!authUser) {
        authUser = auth();
      }
      return authUser;
    },
  };
})();

const authData1 = Singleton.getAuthUser();
const authData2 = Singleton.getAuthUser();

console.log("Is a same user? - ", authData1 === authData2);
