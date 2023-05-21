const {Router} = require('express');
const {Usuario} = require('../models');

const roteador = Router()

roteador.get('/login', (req, res)=>{
    res.status(200).render('login');
});

roteador.get('/cadastro', (req, res)=>{
    res.status(200).render('cadastro');
});

roteador.get('/logoff', (req, res)=>{
    req.session.destroy();
    res.redirect('/usuario/login');
});


roteador.post('/login', async (req, res)=>{
    const {usuario, senha} = req.body;

    const resposta = await Usuario.findOne({
        where: {
            usuario: usuario,
            senha: senha
        }
    });

    req.session.login = false;

    if(resposta){
        req.session.login = true;
        req.session.idUsuario = resposta.id;
        res.redirect('/usuario/inicio');
    }else{
        res.redirect('/usuario/login');
    }
});

roteador.get('/inicio', (req, res)=>{
    res.status(200).render('newinicio');
});

roteador.get('/perfil', async (req, res)=>{
    const id = req.session.idUsuario;

    const usuario = await Usuario.findByPk(id);

    if (usuario == null) {
        res.status(200).redirect('/usuario/login');
    }else{
        res.status(200).render('perfil', {usuario, id});
    }
});

roteador.get('/perfilProf', async (req, res)=>{
    const id = req.session.idUsuario;

    const usuario = await Usuario.findByPk(id);

    if (usuario == null) {
        res.status(200).redirect('/usuario/login');
    }else{
        res.status(200).render('perfilProf', {usuario, id});
    }
});

roteador.get('/perfilAdm', async (req, res)=>{
    const id = req.session.idUsuario;

    const usuario = await Usuario.findByPk(id);

    if (usuario == null) {
        res.status(200).redirect('/usuario/login');
    }else{
        res.status(200).render('perfiladm', {usuario, id});
    }
});

roteador.get('/perfil/MudarSenha', async (req, res)=>{
    const id2 = req.session.idUsuario;

    let senha = await Usuario.findByPk(id2);
    res.status(200).render('editSenha', {senha, id2});
});

roteador.post('/', async (req, res)=>{
    const {nome, usuario, senha, email, email_secundario} = req.body;
    await Usuario.create({nome, usuario, senha, email, email_secundario});
    res.status(201).redirect('/usuario/login');
});

roteador.patch('/:id', async (req, res)=>{
    let {senha} = req.body;
    await Usuario.update({senha},
        {
            where: {id: req.params.id}
        }
    );
    res.status(200).redirect('/coxinharia');
});

roteador.delete('/:id', async (req, res)=>{
    await Pedido.destroy(
        {
            where: 
            {
                UsuarioId:req.params.id
            }
        }
    );
    
    
    await Usuario.destroy(
        {
            where: 
            {
                id:req.params.id
            }
        }
    );
    res.status(200).redirect('/usuario/login');
    
});



module.exports = roteador;

