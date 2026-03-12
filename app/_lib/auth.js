import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createUser, getUser } from "./data-service";

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [Google],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      try {
        const existingUser = await getUser(user.email);

        if (!existingUser) {
          await createUser({
            email: user.email,
            name: user.name,
            image: user.image,
          });
        }

        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);

        return false;
      }
    },
    async session({ session }) {
      // 1. Fetch the user from DB using the email in the session
      const user = await getUser(session.user.email);

      if (user) {
        // Standard property access (no ?. on the left side)
        session.user.userId = user._id.toString();
        session.user.name = user.name;
        session.user.image = user?.image; // ?. is fine on the RIGHT side
        session.user.nationality = user?.nationality;
        session.user.countryFlag = user?.countryFlag;
      }

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
