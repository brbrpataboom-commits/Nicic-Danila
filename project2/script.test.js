// набор всех 40 вопросов
const allQuestions = [
  {text:"В каком году началась Вторая мировая война?", choices:[{t:"1937",v:0},{t:"1939",v:1},{t:"1941",v:0}]},
  {text:"Кто возглавил Французскую революцию?", choices:[{t:"Наполеон Бонапарт",v:0},{t:"Робеспьер",v:1},{t:"Луи XVI",v:0}]},
  {text:"В результате какого события окончательно пала Римская империя (Византия)?", choices:[{t:"Захвата Константинополя османами в 1453 году",v:1},{t:"Разгрома при Адрианополе в 378 году",v:0},{t:"Падения Западной Римской империи в 476 году",v:0}]},
  {text:"Какой город был центром Великой французской революции?", choices:[{t:"Марсель",v:0},{t:"Париж",v:1},{t:"Нант",v:0}]},
  {text:"Какая цивилизация построила пирамиды в Гизе?", choices:[{t:"Древний Египет",v:1},{t:"Месопотамия",v:0},{t:"Хетты",v:0}]},
  {text:"Как называлась средневековая торговая лига северо-германских городов?", choices:[{t:"Орден Тевтонский",v:0},{t:"Ганза",v:1},{t:"Вестфальская лига",v:0}]},
  {text:"Кто первым достиг Америки во времена Великих географических открытий?", choices:[{t:"Колумб",v:1},{t:"Магеллан",v:0},{t:"Васко да Гама",v:1}]},
  {text:"Какой год принято считать окончанием Первой мировой войны?", choices:[{t:"1918",v:1},{t:"1920",v:0},{t:"1916",v:0}]},
  {text:"Какой древний город называют колыбелью демократии?", choices:[{t:"Афины",v:1},{t:"Рим",v:0},{t:"Карфаген",v:0}]},
  {text:"Кто изобрёл печатный станок в Европе?", choices:[{t:"Леонардо да Винчи",v:0},{t:"Иоганн Гутенберг",v:1},{t:"Коперник",v:0}]},
  {text:"Что означает историографический термин «Шведский потоп»?", choices:[{t:"Разрушительное вторжение шведской армии в Речь Посполитую в 1655–1660 гг.",v:1},{t:"Массовое наводнение на территории Швеции в XVII веке",v:0},{t:"Революция в Швеции, приведшая к смене династии",v:0}]},
  {text:"Чем известен 1776 год в истории США?", choices:[{t:"Принятие Декларации независимости",v:1},{t:"Гражданская война",v:0},{t:"Линкольн стал президентом",v:0}]},
  {text:"Как назывался крупнейший феод в Японии в средние века?", choices:[{t:"Сёгунат",v:1},{t:"Клан Хан",v:0},{t:"Бакуфу",v:0}]},
  {text:"Что положило начало эпохе Возрождения?", choices:[{t:"Возрождение античного наследия",v:1},{t:"Изобретение телефона",v:0},{t:"Начало индустриальной революции",v:0}]},
  {text:"Какой документ завершил Тридцатилетнюю войну?", choices:[{t:"Вестфальский мир",v:1},{t:"Версальский договор",v:0},{t:"Нантский эдикт",v:0}]},
  {text:"Кто первым пересёк Атлантику на самолёте?", choices:[{t:"Чарльз Линдберг",v:1},{t:"Амелия Эрхарт",v:0},{t:"братья Райт",v:0}]},
  {text:"Какой древний путь связывал Восток и Запад?", choices:[{t:"Шёлковый путь",v:1},{t:"Тропа Инков",v:0},{t:"Великий шелковый путь II",v:0}]},
  {text:"Какой год ознаменовал падение Берлинской стены?", choices:[{t:"1989",v:1},{t:"1992",v:0},{t:"1985",v:0}]},
  {text:"Как назывался период массового промышленного и технического прогресса, начавшийся в XVIII веке?", choices:[{t:"Индустриальная революция",v:1},{t:"Неолитическая революция",v:0},{t:"Техническая революция XXI века",v:0}]},
  {text:"Кто написал «Историю... (Historiae)»?", choices:[{t:"Геродот",v:1},{t:"Тацит",v:0},{t:"Плутарх",v:0}]},
  {text:"Кто написал \"Илиаду\"?", choices:[{t:"Гомер",v:1},{t:"Овидий",v:0},{t:"Суфокл",v:0}]},
  {text:"Что означает название города Бельц?", choices:[{t:"Богатство",v:0},{t:"Болото",v:1},{t:"Равнина",v:0}]},
  {text:"Когда была крещение Руси?", choices:[{t:"988 г.",v:1},{t:"1066 г.",v:0},{t:"1204 г.",v:0}]},
  {text:"Кто был первым президентом США?", choices:[{t:"Авраам Линкольн",v:0},{t:"Джордж Вашингтон",v:1},{t:"Томас Джефферсон",v:0}]},
  {text:"Какой человек первым высадился на Луну?", choices:[{t:"Нил Армстронг",v:1},{t:"Джон Генри",v:0},{t:"Майкл Коллинз",v:0}]},
  {text:"Как назывался город-крепость на севере Франции, известный событиями 1916 года?", choices:[{t:"Верден",v:1},{t:"Париж",v:0},{t:"Реймс",v:0}]},
  {text:"Кто считается самым великим правителем Молдовы?", choices:[{t:"Дмитрий Кантемир",v:0},{t:"Пётр I Мушат",v:0},{t:"Штефан чел Маре",v:1}]},
  {text:"Кто такой Юлий Цезарь?", choices:[{t:"римский император",v:0},{t:"римский диктатор",v:1},{t:"французский король",v:0}]},
  {text:"Что такое Великая депрессия?", choices:[{t:"экономический кризис 1930х",v:1},{t:"начало индустрии",v:0},{t:"конец античности",v:0}]},
  {text:"Какие территории Румыния получила в результате Великого объединения 1918 года", choices:[{t:"Бессарабия, Буковина и Трансильвания",v:1},{t:"Добруджа, Крым и Галиция",v:0},{t:"Транснистрия (Приднестровье), Македония и Банат",v:0}]},
  {text:"В каком году был основан Санкт-Петербург?", choices:[{t:"1703",v:1},{t:"1603",v:0},{t:"1803",v:0}]},
  {text:"Кто руководил СССР во время Второй мировой войны?", choices:[{t:"Ленин",v:0},{t:"Сталин",v:1},{t:"Хрущёв",v:0}]},
  {text:"Где находилась библиотека, считавшаяся одной из крупнейших античного мира?", choices:[{t:"Александрия",v:1},{t:"Афины",v:0},{t:"Рим",v:0}]},
  {text:"Кто написал \"Войну и мир\"?", choices:[{t:"Пушкин",v:0},{t:"Толстой",v:1},{t:"Достоевский",v:0}]},
  {text:"Как назывались два румыских княжества в средние века?", choices:[{t:"Валахия и Молдавия",v:1},{t:"Транснистрия и Буковина",v:0},{t:"Добруджа и Лодомерия",v:0}]},
  {text:"Что является началом Нового времени?", choices:[{t:"Открытие Америки",v:1},{t:"Изобретение печатного станка",v:0},{t:"Реформация",v:0}]},
  {text:"Какой великий греческий полководец завоевал Персию?", choices:[{t:"Александр Македонский",v:1},{t:"Марк Антоний",v:0},{t:"Птолемей",v:0}]},
  {text:"Кто был основателем Османской империи?", choices:[{t:"Мехмед II",v:0},{t:"Осман I",v:1},{t:"Сулейман",v:0}]},
  {text:"Какой год принято считать началом Реформации?", choices:[{t:"1517",v:1},{t:"1617",v:0},{t:"1717",v:0}]},
  {text:"Какая битва считается поворотной в Великой Отечественной войне?", choices:[{t:"Битва за Москву",v:0},{t:"Сталинградская битва",v:1},{t:"Битва за Британию",v:0}]},
];

