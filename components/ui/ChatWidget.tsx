"use client"

import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type Message = {
  id: number
  role: "user" | "assistant"
  text: string
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      text: "Hi, ask me about projects, skills, research, or contact details.",
    },
  ])

  const canSend = useMemo(() => input.trim().length > 0 && !isLoading, [input, isLoading])

  async function sendMessage() {
    const content = input.trim()
    if (!content || isLoading) return

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      text: content,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: content }),
      })

      const data = (await response.json()) as { reply?: string }
      const reply = data.reply ?? "No response available right now."

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          text: reply,
        },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          text: "Network issue. Please try again in a moment.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-[70]">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto mb-4 h-[460px] w-[min(92vw,360px)] rounded-2xl border border-white/20 bg-[#060914]/95 p-4 shadow-2xl backdrop-blur-lg"
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white">Portfolio Assistant</h3>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-md border border-white/20 px-2 py-1 text-xs text-gray-300 transition hover:bg-white/10"
              >
                Close
              </button>
            </div>

            <div className="mb-3 h-[320px] space-y-2 overflow-y-auto pr-1">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`max-w-[90%] rounded-xl px-3 py-2 text-sm ${
                    message.role === "assistant"
                      ? "bg-white/10 text-gray-100"
                      : "ml-auto bg-white text-black"
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    void sendMessage()
                  }
                }}
                placeholder="Ask a question..."
                className="w-full rounded-xl border border-white/20 bg-black/40 px-3 py-2 text-sm text-white outline-none placeholder:text-gray-500 focus:border-white/40"
              />
              <button
                type="button"
                onClick={() => void sendMessage()}
                disabled={!canSend}
                className="rounded-xl bg-white px-3 py-2 text-sm font-medium text-black transition disabled:cursor-not-allowed disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="pointer-events-auto relative flex h-14 w-14 items-center justify-center rounded-full border border-cyan-200/40 bg-gradient-to-br from-slate-200/30 via-cyan-300/20 to-blue-400/30 text-white shadow-xl backdrop-blur-md"
        aria-label="Open portfolio assistant"
        title="Open assistant"
      >
        {!isOpen ? (
          <span className="pointer-events-none absolute inset-0 rounded-full border border-cyan-200/50 animate-ping" />
        ) : null}

        <span className="pointer-events-none absolute -inset-2 rounded-full bg-cyan-400/20 blur-md" />

        <span className="relative z-10 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M8.5 9.5h7M8.5 13h4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12 3.5c-4.694 0-8.5 3.134-8.5 7s3.806 7 8.5 7c.844 0 1.66-.102 2.426-.292L19.5 20v-4.1c.954-1.16 1.5-2.577 1.5-4.1 0-3.866-3.806-7-8.5-7Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </motion.button>
    </div>
  )
}
