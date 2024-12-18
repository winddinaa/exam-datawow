"use client";

import { ReactNode } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import CloseIcon from "../icon/closeIcon";

interface ModalProps {
  children?: ReactNode;
  open: boolean;
  onClose?: (value: boolean) => void;
  showCloseIcon?: boolean;
}

const Modal = ({
  open = true,
  onClose = () => {},
  showCloseIcon = true,
  children,
}: ModalProps) => {
  const isLargeScreen = useSelector(
    (state: RootState) => state.screenSize.isLargeScreen
  );

  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-brand-base-black/50 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className={`relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95
            ${isLargeScreen ? "sm:min-w-[685px] sm:min-h-[510px]" : "w-[98vw] h-[90vh]"}`}
          >
            {showCloseIcon && (
              <button
                onClick={() => onClose(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                <CloseIcon />
              </button>
            )}

            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
              {children}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
