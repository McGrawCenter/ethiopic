    
    
    
const area = document.getElementById("keyboard");
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


//  copyright lexilogos.com
var car;


// capitalized letters added for iPhone
var dict = [
['`','፤','`'],
['~','፦','~'],
['1','፩','1'],
['2','፪','2'],
['3','፫','3'],
['4','፬','4'],
['5','፭','5'],
['6','፮','6'],
['7','፯','7'],
['8','፰','8'],
['9','፱','9'],
['፩0','፲','10'],
['፪0','፳','20'],
['፫0','፴','30'],
['፬0','፵','40'],
['፭0','፶','50'],
['፮0','፷','60'],
['፯0','፸','70'],
['፰0','፹','80'],
['፱0','፺','90'],
['፲0','፻','100'],  //100
['፻00','፼','10000'], // 10000
['==','፨','=='],
['++','፠','++'], 

['h','ህ','h'],
['H','ህ','H'],
['ህa','ሀ','ha'],
['ህu','ሁ','hu'],
['ህi','ሂ','hi'],
['ሀa','ሃ','haa'],
['ህe','ሄ','he'],
['ህo','ሆ','ho'],
['ሁa','ሇ','hua'],

['ህህ','ሕ','hh'],
['ሕa','ሐ','hha'],
['ሕu','ሑ','hhu'],
['ሕi','ሒ','hhi'],
['ሐa','ሓ','hhaa'],
['ሕe','ሔ','hhe'],
['ሕo','ሖ','hho'],
['ሑa','ሗ','hhua'],

['l','ል','l'],
['L','ል','L'],
['ልa','ለ','la'],
['ልu','ሉ','lu'],
['ልi','ሊ','li'],
['ለa','ላ','laa'],
['ልe','ሌ','le'],
['ልo','ሎ','lo'],
['ሉa','ሏ','lua'],

['m','ም','m'],
['M','ም','M'],
['ምa','መ','ma'],
['ምu','ሙ','mu'],
['ምi','ሚ','mi'],
['መa','ማ','maa'],
['ምe','ሜ','me'],
['ምo','ሞ','mo'],
['ሙa','ሟ','mua'],
['ምይa','ፙ','mya'],

['s','ስ','s'],
['S','ስ','S'],
['ስa','ሰ','sa'],
['ስu','ሱ','su'],
['ስi','ሲ','si'],
['ሰa','ሳ','saa'],
['ስe','ሴ','se'],
['ስo','ሶ','so'],
['ሱa','ሷ','sua'],


['ስስ','ሥ','ss'],
['ሥa','ሠ','ssa'],
['ሥu','ሡ','ssu'],
['ሥi','ሢ','ssi'],
['ሠa','ሣ','ssaa'],
['ሥe','ሤ','sse'],
['ሥo','ሦ','sso'],
['ሡa','ሧ','ssua'],

['ስህ','ሽ','sh'],
['ሽa','ሸ','sha'],
['ሽu','ሹ','shu'],
['ሽi','ሺ','shi'],
['ሸa','ሻ','shaa'],
['ሽe','ሼ','she'],
['ሽo','ሾ','sho'],
['ሹa','ሿ','shua'],

['r','ር','r'],
['R','ር','R'],
['ርa','ረ','ra'],
['ርu','ሩ','ru'],
['ርi','ሪ','ri'],
['ረa','ራ','raa'],
['ርe','ሬ','re'],
['ርo','ሮ','ro'],
['ሩa','ሯ','rua'],
['ርይa','ፘ','rya'], 

['q','ቅ','q'],
['Q','ቅ','Q'],
['ቅa','ቀ','qa'],
['ቅu','ቁ','qu'],
['ቅi','ቂ','qi'],
['ቀa','ቃ','qaa'],
['ቅe','ቄ','qe'],
['ቅo','ቆ','qo'],
['ቁa','ቇ','qua'],

['ቅw','ቍ','qw'],
['ቍa','ቈ','qwa'],
['ቍi','ቊ','qwi'],
['ቈa','ቋ','qwaa'],
['ቍe','ቌ','qwe'],

['ቅቅ','ቕ','qq'],
['ቕa','ቐ','qqa'],
['ቕu','ቑ','qqu'],
['ቕi','ቒ','qqi'],
['ቕa','ቓ','qqaa'],
['ቕe','ቔ','qqe'],
['ቕo','ቖ','qqo'],

['ቕw','ቚ','qqw'],
['ቚa','ቘ','qqwa'],
['ቚi','ቝ','qqwi'],
['ቘa','ቛ','qqwaa'],
['ቚe','ቜ','qqwe'],

['b','ብ','b'],
['B','ብ','B'],
['ብa','በ','ba'],
['ብu','ቡ','bu'],
['ብi','ቢ','bi'],
['በa','ባ','baa'],
['ብe','ቤ','be'],
['ብo','ቦ','bo'],
['ቡa','ቧ','bua'],

['v','ቭ','v'],
['V','ቭ','V'],
['ቭa','ቨ','va'],
['ቭu','ቩ','vu'],
['ቭi','ቪ','vi'],
['ቨa','ቫ','vaa'],
['ቭe','ቬ','ve'],
['ቭo','ቮ','vo'],
['ቩa','ቯ','vua'],

['t','ት','t'],
['T','ት','T'],
['ትa','ተ','ta'],
['ትu','ቱ','tu'],
['ትi','ቲ','ti'],
['ተa','ታ','taa'],
['ትe','ቴ','te'],
['ትo','ቶ','to'],
['ቱa','ቷ','tua'],

['ትት','ጥ','tt'],
['ጥa','ጠ','tta'],
['ጥu','ጡ','ttu'],
['ጥi','ጢ','tti'],
['ጠa','ጣ','ttaa'],
['ጥe','ጤ','tte'],
['ጥo','ጦ','tto'],
['ጡa','ጧ','ttua'],

['ትስ','ጽ','ts'],
['ጽa','ጸ','tsa'],
['ጽu','ጹ','tsu'],
['ጽi','ጺ','tsi'],
['ጸa','ጻ','tsaa'],
['ጽe','ጼ','tse'],
['ጽo','ጾ','tso'],
['ጹa','ጿ','tsua'],

['c','ች','c'],
['C','ች','C'],
['ችa','ቸ','ca'],
['ችu','ቹ','cu'],
['ችi','ቺ','ci'],
['ቸa','ቻ','caa'],
['ችe','ቼ','ce'],
['ችo','ቾ','co'],
['ቹa','ቿ','cua'],

['ችች','ጭ','cc'],
['ጭa','ጨ','cca'],
['ጭu','ጩ','ccu'],
['ጭi','ጪ','cci'],
['ጨa','ጫ','ccaa'],
['ጭe','ጬ','cce'],
['ጭo','ጮ','cco'],
['ጩa','ጯ','ccua'],

['x','ኅ','x'],
['X','ኅ','X'],
['ኅa','ኀ','xa'],
['ኅu','ኁ','xu'],
['ኅi','ኂ','xi'],
['ኀa','ኃ','xaa'],
['ኅe','ኄ','xe'],
['ኅo','ኆ','xo'],
['ኁa','ኇ','xua'],

['ኅw','ኍ','xw'], 
['ኍa','ኈ','xwa'],
['ኍi','ኊ','xwi'],
['ኈa','ኋ','xwaa'],
['ኍe','ኌ','xwe'],

['n','ን','n'],
['N','ን','N'],
['ንa','ነ','na'],
['ንu','ኑ','nu'],
['ንi','ኒ','ni'],
['ነa','ና','naa'],
['ንe','ኔ','ne'],
['ንo','ኖ','no'],
['ኑa','ኗ','nua'],

['ንy','ኝ','ny'], 
['ኝa','ኘ','nya'],
['ኝu','ኙ','nyu'],
['ኝi','ኚ','nyi'],
['ኘa','ኛ','nyaa'],
['ኝe','ኜ','nye'],
['ኝo','ኞ','nyo'],
['ኙa','ኟ','nyua'],

["'",'እ',"'"],
['እa','አ',"'a"],
['እu','ኡ',"'u"],
['እi','ኢ',"'i"],
['አa','ኣ',"'aa"],
['እe','ኤ',"'e"],
['እo','ኦ',"'o"],
['ኡa','ኧ',"'ua"],

['k','ክ','k'],
['K','ክ','K'],
['ክa','ከ','ka'],
['ክu','ኩ','ku'],
['ክi','ኪ','ki'],
['ከa','ካ','kaa'],
['ክe','ኬ','ke'],
['ክo','ኮ','ko'],
['ኩa','ኳ','kua'],

['ክw','ኵ','kw'],
['ኵa','ኰ','kwa'],
['ኵi','ኲ','kwi'],
['ኰa','ኳ','kwaa'],
['ኵe','ኴ','kwe'],

['ክክ','ኽ','kk'],
['ኽa','ኸ','kka'],
['ኽu','ኹ','kku'],
['ኽi','ኺ','kki'],
['ኸa','ኻ','kkaa'],
['ኽe','ኼ','kke'],
['ኽo','ኾ','kko'],
['ኹa','ዃ','kkua'],

['ኽw','ዅ','kkw'],
['ዅa','ዀ','kkwa'],
['ዅi','ዂ','kkwi'],
['ዀa','ዃ','kkwaa'],
['ዅe','ዄ','kkwe'],

['w','ው','w'],
['W','ው','W'],
['ውa','ወ','wa'],
['ውu','ዉ','wu'],
['ውi','ዊ','wi'],
['ወa','ዋ','waa'],
['ውe','ዌ','we'],
['ውo','ዎ','wo'],

//["እእ",'ዕ'," "],
['ዐa','ዓ'," aaaa"], // space aaaa
['ኣa','ዐ'," aaa"],
['ኣa','ኣ'," aa"],
[' a','አ'," a"], // space a

['ኢi','ዒ'," i"], // space ii
[' i','ኢ'," i"], // space i

['ኤe','ዔ',"''e"], //space ee
[' e','ኤ'," e"], //space e

['ኦo','ዖ'," o"], //space oo
[' o','ኦ'," o"], //space o

['ኡu','ዑ',"''u"], // space uu
[' u','ኡ'," u"], // space u





["እእ",'ዕ',"''"], // double apostrophe
['ዕa','ዐ',"''a"],
['ዕu','ዑ',"''u"],
['ዕi','ዒ',"''i"],
['ዐa','ዓ',"''aa"],
['ዕe','ዔ',"''e"],
['ዕo','ዖ',"''o"],

['z','ዝ','z'],
['Z','ዝ','Z'],
['ዝa','ዘ','za'],
['ዝu','ዙ','zu'],
['ዝi','ዚ','zi'],
['ዘa','ዛ','zaa'],
['ዝe','ዜ','ze'],
['ዝo','ዞ','zo'],
['ዙa','ዟ','zua'],

['ዝዝ','ዥ','zz'],
['ዥa','ዠ','zza'],
['ዥu','ዡ','zzu'],
['ዥi','ዢ','zzi'],
['ዠa','ዣ','zzaa'],
['ዥe','ዤ','zze'],
['ዥo','ዦ','zzo'],
['ዡa','ዧ','zzua'],

['y','ይ','y'],
['Y','ይ','Y'],
['ይa','የ','ya'],
['ይu','ዩ','yu'],
['ይi','ዪ','yi'],
['የa','ያ','yaa'],
['ይe','ዬ','ye'],
['ይo','ዮ','yo'],

['d','ድ','d'],
['D','ድ','D'],
['ድa','ደ','da'],
['ድu','ዱ','du'],
['ድi','ዲ','di'],
['ደa','ዳ','daa'],
['ድe','ዴ','de'],
['ድo','ዶ','do'],

['ድድ','ዽ','dd'],
['ዽa','ዸ','dda'],
['ዽu','ዹ','ddu'],
['ዽi','ዺ','ddi'],
['ዸa','ዻ','ddaa'],
['ዽe','ዼ','dde'],
['ዽo','ዾ','ddo'],
['ዹa','ዿ','ddua'],

['ድዝ','ፅ','dz'],
['ፅa','ፀ','dza'],
['ፅu','ፁ','dzu'],
['ፅi','ፂ','dzi'],
['ፀa','ፃ','dzaa'],
['ፅe','ፄ','dze'],
['ፅo','ፆ','dzo'],
['ፁa','ፇ','dzua'],

['j','ጅ','j'],
['ጅa','ጀ','ja'],
['ጅu','ጁ','ju'],
['ጅi','ጂ','ji'],
['ጀa','ጃ','jaa'],
['ጅe','ጄ','je'],
['ጅo','ጆ','jo'],
['ጁa','ጇ','jua'],

['g','ግ','g'],
['G','ግ','G'],
['ግa','ገ','ga'],
['ግu','ጉ','gu'],
['ግi','ጊ','gi'],
['ገa','ጋ','gaa'],
['ግe','ጌ','ge'],
['ግo','ጎ','go'],
['ጉa','ጏ','gua'],

['ግው','ጒ','gw'],
['ጒa','ጐ','gwa'],
['ጒi','ጕ','gwi'],
['ጐa','ጓ','gwaa'],
['ጒe','ጔ','gwe'],

['ግግ','ጝ','gg'],
['ጝa','ጘ','gga'],
['ጝu','ጙ','ggu'],
['ጝi','ጚ','ggi'],
['ጘa','ጛ ','ggaa'],
['ጝe','ጜ','gge'],
['ጝo','ጞ','ggo'],
['ጙa','ጟ','ggua'],

['f','ፍ','f'],
['F','ፍ','F'],
['ፍa','ፋ','fa'],
['ፍu','ፉ','fu'],
['ፍi','ፊ','fi'],
['ፋa','ፋ','faa'],
['ፍe','ፌ','fe'],
['ፍo','ፎ','fo'],
['ፉa','ፏ','fua'],
['ፍየ','ፚ','fya'],

['p','ፕ','p'],
['P','ፕ','P'],
['ፕa','ፐ','pa'],
['ፕu','ፑ','pu'],
['ፕi','ፒ','pi'],
['ፐa','ፓ','paa'],
['ፕe','ፔ','pe'],
['ፕo','ፖ','po'],
['ፑa','ፗ','pua'],

['ፕፕ','ጵ','pp'],
['ጵa','ጰ','ppa'],
['ጵu','ጱ','ppu'],
['ጵi','ጲ','ppi'],
['ጰa','ጳ','ppaa'],
['ጵe','ጴ','ppe'],
['ጵo','ጶ','ppo'],
['ጱa','ጷ','ppua'],

[';','፡',';'],
['`','፤','`'],
[',','፣',','],
['==','፨','=='],
['?','፧','?'],
[':','።',':'],
[',','፣',','],
['.','፥','.'],
['++','፠','++'],
['~','፦','~']
]

