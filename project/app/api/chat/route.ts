import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { selectedPersona, userMessage } = await request.json()

    // Validate input
    if (!selectedPersona || !userMessage) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Simulate AI response based on persona
    const responses = {
      'Hitesh Choudhary': [
        "That's a great question! In my experience with web development and teaching, I've found that...",
        "Let me share something I've learned from working with thousands of students...",
        "This is exactly the kind of problem I love solving. Here's how I approach it...",
        "From my YouTube channel and courses, I often get this question. My advice is...",
        "As someone who's been in the tech industry for years, I can tell you that...",
      ],
      'Piyush Garg': [
        "Excellent point! In my journey as a developer and educator, I've discovered that...",
        "This reminds me of a project I worked on recently. The key insight was...",
        "I'm glad you asked! This is something I cover extensively in my tutorials...",
        "From my experience building scalable applications, I've learned that...",
        "That's a common challenge many developers face. Here's my recommended approach...",
      ]
    }

    // Get random response for the selected persona
    const personaResponses = responses[selectedPersona as keyof typeof responses] || responses['Hitesh Choudhary']
    const randomResponse = personaResponses[Math.floor(Math.random() * personaResponses.length)]

    // Add some personalized context to the response
    const contextualResponse = `${randomResponse} 

Regarding your question about "${userMessage}" - this is a topic I'm passionate about discussing. Would you like me to elaborate on any specific aspect?`

    // Simulate API delay for realistic experience
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000))

    return NextResponse.json({
      message: contextualResponse,
      persona: selectedPersona,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Chat API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}