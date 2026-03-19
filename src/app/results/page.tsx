import Link from "next/link";

export default function Results() {
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
            <Link href="/competitions" className="text-moonlight/80 hover:text-starlight-gold transition-colors">
              比賽項目
            </Link>
            <Link href="/results" className="text-starlight-gold">
              查詢結果
            </Link>
            <Link href="/shop" className="text-moonlight/80 hover:text-starlight-gold transition-colors">
              獎品商店
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
            查詢結果
          </h1>
          <p className="text-moonlight/60 text-lg max-w-2xl mx-auto">
            輸入您的參賽編號，查詢比賽結果
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-section bg-midnight-light">
        <div className="max-w-xl mx-auto px-6">
          <div className="bg-midnight border border-starlight-gold/10 rounded-2xl p-8">
            <div className="mb-6">
              <label className="block text-moonlight/80 text-sm mb-2">
                參賽編號
              </label>
              <input
                type="text"
                placeholder="例如：SG2026-001234"
                className="w-full bg-midnight-light border border-starlight-gold/20 rounded-lg px-4 py-3 
                           text-moonlight placeholder:text-moonlight/30 focus:outline-none focus:border-starlight-gold"
              />
            </div>
            <button className="w-full btn-gold">
              查詢結果
            </button>
          </div>

          {/* Sample result (for demo) */}
          <div className="mt-8 bg-midnight border border-starlight-gold/10 rounded-2xl p-8 text-center">
            <div className="w-20 h-20 bg-starlight-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🏆</span>
            </div>
            <span className="text-xs bg-starlight-gold/20 text-starlight-gold px-3 py-1 rounded-full">
              比賽結果已發布
            </span>
            <h3 className="font-cormorant text-2xl font-semibold text-moonlight mt-4 mb-2">
              全港兒童填色大賽 2026
            </h3>
            <p className="text-moonlight/60 text-sm mb-4">
              參賽者：陳小明 | 組別：小學P.1-P.2組
            </p>
            <div className="bg-midnight-light rounded-xl p-4 mb-4">
              <p className="text-moonlight/40 text-sm">獲獎結果</p>
              <p className="text-starlight-gold font-cormorant text-3xl font-semibold mt-2">
                亞軍
              </p>
              <p className="text-moonlight/60 text-sm mt-1">
                九龍城區
              </p>
            </div>
            <Link href="/shop" className="btn-outline-gold w-full block text-center">
              訂購獎品
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Results */}
      <section className="py-section bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-3xl font-semibold text-moonlight text-center mb-12">
            最新發布結果
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recentResults.map((result, i) => (
              <div
                key={i}
                className="bg-midnight-light border border-starlight-gold/10 rounded-xl p-6"
              >
                <span className="text-xs text-moonlight/40">{result.date}</span>
                <h3 className="font-medium text-moonlight mt-2 mb-3">
                  {result.competition}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-starlight-gold">
                    {result.awards} 個獎項
                  </span>
                  <span className="text-moonlight/30">•</span>
                  <span className="text-sm text-moonlight/60">
                    {result.area}
                  </span>
                </div>
              </div>
            ))}
          </div>
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

const recentResults = [
  {
    date: "2026-03-15",
    competition: "全港兒童填色大賽 2026",
    awards: 486,
    area: "全港十八區",
  },
  {
    date: "2026-03-10",
    competition: "青少年鋼琴大賽",
    awards: 120,
    area: "港島及九龍",
  },
  {
    date: "2026-03-05",
    competition: "小小發明家創作賽",
    awards: 78,
    area: "新界區",
  },
];
