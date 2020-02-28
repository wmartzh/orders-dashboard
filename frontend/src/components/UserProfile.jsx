var UserProfile = (function() {
    var full_name = "";
    var username = "";
    var password = "";
    var token = "";
    
    var getUsername = function(){
        return username;

    } 
    var getPassword= function(){
        return password;
    }
    var getToken = function(){
        return token;
    }
    var getName = function() {
      return full_name;    // Or pull this from cookie/localStorage
    };
  
    var setName = function(name) {
      full_name = name;     
      
    };
    var setUsername = function(_username) {
        username = _username;     
        // Also set this in cookie/localStorage
      };
    var setPassword = function(_pass) {
        password = _pass;     
        // Also set this in cookie/localStorage
    };
    var setToken = function(_token) {
        token = _token;
        localStorage.setItem('auth_token',_token);     
        // Also set this in cookie/localStorage
      };
    return {
      getName: getName,
      setName: setName,
      getUsername:getUsername,
      setUsername:setUsername,
      setPassword:setPassword,
      getPassword:getPassword,
      setToken:setToken,
      getToken:getToken,
    }
  
  })();
  
  export default UserProfile;