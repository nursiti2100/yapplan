/* YAPPLAN - situs statis, tanpa backend. Data disimpan di localStorage browser. */
(() => {
  'use strict';
  const KEY = 'yapplan-v1';
  const labels = { daily: 'DAILY LIFE', either: 'THIS OR THAT', rating: 'RATING TIME' };
  const weekdays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
  const dailyTopics = [
    'bangun kesiangan padahal alarm sudah bunyi berkali-kali',
    'bingung mau sarapan apa setiap pagi',
    'kebiasaan cek HP begitu bangun tidur',
    'perjuangan memilih baju sebelum keluar rumah',
    'perjalanan berangkat kerja atau kuliah saat jalanan macet',
    'lupa membawa barang penting ketika sudah di jalan',
    'momen sadar baterai HP tinggal sedikit saat di luar',
    'antrean panjang saat membeli makan siang',
    'memilih menu makan siang yang itu-itu lagi',
    'pengalaman bekal tumpah di dalam tas',
    'rasa kantuk setelah makan siang',
    'menahan diri untuk tidak jajan setiap lewat minimarket',
    'cerita salah naik kendaraan atau salah jalan',
    'bertemu teman tanpa sengaja di jalan',
    'kebiasaan mampir beli minuman sepulang aktivitas',
    'hari ketika semua rencana tiba-tiba berubah',
    'menunggu paket yang statusnya sudah diantar kurir',
    'bingung membalas chat yang sudah lama tertunda',
    'beres-beres kamar yang berakhir malah nostalgia',
    'tumpukan pakaian yang belum sempat dilipat',
    'drama mencari kaus kaki yang pasangannya hilang',
    'menghabiskan akhir pekan dengan rebahan',
    'perasaan setelah selesai mandi sore',
    'memasak mi instan saat lapar tengah malam',
    'momen kehabisan bahan masakan di rumah',
    'mencuci piring setelah makan bersama',
    'ketika hujan turun tepat saat mau keluar',
    'lupa membawa payung saat musim hujan',
    'menjemur pakaian lalu tiba-tiba mendung',
    'mencari tempat parkir yang penuh',
    'pengalaman salah pesan makanan atau minuman',
    'panik saat saldo dompet digital tidak cukup',
    'cerita uang receh yang menumpuk di tas',
    'menyusun daftar belanja supaya tidak kalap',
    'belanja bulanan yang selalu melebihi rencana',
    'menghabiskan waktu terlalu lama memilih tontonan',
    'ketiduran saat sedang menonton film',
    'perdebatan kecil memilih tempat makan bersama teman',
    'makan makanan favorit setelah hari panjang',
    'menyiapkan tas dan perlengkapan untuk besok',
    'kebiasaan menunda tidur karena asyik scrolling',
    'bangun pagi lalu tergoda tidur lima menit lagi',
    'berburu colokan listrik ketika baterai habis',
    'menunggu air panas untuk bikin minuman',
    'cerita menyalakan kipas atau AC saat cuaca panas',
    'mencari remote TV yang entah terselip di mana',
    'ketika Wi-Fi mendadak mati di tengah aktivitas',
    'panik mencari kunci rumah sebelum berangkat',
    'membeli barang murah yang ternyata sangat berguna',
    'merapikan meja setelah seharian beraktivitas',
    'menumpuk screenshot yang belum pernah dibuka lagi',
    'memilih lagu untuk menemani perjalanan',
    'menyapu rumah lalu lantai langsung kotor lagi',
    'pengalaman pertama mencoba resep dari internet',
    'makan di warung langganan sampai diingat penjualnya',
    'menyisihkan waktu jalan sore dekat rumah',
    'momen mengantuk di kendaraan umum',
    'cerita bertemu kucing di jalan pulang',
    'mengurus tanaman yang hampir lupa disiram',
    'membersihkan isi kulkas sebelum belanja',
    'mencari makanan saat lapar tetapi semua terlihat biasa saja',
    'mengatur jadwal mencuci pakaian di hari libur',
    'menghadapi macet saat sedang buru-buru',
    'pesan makanan online lalu menunggu lama',
    'berusaha membatasi pengeluaran jajan harian',
    'mengatur alarm untuk kegiatan penting besok',
    'menyiapkan air minum supaya tidak lupa minum',
    'menata ulang kamar agar terasa lebih nyaman',
    'mencari sandal yang tertukar saat berkunjung',
    'menyempatkan sarapan walau sedang terburu-buru',
    'perasaan pulang dan langsung ganti baju rumah',
    'mencari tempat duduk saat kafe sedang ramai',
    'momen lupa kenapa masuk ke suatu ruangan',
    'membuat rencana akhir pekan yang akhirnya berubah',
    'malam ketika ingin tidur cepat tetapi malah begadang',
    'cerita mengecek isi dompet menjelang akhir bulan',
    'menghapus foto di galeri karena memori penuh',
    'mencari camilan saat sedang menonton',
    'menunggu teman yang bilang sudah dekat',
    'memilih antara masak sendiri atau beli makan',
    'menentukan jam tidur yang realistis',
    'hari ketika tiba-tiba ingin membersihkan seluruh rumah',
    'menunda mencuci botol minum sampai menumpuk',
    'membawa tote bag untuk belanja mendadak',
    'momen memesan minuman yang ternyata terlalu manis',
    'cerita sarapan di perjalanan karena terlambat',
    'menghabiskan hari libur untuk menyelesaikan pekerjaan rumah',
    'mengejar waktu sebelum toko tutup',
    'pengalaman belanja kebutuhan rumah saat tanggal tua',
    'membawa charger ke mana-mana',
    'mencari payung yang terakhir dipakai entah kapan',
    'berusaha datang tepat waktu ke janji temu',
    'menemukan uang terselip di saku celana',
    'momen hujan membuat rencana jemuran berantakan',
    'bingung menentukan outfit karena cuaca berubah',
    'menyiapkan bekal simpel untuk hari berikutnya',
    'mengantre di kasir ketika sedang buru-buru',
    'menunggu mesin cuci selesai berputar',
    'membeli camilan tapi habis sebelum sampai rumah',
    'ritual merapikan tempat tidur setiap pagi'
  ];
  const eitherPairs = [
    ['bangun pagi','begadang'],['kopi','teh'],['pantai','gunung'],['chat','telepon'],['makan di luar','masak sendiri'],['nonton film','nonton serial'],['hujan','cerah'],['kucing','anjing'],['pedas','manis'],['cash','cashless'],['belanja online','belanja offline'],['jalan-jalan','rebahan'],['buku fisik','e-book'],['foto candid','foto pose'],['weekend ramai','weekend tenang'],['mie kuah','mie goreng'],['sarapan berat','sarapan ringan'],['kerja sambil musik','kerja dalam sunyi'],['sepatu sneakers','sandal nyaman'],['outfit hitam','outfit warna pastel'],['staycation','road trip'],['pesan makanan','masak instan'],['bioskop','streaming di rumah'],['minum dingin','minum hangat'],['es krim','puding'],['bakso','soto'],['ayam geprek','ayam bakar'],['nasi goreng','mie ayam'],['sendirian','rame-rame'],['jadwal teratur','spontan'],['tas kecil','tas besar'],['foto','video'],['matahari terbit','matahari terbenam'],['makanan berkuah','makanan kering'],['belanja hemat','self-reward'],['langsung balas chat','balas nanti'],['catatan digital','catatan buku'],['kerja dari rumah','kerja di kafe'],['piknik taman','nongkrong kafe'],['dessert cokelat','dessert keju'],['es teh','es jeruk'],['sambal bawang','sambal matah'],['gorengan','jajanan manis'],['liburan terencana','liburan dadakan'],['film horor','film komedi'],['malam minggu keluar','malam minggu di rumah'],['sarapan nasi','sarapan roti'],['mendengarkan podcast','mendengarkan lagu'],['foto polaroid','foto digital'],['tidur siang','jalan sore'],['roti bakar','pisang goreng'],['baju oversized','baju fitted'],['toko buku','toko aksesoris'],['pantai sore','pantai pagi'],['susu cokelat','susu stroberi'],['air mineral dingin','air mineral suhu ruang'],['martabak manis','martabak telur'],['kentang goreng','onion rings'],['chat panjang','voice note'],['acara kecil','acara meriah'],['makan sambil nonton','makan tanpa layar'],['es kopi susu','matcha latte'],['nonton ulang favorit','cari tontonan baru'],['takoyaki','dimsum'],['camilan asin','camilan manis'],['jendela terbuka','AC dingin'],['bawa bekal','jajan di luar'],['beli satu mahal','beli beberapa murah'],['sepatu putih','sepatu hitam'],['warna netral','warna cerah'],['mi instan pakai telur','mi instan pakai sosis'],['nasi padang','nasi uduk'],['jalan kaki','naik kendaraan'],['makan dulu','foto makanan dulu'],['kopi panas','kopi es']
  ];
  const ratingItems = [
    'es teh manis','kopi susu gula aren','matcha latte','jus alpukat','es jeruk','teh tarik','milkshake stroberi','cokelat panas','lemon tea','es kelapa muda','thai tea','boba brown sugar','americano','cappuccino','susu kurma','jus mangga','air kelapa','soda gembira','es cincau','wedang jahe','jamu kunyit asam','es buah','smoothie pisang','jus semangka','yakult leci','nasi goreng','mie ayam','bakso kuah','seblak','ayam geprek','sate ayam','nasi padang','soto ayam','rawon','pecel','gado-gado','ketoprak','siomay','batagor','pempek','martabak manis','martabak telur','pisang goreng','risol mayo','pastel','cireng','cilok','tahu gejrot','tahu crispy','kentang goreng','dimsum','takoyaki','ramen','sushi','kimbap','pizza','burger','spageti','lasagna','roti bakar','donat','croissant','brownies','cheesecake','puding cokelat','es krim vanila','es krim matcha','salad buah','pancake','waffle','tiramisu','macaron','keripik pedas','popcorn karamel','onigiri','nasi uduk','bubur ayam','lontong sayur','mie goreng','nasi kebuli','sop buah','es campur','serabi','klepon','cendol','es doger','bandrek','teh rosella','jus jambu','susu kedelai','susu oat','air lemon','kue cubit','tahu walik'
  ];
  const dailyAngles = [
    { head: 'Cerita keseharian: ', tail: 'Kamu juga sering ngalamin ini? Cerita di komentar, yuk!' },
    { head: 'Ada yang relate sama ', tail: 'Biasanya kamu ngapain kalau kejadian begini?' },
    { head: 'Yapping hari ini tentang ', tail: 'Pernah kejadian juga nggak? Spill versi kamu!' },
    { head: 'Hal sehari-hari yang pengin aku bahas: ', tail: 'Di keseharianmu juga begini, atau beda?' },
    { head: 'Ngobrol santai soal ', tail: 'Ceritain pengalaman kamu yang paling relate!' },
    { head: 'Kejadian sehari-hari: ', tail: 'Tim yang sering ngalamin, mana suaranya?' }
  ];
  const eitherAngles = [
    { head: 'This or That', tail: 'Pilih satu dan kasih alasanmu di komentar!' },
    { head: 'Dilema hari ini', tail: 'Nggak boleh jawab dua-duanya. Tim mana kamu?' },
    { head: 'Battle favorit', tail: 'Vote A atau B, terus jelasin kenapa.' },
    { head: 'Pilihan tersulit', tail: 'Kalau seumur hidup cuma boleh pilih satu, pilih apa?' },
    { head: 'Quick poll', tail: 'Jawab spontan tanpa mikir lama: kiri atau kanan?' },
    { head: 'Adu argumen santai', tail: 'Bela pilihanmu! Tim satunya boleh bantah baik-baik.' }
  ];
  const ratingAngles = [
    { head: 'Rating jujur', tail: 'Kasih skor 1–10 versi kamu dan alasannya!' },
    { head: 'Rating time', tail: 'Worth it atau skip? Kasih nilai 1–10, yuk.' },
    { head: 'Review singkat', tail: 'Kalau kamu yang nilai, dapat berapa dari 10?' },
    { head: 'Uji selera', tail: 'Enak banget atau biasa aja? Drop rating kamu.' },
    { head: 'Kontroversi rasa', tail: 'Overrated atau underrated? Nilai dari 1 sampai 10.' },
    { head: 'Jujur soal rasa', tail: 'Masuk daftar favorit kamu nggak? Skor 1–10!' }
  ];
  const pool = {
    daily: dailyTopics.flatMap((topic, i) => dailyAngles.map((angle, j) => ({ id:`d2-${i}-${j}`, category:'daily', title:`${angle.head}${topic}?`, caption:`${topic.charAt(0).toUpperCase()}${topic.slice(1)}. ${angle.tail}\n#DailyLife #Yapping #CeritaHarian` }))),
    either: eitherPairs.flatMap(([a,b],i) => eitherAngles.map((angle,j)=>({id:`e-${i}-${j}`,category:'either',title:`${angle.head}: ${a} vs ${b}?`,caption:`A: ${a} ⚡ B: ${b}. ${angle.tail}\n#ThisOrThat #PilihSatu #Yapping`}))),
    rating: ratingItems.flatMap((item,i)=>ratingAngles.map((angle,j)=>({id:`r-${i}-${j}`,category:'rating',title:`${angle.head}: ${item} ⭐`,caption:`Hari ini bahas ${item}. ${angle.tail}\n#RatingTime #Kuliner #FoodReview` })))
  };
  const maxCount = Object.values(pool).reduce((sum, arr) => sum+arr.length,0);
  const $ = id => document.getElementById(id);
  const pad = n => String(n).padStart(2,'0');
  const iso = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
  function fromISO(s) { const [y,m,d] = s.split('-').map(Number); return new Date(y,m-1,d); }
  const today = iso(new Date());
  let state;
  try { state = JSON.parse(localStorage.getItem(KEY)) || {}; } catch { state = {}; }
  if (!Array.isArray(state.posts)) state.posts = [];
  if (!Array.isArray(state.used)) state.used = [];
  state.posts = state.posts.filter(p => p && typeof p.date === 'string' && typeof p.time === 'string' && typeof p.id === 'string' && typeof p.title === 'string' && labels[p.category]);
  state.used = [...new Set([...state.used.filter(x=>typeof x==='string'), ...state.posts.map(p=>p.id)])];
  let selected = today;
  let view = new Date(new Date().getFullYear(),new Date().getMonth(),1);
  let toastTimer;
  function save(){try{localStorage.setItem(KEY,JSON.stringify(state));return true}catch{notify('Penyimpanan browser penuh. Segera backup data.');return false}}
  function notify(message){const node=$('toast');node.textContent=message;node.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>node.classList.remove('visible'),3400)}
  function prettyDate(s,opts={day:'numeric',month:'long',year:'numeric'}){return fromISO(s).toLocaleDateString('id-ID',opts)}
  function postsForDay(day){return state.posts.filter(p=>p.date===day).sort((a,b)=>a.time.localeCompare(b.time))}
  function renderStats(){ $('statTotal').textContent=state.posts.length; $('statUsed').textContent=state.used.length; $('statMonth').textContent=state.posts.filter(p=>p.date.slice(0,7)===`${view.getFullYear()}-${pad(view.getMonth()+1)}`).length; }
  function renderCalendar(){
    $('monthTitle').textContent=view.toLocaleDateString('id-ID',{month:'long',year:'numeric'});
    const first = new Date(view.getFullYear(),view.getMonth(),1), offset = (first.getDay()+6)%7;
    const start = new Date(view.getFullYear(),view.getMonth(),1-offset);
    const grid=$('calendarGrid'); grid.replaceChildren();
    for(let i=0;i<42;i++){
      const d=new Date(start.getFullYear(),start.getMonth(),start.getDate()+i), date=iso(d), posts=postsForDay(date);
      const b=document.createElement('button');b.type='button';b.className=`day${d.getMonth()!==view.getMonth()?' muted':''}${date===selected?' selected':''}${date===today?' today':''}`;
      b.setAttribute('aria-label',`${prettyDate(date)}, ${posts.length} posting`);b.setAttribute('aria-pressed',String(date===selected));
      const num=document.createElement('span');num.className='day-number';num.textContent=d.getDate();b.append(num);
      const dots=document.createElement('span');dots.className='day-dots';
      const categories=[...new Set(posts.map(p=>p.category))];categories.forEach(cat=>{const dot=document.createElement('i');dot.className=`dot ${cat==='daily'?'purple':cat==='either'?'pink':'orange'}`;dots.append(dot)});
      if(posts.length){const count=document.createElement('span');count.className='day-count';count.textContent=`${posts.length} post`;dots.append(count)}
      b.append(dots);b.addEventListener('click',()=>{selected=date;view=new Date(d.getFullYear(),d.getMonth(),1);$('selectedDate').value=selected;render();});grid.append(b);
    }
  }
  function renderSchedule(){
    $('dateSubtitle').textContent=`· ${prettyDate(selected)}`;
    const posts=postsForDay(selected), list=$('scheduleList');list.replaceChildren();
    $('copyAllBtn').disabled=!posts.length;$('deleteDayBtn').disabled=!posts.length;
    if(!posts.length){const box=document.createElement('div');box.className='empty';box.innerHTML='<div class="empty-icon">🗓️</div><h3>Belum ada posting untuk tanggal ini</h3><p>Pilih kategori dan klik <b>Generate ide & jadwal</b> untuk mulai!</p>';list.append(box);return}
    for(const post of posts){const item=document.createElement('article');item.className='schedule-item';
      const time=document.createElement('div');time.className='schedule-time';time.textContent=post.time;
      const body=document.createElement('div');body.className='schedule-body';
      const category=document.createElement('span');category.className=`item-category ${post.category}`;category.textContent=labels[post.category];
      const title=document.createElement('h3');title.textContent=post.title;
      const caption=document.createElement('p');caption.textContent=post.caption;
      body.append(category,title,caption);
      const actions=document.createElement('div');actions.className='item-actions';
      const copy=document.createElement('button');copy.type='button';copy.textContent='⧉ Salin';copy.setAttribute('aria-label',`Salin ${post.title}`);copy.addEventListener('click',()=>copyText(`${post.title}\n${post.caption}`));
      const remove=document.createElement('button');remove.type='button';remove.textContent='✕';remove.className='delete-item';remove.setAttribute('aria-label',`Hapus ${post.title}`);remove.addEventListener('click',()=>{if(!confirm('Hapus posting ini? Ide tetap tercatat sebagai sudah pernah dipakai.'))return;state.posts=state.posts.filter(p=>!(p.date===post.date&&p.time===post.time&&p.id===post.id));save();render();notify('Posting dihapus dari jadwal.');});
      actions.append(copy,remove);item.append(time,body,actions);list.append(item);
    }
  }
  function render(){renderStats();renderCalendar();renderSchedule()}
  function pickIdea(category,used){const options=pool[category].filter(idea=>!used.has(idea.id));if(!options.length)return null;return options[Math.floor(Math.random()*options.length)]}
  function timeToMinutes(time){const [h,m]=time.split(':').map(Number);return h*60+m}
  function minutesToTime(minutes){return `${pad(Math.floor(minutes/60))}:${pad(minutes%60)}`}
  function generate(event){event.preventDefault();const cats=[...document.querySelectorAll('input[name=category]:checked')].map(c=>c.value);if(!cats.length){notify('Pilih minimal satu kategori konten.');return}
    const date=$('selectedDate').value,startTime=$('startTime').value, count=Number($('ideaCount').value),days=Number($('dayCount').value);
    if(!date||!startTime||!Number.isInteger(count)||count<1||count>96||![1,7,30].includes(days)){notify('Periksa tanggal, jam, dan jumlah posting.');return}
    const startMinutes=timeToMinutes(startTime);
    if(startMinutes%15!==0){notify('Jam mulai harus pada kelipatan 15 menit (contoh 09:00 atau 09:15).');return}
    const used=new Set(state.used), created=[];let fullDays=0, exhausted=false;
    // Generate each day separately; subsequent days have their own clock reset.
    for(let dayIndex=0;dayIndex<days;dayIndex++){
      const startDate=fromISO(date),current=new Date(startDate.getFullYear(),startDate.getMonth(),startDate.getDate()+dayIndex),key=iso(current);
      const occupied=new Set([...postsForDay(key),...created.filter(p=>p.date===key)].map(p=>p.time));
      let minute=startMinutes, added=0;
      for(let n=0;n<count;n++){
        while(minute<=1425&&occupied.has(minutesToTime(minute)))minute+=15;
        if(minute>1425)break;
        let idea=null;
        // Rotate categories on each slot, falling back to any with fresh ideas.
        const ordered=[...cats.slice((state.posts.length+created.length)%cats.length),...cats.slice(0,(state.posts.length+created.length)%cats.length)];
        for(const cat of ordered){idea=pickIdea(cat,used);if(idea)break}
        if(!idea){exhausted=true;break}
        const post={...idea,date:key,time:minutesToTime(minute)};created.push(post);used.add(idea.id);occupied.add(post.time);minute+=15;added++;
      }
      if(added<count)fullDays++;
      if(exhausted)break;
    }
    if(!created.length){notify(exhausted?'Semua ide unik pada kategori terpilih sudah habis.':'Tidak ada slot kosong di hari/jam tersebut.');return}
    state.posts.push(...created);state.used=[...used];selected=date;view=new Date(fromISO(date).getFullYear(),fromISO(date).getMonth(),1);save();render();
    notify(`Berhasil! ${created.length} ide unik dijadwalkan.${fullDays?' Sebagian hari kehabisan slot sebelum 24.00.':''}${exhausted?' Stok ide unik habis.':''}`);
    $('jadwal').scrollIntoView({behavior:'smooth',block:'start'});
  }
  async function copyText(text){try{await navigator.clipboard.writeText(text);notify('Caption berhasil disalin!')}catch{const t=document.createElement('textarea');t.value=text;t.style.position='fixed';t.style.opacity='0';document.body.append(t);t.select();const ok=document.execCommand('copy');t.remove();notify(ok?'Caption berhasil disalin!':'Browser memblokir salin otomatis.')}}
  function download(filename,contents,type){const blob=new Blob([contents],{type}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=filename;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500)}
  function exportCSV(){if(!state.posts.length){notify('Belum ada posting untuk diekspor.');return}const cells=[['Tanggal','Jam','Kategori','Judul Ide','Caption'],...state.posts.slice().sort((a,b)=>a.date.localeCompare(b.date)||a.time.localeCompare(b.time)).map(p=>[p.date,p.time,labels[p.category],p.title,p.caption])];const csv='\uFEFF'+cells.map(row=>row.map(value=>'"'+String(value).replaceAll('"','""')+'"').join(',')).join('\r\n');download('yapplan-jadwal.csv',csv,'text/csv;charset=utf-8')}
  function backup(){download('yapplan-backup-'+today+'.json',JSON.stringify({...state,version:1,backupDate:new Date().toISOString()},null,2),'application/json')}
  function restore(file){if(!file)return;const reader=new FileReader();reader.onload=()=>{try{const data=JSON.parse(String(reader.result));if(!data||!Array.isArray(data.posts)||!Array.isArray(data.used))throw new Error('format');const cleanPosts=data.posts.filter(p=>p&&typeof p.id==='string'&&typeof p.date==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(p.date)&&typeof p.time==='string'&&/^([01]\d|2[0-3]):(00|15|30|45)$/.test(p.time)&&typeof p.title==='string'&&typeof p.caption==='string'&&labels[p.category]);if(!confirm(`Pulihkan ${cleanPosts.length} posting? Ini akan menggantikan jadwal dan riwayat ide saat ini.`))return;state={posts:cleanPosts,used:[...new Set([...data.used.filter(v=>typeof v==='string'),...cleanPosts.map(p=>p.id)])]};save();render();notify(`${cleanPosts.length} posting berhasil dipulihkan.`)}catch{notify('File backup tidak valid. Gunakan file JSON dari YapPlan.')}finally{$('restoreFile').value=''}};reader.readAsText(file)}
  function resetHistory(){if(state.posts.length){notify('Kosongkan semua posting terlebih dahulu sebelum reset riwayat, supaya ide terjadwal tidak terulang.');return}if(!confirm('Reset seluruh riwayat ide? Setelah ini ide lama bisa muncul kembali.'))return;state.used=[];save();render();notify('Riwayat ide berhasil direset.');}
  $('selectedDate').value=selected;
  $('selectedDate').addEventListener('change',e=>{if(!e.target.value)return;selected=e.target.value;const d=fromISO(selected);view=new Date(d.getFullYear(),d.getMonth(),1);render()});
  $('prevMonth').addEventListener('click',()=>{view=new Date(view.getFullYear(),view.getMonth()-1,1);render()});
  $('nextMonth').addEventListener('click',()=>{view=new Date(view.getFullYear(),view.getMonth()+1,1);render()});
  $('generatorForm').addEventListener('submit',generate);
  $('downloadCsvTop').addEventListener('click',exportCSV);
  $('copyAllBtn').addEventListener('click',()=>copyText(postsForDay(selected).map(p=>`${p.time} | ${labels[p.category]}\n${p.title}\n${p.caption}`).join('\n\n------------------\n\n')));
  $('deleteDayBtn').addEventListener('click',()=>{const posts=postsForDay(selected);if(!posts.length)return;if(!confirm(`Hapus ${posts.length} posting pada ${prettyDate(selected)}? Riwayat ide unik tetap tersimpan.`))return;state.posts=state.posts.filter(p=>p.date!==selected);save();render();notify('Jadwal tanggal tersebut sudah dihapus.');});
  $('backupBtn').addEventListener('click',backup);
  $('restoreFile').addEventListener('change',e=>restore(e.target.files[0]));
  $('resetHistoryBtn').addEventListener('click',resetHistory);
  save();render();
  // Debug-only read-only hook for automated smoke testing.
  window.YapPlanInfo=Object.freeze({ideaCapacity:maxCount,categoryCapacities:Object.freeze(Object.fromEntries(Object.entries(pool).map(([k,v])=>[k,v.length])))});
})();
