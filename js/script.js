// ═══════════════════════════════════════════════════════════
//  SHREEJI TRADERS — COMPLETE JS ENGINE
// ═══════════════════════════════════════════════════════════

// ─── STATE ────────────────────────────────────────────────
const ST = {
    user: null, // {name, email, role:'admin'|'user'|'guest', trialStart}
    settings: {
        dealerEnabled: true,
        guestEnabled: true,
        inquiryEnabled: true,
        heroVisible: true,
        testiVisible: true,
        aiDealerEnabled: true,
        trialDays: 7,
        guestMsg: '⚠️ Demo Mode — You are browsing as a guest. Responses are for demonstration. Register for real bookings and full access.'
    },
    products: [
        { id: 'p1', title: 'Singer SS 9900 Computerized', brand: 'Singer', model: 'SS 9900', cat: 'computerized', badge: 'ICONIC', desc: 'Singer\'s heavy-duty champion built for continuous high-volume production with legendary durability.', tags: ['Heavy Duty', 'High Volume', 'Durable', 'Legacy Brand'], icon: './assest/image/singer_ss9900.png' },/*🌟*/
        { id: 'p2', title: 'Jack A4C AI Computerized', brand: 'Jack', model: 'A4C', cat: 'computerized', badge: 'ADVANCED', desc: 'Advanced computerized lockstitch with programmable stitch patterns and LED control panel.', tags: ['5500 RPM', 'Computerized', 'LED Panel', 'Programmable'], icon: './assest/image/jack_a4c.png' },/*💻*/
        { id: 'p3', title: 'Jack F6 Computerized', brand: 'Jack', model: 'F64', cat: 'computerized', badge: 'BESTSELLER', desc: 'High-speed direct-drive lockstitch. The gold standard for garment factories across India.', tags: ['5500 RPM', 'Direct Drive', 'Auto Trimmer', 'Energy Saving'], icon: './assest/image/jack_f6.png' },/*🧵*/
        { id: 'p4', title: 'Jack F4 Computerized', brand: 'Jack', model: 'F4', cat: 'computerized', badge: 'COMPUTERIZED', desc: 'Advanced automatic machine with electronic feeding for thick and multi-layer fabric handling.', tags: ['Auto Feed', 'Electronic', 'Heavy Fabric', 'Smart'], icon: './assest/image/jack_f4.png' },/*🖥️*/
        { id: 'p5', title: 'Jack A2C AutoCutComputerized', brand: 'Jack', model: 'A2C', cat: 'computerized', badge: 'VALUE', desc: 'High-speed overlocking machine for clean edge finishing. Perfect for knitwear and casualwear production.', tags: ['Overlock', '5-Thread', 'High Speed', 'Edge Finish'], icon: './assest/image/jack_a2c.png' },/*🌀*/
        { id: 'p6', title: 'Primex PX-10 Computerized', brand: 'Primex', model: 'PX-10', cat: 'computerized', badge: 'COMPUTERIZED', desc: 'Excellent value industrial machine offering Japanese-grade performance at accessible pricing.', tags: ['Cost Effective', 'Industrial Grade', 'Reliable', 'Easy Service'], icon: './assest/image/primex_px-10.png' },/*🔩*/
        { id: 'p7', title: 'Juki DDL-8700 Industrial', brand: 'Juki', model: 'DDL-8700', cat: 'industrial', badge: 'PREMIUM', desc: 'Japanese precision engineering for high-volume continuous production. Legendary reliability.', tags: ['5500 RPM', 'Japanese', 'Silent', 'Heavy Duty'], icon: './assest/image/juki_ddl-8700.png' },/*⚙️*/
        { id: 'p8', title: 'Brother C-111-3 Industrial', brand: 'Brother', model: 'C-111-3', cat: 'industrial', badge: 'RELIABLE', desc: 'Trusted Brother industrial workhorse for medium to heavy fabrics with consistent stitch quality.', tags: ['5000 RPM', 'Multi-Fabric', 'Low Noise', 'Reliable'], icon: './assest/image/brother_c-111-3.png' },/*🎯*/
        { id: 'p9', title: 'Primex 6150 Industrial Lockstitch', brand: 'Primex', model: '6150', cat: 'industrial', badge: 'POPULAR', desc: 'Versatile industrial lockstitch offering smooth performance for garment and textile production.', tags: ['5500 RPM', 'Versatile', 'Industrial', 'Auto Lubrication'], icon: './assest/image/primex_6150.png' },/*🔧*/
        { id: 'p10', title: 'Swami Domestic Machine', brand: 'Swami', model: 'Swami', cat: 'domestic', badge: 'TRUSTED', desc: 'Trusted Indian brand offering sturdy industrial machines designed for tough daily production environments.', tags: ['Made in India', 'Sturdy', 'Low Maintenance', 'Affordable'], icon: './assest/image/swami.png' },/*🏠*/
        { id: 'p11', title: 'Arun Swami Domestic Machine', brand: 'Arun Swami', model: 'Arun Swami', cat: 'domestic', badge: 'TRUSTED', desc: 'Trusted Indian brand offering sturdy industrial machines designed for tough daily production environments.', tags: ['Made in India', 'Sturdy', 'Low Maintenance', 'Affordable'], icon: './assest/image/arun_swami.png' },/*🏭*/
        { id: 'p11', title: 'Arun Domestic Machine', brand: 'Arun', model: 'Arun', cat: 'domestic', badge: 'TRUSTED', desc: 'Trusted Indian brand offering sturdy industrial machines designed for tough daily production environments.', tags: ['Made in India', 'Sturdy', 'Low Maintenance', 'Affordable'], icon: './assest/image/arun_swami.png' },/*./assest/image/🏠*/
        { id: 'p12', title: 'Singer Domestic Machine', brand: 'Singer', model: 'Singer Classic', cat: 'domestic', badge: 'DOMESTIC', desc: 'Reliable domestic sewing machine for home users. Perfect for daily stitching and light tailoring.', tags: ['Domestic', 'Home Use', 'Quiet', 'Compact'], icon: './assest/image/singer_classic.png' },/*🏠*/
        { id: 'p12', title: 'USHA Domestic Machine', brand: 'USHA', model: 'USHA Classic', cat: 'domestic', badge: 'DOMESTIC', desc: 'Reliable domestic sewing machine for home users. Perfect for daily stitching and light tailoring.', tags: ['Domestic', 'Home Use', 'Quiet', 'Compact'], icon: './assest/image/usha_classic.png' },/*🏠*/
        { id: 'p13', title: 'JUKI Interlock MC', brand: 'Juki', model: 'Juki MC Interlock', cat: 'overlock', badge: 'OVERLOCK', desc: 'Professional interlock/coverstitch for knitwear, sportswear and stretch fabric finishing.', tags: ['Interlock', 'Knitwear', 'Multi-Thread', 'Stretch Fabric'], icon: './assest/image/juki_interlock.png' },/*🔄*/
    ],
    parts: [
        { id: 'pt1', name: 'Industrial Needles (All Sizes)', icon: '🪡', cat: 'needles' },
        { id: 'pt2', name: 'Rotary Hooks & Drivers', icon: '🔩', cat: 'motion' },
        { id: 'pt3', name: 'Bobbins (Metal & Plastic)', icon: '🔘', cat: 'motion' },
        { id: 'pt4', name: 'Servo Motors (All Wattage)', icon: '⚡', cat: 'electrical' },
        { id: 'pt5', name: 'Motor Foot Paddles', icon: '🦶', cat: 'electrical' },
        { id: 'pt6', name: 'Drive Belts (All Sizes)', icon: '🔗', cat: 'motion' },
        { id: 'pt7', name: 'LED Machine Lights', icon: '💡', cat: 'electrical' },
        { id: 'pt8', name: 'Machine Tables (Model-Specific)', icon: '🪑', cat: 'accessories' },
        { id: 'pt9', name: 'Machine Stands', icon: '🏗️', cat: 'accessories' },
        { id: 'pt10', name: 'Machine Covers', icon: '🛡️', cat: 'accessories' },
        { id: 'pt11', name: 'Thread Accessories', icon: '🧵', cat: 'accessories' },
        { id: 'pt12', name: 'Industrial Attachments', icon: '🔩', cat: 'motion' },
        { id: 'pt13', name: 'Machine Oils (All Types)', icon: '🧴', cat: 'oils' },
        { id: 'pt14', name: 'Control Panels & PCBs', icon: '🖥️', cat: 'electrical' },
        { id: 'pt15', name: 'Presser Foot Sets', icon: '👣', cat: 'accessories' },
        { id: 'pt16', name: 'Tension Springs', icon: '🌀', cat: 'motion' },
        { id: 'pt17', name: 'Lubrication Oils (JUKI)', icon: '🫙', cat: 'oils' },
        { id: 'pt18', name: 'Feed Dogs (All Models)', icon: '⚙️', cat: 'motion' }
    ],
    leads: [
        { name: 'Raj Sharma', type: 'Machine Purchase', msg: 'Need 20x Jack A4 for new factory', date: '2025-06-20' },
        { name: 'Priya Modi', type: 'AMC Contract', msg: 'AMC for 50 machines, Surat factory', date: '2025-06-21' },
        { name: 'Suresh K.', type: 'Spare Parts', msg: 'Juki DDL-8700 needles, urgent', date: '2025-06-22' },
        { name: 'Factory Direct', type: 'Emergency Repair', msg: '3 machines down, need technician today', date: '2025-06-23' },
        { name: 'Neha Jain', type: 'Factory Setup', msg: 'New 100-machine garment factory setup', date: '2025-06-24' },
    ],
    users: [
        { id: 'u1', name: 'Admin User', email: 'admin@shreeji.com', role: 'admin', status: 'active', joined: '1998-01-01' },
        { id: 'u2', name: 'Rajesh Kumar', email: 'rajesh@factory.com', role: 'user', status: 'trial', joined: '2025-06-15' },
        { id: 'u3', name: 'Priya Shah', email: 'priya@textile.com', role: 'user', status: 'active', joined: '2025-05-10' },
        { id: 'u4', name: 'Guest User 1', email: '—', role: 'guest', status: 'guest', joined: '2025-06-24' },
        { id: 'u5', name: 'Mohammed Ali', email: 'mali@export.com', role: 'user', status: 'expired', joined: '2025-05-01' },
    ],
    dealerApps: [
        { id: 'da1', name: 'Ankit Patel', biz: 'Patel Sewing Center', loc: 'Ahmedabad', invest: '₹5 Lakh', status: 'pending' },
        { id: 'da2', name: 'Sunita Rao', biz: 'Rao Traders', loc: 'Bangalore', invest: '₹8 Lakh', status: 'approved' },
        { id: 'da3', name: 'Vikas Gupta', biz: 'Gupta Machines', loc: 'Delhi', invest: '₹3 Lakh', status: 'rejected' },
        { id: 'da4', name: 'Meena Joshi', biz: 'Joshi Enterprises', loc: 'Pune', invest: '₹6 Lakh', status: 'pending' },
        { id: 'da5', name: 'Ramesh Nair', biz: 'Kerala Sewing', loc: 'Kochi', invest: '₹4 Lakh', status: 'pending' },
    ],
    chatHistory: []
};

