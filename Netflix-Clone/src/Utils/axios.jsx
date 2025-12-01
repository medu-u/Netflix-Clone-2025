import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
export default instance;

// Axios Instance:
// I created a custom axios client using axios.create().
// This instance already knows the base URL for all MovieDB API requests:

// https://api.themoviedb.org/3


// This prevents me from writing the full URL every time and makes the code cleaner and easier to maintain.

// 2. Requests Object:
// I created a requests object that stores all the different API endpoints I need for the project.
// Each property represents a category like trending, action, comedy, Netflix originals, etc.
// I also use import.meta.env.VITE_API_KEY to safely load my API key from environment variables.

// Together, these two parts make my API calls simple and organized.