import sqlite3 from 'sqlite3';

export default async function migrate(db: sqlite3.Database): Promise<sqlite3.Database> {
  return db.exec(`INSERT OR IGNORE INTO users (token, salt, id, username, password)
  VALUES (
      NULL,
      "e8f6de6c841482e7b98142cfe630bc8b",
      "c47cdc69-04cb-4f21-89ca-866f5b4d2f5c",
      "konrad007",
      "Fq709F9hE6c/W1WSP4WpRatZYTcjHCtRttlddtms2ljIBF2r75l7/SGC1i26zxk6LoU2/qjNPh1nMaF7GisFFhdkqOt3N6mDaheuz8CtHickOzNuClqzGA22t3dwug9s4gBm9Y8mxT/PRf/HsvA4zgsb0NzN8jK99hCAQeuoFPU="
    ),
    (
      NULL,
      "e8f6de6c841482e7b98142cfe630bc8b",
      "17af0837-99e8-47f2-9851-f3a1d35b733e",
      "konrad000",
      "Fq709F9hE6c/W1WSP4WpRatZYTcjHCtRttlddtms2ljIBF2r75l7/SGC1i26zxk6LoU2/qjNPh1nMaF7GisFFhdkqOt3N6mDaheuz8CtHickOzNuClqzGA22t3dwug9s4gBm9Y8mxT/PRf/HsvA4zgsb0NzN8jK99hCAQeuoFPU="
    )
  `);
}
