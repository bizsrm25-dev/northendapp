import json
import re

with open('menu/MENU.json', 'r') as f:
    data = json.load(f)

products = []
categories = ['All']
product_id = 1

category_image_map = {
    'Popular': '/coffee_drink.png',
    'Hot & Iced Drinks': '/coffee_drink.png',
    'Refreshing Drinks': '/refreshing_drink.png',
    'Pastries': '/pastry.png',
    'Sandwiches': '/sandwich.png',
    'Blended Frozen Drinks': '/coffee_drink.png',
    'Egg Souffle Sandwiches': '/sandwich.png',
    'Quick Bites': '/quick_bite.png',
    'THE Giver Coffee Boxes': '/coffee_drink.png'
}

for cat in data:
    cat_name = cat['category']
    categories.append(cat_name)
    
    for item in cat['items']:
        name = item['name'].replace("'", "\\'")
        desc = item.get('description', '').replace("'", "\\'").replace("\n", " ")
        
        # parse price: 'Tk 320' -> 320
        price_str = item.get('price', 'Tk 0')
        match = re.search(r'\d+', price_str.replace(',', ''))
        price = int(match.group()) if match else 0
        
        # images
        if item.get('images') and len(item['images']) > 0:
            image_url = item['images'][0]
        else:
            image_url = category_image_map.get(cat_name, '/coffee_drink.png')
            
        products.append(f"""  {{
    id: '{product_id}',
    name: '{name}',
    description: '{desc}',
    price: {price},
    image: '{image_url}',
    category: '{cat_name}'
  }}""")
        product_id += 1

ts_content = f"""import {{ Product }} from './types';

export const CATEGORIES = {json.dumps(categories)};

export const PRODUCTS: Product[] = [
{',\n'.join(products)}
];
"""

with open('src/menuData.ts', 'w') as f:
    f.write(ts_content)

print("menuData.ts created with", len(products), "products.")
