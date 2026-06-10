import { performance } from 'node:perf_hooks';
import { generateChatReply } from '../src/services/aiService.js';

const prompt = process.argv.slice(2).join(' ').trim() || 'Give me a short Valorant tip.';

if (!process.env.OPENAI_API_KEY) {
  console.error('OPENAI_API_KEY is required to run this benchmark.');
  process.exitCode = 1;
} else {
  const start = performance.now();
  const result = await generateChatReply({ message: prompt });
  const elapsed = Math.round(performance.now() - start);

  console.log(`Latency: ${elapsed}ms`);
  console.log(result.reply);
}