---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: secondary
banner: TheHistory-wide.jpg
---
<style>
 #keyboard { font-size:2em;margin-top:2em; }
 th, td { text-align:center; }
 #keyboard-container { position:relative; }
 #copybutton { position:absolute;bottom:3px;right:0;border-radius:4px; }
 #keybutton { position:absolute;bottom:3px;left:0;border-radius:4px; }
 #vowelbar { height: 340px;overflow-y:auto;display:none; }
 #key-container { height: 400px;overflow-y:auto;display:none; }
 #key-container.shown,#vowelbar.shown { display:block; }
</style>
<div class='row'>
  <div class='col-sm-12'><h2 style="margin:2em 0 0;">Ethiopic Keyboard</h2></div>
</div>
<div class='row'>

  <div class='col-sm-12'>

  <div id="keyboard-container">
    <textarea id="keyboard" style="width:100%;height:200px;"></textarea>
    <button id="keybutton" class="btn-primary">Key</button>
    <button id="copybutton" class="btn-primary">Copy</button>
   </div>
   
   
   <div id="vowelbar" class='shown'>
 
  <table style='margin:1em auto;width:80%'>
  <tr>
    <th>ma</th>
    <th>mu</th>
    <th>mi</th>
    <th>maa</th>
    <th>me</th>
    <th>m</th>
    <th>mo</th>
    <th>mua</th>
    <th>mya</th>
      </tr>
      <tr>
    <td>መ</td>
    <td>ሙ</td>
    <td>ሚ</td>
    <td>ማ</td>
    <td>ሜ</td>
    <td>ም</td>
    <td>ሞ</td>
    <td>ሟ</td>
    <td>ፙ</td>
  </tr>

</table> 
  </div>



<div id="key-container" class="">
<table style='margin:1em auto;width:100%;table-layout: fixed;'>
<tr><th></th><th>a</th><th>u</th><th>i</th><th>aa</th><th>e</th><th>🛇</th><th>o</th><th>ua</th><th>ya</th></tr>
<tr><th>h</th><td>ሀ</td><td>ሁ</td><td>ሂ</td><td>ሃ</td><td>ሄ</td><td>ህ</td><td>ሆ</td><td>ሇ</td><td></td></tr>
<tr><th>l</th><td>ለ</td><td>ሉ</td><td>ሊ</td><td>ላ</td><td>ሌ</td><td>ል</td><td>ሎ</td><td>ሏ</td><td></td></tr>
<tr><th>hh</th><td>ሐ</td><td>ሑ</td><td>ሒ</td><td>ሓ</td><td>ሔ</td><td>ሕ</td><td>ሖ</td><td>ሗ</td><td></td></tr>
<tr><th>m</th><td>መ</td><td>ሙ</td><td>ሚ</td><td>ማ</td><td>ሜ</td><td>ም</td><td>ሞ</td><td>ሟ</td><td>ፙ</td></tr>
<tr><th>ss</th><td>ሠ</td><td>ሡ</td><td>ሢ</td><td>ሣ</td><td>ሤ</td><td>ሥ</td><td>ሦ</td><td>ሧ</td><td></td></tr>

<tr><th> r</th><td>ረ</td><td>ሩ</td><td>ሪ</td><td>ራ</td><td>ሬ</td><td>ር</td><td>ሮ</td><td>ሯ</td><td>ፘ</td></tr>
<tr><th>s</th><td>ሰ</td><td>ሱ</td><td>ሲ</td><td>ሳ</td><td>ሴ</td><td>ስ</td><td>ሶ</td><td>ሷ</td><td></td></tr>
<tr><th>sh</th><td>ሸ</td><td>ሹ</td><td>ሺ</td><td>ሻ</td><td>ሼ</td><td>ሽ</td><td>ሾ</td><td>ሿ</td><td></td></tr>
<tr><th>q</th><td>ቀ</td><td>ቁ</td><td>ቂ</td><td>ቃ</td><td>ቄ</td><td>ቅ</td><td>ቆ</td><td>ቇ</td><td></td></tr>
<tr><th>qw</th><td>ቈ</td><td></td><td>ቊ</td><td>ቋ</td><td>ቌ</td><td>ቍ</td><td></td><td></td><td></td></tr>
<tr><th>qq</th><td>ቐ</td><td>ቑ</td><td>ቒ</td><td>ቓ</td><td>ቔ</td><td>ቅ</td><td>ቖ</td><td></td><td></td></tr>
<tr><th>qqw</th><td>ቘ</td><td></td><td>ቝ</td><td>ቛ</td><td>ቜ</td><td>ቚ</td><td></td><td></td><td></td></tr>
<tr><th>b</th><td>በ</td><td>ቡ</td><td>ቢ</td><td>ባ</td><td>ቤ</td><td>ብ</td><td>ቦ</td><td>ቧ</td><td></td></tr>
<tr><th>v</th><td>ቨ</td><td>ቩ</td><td>ቪ</td><td>ቫ</td><td>ቬ</td><td>ቭ</td><td>ቮ</td><td>ቯ</td><td></td></tr>
<tr><th>t</th><td>ተ</td><td>ቱ</td><td>ቲ</td><td>ታ</td><td>ቴ</td><td>ት</td><td>ቶ</td><td>ቷ</td><td></td></tr>
<tr><th>c</th><td>ቸ</td><td>ቹ</td><td>ቺ</td><td>ቻ</td><td>ቼ</td><td>ች</td><td>ቾ</td><td>ቿ</td><td></td></tr>
<tr><th>x</th><td>ኀ</td><td>ኁ</td><td>ኂ</td><td>ኃ</td><td>ኄ</td><td>ኅ</td><td>ኆ</td><td>ኇ</td><td></td></tr>

