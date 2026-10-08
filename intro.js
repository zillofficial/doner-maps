/* Opening screen: wait for critical imagery, never for the full lazy catalog. */
(()=>{
 const root=document.querySelector('#site-intro');if(!root)return;
 const covered=[...document.querySelectorAll('body > header, body > main, body > footer, .mobile-cart')];covered.forEach(el=>el.inert=true);
 const started=performance.now(),reduced=matchMedia('(prefers-reduced-motion: reduce)'),desktop=matchMedia('(min-width:600px)');
 const fire=root.querySelector('.intro-fire');if(desktop.matches){fire.classList.add('intro-tiled');fire.replaceChildren(...Array.from({length:Math.ceil(innerWidth/480)},()=>document.createElement('canvas')));}
 const video=document.createElement('video'),canvases=[...root.querySelectorAll('canvas')],contexts=canvases.map(c=>c.getContext('2d',{willReadFrequently:true}));let raf=0,last=0,closed=false;
 function finish(){if(closed)return;closed=true;covered.forEach(el=>el.inert=false);cancelAnimationFrame(raf);video.pause();document.documentElement.classList.remove('intro-loading');root.classList.add('intro-done');setTimeout(()=>root.remove(),450);}
 window.closeSiteIntro=finish;
 root.querySelector('button').addEventListener('click',finish);
 addEventListener('pageshow',e=>{if(e.persisted)finish()});
 function draw(now){if(closed)return;if(now-last>=50&&video.readyState>=2&&!document.hidden){last=now;const c=canvases[0],ctx=contexts[0];ctx.drawImage(video,0,0,c.width,c.height);const frame=ctx.getImageData(0,0,c.width,c.height),d=frame.data;for(let i=0;i<d.length;i+=4){const light=Math.max(d[i],d[i+1],d[i+2]);if(light<=10){d[i+3]=0;continue}const gain=255/light;d[i]=Math.min(255,d[i]*gain);d[i+1]=Math.min(255,d[i+1]*gain);d[i+2]=Math.min(255,d[i+2]*gain);d[i+3]=Math.round(255*(light-10)/245);}ctx.putImageData(frame,0,0);if(desktop.matches)contexts.slice(1).forEach(ctx=>{ctx.clearRect(0,0,c.width,c.height);ctx.drawImage(c,0,0)});}raf=requestAnimationFrame(draw);}
 if(!reduced.matches&&contexts.every(Boolean)){canvases.forEach(c=>{c.width=desktop.matches?480:Math.min(600,innerWidth);c.height=desktop.matches?122:180});video.muted=true;video.playsInline=true;video.loop=true;video.src=desktop.matches?'fire-laptop.mp4':'fire-edge.mp4';video.play().then(()=>{if(!closed)raf=requestAnimationFrame(draw)}).catch(()=>{});}
 const hero=document.querySelector('.scroll-expand__media'),logo=new Image();logo.src='intro-brand.webp';
 const ready=[hero?.decode().catch(()=>{}),logo.decode().catch(()=>{}),document.fonts.ready];
 Promise.race([Promise.allSettled(ready),new Promise(resolve=>setTimeout(resolve,4200))]).then(()=>setTimeout(finish,Math.max(0,1100-(performance.now()-started))));
 setTimeout(finish,5000);addEventListener('pagehide',finish,{once:true});
})();
