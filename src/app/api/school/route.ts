import dbconnection from "../../../../lib/db";
import schooldetails from "../../../../moduls/schoolDetails";
import college from "../../../../moduls/collegedetails";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await dbconnection();
    const {name,age,gender,grade} = await req.json();

    const
    const datas = await schooldetails.find();

    const formattedData = datas.map((item) => ({
      schoolid: item._id,
      name: item.name,
      age: item.age,
      grade: item.grade,
      gender: item.gender,
    }));

    const insertedData = await college.insertMany(formattedData);

    return NextResponse.json({
      message: "Data stored successfully in college",
      data: insertedData,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Data storage error",
    });
  }
}

export async function GET() {
  try {
    await dbconnection();
    const newhistory = await college.find();

    return Response.json(
      {
        data: newhistory,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return Response.json(
      {
        data: "error to fetch",
      },
      {
        status: 500,
      }
    );
  }
}
