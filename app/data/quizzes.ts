export type Question = {
  id: number;
  question: string;
  options: string[];
  answer: number; // index of correct option
  explanation: string;
};

export type Session = {
  id: string;
  title: string;
  emoji: string;
  color: string;
  bgColor: string;
  description: string;
  time: string;
  questions: Question[];
};

export const sessions: Session[] = [
  {
    id: "icebreaker",
    title: "Is it Human or AI?",
    emoji: "🤔",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    description: "Can you spot the difference between human and AI creations?",
    time: "8:30 – 8:55",
    questions: [
      {
        id: 1,
        question: "A student drew a rainbow picture with crayons. An AI made a perfect, super-detailed rainbow image in 2 seconds. Which one is the AI?",
        options: [
          "The crayon drawing",
          "The perfect detailed image",
          "Both are AI",
          "Neither is AI",
        ],
        answer: 1,
        explanation: "AI can generate super-detailed, perfect images very fast! The crayon drawing was made by a human student.",
      },
      {
        id: 2,
        question: "Which of these was most likely written by an AI?",
        options: [
          "\"i dont no how to rite this essay help\"",
          "\"The mitochondria is the powerhouse of the cell, responsible for generating ATP through cellular respiration.\"",
          "\"my cat is funny lol\"",
          "\"2+2 = 5 i think\"",
        ],
        answer: 1,
        explanation: "AI tends to write in perfect grammar with detailed, accurate information. The other options look like casual human writing with mistakes!",
      },
      {
        id: 3,
        question: "You ask for a poem about cats. It rhymes perfectly and uses big fancy words. Who probably wrote it?",
        options: [
          "A 10-year-old student",
          "A teacher",
          "An AI",
          "A cat 🐱",
        ],
        answer: 2,
        explanation: "AI can write perfectly rhyming poems with advanced vocabulary instantly! A student might write a fun poem, but it would feel more natural and imperfect.",
      },
      {
        id: 4,
        question: "Which of these images was most likely made by an AI?",
        options: [
          "A slightly wobbly hand-drawn house",
          "A photo of your friend at school",
          "A perfect painting of a dragon flying over a rainbow city",
          "A blurry photo taken on an old phone",
        ],
        answer: 2,
        explanation: "AI image generators can create incredibly detailed fantasy scenes like dragons over rainbow cities that would take a human artist days or weeks!",
      },
      {
        id: 5,
        question: "Your friend gives you an answer to a homework question. It's super long, perfectly organized, has no spelling mistakes, and uses words you've never heard. What does this sound like?",
        options: [
          "Your friend is very smart",
          "Your friend used an AI tool",
          "Your friend copied from a textbook",
          "Your friend guessed everything",
        ],
        answer: 1,
        explanation: "When an answer is perfectly formatted, has no errors, and uses advanced vocabulary, it's often a sign that AI was used! Always be honest about using AI.",
      },
    ],
  },
  {
    id: "what-is-ai",
    title: "What is AI?",
    emoji: "🤖",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    description: "Learn what Artificial Intelligence is and where it lives in your daily life!",
    time: "8:55 – 9:25",
    questions: [
      {
        id: 1,
        question: "What does AI stand for?",
        options: [
          "Automatic Internet",
          "Artificial Intelligence",
          "Amazing Invention",
          "Android Information",
        ],
        answer: 1,
        explanation: "AI stands for Artificial Intelligence — it means making computers smart enough to learn and solve problems like humans!",
      },
      {
        id: 2,
        question: "Which of these is an example of AI you might use every day?",
        options: [
          "A pencil",
          "A calculator",
          "YouTube recommending your next video",
          "A printed book",
        ],
        answer: 2,
        explanation: "YouTube uses AI to study what you watch and suggest the next video you might like. That's AI learning your patterns!",
      },
      {
        id: 3,
        question: "How does AI get smarter?",
        options: [
          "Someone programs every single answer manually",
          "It learns from lots and lots of data and examples",
          "It copies answers from Google",
          "It never gets smarter",
        ],
        answer: 1,
        explanation: "AI learns by looking at millions of examples — like how you get better at math by doing lots of practice problems!",
      },
      {
        id: 4,
        question: "Which of these is NOT an AI?",
        options: [
          "Siri (Apple's voice assistant)",
          "Google Assistant",
          "A light switch",
          "A chatbot on a website",
        ],
        answer: 2,
        explanation: "A light switch just turns on and off — it doesn't learn or make decisions. The others are AI because they understand your questions and give smart answers!",
      },
      {
        id: 5,
        question: "If you play a video game and the computer enemies get harder as you get better — what is that?",
        options: [
          "A bug in the game",
          "Pure luck",
          "AI learning your skill level",
          "The internet slowing down",
        ],
        answer: 2,
        explanation: "Game AI watches how you play and adjusts the difficulty. That's AI adapting to your skill — pretty cool right?",
      },
    ],
  },
  {
    id: "ask-ai",
    title: "Ask AI Questions",
    emoji: "💬",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    description: "Learn how to write great prompts to get amazing answers from AI!",
    time: "9:40 – 10:25",
    questions: [
      {
        id: 1,
        question: "What is a \"prompt\" when talking to AI?",
        options: [
          "A type of computer virus",
          "The question or instruction you give to the AI",
          "The AI's internet connection",
          "A button on the keyboard",
        ],
        answer: 1,
        explanation: "A prompt is what YOU type to tell the AI what you want. The better your prompt, the better the AI's answer!",
      },
      {
        id: 2,
        question: "Which is a BETTER prompt to ask an AI about black holes?",
        options: [
          "\"black holes\"",
          "\"tell me\"",
          "\"Explain black holes like I'm 11 years old using a simple example\"",
          "\"huh?\"",
        ],
        answer: 2,
        explanation: "The more details you give, the better! Telling AI your age and asking for a simple example helps it give you a much clearer answer.",
      },
      {
        id: 3,
        question: "You ask AI: \"Make a quiz\". The AI seems confused and asks \"About what topic?\" What should you do next time?",
        options: [
          "Give up and close the app",
          "Ask again but louder (USE CAPS)",
          "Be more specific — like \"Make a 5-question quiz about dinosaurs for 10-year-olds\"",
          "Ask a different AI",
        ],
        answer: 2,
        explanation: "AI needs clear instructions! Adding the topic, number of questions, and who it's for makes a HUGE difference in the quality of the answer.",
      },
      {
        id: 4,
        question: "Can AI ever give wrong answers?",
        options: [
          "No, AI is always 100% correct",
          "Yes, AI can make mistakes and you should always double-check",
          "Only if you ask it in a foreign language",
          "Only on Mondays",
        ],
        answer: 1,
        explanation: "AI can make mistakes! It's called a 'hallucination' when AI confidently gives wrong information. Always check important facts with a teacher or trusted source.",
      },
      {
        id: 5,
        question: "Which prompt would help AI write a better story for you?",
        options: [
          "\"Write a story\"",
          "\"story please\"",
          "\"Write a short funny story about a robot who wants to learn how to cook, for kids aged 10\"",
          "\"do it\"",
        ],
        answer: 2,
        explanation: "Details = better results! Giving AI the genre (funny), character (robot), topic (cooking), and audience (kids 10) helps it write exactly what you want.",
      },
    ],
  },
  {
    id: "ai-images",
    title: "Create AI Images",
    emoji: "🎨",
    color: "from-orange-500 to-yellow-500",
    bgColor: "bg-orange-50",
    description: "Discover how AI turns your words into amazing pictures!",
    time: "10:45 – 11:20",
    questions: [
      {
        id: 1,
        question: "How do AI image generators create pictures?",
        options: [
          "They search Google Images and copy photos",
          "A human artist draws it very fast",
          "They use your description (prompt) to generate a new image from patterns they learned",
          "They use a camera",
        ],
        answer: 2,
        explanation: "AI image generators learned from millions of images. When you describe what you want, they create a brand new image that matches your description!",
      },
      {
        id: 2,
        question: "Which prompt would create the most exciting AI image?",
        options: [
          "\"cat\"",
          "\"A cat astronaut floating in space, wearing a rainbow helmet, cartoon style, colorful\"",
          "\"picture\"",
          "\"something cool\"",
        ],
        answer: 1,
        explanation: "Detailed prompts with colors, style (cartoon), setting (space), and specific details create much more exciting and specific AI images!",
      },
      {
        id: 3,
        question: "You use Canva AI to generate an image of \"a floating candy city\". The AI makes something completely different. What should you try?",
        options: [
          "Give up forever",
          "Keep clicking until something good appears",
          "Change your prompt — add more detail like \"a magical city made of lollipops and chocolate buildings, floating in blue sky, cartoon style\"",
          "Switch to drawing it yourself",
        ],
        answer: 2,
        explanation: "When AI doesn't understand, improve your prompt! Adding specific details like the type of candy and art style helps the AI understand exactly what you want.",
      },
      {
        id: 4,
        question: "Is it okay to use AI-generated images for your school project without telling your teacher?",
        options: [
          "Yes, no one will know",
          "Only if it looks really good",
          "No — you should always be honest about using AI tools",
          "Yes, AI images are free so it's fine",
        ],
        answer: 2,
        explanation: "Honesty is always important! Tell your teacher when you use AI tools. Some schools have specific rules about AI use in projects.",
      },
      {
        id: 5,
        question: "What does \"art style\" mean in an AI image prompt?",
        options: [
          "The size of the image",
          "How fast the image is generated",
          "The visual style — like cartoon, realistic, watercolor, or pixel art",
          "The color of the background only",
        ],
        answer: 2,
        explanation: "Art style tells the AI HOW to draw it. 'Cartoon style' looks very different from 'realistic' or 'watercolor'. Try different styles for fun results!",
      },
    ],
  },
  {
    id: "wrapup",
    title: "Wrap-up & Reflection",
    emoji: "🌟",
    color: "from-red-500 to-rose-500",
    bgColor: "bg-red-50",
    description: "Let's review everything you learned today about AI!",
    time: "11:20 – 11:30",
    questions: [
      {
        id: 1,
        question: "What is the MOST important rule to remember when using AI?",
        options: [
          "Use AI for every single thing",
          "Never use AI at all",
          "Use AI as a helper, always think critically, and be honest about using it",
          "Only use AI for games",
        ],
        answer: 2,
        explanation: "AI is a powerful tool — but YOU are the thinker! Use AI to help you, check its answers, and always be honest with teachers and friends about when you use it.",
      },
      {
        id: 2,
        question: "Which of these shows SMART use of AI?",
        options: [
          "Letting AI do all your homework and copying it",
          "Using AI to understand a topic better, then writing your own answer",
          "Asking AI to pretend to be you in class",
          "Using AI to cheat on a test",
        ],
        answer: 1,
        explanation: "Smart AI use means using it as a learning tool! Ask AI to explain concepts, then use YOUR brain to create your own work. That's how you actually learn!",
      },
      {
        id: 3,
        question: "Today you learned that better prompts give better AI answers. What skill does this remind you of in school?",
        options: [
          "Physical Education",
          "Asking clear, specific questions — a skill useful in every subject",
          "Only useful in Computer class",
          "Nothing — it's completely different",
        ],
        answer: 1,
        explanation: "Asking clear questions is a superpower in school AND with AI! The more specific you are — in science, math, or writing — the better answers you get.",
      },
      {
        id: 4,
        question: "AI can help you do many things. Which of these would be the BEST use of AI for a student?",
        options: [
          "Having AI write your entire diary entry",
          "Asking AI to explain a math concept you don't understand",
          "Using AI to send messages pretending to be someone else",
          "Asking AI to make up fake facts for your report",
        ],
        answer: 1,
        explanation: "Using AI to understand difficult concepts is awesome! It's like having a patient tutor available 24/7. But always verify what it tells you!",
      },
      {
        id: 5,
        question: "After today's program, what do YOU think AI is?",
        options: [
          "A magic robot that knows everything",
          "A dangerous machine that should be banned",
          "A smart tool made by humans that learns from data — useful when used responsibly",
          "Something only adults should use",
        ],
        answer: 2,
        explanation: "AI is a powerful tool built by humans to help us — not magic, not dangerous on its own. When YOU use it responsibly, it can help you learn, create, and grow!",
      },
    ],
  },
];
