import React from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import HomePage from "@/pages/HomePage";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-gradient-to-br from-background to-slate-900/10 dark:to-black/20 text-foreground flex flex-col items-center">
        <Header />
        <main className="container mx-auto p-4 flex-grow w-full">
          <HomePage />
        </main>
        <Footer />
      </div>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
