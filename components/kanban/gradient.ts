export const gradientFunction = (index:number, total = 1) =>{
	const intencity = 100 - (index /  (total - 1) * 50)
	console.log(intencity);
	
	return `hsla(280,52%,${intencity}%,30%)`
}