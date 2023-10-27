import { Fragment, useState } from 'react';
import './App.css';

let initialState = [
  {
    id: 1,
    descricao: 'Primeira Atividade',
  },
  {
    id: 2,
    descricao: 'Segunda Atividade',
  }
]


function App() {

  const [atividades, setAtividades] = useState(initialState)

function AddAtividade(Add) {
  Add.preventDefault();
  const atividade = {
    id: document.getElementById('id').value,
    descricao: document.getElementById('descricao').value,
  };
    
    setAtividades([...atividades, { ...atividade}])

}

  return (
    <Fragment>


    <form class="row g-3">
      <div className="col-md-6">
         <label  for="inputEmail4" ClassName="form-label">Id</label>
         <input  id='id' type="text" className="form-control" />
      </div>

      <div className="col-md-6">
          <label  for="inputEmail4" ClassName="form-label">Descrição</label>
          <input  id='descricao' type="text" className="form-control" />
      </div>

      <div class="col-auto" >
           <button className="btn btn-outline-secondary" onClick={AddAtividade}>+ ATIVIDADE</button>
      </div>

    </form>
    <div className="mt-3">
                                 {/* Map é como se fosse forEach */}
        {atividades.map(ativ =>(
            <div key={ativ.id} className="card" >
                
                <div class="card-body">
                  <p class="card-text">
                    {ativ.id} - {ativ.descricao}
                  </p>
                </div>
            </div>
          ))}
          
        
      </div>
  
    </Fragment>
  );
}

export default App;
