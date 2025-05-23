import { supabase } from "@/lib/superbaseConfig";

export async function POST(req) {
  try {
    const { category } = await req.json();

    if (!category) {
      return new Response(
        JSON.stringify({ error: "Category is required" }),
        { status: 400 }
      );
    }

    const { data: blogs, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("category", category)
      .order("created_at", { ascending: false }); // Optional: Sort by latest

    if (error) {
      console.error("Fetch error:", error);
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify(blogs), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ error: "Something went wrong" }),
      { status: 500 }
    );
  }
}
