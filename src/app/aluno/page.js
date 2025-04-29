import db from "../lib/db.js"
export default async () => {
    const usuario = await db.query("select * from usuario")
 return (<>
    <h1>Lista de alunos</h1>
    <div>
      {
         usuario.rows.map( 
            a => (
               <div>
                 {a.id} {a.nome} é {a.cargo} 
               </div>
            ) 
         )
      }
   </div>
 </>);
}