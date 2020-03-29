import { SNSHandler, SNSEvent, SNSEventRecord } from "aws-lambda/trigger/sns";
import { Context } from "aws-lambda/handler";

const handler: SNSHandler = async (event: SNSEvent, _context: Context, _callback: any) =>{
  const record: SNSEventRecord = event.Records[0];
  _callback(null, record);
}
export { handler };