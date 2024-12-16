import { redirect } from "next/navigation";
import { signIn, providerMap } from "@/auth";
import { AuthError } from "next-auth";

const SIGNIN_ERROR_URL = "/signin-error"; // Define your error URL

export default async function LoginMain(props: {
  searchParams: { callbackUrl: string | undefined };
}) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="flex items-center justify-center">
            <img src="/logo192.png" className="w-[40px] h-[40px]" alt="logo" />
            <h4 className="text-xl font-semibold text-orange-400 pl-2">
              Diotal
            </h4>
          </div>

          <div className="mt-12 flex flex-col items-center">
            <div className="w-full flex-1 mt-8">
              <form
                action={async (formData) => {
                  "use server";
                  try {
                    await signIn("resend", formData);
                  } catch (error) {
                    if (error instanceof AuthError) {
                      return redirect(
                        `${SIGNIN_ERROR_URL}?error=${error.type}`
                      );
                    }
                    throw error;
                  }
                }}
                className="space-y-4"
              >
                <div className="form-group">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    id="email"
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-5 tracking-wide font-semibold bg-orange-500 text-white-100 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-">Sign In</span>
                </button>
              </form>

              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or sign In with a provider
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {Object.values(providerMap).map((provider) => (
                  <form
                    key={provider.id}
                    action={async () => {
                      "use server";
                      try {
                        await signIn(provider.id, {
                          redirectTo: props.searchParams?.callbackUrl ?? "",
                        });
                      } catch (error) {
                        if (error instanceof AuthError) {
                          return redirect(
                            `${SIGNIN_ERROR_URL}?error=${error.type}`
                          );
                        }
                        throw error;
                      }
                    }}
                  >
                    <button
                      type="submit"
                      className="w-full py-2 mt-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <span>Sign in with {provider.name}</span>
                    </button>
                  </form>
                ))}
              </div>

              <p className="mt-6 text-xs text-gray-600 text-center">
                I agree to all{" "}
                <a
                  href="/policy"
                  className="border-b border-gray-500 border-dotted"
                >
                  Terms and condition
                </a>{" "}
                and its{" "}
                <a
                  href="terms"
                  className="border-b border-gray-500 border-dotted"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-gray-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://drive.google.com/uc?export=view&id=1KZ_Ub_2lZ0dHbKV0fAIhxVhiQA183RCz')",
            }}
          >
            <img src="/login.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
