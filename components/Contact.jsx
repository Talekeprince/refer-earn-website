export default function Contact() {
  return (
    <div id="Contact" className="bg-gray-900 text-gray-100">
      <div className="container my-0 mx-auto p-10 md:px-4">
        <section>
          <div className="flex justify-center">
            <div className="text-center md:max-w-xl lg:max-w-3xl">
              <h2 className="mb-12 px-6 text-3xl font-bold">Contact us</h2>
            </div>
          </div>

          <div className="flex flex-wrap">
            <form className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
              <div className="mb-3 w-full">
                <label
                  className="block font-medium mb-[2px] text-orange-500"
                  htmlFor="nameInput"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="bg-gray-900 text-gray-300 px-2 py-2 border w-full outline-none rounded-md"
                  id="nameInput"
                  placeholder="Enter Name"
                />
              </div>

              <div className="mb-3 w-full">
                <label
                  className="block font-medium mb-[2px] text-orange-500"
                  htmlFor="emailInput"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="bg-gray-900 text-gray-300 px-2 py-2 border w-full outline-none rounded-md"
                  id="emailInput"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="mb-3 w-full">
                <label
                  className="block font-medium mb-[2px] text-orange-500"
                  htmlFor="messageInput"
                >
                  Message
                </label>
                <textarea
                  className="bg-gray-900 text-gray-300 px-2 py-2 border rounded-[5px] w-full outline-none"
                  id="messageInput"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button
                type="button"
                className="mb-6 inline-block w-full rounded bg-orange-500 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-orange-600"
              >
                Send
              </button>
            </form>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div className="flex flex-wrap">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-orange-100 p-4 text-orange-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold">Technical support</p>
                      <p className="text-neutral-500">support-en@diotal.com</p>
                      <p className="text-neutral-500">+237 690 96 59 58</p>
                    </div>
                  </div>
                </div>

                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="align-start flex">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-orange-100 p-4 text-orange-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold">Press</p>
                      <p className="text-neutral-500">info-en@diotal.com</p>
                      <p className="text-neutral-500">payment@diotal.com</p>
                    </div>
                  </div>
                </div>

                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="align-start flex">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-orange-100 p-4 text-orange-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.94-.23a4.91 4.91 0 01.107-1.993c-1.062-.453-2.156-.786-3.248-1.019-1.088-.232-2.186-.42-3.287-.597a7.937 7.937 0 00-1.138-.014c-.95.02-1.872.248-2.619.671-.816.394-1.485.974-1.98 1.73-1.314 1.97-.625 4.832 1.376 6.492a6.095 6.095 0 012.762-1.835 2.163 2.163 0 013.144.946 2.183 2.183 0 001.402 1.43c.687 0 1.44-.572 1.651-1.245.303-.595.099-1.274-.478-1.679-.601-.452-1.364-.308-1.754.31-1.139 1.341-.555 3.282 1.091 3.953.3.208.65.317 1.016.329 1.433 0 2.794-1.104 3.162-2.438.633-.825.838-1.923.726-2.952-.03-.354-.077-.707-.135-1.062-1.011-.726-2.118-1.047-3.22-1.047z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold">Location</p>
                      <p className="text-neutral-500">CMR SOUTH WEST REGION</p>
                      <p className="text-neutral-500">BUEA - MOLYKO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
