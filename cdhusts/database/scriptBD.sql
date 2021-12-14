DROP TABLE IF EXISTS `CDHU_DOCSTATUS`;

CREATE TABLE CDHU_DOCSTATUS(
    `CPF` varchar(11) NULL,
    `CDHU_NROCONTA` varchar(50) NULL,
    `CDHU_STATUS` varchar(50) NULL
);

INSERT CDHU_DOCSTATUS (`CPF`, `CDHU_NROCONTA`, `CDHU_STATUS`) VALUES (N'00000000000', N'1212121212', N'OK');
INSERT CDHU_DOCSTATUS (`CPF`, `CDHU_NROCONTA`, `CDHU_STATUS`) VALUES (N'33333333333', N'9865546798', N'OK');
INSERT CDHU_DOCSTATUS (`CPF`, `CDHU_NROCONTA`, `CDHU_STATUS`) VALUES (N'22222222222', N'9656348888', N'NOK');
INSERT CDHU_DOCSTATUS (`CPF`, `CDHU_NROCONTA`, `CDHU_STATUS`) VALUES (N'87954300080', N'101010', N'FALTA TITULO DE ELEITOR');
INSERT CDHU_DOCSTATUS (`CPF`, `CDHU_NROCONTA`, `CDHU_STATUS`) VALUES (N'19626836059', N'101010', N'FALTA RG');