export default function Withdraw() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Withdraw Funds</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="divide-y divide-gray-200">
                <div className="divide-y divide-gray-200">
                  <div className="divide-y divide-gray-200">
                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                      <div className="relative">
                        {/* <!-- Phone number input with country code --> */}
                        <div className="flex items-center border-b-2 border-gray-300 w-80">
                          <span className="flex items-center pl-2 pr-4">
                            {/* <!-- Cameroon Flag Icon --> */}
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/320px-Flag_of_Cameroon.svg.png"
                              alt="Cameroon Flag"
                              className="h-5 w-5 mr-2"
                            />
                            <span className="text-gray-900 font-medium">
                              +237
                            </span>
                          </span>
                          <input
                            autoComplete="off"
                            id="number"
                            name="tel"
                            type="tel"
                            className="peer placeholder-transparent h-10 w-full pl-2 pr-2 text-gray-900 focus:outline-none focus:border-rose-600"
                            placeholder="Enter phone number"
                          />
                        </div>
                        <label
                          htmlFor="number"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          MTN MoMo Number
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          autoComplete="off"
                          id="amount"
                          name="number"
                          type="number"
                          className="peer placeholder-transparent h-10 w-80 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                          placeholder="Enter amount"
                        />
                        <label
                          htmlFor="amount"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Amount
                        </label>
                      </div>
                      <div>max 50000 XAF, min 1000 XAF</div>
                      <div className="relative">
                        <button className="bg-orange-500 text-white rounded-md px-2 py-1">
                          Withdraw
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