// Persist settings in sessionStorage
function saveState() { try { sessionStorage.setItem('st_settings', JSON.stringify(ST.settings)); sessionStorage.setItem('st_products', JSON.stringify(ST.products)); sessionStorage.setItem('st_parts', JSON.stringify(ST.parts)); } catch (e) { } }
function loadState() { try { const s = sessionStorage.getItem('st_settings'); if (s) ST.settings = Object.assign(ST.settings, JSON.parse(s)); const p = sessionStorage.getItem('st_products'); if (p) ST.products = JSON.parse(p); const pt = sessionStorage.getItem('st_parts'); if (pt) ST.parts = JSON.parse(pt); } catch (e) { } }

// ─── LOADER ───────────────────────────────────────────────
let ldPct = 0;
const ldBar = document.getElementById('ld-bar');
const ldPctEl = document.getElementById('ld-pct');
const loaderEl = document.getElementById('loader');
const ldInt = setInterval(() => {
    ldPct += Math.random() * 14 + 2;
    if (ldPct >= 100) {
        ldPct = 100; clearInterval(ldInt);
        ldBar.style.width = '100%'; ldPctEl.textContent = '100%';
        setTimeout(() => {
            loaderEl.style.opacity = '0';
            setTimeout(() => { loaderEl.style.display = 'none'; initAnimations(); }, 700);
        }, 400);
    }
    ldBar.style.width = Math.min(ldPct, 100) + '%';
    ldPctEl.textContent = Math.floor(Math.min(ldPct, 100)) + '%';
}, 90);

// ─── CURSOR ───────────────────────────────────────────────
const curDot = document.getElementById('cursor-dot');
const curRing = document.getElementById('cursor-ring');
let cx = 0, cy = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => {
    cx = e.clientX; cy = e.clientY;
    curDot.style.left = cx + 'px'; curDot.style.top = cy + 'px';
});
(function animCursor() {
    rx += (cx - rx) * 0.12; ry += (cy - ry) * 0.12;
    curRing.style.left = rx + 'px'; curRing.style.top = ry + 'px';
    requestAnimationFrame(animCursor);
})();
document.querySelectorAll('a,button,.prod-card,.part-card,.ind-card').forEach(el => {
    el.addEventListener('mouseenter', () => { curRing.style.width = '56px'; curRing.style.height = '56px'; curRing.style.borderColor = 'rgba(212,175,55,.9)'; });
    el.addEventListener('mouseleave', () => { curRing.style.width = '36px'; curRing.style.height = '36px'; curRing.style.borderColor = 'rgba(212,175,55,.5)'; });
});

// ─── SCROLL ───────────────────────────────────────────────
const progressBar = document.getElementById('progress-bar');
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    const st = window.scrollY, dh = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (st / dh * 100) + '%';
    navbar.classList.toggle('scrolled', st > 60);
    // User bar offset
    const ub = document.getElementById('user-bar');
    if (ub.classList.contains('show')) navbar.style.top = '37px'; else navbar.style.top = '0';
});

// ─── PARTICLES ────────────────────────────────────────────
const pCont = document.getElementById('hero-particles');
for (let i = 0; i < 28; i++) {
    const p = document.createElement('div');
    p.className = 'hpart';
    const sz = Math.random() * 3 + 1;
    const colors = ['rgba(212,175,55,', 'rgba(37,99,235,', 'rgba(255,255,255,'];
    const col = colors[Math.floor(Math.random() * colors.length)];
    p.style.cssText = `left:${Math.random() * 100}%;width:${sz}px;height:${sz}px;background:${col}0.6);animation-duration:${Math.random() * 14 + 8}s;animation-delay:${Math.random() * 12}s;`;
    pCont.appendChild(p);
}

// ─── REVEAL ON SCROLL ─────────────────────────────────────
const revObs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => { if (e.isIntersecting) setTimeout(() => e.target.classList.add('vis'), i * 55); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el => revObs.observe(el));

// ─── COUNTER ANIMATION ────────────────────────────────────
function animCounter(el) {
    const target = parseInt(el.dataset.target);
    const isSuffix = el.classList.contains('hs-num');
    const originalText = el.textContent.trim();
    const suffix = originalText.match(/[+%]+$/) ? originalText.match(/[+%]+$/)[0] : '';
    // const suffix = !isSuffix ? '+' : '';
    let cur = 0; const dur = 1800; const step = target / (dur / 16);
    const t = setInterval(() => {
        cur += step;
        if (cur >= target) { cur = target; clearInterval(t); }
        el.textContent = Math.floor(cur).toLocaleString('en-IN') + suffix;
    }, 16);
}
const ctObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.querySelectorAll('[data-target]').forEach(el => animCounter(el));
            ctObs.unobserve(e.target);
        }
    });
}, { threshold: 0.25 });
document.querySelectorAll('#hero-stats, #about-counters').forEach(el => ctObs.observe(el));

