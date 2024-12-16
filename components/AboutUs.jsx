export default function AboutUs() {
  return (
    <div className="sm:flex items-center max-w-screen-xl">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img src="https://i.imgur.com/WbQnbas.png" alt="About Us" />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <h2 className="my-4 font-bold text-3xl sm:text-4xl">
            About <span className="text-orange-500">Our Company</span>
          </h2>
          <p className="text-gray-700">
            Diotal is a versitile ecommerce platform specialising in advertising
            and vending of goods and services of small-to-medium and large
            enterprices as well as provide means of passive income to all our
            referers through our referer scheme, focusing primarilly on the B2C
            market. our unique sales propositions lies in our trend-led design
            at affordable prices along with efficient customer service and
            speedy, relaible delivery.
          </p>
        </div>
      </div>
    </div>
  );
}
