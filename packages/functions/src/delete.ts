import { Table } from "sst/node/table";
import handler from "@notes/core/handler";
import dynamoDb from "@notes/core/dynamodb";
import { transferableAbortController } from "util";

export const main = handler (async (event) => {
    const params = {
        TableName: Table.Notes.tableName,
        Key: {
            userId: "123",
            noteId: event?.pathParameters?.id,
        }
    }

    await dynamoDb.delete(params);
    return JSON.stringify({ status: true })
})
