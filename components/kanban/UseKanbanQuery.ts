import { useQuery } from '@tanstack/vue-query';
import { DB_ID, COLLECTION_DEALS } from '~/app.constants';
import { KANBAN_DATA } from './kanban.data';
import type { IDeals } from '~/types/deals.types';
import type { IColumn } from './kanban.types';

export function useKanbanQuery(){

	return useQuery({
		queryKey:['deals'],
		queryFn:() => DB.listDocuments(DB_ID,COLLECTION_DEALS),
		select(data){
			const newBoard:IColumn[] = KANBAN_DATA.map(column =>({
				...column,
				items:[]
			}))
			const deals = data.documents as unknown as IDeals[]

			for(const deal of deals){
				const column = newBoard.find((col:IColumn) => col.id === deal.status)
				column?.items.push({
					id: deal.$id,
					price:deal.price,
					name: deal.name,
					companyName:deal.customers.name,
					status: deal.status,
					$cratedAt:deal.$createdAt
				})
			}
			return newBoard
			
		}
	})
}