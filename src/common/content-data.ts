const contentData = [
  {
    image: 'cartoon-robot-office.jpg',
    title: 'Big Layoffs at CNET as AI takes over the newsroom',
    attribution: 'The Verge - Mia Sato',
    body: "CNET, the tech site that recently made news for using AI to produce articles, has undergone significant layoffs that have resulted in the departure of several long-time employees, including the Editor in Chief, Connie Guglielmo. The layoffs total around a dozen people or about 10% of the public masthead, and are part of a restructuring effort by Red Ventures, the private equity-backed media company that bought CNET in 2020, to focus the site's coverage on areas where it can bring in traffic on Google search. The company will focus on sections it can monetize, including consumer technology, home and wellness, energy, broadband, and personal finance.",
    link: 'https://www.theverge.com/2023/3/2/23622231/cnet-layoffs-ai-articles-seo-red-ventures',
    datePublished: '2023-03-03T15:00:00.000Z',
  },

  {
    image: 'microsoft-designer.jpg',
    title: "Revolutionary or Risky? Microsoft's AI-Powered Design Tool",
    attribution: 'YouTube - MattVidPro AI',
    body: 'Microsoft Designer is a web app that helps you create stunning graphics and visuals for various purposes. You can use it to make logos, invitations, social media posts, banners, and more. You can either start from scratch or use one of the many templates available. You can also leverage the power of AI to generate unique designs based on your text or images.',
    link: 'https://www.youtube.com/watch?v=3v_e_ZzwEPY&t=639s',
    datePublished: '2023-03-03T15:00:00.000Z',
  },
  {
    image: 'computer-security.jpg',
    title:
      'Biden Administration to Hold Software Developers Accountable for Security Flaws',
    attribution: 'Axios - Sam Sabin',
    body: 'The Biden administration has released its first national cybersecurity strategy, aimed at holding software developers and critical infrastructure to tougher security standards and increasing pressure on ransomware gangs. The strategy, which has five "pillars", includes modernising federal systems\' cybersecurity defenses, increasing offensive hacking capabilities in the intelligence community, and reviewing gaps in current cybersecurity regulations for critical infrastructure sectors. The administration also plans to work with Congress and the private sector on legislation that would hold software makers liable for security flaws. The strategy builds on existing work, but the administration sees it as a long-term, 10-year plan.',
    link: 'https://www.axios.com/2023/03/02/national-cybersecurity-strategy-biden',
    datePublished: '2023-03-03T15:00:00.000Z',
  },
  {
    image: 'youtube-video.jpg',
    title: 'YouTube Teases AI-Powered Special Effects for Video Creators',
    attribution: 'PCMag - Michael Kan',
    body: 'YouTube is set to introduce generative AI special effects for video creators, according to a letter from CEO Neal Mohan. The features could include the ability to swap outfits or add film settings, with further capabilities to come. Mohan acknowledged the safety risks, saying the tools would be developed with "thoughtful guardrails" to ensure they were used responsibly. Deepfake technology is a concern, but Mohan promised to develop protections.',
    link: 'https://www.pcmag.com/news/youtube-teases-ai-powered-special-effects-for-video-creators',
    datePublished: '2023-03-03T15:00:00.000Z',
  },
  {
    image: 'chatgpt-on-laptop.jpg',
    title:
      "More than 200 books in Amazon's bookstore have ChatGPT listed as an author or coauthor",
    attribution: 'Business Insider - Beatrice Nolan',
    body: "ChatGPT, has been credited as the author or coauthor of over 200 books on Amazon's bookstore, raising concerns about the potential for a flood of low-quality books. Some of the books are guides to using the chatbot, while others are children's books written by ChatGPT and illustrated by other AI programs. Amazon policies do not require users to disclose the use of AI, so the real number of books authored by ChatGPT could be higher. The trend has been criticized by some, who fear that it could undermine the value of creative writing and put many authors out of work.",
    link: 'https://www.businessinsider.com/chatgpt-ai-write-author-200-books-amazon-2023-2',
    datePublished: '2023-03-06T15:00:00.000Z',
  },
  {
    image: 'special-ops.jpg',
    title:
      'Yikes, the U.S. Is Now Using Facial Recognition Rigged Drones for Special Ops',
    attribution: 'Gizmodo - Lucas Ropek',
    body: 'The US government has been using drones equipped with facial recognition technology to aid in special operations missions, according to New Scientist magazine. The drones are sold by a Seattle-based firm called RealNetworks, which provides a platform called Secure Accurate Facial Recognition, or SAFR. While the drones are not typically armed, they could be used for intelligence and target acquisition. Critics have warned of the ethical implications of using the technology.',
    link: 'https://gizmodo.com/drones-facial-recognition-us-air-force-realnetworks-1850163798',
    datePublished: '2023-03-06T15:00:00.000Z',
  },
  {
    image: 'robot-in-kitchen.jpg',
    title: 'Is ChatGPT Coming for Your Kitchen?',
    attribution: 'Eater -  Megan Ulu-Lani Boyanton',
    body: "TikTok creator Michelle Meng, is testing AI-generated recipes against recipes from professional chefs and restaurants on her channel. So far, there has been no clear pattern in the success of either method, although AI seems to do better with more complex ingredients. While some viewers have raised concerns about the ethics of using other creators' recipes in this way, Meng argues that AI is more of a tool than a replacement for human chefs. Although there has been interest in the videos, it remains to be seen whether AI-generated recipes will gain widespread popularity.",
    link: 'https://www.eater.com/23620766/chatgpt-ai-recipes-versus-chefs-tiktok-who-made-it-better',
    datePublished: '2023-03-06T15:00:00.000Z',
  },
  {
    image: 'chatgpt-api.jpg',
    title: 'Introducing ChatGPT and Whisper APIs',
    attribution: 'OpenAI',
    body: "OpenAI releases cost-effective ChatGPT and Whisper models on their API for language and speech-to-text capabilities, with significant cost savings and model improvements. ChatGPT API has been adopted by various companies, including Snapchat, Quizlet, Instacart, and Shopify, for their innovative AI-powered products. The new ChatGPT model family, gpt-3.5-turbo, is priced at $0.002 per 1k tokens, making it 10x cheaper than their existing GPT-3.5 models, and can be used for non-chat use cases. The API's new endpoint interacts with ChatGPT models, which consume messages and metadata using a new format called Chat Markup Language.",
    link: 'https://openai.com/blog/introducing-chatgpt-and-whisper-apis',
    datePublished: '2023-03-06T15:00:00.000Z',
  },
  {
    image: 'fake-news-frenzy.jpg',
    title:
      'A fake news frenzy: why ChatGPT could be disastrous for truth in journalism',
    attribution: 'The Guardian - Emily Bell',
    body: 'ChatGPT has the potential to generate vast amounts of news content. However, the platform has "no commitment to the truth" and has prompted fears it could be used to create fake news stories that appear to have been written by humans, warns journalist Emily Bell. In addition, Bell highlights the ethical issues with OpenAI itself, after it emerged workers in Kenya had been paid less than $2 an hour to sift through graphic content. The hype surrounding ChatGPT has drowned out warnings from experts about the potential risks of the platform, says Bell.',
    link: 'https://www.theguardian.com/commentisfree/2023/mar/03/fake-news-chatgpt-truth-journalism-disinformation',
    datePublished: '2023-03-06T15:00:00.000Z',
  },
  {
    image: 'ai-video-tools.jpg',
    title: 'VIDEO: AI Video & Audio Editing Tools (Big Time Save!)',
    attribution: 'YouTube - Premiere Gal ',
    body: "Premiere Gal presents a video about AI Video and Audio Editing Tools, featuring Adobe Premiere Pro's Sensei AI Tools and Effects, EndBoost, RunwayML, and Deep Swap. The tools include auto-reframe, color, remix, AI powered transcription, auto-ducking, sound mixing, motion tracking, face blur, and deep fake face swap.",
    link: 'https://www.youtube.com/watch?v=rLJQFI8GdxY',
    datePublished: '2023-03-06T15:00:00.000Z',
  },
]

export default contentData

//   {
//     image: 'xxx.jpg',
//     title: 'xxx',
//     attribution: 'xxx',
//     body: 'xxx',
//     link: 'xxx',
//     datePublished: 999,
//   },
