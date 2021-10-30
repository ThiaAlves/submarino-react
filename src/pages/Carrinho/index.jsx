import {useEffect, useState, useCallback} from 'react';
import { formataValor} from "../../components/Main";
import { useHistory, Link} from "react-router-dom";

export const Carrinho = () => {

    const [produtos,getProdutos] = useState(null);
    const [total,getTotal] = useState(null);
    const history = useHistory();

    function atualizaTotal(carrinho) {
        var total = 0;
        carrinho.forEach((e) => {
            total = total + e.total;
        })

        getTotal(total);
    }

    useEffect(() => {
        var carrinhoLocal = localStorage.getItem('carrinho');
        var carrinho = null;

        if (typeof carrinhoLocal == 'string') {
            carrinho = JSON.parse(carrinhoLocal);
        }

        if (carrinho) {
            getProdutos(carrinho);
            atualizaTotal(carrinho);
        }
    },[])

    const remover = useCallback((id) => {
        var carrinho = produtos.filter((e) => (
            e.id != id
        ));
        localStorage.setItem('carrinho', JSON.stringify(carrinho));

        getProdutos(carrinho);
        atualizaTotal(carrinho);

        // if(carrinho.length == 0) {
        //     localStorage.clear();
        //     history.push('/carrinho');
        // }        

    },[produtos])

    const limparCarrinho = useCallback(()=> {
        localStorage.removeItem('carrinho');
        getProdutos([]);
        atualizaTotal([]);
    },[]);

    function finalizarCompra(){
        history.push('/finalizar');
    }

    return(
     <>
     <h1 className="text-center">Carrinho de Compras</h1>
     <table className="table table-hover table-bordered">
         <thead>
             <tr>
                 <th>Nome do Produto</th>
                 <th>Valor Unitário.</th>
                 <th>Quantidade</th>
                 <th>Total</th>
                 <th>Excluir</th>
             </tr>
         </thead>
         <tbody>
             {produtos ? 
             produtos.map((item, index) => (
                <tr>
                <th width="50%">{item.produto}</th>
                 <th width="20%">{formataValor(item.valor)}</th>
                 <th width="10%" className="text-center">{item.quantidade}</th>
                 <th width="10%">{formataValor(item.total)}</th>
                 <th width="5%"><button type="button" className="btn btn-danger" 
                 onClick={() => remover(item.id)}>X</button></th>
                </tr>             
     
             ))
            :
            <tr>
                <th colSpan='5'>
                    <p className="alert alert-danger text-center">Não possui produtos no carrinho</p>
                </th>
            </tr>
            }
         </tbody>
         <tfoot>
             <tr>
                 <td colspan='3'>VALOR TOTAL</td>
                 <td>{formataValor(total)}</td>
                 <td></td>
             </tr>
         </tfoot>
     </table>

       
         <button type="button" className="btn btn-danger float-start" onClick={()=>limparCarrinho()}>
                Limpar Carrinho
            </button>
                <Link to="/finalizar" className="btn btn-success float-end">Finalizar Compra</Link>
            <div className="clearfix pt-5"></div>

     </>   
    )
}