export interface Invoice {
  createdDate: string;
  updateDate: string | null;
  id: number;
  dueDate: string;
  amountDue: number;
  status: any;
}
