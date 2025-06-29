import React from "react";
import { motion } from "framer-motion";
import consultingHero from '../assets/consulting-hero.jpg';

export default function ConsultingHomepage() {
  return (
    <div className="bg-white text-gray-800 font-sans leading-relaxed">
      {/* Hero Section */}
      <section className="py-32 px-6 text-center bg-gradient-to-br from-amber-100 via-white to-rose-100">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 tracking-tight text-gray-900">
            <span className="block">給真正準備改變的你，</span>
            <span className="hidden md:inline block">一場深刻又行動導向的對話。</span>
          </h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-700 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            不只是職涯教練，更像是能與你並肩前行、一起拆解人生難題的思考夥伴。
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full shadow-md transition">預約體驗諮詢</button>
            <button className="border border-rose-500 text-rose-600 px-8 py-3 rounded-full transition hover:bg-rose-100">查看服務方案</button>
          </motion.div>
        </motion.div>
      </section>

      {/* Image Placeholder */}
      <section className="bg-white py-10">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src={consultingHero}
            alt="Consulting Hero"
            className="w-full object-contain rounded-2xl shadow-md mx-auto max-h-[500px] bg-white"
          />
        </div>
      </section>

      {/* Why This */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center text-rose-600">為什麼我提供這項服務</h2>
        <div className="space-y-6 text-lg text-gray-700">
          <p>我想協助那些真正想幫助自己、願意聽進不同意見，並採取行動改變現況的人。</p>
          <p>這不會是一場單向的建議輸出，而是一段雙向誠實的深度對話。我誠實、直接，也會挑戰你的盲點——但我也會用同樣的溫度支持你。</p>
          <p>我寧願不接沒有準備好改變的案子，也不想浪費彼此的時間。如果你準備好了，我會是你值得信任的夥伴。</p>
        </div>
      </section>

      {/* Topics I Help With */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-6 text-center text-rose-600">我最常協助的主題</h2>
        <ul className="list-disc pl-6 max-w-3xl mx-auto text-lg space-y-3 text-gray-700">
          <li>對工作感到迷惘，找不到動機與方向</li>
          <li>短期內想升遷、轉組，卻不知如何突破</li>
          <li>有長期目標但缺乏清晰的行動路徑</li>
          <li>身為主管，如何平衡上下壓力與帶人挑戰</li>
          <li>正在考慮重大選擇（轉職、創業、搬遷），想釐清價值與方向</li>
        </ul>
      </section>

      {/* About Me */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center text-rose-600">關於我與人生經驗</h2>
        <div className="text-lg text-gray-700 space-y-4">
          <p>我曾在 Facebook（Meta）任職五年，與來自不同國家、背景與個性的人共事，負責跨團隊合作與專案整合。</p>
          <p>後來我離開 Meta，創辦自己的軟體新創並擔任 CTO，從零帶起團隊，實施每週一對一的管理制度，根據每位成員背景與動機給予真誠具建設性的成長回饋。</p>
          <p>在公司營運四年後，因為與創辦人價值觀的差異，我做出極其困難的決定，選擇離開，重新面對自己真正相信的核心。</p>
          <p>我也曾毅然從 Bay Area 搬回台北，選擇一個不被外界定義、而是真正屬於自己的生活方式。</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-semibold mb-6 text-center text-rose-600">學員與同事的真實回饋</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-gray-700 text-lg">
          <blockquote>「感謝妳在壓力大且繁重的工作之餘仍細心地為團隊中的每一個成員著想，很幸運能夠成為妳團隊的一部分。」</blockquote>
          <blockquote>「很慶幸由妳來擔任我的主管，妳以信任為前提助人成長、以身作則、幫助團隊移除障礙，這些都讓我獲益良多！」</blockquote>
          <blockquote>「非常感謝妳一直都對我很有耐心，即便我犯了錯，妳也都不厭其煩地跟我溝通，一起找出問題的根源，並給我有建設性的建議，讓我能真正的解決問題和成長。」</blockquote>
          <blockquote>「妳建立了一個很有安全感的工作環境，並示範如何領導與影響他人，也讓我更有勇氣做出正確的選擇。」</blockquote>
          <blockquote>「妳對他人的付出像漣漪般擴散，帶給我許多啟發與力量。」</blockquote>
          <blockquote>「我從失去信心，到再次挑戰人生，都是因為妳的鼓勵與幫助。」</blockquote>
          <blockquote>「很感激妳曾是我的 Manager，妳永遠都會是我追尋的目標。」</blockquote>
        </div>
      </section>

      {/* Expertise Tags */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-4 text-center text-rose-600">專業領域</h2>
        <div className="flex flex-wrap gap-4 justify-center text-sm">
          <span className="bg-gray-200 px-4 py-2 rounded-full">工程師職涯（IC / Manager）</span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">跨職能職涯規劃</span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">中階主管領導與回饋</span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">軟體新創實戰經驗</span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">重大人生選擇分析</span>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">準備好了嗎？</h2>
        <p className="text-lg text-gray-600 mb-6">讓我們一起開始這段有深度、具行動力的對話</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full shadow-md transition">立即預約諮詢</button>
          <button className="border border-rose-500 text-rose-600 px-8 py-3 rounded-full transition hover:bg-rose-100">查看服務方案</button>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-gray-500 bg-white">
        © {new Date().getFullYear()} Yun-Chi Consulting. All rights reserved.
      </footer>
    </div>
  );
} 