import React from "react";

const RightContent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <article className="text-center">
        <img src="/image.png" alt="hero" className="inline-block max-w-full" />
      </article>

      <article className="border-t-(--divider) border-t pl-0 lg:pl-12 lg:pb-0 pb-6 lg:pt-0 pt-8 flex items-center">
        <blockquote className="text-left">
          <p class="lg:text-5xl text-3xl tracking-tight  mb-3 heading-font">
            “I was skeptical, but Area has completely transformed the way I
            manage my business. The data visualizations are so clear and
            intuitive, and the platform is so easy to use. I can't imagine
            running my company without it.”
          </p>

          <div class="flex flex-col mt-8 gap-1">
            <span class="font-medium">John Smith</span>
            <span class="text-sm caption-font text-(--primary-300)">
              Head of Data
            </span>
          </div>
        </blockquote>
      </article>
    </div>
  );
};

export default RightContent;
