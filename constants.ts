
import { Translation, JourneyPoint, EmotionData, AnalyticsItem, DrinkMood, PoemRecord, TeamMember, NetworkNodeData } from './types';

export const T: Record<string, Translation> = {
  'app.title': { zh: 'LI BAI', en: 'LI BAI' },
  'nav.life': { zh: '诗仙生平', en: 'Biography' },
  'nav.emotion': { zh: '情感图谱', en: 'Emotion Map' },
  'nav.network': { zh: '网络关系', en: 'Network' },
  'nav.footprint': { zh: '足迹漫游', en: 'Footprints' },
  'nav.drink': { zh: '与仙对饮', en: 'Drink w/ Li' },
  'nav.about': { zh: '关于我们', en: 'About Us' },
  'nav.lang': { zh: 'English', en: '中文' },
  
  'home.hero.title': { zh: '李白辉煌的一生', en: 'The Glorious Life of Li Bai' },
  'home.desc': { zh: '我是李白，一位流浪于天地间的诗仙。\n帮助世人感受盛唐气象，\n用诗歌连接古今，以酒入道，探寻自由与浪漫的真谛。', en: 'I am Li Bai, a poet wandering between heaven and earth.\nExperience the grandeur of the High Tang,\nConnect past and present through poetry, and seek the truth of freedom and romance through wine.' },
  'footer.text': { zh: '© 701-762 唐朝. Powered by Google Gemini.', en: '© 701-762 Tang Dynasty. Powered by Google Gemini.' },

  'search.placeholder': { zh: '问问李白...', en: 'Ask Li Bai...' },
  'search.btn': { zh: '诗仙解疑', en: 'Ask Li Bai' },
  'search.btn_alt': { zh: '一问三李', en: 'Three Ages' },
  
  'life.title': { zh: '诗仙生平', en: 'Biography' },
  'life.back': { zh: '返回主页', en: 'Back Home' },

  'emotion.title': { zh: '情感图谱', en: 'Emotion Map' },
  'emotion.subtitle': { zh: '探索不同时期与地点的诗歌情感浓度', en: 'Explore emotional intensity across time and place' },
  'emotion.period': { zh: '人生阶段', en: 'Life Stage' },
  'emotion.core': { zh: '核心情感', en: 'Core Emotion' },
  'emotion.exit': { zh: '退出', en: 'Exit' },
  'emotion.stats_title': { zh: '意象与智能赏析', en: 'Imagery & AI Analysis' },
  'emotion.fav_words': { zh: '李白最爱用的词 (Top 8)', en: "Li Bai's Favorite Words (Top 8)" },
  'emotion.dist': { zh: '意象情感分布', en: 'Imagery Emotion Distribution' },
  'emotion.ai_title': { zh: 'AI 智能赏析', en: 'AI Analysis' },
  'emotion.select_year': { zh: '1. 年份', en: '1. Year' },
  'emotion.select_loc': { zh: '2. 地点', en: '2. Location' },
  'emotion.select_mood': { zh: '3. 情感', en: '3. Emotion' },
  'emotion.select_poem': { zh: '4. 诗作', en: '4. Poem' },
  'emotion.btn_analyze': { zh: '✨ 生成深度赏析', en: '✨ Generate Analysis' },
  'emotion.analyzing': { zh: '分析中...', en: 'Analyzing...' },
  
  'network.title': { zh: '网络关系', en: 'Social Network' },

  'drink.title': { zh: '与仙对饮', en: 'Drink with Li Bai' },
  'drink.prompt': { zh: '客官今日心情如何？', en: 'How is your mood today?' },
  'drink.back': { zh: '返回', en: 'Back' },

  'footprint.title': { zh: '足迹漫游', en: 'Journey Map' },
  'footprint.birth': { zh: '出生', en: 'Birth' },
  'footprint.out': { zh: '出蜀', en: 'Depart' },
  'footprint.capital': { zh: '入京', en: 'Capital' },
  'footprint.war': { zh: '战乱', en: 'War' },
  'footprint.death': { zh: '去世', en: 'Death' },

  'about.title': { zh: '关于我们', en: 'About Us' },
  'about.team': { zh: '成员组成', en: 'Executive Profiles' },
  'about.research': { zh: '研究问题与方法', en: 'Research Questions & Methodology' },
  'about.results': { zh: '研究结果', en: 'Research Findings' },
  'about.sources': { zh: '数据来源', en: 'Data Sources' },
  'about.data': { zh: '数据下载', en: 'Data Download' },
  'about.download_btn': { zh: '下载数据集 (GitHub)', en: 'Download Dataset (GitHub)' },
};

