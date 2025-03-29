import { NextResponse } from 'next/server';
import dbconnection from '../../../../../lib/db'
import college from "../../../../../moduls/collegedetails";




export async function GET(req:Response,{ params }:any) {
    try {

      const {schoolid}=params
      await dbconnection()
   const newhistory=await college.findOne({schoolid:schoolid})

        return NextResponse.json(
            { history:newhistory },
            { status: 200 }
        );
    } catch (error) {
        // console.error("Error fetching user:", error);
        return NextResponse.json(
            { error: "Failed to fetch user" },
            { status: 500 }
        );
    }
}