<tr><th>xw</th><td>ኈ</td><td></td><td>ኊ</td><td>ኋ</td><td>ኌ</td><td>ኍ</td><td></td><td></td><td></td></tr>
<tr><th>n</th><td>ነ</td><td>ኑ</td><td>ኒ</td><td>ና</td><td>ኔ</td><td>ን</td><td>ኖ</td><td>ኗ</td><td></td></tr>
<tr><th>ny</th><td>ኘ</td><td>ኙ</td><td>ኚ</td><td>ኛ</td><td>ኜ</td><td>ኝ</td><td>ኞ</td><td>ኟ</td><td></td></tr>
</table>
<table style='margin:1em auto;width:100%;table-layout: fixed;'>
<tr><th></th><th>a</th><th>u</th><th>i</th><th>aa</th><th>e</th><th>🛇</th><th>o</th><th>ua</th><th>ya</th></tr>
<tr><th>'</th><td>አ</td><td>ኡ</td><td>ኢ</td><td>ኣ</td><td>ኤ</td><td>እ</td><td>ኦ</td><td>ኧ</td><td></td></tr>
<tr><th>k</th><td>ከ</td><td>ኩ</td><td>ኪ</td><td>ካ</td><td>ኬ</td><td>ክ</td><td>ኮ</td><td>ኳ</td><td></td></tr>
<tr><th>kk</th><td>ኸ</td><td>ኹ</td><td>ኺ</td><td>ኻ</td><td>ኼ</td><td>ኽ</td><td>ኾ</td><td>ዃ</td><td></td></tr>
<tr><th>kkw</th><td>ዀ</td><td></td><td>ዂ</td><td>ዃ</td><td>ዄ</td><td>ዅ</td><td></td><td></td><td></td></tr>
<tr><th>w</th><td>ወ</td><td>ዉ</td><td>ዊ</td><td>ዋ</td><td>ዌ</td><td>ው</td><td>ዎ</td><td></td><td></td></tr>
<tr><th>''</th><td>ዐ</td><td>ዑ</td><td>ዒ</td><td>ዓ</td><td>ዔ</td><td>ዕ</td><td>ዖ</td><td></td><td></td></tr>
<tr><th>z</th><td>ዘ</td><td>ዙ</td><td>ዚ</td><td>ዛ</td><td>ዜ</td><td>ዝ</td><td>ዞ</td><td>ዟ</td><td></td></tr>
<tr><th>zz</th><td>ዠ</td><td>ዡ</td><td>ዢ</td><td>ዣ</td><td>ዤ</td><td>ዥ</td><td>ዦ</td><td>ዧ</td><td></td></tr>
<tr><th>y</th><td>የ</td><td>ዩ</td><td>ዪ</td><td>ያ</td><td>ዬ</td><td>ይ</td><td>ዮ</td><td></td><td></td></tr>
<tr><th>d</th><td>ደ</td><td>ዱ</td><td>ዲ</td><td>ዳ</td><td>ዴ</td><td>ድ</td><td>ዶ</td><td></td><td></td></tr>
<tr><th>j</th><td>ጀ</td><td>ጁ</td><td>ጂ</td><td>ጃ</td><td>ጄ</td><td>ጅ</td><td>ጆ</td><td>ጇ</td><td></td></tr>
<tr><th>g</th><td>ገ</td><td>ጉ</td><td>ጊ</td><td>ጋ</td><td>ጌ</td><td>ግ</td><td>ጎ</td><td>ጏ</td><td></td></tr>
<tr><th>gw</th><td>ጐ</td><td></td><td>ጕ</td><td>ጓ</td><td>ጔ</td><td>ጒ</td><td></td><td></td><td></td></tr>
<tr><th>tt</th><td>ጠ</td><td>ጡ</td><td>ጢ</td><td>ጣ</td><td>ጤ</td><td>ጥ</td><td>ጦ</td><td>ጧ</td></tr>
<tr><th>cc</th><td>ጨ</td><td>ጩ</td><td>ጪ</td><td>ጫ</td><td>ጬ</td><td>ጭ</td><td>ጮ</td><td>ጯ</td></tr>
<tr><th>pp</th><td>ጰ</td><td>ጱ</td><td>ጲ</td><td>ጳ</td><td>ጴ</td><td>ጵ</td><td>ጶ</td><td>ጷ</td><td></td></tr>
<tr><th>ts</th><td>ጸ</td><td>ጹ</td><td>ጺ</td><td>ጻ</td><td>ጼ</td><td>ጽ</td><td>ጾ</td><td>ጿ</td><td></td></tr>
<tr><th>dz</th><td>ፀ</td><td>ፁ</td><td>ፂ</td><td>ፃ</td><td>ፄ</td><td>ፅ</td><td>ፆ</td><td>ፇ</td><td></td></tr>
<tr><th>f</th><td>ፋ</td><td>ፉ</td><td>ፊ</td><td>ፋ</td><td>ፌ</td><td>ፍ</td><td>ፎ</td><td>ፏ</td><td>ፚ</td></tr>
<tr><th>p</th><td>ፐ</td><td>ፑ</td><td>ፒ</td><td>ፓ</td><td>ፔ</td><td>ፕ</td><td>ፖ</td><td>ፗ</td><td></td></tr>
</table>
</div>

 

  </div>

</div>
<script src="assets/js/keyboard.js?v=0.0.2"></script>
