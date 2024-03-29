import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CreatePostModal from "../components/Modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  navbar,
  postForm,
  auth,
  posts
}: Readonly<{
  children: React.ReactNode;
  navbar: React.ReactNode;
  postForm: React.ReactNode;
  auth: React.ReactNode;
  posts: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {navbar}
        {auth}
        <CreatePostModal />
        {postForm}
        {posts}
        {children}
      </body>
    </html>
  );
}
