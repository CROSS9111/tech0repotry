'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { incrementPhishingAttempts } from '@/lib/analytics';

export default function PhishingDemo() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 統計を更新
    incrementPhishingAttempts();
    
    // 短い遅延を追加してリアリティを演出
    setTimeout(() => {
      router.push('/education?phishing=true');
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 偽のブラウザバー */}
      <div className="bg-gray-200 p-2 border-b">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600">
            🔒 https://secure-banking-login.com/signin
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="flex items-center justify-center min-h-[calc(100vh-60px)] bg-gradient-to-b from-blue-600 to-blue-800 p-8">
        <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
          {/* 偽の銀行ロゴ */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">🏦</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">セキュア銀行</h1>
            <p className="text-gray-600 text-sm">安全なオンラインバンキング</p>
          </div>

          {/* 緊急性を煽るメッセージ */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex">
              <div className="text-red-500 mr-2">⚠️</div>
              <div>
                <h3 className="text-red-800 font-semibold">セキュリティ警告</h3>
                <p className="text-red-700 text-sm">
                  不審なアクセスが検出されました。24時間以内にアカウントを確認してください。
                  確認しない場合、アカウントが凍結される可能性があります。
                </p>
              </div>
            </div>
          </div>

          {/* ログインフォーム */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="example@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                パスワード
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="パスワードを入力"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  確認中...
                </span>
              ) : (
                'ログイン'
              )}
            </button>
          </form>

          {/* 追加の信頼性を演出する要素 */}
          <div className="mt-6 text-center">
            <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
              <span>🔒 SSL暗号化</span>
              <span>🛡️ 多要素認証</span>
              <span>📱 SMS認証</span>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              このサイトは最新のセキュリティ技術で保護されています
            </p>
          </div>

          {/* 偽の信頼マーク */}
          <div className="mt-6 border-t pt-4">
            <div className="flex justify-center space-x-4">
              <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                Norton Secured
              </div>
              <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                VeriSign
              </div>
              <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                McAfee
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}