// ─── HERO ANIMATIONS ──────────────────────────────────────
function initAnimations() {
    // Text reveal
    document.querySelectorAll('.hero-h1 .line-inner').forEach((el, i) => {
        setTimeout(() => el.classList.add('revealed'), 400 + i * 130);
    });
    setTimeout(() => { document.getElementById('hero-sub').classList.add('revealed'); }, 500);
    setTimeout(() => { document.getElementById('hero-ctas').classList.add('revealed'); }, 700);
    setTimeout(() => { document.getElementById('hero-stats').classList.add('revealed'); }, 900);

    setTimeout(() => {
        // GSAP if loaded
        if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
            gsap.registerPlugin(ScrollTrigger);
            gsap.from('.hv-card', { x: 80, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 1.0 });
            // Parallax hero
            gsap.to('.hero-bg-grad', { y: 80, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
            gsap.to('.hero-grid-bg', { y: 40, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
            // Floating orbits
            gsap.to('#orbit-wrap', { rotation: 360, duration: 80, repeat: -1, ease: 'none', transformOrigin: 'center center' });
        }
    }, 500);
}

// ─── AUTH SYSTEM ──────────────────────────────────────────
// function openAuth(tab) {
//     document.getElementById('auth-modal').classList.add('open');
//     switchAuthTab(tab || 'login');
// }
// function closeAuth() { document.getElementById('auth-modal').classList.remove('open'); }
// function switchAuthTab(tab) {
//     document.getElementById('auth-login-form').style.display = tab === 'login' ? 'block' : 'none';
//     document.getElementById('auth-register-form').style.display = tab === 'register' ? 'block' : 'none';
//     document.getElementById('tab-login').classList.toggle('active', tab === 'login');
//     document.getElementById('tab-register').classList.toggle('active', tab === 'register');
// }
// document.getElementById('auth-modal').addEventListener('click', function (e) { if (e.target === this) closeAuth(); });

// function doLogin() {
//     const email = document.getElementById('login-email').value.trim();
//     const pass = document.getElementById('login-pass').value.trim();
//     if (!email || !pass) { showToast('Please fill in all fields.', 'error'); return; }
//     // Admin check
//     if (email === 'admin@shreeji.com' && pass === 'admin123') {
//         setUser({ name: 'Admin', email, role: 'admin' });
//         closeAuth(); showToast('Welcome back, Admin! 🔑', 'gold'); return;
//     }
//     // Regular user (in production: validate vs MongoDB)
//     setUser({ name: email.split('@')[0], email, role: 'user', trialStart: new Date().toISOString() });
//     closeAuth(); showToast('Welcome back! ✅');
// }

// function doRegister() {
//     const name = document.getElementById('reg-name').value.trim();
//     const email = document.getElementById('reg-email').value.trim();
//     const phone = document.getElementById('reg-phone').value.trim();
//     const pass = document.getElementById('reg-pass').value.trim();
//     if (!name || !email || !pass) { showToast('Please fill all required fields.', 'error'); return; }
//     setUser({ name, email, phone, role: 'trial', trialStart: new Date().toISOString() });
//     closeAuth(); showToast('Account created! Your 7-day trial has started. 🎉', 'gold');
// }

// function doGuest() {
//     if (!ST.settings.guestEnabled) { showToast('Guest mode is currently disabled.', 'error'); closeAuth(); return; }
//     setUser({ name: 'Guest', email: '', role: 'guest' });
//     closeAuth(); showToast('Browsing in guest / demo mode.');
// }

// function logout() {
//     ST.user = null;
//     document.getElementById('user-bar').classList.remove('show');
//     document.getElementById('ub-admin-btn').style.display = 'none';
//     document.querySelector('.nav-actions').innerHTML = `
// <button class="nav-btn-ghost" onclick="openAuth('login')">Sign In</button>
// <button class="nav-btn-gold" onclick="openAuth('register')">Get Quote</button>`;
//     showToast('You have been signed out.');
//     renderDealer();
// }

// function setUser(user) {
//     ST.user = user;
//     const ub = document.getElementById('user-bar');
//     ub.classList.add('show');
//     document.getElementById('ub-name').textContent = 'Hi, ' + user.name;
//     const badge = document.getElementById('ub-badge');
//     if (user.role === 'admin') { badge.className = 'user-badge badge-admin'; badge.textContent = 'ADMIN'; document.getElementById('ub-admin-btn').style.display = 'inline'; }
//     else if (user.role === 'trial') { badge.className = 'user-badge badge-trial'; badge.textContent = 'TRIAL'; }
//     else if (user.role === 'guest') { badge.className = 'user-badge badge-guest'; badge.textContent = 'GUEST'; document.getElementById('chat-guest-banner').style.display = 'block'; }
//     else { badge.className = 'user-badge badge-user'; badge.textContent = 'USER'; }
//     // Trial info
//     if (user.role === 'trial' && user.trialStart) {
//         const days = ST.settings.trialDays;
//         const exp = new Date(new Date(user.trialStart).getTime() + days * 86400000);
//         const now = new Date();
//         const rem = Math.max(0, Math.ceil((exp - now) / 86400000));
//         document.getElementById('ub-trial-info').style.display = 'inline';
//         document.getElementById('ub-trial-info').textContent = `Trial: ${rem} day${rem !== 1 ? 's' : ''} remaining`;
//         if (rem === 0) setTimeout(() => document.getElementById('trial-expired').classList.add('show'), 2000);
//     }
//     // Update nav
//     document.querySelector('.nav-actions').innerHTML = `
// <span style="font-size:12px;color:var(--gray);">${user.name}</span>
// <button class="nav-btn-gold" onclick="openAuth('login')">Dashboard</button>`;
//     renderDealer();
//     updateChatGuestBanner();
//     navbar.style.top = '37px';
// }

// function updateChatGuestBanner() {
//     const b = document.getElementById('chat-guest-banner');
//     if (ST.user && ST.user.role === 'guest') { b.style.display = 'block'; b.innerHTML = ST.settings.guestMsg + ' <a href="#" onclick="openAuth(\'register\')" style="color:var(--gold);">Register →</a>'; }
//     else b.style.display = 'none';
// }

/**
 * Shreeji Traders - Core Auth Frontend Module (script.js)
 * Make sure your Node.js/MongoDB server code is saved in a completely separate file (e.g., server.js)
 */

// 1. ALL SYSTEM CONFIGS & DOM CONFIG DEFINED FIRST (Fixes Initialization Error)
const DOM = {
    modal: () => document.getElementById('auth-modal'),
    forms: {
        login: () => document.getElementById('auth-login-form'),
        register: () => document.getElementById('auth-register-form')
    },
    tabs: {
        login: () => document.getElementById('tab-login'),
        register: () => document.getElementById('tab-register')
    },
    navActions: () => document.querySelector('.nav-actions'),
    userBar: {
        wrapper: () => document.getElementById('user-bar'),
        name: () => document.getElementById('ub-name'),
        badge: () => document.getElementById('ub-badge'),
        adminBtn: () => document.getElementById('ub-admin-btn'),
        trialInfo: () => document.getElementById('ub-trial-info'),
        expired: () => document.getElementById('trial-expired')
    },
    banners: {
        chatGuest: () => document.getElementById('chat-guest-banner'),
        navbar: () => document.querySelector('.navbar')
    }
};

window.ST = window.ST || {};
if (!window.ST.settings) {
    window.ST.settings = {
        guestEnabled: true,
        trialDays: 7,
        guestMsg: "You are previewing the platform."
    };
}

// Change this URL if your Node/Express server runs on a different port than 5000
const API_BASE_URL = 'http://localhost:5000/api/auth';

// 2. MODAL INTERFACE FUNCTIONS
function openAuth(tab = 'login') {
    DOM.modal()?.classList.add('open');
    switchAuthTab(tab);
}

function closeAuth() {
    DOM.modal()?.classList.remove('open');
}

function switchAuthTab(tab) {
    const isLogin = tab === 'login';
    if (DOM.forms.login()) DOM.forms.login().style.display = isLogin ? 'block' : 'none';
    if (DOM.forms.register()) DOM.forms.register().style.display = isLogin ? 'none' : 'block';
    DOM.tabs.login()?.classList.toggle('active', isLogin);
    DOM.tabs.register()?.classList.toggle('active', !isLogin);
}

// 3. ASYNC MONGODB ROUTING ACTIONS
async function doLogin(event) {
    if (event) event.preventDefault();

    const email = document.getElementById('login-email')?.value.trim().toLowerCase();
    const pass = document.getElementById('login-pass')?.value.trim();

    if (!email || !pass) {
        showToast('Please fill in all fields.', 'error');
        return;
    }

    if (email === 'admin@shreeji.com' && pass === 'admin123') {
        setUser({ name: 'Admin', email, role: 'admin' });
        closeAuth();
        showToast('Welcome back, Admin! 🔑', 'gold');
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password: pass })
        });
        const data = await response.json();

        if (!response.ok) {
            showToast(data.message || 'Login failed.', 'error');
            return;
        }

        setUser(data);
        closeAuth();
        showToast('Welcome back! ✅');
    } catch (err) {
        showToast('Cannot connect to Auth Server. Is it running?', 'error');
    }
}

async function doRegister(event) {
    if (event) event.preventDefault();

    const name = document.getElementById('reg-name')?.value.trim();
    const email = document.getElementById('reg-email')?.value.trim().toLowerCase();
    const phone = document.getElementById('reg-phone')?.value.trim();
    const pass = document.getElementById('reg-pass')?.value.trim();

    if (!name || !email || !pass) {
        showToast('Please fill all required fields.', 'error');
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, phone, password: pass })
        });
        const data = await response.json();

        if (!response.ok) {
            showToast(data.message || 'Registration failed.', 'error');
            return;
        }

        setUser(data);
        closeAuth();
        showToast('Account created! Your 7-day trial has started. 🎉', 'gold');
    } catch (err) {
        showToast('Cannot connect to Auth Server. Is it running?', 'error');
    }
}

function doGuest() {
    if (!window.ST.settings?.guestEnabled) {
        showToast('Guest mode is currently disabled.', 'error');
        closeAuth();
        return;
    }
    setUser({ name: 'Guest', email: '', role: 'guest' });
    closeAuth();
    showToast('Browsing in guest / demo mode.');
}

function logout() {
    window.ST.user = null;
    DOM.userBar.wrapper()?.classList.remove('show');
    if (DOM.userBar.adminBtn()) DOM.userBar.adminBtn().style.display = 'none';
    if (DOM.userBar.trialInfo()) DOM.userBar.trialInfo().style.display = 'none';
    if (DOM.banners.chatGuest()) DOM.banners.chatGuest().style.display = 'none';

    if (DOM.navActions()) {
        DOM.navActions().innerHTML = `
            <button class="nav-btn-ghost" onclick="openAuth('login')">Sign In</button>
            <button class="nav-btn-gold" onclick="openAuth('register')">Get Quote</button>
        `;
    }
    showToast('You have been signed out.');
    safelyExecuteRender();
}

function setUser(user) {
    window.ST.user = user;
    const navElement = DOM.banners.navbar();
    if (navElement) navElement.style.top = '37px';

    DOM.userBar.wrapper()?.classList.add('show');
    if (DOM.userBar.name()) DOM.userBar.name().textContent = `Hi, ${user.name}`;

    configureUserRoleBadge(user);
    processTrialTimer(user);

    if (DOM.navActions()) {
        DOM.navActions().innerHTML = `
            <span style="font-size:12px; color:var(--gray);">${user.name}</span>
            <button class="nav-btn-gold" onclick="openAuth('login')">Dashboard</button>
        `;
    }
    updateChatGuestBanner();
    safelyExecuteRender();
}

function configureUserRoleBadge(user) {
    const badge = DOM.userBar.badge();
    const adminBtn = DOM.userBar.adminBtn();
    if (!badge) return;

    if (adminBtn) adminBtn.style.display = 'none';
    badge.className = 'user-badge';

    switch (user.role) {
        case 'admin':
            badge.classList.add('badge-admin');
            badge.textContent = 'ADMIN';
            if (adminBtn) adminBtn.style.display = 'inline';
            break;
        case 'trial':
            badge.classList.add('badge-trial');
            badge.textContent = 'TRIAL';
            break;
        case 'guest':
            badge.classList.add('badge-guest');
            badge.textContent = 'GUEST';
            break;
        default:
            badge.classList.add('badge-user');
            badge.textContent = 'USER';
            break;
    }
}

function processTrialTimer(user) {
    const trialInfo = DOM.userBar.trialInfo();
    if (!trialInfo) return;

    if (user.role === 'trial' && user.trialStart) {
        const allowedDays = window.ST.settings?.trialDays || 7;
        const expirationDate = new Date(new Date(user.trialStart).getTime() + allowedDays * 86400000);
        const remainingDays = Math.max(0, Math.ceil((expirationDate - new Date()) / 86400000));

        trialInfo.style.display = 'inline';
        trialInfo.textContent = `Trial: ${remainingDays} day${remainingDays !== 1 ? 's' : ''} remaining`;

        if (remainingDays === 0) {
            setTimeout(() => DOM.userBar.expired()?.classList.add('show'), 2000);
        }
    } else {
        trialInfo.style.display = 'none';
    }
}

