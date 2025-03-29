import dbconnection from '../../../../lib/db'
import History from '../../../../moduls/History'

export async function POST(req: Request) {
    
  try {
    await dbconnection()
    const {name} = await req.json();
   const newhistory=new History({name})

   await newhistory.save()
    return Response.json(
      {
        data: name
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


export async function GET() {
  try {
    await dbconnection()
   const newhistory=await History.find()


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
