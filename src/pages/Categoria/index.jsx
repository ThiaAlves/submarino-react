import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { formataValor } from "../../components/Main";

export const Categoria = () => {

    const { id } = useParams();
    const [produtos,getProdutos] = useState([]);
    useEffect(() => {
        axios.get('http://react.professorburnes.com.br/categoria/'+id)
        .then((response) => {
            getProdutos(response.data);
        })
    },[id]);

    return(
     <>
     <h1 className="text-center">Categoria</h1>
     <div className="container">
         <div className="row">
             {produtos ?
              produtos.map((item, index) => (
                <div className="col-12 col-md-4 text-center">
                <div className="card">
                    <img src={item.imagemp} className="w-100" alt={item.produto}></img>
                    <h5>{item.produto}</h5>
                    {item.promo != 0 ? 
                    <div>
                        De: <span className="cortado">{formataValor(item.valor)}</span>
                        <br/>
                        <p className="valor">Por: {formataValor(item.promo)}</p>
                    </div>
                    :
                    <p className="valor">{formataValor(item.valor)}</p>                    
                    }

                    

                    <Link to={'/produto/'+item.id} className="btn btn-success">Detalhes</Link>
                </div>
            </div>
              ))
             :
             <p className="alert alert-danger text-center">
                 Não existem produtos para essa categoria!
             </p>
            }
         </div>
     </div>
     </>   
    )
}