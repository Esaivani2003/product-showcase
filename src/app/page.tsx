import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-4xl sm:text-5xl font-bold">Smartwatch Pro X</h1>
        <p className="text-lg mt-4 max-w-xl">
          A premium smartwatch with advanced health tracking and a stylish design.
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          Shop Now
        </button>
      </section>

      {/* Product Features */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Heart Rate Monitor", img: "/heart.png" },
            { title: "Water Resistant", img: "/Water Resistant.jpeg" },
            { title: "Long Battery Life", img: "/battery.png" },
          ].map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 shadow-lg rounded-lg text-center">
              <Image src={feature.img} alt={feature.title} width={60} height={60} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gray-200 dark:bg-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-10">What Our Customers Say</h2>
        <div className="max-w-3xl mx-auto">
        <blockquote className="text-center italic">
            &quot;The Smartwatch Pro X changed my fitness game! It&apos;s stylish and functional. Highly recommend!&quot;
        </blockquote>
          <p className="text-right font-semibold mt-4">- Sarah Johnson</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            { question: "Is it compatible with iOS and Android?", answer: "Yes, it works with both iOS and Android." },
            { question: "How long does the battery last?", answer: "Up to 7 days on a single charge." },
          ].map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-6 text-center bg-blue-600 text-white">
        <h2 className="text-3xl font-semibold">Stay Updated</h2>
        <p className="mt-2">Subscribe to our newsletter for updates and offers.</p>
        <div className="mt-4 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-l-lg text-gray-900"
          />
          <button className="px-4 py-2 bg-black text-white rounded-r-lg">Subscribe</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-600 dark:text-gray-400">
        © 2025 Smartwatch Pro X. All rights reserved.
      </footer>
    </div>
  );
}
