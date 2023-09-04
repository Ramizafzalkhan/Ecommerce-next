import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
    const { username, email, password, role } = await request.json();

    const user = await prisma.user.create({
        data: {
            username,
            email,
            password,
            role
        },
    });

    return NextResponse.json({ message: "User created successfully", user })
}