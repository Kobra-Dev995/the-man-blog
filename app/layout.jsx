import './globals.css';

export const metadata = {
  title: 'The Man BLOG',
  description:
    'Um site de recordação dos membros do grupo do whatsapp The Man Evolution.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='pt-br'>
      <body>{children}</body>
    </html>
  );
}
