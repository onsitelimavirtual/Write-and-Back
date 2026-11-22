# Write and Back 5.0.3 — Entrega conforme identificação automática

## Mudança funcional
- O campo “Entrega desejada” agora inicia em **Identificar automaticamente pela proposta**.
- O motor identifica a natureza do artefato descrito: software/sistema, jogo, relatório, apresentação, documento/manual, curso ou material didático, campanha, entre outros.
- Ao final do prompt, inclui instrução obrigatória para produzir o artefato identificado, e não apenas descrever ou planejar sua construção.
- Quando a identificação for incerta, o prompt exige que o modelo declare a interpretação adotada e não invente requisitos.
- A escolha manual de formato continua disponível para o usuário que quiser substituir a classificação automática.
- A instrução final é anexada tanto ao motor clássico quanto ao caminho do motor avançado local.

## Exemplos dinâmicos testados
- Sistema de gestão escolar → software.
- Jogo educativo → jogo.
- Relatório técnico de auditoria → relatório.
- Apresentação → apresentação.
- Manual de uso de aplicativo → documento/manual.
- Sequência didática → material didático.

## Verificações estáticas
- [x] Formato automático é padrão
- [x] Formatos manuais continuam disponíveis
- [x] Detector de software
- [x] Detector de jogos
- [x] Detector de relatórios
- [x] Detector de apresentações
- [x] Detector de documentos
- [x] Detector de materiais didáticos
- [x] Instrução final de entrega adicionada
- [x] Bloco final aplicado ao motor clássico
- [x] Bloco final aplicado ao motor avançado

- Blocos JavaScript: 5
- Erros de sintaxe: 0
- Exemplos de classificação executados: 6/6 aprovados.

**Limitação:** a classificação é heurística por palavras-chave e regras locais. Propostas ambíguas ou que misturam artefatos podem exigir revisão. A instrução orienta o modelo de destino, mas não garante que Gemini, DeepSeek ou qualquer outro modelo consiga criar arquivos ou executar código em todos os ambientes.
