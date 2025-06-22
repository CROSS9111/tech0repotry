'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { incrementLPPhishingAttempts } from '@/lib/analytics';

export default function PhishingLP() {
  const [showWarning, setShowWarning] = useState(false);
  const router = useRouter();

  const handleDownloadClick = () => {
    // 統計を更新
    incrementLPPhishingAttempts();
    
    setShowWarning(true);
    setTimeout(() => {
      router.push('/education?phishing=true&type=lp');
    }, 3000);
  };

  if (showWarning) {
    return (
      <div className="fixed inset-0 bg-red-600 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 max-w-2xl mx-4 text-center">
          <div className="text-6xl mb-4">🚨</div>
          <h1 className="text-3xl font-bold text-red-600 mb-4">
            警告：これは詐欺サイトでした！
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            あなたは今、フィッシング攻撃の体験をしました。<br />
            実際のサイトであれば、あなたの個人情報が盗まれていた可能性があります。
          </p>
          <div className="animate-pulse text-blue-600 font-semibold">
            教育ページに移動中...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      {/* ヘッダー */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">Tech0</div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600">私たちについて</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">選ばれる理由</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">受講生の声</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">プログラム</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">応募</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">FAQ</a>
            </nav>
            <button 
              onClick={handleDownloadClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
            >
              オンライン説明会を予約する
            </button>
          </div>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            ビジネス×デジタルで<br />
            日本に創造と変革を<br />
            起こす人材へ
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            無料でスキルアップ資料をダウンロード
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleDownloadClick}
              className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-lg text-xl font-bold transition-colors shadow-lg"
            >
              📥 無料資料ダウンロード
            </button>
            <button 
              onClick={handleDownloadClick}
              className="bg-white hover:bg-gray-100 text-blue-600 px-12 py-4 rounded-lg text-xl font-bold transition-colors shadow-lg"
            >
              オンライン説明会を予約する
            </button>
          </div>
        </div>
      </section>

      {/* 緊急性を煽るセクション */}
      <section className="bg-red-50 border-l-4 border-red-500 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <div className="text-3xl mr-4">⚠️</div>
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-2">
                限定オファー - 今だけ無料！
              </h2>
              <p className="text-red-700 text-lg">
                通常5,980円の転職成功ガイドブックを<strong>48時間限定</strong>で無料配布中！
                このチャンスを逃すと二度と手に入りません。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* コンテンツセクション */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              なぜTech0が選ばれるのか
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              実績豊富な講師陣とカリキュラムで、あなたのキャリアを次のステージへ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-4">実践的カリキュラム</h3>
              <p className="text-gray-600">
                現場で使える実践的なスキルを身につけられる独自のカリキュラム
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-4">経験豊富な講師</h3>
              <p className="text-gray-600">
                業界のトップランナーから直接学べる贅沢な学習環境
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-4">転職サポート</h3>
              <p className="text-gray-600">
                卒業後も安心の充実した転職・キャリアサポート体制
              </p>
            </div>
          </div>

          {/* 怪しい特典セクション */}
          <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-yellow-800 mb-4">
              🎁 今だけの特別特典
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-green-600">✅ 転職成功ガイドブック</h4>
                <p className="text-sm text-gray-600">通常価格: ¥5,980 → 無料</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-green-600">✅ 個別キャリア相談</h4>
                <p className="text-sm text-gray-600">通常価格: ¥15,000 → 無料</p>
              </div>
            </div>
            <button 
              onClick={handleDownloadClick}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-bold transition-colors pulse"
            >
              今すぐ無料でダウンロード！
            </button>
            <p className="text-sm text-red-600 mt-2 font-semibold">
              ⏰ 残り時間: 23時間47分
            </p>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-4">Tech0</div>
              <p className="text-gray-300">
                デジタル人材育成のリーディングカンパニー
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">プログラム</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Webデザイン</a></li>
                <li><a href="#" className="hover:text-white">プログラミング</a></li>
                <li><a href="#" className="hover:text-white">データサイエンス</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">サポート</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">お問い合わせ</a></li>
                <li><a href="#" className="hover:text-white">転職サポート</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">SNS</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Tech0. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* フローティング CTA */}
      <div className="fixed bottom-4 right-4 z-50">
        <button 
          onClick={handleDownloadClick}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold shadow-lg animate-bounce"
        >
          📥 無料DL
        </button>
      </div>

      <style jsx>{`
        .pulse {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}