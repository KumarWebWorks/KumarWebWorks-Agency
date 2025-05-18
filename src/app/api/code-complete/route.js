// app/api/code-complete/route.js
export async function POST(req) {
  const { code } = await req.json();

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4', // or gpt-3.5-turbo
      messages: [
        {
          role: 'system',
          content: 'You are a helpful coding assistant that completes JavaScript code.',
        },
        {
          role: 'user',
          content: `Complete the following JavaScript code:\n\n${code}`,
        },
      ],
      temperature: 0.3,
      max_tokens: 200,
    }),
  });

  const data = await res.json();
  return Response.json({ completion: data.choices[0]?.message?.content });
}
