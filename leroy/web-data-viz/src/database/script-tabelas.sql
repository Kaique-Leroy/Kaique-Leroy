create database projetoIndividual;

use projetoIndividual;

create table usuario(
id int primary key auto_increment,
nome varchar (45),
email varchar (100),
senha varchar (100)
);

select * from usuario;

create table pontuacao(
idPontuacao int primary key auto_increment,
pontuacao int,
totalQuestoes int,
 data TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 fkUsuario int,
 constraint chkUsuarioPontuacao foreign key(fkUsuario) references usuario(id)
);

select * from pontuacao;

--Criação da tabela “post”, para a inserção de posts sobre filmes de terror no site. dia 21/06/2024

create table post(
idPost int primary key auto_increment,
titulo varchar(45), 
descricao varchar(200),                   
fkUsuarioPost int,
constraint chkUsuarioPost foreign key(fkUsuarioPost) references usuario(id)
);