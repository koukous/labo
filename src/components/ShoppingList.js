import { plantList } from '../datas/plantList'

function ShoppingList() {
	return(
        <ul>
            {plantList.map((plant, index) => (
            <li key={index}>{plant.name}</li>
      ))}

        </ul>
    ) 
}



export default ShoppingList