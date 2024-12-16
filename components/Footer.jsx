const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-800 py-4 text-gray-400">
        <div className="container px-4 mx-auto">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="px-4 my-4 w-full xl:w-1/5">
              <a
                href="/"
                className="block w-56 mb-10 flex justify-start items-center gap-3"
              >
                <img src="/logo192.png" alt="logo" style={{ width: "30%" }} />
                <text
                  fill="white"
                  fontFamily="Nunito-Bold, Nunito"
                  fontSize="20"
                  fontWeight="bold"
                >
                  <span
                    x="654"
                    y="518"
                    style={{ fontSize: "24px", fontWeight: "bold" }}
                  >
                    Diotal Org
                  </span>
                </text>
              </a>

              <p className="text-justify">
                The leading platform for both local and international retail and
                wholesale trade with a wide product and services of all brands
                available in our advertisment chain.
              </p>
            </div>
            <div className="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-orange-500">
                  Company
                </h2>
              </div>
              <ul className="leading-8">
                <li>
                  <a href="/about" className="hover:text-blue-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/PrivacyPolicy" className="hover:text-blue-400">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="/PrivacyPolicy" className="hover:text-blue-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/FAQs" className="hover:text-blue-400">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="/#Contact" className="hover:text-blue-400">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-orange-500">
                  Services
                </h2>
              </div>
              <ul className="leading-8">
                <li>
                  <a href="/#Plans" className="hover:text-blue-400">
                    Refer and Earn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Our Market Place (Online Shopping)
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Education (E-books & Online courses)
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Technology (Software training programs & Services)
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Service Providing (Register your service(s))
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-orange-500">
                  Connect With Us
                </h2>
              </div>
              <div className="flex items-center justify-start gap-3">
                <a
                  href="#"
                  className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M380.9 97.1C339.3 55.5 284.8 32 226.4 32c-116.4 0-211 94.6-211 211 0 37.3 9.6 73.9 27.8 106.2L4.3 480l135.7-35.8c31.5 17 67.6 26.1 104.1 26.1 116.4 0 211-94.6 211-211 0-58.4-23.5-112.9-65.1-154.5zM226.4 448c-33.3 0-65.8-9-94.2-26.1l-6.7-4-80.7 21.3 21.5-78.5-4.2-6.8C42.8 327 32 296.1 32 266c0-107.6 87.5-195.1 195.1-195.1 52.1 0 101.1 20.3 138.2 57.4 37.1 37.1 57.4 86.1 57.4 138.2 0 107.6-87.5 195.1-195.1 195.1zm101.1-138.1c-5.5-2.8-33.7-16.6-38.9-18.5-5.2-1.9-9-2.8-12.8 2.8-3.7 5.5-14.7 18.5-18 22.2-3.3 3.7-6.6 4.2-12.1 1.4-33.7-16.6-55.8-29.7-78.5-67.4-5.9-10.3 5.9-9.5 16.6-31.4 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.8-30.7-17.6-42.1-4.7-11.4-9.5-9.8-12.8-10-3.3-.2-7.1-.2-10.9-.2-3.7 0-9.7 1.4-14.8 6.9-5.2 5.5-19.5 19-19.5 46.3s20 53.7 22.8 57.4c2.8 3.7 39.3 59.9 95.2 84.1 13.3 5.7 23.7 9 31.9 11.5 13.4 4.2 25.6 3.6 35.3 2.2 10.7-1.6 33.7-13.8 38.5-27.2 4.7-13.4 4.7-24.9 3.3-27.2-1.4-2.3-5-3.7-10.5-6.5z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 256 287.7 141 224.1 141zm0 186c-39.5 0-71.1-31.6-71.1-71.1s31.6-71.1 71.1-71.1 71.1 31.6 71.1 71.1-31.6 71.1-71.1 71.1zm146.4-194.6c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.7-9.9-67.3-36.3-93.6S387.7 9.7 352 8c-35.8-1.8-143.2-1.8-179 0-35.7 1.7-67.3 9.9-93.6 36.3S9.7 124.3 8 160c-1.8 35.8-1.8 143.2 0 179 1.7 35.7 9.9 67.3 36.3 93.6s57.9 34.6 93.6 36.3c35.8 1.8 143.2 1.8 179 0 35.7-1.7 67.3-9.9 93.6-36.3s34.6-57.9 36.3-93.6c1.8-35.8 1.8-143.2 0-179zm-48.4 218.2a96.1 96.1 0 0 1-54.2 54.2c-37.5 14.9-126.8 11.5-168.1 11.5s-130.6 3.3-168.1-11.5a96.1 96.1 0 0 1-54.2-54.2c-14.9-37.5-11.5-126.8-11.5-168.1s-3.3-130.6 11.5-168.1a96.1 96.1 0 0 1 54.2-54.2c37.5-14.9 126.8-11.5 168.1-11.5s130.6-3.3 168.1 11.5a96.1 96.1 0 0 1 54.2 54.2c14.9 37.5 11.5 126.8 11.5 168.1s3.3 130.6-11.5 168.1z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.47 0 53.61 0 23.22 24.64 0 54.7 0s53.8 23.02 53.8 53.61c0 29.86-24.09 54.49-54.71 54.49zm394.21 339.9h-92.68V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7v148.1h-92.68V148.9H251v40.8h1.3c12.5-23.6 43-48.3 88.3-48.3 94.3 0 111.7 62.1 111.7 142.3V448z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4 text-gray-100">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="px-4 w-full text-center sm:w-auto sm:text-left">
              Copyright © 2020
              <script>
                new Date().getFullYear() 2020 && document.write("- " + new
                Date().getFullYear())
              </script>
              - 2022 Diotal. All Rights Reserved.
            </div>
            <div className="px-4 w-full text-center sm:w-auto sm:text-left">
              Designed by Diotal Team.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
