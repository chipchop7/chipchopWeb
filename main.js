/*
 * ハンバーガーメニュー
 */
const hamburgerButton = document.querySelector('.hamburger-button');
const mainNav = document.querySelector('.main-nav');

hamburgerButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('is-active');
    mainNav.classList.toggle('is-active');
});

const navLinks = document.querySelectorAll('.main-nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburgerButton.classList.remove('is-active');
        mainNav.classList.remove('is-active');
    });
});

/*
 * スクロール連動アニメーション (Intersection Observer)
 */

// 1. アニメーションさせたい要素をすべて取得 (変更)
// '.gamelist li' (Mygame用) と '.fade-in' (home用) の両方を探す
const animatedItems = document.querySelectorAll('.gamelist li, .fade-in');

// 2. 監視（Intersection Observer）の設定
const observer = new IntersectionObserver( (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // homeとMygameで共通の .is-visible クラスを追加
            entry.target.classList.add('is-visible'); 
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 
});

// 3. すべての対象アイテムを監視
animatedItems.forEach(item => {
    observer.observe(item);
});
