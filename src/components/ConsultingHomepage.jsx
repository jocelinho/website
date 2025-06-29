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
            <span className="hidden md:inline block">
              一場深刻又行動導向的對話。
            </span>
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
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full shadow-md transition">
              預約體驗諮詢
            </button>
            <button className="border border-rose-500 text-rose-600 px-8 py-3 rounded-full transition hover:bg-rose-100">
              查看服務方案
            </button>
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
        <h2 className="text-3xl font-semibold mb-6 text-center text-rose-600">
          為什麼我提供這項服務
        </h2>
        <div className="space-y-6 text-lg text-gray-700">
          <p>
            我想協助那些真正想幫助自己、願意聽進不同意見，並採取行動改變現況的人。
          </p>
          <p>
            這不會是一場單向的建議輸出，而是一段雙向誠實的深度對話。我誠實、直接，也會挑戰你的盲點——但我也會用同樣的溫度支持你。
          </p>
          <p>
            我寧願不接沒有準備好改變的案子，也不想浪費彼此的時間。如果你準備好了，我會是你值得信任的夥伴。
          </p>
        </div>
      </section>

      {/* Expertise & Services - Redesigned */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center text-rose-600">
          專業領域與服務特色
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-amber-50 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
            <span className="text-3xl">💻</span>
            <div>
              <div className="font-bold text-lg mb-1">工程師職涯專業</div>
              <div className="text-gray-700 text-base">
                多年工程師經驗，熟悉IC與Manager不同層級的成長路徑與挑戰，協助你突破瓶頸、發揮潛能。
              </div>
            </div>
          </div>
          <div className="bg-rose-50 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
            <span className="text-3xl">🎯</span>
            <div>
              <div className="font-bold text-lg mb-1">職涯發展諮詢</div>
              <div className="text-gray-700 text-base">
                不論職涯晉升、探索人生目標，或尋找更有意義的工作方式，量身打造具建設性的行動方案。
              </div>
            </div>
          </div>
          <div className="bg-amber-50 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
            <span className="text-3xl">🤝</span>
            <div>
              <div className="font-bold text-lg mb-1">領導與帶人心法</div>
              <div className="text-gray-700 text-base">
                從Meta到新創CTO，領導風格與帶人方法歷經驗證，分享理論與實務兼具的領導心法。
              </div>
            </div>
          </div>
          <div className="bg-rose-50 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
            <span className="text-3xl">🚀</span>
            <div>
              <div className="font-bold text-lg mb-1">創業經驗分享</div>
              <div className="text-gray-700 text-base">
                軟體新創實戰經驗，從資源整合、關鍵決策到高效執行，協助你少走冤枉路。
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics I Help With - Redesigned */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-10 text-center text-rose-600">
          常見諮詢主題
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm">
            <span className="text-2xl">🔍</span>
            <div>
              <div className="font-bold">職涯迷惘與動機探索</div>
              <div className="text-gray-700 text-base">
                不知道為什麼而工作、找不到目標或動力、每天感到不快樂？我能陪你一起分析現況，找出改變的方向。
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-amber-50 rounded-xl p-5 shadow-sm">
            <span className="text-2xl">📈</span>
            <div>
              <div className="font-bold">短期目標與突破瓶頸</div>
              <div className="text-gray-700 text-base">
                想升遷、獲得主管信任、爭取新專案，卻不知如何著力？讓我們一起拆解困難，制定具體行動計畫。
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm">
            <span className="text-2xl">🛤️</span>
            <div>
              <div className="font-bold">長期規劃與目標實現</div>
              <div className="text-gray-700 text-base">
                已有明確長期目標，卻不知如何從現況邁向理想？我會協助你規劃路徑，並在過程中持續修正與追蹤。
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-amber-50 rounded-xl p-5 shadow-sm">
            <span className="text-2xl">👥</span>
            <div>
              <div className="font-bold">團隊管理與領導挑戰</div>
              <div className="text-gray-700 text-base">
                中階主管如何在上下壓力下生存、贏得團隊信任、有效溝通與帶領？我能提供實用的管理心法與溝通技巧。
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm">
            <span className="text-2xl">🧭</span>
            <div>
              <div className="font-bold">人生重大選擇分析</div>
              <div className="text-gray-700 text-base">
                面臨轉職、創業、搬遷等重大決定時，如何做出最適合自己的選擇？我會協助你建立分析框架，客觀評估，做出堅定選擇。
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Packages - Redesigned */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center text-rose-600">
          諮詢方案與收費標準
        </h2>
        <blockquote className="italic text-rose-500 text-center mb-8">
          我的收費不僅反映時間成本，更是為了篩選出真正重視自我成長、願意認真行動的你。
        </blockquote>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-2 border-rose-200 rounded-2xl p-8 bg-white flex flex-col items-center shadow-md">
            <div className="font-bold text-xl mb-2">初次體驗</div>
            <div className="text-gray-600 mb-2">30分鐘</div>
            <div className="text-rose-600 font-bold text-2xl mb-4">$3,500</div>
            <div className="text-gray-700 text-center mb-4">
              適合想初步了解諮詢風格與流程的人。
            </div>
          </div>
          <div className="border-4 border-rose-500 rounded-2xl p-8 bg-rose-50 flex flex-col items-center shadow-lg scale-105">
            <div className="font-bold text-xl mb-2">單次諮詢</div>
            <div className="text-gray-600 mb-2">90分鐘</div>
            <div className="text-rose-600 font-bold text-2xl mb-4">$7,500</div>
            <div className="text-gray-700 text-center mb-4">
              適合希望深入討論背景、個性、動機與現況，獲得具體建議的人。
            </div>
            <span className="bg-rose-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
              推薦
            </span>
          </div>
          <div className="border-2 border-rose-200 rounded-2xl p-8 bg-white flex flex-col items-center shadow-md">
            <div className="font-bold text-xl mb-2">四次諮詢</div>
            <div className="text-gray-600 mb-2">每次90分鐘</div>
            <div className="text-rose-600 font-bold text-2xl mb-4">$27,000</div>
            <div className="text-gray-700 text-center mb-4">
              適合有明確目標、需要持續追蹤與修正行動計畫的學員。
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center text-rose-600">
          關於我與人生經驗
        </h2>
        <div className="text-lg text-gray-700 space-y-4">
          <p>
            我曾在
            Facebook（Meta）任職五年，與來自不同國家、背景與個性的人共事，負責跨團隊合作與專案整合。
          </p>
          <p>
            後來我離開 Meta，創辦自己的軟體新創並擔任
            CTO，從零帶起團隊，實施每週一對一的管理制度，根據每位成員背景與動機給予真誠具建設性的成長回饋。
          </p>
          <p>
            在公司營運四年後，因為與創辦人價值觀的差異，我做出極其困難的決定，選擇離開，重新面對自己真正相信的核心。
          </p>
          <p>
            我也曾毅然從 Bay Area
            搬回台北，選擇一個不被外界定義、而是真正屬於自己的生活方式。
          </p>
        </div>
      </section>

      {/* Testimonials - Redesigned */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-semibold mb-10 text-center text-rose-600">
          學員與同事的真實回饋
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative bg-amber-50 rounded-2xl p-6 shadow-md">
            <span className="absolute -top-4 left-6 text-3xl">💬</span>
            <blockquote className="text-gray-800 italic mt-4">
              「感謝妳在壓力大且繁重的工作之餘仍細心地為團隊中的每一個成員著想，很幸運能夠成為妳團隊的一部分。」
            </blockquote>
          </div>
          <div className="relative bg-rose-50 rounded-2xl p-6 shadow-md">
            <span className="absolute -top-4 left-6 text-3xl">💬</span>
            <blockquote className="text-gray-800 italic mt-4">
              「很慶幸由妳來擔任我的主管，妳以信任為前提助人成長、以身作則、幫助團隊移除障礙，這些都讓我獲益良多！」
            </blockquote>
          </div>
          <div className="relative bg-amber-50 rounded-2xl p-6 shadow-md">
            <span className="absolute -top-4 left-6 text-3xl">💬</span>
            <blockquote className="text-gray-800 italic mt-4">
              「非常感謝妳一直都對我很有耐心，即便我犯了錯，妳也都不厭其煩地跟我溝通，一起找出問題的根源，並給我有建設性的建議，讓我能真正的解決問題和成長。」
            </blockquote>
          </div>
          <div className="relative bg-rose-50 rounded-2xl p-6 shadow-md">
            <span className="absolute -top-4 left-6 text-3xl">💬</span>
            <blockquote className="text-gray-800 italic mt-4">
              「妳建立了一個很有安全感的工作環境，並示範如何領導與影響他人，也讓我更有勇氣做出正確的選擇。」
            </blockquote>
          </div>
          <div className="relative bg-amber-50 rounded-2xl p-6 shadow-md">
            <span className="absolute -top-4 left-6 text-3xl">💬</span>
            <blockquote className="text-gray-800 italic mt-4">
              「妳對他人的付出像漣漪般擴散，帶給我許多啟發與力量。」
            </blockquote>
          </div>
          <div className="relative bg-rose-50 rounded-2xl p-6 shadow-md">
            <span className="absolute -top-4 left-6 text-3xl">💬</span>
            <blockquote className="text-gray-800 italic mt-4">
              「我從失去信心，到再次挑戰人生，都是因為妳的鼓勵與幫助。」
            </blockquote>
          </div>
          <div className="relative bg-amber-50 rounded-2xl p-6 shadow-md md:col-span-2">
            <span className="absolute -top-4 left-6 text-3xl">💬</span>
            <blockquote className="text-gray-800 italic mt-4">
              「很感激妳曾是我的 Manager，妳永遠都會是我追尋的目標。」
            </blockquote>
          </div>
        </div>
      </section>

      {/* Expertise Tags */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-4 text-center text-rose-600">
          專業領域
        </h2>
        <div className="flex flex-wrap gap-4 justify-center text-sm">
          <span className="bg-gray-200 px-4 py-2 rounded-full">
            工程師職涯（IC / Manager）
          </span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">
            跨職能職涯規劃
          </span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">
            中階主管領導與回饋
          </span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">
            軟體新創實戰經驗
          </span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">
            重大人生選擇分析
          </span>
        </div>
      </section>

      {/* Sticky CTA Button */}
      <div className="fixed bottom-6 left-0 w-full flex justify-center z-50 pointer-events-none">
        <button className="pointer-events-auto bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full shadow-lg text-lg font-bold transition focus:outline-none focus:ring-2 focus:ring-rose-400">
          立即預約諮詢
        </button>
      </div>

      <footer className="py-8 text-center text-sm text-gray-500 bg-white">
        © {new Date().getFullYear()} Yun-Chi Consulting. All rights reserved.
      </footer>
    </div>
  );
} 