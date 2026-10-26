/*
  THE MENU — edit prices and dishes here.
  Each item: name (en / pt), price in euros (null = no price shown),
  optional desc (en / pt) and optional veg: true.
*/
window.AIRES_MENU = {
  food: [
    {
      id: 'couvert',
      title: { en: 'Couvert', pt: 'Couvert' },
      items: [
        { name: { en: 'Bread & Butter', pt: 'Pão e Manteiga' }, price: 1.5 },
        { name: { en: 'Sardine Paste', pt: 'Pasta de Sardinha' }, price: 1.5 },
        { name: { en: 'Olives', pt: 'Azeitonas' }, price: 2 },
        { name: { en: 'Cheese', pt: 'Queijo' }, price: 2 }
      ]
    },
    {
      id: 'starters',
      title: { en: 'Starters', pt: 'Entradas' },
      items: [
        { name: { en: 'Fish Nuggets', pt: 'Nuggets de Peixe' }, price: 11,
          desc: { en: 'Golden, crispy & lightly battered.', pt: 'Dourados, estaladiços e levemente panados.' } },
        { name: { en: 'Flaming Chouriço', pt: 'Chouriço Assado' }, price: 10,
          desc: { en: 'A show-stopping traditional Portuguese sausage, flame grilled & served sizzling at your table.',
                  pt: 'O tradicional chouriço português, assado na chama e servido a crepitar na sua mesa.' } },
        { name: { en: 'Garlic Bread', pt: 'Pão de Alho' }, price: 6.5, veg: true }
      ]
    },
    {
      id: 'salads',
      title: { en: 'Salads', pt: 'Saladas' },
      items: [
        { name: { en: 'Aires House Salad', pt: 'Salada da Casa Aires' }, price: 12.5, veg: true,
          desc: { en: 'Our personal favourite. Crispy lettuce, tomato, cucumber, red onions, green pepper & feta.',
                  pt: 'A nossa preferida. Alface estaladiça, tomate, pepino, cebola roxa, pimento verde e feta.' } },
        { name: { en: 'Tuna Salad', pt: 'Salada de Atum' }, price: 13.5,
          desc: { en: 'Flaked tuna with a rich, creamy mayo dressing, lettuce, cucumber, red onion, green pepper & tomato.',
                  pt: 'Atum em lascas com molho cremoso de maionese, alface, pepino, cebola roxa, pimento verde e tomate.' } },
        { name: { en: 'Tomato & Onion', pt: 'Tomate e Cebola' }, price: 7.5, veg: true },
        { name: { en: 'Zesty Chickpea Salad', pt: 'Salada de Grão-de-Bico' }, price: 14, veg: true,
          desc: { en: 'A vibrant mix of zesty chickpeas, juicy tomatoes, crisp cucumber, red onions & feta.',
                  pt: 'Grão-de-bico temperado, tomate sumarento, pepino fresco, cebola roxa e feta.' } }
      ]
    },
    {
      id: 'mains',
      title: { en: 'Main Course', pt: 'Pratos Principais' },
      note: { en: 'Choice of two sides: salad, fries, coleslaw, garlic potatoes, veggies or rice.',
              pt: 'Dois acompanhamentos à escolha: salada, batata frita, coleslaw, batatas com alho, legumes ou arroz.' },
      items: [
        { name: { en: 'Fish & Chips', pt: 'Fish & Chips' }, price: 15 },
        { name: { en: 'Beef Bobotie', pt: 'Bobotie de Carne' }, price: 15 },
        { name: { en: 'Chickpea Bobotie', pt: 'Bobotie de Grão-de-Bico' }, price: 15, veg: true },
        { name: { en: 'Full Grilled Chicken', pt: 'Frango Grelhado Inteiro' }, price: 15 },
        { name: { en: 'Half Grilled Chicken', pt: 'Meio Frango Grelhado' }, price: 13 },
        { name: { en: 'Full Spare Ribs', pt: 'Entrecosto (Dose Inteira)' }, price: 19.5 },
        { name: { en: 'Half Spare Ribs', pt: 'Meio Entrecosto' }, price: 15.5 },
        { name: { en: 'Aires House Combo', pt: 'Combo da Casa Aires' }, price: 21.5,
          desc: { en: 'Half ribs & half chicken.', pt: 'Meio entrecosto e meio frango.' } }
      ]
    },
    {
      id: 'burgers',
      title: { en: 'Hamburgers', pt: 'Hambúrgueres' },
      items: [
        { name: { en: 'Beef Burger', pt: 'Hambúrguer de Vaca' }, price: 12 },
        { name: { en: 'Cheese Burger', pt: 'Cheeseburger' }, price: 13 },
        { name: { en: 'Cheese & Egg Burger', pt: 'Hambúrguer com Queijo e Ovo' }, price: 14 },
        { name: { en: 'Cheese, Egg & Bacon', pt: 'Queijo, Ovo e Bacon' }, price: 16 },
        { name: { en: 'Chickpea Burger', pt: 'Hambúrguer de Grão-de-Bico' }, price: 14.5, veg: true }
      ]
    },
    {
      id: 'sides',
      title: { en: 'Sides', pt: 'Acompanhamentos' },
      items: [
        { name: { en: 'Fries', pt: 'Batata Frita' }, price: 4.5 },
        { name: { en: 'Rice', pt: 'Arroz' }, price: 4.5 },
        { name: { en: 'Side Salad', pt: 'Salada' }, price: 4.5 },
        { name: { en: 'Coleslaw', pt: 'Coleslaw' }, price: 4.5 },
        { name: { en: 'Garlic Potatoes', pt: 'Batatas com Alho' }, price: 4.5 },
        { name: { en: 'Veggies', pt: 'Legumes' }, price: 4.5 }
      ]
    },
    {
      id: 'kids',
      title: { en: 'Kiddies Menu', pt: 'Menu Infantil' },
      items: [
        { name: { en: 'Hamburger & Fries', pt: 'Hambúrguer e Batata Frita' }, price: 8.5 },
        { name: { en: 'Spare Ribs & Fries', pt: 'Entrecosto e Batata Frita' }, price: 14 },
        { name: { en: 'Mac & Cheese', pt: 'Mac & Cheese' }, price: 8.5 }
      ]
    },
    {
      id: 'desserts',
      title: { en: 'Desserts', pt: 'Sobremesas' },
      items: [
        { name: { en: 'Malva Pudding', pt: 'Pudim Malva' }, price: 6.9 },
        { name: { en: 'Chocolate Brownie', pt: 'Brownie de Chocolate' }, price: 6.9 },
        { name: { en: 'Ice Cream & Chocolate', pt: 'Gelado com Chocolate' }, price: 5.5 },
        { name: { en: 'Strawberries & Ice Cream', pt: 'Morangos com Gelado' }, price: 6.5 },
        { name: { en: 'Dom Pedro', pt: 'Dom Pedro' }, price: 9,
          desc: { en: 'The South African after-dinner classic: ice cream blended with a spirit or liqueur.',
                  pt: 'O clássico sul-africano: gelado batido com uma bebida espirituosa ou licor.' } }
      ]
    }
  ],

  drinks: [
    {
      id: 'beer',
      title: { en: 'Beer', pt: 'Cerveja' },
      items: [
        { name: { en: 'Sagres', pt: 'Sagres' }, price: 2.5 },
        { name: { en: 'Cristal', pt: 'Cristal' }, price: 2.5 },
        { name: { en: 'Super Bock 0.0%', pt: 'Super Bock 0,0%' }, price: 4 },
        { name: { en: 'Super Bock (gluten free)', pt: 'Super Bock (sem glúten)' }, price: 4 }
      ]
    },
    {
      id: 'tap',
      title: { en: 'Beer on Tap', pt: 'Cerveja à Pressão' },
      items: [
        { name: { en: 'Sagres 20cl', pt: 'Sagres 20cl' }, price: 3 },
        { name: { en: 'Sagres 40cl', pt: 'Sagres 40cl' }, price: 4.4 }
      ]
    },
    {
      id: 'wine',
      title: { en: 'House Wine', pt: 'Vinho da Casa' },
      note: { en: 'Red, white or rosé', pt: 'Tinto, branco ou rosé' },
      items: [
        { name: { en: 'Glass', pt: 'Copo' }, price: 4.5 },
        { name: { en: '500ml', pt: '500ml' }, price: 8 },
        { name: { en: '1 litre', pt: '1 litro' }, price: 12.5 }
      ]
    },
    {
      id: 'sangria',
      title: { en: 'Sangria', pt: 'Sangria' },
      items: [
        { name: { en: '500ml', pt: '500ml' }, price: 9.5 },
        { name: { en: '1 litre', pt: '1 litro' }, price: 17 }
      ]
    },
    {
      id: 'cocktails',
      title: { en: 'Cocktails', pt: 'Cocktails' },
      items: [
        { name: { en: 'Caipirinha', pt: 'Caipirinha' }, price: 7.5 },
        { name: { en: 'Aperol Spritz', pt: 'Aperol Spritz' }, price: 8.5 },
        { name: { en: 'Dom Pedro', pt: 'Dom Pedro' }, price: 9 },
        { name: { en: 'Strawberry Daiquiri', pt: 'Daiquiri de Morango' }, price: 7.5 },
        { name: { en: 'Mojito', pt: 'Mojito' }, price: 7.5 },
        { name: { en: 'Margarita', pt: 'Margarita' }, price: 7.5 },
        { name: { en: 'Moscow Mule', pt: 'Moscow Mule' }, price: 8.5 }
      ]
    },
    {
      id: 'spirits',
      title: { en: 'Spirits', pt: 'Bebidas Espirituosas' },
      items: [
        { name: { en: 'Beefeater', pt: 'Beefeater' }, price: 7.5 },
        { name: { en: 'Smirnoff Vodka', pt: 'Vodka Smirnoff' }, price: 7.5 },
        { name: { en: 'Spiced Gold', pt: 'Spiced Gold' }, price: 7.5 },
        { name: { en: 'J&B', pt: 'J&B' }, price: 6.5 },
        { name: { en: 'Jameson', pt: 'Jameson' }, price: 6.9 },
        { name: { en: 'Macieira', pt: 'Macieira' }, price: 4.5 },
        { name: { en: '1920', pt: '1920' }, price: 5.5 },
        { name: { en: 'KWV Brandy', pt: 'Brandy KWV' }, price: 7.5 }
      ]
    },
    {
      id: 'liqueur',
      title: { en: 'Liqueur & Port', pt: 'Licores e Porto' },
      items: [
        { name: { en: 'Amarula', pt: 'Amarula' }, price: 7 },
        { name: { en: 'Tia Maria', pt: 'Tia Maria' }, price: 4 },
        { name: { en: 'Licor Beirão', pt: 'Licor Beirão' }, price: 4.5 },
        { name: { en: 'Port, red', pt: 'Porto Tinto' }, price: 5.5 },
        { name: { en: 'Port, white', pt: 'Porto Branco' }, price: 5.5 }
      ]
    },
    {
      id: 'soft',
      title: { en: 'Soft Drinks', pt: 'Refrigerantes' },
      items: [
        { name: { en: 'Coca-Cola, Coke Zero, Fanta, 7Up, Sumol, Iced Tea, Iron Brew', pt: 'Coca-Cola, Coca-Cola Zero, Fanta, 7Up, Sumol, Ice Tea, Iron Brew' }, price: 2.5 },
        { name: { en: 'Fresh juice: orange or apple', pt: 'Sumo: laranja ou maçã' }, price: 4 },
        { name: { en: 'Smoothie of the day', pt: 'Smoothie do dia' }, price: 4 },
        { name: { en: 'Still water 500ml', pt: 'Água sem gás 500ml' }, price: 2.5 },
        { name: { en: 'Sparkling water 250ml', pt: 'Água com gás 250ml' }, price: 1.5 },
        { name: { en: 'Sparkling water 750ml', pt: 'Água com gás 750ml' }, price: 3 }
      ]
    },
    {
      id: 'hot',
      title: { en: 'Coffee & Tea', pt: 'Café e Chá' },
      items: [
        { name: { en: 'Espresso', pt: 'Café' }, price: 2 },
        // CHECK: Americano and Flat White have no price on the printed menu
        { name: { en: 'Americano', pt: 'Americano' }, price: null },
        { name: { en: 'Flat White', pt: 'Flat White' }, price: null },
        { name: { en: 'Cappuccino', pt: 'Cappuccino' }, price: 2.5 },
        { name: { en: 'Freezo iced coffee', pt: 'Café gelado Freezo' }, price: 6.5 },
        { name: { en: 'Ceylon tea (Five Roses)', pt: 'Chá Ceylon (Five Roses)' }, price: 2.5 },
        { name: { en: 'Rooibos tea', pt: 'Chá Rooibos' }, price: 3.5 }
      ]
    }
  ]
};
