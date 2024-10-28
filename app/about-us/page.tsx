'use client';

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-[#101827]">
      <main className="flex-grow text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-4">
              At Quizland, our mission is to make learning fun and accessible for everyone. We believe that knowledge should be engaging, interactive, and tailored to each individual&apos;s interests and needs.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="mb-4">
              Founded in 2023, Quizland was born out of a passion for education and technology. Our team of dedicated educators and developers came together to create a platform that revolutionizes the way people learn and test their knowledge.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="mb-4">
              We are a diverse group of professionals committed to delivering the best learning experience possible. From subject matter experts to AI specialists, our team works tirelessly to ensure Quizland remains at the forefront of educational technology.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
