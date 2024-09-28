export default function Contact() {
    return (
      <div className="container flex flex-col items-center justify-center min-h-full py-10 p-16">
        <h1 className="text-4xl font-bold mb-4 text-black">Contact Us</h1>
        <form action="/submit-form" method="post" className="w-full max-w-md mx-auto space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-400"
            />
          </div>
  
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-400"
            />
          </div>
  
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-400"
              rows="4"
            />
          </div>
  
          <button
            type="submit"
            className="w-full py-2 px-4 bg-pink-300 hover:bg-pink-400 text-white font-semibold rounded-md transition duration-200 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  }
  