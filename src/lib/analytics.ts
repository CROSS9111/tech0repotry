interface Stats {
  totalVisitors: number;
  phishingAttempts: number;
  lpPhishingAttempts: number;
  educationViews: number;
  conversionRate: number;
}

const STATS_KEY = 'phishing-demo-stats';

// 統計データを取得
export function getStats(): Stats {
  if (typeof window === 'undefined') {
    return { totalVisitors: 0, phishingAttempts: 0, lpPhishingAttempts: 0, educationViews: 0, conversionRate: 0 };
  }
  
  const savedStats = localStorage.getItem(STATS_KEY);
  if (savedStats) {
    return JSON.parse(savedStats);
  }
  
  return { totalVisitors: 0, phishingAttempts: 0, lpPhishingAttempts: 0, educationViews: 0, conversionRate: 0 };
}

// 統計データを保存
export function saveStats(stats: Stats): void {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

// 訪問者数を増加
export function incrementVisitors(): void {
  const stats = getStats();
  stats.totalVisitors += 1;
  saveStats(stats);
}

// フィッシング試行数を増加
export function incrementPhishingAttempts(): void {
  const stats = getStats();
  stats.phishingAttempts += 1;
  updateConversionRate(stats);
  saveStats(stats);
}

// 教育ページ閲覧数を増加
export function incrementEducationViews(): void {
  const stats = getStats();
  stats.educationViews += 1;
  updateConversionRate(stats);
  saveStats(stats);
}

// LP型フィッシング試行数を増加
export function incrementLPPhishingAttempts(): void {
  const stats = getStats();
  stats.lpPhishingAttempts += 1;
  updateConversionRate(stats);
  saveStats(stats);
}

// 学習完了率を更新
function updateConversionRate(stats: Stats): void {
  const totalAttempts = stats.phishingAttempts + stats.lpPhishingAttempts;
  if (totalAttempts > 0) {
    stats.conversionRate = (stats.educationViews / totalAttempts) * 100;
  } else {
    stats.conversionRate = 0;
  }
}

// 統計をリセット
export function resetStats(): void {
  const emptyStats: Stats = {
    totalVisitors: 0,
    phishingAttempts: 0,
    lpPhishingAttempts: 0,
    educationViews: 0,
    conversionRate: 0
  };
  saveStats(emptyStats);
}