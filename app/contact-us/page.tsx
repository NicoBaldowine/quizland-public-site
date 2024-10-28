'use client';

export default function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen bg-[#101827]">
      <main className="flex-grow text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-4">
              We&apos;d love to hear from you! If you have any questions, feedback, or concerns, please don&apos;t hesitate to reach out to us.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-2">Email: support@quizland.com</p>
            <p className="mb-2">Phone: +1 (555) 123-4567</p>
            <p className="mb-2">Address: 123 Quiz Street, Knowledge City, QZ 12345</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
            <p className="mb-2">Monday - Friday: 9:00 AM - 5:00 PM (EST)</p>
            <p className="mb-2">Saturday - Sunday: Closed</p>
          </section>
        </div>
      </main>
    </div>
  );
}
