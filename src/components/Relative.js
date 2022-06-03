import React from "react";

const Relative = () => {
  return (
    <section class="relative">
      <h3 class="text-lg leading-6 font-medium text-gray-900 my-8">
        VUE - USD
      </h3>
      <div class="flex items-end border-gray-600 border-b border-l h-64">
        <div class="bg-purple-800 border w-10 h-24"></div>
        <div class="bg-purple-800 border w-10 h-32"></div>
        <div class="bg-purple-800 border w-10 h-48"></div>
        <div class="bg-purple-800 border w-10 h-16"></div>
      </div>
      <button type="button" class="absolute top-0 right-0"></button>
    </section>
  );
};

export default Relative;
