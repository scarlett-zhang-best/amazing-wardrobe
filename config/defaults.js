window.DRESSY_CONFIG = {
  assetCategories: [
    {id:"body decor",label:"Bodies",files:["1.png","2.png","3.png","4.png",...Array.from({length:23},(_,i)=>`${i+5}.png`)]},
    {id:"body parts",label:"Fantasy",files:["1.png","2.png","3.png",...Array.from({length:28},(_,i)=>`${i+4}.png`)]},
    {id:"face items",label:"Face",files:Array.from({length:19},(_,i)=>`${i+1}.png`)},
    {id:"top",label:"Tops",files:Array.from({length:20},(_,i)=>`${i+1}.png`)},
    {id:"jacket",label:"Jackets",files:["1.png","2.png","2b.png","3.png","4.png","5.png","6.png","7.png","8.png","8b.png","9.png","9b.png","10.png","11.png","12.png","13.png","13b.png"]},
    {id:"dress",label:"Dresses",files:["1.png","2.png","3.png","3b.png","5.png"]},
    {id:"bottom",label:"Bottoms",files:Array.from({length:13},(_,i)=>`${i+1}.png`)},
    {id:"top underwear",label:"Underwear",files:Array.from({length:5},(_,i)=>`${i+1}.png`)},
    {id:"socks",label:"Socks",files:Array.from({length:10},(_,i)=>`${i+1}.png`)},
    {id:"shoes",label:"Shoes",files:Array.from({length:9},(_,i)=>`${i+1}.png`)},
    {id:"accessories",label:"Accessories",files:["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png","13.png","13b.png","14.png","15.png","16.png","16b.png","17.png","18.png","19.png",...Array.from({length:30},(_,i)=>`${i+20}.png`)]},
    {id:"hand_weapons",label:"Handheld",files:Array.from({length:19},(_,i)=>`${i+1}.png`)},
    {id:"background-library",label:"Backgrounds",root:"backgrounds",hidden:true,files:"backyard_day1.webp backyard_day2.webp backyard_evening.webp backyard_night1.webp backyard_night2.webp backyard_nightl.webp basement1.webp basement2.webp basement3.webp basement4.webp basement5.webp basement6.webp basement7.webp basement8.webp bedroom01_day.webp bedroom01_day2.webp bedroom01_evening.webp bedroom01_evening2.webp bedroom01_nightl2.webp bedroom02_day.webp bedroom02_day3.webp bedroom02_evening.webp bedroom02_night.webp hotspring1.webp interior_entrance_day.webp interior_entrance_day2.webp interior_entrance_evening.webp interior_entrance_evening2.webp interior_entrance_night.webp interior_entrance_night2.webp interior_entrance_nightl.webp interior_entrance_nightl2.webp inthallway1_nightl.webp inthallway2_day.webp inthallway2_day2.webp inthallway2_evening.webp inthallway2_evening2.webp inthallway2_night.webp inthallway2_night2.webp inthallway2_night3.webp inthallway2_night4.webp inthallway2_nightl.webp mansion_front2b_night.webp mansion_front2c_night.webp mansion_front2d_night.webp mansion_front2_day.webp mansion_front2_evening.webp mansion_front2_night.webp mansion_front2_nightl.webp mansion_front2_nightlb.webp mansion_front2_nightlc.webp mansion_front3_nightl.webp mansion_front3_nightlb.webp mansion_front_day.webp mansion_front_evening.webp mansion_front_night.webp mansion_front_nightb.webp mansion_front_nightc.webp mansion_front_nightd.webp mansion_front_nightl.webp mansion_front_nightlb.webp mansion_front_nightlc.webp mkitchen_day.webp mkitchen_night.webp mroom_day.webp mroom_night1.webp mroom_nightl3.webp pond1_day.webp pond1_evening.webp pond1_night.webp pond1_night2.webp udgr_closed.webp udgr_fl_closed.webp udgr_fl_open.webp udgr_open.webp udgr_stdwn.webp udgr_stup.webp".split(" ")}
  ],
  characters: [
    { id: "luna", name: "Luna", vibe: "Sweet", skin: "#f5c9ad", hair: "waves", hairColor: "#4a2d2a", face: "soft" },
    { id: "nova", name: "Nova", vibe: "Bold", skin: "#8e563d", hair: "puffs", hairColor: "#211713", face: "bright" },
    { id: "mika", name: "Mika", vibe: "Cool", skin: "#e6b08c", hair: "bob", hairColor: "#29324d", face: "calm" },
    { id: "sol", name: "Sol", vibe: "Sunny", skin: "#b87350", hair: "short", hairColor: "#35241b", face: "happy" }
  ],
  skinTones: ["#f8dac5", "#f0c3a5", "#d99b73", "#b87350", "#8e563d", "#583626"],
  hair: [
    { id: "waves", name: "Soft waves", icon: "〰" }, { id: "bob", name: "Cute bob", icon: "◖" },
    { id: "puffs", name: "Cloud puffs", icon: "●" }, { id: "ponytail", name: "High pony", icon: "➰" },
    { id: "short", name: "Short crop", icon: "⌁" }, { id: "buns", name: "Space buns", icon: "∞" }
  ],
  hairColors: ["#211713", "#4a2d2a", "#9f5b35", "#e8b764", "#ef86a6", "#8068bd", "#4d86b8", "#2f7058"],
  clothes: [
    { id: "berry", name: "Berry dress", type: "dress", color: "#c94f72", accent: "#ffd4df" },
    { id: "sky", name: "Sky set", type: "set", color: "#6a9bd8", accent: "#eaf5ff" },
    { id: "sunny", name: "Sunny tee", type: "tee", color: "#efb93f", accent: "#fff0b2" },
    { id: "forest", name: "Forest coat", type: "coat", color: "#407a63", accent: "#d5e8d8" },
    { id: "night", name: "Night glam", type: "dress", color: "#3d355f", accent: "#d1b9ff" },
    { id: "cloud", name: "Cloud knit", type: "set", color: "#ede8e2", accent: "#be8c79" }
  ],
  stickers: ["✨","💖","🌸","⭐","🎀","🌈","🍓","🦋","👑","☁️","🌙","🧸","🍒","💎","🌼","⚡"],
  palettes: ["#ef476f", "#ff8fab", "#ffca3a", "#8ac926", "#38b6ff", "#6a4c93", "#3a2e39", "#ffffff"]
};

