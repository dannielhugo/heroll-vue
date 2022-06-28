export const Config = {
  firebase: {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID,
  },
  rawg: {
    rawg_url: import.meta.env.VITE_RAWG_API_URL,
    key: import.meta.env.VITE_RAWG_API_KEY,
  },
}