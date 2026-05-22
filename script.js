/* ════════════════════════════════════════════════════════
   PAGE TRANSITION LOGIC
════════════════════════════════════════════════════════ */
(function() {
  const overlay = document.getElementById('page-transition');
  
  function navigateTo(url) {
    overlay.classList.add('active');
    setTimeout(() => { 
      window.location.href = url; 
    }, 450); // Matches the .45s CSS transition duration
  }

  // Bind the transition to clicking anywhere on the main project cards
  document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      // Find the href from the arrow link inside this card
      const link = this.querySelector('.proj-arrow');
      if(link) {
        navigateTo(link.getAttribute('href'));
      }
    });
  });

  // Ensure direct clicks on the arrow don't trigger it twice
  document.querySelectorAll('.proj-arrow').forEach(arrow => {
    arrow.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation(); // Stops the card click listener from firing too
      navigateTo(this.getAttribute('href'));
    });
  });
})();

/* ════════════════════════════════════════════════════════
   SHOWCASE NAVIGATION
════════════════════════════════════════════════════════ */
(function () {
  const container = document.getElementById('showcaseContainer');
  const prevBtn   = document.getElementById('showcasePrev');
  const nextBtn   = document.getElementById('showcaseNext');
  if (!container || !prevBtn || !nextBtn) return;
  const scrollAmount = 345;
  prevBtn.addEventListener('click', () => container.scrollBy({ left: -scrollAmount, behavior: 'smooth' }));
  nextBtn.addEventListener('click', () => container.scrollBy({ left: scrollAmount,  behavior: 'smooth' }));
})();


/* ════════════════════════════════════════════════════════
   CANVAS SHADER BLOBS
════════════════════════════════════════════════════════ */
(function(){
  const canvas = document.getElementById('shader-canvas');
  const ctx    = canvas.getContext('2d');
  let W, H, t = 0;
  let mx = 0.5, my = 0.5, tmx = 0.5, tmy = 0.5;
  function resize(){ W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  window.addEventListener('resize', resize); resize();
  document.addEventListener('mousemove', e => { tmx = e.clientX/W; tmy = e.clientY/H; });
  const blobs = [
    {xf:.35,yf:.45,size:.55,r:0,  g:229,b:200,phase:0,  speed:.30},
    {xf:.65,yf:.35,size:.45,r:0,  g:100,b:220,phase:2.1,speed:.22},
    {xf:.25,yf:.65,size:.38,r:80, g:60, b:248,phase:4.2,speed:.18},
    {xf:.72,yf:.60,size:.40,r:0,  g:180,b:255,phase:1.0,speed:.25},
    {xf:.50,yf:.20,size:.30,r:100,g:80, b:255,phase:3.3,speed:.20},
  ];
  function draw(){
    mx += (tmx-mx)*.04; my += (tmy-my)*.04;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='#05080f'; ctx.fillRect(0,0,W,H);
    ctx.save(); ctx.globalCompositeOperation='screen';
    for(let b of blobs){
      const o1 = Math.sin(t*b.speed+b.phase)*.10;
      const o2 = Math.cos(t*b.speed*.7+b.phase)*.08;
      const cx = (b.xf+o1+(mx-.5)*.06)*W;
      const cy = (b.yf+o2+(my-.5)*.06)*H;
      const r  = b.size*Math.min(W,H)*.7;
      const g  = ctx.createRadialGradient(cx,cy,0,cx,cy,r);
      g.addColorStop(0,  `rgba(${b.r},${b.g},${b.b},.18)`);
      g.addColorStop(.4, `rgba(${b.r},${b.g},${b.b},.07)`);
      g.addColorStop(1,  `rgba(${b.r},${b.g},${b.b},0)`);
      ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2);
      ctx.fillStyle=g; ctx.fill();
    }
    ctx.restore(); t += .012; requestAnimationFrame(draw);
  }
  draw();
})();


/* ════════════════════════════════════════════════════════
   CUSTOM CURSOR
════════════════════════════════════════════════════════ */
(function(){
  const dot  = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  let rx=0,ry=0,dx=0,dy=0;
  document.addEventListener('mousemove',e=>{ dx=e.clientX; dy=e.clientY; });
  (function loop(){
    dot.style.left=dx+'px'; dot.style.top=dy+'px';
    rx+=(dx-rx)*.15; ry+=(dy-ry)*.15;
    ring.style.left=rx+'px'; ring.style.top=ry+'px';
    requestAnimationFrame(loop);
  })();
  document.querySelectorAll('a,button,.project-item,.skill-logo-item').forEach(el=>{
    el.addEventListener('mouseenter',()=>{
      dot.style.width='16px'; dot.style.height='16px';
      ring.style.width='56px'; ring.style.height='56px';
      ring.style.borderColor='rgba(0,229,200,.6)';
    });
    el.addEventListener('mouseleave',()=>{
      dot.style.width='10px'; dot.style.height='10px';
      ring.style.width='36px'; ring.style.height='36px';
      ring.style.borderColor='rgba(0,229,200,.35)';
    });
  });
})();


/* ════════════════════════════════════════════════════════
   NAV SCROLL STATE
════════════════════════════════════════════════════════ */
window.addEventListener('scroll',()=>{
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
},{passive:true});


/* ════════════════════════════════════════════════════════
   SCROLL REVEAL
════════════════════════════════════════════════════════ */
(function(){
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(!e.isIntersecting) return; e.target.classList.add('in'); io.unobserve(e.target); });
  },{threshold:.1});
  document.querySelectorAll('.sr,.sr-left,.sr-scale').forEach(el=>io.observe(el));
})();


/* ════════════════════════════════════════════════════════
   COUNTER ANIMATION
════════════════════════════════════════════════════════ */
(function(){
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.target);
      let cur = 0;
      const inc = target / 75;
      const t = setInterval(()=>{
        cur += inc;
        if(cur >= target){ el.textContent = target+'+'; clearInterval(t); }
        else el.textContent = Math.floor(cur);
      },16);
      io.unobserve(el);
    });
  },{threshold:.5});
  document.querySelectorAll('.stat-num[data-target]').forEach(c=>io.observe(c));
})();


/* ════════════════════════════════════════════════════════
   HERO PARALLAX
════════════════════════════════════════════════════════ */
(function(){
  const h = document.querySelector('.hero-headline');
  const o = document.querySelector('.hero-overline');
  window.addEventListener('scroll',()=>{
    const p = Math.min(window.scrollY/window.innerHeight, 1);
    h.style.transform = `translateY(${p*80}px)`;
    h.style.opacity   = 1 - p*1.4;
    o.style.opacity   = 1 - p*2;
  },{passive:true});
})();