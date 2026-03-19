import type { Metadata } from "next";
import Link from "next/link";

// SVG Icons for decorations
const Icons = {
  Megaphone: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.24 0 .64.02 1.19.09M19 8v6m3-3H9" />
    </svg>
  ),
  Sparkles: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
  Trophy: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a3.375 3.375 0 01-3.375 3.375M9.497 15.75a3.375 3.375 0 013.375-3.375m3.375 3.375v-3.375c0-.621-.504-1.125-1.125-1.125h-.872" />
    </svg>
  ),
  Lightbulb: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.75 6.75 0 001.5-.264m-1.5.264a6.75 6.75 0 01-10.607 0M12 18V6m0 0a6.75 6.75 0 00-1.5-.264m1.5.264a6.75 6.75 0 0010.607 0M12 6v12m0 0a3.75 3.75 0 00-.75-1.5m.75 1.5h6.75M9.75 3h4.5m-4.5 0a.75.75 0 01-.75-.75V3m0 3.75h4.5m-4.5 0a.75.75 0 01-.75-.75V3m0 3.75h4.5m0 0h.75a.75.75 0 01.75.75v3.75m0 0a.75.75 0 01.75.75v3.75m0 0h-.75a.75.75 0 01-.75-.75V6.75a.75.75 0 01.75-.75z" />
    </svg>
  ),
  Star: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  Arrow: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ),
  Calendar: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),
};

export const metadata: Metadata = {
  title: "最新資訊",
  description:
    "香港星光童學會的最新消息、比賽資訊及活動更新。關注我們，緊貼所有比賽動態！",
};

const news = [
  {
    id: 1,
    type: "announcement",
    icon: Icons.Megaphone,
    title: "全港兒童填色大賽 2026 報名通道正式開放",
    excerpt:
      "深受家長和小朋友喜愛的填色大賽現已接受報名！今屆比賽主題為「我心目中的香港」，鼓勵孩子發揮創意，用畫筆描繪他們眼中的香港。",
    date: "2026年3月15日",
    category: "比賽資訊",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    type: "update",
    icon: Icons.Sparkles,
    title: "三語朗誦大賽新增普通話組別",
    excerpt:
      "回應家長需求，今屆三語朗誦大賽將新增普通話朗誦組別，讓更多小朋友有機會參與！普通話組將由專業評審進行評分。",
    date: "2026年3月10日",
    category: "比賽更新",
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50",
    tagColor: "bg-amber-100 text-amber-700",
  },
  {
    id: 3,
    type: "event",
    icon: Icons.Trophy,
    title: "2026年度獲獎者名單出爐",
    excerpt:
      "恭喜所有得獎者！今屆共有超過500位小朋友獲獎，涵蓋全港十八區。我們感謝每一位參賽者的投入和努力。",
    date: "2026年3月5日",
    category: "結果公佈",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    tagColor: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 4,
    type: "tip",
    icon: Icons.Lightbulb,
    title: "參賽小貼士：如何拍攝完美的比賽影片",
    excerpt:
      "許多比賽需要提交影片作品。我們邀請了專業導師分享拍攝技巧，幫助孩子在鏡頭前展現最佳狀態。",
    date: "2026年2月28日",
    category: "參賽指南",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    tagColor: "bg-purple-100 text-purple-700",
  },
  {
    id: 5,
    type: "announcement",
    icon: Icons.Star,
    title: "導師合作夥伴計劃現已接受申請",
    excerpt:
      "歡迎各補習社、興趣班及學校教師加入我們的導師夥伴計劃。成功推薦學生可獲得豐富獎勵，包括工作坊名額及合作證書。",
    date: "2026年2月20日",
    category: "導師計劃",
    color: "from-rose-500 to-rose-600",
    bgColor: "bg-rose-50",
    tagColor: "bg-rose-100 text-rose-700",
  },
  {
    id: 6,
    type: "update",
    icon: Icons.Trophy,
    title: "獎品配送服務優化",
    excerpt:
      "我們已與本地物流夥伴合作，全面提升獎品配送效率。現在下單，最快可於3個工作天內送達。",
    date: "2026年2月15日",
    category: "服務更新",
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-50",
    tagColor: "bg-cyan-100 text-cyan-700",
  },
];

export default function News() {
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
            <Link href="/competitions" className="nav-link">比賽項目</Link>
            <Link href="/news" className="nav-link text-blue-600">最新資訊</Link>
            <Link href="/about" className="nav-link">關於我們</Link>
            <Link href="/contact" className="nav-link">聯絡我們</Link>
          </div>
          <Link href="/competitions" className="btn-primary">立即報名</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-amber-50" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/50 to-amber-100/50 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 badge badge-primary mb-6">
            <Icons.Megaphone />
            最新消息
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
            最新資訊
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            關注我們，緊貼所有比賽動態、得獎資訊及活動更新
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item) => (
              <article
                key={item.id}
                className="group card overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Color header */}
                <div className={`h-3 bg-gradient-to-r ${item.color}`} />
                
                <div className="p-6">
                  {/* Icon and category */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 ${item.bgColor} rounded-xl flex items-center justify-center text-slate-600`}>
                      <item.icon />
                    </div>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${item.tagColor}`}>
                      {item.category}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-lg font-semibold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h2>
                  
                  {/* Excerpt */}
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                      <Icons.Calendar />
                      <span>{item.date}</span>
                    </div>
                    <Link 
                      href="/news" 
                      className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 group/link"
                    >
                      閱讀更多
                      <span className="group-hover/link:translate-x-1 transition-transform">
                        <Icons.Arrow />
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTYxNywgMjU2MTcsIDI1NjE3LCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            訂閱最新資訊
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            留下您的電郵，第一時間收到比賽資訊和特別通知
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="輸入您的電郵地址"
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button type="submit" className="btn-accent whitespace-nowrap">
              立即訂閱
            </button>
          </form>
          <p className="text-slate-400 text-sm mt-4">
            我們尊重您的私隱，不會發送任何推銷訊息
          </p>
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
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/about" className="hover:text-white transition-colors">關於我們</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">私隱政策</Link>
              <Link href="/terms" className="hover:text-white transition-colors">條款及細則</Link>
              <Link href="/contact" className="hover:text-white transition-colors">聯絡我們</Link>
            </div>
            <p className="text-sm text-slate-500">© 2026 香港星光童學會</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
