const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-black text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We are dedicated to delivering high-quality products with the best
          shopping experience.
        </p>
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
            alt="About"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-600 mb-4">
            Our e-commerce platform is built to provide customers with
            high-quality products at competitive prices. We focus on
            performance, trust, and customer satisfaction.
          </p>

          <p className="text-gray-600">
            With a strong technology backbone and a passion for innovation,
            we aim to make online shopping smooth and enjoyable.
          </p>
        </div>

      </section>

      {/* Mission Section */}
      <section className="bg-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          To provide a seamless shopping experience by combining technology,
          design, and customer-first thinking. We believe in quality,
          affordability, and trust.
        </p>
      </section>

    </div>
  );
};

export default About;