function updateChatGuestBanner() {
    const banner = DOM.banners.chatGuest();
    if (!banner) return;

    if (window.ST.user?.role === 'guest') {
        const message = window.ST.settings?.guestMsg || '';
        banner.style.display = 'block';
        banner.innerHTML = `${message} <a href="#" onclick="openAuth('register')" style="color:var(--gold);">Register →</a>`;
    } else {
        banner.style.display = 'none';
    }
}

function safelyExecuteRender() {
    if (typeof renderDealer === 'function') {
        renderDealer();
    }
}

// 4. BIND EVENT LISTENERS AFTER FUNCTIONS ARE DEFINED
document.addEventListener('DOMContentLoaded', () => {
    DOM.modal()?.addEventListener('click', function (e) {
        if (e.target === this) closeAuth();
    });
});

// ─── TOAST ────────────────────────────────────────────────
function showToast(msg, type) {
    const t = document.createElement('div');
    t.style.cssText = `position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:9999;background:${type === 'error' ? 'rgba(239,68,68,.95)' : type === 'gold' ? 'rgba(212,175,55,.95)' : 'rgba(15,25,35,.95)'};color:${type === 'gold' ? '#000' : '#fff'};padding:12px 24px;border-radius:8px;font-size:13.5px;font-weight:600;border:1px solid ${type === 'error' ? 'rgba(239,68,68,.3)' : type === 'gold' ? 'rgba(212,175,55,.5)' : 'rgba(255,255,255,.1)'};backdrop-filter:blur(10px);font-family:Inter,sans-serif;box-shadow:0 8px 32px rgba(0,0,0,.4);transition:all .4s;pointer-events:none;`;
    t.textContent = msg; document.body.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 400); }, 3000);
}

// ─── PRODUCT RENDERING ────────────────────────────────────
// const ICONS = { industrial: '🧵', computerized: '💻', overlock: '🔄', domestic: '🏠', embroidery: '🎨' };
// function renderProducts(filter) {
//     const grid = document.getElementById('prod-grid');
//     const filtered = filter && filter !== 'all' ? ST.products.filter(p => p.cat === filter) : ST.products;
//     grid.innerHTML = '';
//     filtered.forEach(p => {
//         const card = document.createElement('div');
//         card.className = 'prod-card reveal';
//         card.dataset.cat = p.cat;
//         card.innerHTML = `
// <div class="prod-card-head">
// <div><span class="pc-badge">${p.badge || 'IN STOCK'}</span><div class="pc-cat">${p.cat.charAt(0).toUpperCase() + p.cat.slice(1)} Machine</div></div>
// <div class="pc-icon">${p.icon || ICONS[p.cat] || '🧵'}</div>
// </div>
// <div class="prod-body">
// <div class="pc-name">${p.title}</div>
// <div class="pc-desc">${p.desc}</div>
// <div class="pc-tags">${(p.tags || []).map(t => `<span class="pc-tag">${t}</span>`).join('')}</div>
// <div class="pc-footer">
// <a href="https://wa.me/919723120363?text=I'm%20interested%20in%20${encodeURIComponent(p.title)}" class="pc-inq" target="_blank">Inquire Now →</a>
// <span class="pc-stock">In Stock</span>
// </div>
// </div>`;
//         card.addEventListener('click', () => openProdModal(p));
//         grid.appendChild(card);
//         revObs.observe(card);
//     });
//     // Admin add button
//     if (ST.user && ST.user.role === 'admin') {
//         const add = document.createElement('div');
//         add.className = 'prod-card admin-add';
//         add.innerHTML = '<div style="font-size:36px;">➕</div><div style="font-size:13px;color:var(--gray);">Add New Product</div>';
//         add.onclick = openAddProduct;
//         grid.appendChild(add);
//     }
// }
// function filterProducts(cat, btn) {
//     document.querySelectorAll('#prod-cats .cat-btn').forEach(b => b.classList.remove('active'));
//     if (btn) btn.classList.add('active');
//     renderProducts(cat);
// }

// ─── PRODUCT MODAL ────────────────────────────────────────
// function openProdModal(p) {
//     document.getElementById('prod-modal-content').innerHTML = `
// <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px;">
// <div style="font-size:48px;">${p.icon || '🧵'}</div>
// <div><div style="font-family:Poppins,sans-serif;font-size:22px;font-weight:800;">${p.title}</div>
// <div style="font-size:12px;color:var(--gray);margin-top:3px;">Brand: <strong style="color:var(--gold);">${p.brand}</strong> &nbsp;·&nbsp; Model: <strong>${p.model}</strong></div></div>
// </div>
// <p style="font-size:14px;color:var(--gray);line-height:1.7;margin-bottom:18px;">${p.desc}</p>
// <div style="display:flex;flex-wrap:wrap;gap:7px;margin-bottom:22px;">${(p.tags || []).map(t => `<span class="pc-tag">${t}</span>`).join('')}</div>
// <div style="display:flex;gap:12px;flex-wrap:wrap;">
// <a href="https://wa.me/919723120363?text=I'm%20interested%20in%20${encodeURIComponent(p.title)}" class="btn-wa" target="_blank" style="font-size:13px;padding:11px 20px;">💬 WhatsApp Inquiry</a>
// <button class="btn-ghost" style="font-size:13px;padding:10px 18px;" onclick="closeProdModal()">Close</button>
// ${ST.user && ST.user.role === 'admin' ? `<button class="adm-btn adm-btn-ghost" onclick="openEditProduct('${p.id}')">✏️ Edit</button><button class="adm-btn adm-btn-red" onclick="deleteProduct('${p.id}')">🗑 Delete</button>` : ''}
// </div>`;
//     document.getElementById('prod-modal').classList.add('open');
// }
// function closeProdModal() { document.getElementById('prod-modal').classList.remove('open'); }
// document.getElementById('prod-modal').addEventListener('click', function (e) { if (e.target === this) closeProdModal(); });

// ─── PRODUCT RENDERING ────────────────────────────────────
const ICONS = { industrial: '🧵', computerized: '💻', overlock: '🔄', domestic: '🏠', embroidery: '🎨' };

function renderProducts(filter) {
    const grid = document.getElementById('prod-grid');
    if (!grid) return;

    const filtered = filter && filter !== 'all' ? ST.products.filter(p => p.cat === filter) : ST.products;
    grid.innerHTML = '';

    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'prod-card reveal';
        card.dataset.cat = p.cat;

        const rawIcon = p.icon || ICONS[p.cat] || '🧵';
        const isImagePath = rawIcon.includes('/') || rawIcon.includes('.');

        // NORMAL VIEW LOOK: Image set to look like a clean product display box centered perfectly
        const displayIcon = isImagePath
            ? `<img src="${rawIcon}" alt="${p.title}" style="max-width:100%; max-height:100%; object-fit:contain; display:block;" onerror="this.onerror=null; this.outerHTML='🧵';">`
            : rawIcon;

        // Clean layout settings to prevent the image from sinking down or offsetting
        const headStyles = isImagePath
            ? 'padding:15px; height:150px; display:flex; align-items:center; justify-content:center; overflow:hidden; box-sizing:border-box; background:var(--surface2);'
            : '';
        const iconStyles = isImagePath
            ? 'width:100%; height:129%; display:flex; align-items:center; justify-content:center; margin:0; padding:0;'
            : '';

        card.innerHTML = `
            <div class="prod-card-head" style="${headStyles}">
                ${!isImagePath ? `
                <div>
                    <span class="pc-badge">${p.badge || 'IN STOCK'}</span>
                    <div class="pc-cat">${p.cat.charAt(0).toUpperCase() + p.cat.slice(1)} Machine</div>
                </div>` : ''}
                <div class="pc-icon" style="${iconStyles}">${displayIcon}</div>
                ${isImagePath ? `<span class="pc-badge" style="position:absolute; top:15px; left:15px; z-index:2;">${p.badge || 'IN STOCK'}</span>` : ''}
            </div>
            <div class="prod-body">
                <div class="pc-name">${p.title}</div>
                <div class="pc-desc">${p.desc}</div>
                <div class="pc-tags">${(p.tags || []).map(t => `<span class="pc-tag">${t}</span>`).join('')}</div>
                <div class="pc-footer">
                    <a href="https://wa.me/919723120363?text=I'm%20interested%20in%20${encodeURIComponent(p.title)}" class="pc-inq" target="_blank" onclick="event.stopPropagation();">Inquire Now →</a>
                    <span class="pc-stock">In Stock</span>
                </div>
            </div>`;

        card.addEventListener('click', () => openProdModal(p));
        grid.appendChild(card);

        if (typeof revObs !== 'undefined' && revObs.observe) {
            revObs.observe(card);
        }
    });

    // Admin add button
    if (ST.user && ST.user.role === 'admin') {
        const add = document.createElement('div');
        add.className = 'prod-card admin-add';
        add.innerHTML = '<div style="font-size:36px; text-align: center; padding-top:40px;">➕</div><div style="font-size:13px;color:var(--gray);text-align:center;padding-bottom:40px;">Add New Product</div>';
        add.onclick = function (e) {
            e.stopPropagation();
            if (typeof openAddProduct === 'function') openAddProduct();
        };
        grid.appendChild(add);
    }
}

