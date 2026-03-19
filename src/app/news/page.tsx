import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "最新資訊",
  description:
    "香港星光童學會的最新消息、比賽資訊及活動更新。關注我們，緊貼所有比賽動態！",
};

const news = [
  {
    id: 1,
    type: "announcement",
    icon: "📢",
    title: "全港兒童填色大賽 2026 報名通道正式開放",
    excerpt:
      "深受家長和小朋友喜愛的填色大賽現已接受報名！今屆比賽主題為「我心目中的香港」，鼓勵孩子發揮創意，用畫筆描繪他們眼中的香港。",
    date: "2026年3月15日",
    category: "比賽資訊",
  },
  {
    id: 2,
    type: "update",
    icon: "🎉",
    title: "三語朗誦大賽新增普通話組別",
    excerpt:
      "回應家長需求，今屆三語朗誦大賽將新增普通話朗誦組別，讓更多小朋友有機會參與！普通話組將由專業評審進行評分。",
    date: "2026年3月10日",
    category: "比賽更新",
  },
  {
    id: 3,
    type: "event",
    icon: "🏆",
    title: "2026年度獲獎者名單出爐",
    excerpt:
      "恭喜所有得獎者！今屆共有超過500位小朋友獲獎，涵蓋全港十八區。我們感謝每一位參賽者的投入和努力。",
    date: "2026年3月5日",
    category: "結果公佈",
  },
  {
    id: 4,
    type: "tip",
    icon: "💡",
    title: "參賽小貼士：如何拍攝完美的比賽影片",
    excerpt:
      "許多比賽需要提交影片作品。我們邀請了專業導師分享拍攝技巧，幫助孩子在鏡頭前展現最佳狀態。",
    date: "2026年2月28日",
    category: "參賽指南",
  },
  {
    id: 5,
    type: "announcement",
    icon: "🌟",
    title: "導師合作夥伴計劃現已接受申請",
    excerpt:
      "歡迎各補習社、興趣班及學校教師加入我們的導師夥伴計劃。成功推薦學生可獲得豐富獎勵，包括工作坊名額及合作證書。",
    date: "2026年2月20日",
    category: "導師計劃",
  },
  {
    id: 6,
    type: "update",
    icon: "📦",
    title: "獎品配送服務優化",
    excerpt:
      "我們已與本地物流夥伴合作，全面提升獎品配送效率。現在下單，最快可於3個工作天內送達。",
    date: "2026年2月15日",
    category: "服務更新",
  },
];

export default function News() {
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
              className="text-starlight-gold font-medium"
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

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-moonlight to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-cormorant text-5xl md:text-6xl font-semibold text-midnight mb-6">
            最新資訊
          </h1>
          <p className="text-midnight/60 text-lg max-w-2xl mx-auto">
            關注我們，緊貼所有比賽動態、得獎資訊及活動更新
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <article
                key={item.id}
                className="card p-6 hover:border-starlight-gold/40 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs bg-starlight-gold/10 text-starlight-gold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <h2 className="font-cormorant text-xl font-semibold text-midnight mb-3 line-clamp-2">
                  {item.title}
                </h2>
                <p className="text-midnight/60 text-sm mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-midnight/40 text-sm">{item.date}</span>
                  <button className="text-starlight-gold text-sm font-medium hover:underline">
                    閱讀更多 →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-section bg-midnight">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-3xl md:text-4xl font-semibold text-moonlight mb-4">
            訂閱最新資訊
          </h2>
          <p className="text-moonlight/60 mb-8">
            留下您的電郵，第一時間收到比賽資訊和特別通知
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="輸入您的電郵地址"
              className="flex-1 bg-midnight-light border border-starlight-gold/30 rounded-lg px-6 py-4 
                         text-moonlight placeholder:text-moonlight/30 focus:outline-none focus:border-starlight-gold"
            />
            <button type="submit" className="btn-gold whitespace-nowrap">
              立即訂閱
            </button>
          </form>
          <p className="text-moonlight/30 text-xs mt-4">
            我們尊重您的私隱，不會發送任何推銷訊息
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-midnight border-t border-starlight-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-starlight-gold rounded-full flex items-center justify-center">
                <span className="text-midnight font-bold text-sm">星</span>
              </div>
              <span className="font-cormorant text-lg text-moonlight">
                香港星光童學會
              </span>
            </Link>
            <div className="flex gap-6 text-sm text-moonlight/50">
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
            <p className="text-sm text-moonlight/30">
              © 2026 香港星光童學會
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
