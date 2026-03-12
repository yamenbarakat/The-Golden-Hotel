"use client";

import { useActionState } from "react";
import { updateUser } from "../_lib/actions";

function UpdateProfileForm({ user, children }) {
  const { name, email, countryFlag } = user;

  const [state, formAction, isPending] = useActionState(updateUser, null);

  return (
    <form
      action={formAction}
      className="bg-primary-900 py-8 px-6 sm:px-10 lg:px-12 text-base sm:text-lg flex gap-6 flex-col"
    >
      {state?.error && (
        <p className="text-red-500 font-semibold">{state.error}</p>
      )}
      {state?.success && (
        <p className="text-green-500 font-semibold">Profile updated!</p>
      )}
      <div className="space-y-2">
        <label>Full name</label>
        <input
          defaultValue={name}
          name="name"
          required
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          defaultValue={email}
          name="email"
          disabled
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <label htmlFor="nationality">Where are you from?</label>
          {countryFlag && (
            <img
              src={countryFlag}
              alt="Country flag"
              className="h-5 rounded-sm"
            />
          )}
        </div>

        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          name="nationalID"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <button
          className="bg-accent-500 px-6 sm:px-8 py-3 sm:py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
          disabled={isPending}
        >
          {isPending ? "Updating..." : "Update profile"}
        </button>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
