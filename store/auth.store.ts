interface IAuthStore {
	email:string,
	name:string,
	status:boolean
}

const defaultValue:{user:IAuthStore} = {
	user:{
		email:'',
		name:'',
		status:false
	}
}


export const useAuthStore = defineStore('auth',{
	state:() => defaultValue,
	getters:{
		isAuth: state => state.user.status
	},
	actions:{
		clear(){
			this.$patch(defaultValue)
		},
		set(input: IAuthStore){
			this.user = input
		}
	}
})


export const isLoading = defineStore('isLoading',{
	state: () => ({
		loading:true
	}),
	actions:{
		set(data:boolean){
			this.loading = data
		}
	}
	
})