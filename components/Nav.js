import Link from 'next/link';

export default function Nav({ onClose }) {
  return (
    <nav className="flex flex-col space-y-6">
      {[
        ['Home', '/'],
        ['Recipes', '/recipes'],
        ['About Us', '/about'],
        ['Contact Us', '/contact'],
      ].map(([title, url]) => (
        <Link key={title} href={url} className="block text-lg rounded-lg px-4 py-3 text-zinc-100 font-medium hover:bg-slate-100 hover:text-slate-900" onClick={onClose}>
          {title}
        </Link>
      ))}
    </nav>
  );
}