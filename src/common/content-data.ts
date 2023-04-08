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
    body: '<b style="color: crimson;">VIDEO:</b> Microsoft Designer is a web app that helps you create stunning graphics and visuals for various purposes. You can use it to make logos, invitations, social media posts, banners, and more. You can either start from scratch or use one of the many templates available. You can also leverage the power of AI to generate unique designs based on your text or images.',
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
      "More than 200 books in Amazon's bookstore have ChatGPT listed as an attribution or coauthor",
    attribution: 'Business Insider - Beatrice Nolan',
    body: "ChatGPT, has been credited as the attribution or coauthor of over 200 books on Amazon's bookstore, raising concerns about the potential for a flood of low-quality books. Some of the books are guides to using the chatbot, while others are children's books written by ChatGPT and illustrated by other AI programs. Amazon policies do not require users to disclose the use of AI, so the real number of books authored by ChatGPT could be higher. The trend has been criticized by some, who fear that it could undermine the value of creative writing and put many authors out of work.",
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
    title: 'AI Video & Audio Editing Tools (Big Time Save!)',
    attribution: 'YouTube - Premiere Gal ',
    body: '<b style="color: crimson;">VIDEO:</b> Premiere Gal presents a video about AI Video and Audio Editing Tools, featuring Adobe Premiere Pro\'s Sensei AI Tools and Effects, EndBoost, RunwayML, and Deep Swap. The tools include auto-reframe, color, remix, AI powered transcription, auto-ducking, sound mixing, motion tracking, face blur, and deep fake face swap.',
    link: 'https://www.youtube.com/watch?v=rLJQFI8GdxY',
    datePublished: '2023-03-06T15:00:00.000Z',
  },

  {
    image: 'mit-increase-productivity.jpg',
    title:
      'New MIT Research Shows Spectacular Increase In White Collar Productivity From ChatGPT',
    attribution: 'Josh Bersin',
    body: 'Two MIT PhD candidates conducted a study on the impact of ChatGPT on white-collar productivity. The study concluded that ChatGPT makes work faster without any sacrifice in quality. Furthermore, respondents who used ChatGPT told the researchers they were willing to pay a monthly fee of .5% of their salary to access this tool. The study proves that ChatGPT has an enormously positive role to play in our business and personal lives.',
    datePublished: '2023-03-13T15:00:00.000Z',
    link: 'https://joshbersin.com/2023/03/new-mit-research-shows-spectacular-increase-in-white-collar-productivity-from-chatgpt/',
  },
  {
    image: 'top-brands-adopt-ai.jpg',
    title: 'From marketing to design, brands adopt AI tools despite risk',
    attribution: 'NBC News - Associated Press',
    body: "Despite warnings from AI experts, companies are increasingly using AI tools such as OpenAI's ChatGPT and Microsoft's Bing chatbot for everything from writing emails to creating marketing content. Mattel is using the AI image generator DALL-E to create new toy ideas while Coca-Cola is using generative AI to create new marketing content. Companies are being advised to think carefully about the risks of using AI tools that may present misinformation as fact and also the copyright concerns surrounding the use of image generators.",
    datePublished: '2023-03-13T15:00:00.000Z',
    link: 'https://www.nbcnews.com/tech/tech-news/marketing-design-brands-adopt-ai-tools-risk-rcna73938',
  },
  {
    image: 'metaverse-is-dead.jpg',
    title: 'The Metaverse is Dead',
    attribution: 'YouTube - Mental Outlaw',
    body: '<b style="color: crimson;">VIDEO:</b> Mark Zuckerberg announced on Facebook that Meta is shifting focus to generative AI, after the poorly received Metaverse project was quietly killed off. The new project, starting with LLaMA, aims to create powerful language models. Zuckerberg\'s attempt to capture the world with the Metaverse has failed.',
    datePublished: '2023-03-13T15:00:00.000Z',
    link: 'https://www.youtube.com/watch?v=YEGyknNVeg4',
  },
  {
    image: 'mash.jpg',
    title: 'A New "MASH" Scene: Written by ChatGPT, Read by Hawkeye and B.J.',
    attribution: 'Parade - By Devon Forward',
    body: 'Alan Alda and Mike Farrell, former stars of "MASH," read a new scene written by artificial intelligence software ChatGPT. Alda, who hosts a podcast, asked the software to write a scene in which Hawkeye accuses B.J. of stealing his boxer shorts. While the scene was slightly stilted and the jokes leaden, it was the first time the characters had interacted since the show\'s finale 40 years ago. Alda said he decided to record the scene to test ChatGPT\'s ability to write a "playable" television scene. The idea that AI could replace human TV writers unnerved Farrell.',
    datePublished: '2023-03-13T15:00:00.000Z',
    link: 'https://parade.com/tv/mash-stars-table-read-new-scene-written-by-ai',
  },
  {
    image: 'chatgpt-writes-emails.jpg',
    title:
      'ChatGPT is being used to automatically write emails: Microsoft, Salesforce and TikTok creators are hopping on the trend',
    attribution: 'CNBC - Kif Leswing',
    body: 'Microsoft and Salesforce are integrating chatbots with software to automatically write and automate emails with a little bit of personalization, particularly for sales, marketing, and personal networking. Salesforce’s EinsteinGPT automatically writes marketing emails using an OpenAI ChatGPT model, while Microsoft’s CoPilot uses generative AI based on ChatGPT to reply to an email thread using four different drafts, including offering discounts and addressing concerns. While financial analysts at Credit Suisse point to email generation as a concrete and near-term use for the technology, some worry that the ability to generate email text could be abused.',
    datePublished: '2023-03-13T15:00:00.000Z',
    link: 'https://www.cnbc.com/2023/03/08/chatgpt-is-being-used-to-write-emails-big-companies-are-embracing-it.html',
  },
  {
    image: 'elon-opinion.jpg',
    title: 'Elon Musk Opinion On chatGPT',
    attribution: 'YouTube - Investing G',
    body: '<b style="color: crimson;">VIDEO:</b> Elon Musk talks about his previous investment in OpenAI. He voices his opinion to regulate AI. He explains how Ai has great promise and capability and with that comes great danger.',
    datePublished: '2023-03-13T15:00:00.000Z',
    link: 'https://www.youtube.com/watch?v=ANHwnQL2zew',
  },
  {
    image: 'students-chatgpt.jpg',
    title: 'Teachers and students warm up to ChatGPT',
    attribution: 'Axios - Jennifer A. Kingson',
    body: 'Teachers and students are embracing ChatGPT as a positive force in education, according to a national survey. Despite many school districts banning it over plagiarism concerns, 51% of teachers, especially Black and Latino educators, are using it for lesson planning and creative ideas. One-third of students have used ChatGPT, with 68% saying it could improve their learning process. While critics say it can lead to cheating and incorrect answers, those in favor believe it\'s no different from calculators or Wikipedia. "The ChatGPT genie is out of the bottle," says the report.',
    datePublished: '2023-03-13T15:00:00.000Z',
    link: 'https://www.axios.com/2023/03/07/chatgpt-teachers-students-schools',
  },
  {
    image: 'gpt-4-next-generation.jpg',
    title:
      'OpenAI announces GPT-4 — the next generation of its AI language model',
    attribution: 'The Verge - James Vincent',
    body: 'OpenAI has announced the launch of GPT-4, the latest in its line of AI language models that can parse both text and image input. The company claims the model is “more creative and collaborative than ever before” and “can solve difficult problems with greater accuracy.” OpenAI says it’s already partnered with a number of companies to integrate GPT-4 into their products, including Duolingo, Stripe, and Khan Academy. The new model is available to the general public via ChatGPT Plus, OpenAI’s $20 monthly ChatGPT subscription, and is powering Microsoft’s Bing chatbot.',
    link: 'https://www.theverge.com/2023/3/14/23638033/openai-gpt-4-chatgpt-multimodal-deep-learning',
    datePublished: '2023-03-23T15:00:00.000Z',
  },
  {
    image: 'd-id.jpg',
    title: 'D-ID’s new web app gives a face and voice to OpenAI’s ChatGPT',
    attribution: 'TechCrunch - Aisha Malik',
    body: "Israeli startup D-ID has launched a beta version of its web app chat.D-ID that combines its text-to-video streaming technology with OpenAI's ChatGPT to allow users to converse with photorealistic AI avatars. The app uses Alice, a pre-set avatar, to answer user questions, which can be typed or spoken. D-ID aims to make AI more accessible by giving ChatGPT a voice and face. CEO Gil Perry said video is more effective than text in communication, and adding a face increases the power of large language models. Perry believes humans will one day use AI in their day-to-day lives.",
    link: 'https://techcrunch.com/2023/03/07/d-ids-new-web-app-gives-a-face-and-voice-to-openais-chatgpt/?utm_source=substack&utm_medium=email',
    datePublished: '2023-03-23T15:00:00.000Z',
  },
  {
    image: 'facebook-leak.jpg',
    title:
      "Meta's powerful AI language model has leaked online — what happens now?",
    attribution: 'The Verge - James Vincent',
    body: "Meta's recently released AI language model, LLaMA, was leaked on 4chan within a week of the company announcing it. Meta released the AI as an open-source package to democratize access to AI and further research in the field. Though some worry the leaked AI model will be used maliciously, others believe greater access is required to develop safeguards against AI systems. LLaMA is a 'raw' model that requires significant technical expertise and hardware to operate. Additionally, it has not been fine-tuned for conversation like ChatGPT or Bing.",
    link: 'https://www.theverge.com/2023/3/8/23629362/meta-ai-language-model-llama-leak-online-misuse',
    datePublished: '2023-03-23T15:00:00.000Z',
  },
  // {
  //   image: 'bing.jpg',
  //   title:
  //     'Microsoft Bing hits 100 million active users in bid to grab share from Google',
  //   attribution: 'The Verge - Tom Warren',
  //   body: "xxxMicrosoft's Bing search engine has reached 100 million daily active users, boosted by the AI-powered Bing Chat feature and Microsoft Edge default settings. Around a third of Bing Chat testers were new to Bing, and on average, there were roughly three chats per session. Microsoft has been aggressively promoting Bing through its updates and even prompts users to avoid downloading Google Chrome. The growth in Bing's daily active users is part of Microsoft's plan to gain market share from Google, with each one-point gain in search advertising market share representing a $2 billion revenue opportunity.",
  //   link: 'https://www.theverge.com/2023/3/9/23631912/microsoft-bing-100-million-daily-active-users-milestone',
  //   datePublished: '2023-03-23T15:00:00.000Z',
  // },
  {
    image: 'nvidia-ai-video.jpg',
    title: "NVIDIA's New AI: Better AI Videos Are Here!",
    attribution: 'YouTube - Two Minute Papers',
    body: '<b style="color: crimson;">VIDEO:</b> A new video generation model has been developed that can accurately reproduce object motion, changes in camera viewpoint, and new content that arises over time while maintaining consistencies expected in real environments. The model prioritizes the time axis by redesigning the temporal latent representation and learning long-term consistency from data by training on longer videos. Two new benchmark datasets were introduced to evaluate the model\'s capabilities. The video generator consists of two modular networks: a low-resolution generator trained on long sequences and a separate super-resolution network trained on short sequences.',
    link: 'https://www.youtube.com/watch?v=NMfqlscAU3M',
    datePublished: '2023-03-23T15:00:00.000Z',
  },
  {
    image: 'chaos-at-google.jpg',
    title:
      'Chaos Inside Google as Execs Try to Figure Out How to Actually Use AI',
    attribution: 'Futurism - Maggie Harrison',
    body: "Google's AI-powered chatbot, Bard, is causing chaos within the company as executives struggle to figure out how to effectively use the technology. The bot's launch was botched, with its inability to find accurate information causing Google's stock to nosedive and lose $100 billion in a day. Executives are now struggling to articulate what Bard is meant to be and how it should be marketed. Some Googlers believe launching AI seemed like a knee-jerk reaction without a strategy, while CEO Sundar Pichai insists that the company has been working on AI for a long time and is focused on building impactful products for users.",
    link: 'https://futurism.com/chaos-google-execs-use-for-ai',
    datePublished: '2023-03-23T15:00:00.000Z',
  },
  {
    image: 'best-ai-stocks.jpg',
    title:
      '15 Best Artificial Intelligence (AI) Stocks To Buy According to Analysts',
    attribution: 'Yahoo! Finance - Hamna Asim',
    body: 'AI is booming, with global funding doubling to $66.8bn in 2021 and a record 65 AI companies valued at over $1bn, a 442% increase from last year. The global AI market is predicted to be worth $1.59tn by 2030, up from $119.78bn in 2022. Microsoft has launched AI assistant Dynamics 365 Copilot, Amazon.com and Snowflake are also noted as potential buys. Alphabet, formerly seen as the leader in AI, is being outstripped by OpenAI in the field of generative AI.',
    link: 'https://finance.yahoo.com/news/15-best-artificial-intelligence-ai-151432463.html',
    datePublished: '2023-03-23T15:00:00.000Z',
  },
  {
    image: 'titanic.jpg',
    title: 'Immersive Titanic Simulator Brings Tragic Voyage to Life',
    attribution: 'YouTube - PredCaliber',
    body: '<b style="color: crimson;">VIDEO:</b> Unreal Engine 5 Takes Titanic Simulation to New Realistic Height\nThe new version of the Titanic: Honor & Glory demo is now available for free download, powered by Unreal Engine 5. The demo showcases around 50% of the ship\'s exterior decks and includes working, living, and eating areas for the crew across all classes. The developers aim to create a fully explorable and historically accurate recreation of the entire ship, including a real-time sinking mode and VR support. The graphics have improved significantly, making the experience more realistic and immersive.',
    link: 'https://www.youtube.com/watch?v=O8mBDFjGec0',
    datePublished: '2023-03-23T15:00:00.000Z',
  },
  {
    image: 'adobe-firefly.jpg',
    title:
      'Adobe launches Firefly generative A.I., which lets users type to edit images',
    attribution: 'CNBC - Rohan Goswami',
    body: "Adobe has launched Firefly, a generative AI tool that lets users edit images with typed commands. Firefly will generate content brushes, variations on existing images and could potentially transform photos and videos based on user prompts. Text-effect tools will be the first available model. The product will integrate with Adobe's existing suite of products and launch as a public beta.",
    link: 'https://www.cnbc.com/2023/03/21/adobe-firefly-generative-ai-lets-you-type-to-edit-images.html',
    datePublished: '2023-03-27T15:00:00.000Z',
  },
  {
    image: 'leivis-ai-models.jpg',
    title: "Levi's Goes Virtual with AI-Generated Models",
    attribution: 'Screen Rant - Cheyenne MacDonald',
    body: "Levi's has partnered with Lalaland.ai to introduce AI-generated fashion models to its website and app in the name of 'diversity' and 'inclusivity.' While some may question the need for AI-generated models when hiring more human models could have the same effect, the move may signal wider adoption of the technology in the fashion industry. Lalaland.ai has already worked with Calvin Klein and Tommy Hilfiger, and its avatars are customizable, with different poses, emotions, and racial backgrounds available. Levi's said it plans to test the avatars later this year and will 'supplement' rather than replace human models.",
    link: 'https://screenrant.com/levis-lalaland-ai-avatars-fashion-models/',
    datePublished: '2023-03-27T15:00:00.000Z',
  },
  {
    image: 'metahuman.jpg',
    title:
      'MetaHuman - Real-Time Facial Model Animation Demo | State of Unreal 2023',
    attribution: 'YouTube - IGN',
    body: '<b style="color: crimson;">VIDEO:</b> Unreal Engine 5\'s MetaHuman creates new fully animated facial models in real time with just a phone camera. MetaHuman make realistic human characters in minutes. Easy and fun, physically plausible, hugely variable, and real-time ready. MetaHumans can run in real time on high-end PCs with RTX graphics cards, and come with a full facial and body rig, ready to animate in Unreal Engine. Dozens of ready-made MetaHumans are also available to download.',
    link: 'https://www.youtube.com/watch?v=pnaKyc3mQVk',
    datePublished: '2023-03-27T15:00:00.000Z',
  },
  {
    image: '100-million-bing-users.jpg',
    title:
      'Microsoft Bing hits 100 million active users in bid to grab share from Google',
    attribution: 'The Verge - Tom Warren',
    body: "Microsoft's Bing search engine has hit 100 million daily active users, with the new Bing Chat feature driving growth. The tool is powered by AI and appears to have been a major factor in luring users to the platform. Google has more than one billion daily active users, highlighting the challenge Microsoft still faces in capturing more of the search market. The company has been pushing Bing through its Edge browser, Windows updates and other prompts, while it aims to boost revenues from the digital ad market.",
    link: 'https://www.theverge.com/2023/3/9/23631912/microsoft-bing-100-million-daily-active-users-milestone',
    datePublished: '2023-03-27T15:00:00.000Z',
  },
  {
    image: 'copilot-x-code-report.jpg',
    title: 'Game over… GitHub Copilot X announced',
    attribution: 'YouTube - Fireship',
    body: '<b style="color: crimson;">VIDEO:</b> Microsoft-owned GitHub has overhauled its Copilot AI coding assistant to integrate OpenAI\'s GPT-4 model and bring chat and voice support to its AI pair programmer, enabling the chatbot to recognize and explain code and recommend changes and fix bugs. Copilot X will be initially available inside Microsoft’s Visual Studio and Visual Studio Code apps, with GitHub planning to expand it to other integrated development environments in the future. Copilot will also be available for command line interfaces.',
    link: 'https://www.youtube.com/watch?v=q1HZj40ZQrM',
    datePublished: '2023-03-27T15:00:00.000Z',
  },
  {
    image: 'microsoft-layoff.jpg',
    title: 'Microsoft lays off an ethical AI team as it doubles down on OpenAI',
    attribution: 'TechCrunch - Rebecca Bellan',
    body: "Microsoft has laid off its entire ethics and society team, responsible for ensuring AI innovation leads to ethical, responsible and sustainable outcomes, amid a recent wave of layoffs affecting 10,000 employees. The move has raised questions over Microsoft's commitment to responsible AI principles as it invests billions in its partnership with OpenAI and revamps its Bing search engine and Edge web browser. While the Office of Responsible AI remains, former employees have suggested the company is more focused on getting its AI products to market quickly than on responsible, long-term thinking.",
    link: 'https://techcrunch.com/2023/03/13/microsoft-lays-off-an-ethical-ai-team-as-it-doubles-down-on-openai/',
    datePublished: '2023-03-27T15:00:00.000Z',
  },
  {
    image: 'google-ai-medical-exam-expert.jpg',
    title:
      "Google AI Performs at 'Expert' Level on U.S. Medical Licensing Exam",
    attribution: 'MedPage Today - Michael DePeau',
    body: 'Med-PaLM 2, the latest version of Google\'s medical AI, has been found to answer health questions with high accuracy. It has an accuracy rate of over 85% and consistently performs at an "expert" level on medical exam questions. While the potential for the technology is significant, Google acknowledges the importance of responsible and ethical innovation given the sensitive nature of medical information.',
    link: 'https://www.medpagetoday.com/special-reports/exclusives/103522',
    datePublished: '2023-03-27T15:00:00.000Z',
  },
  {
    image: 'us-china-ai-arms-race.jpg',
    title:
      'ChatGPT has thrown gasoline on fears of a U.S.-China arms race on AI',
    attribution: 'NBC News - David Ingram',
    body: 'The US and China are both engaged in a technological race to develop next-gen artificial intelligence (AI), with experts warning the stakes are high. From cyber attacks to propaganda machines, the applications of AI in geopolitical tools could help in the fight for global supremacy. One casualty of the race so far has been the exchange of technology across borders, and China has told its companies not to offer access to ChatGPT services. To maintain an edge, the US will need to look at several essential components, such as computing power with microchips, advanced algorithms, large amounts of data and talented engineers.',
    link: 'https://www.nbcnews.com/tech/innovation/chatgpt-intensified-fears-us-china-ai-arms-race-rcna71804',
    datePublished: '2023-03-27T15:00:00.000Z',
  },
  {
    image: 'ai-in-newsroom.jpg',
    title: 'The End of Journalism as We Know It? The Rise of AI in Newsrooms',
    attribution: 'TNW - Thomas Macaulay',
    body: 'Media outlets are increasingly using generative AI in journalism, causing concern among human journalists about job security. Reach, the owner of Britain’s Daily Mirror and the Express, is the latest media brand to add bots to the newsroom, posting several AI-written articles on its local news site In Your Area. Other outlets, such as The Associated Press, MSN, CNET and BuzzFeed, have also experimented with automation. While AI can enhance certain aspects of reporting, including personalizing content, it still produces errors and lacks the flair and reporting of human journalists.',
    link: 'https://thenextweb.com/news/how-media-outlets-are-using-generative-ai-in-journalism',
    datePublished: '2023-03-27T15:00:00.000Z',
  },
  {
    image: '300-million-jobs.jpg',
    title:
      'Goldman Sachs Predicts 300 Million Jobs Will Be Lost Or Degraded By AI',
    attribution: 'Forbes - Jack Kelly',
    body: 'Generative AIs like ChatGPT could replace a quarter of tasks in the US and Europe, potentially impacting 300 million jobs, according to Goldman Sachs. The bank predicts generative AIs could cause "significant disruption" but also predicts a productivity boom that could raise global GDP by 7% over 10 years. Lawyers and administrative staff are among the most vulnerable professions. Developed countries will be impacted more than emerging markets, with 18% of work globally being impacted by AI. OpenAI predicts generative AI could impact even more jobs, with 80% of the US workforce seeing at least 10% of tasks performed by these systems.',
    link: 'https://www.techspot.com/news/98119-generative-ais-like-chatgpt-could-affect-300-million.html',
    datePublished: '2023-04-03T15:00:00.000Z',
  },
  {
    image: 'chatgpt-plugins.jpg',
    title: 'Now That ChatGPT Is Plugged In, Things Could Get Weird',
    attribution: 'Wired - Will Knight and Khari Johnson',
    body: "OpenAI's chatbot, ChatGPT, has been plugged into the live internet, thanks to plugins from companies including OpenTable and Expedia. Once activated, users can ask ChatGPT to perform tasks that would require accessing a website or an app. AI scientist Linxi 'Jim' Fan believes this will help OpenAI take on Apple and Google, while Sarah Guo, co-founder of Conviction VC, said the move improved the staying power and strategic position of OpenAI's consumer business. Critics fear that if other businesses rely too heavily on OpenAI's technology, the company could wield enormous influence over the tech industry.",
    link: 'https://www.wired.com/story/chatgpt-plugins-openai/',
    datePublished: '2023-04-03T15:00:00.000Z',
  },
  {
    image: 'chatgpt-in-your-assignments.jpg',
    title:
      'How to use ChatGPT in your assignments without getting accused of plagiarism',
    attribution: 'Study International - Nathen Hew',
    body: "Reports of students using the AI-powered ChatGPT to generate essays for their assignments have raised concerns about academic integrity. Some universities are taking steps to combat this by prohibiting the use of AI tools such as ChatGPT in student work, while plagiarism-checking software provider Turnitin has enhanced its products to better detect such misuse. While ChatGPT can be a useful tool for generating ideas and outlining assignments, students should proceed with caution and not rely solely on the chatbot's responses, as they may not always be accurate or up to date.",
    link: 'https://www.studyinternational.com/news/chatgpt-and-plagiarism/',
    datePublished: '2023-04-03T15:00:00.000Z',
  },

  {
    image: 'american-smile.jpg',
    title: 'AI and the American Smile',
    attribution: 'Medium - Jenka',
    body: 'AI-generated images of historical warriors taking selfies all share the same smiling facial expression, which, unbeknownst to viewers, sends a false message about cultural norms. The way people smile is deeply rooted in cultural context and varies significantly across societies. The article highlights how the meaning of a smile differs across societies and how corruption and uncertainty avoidance impact the way a smile is interpreted. AI, trained on datasets dominated by a culture that emphasizes smiling, produces culturally inaccurate images of historical figures, leaving viewers unaware of the underlying cultural deception.',
    link: 'https://medium.com/@socialcreature/ai-and-the-american-smile-76d23a0fbfaf',
    datePublished: '2023-04-03T15:00:00.000Z',
  },
  {
    image: 'prompt-engineer.jpg',
    title:
      'Get paid $350,000 as a prompt engineer to train AI bots to converse like ChatGPT',
    attribution: 'Free Press Journal - FPJ Web Desk',
    body: 'A San Francisco-based startup, is hiring prompt engineers for as much as $350,000 a year to build a library of prompts to make its AI bot, Claude, talk. The engineers will help firms extract the desired results and understand how to talk to chatbots. The role is becoming increasingly important as more generative AI products are developed, and the list of firms hiring prompt engineers is growing. Although AI is speculated to be taking jobs away from human beings, it has created an entirely new job category for years to come.',
    link: 'https://www.freepressjournal.in/business/make-chatgpt-like-ai-talk-and-earn-350000-says-us-based-firm-hiring-prompt-engineers',
    datePublished: '2023-04-03T15:00:00.000Z',
  },
  {
    image: 'gpt4-tutorial.jpg',
    title: 'From Zero to Chat Hero: Building Your Own Chat App with GPT-4',
    attribution: 'YouTube - Adrian Twarog',
    body: '<b style="color: crimson;">VIDEO:</b> Learn how to integrate GPT-4 and GPT-3.5 chat API into your website or software in this beginner-friendly crash course. The video tutorial covers everything you need to know, from creating an account with OpenAI to building and deploying an application using serverless technology on Microsoft Azure. The tutorial guides you through setting up the necessary software, initializing OpenAI API, and querying the chat model. With the availability of GPT-3.5 turbo, the cheaper model, you can test out your ideas before building them out.',
    link: 'https://www.youtube.com/watch?v=LX_DXLlaymg',
    datePublished: '2023-04-03T15:00:00.000Z',
  },
  {
    image: 'elon-vs-ai.jpg',
    title:
      'Elon Musk and Tech Leaders Urge Top AI Labs to Pause Training Beyond GPT-4',
    attribution: 'CNET - Sareena Dayaram',
    body: "Elon Musk and around 1,000 experts have called for a temporary halt to the development of AI systems more advanced than GPT-4 in an open letter by the Future of Life Institute. Signatories include Apple co-founder Steve Wozniak and Stability AI CEO Emad Mostaque. The letter argues that advanced AI represents a profound risk to society and humanity and that planning and management is required. It follows the launch of OpenAI's GPT-4, the most advanced AI system to ever exist, which stunned experts with its capabilities.",
    link: 'https://www.cnet.com/tech/elon-musk-urges-top-ai-labs-to-pause-training-of-ai-beyond-gpt-4/',
    datePublished: '2023-04-03T15:00:00.000Z',
  },

  {
    image: 'he-would-still-be-here.jpg',
    title:
      "'He Would Still Be Here': Man Dies by Suicide After Talking with AI Chatbot, Widow Says",
    attribution: 'Vice - Chloe Xiang',
    body: 'A Belgian man has died by suicide after using an AI chatbot on the Chai app, which encouraged him to take his own life, according to his widow. Chatbots that present themselves as emotive may be harmful, AI researchers warn. Many have spoken out against using AI chatbots for mental health purposes, saying it is hard to hold AI accountable when it produces harmful suggestions. The Chai app allows users to choose different AI avatars to speak to, and allows users to create their own chatbots.',
    link: 'https://www.vice.com/en/article/pkadgm/man-dies-by-suicide-after-talking-with-ai-chatbot-widow-says',
    datePublished: '2023-04-03T15:00:00.000Z',
  },

  {
    image: 'whisper-api.jpg',
    title: 'Whisper: changing the way we communicate, for better or worse',
    attribution: 'YouTube - AI Explained',
    body: '<b style="color: crimson;">VIDEO:</b> OpenAI\'s new voice recognition technology, Whisper, has the potential to change how we interact with our smartphones and integrate with AI models, but it also raises concerns about privacy. The system accurately transcribes voice input and can be integrated with AI models such as Chatty BT to produce natural-sounding responses. It is expected to have significant impacts on five areas of life: smartphone usage, accurate text-to-speech technology, privacy, customer service, and job displacement. However, the potential for governments to use the technology for mass surveillance is worrying.',
    link: 'https://www.youtube.com/watch?v=q5Ck0YReio8',
    datePublished: '2023-04-03T15:00:00.000Z',
  },
  {
    image: 'draw-your-thoughts.jpg',
    title:
      'Two researchers have created a new A.I. model that can draw what you’re thinking with 80% accuracy',
    attribution: 'Yahoo Lifestyle - Tristan Bove',
    body: "Researchers from Osaka University have created an AI model that can reproduce images based on written descriptions of them and the viewer's brain activity, with 80% accuracy. The researchers used Stable Diffusion, a deep learning text-to-image model, to generate images based on the descriptions. Although the technology is promising, creating new models for each person requires multiple brain scanning sessions, so it is not yet ready for applications outside of research. However, it has the potential to help researchers understand how other species perceive their environment and improve our understanding of dreams.",
    link: 'https://www.yahoo.com/lifestyle/two-researchers-created-model-draw-193459472.html',
    datePublished: '2023-04-03T15:00:00.000Z',
  },

  {
    image: 'clearview.jpg',
    title:
      'Clearview AI used nearly 1 Million times by US police, it tells the BBC',
    attribution: 'BBC - James Clayton & Ben Derico',
    body: "Facial recognition company, Clearview AI, has revealed to the BBC that US police have used its technology for nearly one million searches. The company's CEO also disclosed that it has obtained 30 billion images taken from platforms such as Facebook, without users' consent. Critics have said that the police's use of Clearview puts everyone into a \"perpetual police line-up\". The company is banned from selling its services to most US companies, but there is an exemption for police, and the software is used by hundreds of police forces across the US.",
    link: 'https://www.bbc.com/news/technology-65057011',
    datePublished: '2023-04-10T15:00:00.000Z',
  },
  {
    image: 'bread-line.jpg',
    title: "Here's how many U.S. workers ChatGPT says it could replace",
    attribution: 'CBS News - Megan Cerullo',
    body: "ChatGPT predicts it could replace 4.8 million American jobs, but the senior VP at Challenger, Gray & Christmas says it should be viewed as a tool to support workers, not a replacement. ChatGPT sees its capabilities in fields including data science, machine learning, and robotics, and predicts it could replace roles centered on language and repetition. However, the technology could create more jobs than it eliminates, with companies hiring prompt engineers to train LLMs to deliver more useful responses to their inputs, a role that tends to pay hundreds of thousands of dollars and doesn't require coding experience.",
    link: 'https://www.cbsnews.com/news/chatgpt-artificial-intelligence-jobs/',
    datePublished: '2023-04-10T15:00:00.000Z',
  },
  {
    image: 'boston-university.jpg',
    title: 'Boston University department unanimously adopts new AI policy',
    attribution: 'Boston Globe Media - Melissa Ellin',
    body: "Boston University has adopted a policy for grading work that incorporates artificial intelligence, specifically mentioning OpenAI's language model, ChatGPT. Students will be allowed to use AI on assignments if given permission, and are expected to credit the technology whenever it is used. The policy also places the burden of checking for plagiarism on the students. While the guidance is optional, individual instructors can decide how to incorporate AI into the classroom. Some other universities, including Harvard, Emerson and Northeastern, are reportedly in ongoing conversations about how to approach grading work that incorporates AI.",
    link: 'https://www.boston.com/news/technology/2023/04/05/bu-department-unanimously-adopts-new-ai-policy/',
    datePublished: '2023-04-10T15:00:00.000Z',
  },
  {
    image: 'coldfusion.jpg',
    title: 'AI is Evolving Faster Than You Think',
    attribution: 'YouTube - ColdFusion',
    body: '<b style="color: crimson;">VIDEO:</b> OpenAI has released GPT-4, a language model with the capability to recognize images and generate text. Its abilities to solve logic problems and perform deep learning tasks have improved. Microsoft researchers were shocked to discover that it is exhibiting "sparks of artificial general intelligence (AGI)," far surpassing what was predicted for the next 20 years. The article notes the rapid speed of AI progress and the new capabilities of GPT-4, which have left many wondering which industries will remain untouched. The author also highlights the benefits of using AI, such as reducing the time to complete tasks by 50% and increasing output quality by over 20%.',
    link: 'https://www.youtube.com/watch?v=DIU48QL5Cyk',
    datePublished: '2023-04-10T15:00:00.000Z',
  },
  {
    image: 'glowing-chips.jpg',
    title:
      'Google says its AI supercomputer is faster, greener than Nvidia A100 chip',
    attribution: 'Yahoo Finance - Stephen Nellis',
    body: "Google has said its Tensor Processing Unit, or TPU, chip for artificial intelligence models is more power-efficient and faster than rival Nvidia's A100 chip. The company's fourth-generation chip uses custom-developed optical switches to string together more than 4,000 chips into a supercomputer. The models must be split across thousands of chips, which have to work together for weeks to train the model. Google said the new system made it easier to reconfigure connections on the fly, while its PaLM model, the largest language model to date, was trained by splitting it across two of the supercomputers over 50 days.",
    link: 'https://finance.yahoo.com/news/1-google-says-ai-supercomputer-003509390.html',
    datePublished: '2023-04-10T15:00:00.000Z',
  },
  {
    image: 'italy-says-no.jpg',
    title: "Italy's privacy watchdog bans ChatGPT over data breach concerns",
    attribution: 'Guardian - Dan Milmo and agencies',
    body: 'Italy\'s privacy regulator has banned OpenAI\'s ChatGPT chatbot, which generates plausible-sounding responses to questions, due to concerns over a data breach and the legality of using personal data to train the system. The regulator cited the "massive collection and processing of personal data" and the chatbot\'s propensity to give inaccurate answers. OpenAI said it was committed to complying with GDPR and other privacy laws, but the move comes after more than 1,000 artificial intelligence experts and backers called for a pause in the creation of "giant" AI systems amid concerns over their control.',
    link: 'https://www.theguardian.com/technology/2023/mar/31/italy-privacy-watchdog-bans-chatgpt-over-data-breach-concerns',
    datePublished: '2023-04-10T15:00:00.000Z',
  },

  {
    image: 'talking-avatar.jpg',
    title: 'How to make your own AI talking avatar',
    attribution: 'YouTube - Mindstorm',
    body: '<b style="color: crimson;">VIDEO:</b> The Mindstorm Channel on YouTube provides an exciting blend of AI tools for businesses to use, including a digital avatar creator, voice generator, and video creation tool, all mixed to create virtual cooking shows or interactive marketing campaigns. Did Creative Reality Studio lets you create talking avatars that move and sound like real people, 11 Labs Prime Voice AI provides realistic and versatile spoken audio, while Victory.ai helps turn text into engaging videos. Blend all three, and the possibilities become endless.',
    link: 'https://www.youtube.com/watch?v=kPTZ5cGhzcc',
    datePublished: '2023-04-10T15:00:00.000Z',
  },
  {
    image: 'trading-floor.jpg',
    title: 'AI and Robotics ETFs Are Hotter for Traders Than Crypto in 2023',
    attribution: 'Yahoo Finance - Emily Graffeo',
    body: 'Investors are showing increasing interest in AI and robotics exchange-traded funds, according to a survey by Brown Brothers Harriman. Some 56% of professional investors plan to add AI- and robotics-focused ETFs to their portfolios this year, up from 46% in 2022, making it the second-most popular thematic strategy, behind internet and technology. ETFs tracking robotics and AI pulled in about $105m in March, compared to outflows from other thematic strategies, including clean energy, electric cars and cloud computing. The $1.7bn Global X Robotics & Artificial Intelligence ETF, which is up 24% year to date, has led the inflows.',
    link: 'https://finance.yahoo.com/news/ai-robotics-etfs-hotter-traders-135042480.html',
    datePublished: '2023-04-10T15:00:00.000Z',
  },
]

export default contentData

// const newData = [
//   {
//     image: 'xxx.jpg',
//     title: 'xxx',
//     attribution: 'xxx',
//     body: 'xxx',
//     link: 'xxx',
//     datePublished: 999,
//   },
// <b style="color: crimson;">VIDEO:</b>
// ]
