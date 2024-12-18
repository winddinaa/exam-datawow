import { IoptionAPI } from "./api.interface";

export const apiGetPost: IoptionAPI = {
  method: "get",
  url: "posts",
};

export const apiCreatePost: IoptionAPI = {
  method: "POST",
  url: "posts",
  isAuth: true,
};

export const apiLogin: IoptionAPI = {
  method: "POST",
  url: "users/login",
};
