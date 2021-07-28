import { connectionDB } from "../../src/config/database";

export async function truncateTable(table: string): Promise<void> {
  await connectionDB.query(`TRUNCATE TABLE ${table} RESTART IDENTITY CASCADE`);
}

export function endConnection(): void {
  connectionDB.end();
}
