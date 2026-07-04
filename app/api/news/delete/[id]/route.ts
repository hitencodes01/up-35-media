import { NextResponse } from "next/server";
import News from "@/models/news";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await News.findByIdAndDelete(id);

    return NextResponse.json(
      {
        success: true,
        message: "News Deleted Successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      { status: 500 }
    );
  }
}