function filterProducts(cat, btn) {
    document.querySelectorAll('#prod-cats .cat-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderProducts(cat);
}

// ─── PRODUCT MODAL ────────────────────────────────────────
function openProdModal(p) {
    const rawIcon = p.icon || ICONS[p.cat] || '🧵';

    // MODAL VIEW LOOK: Increased icon box sizes up to 56px per your request
    const modalIcon = (rawIcon.includes('/') || rawIcon.includes('.'))
        ? `<img src="${rawIcon}" alt="${p.title}" style="width:56px; height:56px; object-fit:contain; display:inline-block; border-radius:6px;" onerror="this.onerror=null; this.outerHTML='🧵';">`
        : rawIcon;

    document.getElementById('prod-modal-content').innerHTML = `
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:20px;">
            <div style="font-size:52px; display:flex; align-items:center; justify-content:center; width:56px; height:56px; flex-shrink:0;">${modalIcon}</div>
            <div>
                <div style="font-family:Poppins,sans-serif;font-size:22px;font-weight:800;line-height:1.2;">${p.title}</div>
                <div style="font-size:12px;color:var(--gray);margin-top:5px;">
                    Brand: <strong style="color:var(--gold);">${p.brand}</strong> &nbsp;·&nbsp; Model: <strong>${p.model}</strong>
                </div>
            </div>
        </div>
        <p style="font-size:14px;color:var(--gray);line-height:1.7;margin-bottom:18px;">${p.desc}</p>
        <div style="display:flex;flex-wrap:wrap;gap:7px;margin-bottom:22px;">
            ${(p.tags || []).map(t => `<span class="pc-tag">${t}</span>`).join('')}
        </div>
        <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;">
            <a href="https://wa.me/919723120363?text=I'm%20interested%20in%20${encodeURIComponent(p.title)}" class="btn-wa" target="_blank" style="font-size:13px;padding:11px 20px;background-color:#25D366;color:#fff;text-decoration:none;border-radius:4px;font-weight:700;display:inline-block;">💬 WhatsApp Inquiry</a>
            <button class="btn-ghost" style="font-size:13px;padding:10px 18px;cursor:pointer;" onclick="closeProdModal()">Close</button>
            ${ST.user && ST.user.role === 'admin' ? `
                <button class="adm-btn adm-btn-ghost" onclick="openEditProduct('${p.id}')">✏️ Edit</button>
                <button class="adm-btn adm-btn-red" onclick="deleteProduct('${p.id}')">🗑 Delete</button>
            ` : ''}
        </div>`;

    document.getElementById('prod-modal').classList.add('open');
}

function closeProdModal() {
    document.getElementById('prod-modal').classList.remove('open');
}

// Global window event listener setup for close triggers
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('prod-modal')?.addEventListener('click', function (e) {
        if (e.target === this) closeProdModal();
    });
});

