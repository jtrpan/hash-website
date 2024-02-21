export async function POST(request: Request) {
    // Extract the form data from the request
    const formData = await request.formData();

    // Process the form data, e.g., save to a database, send an email, etc.
    // ...

    // Return a response
    return new Response(JSON.stringify({message: "Form submitted successfully!"}), {
        headers: {'Content-Type': 'application/json'},
    });
}
