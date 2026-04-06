import { useState, useEffect, useRef } from "react";

const translations = {
  en: {
    nav: { home: "Home", menu: "Menu", about: "About", contact: "Contact" },
    reserve: "Reserve",
    callNow: "Call to Reserve",
    callNowSub: "(323) 373-0700",
    heroTitle: "All-You-Can-Eat",
    heroTitle2: "Prime Korean BBQ",
    heroSub: "Koreatown's Best Value Since 2017",
    viewMenu: "View Menu",
    whyTitle: "Why Meat Love",
    why1Title: "Prime Quality Meats",
    why1Desc: "USDA Prime brisket, bulgogi & pork belly at All-You-Can-Eat prices you won't believe.",
    why2Title: "AYCE from $26.99",
    why2Desc: "Two menu tiers. A 2-hour feast. Unlimited banchan refills. Bring your appetite.",
    why3Title: "800+ 5-Star Reviews",
    why3Desc: "Rated 4.3 on Google with 98% recommendation rate on Facebook. LA's favorite.",
    sigTitle: "Signature Dishes",
    sigSeeMenu: "See Full Menu →",
    reviewTitle: "What Our Guests Say",
    review1: "Best value KBBQ in all of Koreatown. Prime brisket at this price is unbeatable.",
    review2: "The Kimchi Rice Lunchbox is a must. You literally can't get this anywhere else.",
    review3: "Consistent every time. Great meat, great sides, great price. We keep coming back.",
    locationTitle: "Find Us in the Heart of Koreatown",
    locationAddr: "1145 S Western Ave, Los Angeles, CA 90006",
    footerRights: "© 2025 Meat Love Korean BBQ. All Rights Reserved.",
    menuPageTitle: "Our Menu",
    menuPageSub: "All-You-Can-Eat Korean BBQ — Two Tiers, Unlimited Flavor",
    premiumTier: "Premium",
    classicTier: "Classic",
    perPerson: "/person",
    includedTitle: "Included With All AYCE",
    appetizers: "Appetizers",
    salads: "Salads",
    soups: "Rice & Hot Soup",
    banchan: "Banchan & Sides",
    banchanDesc: "Unlimited refills — Bean Sprouts, Kimchi, Radish, Japchae, Macaroni Salad, Fish Cakes & more",
    drinks: "Soju & Beer",
    drinksDesc: "Full bar available — Soju (various flavors), Beer (domestic & imported), Sake, Wine, Soft Drinks, Turkish Coffee",
    diningNotes: "Dining Notes",
    note1: "2-hour time limit per party",
    note2: "All food must be consumed on-site",
    note3: "Maximum 3 credit cards per party",
    note4: "Maximum 3 split checks per party",
    readyToFeast: "Ready to Feast?",
    aboutPageTitle: "Our Story",
    aboutP1: "Since 2017, Meat Love Korean BBQ has been serving Koreatown the best-value All-You-Can-Eat Korean BBQ experience in Los Angeles. What started as a simple mission — serve prime-quality meats at honest prices — has grown into one of LA's most beloved KBBQ destinations.",
    aboutP2: "We believe Korean BBQ is more than a meal. It's the sizzle of marbled brisket hitting the grill, the clinking of soju glasses, the laughter of friends reaching across the table for one more piece of perfectly marinated galbi. That's what Meat Love is all about.",
    feat1Title: "Prime Cuts, Honest Prices",
    feat1Desc: "We serve USDA Prime brisket and bulgogi at AYCE prices that won't break the bank. Quality you can taste in every bite.",
    feat2Title: "The Full Experience",
    feat2Desc: "Unlimited banchan, steamed egg soup, our legendary Kimchi Rice Lunchbox, and a full bar with soju, beer, and more.",
    feat3Title: "Built for Good Times",
    feat3Desc: "Spacious interior, outdoor patio, TVs for game day, and smoke-free dining with our ventilation system. Bring your crew.",
    parkingTitle: "Parking & Extras",
    park1: "$3 valet parking available",
    park2: "Street parking available nearby",
    park3: "Outdoor seating (dog-friendly!)",
    park4: "Private dining for groups",
    park5: "Reservations recommended on weekends",
    contactPageTitle: "Visit Us",
    phone: "Phone",
    email: "Email",
    address: "Address",
    hours: "Hours of Operation",
    weekendLunch: "Weekend lunch starts at noon!",
    mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday",
    fri: "Friday", sat: "Saturday", sun: "Sunday",
    lunchAvail: "Lunch Available",
    parking: "Parking",
    valetInfo: "$3 valet parking · Street parking nearby",
    followUs: "Follow Us",
    fanFav: "Fan Favorite",
  },
  kr: {
    nav: { home: "홈", menu: "메뉴", about: "소개", contact: "연락처" },
    reserve: "예약",
    callNow: "예약 전화하기",
    callNowSub: "(323) 373-0700",
    heroTitle: "무한리필",
    heroTitle2: "프라임 코리안 BBQ",
    heroSub: "2017년부터 코리아타운 최고의 가성비",
    viewMenu: "메뉴 보기",
    whyTitle: "왜 고기사랑인가",
    why1Title: "프라임 품질 고기",
    why1Desc: "USDA 프라임 차돌박이, 불고기, 삼겹살을 무한리필 가격으로 즐기세요.",
    why2Title: "무한리필 $26.99부터",
    why2Desc: "두 가지 코스. 2시간 만찬. 무한 반찬 리필. 배고프게 오세요.",
    why3Title: "800개 이상의 5성 리뷰",
    why3Desc: "구글 4.3점, 페이스북 98% 추천율. LA가 사랑하는 맛집.",
    sigTitle: "시그니처 메뉴",
    sigSeeMenu: "전체 메뉴 보기 →",
    reviewTitle: "고객 리뷰",
    review1: "코리아타운 최고의 가성비 KBBQ. 이 가격에 프라임 차돌박이는 정말 대단합니다.",
    review2: "김치볶음밥 도시락은 필수입니다. 다른 곳에서는 절대 못 먹어요.",
    review3: "언제나 변함없는 맛. 좋은 고기, 좋은 반찬, 좋은 가격. 계속 오게 됩니다.",
    locationTitle: "코리아타운 중심부에서 만나요",
    locationAddr: "1145 S Western Ave, Los Angeles, CA 90006",
    footerRights: "© 2025 고기사랑 Korean BBQ. All Rights Reserved.",
    menuPageTitle: "메뉴",
    menuPageSub: "무한리필 코리안 BBQ — 두 가지 코스, 무한한 맛",
    premiumTier: "프리미엄",
    classicTier: "클래식",
    perPerson: "/1인",
    includedTitle: "기본 포함 메뉴",
    appetizers: "에피타이저",
    salads: "샐러드",
    soups: "밥 & 국물",
    banchan: "반찬",
    banchanDesc: "무한 리필 — 콩나물, 김치, 무, 잡채, 마카로니 샐러드, 어묵 외 다수",
    drinks: "소주 & 맥주",
    drinksDesc: "풀바 운영 — 소주 (다양한 맛), 맥주 (국내 & 수입), 사케, 와인, 음료, 터키시 커피",
    diningNotes: "이용 안내",
    note1: "파티당 2시간 제한",
    note2: "매장 내 식사만 가능",
    note3: "파티당 최대 3개 카드",
    note4: "파티당 최대 3개 분할 결제",
    readyToFeast: "준비되셨나요?",
    aboutPageTitle: "우리의 이야기",
    aboutP1: "2017년부터 고기사랑 Korean BBQ는 코리아타운에서 최고의 가성비 무한리필 코리안 BBQ를 제공해 왔습니다. 정직한 가격에 프라임 품질의 고기를 제공하겠다는 단순한 사명에서 시작하여, LA에서 가장 사랑받는 KBBQ 맛집으로 성장했습니다.",
    aboutP2: "우리는 코리안 BBQ가 단순한 식사 이상이라고 믿습니다. 마블링이 좋은 차돌박이가 불판 위에서 지글거리는 소리, 소주잔이 부딪히는 소리, 완벽하게 양념된 갈비를 하나 더 집으려는 친구들의 웃음소리. 그것이 바로 고기사랑입니다.",
    feat1Title: "프라임 품질, 정직한 가격",
    feat1Desc: "USDA 프라임 차돌박이와 불고기를 부담 없는 무한리필 가격으로 즐기세요.",
    feat2Title: "완벽한 경험",
    feat2Desc: "무한 반찬, 계란찜, 전설의 김치볶음밥 도시락, 그리고 소주, 맥주 등 풀바까지.",
    feat3Title: "즐거운 시간을 위해",
    feat3Desc: "넓은 실내, 야외 테라스, 스포츠 TV, 최첨단 환기 시스템으로 쾌적한 식사. 친구들과 함께 오세요.",
    parkingTitle: "주차 & 편의시설",
    park1: "$3 발렛 파킹 가능",
    park2: "근처 노상 주차 가능",
    park3: "야외 좌석 (반려견 동반 가능!)",
    park4: "단체 프라이빗 다이닝",
    park5: "주말 예약 권장",
    contactPageTitle: "방문하기",
    phone: "전화",
    email: "이메일",
    address: "주소",
    hours: "영업시간",
    weekendLunch: "주말 점심은 정오부터!",
    mon: "월요일", tue: "화요일", wed: "수요일", thu: "목요일",
    fri: "금요일", sat: "토요일", sun: "일요일",
    lunchAvail: "점심 가능",
    parking: "주차",
    valetInfo: "$3 발렛 파킹 · 근처 노상 주차 가능",
    followUs: "팔로우하기",
    fanFav: "인기 메뉴",
  }
};

