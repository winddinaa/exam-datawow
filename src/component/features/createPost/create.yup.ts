import * as Yup from "yup";

export const validationCreateSchema = Yup.object({
  community: Yup.string()
    .notOneOf(["Choose a community"], "Please select a community")
    .required("Community is required"),
  title: Yup.string()
    .trim()
    .required("Title is required")
    .min(1, "Title cannot be empty"),
  content: Yup.string()
    .trim()
    .required("Content is required")
    .min(1, "Content cannot be empty"),
});