export const TYPEWRITER_PHRASES: Record<string, string[]> = {
  zh: ["游历四方", "诗集创作", "情感表达"],
  en: ["Wandering the World", "Creating Poetry", "Expressing Emotions"]
};

export const JOURNEY_DATA: JourneyPoint[] = [
  { y: 701, n: '碎叶城', lat: 42.8447, lng: 75.1648 }, { y: 705, n: '江油 (蜀中)', lat: 31.7828, lng: 104.7570 },
  { y: 718, n: '戴天山', lat: 31.81, lng: 104.70 }, { y: 720, n: '成都', lat: 30.5728, lng: 104.0668 },
  { y: 724, n: '峨眉山', lat: 29.5807, lng: 103.3592 }, { y: 725, n: '渝州', lat: 29.5627, lng: 106.5528 },
  { y: 725, n: '荆门', lat: 30.5667, lng: 111.4500 }, { y: 726, n: '江夏', lat: 30.5484, lng: 114.3168 },
  { y: 726, n: '金陵', lat: 32.0415, lng: 118.7781 }, { y: 726, n: '扬州', lat: 32.3934, lng: 119.4290 },
  { y: 727, n: '安陆', lat: 31.3653, lng: 113.7077 }, { y: 730, n: '长安', lat: 34.2652, lng: 108.9500 },
  { y: 731, n: '洛阳', lat: 34.6197, lng: 112.4540 }, { y: 732, n: '并州', lat: 37.8706, lng: 112.5489 },
  { y: 735, n: '洛阳', lat: 34.6197, lng: 112.4540 }, { y: 742, n: '长安 (翰林)', lat: 34.2652, lng: 108.9500 },
  { y: 744, n: '洛阳 (遇杜甫)', lat: 34.6197, lng: 112.4540 }, { y: 745, n: '兖州', lat: 35.5531, lng: 116.8261 },
  { y: 746, n: '越中', lat: 30.0024, lng: 120.5753 }, { y: 750, n: '幽州', lat: 39.9042, lng: 116.4074 },
  { y: 752, n: '宣城', lat: 30.9407, lng: 118.7587 }, { y: 753, n: '秋浦', lat: 30.6500, lng: 117.4800 },
  { y: 755, n: '金陵', lat: 32.0415, lng: 118.7781 }, { y: 756, n: '庐山', lat: 29.5910, lng: 115.9922 },
  { y: 757, n: '浔阳', lat: 29.7133, lng: 115.9853 }, { y: 758, n: '江夏', lat: 30.5484, lng: 114.3168 },
  { y: 759, n: '白帝城 (遇赦)', lat: 31.0450, lng: 109.5780 }, { y: 759, n: '江陵', lat: 30.3322, lng: 112.2353 },
  { y: 760, n: '豫章', lat: 28.6820, lng: 115.8579 }, { y: 761, n: '金陵', lat: 32.0415, lng: 118.7781 },
  { y: 762, n: '当涂 (终老)', lat: 31.5453, lng: 118.4870 }
];

