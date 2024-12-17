"use client";

import React from "react";
import { Formik, Form } from "formik";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import TextInput from "@/component/Input/TextInput";
import SearchIcon from "@/component/icon/searchIcon";

const HomePage = () => {
  const isLargeScreen = useSelector(
    (state: RootState) => state.screenSize.isLargeScreen
  );
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {() => (
          <Form>
            <TextInput
              name="search"
              placeholder="Search"
              icon={<SearchIcon className="w-5 h-5 text-gray-400" />}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default HomePage;
