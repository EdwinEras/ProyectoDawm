create database littlecake;

create table usuario(
	idusuario serial,
	nombre varchar(30) not null,
	apellido varchar(30) not null,
	email varchar(50) unique not null,
	telefono varchar(10),
	contrasena varchar(50) not null,
	direccion text,
	isAdmin bit,
	primary key(idusuario)
);

create table producto(
	idproducto serial,
	nombre varchar(30) unique not null,
	categoria varchar(30) not null,
	descripcion varchar(255) not null,
	imagen text,
	precio float not null,
	cantidad integer not null,
	idusuario integer,
	primary key(idproducto),
	foreign key(idusuario) references usuario
);
create table noticia(
	idnoticia serial,
	titulo float not null,
	descripcion date not null,
	fechaCreacion date not null,
	stringImg varchar(350),
	idusuario integer,
	primary key(idnoticia),
	foreign key(idusuario) references usuario
);
create table testimonio(
	idtestimonio serial,
	titulo float not null,
	descripcion date not null,
	fechaCreacion date not null,
	idusuario integer,
	primary key(idtestimonio),
	foreign key(idusuario) references usuario
);

create table compra(
	idcompra serial,
	fecha date not null,
	valorTotal float,
	idproducto integer,
	idusuario integer,
	primary key(idcompra),
	foreign key(idproducto) references producto,
	foreign key(idusuario) references usuario
);

create table oferta(
	idoferta serial,
	porcentaje float not null,
	fechainicio date not null,
	fechafin date not null,
	idusuario integer,
	primary key(idoferta),
	foreign key(idusuario) references usuario
);

create table categoria(
	idcategoria serial,
	fechaCreacion date not null,
	nombre varchar(100),
	idoferta integer,
	idusuario integer,
	primary key(idcategoria),
	foreign key(idoferta) references oferta,
	foreign key(idusuario) references usuario
);
create table categoria_producto(
	idcategoria_producto serial,
	idproducto integer,
	idcategoria integer,
	primary key(idcategoria_producto),
	foreign key(idproducto) references producto,
	foreign key(idcategoria) references categoria
);

insert into usuario(nombre, apellido, email, telefono, contrasena, direccion) 
	values('Admin', 'Adminsito', 'admin@gmail.com', '0987654321', 'admin', 'http//www.miUbicacionMapa.com');

insert into usuario(nombre, apellido, email, telefono, contrasena, direccion) 
	values('Edwin', 'Eras', 'edwin@gmail.com', '', 'edwin', '');

insert into producto(nombre, categoria, descripcion, precio, cantidad, idUsuario)
	values('torta de chocolate', 'tortas', 'torta de chocolate con chocolate', 2.50, 5, 1);
	
insert into producto(nombre, categoria, descripcion, precio, cantidad, idUsuario)
	values('torta de vainilla', 'tortas', 'torta de vainilla con vainilla', 2.40, 4, 1);
	
select * from usuario;