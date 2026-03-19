"use client";

import { useState } from "react";
import Link from "next/link";

export default function Apply({
  params,
}: {
  params: { id: string };
}) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    parentPhone: "",
    parentEmail: "",
    childName: "",
    childBirthDate: "",
    childSchool: "",
    childGrade: "",
    district1: "",
    district2: "",
    agreeTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-midnight flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 bg-starlight-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">✓</span>
          </div>
          <h1 className="font-cormorant text-3xl font-semibold text-moonlight mb-4">
            報名成功！
          </h1>
          <p className="text-moonlight/60 mb-8">
            感謝您的報名。我們已發送確認電郵至 {formData.parentEmail}。
            <br />
            請留意電郵獲取參賽編號。
          </p>
          <Link href="/" className="btn-gold">
            返回首頁
          </Link>
        </div>
      </div>
    );
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
        </div>
      </nav>

      {/* Form */}
      <section className="pt-32 pb-section bg-midnight-light">
        <div className="max-w-2xl mx-auto px-6">
          <Link
            href={`/competitions/${params.id}`}
            className="inline-flex items-center gap-2 text-moonlight/50 hover:text-starlight-gold mb-8 transition-colors"
          >
            <span>←</span>
            <span>返回比賽詳情</span>
          </Link>

          <h1 className="font-cormorant text-4xl font-semibold text-moonlight mb-2">
            比賽報名
          </h1>
          <p className="text-moonlight/60 mb-8">
            填寫以下表格完成報名（費用全免）
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Parent Info */}
            <div className="bg-midnight border border-starlight-gold/10 rounded-2xl p-6">
              <h2 className="font-cormorant text-xl font-semibold text-moonlight mb-4">
                家長/監護人資料
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-moonlight/70 text-sm mb-2">
                    姓名 *
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    required
                    value={formData.parentName}
                    onChange={handleChange}
                    className="w-full bg-midnight-light border border-starlight-gold/20 rounded-lg px-4 py-3 
                               text-moonlight focus:outline-none focus:border-starlight-gold"
                    placeholder="請輸入家長/監護人姓名"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-moonlight/70 text-sm mb-2">
                      電話 *
                    </label>
                    <input
                      type="tel"
                      name="parentPhone"
                      required
                      value={formData.parentPhone}
                      onChange={handleChange}
                      className="w-full bg-midnight-light border border-starlight-gold/20 rounded-lg px-4 py-3 
                                 text-moonlight focus:outline-none focus:border-starlight-gold"
                      placeholder="例：91234567"
                    />
                  </div>
                  <div>
                    <label className="block text-moonlight/70 text-sm mb-2">
                      電郵 *
                    </label>
                    <input
                      type="email"
                      name="parentEmail"
                      required
                      value={formData.parentEmail}
                      onChange={handleChange}
                      className="w-full bg-midnight-light border border-starlight-gold/20 rounded-lg px-4 py-3 
                                 text-moonlight focus:outline-none focus:border-starlight-gold"
                      placeholder="例：parent@email.com"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Child Info */}
            <div className="bg-midnight border border-starlight-gold/10 rounded-2xl p-6">
              <h2 className="font-cormorant text-xl font-semibold text-moonlight mb-4">
                參賽者資料
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-moonlight/70 text-sm mb-2">
                    參賽者姓名 *
                  </label>
                  <input
                    type="text"
                    name="childName"
                    required
                    value={formData.childName}
                    onChange={handleChange}
                    className="w-full bg-midnight-light border border-starlight-gold/20 rounded-lg px-4 py-3 
                               text-moonlight focus:outline-none focus:border-starlight-gold"
                    placeholder="請輸入參賽者姓名"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-moonlight/70 text-sm mb-2">
                      出生日期 *
                    </label>
                    <input
                      type="date"
                      name="childBirthDate"
                      required
                      value={formData.childBirthDate}
                      onChange={handleChange}
                      className="w-full bg-midnight-light border border-starlight-gold/20 rounded-lg px-4 py-3 
                                 text-moonlight focus:outline-none focus:border-starlight-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-moonlight/70 text-sm mb-2">
                      就讀學校
                    </label>
                    <input
                      type="text"
                      name="childSchool"
                      value={formData.childSchool}
                      onChange={handleChange}
                      className="w-full bg-midnight-light border border-starlight-gold/20 rounded-lg px-4 py-3 
                                 text-moonlight focus:outline-none focus:border-starlight-gold"
                      placeholder="選填"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-moonlight/70 text-sm mb-2">
                    年級/組別 *
                  </label>
                  <select
                    name="childGrade"
                    required
                    value={formData.childGrade}
                    onChange={handleChange}
                    className="w-full bg-midnight-light border border-starlight-gold/20 rounded-lg px-4 py-3 
                               text-moonlight focus:outline-none focus:border-starlight-gold"
                  >
                    <option value="">請選擇年級</option>
                    <option value="PREN">學前PREN組</option>
                    <option value="K1">幼稚園K.1組</option>
                    <option value="K2">幼稚園K.2組</option>
                    <option value="K3">幼稚園K.3組</option>
                    <option value="P1">小學P.1組</option>
                    <option value="P2">小學P.2組</option>
                    <option value="P3">小學P.3組</option>
                    <option value="P4">小學P.4組</option>
                    <option value="P5">小學P.5組</option>
                    <option value="P6">小學P.6組</option>
                    <option value="SEC">中學組</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Districts */}
            <div className="bg-midnight border border-starlight-gold/10 rounded-2xl p-6">
              <h2 className="font-cormorant text-xl font-semibold text-moonlight mb-4">
                選擇參賽區域
              </h2>
              <p className="text-moonlight/50 text-sm mb-4">
                每位參賽者可選擇最多2個區域
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-moonlight/70 text-sm mb-2">
                    第一選擇 *
                  </label>
                  <select
                    name="district1"
                    required
                    value={formData.district1}
                    onChange={handleChange}
                    className="w-full bg-midnight-light border border-starlight-gold/20 rounded-lg px-4 py-3 
                               text-moonlight focus:outline-none focus:border-starlight-gold"
                  >
                    <option value="">請選擇</option>
                    <option value="HK_WEST">港島 - 中西區</option>
                    <option value="HK_EAST">港島 - 東區</option>
                    <option value="HK_SOUTH">港島 - 南區</option>
                    <option value="HK_WAN_CHAI">港島 - 灣仔</option>
                    <option value="KL_EAST">九龍 - 九龍城</option>
                    <option value="KL_SOUTH">九龍 - 觀塘</option>
                    <option value="KL_WEST">九龍 - 深水埗</option>
                    <option value="KL_CENTRAL">九龍 - 黃大仙</option>
                    <option value="KL_YAU">九龍 - 油尖旺</option>
                    <option value="NT_ISLANDS">新界 - 離島</option>
                    <option value="NT_KWAI">新界 - 葵青</option>
                    <option value="NT_NORTH">新界 - 北區</option>
                    <option value="NT_SAI">新界 - 西貢</option>
                    <option value="NT_SHA">新界 - 沙田</option>
                    <option value="NT_TP">新界 - 大埔</option>
                    <option value="NT_TW">新界 - 荃灣</option>
                    <option value="NT_TM">新界 - 屯門</option>
                    <option value="NT_YL">新界 - 元朗</option>
                  </select>
                </div>
                <div>
                  <label className="block text-moonlight/70 text-sm mb-2">
                    第二選擇（選填）
                  </label>
                  <select
                    name="district2"
                    value={formData.district2}
                    onChange={handleChange}
                    className="w-full bg-midnight-light border border-starlight-gold/20 rounded-lg px-4 py-3 
                               text-moonlight focus:outline-none focus:border-starlight-gold"
                  >
                    <option value="">不選擇</option>
                    <option value="HK_WEST">港島 - 中西區</option>
                    <option value="HK_EAST">港島 - 東區</option>
                    <option value="HK_SOUTH">港島 - 南區</option>
                    <option value="HK_WAN_CHAI">港島 - 灣仔</option>
                    <option value="KL_EAST">九龍 - 九龍城</option>
                    <option value="KL_SOUTH">九龍 - 觀塘</option>
                    <option value="KL_WEST">九龍 - 深水埗</option>
                    <option value="KL_CENTRAL">九龍 - 黃大仙</option>
                    <option value="KL_YAU">九龍 - 油尖旺</option>
                    <option value="NT_ISLANDS">新界 - 離島</option>
                    <option value="NT_KWAI">新界 - 葵青</option>
                    <option value="NT_NORTH">新界 - 北區</option>
                    <option value="NT_SAI">新界 - 西貢</option>
                    <option value="NT_SHA">新界 - 沙田</option>
                    <option value="NT_TP">新界 - 大埔</option>
                    <option value="NT_TW">新界 - 荃灣</option>
                    <option value="NT_TM">新界 - 屯門</option>
                    <option value="NT_YL">新界 - 元朗</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="bg-midnight border border-starlight-gold/10 rounded-2xl p-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  required
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 rounded border-starlight-gold/30 bg-midnight-light 
                             text-starlight-gold focus:ring-starlight-gold"
                />
                <span className="text-moonlight/70 text-sm">
                  我已閱讀並同意{" "}
                  <Link href="/terms" className="text-starlight-gold hover:underline">
                    條款及細則
                  </Link>{" "}
                  及{" "}
                  <Link href="/privacy" className="text-starlight-gold hover:underline">
                    私隱政策
                  </Link>
                  ，並確認為參賽者的家長或監護人。
                </span>
              </label>
            </div>

            {/* Submit */}
            <button type="submit" className="w-full btn-gold py-4 text-lg">
              提交報名
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-midnight border-t border-starlight-gold/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-moonlight/30">
            © 2026 香港星光童學會
          </p>
        </div>
      </footer>
    </div>
  );
}
