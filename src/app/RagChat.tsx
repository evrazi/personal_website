"use client";

import Image from "next/image";
import { Globe, Paperclip, Plus, Send, SendIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import SubmitButton from "@/components/SubmitButton";
import { askAQuestion } from "./actions";
import { useActionState, useState } from "react";
import { flushSync } from "react-dom";

export default function RagChat() {
  const [chat, setChat] = useState([
    {
      id: 0,
      response: true,
      text: "Do you have any more questions?",
    },
  ]);

  return (
    <>
      <div
        className="border border-neutral-200 bg-white/30 backdrop-blur-lg flex flex-col h-140 overflow-auto rounded-3xl gap-6 p-2"
        data-lenis-prevent
      >
        {chat.map((message) => {
          return (
            <div
              style={{
                backdropFilter: "blur(4px)",
                boxShadow:
                  "0 0 1em .25em #fffffff2 inset, 0 .125em .125em -.125em #0003",
              }}
              key={message.id}
              className={cn(
                "shadow-[inset_0_0_5em_.1em_#fff] bg-white/25 p-3 rounded-2xl max-w-120 select-none",
                message.response ? "self-start" : "self-end"
              )}
            >
              <p>{message.text}</p>
            </div>
          );
        })}
      </div>
      <form
        action={async (formData) => {
          const message = formData.get("question") as string;
          flushSync(() => {
            setChat((previousState) => [
              ...previousState,
              { id: Math.random() * 100000, response: false, text: message },
              { id: Math.random() * 100000, response: true, text: "..." },
            ]);
          });

          const response = await askAQuestion({
            message: message,
            previousMessages: chat,
          });

          setChat((previousState) => {
            const newArray = [...previousState];
            previousState.pop();
            return [
              ...newArray,
              { id: Math.random() * 100000, response: true, text: response },
            ];
          });
        }}
        className="mt-6 flex items-center rounded-full border border-neutral-200 bg-white/30  pr-2  backdrop-blur-lg transition-all hover:border-neutral-300"
      >
        <input
          autoComplete="off"
          placeholder="Ask a question..."
          name="question"
          className="w-full focus-visible:ring-0 focus:outline-none py-2.5 pl-6"
        />
        <SubmitButton
          className={cn("rounded-full p-2 border border-zinc-200 bg-black")}
          text={<SendIcon className="size-4 text-white" />}
          textLoading={null}
          loadingSpinnerClassName={cn("text-white")}
        />
      </form>
    </>
  );
}
