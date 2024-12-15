import { AppDispatch } from "@/app/store";
import TextInput from "@/component/Input/TextInput";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import Button from "@/component/common/Button";
import { requestLogin } from "@/reduxs/auth/authSlice";

const LoginForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const authData = useSelector((state: any) => state.auth);
  console.log("=>authData", authData);
  const filedLogin = useMemo(
    () => [
      {
        name: "username",
        Component: TextInput,
        placeholder: "username",
      },
    ],
    []
  );

  const apiLogin: {
    method: string;
    url: string;
  } = {
    method: "POST",
    url: "users/login",
  };

  return (
    <div
      className={
        "w-full h-[56vh] justify-items-center content-center lg:h-screen lg:w-[56vw] "
      }
    >
      <div className="w-[90%] lg:w-[70%] p-[5%] ">
        <Formik
          initialValues={{ username: "" }}
          onSubmit={(values) => {
            console.log(values);
            dispatch(requestLogin({ ...apiLogin, data: values })); // Fetch data
          }}
        >
          {({ values }) => (
            <Form>
              <p className="font-inter text-lg font-normal italic text-white mb-5 lg:text-xl">
                Sign in
              </p>
              <div className="grid grid-cols-1 gap-4">
                {filedLogin.map(({ Component, ...rest }) => (
                  <Component {...rest} key={rest.name} />
                ))}
                <Button type="submit" title="Sign in"></Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
