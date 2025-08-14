"use client";

import { cn } from "@/lib/utils";
import { useFormStatus } from "react-dom";
import LoadingSpinner from "./LoadingSpinner";

export default function SubmitButton({
  textLoading = null,
  text = null,
  className,
  loadingSpinnerClassName
}: {
  textLoading: string | null;
  text: string | React.ReactNode | null;
  className?: string;
  loadingSpinnerClassName?: string;
}) {
  const { pending, data, method, action } = useFormStatus();

  return (
    <>
      <button
        type="submit"
        disabled={pending}
        aria-disabled={pending}
        className={cn(
          "disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
          className
        )}
      >
        {pending ? (
          <div className="flex items-center gap-2">
            <LoadingSpinner className={loadingSpinnerClassName} />
            {textLoading}
          </div>
        ) : (
          text
        )}
      </button>
    </>
  );
}
