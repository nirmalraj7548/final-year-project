"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const menuItems = [
    { name: "Main", href: "/qr/main" },
    { name: "History", href: "/qr/history" },
  ];  
  const pathname = usePathname();

  return (
    <div className="min-h-screen w-full flex">
      {/* Sidebar */}
      <aside className="bg-slate-800 shadow-xl w-56 h-screen flex flex-col overflow-y-auto">
        <div className="flex justify-center items-center text-white text-2xl py-7 border-b border-gray-300">
          <p>Think Qr</p>
        </div>

        <nav className="h-screen w-full  flex flex-col">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={` ${
                pathname == item.href ? "bg-gray-50 text-black" : "text-white hover:text-black"
              } block text-center py-2 text-black hover:text-white   transition   hover:bg-gray-600`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1  bg-white">{children}</main>
    </div>
  );
}
