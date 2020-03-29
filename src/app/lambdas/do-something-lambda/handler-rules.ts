class HandlerRules {
  //#region main methods
  public static async applyRule(input: any): Promise<any>{
    return !!input;
  }
  //#endregion   
}
const { applyRule } = HandlerRules;
export { applyRule };