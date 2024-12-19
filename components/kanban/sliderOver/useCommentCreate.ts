import { useMutation } from '@tanstack/vue-query';
import { COLLECTION_COMMENTS, DB_ID} from '~/app.constants';
import{v4 as uuid} from 'uuid'
import { overSlide } from '@/store/overSlide.store';

export function useCommentCreate({refetch}: {refetch:() => void}){
	const store = overSlide() 

	const commentRef = ref<string>()

	const {mutate} = useMutation({
		mutationKey:['add comment', commentRef.value],
		mutationFn:() => DB.createDocument(DB_ID,COLLECTION_COMMENTS, uuid(),{
			text:commentRef.value,
			deal:store.card?.id 
		}),
		onSuccess:() =>{
			refetch()
			commentRef.value = ''
		}
	})

	const writeComment = () =>{
		if(!commentRef.value) return 
		mutate()
	}

	return {
		writeComment,
		commentRef
	}
}