export const EMOTION_MAP_DATA: Record<string, EmotionData> = {
  joy: { label: '喜悦与欢乐', enLabel: 'Joy & Happiness', color: 'orange', points: [{ lat: 31.78, lng: 104.73, intensity: 1.0, period: 'youth' }, { lat: 32.39, lng: 119.42, intensity: 1.0, period: 'middle' }, { lat: 31.04, lng: 109.58, intensity: 1.5, period: 'old' }, { lat: 30.95, lng: 118.75, intensity: 0.8, period: 'middle' }] },
  sadness: { label: '哀怨与悲伤', enLabel: 'Sorrow & Sadness', color: 'blue', points: [{ lat: 31.55, lng: 118.48, intensity: 1.5, period: 'old' }, { lat: 28.15, lng: 107.05, intensity: 1.0, period: 'old' }, { lat: 34.25, lng: 108.98, intensity: 0.8, period: 'middle' }, { lat: 30.38, lng: 114.32, intensity: 1.0, period: 'old' }] },
  ambition: { label: '豪放与激昂', enLabel: 'Ambition & Passion', color: 'red', points: [{ lat: 34.22, lng: 108.96, intensity: 1.5, period: 'middle' }, { lat: 30.67, lng: 104.07, intensity: 1.0, period: 'youth' }, { lat: 35.41, lng: 116.59, intensity: 0.8, period: 'middle' }, { lat: 34.62, lng: 112.45, intensity: 0.9, period: 'middle' }] },
  loneliness: { label: '孤寂与落寞', enLabel: 'Loneliness', color: 'grey', points: [{ lat: 30.95, lng: 118.75, intensity: 1.5, period: 'middle' }, { lat: 31.43, lng: 113.75, intensity: 0.9, period: 'middle' }, { lat: 32.04, lng: 118.78, intensity: 1.0, period: 'old' }] },
  nostalgia: { label: '思乡与怀古', enLabel: 'Nostalgia', color: 'purple', points: [{ lat: 32.04, lng: 118.78, intensity: 1.2, period: 'middle' }, { lat: 32.39, lng: 119.42, intensity: 0.9, period: 'middle' }, { lat: 30.33, lng: 112.20, intensity: 1.0, period: 'youth' }] },
  friendship: { label: '友情与知己', enLabel: 'Friendship', color: 'green', points: [{ lat: 34.62, lng: 112.45, intensity: 1.5, period: 'middle' }, { lat: 32.39, lng: 119.42, intensity: 1.0, period: 'middle' }, { lat: 31.55, lng: 118.48, intensity: 0.8, period: 'old' }, { lat: 30.95, lng: 118.75, intensity: 0.9, period: 'middle' }] },
};

// Updated Analytics Data to match the image provided
export const ANALYTICS_DATA_FULL: AnalyticsItem[] = [
  { name: '月亮', enName: 'Moon', value: 29, emotion: '思乡与怀古', enEmotion: 'Nostalgia', color: '#08306b' },
  { name: '山', enName: 'Mountain', value: 18, emotion: '友情与知己', enEmotion: 'Friendship', color: '#0f4c81' }, 
  { name: '酒', enName: 'Wine', value: 16, emotion: '哀怨与悲伤', enEmotion: 'Sorrow', color: '#2b73b6' }, 
  { name: '水', enName: 'Water', value: 14, emotion: '哀怨与悲伤', enEmotion: 'Sorrow', color: '#4a91ce' }, 
  { name: '花', enName: 'Flower', value: 10, emotion: '美好与自然', enEmotion: 'Nature', color: '#74add1' },
  { name: '孤', enName: 'Lonely', value: 9, emotion: '孤寂与落寞', enEmotion: 'Loneliness', color: '#9ecae1' },
  { name: '剑', enName: 'Sword', value: 7, emotion: '豪放与激昂', enEmotion: 'Ambition', color: '#c6dbef' },
  { name: '梦', enName: 'Dream', value: 7, emotion: '虚幻与想象', enEmotion: 'Dream', color: '#deebf7' } 
];

export const DRINK_DATA: Record<string, DrinkMood> = {
  "豪情万丈": { moodKey: 'ambitious', poem: "飞流直下三千尺，疑是银河落九天！", img: "https://raw.githubusercontent.com/seblee424/libai_emotin_data/main/飞流直下.jpg", desc: "《望庐山瀑布》" },
  "思念故乡": { moodKey: 'homesick', poem: "举头望明月，低头思故乡。", img: "https://raw.githubusercontent.com/seblee424/libai_emotin_data/main/明月思想.jpg", desc: "《静夜思》" },
  "怀才不遇": { moodKey: 'frustrated', poem: "天生我材必有用，千金散尽还复来。", img: "https://raw.githubusercontent.com/seblee424/libai_emotin_data/main/怀才不遇.jpg", desc: "《将进酒》" },
  "享受自然": { moodKey: 'nature', poem: "两岸猿声啼不住，轻舟已过万重山。", img: "https://raw.githubusercontent.com/seblee424/libai_emotin_data/main/轻舟已过.jpg", desc: "《早发白帝城》" },
  "感叹时光": { moodKey: 'time', poem: "弃我去者，昨日之日不可留；乱我心者，今日之日多烦忧。", img: "https://raw.githubusercontent.com/seblee424/libai_emotin_data/main/感叹时光.jpg", desc: "《宣州谢朓楼饯别校书叔云》" }
};

export const MOOD_TRANSLATIONS: Record<string, string> = {
  "豪情万丈": "Ambitious",
  "思念故乡": "Homesick",
  "怀才不遇": "Unappreciated",
  "享受自然": "Enjoying Nature",
  "感叹时光": "Lamenting Time"
};

