class ExampleItem {
   constructor(name, phone, email, product){
      this.name = name,
      this.phone = phone,
      this.email = email,
      this.product = product
   }
};

const testData = [
  new ExampleItem('Алексеев Антон', parseInt('+79522351644'), 'alekseev@mail.ru', 'course-html'),
  new ExampleItem('Калашников Александр', parseInt('+79522456676'), 'kalashnikov@mail.ru', 'course-js'),
  new ExampleItem('Дмитриев Антон', parseInt('+79522435635'), 'dmitriev@mail.ru', 'course-js'),
  new ExampleItem('Скороходова Мария', parseInt('+79522657547'), 'skorohodova@mail.ru', 'course-js'),
  new ExampleItem('Старцев Антон', parseInt('+79525869688'), 'startcev@mail.ru', 'course-vue'),
  new ExampleItem('Макаров Анатолий', parseInt('+79678458678'), 'makarov@mail.ru', 'course-vue'),
  new ExampleItem('Романов Александр', parseInt('+79524567587'), 'romanov@mail.ru', 'course-js'),
  new ExampleItem('Лузина Анна', parseInt('+77686473455'), 'luzina@mail.ru', 'course-wordpress'),
  new ExampleItem('Перетятько Елизавета', parseInt('+79576899085'), 'peretyatko@mail.ru', 'course-wordpress'),
  new ExampleItem('Кулакова Ольга', parseInt('+79545678437'), 'kulakova@mail.ru', 'course-html'),
  new ExampleItem('Сидоров Сергей', parseInt('+79522324565'), 'sidorov@mail.ru', 'course-html'),
  new ExampleItem('Мезенин Дмитрий', parseInt('+79522326436'), 'mezenin@mail.ru', 'course-vue'),
  
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function getRandomData (){
   const index = getRandomInt(testData.length);
   return testData[index];
}

