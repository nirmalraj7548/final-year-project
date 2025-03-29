import dbconnection from "../../../../lib/db";
import DataTable from "../../../../moduls/DataTable";

export async function POST(req: Request) {
  try {
    await dbconnection();
    const { name, email, phone, age }: any = await req.json();

    const addata = new DataTable({ name, email, phone, age });

    await addata.save();

    return Response.json(
      {
        data: "data added",
      },
      {
        status: 200,
      }
    );
  } catch (err) {
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

export async function GET() {
  try {
    await dbconnection();
    const datas = await DataTable.find();
    return Response.json(
      {
        data: datas,
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


