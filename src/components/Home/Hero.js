function Hero() {
  return (
    <section>
      <img className="rounded-full h-52 w-52" src="/images/ernest.jpeg" alt="ernest hero" />
      <div className="my-5">
        <h1>Hey there! Im Ernest</h1>
        <p>
          I am a software engineer from Singapore.
          I am senior at Columbia University majoring in Computer Science.
          I am currently looking for full time opportunities.
        </p>
      </div>
      <button className="action-button" type="button">Hire Me</button>
    </section>
  );
}

export default Hero;
