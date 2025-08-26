"use client";

import { Button } from "@/components/ui/button";

export default function ContactsPage() {
  return (
    <section
      id="contacts"
      className="overflow-y-auto scroll-smooth bg-black min-h-screen w-full py-10"
    >
      <div className="container px-6 md:px-20">
        <h3 className="text-2xl text-white text-center font-semibold mb-4 mt-6">
          Contact Information
        </h3>
        <div className="max-w-3xl mx-auto space-y-6">
          <form className="space-y-4">
            <div className="">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <input
                id="subject"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Subject"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your message"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
