export interface DashboardDataItem {
  category: string;
  commercialLineGroup: string;
  replacedProduct2: string;
  modelo: string;
  pnc: string;
  voltage: string;
  tabela: string;
  indicador: string;
  periodo: string;
  quantidade: number;
}

export const rawAgendaData: DashboardDataItem[] = [
  { category: "FOGOES", commercialLineGroup: "FOGAO 76CM", replacedProduct2: "5Q 6Q-SINGLE-GLASS", modelo: "FC5GB", pnc: "926565346", voltage: "DUAL VOLTAGE", tabela: "GATE", indicador: "Aguard. Ret. de Agenda", periodo: "30/10/2025", quantidade: 57 },
  { category: "FOGOES", commercialLineGroup: "FOGAO MENOR 76CM", replacedProduct2: "4Q-SINGLE-GLASS", modelo: "FC4GB", pnc: "926565345", voltage: "DUAL VOLTAGE", tabela: "GATE", indicador: "Aguard. Ret. de Agenda", periodo: "30/10/2025", quantidade: 184 },
  { category: "REFRIGERADORES", commercialLineGroup: "REF 1 PORTA", replacedProduct2: "MINIBAR", modelo: "EM90", pnc: "925073572", voltage: "220 VOLT", tabela: "GATE", indicador: "Aguard. Ret. de Agenda", periodo: "30/10/2025", quantidade: 45 },
  { category: "REFRIGERADORES", commercialLineGroup: "REF FROST FREE", replacedProduct2: "BF60", modelo: "IB42G", pnc: "924263096", voltage: "127 VOLT", tabela: "GATE", indicador: "Aguard. Ret. de Agenda", periodo: "30/10/2025", quantidade: 72 },
  { category: "MICROONDAS", commercialLineGroup: "MICROONDAS NACIONAL", replacedProduct2: "FAMILIA", modelo: "ME36S", pnc: "947005193", voltage: "220 VOLT", tabela: "GATE", indicador: "Aguard. Ret. de Agenda", periodo: "30/10/2025", quantidade: 40 },
  { category: "MICROONDAS", commercialLineGroup: "MICROONDAS NACIONAL", replacedProduct2: "COMPACTO", modelo: "MC21B", pnc: "947005201", voltage: "220 VOLT", tabela: "GATE", indicador: "Aguard. Ret. de Agenda", periodo: "30/10/2025", quantidade: 2 },
  { category: "LAVADORAS", commercialLineGroup: "LAV TOP LOAD", replacedProduct2: "TL +15kg", modelo: "LEE18", pnc: "900941889", voltage: "220 VOLT", tabela: "GATE", indicador: "Aguard. Ret. de Agenda", periodo: "30/10/2025", quantidade: 412 },
  { category: "LAVADORAS", commercialLineGroup: "LAV TOP LOAD", replacedProduct2: "TL 13kg - 15kg", modelo: "LEC15", pnc: "900941870", voltage: "220 VOLT", tabela: "GATE", indicador: "Aguard. Ret. de Agenda", periodo: "30/10/2025", quantidade: 326 },
];

export const rawFobData: DashboardDataItem[] = [
  { category: "REFRIGERADORES", commercialLineGroup: "REF 1 PORTA", replacedProduct2: "MINIBAR", modelo: "EM90", pnc: "925073572", voltage: "220 VOLT", tabela: "GATE", indicador: "FOB Pendente", periodo: "30/10/2025", quantidade: 600 },
  { category: "REFRIGERADORES", commercialLineGroup: "REF FROST FREE", replacedProduct2: "BF60", modelo: "IB42G", pnc: "924263096", voltage: "127 VOLT", tabela: "GATE", indicador: "FOB Pendente", periodo: "30/10/2025", quantidade: 460 },
  { category: "LAVADORAS", commercialLineGroup: "LAV TOP LOAD", replacedProduct2: "TL +15kg", modelo: "LEE18", pnc: "900941889", voltage: "220 VOLT", tabela: "GATE", indicador: "Aguard. Ret. de Agenda", periodo: "30/10/2025", quantidade: 412 }, // This item is not FOB, will be filtered out
  { category: "LAVADORAS", commercialLineGroup: "LAV TOP LOAD", replacedProduct2: "TL 13kg - 15kg", modelo: "LEC15", pnc: "900941870", voltage: "220 VOLT", tabela: "GATE", indicador: "FOB Pendente", periodo: "30/10/2025", quantidade: 326 },
  { category: "FOGOES", commercialLineGroup: "FOGAO 76CM", replacedProduct2: "5Q 6Q-SINGLE-GLASS", modelo: "FC5GB", pnc: "926565346", voltage: "DUAL VOLTAGE", tabela: "GATE", indicador: "FOB Pendente", periodo: "30/10/2025", quantidade: 57 },
  { category: "FOGOES", commercialLineGroup: "FOGAO MENOR 76CM", replacedProduct2: "4Q-SINGLE-GLASS", modelo: "FC4GB", pnc: "926565345", voltage: "DUAL VOLTAGE", tabela: "GATE", indicador: "FOB Pendente", periodo: "30/10/2025", quantidade: 184 },
  { category: "MICROONDAS", commercialLineGroup: "MICROONDAS NACIONAL", replacedProduct2: "FAMILIA", modelo: "ME36S", pnc: "947005193", voltage: "220 VOLT", tabela: "GATE", indicador: "Aguard. Ret. de Agenda", periodo: "30/10/2025", quantidade: 40 }, // This item is not FOB, will be filtered out
  { category: "MICROONDAS", commercialLineGroup: "MICROONDAS NACIONAL", replacedProduct2: "COMPACTO", modelo: "MC21B", pnc: "947005201", voltage: "220 VOLT", tabela: "GATE", indicador: "FOB Pendente", periodo: "30/10/2025", quantidade: 2 },
];

