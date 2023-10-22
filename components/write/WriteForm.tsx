"use client";

import { useState } from "react";
import { useChat, useCompletion } from "ai/react";

// shadcn/ui
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

// utils
import genPromt from "@/app/api/utils/genPrompt";

const WriteForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [prompt, setPrompt] = useState("");

  console.log("test", genPromt({ name, address, additionalInfo }));

  const onSubmit = () => {
    setPrompt(genPromt({ name, address, additionalInfo }));
  };

  return (
    <div className="grid gap-2">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="Enter your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="address">Address</Label>
        <Textarea
          id="address"
          placeholder="Enter your address..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div>
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
      </div>

      <Button onClick={onSubmit}>✨ Generate Personalized Email ✨</Button>
    </div>
  );
};

export default WriteForm;
