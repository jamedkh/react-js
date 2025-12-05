import React from "react";

function Hero() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center pt-8">
      <h1 className="text-5xl lg:text-9xl">Browse everything.</h1>
      <picture>
        <source media="(min-width: 575px)" srcset="/hero-image.png" />
        <img src="/hero-image-2.png" alt="hero" className="max-w-full" />
      </picture>
    </div>
  );
}

export default Hero;
