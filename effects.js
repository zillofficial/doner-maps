/* Native-DOM adaptations of the user-provided React Bits OptionWheel,
   TrueFocus and ClickSpark sources. Bottom-edge flame feedback is drawn locally. */
(() => {
const reduced=matchMedia('(prefers-reduced-motion: reduce)'), compact=matchMedia('(max-width: 1100px), (any-pointer: coarse)');
const wheel=document.querySelector('.filters'), buttons=[...wheel.querySelectorAll('[data-category]')], mobile=document.querySelector('#mobile-category');
const swipeSurface=wheel.closest('.wheel-navigation')||wheel;
let position=0,target=0,frame=0,last=0,drag=null,moved=false,wheelTimer,dragFrame=0,suppressClickUntil=0;
mobile.innerHTML=buttons.map(b=>`<option value="${b.dataset.category}">${b.textContent}</option>`).join('');
function layout(){if(compact.matches){buttons.forEach((b,i)=>{const d=i-position;b.style.transform=`translate(calc(-50% - ${d*190}px),${Math.min(65,d*d*13)}px) rotate(${-Math.max(-18,Math.min(18,d*9))}deg)`;b.style.opacity=Math.max(.15,1-Math.abs(d)*.45);b.style.filter='none';});return}buttons.forEach((b,i)=>{const d=i-position,angle=Math.max(-Math.PI/2,Math.min(Math.PI/2,d*.12)),R=58/.12;b.style.transform=`translate(${R*(1-Math.cos(angle))*.7}px,calc(${R*Math.sin(angle)}px - 50%)) rotate(${-angle*180/Math.PI}deg)`;b.style.opacity=Math.max(.3,1-Math.abs(d)*.15);b.style.filter=`blur(${Math.min(1,Math.abs(d)*.15)}px)`;});}
function tick(now){const dt=Math.min((now-last)/1000,.05);last=now;position+= (target-position)*(1-Math.exp(-dt/.16));if(Math.abs(target-position)<.001)position=target;layout();frame=position===target?0:requestAnimationFrame(tick);}
window.syncWheel=id=>{target=Math.max(0,buttons.findIndex(b=>b.dataset.category===id));mobile.value=id;document.querySelector('#category-title').textContent=buttons[target].textContent;document.querySelector('#category-count').textContent=`${document.querySelectorAll('#products .product').length} أصناف`;document.querySelector('#wheel-prev').disabled=target===0;document.querySelector('#wheel-next').disabled=target===buttons.length-1;if(reduced.matches){cancelAnimationFrame(frame);frame=0;position=target;layout();}else if(!frame){last=performance.now();frame=requestAnimationFrame(tick);}};
function select(index){const next=Math.max(0,Math.min(buttons.length-1,Math.round(index)));if(!buttons[next].classList.contains('selected'))buttons[next].click();}
// Desktop wheel navigation is scoped to the category control.
let wheelDelta=0,wheelLast=0,wheelChanged=-Infinity;
wheel.addEventListener('wheel',e=>{
 if(compact.matches||e.ctrlKey||Math.abs(e.deltaX)>Math.abs(e.deltaY)||!e.deltaY)return;
 const direction=Math.sign(e.deltaY);
 if((target===0&&direction<0)||(target===buttons.length-1&&direction>0))return;
 e.preventDefault();
 const now=performance.now();
 if(now-wheelLast>180||Math.sign(wheelDelta)!==direction)wheelDelta=0;
 wheelLast=now;
 if(now-wheelChanged<220)return;
 wheelDelta+=e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?400:1);
 if(Math.abs(wheelDelta)>=35){select(target+direction);wheelDelta=0;wheelChanged=now;}
},{passive:false});
mobile.addEventListener('change',()=>select(buttons.findIndex(b=>b.dataset.category===mobile.value)));
document.querySelector('#wheel-prev').onclick=()=>select(target-1);document.querySelector('#wheel-next').onclick=()=>select(target+1);
wheel.addEventListener('keydown',e=>{if(['ArrowDown','ArrowUp','ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();select(e.key==='Home'?0:e.key==='End'?buttons.length-1:target+(['ArrowDown','ArrowLeft'].includes(e.key)?1:-1));buttons[target].focus({preventScroll:true});}});
// Keep the curved mobile layout, but track the finger from its actual visual position.
function releaseDrag(cancelled=false){
 const gesture=drag;if(!gesture)return;drag=null;
 cancelAnimationFrame(dragFrame);dragFrame=0;
 if(gesture.locked){
  suppressClickUntil=performance.now()+450;
  const dx=gesture.lastX-gesture.x,elapsed=Math.max(1,performance.now()-gesture.time);
  const quick=Math.abs(dx)>=14&&Math.abs(dx)/elapsed>.25;
  const steps=Math.abs(dx)>=32||quick?Math.sign(dx)*Math.max(1,Math.round(Math.abs(dx)/190)):0;
  const next=cancelled?target:Math.max(0,Math.min(buttons.length-1,gesture.selected+steps));
  if(next!==target)select(next);else window.syncWheel(mobile.value);
 }
 if(swipeSurface.hasPointerCapture?.(gesture.id))swipeSurface.releasePointerCapture(gesture.id);
 moved=false;
}
swipeSurface.addEventListener('pointerdown',e=>{
 if(e.button!==0||drag||e.isPrimary===false||e.target?.closest?.('.wheel-controls button'))return;
 if(!compact.matches&&e.pointerType!=='mouse')return;
 drag={x:e.clientX,y:e.clientY,lastX:e.clientX,start:position,selected:target,id:e.pointerId,horizontal:compact.matches,locked:false,time:performance.now()};moved=false;
});
swipeSurface.addEventListener('pointermove',e=>{
 if(!drag||e.pointerId!==drag.id)return;
 const dx=e.clientX-drag.x,dy=e.clientY-drag.y;
 if(drag.horizontal){
  if(!drag.locked){
   if(Math.abs(dx)<8)return;
   drag.locked=true;cancelAnimationFrame(frame);frame=0;swipeSurface.setPointerCapture(drag.id);
  }
  if(e.cancelable)e.preventDefault();
  moved=true;drag.lastX=e.clientX;
  position=Math.max(0,Math.min(buttons.length-1,drag.start+dx/190));
  if(!dragFrame)dragFrame=requestAnimationFrame(()=>{dragFrame=0;layout();});
  return;
 }
 if(Math.abs(dy)>8){drag.locked=true;moved=true;swipeSurface.setPointerCapture(drag.id);select(drag.selected-dy/58);}
});
swipeSurface.addEventListener('pointerup',e=>{if(drag&&e.pointerId===drag.id){drag.lastX=e.clientX;if(drag.horizontal)releaseDrag();else releaseDrag(true);}});
swipeSurface.addEventListener('pointercancel',()=>releaseDrag(true));
// A touched button loses its implicit capture when the swipe surface takes over.
// That bubbled event must not cancel the gesture started on its text.
swipeSurface.addEventListener('lostpointercapture',e=>{if(e.target===swipeSurface&&drag&&e.pointerId===drag.id)releaseDrag(true);});
swipeSurface.addEventListener('click',e=>{if(e.isTrusted&&(moved||performance.now()<suppressClickUntil)){e.stopImmediatePropagation();e.preventDefault();}},true);
compact.addEventListener('change',()=>{releaseDrag(true);moved=false;window.syncWheel(mobile.value)});
window.syncWheel('shawarma');
// TrueFocus: one moving bracket around the active Arabic word.
const focus=document.querySelector('.true-focus'),words=[...focus.querySelectorAll('.focus-word')],box=focus.querySelector('.focus-frame');let active=0,focusVisible=true;
function focusWord(i){active=i;words.forEach((w,j)=>w.classList.toggle('active',i===j));const r=focus.getBoundingClientRect(),w=words[i].getBoundingClientRect();box.style.transform=`translate(${w.left-r.left}px,${w.top-r.top}px)`;box.style.width=w.width+'px';box.style.height=w.height+'px';}
new ResizeObserver(()=>focusWord(active)).observe(focus);new IntersectionObserver(entries=>focusVisible=entries[0].isIntersecting).observe(focus);words.forEach((w,i)=>w.addEventListener('pointerenter',()=>focusWord(i)));
const focusTimer=setInterval(()=>{if(!reduced.matches&&!document.hidden&&focusVisible)focusWord((active+1)%words.length)},2300);document.fonts.ready.then(()=>focusWord(0));
// ClickSpark: bounded red rays, with a separate canvas inside the dialog top layer.
const layers=[document.body,document.querySelector('#cart-dialog')].map(parent=>{const canvas=document.createElement('canvas');canvas.className='spark-canvas';canvas.setAttribute('aria-hidden','true');parent.append(canvas);return {parent,canvas,ctx:canvas.getContext('2d'),sparks:[],raf:0};});
function sizeLayer(l){const dpr=Math.min(devicePixelRatio||1,1.5),w=Math.round(innerWidth*dpr),h=Math.round(innerHeight*dpr);if(l.canvas.width!==w||l.canvas.height!==h){l.canvas.width=w;l.canvas.height=h;l.ctx.setTransform(dpr,0,0,dpr,0,0)}}
function draw(l,now){l.ctx.clearRect(0,0,innerWidth,innerHeight);l.sparks=l.sparks.filter(s=>now-s.t<650);for(const s of l.sparks){const t=(now-s.t)/650,e=t*(2-t),d=e*40,len=14*(1-e);l.ctx.strokeStyle=s.color;l.ctx.globalAlpha=1-t;l.ctx.lineWidth=2.5;l.ctx.beginPath();l.ctx.moveTo(s.x+d*Math.cos(s.a),s.y+d*Math.sin(s.a)-t*12);l.ctx.lineTo(s.x+(d+len)*Math.cos(s.a),s.y+(d+len)*Math.sin(s.a)-t*12);l.ctx.stroke();}l.ctx.globalAlpha=1;l.raf=l.sparks.length?requestAnimationFrame(n=>draw(l,n)):0;}
document.addEventListener('click',e=>{if(reduced.matches||e.target.closest('input,textarea,select,option'))return;const l=layers[e.target.closest('dialog')?1:0];sizeLayer(l);let x=e.clientX,y=e.clientY;if(!e.detail){const r=e.target.getBoundingClientRect();x=r.left+r.width/2;y=r.top+r.height/2;}const rect=l.canvas.getBoundingClientRect();x-=rect.left;y-=rect.top;for(let i=0;i<10;i++)l.sparks.push({x,y,a:Math.PI*2*i/10,t:performance.now(),color:i%3?'#ff2419':'#ff6b32'});l.sparks=l.sparks.slice(-120);if(!l.raf)l.raf=requestAnimationFrame(n=>draw(l,n));},true);
window.addEventListener('pagehide',()=>{clearInterval(focusTimer);clearTimeout(wheelTimer);cancelAnimationFrame(frame);layers.forEach(l=>cancelAnimationFrame(l.raf))},{once:true});
})();

// Customer-supplied Fire_HD clip, with its black background keyed out.
(()=>{
 const reduced=matchMedia('(prefers-reduced-motion: reduce)'),root=document.createElement('div'),canvas=document.createElement('canvas'),video=document.createElement('video');
 root.className='bottom-flames';root.hidden=true;root.setAttribute('aria-hidden','true');root.append(canvas);document.body.append(root);
 const desktop=matchMedia('(min-width:600px)'),copies=[],copyContexts=[];
 function sizeTiles(){root.classList.toggle('flames-tiled',desktop.matches);const count=desktop.matches?Math.ceil(innerWidth/480)-1:0;while(copies.length<count){const c=document.createElement('canvas');root.append(c);copies.push(c);copyContexts.push(c.getContext('2d'));}while(copies.length>count){copies.pop().remove();copyContexts.pop();}copies.forEach((c,i)=>{c.width=480;c.height=122;c.style.left=((i+1)*480)+'px';});}
 addEventListener('resize',stop);
 desktop.addEventListener('change',stop);
 video.src=desktop.matches?'fire-laptop.mp4':'fire-edge.mp4';video.muted=true;video.playsInline=true;video.setAttribute('playsinline','');video.preload='none';video.loop=true;
 const ctx=canvas.getContext('2d',{willReadFrequently:true});let raf=0,timer=0,until=0,last=0;
 function stop(){cancelAnimationFrame(raf);clearTimeout(timer);raf=0;video.pause();root.hidden=true;if(root.matches(':popover-open'))root.hidePopover();}
 function draw(now){if(now>until||document.hidden){stop();return}if(now-last>40&&video.readyState>=2){last=now;ctx.drawImage(video,0,0,canvas.width,canvas.height);const frame=ctx.getImageData(0,0,canvas.width,canvas.height),d=frame.data;for(let i=0;i<d.length;i+=4){const light=Math.max(d[i],d[i+1],d[i+2]);if(light<=10){d[i+3]=0;continue}const alpha=(light-10)/245;const gain=255/light;d[i]=Math.min(255,d[i]*gain);d[i+1]=Math.min(255,d[i+1]*gain);d[i+2]=Math.min(255,d[i+2]*gain);d[i+3]=Math.round(255*alpha);}ctx.putImageData(frame,0,0);if(desktop.matches)copyContexts.forEach(c=>{c.clearRect(0,0,canvas.width,canvas.height);c.drawImage(canvas,0,0)});root.style.opacity=String(Math.min(1,(until-now)/450));}raf=requestAnimationFrame(draw);}
 window.flameFeedback=()=>{if(reduced.matches||document.hidden||!ctx)return;until=performance.now()+3200;root.hidden=false;root.style.opacity='1';if(document.querySelector('#cart-dialog').open&&root.showPopover){root.setAttribute('popover','manual');if(!root.matches(':popover-open'))root.showPopover()}else{if(root.matches(':popover-open'))root.hidePopover();root.removeAttribute('popover')}
 if(!raf){sizeTiles();const tiled=desktop.matches,src=tiled?'fire-laptop.mp4':'fire-edge.mp4';if(video.getAttribute('src')!==src)video.src=src;canvas.width=tiled?480:Math.min(800,innerWidth);canvas.height=tiled?122:180;copies.forEach(c=>{c.width=canvas.width;c.height=canvas.height});video.currentTime=0;video.play().then(()=>{if(!root.hidden)raf=requestAnimationFrame(draw)}).catch(stop);}clearTimeout(timer);timer=setTimeout(stop,3800);};
 document.querySelector('#cart-dialog').addEventListener('close',stop);document.addEventListener('visibilitychange',()=>{if(document.hidden)stop()});reduced.addEventListener('change',stop);addEventListener('pagehide',stop,{once:true});
})();
