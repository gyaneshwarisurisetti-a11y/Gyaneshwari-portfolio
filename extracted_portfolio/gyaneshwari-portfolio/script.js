const qs=(s)=>document.querySelector(s), qsa=(s)=>document.querySelectorAll(s);
const body=document.body;
const themeToggle=qs('.theme-toggle');
const themeIcon=qs('.theme-icon');
const themeLabel=qs('.theme-label');

const applyTheme=(theme)=>{
  body.setAttribute('data-theme', theme);
  const isDark = theme === 'dark';
  if (themeIcon) themeIcon.textContent = isDark ? '🌙' : '☀️';
  if (themeLabel) themeLabel.textContent = isDark ? 'Dark' : 'Light';
  localStorage.setItem('portfolioTheme', theme);
};

const savedTheme = localStorage.getItem('portfolioTheme') || 'light';
applyTheme(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  });
}

qs('#year').textContent=new Date().getFullYear();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});qsa('.reveal').forEach(el=>io.observe(el));
window.addEventListener('scroll',()=>{const h=document.documentElement;qs('#progress').style.width=((h.scrollTop/(h.scrollHeight-h.clientHeight))*100)+'%'});
const glow=qs('.cursor-glow');window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const card=qs('#portraitCard');if(card){card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`rotateY(${x*16}deg) rotateX(${-y*12}deg) translate3d(${x*12}px,${y*10}px,30px) scale(1.02)`;card.style.boxShadow=`0 30px 80px rgba(28,27,26,.18), ${x*12}px ${y*10}px 30px rgba(201,107,60,.12)`});card.addEventListener('pointerleave',()=>{card.style.transform='rotateY(0) rotateX(0) translate3d(0,0,0) scale(1)';card.style.boxShadow='0 30px 80px var(--shadow), 0 0 0 1px rgba(255, 255, 255, 0.04), inset 0 1px 20px rgba(255, 255, 255, 0.08)'});}
qsa('.magnetic').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();const x=(e.clientX-r.left-r.width/2)/r.width;const y=(e.clientY-r.top-r.height/2)/r.height;b.style.transform=`translate(${x*14}px,${y*10}px) rotateX(${(-y)*10}deg) rotateY(${x*12}deg)`});b.addEventListener('pointerleave',()=>b.style.transform='')});
