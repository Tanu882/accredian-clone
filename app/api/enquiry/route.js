export async function POST(req) {
  try {
    const body = await req.json();

    console.log("FORM DATA:", body);


    return Response.json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: "Something went wrong",
    });
  }
}