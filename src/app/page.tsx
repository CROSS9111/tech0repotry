'use client';

import { useEffect } from 'react';
import Link from "next/link";
import { incrementVisitors } from '@/lib/analytics';

export default function Home() {
  useEffect(() => {
    incrementVisitors();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            セキュリティ教育デモンストレーション
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            フィッシング攻撃の手口を安全に体験し、セキュリティ意識を高めましょう
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-red-800 mb-4">
                ⚠️ 注意事項
              </h2>
              <ul className="text-left text-red-700 space-y-2">
                <li>• これは教育目的のデモンストレーションです</li>
                <li>• 実際の認証情報は入力しないでください</li>
                <li>• 学習目的でのみ使用してください</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                📚 学習内容
              </h2>
              <ul className="text-left text-green-700 space-y-2">
                <li>• フィッシングサイトの見分け方</li>
                <li>• 安全なブラウジング方法</li>
                <li>• セキュリティ対策のベストプラクティス</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
            <Link
              href="/phishing"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center"
            >
              🎣 ログイン型フィッシング体験
            </Link>
            <Link
              href="/dl-lp"
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center"
            >
              📄 LP型フィッシング体験
            </Link>
            <Link
              href="/education"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center"
            >
              📚 セキュリティガイド
            </Link>
          </div>
        </div>

        <footer className="text-gray-500 text-sm space-y-2">
          <p>このデモンストレーションは教育目的で作成されています</p>
          <div>
            <Link
              href="/admin"
              className="text-blue-600 hover:text-blue-800 underline text-xs"
            >
              管理者画面
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
