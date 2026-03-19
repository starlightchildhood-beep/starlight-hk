import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight/90 backdrop-blur-md border-b border-starlight-gold/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-starlight-gold rounded-full flex items-center justify-center">
              <span className="text-midnight font-bold text-sm">星</span>
            </div>
            <span className="font-cormorant text-xl font-semibold text-moonlight">
              香港星光童學會
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/competitions" className="text-moonlight/80 hover:text-starlight-gold transition-colors">
              比賽項目
            </Link>
            <Link href="/results" className="text-moonlight/80 hover:text-starlight-gold transition-colors">
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight-light to-midnight" />
        
        {/* Decorative stars */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-starlight-gold/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Tagline */}
          <p className="text-starlight-gold font-montserrat text-sm tracking-[0.3em] uppercase mb-6">
            Hong Kong Starlight Children Association
          </p>

          {/* Main heading */}
          <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-semibold text-moonlight mb-6 leading-tight">
            總有一個舞台
            <br />
            <span className="gold-gradient">適合你的孩子</span>
          </h1>

          {/* Subheading */}
          <p className="text-moonlight/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
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
            <Link href="/about" className="btn-outline-gold text-lg px-8 py-4">
              了解更多
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-starlight-gold/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-starlight-gold rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Competition Categories */}
      <section className="py-section bg-midnight-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-moonlight mb-4">
              多元比賽類別
            </h2>
            <p className="text-moonlight/60 text-lg">
              覆蓋藝術、音樂、學術、創意各大範疇
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="bg-midnight/50 border border-starlight-gold/10 rounded-xl p-6 text-center 
                           hover:border-starlight-gold/30 hover:bg-midnight transition-all duration-300"
              >
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="font-medium text-moonlight text-sm">{cat.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-section bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-starlight-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-moonlight mb-3">
                專業認可
              </h3>
              <p className="text-moonlight/60 leading-relaxed">
                每位參賽者都將獲得正式參賽證書，得獎者更可獲得精美獎座、獎牌及獎狀
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-starlight-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-moonlight mb-3">
                公平公正
              </h3>
              <p className="text-moonlight/60 leading-relaxed">
                全港十八區分區評選，讓每位小朋友都有機會在公平環境下展示所長
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-starlight-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📝</span>
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-moonlight mb-3">
                簡易報名
              </h3>
              <p className="text-moonlight/60 leading-relaxed">
                一站式網上報名，只需幾分鐘即可完成，還有專人跟進所有疑問
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Competitions */}
      <section className="py-section bg-midnight-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-moonlight mb-4">
              熱門比賽
            </h2>
            <p className="text-moonlight/60 text-lg">
              立即報名，給孩子一個發光的機會
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredCompetitions.map((comp, i) => (
              <div
                key={i}
                className="bg-midnight border border-starlight-gold/10 rounded-2xl overflow-hidden 
                           hover:border-starlight-gold/30 transition-all duration-300 group"
              >
                <div className="aspect-video bg-gradient-to-br from-starlight-gold/20 to-rosegold/20 flex items-center justify-center">
                  <span className="text-6xl">{comp.icon}</span>
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
                  <p className="text-moonlight/60 text-sm mb-4">
                    {comp.description}
                  </p>
                  <Link
                    href={`/competitions/${comp.id}`}
                    className="inline-flex items-center gap-2 text-starlight-gold hover:gap-3 transition-all"
                  >
                    了解詳情
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/competitions" className="btn-outline-gold">
              查看所有比賽
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-midnight via-midnight-light to-midnight">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-moonlight mb-6">
            讓孩子踏出第一步
          </h2>
          <p className="text-moonlight/60 text-lg mb-10">
            每個孩子都有獨特的閃光點，現在就為他們報名一個適合的比賽
          </p>
          <Link href="/competitions" className="btn-gold text-lg px-10 py-4">
            立即報名
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-midnight border-t border-starlight-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-starlight-gold rounded-full flex items-center justify-center">
                <span className="text-midnight font-bold text-sm">星</span>
              </div>
              <span className="font-cormorant text-lg text-moonlight">
                香港星光童學會
              </span>
            </div>
            <div className="flex gap-6 text-sm text-moonlight/50">
              <Link href="/about" className="hover:text-starlight-gold transition-colors">
                關於我們
              </Link>
              <Link href="/privacy" className="hover:text-starlight-gold transition-colors">
                私隱政策
              </Link>
              <Link href="/terms" className="hover:text-starlight-gold transition-colors">
                條款及細則
              </Link>
              <Link href="/contact" className="hover:text-starlight-gold transition-colors">
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
  },
  {
    id: "music-2026-01",
    icon: "🎹",
    category: "音樂",
    title: "青少年鋼琴大賽",
    description: "為鋼琴小天才提供專業表演舞台",
    deadline: "報名中",
  },
  {
    id: "stem-2026-01",
    icon: "🤖",
    category: "STEM",
    title: "小小發明家創作賽",
    description: "激發孩子對科學探索的興趣",
    deadline: "即將開始",
  },
];
