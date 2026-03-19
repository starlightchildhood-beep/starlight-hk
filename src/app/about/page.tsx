import Link from "next/link";

export default function About() {
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
            <Link href="/about" className="text-starlight-gold">
              關於我們
            </Link>
          </div>
          <Link href="/competitions" className="btn-gold text-sm">
            立即報名
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-midnight">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-cormorant text-5xl md:text-6xl font-semibold text-moonlight mb-6">
            關於我們
          </h1>
          <p className="text-moonlight/60 text-lg leading-relaxed">
            讓每個孩子都被看見
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-section bg-midnight-light">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="font-cormorant text-3xl font-semibold text-moonlight mb-6">
              我們的故事
            </h2>
            <div className="text-moonlight/70 leading-relaxed space-y-4">
              <p>
                香港星光童學會是一個專注於香港兒童發展的平台，由一群熱愛教育、關注兒童成長的專業人士創立。
              </p>
              <p>
                我們的團隊成員涵蓋教育、藝術、科技等多個領域，共同致力於為下一代打造更完善的成就認可體系。
              </p>
              <p>
                我們相信，每個孩子都有獨特的閃光點——而這些閃光點，值得被看見、被記錄、被慶祝。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-section bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-3xl font-semibold text-moonlight text-center mb-12">
            我們的信念
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-starlight-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="font-cormorant text-xl font-semibold text-moonlight mb-2">
                公平
              </h3>
              <p className="text-moonlight/60 text-sm">
                全港十八區分區評選，確保每位參賽者都有公平競爭的機會
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-starlight-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌟</span>
              </div>
              <h3 className="font-cormorant text-xl font-semibold text-moonlight mb-2">
                專業
              </h3>
              <p className="text-moonlight/60 text-sm">
                嚴謹的評審制度，確保每個獎項都有真正的含金量
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-starlight-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💪</span>
              </div>
              <h3 className="font-cormorant text-xl font-semibold text-moonlight mb-2">
                鼓勵
              </h3>
              <p className="text-moonlight/60 text-sm">
                每一個參與都是成長的重要印記，我們重視過程而非只看重結果
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-section bg-gradient-to-r from-midnight via-midnight-light to-midnight">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-3xl font-semibold text-moonlight mb-6">
            我們的使命
          </h2>
          <p className="text-starlight-gold font-cormorant text-2xl md:text-3xl leading-relaxed">
            為香港兒童提供公平、專業、備受認可的成就平台
            <br />
            讓每個孩子都能找到屬於自己的舞台
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section bg-midnight">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-3xl font-semibold text-moonlight mb-6">
            立即加入我們
          </h2>
          <p className="text-moonlight/60 mb-8">
            為孩子開啟一扇展示才華的大門
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/competitions" className="btn-gold">
              查看比賽
            </Link>
            <Link href="/contact" className="btn-outline-gold">
              聯絡我們
            </Link>
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
