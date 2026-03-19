"use client";

import { useState } from "react";
import Link from "next/link";

const Icons = {
  Filter: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
    </svg>
  ),
  Arrow: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ),
  Users: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  Calendar: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),
  Check: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  ),
};

// Competition data with gradient colors
const competitions = [
  {
    id: "art-2026-01",
    icon: "🎨",
    gradient: "from-pink-400 to-rose-500",
    bgGradient: "bg-gradient-to-br from-pink-100 to-rose-50",
    category: "視藝創作",
    categoryId: "art",
    title: "全港兒童填色大賽 2026",
    description: "發揮創意，用色彩描繪孩子心中的世界。適合幼兒至小學各年級學生參與。",
    deadline: "2026年4月30日截止",
    status: "報名中",
    statusType: "open",
    participants: 328,
    ageGroups: ["學前PREN組", "K.1-K.3組", "P.1-P.2組", "P.3-P.4組", "P.5-P.6組"],
    fee: "免費",
    prize: "獎狀、獎牌、獎杯（自費）",
    highlights: ["發揮孩子無限創意", "全港十八區評選", "免費報名", "精美獎品可供選購"],
    process: [
      { step: "STEP 1", desc: "填寫報名表" },
      { step: "STEP 2", desc: "繪製參賽作品" },
      { step: "STEP 3", desc: "上傳作品相片" },
      { step: "STEP 4", desc: "等待結果公佈" },
    ],
  },
  {
    id: "music-2026-01",
    icon: "🎹",
    gradient: "from-violet-400 to-purple-500",
    bgGradient: "bg-gradient-to-br from-violet-100 to-purple-50",
    category: "音樂演奏",
    categoryId: "music",
    title: "青少年鋼琴大賽",
    description: "為鋼琴小天才提供專業表演舞台，展示音樂才華。",
    deadline: "2026年5月15日截止",
    status: "報名中",
    statusType: "open",
    participants: 156,
    ageGroups: ["P.1-P.2組", "P.3-P.4組", "P.5-P.6組", "中學組"],
    fee: "免費",
    prize: "獎狀、獎牌、獎杯（自費）",
    highlights: ["專業評審標準", "全港十八區評選", "免費報名", "證書認可"],
    process: [
      { step: "STEP 1", desc: "填寫報名表" },
      { step: "STEP 2", desc: "錄製演奏影片" },
      { step: "STEP 3", desc: "上傳影片連結" },
      { step: "STEP 4", desc: "等待結果公佈" },
    ],
  },
  {
    id: "stem-2026-01",
    icon: "🤖",
    gradient: "from-cyan-400 to-blue-500",
    bgGradient: "bg-gradient-to-br from-cyan-100 to-blue-50",
    category: "STEM科學",
    categoryId: "stem",
    title: "小小發明家創作賽",
    description: "激發孩子對科學探索的興趣，培養創新思維。",
    deadline: "2026年5月1日截止",
    status: "報名中",
    statusType: "open",
    participants: 89,
    ageGroups: ["P.1-P.2組", "P.3-P.4組", "P.5-P.6組"],
    fee: "免費",
    prize: "獎狀、獎牌、獎杯（自費）",
    highlights: ["培養創新思維", "發揮小小科學家潛能", "全港十八區評選", "免費報名"],
    process: [
      { step: "STEP 1", desc: "填寫報名表" },
      { step: "STEP 2", desc: "創作發明作品" },
      { step: "STEP 3", desc: "拍攝作品介紹影片" },
      { step: "STEP 4", desc: "上傳並等待結果" },
    ],
  },
  {
    id: "speech-2026-01",
    icon: "🎤",
    gradient: "from-amber-400 to-orange-500",
    bgGradient: "bg-gradient-to-br from-amber-100 to-orange-50",
    category: "朗誦演說",
    categoryId: "speech",
    title: "三語朗誦大賽",
    description: "英語、粵語、普通話三語朗誦，培養語言表達能力。",
    deadline: "2026年4月20日截止",
    status: "報名中",
    statusType: "open",
    participants: 201,
    ageGroups: ["學前PREN組", "K.1-K.3組", "P.1-P.2組", "P.3-P.4組", "P.5-P.6組"],
    fee: "免費",
    prize: "獎狀、獎牌、獎杯（自費）",
    highlights: ["三語任選", "適合各年齡層", "全港十八區評選", "免費報名"],
    process: [
      { step: "STEP 1", desc: "選擇朗誦語言" },
      { step: "STEP 2", desc: "錄製朗誦影片" },
      { step: "STEP 3", desc: "上傳影片連結" },
      { step: "STEP 4", desc: "等待結果公佈" },
    ],
  },
  {
    id: "dance-2026-01",
    icon: "💃",
    gradient: "from-rose-400 to-pink-500",
    bgGradient: "bg-gradient-to-br from-rose-100 to-pink-50",
    category: "舞蹈運動",
    categoryId: "dance",
    title: "兒童舞蹈大賽",
    description: "芭蕾舞、現代舞、中國舞等多種舞蹈形式均可參加。",
    deadline: "2026年6月1日截止",
    status: "即將開始",
    statusType: "soon",
    participants: 0,
    ageGroups: ["K.1-K.3組", "P.1-P.2組", "P.3-P.4組", "P.5-P.6組"],
    fee: "免費",
    prize: "獎狀、獎牌、獎杯（自費）",
    highlights: ["多種舞蹈形式", "專業評審標準", "全港十八區評選", "免費報名"],
    process: [
      { step: "STEP 1", desc: "選擇舞蹈類別" },
      { step: "STEP 2", desc: "錄製舞蹈影片" },
      { step: "STEP 3", desc: "上傳影片連結" },
      { step: "STEP 4", desc: "等待結果公佈" },
    ],
  },
  {
    id: "writing-2026-01",
    icon: "✍️",
    gradient: "from-blue-400 to-indigo-500",
    bgGradient: "bg-gradient-to-br from-blue-100 to-indigo-50",
    category: "創意寫作",
    categoryId: "writing",
    title: "創意寫作比賽",
    description: "發揮想像力，創作出屬於自己的故事。",
    deadline: "2026年5月10日截止",
    status: "報名中",
    statusType: "open",
    participants: 124,
    ageGroups: ["P.1-P.2組", "P.3-P.4組", "P.5-P.6組", "中學組"],
    fee: "免費",
    prize: "獎狀、獎牌、獎杯（自費）",
    highlights: ["發揮創意寫作", "培養文字表達能力", "全港十八區評選", "免費報名"],
    process: [
      { step: "STEP 1", desc: "選擇參賽組別" },
      { step: "STEP 2", desc: "撰寫創意文章" },
      { step: "STEP 3", desc: "上傳作品" },
      { step: "STEP 4", desc: "等待結果公佈" },
    ],
  },
];

