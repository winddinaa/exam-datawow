"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";

type DrawerProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};
export default function Drawer({
  open = true,
  setOpen = () => {},
}: DrawerProps) {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/10 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-brand-green-500  py-6 shadow-xl rounded-tl-[12px] rounded-bl-[12px] border-r-[1px] pt-[64px]">
                <div className="px-4 sm:px-6">
                  <DialogTitle
                    className="text-base font-semibold text-gray-900"
                    onClick={() => setOpen(false)}
                  >
                    <div className="gap-[36px] px-[32px]">
                      <img
                        className="inline-block size-10"
                        src="/Icon.svg"
                        alt=""
                      />
                      <div className="grid grid-cols-1 gap-4 pt-[64px]">
                        <div className="flex items-center space-x-3">
                          <img
                            className="inline-block size-10 "
                            src="/Iconhomemobile.svg"
                            alt=""
                          />
                          <p className="text-sm text-brand-base-white">Home</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <img
                            className="inline-block size-10 "
                            src="/Iconeditmobile.svg"
                            alt=""
                          />
                          <p className="text-sm text-brand-base-white">
                            Our Blog
                          </p>
                        </div>
                      </div>
                    </div>
                  </DialogTitle>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                  {/* Your content */}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
