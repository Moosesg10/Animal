(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();const l=document;function u(){const e=l.getElementById("Title"),t=l.querySelector(".Titulo"),a=l.querySelector("body"),i=l.querySelector(".logo"),n=l.querySelectorAll(".a");return t.classList.remove("White"),a.style.backgroundColor="#f6f0dddb",e.classList.remove("Whitepaper"),i.classList.remove("whitel"),t.classList.remove("morado"),t.classList.remove("rojo"),n.forEach(r=>r.classList.remove("whitea")),e.innerHTML=`
     Animals
    `,e}const c=document;function m(){const e=c.getElementById("Title"),t=c.querySelector(".Titulo"),a=c.querySelector("body"),i=c.querySelector(".logo"),n=c.querySelectorAll(".a");return t.classList.add("White"),a.style.backgroundColor="#000",e.classList.add("Whitepaper"),i.classList.add("whitel"),n.forEach(r=>r.classList.add("whitea")),e.innerHTML=`
            Coming Soon
            `,e}const o=document;function h(){const e=o.createElement("header");return e.id="Header",e.appendChild(g()),e.appendChild(f()),L(),e}function f(){const e=o.createElement("nav"),t=o.createElement("ul"),a=o.createElement("a"),i=o.createElement("a"),n=o.createElement("a");return e.classList.add("nav"),t.classList.add("ul"),a.innerHTML="Animals",i.innerHTML="WhitePaper",n.innerHTML="RoadMap",a.href="/Animals",i.href="/Whitepaper",n.href="/RoadMap",t.id="Nav",a.id="Animals",i.id="Whitepaper",n.id="RoadMap",a.classList.add("a"),i.classList.add("a"),n.classList.add("a"),t.appendChild(a),t.appendChild(i),t.appendChild(n),e.appendChild(t),e}function g(){const e=o.createElement("h2"),t=o.createElement("a"),a=o.createElement("div");return e.classList.add("logo"),t.href="/Home",t.classList.add("Btn-logo"),e.innerHTML="ANM",t.appendChild(e),a.appendChild(t),a}function L(){setTimeout(()=>{o.getElementById("Header").addEventListener("click",t=>{t.preventDefault(),t.target.id==="Whitepaper"&&(t.preventDefault(),location.hash="/Whitepaper",m()),(t.target.matches(".logo")||t.target.id==="Animals")&&(t.preventDefault(),u(),location.hash="/Home"),t.target.id==="RoadMap"&&(t.preventDefault(),location.hash="/Road")})},100)}const $="/assets/magiceden-a1b92ad3.svg",E="/assets/twitter-2d0a1812.svg",v="/assets/discord-1350a65e.svg",d=document;function y(){const e=d.createElement("nav");return e.classList.add("links"),e.appendChild(C()),e}function C(){const e=d.createElement("ul"),t=d.createElement("a"),a=d.createElement("a"),i=d.createElement("a"),n=d.createElement("img"),r=d.createElement("img"),s=d.createElement("img");return t.href="",a.href="",i.href="",n.classList.add("ME"),n.src=$,r.src=E,s.src=v,t.appendChild(n),a.appendChild(s),i.appendChild(r),e.appendChild(t),e.appendChild(a),e.appendChild(i),e}const p=document;function M(){const e=p.createElement("main"),t=document.createElement("div");return t.classList.add("Titulo"),t.appendChild(T()),e.id="Main",e.appendChild(t),console.log(location.href),e}function T(){const e=p.createElement("h1");return e.classList.add("title"),e.id="Title",e.innerHTML=`
    ANIMALS
    `,e}function A(){const e=document.getElementById("app");e.appendChild(h()),e.appendChild(y()),e.appendChild(M())}document.addEventListener("DOMContentLoaded",A());
