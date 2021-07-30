export interface ReceivedTest {
  name: string;
  categoryId: number;
  subjectId: number;
  professorId: number;
  link: string;
}

export interface Test extends ReceivedTest {
  id: number;
}
