import dbconnection from '../../../../../lib/db'
import History from '../../../../../moduls/History'
import { NextResponse } from "next/server";

export async function GET(req:Response,{ params }:any) {
    try {

      const {hisid}=params
      await dbconnection()
   const newhistory=await History.findOne({_id:hisid})

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
