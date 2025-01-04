import toast from "react-hot-toast";

export const handleError = (error: unknown) => {
  let message;

  if (error instanceof Error) {
    message = error.message;
  } else if (typeof error === "string") {
    message = error;
  } else {
    console.log(error);
    message = "An error occured";
  }

  toast.error(message);
};
export function debounce<T extends (...args: unknown[]) => void>(callback: T, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
