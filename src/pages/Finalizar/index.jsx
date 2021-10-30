import { useState, useEffect } from "react";

export const Finalizar = () => {

    function formatar(valor) {
        valor = parseFloat(valor);
            var total = valor.toLocaleString('pt-br', 
            {minimumFractionDigits: 2});
            total = String(total);
            total = total.replace(".", "");
            total = total.replace(",",".");

            return total;
        
    }

    const [produtos, getProdutos] = useState(null);

    useEffect(()=>{
        var carrinho = localStorage.getItem('carrinho');
        var produtos = null;
        if(typeof carrinho == 'string') {
            produtos = JSON.parse(carrinho);
        }

        if ( produtos ) getProdutos(produtos);
    },[]);



    return(
     <>
     <h1 className="text-center">Finalizar compra</h1>

        <form name="pagSeguro" method="post" className="container" action="https://pagseguro.uol.com.br/v2/checkout/payment.html">
            <h4>Seus Dados</h4>
            <input type="hidden" name="receiverEmail" value="suporte@lojamodelo.com.br"></input>
            <input type="hidden" name="currency" value="BRL"></input>


            <input type="text" name="senderName" className="form-control" placeholder="Digite seu nome completo" required></input>
            <input type="email" name="sendeEmail" className="form-control" placeholder="Digite e-mail" required></input>

            {
            produtos ? produtos.map((item,index) => (
                <div className="pb-2">
                    <input type="hidden" value={item.id} name={'itemId'+(index+1)}/>
                    <input type="hidden" value={item.produto} name={'itemDescription'+(index+1)}/>
                    <input type="hidden" value={formatar(item.valor)} name={'itemAmount'+(index+1)}/>
                    <input type="hidden" value={item.quantidade} name={'itemQuantity'+(index+1)}/>
                    
                <br/>
                    <table className="table table-hover table-bordered">
         <thead>
             <tr>
                 <th>Nome do Produto</th>
                 <th>Valor Unitário.</th>
                 <th>Quantidade</th>
             </tr>
         </thead>
         <tbody>
         <td>{item.produto}</td>
         <td>{item.valor}</td>
         <td>{item.quantidade}</td>
         </tbody>
     </table>
                </div>    
            ))
            :
            <p>Não existem itens</p>
            }    

            


            <button type="submit" className="btn btn-success">Pagamento</button>
        </form>


     </>   
    )
}