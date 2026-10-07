/* HoldButton: liquid fill and hold/release behavior adapted from the supplied React Bits source. */
(()=>{
 const button=document.querySelector('#cancel-order'),area=document.querySelector('#cancel-area'),dialog=document.querySelector('#cart-dialog'),idle=button.querySelector('.hold-button__idle'),done=button.querySelector('.hold-button__done');
 let phase='idle',kind=null,pointer=null,start=0,raf=0,timer=0,resetTimer=0,rect=null;
 const setProgress=p=>button.style.setProperty('--hb-p',String(p));
 function setPhase(next){phase=next;button.dataset.phase=next;idle.setAttribute('aria-hidden',String(next==='done'));done.setAttribute('aria-hidden',String(next!=='done'));}
 function stop(){if(phase!=='holding')return;clearTimeout(timer);cancelAnimationFrame(raf);raf=0;pointer=null;kind=null;setPhase('idle');setProgress(0);}
 function complete(){if(phase!=='holding'||performance.now()-start<2000)return;if(document.hidden||!dialog.open){stop();return}clearTimeout(timer);cancelAnimationFrame(raf);raf=0;setPhase('done');setProgress(1);pointer=null;kind=null;window.cancelDraft();resetTimer=setTimeout(()=>{setPhase('idle');setProgress(0);area.hidden=count()===0;if(count()===0)document.querySelector('#back-menu')?.focus()},1200);}
 function draw(now){if(phase!=='holding')return;setProgress(Math.min(1,(now-start)/2000));if(now-start>=2000)complete();else raf=requestAnimationFrame(draw);}
 function begin(input){if(phase!=='idle'||!count()||!dialog.open)return false;start=performance.now();kind=input;rect=button.getBoundingClientRect();setPhase('holding');button.dataset.input=input;setProgress(0);raf=requestAnimationFrame(draw);timer=setTimeout(complete,2050);return true;}
 button.addEventListener('pointerdown',e=>{if(e.button!==0||!e.isPrimary||pointer!==null)return;if(begin('pointer')){pointer=e.pointerId;button.setPointerCapture(e.pointerId)}});
 button.addEventListener('pointermove',e=>{if(e.pointerId!==pointer||!rect)return;if(e.clientX<rect.left-10||e.clientX>rect.right+10||e.clientY<rect.top-10||e.clientY>rect.bottom+10)stop()});
 for(const event of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(event,e=>{if(e.pointerId===pointer){stop();if(button.hasPointerCapture(e.pointerId))button.releasePointerCapture(e.pointerId)}});
 button.addEventListener('pointerleave',e=>{if(e.pointerType!=='touch'&&kind==='pointer')stop()});
 button.addEventListener('keydown',e=>{if(e.key==='Escape'){stop();return}if(e.key===' '||e.key==='Enter'){e.preventDefault();if(!e.repeat)begin('key')}});
 button.addEventListener('keyup',e=>{if(e.key===' '||e.key==='Enter'){e.preventDefault();if(kind==='key')stop()}});
 button.addEventListener('blur',stop);button.addEventListener('contextmenu',e=>e.preventDefault());button.addEventListener('click',e=>{e.preventDefault();if(phase==='idle')notify('استمر بالضغط ثانيتين لإلغاء السلة')});
 dialog.addEventListener('close',stop);dialog.addEventListener('cancel',stop);addEventListener('blur',stop);document.addEventListener('visibilitychange',()=>{if(document.hidden)stop()});
 new ResizeObserver(()=>{button.style.setProperty('--hb-w',button.offsetWidth+'px');button.style.setProperty('--hb-h',button.offsetHeight+'px')}).observe(button);
 window.syncCancel=n=>{area.hidden=n===0&&phase!=='done';if(n===0&&phase==='holding')stop()};window.syncCancel(count());
 addEventListener('pagehide',()=>{stop();clearTimeout(resetTimer)},{once:true});
})();
