create table usuario(
	idusuario serial,
	nombre varchar(30),
	apellido varchar(30),
	email varchar(50) unique,
	telefono varchar(10),
	contrasena varchar(60),
	direccion text,
	isAdmin bit,
	primary key(idusuario)
);

create table producto(
	idproducto serial,
	nombre varchar(30) unique,
	categoria varchar(30),
	descripcion varchar(255),
	imagen text,
	precio float,
	cantidad integer,
	idusuario integer,
	primary key(idproducto),
	foreign key(idusuario) references usuario
);

create table compra(
	idcompra serial,
	fecha date,
	valorTotal float,
	idproducto integer,
	idusuario integer,
	primary key(idcompra),
	foreign key(idproducto) references producto,
	foreign key(idusuario) references usuario
);

create table oferta(
	idoferta serial,
	porcentaje float,
	fechainicio date,
	fechafin date,
	idproducto integer,
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