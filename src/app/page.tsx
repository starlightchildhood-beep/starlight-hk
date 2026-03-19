import Link from "next/link";

// SVG Icons
const Icons = {
  Trophy: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8m-4-4v4m-4-8a4 4 0 018 0v3H8v-3zM5 8V6a2 2 0 012-2h2m0 0V4a2 2 0 012-2h2m0 0V2m0 2h4m0 4v4m8-4a4 4 0 01-4 4H8m0 0v4" />
    </svg>
  ),
  Shield: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Clipboard: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  Palette: () => (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  Music: () => (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
    </svg>
  ),
  Science: () => (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
  Microphone: () => (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  ),
  Dance: () => (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Pen: () => (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  ),
  Arrow: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ),
  Star: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  Check: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  ChevronDown: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  ),
};

const categories = [
  { name: "視藝創作", icon: Icons.Palette, color: "bg-pink-100 text-pink-600" },
  { name: "音樂演奏", icon: Icons.Music, color: "bg-purple-100 text-purple-600" },
  { name: "STEM科學", icon: Icons.Science, color: "bg-cyan-100 text-cyan-600" },
  { name: "朗誦演說", icon: Icons.Microphone, color: "bg-amber-100 text-amber-600" },
  { name: "舞蹈運動", icon: Icons.Dance, color: "bg-rose-100 text-rose-600" },
  { name: "創意寫作", icon: Icons.Pen, color: "bg-blue-100 text-blue-600" },
];

const featuredCompetitions = [
  {
    id: "art-2026-01",
    category: "視藝",
    title: "全港兒童填色大賽 2026",
    description: "發揮創意，用色彩描繪孩子心中的世界",
    participants: 328,
    status: "報名中",
  },
  {
    id: "music-2026-01",
    category: "音樂",
    title: "青少年鋼琴大賽",
    description: "為鋼琴小天才提供專業表演舞台",
    participants: 156,
    status: "報名中",
  },
  {
    id: "stem-2026-01",
    category: "STEM",
    title: "小小發明家創作賽",
    description: "激發孩子對科學探索的興趣",
    participants: 89,
    status: "報名中",
  },
];