const premiumItems = [
  ["Chadol / Brisket", "차돌박이"],
  ["Beef Short Rib", "소갈비"],
  ["Marinated Beef Rib", "양념 소갈비"],
  ["Seasoned Boneless Rib", "양념 무뼈 갈비"],
  ["Beef Tongue", "우설"],
  ["Prime Steak", "프라임 스테이크"],
  ["Spicy Pork Steak", "매운 돼지 스테이크"],
  ["Mushroom Stew", "버섯전골"],
  ["Prime Beef Bulgogi", "프라임 소불고기"],
  ["Smoky Beef Belly", "훈제 차돌박이"],
  ["Teraki Beef Hot Pepper", "데리야끼 매운 소고기"],
  ["Marinated Beef Hot Pepper", "양념 매운 소고기"],
  ["Marinated Pork", "양념 돼지고기"],
  ["Pork Steak", "돼지 스테이크"],
  ["Pork Belly", "삼겹살"],
  ["Garlic Pork Belly", "마늘 삼겹살"],
  ["Spicy Pork Steak", "매운 돼지 스테이크"],
  ["Chicken Bulgogi", "닭불고기"],
  ["Spicy Chicken", "매운 닭고기"],
  ["Beef Small Intestine", "소곱창"],
  ["Beef Large Intestine", "소대창"],
  ["Pork Rinds", "돼지 껍데기"],
];

const classicItems = [
  ["Prime Beef Bulgogi", "프라임 소불고기"],
  ["Smoky Beef Belly", "훈제 차돌박이"],
  ["Marinated Beef Hot Pepper", "양념 매운 소고기"],
  ["Marinated Pork Hot Pepper", "양념 매운 돼지고기"],
  ["Pork Steak", "돼지 스테이크"],
  ["Pork Belly", "삼겹살"],
  ["Garlic Pork Belly", "마늘 삼겹살"],
  ["Spicy Pork Steak", "매운 돼지 스테이크"],
  ["Chicken Bulgogi", "닭불고기"],
  ["Spicy Chicken", "매운 닭고기"],
  ["Beef Small Intestine", "소곱창"],
  ["Beef Large Intestine", "소대창"],
  ["Pork Rinds", "돼지 껍데기"],
];

