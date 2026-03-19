import Link from "next/link";
import { notFound } from "next/navigation";

export const runtime = 'edge';

const competitions: Record<string, {
  icon: string;
  category: string;
  title: string;
  description: string;
  deadline: string;
  status: string;
  statusType: string;
  participants: number;
  ageGroups: string[];
  fee: string;
  prize: string;
  highlights: string[];
  process: { step: string; desc: string }[];
}> = {
  "art-2026-01": {
    icon: "🎨",
    category: "視藝創作",
    title: "全港兒童填色大賽 2026",
    description: "發揮創意，用色彩描繪孩子心中的世界。適合幼兒至小學各年級學生參與。",
    deadline: "2026年4月30日截止",
    status: "報名中",
    statusType: "open",
    participants: 328,
    ageGroups: ["學前PREN組", "K.1-K.3組", "P.1-P.2組", "P.3-P.4組", "P.5-P.6組"],
    fee: "免費",
    prize: "獎狀、獎牌、獎杯（自費）",
    highlights: [
      "發揮孩子無限創意",
      "全港十八區評選",
      "免費報名",
      "精美獎品可供選購",
    ],
    process: [
      { step: "STEP 1", desc: "填寫報名表" },
      { step: "STEP 2", desc: "繪製參賽作品" },
      { step: "STEP 3", desc: "上傳作品相片" },
      { step: "STEP 4", desc: "等待結果公佈" },
    ],
  },
  "music-2026-01": {
    icon: "🎹",
    category: "音樂演奏",
    title: "青少年鋼琴大賽",
    description: "為鋼琴小天才提供專業表演舞台，展示音樂才華。",
    deadline: "2026年5月15日截止",
    status: "報名中",
    statusType: "open",
    participants: 156,
    ageGroups: ["P.1-P.2組", "P.3-P.4組", "P.5-P.6組", "中學組"],
    fee: "免費",
    prize: "獎狀、獎牌、獎杯（自費）",
    highlights: [
      "專業評審標準",
      "全港十八區評選",
      "免費報名",
      "證書認可",
    ],
    process: [
      { step: "STEP 1", desc: "填寫報名表" },
      { step: "STEP 2", desc: "錄製演奏影片" },
      { step: "STEP 3", desc: "上傳影片連結" },
      { step: "STEP 4", desc: "等待結果公佈" },
    ],
  },
  "stem-2026-01": {
    icon: "🤖",
    category: "STEM科學",
    title: "小小發明家創作賽",
    description: "激發孩子對科學探索的興趣，培養創新思維。",
    deadline: "2026年5月1日截止",
    status: "報名中",
    statusType: "open",
    participants: 89,
    ageGroups: ["P.1-P.2組", "P.3-P.4組", "P.5-P.6組"],
    fee: "免費",
    prize: "獎狀、獎牌、獎杯（自費）",
    highlights: [
      "培養創新思維",
      "發揮小小科學家潛能",
      "全港十八區評選",
      "免費報名",
    ],
    process: [
      { step: "STEP 1", desc: "填寫報名表" },
      { step: "STEP 2", desc: "創作發明作品" },
      { step: "STEP 3", desc: "拍攝作品介紹影片" },
      { step: "STEP 4", desc: "上傳並等待結果" },
    ],
  },
  "speech-2026-01": {
    icon: "🎤",
    category: "朗誦演說",
    title: "三語朗誦大賽",
    description: "英語、粵語、普通話三語朗誦，培養語言表達能力。",
    deadline: "2026年4月20日截止",
    status: "報名中",
    statusType: "open",
    participants: 201,
    ageGroups: ["學前PREN組", "K.1-K.3組", "P.1-P.2組", "P.3-P.4組", "P.5-P.6組"],
    fee: "免費",
    prize: "獎狀、獎牌、獎杯（自費）",
    highlights: [
      "三語任選（英語/粵語/普通話）",
      "適合各年齡層",
      "全港十八區評選",
      "免費報名",
    ],
    process: [
      { step: "STEP 1", desc: "選擇朗誦語言" },
      { step: "STEP 2", desc: "錄製朗誦影片" },
      { step: "STEP 3", desc: "上傳影片連結" },
      { step: "STEP 4", desc: "等待結果公佈" },
    ],
  },
  "dance-2026-01": {
    icon: "💃",
    category: "舞蹈運動",
    title: "兒童舞蹈大賽",
    description: "芭蕾舞、現代舞、中國舞等多種舞蹈形式均可參加。",
    deadline: "2026年6月1日截止",
    status: "報名即將開始",
    statusType: "soon",
    participants: 0,
    ageGroups: ["K.1-K.3組", "P.1-P.2組", "P.3-P.4組", "P.5-P.6組"],
    fee: "免費",
    prize: "獎狀、獎牌、獎杯（自費）",
    highlights: [
      "多种舞蹈形式",
      "專業評審標準",
      "全港十八區評選",
      "免費報名",
    ],
    process: [
      { step: "STEP 1", desc: "選擇舞蹈類別" },
      { step: "STEP 2", desc: "錄製舞蹈影片" },
      { step: "STEP 3", desc: "上傳影片連結" },
      { step: "STEP 4", desc: "等待結果公佈" },
    ],
  },
  "writing-2026-01": {
    icon: "✍️",
    category: "創意寫作",
    title: "創意寫作比賽",
    description: "發揮想像力，創作出屬於自己的故事。",
    deadline: "2026年5月10日截止",
    status: "報名中",
    statusType: "open",
    participants: 124,
    ageGroups: ["P.1-P.2組", "P.3-P.4組", "P.5-P.6組", "中學組"],
    fee: "免費",
    prize: "獎狀、獎牌、獎杯（自費）",
    highlights: [
      "發揮創意寫作",
      "培养文字表達能力",
      "全港十八區評選",
      "免費報名",
    ],
    process: [
      { step: "STEP 1", desc: "選擇參賽組別" },
      { step: "STEP 2", desc: "撰寫創意文章" },
      { step: "STEP 3", desc: "上傳作品" },
      { step: "STEP 4", desc: "等待結果公佈" },
    ],
  },
};