export const rawCreditBlockData: DashboardDataItem[] = [
  { category: "REFRIGERADORES", commercialLineGroup: "REF 1 PORTA", replacedProduct2: "MINIBAR", modelo: "EM90", pnc: "925073572", voltage: "220 VOLT", tabela: "GATE", indicador: "Bloq. Crédito", periodo: "30/10/2025", quantidade: 456 },
  { category: "REFRIGERADORES", commercialLineGroup: "REF FROST FREE", replacedProduct2: "BF60", modelo: "IB42G", pnc: "924263096", voltage: "127 VOLT", tabela: "GATE", indicador: "Bloq. Crédito", periodo: "30/10/2025", quantidade: 532 },
  { category: "LAVADORAS", commercialLineGroup: "LAV TOP LOAD", replacedProduct2: "TL +15kg", modelo: "LEE18", pnc: "900941889", voltage: "220 VOLT", tabela: "GATE", indicador: "Aguard. Ret. de Agenda", periodo: "30/10/2025", quantidade: 478 },
  { category: "LAVADORAS", commercialLineGroup: "LAV TOP LOAD", replacedProduct2: "TL 13kg - 15kg", modelo: "LEC15", pnc: "900941870", voltage: "220 VOLT", tabela: "GATE", indicador: "Bloq. Crédito", periodo: "30/10/2025", quantidade: 313 },
  { category: "FOGOES", commercialLineGroup: "FOGAO 76CM", replacedProduct2: "5Q 6Q-SINGLE-GLASS", modelo: "FC5GB", pnc: "926565346", voltage: "DUAL VOLTAGE", tabela: "GATE", indicador: "Bloq. Crédito", periodo: "30/10/2025", quantidade: 67 },
  { category: "FOGOES", commercialLineGroup: "FOGAO MENOR 76CM", replacedProduct2: "4Q-SINGLE-GLASS", modelo: "FC4GB", pnc: "926565345", voltage: "DUAL VOLTAGE", tabela: "GATE", indicador: "Bloq. Crédito", periodo: "30/10/2025", quantidade: 215 },
  { category: "MICROONDAS", commercialLineGroup: "MICROONDAS NACIONAL", replacedProduct2: "FAMILIA", modelo: "ME36S", pnc: "947005193", voltage: "220 VOLT", tabela: "GATE", indicador: "Bloq. Crédito", periodo: "30/10/2025", quantidade: 40 },
  { category: "MICROONDAS", commercialLineGroup: "MICROONDAS NACIONAL", replacedProduct2: "COMPACTO", modelo: "MC21B", pnc: "947005201", voltage: "220 VOLT", tabela: "GATE", indicador: "Bloq. Crédito", periodo: "30/10/2025", quantidade: 2 },
];

export const rawOrderBlockData: DashboardDataItem[] = [
  { category: "REFRIGERADORES", commercialLineGroup: "REF 1 PORTA", replacedProduct2: "MINIBAR", modelo: "EM90", pnc: "925073572", voltage: "220 VOLT", tabela: "GATE", indicador: "Ordens Bloq", periodo: "30/10/2025", quantidade: 589 },
  { category: "REFRIGERADORES", commercialLineGroup: "REF FROST FREE", replacedProduct2: "BF60", modelo: "IB42G", pnc: "924263096", voltage: "127 VOLT", tabela: "GATE", indicador: "Ordens Bloq", periodo: "30/10/2025", quantidade: 421 },
  { category: "LAVADORAS", commercialLineGroup: "LAV TOP LOAD", replacedProduct2: "TL +15kg", modelo: "LEE18", pnc: "900941889", voltage: "220 VOLT", tabela: "GATE", indicador: "Ordens Bloq", periodo: "30/10/2025", quantidade: 432 },
  { category: "LAVADORAS", commercialLineGroup: "LAV TOP LOAD", replacedProduct2: "TL 13kg - 15kg", modelo: "LEC15", pnc: "900941870", voltage: "220 VOLT", tabela: "GATE", indicador: "Ordens Bloq", periodo: "30/10/2025", quantidade: 307 },
  { category: "FOGOES", commercialLineGroup: "FOGAO 76CM", replacedProduct2: "5Q 6Q-SINGLE-GLASS", modelo: "FC5GB", pnc: "926565346", voltage: "DUAL VOLTAGE", tabela: "GATE", indicador: "Ordens Bloq", periodo: "30/10/2025", quantidade: 57 },
  { category: "FOGOES", commercialLineGroup: "FOGAO MENOR 76CM", replacedProduct2: "4Q-SINGLE-GLASS", modelo: "FC4GB", pnc: "926565345", voltage: "DUAL VOLTAGE", tabela: "GATE", indicador: "Ordens Bloq", periodo: "30/10/2025", quantidade: 184 },
  { category: "MICROONDAS", commercialLineGroup: "MICROONDAS NACIONAL", replacedProduct2: "FAMILIA", modelo: "ME36S", pnc: "947005193", voltage: "220 VOLT", tabela: "GATE", indicador: "Ordens Bloq", periodo: "30/10/2025", quantidade: 40 },
  { category: "MICROONDAS", commercialLineGroup: "MICROONDAS NACIONAL", replacedProduct2: "COMPACTO", modelo: "MC21B", pnc: "947005201", voltage: "220 VOLT", tabela: "GATE", indicador: "Ordens Bloq", periodo: "30/10/2025", quantidade: 2 },
];