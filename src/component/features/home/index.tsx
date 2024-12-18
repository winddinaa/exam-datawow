"use client";

import React from "react";
import { Formik, Form } from "formik";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import TextInput from "@/component/Input/TextInput";
import SearchIcon from "@/component/icon/searchIcon";
import SelectInput from "@/component/Input/SelectInput";
import DownIcon from "@/component/icon/downIcon";
import Button from "@/component/common/Button";

const HomePage = () => {
  const isLargeScreen = useSelector(
    (state: RootState) => state.screenSize.isLargeScreen
  );
  return (
    <div className="min-h-screen  ">
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {() => (
          <Form>
            <div
              className={`flex justify-between items-start w-full gap-3 items-center`}
            >
              {/* ด้านซ้าย: TextInput */}
              <div className={`${isLargeScreen ? "w-3/5" : "w-1/7"}`}>
                {isLargeScreen ? (
                  <TextInput
                    name="search"
                    placeholder="Search"
                    icon={<SearchIcon className="w-5 h-5 text-gray-400" />}
                  />
                ) : (
                  <SearchIcon
                    stroke={"#000000"}
                    className="w-5 h-5 text-base-black"
                  />
                )}
              </div>

              {/* ด้านขวา: SelectInput และ Button */}
              <div className="flex gap-3 w-auto">
                <div className={`${isLargeScreen ? "w-1/2" : "w-3/7"}`}>
                  <SelectInput
                    name="community"
                    options={[
                      { value: "History", label: "History" },
                      { value: "Food", label: "Food" },
                      { value: "Pets", label: "Pets" },
                      { value: "Health", label: "Health" },
                      { value: "Fashion", label: "Fashion" },
                      { value: "Exercise", label: "Exercise" },
                      { value: "Others", label: "Others" },
                    ]}
                    icon={<DownIcon />}
                  />
                </div>
                <div className={`${isLargeScreen ? "w-1/2" : "w-3/7"}`}>
                  <Button title="Create +" />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default HomePage;
