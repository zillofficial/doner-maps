const fs=require('fs'),path=require('path'),crypto=require('crypto');
const sharp=require('sharp');
const root=(fs.existsSync(path.resolve(__dirname,'../dist/index.html'))?path.resolve(__dirname,'../dist'):path.resolve(__dirname,'..')),out=path.join(root,'assets');fs.mkdirSync(out,{recursive:true});
const manifest={};
async function save(input,width,quality){const data=await sharp(input).resize({width,withoutEnlargement:true}).webp({quality,effort:6}).toBuffer();const name=path.basename(input,path.extname(input)).replace(/[^a-zA-Z0-9-]/g,'')+'-'+width+'-'+crypto.createHash('sha256').update(data).digest('hex').slice(0,10)+'.webp';fs.writeFileSync(path.join(out,name),data);return 'assets/'+name;}
(async()=>{const menu=JSON.parse(fs.readFileSync(path.join(root,'menu.json')));const items=Array.isArray(menu)?menu:menu.items;for(const src of new Set(items.map(x=>x.image).filter(Boolean))){const meta=await sharp(path.join(root,src)).metadata();const variants=[];for(const w of [240,480,800].filter(w=>w<=meta.width))variants.push({w,src:await save(path.join(root,src),w,82)});if(!variants.length)variants.push({w:meta.width,src:await save(path.join(root,src),meta.width,82)});manifest[src]={width:meta.width,height:meta.height,variants};}
const hero=[];for(const w of [480,768,1066])hero.push({w,src:await save(path.join(root,'photos/cheese-pull.jpg'),w,74)});manifest.hero={width:1066,height:1600,variants:hero};
manifest.brand=await save(path.join(root,'brand-menu-source.png'),1140,85);
fs.writeFileSync(path.join(root,'images.js'),'const imageAssets='+JSON.stringify(manifest)+';\n');console.log('Generated responsive images for',Object.keys(manifest).length,'sources');})();
