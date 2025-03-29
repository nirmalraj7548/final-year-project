import dbconnection from '../../../../lib/db'
import Register from '../../../../moduls/register'

export async function POST(req: Request) {
    
  try {
    await dbconnection()
    const {username,password} = await req.json();
   const users=new Register({username,password})

   const name=await users.save()
    return Response.json(
      {
        data: "True"
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

   const users=await Register.find()
    return Response.json(
      {
        users: users
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