// перемешивание Фишера-Йейтса
function shuffle(array){
  for(let i=array.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [array[i],array[j]] = [array[j],array[i]];
  }
}

function renderQuestions(){
  const container = document.getElementById('questions');
  container.innerHTML = '';
  const pool = allQuestions.slice();
  shuffle(pool);
  const selected = pool.slice(0,20);
  selected.forEach((q,idx)=>{
    const block = document.createElement('div');
    block.setAttribute('data-q', idx+1);
    const p = document.createElement('p');
    p.style.display = 'flex';
    p.style.justifyContent = 'space-between';
    p.style.alignItems = 'center';
    const qText = document.createElement('span');
    qText.textContent = (idx+1) + '. ' + q.text;
    const resultSpan = document.createElement('span');
    resultSpan.className = 'result-indicator';
    resultSpan.style.marginLeft = '20px';
    resultSpan.style.fontWeight = 'bold';
    resultSpan.style.minWidth = '80px';
    p.appendChild(qText);
    p.appendChild(resultSpan);
    block.appendChild(p);
    let correctValue = null;
    q.choices.forEach(ch=>{
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type='radio';
      input.name='q'+(idx+1);
      input.value=ch.v;
      if(ch.v === 1) correctValue = ch.t;
      label.appendChild(input);
      label.append(' ' + ch.t);
      block.appendChild(label);
      block.appendChild(document.createElement('br'));
    });
    block.setAttribute('data-correct', correctValue);
    container.appendChild(block);
  });
}

