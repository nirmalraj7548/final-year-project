import dbconnection from '../../../../lib/db'
import college from "../../../../moduls/collegedetails";



export async function GET() {
  try {
    await dbconnection()
   const newhistory=await college.find()


    return Response.json(
      {
        data: newhistory
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





