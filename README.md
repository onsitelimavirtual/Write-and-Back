# Write and Back 5.0.3 — Laboratório PRO

## O que foi implementado
- Laboratório PRO mantido como módulo da versão 5.0.3.
- Conteúdo do Laboratório PRO fica oculto até uma ativação válida.
- Licenças PRO comerciais continuam validadas por assinatura ECDSA P-256 usando a chave pública embutida no aplicativo.
- Código especial do titular `onsite`: validação local por SHA-256 e liberação integral do Laboratório PRO neste navegador.
- A ativação do titular persiste neste navegador e pode ser removida em “Remover licença local”.
- O aceite dos documentos continua sendo uma etapa separada e necessária para executar ações protegidas.

## Ativação
1. Abra “Licença e ativação”.
2. Para clientes, cole a licença assinada emitida pelo titular e clique em “Validar e ativar”.
3. Para o titular, informe o código especial `onsite` no campo “Ativação integral do titular” e clique em “Liberar acesso total”.
4. Acesse “Laboratório PRO”.

## Limitação de segurança importante
O código especial é validado localmente e o desbloqueio é guardado no armazenamento do navegador. Como o HTML e o JavaScript são distribuídos ao usuário, esse mecanismo não é uma proteção anticópia forte: alguém com conhecimento técnico pode inspecionar ou modificar o código local. Para comercialização em escala, mantenha o fluxo de licenças assinadas e migre a emissão/revogação/controle de dispositivos para um backend autenticado. Não coloque a chave privada de assinatura no HTML.

## Escopo
Esta entrega prepara e protege a interface do Laboratório PRO. Não implementa checkout, cobrança recorrente, painel de clientes, emissão automática de licenças ou revogação remota.
