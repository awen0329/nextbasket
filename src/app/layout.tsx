import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/redux/provider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import MuiProvider from "@/lib/theme/muiTheme";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { NotificationProvider } from "@/lib/contexts/notificationContext";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={montserrat.className}>
          <AppRouterCacheProvider>
            <MuiProvider>
              <NotificationProvider>
                <Header />
                {children}
                <Footer />
              </NotificationProvider>
            </MuiProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </ReduxProvider>
  );
}
