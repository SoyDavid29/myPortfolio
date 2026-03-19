import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mvzwdnog");

  if (state.succeeded) {
    return (
      <div className="bg-zinc-950 flex items-center justify-center p-6 boxshadow-lg rounded-xl">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white">Message sent!</h2>
          <p className="text-zinc-400">Thanks for reaching out. I'll get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className=" bg-zinc-950 flex items-center justify-center p-6 boxshadow-lg rounded-xl">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Say hello<span className="text-emerald-400">.</span>
          </h1>
          <p className="text-zinc-400 mt-2 text-sm">
            Fill out the form and I'll get back to you as soon as possible.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email field */}
          <div className="group">
            <label
              htmlFor="email"
              className="block text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2 group-focus-within:text-emerald-400 transition-colors"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-400 text-xs mt-1"
            />
          </div>

          {/* Message field */}
          <div className="group">
            <label
              htmlFor="message"
              className="block text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2 group-focus-within:text-emerald-400 transition-colors"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Write your message here..."
              className="w-full bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-red-400 text-xs mt-1"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:bg-zinc-700 disabled:text-zinc-500 text-zinc-950 font-bold py-3 px-6 rounded-xl transition-all duration-200 text-sm uppercase tracking-widest flex items-center justify-center gap-2"
          >
            {state.submitting ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>

        </form>
      </div>
    </div>
  );
}

export default ContactForm;