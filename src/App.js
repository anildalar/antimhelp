import { useEffect, useState } from "react";

function App() {
  const [globalObject, setGlobalObject] = useState({
    "sourceAdd":""
  })
  const [fields, setFields] = useState([
                                        {field:'Anil',value:'Dollor'},
                                        {field:'Antim',value:'Songara'},
                                        {field:'Pushpita',value:'Rathore'}
                                      ]);
  const [fields2, setFields2] = useState([{}]);
  useEffect(() => {
      //delete fields[2].field
  }, [])

  const submit = ()=>{
    //alert('ok');
    let x = {...globalObject};

    //alert(JSON.stringify(fields2));
    fields2.forEach(element => {
      console.log(element);
      //objectName["propertyName"]
      x[element.field] = element.value
    });


    alert(JSON.stringify(x));
  }

  const handleChange = (i,e)=>{
    e.preventDefault();
    //alert(i);
    let y = [...fields];

    y[i][e.target.name] = e.target.value;
    
    setFields(y);
    setFields2(y);

    //alert(JSON.stringify(fields));
  }

  const addField = (indx)=>{
     setFields([...fields,{field:'',value:''}])
     setFields2([...fields2,{field:'',value:''}])
  }
                   
  const removeField = (indx)=>{
    var a = [...fields];
    //alert(indx);
   // alert(a);
    a.splice(indx,1)
    //alert(a);
   // alert(a[1].field);
    setFields(a);
    //alert(fields);
  }//
  return (
    <div className="App">
      <h1>Test</h1>
      {
        //array.map(function(currentValue, index, arr), thisValue)
        fields.map((currentValue,index)=>{
            return (
                      <div key={index}>
                        <input type="text" name="field" value={currentValue.field } onChange={ (e)=>{ handleChange(index,e) } } />
                        <input type="text" name="value"  value={currentValue.value} onChange={ (e)=>{ handleChange(index,e) } } />
                        <button onClick={()=>{removeField(index)}}>Remove</button>
                        <button onClick={()=>{ addField(index) }}>Add</button>
                      </div>
                   )
        })
      }
      <button onClick={ ()=>{ submit() } }>Submit</button>
    </div>
  );
}

export default App;