const news = [
  {
    category: "比賽資訊",
    title: "全港兒童填色大賽 2026 報名通道正式開放",
    date: "2026年3月15日",
  },
  {
    category: "比賽更新",
    title: "三語朗誦大賽新增普通話組別",
    date: "2026年3月10日",
  },
  {
    category: "結果公佈",
    title: "2026年度獲獎者名單出爐",
    date: "2026年3月5日",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="nav">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-amber-500 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">星</span>
            </div>
            <span className="font-serif text-xl font-semibold text-slate-900">
              香港星光童學會
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/competitions" className="nav-link">
              比賽項目
            </Link>
            <Link href="/news" className="nav-link">
              最新資訊
            </Link>
            <Link href="/about" className="nav-link">
              關於我們
            </Link>
            <Link href="/contact" className="nav-link">
              聯絡我們
            </Link>
          </div>

          {/* CTA */}
          <Link href="/competitions" className="btn-primary">
            立即報名
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pb-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/10 to-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-amber-500/10 to-blue-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 badge badge-primary mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                2026年度比賽現已接受報名
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                總有一個舞台
                <br />
                <span className="hero-gradient">適合你的孩子</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                香港星光童學會專注於香港兒童發展，
                涵蓋藝術、音樂、STEM、朗誦等多元比賽類別，
                讓每個孩子都能找到屬於自己的舞台。
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/competitions" className="btn-primary text-lg px-8 py-4">
                  探索比賽項目
                </Link>
                <Link href="/about" className="btn-secondary text-lg px-8 py-4">
                  了解更多
                </Link>
              </div>
            </div>

            {/* Right - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-card border border-slate-100">
                <p className="stat-number text-blue-600">6+</p>
                <p className="stat-label mt-1">比賽類別</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-card border border-slate-100">
                <p className="stat-number text-amber-500">18</p>
                <p className="stat-label mt-1">香港區域</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-card border border-slate-100">
                <p className="stat-number text-emerald-500">500+</p>
                <p className="stat-label mt-1">得獎者</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-card border border-slate-100">
                <p className="stat-number text-slate-900">100%</p>
                <p className="stat-label mt-1">免費報名</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">多元比賽類別</h2>
            <p className="section-subtitle mx-auto">
              覆蓋藝術、音樂、學術、創意各大範疇，總有一個適合您的孩子
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href="/competitions"
                className="group text-center p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all duration-300"
              >
                <div className={`w-14 h-14 ${cat.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <cat.icon />
                </div>
                <p className="font-medium text-slate-700 text-sm">{cat.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="section bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="card p-8 group">
              <div className="feature-icon mb-6 bg-blue-100 text-blue-600">
                <Icons.Trophy />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                專業認可
              </h3>
              <p className="text-slate-600 leading-relaxed">
                每位參賽者都將獲得正式參賽證書，
                得獎者更可獲得精美獎座、獎牌及獎狀。
              </p>
            </div>

            {/* Card 2 */}
            <div className="card p-8 group">
              <div className="feature-icon mb-6 bg-emerald-100 text-emerald-600">
                <Icons.Shield />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                公平公正
              </h3>
              <p className="text-slate-600 leading-relaxed">
                全港十八區分區評選，
                讓每位小朋友都有機會在公平環境下展示所長。
              </p>
            </div>

            {/* Card 3 */}
            <div className="card p-8 group">
              <div className="feature-icon mb-6 bg-amber-100 text-amber-600">
                <Icons.Clipboard />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                簡易報名
              </h3>
              <p className="text-slate-600 leading-relaxed">
                一站式網上報名，只需幾分鐘即可完成，
                還有專人跟進所有疑問。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Competitions */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">熱門比賽</h2>
            <p className="section-subtitle mx-auto">
              立即報名，給孩子一個發光的機會
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredCompetitions.map((comp) => (
              <Link
                key={comp.id}
                href={`/competitions/${comp.id}`}
                className="competition-card"
              >
                <div className="competition-card-image">
                  <div className="w-20 h-20 bg-white/80 rounded-2xl flex items-center justify-center shadow-sm">
                    <span className="text-4xl">🏆</span>
                  </div>
                </div>
                <div className="competition-card-body">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="badge badge-primary text-xs">{comp.category}</span>
                    <span className="badge badge-success text-xs">{comp.status}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {comp.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {comp.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">
                      {comp.participants} 位參賽者
                    </span>
                    <span className="text-sm font-medium text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                      了解詳情 <Icons.Arrow />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/competitions" className="btn-secondary">
              查看所有比賽
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="section bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="section-title mb-2">最新資訊</h2>
              <p className="section-subtitle">關注我們，緊貼所有比賽動態</p>
            </div>
            <Link href="/news" className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-2">
              查看全部 <Icons.Arrow />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, i) => (
              <article key={i} className="card p-6 group cursor-pointer">
                <div className="flex items-center gap-2 mb-4">
                  <span className="badge badge-accent text-xs">{item.category}</span>
                </div>
                <h3 className="font-medium text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <span className="text-sm text-slate-400">{item.date}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-24">
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            讓孩子踏出第一步
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            每個孩子都有獨特的閃光點，現在就為他們報名一個適合的比賽
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/competitions" className="btn-accent text-lg px-10 py-4">
              立即報名
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors">
              聯絡我們
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-amber-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">星</span>
              </div>
              <span className="font-serif text-lg font-semibold text-white">
                香港星光童學會
              </span>
            </Link>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/about" className="hover:text-white transition-colors">關於我們</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">私隱政策</Link>
              <Link href="/terms" className="hover:text-white transition-colors">條款及細則</Link>
              <Link href="/contact" className="hover:text-white transition-colors">聯絡我們</Link>
            </div>

            <p className="text-sm text-slate-500">
              © 2026 香港星光童學會
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