renderQuestions();

function computeResult(){
  const totalQuestions = 20;
  let score = 0;
  const results = [];
  
  for(let i=1;i<=totalQuestions;i++){
    const radios = Array.from(document.querySelectorAll('input[name=q'+i+']'));
    if(radios.length===0) continue;
    
    const checked = radios.find(r=>r.checked);
    const block = checked ? checked.closest('div[data-q]') : document.querySelector('div[data-q="'+i+'"]');
    const correctAnswer = block ? block.getAttribute('data-correct') : null;
    
    if(checked){
      const selectedValue = parseInt(checked.value||0, 10);
      if(selectedValue === 1){
        score += 1;
        results.push({q: i, correct: true, selected: checked.parentElement.textContent.trim(), block: block});
      } else {
        results.push({q: i, correct: false, selected: checked.parentElement.textContent.trim(), correctAnswer: correctAnswer, block: block});
      }
    } else {
      results.push({q: i, correct: false, selected: 'Не отвечено', correctAnswer: correctAnswer, block: block});
    }
  }
  
  // Подсвечиваем блоки вопросов и выводим результат в строке вопроса
  results.forEach(r => {
    if(r.block){
      const p = r.block.querySelector('p');
      const indicator = p ? p.querySelector('.result-indicator') : null;
      if(r.correct){
        r.block.style.borderLeft = '4px solid #28a745';
        r.block.style.backgroundColor = '#e6ffe6';
        if(indicator){
          indicator.textContent = '✓';
          indicator.style.color = '#28a745';
        }
      } else {
        r.block.style.borderLeft = '4px solid #dc3545';
        r.block.style.backgroundColor = '#ffe6e6';
        if(indicator){
          indicator.innerHTML = '❌ ' + r.correctAnswer;
          indicator.style.color = '#dc3545';
        }
      }
    }
  });
  
  const resultEl = document.getElementById('result');
  
  // Итоговый результат
  const last = score % 10;
  const last2 = score % 100;
  let word = 'баллов';
  if(last2<11 || last2>14){
    if(last===1) word='балл';
    else if(last>=2 && last<=4) word='балла';
  }
  
  const resultColor = score === totalQuestions ? '#28a745' : '#0052cc';
  const html = `<div style="padding: 12px; border-radius: 6px; background: #f1f6ff; color: ${resultColor}; font-weight: 700; font-size: 1.1rem;">Вы набрали ${score} ${word} из ${totalQuestions}</div>`;
  
  resultEl.innerHTML = html;
}

// addImagesToSidebars();

document.getElementById('submitBtn').addEventListener('click', computeResult);
document.getElementById('resetBtn').addEventListener('click', function(){
  document.getElementById('result').textContent = '';
  // Удаляем стили результатов из вопросов
  document.querySelectorAll('div[data-q]').forEach(block => {
    block.style.borderLeft = '';
    block.style.backgroundColor = '';
    const p = block.querySelector('p');
    if(p){
      const indicator = p.querySelector('.result-indicator');
      if(indicator) indicator.textContent = '';
    }
  });
  renderQuestions();
  // addImagesToSidebars();
});