const signatureDishes = [
  { en: "Prime Beef Bulgogi", kr: "프라임 소불고기", desc_en: "Tender, perfectly marinated prime beef", desc_kr: "부드럽고 완벽하게 양념된 프라임 소고기", emoji: "🥩" },
  { en: "Smoky Beef Belly", kr: "훈제 차돌박이", desc_en: "Rich, smoky, melt-in-your-mouth", desc_kr: "풍미 가득, 입에서 살살 녹는", emoji: "🔥" },
  { en: "Garlic Pork Belly", kr: "마늘 삼겹살", desc_en: "Crispy garlic-infused pork belly", desc_kr: "바삭한 마늘향 삼겹살", emoji: "🧄" },
  { en: "Marinated Beef Rib", kr: "양념 갈비", desc_en: "Sweet & savory galbi perfection", desc_kr: "달콤하고 짭짤한 갈비의 완성", emoji: "🍖" },
  { en: "Kimchi Rice Lunchbox", kr: "김치볶음밥 도시락", desc_en: "Our legendary fan-favorite", desc_kr: "전설적인 인기 메뉴", emoji: "🍱", fanFav: true },
  { en: "Beef Tongue", kr: "우설", desc_en: "Delicate, tender, unforgettable", desc_kr: "섬세하고 부드러운 잊지 못할 맛", emoji: "👅" },
];

const appetizers = [
  ["Corn Cheese", "콘치즈"],
  ["Fried Dumpling", "군만두"],
  ["Fried Chicken w/ Spicy Sauce", "양념 치킨"],
  ["Sweet Potato", "고구마"],
];

const salads = [
  ["Lettuce Salad", "상추 샐러드"],
  ["Onion Salad w/ Ponzu", "양파 샐러드"],
  ["Chicken Salad w/ Spicy Sauce", "치킨 샐러드"],
];

const soups = [
  ["Steamed Egg Soup", "계란찜"],
  ["Spicy Beef Soup", "육개장"],
  ["Soy Bean Soup", "된장찌개"],
  ["Kimchi Rice Lunchbox", "김치볶음밥 도시락"],
];

// Icons as inline SVGs
const FireIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

// Animated section wrapper
function AnimSection({ children, className = "", style = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{ ...style, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(36px)", transition: "opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1)" }}>
      {children}
    </div>
  );
}

