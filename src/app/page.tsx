import Link from "next/link";

export default function Home () {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-gradient-to-b from-gray-400 to-gray-300">
      <h1 className="font-bold text-4xl mb-10 underline">House Api</h1>
      <p>There is nothing to see here go to
        <Link className="font-bold text-lg underline text-green-600 ml-2" href={ '/houses' }>Houses Page</Link>.
      </p>
    </div>
  );
}
