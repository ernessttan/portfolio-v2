import { useState } from "react";
import { send } from "@emailjs/browser";

function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // TODO: Add Validation
  const handleSubmit = (e) => {
    e.preventDefault();
    send(
      "service_lpq1beh",
      "template_szxc7sg",
      formData,
      "vSJXcEQeqMlNcmFG3",
    )
      .then((response) => {
        setFormData({
          from_name: "",
          from_email: "",
          message: "",
        });
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <section className="py-8 md:py-14 md:flex md:items-center md:gap-24 lg:py-20">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-md container mx-auto">
        <h2 className="dark:dark-text md:desktop lg:desktop-large">Drop Me a Message.</h2>
        <input
          className="bg-neutral-100 placeholder:text-black"
          type="text"
          placeholder="What is your name?"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
        />
        <input
          className="bg-neutral-100 placeholder:text-black"
          type="email"
          placeholder="Enter your email"
          name="from_email"
          value={formData.from_email}
          onChange={handleChange}
        />
        <textarea
          className="h-32 rounded p-2 bg-neutral-100 placeholder:text-black"
          placeholder="Enter a message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <div className="flex justify-end">
          <button className="action-button transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:text-orange duration-300 mt-5 md:desktop" type="submit">Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
