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