export const LIFE_EVENTS = [
  {y:'701',t:{zh:'碎叶降生',en:'Birth in Suyab'},d:{zh:'出生于碎叶城。',en:'Born in Suyab (modern day Kyrgyzstan).'}},
  {y:'724',t:{zh:'仗剑去国',en:'Leaving Home'},d:{zh:'辞亲远游，出三峡。',en:'Left home to travel, passing through the Three Gorges.'}},
  {y:'742',t:{zh:'翰林供奉',en:'Imperial Academy'},d:{zh:'入京供奉翰林。',en:'Summoned to the capital as a Hanlin scholar.'}},
  {y:'744',t:{zh:'赐金放还',en:'Leaving Capital'},d:{zh:'离开长安，遇杜甫。',en:'Left Chang\'an, met Du Fu.'}},
  {y:'755',t:{zh:'避乱江南',en:'Fleeing War'},d:{zh:'安史之乱爆发。',en:'An Lushan Rebellion broke out.'}},
  {y:'762',t:{zh:'揽月长眠',en:'Final Rest'},d:{zh:'病逝于当涂。',en:'Passed away in Dangtu.'}}
];

export const PERIODS = [
  { id: 'all', label: {zh: '全部', en: 'All'} },
  { id: 'youth', label: {zh: '青年期', en: 'Youth'} },
  { id: 'middle', label: {zh: '中年期', en: 'Middle Age'} },
  { id: 'old', label: {zh: '老年期', en: 'Old Age'} }
];

export const POEM_DATABASE: PoemRecord[] = [
  { y: 718, l: "戴天山", m: "隐逸", t: "访戴天山道士不遇" }, { y: 720, l: "成都", m: "豪迈", t: "登锦城散花楼" },
  { y: 724, l: "峨眉山", m: "思乡", t: "峨眉山月歌" }, { y: 725, l: "渝州", m: "豪迈", t: "峨眉山月歌送蜀僧晏入中京" },
  { y: 725, l: "荆门", m: "壮阔", t: "渡荆门送别" }, { y: 726, l: "扬州", m: "思乡", t: "静夜思" },
  { y: 726, l: "扬州", m: "愁苦", t: "秋浦歌" }, { y: 727, l: "安陆", m: "归隐", t: "山中问答" },
  { y: 727, l: "安陆", m: "豪迈", t: "代寿山答孟少府" }, { y: 728, l: "庐山", m: "壮阔", t: "望庐山瀑布" },
  { y: 730, l: "长安", m: "失意", t: "玉真公主别馆苦雨" }, { y: 731, l: "洛阳", m: "思乡", t: "春夜洛城闻笛" },
  { y: 732, l: "太原", m: "怀古", t: "太原早秋" }, { y: 735, l: "洛阳", m: "友情", t: "赠孟浩然" },
  { y: 738, l: "南阳", m: "豪迈", t: "南阳送客" }, { y: 742, l: "长安", m: "得意", t: "驾去温泉后赠杨山人" },
  { y: 742, l: "长安", m: "豪迈", t: "南奔书怀" }, { y: 743, l: "长安", m: "豪迈", t: "清平调" },
  { y: 743, l: "长安", m: "美好", t: "宫中行乐词" }, { y: 744, l: "长安", m: "孤独", t: "月下独酌" },
  { y: 744, l: "长安", m: "愁苦", t: "行路难" }, { y: 744, l: "洛阳", m: "友情", t: "赠杜甫" },
  { y: 744, l: "洛阳", m: "友情", t: "鲁郡东石门送杜二甫" }, { y: 745, l: "天姥山", m: "虚幻", t: "梦游天姥吟留别" },
  { y: 747, l: "金陵", m: "豪迈", t: "金陵酒肆留别" }, { y: 748, l: "扬州", m: "送别", t: "黄鹤楼送孟浩然之广陵" },
  { y: 749, l: "金陵", m: "豪迈", t: "庐山谣寄卢侍御虚舟" }, { y: 750, l: "金陵", m: "豪迈", t: "将进酒" },
  { y: 750, l: "宣城", m: "闲适", t: "寄韦南陵冰" }, { y: 752, l: "幽州", m: "悲愤", t: "北风行" },
  { y: 753, l: "宣城", m: "孤独", t: "独坐敬亭山" }, { y: 753, l: "宣城", m: "愁苦", t: "宣州谢朓楼饯别校书叔云" },
  { y: 754, l: "秋浦", m: "愁苦", t: "秋浦歌十七首" }, { y: 754, l: "当涂", m: "友情", t: "赠汪伦" },
  { y: 755, l: "金陵", m: "忧愁", t: "登金陵凤凰台" }, { y: 756, l: "庐山", m: "悲愤", t: "永王东巡歌" },
  { y: 757, l: "浔阳", m: "悲愤", t: "上皇西巡南京歌" }, { y: 758, l: "江夏", m: "友情", t: "江夏别宋之悌" },
  { y: 759, l: "白帝城", m: "喜悦", t: "早发白帝城" }, { y: 759, l: "江陵", m: "愁苦", t: "江上寄巴东故人" },
  { y: 760, l: "豫章", m: "思乡", t: "豫章行" }, { y: 761, l: "金陵", m: "怀古", t: "金陵城西楼月下吟" },
  { y: 761, l: "当涂", m: "悲愤", t: "临路歌" }, { y: 762, l: "当涂", m: "达观", t: "临终歌" }
];

