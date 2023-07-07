import Header from "@/components/Header";
import "./globals.css";
import styles from "./page.module.css"
import { Montserrat } from "next/font/google";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
    title: "julianBlog💫",
    description: "blog about useless or useful stuff.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
