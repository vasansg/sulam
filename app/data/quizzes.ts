export type Question = {
  id: number;
  emoji: string;
  question: string;
  options: { label: string; emoji: string }[];
  answer: number;
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
    title: "Human or AI?",
    emoji: "🤔",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    description: "Can you spot which one is made by AI?",
    time: "8:30 – 8:55",
    questions: [
      {
        id: 1,
        emoji: "🖼️",
        question: "A perfect, super-detailed painting appeared in 2 seconds. Who made it?",
        options: [
          { label: "A student", emoji: "👦" },
          { label: "An AI", emoji: "🤖" },
          { label: "A teacher", emoji: "👩‍🏫" },
          { label: "A robot arm", emoji: "🦾" },
        ],
        answer: 1,
        explanation: "AI can make perfect detailed images in seconds! A human would take hours. 🎨",
      },
      {
        id: 2,
        emoji: "✍️",
        question: "Which was written by AI?",
        options: [
          { label: "\"i dont no how\"", emoji: "😅" },
          { label: "\"Perfect grammar, zero mistakes\"", emoji: "✅" },
          { label: "\"my cat is funny lol\"", emoji: "😂" },
          { label: "\"2+2 = 5 i think\"", emoji: "🤷" },
        ],
        answer: 1,
        explanation: "AI always writes with perfect grammar and no mistakes! The others look like normal human writing. 📝",
      },
      {
        id: 3,
        emoji: "📜",
        question: "A poem rhymes perfectly and uses big fancy words. Who wrote it?",
        options: [
          { label: "A 10-year-old", emoji: "🧒" },
          { label: "A teacher", emoji: "👩‍🏫" },
          { label: "An AI", emoji: "🤖" },
          { label: "A cat 🐱", emoji: "😺" },
        ],
        answer: 2,
        explanation: "AI can write perfectly rhyming poems with hard words — instantly! 🌟",
      },
      {
        id: 4,
        emoji: "🐉",
        question: "A painting shows a dragon flying over a rainbow city. Who most likely made it?",
        options: [
          { label: "Hand-drawn by student", emoji: "✏️" },
          { label: "Phone photo", emoji: "📱" },
          { label: "AI image generator", emoji: "🤖" },
          { label: "Old camera photo", emoji: "📷" },
        ],
        answer: 2,
        explanation: "AI image generators can create amazing fantasy scenes like dragons and rainbow cities! 🌈",
      },
      {
        id: 5,
        emoji: "📚",
        question: "Your friend's homework answer is long, perfect, and uses words you never heard. What happened?",
        options: [
          { label: "Very smart friend", emoji: "🧠" },
          { label: "Used AI tool", emoji: "🤖" },
          { label: "Copied a book", emoji: "📖" },
          { label: "Lucky guess", emoji: "🍀" },
        ],
        answer: 1,
        explanation: "Perfect formatting + zero errors + big vocabulary = probably AI! Always be honest about using AI. ✅",
      },
    ],
  },
  {
    id: "what-is-ai",
    title: "What is AI?",
    emoji: "🤖",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    description: "Learn what AI is and where you see it every day!",
    time: "8:55 – 9:25",
    questions: [
      {
        id: 1,
        emoji: "🔤",
        question: "What does \"AI\" stand for?",
        options: [
          { label: "Automatic Internet", emoji: "🌐" },
          { label: "Artificial Intelligence", emoji: "🧠" },
          { label: "Amazing Invention", emoji: "💡" },
          { label: "Android Information", emoji: "📱" },
        ],
        answer: 1,
        explanation: "AI = Artificial Intelligence. It means making computers think and learn like humans! 🧠",
      },
      {
        id: 2,
        emoji: "📺",
        question: "Which one uses AI every day?",
        options: [
          { label: "Pencil", emoji: "✏️" },
          { label: "Calculator", emoji: "🖩" },
          { label: "YouTube suggestions", emoji: "▶️" },
          { label: "Printed book", emoji: "📚" },
        ],
        answer: 2,
        explanation: "YouTube uses AI to watch what you like — then suggests your next video! 🎬",
      },
      {
        id: 3,
        emoji: "📈",
        question: "How does AI get smarter?",
        options: [
          { label: "Someone types all answers", emoji: "⌨️" },
          { label: "Learns from lots of data", emoji: "📊" },
          { label: "Copies from Google", emoji: "🔍" },
          { label: "It never gets smarter", emoji: "❌" },
        ],
        answer: 1,
        explanation: "AI learns from millions of examples — like how YOU get better at math with lots of practice! 💪",
      },
      {
        id: 4,
        emoji: "🚫",
        question: "Which one is NOT an AI?",
        options: [
          { label: "Siri", emoji: "🍎" },
          { label: "Google Assistant", emoji: "🔵" },
          { label: "Light switch", emoji: "💡" },
          { label: "Website chatbot", emoji: "💬" },
        ],
        answer: 2,
        explanation: "A light switch just ON/OFF — it doesn't think! Siri, Google, and chatbots all understand your questions. 🤖",
      },
      {
        id: 5,
        emoji: "🎮",
        question: "Game enemies get harder as you play better. What is this?",
        options: [
          { label: "A game bug", emoji: "🐛" },
          { label: "Pure luck", emoji: "🍀" },
          { label: "AI learning you", emoji: "🤖" },
          { label: "Slow internet", emoji: "🐌" },
        ],
        answer: 2,
        explanation: "Game AI watches how you play and adjusts difficulty. It's learning YOUR skill! 🎯",
      },
    ],
  },
  {
    id: "ask-ai",
    title: "Ask AI Questions",
    emoji: "💬",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    description: "Learn how to ask AI good questions!",
    time: "9:40 – 10:25",
    questions: [
      {
        id: 1,
        emoji: "💡",
        question: "What is a \"prompt\"?",
        options: [
          { label: "A computer virus", emoji: "🦠" },
          { label: "What you type to AI", emoji: "⌨️" },
          { label: "AI's internet", emoji: "🌐" },
          { label: "A keyboard button", emoji: "🔲" },
        ],
        answer: 1,
        explanation: "A prompt is your question or instruction to AI. Better prompt = better answer! ✨",
      },
      {
        id: 2,
        emoji: "⭐",
        question: "Which is a BETTER question for AI?",
        options: [
          { label: "\"black holes\"", emoji: "🌑" },
          { label: "\"tell me\"", emoji: "😶" },
          { label: "\"Explain black holes like I'm 11\"", emoji: "🚀" },
          { label: "\"huh?\"", emoji: "😕" },
        ],
        answer: 2,
        explanation: "More details = better answers! Telling AI your age helps it explain things YOU can understand. 🌟",
      },
      {
        id: 3,
        emoji: "🎯",
        question: "You ask AI \"Make a quiz\" and it gets confused. What should you do?",
        options: [
          { label: "Give up", emoji: "😞" },
          { label: "USE CAPS LOCK", emoji: "🔠" },
          { label: "Add more details", emoji: "✏️" },
          { label: "Try a different AI", emoji: "🔄" },
        ],
        answer: 2,
        explanation: "\"Make a 5-question quiz about dinosaurs for kids\" — now AI knows exactly what you want! 🦕",
      },
      {
        id: 4,
        emoji: "⚠️",
        question: "Can AI give WRONG answers?",
        options: [
          { label: "No, always correct", emoji: "✅" },
          { label: "Yes! Always double-check", emoji: "🔍" },
          { label: "Only in other languages", emoji: "🌍" },
          { label: "Only on Mondays", emoji: "😄" },
        ],
        answer: 1,
        explanation: "Yes! AI can make mistakes. Always check important facts with a teacher or trusted source! 👩‍🏫",
      },
      {
        id: 5,
        emoji: "📖",
        question: "Which prompt gets a better AI story?",
        options: [
          { label: "\"Write a story\"", emoji: "📄" },
          { label: "\"story please\"", emoji: "🙏" },
          { label: "\"Funny robot story, for kids 10\"", emoji: "🤖😂" },
          { label: "\"do it\"", emoji: "😑" },
        ],
        answer: 2,
        explanation: "Details = magic! Genre + character + audience = exactly the story you want! ✨",
      },
    ],
  },
  {
    id: "ai-images",
    title: "Create AI Images",
    emoji: "🎨",
    color: "from-orange-500 to-yellow-500",
    bgColor: "bg-orange-50",
    description: "Turn your words into amazing pictures with AI!",
    time: "10:45 – 11:20",
    questions: [
      {
        id: 1,
        emoji: "🖼️",
        question: "How does AI make a picture from words?",
        options: [
          { label: "Copies from Google", emoji: "🔍" },
          { label: "Human draws very fast", emoji: "✏️" },
          { label: "Learns from your description", emoji: "🧠" },
          { label: "Uses a camera", emoji: "📷" },
        ],
        answer: 2,
        explanation: "AI learned from millions of images. You describe it → AI creates a brand new picture! 🌟",
      },
      {
        id: 2,
        emoji: "🚀",
        question: "Which prompt makes the best AI image?",
        options: [
          { label: "\"cat\"", emoji: "🐱" },
          { label: "\"Cat astronaut, space, cartoon, colorful\"", emoji: "🐱🚀🌈" },
          { label: "\"picture\"", emoji: "🖼️" },
          { label: "\"something cool\"", emoji: "😎" },
        ],
        answer: 1,
        explanation: "More details = more amazing image! Color + style + setting = WOW result! 🎨",
      },
      {
        id: 3,
        emoji: "🍭",
        question: "Your AI image of \"candy city\" looks wrong. What do you do?",
        options: [
          { label: "Give up", emoji: "😞" },
          { label: "Keep clicking randomly", emoji: "🖱️" },
          { label: "Add more details to prompt", emoji: "✏️" },
          { label: "Draw it yourself", emoji: "🖍️" },
        ],
        answer: 2,
        explanation: "Fix your prompt! Try \"lollipop buildings, chocolate roads, blue sky, cartoon style\" 🍫",
      },
      {
        id: 4,
        emoji: "🏫",
        question: "Can you use an AI image in your school project without telling your teacher?",
        options: [
          { label: "Yes, no one will know", emoji: "🤫" },
          { label: "Only if it looks good", emoji: "😏" },
          { label: "No — always be honest", emoji: "✅" },
          { label: "Yes, it's free", emoji: "🆓" },
        ],
        answer: 2,
        explanation: "Always tell your teacher when you use AI tools! Honesty is important. 💯",
      },
      {
        id: 5,
        emoji: "🎭",
        question: "What does \"art style\" mean in a prompt?",
        options: [
          { label: "Image size", emoji: "📐" },
          { label: "How fast it generates", emoji: "⚡" },
          { label: "How it looks — cartoon, realistic...", emoji: "🎨" },
          { label: "Only background color", emoji: "🟦" },
        ],
        answer: 2,
        explanation: "Art style = HOW it looks! Cartoon vs realistic vs watercolor — all totally different! 🖌️",
      },
    ],
  },
  {
    id: "wrapup",
    title: "Wrap-up & Reflection",
    emoji: "🌟",
    color: "from-red-500 to-rose-500",
    bgColor: "bg-red-50",
    description: "Review everything you learned today!",
    time: "11:20 – 11:30",
    questions: [
      {
        id: 1,
        emoji: "📌",
        question: "The MOST important rule when using AI?",
        options: [
          { label: "Use AI for everything", emoji: "🤖" },
          { label: "Never use AI", emoji: "🚫" },
          { label: "Think, check, be honest", emoji: "✅" },
          { label: "Only use AI for games", emoji: "🎮" },
        ],
        answer: 2,
        explanation: "AI is a helper — YOU are the thinker! Always check answers and be honest. 🧠",
      },
      {
        id: 2,
        emoji: "✏️",
        question: "Which shows SMART use of AI?",
        options: [
          { label: "Let AI do all homework", emoji: "😴" },
          { label: "Use AI to understand, then write yourself", emoji: "💡" },
          { label: "Pretend AI is you in class", emoji: "🎭" },
          { label: "Cheat on a test with AI", emoji: "❌" },
        ],
        answer: 1,
        explanation: "Use AI to LEARN, then create your OWN work. That's how you actually get smarter! 💪",
      },
      {
        id: 3,
        emoji: "🔗",
        question: "Good prompts = better AI answers. This skill also helps in...",
        options: [
          { label: "Physical Education", emoji: "⚽" },
          { label: "Asking clear questions everywhere", emoji: "❓" },
          { label: "Only Computer class", emoji: "💻" },
          { label: "Nothing else", emoji: "🤷" },
        ],
        answer: 1,
        explanation: "Asking clear questions is useful in EVERY subject — science, math, writing, and more! 🌍",
      },
      {
        id: 4,
        emoji: "🏆",
        question: "Best way a student can use AI?",
        options: [
          { label: "Write my whole diary", emoji: "📓" },
          { label: "Explain hard concepts to me", emoji: "🧠" },
          { label: "Pretend to be someone else", emoji: "🎭" },
          { label: "Make up fake facts", emoji: "❌" },
        ],
        answer: 1,
        explanation: "AI is like a 24/7 tutor! Ask it to explain hard things — then verify with your teacher. 👩‍🏫",
      },
      {
        id: 5,
        emoji: "🌍",
        question: "After today — what is AI?",
        options: [
          { label: "A magic robot", emoji: "✨🤖" },
          { label: "A dangerous machine", emoji: "☠️" },
          { label: "A smart tool — useful when used wisely", emoji: "🛠️" },
          { label: "Only for adults", emoji: "🔞" },
        ],
        answer: 2,
        explanation: "AI is a powerful tool made by humans. When YOU use it wisely, it helps you learn and create! 🚀",
      },
    ],
  },
];
