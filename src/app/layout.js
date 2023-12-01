import Navbar from "@/components/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
    title: "julianBlog💫",
    description: "blog about useless or useful stuff.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={inter.className}>
                <div className={"main max-w-2xl mx-auto h-screen"}>
                    <Navbar />
                    {children}
                </div>
            </body>
        </html>
    );
}
