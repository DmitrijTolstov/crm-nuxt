import type {EnumStatus} from '@/types/deals.types.ts'

export interface ICard {
	if: string,
	price:string,
	name: string,
	companyName:string,
	status: string,
	$cratedAt:string
}


export interface IColumn{
	name: string,
	items: ICard[],
	id:EnumStatus
}