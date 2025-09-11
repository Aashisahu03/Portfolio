import './globals.css';
import { Sora } from 'next/font/google';
import { Cinzel } from 'next/font/google';
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel', weight: ['700'] });

const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });

export const metadata = {
  title: "My Portfolio",
  description: "A stunning portfolio site by Aashi Sahu",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${cinzel.variable} font-sora`}>
        {children}
      </body>
    </html>
  );
}