export const TEAM_MEMBERS: TeamMember[] = [
  { 
    name: { zh: '李佳烨', en: 'Li Jiaye' }, 
    title: { zh: '项目经理', en: 'Project Manager' }, 
    avatar: 'https://github.com/Yang-lab1/CHC-final/blob/main/picture/li_jiaye.jpg?raw=true', // ✅ 去掉了 public
    email: 'lijiayeee@126.com', 
    linkedin: 'https://linkedin.com/in/jiaye-li-248784381',
    objectPosition: 'center 20%'
  },
  { 
    name: { zh: '李子睿', en: 'Li Zirui' }, 
    title: { zh: 'AI工程师', en: 'AI Engineer' }, 
    avatar: 'https://github.com/Yang-lab1/CHC-final/blob/main/picture/li_zirui.jpg?raw=true', // ✅ 去掉了 public
    email: '25044237g@connect.polyu.hk', 
    linkedin: 'https://linkedin.com/in/zi-rui-li-853ba0382',
    objectPosition: 'center 20%'
  },
  { 
    name: { zh: '陈婧婧', en: 'Chen Jingjing' }, 
    title: { zh: '人文专家', en: 'Humanities Expert' }, 
    avatar: 'https://github.com/Yang-lab1/CHC-final/blob/main/picture/chen_jingjing.jpg?raw=true', // ✅ 去掉了 public
    email: 'jocelynchen1225@gmail.com', 
    linkedin: 'https://linkedin.com/in/jingjing-chen-619925381',
    objectPosition: 'center 20%'
  },
  { 
    name: { zh: '林杨', en: 'Lin Yang' }, 
    title: { zh: '技术专家、软件工程师', en: 'Tech Expert, Software Engineer' }, 
    avatar: 'https://github.com/Yang-lab1/CHC-final/blob/main/picture/lin_yang.jpg?raw=true', // ✅ 去掉了 public
    email: 'lin297861138@gmail.com', 
    linkedin: 'https://linkedin.com/in/yang-lin-3b1b09381',
    objectPosition: 'center 20%'
  },
  { 
    name: { zh: '黎彦伶', en: 'Li Yanling' }, 
    title: { zh: '数据收集和处理分析工程师', en: 'Data Engineer' }, 
    avatar: 'https://github.com/Yang-lab1/CHC-final/blob/main/picture/li_yanlin.jpg?raw=true', // ✅ 去掉了 public，拼写 li_yanlin 是对的
    email: 'lynn27149.li@gmail.com', 
    linkedin: 'https://linkedin.com/in/yanling-li-b05359331',
    objectPosition: 'center 20%'
  },
  { 
    name: { zh: '聂尔卓', en: 'Nie Erzhuo' }, 
    title: { zh: '全球营销', en: 'Global Marketing' }, 
    avatar: 'https://github.com/Yang-lab1/CHC-final/blob/main/picture/nie_erzhuo.jpg?raw=true', // ✅ 去掉了 public
    email: '1849083010n@gmail.com', 
    linkedin: 'https://linkedin.com/in/erzhuo-nie-ab7bb6381',
    objectPosition: 'center 20%'
  },
{ 
    name: { zh: '白家树', en: 'Bai Jiashu' }, 
    title: { zh: '数据分析师、人文专家', en: 'Data Analyst, Humanities Expert' }, 
    // 👇 修改了这一行：换成 GitHub 链接，不用管本地文件夹了
    avatar: 'https://github.com/Yang-lab1/CHC-final/blob/main/picture/bai_jiashu.jpg?raw=true', 
    email: '25116581g@connect.polyu.hk', 
    linkedin: 'https://linkedin.com/in/kashupak',
    objectPosition: 'center 20%'
  },
  { 
    name: { zh: '李白', en: 'Li Bai' }, 
    title: { zh: '诗人 & 游子', en: 'Poet & Wanderer' }, 
    avatar: 'https://picx.zhimg.com/80/v2-7228406e00cce3ede863a49268a98993_720w.webp?source=2c26e567', 
    email: 'libai@tang-dynasty.gov', 
    linkedin: 'https://linkedin.com/in/libai-poet' 
  },
];

