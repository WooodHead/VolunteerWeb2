import decode from 'jwt-decode';
const AUTH_TOKEN = 'AUTH_TOKEN';

let token;

//Get token if exists in localstorage
export const getToken = async () => {
  if (token) {
    return Promise.resolve(token);
  }
  token = await localStorage.getItem(AUTH_TOKEN);
  return token;
};


export const signIn = (newToken) => {
  token = newToken;
  return localStorage.setItem(AUTH_TOKEN, newToken);
};

export const signOut = () => {
  token = undefined;
  return localStorage.removeItem(AUTH_TOKEN);
};


export const checkAuth = () => {
  const token =  localStorage.getItem(AUTH_TOKEN);
  if (!token) {
    return false;
  }
  try {
    const { exp } = decode(token)
    if (exp < new Date().getTime() / 1000) {
      return false;
    }
  } catch(e) {
    return false;
  }
  return true;
}