export default function MeatLoveWebsite() {
  const [page, setPage] = useState("home");
  const [lang, setLang] = useState("en");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const container = document.querySelector('[data-scroll-container]');
    if (!container) return;
    const handler = () => setScrolled(container.scrollTop > 60);
    container.addEventListener("scroll", handler);
    return () => container.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const container = document.querySelector('[data-scroll-container]');
    if (container) container.scrollTop = 0;
    setMobileMenu(false);
  }, [page]);

  const navigate = (p) => { setPage(p); setMobileMenu(false); };

  return (
    <div data-scroll-container style={{
      fontFamily: "'DM Sans', 'Noto Sans KR', sans-serif",
      background: "#FAF5EF",
      color: "#1A1A1A",
      minHeight: "100vh",
      overflowY: "auto",
      height: "100vh",
      position: "relative",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Noto+Sans+KR:wght@300;400;500;700;900&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        a { color: inherit; text-decoration: none; }
        .nav-link { cursor: pointer; position: relative; padding: 4px 0; font-weight: 500; font-size: 15px; letter-spacing: 0.5px; text-transform: uppercase; transition: color 0.2s; }
        .nav-link:hover { color: #E63926; }
        .nav-link.active { color: #E63926; }
        .nav-link.active::after { content: ''; position: absolute; bottom: -2px; left: 0; right: 0; height: 2px; background: #E63926; border-radius: 1px; }
        .cta-btn { display: inline-flex; align-items: center; gap: 8px; background: #E63926; color: #fff; padding: 14px 28px; border-radius: 6px; font-weight: 600; font-size: 15px; letter-spacing: 0.5px; border: none; cursor: pointer; transition: all 0.25s; text-decoration: none; font-family: inherit; }
        .cta-btn:hover { background: #c92d1e; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(230,57,38,0.3); }
        .cta-btn-outline { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: #FAF5EF; padding: 14px 28px; border-radius: 6px; font-weight: 600; font-size: 15px; letter-spacing: 0.5px; border: 2px solid rgba(250,245,239,0.5); cursor: pointer; transition: all 0.25s; text-decoration: none; font-family: inherit; }
        .cta-btn-outline:hover { border-color: #FAF5EF; background: rgba(250,245,239,0.1); }
        .section-dark { background: #1A1A1A; color: #FAF5EF; }
        .section-cream { background: #FAF5EF; color: #1A1A1A; }
        .gold { color: #D4A853; }
        .red { color: #E63926; }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
        .section-pad { padding: 80px 0; }
        @media (max-width: 768px) { .section-pad { padding: 56px 0; } }
        .heading-display { font-family: 'Playfair Display', serif; font-weight: 900; }
        .lang-toggle { display: flex; border: 1px solid rgba(250,245,239,0.3); border-radius: 4px; overflow: hidden; font-size: 13px; }
        .lang-toggle button { background: transparent; border: none; color: #FAF5EF; padding: 5px 12px; cursor: pointer; font-family: inherit; font-size: 13px; transition: all 0.2s; }
        .lang-toggle button.active { background: #E63926; color: #fff; }
        .mobile-menu-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.85); z-index: 999; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 32px; backdrop-filter: blur(8px); }
        .mobile-menu-overlay .nav-link { font-size: 24px; color: #FAF5EF; }
        .mobile-menu-close { position: absolute; top: 20px; right: 20px; background: none; border: none; color: #FAF5EF; cursor: pointer; }
        .tier-card { background: #1A1A1A; border-radius: 12px; padding: 32px; color: #FAF5EF; }
        .tier-card.premium { border: 2px solid #D4A853; }
        .tier-card.classic { border: 2px solid rgba(250,245,239,0.15); }
        .menu-item { padding: 8px 0; border-bottom: 1px solid rgba(250,245,239,0.08); display: flex; justify-content: space-between; font-size: 14px; }
        .menu-item:last-child { border-bottom: none; }
        .included-group { background: rgba(26,26,26,0.04); border-radius: 10px; padding: 24px; }
        .note-box { background: rgba(230,57,38,0.06); border-left: 3px solid #E63926; border-radius: 0 8px 8px 0; padding: 20px 24px; }
        .review-card { background: rgba(250,245,239,0.06); border-radius: 10px; padding: 28px; border: 1px solid rgba(250,245,239,0.08); }
        .dish-card { background: #1A1A1A; border-radius: 12px; overflow: hidden; transition: transform 0.3s, box-shadow 0.3s; cursor: default; }
        .dish-card:hover { transform: translateY(-6px); box-shadow: 0 12px 32px rgba(0,0,0,0.2); }
        .feature-card { background: rgba(26,26,26,0.03); border-radius: 12px; padding: 32px; border: 1px solid rgba(26,26,26,0.06); transition: transform 0.3s; }
        .feature-card:hover { transform: translateY(-4px); }
        .hours-row { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid rgba(26,26,26,0.08); font-size: 15px; }
        .hours-row:last-child { border-bottom: none; }
        .glow-text { text-shadow: 0 0 40px rgba(230,57,38,0.3); }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .hero-anim { animation: fadeInUp 0.9s cubic-bezier(.22,1,.36,1) forwards; }
        .hero-anim-delay { animation: fadeInUp 0.9s cubic-bezier(.22,1,.36,1) 0.15s forwards; opacity: 0; }
        .hero-anim-delay2 { animation: fadeInUp 0.9s cubic-bezier(.22,1,.36,1) 0.3s forwards; opacity: 0; }
        .hero-anim-delay3 { animation: fadeInUp 0.9s cubic-bezier(.22,1,.36,1) 0.45s forwards; opacity: 0; }
        @keyframes pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(230,57,38,0.4); } 50% { box-shadow: 0 0 0 10px rgba(230,57,38,0); } }
        .pulse-ring { animation: pulse 2.5s infinite; }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: scrolled ? "rgba(26,26,26,0.97)" : "rgba(26,26,26,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(250,245,239,0.08)" : "1px solid transparent",
        transition: "all 0.3s",
        padding: scrolled ? "10px 0" : "14px 0",
      }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => navigate("home")}>
            <span style={{ fontSize: 22, lineHeight: 1 }}>🔥</span>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 18, color: "#FAF5EF", lineHeight: 1.1 }}>MEAT LOVE</div>
              <div style={{ fontSize: 9, letterSpacing: 2.5, color: "#D4A853", textTransform: "uppercase", fontWeight: 500 }}>Korean BBQ · 고기사랑</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 28 }} className="desktop-nav">
            <style>{`@media (max-width: 768px) { .desktop-nav { display: none !important; } } .mobile-only { display: none !important; } @media (max-width: 768px) { .mobile-only { display: flex !important; } }`}</style>
            {["home", "menu", "about", "contact"].map(p => (
              <span key={p} className={`nav-link ${page === p ? "active" : ""}`} style={{ color: "#FAF5EF" }} onClick={() => navigate(p)}>
                {t.nav[p]}
              </span>
            ))}
            <div className="lang-toggle">
              <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
              <button className={lang === "kr" ? "active" : ""} onClick={() => setLang("kr")}>한국어</button>
            </div>
            <a href="tel:3233730700" className="cta-btn" style={{ padding: "10px 20px", fontSize: 13 }}>
              <PhoneIcon /> {t.reserve}
            </a>
          </div>

          {/* Mobile Nav */}
          <div className="mobile-only" style={{ alignItems: "center", gap: 12 }}>
            <a href="tel:3233730700" style={{ color: "#E63926", display: "flex" }}><PhoneIcon /></a>
            <button onClick={() => setMobileMenu(true)} style={{ background: "none", border: "none", color: "#FAF5EF", cursor: "pointer" }}>
              <MenuIcon />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenu && (
        <div className="mobile-menu-overlay">
          <button className="mobile-menu-close" onClick={() => setMobileMenu(false)}><CloseIcon /></button>
          {["home", "menu", "about", "contact"].map(p => (
            <span key={p} className="nav-link" onClick={() => navigate(p)}>{t.nav[p]}</span>
          ))}
          <div className="lang-toggle" style={{ marginTop: 8 }}>
            <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
            <button className={lang === "kr" ? "active" : ""} onClick={() => setLang("kr")}>한국어</button>
          </div>
          <a href="tel:3233730700" className="cta-btn pulse-ring" style={{ marginTop: 8 }}>
            <PhoneIcon /> {t.callNow}
          </a>
        </div>
      )}

      {/* PAGE CONTENT */}
      {page === "home" && <HomePage t={t} lang={lang} navigate={navigate} />}
      {page === "menu" && <MenuPage t={t} lang={lang} />}
      {page === "about" && <AboutPage t={t} lang={lang} />}
      {page === "contact" && <ContactPage t={t} lang={lang} />}

      {/* FOOTER */}
      <footer className="section-dark" style={{ padding: "48px 0 32px", borderTop: "1px solid rgba(250,245,239,0.08)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32, marginBottom: 32 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <span style={{ fontSize: 20 }}>🔥</span>
                <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 16 }}>MEAT LOVE</span>
              </div>
              <div style={{ fontSize: 13, opacity: 0.6, lineHeight: 1.7 }}>
                {lang === "en" ? "Koreatown's Best Value All-You-Can-Eat Korean BBQ since 2017." : "2017년부터 코리아타운 최고의 가성비 무한리필 코리안 BBQ."}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: 2, color: "#D4A853", marginBottom: 12, fontWeight: 600 }}>{t.hours}</div>
              <div style={{ fontSize: 13, opacity: 0.7, lineHeight: 1.9 }}>
                {t.mon}–{t.thu}: 5:00 PM – 11:30 PM<br />
                {t.fri}: 5:00 PM – 12:30 AM<br />
                {t.sat}: 12:00 PM – 12:30 AM<br />
                {t.sun}: 12:00 PM – 11:30 PM
              </div>
            </div>
            <div>
              <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: 2, color: "#D4A853", marginBottom: 12, fontWeight: 600 }}>{t.contact || "Contact"}</div>
              <div style={{ fontSize: 13, opacity: 0.7, lineHeight: 1.9 }}>
                (323) 373-0700<br />
                meatlovebbq@gmail.com<br />
                1145 S Western Ave<br />
                Los Angeles, CA 90006
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(250,245,239,0.08)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <div style={{ fontSize: 12, opacity: 0.4 }}>{t.footerRights}</div>
            <div style={{ display: "flex", gap: 16, fontSize: 13, opacity: 0.5 }}>
              <a href="https://www.instagram.com/meatlovebbq/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.facebook.com/meatlovebbq/" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.yelp.com/biz/meat-love-korean-bbq-los-angeles" target="_blank" rel="noopener noreferrer">Yelp</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ============ HOME PAGE ============ */
function HomePage({ t, lang, navigate }) {
  return (
    <>
      {/* Hero */}
      <section className="section-dark" style={{
        position: "relative", overflow: "hidden",
        padding: "120px 0 100px",
        background: "linear-gradient(135deg, #1A1A1A 0%, #2a1510 50%, #1A1A1A 100%)",
      }}>
        {/* Decorative elements */}
        <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(230,57,38,0.12) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: -100, left: -60, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,168,83,0.08) 0%, transparent 70%)" }} />

        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <div className="hero-anim" style={{ fontSize: 13, letterSpacing: 4, textTransform: "uppercase", color: "#D4A853", fontWeight: 600, marginBottom: 24 }}>
            ★ Est. 2017 · Koreatown, Los Angeles ★
          </div>
          <h1 className="heading-display hero-anim-delay glow-text" style={{ fontSize: "clamp(40px, 8vw, 72px)", lineHeight: 1.05, marginBottom: 8 }}>
            {t.heroTitle}
          </h1>
          <h1 className="heading-display hero-anim-delay glow-text" style={{ fontSize: "clamp(40px, 8vw, 72px)", lineHeight: 1.05, marginBottom: 24 }}>
            <span className="red">{t.heroTitle2}</span>
          </h1>
          <p className="hero-anim-delay2" style={{ fontSize: 18, opacity: 0.7, marginBottom: 40, fontWeight: 300, letterSpacing: 0.5 }}>
            {t.heroSub}
          </p>
          <div className="hero-anim-delay3" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:3233730700" className="cta-btn pulse-ring" style={{ fontSize: 16, padding: "16px 32px" }}>
              <PhoneIcon /> {t.callNow}
            </a>
            <button className="cta-btn-outline" onClick={() => navigate("menu")} style={{ fontSize: 16, padding: "16px 32px" }}>
              {t.viewMenu}
            </button>
          </div>
        </div>
      </section>

      {/* Why Meat Love */}
      <section className="section-cream section-pad">
        <div className="container">
          <AnimSection>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 className="heading-display" style={{ fontSize: "clamp(28px, 5vw, 40px)" }}>{t.whyTitle}</h2>
            </div>
          </AnimSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { icon: "🥩", title: t.why1Title, desc: t.why1Desc },
              { icon: "💰", title: t.why2Title, desc: t.why2Desc },
              { icon: "⭐", title: t.why3Title, desc: t.why3Desc },
            ].map((item, i) => (
              <AnimSection key={i} style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="feature-card" style={{ textAlign: "center", padding: 36 }}>
                  <div style={{ fontSize: 40, marginBottom: 16 }}>{item.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, opacity: 0.7, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="section-dark section-pad">
        <div className="container">
          <AnimSection>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div style={{ fontSize: 12, letterSpacing: 3, textTransform: "uppercase", color: "#D4A853", marginBottom: 12, fontWeight: 600 }}>
                {lang === "en" ? "From Our Grill" : "우리의 그릴에서"}
              </div>
              <h2 className="heading-display" style={{ fontSize: "clamp(28px, 5vw, 40px)" }}>{t.sigTitle}</h2>
            </div>
          </AnimSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {signatureDishes.map((dish, i) => (
              <AnimSection key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="dish-card" style={{ position: "relative" }}>
                  {dish.fanFav && (
                    <div style={{ position: "absolute", top: 12, right: 12, background: "#E63926", color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 4, letterSpacing: 0.5, zIndex: 2 }}>
                      {t.fanFav}
                    </div>
                  )}
                  <div style={{
                    height: 140,
                    background: `linear-gradient(135deg, rgba(230,57,38,${0.08 + i * 0.03}) 0%, rgba(212,168,83,${0.05 + i * 0.02}) 100%)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 56,
                  }}>
                    {dish.emoji}
                  </div>
                  <div style={{ padding: "20px 24px" }}>
                    <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 2 }}>{lang === "en" ? dish.en : dish.kr}</h3>
                    <div style={{ fontSize: 13, color: "#D4A853", marginBottom: 8 }}>{lang === "en" ? dish.kr : dish.en}</div>
                    <p style={{ fontSize: 13, opacity: 0.6 }}>{lang === "en" ? dish.desc_en : dish.desc_kr}</p>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
          <AnimSection>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <span onClick={() => navigate("menu")} style={{ color: "#D4A853", cursor: "pointer", fontSize: 15, fontWeight: 600, letterSpacing: 0.5 }}>
                {t.sigSeeMenu}
              </span>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-cream section-pad">
        <div className="container">
          <AnimSection>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 className="heading-display" style={{ fontSize: "clamp(28px, 5vw, 40px)" }}>{t.reviewTitle}</h2>
            </div>
          </AnimSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {[t.review1, t.review2, t.review3].map((rev, i) => (
              <AnimSection key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div style={{ background: "#1A1A1A", color: "#FAF5EF", borderRadius: 12, padding: 28, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ color: "#D4A853", display: "flex", gap: 2, marginBottom: 16 }}>
                      {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
                    </div>
                    <p style={{ fontSize: 15, lineHeight: 1.7, fontStyle: "italic", opacity: 0.85 }}>"{rev}"</p>
                  </div>
                  <div style={{ marginTop: 16, fontSize: 12, opacity: 0.4 }}>— {lang === "en" ? "Verified Guest" : "인증된 고객"}</div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* Location CTA */}
      <section className="section-dark" style={{ padding: "64px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <AnimSection>
            <MapPinIcon />
            <h2 className="heading-display" style={{ fontSize: "clamp(24px, 4vw, 36px)", margin: "12px 0" }}>{t.locationTitle}</h2>
            <p style={{ opacity: 0.6, marginBottom: 8 }}>{t.locationAddr}</p>
            <p style={{ opacity: 0.4, fontSize: 13, marginBottom: 28 }}>
              {lang === "en" ? "$3 Valet · Street Parking · Outdoor Seating" : "$3 발렛 · 노상 주차 · 야외 좌석"}
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:3233730700" className="cta-btn">
                <PhoneIcon /> {t.callNow}
              </a>
              <a href="https://maps.google.com/?q=1145+S+Western+Ave+Los+Angeles+CA+90006" target="_blank" rel="noopener noreferrer" className="cta-btn-outline">
                <MapPinIcon /> {lang === "en" ? "Get Directions" : "길찾기"}
              </a>
            </div>
          </AnimSection>
        </div>
      </section>
    </>
  );
}

/* ============ MENU PAGE ============ */
function MenuPage({ t, lang }) {
  const [activeTier, setActiveTier] = useState("premium");
  return (
    <>
      {/* Menu Hero */}
      <section className="section-dark" style={{
        padding: "80px 0 60px",
        background: "linear-gradient(135deg, #1A1A1A 0%, #2a1510 50%, #1A1A1A 100%)",
        textAlign: "center",
      }}>
        <div className="container">
          <div className="hero-anim" style={{ fontSize: 12, letterSpacing: 3, textTransform: "uppercase", color: "#D4A853", marginBottom: 16, fontWeight: 600 }}>
            {lang === "en" ? "All-You-Can-Eat" : "무한리필"}
          </div>
          <h1 className="heading-display hero-anim-delay" style={{ fontSize: "clamp(36px, 7vw, 56px)", marginBottom: 12 }}>{t.menuPageTitle}</h1>
          <p className="hero-anim-delay2" style={{ fontSize: 16, opacity: 0.6, maxWidth: 500, margin: "0 auto" }}>{t.menuPageSub}</p>
        </div>
      </section>

      {/* Tier Toggle */}
      <section className="section-cream section-pad">
        <div className="container">
          <AnimSection>
            <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 40 }}>
              <button onClick={() => setActiveTier("premium")} style={{
                padding: "12px 28px", borderRadius: 8, border: activeTier === "premium" ? "2px solid #D4A853" : "2px solid rgba(26,26,26,0.12)",
                background: activeTier === "premium" ? "#1A1A1A" : "transparent",
                color: activeTier === "premium" ? "#D4A853" : "#1A1A1A",
                fontWeight: 700, fontSize: 15, cursor: "pointer", fontFamily: "inherit", transition: "all 0.3s",
              }}>
                {t.premiumTier} — $31.99{t.perPerson}
              </button>
              <button onClick={() => setActiveTier("classic")} style={{
                padding: "12px 28px", borderRadius: 8, border: activeTier === "classic" ? "2px solid #E63926" : "2px solid rgba(26,26,26,0.12)",
                background: activeTier === "classic" ? "#1A1A1A" : "transparent",
                color: activeTier === "classic" ? "#E63926" : "#1A1A1A",
                fontWeight: 700, fontSize: 15, cursor: "pointer", fontFamily: "inherit", transition: "all 0.3s",
              }}>
                {t.classicTier} — $26.99{t.perPerson}
              </button>
            </div>
          </AnimSection>

          {/* Menu Items Grid */}
          <AnimSection>
            <div className="tier-card" style={{ border: activeTier === "premium" ? "2px solid #D4A853" : "2px solid #E63926", marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 24, flexWrap: "wrap", gap: 8 }}>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 28 }}>
                  {activeTier === "premium" ? t.premiumTier : t.classicTier}
                  <span style={{ color: activeTier === "premium" ? "#D4A853" : "#E63926", marginLeft: 12 }}>
                    ${activeTier === "premium" ? "31.99" : "26.99"}
                  </span>
                  <span style={{ fontSize: 14, opacity: 0.5, fontWeight: 400 }}>{t.perPerson}</span>
                </h2>
                {activeTier === "premium" && (
                  <span style={{ background: "#D4A853", color: "#1A1A1A", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 4 }}>
                    {lang === "en" ? "BEST VALUE" : "최고의 가성비"}
                  </span>
                )}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 0 }}>
                {(activeTier === "premium" ? premiumItems : classicItems).map(([en, kr], i) => (
                  <div key={i} className="menu-item">
                    <span>{lang === "en" ? en : kr}</span>
                    <span style={{ opacity: 0.4, fontSize: 13 }}>{lang === "en" ? kr : en}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimSection>

          {/* Included Items */}
          <AnimSection>
            <h2 className="heading-display" style={{ fontSize: 28, marginBottom: 24, textAlign: "center" }}>{t.includedTitle}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 24 }}>
              {[
                { title: t.appetizers, items: appetizers },
                { title: t.salads, items: salads },
                { title: t.soups, items: soups },
              ].map((group, i) => (
                <div key={i} className="included-group">
                  <h3 style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, color: "#E63926", marginBottom: 12 }}>{group.title}</h3>
                  {group.items.map(([en, kr], j) => (
                    <div key={j} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", fontSize: 14, borderBottom: "1px solid rgba(26,26,26,0.06)" }}>
                      <span>{lang === "en" ? en : kr}</span>
                      <span style={{ opacity: 0.4, fontSize: 13 }}>{lang === "en" ? kr : en}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </AnimSection>

          {/* Banchan & Drinks */}
          <AnimSection>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 32 }}>
              <div className="included-group">
                <h3 style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, color: "#D4A853", marginBottom: 8 }}>{t.banchan}</h3>
                <p style={{ fontSize: 14, opacity: 0.7, lineHeight: 1.7 }}>{t.banchanDesc}</p>
              </div>
              <div className="included-group">
                <h3 style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, color: "#D4A853", marginBottom: 8 }}>{t.drinks}</h3>
                <p style={{ fontSize: 14, opacity: 0.7, lineHeight: 1.7 }}>{t.drinksDesc}</p>
              </div>
            </div>
          </AnimSection>

          {/* Dining Notes */}
          <AnimSection>
            <div className="note-box" style={{ marginBottom: 40 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>{t.diningNotes}</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 6 }}>
                {[t.note1, t.note2, t.note3, t.note4].map((note, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, opacity: 0.8 }}>
                    <span style={{ color: "#E63926" }}><CheckIcon /></span> {note}
                  </div>
                ))}
              </div>
            </div>
          </AnimSection>

          {/* CTA */}
          <AnimSection>
            <div style={{ textAlign: "center" }}>
              <h2 className="heading-display" style={{ fontSize: 32, marginBottom: 20 }}>{t.readyToFeast}</h2>
              <a href="tel:3233730700" className="cta-btn" style={{ fontSize: 16, padding: "16px 32px" }}>
                <PhoneIcon /> {t.callNow}
              </a>
            </div>
          </AnimSection>
        </div>
      </section>
    </>
  );
}

/* ============ ABOUT PAGE ============ */
function AboutPage({ t, lang }) {
  return (
    <>
      <section className="section-dark" style={{
        padding: "80px 0 60px",
        background: "linear-gradient(135deg, #1A1A1A 0%, #2a1510 50%, #1A1A1A 100%)",
        textAlign: "center",
      }}>
        <div className="container">
          <div className="hero-anim" style={{ fontSize: 12, letterSpacing: 3, textTransform: "uppercase", color: "#D4A853", marginBottom: 16, fontWeight: 600 }}>
            {lang === "en" ? "Since 2017" : "2017년부터"}
          </div>
          <h1 className="heading-display hero-anim-delay" style={{ fontSize: "clamp(36px, 7vw, 56px)", marginBottom: 12 }}>{t.aboutPageTitle}</h1>
        </div>
      </section>

      <section className="section-cream section-pad">
        <div className="container" style={{ maxWidth: 800 }}>
          <AnimSection>
            <p style={{ fontSize: 17, lineHeight: 1.9, marginBottom: 24, opacity: 0.85 }}>{t.aboutP1}</p>
            <p style={{ fontSize: 17, lineHeight: 1.9, marginBottom: 48, opacity: 0.85 }}>{t.aboutP2}</p>
          </AnimSection>

          {/* Decorative divider */}
          <AnimSection>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
              <div style={{ flex: 1, height: 1, background: "rgba(26,26,26,0.1)" }} />
              <span style={{ fontSize: 24 }}>🔥</span>
              <div style={{ flex: 1, height: 1, background: "rgba(26,26,26,0.1)" }} />
            </div>
          </AnimSection>
        </div>

        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, marginBottom: 48 }}>
            {[
              { emoji: "🥩", title: t.feat1Title, desc: t.feat1Desc },
              { emoji: "🍱", title: t.feat2Title, desc: t.feat2Desc },
              { emoji: "🎉", title: t.feat3Title, desc: t.feat3Desc },
            ].map((f, i) => (
              <AnimSection key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="feature-card" style={{ height: "100%" }}>
                  <div style={{ fontSize: 36, marginBottom: 16 }}>{f.emoji}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{f.title}</h3>
                  <p style={{ fontSize: 14, opacity: 0.7, lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              </AnimSection>
            ))}
          </div>

          {/* Parking & Extras */}
          <AnimSection>
            <div style={{ background: "#1A1A1A", borderRadius: 12, padding: 36, color: "#FAF5EF" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 22, marginBottom: 20 }}>{t.parkingTitle}</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 10 }}>
                {[t.park1, t.park2, t.park3, t.park4, t.park5].map((p, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, opacity: 0.8 }}>
                    <span style={{ color: "#D4A853" }}><CheckIcon /></span> {p}
                  </div>
                ))}
              </div>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* CTA Band */}
      <section className="section-dark" style={{ padding: "56px 0", textAlign: "center" }}>
        <div className="container">
          <AnimSection>
            <h2 className="heading-display" style={{ fontSize: 32, marginBottom: 20 }}>{t.readyToFeast}</h2>
            <a href="tel:3233730700" className="cta-btn" style={{ fontSize: 16, padding: "16px 32px" }}>
              <PhoneIcon /> {t.callNow}
            </a>
          </AnimSection>
        </div>
      </section>
    </>
  );
}

/* ============ CONTACT PAGE ============ */
function ContactPage({ t, lang }) {
  const hoursData = [
    { day: t.mon, hrs: "5:00 PM – 11:30 PM" },
    { day: t.tue, hrs: "5:00 PM – 11:30 PM" },
    { day: t.wed, hrs: "5:00 PM – 11:30 PM" },
    { day: t.thu, hrs: "5:00 PM – 11:30 PM" },
    { day: t.fri, hrs: "5:00 PM – 12:30 AM" },
    { day: t.sat, hrs: "12:00 PM – 12:30 AM", note: t.lunchAvail },
    { day: t.sun, hrs: "12:00 PM – 11:30 PM", note: t.lunchAvail },
  ];

  return (
    <>
      <section className="section-dark" style={{
        padding: "80px 0 60px",
        background: "linear-gradient(135deg, #1A1A1A 0%, #2a1510 50%, #1A1A1A 100%)",
        textAlign: "center",
      }}>
        <div className="container">
          <div className="hero-anim" style={{ fontSize: 12, letterSpacing: 3, textTransform: "uppercase", color: "#D4A853", marginBottom: 16, fontWeight: 600 }}>
            {lang === "en" ? "Koreatown, Los Angeles" : "코리아타운, 로스앤젤레스"}
          </div>
          <h1 className="heading-display hero-anim-delay" style={{ fontSize: "clamp(36px, 7vw, 56px)", marginBottom: 20 }}>{t.contactPageTitle}</h1>
          <div className="hero-anim-delay2">
            <a href="tel:3233730700" className="cta-btn pulse-ring" style={{ fontSize: 18, padding: "18px 36px" }}>
              <PhoneIcon /> {t.callNow}
            </a>
          </div>
        </div>
      </section>

      <section className="section-cream section-pad">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
            {/* Contact Details */}
            <AnimSection>
              <div>
                <h2 className="heading-display" style={{ fontSize: 28, marginBottom: 32 }}>
                  {lang === "en" ? "Get In Touch" : "연락하기"}
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 36 }}>
                  <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ color: "#E63926", marginTop: 2 }}><PhoneIcon /></div>
                    <div>
                      <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 600, opacity: 0.5, marginBottom: 4 }}>{t.phone}</div>
                      <a href="tel:3233730700" style={{ fontSize: 18, fontWeight: 700 }}>(323) 373-0700</a>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ color: "#E63926", marginTop: 2 }}><MailIcon /></div>
                    <div>
                      <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 600, opacity: 0.5, marginBottom: 4 }}>{t.email}</div>
                      <span style={{ fontSize: 16 }}>meatlovebbq@gmail.com</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ color: "#E63926", marginTop: 2 }}><MapPinIcon /></div>
                    <div>
                      <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 600, opacity: 0.5, marginBottom: 4 }}>{t.address}</div>
                      <span style={{ fontSize: 16 }}>1145 S Western Ave<br />Los Angeles, CA 90006</span>
                    </div>
                  </div>
                </div>

                {/* Parking */}
                <div style={{ background: "rgba(26,26,26,0.04)", borderRadius: 10, padding: 20, marginBottom: 24 }}>
                  <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 600, color: "#D4A853", marginBottom: 8 }}>{t.parking}</div>
                  <p style={{ fontSize: 14, opacity: 0.7 }}>{t.valetInfo}</p>
                </div>

                {/* Social */}
                <div>
                  <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 600, opacity: 0.5, marginBottom: 12 }}>{t.followUs}</div>
                  <div style={{ display: "flex", gap: 12 }}>
                    <a href="https://www.instagram.com/meatlovebbq/" target="_blank" rel="noopener noreferrer"
                      style={{ background: "#1A1A1A", color: "#FAF5EF", padding: "10px 20px", borderRadius: 8, fontSize: 14, fontWeight: 500, transition: "background 0.2s" }}>
                      Instagram
                    </a>
                    <a href="https://www.facebook.com/meatlovebbq/" target="_blank" rel="noopener noreferrer"
                      style={{ background: "#1A1A1A", color: "#FAF5EF", padding: "10px 20px", borderRadius: 8, fontSize: 14, fontWeight: 500, transition: "background 0.2s" }}>
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </AnimSection>

            {/* Hours */}
            <AnimSection style={{ transitionDelay: "0.15s" }}>
              <div>
                <h2 className="heading-display" style={{ fontSize: 28, marginBottom: 32 }}>
                  <ClockIcon /> <span style={{ marginLeft: 8 }}>{t.hours}</span>
                </h2>
                <div style={{ background: "#1A1A1A", borderRadius: 12, padding: 28, color: "#FAF5EF" }}>
                  {hoursData.map((row, i) => (
                    <div key={i} style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "13px 0",
                      borderBottom: i < hoursData.length - 1 ? "1px solid rgba(250,245,239,0.08)" : "none",
                    }}>
                      <span style={{ fontWeight: 500 }}>{row.day}</span>
                      <div style={{ textAlign: "right" }}>
                        <span style={{ opacity: 0.8 }}>{row.hrs}</span>
                        {row.note && (
                          <div style={{ fontSize: 11, color: "#D4A853", marginTop: 2 }}>★ {row.note}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 16, background: "rgba(212,168,83,0.1)", borderRadius: 8, padding: "12px 16px", textAlign: "center" }}>
                  <span style={{ fontSize: 14, color: "#D4A853", fontWeight: 600 }}>☀️ {t.weekendLunch}</span>
                </div>
              </div>
            </AnimSection>
          </div>

          {/* Map */}
          <AnimSection>
            <div style={{ marginTop: 48, borderRadius: 12, overflow: "hidden", border: "2px solid rgba(26,26,26,0.08)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.0!2d-118.309!3d34.046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b8!2sMeat+Love+Korean+BBQ!5e0!3m2!1sen!2sus!4v1"
                width="100%" height="350" style={{ border: 0, display: "block" }}
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Meat Love Korean BBQ Location"
              />
            </div>
          </AnimSection>

          {/* Directions CTA */}
          <AnimSection>
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <a href="https://maps.google.com/?q=1145+S+Western+Ave+Los+Angeles+CA+90006" target="_blank" rel="noopener noreferrer" className="cta-btn" style={{ background: "#1A1A1A" }}>
                <MapPinIcon /> {lang === "en" ? "Get Directions" : "길찾기"}
              </a>
            </div>
          </AnimSection>
        </div>
      </section>
    </>
  );
}
