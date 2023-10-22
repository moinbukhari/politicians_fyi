"use client";

import { useState } from "react";
import { useChat, useCompletion } from "ai/react";

// shadcn/ui
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Textarea } from "../ui/textarea";

// utils
import genPromt from "@/app/api/utils/genPrompt";

const WriteForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [prompt, setPrompt] = useState("");

  // setup chat
  const { setInput, handleSubmit, isLoading, messages } = useChat({
    body: {
      options: {
        name,
        address,
        additionalInfo,
      },
      prompt,
    },
  });

  const lastMessage = messages[messages.length - 1];
  const generatedEmail =
    lastMessage?.role === "assistant" ? lastMessage.content : null;

  console.log(lastMessage);

  const onSubmit = (e: any) => {
    setInput(genPromt({ name, address, additionalInfo }));
    handleSubmit(e);
  };

  return (
    <div>
      <form className="grid gap-4 mb-6" onSubmit={onSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="Enter your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Label htmlFor="address">Address</Label>
        <Textarea
          id="address"
          placeholder="Enter your address..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Label htmlFor="additionalInfo">
          Add any additional information, such as your occupation, about
          yourself that you would like the ✨AI✨ to know in order to
          personalize your letter.
        </Label>
        <Textarea
          id="additionalInfo"
          placeholder="Example: I am a doctor that works in Downtown London."
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
        />

        {!isLoading && (
          <Button type="submit">✨ Generate Personalized Email ✨</Button>
        )}
        {isLoading && <Button disabled> Generating...</Button>}
      </form>
      <Separator />
      <output className="space-y-10 my-10">
        {generatedEmail && (
          <>
            <div>
              <h2 className="sm:text-4xl text-3xl font-bold text-slate-900 mx-auto">
                Your generated email
              </h2>
            </div>
            <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto">
              {generatedEmail
                .substring(generatedEmail.indexOf("1") + 3)
                .split("2.")
                .map((email) => {
                  return (
                    <div
                      className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border"
                      onClick={() => {
                        navigator.clipboard.writeText(email);
                        // toast("Bio copied to clipboard", {
                        //   icon: "✂️",
                        // });
                      }}
                      key={email}
                    >
                      <p>{email}</p>
                    </div>
                  );
                })}
            </div>
          </>
        )}
      </output>
    </div>
  );
};

export default WriteForm;
