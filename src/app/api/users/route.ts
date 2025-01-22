import { NextResponse } from 'next/server';
import { User } from '../../../interfaces/User';

// Mock data or fetch from a database
const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "User",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "Moderator",
    createdAt: new Date().toISOString(),
  },  // Add more users
];

export async function GET() {
  return NextResponse.json(users);
}
