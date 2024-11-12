import React, {useState} from 'react';


function AddItemForm({addItem}){
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
          addItem(inputValue.trim());
          setInputValue('');
        }
      };


    return(
   <>
          
    <div className="container mb-5 mt-5">
        <div className="d-flex justify-content-start">
         <div>
          <h3 className="text-center mb-4">Add An Item</h3>
            <form action="" onSubmit={handleSubmit}>
                <label className="me-3" For="item">Item Name</label>
                <input type="text" id="item" 
                value={inputValue} 
                onChange={(e)=>setInputValue(e.target.value)} />
                <input  type="submit" class="ms-5" value="Add Item" />
            </form>
        </div>
      </div>
    </div>

 </>
    );
}

export default AddItemForm