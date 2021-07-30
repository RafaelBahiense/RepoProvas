export interface ReceivedTest {
  name: string;
  categoryId: string;
  subjectId: string;
  professorId: string;
  link: string;
}

export interface Test extends ReceivedTest {
  id: number;
}
