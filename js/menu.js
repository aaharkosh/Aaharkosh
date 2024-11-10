const weeklyMealPlans = {
    veg: {
        1: {
            Monday: { dinner: 'Vegetable Stir-Fry with Tofu' },
            Tuesday: { dinner: 'Spinach and Mushroom Quiche' },
            Wednesday: { dinner: 'Lentil and Vegetable Curry' },
            Thursday: { dinner: 'Eggplant Parmesan' },
            Friday: { dinner: 'Vegetarian Pizza' },
            Saturday: { dinner: 'Stuffed Bell Peppers' },
            Sunday: { dinner: 'Vegetable Lasagna' }
        },
        2: {
            Monday: { lunch: 'Greek Salad', dinner: 'Vegetable Biryani' },
            Tuesday: { lunch: 'Caprese Sandwich', dinner: 'Vegetable Curry with Rice' },
            Wednesday: { lunch: 'Tomato Soup with Grilled Cheese', dinner: 'Vegetable Fajitas' },
            Thursday: { lunch: 'Quinoa Bowl with Avocado', dinner: 'Vegetable Stir-Fry' },
            Friday: { lunch: 'Hummus Wrap', dinner: 'Eggplant Rollatini' },
            Saturday: { lunch: 'Vegetable Quiche', dinner: 'Vegetarian Chili' },
            Sunday: { lunch: 'Veggie Burger', dinner: 'Ratatouille' }
        },
        3: {
            Monday: { breakfast: 'Oatmeal with Berries', lunch: 'Vegetable Wrap', dinner: 'Lentil Loaf' },
            Tuesday: { breakfast: 'Avocado Toast', lunch: 'Vegetable Soup', dinner: 'Stuffed Portobello Mushrooms' },
            Wednesday: { breakfast: 'Greek Yogurt with Granola', lunch: 'Caprese Salad', dinner: 'Vegetable Paella' },
            Thursday: { breakfast: 'Vegetable Omelette', lunch: 'Quinoa Salad', dinner: 'Vegetable Lasagna' },
            Friday: { breakfast: 'Smoothie Bowl', lunch: 'Falafel Wrap', dinner: 'Vegetable Curry' },
            Saturday: { breakfast: 'Pancakes with Maple Syrup', lunch: 'Vegetable Sushi Rolls', dinner: 'Eggplant Parmesan' },
            Sunday: { breakfast: 'Tofu Scramble', lunch: 'Vegetable Pizza', dinner: 'Vegetable Stir-Fry' }
        }
    },
    'non-veg': {
        1: {
            Monday: { dinner: 'Grilled Chicken with Roasted Vegetables' },
            Tuesday: { dinner: 'Baked Salmon with Quinoa' },
            Wednesday: { dinner: 'Beef Stir-Fry' },
            Thursday: { dinner: 'Slow Cooker Beef Stew' },
            Friday: { dinner: 'Shrimp Scampi' },
            Saturday: { dinner: 'Grilled Steak with Sweet Potato Mash' },
            Sunday: { dinner: 'Roast Turkey with Stuffing' }
        },
        2: {
            Monday: { lunch: 'Chicken Caesar Salad', dinner: 'Spaghetti Bolognese' },
            Tuesday: { lunch: 'Tuna Salad Sandwich', dinner: 'Grilled Salmon' },
            Wednesday: { lunch: 'Turkey and Avocado Wrap', dinner: 'Beef Tacos' },
            Thursday: { lunch: 'Chicken Noodle Soup', dinner: 'Pork Chops with Applesauce' },
            Friday: { lunch: 'Shrimp Salad', dinner: 'Beef Stir-Fry with Noodles' },
            Saturday: { lunch: 'Club Sandwich', dinner: 'BBQ Ribs with Coleslaw' },
            Sunday: { lunch: 'Brunch Platter', dinner: 'Roast Chicken with Potatoes' }
        },
        3: {
            Monday: { breakfast: 'Bacon and Eggs', lunch: 'Chicken Salad', dinner: 'Baked Cod with Lemon' },
            Tuesday: { breakfast: 'Ham and Cheese Omelette', lunch: 'Turkey Sandwich', dinner: 'Beef Tacos' },
            Wednesday: { breakfast: 'Sausage and Eggs', lunch: 'Tuna Salad', dinner: 'Chicken Parmesan' },
            Thursday: { breakfast: 'Breakfast Burrito', lunch: 'Cobb Salad', dinner: 'Grilled Pork Chops' },
            Friday: { breakfast: 'Smoked Salmon Bagel', lunch: 'Chicken Caesar Wrap', dinner: 'Shrimp Scampi' },
            Saturday: { breakfast: 'Steak and Eggs', lunch: 'Club Sandwich', dinner: 'Grilled Lamb Chops' },
            Sunday: { breakfast: 'Eggs Benedict', lunch: 'Antipasto Platter', dinner: 'Roast Beef with Yorkshire Pudding' }
        }
    }
};

