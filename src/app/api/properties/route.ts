import { NextResponse } from 'next/server';
import { Property } from '../../../interfaces/Property';

let properties: Property[] = [
  { id: 1, name: 'Property One', location: 'Location A', price: 100000 },
  // Add more properties
];

export async function GET() {
  return NextResponse.json(properties);
}

export async function POST(request: Request) {
  const newProperty: Omit<Property, 'id'> = await request.json();
  const createdProperty: Property = {
    id: properties.length + 1,
    ...newProperty,
  };
  properties.push(createdProperty);
  return NextResponse.json(createdProperty, { status: 201 });
}
