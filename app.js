var ip = '';
document.getElementById('countdown').style.display = "none";
var maghrib = null;
var loc = null;
let today = new Date();
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"];
var day = today.getDate();
var m = today.getMonth();
const month = monthNames[m];
const year = today.getFullYear();
var date1 = month + ' ' + day + ', ' + today.getFullYear();
// ======================================================================
const doaa = ['اَللّهُمَّ اجْعَلْ صِيامي فيهِ صِيامَ الصّائِمينَ وَ قِيامي فيِهِ قِيامَ القائِمينَ ، وَ نَبِّهْني فيهِ عَن نَوْمَةِ الغافِلينَ ، وَهَبْ لي جُرمي فيهِ يا اِلهَ العالمينَ ، وَاعْفُ عَنّي يا عافِياً عَنِ المُجرِمينَ .',
  'اَللّهُمَّ لا تَخْذُلني فيهِ لِتَعَرُّضِ مَعصِيَتِكَ ، وَ لاتَضرِبني بِسِياطِ نَقِمَتِكَ ، وَ زَحْزِحني فيهِ مِن موُجِبات سَخَطِكَ بِمَنِّكَ وَ اَياديكَ يا مُنتَهى رَغْبَةِ الرّاغِبينَ .',
  'اَللّهُمَّ طَهِّرْني فيهِ مِنَ الدَّنسِ وَ الْأقْذارِ ، وَ صَبِّرْني فيهِ عَلى كائِناتِ الْأَقدارِ ، وَ وَفِّقْني فيهِ لِلتُّقى وَ صُحْبَةِ الْأبرارِ بِعَوْنِكَ ياقُرَّةَ عَيْن الْمَساكينِ ',
  'اَللّهُمَّ لاتُؤاخِذْني فيهِ بالْعَثَراتِ ، وَ اَقِلْني فيهِ مِنَ الْخَطايا وَ الْهَفَواتِ ، وَ لا تَجْعَلْني فيهِ غَرَضاً لِلْبَلايا وَ الأفاتِ بِعزَّتِكَ ياعِزَّ المُسْلمينَ .',
  'اَللّهُمَّ وَفِّقْني فيهِ لِمُوافَقَةِ الْأبرارِ، وَجَنِّبْني فيهِ مُرافَقَةِ الأشرارِ،وَآوني فيهِ برَحمَتِكَ إلى دارِ القَرارِ بإلهيَّتِكَ يا إله العالمينَ',
  'اَللّهُمَّ اهدِني فيهِ لِصالِحِ الأعْمالِ، وَاقضِ لي فيهِ الحوائِجَ وَالآمالِ يا مَنْ لا محتاج إلى التَّفسيرِ وَالسُّؤالِ، يا عالِماً بِما في صُدُورِ العالمينَ صَلِّ على محمد واله الطاهرين.ّ',
  'اَللّهُمَّ نَبِّهني فيهِ لِبَرَكاتِ أسحارِهِ، وَنوِّرْ قلبي بضياء أنوارِهِ، وَخُذْ بِكُلِّ أعْضائِي إلى إتباع آثارِهِ بِنُورِكَ يا ُمنور َ قُلُوبِ العارفينَ.',
  'اللّهُمَّ وَفِّر فيهِ حَظّي مِن بَرَكاتِهِ، وَسَهِّلْ سبيلي إلى خيْراتِهِ، وَلا تَحْرِمْني قَبُولَ حَسَناتِهِ يا هادِياً إلى الحق المبين.',
  ' اللّهمّ افتح لي فيه أبواب الجنان وتغلق عنّي فيه أبواب النّيران و وفّقني فيه لتلاوة القرآن يا منزل السّكينة في قلوب المؤمنين.',
  'اللّهمّ اجعل لي فيه إلى مرضاتك دليلا ولا تجعل للشّيطان فيه عليّ سبيلا و اجعل الجنّة لي منزلا و مقيلا يا قاضي حوائج الطالبين.',
  'اللّهمّ افتح لي فيه أبواب فضلك و أنزل عليّ فيه بركاتك و وفّقني فيه لموجبات مرضاتك و أسكنّي فيه بحبوحات جنّاتك يا مجيب دعوة المضطرّين.',
  'اللّهمّ اغسلني فيه من الذّنوب و طهّرني فيه من العيوب و امتحن قلبي فيه بتقوى القلوب يا مقيل عثرات المذنبين.',
  ' اللّهمّ إنّي أسألك فيه ما يرضيك و أعوذ بك ممّا يؤذيك و أسألك التّوفيق فيه لأن أطيعك ولا أعصيك يا جواد السّائلين..',
  'اَللّهُمَّ قَرِّبْني فيهِ اِلى مَرضاتِكَ ، وَجَنِّبْني فيهِ مِن سَخَطِكَ وَنَقِماتِكَ ، وَ وَفِّقني فيهِ لِقِرائَةِ اياتِِكَ ، بِرَحمَتِكَ يا أرحَمَ الرّاحمينَ .',
  'اَللّهُمَّ اجْعَل لي فيهِ نَصيباً مِن رَحمَتِكَ الواسِعَةِ ، وَ اهْدِني فيهِ لِبَراهينِكَ السّاطِعَةِ ، وَ خُذْ بِناصِيَتي إلى مَرْضاتِكَ الجامِعَةِ بِمَحَبَّتِكَ يا اَمَلَ المُشتاقينَ .',
  'اَللّهُمَّ اجْعَلني فيهِ مِنَ المُتَوَكِلينَ عَلَيْكَ ، وَ اجْعَلني فيهِ مِنَ الفائِزينَ لَدَيْكَ ، وَ اجعَلني فيه مِنَ المُقَرَّبينَ اِليكَ بِاِحْسانِكَ يا غايَةَ الطّالبينَ ',
  'اللهم اقسم لنا من خشيتك ما تحول به بيننا وبين معصيتك، ومن طاعتك ما تبلغنا به جنتك، ومن اليقين ما تهون به علينا مصائب الدنيا، اللهم متعنا بأسماعنا وأبصارنا وقواتنا ما أحييتنا، واجعله الوارث منا، وانصرنا على من عادانا، ولا تجعل مصيبتنا في ديننا، ولا تجعل الدنيا أكبر همِّنا ولا مبلغ علمنا، ولا تسلط علينا من لا يرحمنا.',
  'اَللّهُمَّ ارْزُقني فيهِ الذِّهنَ وَالتَّنْبيهِ ، وَ باعِدْني فيهِ مِنَ السَّفاهَةِ وَالتَّمْويهِ ، وَ اجْعَل لي نَصيباً مِن كُلِّ خَيْرٍ تُنْزِلُ فيهِ ، بِجودِكَ يا اَجوَدَ الأجْوَدينَ .',
  'اَللّهُمَّ قَوِّني فيهِ عَلى اِقامَةِ اَمرِكَ ، وَ اَذِقني فيهِ حَلاوَةِ ذِكْرِكَ ، وَ اَوْزِعْني فيهِ لِأداءِ شُكْرِكَ بِكَرَمِكَ ، وَ احْفَظْني فيهِ بِحِفظِكَ و َسَتْرِكَ يا اَبصَرَ النّاظِرينَ ',
  'اَللّهُمَّ حَبِّبْ اِلَيَّ فيهِ الْإحسانَ ، وَ كَرِّهْ فيهِ الْفُسُوقَ وَ العِصيانَ وَ حَرِّمْ عَلَيَّ فيهِ السَخَطَ وَ النّيرانَ بعَوْنِكَ ياغياثَ المُستَغيثينَ .',
  'اَللّهُمَّ زَيِّنِّي فيهِ بالسِّترِ وَ الْعَفافِ ، وَ اسْتُرني فيهِ بِلِِِباسِ الْقُنُوعِ و َالكَفافِ ، وَ احْمِلني فيهِ عَلَى الْعَدْلِ وَ الْإنصافِ ، وَ آمنِّي فيهِ مِنْ كُلِّ ما اَخافُ بِعِصْمَتِكَ ياعصمَةَ الْخائفينَ ',
  'اَللّهُمَّ اجعَلني فيهِ مِنَ المُستَغْفِرينَ ، وَ اجعَلني فيهِ مِن عِبادِكَ الصّالحينَ القانِتينَ ، وَ اجعَلني فيهِ مِن اَوْليائِكَ المُقَرَّبينَ ، بِرَأفَتِكَ يا اَرحَمَ الرّاحمينَ .',
  'اللّهمّ اجعلني فيه محبّا لأوليائك ومعاديا لأعدائك مستنّا بسنّة خاتم أنبيائك يا عاصم قلوب النّبيّين.',
  'اللّهمّ اجعل سعيي فيه مشكورا و ذنبي فيه مغفورا وعملي فيه مقبولا وعيبي فيه مستورا يا أسمع السّامعين.',
  'اللّهمّ ارزقني فيه فضل ليلة القدر و صيّر أموري فيه من العسر إلى اليسر و اقبل معاذيري و حطّ عنّي الذّنب والوزر يا رئوف بعباده الصّالحين.',
  'اللّهمّ وفّر حظّي فيه من النّوافل و أكرمني فيه بإحضار المسائل و قرّب فيه وسيلتي إليك من بين الوسائل يا من لا يشغله إلحاح الملحّين.',
  'اللّهمّ غشّني فيه بالرّحمة وارزقني فيه التّوفيق و العصمة و طهّر قلبي من غياهب التّهمة يا رحيما بعباده المؤمنين',
  'اللّهمّ اجعل صيامي فيه بالشّكر والقبول على ما ترضاه و يرضاه الرّسول محكمة فروعه بالأصول بحقّ سيّدنا محمّد وآله الطّاهرين و الحمد لله ربّ العالمين.',
  'اللهم قوني وأعني على الصيام والقيام، اللهم امنحني يقين يحميني من كل شر، وإيمان يهديني لكل خير، ورجاء يقيني من كل ضر، يا رب أسألك في هذه الساعة من هذا الشهر الكريم أن ترحم ضعفي، اللهم أعزني فأنت الغني وارحمني فأنت الرحمن الرحيم.',
  'اللهم اجعل لي في قلبي نوراً وفي سمعي نوراً، وفي بصري نوراً، وفي شعري نوراً، وفي بشري نوراً، وفي لحمي ودمي وعظامي نوراً، وفي عصبي نوراً، يا رب اجعل لي من بين يديَّ نوراً ومن خلفي نوراً وعن يميني نوراً وعن شمالي نورا ومن فوقي ومن تحتي نوراً، وقنا عذاب النار يا أكرم الأكرمين.',
  'اَللّهُمَّ لاتُؤاخِذْني فيهِ بالْعَثَراتِ ، وَ اَقِلْني فيهِ مِنَ الْخَطايا وَ الْهَفَواتِ ، وَ لا تَجْعَلْني فيهِ غَرَضاً لِلْبَلايا وَ الأفاتِ بِعزَّتِكَ ياعِزَّ المُسْلمينَ .'
];
//=================================================================
fetch('https://api.ipify.org/?format=json', {
    method: 'GET'
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.ip);
    ip = data.ip;
  }).then(time)
  .catch((error) => {
    console.error('Error:', error);
  });