export const RESEARCH_OVERVIEW: Translation = {
  zh: "本项目旨在通过地理信息系统（GIS）与自然语言处理（NLP）技术，数字化重构唐代诗人李白一生的时空轨迹与情感图谱。通过对李白现存千余首诗作进行深度文本挖掘，我们提取了其中蕴含的情感关键词与地理名词，并利用历史地理数据库进行精确的空间定位。研究不仅可视化了诗人“仗剑去国”的壮游路线，更深入探讨了地理环境变化如何重塑诗人的创作心境，以及政治沉浮导致的情感-地理强关联性。我们试图回答：物理空间的移动如何映射到精神世界的波澜？盛唐的壮丽山河如何在诗歌意象中沉淀为永恒的文学地理符号？这一研究为理解中国古典文学提供了全新的定量化与可视化视角。",
  en: "This project aims to digitally reconstruct the spatiotemporal trajectory and emotional landscape of Li Bai, the most prominent poet of the Tang Dynasty, by integrating advanced Geographic Information Systems (GIS) with Natural Language Processing (NLP) techniques. We conducted a comprehensive text mining analysis on over one thousand of his surviving poems to extract emotional keywords and specific geographical references, mapping them against historical geographic databases. Our research not only visualizes the poet's extensive travel routes across 8th-century China but also investigates how shifting geographical environments influenced his creative sentiment. Furthermore, we analyze the strong correlation between his emotional states and spatial location, particularly in the context of his political fluctuations—from imperial favor in the capital to exile in the remote southwest. By answering how physical movement maps onto spiritual experience, this study offers a novel quantitative perspective for interpreting the interplay between geography and literature in Chinese classical poetry."
};

export const RESEARCH_RESULTS: Translation = {
  zh: "研究发现，李白的情感表达与地理位置呈现显著的相关性。在长安时期，他的诗作多体现豪迈与自信；而在流放夜郎途中，悲愤与思乡之情达到顶峰。通过情感热力图，我们清晰地看到了诗人情绪随空间转移的动态变化轨迹。此外，量化分析显示“月”、“酒”、“水”是他诗歌中出现频率最高的三大核心意象，构建了其独特的浪漫主义符号系统。",
  en: "The study reveals a significant correlation between Li Bai's emotional expression and his geographical location. During his time in Chang'an, his poems often reflected boldness and confidence, while during his exile to Yelang, sentiments of indignation and nostalgia peaked. Through the emotional heatmap, we clearly visualize the dynamic trajectory of the poet's mood shifting with space. Furthermore, quantitative analysis shows that 'Moon', 'Wine', and 'Water' are the three most frequent core images, constructing his unique romantic symbol system."
};

