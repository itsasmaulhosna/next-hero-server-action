import Link from "next/link";
import ThemeToggol from "./ThemeToggol";

const Navbar = () => {
  return (
    <div>
      {/* Basic */}
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <p className="font-bold">ACME</p>
          </div>
          <ul className="flex items-center gap-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/task">Task</Link></li>
          </ul>
          <div>
            <ThemeToggol></ThemeToggol>
          </div>
        </header>
      </nav>

      {/* With right-aligned content */}
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="flex h-16 items-center justify-between px-6">
          <div>Logo</div>
          <ul className="flex items-center gap-4">
            <li>
              <button className="bg-purple-500 text-white px-4 py-2 rounded">
                Sign Up
              </button>
            </li>
          </ul>
        </header>
      </nav>
    </div>
  );
};

export default Navbar;