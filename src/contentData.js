export const products = (() => {
    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
  }

function generateRandomTastes() {
    const tastes = ['горький', 'сладкий', 'фруктовый', 'шоколадный', 'ореховый', 'цветочный', 'карамельный', 'пряный', 'ванильный', 'медовый', 'ягодный'];
    const numTastes = Math.floor(getRandomNumber(3, tastes.length + 1));
    const randomTastes = new Set();

    while (randomTastes.size < numTastes) {
        const randomIndex = Math.floor(Math.random() * tastes.length);
        randomTastes.add(tastes[randomIndex]);
    }

    return Array.from(randomTastes);
}

const countries = ['Бразилия', 'Колумбия', 'Эфиопия', 'Кения', 'Мексика'];

const brands = ['Lavazza', 'Illy', 'Starbucks', 'Nespresso', 'McCafé', 'Costa Coffee', 'Paulig', 'Dallmayr', 'Tchibo'];

const coffeeNames = ['Классический эспрессо', 'Арабика из Колумбии', 'Итальянская смесь', 'Кенийская радость', 'Эфиопское сокровище', 'Бразильская фантазия', 'Мексиканская гармония', 'Аромат', 'Ритм'];

const sizes = [200, 500, 1000];

const categories = ['свежеобжаренный', 'зеленый', 'капсулы', 'дрип-пакеты'];

const labels = ['хит', 'новинка', 'советуем', 'особый бленд'];

const roasts = ['средняя', 'светлая', 'темная'];

const coffeeTypes = ['арабика', 'робуста', 'либерика', 'смесь'];

const images = ['aromistico', 'solimo', 'presto'];

function generateDescription(country, roast, acidity, density, category) {
    const temperature = (roast === 'светлая') ? 'низкой' : 'высокой';
    const flavor = (acidity >= 3) ? 'особенно яркий и насыщенный' : 'мягкий и сбалансированный';
    const densityInfo = (density >= 3) ? 'Кофе обладает богатой текстурой и насыщенным вкусом' : 'Кофе нежного и мягкого вкуса';
    return `Этот замечательный кофе произведен в ${country}. Обжарка кофе ${roast}, что придает зернам особый аромат. Кофе из ${country} славится ${flavor} вкусовыми характеристиками, характерной кислотностью на уровне ${acidity}/5 и ${densityInfo}. Этот кофе отлично подойдет для приготовления в различных форматах - ${category.join(", ")}. Рекомендется заваривать при ${temperature} температуре.`;
}

const coffeeArray = [];

for (let i = 1; i <= 100; i++) {
    const country = countries[Math.floor(Math.random() * countries.length)];
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const title = coffeeNames[Math.floor(Math.random() * coffeeNames.length)];
    const price = getRandomNumber(13, 45).toFixed(2);
    const img = images[Math.floor(Math.random() * images.length)];
    const category = categories.filter(() => Math.random() < 0.6); // Вероятность добавления категории - 60%
    const label = labels.filter(() => Math.random() < 0.25);
    const roast = roasts[Math.floor(Math.random() * roasts.length)];
    const taste = generateRandomTastes();
    const type = coffeeTypes[Math.floor(Math.random() * coffeeTypes.length)];
    const acidity = Math.floor(getRandomNumber(1, 6));
    const density = Math.floor(getRandomNumber(1, 6));
    const quantity = Math.floor(getRandomNumber(0, 100));
    const available = Math.random() < 0.5; // Шанс наличия продукта - 50%
    const description = generateDescription(country, roast, acidity, density, category);
    const best  = available && Math.random() < 0.1; // 


    const coffee = {
        id: i,
        country,
        brand,
        title,
        sizes: sizes.map((size) => ({ size, quantity: Math.floor(getRandomNumber(10, 100)) })),
        price,
        img,
        description,
        category,
        label,
        roast,
        taste,
        type,
        acidity,
        density,
        quantity,
        available,
        best
    };
    coffeeArray.push(coffee);
}
console.log (coffeeArray);

return (coffeeArray);
}) ();