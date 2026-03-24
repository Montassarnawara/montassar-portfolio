import { NextResponse } from "next/server"
import knowledge from "@/data/knowledge.json"
import { profile } from "@/data/profile"

type KnowledgeEntry = {
  keywords: string[]
  answer: string
}

type ChatPayload = {
  message?: string
}

function normalize(text: string): string {
  return text.toLowerCase().trim()
}

function scoreEntry(message: string, entry: KnowledgeEntry): number {
  const normalized = normalize(message)
  return entry.keywords.reduce((score, keyword) => {
    return normalized.includes(normalize(keyword)) ? score + 1 : score
  }, 0)
}

function getProfileIntentReply(message: string): string | null {
  const normalized = normalize(message)

  if (/(goal|goals|vision|career|objective)/.test(normalized)) {
    return `Career vision: ${profile.careerVision} Goals: ${profile.goals.join("; ")}.`
  }

  if (/(focus|domain|speciali|area)/.test(normalized)) {
    return `Core focus areas: ${profile.focus.join(", ")}.`
  }

  if (/(education|study|ensi|school|formation)/.test(normalized)) {
    return profile.education
      .map((item) => `${item.school} (${item.period}) - ${item.degree}. ${item.details}.`)
      .join(" ")
  }

  if (/(research|interest|interests)/.test(normalized)) {
    return `Research interests: ${profile.researchInterests.join(", ")}.`
  }

  if (/(ai skill|machine learning|llm|rag|signal)/.test(normalized)) {
    return `AI skills: ${profile.technicalSkills.ai.join(", ")}.`
  }

  if (/(backend|go|hazelcast|distributed|api)/.test(normalized)) {
    return `Backend skills: ${profile.technicalSkills.backend.join(", ")}.`
  }

  if (/(embedded|esp32|iot|real[- ]?time)/.test(normalized)) {
    return `Embedded skills: ${profile.technicalSkills.embedded.join(", ")}.`
  }

  if (/(language|languages|english|french|arabic|italian)/.test(normalized)) {
    return `Global communication: ${profile.languages.map((item) => `${item.name} (${item.level})`).join(", ")}.`
  }

  if (/(email|contact|mail)/.test(normalized)) {
    return `Primary email: ${profile.email}. You can also use the contact section for GitHub and LinkedIn.`
  }

  return null
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ChatPayload
    const message = body.message?.trim()

    if (!message) {
      return NextResponse.json({ reply: "Please send a message." }, { status: 400 })
    }

    const profileReply = getProfileIntentReply(message)
    if (profileReply) {
      return NextResponse.json({ reply: profileReply }, { status: 200 })
    }

    const bestMatch = knowledge.entries.reduce(
      (best, entry) => {
        const nextScore = scoreEntry(message, entry)
        if (nextScore > best.score) {
          return { entry, score: nextScore }
        }
        return best
      },
      { entry: null as KnowledgeEntry | null, score: 0 },
    )

    const reply = bestMatch.entry && bestMatch.score > 0
      ? bestMatch.entry.answer
      : knowledge.defaultReply

    return NextResponse.json({ reply }, { status: 200 })
  } catch {
    return NextResponse.json(
      { reply: "Assistant is temporarily unavailable. Please try again." },
      { status: 500 },
    )
  }
}