const categories = [
  { name: "全部", icon: "✨", id: "all" },
  { name: "視藝創作", icon: "🎨", id: "art" },
  { name: "音樂演奏", icon: "🎵", id: "music" },
  { name: "STEM科學", icon: "🔬", id: "stem" },
  { name: "朗誦演說", icon: "🎤", id: "speech" },
  { name: "舞蹈運動", icon: "💃", id: "dance" },
  { name: "創意寫作", icon: "✍️", id: "writing" },
];

export default function Competitions() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCompetitions = competitions.filter(
    (comp) => activeCategory === "all" || comp.categoryId === activeCategory
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="nav">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-amber-500 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">星</span>
            </div>
            <span className="font-serif text-xl font-semibold text-slate-900">
              香港星光童學會
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/competitions" className="nav-link text-blue-600">比賽項目</Link>
            <Link href="/news" className="nav-link">最新資訊</Link>
            <Link href="/about" className="nav-link">關於我們</Link>
            <Link href="/contact" className="nav-link">聯絡我們</Link>
          </div>
          <Link href="/competitions" className="btn-primary">立即報名</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-amber-50" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/40 to-amber-100/40 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
              比賽項目
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              涵蓋藝術、音樂、STEM、朗誦等多元範疇
              <br />
              總有一個舞台，適合你的孩子
            </p>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 py-6">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-5 py-2.5 shadow-sm">
              <span className="text-2xl">🏆</span>
              <span className="font-semibold text-slate-900">6+</span>
              <span className="text-slate-500">比賽類別</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-5 py-2.5 shadow-sm">
              <span className="text-2xl">📍</span>
              <span className="font-semibold text-slate-900">18</span>
              <span className="text-slate-500">香港區域</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-5 py-2.5 shadow-sm">
              <span className="text-2xl">✅</span>
              <span className="font-semibold text-slate-900">100%</span>
              <span className="text-slate-500">免費報名</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-[72px] z-40 bg-white border-b border-slate-200 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <Icons.Filter />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Competitions Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompetitions.map((comp, i) => (
              <article
                key={i}
                className="group card overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Gradient header with icon */}
                <div className={`relative h-32 ${comp.bgGradient} flex items-center justify-center`}>
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${comp.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-4xl">{comp.icon}</span>
                  </div>
                  
                  {/* Status badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`text-xs font-medium px-3 py-1.5 rounded-full ${
                      comp.statusType === "open" 
                        ? "bg-emerald-100 text-emerald-700" 
                        : "bg-amber-100 text-amber-700"
                    }`}>
                      {comp.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  {/* Category and deadline */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {comp.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Icons.Calendar />
                      {comp.deadline.split("截止")[0]}
                    </span>
                  </div>
                  
                  {/* Title and description */}
                  <h2 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-1">
                    {comp.title}
                  </h2>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {comp.description}
                  </p>
                  
                  {/* Participants */}
                  <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-4">
                    <Icons.Users />
                    <span>{comp.participants > 0 ? `${comp.participants} 位參賽者` : "報名即將開始"}</span>
                  </div>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-sm font-medium text-emerald-600 flex items-center gap-1">
                      <Icons.Check />
                      {comp.fee}
                    </span>
                    <Link
                      href={`/competitions/${comp.id}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 group/link"
                    >
                      了解詳情
                      <span className="group-hover/link:translate-x-1 transition-transform">
                        <Icons.Arrow />
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredCompetitions.length === 0 && (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🔍</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">暫無此類別的比賽</h3>
              <p className="text-slate-500 mb-4">敬請期待更多比賽</p>
              <button
                onClick={() => setActiveCategory("all")}
                className="text-blue-600 font-medium hover:underline"
              >
                查看所有比賽
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-amber-500" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            準備好讓孩子展現才華了嗎？
          </h2>
          <p className="text-blue-50 mb-8 max-w-xl mx-auto">
            立即報名，讓孩子踏出成功的第一步
          </p>
          <Link href="/competitions" className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            立即報名
            <Icons.Arrow />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-amber-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">星</span>
              </div>
              <span className="font-serif text-lg font-semibold text-white">香港星光童學會</span>
            </Link>
            <p className="text-sm text-slate-500">© 2026 香港星光童學會</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
