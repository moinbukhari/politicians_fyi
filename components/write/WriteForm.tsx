"use client";
import React from "react";

import { useState, useRef, useEffect } from "react";
import { useChat, useCompletion } from "ai/react";

// shadcn/ui
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Textarea } from "../ui/textarea";
import { useToast } from "../ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

// utils
import genPromt from "@/app/api/utils/genPrompt";
import useAutosizeTextArea from "./utils";

const WriteForm = () => {
  const templateRef = useRef<null | HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [template, setTemplate] = useState("");
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  // set up toast for announcement of text copied
  const { toast } = useToast();

  // when ai response comes in, scroll to it
  const scroll = () => {
    if (templateRef.current !== null) {
      templateRef.current.scrollIntoView({ behavior: "instant" });
    }
  };

  // setup vercel sdk chat
  const { input, setInput, handleSubmit, isLoading, messages } = useChat({
    body: {
      options: {
        name,
        address,
        additionalInfo,
      },
    },
    onResponse() {
      scroll();
      setTemplate("");
      setIsEditMode(false);
    },
    onFinish(message) {
      setTemplate(message.content);
    },
  });

  // process chatGPT response
  const lastMessage = messages[messages.length - 1];
  const generatedEmail =
    lastMessage?.role === "assistant" ? lastMessage.content : null;

  // scroll every time data streams in
  useEffect(() => {
    scroll();
  }, [generatedEmail]);

  // update chat input on value changes
  useEffect(
    () => setInput(genPromt({ name, address, additionalInfo })),
    [name, address, additionalInfo]
  );

  // change to edit mode, so user can edit chatGPT output once it finishes
  const onEditClick = () => {
    setIsEditMode(true);
  };

  // autosizes edit mode text area
  useAutosizeTextArea(textAreaRef.current, template);

  return (
    <div>
      <Toaster />
      <form className="grid gap-4 mb-6" onSubmit={handleSubmit}>
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
              <h2 className="sm:text-4xl text-3xl font-bold text-slate-900 mx-auto mb-2">
                Your generated email
              </h2>
              {!isEditMode && <p>Click to copy email template.</p>}
            </div>
            <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto whitespace-pre-line">
              {!isEditMode && (
                <span
                  className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border "
                  onClick={() => {
                    navigator.clipboard.writeText(generatedEmail);
                    toast({
                      title: "Template Copied",
                      description:
                        "Email template was copied. Now paste, edit, and send to your MP!",
                    });
                  }}
                >
                  {generatedEmail}
                </span>
              )}
              <Textarea
                className={!isEditMode && "hidden"}
                value={template ? template : generatedEmail}
                ref={textAreaRef}
                onChange={(e) => setTemplate(e.target.value)}
              />
              {!isEditMode && template && (
                <Button onClick={onEditClick}>Edit Mode</Button>
              )}
            </div>
          </>
        )}
      </output>

      <div className="pt-24" ref={templateRef}></div>
    </div>
  );
};

export default WriteForm;
