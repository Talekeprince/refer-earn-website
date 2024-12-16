export default function FlexComponent() {
  return (
    <div className="bg-gray-900 text-gray-100">
      <div className="p-4 max-w-xl mx-auto">
        <h2 className="font-heading dark:text-gray-100 mb-8 text-3xl font-bold lg:text-4xl">
          It takes 5 minutes
        </h2>

        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900">
                01
              </div>
            </div>
            <div className="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
          </div>
          <div className="pt-1 pb-8">
            <p className="mb-2 text-xl font-bold text-gray-400 dark:text-slate-300">
              Create an account
            </p>
            <p className="text-gray-600 dark:text-slate-400">
              Sign up for an account with your name, email and phone number.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900">
                02
              </div>
            </div>
            <div className="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
          </div>
          <div className="pt-1 pb-8">
            <p className="mb-2 text-xl font-bold text-gray-400 dark:text-slate-300">
              Choose your prefered package
            </p>
            <p className="text-gray-600 dark:text-slate-400">
              Select any of the packages to start with and progress over time by
              hitting the breakpoint or by imidiately upgrading to other
              packages
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900">
                03
              </div>
            </div>
            <div className="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
          </div>
          <div className="pt-1 pb-8">
            <p className="mb-2 text-xl font-bold text-gray-400 dark:text-slate-300">
              Add a payment method
            </p>
            <p className="text-gray-600 dark:text-slate-400">
              Using your MTN mobile money number or Orange mobile money number,
              Set up your first plan
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900">
                04
              </div>
            </div>
            <div className="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
          </div>
          <div className="pt-1 pb-8">
            <p className="mb-2 text-xl font-bold text-gray-400 dark:text-slate-300">
              Refer and start earning
            </p>
            <p className="text-gray-600 dark:text-slate-400">
              Start earning by sharing the generated referal link on your
              dashboard
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900 bg-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-white dark:text-slate-200"
                >
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="pt-1">
            <p className="mb-2 text-xl font-bold text-gray-400 dark:text-slate-300">
              Ready!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
