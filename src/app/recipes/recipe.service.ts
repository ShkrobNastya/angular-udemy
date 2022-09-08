import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter , Injectable} from '@angular/core';
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('111', '222',
        'https://k5v9s2e6.stackpathcdn.com/wp-content/uploads/2020/06/spanish-chickpeas-with-spinach-garbanzos-con-espinacas-2.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Burger', '222',
        'https://world.openfoodfacts.org/images/products/505/478/112/8878/front_en.3.full.jpg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
    ];

    constructor( private slService: ShoppingListService) {}

    getrecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}