import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Intro = () => {
  return (
    <section className="flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center">
      <div className="mt-2 flex-1 md:mt-0">
        <h1 className="title no-underline">Mike Teow</h1>
        <p className="mt-3 font-light text-muted-foreground">
          I am a software engineer based in Malaysia.
        </p>
      </div>
      <div className="relative">
        <Avatar className="size-16">
          <AvatarImage src="/images/proflie.jpg" alt="profile" />
          <AvatarFallback>MT</AvatarFallback>
        </Avatar>
      </div>
    </section>
  );
};

export default Intro;
