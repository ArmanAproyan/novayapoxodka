export interface IpriceList {
    title: string;
    description: string;
    price: string;
  }
  
  export const priceList: IpriceList[] = [
    { title: "Накат на подошву женские", description: "пара", price: "1200р" },
    { title: "Накат на подошву мужские", description: "пара", price: "1300р" },
    { title: "Набойки мужские", description: "пара", price: "800-1200р" },
    { title: "Набойки женские", description: "пара", price: "500-1000р" },
    { title: "Набойки (мужские) резин.", description: "пара", price: "800р" },
    { title: "Шпильки п/у", description: "пара", price: "600р" },
    { title: "Шпильки металлические", description: "пара", price: "800р" },
    { title: "Набойки средние п/у (женские)", description: "пара", price: "800р" },
    { title: "Набойки средние резин. (женские) VIBRAM", description: "пара", price: "1000р" },
    { title: "Набойки большие п/у (женские) VIBRAM", description: "пара", price: "800-1000р" },
    { title: "Набойки большие резин. (женские)", description: "пара", price: "800р" },
    { title: "Замена каблуков женские", description: "пара", price: "1500р" },
    { title: "Замена каблуков мужские", description: "пара", price: "2000р" },
    { title: "Крепление каблука", description: "шт", price: "500р" },
    { title: "Перетяжка кожи на каблуке", description: "шт", price: "200р" },
    { title: "Восстановление полосок на каблуке", description: "шт", price: "2000р." },
    { title: "Замена подошвы", description: "пара", price: "3000р" },
    { title: "Замена супинатора", description: "шт", price: "1000р" },
    { title: "Замена молнии", description: "шт", price: "от 600р" },
    { title: "Замена “бегунка” на молнии", description: "шт", price: "от 300р" },
    { title: "Проклейка подошвы круговая", description: "пара", price: "1000р" },
    { title: "Прошив подошвы круговой", description: "пара", price: "2000р" },
    { title: "Заплатка внутренняя", description: "шт", price: "от 600р" },
    { title: "Заплатка декоративная", description: "шт", price: "от 600р" },
    { title: "Растяжка голенища", description: "пара", price: "1200р" },
    { title: "Растяжка союзки", description: "пара", price: "700р" },
    { title: "Подклей 5 см.", description: "шт", price: "200р" },
    { title: "Прошив 5 см.", description: "шт", price: "150р" },
    { title: "Подкраска каблуков", description: "пара", price: "от 800р" },
    { title: "Выравнивание каблуков", description: "пара", price: "300р" },
    { title: "Укорочивание каблуков", description: "пара", price: "300р" },
    { title: "Замена фурнитуры (липучек, пряжек)", description: "шт", price: "250р" },
  { title: "Замена стелек на меховые", description: "пара", price: "800р" },
  { title: "Прошив заднего шва", description: "пара", price: "500р" },
  { title: "Восстановление \"носковок\" на подошве п/у", description: "пара", price: "500р" },
  { title: "Замена стелек на кожаные", description: "пара", price: "650р" },
  { title: "Чистка воском кожаной обуви", description: "пара", price: "500р" },
  { title: "Чистка замшевой обуви (туфли, ботинки) химчистка", description: "пара", price: "от 2500р" },
  { title: "Чистка замшевой обуви (сапоги)", description: "пара", price: "от 3000р" },
  { title: "Ушив голенища по всей длине", description: "пара", price: "от 1500р" },
  { title: "Ушив голенища по замку", description: "пара", price: "от 1500р" },
  { title: "Вставка резинки в голенище", description: "пара", price: "от 1000р" },
  { title: "Укорочивание голенища", description: "пара", price: "от 2000р" },
  { title: "Врезка молнии", description: "шт", price: "1000р" },
  { title: "Замена кнопки", description: "шт", price: "100р" },
  { title: "Отверстия в ремне", description: "шт", price: "25р" },
  { title: "Замена лампасов", description: "пара", price: "от 1000р" },
  { title: "Накат на всю подошву п/у", description: "пара", price: "от 2000р" },
  { title: "Накат Микропор", description: "пара", price: "от 1000р" },
  { title: "Накат п/у Raptor", description: "пара", price: "от 1500р" },
  { title: "Замена ручек в сумке", description: "пара", price: "от 1000р" },
  { title: "Накат на подошву 1мм (женские)", description: "п/у", price: "1400р" },
  { title: "Накат на подошву 1мм (мужские)", description: "п/у", price: "1300р" },
  { title: "Накат на подошву 2мм (женские)", description: "п/у", price: "1500р" },
  { title: "Накат на подошву 2мм (мужские)", description: "п/у", price: "1500р" }
  ];
  
  export const keyRepairPriceList: IpriceList[] = [
    {
        title: "Ремонт электронного ключа",
        description: "Восстановление работоспособности электронного ключа для домофонов и других устройств.",
        price: '1000',
    },
    {
        title: "Замена батарейки",
        description: "Установка новой батарейки в электронный ключ.",
        price: "500",
    },
    {
        title: "Восстановление корпуса ключа",
        description: "Замена поврежденного корпуса ключа на новый.",
        price: "800",
    },
    {
        title: "Программирование ключа",
        description: "Перепрограммирование ключа для работы с другим устройством или системой.",
        price: "1500",
    },
    {
        title: "Изготовление дубликата",
        description: "Создание копии электронного или механического ключа.",
        price: "1200",
    },
    {
        title: "Диагностика ключа",
        description: "Проверка состояния ключа и выявление неисправностей.",
        price: "300",
    }
];