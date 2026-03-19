import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "聯絡我們",
  description:
    "與香港星光童學會聯絡。我們樂意為您解答關於比賽、報名、獎品等任何問題。",
};

export default function Contact() {
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
              className="text-starlight-gold font-medium"
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
            聯絡我們
          </h1>
          <p className="text-midnight/60 text-lg max-w-2xl mx-auto">
            有任何關於比賽、報名或獎品的問題？
            <br />
            我們樂意為您解答
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-cormorant text-3xl font-semibold text-midnight mb-8">
                聯絡方式
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-starlight-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-midnight mb-1">電郵</h3>
                    <p className="text-midnight/60">info@starlightchildhood.hk</p>
                    <p className="text-midnight/40 text-sm mt-1">
                      我們通常在 1-2 個工作日內回覆
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-starlight-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-midnight mb-1">WhatsApp</h3>
                    <p className="text-midnight/60">+852 9123 4567</p>
                    <p className="text-midnight/40 text-sm mt-1">
                      星期一至五 10:00 - 18:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-starlight-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-midnight mb-1">地址</h3>
                    <p className="text-midnight/60">香港</p>
                    <p className="text-midnight/40 text-sm mt-1">
                      （我們主要透過網上運作）
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-10">
                <h3 className="font-medium text-midnight mb-4">關注我們</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-midnight text-moonlight rounded-full flex items-center justify-center hover:bg-starlight-gold hover:text-midnight transition-colors"
                  >
                    <span className="text-lg">f</span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-midnight text-moonlight rounded-full flex items-center justify-center hover:bg-starlight-gold hover:text-midnight transition-colors"
                  >
                    <span className="text-lg">📷</span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-midnight text-moonlight rounded-full flex items-center justify-center hover:bg-starlight-gold hover:text-midnight transition-colors"
                  >
                    <span className="text-lg">▶</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-moonlight rounded-2xl p-8">
              <h2 className="font-cormorant text-2xl font-semibold text-midnight mb-6">
                發送訊息
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-midnight/70 text-sm mb-2">
                    您的姓名 *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white border border-starlight-gold/20 rounded-lg px-4 py-3 
                               text-midnight focus:outline-none focus:border-starlight-gold"
                    placeholder="請輸入您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-midnight/70 text-sm mb-2">
                    電郵地址 *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-white border border-starlight-gold/20 rounded-lg px-4 py-3 
                               text-midnight focus:outline-none focus:border-starlight-gold"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block text-midnight/70 text-sm mb-2">
                    主題 *
                  </label>
                  <select
                    required
                    className="w-full bg-white border border-starlight-gold/20 rounded-lg px-4 py-3 
                               text-midnight focus:outline-none focus:border-starlight-gold"
                  >
                    <option value="">請選擇</option>
                    <option value="general">一般查詢</option>
                    <option value="competition">比賽相關</option>
                    <option value="registration">報名問題</option>
                    <option value="prize">獎品相關</option>
                    <option value="teacher">導師合作</option>
                    <option value="suggestion">意見建議</option>
                  </select>
                </div>
                <div>
                  <label className="block text-midnight/70 text-sm mb-2">
                    訊息內容 *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-white border border-starlight-gold/20 rounded-lg px-4 py-3 
                               text-midnight focus:outline-none focus:border-starlight-gold resize-none"
                    placeholder="請輸入您的訊息..."
                  />
                </div>
                <button type="submit" className="w-full btn-gold py-4">
                  發送訊息
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-section bg-moonlight">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-3xl font-semibold text-midnight text-center mb-12">
            常見問題
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-starlight-gold/10 group">
                <summary className="p-6 cursor-pointer font-medium text-midnight flex items-center justify-between">
                  {faq.question}
                  <span className="text-starlight-gold group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-midnight/60">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-midnight">
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

const faqs = [
  {
    question: "報名費用是多少？",
    answer:
      "所有比賽報名費用全免！我們相信每個孩子都應該有機會參與。得獎者可自願選購精美獎座、獎牌或獎狀。",
  },
  {
    question: "如何得知比賽結果？",
    answer:
      "比賽結果將於截止報名後約兩週內在網站公佈。我們也會透過電郵通知每位參賽者的家長。",
  },
  {
    question: "可以選擇多個參賽區域嗎？",
    answer:
      "可以！每位參賽者可以選擇最多兩個區域報名，每個區域都會獨立評選，增加獲獎機會。",
  },
  {
    question: "獎品如何寄送？",
    answer:
      "得獎結果公佈後，家長可以透過我們的網站訂購獎品。我們會安排快遞寄送到香港指定地址。",
  },
  {
    question: "導師合作需要什麼條件？",
    answer:
      "歡迎任何教育工作者、補習社或興趣班導師加入我們的導師夥伴計劃。請透過聯絡表格申請。",
  },
];
