'use client'
import toast from "react-hot-toast";

export const successLogger = (message) => {
  return toast.success(message);
};

export const errorLogger = (message) => {

  return toast.error(message);
};