// Coordinated character pack: bodies, facial features, hair, and casual clothing.
(() => {
  const C=window.DRESSY_CONFIG;
  const tones=[..."abcdefghijklmnopqrstuvwxyz", "za","zb","zc"];
  const nums=(count,ext="png")=>Array.from({length:count},(_,i)=>`${i+1}.${ext}`);
  const casual="feminine casual outfits/feminine casual outfits";
  const added=[
    {id:"new-body",label:"New Bodies",root:"bodies/base",files:tones.map(x=>`base_body_${x}.png`)},
    {id:"body-spots",label:"Skin Patterns",root:"bodies/addon/spots",files:tones.map(x=>`spots_${x}.png`)},
    {id:"body-tints",label:"Body Tints",root:"bodies/addon/tint",files:tones.map(x=>`tint_${x}.png`)},
    {id:"bubble-body",label:"Bubble Bodies",root:"bodies/bubbles",files:tones.map(x=>`bubbles_body_${x}.png`)},
    {id:"snake-body",label:"Snake Bodies",root:"bodies/snake",files:tones.map(x=>`snake_body_${x}.png`)},
    {id:"face-eyes",label:"Eyes",root:"faces/assets/eyes",files:nums(4)},
    {id:"face-pupils",label:"Pupils",root:"faces/assets/pupils",files:["1a.png","1b.png","1c.png","2a.png","2b.png","2c.png","3a.png","3b.png","3c.png","4a.png","4b.png","4c.png","5a.png","5b.png","5c.png"]},
    {id:"face-lashes",label:"Eyelashes",root:"faces/assets/eyelashes",files:nums(7)},
    {id:"face-brows",label:"Eyebrows",root:"faces/assets/eyebrows",files:nums(10)},
    {id:"face-nose",label:"Noses",root:"faces/assets/nose",files:nums(6)},
    {id:"face-mouth",label:"Mouths",root:"faces/assets/mouth",files:nums(14)},
    {id:"face-ears",label:"Ears",root:"faces/assets/ears",files:nums(8)},
    {id:"face-decor",label:"Face Decor",root:"faces/assets/decor face",files:nums(21)},
    {id:"casual-hair-back",label:"Hair Back",root:`${casual}/hair (back)`,files:["1a.webp","1b.webp","2a.webp","2b.webp","3a.webp","3b.webp","4a.webp","4b.webp","5a.webp","5b.webp","6a.webp","6b.webp","7a.webp","7b.webp","8a.webp","8b.webp","9a.webp","9b.webp","10a.webp","10b.webp"]},
    {id:"casual-hair-bangs",label:"Hair Bangs",root:`${casual}/hair (bangs)`,files:nums(10,"webp")},
    {id:"casual-underwear",label:"Casual Underwear",root:`${casual}/underwear`,files:["bottom1.webp","bottom2.webp","bottom3.webp","bottom4.webp","bottom5.webp","top1.webp","top2.webp","top3.webp","top4.webp","top5.webp"]},
    {id:"casual-shoes",label:"Casual Shoes",root:`${casual}/shoes`,files:nums(10,"webp")},
    {id:"casual-bottom",label:"Casual Bottoms",root:`${casual}/bottom`,files:nums(7,"webp")},
    {id:"casual-top",label:"Casual Tops",root:`${casual}/top`,files:nums(13,"webp")},
    {id:"casual-dress",label:"Casual Dresses",root:`${casual}/dress`,files:nums(10,"webp")},
    {id:"casual-jacket",label:"Casual Jackets",root:`${casual}/jacket`,files:nums(10,"webp")},
    {id:"casual-jewelry",label:"Jewelry",root:`${casual}/jewelery`,files:["ankle bracelet.webp","bracelet.webp","bracelets.webp","ear rings.webp","long necklace.webp","pearls ears.webp","pearls necklace.webp","ring.webp","small necklace.webp","watch.webp"]}
  ];
  C.assetCategories=[...added,...C.assetCategories];
})();
