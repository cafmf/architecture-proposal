import { HandlerCore } from "./handler-core";
import { HandlerDependenciesFactory } from "./handler-dependencies-factory";
import { Handler } from "aws-lambda/handler";
import { APIGatewayEventRequestContextWithAuthorizer, APIGatewayEventRequestContext } from "aws-lambda/common/api-gateway";

const handler: Handler<APIGatewayEventRequestContextWithAuthorizer<APIGatewayEventRequestContext>>  = async (event: APIGatewayEventRequestContext, _context: any, _callback: any) =>{
  const dependencies = new HandlerDependenciesFactory();
  const handle = new HandlerCore(dependencies);
  handle.doMainWork(event);
}
export { handler };