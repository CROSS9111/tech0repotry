'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense, useEffect } from 'react';
import { incrementEducationViews } from '@/lib/analytics';

function EducationContent() {
  const searchParams = useSearchParams();
  const fromPhishing = searchParams.get('phishing') === 'true';
  const phishingType = searchParams.get('type') || 'login';

  useEffect(() => {
    incrementEducationViews();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        {fromPhishing && (
          <div className="bg-red-100 border border-red-400 rounded-lg p-6 mb-8">
            <div className="flex items-center">
              <div className="text-4xl mr-4">🚨</div>
              <div>
                <h2 className="text-2xl font-bold text-red-800 mb-2">
                  警告：これはフィッシングサイトでした！
                </h2>
                <p className="text-red-700 text-lg">
                  あなたは今、{phishingType === 'lp' ? '偽のランディングページによる' : '偽のログインサイトによる'}フィッシング攻撃の体験をしました。実際のサイトであれば、
                  あなたの個人情報が盗まれていた可能性があります。
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            フィッシング攻撃から身を守る方法
          </h1>

          <div className="space-y-8">
            {/* フィッシングとは */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="text-3xl mr-3">🎣</span>
                フィッシング攻撃とは？
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">
                  フィッシング攻撃とは、正規のサービスを装った偽のウェブサイトやメールを使って、
                  ユーザーの個人情報（パスワード、クレジットカード情報など）を騙し取る詐欺手法です。
                  攻撃者は本物そっくりの偽サイトを作成し、緊急性を煽ってユーザーを騙そうとします。
                </p>
              </div>
            </section>

            {/* 見分け方 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="text-3xl mr-3">🔍</span>
                フィッシングサイトの見分け方
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="font-semibold text-red-800 mb-3 flex items-center">
                    <span className="mr-2">❌</span>危険な兆候
                  </h3>
                  <ul className="text-red-700 space-y-2">
                    <li>• URLが怪しい（typosquatting）</li>
                    <li>• HTTPSではなくHTTP接続</li>
                    <li>• 緊急性を煽るメッセージ</li>
                    <li>• 「限定」「今だけ」などの煽り文句</li>
                    <li>• 「無料ダウンロード」などの誘導</li>
                    <li>• 文法やスペルの間違い</li>
                    <li>• 不自然な日本語表現</li>
                    <li>• 個人情報の即座な入力要求</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-semibold text-green-800 mb-3 flex items-center">
                    <span className="mr-2">✅</span>安全な確認方法
                  </h3>
                  <ul className="text-green-700 space-y-2">
                    <li>• 公式サイトのURLを直接入力</li>
                    <li>• SSL証明書の確認</li>
                    <li>• 送信者の正当性確認</li>
                    <li>• 二要素認証の有効化</li>
                    <li>• 定期的なパスワード変更</li>
                    <li>• セキュリティソフトの利用</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* LP型フィッシングの特徴 */}
            {phishingType === 'lp' && (
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-3xl mr-3">📄</span>
                  ランディングページ型フィッシングの特徴
                </h2>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="font-semibold text-orange-800 mb-3">LP型フィッシングの手口</h3>
                  <div className="text-orange-700 space-y-3">
                    <p>
                      <strong>ランディングページ型フィッシング</strong>は、魅力的な「無料ダウンロード」や「限定オファー」を餌にして、
                      個人情報を入力させようとする手法です。
                    </p>
                    <div className="bg-white rounded-lg p-4 mt-4">
                      <h4 className="font-semibold text-orange-800 mb-2">典型的な手口:</h4>
                      <ul className="list-disc list-inside space-y-1 text-orange-700">
                        <li>人気企業やサービスの偽サイトを作成</li>
                        <li>「無料」「限定」「今だけ」などの煽り文句</li>
                        <li>カウントダウンタイマーで緊急性を演出</li>
                        <li>ダウンロードボタンで個人情報入力ページへ誘導</li>
                        <li>本物そっくりのデザインで信頼感を演出</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* 対策方法 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="text-3xl mr-3">🛡️</span>
                対策方法
              </h2>
              <div className="space-y-4">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="font-semibold text-yellow-800 mb-3">1. URLを注意深く確認</h3>
                  <p className="text-yellow-700">
                    正規のサイトのURLを覚えておき、常にアドレスバーでURLを確認してください。
                    似たような文字（0とO、1とlなど）を使った偽URLに注意しましょう。
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-800 mb-3">2. 二要素認証を設定</h3>
                  <p className="text-blue-700">
                    パスワードだけでなく、SMSやアプリによる二要素認証を設定することで、
                    たとえパスワードが盗まれてもアカウントを保護できます。
                  </p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="font-semibold text-purple-800 mb-3">3. 怪しいメールのリンクはクリックしない</h3>
                  <p className="text-purple-700">
                    メール内のリンクではなく、ブラウザから直接公式サイトにアクセスして
                    ログインするようにしましょう。
                  </p>
                </div>
              </div>
            </section>

            {/* 被害にあった場合 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="text-3xl mr-3">🚨</span>
                被害にあった場合の対処法
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <ol className="text-red-700 space-y-3 list-decimal list-inside">
                  <li><strong>すぐにパスワードを変更</strong> - 被害を最小限に抑えるため即座に変更</li>
                  <li><strong>金融機関に連絡</strong> - 不正利用がないか確認し、必要に応じてカードを停止</li>
                  <li><strong>セキュリティソフトでスキャン</strong> - デバイスにマルウェアがないか確認</li>
                  <li><strong>関係機関に報告</strong> - 警察のサイバー犯罪相談窓口等に相談</li>
                  <li><strong>アカウントの監視</strong> - 不審なアクティビティがないか定期的に確認</li>
                </ol>
              </div>
            </section>
          </div>
        </div>

        {/* アクションボタン */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              ホームに戻る
            </Link>
            {!fromPhishing && (
              <Link
                href="/phishing"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                フィッシング体験をしてみる
              </Link>
            )}
          </div>
          
          {fromPhishing && (
            <div className="bg-green-100 border border-green-400 rounded-lg p-4 mt-6">
              <p className="text-green-800 font-semibold">
                🎉 お疲れ様でした！この体験を通じて、フィッシング攻撃の危険性を理解できたでしょうか。
                今後は今回学んだポイントを意識して、安全にインターネットを利用してください。
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function EducationPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EducationContent />
    </Suspense>
  );
}