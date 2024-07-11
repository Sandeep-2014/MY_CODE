// welcome
// day available
// menu option:- lunch, dinner, breakfast
// 
// 
const input = require('readline-sync')

console.log("Your most welcome in our hotel sir");
console.log("Do you want to oder something");
console.log("1. Yes");
console.log("2. No");

let orderConfirmation = input.questionInt("Please choose 1 or 2 from above opotion:- ")

if(orderConfirmation == 1){
    console.log("Please choose the day:- ");
    console.log("1. Monday");
    console.log("2. Tuesday");
    console.log("3. Wednesday");
    console.log("4. Thursday");
    console.log("5. Friday");
    console.log("6. Saturday");
    console.log("7. Sunday");

    day = input.questionInt("please enter the day number from above option:- ")

    if (day == 1){
        console.log("Thanks dor choosing the day");
        console.log("Here are the dishes available for the Monaday with Price:- ");
        
        console.log("Please choose the option for Breakfast, lunch, and dinner");
        console.log("1. Breakfast");
        console.log("2. Lunch");
        console.log("3. Dinner");

        chooseMeal = input.question("please enter your meal name:-  ")
        if (chooseMeal == "Breakfast" || chooseMeal == "breakfast"){
            console.log("These dishes are available for Breakfast:- ");
            console.log("1. Poha (flattened rice with vegetables) - ₹70\n" +
                        "2. Masala chai - ₹20\n" +
                        "3. Fresh fruit platter - ₹50\n" +
                        "4. Stuffed paratha with yogurt - ₹80\n" +
                        "5. Scrambled eggs - ₹60\n" +
                        "6. Fresh orange juice - ₹50");
                        let poha = 70;
                        let masalDosa = 20;
                        let freshFruit = 50;
                        let stuffedParatha = 80;
                        let scrambledEggs = 60;
                        let orangeJuice = 50
                        let totalBill = 0

                        for(let i = 0; i<6; i++){
                            if(i == 0){
                                console.log("please chose your dish");
                                let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                if(dish == 1){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += poha*numberOfplate
                                }else if(dish == 2){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += masalDosa*numberOfplate
                                }else if(dish == 3){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += freshFruit*numberOfplate
                                }else if(dish == 4){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += stuffedParatha*numberOfplate
                                }else if(dish == 5){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += scrambledEggs*numberOfplate
                                }else if(dish == 6){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += orangeJuice*numberOfplate
                                }
                            }else{
                                order = input.question("Do you want to order more dish if you want then choose yes otherwise choose no :- ")
                                if (order == "yes"){
                                    let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                    if(dish == 1){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += poha*numberOfplate
                                    }else if(dish == 2){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += masalDosa*numberOfplate
                                    }else if(dish == 3){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += freshFruit*numberOfplate
                                    }else if(dish == 4){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += stuffedParatha*numberOfplate
                                    }else if(dish == 5){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += scrambledEggs*numberOfplate
                                    }else if(dish == 6){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += orangeJuice*numberOfplate
                                    }
                                }else{
                                    break
                                }
                            }
                    
                        }
                        console.log("Thanks for the order sir");
                        console.log("Here is your total bill:- ", totalBill);
                        console.log("Please enjoy your meal");
                        
            }else if(chooseMeal == "Lunch" || chooseMeal == "lunch"){
                console.log("These dishes are available for the Lunch");
                console.log("1. Paneer Tikka Salad - ₹150\n" +
                            "2. Whole wheat roti - ₹20\n" +
                            "3. Buttermilk - ₹30\n" +
                            "4. Grilled chicken breast - ₹150\n" +
                            "5. Mixed vegetable pulao - ₹120\n" +
                            "6. Dal tadka (tempered lentils) - ₹90");

                            let paneerTikka = 150;
                            let wheatRoti = 20;
                            let butterMilk = 30;
                            let grilledChicken = 150;
                            let mixedVegetables = 120;
                            let dalTadka = 90;
                            let totalBill = 0

                            for(let i = 0; i<6; i++){
                                if(i == 0){
                                    console.log("please chose your dish");
                                    let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                    if(dish == 1){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += paneerTikka*numberOfplate
                                    }else if(dish == 2){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += wheatRoti*numberOfplate
                                    }else if(dish == 3){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += butterMilk*numberOfplate
                                    }else if(dish == 4){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += grilledChicken*numberOfplate
                                    }else if(dish == 5){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += mixedVegetables*numberOfplate
                                    }else if(dish == 6){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += dalTadka*numberOfplate
                                    }
                                }else{
                                    order = input.question("Do you want to order more dish if you want then choose yes otherwise choose no :- ")
                                    if (order == "yes"){
                                        let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                        if(dish == 1){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += paneerTikka*numberOfplate
                                        }else if(dish == 2){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += wheatRoti*numberOfplate
                                        }else if(dish == 3){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += butterMilk*numberOfplate
                                        }else if(dish == 4){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += grilledChicken*numberOfplate
                                        }else if(dish == 5){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += mixedVegetables*numberOfplate
                                        }else if(dish == 6){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += dalTadka*numberOfplate
                                        }
                                    }else{
                                        break
                                    }
                                }
                        
                            }
                            console.log("Thanks for the order sir");
                            console.log("Here is your total bill:- ", totalBill);
                            console.log("Please enjoy your meal");

            }else if(chooseMeal == "Dinner" || chooseMeal == "dinner"){
                console.log("These dishes are available for the dinner:- \n");
                console.log("1. Grilled fish with steamed vegetables - ₹200\n" +
                            "2. Brown rice - ₹50\n" +
                            "3. Cucumber raita - ₹40\n" +
                            "4. Chicken curry - ₹180\n" +
                            "5. Mixed vegetable stir-fry - ₹120\n" +
                            "6. Tandoori roti - ₹30");

                            let grilledFish = 200;
                            let brownRice = 50;
                            let cucumberRaita = 40;
                            let chickenCurry = 180;
                            let MixedVeg_stirfry = 120;
                            let tandooriRoti = 30;
                            let totalBill = 0

                            for(let i = 0; i<6; i++){
                                if(i == 0){
                                    console.log("please chose your dish");
                                    let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                    if(dish == 1){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += grilledFish*numberOfplate
                                    }else if(dish == 2){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += brownRice*numberOfplate
                                    }else if(dish == 3){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += cucumberRaita*numberOfplate
                                    }else if(dish == 4){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += chickenCurry*numberOfplate
                                    }else if(dish == 5){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += MixedVeg_stirfry*numberOfplate
                                    }else if(dish == 6){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += tandooriRoti*numberOfplate
                                    }
                                }else{
                                    order = input.question("Do you want to order more dish if you want then choose yes otherwise choose no :- ")
                                    if (order == "yes"){
                                        let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                        if(dish == 1){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += grilledFish*numberOfplate
                                        }else if(dish == 2){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += brownRice*numberOfplate
                                        }else if(dish == 3){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += cucumberRaita*numberOfplate
                                        }else if(dish == 4){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += chickenCurry*numberOfplate
                                        }else if(dish == 5){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += MixedVeg_stirfry*numberOfplate
                                        }else if(dish == 6){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += tandooriRoti*numberOfplate
                                        }
                                    }else{
                                        break
                                    }
                                }
                        
                            }
                            console.log("Thanks for the order sir");
                            console.log("Here is your total bill:- ", totalBill);
                            console.log("Please enjoy your meal");
            }
    }else if (day == 2){
        console.log("Thanks dor choosing the day");
        console.log("Here are the dishes available for the Tuesday with Price:- ");
        
        console.log("Please choose the option for Breakfast, lunch, and dinner");
        console.log("1. Breakfast");
        console.log("2. Lunch");
        console.log("3. Dinner");

        chooseMeal = input.question("please enter your meal name:-  ")
        if (chooseMeal == "Breakfast" || chooseMeal == "breakfast"){
            console.log("These dishes are available for Breakfast:- ");
            console.log("1. Idli with sambar and coconut chutney - ₹80\n" +
                        "2. Filter coffee - ₹30\n" +
                        "3. Fresh fruit juice - ₹50\n" +
                        "4. Masala oats - ₹70\n" +
                        "5. Boiled eggs - ₹50\n" +
                        "6. Smoothie bowl with granola - ₹90")


                        let idli = 80;
                        let cofee = 30;
                        let fruitJuice = 50;
                        let masalaOats = 70;
                        let boiledEggs = 50;
                        let smothieBowl = 90;
                        let totalBill = 0

                        for(let i = 0; i<6; i++){
                            if(i == 0){
                                console.log("please chose your dish");
                                let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                if(dish == 1){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += idli*numberOfplate
                                }else if(dish == 2){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += cofee*numberOfplate
                                }else if(dish == 3){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += fruitJuice*numberOfplate
                                }else if(dish == 4){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += masalaOats*numberOfplate
                                }else if(dish == 5){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += boiledEggs*numberOfplate
                                }else if(dish == 6){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += smothieBowl*numberOfplate
                                }
                            }else{
                                order = input.question("Do you want to order more dish if you want then choose yes otherwise choose no :- ")
                                if (order == "yes"){
                                    let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                    if(dish == 1){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += idli*numberOfplate
                                    }else if(dish == 2){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += cofee*numberOfplate
                                    }else if(dish == 3){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += fruitJuice*numberOfplate
                                    }else if(dish == 4){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += masalaOats*numberOfplate
                                    }else if(dish == 5){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += boiledEggs*numberOfplate
                                    }else if(dish == 6){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += smothieBowl*numberOfplate
                                    }
                                }else{
                                    break
                                }
                            }
                    
                        }
                        console.log("Thanks for the order sir");
                        console.log("Here is your total bill:- ", totalBill);
                        console.log("Please enjoy your meal");
                        
            }else if(chooseMeal == "Lunch" || chooseMeal == "lunch"){
                console.log("These dishes are available for the Lunch");
                console.log("1. Mixed vegetable curry - ₹120\n" +
                            "2. Quinoa - ₹70\n" +
                            "3. Mint lassi - ₹40\n" +
                            "4. Tandoori chicken salad - ₹150\n" +
                            "5. Whole wheat naan - ₹30\n" +
                            "6. Cabbage and carrot salad - ₹60");

                            let mixedVeg_curry = 120;
                            let quinoa = 70;
                            let mintLassi = 40;
                            let tandooriChicken = 150;
                            let naan = 30;
                            let salad = 60;
                            let totalBill = 0

                            for(let i = 0; i<6; i++){
                                if(i == 0){
                                    console.log("please chose your dish");
                                    let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                    if(dish == 1){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += mixedVeg_curry*numberOfplate
                                    }else if(dish == 2){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += quinoa*numberOfplate
                                    }else if(dish == 3){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += mintLassi*numberOfplate
                                    }else if(dish == 4){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += tandooriChicken*numberOfplate
                                    }else if(dish == 5){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += naan*numberOfplate
                                    }else if(dish == 6){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += salad*numberOfplate
                                    }
                                }else{
                                    order = input.question("Do you want to order more dish if you want then choose yes otherwise choose no :- ")
                                    if (order == "yes"){
                                        let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                        if(dish == 1){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += mixedVeg_curry*numberOfplate
                                        }else if(dish == 2){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += quinoa*numberOfplate
                                        }else if(dish == 3){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += mintLassi*numberOfplate
                                        }else if(dish == 4){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += tandooriChicken*numberOfplate
                                        }else if(dish == 5){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += naan*numberOfplate
                                        }else if(dish == 6){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += salad*numberOfplate
                                        }
                                    }else{
                                        break
                                    }
                                }
                        
                            }
                            console.log("Thanks for the order sir");
                            console.log("Here is your total bill:- ", totalBill);
                            console.log("Please enjoy your meal");

            }else if(chooseMeal == "Dinner" || chooseMeal == "dinner"){
                console.log("These dishes are available for the dinner:- \n");
                console.log("1. Chicken Tikka with mint chutney - ₹180\n" +
                            "2. Tandoori roti - ₹30\n" +
                            "3. Mixed green salad - ₹50\n" +
                            "4. Paneer Butter Masala - ₹150\n" +
                            "5. Jeera rice - ₹50\n" +
                            "6. Dal Makhani - ₹90")


                            let chickenTikka = 180;
                            let tandoorRoti = 30;
                            let mixedSalad = 50;
                            let paneerButter = 150;
                            let jeeraRice = 50;
                            let dalMakhani = 90;
                            let totalBill = 0

                            for(let i = 0; i<6; i++){
                                if(i == 0){
                                    console.log("please chose your dish");
                                    let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                    if(dish == 1){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += chickenTikka*numberOfplate
                                    }else if(dish == 2){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += tandoorRoti*numberOfplate
                                    }else if(dish == 3){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += mixedSalad*numberOfplate
                                    }else if(dish == 4){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += paneerButter*numberOfplate
                                    }else if(dish == 5){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += jeeraRice*numberOfplate
                                    }else if(dish == 6){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += dalMakhani*numberOfplate
                                    }
                                }else{
                                    order = input.question("Do you want to order more dish if you want then choose yes otherwise choose no :- ")
                                    if (order == "yes"){
                                        let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                        if(dish == 1){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += chickenTikka*numberOfplate
                                        }else if(dish == 2){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += tandoorRoti*numberOfplate
                                        }else if(dish == 3){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += mixedSalad*numberOfplate
                                        }else if(dish == 4){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += paneerButter*numberOfplate
                                        }else if(dish == 5){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += jeeraRice*numberOfplate
                                        }else if(dish == 6){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += dalMakhani*numberOfplate
                                        }
                                    }else{
                                        break
                                    }
                                }
                        
                            }
                            console.log("Thanks for the order sir");
                            console.log("Here is your total bill:- ", totalBill);
                            console.log("Please enjoy your meal");
            }
    }else if (day == 3){
        console.log("Thanks dor choosing the day");
        console.log("Here are the dishes available for the Wednesday with Price:- ");
        
        console.log("Please choose the option for Breakfast, lunch, and dinner");
        console.log("1. Breakfast");
        console.log("2. Lunch");
        console.log("3. Dinner");

        chooseMeal = input.question("please enter your meal name:-  ")
        if (chooseMeal == "Breakfast" || chooseMeal == "breakfast"){
            console.log("These dishes are available for Breakfast:- ");
            console.log("1. Upma (semolina porridge with vegetables) - ₹70\n" +
                        "2. Ginger tea - ₹20\n" +
                        "3. Fresh fruit salad - ₹50\n" +
                        "4. Besan chilla (gram flour pancakes) - ₹80\n" +
                        "5. Omelette with vegetables - ₹60\n" +
                        "6. Fresh watermelon juice - ₹50")

                        let upma = 70;
                        let gingerTea = 20;
                        let fruitSalad = 50;
                        let basanChilla = 80;
                        let omelette = 60;
                        let watermelonJuice = 50;
                        let totalBill = 0

                        for(let i = 0; i<6; i++){
                            if(i == 0){
                                console.log("please chose your dish");
                                let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                if(dish == 1){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += upma*numberOfplate
                                }else if(dish == 2){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += gingerTea*numberOfplate
                                }else if(dish == 3){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += fruitSalad*numberOfplate
                                }else if(dish == 4){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += basanChilla*numberOfplate
                                }else if(dish == 5){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += omelette*numberOfplate
                                }else if(dish == 6){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += watermelonJuice*numberOfplate
                                }
                            }else{
                                order = input.question("Do you want to order more dish if you want then choose yes otherwise choose no :- ")
                                if (order == "yes"){
                                    let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                    if(dish == 1){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += upma*numberOfplate
                                    }else if(dish == 2){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += gingerTea*numberOfplate
                                    }else if(dish == 3){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += fruitSalad*numberOfplate
                                    }else if(dish == 4){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += basanChilla*numberOfplate
                                    }else if(dish == 5){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += omelette*numberOfplate
                                    }else if(dish == 6){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += watermelonJuice*numberOfplate
                                    }
                                }else{
                                    break
                                }
                            }
                    
                        }
                        console.log("Thanks for the order sir");
                        console.log("Here is your total bill:- ", totalBill);
                        console.log("Please enjoy your meal");
                        
            }else if(chooseMeal == "Lunch" || chooseMeal == "lunch"){
                console.log("These dishes are available for the Lunch");
                console.log("1. Rajma (kidney bean curry) - ₹120\n" +
                            "2. Brown rice - ₹50\n" +
                            "3. Cucumber raita - ₹40\n" +
                            "4. Grilled fish salad - ₹150\n" +
                            "5. Whole wheat roti - ₹20\n" +
                            "6. Beetroot salad - ₹60");

                            let rajma = 120;
                            let brownRice = 50;
                            let cucumberRaita = 40;
                            let grilledFish_salad = 150;
                            let roti = 20;
                            let beetroutSalad = 60;
                            let totalBill = 0

                            for(let i = 0; i<6; i++){
                                if(i == 0){
                                    console.log("please chose your dish");
                                    let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                    if(dish == 1){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += rajma*numberOfplate
                                    }else if(dish == 2){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += brownRice*numberOfplate
                                    }else if(dish == 3){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += cucumberRaita*numberOfplate
                                    }else if(dish == 4){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += grilledFish_salad*numberOfplate
                                    }else if(dish == 5){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += roti*numberOfplate
                                    }else if(dish == 6){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += beetroutSalad*numberOfplate
                                    }
                                }else{
                                    order = input.question("Do you want to order more dish if you want then choose yes otherwise choose no :- ")
                                    if (order == "yes"){
                                        let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                        if(dish == 1){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += rajma*numberOfplate
                                        }else if(dish == 2){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += brownRice*numberOfplate
                                        }else if(dish == 3){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += cucumberRaita*numberOfplate
                                        }else if(dish == 4){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += grilledFish_salad*numberOfplate
                                        }else if(dish == 5){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += roti*numberOfplate
                                        }else if(dish == 6){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += beetroutSalad*numberOfplate
                                        }
                                    }else{
                                        break
                                    }
                                }
                        
                            }
                            console.log("Thanks for the order sir");
                            console.log("Here is your total bill:- ", totalBill);
                            console.log("Please enjoy your meal");

            }else if(chooseMeal == "Dinner" || chooseMeal == "dinner"){
                console.log("These dishes are available for the dinner:- \n");
                console.log("1. Palak Paneer (spinach with cottage cheese) - ₹150\n" +
                            "2. Whole wheat roti - ₹20\n" +
                            "3. Mixed vegetable salad - ₹50\n" +
                            "4. Chicken kebabs - ₹180\n" +
                            "5. Lemon rice - ₹50\n" +
                            "6. Lentil soup - ₹70")

                            let palakPaneer = 150;
                            let roti = 20;
                            let mixedVegSalad = 50;
                            let chickenKabab = 180;
                            let lomonRice = 50;
                            let lentilSoup = 70;
                            let totalBill = 0

                            for(let i = 0; i<6; i++){
                                if(i == 0){
                                    console.log("please chose your dish");
                                    let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                    if(dish == 1){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += palakPaneer*numberOfplate
                                    }else if(dish == 2){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += roti*numberOfplate
                                    }else if(dish == 3){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += mixedVegSalad*numberOfplate
                                    }else if(dish == 4){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += chickenKabab*numberOfplate
                                    }else if(dish == 5){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += lomonRice*numberOfplate
                                    }else if(dish == 6){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += lentilSoup*numberOfplate
                                    }
                                }else{
                                    order = input.question("Do you want to order more dish if you want then choose yes otherwise choose no :- ")
                                    if (order == "yes"){
                                        let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                        if(dish == 1){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += palakPaneer*numberOfplate
                                        }else if(dish == 2){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += roti*numberOfplate
                                        }else if(dish == 3){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += mixedVegSalad*numberOfplate
                                        }else if(dish == 4){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += chickenKabab*numberOfplate
                                        }else if(dish == 5){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += lomonRice*numberOfplate
                                        }else if(dish == 6){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += lentilSoup*numberOfplate
                                        }
                                    }else{
                                        break
                                    }
                                }
                        
                            }
                            console.log("Thanks for the order sir");
                            console.log("Here is your total bill:- ", totalBill);
                            console.log("Please enjoy your meal");
            }
    }else if (day == 4){
        console.log("Thanks dor choosing the day");
        console.log("Here are the dishes available for the Thursday with Price:- ");
        
        console.log("Please choose the option for Breakfast, lunch, and dinner");
        console.log("1. Breakfast");
        console.log("2. Lunch");
        console.log("3. Dinner");

        chooseMeal = input.question("please enter your meal name:-  ")
        if (chooseMeal == "Breakfast" || chooseMeal == "breakfast"){
            console.log("These dishes are available for Breakfast:- ");
            console.log("1. Moong dal chilla (lentil pancakes) - ₹80\n" +
                        "2. Masala chai - ₹20\n" +
                        "3. Fresh fruit platter - ₹50\n" +
                        "4. Vegetable upma - ₹70\n" +
                        "5. Hard-boiled eggs - ₹50\n" +
                        "6. Banana smoothie - ₹60")

                        let moongDal = 80;
                        let masalaChai = 20;
                        let fruitPlatter = 50;
                        let vegUpma = 70;
                        let hardBoiledEgg = 50;
                        let bananaSmoothie = 60;
                        let totalBill = 0

                        for(let i = 0; i<6; i++){
                            if(i == 0){
                                console.log("please chose your dish");
                                let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                if(dish == 1){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += moongDal*numberOfplate
                                }else if(dish == 2){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += masalaChai*numberOfplate
                                }else if(dish == 3){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += fruitPlatter*numberOfplate
                                }else if(dish == 4){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += vegUpma*numberOfplate
                                }else if(dish == 5){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += hardBoiledEgg*numberOfplate
                                }else if(dish == 6){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += bananaSmoothie*numberOfplate
                                }
                            }else{
                                order = input.question("Do you want to order more dish if you want then choose yes otherwise choose no :- ")
                                if (order == "yes"){
                                    let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                    if(dish == 1){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += moongDal*numberOfplate
                                    }else if(dish == 2){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += masalaChai*numberOfplate
                                    }else if(dish == 3){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += fruitPlatter*numberOfplate
                                    }else if(dish == 4){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += vegUpma*numberOfplate
                                    }else if(dish == 5){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += hardBoiledEgg*numberOfplate
                                    }else if(dish == 6){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += bananaSmoothie*numberOfplate
                                    }
                                }else{
                                    break
                                }
                            }
                    
                        }
                        console.log("Thanks for the order sir");
                        console.log("Here is your total bill:- ", totalBill);
                        console.log("Please enjoy your meal");
                        
            }else if(chooseMeal == "Lunch" || chooseMeal == "lunch"){
                console.log("These dishes are available for the Lunch");
                console.log("1. Chicken salad with yogurt dressing - ₹150\n" +
                            "2. Multigrain bread - ₹40\n" +
                            "3. Lemon mint cooler - ₹30\n" +
                            "4. Vegetable biryani - ₹120\n" +
                            "5. Raita - ₹40\n" +
                            "6. Spinach soup - ₹70");

                            let chickenSalad = 150;
                            let multigrainBread = 40;
                            let lemonMint = 30;
                            let vegBirayani = 120;
                            let raita = 40;
                            let spinachSoup = 70;
                            let totalBill = 0

                            for(let i = 0; i<6; i++){
                                if(i == 0){
                                    console.log("please chose your dish");
                                    let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                    if(dish == 1){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += chickenSalad*numberOfplate
                                    }else if(dish == 2){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += multigrainBread*numberOfplate
                                    }else if(dish == 3){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += lemonMint*numberOfplate
                                    }else if(dish == 4){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += vegBirayani*numberOfplate
                                    }else if(dish == 5){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += raita*numberOfplate
                                    }else if(dish == 6){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += spinachSoup*numberOfplate
                                    }
                                }else{
                                    order = input.question("Do you want to order more dish if you want then choose yes otherwise choose no :- ")
                                    if (order == "yes"){
                                        let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                        if(dish == 1){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += chickenSalad*numberOfplate
                                        }else if(dish == 2){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += multigrainBread*numberOfplate
                                        }else if(dish == 3){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += lemonMint*numberOfplate
                                        }else if(dish == 4){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += vegBirayani*numberOfplate
                                        }else if(dish == 5){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += raita*numberOfplate
                                        }else if(dish == 6){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += spinachSoup*numberOfplate
                                        }
                                    }else{
                                        break
                                    }
                                }
                        
                            }
                            console.log("Thanks for the order sir");
                            console.log("Here is your total bill:- ", totalBill);
                            console.log("Please enjoy your meal");

            }else if(chooseMeal == "Dinner" || chooseMeal == "dinner"){
                console.log("These dishes are available for the dinner:- \n");
                console.log("1. Grilled shrimp with vegetables - ₹200\n" +
                            "2. Quinoa - ₹70\n" +
                            "3. Carrot and cucumber raita - ₹40\n" +
                            "4. Paneer tikka - ₹150\n" +
                            "5. Whole wheat naan - ₹30\n" +
                            "6. Dal fry - ₹80")

                            let grilledShrimp = 200;
                            let quinoa = 70;
                            let carrotCucumberRaita = 40;
                            let paneerTikka = 150;
                            let naan = 30;
                            let dalFry = 80;
                            let totalBill = 0

                            for(let i = 0; i<6; i++){
                                if(i == 0){
                                    console.log("please chose your dish");
                                    let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                    if(dish == 1){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += grilledShrimp*numberOfplate
                                    }else if(dish == 2){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += quinoa*numberOfplate
                                    }else if(dish == 3){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += carrotCucumberRaita*numberOfplate
                                    }else if(dish == 4){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += paneerTikka*numberOfplate
                                    }else if(dish == 5){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += naan*numberOfplate
                                    }else if(dish == 6){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += dalFry*numberOfplate
                                    }
                                }else{
                                    order = input.question("Do you want to order more dish if you want then choose yes otherwise choose no :- ")
                                    if (order == "yes"){
                                        let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                        if(dish == 1){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += grilledShrimp*numberOfplate
                                        }else if(dish == 2){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += quinoa*numberOfplate
                                        }else if(dish == 3){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += carrotCucumberRaita*numberOfplate
                                        }else if(dish == 4){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += paneerTikka*numberOfplate
                                        }else if(dish == 5){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += naan*numberOfplate
                                        }else if(dish == 6){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += dalFry*numberOfplate
                                        }
                                    }else{
                                        break
                                    }
                                }
                        
                            }
                            console.log("Thanks for the order sir");
                            console.log("Here is your total bill:- ", totalBill);
                            console.log("Please enjoy your meal");
            }
    }else if (day == 5){
        console.log("Thanks for choosing the day");
        console.log("Here are the dishes available for the Friday with Price:- ");
        
        console.log("Please choose the option for Breakfast, lunch, and dinner");
        console.log("1. Breakfast");
        console.log("2. Lunch");
        console.log("3. Dinner");

        chooseMeal = input.question("please enter your meal name:-  ")
        if (chooseMeal == "Breakfast" || chooseMeal == "breakfast"){
            console.log("These dishes are available for Breakfast:- ");
            console.log("1. Masala oats - ₹70\n" +
                        "2. Green tea - ₹30\n" +
                        "3. Fresh fruit juice - ₹50\n" +
                        "4. Veggie omelette - ₹60\n" +
                        "5. Sprouts salad - ₹50\n" +
                        "6. Smoothie bowl - ₹90")

                        let masalaOats = 70;
                        let greenTea = 30;
                        let fruitJuice = 50;
                        let veggieOmelette = 60;
                        let sproutsSalad = 50;
                        let smothieBowl = 90;
                        let totalBill = 0

                        for(let i = 0; i<6; i++){
                            if(i == 0){
                                console.log("please chose your dish");
                                let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                if(dish == 1){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += masalaOats*numberOfplate
                                }else if(dish == 2){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += greenTea*numberOfplate
                                }else if(dish == 3){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += fruitJuice*numberOfplate
                                }else if(dish == 4){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += veggieOmelette*numberOfplate
                                }else if(dish == 5){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += sproutsSalad*numberOfplate
                                }else if(dish == 6){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += smothieBowl*numberOfplate
                                }
                            }else{
                                order = input.question("Do you want to order more dish if you want then choose yes otherwise choose no :- ")
                                if (order == "yes"){
                                    let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                    if(dish == 1){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += masalaOats*numberOfplate
                                    }else if(dish == 2){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += greenTea*numberOfplate
                                    }else if(dish == 3){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += fruitJuice*numberOfplate
                                    }else if(dish == 4){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += veggieOmelette*numberOfplate
                                    }else if(dish == 5){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += sproutsSalad*numberOfplate
                                    }else if(dish == 6){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += smothieBowl*numberOfplate
                                    }
                                }else{
                                    break
                                }
                            }
                    
                        }
                        console.log("Thanks for the order sir");
                        console.log("Here is your total bill:- ", totalBill);
                        console.log("Please enjoy your meal");
                        
            }else if(chooseMeal == "Lunch" || chooseMeal == "lunch"){
                console.log("These dishes are available for the Lunch");
                console.log("1. Bhindi masala (spiced okra) - ₹120\n" +
                            "2. Brown rice - ₹50\n" +
                            "3. Buttermilk - ₹30\n" +
                            "4. Grilled chicken sandwich - ₹150\n" +
                            "5. Mixed vegetable soup - ₹60\n" +
                            "6. Whole wheat chapati - ₹20");

                            let bhindi = 120;
                            let brownRice = 50;
                            let butterMilk = 30;
                            let grilledChicken = 150;
                            let mixedVegSoup = 60;
                            let chapati = 20;
                            let totalBill = 0

                            for(let i = 0; i<6; i++){
                                if(i == 0){
                                    console.log("please chose your dish");
                                    let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                    if(dish == 1){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += bhindi*numberOfplate
                                    }else if(dish == 2){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += brownRice*numberOfplate
                                    }else if(dish == 3){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += butterMilk*numberOfplate
                                    }else if(dish == 4){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += grilledChicken*numberOfplate
                                    }else if(dish == 5){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += mixedVegSoup*numberOfplate
                                    }else if(dish == 6){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += chapati*numberOfplate
                                    }
                                }else{
                                    order = input.question("Do you want to order more dish if you want then choose yes otherwise choose no :- ")
                                    if (order == "yes"){
                                        let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                        if(dish == 1){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += bhindi*numberOfplate
                                        }else if(dish == 2){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += brownRice*numberOfplate
                                        }else if(dish == 3){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += butterMilk*numberOfplate
                                        }else if(dish == 4){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += grilledChicken*numberOfplate
                                        }else if(dish == 5){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += mixedVegSoup*numberOfplate
                                        }else if(dish == 6){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += chapati*numberOfplate
                                        }
                                    }else{
                                        break
                                    }
                                }
                        
                            }
                            console.log("Thanks for the order sir");
                            console.log("Here is your total bill:- ", totalBill);
                            console.log("Please enjoy your meal");

            }else if(chooseMeal == "Dinner" || chooseMeal == "dinner"){
                console.log("These dishes are available for the dinner:- \n");
                console.log("1. Tandoori chicken - ₹180\n" +
                            "2. Whole wheat roti - ₹20\n" +
                            "3. Mixed green salad - ₹50\n" +
                            "4. Paneer bhurji - ₹120\n" +
                            "5. Lemon rice - ₹50\n" +
                            "6. Dal Makhani - ₹90")

                            let tandooriChicken = 180;
                            let roti = 20;
                            let mixedGreenSalad = 50;
                            let paneerBhurji = 120;
                            let lemonRice = 50;
                            let dalMakhani = 90;
                            let totalBill = 0

                            for(let i = 0; i<6; i++){
                                if(i == 0){
                                    console.log("please chose your dish");
                                    let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                    if(dish == 1){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += tandooriChicken*numberOfplate
                                    }else if(dish == 2){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += roti*numberOfplate
                                    }else if(dish == 3){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += mixedGreenSalad*numberOfplate
                                    }else if(dish == 4){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += paneerBhurji*numberOfplate
                                    }else if(dish == 5){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += lemonRice*numberOfplate
                                    }else if(dish == 6){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += dalMakhani*numberOfplate
                                    }
                                }else{
                                    order = input.question("Do you want to order more dish if you want then choose yes otherwise choose no :- ")
                                    if (order == "yes"){
                                        let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                        if(dish == 1){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += tandooriChicken*numberOfplate
                                        }else if(dish == 2){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += roti*numberOfplate
                                        }else if(dish == 3){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += mixedGreenSalad*numberOfplate
                                        }else if(dish == 4){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += paneerBhurji*numberOfplate
                                        }else if(dish == 5){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += lemonRice*numberOfplate
                                        }else if(dish == 6){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += dalMakhani*numberOfplate
                                        }
                                    }else{
                                        break
                                    }
                                }
                        
                            }
                            console.log("Thanks for the order sir");
                            console.log("Here is your total bill:- ", totalBill);
                            console.log("Please enjoy your meal");
            }
    }else if (day == 6){
        console.log("Thanks for choosing the day");
        console.log("Here are the dishes available for the Saturday with Price:- ");
        
        console.log("Please choose the option for Breakfast, lunch, and dinner");
        console.log("1. Breakfast");
        console.log("2. Lunch");
        console.log("3. Dinner");

        chooseMeal = input.question("please enter your meal name:-  ")
        if (chooseMeal == "Breakfast" || chooseMeal == "breakfast"){
            console.log("1. Dosa with sambar and coconut chutney - ₹80\n" +
                        "2. Filter coffee - ₹30\n" +
                        "3. Fresh fruit platter - ₹50\n" +
                        "4. Vegetable paratha - ₹80\n" +
                        "5. Scrambled eggs - ₹60\n" +
                        "6. Fresh orange juice - ₹50")

                        let dosa = 80;
                        let cofee = 30;
                        let fruitPlatter = 50;
                        let vagatableParatha = 80;
                        let scrambledEggs = 60;
                        let orangeJuice = 50;
                        let totalBill = 0

                        for(let i = 0; i<6; i++){
                            if(i == 0){
                                console.log("please chose your dish");
                                let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                if(dish == 1){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += dosa*numberOfplate
                                }else if(dish == 2){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += cofee*numberOfplate
                                }else if(dish == 3){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += fruitPlatter*numberOfplate
                                }else if(dish == 4){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += vagatableParatha*numberOfplate
                                }else if(dish == 5){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += scrambledEggs*numberOfplate
                                }else if(dish == 6){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += orangeJuice*numberOfplate
                                }
                            }else{
                                order = input.question("Do you want to order more dish if you want then choose yes otherwise choose no :- ")
                                if (order == "yes"){
                                    let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                    if(dish == 1){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += dosa*numberOfplate
                                    }else if(dish == 2){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += cofee*numberOfplate
                                    }else if(dish == 3){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += fruitPlatter*numberOfplate
                                    }else if(dish == 4){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += vagatableParatha*numberOfplate
                                    }else if(dish == 5){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += scrambledEggs*numberOfplate
                                    }else if(dish == 6){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += orangeJuice*numberOfplate
                                    }
                                }else{
                                    break
                                }
                            }
                    
                        }
                        console.log("Thanks for the order sir");
                        console.log("Here is your total bill:- ", totalBill);
                        console.log("Please enjoy your meal");
                        
            }else if(chooseMeal == "Lunch" || chooseMeal == "lunch"){
                console.log("These dishes are available for the Lunch");
                console.log("1. Chickpea salad - ₹120\n" +
                            "2. Multigrain bread - ₹40\n" +
                            "3. Mint lassi - ₹40\n" +
                            "4. Grilled fish - ₹150\n" +
                            "5. Mixed vegetable pulao - ₹120\n" +
                            "6. Tomato soup - ₹60");

                            let chickpeaSalad = 120;
                            let multigrainBread = 40;
                            let mintLassi = 40;
                            let grilledFish = 150;
                            let vegatablePulao = 120;
                            let tomatoSoup = 60;
                            let totalBill = 0

                            for(let i = 0; i<6; i++){
                                if(i == 0){
                                    console.log("please chose your dish");
                                    let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                    if(dish == 1){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += chickpeaSalad*numberOfplate
                                    }else if(dish == 2){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += multigrainBread*numberOfplate
                                    }else if(dish == 3){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += mintLassi*numberOfplate
                                    }else if(dish == 4){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += grilledFish*numberOfplate
                                    }else if(dish == 5){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += vegatablePulao*numberOfplate
                                    }else if(dish == 6){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += tomatoSoup*numberOfplate
                                    }
                                }else{
                                    order = input.question("Do you want to order more dish if you want then choose yes otherwise choose no :- ")
                                    if (order == "yes"){
                                        let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                        if(dish == 1){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += chickpeaSalad*numberOfplate
                                        }else if(dish == 2){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += multigrainBread*numberOfplate
                                        }else if(dish == 3){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += mintLassi*numberOfplate
                                        }else if(dish == 4){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += grilledFish*numberOfplate
                                        }else if(dish == 5){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += vegatablePulao*numberOfplate
                                        }else if(dish == 6){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += tomatoSoup*numberOfplate
                                        }
                                    }else{
                                        break
                                    }
                                }
                        
                            }
                            console.log("Thanks for the order sir");
                            console.log("Here is your total bill:- ", totalBill);
                            console.log("Please enjoy your meal");

            }else if(chooseMeal == "Dinner" || chooseMeal == "dinner"){
                console.log("These dishes are available for the dinner:- \n");
                console.log("1. Fish curry with steamed vegetables - ₹200\n" +
                            "2. Brown rice - ₹50\n" +
                            "3. Cucumber raita - ₹40\n" +
                            "4. Chicken kebabs - ₹180\n" +
                            "5. Whole wheat naan - ₹30\n" +
                            "6. Dal fry - ₹80")

                            let fishCurry = 200;
                            let brownRice = 50;
                            let cucumberRaita = 40;
                            let chickenKabab = 180;
                            let naan = 30;
                            let dalFry = 80;
                            let totalBill = 0

                            for(let i = 0; i<6; i++){
                                if(i == 0){
                                    console.log("please chose your dish");
                                    let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                    if(dish == 1){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += fishCurry*numberOfplate
                                    }else if(dish == 2){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += brownRice*numberOfplate
                                    }else if(dish == 3){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += cucumberRaita*numberOfplate
                                    }else if(dish == 4){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += chickenKabab*numberOfplate
                                    }else if(dish == 5){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += naan*numberOfplate
                                    }else if(dish == 6){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += dalFry*numberOfplate
                                    }
                                }else{
                                    order = input.question("Do you want to order more dish if you want then choose yes otherwise choose no :- ")
                                    if (order == "yes"){
                                        let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                        if(dish == 1){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += fishCurry*numberOfplate
                                        }else if(dish == 2){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += brownRice*numberOfplate
                                        }else if(dish == 3){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += cucumberRaita*numberOfplate
                                        }else if(dish == 4){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += chickenKabab*numberOfplate
                                        }else if(dish == 5){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += naan*numberOfplate
                                        }else if(dish == 6){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += dalFry*numberOfplate
                                        }
                                    }else{
                                        break
                                    }
                                }
                        
                            }
                            console.log("Thanks for the order sir");
                            console.log("Here is your total bill:- ", totalBill);
                            console.log("Please enjoy your meal");
            }
    }else if (day == 7){
        console.log("Thanks for choosing the day");
        console.log("Here are the dishes available for the sunday with Price:- ");
        
        console.log("Please choose the option for Breakfast, lunch, and dinner");
        console.log("1. Breakfast");
        console.log("2. Lunch");
        console.log("3. Dinner");

        chooseMeal = input.question("please enter your meal name:-  ")
        if (chooseMeal == "Breakfast" || chooseMeal == "breakfast"){
            console.log("1. Vegetable paratha with yogurt - ₹80\n" +
                        "2. Ginger tea - ₹20\n" +
                        "3. Fresh fruit juice - ₹50\n" +
                        "4. Poha - ₹70\n" +
                        "5. Boiled eggs - ₹50\n" +
                        "6. Smoothie bowl - ₹90")

                        let vagatableParatha = 80;
                        let gingerTea = 20;
                        let fruitJuice = 50;
                        let poha = 70;
                        let boiledEggs = 50;
                        let smothieBowl = 90;
                        let totalBill = 0

                        for(let i = 0; i<6; i++){
                            if(i == 0){
                                console.log("please chose your dish");
                                let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                if(dish == 1){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += vagatableParatha*numberOfplate
                                }else if(dish == 2){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += gingerTea*numberOfplate
                                }else if(dish == 3){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += fruitJuice*numberOfplate
                                }else if(dish == 4){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += poha*numberOfplate
                                }else if(dish == 5){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += boiledEggs*numberOfplate
                                }else if(dish == 6){
                                    numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                    totalBill += smothieBowl*numberOfplate
                                }
                            }else{
                                order = input.question("Do you want to order more dish if you want then choose yes otherwise choose no :- ")
                                if (order == "yes"){
                                    let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                    if(dish == 1){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += vagatableParatha*numberOfplate
                                    }else if(dish == 2){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += gingerTea*numberOfplate
                                    }else if(dish == 3){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += fruitJuice*numberOfplate
                                    }else if(dish == 4){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += poha*numberOfplate
                                    }else if(dish == 5){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += boiledEggs*numberOfplate
                                    }else if(dish == 6){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += smothieBowl*numberOfplate
                                    }
                                }else{
                                    break
                                }
                            }
                    
                        }
                        console.log("Thanks for the order sir");
                        console.log("Here is your total bill:- ", totalBill);
                        console.log("Please enjoy your meal");
                        
            }else if(chooseMeal == "Lunch" || chooseMeal == "lunch"){
                console.log("These dishes are available for the Lunch");
                console.log("1. Paneer bhurji (scrambled cottage cheese) - ₹120\n" +
                            "2. Whole wheat roti - ₹20\n" +
                            "3. Lemon mint cooler - ₹30\n" +
                            "4. Chicken tikka salad - ₹150\n" +
                            "5. Brown rice - ₹50\n" +
                            "6. Vegetable soup - ₹60");

                            let paneerBhurji = 120;
                            let roti = 20;
                            let lamonMint = 30;
                            let chickenTikka = 150;
                            let brownRice = 50;
                            let vegSoup = 60;
                            let totalBill = 0

                            for(let i = 0; i<6; i++){
                                if(i == 0){
                                    console.log("please chose your dish");
                                    let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                    if(dish == 1){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += paneerBhurji*numberOfplate
                                    }else if(dish == 2){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += roti*numberOfplate
                                    }else if(dish == 3){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += lamonMint*numberOfplate
                                    }else if(dish == 4){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += chickenTikka*numberOfplate
                                    }else if(dish == 5){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += brownRice*numberOfplate
                                    }else if(dish == 6){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += vegSoup*numberOfplate
                                    }
                                }else{
                                    order = input.question("Do you want to order more dish if you want then choose yes otherwise choose no :- ")
                                    if (order == "yes"){
                                        let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                        if(dish == 1){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += paneerBhurji*numberOfplate
                                        }else if(dish == 2){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += roti*numberOfplate
                                        }else if(dish == 3){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += lamonMint*numberOfplate
                                        }else if(dish == 4){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += chickenTikka*numberOfplate
                                        }else if(dish == 5){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += brownRice*numberOfplate
                                        }else if(dish == 6){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += vegSoup*numberOfplate
                                        }
                                    }else{
                                        break
                                    }
                                }
                        
                            }
                            console.log("Thanks for the order sir");
                            console.log("Here is your total bill:- ", totalBill);
                            console.log("Please enjoy your meal");

            }else if(chooseMeal == "Dinner" || chooseMeal == "dinner"){
                console.log("These dishes are available for the dinner:- \n");
                console.log("1. Grilled chicken with vegetables - ₹180\n" +
                            "2. Quinoa - ₹70\n" +
                            "3. Mixed vegetable salad - ₹50\n" +
                            "4. Paneer Butter Masala - ₹150\n" +
                            "5. Jeera rice - ₹50\n" +
                            "6. Dal Tadka - ₹90")

                            let grilledChicken = 180;
                            let quinoa = 70;
                            let mixedVegSalad = 50;
                            let paneerButter = 150;
                            let jeeraRice = 50;
                            let dalTadka = 90;
                            let totalBill = 0

                            for(let i = 0; i<6; i++){
                                if(i == 0){
                                    console.log("please chose your dish");
                                    let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                    if(dish == 1){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += grilledChicken*numberOfplate
                                    }else if(dish == 2){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += quinoa*numberOfplate
                                    }else if(dish == 3){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += mixedVegSalad*numberOfplate
                                    }else if(dish == 4){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += paneerButter*numberOfplate
                                    }else if(dish == 5){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += jeeraRice*numberOfplate
                                    }else if(dish == 6){
                                        numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                        totalBill += dalTadka*numberOfplate
                                    }
                                }else{
                                    order = input.question("Do you want to order more dish if you want then choose yes otherwise choose no :- ")
                                    if (order == "yes"){
                                        let dish = input.questionInt("Please enter the number of that dish that is given in above option:-  ")
                                        if(dish == 1){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += grilledChicken*numberOfplate
                                        }else if(dish == 2){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += quinoa*numberOfplate
                                        }else if(dish == 3){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += mixedVegSalad*numberOfplate
                                        }else if(dish == 4){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += paneerButter*numberOfplate
                                        }else if(dish == 5){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += jeeraRice*numberOfplate
                                        }else if(dish == 6){
                                            numberOfplate = input.questionInt("how many plate do you want to order:- ")
                                            totalBill += dalTadka*numberOfplate
                                        }
                                    }else{
                                        break
                                    }
                                }
                        
                            }
                            console.log("Thanks for the order sir");
                            console.log("Here is your total bill:- ", totalBill);
                            console.log("Please enjoy your meal");
            }
    }

}else{
    console.log("Thanks sir for visiting in our hotel.");
}
                            
                            
