import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "聯絡我們",
  description:
    "與香港星光童學會聯絡。我們樂意為您解答關於比賽、報名、獎品等任何問題。",
};

const Icons = {
  Mail: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  ),
  Phone: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  ),
  MapPin: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
  Clock: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  MessageCircle: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.971 5.971 0 01-.474-.065 4.84 4.84 0 00-.978-2.326c-.61-.41-1.16-.89-1.06-1.75a2.372 2.372 0 011.06-1.44 9.93 9.93 0 015.24-1.68 9.87 9.87 0 012.16-.33c2.81 0 5.45 1.07 7.4 2.8a11.13 11.13 0 012.64 2.21l.28-.18z" />
    </svg>
  ),
  Arrow: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ),
  ChevronDown: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  ),
  Plus: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  ),
};

const faqs = [
  {
    question: "報名費用是多少？",
    answer: "所有比賽報名費用全免！我們相信每個孩子都應該有機會參與。得獎者可自願選購精美獎座、獎牌或獎狀。",
  },
  {
    question: "如何得知比賽結果？",
    answer: "比賽結果將於截止報名後約兩週內在網站公佈。我們也會透過電郵通知每位參賽者的家長。",
  },
  {
    question: "可以選擇多個參賽區域嗎？",
    answer: "可以！每位參賽者可以選擇最多兩個區域報名，每個區域都會獨立評選，增加獲獎機會。",
  },
  {
    question: "獎品如何寄送？",
    answer: "得獎結果公佈後，家長可以透過我們的網站訂購獎品。我們會安排快遞寄送到香港指定地址。",
  },
  {
    question: "導師合作需要什麼條件？",
    answer: "歡迎任何教育工作者、補習社或興趣班導師加入我們的導師夥伴計劃。請透過聯絡表格申請。",
  },
];

export default function Contact() {
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
            <Link href="/news" className="nav-link">最新資訊</Link>
            <Link href="/about" className="nav-link">關於我們</Link>
            <Link href="/contact" className="nav-link text-blue-600">聯絡我們</Link>
          </div>
          <Link href="/competitions" className="btn-primary">立即報名</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-amber-50" />
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-amber-100/50 to-blue-100/50 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
            聯絡我們
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            有任何關於比賽、報名或獎品的問題？
            <br />
            我們樂意為您解答
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
                聯絡方式
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-600">
                    <Icons.Mail />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">電郵</h3>
                    <p className="text-slate-600">info@starlightchildhood.hk</p>
                    <p className="text-sm text-slate-400 mt-1">
                      我們通常在 1-2 個工作日內回覆
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 text-emerald-600">
                    <Icons.Phone />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">WhatsApp</h3>
                    <p className="text-slate-600">+852 9123 4567</p>
                    <p className="text-sm text-slate-400 mt-1">
                      星期一至五 10:00 - 18:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0 text-amber-600">
                    <Icons.MessageCircle />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">即時通訊</h3>
                    <p className="text-slate-600">Facebook Messenger</p>
                    <p className="text-sm text-slate-400 mt-1">
                      回覆更快
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0 text-slate-600">
                    <Icons.MapPin />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">地址</h3>
                    <p className="text-slate-600">香港</p>
                    <p className="text-sm text-slate-400 mt-1">
                      （我們主要透過網上運作）
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-10">
                <h3 className="font-semibold text-slate-900 mb-4">關注我們</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:bg-pink-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.28-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.445.596-1.445 1.33 0 .732.649 1.329 1.445 1.329.795 0 1.445-.597 1.445-1.329 0-.734-.65-1.33-1.445-1.33z"/></svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:bg-red-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zm-15 8.238l-4.916 4.246V8.424L8.482 12.424 8.482 12.424l-4.916 4.246V8.424L.566 12.424 8.482 4.51v7.914l4.916 4.246L18.482 12.424 8.482 4.51v7.914l4.916-4.246L13.482 12.424l4.916-4.246V8.424L8.482 4.51 18.498 8.424v8.238z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                發送訊息
              </h2>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    您的姓名 *
                  </label>
                  <input
                    type="text"
                    required
                    className="input"
                    placeholder="請輸入您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    電郵地址 *
                  </label>
                  <input
                    type="email"
                    required
                    className="input"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    主題 *
                  </label>
                  <select required className="input">
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
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    訊息內容 *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="input resize-none"
                    placeholder="請輸入您的訊息..."
                  />
                </div>
                <button type="submit" className="w-full btn-primary py-4">
                  發送訊息
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-slate-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-8">
            常見問題
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
                <summary className="p-5 cursor-pointer font-medium text-slate-900 flex items-center justify-between hover:text-blue-600 transition-colors list-none">
                  {faq.question}
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">
                    <Icons.ChevronDown />
                  </span>
                </summary>
                <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
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
