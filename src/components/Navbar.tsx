import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-white text-2xl">Movie DRDT</h1>
        <ul className="flex space-x-4">
          <li><Link href="/" className="text-white">Home</Link></li>
          <li><Link href="/about" className="text-white">About</Link></li>
          <li><Link href="/login" className="text-white"> | Logout</Link></li>

        
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
