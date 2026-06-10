# Backend AI Chatbot

This backend now exposes a LangChain-powered chat endpoint at `POST /api/valorant/ai/chat`.

## Environment

Set these variables in `backend/.env`:

- `OPENAI_API_KEY`
- `OPENAI_MODEL` default: `gpt-4o-mini`
- `MONGODB_URI`
- `JWT_SECRET`

## Request

```json
{
  "message": "Give me a short Valorant tip",
  "sessionId": "optional-session-id",
  "history": [
    { "role": "user", "content": "Who should I play?" },
    { "role": "assistant", "content": "Try Phoenix or Sage for simple value." }
  ]
}
```

## Response

```json
{
  "message": "...",
  "sessionId": "...",
  "model": "gpt-4o-mini"
}
```

## Benchmark

```bash
node scripts/bench-ai-chat.mjs "Give me a short Valorant tip"
```