import { IRecipe } from "../interfaces/index";

export class RecipesAPI {
  private static URL = "https://api.myjson.com/bins/t7szj";

  private static data: IRecipe[] = [];

  public static get = async (): Promise<any> => {
    if (!RecipesAPI.data.length) {
      const recipeData = await fetch(RecipesAPI.URL);
      const { recipes } = await recipeData.json();
      RecipesAPI.data.push(...recipes);
      return recipes;
    }
    return RecipesAPI.data;
  };

  public static search = async (query: string): Promise<any> => {
    if (!RecipesAPI.data.length) {
      await RecipesAPI.get();
    }
    await new Promise(resolve => setTimeout(resolve, 800)); // simulate waiting for reply
    const queryLC = query.toLocaleLowerCase();
    return RecipesAPI.data.filter(({ title }) =>
      title.toLocaleLowerCase().includes(queryLC)
    );
  };
}
