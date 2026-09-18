import * as pdfjsLib from 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.min.mjs';
import JSZip from 'https://cdn.jsdelivr.net/npm/jszip@3.10.1/+esm';
import { diffWordsWithSpace } from 'https://cdn.jsdelivr.net/npm/diff@5.2.0/+esm';
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'https://cdn.jsdelivr.net/npm/docx@9.1.1/+esm';
const parts=['app1.txt','app2.txt','app3.txt','app4.txt','app5.txt'];
const code=(await Promise.all(parts.map(async p=>{const r=await fetch(p);if(!r.ok)throw new Error('앱 파일 로드 실패: '+p);return r.text();}))).join('');
new Function('pdfjsLib','JSZip','diffWordsWithSpace','Document','Packer','Paragraph','TextRun','HeadingLevel',code)(pdfjsLib,JSZip,diffWordsWithSpace,Document,Packer,Paragraph,TextRun,HeadingLevel);
