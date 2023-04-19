import React from "react";

const Contact = () => {
  const contacts = [
    {
      icon: "fa-solid fa-phone",
      label: "Phone",
      link: "tel:+25078357335",
      value: "+250 783 573 335",
    },
    {
      icon: "fa-solid fa-envelope",
      label: "Email",
      link: "mailto:ncuti60@gmail.com",
      value: "ncuti60@gmail.com",
    },
    {
      icon: "fa-solid fa-location-dot",
      label: "Address",
      link: "https://goo.gl/maps/5r2e5eSgPmvfGZiJA",
      value: "KG 10 Ave, Kigali, Rwanda",
    },
  ];

  return (
    <div className="text-gray-100 bg-gray-950 sm:px-10 xs:px-5 min-h-[80vh] flex items-center flex-col py-10">
      <div class="grid md:grid-cols-2 xs:w-full w-[75%] mx-auto">
        <div class="pb-8">
          <div class="text-4xl xs:text-3xl font-semibold">
            Let's talk business
          </div>
          <div class="w-[80%] xs:w-full text-gray-400 my-4">
            Now that you know a lot about me, let me know if you are interested
            to work with me.
          </div>

          {contacts.map((item) => (
            <div class="flex mt-8">
              <div class="border-2 border-gray-400 w-12 h-12 flex items-center justify-center text-gray-400">
                <i class={item.icon}></i>
              </div>
              <div class="ml-5 text-gray-300">
                <div class="">{item.label}</div>
                <a href={item.link}>{item.value}</a>
              </div>
            </div>
          ))}

          <div class="flex mt-8">
            <a
              href="https://www.linkedin.com/in/xavier-ncuti-979284197/"
              className="mr-8"
            >
              <div class="border-2 border-blue-600 hover:text-blue-600 w-12 h-12 flex items-center justify-center text-gray-400">
                <i class="fa-brands fa-linkedin-in"></i>
              </div>
            </a>
            <a href="https://twitter.com/ncutixavier" className="mr-8">
              <div class="border-2 border-blue-400 hover:text-blue-400 w-12 h-12 flex items-center justify-center text-gray-400">
                <i class="fa-brands fa-twitter"></i>
              </div>
            </a>
            <a href="https://twitter.com/ncutixavier" className="mr-8">
              <div class="border-2 border-purple-500 hover:text-purple-500 w-12 h-12 flex items-center justify-center text-gray-400">
                <i class="fa-brands fa-instagram"></i>
              </div>
            </a>
            <a href="https://github.com/ncutixavier">
              <div class="border-2 border-gray-400 hover:text-gray-300 w-12 h-12 flex items-center justify-center text-gray-400">
                <i class="fa-brands fa-github"></i>
              </div>
            </a>
          </div>
          <div class="my-8 text-gray-400">© {new Date().getFullYear()} ncutixavier</div>
        </div>
        <div class="">
          <div className="h-[100px]">
            <label for="first_name" class="text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              class="bg-gray-50 text-gray-900 text-sm outline-none w-full p-3 mt-3"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="h-[100px]">
            <label for="first_name" class="text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              class="bg-gray-50 text-gray-900 text-sm outline-none w-full p-3 mt-3"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="h-[170px]">
            <label for="first_name" class="text-sm font-medium text-white">
              Message
            </label>
            <textarea
              rows="4"
              type="text"
              class="bg-gray-50 resize-none text-gray-900 text-sm outline-none w-full p-2.5 mt-3"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button className="bg-green-700 hover:bg-green-800 w-full py-3">
            Let's get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
