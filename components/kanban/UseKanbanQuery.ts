import { useQuery } from '@tanstack/vue-query';
import { DB_ID, COLLECTION_DEALS } from '~/app.constants';
import { KANBAN_DATA } from './kanban.data';
import type { IDeals } from '~/types/deals.types';

export function useKanbanQuery(){

	return useQuery({
		queryKey:['deals'],
		queryFn:() => DB.listDocuments(DB_ID,COLLECTION_DEALS),
		select(data){
			const newBoard = [...KANBAN_DATA]
			const deals = data.documents as unknown as IDeals[]

			for(const deal of deals){
				const column = newBoard.find(col => col.id === deal.status)
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