function transcribe() {
car = area.value;


for(x of dict) {
  car = car.replace(x[0],x[1]);
}

startPos = area.selectionStart;
endPos = area.selectionEnd;

beforeLen = area.value.length;
afterLen = car.length;
adjustment = afterLen - beforeLen;

area.value = car;

area.selectionStart = startPos + adjustment;
area.selectionEnd = endPos + adjustment;

var obj = area;
obj.focus();
obj.scrollTop = obj.scrollHeight;
}

var copybutton = document.getElementById("copybutton");
copybutton.addEventListener("click", copytext); 
var keybutton = document.getElementById("keybutton");
var keycontainer = document.getElementById("key-container");
var vowelbar = document.getElementById("vowelbar");
keybutton.addEventListener("click", showkey); 

function copytext() {
    var copytext = document.getElementById("keyboard");
    copytext.select();
    copytext.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copytext.value);
    copybutton.innerText="Copied";
    const myTimeout = setTimeout(function(){ copybutton.innerText="Copy"; }, 2000);
}

function showkey() {
  if(keycontainer.classList.contains('shown')) {
    keycontainer.classList.remove('shown');
    vowelbar.classList.add('shown');
  }
  else {
    keycontainer.classList.add('shown');
    vowelbar.classList.remove('shown');
  }
}



