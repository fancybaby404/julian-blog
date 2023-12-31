import { NextResponse } from "next/server";
import Post from '@/models/Post';
import dbConnect from "@/mongodb";

export async function GET(request) {
    await dbConnect()
    const result = await Post.find()
    return NextResponse.json(result)
}

export async function POST(request) {
    await dbConnect()
    const blogId = await request.json()
    const result = await Post.findById(blogId.id)
    return NextResponse.json(result)
}