async function time() {
  fetch(`https://www.islamicfinder.us/index.php/api/prayer_times?user_ip=${ip}&time_format=0`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
      maghrib = data.results.Maghrib;
    if(data.settings.location.city != 'null' ){
      loc = `${data.settings.location.country}, ${data.settings.location.city}`;
    }else{
    loc = `${data.settings.location.country}`;
    }
          document.getElementById("loc").innerText = loc;
    }).then(hijri).then(updateTime)
    .catch((error) => {
      console.error('Error:', error);
    });
}
async function hijri() {
  fetch(`https://www.islamicfinder.us/index.php/api/calendar?user_ip=${ip}&day=${day}&month=${m+1}&year=${year}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
      var todayhj = data.to;
      todayhj = todayhj.slice(-2);
      document.getElementById("date").innerText = `${todayhj} رمضان`;
      document.getElementById("doaaText").innerText = doaa[todayhj];
      console.log(data.to);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function updateTime() {

  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
  //maghribTime = "Apr 15, 2021 18:24:00",
  let maghribTime = `${date1} ${maghrib}:00`,
    countDown = new Date(maghribTime).getTime(),
    x = setInterval(function() {
      let now = new Date().getTime(),
        distance = countDown - now;

      // document.getElementById("days").innerText = Math.floor(distance / (day)),
      if (Math.floor((distance % (day)) / (hour)) < 1) {
        document.getElementsByTagName('li')[0].style.display = "none";
        document.getElementById('minutes').style.marginRight = '40px';
        if (Math.floor((distance % (hour)) / (minute)) < 1) {
          document.getElementsByTagName('li')[1].style.visibility = "hidden";
        }
      }
      document.getElementById("headline").innerText = 'متبقي على اذان المغرب ',
        document.getElementById('countdown').style.display = "",
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
      // if (hour = 0) {
      //   document.getElementById("hours").
      // }
      //do something later when date is reached
      if (distance < 0) {
        let headline = document.getElementById("headline"),
          countdown = document.getElementById("countdown"),
          content = document.getElementById("content");

        headline.innerText = 'حان موعد المغرب، صومًا مقبولاً وإفطارًا شهيًا';
        headline.style.fontSize = '4rem'
        countdown.style.display = "none";
        clearInterval(x);
      }
      //seconds
    }, 0)
}
