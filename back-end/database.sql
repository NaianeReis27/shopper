CREATE TABLE Products 
( 
	code bigint PRIMARY KEY, 
	name varchar(100) NOT NULL,
	cost_price decimal(9,2) NOT NULL, 
	sales_price decimal(9,2) NOT NULL 
);

INSERT INTO Products VALUES (16, 'AZEITE PORTUGUÊS EXTRA VIRGEM GALLO 500ML', 18.44, 20.49);
INSERT INTO Products VALUES (18, 'BEBIDA ENERGÉTICA VIBE 2L', 8.09, 8.99);
INSERT INTO Products VALUES (19, 'ENERGÉTICO RED BULL ENERGY DRINK 250ML', 6.56, 7.29);
INSERT INTO Products VALUES (20, 'ENERGÉTICO RED BULL ENERGY DRINK 355ML', 9.71, 10.79);
INSERT INTO Products VALUES (21, 'BEBIDA ENERGÉTICA RED BULL RED EDITION 250ML', 10.71, 11.71);
INSERT INTO Products VALUES (22, 'ENERGÉTICO RED BULL ENERGY DRINK SEM AÇÚCAR 250ML', 6.74, 7.49);
INSERT INTO Products VALUES (23, 'ÁGUA MINERAL BONAFONT SEM GÁS 1,5L', 2.15, 2.39);
INSERT INTO Products VALUES (24, 'FILME DE PVC WYDA 28CMX15M', 3.59, 3.99);
INSERT INTO Products VALUES (26, 'ROLO DE PAPEL ALUMÍNIO WYDA 30CMX7,5M', 5.21, 5.79);
INSERT INTO Products VALUES (1000, 'BEBIDA ENERGÉTICA VIBE 2L - 6 UNIDADES', 48.54, 53.94);
INSERT INTO Products VALUES (1010, 'KIT ROLO DE ALUMÍNIO + FILME PVC WYDA', 8.80, 9.78);
INSERT INTO Products VALUES (1020, 'SUPER PACK RED BULL VARIADOS - 6 UNIDADES', 51.81, 57.00);

CREATE TABLE Packs 
(
  id bigint AUTO_INCREMENT PRIMARY KEY, -- id primário da tabela
  pack_id bigint NOT NULL,  -- id do produto pack 
  product_id bigint NOT NULL, -- id do produto componente
  qty bigint NOT NULL, -- quantidade do produto componente no pack
  CONSTRAINT FOREIGN KEY (pack_id) REFERENCES Products(code),
  CONSTRAINT FOREIGN KEY (product_id) REFERENCES Products(code)
);

INSERT INTO Packs (pack_id, product_id, qty) VALUES (1000, 18, 6);
INSERT INTO Packs (pack_id, product_id, qty) VALUES (1010, 24, 1);
INSERT INTO Packs (pack_id, product_id, qty) VALUES (1010, 26, 1);
INSERT INTO Packs (pack_id, product_id, qty) VALUES (1020, 19, 3);
INSERT INTO Packs (pack_id, product_id, qty) VALUES (1020, 21, 3);