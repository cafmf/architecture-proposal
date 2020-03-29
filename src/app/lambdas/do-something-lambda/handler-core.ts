import { DependenciesFactory } from "./handler-dependencies-factory";
import { applyRule } from './handler-rules';
import { validateData } from './handler-validators';
import { getSomeDataFromExternalService, setHandlerServicesDependencies } from './handler-services';

export class HandlerCore {
  constructor(private dependencies: DependenciesFactory){
    setHandlerServicesDependencies(this.dependencies);
  }
  public async doMainWork(input: any): Promise<any> {
    const result = await getSomeDataFromExternalService(input);
    if(validateData(result)){
      await applyRule(input);
    }
  }
}