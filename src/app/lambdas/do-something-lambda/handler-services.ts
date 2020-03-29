import { DependenciesFactory } from "./handler-dependencies-factory";

class HandlerServices {
  //#region main methods
  public static async getSomeDataFromExternalService(input: any): Promise<any> {
    this.parser();
    return { data: input };
  }

  private static parser(){
    
  }
  //#endregion  

  //#region set up external dependencies for services
  public static async setHandlerServicesDependencies(factory: DependenciesFactory): Promise<any> {
    console.log('set dependencies', factory);
  }
  //#endregion 
}
const { getSomeDataFromExternalService, setHandlerServicesDependencies } = HandlerServices;
export { getSomeDataFromExternalService, setHandlerServicesDependencies };