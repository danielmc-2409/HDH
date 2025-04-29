import db from "@/app/lib/db";

export default async ({params}) => {
    const usuario = await db.query("select * from usuario where id="+params.id)
    return(
        <>
        <h1>Pagina do Aluno: {usuario.rows[0].nome}</h1>
        </>
    );
}