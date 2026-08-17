import React from 'react'

function NewsletterForm() {
  return (
    <section
        id="contact"
        className="max-w-xl mx-auto px-6 py-16 text-center"
      >
        <h2 className="text-2xl mb-2">
          Let&apos;s keep in touch
        </h2>
        <p className="text-gray-600 text-sm mb-8">
          Sign up here to receive news and updates about our courses.
        </p>
        <form className="text-left space-y-4">
          <div className="text-xs text-gray-500 mb-4">
            * Required field
          </div>
          <div>
            <label className="block text-sm mb-1">
              First name *
            </label>
            <input
              type="text"
              className="w-full border border-gray-400 p-2 focus:outline-none focus:border-[#00beb2]"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">
              Last name *
            </label>
            <input
              type="text"
              className="w-full border border-gray-400 p-2 focus:outline-none focus:border-[#00beb2]"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">
              Country *
            </label>
            <select
              className="w-full border border-gray-400 p-2 focus:outline-none focus:border-[#00beb2] bg-white"
            >
              <option></option>
              <option>Sri Lanka</option>
              <option>United Kingdom</option>
              <option>United States</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">
              Email address *
            </label>
            <input
              type="email"
              className="w-full border border-gray-400 p-2 focus:outline-none focus:border-[#00beb2]"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">
              Course(s) of interest (optional)
            </label>
            <select
              className="w-full border border-gray-400 p-2 focus:outline-none focus:border-[#00beb2] bg-white"
            >
              <option></option>
              <option>Compelling Communication</option>
              <option>Generative AI in Business</option>
              <option>Business Essentials</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 mt-4 hover:bg-[#00beb2] transition-colors"
          >
            Sign up
          </button>
          <p className="text-xs text-gray-400 text-center mt-4">
            By submitting this form, you agree to our Terms of Use
            and Privacy Policy.
          </p>
        </form>
      </section>
  )
}

export default NewsletterForm