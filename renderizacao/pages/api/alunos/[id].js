export default function handler(req, resp) {
    const id = +req.query.id
    resp.status(200).json({
        id,
        nome: `João Almeida ${id}`,
        email: `jjjalalalmmm${id}@gmail.com`,
    })
}