// ─── PARTS RENDERING ──────────────────────────────────────
let currentPartFilter = 'all';
function renderParts(filter, search) {
    currentPartFilter = filter || currentPartFilter;
    const grid = document.getElementById('parts-grid');
    grid.innerHTML = '';
    const q = (search || '').toLowerCase();
    let visible = ST.parts;
    if (currentPartFilter !== 'all') visible = visible.filter(p => p.cat === currentPartFilter);
    if (q) visible = visible.filter(p => p.name.toLowerCase().includes(q));
    visible.forEach(p => {
        const card = document.createElement('div');
        card.className = 'part-card reveal';
        card.innerHTML = `<div class="part-icon">${p.icon}</div><div class="part-name">${p.name}</div><div class="part-avail">In Stock</div>`;
        card.onclick = () => { window.open(`https://wa.me/919723120363?text=I%20need%20${encodeURIComponent(p.name)}`, '_blank'); };
        grid.appendChild(card);
        revObs.observe(card);
    });
    if (ST.user && ST.user.role === 'admin') {
        const add = document.createElement('div');
        add.className = 'part-card';
        add.style.cssText = 'border:2px dashed rgba(212,175,55,.25);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;cursor:pointer;';
        add.innerHTML = '<div style="font-size:28px;">➕</div><div style="font-size:11px;color:var(--gray);">Add Part</div>';
        add.onclick = openAddPart;
        grid.appendChild(add);
    }
}
function filterParts(cat, btn) {
    document.querySelectorAll('#parts + .parts-controls .cat-btn, .parts-controls .cat-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderParts(cat, document.querySelector('.parts-search')?.value || '');
}
function searchParts(val) { renderParts(currentPartFilter, val); }

// ─── DEALER SECTION ───────────────────────────────────────
// function renderDealer() {
//     const sec = document.getElementById('dealer-content');
//     const navLink = document.getElementById('nav-dealer-link');
//     if (!ST.settings.dealerEnabled) {
//         navLink.style.display = 'none';
//         sec.innerHTML = `
// <div style="max-width:560px;margin:0 auto;text-align:center;" class="reveal">
// <div class="sec-label" style="justify-content:center;">Dealer Program</div>
// <div class="dealer-closed">
// <div class="dealer-closed-icon">🔒</div>
// <h3>Dealer Program Currently Closed</h3>
// <p>Our dealer program is temporarily closed. Please check back later or contact us directly for partnership inquiries.</p>
// <br>
// <a href="https://wa.me/919723120363?text=I'm%20interested%20in%20the%20dealer%20program" class="btn-ghost" target="_blank">Contact for Partnerships →</a>
// </div>
// </div>`;
//         return;
//     }
//     navLink.style.display = '';
//     sec.innerHTML = `
// <div class="dealer-grid">
// <div class="reveal-l">
// <div class="sec-label">Dealer Program</div>
// <h2 class="sec-h2">Become a <span class="t-gold">Shreeji Partner</span></h2>
// <p class="sec-sub" style="margin-bottom:28px;">Join India's most trusted sewing machine dealer network. Established 1998 — be part of a legacy that builds profitable businesses.</p>
// <div class="dealer-benefits">
// <div class="db-item"><div class="db-icon">💰</div><div><div class="db-title">High Profit Margins</div><div class="db-text">Industry-best dealer margins with exclusive territory rights.</div></div></div>
// <div class="db-item"><div class="db-icon">🏆</div><div><div class="db-title">Brand Authority</div><div class="db-text">Leverage 25+ years of Shreeji Traders brand trust and reputation.</div></div></div>
// <div class="db-item"><div class="db-icon">📦</div><div><div class="db-title">Full Stock Support</div><div class="db-text">Machines and genuine spare parts available for your territory.</div></div></div>
// <div class="db-item"><div class="db-icon">🎓</div><div><div class="db-title">Training & Onboarding</div><div class="db-text">Complete technical and business training provided to all partners.</div></div></div>
// <div class="db-item"><div class="db-icon">📱</div><div><div class="db-title">24/7 Technical Support</div><div class="db-text">Always-available expert support for you and your customers.</div></div></div>
// </div>
// </div>
// <div class="dealer-form-wrap reveal-r">
// <div class="form-h3">Apply for Dealership</div>
// <div class="fg"><label class="fl">Full Name</label><input type="text" class="fi" placeholder="Your full name" id="dl-name"></div>
// <div class="fg"><label class="fl">Business Name & Type</label><input type="text" class="fi" placeholder="e.g. Patel Sewing Center, Retail Shop" id="dl-biz"></div>
// <div class="frow">
// <div class="fg"><label class="fl">Location / City</label><input type="text" class="fi" placeholder="Ahmedabad, Gujarat" id="dl-loc"></div>
// <div class="fg"><label class="fl">Experience (years)</label><input type="number" class="fi" placeholder="5" id="dl-exp"></div>
// </div>
// <div class="fg"><label class="fl">Phone / WhatsApp</label><input type="tel" class="fi" placeholder="+91 98765 43210" id="dl-phone"></div>
// <div class="fg"><label class="fl">Investment Capacity</label>
// <select class="fs" id="dl-invest">
// <option>Under ₹2 Lakh</option><option>₹2–5 Lakh</option><option>₹5–10 Lakh</option><option>Above ₹10 Lakh</option>
// </select>
// </div>
// <button class="fsub" onclick="submitDealerApp()">Submit Application →</button>
// <p style="font-size:11.5px;color:var(--gray);text-align:center;margin-top:12px;">Applications reviewed within 48 hours. All details kept confidential.</p>
// </div>
// </div>`;
//     document.querySelectorAll('#dealer-content .reveal, #dealer-content .reveal-l, #dealer-content .reveal-r').forEach(el => revObs.observe(el));
// }

// function submitDealerApp() {
//     const name = document.getElementById('dl-name')?.value?.trim();
//     if (!name) { showToast('Please fill in your name.', 'error'); return; }
//     showToast('Application submitted! We\'ll contact you within 48 hours. 🤝', 'gold');
//     const app = { id: 'da' + Date.now(), name, biz: document.getElementById('dl-biz')?.value || '—', loc: document.getElementById('dl-loc')?.value || '—', invest: document.getElementById('dl-invest')?.value || '—', status: 'pending' };
//     ST.dealerApps.unshift(app);
//     renderDealerAppsTable();
// }

// ─── AI CHATBOT ───────────────────────────────────────────
// let chatOpen = false;
// function toggleChat() {
//     chatOpen = !chatOpen;
//     const w = document.getElementById('ai-chat-widget');
//     w.classList.toggle('open', chatOpen);
//     if (chatOpen && ST.chatHistory.length === 0) {
//         addChatMsg('Namaste! 🙏 I\'m Shreeji AI — your expert sewing machine advisor. I know our entire catalog, services, spare parts, and pricing.\n\nHow can I help you today?', 'ai');
//     }
//     updateChatGuestBanner();
// }

// function addChatMsg(text, who) {
//     const msgs = document.getElementById('chat-msgs');
//     const msg = document.createElement('div');
//     msg.className = 'chat-msg' + (who === 'user' ? ' user' : '');
//     const av = who === 'ai'
//         ? '<div class="chat-av">🤖</div>'
//         : '<div style="width:30px;height:30px;background:var(--gold);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#000;font-size:11px;font-weight:800;flex-shrink:0;">You</div>';
//     msg.innerHTML = av + `<div class="chat-bubble">${text}</div>`;
//     msgs.appendChild(msg);
//     msgs.scrollTop = msgs.scrollHeight;
//     ST.chatHistory.push({ who, text });
// }

// function addTypingIndicator() {
//     const msgs = document.getElementById('chat-msgs');
//     const t = document.createElement('div');
//     t.className = 'chat-msg'; t.id = 'typing-indicator';
//     t.innerHTML = '<div class="chat-av">🤖</div><div class="chat-bubble" style="display:flex;gap:5px;align-items:center;padding:14px 18px;"><span style="width:7px;height:7px;border-radius:50%;background:var(--gold);animation:pd .8s ease-in-out infinite;display:inline-block;"></span><span style="width:7px;height:7px;border-radius:50%;background:var(--gold);animation:pd .8s ease-in-out .2s infinite;display:inline-block;"></span><span style="width:7px;height:7px;border-radius:50%;background:var(--gold);animation:pd .8s ease-in-out .4s infinite;display:inline-block;"></span></div>';
//     msgs.appendChild(t); msgs.scrollTop = msgs.scrollHeight;
// }
// function removeTypingIndicator() { const t = document.getElementById('typing-indicator'); if (t) t.remove(); }

// const AI_KB = {
//     greet: ['hello', 'hi', 'namaste', 'hey', 'good'],
//     jackA4: ['jack a4', 'jack-a4', 'jk a4'],
//     jackA4C: ['jack a4c', 'jack-a4c', 'a4c'],
//     jackF6: ['jack f6', 'f6'],
//     juki: ['juki', 'ddl-8700', 'ddl 8700', 'ddl8700'],
//     brother: ['brother', 'c-111', 'c111'],
//     singer: ['singer', 'ss 9900', 'ss9900'],
//     primex: ['primex', 'px-10', 'px10'],
//     interlock: ['interlock', 'overlock', 'mo series'],
//     repair: ['repair', 'fix', 'broken', 'service', 'not working', 'broke'],
//     amc: ['amc', 'annual', 'maintenance contract', 'contract'],
//     factory: ['factory', 'setup', 'new factory', 'production', 'garment factory'],
//     parts: ['spare', 'parts', 'needle', 'hook', 'bobbin', 'belt', 'motor', 'oil', 'accessories'],
//     price: ['price', 'cost', 'rate', 'how much', 'pricing', 'quote'],
//     dealer: ['dealer', 'partner', 'dealership', 'franchise', 'business'],
//     install: ['install', 'installation', 'setup', 'calibrate'],
//     emergency: ['emergency', 'urgent', 'breakdown', 'down', 'stuck', 'stopped'],
// };

// function getAIResponse(q) {
//     const ql = q.toLowerCase();
//     const isGuest = ST.user && ST.user.role === 'guest';
//     const prefix = isGuest ? '⚠️ [DEMO MODE] This is a demonstration response.\n\n' : '';
//     const suffix = isGuest ? '\n\n🔑 Register for real bookings and confirmed orders.' : '\n\n💬 WhatsApp us: +91 90000 00000';

//     if (AI_KB.greet.some(w => ql.includes(w))) return prefix + 'Namaste! 🙏 I\'m Shreeji AI, your sewing machine expert. I can help you with:\n\n• Machine recommendations\n• Spare parts availability\n• Service & repair booking\n• AMC contract pricing\n• Dealer partnerships\n\nWhat do you need today?' + suffix;
//     if (AI_KB.jackA4C.some(w => ql.includes(w))) return prefix + '🖥️ *Jack A4C — Computerized Lockstitch*\n\n• Speed: 5,500 RPM\n• Type: Computerized, direct-drive\n• Control: LED digital panel\n• Features: Programmable stitch patterns, electronic tension, auto trimmer\n• Best for: Precision stitching, complex patterns, high-consistency production\n• Status: ✅ In Stock\n\nShall I book a demo or send a quotation?' + suffix;
//     if (AI_KB.jackA4.some(w => ql.includes(w))) return prefix + '🧵 *Jack A4 — Industrial Lockstitch*\n\n• Speed: 5,500 RPM\n• Drive: Direct-drive servo motor\n• Features: Auto thread trimmer, backtack, needle positioning\n• Energy: 30% less power vs clutch motors\n• Best for: T-shirts, jeans, shirts, all light-medium fabrics\n• Status: ✅ In Stock\n\nOur most popular machine. Want a quote or demo?';
//     if (AI_KB.jackF6.some(w => ql.includes(w))) return prefix + '⚙️ *Jack F6 — Computerized Auto-Feed*\n\n• Advanced electronic feeding system\n• Handles thick, multi-layer fabrics with ease\n• Perfect for bags, upholstery, heavy garments\n• Auto-compensation for material thickness\n• Status: ✅ In Stock' + suffix;
//     if (AI_KB.juki.some(w => ql.includes(w))) return prefix + '⚙️ *Juki DDL-8700 — Japanese Industrial*\n\n• Speed: 5,500 RPM\n• Origin: Made in Japan\n• Drive: Direct-drive servo\n• Features: Silent operation, smooth stitch, auto lubrication\n• Best for: Denim, uniforms, formal garments, export quality\n• Status: ✅ In Stock\n\nThe benchmark Japanese machine. Interested?' + suffix;
//     if (AI_KB.brother.some(w => ql.includes(w))) return prefix + '🎯 *Brother C-111-3 — Reliable Industrial*\n\n• Speed: 5,000 RPM\n• Best for: Medium to heavy fabrics\n• Features: Low noise, consistent stitch quality\n• Great for: Knitwear, sportswear, cotton garments\n• Status: ✅ In Stock' + suffix;
//     if (AI_KB.singer.some(w => ql.includes(w))) return prefix + '🌟 *Singer SS 9900 — Heavy-Duty Industrial*\n\n• Built for continuous high-volume production\n• Legendary Singer reliability and brand trust\n• Excellent for thick fabrics and heavy-duty use\n• Status: ✅ In Stock' + suffix;
//     if (AI_KB.primex.some(w => ql.includes(w))) return prefix + '🔩 *Primex PX-10 — Value Industrial*\n\n• Japanese-grade performance at accessible price\n• Great for smaller factories and shops\n• Easy to maintain and service\n• Best for: Cotton, polyester, light garments\n• Status: ✅ In Stock' + suffix;
//     if (AI_KB.interlock.some(w => ql.includes(w))) return prefix + '🔄 *JUKI Interlock / Overlock Machines*\n\nWe stock a full range:\n• JUKI MO Series — 3/4/5 thread overlock\n• Jack A2S — High-speed overlocking\n• Best for: Knitwear, sportswear, edge finishing, T-shirts\n• Status: ✅ In Stock\n\nWhich type do you need — overlock or interlock/coverstitch?' + suffix;
//     if (AI_KB.emergency.some(w => ql.includes(w))) return '🆘 *Emergency Repair Service*\n\nProduction downtime is critical — we understand!\n\n• Same-day technician dispatch (service zones)\n• All brands covered: Jack, Juki, Singer, Brother, Primex\n• Genuine parts available same-day\n\n📞 Call NOW: +91 90000 00000\n💬 WhatsApp: https://wa.me/919723120363\n\nDon\'t wait — every minute of downtime costs money!';
//     if (AI_KB.repair.some(w => ql.includes(w))) return prefix + '🔧 *Machine Repair Service*\n\n✅ All brands covered\n✅ Certified factory-trained technicians\n✅ Genuine spare parts only\n✅ Doorstep service available\n✅ Warranty on all repairs\n\n*Process:* Diagnosis → Quotation → Repair → Test → Handover\n\nShare your: Machine brand, model, and location to book.\n📞 +91 90000 00000' + suffix;
//     if (AI_KB.amc.some(w => ql.includes(w))) return prefix + '📋 *AMC — Annual Maintenance Contracts*\n\n*Plans Available:*\n🔧 Basic — 2 visits/year + priority support\n🔧 Standard — 4 visits + 10% parts discount\n🔧 Premium — Monthly visits + 24/7 emergency\n\nPricing depends on: Number of machines, location, machine brands.\n\nGet a custom AMC quote — share your machine count and factory location.' + suffix;
//     if (AI_KB.factory.some(w => ql.includes(w))) return prefix + '🏭 *Factory Setup Solutions*\n\nShreeji Traders provides complete turnkey factory setup:\n\n1. Requirement planning & consultation\n2. Machine selection for your product type\n3. Procurement & delivery\n4. Professional installation\n5. Operator training\n6. Post-setup AMC\n\nHow many machines are you planning? What will you produce?' + suffix;
//     if (AI_KB.parts.some(w => ql.includes(w))) return prefix + '📦 *Genuine Spare Parts — Always In Stock*\n\n✅ Needles (all sizes & brands)\n✅ Hooks & drivers\n✅ Bobbins (metal & plastic)\n✅ Servo motors (all wattage)\n✅ Control panels & PCBs\n✅ Drive belts (all sizes)\n✅ LED machine lights\n✅ Machine oils & lubricants\n✅ Tables, stands, covers\n✅ All industrial attachments\n\n100% GENUINE — No counterfeits, ever.\n\nWhich machine brand/model do you need parts for?' + suffix;
//     if (AI_KB.price.some(w => ql.includes(w))) return prefix + '💰 *Pricing Information*\n\nPricing varies by machine model, quantity, and location. We offer:\n\n• Competitive dealer-direct pricing\n• Bulk purchase discounts\n• Factory setup package rates\n• Flexible AMC plans\n\nFor accurate pricing, please share:\n→ Machine model/brand\n→ Quantity needed\n→ Your location\n\nWe\'ll give you the best rate!' + suffix;
//     if (ST.settings.aiDealerEnabled && ST.settings.dealerEnabled && AI_KB.dealer.some(w => ql.includes(w))) {
//         return prefix + '🤝 *Dealer / Partner Program*\n\nJoin India\'s most trusted sewing machine dealer network!\n\n*Benefits:*\n✅ High profit margins\n✅ Exclusive territory rights\n✅ Full technical training\n✅ Stock & supply support\n✅ 24/7 expert helpline\n\n*Investment:* Starting ₹2 Lakh onwards\n\nVisit our Dealer section on the website or WhatsApp us to apply!' + suffix;
//     }
//     if (AI_KB.install.some(w => ql.includes(w))) return prefix + '⚙️ *Installation & Calibration Service*\n\nEvery new machine sold includes:\n✅ Professional installation at your site\n✅ Precision calibration & testing\n✅ Operator training (1–2 hours)\n✅ Initial maintenance guidance\n\nFor existing machines, installation is also available separately.\nShare your machine and location to schedule.' + suffix;

//     // Factory recommendation
//     if (ql.includes('recommend') || ql.includes('best') || ql.includes('which machine') || ql.includes('suggest')) {
//         return prefix + '🏆 *My Top Recommendations:*\n\n*For Garment Factories (High Volume):*\n→ Jack A4 (Best Value) or Juki DDL-8700 (Premium)\n\n*For Knitwear / T-shirts:*\n→ Jack A4 + JUKI Interlock combo\n\n*For Computerized Production:*\n→ Jack A4C or Jack F6\n\n*For Small Shops / Tailors:*\n→ Primex PX-10 (Affordable) or Brother C-111-3\n\nTell me your fabric type and daily production volume for a tailored recommendation!' + suffix;
//     }

//     return prefix + 'Thank you for your query! 🙏\n\nI can help you with:\n• Machine recommendations & specs\n• Spare parts availability\n• Repair & service booking\n• AMC pricing\n• Factory setup\n\nPlease describe what you need and I\'ll assist you right away!\n\n📞 Direct: +91 90000 00000' + suffix;
// }

// function sendChat() {
//     const inp = document.getElementById('chat-inp');
//     const msg = inp.value.trim(); if (!msg) return;
//     addChatMsg(msg, 'user'); inp.value = '';
//     document.getElementById('chat-sugg').style.display = 'none';
//     addTypingIndicator();
//     setTimeout(() => {
//         removeTypingIndicator();
//         addChatMsg(getAIResponse(msg), 'ai');
//     }, 900 + Math.random() * 600);
// }
// function askAI(msg) {
//     if (!chatOpen) toggleChat();
//     document.getElementById('chat-inp').value = msg;
//     setTimeout(sendChat, 200);
// }

// ─── ADMIN PANEL ──────────────────────────────────────────
function openAdminPanel() {
    if (!ST.user || ST.user.role !== 'admin') { showToast('Admin access required.', 'error'); return; }
    document.getElementById('admin-panel').classList.add('open');
    renderAdminProducts();
    renderAdminParts();
    renderUsersTable();
    renderLeadsTable();
    renderDealerAppsTable();
}
function closeAdminPanel() { document.getElementById('admin-panel').classList.remove('open'); }
function admNav(section, btn) {
    document.querySelectorAll('.adm-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.adm-nav-item').forEach(b => b.classList.remove('active'));
    document.getElementById('adm-' + section)?.classList.add('active');
    btn?.classList.add('active');
    document.querySelector('.adm-page-title').textContent = btn?.textContent?.trim() || section;
}

function toggleSetting(key, el) {
    el.classList.toggle('on'); el.classList.toggle('off');
    const isOn = el.classList.contains('on');
    if (key === 'dealer' || key === 'dealer2') {
        ST.settings.dealerEnabled = isOn;
        document.getElementById('tgl-dealer')?.classList.toggle('on', isOn);
        document.getElementById('tgl-dealer')?.classList.toggle('off', !isOn);
        document.getElementById('tgl-dealer2')?.classList.toggle('on', isOn);
        document.getElementById('tgl-dealer2')?.classList.toggle('off', !isOn);
        document.getElementById('tgl-ai-dealer')?.classList.toggle('on', isOn);
        document.getElementById('tgl-ai-dealer')?.classList.toggle('off', !isOn);
        ST.settings.aiDealerEnabled = isOn;
        const sub = document.getElementById('dealer-status-sub');
        if (sub) sub.textContent = isOn ? 'Program is currently ENABLED — dealer section visible on site' : 'Program is DISABLED — dealer section hidden from site';
        renderDealer();
        showToast('Dealer program ' + (isOn ? 'ENABLED ✅' : 'DISABLED 🔒'), isOn ? 'gold' : 'error');
    }
    if (key === 'guest') { ST.settings.guestEnabled = isOn; showToast('Guest mode ' + (isOn ? 'enabled' : 'disabled'), isOn ? '' : 'error'); }
    if (key === 'inquiry') { ST.settings.inquiryEnabled = isOn; showToast('Inquiry forms ' + (isOn ? 'enabled' : 'disabled'), isOn ? '' : 'error'); }
    if (key === 'hero') { document.getElementById('hero').style.display = isOn ? '' : 'none'; }
    if (key === 'testi') { document.getElementById('testimonials').style.display = isOn ? '' : 'none'; }
    if (key === 'ai-dealer') { ST.settings.aiDealerEnabled = isOn; }
    saveState();
}

function updateTrialDuration(val) {
    ST.settings.trialDays = parseInt(val);
    document.getElementById('trial-duration-lbl').textContent = val + ' days';
    showToast('Trial duration set to ' + val + ' days', 'gold');
    saveState();
}

function saveSettings() { showToast('Settings saved successfully! ✅', 'gold'); }
function saveGuestMsg() {
    ST.settings.guestMsg = document.getElementById('guest-msg-edit').value;
    updateChatGuestBanner();
    showToast('Guest message updated ✅', 'gold');
    saveState();
}

// Admin product table
function renderAdminProducts() {
    const container = document.getElementById('adm-products-list');
    if (!container) return;
    container.innerHTML = `<div style="overflow-x:auto;"><table class="adm-table"><thead><tr><th>Title</th><th>Brand</th><th>Category</th><th>Badge</th><th>Actions</th></tr></thead><tbody>${ST.products.map(p => `<tr><td><strong>${p.title}</strong></td><td>${p.brand}</td><td>${p.cat}</td><td><span class="pc-badge" style="font-size:10px;">${p.badge || '—'}</span></td><td style="display:flex;gap:6px;"><button class="adm-btn adm-btn-ghost" onclick="openEditProduct('${p.id}')">✏️</button><button class="adm-btn adm-btn-red" onclick="deleteProduct('${p.id}')">🗑</button></td></tr>`).join('')
        }</tbody></table></div>`;
}
function renderAdminParts() {
    const container = document.getElementById('adm-parts-list');
    if (!container) return;
    container.innerHTML = `<div style="overflow-x:auto;"><table class="adm-table"><thead><tr><th>Icon</th><th>Name</th><th>Category</th><th>Actions</th></tr></thead><tbody>${ST.parts.map(p => `<tr><td>${p.icon}</td><td>${p.name}</td><td>${p.cat}</td><td style="display:flex;gap:6px;"><button class="adm-btn adm-btn-ghost" onclick="openEditPart('${p.id}')">✏️</button><button class="adm-btn adm-btn-red" onclick="deletePart('${p.id}')">🗑</button></td></tr>`).join('')
        }</tbody></table></div>`;
}
function renderUsersTable() {
    const tbody = document.getElementById('users-tbody');
    if (!tbody) return;
    tbody.innerHTML = ST.users.map(u => `<tr>
    <td><strong>${u.name}</strong></td>
    <td>${u.email}</td>
    <td><span class="status-pill ${u.role === 'admin' ? 'sp-approved' : u.role === 'guest' ? 'sp-guest' : 'sp-trial'}">${u.role.toUpperCase()}</span></td>
    <td><span class="status-pill ${u.status === 'active' ? 'sp-approved' : u.status === 'guest' ? 'sp-guest' : u.status === 'expired' ? 'sp-rejected' : 'sp-trial'}">${u.status}</span></td>
    <td>${u.joined}</td>
    <td><div style="display:flex;gap:5px;">
      <button class="adm-btn adm-btn-ghost" style="font-size:10.5px;padding:5px 10px;" onclick="showToast('Warning sent to ${u.name}','')">⚠️ Warn</button>
      <button class="adm-btn adm-btn-red" style="font-size:10.5px;padding:5px 10px;" onclick="removeUser('${u.id}')">🗑 Remove</button>
    </div></td>
  </tr>`).join('');
}
function removeUser(id) {
    ST.users = ST.users.filter(u => u.id !== id);
    renderUsersTable();
    showToast('User removed.', 'error');
}
function renderLeadsTable() {
    const tbody = document.getElementById('leads-tbody');
    if (!tbody) return;
    tbody.innerHTML = ST.leads.map(l => `<tr>
    <td><strong>${l.name}</strong></td>
    <td>${l.type}</td>
    <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${l.msg}</td>
    <td>${l.date}</td>
    <td><a href="https://wa.me/919723120363?text=${encodeURIComponent(l.msg)}" target="_blank" class="adm-btn adm-btn-green" style="font-size:10.5px;padding:5px 10px;text-decoration:none;display:inline-block;">💬 Reply</a></td>
  </tr>`).join('');
}
function renderDealerAppsTable() {
    const tbody = document.getElementById('dealer-apps-tbody');
    if (!tbody) return;
    tbody.innerHTML = ST.dealerApps.map(d => `<tr>
    <td><strong>${d.name}</strong></td>
    <td>${d.biz}</td>
    <td>${d.loc}</td>
    <td>${d.invest}</td>
    <td><span class="status-pill sp-${d.status}">${d.status}</span></td>
    <td><div style="display:flex;gap:5px;">
      <button class="adm-btn adm-btn-green" style="font-size:10px;padding:4px 9px;" onclick="updateDealerStatus('${d.id}','approved')">✓</button>
      <button class="adm-btn adm-btn-red" style="font-size:10px;padding:4px 9px;" onclick="updateDealerStatus('${d.id}','rejected')">✗</button>
    </div></td>
  </tr>`).join('');
}
function updateDealerStatus(id, status) {
    const d = ST.dealerApps.find(a => a.id === id);
    if (d) { d.status = status; renderDealerAppsTable(); showToast('Application ' + status + ' ✅', status === 'approved' ? 'gold' : 'error'); }
}

// Add/Edit Product
function openAddProduct() {
    document.getElementById('ap-title').value = '';
    document.getElementById('ap-brand').value = '';
    document.getElementById('ap-model').value = '';
    document.getElementById('ap-badge').value = '';
    document.getElementById('ap-desc').value = '';
    document.getElementById('ap-tags').value = '';
    document.getElementById('ap-img').value = '';
    document.getElementById('ap-edit-id').value = '';
    document.getElementById('add-prod-modal-title').textContent = 'Add New Product';
    document.getElementById('add-prod-modal').classList.add('open');
}
function openEditProduct(id) {
    const p = ST.products.find(x => x.id === id);
    if (!p) return;
    document.getElementById('ap-title').value = p.title;
    document.getElementById('ap-brand').value = p.brand;
    document.getElementById('ap-model').value = p.model;
    document.getElementById('ap-badge').value = p.badge || '';
    document.getElementById('ap-desc').value = p.desc;
    document.getElementById('ap-tags').value = (p.tags || []).join(', ');
    document.getElementById('ap-edit-id').value = id;
    document.getElementById('add-prod-modal-title').textContent = 'Edit Product';
    document.getElementById('add-prod-modal').classList.add('open');
    closeProdModal();
}
function saveProduct() {
    const title = document.getElementById('ap-title').value.trim();
    const brand = document.getElementById('ap-brand').value.trim();
    const model = document.getElementById('ap-model').value.trim();
    if (!title || !brand || !model) { showToast('Title, Brand and Model are required.', 'error'); return; }
    const editId = document.getElementById('ap-edit-id').value;
    const prod = {
        id: editId || 'p' + Date.now(),
        title, brand, model,
        cat: document.getElementById('ap-cat').value,
        badge: document.getElementById('ap-badge').value.trim() || 'IN STOCK',
        desc: document.getElementById('ap-desc').value.trim(),
        tags: document.getElementById('ap-tags').value.split(',').map(t => t.trim()).filter(Boolean),
        icon: ICONS[document.getElementById('ap-cat').value] || '🧵'
    };
    if (editId) { const i = ST.products.findIndex(p => p.id === editId); if (i >= 0) ST.products[i] = prod; }
    else ST.products.unshift(prod);
    renderProducts();
    renderAdminProducts();
    document.getElementById('add-prod-modal').classList.remove('open');
    showToast(editId ? 'Product updated ✅' : 'Product added ✅', 'gold');
    saveState();
}
function deleteProduct(id) {
    if (!confirm('Delete this product?')) return;
    ST.products = ST.products.filter(p => p.id !== id);
    renderProducts(); renderAdminProducts();
    showToast('Product deleted.', 'error');
    saveState(); closeProdModal();
}

// Add/Edit Parts
function openAddPart() {
    document.getElementById('apr-name').value = '';
    document.getElementById('apr-icon').value = '🔩';
    document.getElementById('apr-edit-id').value = '';
    document.getElementById('add-part-modal-title').textContent = 'Add New Spare Part';
    document.getElementById('add-part-modal').classList.add('open');
}
function openEditPart(id) {
    const p = ST.parts.find(x => x.id === id);
    if (!p) return;
    document.getElementById('apr-name').value = p.name;
    document.getElementById('apr-icon').value = p.icon;
    document.getElementById('apr-cat').value = p.cat;
    document.getElementById('apr-edit-id').value = id;
    document.getElementById('add-part-modal-title').textContent = 'Edit Spare Part';
    document.getElementById('add-part-modal').classList.add('open');
}
function savePart() {
    const name = document.getElementById('apr-name').value.trim();
    if (!name) { showToast('Part name is required.', 'error'); return; }
    const editId = document.getElementById('apr-edit-id').value;
    const part = {
        id: editId || 'pt' + Date.now(),
        name, icon: document.getElementById('apr-icon').value || '🔩',
        cat: document.getElementById('apr-cat').value
    };
    if (editId) { const i = ST.parts.findIndex(p => p.id === editId); if (i >= 0) ST.parts[i] = part; }
    else ST.parts.unshift(part);
    renderParts(); renderAdminParts();
    document.getElementById('add-part-modal').classList.remove('open');
    showToast(editId ? 'Part updated ✅' : 'Part added ✅', 'gold');
    saveState();
}
function deletePart(id) {
    if (!confirm('Delete this part?')) return;
    ST.parts = ST.parts.filter(p => p.id !== id);
    renderParts(); renderAdminParts();
    showToast('Part deleted.', 'error');
    saveState();
}

// ─── CONTACT FORM ─────────────────────────────────────────
// function submitInquiry(btn) {
//     if (!ST.settings.inquiryEnabled) { showToast('Inquiries are currently disabled. Please call us directly.', 'error'); return; }
//     btn.textContent = '✅ Sent! We\'ll contact you within 2 hours.';
//     btn.style.background = 'var(--green)'; btn.style.color = '#000';
//     const lead = { name: 'Web Inquiry', type: 'Contact Form', msg: 'New inquiry from contact form', date: new Date().toISOString().split('T')[0] };
//     ST.leads.unshift(lead);
//     setTimeout(() => { btn.textContent = 'Send Inquiry →'; btn.style.background = ''; btn.style.color = ''; }, 5000);
//     showToast('Inquiry sent! We\'ll reach out within 2 hours. 🙏', 'gold');
// }

function submitInquiry(btn) {
    if (!ST.settings.inquiryEnabled) {
        showToast('Inquiries are currently disabled. Please call us directly.', 'error');
        return;
    }

    const formWrap = btn.closest('.contact-form-wrap');
    if (!formWrap) return;

    const nameInput = formWrap.querySelector('input[type="text"]')?.value.trim();
    const phoneInput = formWrap.querySelector('input[type="tel"]')?.value.trim();
    const emailInput = formWrap.querySelector('input[type="email"]')?.value.trim();
    const typeSelect = formWrap.querySelector('.fs')?.value;
    const msgTextarea = formWrap.querySelector('.fta')?.value.trim();

    // Combined validation check for all required fields
    if (!nameInput || !phoneInput || !typeSelect || !msgTextarea) {
        showToast('Please fill out all required fields (Name, Phone, Inquiry Type, and Message). 🙏', 'error');
        return;
    }

    // Direct plain layout definition strings (Safe across all browser formats)
    const lineDivider = "━━━━━━━━━━━━━━━━━━━━━━━━━";

    const whatsappMessage =
        "📥 NEW WEBSITE INQUIRY\n" +
        lineDivider + "\n" +
        "👤 Name: " + nameInput + "\n" +
        "📞 Phone: " + phoneInput + "\n" +
        "📧 Email: " + (emailInput || 'Not Provided') + "\n" +
        "⚙️ Requirement: " + typeSelect + "\n" +
        "💬 Message Details: " + msgTextarea + "\n" +
        lineDivider + "\n" +
        "👉 Sent via Shreeji Traders Web Portal";

    // UI Updates
    btn.textContent = '🚀 Opening WhatsApp...';
    btn.style.background = 'var(--green)';
    btn.style.color = '#000';

    // Local admin state log tracking panel push
    const lead = {
        name: nameInput,
        type: typeSelect,
        msg: msgTextarea,
        date: new Date().toISOString().split('T')[0]
    };
    ST.leads.unshift(lead);

    // Dynamic direct link structure mapping
    const targetPhone = "919723120363";

    // Using simple window routing with unescaped URL parameters to let WhatsApp parse natively
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${targetPhone}&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    // Revert button interface state
    setTimeout(() => {
        btn.textContent = 'Send Inquiry →';
        btn.style.background = '';
        btn.style.color = '';
    }, 4000);

    showToast('Opening WhatsApp... 🙏', 'gold');
}

// ─── INLINE MODALS CLOSE ──────────────────────────────────
document.getElementById('add-prod-modal').addEventListener('click', function (e) { if (e.target === this) this.classList.remove('open'); });
document.getElementById('add-part-modal').addEventListener('click', function (e) { if (e.target === this) this.classList.remove('open'); });
document.getElementById('trial-expired').addEventListener('click', function (e) { if (e.target === this) this.classList.remove('show'); });

// ─── INITIAL RENDER ───────────────────────────────────────
loadState();
renderProducts();
renderParts();
renderDealer();

// JSON-LD Schema
const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Shreeji Traders",
    "description": "Industrial and domestic sewing machine dealer since 1998. Sales, service, spare parts, AMC and factory setup.",
    "foundingDate": "1998",
    "telephone": "+919723120363",
    "email": "Shreejitraders120363@gmail.com",
    "address": { "@type": "PostalAddress", "addressCountry": "IN" },
    "hasOfferCatalog": { "@type": "OfferCatalog", "name": "Sewing Machines & Services" }
};
const s = document.createElement('script');
s.type = 'application/ld+json';
s.textContent = JSON.stringify(schema);
document.head.appendChild(s);