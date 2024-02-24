import * as uuid from "uuid";
import { Table } from "sst/node/table";
import handler from "@notes/core/handler";
import dynamoDb from "@notes/core/dynamodb";

export const main = handler(async (event) => {
    let data = {
        content: "",
        attachment: "",
    }

    if (event.body != null) {
        data = JSON.parse(event.body);
    }
    const params = {
        TableName: Table.Notes.tableName,
        Item: {
            userId: "123",
            noteId: uuid.v1(),
            content: data.content,
            attachment: data.attachment,
            createdAt: Date.now()
        }
    }
    await dynamoDb.put(params);
    return JSON.stringify(params.Item);
});
// "noteId":"7e3a3750-c2f3-11ee-878e-01ce009f2b30"
