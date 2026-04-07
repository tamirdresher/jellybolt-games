/**
 * JellyBolt Games — Shared Monetization & Ad Management
 * ======================================================
 * AdSense integration for banner, interstitial, and reward ads.
 */
const JellyBoltAds = (() => {
  const CONFIG = {
    adClient: 'ca-pub-8350556723025693',
    slots: {
      topBanner:    '8171848729',
      bottomBanner: '8171848729',
      interstitial: '5123448325',
      rewardVideo:  '5123448325'
    },
    interstitialFrequency: 2,
    cooldownMs:            60000
  };

  let _levelCount      = 0;
  let _lastInterstitial = 0;

  function init() {
    if (window.adsbygoogle) return;
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${CONFIG.adClient}`;
    s.crossOrigin = 'anonymous';
    document.head.appendChild(s);
    window.adsbygoogle = window.adsbygoogle || [];
  }

  function pushAd() {
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (_) {}
  }

  function refreshBanners() {
    document.querySelectorAll('.adsbygoogle').forEach(() => pushAd());
  }

  function showInterstitialAd(onClose) {
    _levelCount++;
    const now = Date.now();
    if (_levelCount % CONFIG.interstitialFrequency !== 0) { onClose?.(); return; }
    if (now - _lastInterstitial < CONFIG.cooldownMs)       { onClose?.(); return; }

    _lastInterstitial = now;
    const overlay = document.getElementById('jb-interstitial');
    if (!overlay) { onClose?.(); return; }

    overlay.style.display = 'flex';
    overlay.querySelector('.jb-interstitial-close')
      ?.addEventListener('click', () => {
        overlay.style.display = 'none';
        onClose?.();
      }, { once: true });

    setTimeout(() => {
      if (overlay.style.display !== 'none') {
        overlay.style.display = 'none';
        onClose?.();
      }
    }, 5000);
  }

  function showRewardVideo(onReward, onSkip) {
    console.log('[JellyBoltAds] Reward video requested');
    const granted = confirm('Watch a short ad for a bonus?');
    granted ? onReward?.() : onSkip?.();
  }

  function shareScore(gameName, score) {
    const url  = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`I scored ${score} in ${gameName}! Play now:`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  }

  return {
    CONFIG, init, pushAd, refreshBanners,
    showInterstitialAd, showRewardVideo, shareScore
  };
})();

document.addEventListener('DOMContentLoaded', () => JellyBoltAds.init());
