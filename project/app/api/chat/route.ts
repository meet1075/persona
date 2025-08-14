import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import OpenAI from 'openai'

export const dynamic = 'force-dynamic'

const client = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
  baseURL: 'https://generativelanguage.googleapis.com/v1beta/openai/'
})

export async function POST(request: NextRequest) {
  try {
    const { selectedPersona, userMessage } = await request.json()

    if (!selectedPersona || !userMessage) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Load persona data
    const personaFilePath = path.join(process.cwd(), 'personas', `${selectedPersona.toLowerCase().split(' ')[0]}.txt`)
    const personaData = fs.readFileSync(personaFilePath, 'utf-8')

    // Build prompt
    const systemPrompt = `You are ${selectedPersona}. Use the following background to answer questions in the persona's style:\n\n${personaData}`

    const completion = await client.chat.completions.create({
      model: "gemini-2.0-flash",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage }
      ]
    })

    return NextResponse.json({
      message: completion.choices[0].message?.content || "No response.",
      persona: selectedPersona,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Chat API Error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
