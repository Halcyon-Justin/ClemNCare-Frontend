import { Address } from './address.model';
import { Child } from './child.model';
import { Guardian } from './guardian.model';
import { Invoice } from './invoice.model';


export interface Family {
    data: any;
    id: number;
    address: Address;
    children: Child[];
    guardians: Guardian[];
    emergencyContact: Guardian;
    invoices: Invoice[];
    activeChildren: Child[];
};
