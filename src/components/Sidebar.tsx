// app/components/Sidebar.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <aside className="h-full p-4 bg-[#f5f0eb] text-[#4e4e4e]">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/dashboard" className={`p-2 block rounded ${isActive("/dashboard") ? "bg-[#4e4e4e] text-[#fcfbf9]" : "hover:bg-[#4e4e4e] hover:text-[#fcfbf9]"}`}>
              Dashboard Home
            </Link>
          </li>
          <li>
            <Link href="/dashboard/users" className={`p-2 block rounded ${isActive("/dashboard/users") ? "bg-[#4e4e4e] text-[#fcfbf9]" : "hover:bg-[#4e4e4e] hover:text-[#fcfbf9]"}`}>
              Show All Users
            </Link>
          </li>
          <li>
            <Link href="/dashboard/properties" className={`p-2 block rounded ${isActive("/dashboard/properties") ? "bg-[#4e4e4e] text-[#fcfbf9]" : "hover:bg-[#4e4e4e] hover:text-[#fcfbf9]"}`}>
              Show All Properties
            </Link>
          </li>
          <li>
            <Link href="/dashboard/properties/create" className={`p-2 block rounded ${isActive("/dashboard/properties/create") ? "bg-[#4e4e4e] text-[#fcfbf9]" : "hover:bg-[#4e4e4e] hover:text-[#fcfbf9]"}`}>
              Create Property
            </Link>
          </li>
          <li>
            <Link href="/dashboard/transactions" className={`p-2 block rounded ${isActive("/dashboard/transactions") ? "bg-[#4e4e4e] text-[#fcfbf9]" : "hover:bg-[#4e4e4e] hover:text-[#fcfbf9]"}`}>
              Transaction History
            </Link>
          </li>
          <li>
            <Link href="/dashboard/payments" className={`p-2 block rounded ${isActive("/dashboard/payments") ? "bg-[#4e4e4e] text-[#fcfbf9]" : "hover:bg-[#4e4e4e] hover:text-[#fcfbf9]"}`}>
              Manage Payments
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
