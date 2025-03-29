const getCategory =async()=> {
   try {
      const {data}= await axios.get(`https://fakestoreapi.com/products/categories`);
      return data;
      
   } catch (error) {
      return [];
   }
 
}
const displayCategory = async ()=>{
try {
   const result= await getCategory();

   const items=result.map( (elemant)=>{
           return `
          
            <div class="category">
              <h2>${elemant}</h2>
               <a href="./products.html?category=${elemant}">Details</a>
              </div>
             
           `
   }).join(' ');
       
   document.querySelector('.categories .row').innerHTML=items;
   
} catch (error) {
   document.querySelector('.categories .row').innerHTML="<p>please try again later ... </p>";
}
finally{
   document.querySelector('.loading').classList.add("d-none");
}
  
}
displayCategory();

