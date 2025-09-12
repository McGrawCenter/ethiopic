    class EthiopicKeyboard extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({
                mode: 'open'
            });
            this.shadowRoot.innerHTML = `<style>
 #keyboard { font-size:2em; }
 th, td { text-align:center; }
 #keyboard-container { position:relative; }
 #copybutton { position:absolute;bottom:4px;right:-8px;border-radius:4px; }
 #keybutton { position:absolute;bottom:4px;left:0;border-radius:4px; }
 #vowelbar { height: 340px;overflow-y:auto;display:none; }
 #key-container { display:none; }
 #key-container.shown,#vowelbar.shown { display:block; }
 button {color: #fff;background-color: #286090;border-color: #204d74;padding:0.2em 0.4em;}
</style>`;
            this.shadowRoot.innerHTML += `<div id="keyboard-container">
    <textarea id="keyboard" style="width:100%;height:200px;"></textarea>
    <button id="keybutton" class="btn-primary">Key</button>
    <button id="copybutton" class="btn-primary">Copy</button>
   </div>`;
            this.shadowRoot.innerHTML += `<div id="vowelbar" class='shown'>
 
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
  </div>`;
            this.shadowRoot.innerHTML += `<div id="key-container" class="">
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
<tr><th>'</th><td>አ</td><td>ኡ</td><td>ኢ</td><td>ኣ</td><td>ኤ</td><td>እ</td><td>ኦ</td><td>ኧ</td><td></td></tr>
<tr><th>k</th><td>ከ</td><td>ኩ</td><td>ኪ</td><td>ካ</td><td>ኬ</td><td>ክ</td><td>ኮ</td><td>ኳ</td><td></td></tr>
<tr><th>k<sup>w</sup></th><td>ኰ</td><td></td><td>ኲ</td><td>ኳ</td><td>ኴ</td><td>ኵ</td><td></td><td></td><td></td></tr>
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
<tr><th>tz</th><td>ፀ</td><td>ፁ</td><td>ፂ</td><td>ፃ</td><td>ፄ</td><td>ፅ</td><td>ፆ</td><td>ፇ</td><td></td></tr>
<tr><th>f</th><td>ፋ</td><td>ፉ</td><td>ፊ</td><td>ፋ</td><td>ፌ</td><td>ፍ</td><td>ፎ</td><td>ፏ</td><td>ፚ</td></tr>
<tr><th>p</th><td>ፐ</td><td>ፑ</td><td>ፒ</td><td>ፓ</td><td>ፔ</td><td>ፕ</td><td>ፖ</td><td>ፗ</td><td></td></tr>
</table>
</div>`;

            var keyboard = this.shadowRoot.getElementById("keyboard");
            var copybutton = this.shadowRoot.getElementById("copybutton");
            var keybutton = this.shadowRoot.getElementById("keybutton");
            var keycontainer = this.shadowRoot.getElementById("key-container");
            var vowelbar = this.shadowRoot.getElementById("vowelbar");

            this.shadowRoot.getElementById('keybutton').addEventListener('click', () => {
                if (keycontainer.classList.contains('shown')) {
                    keycontainer.classList.remove('shown');
                    vowelbar.classList.add('shown');
                } else {
                    keycontainer.classList.add('shown');
                    vowelbar.classList.remove('shown');
                }
            });

            copybutton.addEventListener('click', () => {
                keyboard.select();
                keyboard.setSelectionRange(0, 99999); // For mobile devices
                navigator.clipboard.writeText(keyboard.value);
                copybutton.innerText = "Copied";
                const myTimeout = setTimeout(function() {
                    copybutton.innerText = "Copy";
                }, 2000);
            });





            const area = this.shadowRoot.getElementById("keyboard");
            var textbin = "";

            area.addEventListener(
                "input",
                (event) => {
                    var txt = area.value;
                    textbin = txt;
                    transcribe();

                },
                false
            );


            var car;


            // capitalized letters added for iPhone
            var dict = [
                ['`', '፤', '`'],
                ['~', '፦', '~'],
                ['1', '፩', '1'],
                ['2', '፪', '2'],
                ['3', '፫', '3'],
                ['4', '፬', '4'],
                ['5', '፭', '5'],
                ['6', '፮', '6'],
                ['7', '፯', '7'],
                ['8', '፰', '8'],
                ['9', '፱', '9'],
                ['፩0', '፲', '10'],
                ['፪0', '፳', '20'],
                ['፫0', '፴', '30'],
                ['፬0', '፵', '40'],
                ['፭0', '፶', '50'],
                ['፮0', '፷', '60'],
                ['፯0', '፸', '70'],
                ['፰0', '፹', '80'],
                ['፱0', '፺', '90'],
                ['፲0', '፻', '100'], //100
                ['፻00', '፼', '10000'], // 10000
                ['==', '፨', '=='],
                ['++', '፠', '++'],

                ['h', 'ህ', 'h'],
                ['H', 'ህ', 'H'],
                ['ህa', 'ሀ', 'ha'],
                ['ህu', 'ሁ', 'hu'],
                ['ህi', 'ሂ', 'hi'],
                ['ሀa', 'ሃ', 'haa'],
                ['ህe', 'ሄ', 'he'],
                ['ህo', 'ሆ', 'ho'],
                ['ሁa', 'ሇ', 'hua'],

                ['ህህ', 'ሕ', 'hh'],
                ['ሕa', 'ሐ', 'hha'],
                ['ሕu', 'ሑ', 'hhu'],
                ['ሕi', 'ሒ', 'hhi'],
                ['ሐa', 'ሓ', 'hhaa'],
                ['ሕe', 'ሔ', 'hhe'],
                ['ሕo', 'ሖ', 'hho'],
                ['ሑa', 'ሗ', 'hhua'],

                ['l', 'ል', 'l'],
                ['L', 'ል', 'L'],
                ['ልa', 'ለ', 'la'],
                ['ልu', 'ሉ', 'lu'],
                ['ልi', 'ሊ', 'li'],
                ['ለa', 'ላ', 'laa'],
                ['ልe', 'ሌ', 'le'],
                ['ልo', 'ሎ', 'lo'],
                ['ሉa', 'ሏ', 'lua'],

                ['m', 'ም', 'm'],
                ['M', 'ም', 'M'],
                ['ምa', 'መ', 'ma'],
                ['ምu', 'ሙ', 'mu'],
                ['ምi', 'ሚ', 'mi'],
                ['መa', 'ማ', 'maa'],
                ['ምe', 'ሜ', 'me'],
                ['ምo', 'ሞ', 'mo'],
                ['ሙa', 'ሟ', 'mua'],
                ['ምይa', 'ፙ', 'mya'],

                ['s', 'ስ', 's'],
                ['S', 'ስ', 'S'],
                ['ስa', 'ሰ', 'sa'],
                ['ስu', 'ሱ', 'su'],
                ['ስi', 'ሲ', 'si'],
                ['ሰa', 'ሳ', 'saa'],
                ['ስe', 'ሴ', 'se'],
                ['ስo', 'ሶ', 'so'],
                ['ሱa', 'ሷ', 'sua'],


                ['ስስ', 'ሥ', 'ss'],
                ['ሥa', 'ሠ', 'ssa'],
                ['ሥu', 'ሡ', 'ssu'],
                ['ሥi', 'ሢ', 'ssi'],
                ['ሠa', 'ሣ', 'ssaa'],
                ['ሥe', 'ሤ', 'sse'],
                ['ሥo', 'ሦ', 'sso'],
                ['ሡa', 'ሧ', 'ssua'],

                ['ስህ', 'ሽ', 'sh'],
                ['ሽa', 'ሸ', 'sha'],
                ['ሽu', 'ሹ', 'shu'],
                ['ሽi', 'ሺ', 'shi'],
                ['ሸa', 'ሻ', 'shaa'],
                ['ሽe', 'ሼ', 'she'],
                ['ሽo', 'ሾ', 'sho'],
                ['ሹa', 'ሿ', 'shua'],

                ['r', 'ር', 'r'],
                ['R', 'ር', 'R'],
                ['ርa', 'ረ', 'ra'],
                ['ርu', 'ሩ', 'ru'],
                ['ርi', 'ሪ', 'ri'],
                ['ረa', 'ራ', 'raa'],
                ['ርe', 'ሬ', 're'],
                ['ርo', 'ሮ', 'ro'],
                ['ሩa', 'ሯ', 'rua'],
                ['ርይa', 'ፘ', 'rya'],

                ['q', 'ቅ', 'q'],
                ['Q', 'ቅ', 'Q'],
                ['ቅa', 'ቀ', 'qa'],
                ['ቅu', 'ቁ', 'qu'],
                ['ቅi', 'ቂ', 'qi'],
                ['ቀa', 'ቃ', 'qaa'],
                ['ቅe', 'ቄ', 'qe'],
                ['ቅo', 'ቆ', 'qo'],
                ['ቁa', 'ቇ', 'qua'],

                ['ቅw', 'ቍ', 'qw'],
                ['ቍa', 'ቈ', 'qwa'],
                ['ቍi', 'ቊ', 'qwi'],
                ['ቈa', 'ቋ', 'qwaa'],
                ['ቍe', 'ቌ', 'qwe'],

                ['ቅቅ', 'ቕ', 'qq'],
                ['ቕa', 'ቐ', 'qqa'],
                ['ቕu', 'ቑ', 'qqu'],
                ['ቕi', 'ቒ', 'qqi'],
                ['ቕa', 'ቓ', 'qqaa'],
                ['ቕe', 'ቔ', 'qqe'],
                ['ቕo', 'ቖ', 'qqo'],

                ['ቕw', 'ቚ', 'qqw'],
                ['ቚa', 'ቘ', 'qqwa'],
                ['ቚi', 'ቝ', 'qqwi'],
                ['ቘa', 'ቛ', 'qqwaa'],
                ['ቚe', 'ቜ', 'qqwe'],

                ['b', 'ብ', 'b'],
                ['B', 'ብ', 'B'],
                ['ብa', 'በ', 'ba'],
                ['ብu', 'ቡ', 'bu'],
                ['ብi', 'ቢ', 'bi'],
                ['በa', 'ባ', 'baa'],
                ['ብe', 'ቤ', 'be'],
                ['ብo', 'ቦ', 'bo'],
                ['ቡa', 'ቧ', 'bua'],

                ['v', 'ቭ', 'v'],
                ['V', 'ቭ', 'V'],
                ['ቭa', 'ቨ', 'va'],
                ['ቭu', 'ቩ', 'vu'],
                ['ቭi', 'ቪ', 'vi'],
                ['ቨa', 'ቫ', 'vaa'],
                ['ቭe', 'ቬ', 've'],
                ['ቭo', 'ቮ', 'vo'],
                ['ቩa', 'ቯ', 'vua'],

                ['t', 'ት', 't'],
                ['T', 'ት', 'T'],
                ['ትa', 'ተ', 'ta'],
                ['ትu', 'ቱ', 'tu'],
                ['ትi', 'ቲ', 'ti'],
                ['ተa', 'ታ', 'taa'],
                ['ትe', 'ቴ', 'te'],
                ['ትo', 'ቶ', 'to'],
                ['ቱa', 'ቷ', 'tua'],

                ['ትት', 'ጥ', 'tt'],
                ['ጥa', 'ጠ', 'tta'],
                ['ጥu', 'ጡ', 'ttu'],
                ['ጥi', 'ጢ', 'tti'],
                ['ጠa', 'ጣ', 'ttaa'],
                ['ጥe', 'ጤ', 'tte'],
                ['ጥo', 'ጦ', 'tto'],
                ['ጡa', 'ጧ', 'ttua'],

                ['ትስ', 'ጽ', 'ts'],
                ['ጽa', 'ጸ', 'tsa'],
                ['ጽu', 'ጹ', 'tsu'],
                ['ጽi', 'ጺ', 'tsi'],
                ['ጸa', 'ጻ', 'tsaa'],
                ['ጽe', 'ጼ', 'tse'],
                ['ጽo', 'ጾ', 'tso'],
                ['ጹa', 'ጿ', 'tsua'],

                ['c', 'ች', 'c'],
                ['C', 'ች', 'C'],
                ['ችa', 'ቸ', 'ca'],
                ['ችu', 'ቹ', 'cu'],
                ['ችi', 'ቺ', 'ci'],
                ['ቸa', 'ቻ', 'caa'],
                ['ችe', 'ቼ', 'ce'],
                ['ችo', 'ቾ', 'co'],
                ['ቹa', 'ቿ', 'cua'],

                ['ችች', 'ጭ', 'cc'],
                ['ጭa', 'ጨ', 'cca'],
                ['ጭu', 'ጩ', 'ccu'],
                ['ጭi', 'ጪ', 'cci'],
                ['ጨa', 'ጫ', 'ccaa'],
                ['ጭe', 'ጬ', 'cce'],
                ['ጭo', 'ጮ', 'cco'],
                ['ጩa', 'ጯ', 'ccua'],

                ['x', 'ኅ', 'x'],
                ['X', 'ኅ', 'X'],
                ['ኅa', 'ኀ', 'xa'],
                ['ኅu', 'ኁ', 'xu'],
                ['ኅi', 'ኂ', 'xi'],
                ['ኀa', 'ኃ', 'xaa'],
                ['ኅe', 'ኄ', 'xe'],
                ['ኅo', 'ኆ', 'xo'],
                ['ኁa', 'ኇ', 'xua'],

                ['ኅw', 'ኍ', 'xw'],
                ['ኍa', 'ኈ', 'xwa'],
                ['ኍi', 'ኊ', 'xwi'],
                ['ኈa', 'ኋ', 'xwaa'],
                ['ኍe', 'ኌ', 'xwe'],

                ['n', 'ን', 'n'],
                ['N', 'ን', 'N'],
                ['ንa', 'ነ', 'na'],
                ['ንu', 'ኑ', 'nu'],
                ['ንi', 'ኒ', 'ni'],
                ['ነa', 'ና', 'naa'],
                ['ንe', 'ኔ', 'ne'],
                ['ንo', 'ኖ', 'no'],
                ['ኑa', 'ኗ', 'nua'],

                ['ንy', 'ኝ', 'ny'],
                ['ኝa', 'ኘ', 'nya'],
                ['ኝu', 'ኙ', 'nyu'],
                ['ኝi', 'ኚ', 'nyi'],
                ['ኘa', 'ኛ', 'nyaa'],
                ['ኝe', 'ኜ', 'nye'],
                ['ኝo', 'ኞ', 'nyo'],
                ['ኙa', 'ኟ', 'nyua'],

                ["'", 'እ', "'"],
                ['እa', 'አ', "'a"],
                ['እu', 'ኡ', "'u"],
                ['እi', 'ኢ', "'i"],
                ['አa', 'ኣ', "'aa"],
                ['እe', 'ኤ', "'e"],
                ['እo', 'ኦ', "'o"],
                ['ኡa', 'ኧ', "'ua"],
                
                [':a', 'አ', 'colon a'],                
                [':u', 'ኡ', 'colon u'],
                [':i', 'ኢ', 'colon i'],
                [':aa', 'ኣ', 'colon aa'],
                [':e', 'ኤ', 'colon e'],
                [':o', 'ኦ', 'colon o'],  
                [':አa', 'ዐ', 'colon aa'],
                ['።a', '።አ', 'colon a'],                
                ['።u', '።ኡ', 'colon u'],
                ['።i', '።ኢ', 'colon i'],
                ['።aa', '።ኣ', 'colon aa'],
                ['።e', '።ኤ', 'colon e'],
                ['።o', '።ኦ', 'colon o'],  
                ['።አa', '።ዐ', 'colon aa'],                
                ['ኡu', 'ዑ', 'colon uu'],
                ['ኢi', 'ዒ', 'colon ii'],
                ['ዐa', 'ዓ', 'colon aaa'],
                ['ኤe', 'ዔ', 'colon ee'],
                ['ኦo', 'ዖ', 'colon oo'],
                                     

                ['k', 'ክ', 'k'],
                ['K', 'ክ', 'K'],
                ['ክa', 'ከ', 'ka'],
                ['ክu', 'ኩ', 'ku'],
                ['ክi', 'ኪ', 'ki'],
                ['ከa', 'ካ', 'kaa'],
                ['ክe', 'ኬ', 'ke'],
                ['ክo', 'ኮ', 'ko'],
                ['ኩa', 'ኳ', 'kua'],

                ['ክw', 'ኵ', 'kw'],
                ['ኵa', 'ኰ', 'kwa'],
                ['ኵi', 'ኲ', 'kwi'],
                ['ኰa', 'ኳ', 'kwaa'],
                ['ኵe', 'ኴ', 'kwe'],

                ['ክክ', 'ኽ', 'kk'],
                ['ኽa', 'ኸ', 'kka'],
                ['ኽu', 'ኹ', 'kku'],
                ['ኽi', 'ኺ', 'kki'],
                ['ኸa', 'ኻ', 'kkaa'],
                ['ኽe', 'ኼ', 'kke'],
                ['ኽo', 'ኾ', 'kko'],
                ['ኹa', 'ዃ', 'kkua'],

                ['ኽw', 'ዅ', 'kkw'],
                ['ዅa', 'ዀ', 'kkwa'],
                ['ዅi', 'ዂ', 'kkwi'],
                ['ዀa', 'ዃ', 'kkwaa'],
                ['ዅe', 'ዄ', 'kkwe'],

                ['w', 'ው', 'w'],
                ['W', 'ው', 'W'],
                ['ውa', 'ወ', 'wa'],
                ['ውu', 'ዉ', 'wu'],
                ['ውi', 'ዊ', 'wi'],
                ['ወa', 'ዋ', 'waa'],
                ['ውe', 'ዌ', 'we'],
                ['ውo', 'ዎ', 'wo'],

                //["እእ",'ዕ'," "],
                [' ዐa', 'ዓ', " aaaa"], // space aaaa
                [' አa', ' ዐ', " aa"], // space aa
                [' ዐa', ' ዐ', " aaa"],  // space aaa                
                [' a', ' አ', " a"], // space a

                ['ኢi', ' ዒ', " i"], // space ii
                [' i', ' ኢ', " i"], // space i

                ['ኤe', ' ዔ', "''e"], //space ee
                [' e', ' ኤ', " e"], //space e

                ['ኦo', ' ዖ', " o"], //space oo
                [' o', ' ኦ', " o"], //space o

                ['ኡu', ' ዑ', "''u"], // space uu
                [' u', ' ኡ', " u"], // space u


                ["እእ", 'ዕ', "''"], // double apostrophe
                ['ዕa', 'ዐ', "''a"],
                ['ዕu', 'ዑ', "''u"],
                ['ዕi', 'ዒ', "''i"],
                ['ዐa', 'ዓ', "''aa"],
                ['ዕe', 'ዔ', "''e"],
                ['ዕo', 'ዖ', "''o"],

                ['z', 'ዝ', 'z'],
                ['Z', 'ዝ', 'Z'],
                ['ዝa', 'ዘ', 'za'],
                ['ዝu', 'ዙ', 'zu'],
                ['ዝi', 'ዚ', 'zi'],
                ['ዘa', 'ዛ', 'zaa'],
                ['ዝe', 'ዜ', 'ze'],
                ['ዝo', 'ዞ', 'zo'],
                ['ዙa', 'ዟ', 'zua'],

                ['ዝዝ', 'ዥ', 'zz'],
                ['ዥa', 'ዠ', 'zza'],
                ['ዥu', 'ዡ', 'zzu'],
                ['ዥi', 'ዢ', 'zzi'],
                ['ዠa', 'ዣ', 'zzaa'],
                ['ዥe', 'ዤ', 'zze'],
                ['ዥo', 'ዦ', 'zzo'],
                ['ዡa', 'ዧ', 'zzua'],

                ['y', 'ይ', 'y'],
                ['Y', 'ይ', 'Y'],
                ['ይa', 'የ', 'ya'],
                ['ይu', 'ዩ', 'yu'],
                ['ይi', 'ዪ', 'yi'],
                ['የa', 'ያ', 'yaa'],
                ['ይe', 'ዬ', 'ye'],
                ['ይo', 'ዮ', 'yo'],

                ['d', 'ድ', 'd'],
                ['D', 'ድ', 'D'],
                ['ድa', 'ደ', 'da'],
                ['ድu', 'ዱ', 'du'],
                ['ድi', 'ዲ', 'di'],
                ['ደa', 'ዳ', 'daa'],
                ['ድe', 'ዴ', 'de'],
                ['ድo', 'ዶ', 'do'],

                ['ድድ', 'ዽ', 'dd'],
                ['ዽa', 'ዸ', 'dda'],
                ['ዽu', 'ዹ', 'ddu'],
                ['ዽi', 'ዺ', 'ddi'],
                ['ዸa', 'ዻ', 'ddaa'],
                ['ዽe', 'ዼ', 'dde'],
                ['ዽo', 'ዾ', 'ddo'],
                ['ዹa', 'ዿ', 'ddua'],

                ['ትዝ', 'ፅ', 'tz'],
                ['ፅa', 'ፀ', 'tza'],
                ['ፅu', 'ፁ', 'tzu'],
                ['ፅi', 'ፂ', 'tzi'],
                ['ፀa', 'ፃ', 'tzaa'],
                ['ፅe', 'ፄ', 'tdze'],
                ['ፅo', 'ፆ', 'tzo'],
                ['ፁa', 'ፇ', 'tzua'],		
		
                ['j', 'ጅ', 'j'],
                ['ጅa', 'ጀ', 'ja'],
                ['ጅu', 'ጁ', 'ju'],
                ['ጅi', 'ጂ', 'ji'],
                ['ጀa', 'ጃ', 'jaa'],
                ['ጅe', 'ጄ', 'je'],
                ['ጅo', 'ጆ', 'jo'],
                ['ጁa', 'ጇ', 'jua'],

                ['g', 'ግ', 'g'],
                ['G', 'ግ', 'G'],
                ['ግa', 'ገ', 'ga'],
                ['ግu', 'ጉ', 'gu'],
                ['ግi', 'ጊ', 'gi'],
                ['ገa', 'ጋ', 'gaa'],
                ['ግe', 'ጌ', 'ge'],
                ['ግo', 'ጎ', 'go'],
                ['ጉa', 'ጏ', 'gua'],

                ['ግው', 'ጒ', 'gw'],
                ['ጒa', 'ጐ', 'gwa'],
                ['ጒi', 'ጕ', 'gwi'],
                ['ጐa', 'ጓ', 'gwaa'],
                ['ጒe', 'ጔ', 'gwe'],

                ['ግግ', 'ጝ', 'gg'],
                ['ጝa', 'ጘ', 'gga'],
                ['ጝu', 'ጙ', 'ggu'],
                ['ጝi', 'ጚ', 'ggi'],
                ['ጘa', 'ጛ ', 'ggaa'],
                ['ጝe', 'ጜ', 'gge'],
                ['ጝo', 'ጞ', 'ggo'],
                ['ጙa', 'ጟ', 'ggua'],

                ['f', 'ፍ', 'f'],
                ['F', 'ፍ', 'F'],
                ['ፍa', 'ፋ', 'fa'],
                ['ፍu', 'ፉ', 'fu'],
                ['ፍi', 'ፊ', 'fi'],
                ['ፋa', 'ፋ', 'faa'],
                ['ፍe', 'ፌ', 'fe'],
                ['ፍo', 'ፎ', 'fo'],
                ['ፉa', 'ፏ', 'fua'],
                ['ፍየ', 'ፚ', 'fya'],

                ['p', 'ጵ', 'p'],
                ['P', 'ጵ', 'P'],
                ['ጵa', 'ጰ', 'pa'],
                ['ጵu', 'ጱ', 'pu'],
                ['ጵi', 'ፒ', 'pi'],
                ['ጰa', 'ጳ', 'paa'],
                ['ጵe', 'ፔ', 'pe'],
                ['ጵo', 'ፖ', 'po'],
                ['ጱa', 'ፗ', 'pua'],

                ['ጵጵ',      'ፕ', 'pp'],
                ['ፕa', 'ፐ', 'ppa'],
                ['ፕu', 'ፑ', 'ppu'],
                ['ፕi', 'ጲ', 'ppi'],
                ['ፐa', 'ጳ', 'ppaa'],
                ['ፕe', 'ጴ', 'ppe'],
                ['ፕo', 'ጶ', 'ppo'],
                ['ፑa', 'ጷ', 'ppua'],

                [';', '፡', ';'],
                ['`', '፤', '`'],
                [',', '፣', ','],
                ['==', '፨', '=='],
                ['?', '፧', '?'],
                [':', ':', ':'],
                ['::', '።', '::'],
                [',', '፣', ','],
                ['.', '፥', '.'],
                ['++', '፠', '++'],
                ['~', '፦', '~']
            ]

            function transcribe() {
                car = area.value;

                car = car.replace(/ አa/i, ' ዐ'); // space aa

		//car = car.replace(/(^(.|[\r\n]))[Uu]u/i, '$1ዑ'); // uu at beginning of line
		car = car.replace(/(^|[\r\n])[Uu]u/i, '$1ዑ'); // uu at beginning of line
		
		car = car.replace(/(^|[\r\n])[Ii]i/i, '$1ዒ'); // ii at beginning of line
		car = car.replace(/(^|[\r\n])[Ee]e/i, '$1ዔ'); // ee at beginning of line
		car = car.replace(/(^|[\r\n])[Oo]o/i, '$1ዖ'); // oo at beginning of line
		car = car.replace(/(^|[\r\n])[Uu]/i, '$1ኡ'); // u at beginning of line
		car = car.replace(/(^|[\r\n])[Ii]/i, '$1ኢ'); // i at beginning of line
			
		car = car.replace(/(^|[\r\n])[Aa]/i,'$1አ'); // a at beginning of line	
		car = car.replace(/(^|[\r\n])አa/i, '$1ዐ'); // aa at beginning of line		
		car = car.replace(/(^|[\r\n]| )ዐa/i, '$1ኣ'); // aaa at beginning of line
		car = car.replace(/(^|[\r\n]| )ኣa/i, '$1ዓ'); // aaaa at beginning of line
				
		car = car.replace(/(^|[\r\n])[Ee]/i, '$1ኤ'); // e at beginning of line
		car = car.replace(/(^|[\r\n])[Oo]/i, '$1ኦ'); // o at beginning of line

                var x;
                for (x of dict) {
                    car = car.replace(x[0], x[1]);
                }

                var startPos = area.selectionStart;
                var endPos = area.selectionEnd;

                var beforeLen = area.value.length;
                var afterLen = car.length;
                var adjustment = afterLen - beforeLen;

                area.value = car;

                area.selectionStart = startPos + adjustment;
                area.selectionEnd = endPos + adjustment;

                var obj = area;
                obj.focus();
                obj.scrollTop = obj.scrollHeight;
            }





        }
    }
    customElements.define('ethiopic-keyboard', EthiopicKeyboard);
