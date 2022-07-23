function ContactForm() {
  return (
    <section className="py-8 md:py-14 md:flex md:items-center md:gap-24 lg:py-20">
      <form className="flex flex-col gap-5 max-w-md container mx-auto">
        <h2 className="dark:dark-text md:desktop lg:desktop-large">Drop Me a Message.</h2>
        <input className="bg-neutral-100 placeholder:text-black" type="text" placeholder="What is your name?" />
        <input className="bg-neutral-100 placeholder:text-black" type="text" placeholder="Enter your email" />
        <textarea className="h-32 rounded p-2 bg-neutral-100 placeholder:text-black" placeholder="Enter a message" />
        <div className="flex justify-end">
          <button className="action-button transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:text-orange duration-300 mt-5 md:desktop" type="submit">Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
