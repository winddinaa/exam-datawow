import { IoptionAPI } from "./api.interface";

export const apiGetPost = ({
  method = "get",
  url = "posts",
  isAuth = true,
  params,
}: IoptionAPI): IoptionAPI => {
  return { method, url, isAuth, ...(params && { params }) };
};

export const apiCreatePost: IoptionAPI = {
  method: "POST",
  url: "posts",
  isAuth: true,
};

export const apiUpdatePost: IoptionAPI = {
  method: "put",
  url: "posts",
  isAuth: true,
};

export const apiLogin: IoptionAPI = {
  method: "POST",
  url: "users/login",
};
