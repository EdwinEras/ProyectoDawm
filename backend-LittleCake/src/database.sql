--Modelo de base de datos relacional no terminado
--ejecutar query x query si no ejecuta el archivo de una
--drop database littlecake;

create database littlecake;

create table usuario(
	idUsuario serial,
	nombre varchar(30) not null,
	apellido varchar(30) not null,
	email varchar(50) unique not null,
	telefono varchar(10),
	contrasena varchar(50) not null,
	dirección text,
	primary key(idUsuario)
);

create table producto(
	idProducto serial,
	nombre varchar(30) unique not null,
	categoria varchar(30) not null,
	desccripcion varchar(255) not null,
	imagen text,
	precio float not null,
	cantidad integer not null,
	idUsuario integer,
	primary key(idProducto),
	foreign key(idUsuario) references usuario
);

create table compra(
	idCompra serial,
	fecha date not null,
	valorTotal float,
	idProducto integer,
	idUsuario integer,
	primary key(idCompra),
	foreign key(idProducto) references producto,
	foreign key(idUsuario) references usuario
);

create table oferta(
	idOferta serial,
	procentaje float not null,
	fechaInicio date not null,
	fechaFin date not null,
	idProducto integer,
	idUsuario integer,
	primary key(idOferta),
	foreign key(idProducto) references producto,
	foreign key(idUsuario) references usuario
);

insert into usuario(nombre, apellido, email, telefono, contrasena, direccion) 
	values('Admin', 'Adminsito', 'admin@gmail.com', '0987654321', 'admin', 'http//www.miUbicacionMapa.com');

insert into usuario(nombre, apellido, email, telefono, contrasena, direccion) 
	values('Edwin', 'Eras', 'edwin@gmail.com', '', 'edwin', '');