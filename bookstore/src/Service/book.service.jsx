import axios from "axios";
const headerConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("bookStoreToken")}`,
  },
};
export const GetAllBooks = () => {
  let response = axios.get("http://localhost:3000/api/v1/books", headerConfig);
  return response;
};

export const addToCartAPI = (id) => {
  console.log("id inside cart", id);
  let response = axios.post(
    `http://localhost:3000/api/v1/cart/${id}`,
    {},
    headerConfig
  );
  console.log("inside cart api", response);
  return response;
};

export const getBooksFromCartAPI = () => {
  console.log("id inside get bookcart");
  let response = axios.get("http://localhost:3000/api/v1/cart", headerConfig);
  console.log("inside cart api", response);
  return response;
};

export const removeFromCartAPI = (id) => {
  console.log("inside remove api", id);
  let response = axios.post(
    `http://localhost:3000/api/v1/cart/${id}/removeFromCart`,
    {},
    headerConfig
  );
  console.log("inside cart api remove", response);
  return response;
};
