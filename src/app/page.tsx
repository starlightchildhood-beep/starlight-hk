import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "香港星光童學會 | 總有一個舞台，適合你的孩子",
  description:
    "香港星光童學會是一個專注於香港兒童發展的平台，為孩子提供多元化的比賽機會。涵蓋藝術、音樂、STEM、朗誦等多元比賽類別。",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-moonlight">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-starlight-gold/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-starlight-gold rounded-full flex items-center justify-center">
              <span className="text-midnight font-bold text-sm">星</span>
            </div>
            <span className="font-cormorant text-xl font-semibold text-midnight">
              香港星光童學會
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/competitions"
              className="text-midnight/70 hover:text-starlight-gold transition-colors"
            >
              比賽項目
            </Link>
            <Link
              href="/news"
              className="text-midnight/70 hover:text-starlight-gold transition-colors"
            >
              最新資訊
            </Link>
            <Link
              href="/about"
              className="text-midnight/70 hover:text-starlight-gold transition-colors"
            >
              關於我們
            </Link>
            <Link
              href="/contact"
              className="text-midnight/70 hover:text-starlight-gold transition-colors"
            >
              聯絡我們
            </Link>
          </div>
          <Link href="/competitions" className="btn-gold text-sm">
            立即報名
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Soft gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-moonlight via-white to-moonlight-gray" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-starlight-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-fresh-blue/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-starlight-gold/10 text-starlight-gold px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-starlight-gold rounded-full animate-pulse" />
            2026年度比賽現已接受報名
          </div>

          {/* Main heading */}
          <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-semibold text-midnight mb-6 leading-tight">
            總有一個舞台
            <br />
            <span className="gold-gradient">適合你的孩子</span>
          </h1>

          {/* Subheading */}
          <p className="text-midnight/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            香港星光童學會是一個專注於香港兒童發展的平台
            <br />
            涵蓋藝術、音樂、STEM、朗誦等多元比賽類別
            <br />
            讓每個孩子都能找到屬於自己的舞台
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/competitions" className="btn-gold text-lg px-8 py-4">
              探索比賽項目
            </Link>
            <Link href="/about" className="btn-dark text-lg px-8 py-4">
              了解更多
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 text-midnight/50">
            <div>
              <p className="text-3xl font-semibold text-midnight">6+</p>
              <p className="text-sm">比賽類別</p>
            </div>
            <div className="w-px bg-midnight/10 hidden sm:block" />
            <div>
              <p className="text-3xl font-semibold text-midnight">18</p>
              <p className="text-sm">香港區域</p>
            </div>
            <div className="w-px bg-midnight/10 hidden sm:block" />
            <div>
              <p className="text-3xl font-semibold text-midnight">500+</p>
              <p className="text-sm">得獎者</p>
            </div>
            <div className="w-px bg-midnight/10 hidden sm:block" />
            <div>
              <p className="text-3xl font-semibold text-midnight">100%</p>
              <p className="text-sm">免費報名</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-midnight/20 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-starlight-gold rounded-full" />
          </div>
        </div>
      </section>

      {/* Competition Categories */}
      <section className="py-section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-midnight mb-4">
              多元比賽類別
            </h2>
            <p className="text-midnight/60 text-lg">
              覆蓋藝術、音樂、學術、創意各大範疇，總有一個適合您的孩子
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <Link
                key={i}
                href="/competitions"
                className="bg-moonlight rounded-2xl p-6 text-center hover:bg-starlight-gold/5 hover:border-starlight-gold/30 border border-transparent transition-all duration-300 group"
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="font-medium text-midnight text-sm group-hover:text-starlight-gold transition-colors">
                  {cat.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-section bg-moonlight">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-starlight-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-midnight mb-3">
                專業認可
              </h3>
              <p className="text-midnight/60 leading-relaxed">
                每位參賽者都將獲得正式參賽證書，得獎者更可獲得精美獎座、獎牌及獎狀
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-starlight-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-midnight mb-3">
                公平公正
              </h3>
              <p className="text-midnight/60 leading-relaxed">
                全港十八區分區評選，讓每位小朋友都有機會在公平環境下展示所長
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-starlight-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📝</span>
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-midnight mb-3">
                簡易報名
              </h3>
              <p className="text-midnight/60 leading-relaxed">
                一站式網上報名，只需幾分鐘即可完成，還有專人跟進所有疑問
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Competitions */}
      <section className="py-section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-midnight mb-4">
              熱門比賽
            </h2>
            <p className="text-midnight/60 text-lg">
              立即報名，給孩子一個發光的機會
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredCompetitions.map((comp, i) => (
              <Link
                key={i}
                href={`/competitions/${comp.id}`}
                className="card overflow-hidden group"
              >
                <div className="aspect-video bg-gradient-to-br from-starlight-gold/10 to-fresh-blue/10 flex items-center justify-center">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {comp.icon}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-starlight-gold/10 text-starlight-gold px-3 py-1 rounded-full">
                      {comp.category}
                    </span>
                    <span className="text-xs text-midnight/40">
                      {comp.deadline}
                    </span>
                  </div>
                  <h3 className="font-cormorant text-xl font-semibold text-midnight mb-2">
                    {comp.title}
                  </h3>
                  <p className="text-midnight/60 text-sm mb-4 line-clamp-2">
                    {comp.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-midnight/40">
                      {comp.participants} 位參賽者
                    </span>
                    <span className="text-starlight-gold text-sm font-medium group-hover:underline">
                      了解詳情 →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/competitions" className="btn-outline-gold">
              查看所有比賽
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-section bg-moonlight">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-midnight mb-2">
                最新資訊
              </h2>
              <p className="text-midnight/60">
                關注我們，緊貼所有比賽動態
              </p>
            </div>
            <Link
              href="/news"
              className="hidden md:flex items-center gap-2 text-starlight-gold font-medium hover:underline"
            >
              查看全部
              <span>→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {latestNews.map((item, i) => (
              <article key={i} className="card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-xs bg-starlight-gold/10 text-starlight-gold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-medium text-midnight mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <span className="text-xs text-midnight/40">{item.date}</span>
              </article>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link href="/news" className="text-starlight-gold font-medium hover:underline">
              查看全部 →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-midnight">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-moonlight mb-6">
            讓孩子踏出第一步
          </h2>
          <p className="text-moonlight/60 text-lg mb-10">
            每個孩子都有獨特的閃光點，現在就為他們報名一個適合的比賽
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/competitions" className="btn-gold text-lg px-10 py-4">
              立即報名
            </Link>
            <Link href="/contact" className="btn-outline-gold text-lg px-10 py-4">
              聯絡我們
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-moonlight-gray border-t border-midnight/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-starlight-gold rounded-full flex items-center justify-center">
                <span className="text-midnight font-bold text-sm">星</span>
              </div>
              <span className="font-cormorant text-lg text-midnight">
                香港星光童學會
              </span>
            </Link>
            <div className="flex gap-6 text-sm text-midnight/50">
              <Link
                href="/about"
                className="hover:text-starlight-gold transition-colors"
              >
                關於我們
              </Link>
              <Link
                href="/privacy"
                className="hover:text-starlight-gold transition-colors"
              >
                私隱政策
              </Link>
              <Link
                href="/terms"
                className="hover:text-starlight-gold transition-colors"
              >
                條款及細則
              </Link>
              <Link
                href="/contact"
                className="hover:text-starlight-gold transition-colors"
              >
                聯絡我們
              </Link>
            </div>
            <p className="text-sm text-midnight/30">
              © 2026 香港星光童學會
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const categories = [
  { name: "視藝創作", icon: "🎨" },
  { name: "音樂演奏", icon: "🎵" },
  { name: "STEM科學", icon: "🔬" },
  { name: "朗誦演說", icon: "🎤" },
  { name: "舞蹈運動", icon: "💃" },
  { name: "創意寫作", icon: "✍️" },
];

const featuredCompetitions = [
  {
    id: "art-2026-01",
    icon: "🎨",
    category: "視藝",
    title: "全港兒童填色大賽 2026",
    description: "發揮創意，用色彩描繪孩子心中的世界",
    deadline: "報名中",
    participants: 328,
  },
  {
    id: "music-2026-01",
    icon: "🎹",
    category: "音樂",
    title: "青少年鋼琴大賽",
    description: "為鋼琴小天才提供專業表演舞台",
    deadline: "報名中",
    participants: 156,
  },
  {
    id: "stem-2026-01",
    icon: "🤖",
    category: "STEM",
    title: "小小發明家創作賽",
    description: "激發孩子對科學探索的興趣",
    deadline: "報名中",
    participants: 89,
  },
];

const latestNews = [
  {
    icon: "📢",
    category: "比賽資訊",
    title: "全港兒童填色大賽 2026 報名通道正式開放",
    date: "2026年3月15日",
  },
  {
    icon: "🎉",
    category: "比賽更新",
    title: "三語朗誦大賽新增普通話組別",
    date: "2026年3月10日",
  },
  {
    icon: "🏆",
    category: "結果公佈",
    title: "2026年度獲獎者名單出爐",
    date: "2026年3月5日",
  },
];
