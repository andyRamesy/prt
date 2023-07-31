import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { React } from "./canvas";
import { SectionWrapper } from "../hoc";
import { AnimatedLayout } from "./index";

//template_zuua04a
//service_y8zh6xx
//RgIZTG5bdVIMPLmJO

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    console.log("form:", form);
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_y8zh6xx",
        "template_zuua04a",
        {
          from_name: form.name,
          to_name: "Andy",
          from_email: form.email,
          to_email: "ramesy.richy@gmail.com",
          message: form.message,
        },
        "RgIZTG5bdVIMPLmJO"
      )
      .then(() => {
        setLoading(false);
        alert("thank you");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log("error:", error);
        alert("Error");
      });
  };

  return (
    <AnimatedLayout>
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10">
        <div
          // variants={slideIn("left", "tween", 0.2, 1)}
          className="bg-transparent rounded-md border border-[#292831] p-8 w-full"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="write your name"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="mail@mail.com"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Say what you want"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-sm shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
        {/* <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <React />
        </div> */}
      </div>
    </AnimatedLayout>
  );
};

export default Contact