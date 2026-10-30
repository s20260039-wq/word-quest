(function () {
  'use strict';

  const DEFAULT_LANG = 'zh-Hant';
  const SUPPORTED = ['zh-Hant', 'zh-Hans', 'en'];
  const STORE_KEY = 'wq-site-lang-v1';

  const UI = {
    'zh-Hant': { menuClose: '關閉選單', switched: '已切換至繁體中文' },
    'zh-Hans': { menuClose: '关闭菜单', switched: '已切换至简体中文' },
    en: { menuClose: 'Close menu', switched: 'Switched to English' }
  };

  /* ============================================================
     TRANSLATIONS (Traditional Chinese lives in index.html)
     ============================================================ */
  const STRINGS = {
    'zh-Hans': {
      'meta.title': '单字远征 Word Quest｜把英文单词变成冒险',
      'meta.desc': '单字远征 Word Quest：结合 RPG 战斗与英语学习的免费网页游戏。90 个单词、3 个世界、12 道关卡，支持正常与困难模式。立即免费游玩。',
      'meta.ogTitle': '单字远征 Word Quest｜把英文单词变成冒险',
      'meta.ogDesc': '90 个单词、3 个世界、12 道关卡。用答题打怪，让英文单词真正记进脑海。',
      'meta.ogLocale': 'zh_CN',
      'a11y.skip': '跳至主要内容',
      'brand.cn': '单字远征',
      'lang.label': '选择语言',
      'nav.label': '主导航',
      'nav.features': '游戏特色',
      'nav.worlds': '冒险世界',
      'nav.how': '玩法',
      'nav.creators': '创作团队',
      'nav.faq': '常见问题',
      'nav.play': '立即游玩',
      'nav.menuOpen': '打开菜单',
      'hero.badge': '1A Ethan Hau 与 1A Hailey Ho 作品',
      'hero.title': '把英文单词，<br><span class="grad">变成你的冒险。</span>',
      'hero.lead': '《单字远征》是一款结合 RPG 战斗与英语学习的网页游戏。用答题攻击怪物，在 3 个世界、12 道关卡中，把 90 个单词真正记进脑海。',
      'hero.ctaPlay': '免费开始游玩',
      'hero.ctaFeatures': '探索游戏特色',
      'hero.note1': '无需下载',
      'hero.note2': '无需注册',
      'hero.note3': '手机・平板・桌面',
      'hero.trust': '由 1A Ethan Hau 与 1A Hailey Ho 制作',
      'hero.alt': '单字远征游戏战斗画面：巫师与幽灵对战，画面显示英文单词题目',
      'hero.playAria': '开始试玩单字远征',
      'hero.playOverlay': '点击试玩',
      'hero.word1': '勇气',
      'hero.word2': '胜利',
      'hero.floatLabel': '个单词',
      'hero.floatSub': '3 个世界・12 道关卡',
      'stats.words': '个英文单词',
      'stats.stages': '道冒险关卡',
      'stats.types': '种题型',
      'stats.modes': '种难度模式',
      'stats.note': '完全免费游玩 · 无广告 · 无需注册',
      'why.title': '温习单词，<span class="grad">不一定要死记硬背。</span>',
      'why.lead': '传统默写式温习，很容易读完就忘。Word Quest 把每一次练习变成有即时反馈的挑战，让你真正记住单词，而不是短暂认得。',
      'why.p1.t': '读完就忘？',
      'why.p1.d': '主动答题比被动重读更能巩固记忆。每次答错，都会立即看到正确答案与例句。',
      'why.p2.t': '很难坚持？',
      'why.p2.d': '用血量、连击、星星与等级，把每天 10 分钟的复习变成一件期待的事。',
      'why.p3.t': '不知道弱点？',
      'why.p3.d': '错题会自动进入复习本；已掌握的单词会减少出现，把时间留给真正需要练习的单词。',
      'why.quote': '不是为了玩而玩，而是让每一次点击，都变成一次记忆练习。',
      'why.quoteBy': 'Word Quest 学习设计原则',
      'why.alt': '单字远征游戏首页与难度选择画面',
      'why.chip': '正常 / 困难模式',
      'why.float': '每天 10 分钟，也能累积单词量',
      'features.title': '一款真正为学习而设的游戏',
      'features.lead': '从答题、反馈到复习，每个细节都围绕着同一个目标：让你记得住，也用得到。',
      'features.f1.t': '打怪式学习',
      'features.f1.d': '答对就攻击，答错会扣血。把单词练习变成有输赢、有节奏的战斗。',
      'features.f2.t': '即时答案与例句',
      'features.f2.d': '每次答错，立即显示正确单词、中文意思与双语例句，不让错误白白过去。',
      'features.f3.t': '自动错题复习',
      'features.f3.d': '错题自动收集，复习时优先出现；答对后移除，让复习更有针对性。',
      'features.f4.t': '听力与英文发音',
      'features.f4.d': '内置英文朗读与听力题，练习不只看懂，也听得懂、读得出来。',
      'features.f5.t': '90 词单词图鉴',
      'features.f5.d': '收录全部单词、词性、例句与熟练度；可搜索、可按主题浏览。',
      'features.f6.t': '两种难度模式',
      'features.f6.d': '正常模式轻松建立习惯，困难模式挑战反应与拼写；奖励也会提升。',
      'how.title': '三个步骤，展开你的单词远征',
      'how.lead': '不用看说明书，打开就能玩。每一局约 2 至 4 分钟，适合每天一点点。',
      'how.cta': '立即开始第一关',
      'how.note': '进度会自动保存在你的浏览器，下次回来继续。',
      'how.s1.t': '选择世界',
      'how.s1.d': '由魔法森林出发，通过关卡解锁星辰沙漠与巨龙山脉。',
      'how.s2.t': '答题攻击',
      'how.s2.d': '在限时内选出正确答案或拼出单词，连击越高，伤害越大。',
      'how.s3.t': '复习与升级',
      'how.s3.d': '收集星星与 XP，错题自动进入复习本，下一次变得更强。',
      'worlds.title': '三个世界，三种单词挑战',
      'worlds.lead': '由日常基础到抽象概念，难度层层递进。每个世界都有 30 个单词与一位守护者。',
      'worlds.count': '30 个单词',
      'worlds.boss': '守护者',
      'worlds.label': '个世界',
      'worlds.forest.level': '入门',
      'worlds.forest.name': '魔法森林',
      'worlds.forest.desc': '动物、颜色、家庭与日常动作，打好英文基础。',
      'worlds.forest.boss': '史莱姆王',
      'worlds.desert.level': '进阶',
      'worlds.desert.name': '星辰沙漠',
      'worlds.desert.desc': '天气、旅游、兴趣与生活英文，把单词带进日常。',
      'worlds.desert.boss': '沙暴巨灵',
      'worlds.mountain.level': '挑战',
      'worlds.mountain.name': '巨龙山脉',
      'worlds.mountain.desc': '环境、科技、情感与抽象概念，挑战更有深度的单词。',
      'worlds.mountain.boss': '远古巨龙',
      'gallery.title': '不只是一个测验，而是一场冒险',
      'gallery.lead': '即时战斗、单词图鉴与成绩结算，全部在同一个网页游戏里。',
      'gallery.home': '游戏大厅',
      'gallery.homeDesc': '选择世界、查看进度与难度。',
      'gallery.book': '单词图鉴',
      'gallery.bookDesc': '90 个单词、例句与熟练度。',
      'gallery.result': '结算与奖励',
      'gallery.resultDesc': '星星、XP 与本关单词回顾。',
      'gallery.note': '游戏界面以繁体中文呈现，学习内容为英文单词与中文解释。',
      'gallery.cta': '立即进入游戏',
      'gallery.newTab': '另开新窗口',
      'gallery.playAria': '试玩单字远征',
      'gallery.altHome': '单字远征游戏大厅',
      'gallery.altBook': '单词图鉴画面',
      'gallery.altResult': '游戏结算画面',
      'learning.title': '每个游戏机制，都有学习目的',
      'learning.lead': '我们把四个有效的学习原则，藏进了游戏循环里。',
      'learning.l1.t': '主动回想',
      'learning.l1.d': '先作答，再看答案。强迫大脑提取记忆，比重读更有效。',
      'learning.l2.t': '即时反馈',
      'learning.l2.d': '每次作答后立即获得对错、正确答案与例句，修正错误。',
      'learning.l3.t': '重点复习',
      'learning.l3.d': '错题优先重现，已掌握的单词减少出现，把时间用在刀刃上。',
      'learning.l4.t': '游戏化动力',
      'learning.l4.d': '心数、连击、星星与等级，让练习有即时目标与成就感。',
      'learning.audience': '适合小学至初中程度的英语学习者，也适合想重新打好基础的成年人。',
      'difficulty.title': '两种节奏，配合你的学习状态',
      'difficulty.lead': '想轻松建立习惯，还是来一场硬仗？随时切换，进度共用。',
      'difficulty.normal.tag': '建立习惯',
      'difficulty.normal.name': '正常模式',
      'difficulty.normal.desc': '节奏较宽裕，适合第一次接触，或每天轻松复习。',
      'difficulty.normal.time': '约 20 秒',
      'difficulty.normal.hint': '首字母提示',
      'difficulty.normal.p1': '5 颗心，容许更多尝试',
      'difficulty.normal.p2': '拼写题集中于 Boss 关卡',
      'difficulty.normal.p3': '标准 XP 奖励',
      'difficulty.hard.tag': '挑战极限',
      'difficulty.hard.name': '困难模式',
      'difficulty.hard.desc': '节奏更快、题型更狠，适合想突破自己的你。',
      'difficulty.hard.time': '约 13 秒',
      'difficulty.hard.hint': '无首字母',
      'difficulty.hard.p1': '3 颗心，失误空间更少',
      'difficulty.hard.p2': '更多拼写与听力题',
      'difficulty.hard.p3': '通关 XP ×1.5',
      'difficulty.hearts': '颗心',
      'difficulty.perQuestion': '每题',
      'difficulty.hint': '提示',
      'difficulty.note': '可在游戏首页或设置切换；战斗中切换会于下一场生效。',
      'difficulty.cta': '选择你的模式',
      'creators.title': '由两位 1A 学生共同制作',
      'creators.lead': 'Word Quest 由 1A Ethan Hau 与 1A Hailey Ho 构思与制作，希望把英语复习变成一件更有趣、更有成就感的事。',
      'creators.note': '这是一个以学习为本的校园项目。欢迎把游戏分享给同学，一起挑战更高分。',
      'creators.github': '在 GitHub 查看项目',
      'creators.role': '共同创作者 · 1A 班',
      'creators.projectLabel': '项目资料',
      'faq.title': '常见问题',
      'faq.lead': '还有其他问题？欢迎到 GitHub 开启 issue，或把建议告诉我们。',
      'faq.more': '到 GitHub 与我们联系',
      'faq.q1': '需要下载或注册吗？',
      'faq.a1': '不需要。Word Quest 是一个网页游戏，用手机或电脑浏览器打开即可游玩，也不需要创建账号。',
      'faq.q2': '游戏真的免费吗？',
      'faq.a2': '是。全部 90 个单词、3 个世界与 12 道关卡均可免费游玩，没有广告或付费墙。',
      'faq.q3': '适合什么年龄？',
      'faq.a3': '单词涵盖小学至初中基础，适合约 8 岁以上的英语学习者；成年人想温习基础单词也适合。',
      'faq.q4': '进度会保存吗？',
      'faq.a4': '会。等级、星星、错题与单词熟练度会保存在你目前使用的浏览器。更换设备或清除网站数据后不会同步。',
      'faq.q5': '为什么听力题没有声音？',
      'faq.a5': '听力题使用浏览器的英文语音功能，请确认设备音量与网站音效已开启。关闭游戏音效时，系统不会发出听力题。',
      'faq.q6': '可以切换难度吗？',
      'faq.a6': '可以。在游戏首页或设置中切换正常／困难模式；若在战斗中切换，会在下一场生效。',
      'faq.q7': '游戏支持什么语言？',
      'faq.a7': '网站提供繁体中文、简体中文及 English 界面；游戏本身以繁体中文呈现，学习内容为英文单词与中文解释。',
      'faq.q8': '可以在手机玩吗？',
      'faq.a8': '可以。游戏已针对手机、平板与桌面浏览器调整版面；建议使用最新版 Chrome、Edge 或 Safari。',
      'cta.title': '准备好展开你的单词远征了吗？',
      'cta.lead': '免费、免注册，打开浏览器就能开始。下一个被你记住的单词，就在这里。',
      'cta.play': '立即免费游玩',
      'cta.github': '查看 GitHub 项目',
      'cta.note': '由 1A Ethan Hau 与 1A Hailey Ho 制作',
      'footer.tagline': '把英文单词，变成每天的冒险。',
      'footer.made': '由 1A Ethan Hau 及 1A Hailey Ho 制作。',
      'footer.explore': '探索',
      'footer.project': '项目',
      'footer.play': '开始游玩',
      'footer.source': 'GitHub 源代码',
      'footer.issues': '报告问题',
      'footer.lang': '语言',
      'footer.note': '一个以学习为本的校园项目。',
      'footer.rights': '© 2026 单字远征 Word Quest。保留所有权利。',
      'modal.title': '单字远征 · 试玩',
      'modal.newTab': '另开新窗口',
      'modal.close': '关闭试玩',
      'modal.loading': '游戏载入中…',
      'modal.frameTitle': '单字远征游戏'
    },
    en: {
      'meta.title': 'Word Quest — Turn English vocabulary into an adventure',
      'meta.desc': 'Word Quest is a free browser RPG for learning English vocabulary. 90 words, 3 worlds and 12 stages, with normal and hard modes. Play free—no download, no sign-up.',
      'meta.ogTitle': 'Word Quest — Turn vocabulary into an adventure',
      'meta.ogDesc': '90 words. 3 worlds. 12 stages. Learn English by battling monsters.',
      'meta.ogLocale': 'en_US',
      'a11y.skip': 'Skip to main content',
      'brand.cn': 'English Learning RPG',
      'lang.label': 'Select language',
      'nav.label': 'Main navigation',
      'nav.features': 'Features',
      'nav.worlds': 'Worlds',
      'nav.how': 'How it works',
      'nav.creators': 'Creators',
      'nav.faq': 'FAQ',
      'nav.play': 'Play now',
      'nav.menuOpen': 'Open menu',
      'hero.badge': 'A project by 1A Ethan Hau & 1A Hailey Ho',
      'hero.title': 'Turn vocabulary<br>into an <span class="grad">adventure.</span>',
      'hero.lead': 'Word Quest is a browser RPG that turns English vocabulary practice into a battle. Answer questions to attack monsters and make 90 words stick across 3 worlds and 12 stages.',
      'hero.ctaPlay': 'Play for free',
      'hero.ctaFeatures': 'Explore features',
      'hero.note1': 'No download',
      'hero.note2': 'No sign-up',
      'hero.note3': 'Mobile, tablet & desktop',
      'hero.trust': 'Created by 1A Ethan Hau & 1A Hailey Ho',
      'hero.alt': 'Word Quest battle screen with a wizard facing a ghost and an English question',
      'hero.playAria': 'Play the Word Quest demo',
      'hero.playOverlay': 'Click to play',
      'hero.word1': 'bravery',
      'hero.word2': 'success',
      'hero.floatLabel': 'words',
      'hero.floatSub': '3 worlds · 12 stages',
      'stats.words': 'English words',
      'stats.stages': 'adventure stages',
      'stats.types': 'question types',
      'stats.modes': 'difficulty modes',
      'stats.note': '100% free · No ads · No sign-up',
      'why.title': 'Vocabulary practice,<br><span class="grad">without the rote memorising.</span>',
      'why.lead': 'Traditional revision is easy to read and easy to forget. Word Quest turns every session into a challenge with instant feedback, so words actually stick.',
      'why.p1.t': 'Read it, forget it?',
      'why.p1.d': 'Active recall beats passive rereading. Every wrong answer reveals the correct word and an example sentence straight away.',
      'why.p2.t': 'Hard to stay consistent?',
      'why.p2.d': 'Hearts, combos, stars and levels turn a 10-minute daily habit into something you look forward to.',
      'why.p3.t': 'Not sure what you are weak at?',
      'why.p3.d': 'Mistakes are collected automatically, while mastered words appear less often—so your time goes where it matters.',
      'why.quote': 'This is not play for the sake of play. Every click is a memory exercise.',
      'why.quoteBy': 'Word Quest learning principle',
      'why.alt': 'Word Quest home screen and difficulty selector',
      'why.chip': 'Normal / Hard modes',
      'why.float': 'Ten minutes a day is enough to build vocabulary',
      'features.title': 'A game built around learning',
      'features.lead': 'From the first question to the final review, every detail serves one goal: helping you remember and use what you learn.',
      'features.f1.t': 'Learn through battle',
      'features.f1.d': 'Answer correctly to attack; answer wrong and lose a heart. Vocabulary practice becomes a battle with stakes and rhythm.',
      'features.f2.t': 'Instant answers and examples',
      'features.f2.d': 'Every mistake immediately shows the correct word, its meaning and a bilingual example—so errors become lessons.',
      'features.f3.t': 'Automatic mistake review',
      'features.f3.d': 'Wrong answers are collected and prioritised in review; once you get them right, they leave the list.',
      'features.f4.t': 'Listening and pronunciation',
      'features.f4.d': 'Built-in English audio and listening questions train your ear as well as your eyes.',
      'features.f5.t': 'A 90-word wordbook',
      'features.f5.d': 'Every word, part of speech, example and mastery level—searchable and organised by world.',
      'features.f6.t': 'Two difficulty modes',
      'features.f6.d': 'Normal builds the habit; Hard challenges your speed and spelling—with bigger rewards.',
      'how.title': 'Three steps to your word quest',
      'how.lead': 'No manual needed. Each run takes 2–4 minutes, perfect for a little progress every day.',
      'how.cta': 'Start the first stage',
      'how.note': 'Your progress saves automatically in this browser, ready for next time.',
      'how.s1.t': 'Choose a world',
      'how.s1.d': 'Start in the Enchanted Forest and unlock the Starlit Desert and Dragon Peak.',
      'how.s2.t': 'Answer to attack',
      'how.s2.d': 'Pick the right answer or spell the word before time runs out. Higher combos deal more damage.',
      'how.s3.t': 'Review and level up',
      'how.s3.d': 'Collect stars and XP, review your mistakes, and come back stronger.',
      'worlds.title': 'Three worlds, three kinds of challenge',
      'worlds.lead': 'From everyday basics to abstract ideas, the difficulty builds. Each world has 30 words and its own guardian.',
      'worlds.count': '30 words',
      'worlds.boss': 'Guardian',
      'worlds.label': 'worlds',
      'worlds.forest.level': 'Beginner',
      'worlds.forest.name': 'Enchanted Forest',
      'worlds.forest.desc': 'Animals, colours, family and everyday actions—the foundations of English.',
      'worlds.forest.boss': 'Slime King',
      'worlds.desert.level': 'Intermediate',
      'worlds.desert.name': 'Starlit Desert',
      'worlds.desert.desc': 'Weather, travel, hobbies and everyday English for real life.',
      'worlds.desert.boss': 'Sandstorm Colossus',
      'worlds.mountain.level': 'Advanced',
      'worlds.mountain.name': 'Dragon Peak',
      'worlds.mountain.desc': 'Environment, technology, emotions and abstract ideas—deeper vocabulary.',
      'worlds.mountain.boss': 'Ancient Dragon',
      'gallery.title': 'More than a quiz—an adventure',
      'gallery.lead': 'Battles, a full wordbook and end-of-stage results, all in one browser game.',
      'gallery.home': 'Game hub',
      'gallery.homeDesc': 'Pick a world, track progress and set the difficulty.',
      'gallery.book': 'Wordbook',
      'gallery.bookDesc': '90 words, examples and mastery.',
      'gallery.result': 'Results & rewards',
      'gallery.resultDesc': 'Stars, XP and a review of the stage’s words.',
      'gallery.note': 'The game interface is in Traditional Chinese; the learning content pairs English words with Chinese meanings.',
      'gallery.cta': 'Play the game',
      'gallery.newTab': 'Open in new tab',
      'gallery.playAria': 'Play the Word Quest demo',
      'gallery.altHome': 'Word Quest game hub',
      'gallery.altBook': 'Wordbook screen',
      'gallery.altResult': 'Game results screen',
      'learning.title': 'Every mechanic has a learning purpose',
      'learning.lead': 'Four proven learning principles are built into the game loop.',
      'learning.l1.t': 'Active recall',
      'learning.l1.d': 'Answer first, then see the solution. Retrieval practice beats rereading.',
      'learning.l2.t': 'Immediate feedback',
      'learning.l2.d': 'Every answer gives you the result, the correct word and an example right away.',
      'learning.l3.t': 'Targeted review',
      'learning.l3.d': 'Mistakes come back first and mastered words appear less often, so practice stays focused.',
      'learning.l4.t': 'Motivation through play',
      'learning.l4.d': 'Hearts, combos, stars and levels give every session a goal and a sense of progress.',
      'learning.audience': 'Designed for primary and lower-secondary learners—and adults who want to rebuild their basics.',
      'difficulty.title': 'Two paces for different learning days',
      'difficulty.lead': 'Build a gentle habit or take on a real challenge. Switch anytime; your progress is shared.',
      'difficulty.normal.tag': 'Build the habit',
      'difficulty.normal.name': 'Normal',
      'difficulty.normal.desc': 'A more generous pace for first-timers or relaxed daily practice.',
      'difficulty.normal.time': '~20 sec',
      'difficulty.normal.hint': 'First-letter hint',
      'difficulty.normal.p1': '5 hearts for more room to try',
      'difficulty.normal.p2': 'Spelling mainly in boss stages',
      'difficulty.normal.p3': 'Standard XP rewards',
      'difficulty.hard.tag': 'Push your limits',
      'difficulty.hard.name': 'Hard',
      'difficulty.hard.desc': 'Faster, tougher and built for players who want to level up.',
      'difficulty.hard.time': '~13 sec',
      'difficulty.hard.hint': 'No first letter',
      'difficulty.hard.p1': '3 hearts—less room for error',
      'difficulty.hard.p2': 'More spelling and listening',
      'difficulty.hard.p3': '1.5× XP on clear',
      'difficulty.hearts': 'hearts',
      'difficulty.perQuestion': 'per question',
      'difficulty.hint': 'hint',
      'difficulty.note': 'Switch on the game’s home screen or in settings. Changes made mid-battle apply to the next battle.',
      'difficulty.cta': 'Choose your mode',
      'creators.title': 'Made by two Class 1A students',
      'creators.lead': 'Word Quest was imagined and built by 1A Ethan Hau and 1A Hailey Ho, with one goal: make English revision more engaging and rewarding.',
      'creators.note': 'This is a learning-first school project. Share it with classmates and see who can score higher.',
      'creators.github': 'View the project on GitHub',
      'creators.role': 'Co-creator · Class 1A',
      'creators.projectLabel': 'Project facts',
      'faq.title': 'Frequently asked questions',
      'faq.lead': 'Still have a question? Open an issue on GitHub or send us a suggestion.',
      'faq.more': 'Contact us on GitHub',
      'faq.q1': 'Do I need to download or sign up?',
      'faq.a1': 'No. Word Quest runs in your browser on phone or computer, and no account is needed.',
      'faq.q2': 'Is it really free?',
      'faq.a2': 'Yes. All 90 words, 3 worlds and 12 stages are free to play, with no ads or paywalls.',
      'faq.q3': 'What age is it for?',
      'faq.a3': 'The vocabulary covers primary to lower-secondary basics. It suits learners aged 8+ and adults rebuilding their foundations.',
      'faq.q4': 'Does my progress save?',
      'faq.a4': 'Yes. Levels, stars, mistakes and word mastery are stored in the browser you are using. They will not sync across devices or if you clear site data.',
      'faq.q5': 'Why can’t I hear the listening questions?',
      'faq.a5': 'Listening questions use your browser’s English speech. Check your device volume and that game sound is on. When game audio is off, listening questions are not generated.',
      'faq.q6': 'Can I change the difficulty?',
      'faq.a6': 'Yes. Switch Normal / Hard on the game’s home screen or in settings. Changes made mid-battle apply to the next battle.',
      'faq.q7': 'What languages does it support?',
      'faq.a7': 'This site is available in Traditional Chinese, Simplified Chinese and English. The game interface is in Traditional Chinese, with English words and Chinese meanings.',
      'faq.q8': 'Can I play on mobile?',
      'faq.a8': 'Yes. The game is responsive for phones, tablets and desktops. The latest Chrome, Edge or Safari is recommended.',
      'cta.title': 'Ready to begin your word quest?',
      'cta.lead': 'Free, no sign-up, and playable right in your browser. The next word you remember starts here.',
      'cta.play': 'Play for free',
      'cta.github': 'View on GitHub',
      'cta.note': 'Created by 1A Ethan Hau & 1A Hailey Ho',
      'footer.tagline': 'Turn English vocabulary into a daily adventure.',
      'footer.made': 'Created by 1A Ethan Hau and 1A Hailey Ho.',
      'footer.explore': 'Explore',
      'footer.project': 'Project',
      'footer.play': 'Play the game',
      'footer.source': 'GitHub repository',
      'footer.issues': 'Report an issue',
      'footer.lang': 'Language',
      'footer.note': 'A learning-first school project.',
      'footer.rights': '© 2026 Word Quest. All rights reserved.',
      'modal.title': 'Word Quest · Demo',
      'modal.newTab': 'Open in new tab',
      'modal.close': 'Close demo',
      'modal.loading': 'Loading the game…',
      'modal.frameTitle': 'Word Quest game'
    }
  };

  /* ============================================================
     DOM / STATE
     ============================================================ */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const BASE = { text: {}, html: {}, alt: {}, aria: {}, title: {}, content: {} };
  let currentLang = DEFAULT_LANG;
  let menuOpen = false;
  let modalOpen = false;
  let lastFocus = null;
  let gameLoadedOnce = false;
  let frameResetTimer = null;

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function captureBase() {
    $$('[data-i18n]').forEach(el => { BASE.text[el.dataset.i18n] = el.textContent; });
    $$('[data-i18n-html]').forEach(el => { BASE.html[el.dataset.i18nHtml] = el.innerHTML; });
    $$('[data-i18n-alt]').forEach(el => { BASE.alt[el.dataset.i18nAlt] = el.getAttribute('alt') || ''; });
    $$('[data-i18n-aria]').forEach(el => { BASE.aria[el.dataset.i18nAria] = el.getAttribute('aria-label') || ''; });
    $$('[data-i18n-title]').forEach(el => { BASE.title[el.dataset.i18nTitle] = el.getAttribute('title') || ''; });
    $$('[data-i18n-content]').forEach(el => { BASE.content[el.dataset.i18nContent] = el.getAttribute('content') || ''; });
  }

  function getValue(lang, key, kind) {
    if (lang !== DEFAULT_LANG) {
      const dict = STRINGS[lang];
      if (dict && Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
    }
    return BASE[kind][key];
  }

  function t(key) {
    if (currentLang !== DEFAULT_LANG) {
      const dict = STRINGS[currentLang];
      if (dict && Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
    }
    return BASE.text[key] || '';
  }

  function setLanguage(lang, opts) {
    opts = opts || {};
    if (SUPPORTED.indexOf(lang) === -1) lang = DEFAULT_LANG;
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;

    $$('[data-i18n]').forEach(el => {
      const value = getValue(lang, el.dataset.i18n, 'text');
      if (value !== undefined) el.textContent = value;
    });
    $$('[data-i18n-html]').forEach(el => {
      const value = getValue(lang, el.dataset.i18nHtml, 'html');
      if (value !== undefined) el.innerHTML = value;
    });
    $$('[data-i18n-alt]').forEach(el => {
      const value = getValue(lang, el.dataset.i18nAlt, 'alt');
      if (value !== undefined) el.setAttribute('alt', value);
    });
    $$('[data-i18n-aria]').forEach(el => {
      const value = getValue(lang, el.dataset.i18nAria, 'aria');
      if (value !== undefined) el.setAttribute('aria-label', value);
    });
    $$('[data-i18n-title]').forEach(el => {
      const value = getValue(lang, el.dataset.i18nTitle, 'title');
      if (value !== undefined) el.setAttribute('title', value);
    });
    $$('[data-i18n-content]').forEach(el => {
      const value = getValue(lang, el.dataset.i18nContent, 'content');
      if (value !== undefined) el.setAttribute('content', value);
    });

    $$('[data-lang-select]').forEach(sel => { sel.value = lang; });
    updateMenuLabel();

    if (opts.persist !== false) {
      try { localStorage.setItem(STORE_KEY, lang); } catch (e) { /* ignore */ }
    }
    if (opts.updateUrl) {
      try {
        const url = new URL(location.href);
        if (lang === DEFAULT_LANG) url.searchParams.delete('lang');
        else url.searchParams.set('lang', lang);
        history.replaceState(null, '', url.pathname + url.search + url.hash);
      } catch (e) { /* ignore */ }
    }
    if (opts.announce) {
      const status = $('#langStatus');
      if (status) status.textContent = UI[lang].switched;
    }
  }

  function initialLang() {
    const params = new URLSearchParams(location.search);
    const query = params.get('lang');
    if (SUPPORTED.indexOf(query) !== -1) return query;
    try {
      const stored = localStorage.getItem(STORE_KEY);
      if (SUPPORTED.indexOf(stored) !== -1) return stored;
    } catch (e) { /* ignore */ }
    return DEFAULT_LANG;
  }

  /* ============================================================
     MOBILE MENU
     ============================================================ */
  const menuBtn = $('#menuBtn');
  const mobileMenu = $('#mobileMenu');

  function updateMenuLabel() {
    if (!menuBtn) return;
    menuBtn.setAttribute('aria-label', menuOpen
      ? UI[currentLang].menuClose
      : getValue(currentLang, 'nav.menuOpen', 'aria'));
  }

  function setMenu(open) {
    menuOpen = open;
    menuBtn.setAttribute('aria-expanded', String(open));
    mobileMenu.classList.toggle('open', open);
    mobileMenu.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('menu-open', open);
    updateMenuLabel();
    if (open) {
      const first = mobileMenu.querySelector('a');
      if (first) setTimeout(() => { if (menuOpen) first.focus({ preventScroll: true }); }, 80);
    }
  }

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => setMenu(!menuOpen));
    $$('a', mobileMenu).forEach(a => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('click', e => {
      if (!menuOpen) return;
      if (e.target.closest('#mobileMenu') || e.target.closest('#menuBtn')) return;
      setMenu(false);
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 980 && menuOpen) setMenu(false);
    });
  }

  /* ============================================================
     GAME MODAL
     ============================================================ */
  const gameModal = $('#gameModal');
  const gameFrame = $('#gameFrame');
  const gameLoading = $('#gameLoading');
  const modalPanel = gameModal ? $('.game-modal-panel', gameModal) : null;

  function resetFrame() {
    if (!gameFrame) return;
    frameResetTimer = null;
    gameFrame.classList.remove('ready');
    gameFrame.src = 'about:blank';
    gameLoadedOnce = false;
  }

  function openGame(trigger) {
    if (!gameModal) return;
    if (menuOpen) setMenu(false);
    lastFocus = (trigger && trigger.closest && trigger.closest('#mobileMenu')) ? menuBtn : (trigger || document.activeElement);
    if (frameResetTimer) { clearTimeout(frameResetTimer); frameResetTimer = null; }
    modalOpen = true;
    gameModal.classList.add('is-open');
    gameModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    gameLoading.classList.remove('hidden');
    gameFrame.classList.remove('ready');

    if (!gameLoadedOnce || !gameFrame.src || gameFrame.src === 'about:blank') {
      gameFrame.src = gameFrame.dataset.src;
      gameLoadedOnce = true;
    }
    const closeBtn = $('.modal-close', gameModal);
    if (closeBtn) setTimeout(() => closeBtn.focus({ preventScroll: true }), 80);
  }

  function closeGame() {
    if (!gameModal || !modalOpen) return;
    modalOpen = false;
    gameModal.classList.remove('is-open');
    gameModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    frameResetTimer = setTimeout(resetFrame, 220);
    if (lastFocus && document.contains(lastFocus)) {
      lastFocus.focus({ preventScroll: true });
    }
  }

  document.addEventListener('click', e => {
    const play = e.target.closest('[data-play]');
    if (play) {
      e.preventDefault();
      openGame(play);
      return;
    }
    const closer = e.target.closest('[data-close-game]');
    if (closer) {
      e.preventDefault();
      closeGame();
    }
  });

  if (gameFrame) {
    gameFrame.addEventListener('load', () => {
      if (!modalOpen) return;
      if (!gameFrame.src || gameFrame.src === 'about:blank') return;
      gameFrame.classList.add('ready');
      gameLoading.classList.add('hidden');
    });
  }

  /* ============================================================
     LANGUAGE CONTROLS
     ============================================================ */
  $$('[data-lang-select]').forEach(sel => {
    sel.addEventListener('change', () => setLanguage(sel.value, { persist: true, updateUrl: true, announce: true }));
  });

  /* ============================================================
     HEADER / ACTIVE NAV / SCROLL
     ============================================================ */
  const header = $('#siteHeader');
  const navLinks = $$('.main-nav a');
  const navTargets = navLinks.map(a => a.getAttribute('href').replace('#', ''));

  let scrollTicking = false;
  function onScroll() {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      if (header) header.classList.toggle('scrolled', y > 14);
      let activeId = '';
      let activeTop = -1;
      navTargets.forEach(id => {
        const section = document.getElementById(id);
        if (section && section.offsetTop - 150 <= y && section.offsetTop > activeTop) {
          activeTop = section.offsetTop;
          activeId = id;
        }
      });
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + activeId));
      scrollTicking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ============================================================
     REVEAL / COUNTERS
     ============================================================ */
  function initReveal() {
    const items = $$('[data-reveal]');
    if (!('IntersectionObserver' in window) || reduceMotion) {
      items.forEach(el => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(el => io.observe(el));
  }

  function animateCount(el) {
    if (el.dataset.counted) return;
    el.dataset.counted = '1';
    const target = parseInt(el.dataset.count, 10) || 0;
    if (reduceMotion) { el.textContent = String(target); return; }
    const start = performance.now();
    const duration = 900;
    function tick(now) {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = String(target);
    }
    requestAnimationFrame(tick);
  }

  function initCounters() {
    const counters = $$('[data-count]');
    if (!('IntersectionObserver' in window) || reduceMotion) {
      counters.forEach(el => { el.textContent = el.dataset.count; });
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => io.observe(el));
  }

  /* ============================================================
     FAQ — close the others when one opens
     ============================================================ */
  const faqs = $$('.faq-item');
  faqs.forEach(item => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      faqs.forEach(other => { if (other !== item && other.open) other.open = false; });
    });
  });

  /* ============================================================
     STARS
     ============================================================ */
  function buildStars() {
    const box = $('#siteStars');
    if (!box) return;
    let html = '';
    for (let i = 0; i < 78; i++) {
      const size = (Math.random() * 1.8 + 0.7).toFixed(2);
      html += '<i style="left:' + (Math.random() * 100).toFixed(2) + '%;top:' +
        (Math.random() * 100).toFixed(2) + '%;width:' + size + 'px;height:' + size +
        'px;--dur:' + (2.6 + Math.random() * 4).toFixed(2) + 's;--delay:-' +
        (Math.random() * 6).toFixed(2) + 's;opacity:' + (0.16 + Math.random() * 0.5).toFixed(2) + '"></i>';
    }
    box.innerHTML = html;
  }

  /* ============================================================
     KEYBOARD
     ============================================================ */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (modalOpen) { closeGame(); return; }
      if (menuOpen) { setMenu(false); return; }
    }
    if (e.key === 'Tab' && modalOpen && modalPanel) {
      const focusables = $$('a[href], button, iframe', modalPanel)
        .filter(el => !el.disabled && el.getAttribute('aria-hidden') !== 'true');
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  /* ============================================================
     INIT
     ============================================================ */
  function init() {
    buildStars();
    captureBase();
    setLanguage(initialLang(), { persist: false, updateUrl: false, announce: false });
    initReveal();
    initCounters();
    onScroll();
  }

  init();
})();
