export const API = () => {
    const baseUrl = process.env.REACT_APP_SERVER_URL ||
    'https://wow-app-02.herokuapp.com/wow-app' ||
    'https://localhost:5000/wow-app';
  
    const executeAPI = async (endpoint, config) => {
      const response = await fetch(baseUrl + endpoint, config);
      const data = await response.json();
      return data;
    };
  
    return {
      get: executeAPI,
      post: executeAPI,
      patch: executeAPI,
      delete: executeAPI,
    };
  };
  