export const DATA_SOURCES: Translation = {
  zh: "1. 古籍数字资源：《李太白集注》（卷三十五：李太白年谱）\nWang, Q. (Qing Dynasty). Li Taibai Ji Zhu( 35: Li Taibai Nian Pu) [Annotated collection of Li Bai's works (Vol. 35: Chronological biography of Li Bai)]. Chinese Text Project. https://ctext.org/wiki.pl?if=en&chapter=886336&remap=gb\n\n2. 数字可视化资源：唐宋文学编年地图（李白专题）\nSuzhou Tupu Information Technology Co., Ltd. (2025). Táng Sòng Wénxué Biānnián Dìtú - Lǐ Bái [Chronological literary map of Tang and Song dynasties - Li Bai] (Interactive digital map) [Data support: Wang, Z. P.]. CNKGraph. https://cnkgraph.com/Map/PoetLife?author=%e6%9d%8e%e7%99%bd\n\n3. Pugh, E. (2023, July 4). Digital art history as disciplinary practice. In M. K. Gold & L. F. Klein (Eds.), Debates in the digital humanities 2023 (pp. 217–237, Chapter 14). University of Minnesota Press. https://dhdebates.gc.cuny.edu/read/debates-in-the-digital-humanities-2023/section/7525de5d-a6fe-4fad-ab68-00e064ea2dca",
  en: "1. 古籍数字资源：《李太白集注》（卷三十五：李太白年谱）\nWang, Q. (Qing Dynasty). Li Taibai Ji Zhu( 35: Li Taibai Nian Pu) [Annotated collection of Li Bai's works (Vol. 35: Chronological biography of Li Bai)]. Chinese Text Project. https://ctext.org/wiki.pl?if=en&chapter=886336&remap=gb\n\n2. 数字可视化资源：唐宋文学编年地图（李白专题）\nSuzhou Tupu Information Technology Co., Ltd. (2025). Táng Sòng Wénxué Biānnián Dìtú - Lǐ Bái [Chronological literary map of Tang and Song dynasties - Li Bai] (Interactive digital map) [Data support: Wang, Z. P.]. CNKGraph. https://cnkgraph.com/Map/PoetLife?author=%e6%9d%8e%e7%99%bd\n\n3. Pugh, E. (2023, July 4). Digital art history as disciplinary practice. In M. K. Gold & L. F. Klein (Eds.), Debates in the digital humanities 2023 (pp. 217–237, Chapter 14). University of Minnesota Press. https://dhdebates.gc.cuny.edu/read/debates-in-the-digital-humanities-2023/section/7525de5d-a6fe-4fad-ab68-00e064ea2dca"
};

