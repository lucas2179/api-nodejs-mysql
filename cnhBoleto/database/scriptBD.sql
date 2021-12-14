-- Script Database

DROP TABLE IF EXISTS `CNH_REN`;

CREATE TABLE CNH_REN(
    `CPF` varchar(11) NULL,
    `NOME` varchar(255) NULL,
    `CNH_NRO` varchar(50) NULL,
    `REN_SITUACAO` varchar(50) NULL,
    `REN_DATA` date NULL,
    `REN_PROTOCOLO` varchar(50) NULL,
    `REN_STATUSSERVICO` varchar(50) NULL,
    `REN_STATUS` varchar(50) NULL,
    `REN_BOLETOPAGAMENTO` varchar(255) NULL,
    `REN_DESC` varchar(255) NULL,
    `REN_VALOR` varchar(10) NULL
);

INSERT CNH_REN (`CPF`, `NOME`, `CNH_NRO`, `REN_SITUACAO`, `REN_DATA`, `REN_PROTOCOLO`, `REN_STATUSSERVICO`, `REN_STATUS`, `REN_BOLETOPAGAMENTO`, `REN_DESC`, `REN_VALOR`) 
VALUES (N'11111111111', N'Joao', N'00001230000', N'AGENDADO', CAST(N'2021-12-08' AS Date), N'00001', N'OK', N'EXAME MEDICO', N'https://i.ibb.co/GRJThnb/faturaboleto.png', N'Lorem ipsum', N'150')

INSERT CNH_REN (`CPF`, `NOME`, `CNH_NRO`, `REN_SITUACAO`, `REN_DATA`, `REN_PROTOCOLO`, `REN_STATUSSERVICO`, `REN_STATUS`, `REN_BOLETOPAGAMENTO`, `REN_DESC`, `REN_VALOR`) 
VALUES (N'00000000000', N'Paulo', N'11111230000', N'NAO AGENDADO', CAST(N'2021-12-08' AS Date), N'00002', N'OFF', N'PAGAMENTO DE TAXA', N'https://i.ibb.co/GRJThnb/faturaboleto.png', N'Lorem ipsum', N'150')

INSERT CNH_REN (`CPF`, `NOME`, `CNH_NRO`, `REN_SITUACAO`, `REN_DATA`, `REN_PROTOCOLO`, `REN_STATUSSERVICO`, `REN_STATUS`, `REN_BOLETOPAGAMENTO`, `REN_DESC`, `REN_VALOR`) 
VALUES (N'87954300080', N'CNH_MARIA', N'96556681659', N'NAO AGENDADO', CAST(N'2021-01-10' AS Date), N'010102021', N'ON', N'EXAME MEDICO', N'https://i.ibb.co/GRJThnb/faturaboleto.png', N'Permtir Renovação', N'150')

INSERT CNH_REN (`CPF`, `NOME`, `CNH_NRO`, `REN_SITUACAO`, `REN_DATA`, `REN_PROTOCOLO`, `REN_STATUSSERVICO`, `REN_STATUS`, `REN_BOLETOPAGAMENTO`, `REN_DESC`, `REN_VALOR`) 
VALUES (N'19626836059', N'CNH_MARIA', N'68642179282', N'AGENDADO', CAST(N'2021-01-09' AS Date), N'010102021', N'ON', N'EXAME MEDICO', N'https://i.ibb.co/GRJThnb/faturaboleto.png', N'Recusar Renovação', N'150')

INSERT CNH_REN (`CPF`, `NOME`, `CNH_NRO`, `REN_SITUACAO`, `REN_DATA`, `REN_PROTOCOLO`, `REN_STATUSSERVICO`, `REN_STATUS`, `REN_BOLETOPAGAMENTO`, `REN_DESC`, `REN_VALOR`) 
VALUES (N'26382648060', N'CNH_MARIA', N'09640183409', N'AGENDADO', CAST(N'2021-01-10' AS Date), N'010102021', N'ON', N'PGAMENTO DE TAXA', N'https://i.ibb.co/GRJThnb/faturaboleto.png', N'Recusar Renovação', N'150')