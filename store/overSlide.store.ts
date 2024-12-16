import type { ICard } from '~/components/kanban/kanban.types';

const defaultValue:{card:ICard | null, isOpen:Boolean} = {
	card:null,
	isOpen: false
}

export const overSlide = defineStore('over-slide',{
	state:() => defaultValue,
	actions:{
		clear(){
			this.card = null
			this.isOpen = false
		},
		set(cards:ICard){
			this.card = cards
			this.isOpen = true
		},
		toggle(){
			this.isOpen = !this.isOpen
		}
	}
})