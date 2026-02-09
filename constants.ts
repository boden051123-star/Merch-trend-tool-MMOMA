
export interface Market {
  id: string;
  name: string;
  country: string;
  zip: string;
  url: string;
}

export const MARKETS: Market[] = [
  {
    id: 'USA',
    name: '.COM',
    country: 'United States',
    zip: '90001',
    url: 'https://www.amazon.com/s?i=fashion-novelty&rh=p_6%3AATVPDKIKX0DER&s=date-desc-rank&hidden-keywords=Lightweight%2C+Classic+fit%2C+Double-needle+sleeve+and+bottom+hem+-Longsleeve+-Raglan+-Vneck+-Tanktop&language=en_US'
  },
  {
    id: 'UK',
    name: '.CO.UK',
    country: 'United Kingdom',
    zip: 'SW1W 0NY',
    url: 'https://www.amazon.co.uk/s?hidden-keywords=%22Lightweight%2C%20Classic%20fit%2C%20Double-needle%20sleeve%20and%20bottom%20hem%22%20-tanktop%20-raglan%20-vneck%20-longsleeve&i=fashion&language=en_GB&ref=glow_cls&refresh=1&rh=n%3A11961407031%2Cp_6%3AA3P5ROKL5A1OLE&s=date-desc-rank'
  },
  {
    id: 'DE',
    name: '.DE',
    country: 'Germany',
    zip: '94447',
    url: 'https://www.amazon.de/s?bbn=77028031&hidden-keywords=%22Unifarben%3A%20100%25%20Baumwolle%3B%20Grau%20meliert%22%20Alle%20anderen%20melierten%20Farben&i=clothing&language=de_DE&ref=glow_cls&refresh=1&rh=p_76%3A419122031%2Cp_6%3AA3JWKAKR8XB7XF&s=date-desc-rank'
  },
  {
    id: 'FR',
    name: '.FR',
    country: 'France',
    zip: '75000',
    url: 'https://www.amazon.fr/s?hidden-keywords=%22%20Couleurs%20unies%3A%20100%25%20Coton%3B%20Gris%20chin%C3%A9%3A%2090%25%20Coton%2C%2010%25%20Polyester%3B%20Autres%20couleurs%20chin%C3%A9es%3A%2050%25%20Coton%2C%2050%25%20Polyester%22%20%2BT-Shirt%20-Col%20-Raglan&i=fashion&language=fr_FR&ref=glow_cls&refresh=1&s=date-desc-rank'
  },
  {
    id: 'ES',
    name: '.ES',
    country: 'Spain',
    zip: '50004',
    url: 'https://www.amazon.es/s?i=fashion&s=date-desc-rank&hidden-keywords=%22+Color+solido%3A+100%25+Algodon%3B+Gris%3A+90%25+Algodon%2C+10%25+Poliester%3B+otros+colores%3A+50%25+Algodon%2C+50%25+Poliester%22&language=es_ES'
  },
  {
    id: 'IT',
    name: '.IT',
    country: 'Italy',
    zip: '20089',
    url: 'https://www.amazon.it/s?i=fashion&s=date-desc-rank&hidden-keywords=Leggera+taglio+classico+maniche+con+doppia+cucitura+e+orlo+inferiore+Maglietta+Tinta+unita+100+Cotone+Grigio+Cenere+90+Cotone+10+Poliestere+Altri+Toni+50+Cotone+50+Poliestere&language=it_IT'
  }
];

export const TOP_100_URL = 'https://www.amazon.com/Best-Sellers-Clothing-Shoes-Jewelry-Womens-Novelty-T-Shirts/zgbs/fashion/9056923011/ref=zg_bs_pg_1_fashion?_encoding=UTF8&pg=1';
export const TELEGRAM_CONTACT = '@MMOMA0511';
