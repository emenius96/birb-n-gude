import Link from 'next/link';

export default function Home() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-full py-10 p-16">
      <h1 className="text-4xl font-bold mb-4 text-black">Welcome to Birb 'n' Gude!</h1>
      <h3 className="text-xl mb-6 text-slate-600">Check out our Recipe Showcase</h3>
      <Link href="/recipes" className="bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-pink-600 transition duration-200 ease-in-out">
        See Recipes
      </Link>
    </div>
  );
}
