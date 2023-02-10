import { FontAwesomeIcon } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <div className="relative mt-16 bg-zinc-800">
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex gap-16 row-gap-10 mb-8 lg:grid-cols-4">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
                IrinaB Jewelry
              </span>
            </a>
            <div className="mt-4 lg:max-w-sm">
              <div className="text-white">
                <p>
                  Want exclusive offers and be the first to access products?
                  Register.
                </p>
                <div className=" flex row items-center mt-8">
                  <input
                    placeholder="Your email adress"
                    type="email"
                    className="bg-transparent border-b w-10/12 text-gray-900"
                  />
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      className="w-6 h-6"
                      viewBox="0 0 448 512"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex grid-cols-2 gap-5 row-gap-8 md:grid-cols-4 pl-40">
            <div>
              <p className="font-semibold tracking-wide text-white">
                IrinaB Jewelry
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white"
                  >
                    FAQ
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white"
                  >
                    Delivery
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white"
                  >
                    Club{" "}
                    <span className="text-white uppercase">
                      IrinaB Jewelry{" "}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="ml-8">
              <p className="font-semibold text-white">Warranty and Return</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white"
                  >
                    Warranty period
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white"
                  >
                    Return policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid pl-40 justify-items-center mt-4">
          <p className="font-semibold text-white">Keep in touch with us</p>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="/" className="transition-colors duration-300 text-white">
                +39 123 456 789
              </a>
            </li>
            <li>
              <a href="/" className="transition-colors duration-300 text-white">
                IrinaBJewelry@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-row-reverse  pl-40 justify-items-center">
          <a href="/" className="transition-colors duration-300 text-white m-2">
            <svg
              className="h-6"
              fill="white"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>tiktok</title>
              <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>
            </svg>
          </a>
          <a href="/" className="transition-colors duration-300 m-2">
            <svg
              className="h-6 bg-white rounded-full"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.45203 13.1793C6.34409 10.9182 7.8519 6.51197 12.9239 7.23231C18.5104 8.02574 17.505 16.7096 12.8471 16.3704C11.3732 16.2631 10.8159 15.0417 10.6704 13.7938M10.6704 13.7938C10.5601 12.8478 10.6865 11.8866 10.8296 11.3842C11.0738 10.527 11.4786 10.6436 11.1828 11.7774C11.0388 12.3292 10.8632 13.0219 10.6704 13.7938ZM10.6704 13.7938C10.156 15.8537 9.51993 18.4786 9.03959 20.5018M9.03959 20.5018C9.96672 20.8246 10.9629 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 15.9334 5.52335 19.2775 9.03959 20.5018Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                color="white"
              />
            </svg>
          </a>
          <a href="/" className="transition-colors duration-300 m-2">
            <svg viewBox="0 0 30 30" fill="white" className="h-6 text-white">
              <circle cx="15" cy="15" r="4" />
              <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
            </svg>
          </a>
          <a href="/" className="transition-colors duration-300 m-2">
            <svg viewBox="0 0 24 24" fill="white" className="h-5">
              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
            </svg>
          </a>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-gray-100">
            © Copyright 2023 IrinaB Jewelry. All rights reserved.
          </p>
          <a href="/">
            <p className="text-md text-gray-100">Cookie policy</p>
          </a>
          <a href="/">
            <p className="text-md text-gray-100">Terms and conditions</p>
          </a>
          <a href="/">
            <p className="text-md text-gray-100">GDPR policy</p>
          </a>
        </div>
      </div>
    </div>
  );
};
