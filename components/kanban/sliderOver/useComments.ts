import { useQuery } from '@tanstack/vue-query';
import { COLLECTION_DEALS, DB_ID} from '~/app.constants';
import { overSlide } from '@/store/overSlide.store';

export function useComments(){
	const store = overSlide() 
	const cardId = store.card?.id || ''

	return useQuery({
		queryKey:['deal',cardId],
		queryFn:() => DB.getDocument(DB_ID,COLLECTION_DEALS, cardId),
	})
}