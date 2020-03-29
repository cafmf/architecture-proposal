export interface DependenciesFactory {
  createSomething(): Promise<any>;
}

export class HandlerDependenciesFactory implements DependenciesFactory {
  //#region main methods
  public async createSomething(): Promise<any>{
    return { dbConnection: { } };
  }
  //#endregion
}