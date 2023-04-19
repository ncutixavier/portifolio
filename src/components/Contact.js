import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    message: yup.string().required("Message is required"),
    email: yup.string().email().required(),
  })
  .required();

init(process.env.REACT_APP_EMAIL_USER);

const Contact = () => {
  const [loading, setLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
    setLoading(true);
    try {
      emailjs.send(SERVICE_ID, TEMPLATE_ID, data).then(
        (result) => {
          setLoading(false);
          swal({
            title: "Message has been sent!",
            text: "Thank you for your message, I will get back to you shortly!",
            icon: "success",
            button: "Okay",
          });
          reset();
        },
        (error) => {
          setLoading(false);
          swal({
            title: "Errror",
            text: "Error occured while sending email, please try again",
            icon: "error",
            button: "Okay",
          });
        }
      );
    } catch (error) {
      setLoading(false);
      swal({
        title: "Errror",
        text: "Error occured while sending email, please try again",
        icon: "error",
        button: "Okay",
      });
    }
  };

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
    <div
      id="contact"
      className="text-gray-100 bg-gray-950 sm:px-10 xs:px-5 min-h-[80vh] flex items-center flex-col py-10"
    >
      <div className="grid md:grid-cols-2 xs:w-full w-[75%] mx-auto">
        <div className="pb-8">
          <div className="text-4xl xs:text-3xl font-semibold">
            Let's talk business
          </div>
          <div className="w-[80%] xs:w-full text-gray-400 my-4">
            Now that you know a lot about me, let me know if you are interested
            to work with me.
          </div>

          {contacts.map((item) => (
            <div className="flex mt-8">
              <div className="border-2 border-gray-400 w-12 h-12 flex items-center justify-center text-gray-400">
                <i className={item.icon}></i>
              </div>
              <div className="ml-5 text-gray-300">
                <div className="">{item.label}</div>
                <a href={item.link}>{item.value}</a>
              </div>
            </div>
          ))}

          <div className="flex mt-8">
            <a
              href="https://www.linkedin.com/in/xavier-ncuti-979284197/"
              className="mr-8"
            >
              <div className="border-2 border-blue-600 hover:text-blue-600 w-12 h-12 flex items-center justify-center text-gray-400">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </a>
            <a href="https://twitter.com/ncutixavier" className="mr-8">
              <div className="border-2 border-blue-400 hover:text-blue-400 w-12 h-12 flex items-center justify-center text-gray-400">
                <i className="fa-brands fa-twitter"></i>
              </div>
            </a>
            <a href="https://www.instagram.com/ncutixavier/" className="mr-8">
              <div className="border-2 border-purple-500 hover:text-purple-500 w-12 h-12 flex items-center justify-center text-gray-400">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </a>
            <a href="https://github.com/ncutixavier">
              <div className="border-2 border-gray-400 hover:text-gray-300 w-12 h-12 flex items-center justify-center text-gray-400">
                <i className="fa-brands fa-github"></i>
              </div>
            </a>
          </div>
          <div className="my-8 text-gray-400">
            © {new Date().getFullYear()} ncutixavier
          </div>
        </div>
        <div className="">
          <div className="h-[100px]">
            <label for="first_name" className="text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              className={`${
                errors.name?.message ? "border-red-500" : ""
              } border-4 bg-gray-50 text-gray-900 resize-none text-sm outline-none w-full p-3 mt-3`}
              placeholder="Enter your name"
              {...register("name")}
            />
          </div>
          <div className="h-[100px]">
            <label for="first_name" className="text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              className={`${
                errors.email?.message ? "border-red-500" : ""
              } border-4 bg-gray-50 text-gray-900 text-sm outline-none w-full p-3 mt-3`}
              placeholder="Enter your email"
              {...register("email")}
            />
          </div>
          <div className="h-[170px]">
            <label for="first_name" className="text-sm font-medium text-white">
              Message
            </label>
            <textarea
              rows="4"
              type="text"
              className={`${
                errors.message?.message ? "border-red-500" : ""
              } border-4 bg-gray-50 text-gray-900 resize-none text-sm outline-none w-full p-3 mt-3`}
              placeholder="Enter your message"
              {...register("message")}
            ></textarea>
          </div>
          {loading ? (
            <button className="bg-green-700 hover:bg-green-800 w-full py-3">
              Sending email...
            </button>
          ) : (
            <button
              className="bg-green-700 hover:bg-green-800 w-full py-3"
              onClick={handleSubmit(onSubmit)}
            >
              Let's get started
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
