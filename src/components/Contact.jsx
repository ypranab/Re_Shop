const Contact = () => {
  return (
    <div className="w-2/4 mx-auto my-8">
      <h2 className="text-5xl text-orange-500 font-bold text-center">
        Contact us
      </h2>
      <form className="mb-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-6">
          <input
            name="firstName"
            type="text"
            placeholder="Name"
            className="input input-ghost w-full input-bordered"
          />
          <input
            name="email"
            type="text"
            placeholder="Your email"
            className="input input-ghost w-full input-bordered"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="address"
            type="text"
            placeholder="Your Address"
            className="input input-ghost w-full input-bordered"
          />
          <textarea
            name="message"
            className="textarea textarea-bordered"
            placeholder="Your Review"
          ></textarea>
          <input className="btn btn-accent" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
