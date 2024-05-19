import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import Profile from "./profile/page";

export default async function RootLayout({ children }) {
  const { userId } = auth();

  const social_users = await db.query(
    `SELECT * FROM social_users WHERE clerk_id = '${userId}'`
  );

  if (social_users.rowCount === 0 && userId)
    await db.query(`INSERT INTO social_users (clerk_id) VALUES ('${userId}')`);

  console.log(social_users);

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <h1>XX</h1>
            <SignedOut>
              <SignInButton />
              <h2>Welcome to XX</h2>
              <p>We aren't X and we aren't XXX</p>
              <p className="welcome">
                You are not signed in, please sign in to continue
              </p>
            </SignedOut>

            <SignedIn>
              <UserButton />
              <Profile></Profile>
            </SignedIn>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
