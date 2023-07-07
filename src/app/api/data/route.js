import { NextResponse } from "next/server";
import Post from '@/models/Post';
import dbConnect from "@/mongodb";

export async function GET(request) {
    await dbConnect()
    const result = await Post.find()
    return NextResponse.json(result)
}