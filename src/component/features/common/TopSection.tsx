import Modal from "@/component/common/Modal";
import React, { useCallback } from "react";
import SelectInput from "@/component/Input/SelectInput";
import { OCommunity } from "@/utils/constants/option";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { setModalCreate } from "@/reduxs/home/homeSlice";
import TextInput from "@/component/Input/TextInput";
import { Form, Formik } from "formik";
import Button from "@/component/common/Button";
import CreatePostForm from "../createPost";
import DownIcon from "@/component/icon/DownIcon";
import SearchIcon from "@/component/icon/SearchIcon";

const TopSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const homeReducer = useSelector((state: RootState) => state.home);

  const isLargeScreen = useSelector(
    (state: RootState) => state.screenSize.isLargeScreen
  );

  const onCancel = useCallback(() => {
    dispatch(setModalCreate(false));
  }, [dispatch, setModalCreate]);

  return (
    <Formik initialValues={{ search: "" }}>
      {() => (
        <Form>
          <div className="flex  items-center gap-3">
            <CreatePostForm onCancel={onCancel} />
            <div
              className={`flex-1 ${isLargeScreen ? " max-w-[80%]" : "justify-between  max-w-[20%]"}`}
            >
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

            <div
              className={`flex gap-3 ${isLargeScreen ? "w-[20%]" : "w-full"} justify-end `}
            >
              <SelectInput
                name="community"
                options={OCommunity}
                icon={<DownIcon />}
                border="border-none"
                txtColor="text-brand-base-black"
              />

              <Button
                title="Create +"
                onClick={() => dispatch(setModalCreate(true))}
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default TopSection;
