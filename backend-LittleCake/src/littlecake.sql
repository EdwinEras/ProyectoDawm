
create table usuario(
	idusuario serial,
	nombre varchar(30),
	apellido varchar(30),
	email varchar(60) unique,
	telefono varchar(10),
	contrasena varchar(60),
	direccion text,
	isadmin boolean,
	primary key(idusuario)
);

create table categoria(
	idcategoria serial,
	nombre varchar(30) unique,
	fechaCreacion date,
	primary key(idcategoria)
);

create table producto(
	idproducto serial,
	nombre varchar(30) unique,
	categoria integer,
	descripcion varchar(255),
	imagen text,
	precio float,
	cantidad integer,
	primary key(idproducto),
	foreign key(categoria) references categoria
);

create table compra(
	idcompra serial,
	fecha date,
	valorTotal float,
	entregado boolean,
	idusuario integer,
	primary key(idcompra),
	foreign key(idusuario) references usuario
);

create table detalleCompra(
	iddetallecompra serial,
	idproducto integer,
	idcompra integer,
	cantidad integer,
	subtotal float,
	primary key(iddetallecompra),
	foreign key(idproducto) references producto,
	foreign key(idcompra) references compra
);

create table oferta(
	idoferta serial,
	nombre varchar(255),
	porcentaje float,
	fechainicio date,
	fechafin date,
	idcategoria integer,
	idusuario integer,
	primary key(idoferta),
	foreign key(idcategoria) references categoria,
	foreign key(idusuario) references usuario
);

create table categoriaOferta(
	idcategoriaoferta serial,
	idoferta integer,
	idcategoria integer,
	primary key(idcategoriaoferta),
	foreign key(idcategoria) references categoria,
	foreign key(idoferta) references oferta
);

insert into usuario(nombre, apellido, email, telefono, contrasena, direccion, isAdmin) 
	values('Admin', 'Adminsito', 'admin@gmail.com', '0987654321', 'admin', 'http//www.miUbicacionMapa.com', true);
insert into usuario(nombre, apellido, email, telefono, contrasena, direccion) 
	values('Edwin', 'Eras', 'edwin@gmail.com', '', 'edwin', '');

insert into categoria(nombre) values('tortas');
insert into categoria(nombre) values('bebidas calientes');

insert into producto(nombre, categoria, descripcion, precio, cantidad)
	values('torta de chocolate', 1, 'torta de chocolate con chocolate', 2.50, 20);	
insert into producto(nombre, categoria, descripcion, precio, cantidad)
	values('cafe expreso', 2, 'cafe expreso con cafe', 1.60, 20);

insert into compra(idusuario, entregado, valortotal) 
	values(2, false, 20.50);
	
insert into detalleCompra(idproducto, idcompra, cantidad, subtotal) 
	values(2, 1, 5, 5*2.50);
insert into detalleCompra(idproducto, idcompra, cantidad, subtotal) 
	values(3, 1, 5, 5*1.60);
	
insert into oferta(nombre, porcentaje, idcategoria) 
	values('fiestas agosteñas', 0.15, 2);

insert into categoriaOferta(idoferta, idcategoria) 
	values(1, 2);
	
select * from detalleCompra;