const mealImages = {
    'Vegetable Stir-Fry with Tofu': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Spinach and Mushroom Quiche': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Lentil and Vegetable Curry': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Eggplant Parmesan': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Vegetarian Pizza': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Stuffed Bell Peppers': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Vegetable Lasagna': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Greek Salad': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Vegetable Biryani': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Caprese Sandwich': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Vegetable Curry with Rice': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Tomato Soup with Grilled Cheese': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Vegetable Fajitas': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Quinoa Bowl with Avocado': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Hummus Wrap': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Eggplant Rollatini': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Vegetable Quiche': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Vegetarian Chili': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Veggie Burger': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Ratatouille': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Oatmeal with Berries': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Vegetable Wrap': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Lentil Loaf': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Avocado Toast': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Vegetable Soup': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Stuffed Portobello Mushrooms': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Greek Yogurt with Granola': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Caprese Salad': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Vegetable Paella': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Vegetable Omelette': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Quinoa Salad': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Smoothie Bowl': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Falafel Wrap': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Pancakes with Maple Syrup': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Vegetable Sushi Rolls': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Tofu Scramble': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Grilled Chicken with Roasted Vegetables': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Baked Salmon with Quinoa': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Beef Stir-Fry': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Slow Cooker Beef Stew': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Shrimp Scampi': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Grilled Steak with Sweet Potato Mash': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Roast Turkey with Stuffing': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Chicken Caesar Salad': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Spaghetti Bolognese': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Tuna Salad Sandwich': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Grilled Salmon': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Turkey and Avocado Wrap': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Beef Tacos': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Chicken Noodle Soup': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Pork Chops with Applesauce': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Shrimp Salad': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Beef Stir-Fry with Noodles': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Club Sandwich': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'BBQ Ribs with Coleslaw': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Brunch Platter': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Roast Chicken with Potatoes': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Bacon and Eggs': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Chicken Salad': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Baked Cod with Lemon': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Ham and Cheese Omelette': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Turkey Sandwich': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Sausage and Eggs': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Tuna Salad': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Chicken Parmesan': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Breakfast Burrito': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Cobb Salad': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Grilled Pork Chops': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Smoked Salmon Bagel': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Chicken Caesar Wrap': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Steak and Eggs': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Grilled Lamb Chops': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Eggs Benedict': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
    'Antipasto Platter': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
    'Roast Beef with Yorkshire Pudding': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png'
};

let selectedMealPlan = 3;
let selectedDay = 'Monday';
let selectedMealType = 'non-veg';

function getMealImage(meal) {
    return mealImages[meal] || 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png';
}

function updateMealDisplay() {
    const mealDisplay = document.getElementById('meal-display');
    mealDisplay.innerHTML = '';
    const meals = weeklyMealPlans[selectedMealType][selectedMealPlan][selectedDay];
    const mealTimes = ['breakfast', 'lunch', 'dinner'];

    mealTimes.forEach(mealTime => {
        const mealItem = document.createElement('div');
        mealItem.className = 'flex flex-col items-center';
        if (meals[mealTime]) {
            mealItem.innerHTML = `
                <h3 class="text-lg bg-white max-sm:w-[60vw] px-4 py-2 w-[20vw] text-center rounded-lg mb-2 capitalize">${mealTime}</h3>
                <img src="${getMealImage(meals[mealTime])}" alt="${meals[mealTime]}" class="w-36 h-36 object-cover rounded-lg mb-2">
                <p class="text-center text-gray-400">${meals[mealTime]}</p>
            `;
        } else {
            mealItem.innerHTML = `
                <h3 class="text-lg font-semibold mb-2 capitalize">${mealTime}</h3>
                <p class="text-gray-500">No meal planned</p>
            `;
        }
        mealDisplay.appendChild(mealItem);
    });
}

function updateActiveButtons() {
    document.querySelectorAll('#meal-buttons button').forEach(btn => {
        btn.classList.toggle('bg-[#FF9D5C]', parseInt(btn.dataset.meals) === selectedMealPlan);
        btn.classList.toggle('text-white', parseInt(btn.dataset.meals) === selectedMealPlan);
        btn.classList.toggle('bg-[#FFE8D6]', parseInt(btn.dataset.meals) !== selectedMealPlan);
    });

    document.querySelectorAll('#meal-type-buttons button').forEach(btn => {
        btn.classList.toggle('bg-[#FF9D5C]', btn.dataset.type === selectedMealType);
        btn.classList.toggle('text-white', btn.dataset.type === selectedMealType);
        btn.classList.toggle('bg-[#FFE8D6]', btn.dataset.type !== selectedMealType);
    });

    document.querySelectorAll('#day-buttons button').forEach(btn => {
        btn.classList.toggle('bg-[#FF9D5C]', btn.dataset.day === selectedDay);
        btn.classList.toggle('text-white', btn.dataset.day === selectedDay);
        btn.classList.toggle('bg-[#FFE8D6]', btn.dataset.day !== selectedDay);
    });
}

function selectMealPlan(plan) {
    selectedMealPlan = plan;
    updateMealDisplay();
    updateActiveButtons();
}

function selectMealType(type) {
    selectedMealType = type;
    updateMealDisplay();
    updateActiveButtons();
}

function selectDay(day) {
    selectedDay = day;
    // document.getElementById('selected-day').textContent = `${day} Meals`;
    updateMealDisplay();
    updateActiveButtons();
}

// Add event listeners
document.querySelectorAll('#meal-buttons button').forEach(btn => {
    btn.addEventListener('click', () => selectMealPlan(parseInt(btn.dataset.meals)));
});

document.querySelectorAll('#meal-type-buttons button').forEach(btn => {
    btn.addEventListener('click', () => selectMealType(btn.dataset.type));
});

document.querySelectorAll('#day-buttons button').forEach(btn => {
    btn.addEventListener('click', () => selectDay(btn.dataset.day));
});

// Initialize the planner
updateMealDisplay();
updateActiveButtons();