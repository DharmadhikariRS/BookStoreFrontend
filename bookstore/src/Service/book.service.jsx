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

export const getWishlistDetailsAPI = () => {
  let response = axios.get(
    "http://localhost:3000/api/v1/wishlist",
    headerConfig
  );
  return response;
};

export const addToWishlistAPI = (bookid) => {
  let response = axios.post(
    `http://localhost:3000/api/v1/wishlist/${bookid}`,
    {},
    headerConfig
  );
  console.log("ressss", response);
  return response;
};

export const removeFromWishlistAPI = (bookid) => {
  let response = axios.post(
    `http://localhost:3000/api/v1/wishlist/${bookid}/removeFromWishlist`,
    {},
    headerConfig
  );
  return response;
};

export const addCustomerDetails = (detailsObject) => {
  console.log("inside addCustomerDetails", detailsObject);
  let response = axios.post(
    `http://localhost:3000/api/v1/customerdetails`,
    detailsObject,
    headerConfig
  );
  console.log("inside cart api", response);
  return response;
};
export const purchase = (id) => {
  console.log("inside purchase api", id);
  let response = axios.post(
    `http://localhost:3000/api/v1/cart/${id}/purchase`,
    {},
    headerConfig
  );
  console.log("inside purchase api", response);
  return response;
};
