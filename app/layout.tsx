import './globals.css';
import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ProjectProvider } from './context/ProjectContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });

export const metadata: Metadata = {
  title: 'Mohd Maaz | Software Engineer & Cybersecurity Expert',
  description: 'Professional portfolio of Mohd Maaz, featuring expertise in software engineering and cybersecurity',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${orbitron.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ProjectProvider> {/* Wrap children with ProjectProvider */}
            <div className="relative min-h-screen bg-gradient-to-b from-background to-background/95">
              <div className="cyber-grid absolute inset-0 z-0" />
              <Header />
              <main className="relative z-10">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </ProjectProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}