import { configureStore } from "@reduxjs/toolkit";
import screenSizeReducer from "../reduxs/screenSize/screenSizeSlice";
import authReducer from "../reduxs/auth/authSlice";
import homeReducer from "../reduxs/home/homeSlice";
import pageReducer from "../reduxs/page/pageSlice";
import ourBlogReducer from "../reduxs/ourBlog/ourBlogSlice";
import modalCreatePostReducer from "../reduxs/modalCreatePost/modalCreatePostSlice";
import postDetailReducer from "../reduxs/postDetail/postDetailSlice";

export const store = configureStore({
  reducer: {
    screenSize: screenSizeReducer,
    auth: authReducer,
    home: homeReducer,
    page: pageReducer,
    our: ourBlogReducer,
    createPost: modalCreatePostReducer,
    postDetail: postDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
