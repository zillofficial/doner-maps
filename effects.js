/* Native-DOM adaptations of the user-provided React Bits OptionWheel,
   TrueFocus and ClickSpark sources. Bottom-edge flame feedback is drawn locally. */
(() => {
const reduced=matchMedia('(prefers-reduced-motion: reduce)'), compact=matchMedia('(max-width: 1100px), (any-pointer: coarse)');
const wheel=document.querySelector('.filters'), buttons=[...wheel.querySelectorAll('[data-category]')], mobile=document.querySelector('#mobile-category');
let position=0,target=0,frame=0,last=0,drag=null,moved=false,wheelTimer;
mobile.innerHTML=buttons.map(b=>`<option value="${b.dataset.category}">${b.textContent}</option>`).join('');
function layout(){if(compact.matches){buttons.forEach((b,i)=>{const d=i-position;b.style.transform=`translate(calc(-50% - ${d*190}px),${Math.min(65,d*d*13)}px) rotate(${-Math.max(-18,Math.min(18,d*9))}deg)`;b.style.opacity=Math.max(.15,1-Math.abs(d)*.45);b.style.filter=`blur(${Math.min(1,Math.abs(d)*.3)}px)`;});return}buttons.forEach((b,i)=>{const d=i-position,angle=Math.max(-Math.PI/2,Math.min(Math.PI/2,d*.12)),R=58/.12;b.style.transform=`translate(${R*(1-Math.cos(angle))*.7}px,calc(${R*Math.sin(angle)}px - 50%)) rotate(${-angle*180/Math.PI}deg)`;b.style.opacity=Math.max(.3,1-Math.abs(d)*.15);b.style.filter=`blur(${Math.min(1,Math.abs(d)*.15)}px)`;});}
function tick(now){const dt=Math.min((now-last)/1000,.05);last=now;position+= (target-position)*(1-Math.exp(-dt/.16));if(Math.abs(target-position)<.001)position=target;layout();frame=position===target?0:requestAnimationFrame(tick);}
window.syncWheel=id=>{target=Math.max(0,buttons.findIndex(b=>b.dataset.category===id));mobile.value=id;document.querySelector('#category-title').textContent=buttons[target].textContent;document.querySelector('#category-count').textContent=`${document.querySelectorAll('#products .product').length} أصناف`;document.querySelector('#wheel-prev').disabled=target===0;document.querySelector('#wheel-next').disabled=target===buttons.length-1;if(reduced.matches){cancelAnimationFrame(frame);frame=0;position=target;layout();}else if(!frame){last=performance.now();frame=requestAnimationFrame(tick);}};
function select(index){const next=Math.max(0,Math.min(buttons.length-1,Math.round(index)));if(!buttons[next].classList.contains('selected'))buttons[next].click();}
// Desktop wheel navigation is scoped to the category control; touch keeps native scrolling.
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
wheel.addEventListener('pointerdown',e=>{if(e.button!==0)return;if(!compact.matches&&e.pointerType!=='mouse')return;drag={x:e.clientX,y:e.clientY,start:target,id:e.pointerId,horizontal:compact.matches,locked:false};moved=false;});
wheel.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(drag.horizontal){if(!drag.locked){if(Math.abs(dy)>8&&Math.abs(dy)>Math.abs(dx)){drag=null;return}if(Math.abs(dx)<10||Math.abs(dx)<Math.abs(dy)*1.3)return;drag.locked=true;wheel.setPointerCapture(drag.id)}moved=true;cancelAnimationFrame(frame);frame=0;position=Math.max(0,Math.min(buttons.length-1,drag.start+dx/190));layout();return}if(Math.abs(dy)>8){moved=true;wheel.setPointerCapture(drag.id);select(drag.start-dy/58);}});
wheel.addEventListener('pointerup',()=>{if(drag?.horizontal&&moved){const next=Math.round(position);if(next===target)window.syncWheel(mobile.value);else select(next)}drag=null;setTimeout(()=>moved=false,0)});
wheel.addEventListener('pointercancel',()=>{drag=null;moved=false;window.syncWheel(mobile.value)});
wheel.addEventListener('click',e=>{if(moved&&e.isTrusted){e.stopImmediatePropagation();e.preventDefault();}},true);
compact.addEventListener('change',()=>{drag=null;moved=false;window.syncWheel(mobile.value)});
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
 video.src='fire-edge.mp4';video.muted=true;video.playsInline=true;video.setAttribute('playsinline','');video.preload='auto';video.loop=true;
 const ctx=canvas.getContext('2d',{willReadFrequently:true});let raf=0,timer=0,until=0,last=0;
 function stop(){cancelAnimationFrame(raf);clearTimeout(timer);raf=0;video.pause();root.hidden=true;if(root.matches(':popover-open'))root.hidePopover();}
 function draw(now){if(now>until||document.hidden){stop();return}if(now-last>40&&video.readyState>=2){last=now;ctx.drawImage(video,0,0,canvas.width,canvas.height);const frame=ctx.getImageData(0,0,canvas.width,canvas.height),d=frame.data;for(let i=0;i<d.length;i+=4){const light=Math.max(d[i],d[i+1],d[i+2]);d[i+3]=Math.min(255,Math.max(0,(light-12)*3));}ctx.putImageData(frame,0,0);root.style.opacity=String(Math.min(1,(until-now)/450));}raf=requestAnimationFrame(draw);}
 window.flameFeedback=()=>{if(reduced.matches||document.hidden||!ctx)return;until=performance.now()+3200;root.hidden=false;root.style.opacity='1';if(document.querySelector('#cart-dialog').open&&root.showPopover){root.setAttribute('popover','manual');if(!root.matches(':popover-open'))root.showPopover()}else{if(root.matches(':popover-open'))root.hidePopover();root.removeAttribute('popover')}
 if(!raf){canvas.width=Math.min(800,innerWidth);canvas.height=180;video.currentTime=0;video.play().then(()=>{if(!root.hidden)raf=requestAnimationFrame(draw)}).catch(stop);}clearTimeout(timer);timer=setTimeout(stop,3800);};
 document.querySelector('#cart-dialog').addEventListener('close',stop);document.addEventListener('visibilitychange',()=>{if(document.hidden)stop()});reduced.addEventListener('change',stop);addEventListener('pagehide',stop,{once:true});
})();
