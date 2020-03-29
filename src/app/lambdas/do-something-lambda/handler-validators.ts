class HandlerValidator {
  //#region main methods
  public static async validateData(input: any): Promise<boolean>{
    return !!input;
  }
  //#endregion  
}
const { validateData } = HandlerValidator;
export { validateData };