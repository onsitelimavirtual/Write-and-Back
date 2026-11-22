# Relatório de validação — Write and Back 5.0.3 Laboratório PRO

- [x] Laboratório PRO encapsulado em contêiner inicialmente oculto.
- [x] Interface de ativação do titular presente.
- [x] Hash SHA-256 do código `onsite` presente e correspondente.
- [x] Ativação do titular grava apenas marcador local, não o código em texto puro.
- [x] Remoção de licença apaga licença assinada e marcador do titular.
- [x] Licença comercial continua exigindo assinatura ECDSA válida e datas válidas.
- [x] Controles do laboratório continuam condicionados à função wantPro e ao aceite dos documentos.
- [x] Cinco blocos JavaScript passaram por `node --check`.
- [x] HTML parseado; IDs duplicados não encontrados.

## Limites não testados
- Não foi possível executar teste visual real em Android nesta etapa.
- Não foi testada uma licença comercial assinada real emitida pelo titular.
- O código `onsite` é um desbloqueio local de conveniência, não uma barreira anticópia forte. O código-fonte do cliente pode ser inspecionado/modificado.
- Não há backend de licenciamento, cobrança, emissão ou revogação remota.