// Full Network Data based on the CSV provided
export const FULL_NETWORK_DATA: NetworkNodeData[] = [
    { id: "3915", name: "杜甫", rel: "友", location: "长安、洛阳、兖州", mood: "敬仰、惜别", color: "#6baed6" }, // Nature - #27ae60 -> #6baed6
    { id: "439016", name: "于逖", rel: "友", location: "长安", mood: "敬仰", color: "#6baed6" },
    { id: "445762", name: "元丹丘", rel: "友", location: "嵩山、长安", mood: "敬仰", color: "#6baed6" },
    { id: "445895", name: "張謂", rel: "友", location: "长安、江夏", mood: "敬仰", color: "#6baed6" },
    { id: "450698", name: "楊利物", rel: "友", location: "金陵", mood: "敬仰", color: "#6baed6" },
    { id: "512539", name: "吳指南", rel: "友", location: "蜀中", mood: "悲愤", color: "#c6dbef" }, // Other/Grey - #bdc3c7 -> #c6dbef
    { id: "447047", name: "吳筠", rel: "被Y推薦", location: "长安", mood: "感激", color: "#08306b" }, // Political - #e74c3c -> #08306b
    { id: "447380", name: "宋若思", rel: "被Y推薦", location: "浔阳", mood: "感激", color: "#08306b" },
    { id: "93456", name: "張垍", rel: "遭到Y的反對/攻訐", location: "长安", mood: "悲愤", color: "#2171b5" }, // Exile/Grief - #2c3e50 -> #2171b5
    { id: "94338", name: "高力士", rel: "遭到Y的反對/攻訐", location: "长安", mood: "悲愤", color: "#2171b5" },
    { id: "11605", name: "蘇頲", rel: "被Y欣賞/器重", location: "蜀中", mood: "感激", color: "#08306b" },
    { id: "15353", name: "賀知章", rel: "被Y欣賞/器重", location: "长安", mood: "狂喜、敬仰", color: "#6baed6" },
    { id: "19244", name: "李隆基（唐玄宗）", rel: "被Y欣賞/器重", location: "长安", mood: "感激、敬仰", color: "#08306b" },
    { id: "92452", name: "司馬承禎", rel: "被Y欣賞/器重", location: "天台山", mood: "敬仰", color: "#6baed6" },
    { id: "189077", name: "李璘", rel: "被Y欣賞/器重", location: "江陵、浔阳", mood: "感激", color: "#2171b5" },
    { id: "92180", name: "韋渠牟", rel: "學生為Y", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "92921", name: "李陽冰", rel: "為Y所著書作序", location: "当涂", mood: "感激", color: "#c6dbef" },
    { id: "1571", name: "宋敏求", rel: "書序由Y所作", location: "长安", mood: "敬仰", color: "#c6dbef" },
    { id: "4141", name: "樂史", rel: "書序由Y所作", location: "长安", mood: "敬仰", color: "#c6dbef" },
    { id: "7364", name: "曾鞏", rel: "書序由Y所作", location: "长安", mood: "敬仰", color: "#c6dbef" },
    { id: "176024", name: "魏顥", rel: "書序由Y所作", location: "金陵", mood: "感激", color: "#c6dbef" },
    { id: "32162", name: "李華", rel: "墓誌銘由Y所作", location: "当涂", mood: "感激", color: "#c6dbef" },
    { id: "32694", name: "賈至", rel: "從Y遊", location: "长安、洛阳", mood: "敬仰", color: "#6baed6" },
    { id: "173788", name: "李曄", rel: "從Y遊", location: "夜郎", mood: "惜别", color: "#2171b5" },
    { id: "3640", name: "陸游", rel: "詩作為Y所稱道", location: "无直接互动", mood: "敬仰", color: "#c6dbef" },
    { id: "196184", name: "章仇兼瓊", rel: "以詩諷忤Y", location: "蜀中", mood: "悲愤", color: "#2171b5" },
    { id: "94367", name: "高霽", rel: "相唱和", location: "宣城", mood: "狂喜", color: "#6baed6" },
    { id: "445623", name: "王惠翼", rel: "相唱和", location: "长安", mood: "敬仰", color: "#6baed6" },
    { id: "446112", name: "張鎬", rel: "相唱和", location: "长安", mood: "敬仰", color: "#08306b" },
    { id: "446496", name: "盧虛舟", rel: "相唱和", location: "庐山", mood: "敬仰", color: "#6baed6" },
    { id: "446738", name: "崔叔封", rel: "相唱和", location: "长安", mood: "敬仰", color: "#6baed6" },
    { id: "446810", name: "崔成甫", rel: "相唱和", location: "金陵、长安", mood: "狂喜、惜别", color: "#6baed6" },
    { id: "447339", name: "竇公衡", rel: "相唱和", location: "长安", mood: "敬仰", color: "#6baed6" },
    { id: "447367", name: "宋泚", rel: "相唱和", location: "长安", mood: "敬仰", color: "#6baed6" },
    { id: "447855", name: "李幼成", rel: "相唱和", location: "长安", mood: "敬仰", color: "#6baed6" },
    { id: "450104", name: "閻寬", rel: "相唱和", location: "长安", mood: "敬仰", color: "#6baed6" },
    { id: "450543", name: "岑勛", rel: "相唱和", location: "嵩阳", mood: "狂喜", color: "#6baed6" },
    { id: "31314", name: "李令問", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "93956", name: "孟浩然", rel: "為Y作臨別贈言", location: "襄阳、江夏", mood: "敬仰、惜别", color: "#6baed6" },
    { id: "140955", name: "李濟", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "175923", name: "王炎", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "184796", name: "孔巢父", rel: "為Y作臨別贈言", location: "徂徕山", mood: "惜别", color: "#6baed6" },
    { id: "380574", name: "李藏用", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "445138", name: "高如貴", rel: "為Y作臨別贈言", location: "齐州", mood: "敬仰", color: "#6baed6" },
    { id: "445740", name: "元演", rel: "為Y作臨別贈言", location: "太原、随州", mood: "狂喜、惜别", color: "#6baed6" },
    { id: "445927", name: "張孟熊", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "446017", name: "張遙", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "446156", name: "裴政", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "446191", name: "裴大澤", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "446213", name: "裴圖南", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "446671", name: "崔度", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "446947", name: "白利", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "447334", name: "竇薄華", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "447522", name: "褚三清", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "447723", name: "李襄", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "447767", name: "李雲", rel: "為Y作臨別贈言", location: "宣城", mood: "狂喜、惜别", color: "#6baed6" },
    { id: "447843", name: "李綰", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "447980", name: "李沈", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "447992", name: "李清", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "448011", name: "李凝", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "448056", name: "李賁", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "448242", name: "李錞", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "448563", name: "范宣", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "448729", name: "韓準", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "448919", name: "杜秀芝", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "449124", name: "楊燕", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "449183", name: "郄昂", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "449325", name: "趙國珍", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "449518", name: "呂杲", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "450346", name: "鄭灌", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "450637", name: "釋僧晏", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "512546", name: "梁昌", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "512623", name: "李青", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "512628", name: "李耑", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" },
    { id: "512629", name: "黃鐘", rel: "為Y作臨別贈言", location: "长安", mood: "惜别", color: "#6baed6" }
];