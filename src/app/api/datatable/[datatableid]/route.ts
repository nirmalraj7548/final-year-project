import dbconnection from "../../../../../lib/db";
import DataTable from "../../../../../moduls/DataTable"
import { NextResponse } from "next/server";

export async function GET({params}:any) {
    try {
      await dbconnection();
      const {datatableid}=params
      const newhistory=await DataTable.findOne({_id:datatableid})
      return NextResponse.json(
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
          data: "data etch error",
        },
        {
          status: 500,
        }
      );
    }
  }



  export async function PUT(req:Request,{params}:any) {
    try {
      await dbconnection();
      const {datatableid}=params
      const data=await req.json()
      const update = await DataTable.findByIdAndUpdate({_id:datatableid},data,{
        new:true
      });
      return Response.json(
        {
          data: update,
          response:"Updated..."
        },
        {
          status: 200,
        }
      );
    } catch (error) {
      return Response.json(
        {
          data: "data etch error",
        },
        {
          status: 500,
        }
      );
    }
  }



 
  