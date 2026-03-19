"use client";

import { useState } from "react";
import Link from "next/link";

const categories = [
  { name: "全部", icon: "✨", id: "all" },
  { name: "視藝創作", icon: "🎨", id: "art" },
  { name: "音樂演奏", icon: "🎵", id: "music" },
  { name: "STEM科學", icon: "🔬", id: "stem" },
  { name: "朗誦演說", icon: "🎤", id: "speech" },
  { name: "舞蹈運動", icon: "💃", id: "dance" },
  { name: "創意寫作", icon: "✍️", id: "writing" },
];

const competitions = [
  {
    id: "art-2026-01",
    icon: "🎨",
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
  },
  {
    id: "music-2026-01",
    icon: "🎹",
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
  },
  {
    id: "stem-2026-01",
    icon: "🤖",
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
  },
  {
    id: "speech-2026-01",
    icon: "🎤",
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
  },
  {
    id: "dance-2026-01",
    icon: "💃",
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
  },
  {
    id: "writing-2026-01",
    icon: "✍️",
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
  },
];

export default function Competitions() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCompetitions = competitions.filter(
    (comp) => activeCategory === "all" || comp.categoryId === activeCategory
  );

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight/90 backdrop-blur-md border-b border-starlight-gold/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-starlight-gold rounded-full flex items-center justify-center">
              <span className="text-midnight font-bold text-sm">星</span>
            </div>
            <span className="font-cormorant text-xl font-semibold text-moonlight">
              香港星光童學會
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/competitions" className="text-starlight-gold">
              比賽項目
            </Link>
            <Link href="/about" className="text-moonlight/80 hover:text-starlight-gold transition-colors">
              關於我們
            </Link>
          </div>
          <Link href="/competitions" className="btn-gold text-sm">
            立即報名
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 bg-midnight">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-cormorant text-5xl md:text-6xl font-semibold text-moonlight mb-6">
            比賽項目
          </h1>
          <p className="text-moonlight/60 text-lg max-w-2xl mx-auto">
            涵蓋藝術、音樂、STEM、朗誦等多元範疇
            <br />
            總有一個舞台，適合你的孩子
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-midnight-light border-b border-starlight-gold/10 sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-starlight-gold text-midnight"
                    : "bg-midnight text-moonlight/70 hover:bg-midnight-light"
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
      <section className="py-section bg-midnight-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCompetitions.map((comp, i) => (
              <div
                key={i}
                className="bg-midnight border border-starlight-gold/10 rounded-2xl overflow-hidden 
                           hover:border-starlight-gold/30 transition-all duration-300 group"
              >
                <div className="aspect-video bg-gradient-to-br from-starlight-gold/20 to-rosegold/20 flex items-center justify-center relative">
                  <span className="text-7xl">{comp.icon}</span>
                  {comp.statusType === "open" && (
                    <span className="absolute top-4 right-4 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">
                      {comp.status}
                    </span>
                  )}
                  {comp.statusType === "soon" && (
                    <span className="absolute top-4 right-4 bg-starlight-gold/20 text-starlight-gold px-3 py-1 rounded-full text-xs">
                      {comp.status}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-starlight-gold/20 text-starlight-gold px-2 py-1 rounded">
                      {comp.category}
                    </span>
                    <span className="text-xs text-moonlight/40">
                      {comp.deadline}
                    </span>
                  </div>
                  <h3 className="font-cormorant text-xl font-semibold text-moonlight mb-2">
                    {comp.title}
                  </h3>
                  <p className="text-moonlight/60 text-sm mb-4 line-clamp-2">
                    {comp.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-moonlight/40">
                      {comp.participants > 0 ? `${comp.participants} 位參賽者` : "報名即將開始"}
                    </span>
                    <Link
                      href={`/competitions/${comp.id}`}
                      className="inline-flex items-center gap-2 text-starlight-gold hover:gap-3 transition-all text-sm"
                    >
                      了解詳情
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCompetitions.length === 0 && (
            <div className="text-center py-16">
              <p className="text-moonlight/50 text-lg">暫無此類別的比賽</p>
              <button
                onClick={() => setActiveCategory("all")}
                className="mt-4 text-starlight-gold hover:underline"
              >
                查看所有比賽
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-midnight border-t border-starlight-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-starlight-gold rounded-full flex items-center justify-center">
                <span className="text-midnight font-bold text-sm">星</span>
              </div>
              <span className="font-cormorant text-lg text-moonlight">
                香港星光童學會
              </span>
            </Link>
            <p className="text-sm text-moonlight/30">
              © 2026 香港星光童學會
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
