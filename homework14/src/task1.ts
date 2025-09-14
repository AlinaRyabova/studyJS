// Задача 1. Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
// ----- Властивості ------
// назва компанії на час розробки (назву періодично змінюють)
// власник компанії
// споснсори (масив спонсорів)
//              прізвище спонсора
//        ім’я  спонсора
//       сума вкладень спонсора
// рік випуску
// вартість сайту

type Sponsor = {
  lastName: string;
  firstName: string;
  amount: number;
};

type Site = {
  companyName: string;
  companyOwner: string;
  sponsors: Sponsor[];
  yearOfIssue: number;
  websiteCost: number;
};

let sites: Site[] = [
  {
    companyName: "SoftVision",
    companyOwner: "Ivan Petrenko",
    sponsors: [
      { lastName: "Shevchenko", firstName: "Oleh", amount: 50000 },
      { lastName: "Koval", firstName: "Olga", amount: 75000 },
    ],
    yearOfIssue: 2005,
    websiteCost: 12000,
  },
  {
    companyName: "WebArt",
    companyOwner: "Maria Ivanova",
    sponsors: [
      { lastName: "Bondar", firstName: "Andriy", amount: 150000 },
      { lastName: "Stepanenko", firstName: "Ira", amount: 20000 },
    ],
    yearOfIssue: 2010,
    websiteCost: 8000,
  },
  {
    companyName: "Validol",
    companyOwner: "Petro Sydorenko",
    sponsors: [{ lastName: "Melnyk", firstName: "Kateryna", amount: 120000 }],
    yearOfIssue: 2003,
    websiteCost: 15000,
  },
];

// Знайти:
// 1) загальну вартість усіх сайтів

/**
 * Обчислює загальну вартість усіх сайтів.
 * @param sites - масив об'єктів сайтів
 * @returns загальна вартість сайтів
 */

const totalWebsiteCost: number = sites.reduce(
  (prevSum: number, site) => prevSum + site.websiteCost,
  0
);
document.writeln(
  `<p>1. Загальна вартість усіх сайтів: ${totalWebsiteCost}</p>`
);

// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.

/**
 * Обчислює кількість сайтів, зроблених між 2000 та 2009 роками.
 * @param sites - масив об'єктів сайтів
 * @returns кількість сайтів
 */

const countSites2000to2009 = sites.filter(
  (site) => site.yearOfIssue >= 2000 && site.yearOfIssue <= 2009
);
document.writeln(
  `<p>2. Кількість сайтів, що було зроблено між 2000 та 2009 рр.: ${countSites2000to2009.length}</p>`
);

// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000

/**
 * Обчислює кількість сайтів, де сума спонсорських вкладень була більшою за 100000.
 * @param sites - масив об'єктів сайтів
 * @returns кількість сайтів
 */

const countSitesWithBigSponsors = sites.filter((site) => {
  const totalSponsorAmount = site.sponsors.reduce(
    (prevSum, sponsor) => prevSum + sponsor.amount,
    0
  );

  return totalSponsorAmount > 100000;
});
document.writeln(
  `<p>3. Кількість сайтів, де сума спонсорських вкладень була більшою за 100000: ${countSitesWithBigSponsors.length}</p>`
);

// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)

/**
 * Створює загальний список усіх спонсорів.
 * @param sites - масив об'єктів сайтів
 * @returns список спонсорів
 */

const allSponsors: string[] = sites.flatMap((site) =>
  site.sponsors.map(({ firstName, lastName }) => `${firstName} ${lastName}`)
);

document.writeln(
  `<h3>4. Загальний список усіх спонсорів:<br>${allSponsors.join("<br> ")}</h3>`
);

// 5) знайти рік, коли прибуток був найбільшим

/**
 * Знаходить рік з найбільшим прибутком.
 * @param sites - масив об'єктів сайтів
 * @returns рік з найбільшим прибутком
 */

const maxProfit = sites.reduce(
  (max, site) => {
    const totalSponsorAmount = site.sponsors.reduce(
      (sum, sponsor) => sum + sponsor.amount,
      0
    );
    const profit = totalSponsorAmount - site.websiteCost;

    return profit > max.profit ? { year: site.yearOfIssue, profit } : max;
  },
  {
    year: sites[0].yearOfIssue,
    profit:
      sites[0].sponsors.reduce((a, b) => a + b.amount, 0) -
      sites[0].websiteCost,
  }
);

document.writeln(
  `<p>5. Рік, коли прибуток був найбільшим: ${maxProfit.year}</p>`
);

// 6) упорядкувати список за спаданням прибутку

/**
 * Упорядковує список сайтів за спаданням прибутку.
 * @param sites - масив об'єктів сайтів
 * @returns відсортований список сайтів
 */

const sitesSortedByProfit = sites
  .slice()
  .sort((a, b) => {
    const profit = ({ sponsors, websiteCost }: Site) =>
      sponsors.reduce((prevSum, { amount }) => prevSum + amount, 0) -
      websiteCost;
    return profit(b) - profit(a);
  })
  .map(({ companyName }) => companyName);
document.writeln(
  `<h3>6. Список сайтів, упорядкований за спаданням прибутку: <br>${sitesSortedByProfit.join(
    "<br>"
  )}</h3>`
);

// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000

/**
 * Створює два окремих списки сайтів за вартістю.
 * @param sites - масив об'єктів сайтів
 * @returns списки сайтів за вартістю
 */

const { sitesUnder10000, sitesOver10000 } = sites.reduce(
  (prevSum, { companyName, websiteCost }) => {
    if (websiteCost <= 10000) {
      prevSum.sitesUnder10000.push(companyName);
    } else {
      prevSum.sitesOver10000.push(companyName);
    }
    return prevSum;
  },
  { sitesUnder10000: [] as Site[], sitesOver10000: [] as Site[] }
);
document.writeln(
  `<h3>7. Сайти з вартістю більше  10000:<br> ${sitesOver10000.join(
    "<br>"
  )} <br> Cайти з вартістю  до 10000 <br>${sitesUnder10000.join("<br>")}</h3>`
);
