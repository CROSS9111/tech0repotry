'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Stats {
  totalVisitors: number;
  phishingAttempts: number;
  lpPhishingAttempts: number;
  educationViews: number;
  conversionRate: number;
}

export default function AdminPage() {
  const [stats, setStats] = useState<Stats>({
    totalVisitors: 0,
    phishingAttempts: 0,
    lpPhishingAttempts: 0,
    educationViews: 0,
    conversionRate: 0
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    // 実際の実装では、これをサーバーサイドで処理し、
    // 適切な認証システムを使用するべきです
    const savedStats = localStorage.getItem('phishing-demo-stats');
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 簡単なデモ用パスワード（本番では絶対に使用しない）
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('パスワードが間違っています');
    }
  };

  const resetStats = () => {
    const newStats = {
      totalVisitors: 0,
      phishingAttempts: 0,
      lpPhishingAttempts: 0,
      educationViews: 0,
      conversionRate: 0
    };
    setStats(newStats);
    localStorage.setItem('phishing-demo-stats', JSON.stringify(newStats));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            管理者ログイン
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                パスワード
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="管理者パスワード"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                デモ用パスワード: admin123
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              ログイン
            </button>
          </form>
          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              ← ホームに戻る
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              管理ダッシュボード
            </h1>
            <div className="space-x-4">
              <button
                onClick={resetStats}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                統計をリセット
              </button>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                ログアウト
              </button>
            </div>
          </div>

          {/* 統計カード */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-center">
                <div className="text-3xl text-blue-600 mr-4">👥</div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-800">総訪問者数</h3>
                  <p className="text-2xl font-bold text-blue-600">{stats.totalVisitors}</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center">
                <div className="text-3xl text-red-600 mr-4">🎣</div>
                <div>
                  <h3 className="text-lg font-semibold text-red-800">ログイン型</h3>
                  <p className="text-2xl font-bold text-red-600">{stats.phishingAttempts}</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <div className="flex items-center">
                <div className="text-3xl text-orange-600 mr-4">📄</div>
                <div>
                  <h3 className="text-lg font-semibold text-orange-800">LP型</h3>
                  <p className="text-2xl font-bold text-orange-600">{stats.lpPhishingAttempts}</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center">
                <div className="text-3xl text-green-600 mr-4">📚</div>
                <div>
                  <h3 className="text-lg font-semibold text-green-800">教育ページ閲覧</h3>
                  <p className="text-2xl font-bold text-green-600">{stats.educationViews}</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <div className="flex items-center">
                <div className="text-3xl text-purple-600 mr-4">📊</div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-800">学習完了率</h3>
                  <p className="text-2xl font-bold text-purple-600">
                    {stats.conversionRate.toFixed(1)}%
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 説明セクション */}
          <div className="space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-yellow-800 mb-4">
                📋 統計について
              </h2>
              <div className="text-yellow-700 space-y-2">
                <p><strong>総訪問者数:</strong> サイトを訪問した総ユーザー数</p>
                <p><strong>ログイン型:</strong> ログイン画面型フィッシング体験を完了したユーザー数</p>
                <p><strong>LP型:</strong> ランディングページ型フィッシング体験を完了したユーザー数</p>
                <p><strong>教育ページ閲覧:</strong> 教育コンテンツを閲覧したユーザー数</p>
                <p><strong>学習完了率:</strong> フィッシング体験後に教育ページを閲覧した割合</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-800 mb-4">
                🎯 教育効果の測定
              </h2>
              <div className="text-blue-700 space-y-2">
                <p>この統計データを使用して、以下の点を評価できます：</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>学生がフィッシング攻撃にどの程度引っかかりやすいか</li>
                  <li>教育コンテンツの効果（学習完了率）</li>
                  <li>授業での参加度合い</li>
                  <li>セキュリティ意識向上の必要性</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-green-800 mb-4">
                💡 授業での活用方法
              </h2>
              <div className="text-green-700 space-y-2">
                <p>このツールは以下のような授業で活用できます：</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>情報セキュリティ基礎講座</li>
                  <li>ITリテラシー教育</li>
                  <li>サイバーセキュリティ演習</li>
                  <li>社会人向けセキュリティ研修</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}