export default function CompetitionDetail({
  params,
}: {
  params: { id: string };
}) {
  const competition = competitions[params.id];

  if (!competition) {
    notFound();
  }

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
            <Link href="/about" className="text-moonlight/80 hover:text-starlight-gold transition-colors">
              關於我們
            </Link>
          </div>
          <Link href={`/competitions/${params.id}/apply`} className="btn-gold text-sm">
            立即報名
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/competitions" className="inline-flex items-center gap-2 text-moonlight/50 hover:text-starlight-gold mb-8 transition-colors">
            <span>←</span>
            <span>返回比賽項目</span>
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="w-32 h-32 bg-gradient-to-br from-starlight-gold/20 to-rosegold/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <span className="text-7xl">{competition.icon}</span>
            </div>
            
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-starlight-gold/20 text-starlight-gold px-3 py-1 rounded-full text-sm">
                  {competition.category}
                </span>
                {competition.statusType === "open" && (
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                    {competition.status}
                  </span>
                )}
                {competition.statusType === "soon" && (
                  <span className="bg-starlight-gold/20 text-starlight-gold px-3 py-1 rounded-full text-sm">
                    {competition.status}
                  </span>
                )}
              </div>
              
              <h1 className="font-cormorant text-4xl md:text-5xl font-semibold text-moonlight mb-4">
                {competition.title}
              </h1>
              
              <p className="text-moonlight/70 text-lg mb-6 max-w-2xl">
                {competition.description}
              </p>
              
              <div className="flex flex-wrap gap-6 text-sm">
                <div>
                  <span className="text-moonlight/40">報名截止</span>
                  <p className="text-moonlight">{competition.deadline}</p>
                </div>
                <div>
                  <span className="text-moonlight/40">報名費用</span>
                  <p className="text-starlight-gold font-medium">{competition.fee}</p>
                </div>
                <div>
                  <span className="text-moonlight/40">已報名人數</span>
                  <p className="text-moonlight">{competition.participants > 0 ? `${competition.participants} 位` : "即將開始"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-section bg-midnight-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Highlights */}
              <div>
                <h2 className="font-cormorant text-2xl font-semibold text-moonlight mb-6">
                  比賽亮点
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {competition.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-3 text-moonlight/80">
                      <span className="w-2 h-2 bg-starlight-gold rounded-full" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="font-cormorant text-2xl font-semibold text-moonlight mb-6">
                  參賽流程
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {competition.process.map((p, i) => (
                    <div key={i} className="bg-midnight border border-starlight-gold/10 rounded-xl p-4">
                      <div className="text-starlight-gold text-sm font-medium mb-2">{p.step}</div>
                      <div className="text-moonlight/80 text-sm">{p.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Age Groups */}
              <div>
                <h2 className="font-cormorant text-2xl font-semibold text-moonlight mb-6">
                  參賽組別
                </h2>
                <div className="flex flex-wrap gap-3">
                  {competition.ageGroups.map((group, i) => (
                    <span
                      key={i}
                      className="bg-midnight border border-starlight-gold/20 text-moonlight px-4 py-2 rounded-lg text-sm"
                    >
                      {group}
                    </span>
                  ))}
                </div>
              </div>

              {/* Prize Info */}
              <div>
                <h2 className="font-cormorant text-2xl font-semibold text-moonlight mb-6">
                  獎項及獎品
                </h2>
                <div className="bg-midnight border border-starlight-gold/10 rounded-xl p-6">
                  <p className="text-moonlight/80 mb-4">
                    每位參賽者都將獲得<span className="text-starlight-gold">參賽證書</span>。
                  </p>
                  <p className="text-moonlight/80">
                    得獎者可自費選購精美<span className="text-starlight-gold">獎座、獎牌、獎狀</span>。
                  </p>
                  <div className="mt-6 pt-6 border-t border-starlight-gold/10">
                    <p className="text-moonlight/50 text-sm">
                      獎品款式將於結果公佈後提供，所有獎品均包含參賽者姓名定制。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-midnight border border-starlight-gold/10 rounded-2xl p-6 sticky top-24">
                <h3 className="font-cormorant text-xl font-semibold text-moonlight mb-6">
                  立即報名
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-moonlight/50">報名費用</span>
                    <span className="text-starlight-gold font-medium">{competition.fee}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-moonlight/50">截止日期</span>
                    <span className="text-moonlight">{competition.deadline.split("截止")[0]}</span>
                  </div>
                </div>

                <Link
                  href={`/competitions/${params.id}/apply`}
                  className="block w-full btn-gold text-center py-4 text-lg"
                >
                  立即報名
                </Link>

                <p className="text-moonlight/30 text-xs text-center mt-4">
                  報名後將收到確認電郵
                </p>
              </div>
            </div>
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
