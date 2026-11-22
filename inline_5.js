
/* Controlador da versão 5.0.2 — interações locais. Sem rede nem coleta externa. */
(function(){'use strict';
const $=id=>document.getElementById(id);
const P=()=>window.WBPrecision;
const idea=()=>String($('idea')&&$('idea').value||'').trim();
const form=()=>({category:$('category').value,audience:$('audience').value,platform:$('platform').value,format:$('format').value,limitations:$('limitations').value,successMetric:$('successMetric').value});
const legal=()=>window.WBLegalCanUse&&window.WBLegalCanUse();
const ensure=()=>{if(legal())return true;if(window.WBLegalPrompt)window.WBLegalPrompt();return false;};
function ensureIdea(){if(!idea()){$('idea').focus();$('wbDirectOutput').textContent='Digite uma ideia no Estúdio para começar.';return false;}return true;}
function updateScore(){
 const dest=$('wbPrecisionQA');if(!dest)return;
 const input=idea(), output=$('promptOutput').value.trim();
 if(!input||!output){dest.textContent='Gere um prompt para verificar cobertura, lacunas e possíveis conflitos.';return;}
 const r=P().audit(input,output,form());
 dest.replaceChildren();
 const title=document.createElement('strong');title.textContent='Cobertura do resultado: '+r.outputCoverage+'/100 (heurística)';dest.append(title);
 const note=document.createElement('p');note.textContent='Completude da entrada: '+r.sourceQuality+'/100. Não são notas de exatidão factual ou homologação.';dest.append(note);
 const list=document.createElement('ul');r.checks.forEach(x=>{const li=document.createElement('li');li.textContent=(x.met?'✓ ':'○ ')+x.name;list.append(li);});dest.append(list);
 const warns=document.createElement('p');warns.textContent=r.warnings.length?'Pontos a revisar: '+r.warnings.join(' | '):'Nenhum alerta identificado pelas regras locais. Faça revisão humana.';dest.append(warns);
}
function direct(){if(!ensureIdea()||!ensure())return;const text=P().advise(idea(),form());$('wbDirectOutput').textContent=window.WBCleanLegacyName?window.WBCleanLegacyName(text):text;
 $('wbDirectOutput').scrollIntoView({block:'nearest',behavior:'smooth'});
}
function buildDirect(){if(!ensureIdea()||!ensure())return;const mode=$('wbResponseMode').value;
 const text=P().draft(idea(),form(),mode);
 if(window.WBSetLocalResult)window.WBSetLocalResult(text,'Resposta '+mode+' • motor local 5.0.2');
 updateScore();
}
function copyAdvice(){const txt=$('wbDirectOutput').textContent.trim();if(!txt||txt.startsWith('Digite uma ideia'))return;
 if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(()=>{$('wbCopyAdvice').textContent='Copiado ✓';}).catch(()=>fallbackCopy(txt));}else fallbackCopy(txt);
 function fallbackCopy(t){const ta=document.createElement('textarea');ta.value=t;document.body.appendChild(ta);ta.select();try{document.execCommand('copy');$('wbCopyAdvice').textContent='Copiado ✓';}catch(e){$('wbCopyAdvice').textContent='Selecione e copie o texto';}ta.remove();}
}
function compare(){if(!ensureIdea())return;const current=$('promptOutput').value.trim();const generated=P().draft(idea(),form(),$('wbResponseMode').value);const newer=P().audit(idea(),generated,form());
 const previous=current?P().audit(idea(),current,form()):null;
 const dest=$('wbCompare');dest.replaceChildren();
 const t=document.createElement('strong');t.textContent='Comparador de cobertura textual';dest.append(t);
 const p=document.createElement('p');p.textContent='Nova proposta: '+newer.outputCoverage+'/100'+(previous?' · Texto atual: '+previous.outputCoverage+'/100':' · Gere um prompt atual para comparar')+'. Os números são heurísticos e não medem utilidade nem verdade.';dest.append(p);
 const w=document.createElement('p');w.textContent=newer.warnings.length?'Atenção: '+newer.warnings.join(' | '):'Sem alerta conhecido no texto proposto.';dest.append(w);
}
function mentorShortcut(){const q=$('wbTutorInput').value.trim();if(!q)return;
 if($('wbTutorNeural').checked)return;
 $('wbTutorReply').textContent=window.WBCleanLegacyName(P().tutor(q,idea(),form()));
}
document.addEventListener('DOMContentLoaded',()=>{
 $('wbDirect').addEventListener('click',direct);
 $('wbDirectGenerate').addEventListener('click',buildDirect);
 $('wbAudit').addEventListener('click',updateScore);
 $('wbCompareBtn').addEventListener('click',compare);
 $('wbCopyAdvice').addEventListener('click',copyAdvice);
 $('wbTutorAsk').addEventListener('click',()=>{if(!$('wbTutorNeural').checked)mentorShortcut();});
 $('wbResponseMode').addEventListener('change',()=>{try{localStorage.setItem('writeback.response.mode.v5',$('wbResponseMode').value);}catch(e){} });
 try{const m=localStorage.getItem('writeback.response.mode.v5');if(['direto','equilibrado','profundo'].includes(m))$('wbResponseMode').value=m;}catch(e){}
 $('generate').addEventListener('click',()=>setTimeout(updateScore,0));
 $('promptOutput').addEventListener('input',updateScore);
});
})();

