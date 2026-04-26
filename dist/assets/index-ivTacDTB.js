(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cc="183",ys={ROTATE:0,DOLLY:1,PAN:2},vs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lp=0,Qh=1,Up=2,ba=1,Ru=2,er=3,Wn=0,Ye=1,Se=2,kn=0,Gi=1,ci=2,td=3,ed=4,Np=5,Fi=100,Fp=101,Op=102,Bp=103,zp=104,Vp=200,kp=201,Gp=202,Hp=203,Rl=204,Pl=205,Wp=206,Xp=207,Yp=208,qp=209,jp=210,Kp=211,Zp=212,$p=213,Jp=214,Dl=0,Il=1,Ll=2,As=3,Ul=4,Nl=5,Fl=6,Ol=7,Ka=0,Qp=1,tm=2,Gn=0,Rc=1,Pc=2,Dc=3,Za=4,Ic=5,Lc=6,Uc=7,Pu=300,Hi=301,Cs=302,ko=303,Go=304,$a=306,Rs=1e3,ai=1001,Bl=1002,ze=1003,em=1004,Fr=1005,We=1006,Ho=1007,Vi=1008,hn=1009,Du=1010,Iu=1011,or=1012,Nc=1013,Xn=1014,zn=1015,un=1016,Fc=1017,Oc=1018,lr=1020,Lu=35902,Uu=35899,Nu=1021,Fu=1022,Pn=1023,hi=1026,ki=1027,Ou=1028,Bc=1029,Ps=1030,zc=1031,Vc=1033,Ea=33776,Ta=33777,wa=33778,Aa=33779,zl=35840,Vl=35841,kl=35842,Gl=35843,Hl=36196,Wl=37492,Xl=37496,Yl=37488,ql=37489,jl=37490,Kl=37491,Zl=37808,$l=37809,Jl=37810,Ql=37811,tc=37812,ec=37813,nc=37814,ic=37815,sc=37816,rc=37817,ac=37818,oc=37819,lc=37820,cc=37821,hc=36492,dc=36494,uc=36495,fc=36283,pc=36284,mc=36285,gc=36286,nm=3200,Ja=0,im=1,bi="",gn="srgb",Ds="srgb-linear",Ua="linear",te="srgb",$i=7680,nd=519,sm=512,rm=513,am=514,kc=515,om=516,lm=517,Gc=518,cm=519,_c=35044,id="300 es",Vn=2e3,cr=2001;function hm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Na(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dm(){const n=Na("canvas");return n.style.display="block",n}const sd={};function Fa(...n){const t="THREE."+n.shift();console.log(t,...n)}function Bu(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Pt(...n){n=Bu(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function qt(...n){n=Bu(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Oa(...n){const t=n.join(" ");t in sd||(sd[t]=!0,Pt(...n))}function um(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const fm={[Dl]:Il,[Ll]:Fl,[Ul]:Ol,[As]:Nl,[Il]:Dl,[Fl]:Ll,[Ol]:Ul,[Nl]:As};class Yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rd=1234567;const Ss=Math.PI/180,hr=180/Math.PI;function oi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]).toLowerCase()}function Xt(n,t,e){return Math.max(t,Math.min(e,n))}function Hc(n,t){return(n%t+t)%t}function pm(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function mm(n,t,e){return n!==t?(e-n)/(t-n):0}function sr(n,t,e){return(1-e)*n+e*t}function gm(n,t,e,i){return sr(n,t,1-Math.exp(-e*i))}function _m(n,t=1){return t-Math.abs(Hc(n,t*2)-t)}function xm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function vm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Mm(n,t){return n+Math.floor(Math.random()*(t-n+1))}function ym(n,t){return n+Math.random()*(t-n)}function Sm(n){return n*(.5-Math.random())}function bm(n){n!==void 0&&(rd=n);let t=rd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Em(n){return n*Ss}function Tm(n){return n*hr}function wm(n){return(n&n-1)===0&&n!==0}function Am(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Cm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Rm(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),u=a((t+i)/2),m=r((t-i)/2),h=a((t-i)/2),p=r((i-t)/2),_=a((i-t)/2);switch(s){case"XYX":n.set(o*u,l*m,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*m,o*c);break;case"ZXZ":n.set(l*m,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*_,l*p,o*c);break;case"YXY":n.set(l*p,o*u,l*_,o*c);break;case"ZYZ":n.set(l*_,l*p,o*u,o*c);break;default:Pt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ie(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ei={DEG2RAD:Ss,RAD2DEG:hr,generateUUID:oi,clamp:Xt,euclideanModulo:Hc,mapLinear:pm,inverseLerp:mm,lerp:sr,damp:gm,pingpong:_m,smoothstep:xm,smootherstep:vm,randInt:Mm,randFloat:ym,randFloatSpread:Sm,seededRandom:bm,degToRad:Em,radToDeg:Tm,isPowerOfTwo:wm,ceilPowerOfTwo:Am,floorPowerOfTwo:Cm,setQuaternionFromProperEuler:Rm,normalize:ie,denormalize:Rn};class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Xt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],m=i[s+3],h=r[a+0],p=r[a+1],_=r[a+2],S=r[a+3];if(m!==S||l!==h||c!==p||u!==_){let f=l*h+c*p+u*_+m*S;f<0&&(h=-h,p=-p,_=-_,S=-S,f=-f);let d=1-o;if(f<.9995){const g=Math.acos(f),b=Math.sin(g);d=Math.sin(d*g)/b,o=Math.sin(o*g)/b,l=l*d+h*o,c=c*d+p*o,u=u*d+_*o,m=m*d+S*o}else{l=l*d+h*o,c=c*d+p*o,u=u*d+_*o,m=m*d+S*o;const g=1/Math.sqrt(l*l+c*c+u*u+m*m);l*=g,c*=g,u*=g,m*=g}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=m}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],m=r[a],h=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+u*m+l*p-c*h,t[e+1]=l*_+u*h+c*m-o*p,t[e+2]=c*_+u*p+o*h-l*m,t[e+3]=u*_-o*m-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),m=o(r/2),h=l(i/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=h*u*m+c*p*_,this._y=c*p*m-h*u*_,this._z=c*u*_+h*p*m,this._w=c*u*m-h*p*_;break;case"YXZ":this._x=h*u*m+c*p*_,this._y=c*p*m-h*u*_,this._z=c*u*_-h*p*m,this._w=c*u*m+h*p*_;break;case"ZXY":this._x=h*u*m-c*p*_,this._y=c*p*m+h*u*_,this._z=c*u*_+h*p*m,this._w=c*u*m-h*p*_;break;case"ZYX":this._x=h*u*m-c*p*_,this._y=c*p*m+h*u*_,this._z=c*u*_-h*p*m,this._w=c*u*m+h*p*_;break;case"YZX":this._x=h*u*m+c*p*_,this._y=c*p*m+h*u*_,this._z=c*u*_-h*p*m,this._w=c*u*m-h*p*_;break;case"XZY":this._x=h*u*m-c*p*_,this._y=c*p*m-h*u*_,this._z=c*u*_+h*p*m,this._w=c*u*m+h*p*_;break;default:Pt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],m=e[10],h=i+o+m;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>m){const p=2*Math.sqrt(1+i-o-m);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>m){const p=2*Math.sqrt(1+o-i-m);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+m-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,i=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ad.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ad.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),m=2*(r*i-a*e);return this.x=e+l*c+a*m-o*u,this.y=i+l*u+o*c-r*m,this.z=s+l*m+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Wo.copy(this).projectOnVector(t),this.sub(Wo)}reflect(t){return this.sub(Wo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Xt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wo=new I,ad=new wi;class Bt{constructor(t,e,i,s,r,a,o,l,c){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],m=i[7],h=i[2],p=i[5],_=i[8],S=s[0],f=s[3],d=s[6],g=s[1],b=s[4],M=s[7],w=s[2],T=s[5],C=s[8];return r[0]=a*S+o*g+l*w,r[3]=a*f+o*b+l*T,r[6]=a*d+o*M+l*C,r[1]=c*S+u*g+m*w,r[4]=c*f+u*b+m*T,r[7]=c*d+u*M+m*C,r[2]=h*S+p*g+_*w,r[5]=h*f+p*b+_*T,r[8]=h*d+p*M+_*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],m=u*a-o*c,h=o*l-u*r,p=c*r-a*l,_=e*m+i*h+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return t[0]=m*S,t[1]=(s*c-u*i)*S,t[2]=(o*i-s*a)*S,t[3]=h*S,t[4]=(u*e-s*l)*S,t[5]=(s*r-o*e)*S,t[6]=p*S,t[7]=(i*l-c*e)*S,t[8]=(a*e-i*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Xo.makeScale(t,e)),this}rotate(t){return this.premultiply(Xo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xo=new Bt,od=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ld=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pm(){const n={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===te&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?Ua:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Oa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Oa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ds]:{primaries:t,whitePoint:i,transfer:Ua,toXYZ:od,fromXYZ:ld,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:t,whitePoint:i,transfer:te,toXYZ:od,fromXYZ:ld,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),n}const jt=Pm();function li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ji;class Dm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ji===void 0&&(Ji=Na("canvas")),Ji.width=t.width,Ji.height=t.height;const s=Ji.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ji}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Na("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=li(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(li(e[i]/255)*255):e[i]=li(e[i]);return{data:e,width:t.width,height:t.height}}else return Pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Im=0;class Wc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=oi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Yo(s[a].image)):r.push(Yo(s[a]))}else r=Yo(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Yo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Dm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Pt("Texture: Unable to serialize Texture."),{})}let Lm=0;const qo=new I;class qe extends Yi{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,i=ai,s=ai,r=We,a=Vi,o=Pn,l=hn,c=qe.DEFAULT_ANISOTROPY,u=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=oi(),this.name="",this.source=new Wc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qo).x}get height(){return this.source.getSize(qo).y}get depth(){return this.source.getSize(qo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Pt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Pt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rs:t.x=t.x-Math.floor(t.x);break;case ai:t.x=t.x<0?0:1;break;case Bl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rs:t.y=t.y-Math.floor(t.y);break;case ai:t.y=t.y<0?0:1;break;case Bl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Pu;qe.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,i=0,s=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],m=l[8],h=l[1],p=l[5],_=l[9],S=l[2],f=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(m-S)<.01&&Math.abs(_-f)<.01){if(Math.abs(u+h)<.1&&Math.abs(m+S)<.1&&Math.abs(_+f)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,M=(p+1)/2,w=(d+1)/2,T=(u+h)/4,C=(m+S)/4,x=(_+f)/4;return b>M&&b>w?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=T/i,r=C/i):M>w?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=x/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=C/r,s=x/r),this.set(i,s,r,e),this}let g=Math.sqrt((f-_)*(f-_)+(m-S)*(m-S)+(h-u)*(h-u));return Math.abs(g)<.001&&(g=1),this.x=(f-_)/g,this.y=(m-S)/g,this.z=(h-u)/g,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Um extends Yi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new qe(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:We,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Wc(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nn extends Um{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class zu extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nm extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class me{constructor(t,e,i,s,r,a,o,l,c,u,m,h,p,_,S,f){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,m,h,p,_,S,f)}set(t,e,i,s,r,a,o,l,c,u,m,h,p,_,S,f){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=m,d[14]=h,d[3]=p,d[7]=_,d[11]=S,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,s=1/Qi.setFromMatrixColumn(t,0).length(),r=1/Qi.setFromMatrixColumn(t,1).length(),a=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){const h=a*u,p=a*m,_=o*u,S=o*m;e[0]=l*u,e[4]=-l*m,e[8]=c,e[1]=p+_*c,e[5]=h-S*c,e[9]=-o*l,e[2]=S-h*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,p=l*m,_=c*u,S=c*m;e[0]=h+S*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*m,e[5]=a*u,e[9]=-o,e[2]=p*o-_,e[6]=S+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,p=l*m,_=c*u,S=c*m;e[0]=h-S*o,e[4]=-a*m,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*u,e[9]=S-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,p=a*m,_=o*u,S=o*m;e[0]=l*u,e[4]=_*c-p,e[8]=h*c+S,e[1]=l*m,e[5]=S*c+h,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,p=a*c,_=o*l,S=o*c;e[0]=l*u,e[4]=S-h*m,e[8]=_*m+p,e[1]=m,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*m+_,e[10]=h-S*m}else if(t.order==="XZY"){const h=a*l,p=a*c,_=o*l,S=o*c;e[0]=l*u,e[4]=-m,e[8]=c*u,e[1]=h*m+S,e[5]=a*u,e[9]=p*m-_,e[2]=_*m-p,e[6]=o*u,e[10]=S*m+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fm,t,Om)}lookAt(t,e,i){const s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),gi.crossVectors(i,ln),gi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),gi.crossVectors(i,ln)),gi.normalize(),Or.crossVectors(ln,gi),s[0]=gi.x,s[4]=Or.x,s[8]=ln.x,s[1]=gi.y,s[5]=Or.y,s[9]=ln.y,s[2]=gi.z,s[6]=Or.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],m=i[5],h=i[9],p=i[13],_=i[2],S=i[6],f=i[10],d=i[14],g=i[3],b=i[7],M=i[11],w=i[15],T=s[0],C=s[4],x=s[8],y=s[12],P=s[1],A=s[5],D=s[9],N=s[13],z=s[2],B=s[6],H=s[10],V=s[14],tt=s[3],Z=s[7],ut=s[11],_t=s[15];return r[0]=a*T+o*P+l*z+c*tt,r[4]=a*C+o*A+l*B+c*Z,r[8]=a*x+o*D+l*H+c*ut,r[12]=a*y+o*N+l*V+c*_t,r[1]=u*T+m*P+h*z+p*tt,r[5]=u*C+m*A+h*B+p*Z,r[9]=u*x+m*D+h*H+p*ut,r[13]=u*y+m*N+h*V+p*_t,r[2]=_*T+S*P+f*z+d*tt,r[6]=_*C+S*A+f*B+d*Z,r[10]=_*x+S*D+f*H+d*ut,r[14]=_*y+S*N+f*V+d*_t,r[3]=g*T+b*P+M*z+w*tt,r[7]=g*C+b*A+M*B+w*Z,r[11]=g*x+b*D+M*H+w*ut,r[15]=g*y+b*N+M*V+w*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],m=t[6],h=t[10],p=t[14],_=t[3],S=t[7],f=t[11],d=t[15],g=l*p-c*h,b=o*p-c*m,M=o*h-l*m,w=a*p-c*u,T=a*h-l*u,C=a*m-o*u;return e*(S*g-f*b+d*M)-i*(_*g-f*w+d*T)+s*(_*b-S*w+d*C)-r*(_*M-S*T+f*C)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],m=t[9],h=t[10],p=t[11],_=t[12],S=t[13],f=t[14],d=t[15],g=e*o-i*a,b=e*l-s*a,M=e*c-r*a,w=i*l-s*o,T=i*c-r*o,C=s*c-r*l,x=u*S-m*_,y=u*f-h*_,P=u*d-p*_,A=m*f-h*S,D=m*d-p*S,N=h*d-p*f,z=g*N-b*D+M*A+w*P-T*y+C*x;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/z;return t[0]=(o*N-l*D+c*A)*B,t[1]=(s*D-i*N-r*A)*B,t[2]=(S*C-f*T+d*w)*B,t[3]=(h*T-m*C-p*w)*B,t[4]=(l*P-a*N-c*y)*B,t[5]=(e*N-s*P+r*y)*B,t[6]=(f*M-_*C-d*b)*B,t[7]=(u*C-h*M+p*b)*B,t[8]=(a*D-o*P+c*x)*B,t[9]=(i*P-e*D-r*x)*B,t[10]=(_*T-S*M+d*g)*B,t[11]=(m*M-u*T-p*g)*B,t[12]=(o*y-a*A-l*x)*B,t[13]=(e*A-i*y+s*x)*B,t[14]=(S*b-_*w-f*g)*B,t[15]=(u*w-m*b+h*g)*B,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,m=o+o,h=r*c,p=r*u,_=r*m,S=a*u,f=a*m,d=o*m,g=l*c,b=l*u,M=l*m,w=i.x,T=i.y,C=i.z;return s[0]=(1-(S+d))*w,s[1]=(p+M)*w,s[2]=(_-b)*w,s[3]=0,s[4]=(p-M)*T,s[5]=(1-(h+d))*T,s[6]=(f+g)*T,s[7]=0,s[8]=(_+b)*C,s[9]=(f-g)*C,s[10]=(1-(h+S))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Qi.set(s[0],s[1],s[2]).length();const o=Qi.set(s[4],s[5],s[6]).length(),l=Qi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),bn.copy(this);const c=1/a,u=1/o,m=1/l;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=m,bn.elements[9]*=m,bn.elements[10]*=m,e.setFromRotationMatrix(bn),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=Vn,l=!1){const c=this.elements,u=2*r/(e-t),m=2*r/(i-s),h=(e+t)/(e-t),p=(i+s)/(i-s);let _,S;if(l)_=r/(a-r),S=a*r/(a-r);else if(o===Vn)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===cr)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=m,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Vn,l=!1){const c=this.elements,u=2/(e-t),m=2/(i-s),h=-(e+t)/(e-t),p=-(i+s)/(i-s);let _,S;if(l)_=1/(a-r),S=a/(a-r);else if(o===Vn)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===cr)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=m,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Qi=new I,bn=new me,Fm=new I(0,0,0),Om=new I(1,1,1),gi=new I,Or=new I,ln=new I,cd=new me,hd=new wi;class vn{constructor(t=0,e=0,i=0,s=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],m=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return cd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hd.setFromEuler(this),this.setFromQuaternion(hd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class Xc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bm=0;const dd=new I,ts=new wi,$n=new me,Br=new I,Hs=new I,zm=new I,Vm=new wi,ud=new I(1,0,0),fd=new I(0,1,0),pd=new I(0,0,1),md={type:"added"},km={type:"removed"},es={type:"childadded",child:null},jo={type:"childremoved",child:null};class Te extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new I,e=new vn,i=new wi,s=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Bt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.multiply(ts),this}rotateOnWorldAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.premultiply(ts),this}rotateX(t){return this.rotateOnAxis(ud,t)}rotateY(t){return this.rotateOnAxis(fd,t)}rotateZ(t){return this.rotateOnAxis(pd,t)}translateOnAxis(t,e){return dd.copy(t).applyQuaternion(this.quaternion),this.position.add(dd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ud,t)}translateY(t){return this.translateOnAxis(fd,t)}translateZ(t){return this.translateOnAxis(pd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Br.copy(t):Br.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Hs,Br,this.up):$n.lookAt(Br,Hs,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),ts.setFromRotationMatrix($n),this.quaternion.premultiply(ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(md),es.child=t,this.dispatchEvent(es),es.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(km),jo.child=t,this.dispatchEvent(jo),jo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(md),es.child=t,this.dispatchEvent(es),es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,t,zm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,Vm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const m=l[c];r(t.shapes,m)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),m=a(t.shapes),h=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),m.length>0&&(i.shapes=m),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Te.DEFAULT_UP=new I(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ee extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gm={type:"move"};class Ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const S of t.hand.values()){const f=e.getJointPose(S,i),d=this._getHandJoint(c,S);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}const u=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],h=u.position.distanceTo(m.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ee;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},zr={h:0,s:0,l:0};function Zo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class yt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,jt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=jt.workingColorSpace){if(t=Hc(t,1),e=Xt(e,0,1),i=Xt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Zo(a,r,t+1/3),this.g=Zo(a,r,t),this.b=Zo(a,r,t-1/3)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,e=gn){function i(r){r!==void 0&&parseFloat(r)<1&&Pt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Pt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Pt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){const i=Vu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Pt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return jt.workingToColorSpace(He.copy(this),t),Math.round(Xt(He.r*255,0,255))*65536+Math.round(Xt(He.g*255,0,255))*256+Math.round(Xt(He.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(He.copy(this),e);const i=He.r,s=He.g,r=He.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const m=a-o;switch(c=u<=.5?m/(a+o):m/(2-a-o),a){case i:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-i)/m+2;break;case r:l=(i-s)/m+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=gn){jt.workingToColorSpace(He.copy(this),t);const e=He.r,i=He.g,s=He.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(zr);const i=sr(_i.h,zr.h,e),s=sr(_i.s,zr.s,e),r=sr(_i.l,zr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new yt;yt.NAMES=Vu;class Yc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new yt(t),this.density=e}clone(){return new Yc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Hm extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const En=new I,Jn=new I,$o=new I,Qn=new I,ns=new I,is=new I,gd=new I,Jo=new I,Qo=new I,tl=new I,el=new ve,nl=new ve,il=new ve;class dn{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),En.subVectors(t,e),s.cross(En);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){En.subVectors(s,e),Jn.subVectors(i,e),$o.subVectors(t,e);const a=En.dot(En),o=En.dot(Jn),l=En.dot($o),c=Jn.dot(Jn),u=Jn.dot($o),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;const h=1/m,p=(c*l-o*u)*h,_=(a*u-o*l)*h;return r.set(1-p-_,_,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(a,Qn.y),l.addScaledVector(o,Qn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return el.setScalar(0),nl.setScalar(0),il.setScalar(0),el.fromBufferAttribute(t,e),nl.fromBufferAttribute(t,i),il.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(el,r.x),a.addScaledVector(nl,r.y),a.addScaledVector(il,r.z),a}static isFrontFacing(t,e,i,s){return En.subVectors(i,e),Jn.subVectors(t,e),En.cross(Jn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),En.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return dn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;ns.subVectors(s,i),is.subVectors(r,i),Jo.subVectors(t,i);const l=ns.dot(Jo),c=is.dot(Jo);if(l<=0&&c<=0)return e.copy(i);Qo.subVectors(t,s);const u=ns.dot(Qo),m=is.dot(Qo);if(u>=0&&m<=u)return e.copy(s);const h=l*m-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(ns,a);tl.subVectors(t,r);const p=ns.dot(tl),_=is.dot(tl);if(_>=0&&p<=_)return e.copy(r);const S=p*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(is,o);const f=u*_-p*m;if(f<=0&&m-u>=0&&p-_>=0)return gd.subVectors(r,s),o=(m-u)/(m-u+(p-_)),e.copy(s).addScaledVector(gd,o);const d=1/(f+S+h);return a=S*d,o=h*d,e.copy(i).addScaledVector(ns,a).addScaledVector(is,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class _r{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vr.copy(i.boundingBox)),Vr.applyMatrix4(t.matrixWorld),this.union(Vr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),kr.subVectors(this.max,Ws),ss.subVectors(t.a,Ws),rs.subVectors(t.b,Ws),as.subVectors(t.c,Ws),xi.subVectors(rs,ss),vi.subVectors(as,rs),Ri.subVectors(ss,as);let e=[0,-xi.z,xi.y,0,-vi.z,vi.y,0,-Ri.z,Ri.y,xi.z,0,-xi.x,vi.z,0,-vi.x,Ri.z,0,-Ri.x,-xi.y,xi.x,0,-vi.y,vi.x,0,-Ri.y,Ri.x,0];return!sl(e,ss,rs,as,kr)||(e=[1,0,0,0,1,0,0,0,1],!sl(e,ss,rs,as,kr))?!1:(Gr.crossVectors(xi,vi),e=[Gr.x,Gr.y,Gr.z],sl(e,ss,rs,as,kr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ti=[new I,new I,new I,new I,new I,new I,new I,new I],Tn=new I,Vr=new _r,ss=new I,rs=new I,as=new I,xi=new I,vi=new I,Ri=new I,Ws=new I,kr=new I,Gr=new I,Pi=new I;function sl(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Pi.fromArray(n,r);const o=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),l=t.dot(Pi),c=e.dot(Pi),u=i.dot(Pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ae=new I,Hr=new dt;let Wm=0;class Jt{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=_c,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Hr.fromBufferAttribute(this,e),Hr.applyMatrix3(t),this.setXY(e,Hr.x,Hr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Rn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ie(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_c&&(t.usage=this.usage),t}}class ku extends Jt{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Gu extends Jt{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Kt extends Jt{constructor(t,e,i){super(new Float32Array(t),e,i)}}const Xm=new _r,Xs=new I,rl=new I;class xr{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Xm.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);const e=Xs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Xs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(rl)),this.expandByPoint(Xs.copy(t.center).sub(rl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Ym=0;const mn=new me,al=new Te,os=new I,cn=new _r,Ys=new _r,Le=new I;class Nt extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hm(t)?Gu:ku)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Bt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,i){return mn.makeTranslation(t,e,i),this.applyMatrix4(mn),this}scale(t,e,i){return mn.makeScale(t,e,i),this.applyMatrix4(mn),this}lookAt(t){return al.lookAt(t),al.updateMatrix(),this.applyMatrix4(al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Kt(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _r);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(cn.min,Ys.min),cn.expandByPoint(Le),Le.addVectors(cn.max,Ys.max),cn.expandByPoint(Le)):(cn.expandByPoint(Ys.min),cn.expandByPoint(Ys.max))}cn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Le));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Le.fromBufferAttribute(o,c),l&&(os.fromBufferAttribute(t,c),Le.add(os)),s=Math.max(s,i.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new I,l[x]=new I;const c=new I,u=new I,m=new I,h=new dt,p=new dt,_=new dt,S=new I,f=new I;function d(x,y,P){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,y),m.fromBufferAttribute(i,P),h.fromBufferAttribute(r,x),p.fromBufferAttribute(r,y),_.fromBufferAttribute(r,P),u.sub(c),m.sub(c),p.sub(h),_.sub(h);const A=1/(p.x*_.y-_.x*p.y);isFinite(A)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(m,-p.y).multiplyScalar(A),f.copy(m).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(A),o[x].add(S),o[y].add(S),o[P].add(S),l[x].add(f),l[y].add(f),l[P].add(f))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let x=0,y=g.length;x<y;++x){const P=g[x],A=P.start,D=P.count;for(let N=A,z=A+D;N<z;N+=3)d(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const b=new I,M=new I,w=new I,T=new I;function C(x){w.fromBufferAttribute(s,x),T.copy(w);const y=o[x];b.copy(y),b.sub(w.multiplyScalar(w.dot(y))).normalize(),M.crossVectors(T,y);const A=M.dot(l[x])<0?-1:1;a.setXYZW(x,b.x,b.y,b.z,A)}for(let x=0,y=g.length;x<y;++x){const P=g[x],A=P.start,D=P.count;for(let N=A,z=A+D;N<z;N+=3)C(t.getX(N+0)),C(t.getX(N+1)),C(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jt(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,m=new I;if(t)for(let h=0,p=t.count;h<p;h+=3){const _=t.getX(h+0),S=t.getX(h+1),f=t.getX(h+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,f),u.subVectors(a,r),m.subVectors(s,r),u.cross(m),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,f),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),m.subVectors(s,r),u.cross(m),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,m=o.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let S=0,f=l.length;S<f;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new Jt(h,u,m)}if(this.index===null)return Pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Nt,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,m=c.length;u<m;u++){const h=c[u],p=t(h,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let m=0,h=c.length;m<h;m++){const p=c[m];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],m=r[c];for(let h=0,p=m.length;h<p;h++)u.push(m[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=_c,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ze=new I;class Ba{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Rn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ie(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Rn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Rn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Rn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Rn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Fa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Jt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ba(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Fa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let jm=0;class jn extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=Gi,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Pl,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Pt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Pt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(i.blending=this.blending),this.side!==Wn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rl&&(i.blendSrc=this.blendSrc),this.blendDst!==Pl&&(i.blendDst=this.blendDst),this.blendEquation!==Fi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Qa extends jn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ls;const qs=new I,cs=new I,hs=new I,ds=new dt,js=new dt,Hu=new me,Wr=new I,Ks=new I,Xr=new I,_d=new dt,ol=new dt,xd=new dt;class qc extends Te{constructor(t=new Qa){if(super(),this.isSprite=!0,this.type="Sprite",ls===void 0){ls=new Nt;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new qm(e,5);ls.setIndex([0,1,2,0,2,3]),ls.setAttribute("position",new Ba(i,3,0,!1)),ls.setAttribute("uv",new Ba(i,2,3,!1))}this.geometry=ls,this.material=t,this.center=new dt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),Hu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),hs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-hs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;Yr(Wr.set(-.5,-.5,0),hs,a,cs,s,r),Yr(Ks.set(.5,-.5,0),hs,a,cs,s,r),Yr(Xr.set(.5,.5,0),hs,a,cs,s,r),_d.set(0,0),ol.set(1,0),xd.set(1,1);let o=t.ray.intersectTriangle(Wr,Ks,Xr,!1,qs);if(o===null&&(Yr(Ks.set(-.5,.5,0),hs,a,cs,s,r),ol.set(0,1),o=t.ray.intersectTriangle(Wr,Xr,Ks,!1,qs),o===null))return;const l=t.ray.origin.distanceTo(qs);l<t.near||l>t.far||e.push({distance:l,point:qs.clone(),uv:dn.getInterpolation(qs,Wr,Ks,Xr,_d,ol,xd,new dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Yr(n,t,e,i,s,r){ds.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(js.x=r*ds.x-s*ds.y,js.y=s*ds.x+r*ds.y):js.copy(ds),n.copy(t),n.x+=js.x,n.y+=js.y,n.applyMatrix4(Hu)}const ei=new I,ll=new I,qr=new I,Mi=new I,cl=new I,jr=new I,hl=new I;class vr{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ll.copy(t).add(e).multiplyScalar(.5),qr.copy(e).sub(t).normalize(),Mi.copy(this.origin).sub(ll);const r=t.distanceTo(e)*.5,a=-this.direction.dot(qr),o=Mi.dot(this.direction),l=-Mi.dot(qr),c=Mi.lengthSq(),u=Math.abs(1-a*a);let m,h,p,_;if(u>0)if(m=a*l-o,h=a*o-l,_=r*u,m>=0)if(h>=-_)if(h<=_){const S=1/u;m*=S,h*=S,p=m*(m+a*h+2*o)+h*(a*m+h+2*l)+c}else h=r,m=Math.max(0,-(a*h+o)),p=-m*m+h*(h+2*l)+c;else h=-r,m=Math.max(0,-(a*h+o)),p=-m*m+h*(h+2*l)+c;else h<=-_?(m=Math.max(0,-(-a*r+o)),h=m>0?-r:Math.min(Math.max(-r,-l),r),p=-m*m+h*(h+2*l)+c):h<=_?(m=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(m=Math.max(0,-(a*r+o)),h=m>0?r:Math.min(Math.max(-r,-l),r),p=-m*m+h*(h+2*l)+c);else h=a>0?-r:r,m=Math.max(0,-(a*h+o)),p=-m*m+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(ll).addScaledVector(qr,h),p}intersectSphere(t,e){ei.subVectors(t.center,this.origin);const i=ei.dot(this.direction),s=ei.dot(ei)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,m=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(t.min.z-h.z)*m,l=(t.max.z-h.z)*m):(o=(t.max.z-h.z)*m,l=(t.min.z-h.z)*m),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,i,s,r){cl.subVectors(e,t),jr.subVectors(i,t),hl.crossVectors(cl,jr);let a=this.direction.dot(hl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mi.subVectors(this.origin,t);const l=o*this.direction.dot(jr.crossVectors(Mi,jr));if(l<0)return null;const c=o*this.direction.dot(cl.cross(Mi));if(c<0||l+c>a)return null;const u=-o*Mi.dot(hl);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn extends jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const vd=new me,Di=new vr,Kr=new xr,Md=new I,Zr=new I,$r=new I,Jr=new I,dl=new I,Qr=new I,yd=new I,ta=new I;class $ extends Te{constructor(t=new Nt,e=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],m=r[l];u!==0&&(dl.fromBufferAttribute(m,t),a?Qr.addScaledVector(dl,u):Qr.addScaledVector(dl.sub(e),u))}e.add(Qr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere),Kr.applyMatrix4(r),Di.copy(t.ray).recast(t.near),!(Kr.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Kr,Md)===null||Di.origin.distanceToSquared(Md)>(t.far-t.near)**2))&&(vd.copy(r).invert(),Di.copy(t.ray).applyMatrix4(vd),!(i.boundingBox!==null&&Di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Di)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,m=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const f=h[_],d=a[f.materialIndex],g=Math.max(f.start,p.start),b=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let M=g,w=b;M<w;M+=3){const T=o.getX(M),C=o.getX(M+1),x=o.getX(M+2);s=ea(this,d,t,i,c,u,m,T,C,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let f=_,d=S;f<d;f+=3){const g=o.getX(f),b=o.getX(f+1),M=o.getX(f+2);s=ea(this,a,t,i,c,u,m,g,b,M),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const f=h[_],d=a[f.materialIndex],g=Math.max(f.start,p.start),b=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let M=g,w=b;M<w;M+=3){const T=M,C=M+1,x=M+2;s=ea(this,d,t,i,c,u,m,T,C,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let f=_,d=S;f<d;f+=3){const g=f,b=f+1,M=f+2;s=ea(this,a,t,i,c,u,m,g,b,M),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function Km(n,t,e,i,s,r,a,o){let l;if(t.side===Ye?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Wn,o),l===null)return null;ta.copy(o),ta.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ta);return c<e.near||c>e.far?null:{distance:c,point:ta.clone(),object:n}}function ea(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Zr),n.getVertexPosition(l,$r),n.getVertexPosition(c,Jr);const u=Km(n,t,e,i,Zr,$r,Jr,yd);if(u){const m=new I;dn.getBarycoord(yd,Zr,$r,Jr,m),s&&(u.uv=dn.getInterpolatedAttribute(s,o,l,c,m,new dt)),r&&(u.uv1=dn.getInterpolatedAttribute(r,o,l,c,m,new dt)),a&&(u.normal=dn.getInterpolatedAttribute(a,o,l,c,m,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new I,materialIndex:0};dn.getNormal(Zr,$r,Jr,h.normal),u.face=h,u.barycoord=m}return u}class Zm extends qe{constructor(t=null,e=1,i=1,s,r,a,o,l,c=ze,u=ze,m,h){super(null,a,o,l,c,u,s,r,m,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ul=new I,$m=new I,Jm=new Bt;class Si{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ul.subVectors(i,e).cross($m.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ul),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Jm.getNormalMatrix(t),s=this.coplanarPoint(ul).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new xr,Qm=new dt(.5,.5),na=new I;class jc{constructor(t=new Si,e=new Si,i=new Si,s=new Si,r=new Si,a=new Si){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Vn,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],m=r[5],h=r[6],p=r[7],_=r[8],S=r[9],f=r[10],d=r[11],g=r[12],b=r[13],M=r[14],w=r[15];if(s[0].setComponents(c-a,p-u,d-_,w-g).normalize(),s[1].setComponents(c+a,p+u,d+_,w+g).normalize(),s[2].setComponents(c+o,p+m,d+S,w+b).normalize(),s[3].setComponents(c-o,p-m,d-S,w-b).normalize(),i)s[4].setComponents(l,h,f,M).normalize(),s[5].setComponents(c-l,p-h,d-f,w-M).normalize();else if(s[4].setComponents(c-l,p-h,d-f,w-M).normalize(),e===Vn)s[5].setComponents(c+l,p+h,d+f,w+M).normalize();else if(e===cr)s[5].setComponents(l,h,f,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(t){Ii.center.set(0,0,0);const e=Qm.distanceTo(t.center);return Ii.radius=.7071067811865476+e,Ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(na.x=s.normal.x>0?t.max.x:t.min.x,na.y=s.normal.y>0?t.max.y:t.min.y,na.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(na)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class to extends jn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const za=new I,Va=new I,Sd=new me,Zs=new vr,ia=new xr,fl=new I,bd=new I;class eo extends Te{constructor(t=new Nt,e=new to){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)za.fromBufferAttribute(e,s-1),Va.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=za.distanceTo(Va);t.setAttribute("lineDistance",new Kt(i,1))}else Pt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ia.copy(i.boundingSphere),ia.applyMatrix4(s),ia.radius+=r,t.ray.intersectsSphere(ia)===!1)return;Sd.copy(s).invert(),Zs.copy(t.ray).applyMatrix4(Sd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let S=p,f=_-1;S<f;S+=c){const d=u.getX(S),g=u.getX(S+1),b=sa(this,t,Zs,l,d,g,S);b&&e.push(b)}if(this.isLineLoop){const S=u.getX(_-1),f=u.getX(p),d=sa(this,t,Zs,l,S,f,_-1);d&&e.push(d)}}else{const p=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let S=p,f=_-1;S<f;S+=c){const d=sa(this,t,Zs,l,S,S+1,S);d&&e.push(d)}if(this.isLineLoop){const S=sa(this,t,Zs,l,_-1,p,_-1);S&&e.push(S)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function sa(n,t,e,i,s,r,a){const o=n.geometry.attributes.position;if(za.fromBufferAttribute(o,s),Va.fromBufferAttribute(o,r),e.distanceSqToSegment(za,Va,fl,bd)>i)return;fl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(fl);if(!(c<t.near||c>t.far))return{distance:c,point:bd.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Ed=new I,Td=new I;class t0 extends eo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Ed.fromBufferAttribute(e,s),Td.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ed.distanceTo(Td);t.setAttribute("lineDistance",new Kt(i,1))}else Pt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mr extends jn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const wd=new me,xc=new vr,ra=new xr,aa=new I;class no extends Te{constructor(t=new Nt,e=new Mr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ra.copy(i.boundingSphere),ra.applyMatrix4(s),ra.radius+=r,t.ray.intersectsSphere(ra)===!1)return;wd.copy(s).invert(),xc.copy(t.ray).applyMatrix4(wd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,m=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=h,S=p;_<S;_++){const f=c.getX(_);aa.fromBufferAttribute(m,f),Ad(aa,f,l,s,t,e,this)}}else{const h=Math.max(0,a.start),p=Math.min(m.count,a.start+a.count);for(let _=h,S=p;_<S;_++)aa.fromBufferAttribute(m,_),Ad(aa,_,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ad(n,t,e,i,s,r,a){const o=xc.distanceSqToPoint(n);if(o<e){const l=new I;xc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Wu extends qe{constructor(t=[],e=Hi,i,s,r,a,o,l,c,u){super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yn extends qe{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dr extends qe{constructor(t,e,i=Xn,s,r,a,o=ze,l=ze,c,u=hi,m=1){if(u!==hi&&u!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:m};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class e0 extends dr{constructor(t,e=Xn,i=Hi,s,r,a=ze,o=ze,l,c=hi){const u={width:t,height:t,depth:1},m=[u,u,u,u,u,u];super(t,t,e,i,s,r,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Xu extends qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Je extends Nt{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],m=[];let h=0,p=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,s,a,2),_("x","z","y",1,-1,t,i,-e,s,a,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(m,2));function _(S,f,d,g,b,M,w,T,C,x,y){const P=M/C,A=w/x,D=M/2,N=w/2,z=T/2,B=C+1,H=x+1;let V=0,tt=0;const Z=new I;for(let ut=0;ut<H;ut++){const _t=ut*A-N;for(let pt=0;pt<B;pt++){const Vt=pt*P-D;Z[S]=Vt*g,Z[f]=_t*b,Z[d]=z,c.push(Z.x,Z.y,Z.z),Z[S]=0,Z[f]=0,Z[d]=T>0?1:-1,u.push(Z.x,Z.y,Z.z),m.push(pt/C),m.push(1-ut/x),V+=1}}for(let ut=0;ut<x;ut++)for(let _t=0;_t<C;_t++){const pt=h+_t+B*ut,Vt=h+_t+B*(ut+1),_e=h+(_t+1)+B*(ut+1),ge=h+(_t+1)+B*ut;l.push(pt,Vt,ge),l.push(Vt,_e,ge),tt+=6}o.addGroup(p,tt,y),p+=tt,h+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Je(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Kc extends Nt{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],u=e/2,m=Math.PI/2*t,h=e,p=2*m+h,_=i*2+r,S=s+1,f=new I,d=new I;for(let g=0;g<=_;g++){let b=0,M=0,w=0,T=0;if(g<=i){const y=g/i,P=y*Math.PI/2;M=-u-t*Math.cos(P),w=t*Math.sin(P),T=-t*Math.cos(P),b=y*m}else if(g<=i+r){const y=(g-i)/r;M=-u+y*e,w=t,T=0,b=m+y*h}else{const y=(g-i-r)/i,P=y*Math.PI/2;M=u+t*Math.sin(P),w=t*Math.cos(P),T=t*Math.sin(P),b=m+h+y*m}const C=Math.max(0,Math.min(1,b/p));let x=0;g===0?x=.5/s:g===_&&(x=-.5/s);for(let y=0;y<=s;y++){const P=y/s,A=P*Math.PI*2,D=Math.sin(A),N=Math.cos(A);d.x=-w*N,d.y=M,d.z=w*D,o.push(d.x,d.y,d.z),f.set(-w*N,T,w*D),f.normalize(),l.push(f.x,f.y,f.z),c.push(P+x,C)}if(g>0){const y=(g-1)*S;for(let P=0;P<s;P++){const A=y+P,D=y+P+1,N=g*S+P,z=g*S+P+1;a.push(A,D,N),a.push(D,z,N)}}}this.setIndex(a),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kc(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Zc extends Nt{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new I,u=new dt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let m=0,h=3;m<=e;m++,h+=3){const p=i+m/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,l.push(u.x,u.y)}for(let m=1;m<=e;m++)r.push(m,m+1,0);this.setIndex(r),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(o,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Fe extends Nt{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],m=[],h=[],p=[];let _=0;const S=[],f=i/2;let d=0;g(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Kt(m,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(p,2));function g(){const M=new I,w=new I;let T=0;const C=(e-t)/i;for(let x=0;x<=r;x++){const y=[],P=x/r,A=P*(e-t)+t;for(let D=0;D<=s;D++){const N=D/s,z=N*l+o,B=Math.sin(z),H=Math.cos(z);w.x=A*B,w.y=-P*i+f,w.z=A*H,m.push(w.x,w.y,w.z),M.set(B,C,H).normalize(),h.push(M.x,M.y,M.z),p.push(N,1-P),y.push(_++)}S.push(y)}for(let x=0;x<s;x++)for(let y=0;y<r;y++){const P=S[y][x],A=S[y+1][x],D=S[y+1][x+1],N=S[y][x+1];(t>0||y!==0)&&(u.push(P,A,N),T+=3),(e>0||y!==r-1)&&(u.push(A,D,N),T+=3)}c.addGroup(d,T,0),d+=T}function b(M){const w=_,T=new dt,C=new I;let x=0;const y=M===!0?t:e,P=M===!0?1:-1;for(let D=1;D<=s;D++)m.push(0,f*P,0),h.push(0,P,0),p.push(.5,.5),_++;const A=_;for(let D=0;D<=s;D++){const z=D/s*l+o,B=Math.cos(z),H=Math.sin(z);C.x=y*H,C.y=f*P,C.z=y*B,m.push(C.x,C.y,C.z),h.push(0,P,0),T.x=B*.5+.5,T.y=H*.5*P+.5,p.push(T.x,T.y),_++}for(let D=0;D<s;D++){const N=w+D,z=A+D;M===!0?u.push(z,z+1,N):u.push(z+1,z,N),x+=3}c.addGroup(d,x,M===!0?1:2),d+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class io extends Nt{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),c(i),u(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(g){const b=new I,M=new I,w=new I;for(let T=0;T<e.length;T+=3)p(e[T+0],b),p(e[T+1],M),p(e[T+2],w),l(b,M,w,g)}function l(g,b,M,w){const T=w+1,C=[];for(let x=0;x<=T;x++){C[x]=[];const y=g.clone().lerp(M,x/T),P=b.clone().lerp(M,x/T),A=T-x;for(let D=0;D<=A;D++)D===0&&x===T?C[x][D]=y:C[x][D]=y.clone().lerp(P,D/A)}for(let x=0;x<T;x++)for(let y=0;y<2*(T-x)-1;y++){const P=Math.floor(y/2);y%2===0?(h(C[x][P+1]),h(C[x+1][P]),h(C[x][P])):(h(C[x][P+1]),h(C[x+1][P+1]),h(C[x+1][P]))}}function c(g){const b=new I;for(let M=0;M<r.length;M+=3)b.x=r[M+0],b.y=r[M+1],b.z=r[M+2],b.normalize().multiplyScalar(g),r[M+0]=b.x,r[M+1]=b.y,r[M+2]=b.z}function u(){const g=new I;for(let b=0;b<r.length;b+=3){g.x=r[b+0],g.y=r[b+1],g.z=r[b+2];const M=f(g)/2/Math.PI+.5,w=d(g)/Math.PI+.5;a.push(M,1-w)}_(),m()}function m(){for(let g=0;g<a.length;g+=6){const b=a[g+0],M=a[g+2],w=a[g+4],T=Math.max(b,M,w),C=Math.min(b,M,w);T>.9&&C<.1&&(b<.2&&(a[g+0]+=1),M<.2&&(a[g+2]+=1),w<.2&&(a[g+4]+=1))}}function h(g){r.push(g.x,g.y,g.z)}function p(g,b){const M=g*3;b.x=t[M+0],b.y=t[M+1],b.z=t[M+2]}function _(){const g=new I,b=new I,M=new I,w=new I,T=new dt,C=new dt,x=new dt;for(let y=0,P=0;y<r.length;y+=9,P+=6){g.set(r[y+0],r[y+1],r[y+2]),b.set(r[y+3],r[y+4],r[y+5]),M.set(r[y+6],r[y+7],r[y+8]),T.set(a[P+0],a[P+1]),C.set(a[P+2],a[P+3]),x.set(a[P+4],a[P+5]),w.copy(g).add(b).add(M).divideScalar(3);const A=f(w);S(T,P+0,g,A),S(C,P+2,b,A),S(x,P+4,M,A)}}function S(g,b,M,w){w<0&&g.x===1&&(a[b]=g.x-1),M.x===0&&M.z===0&&(a[b]=w/2/Math.PI+.5)}function f(g){return Math.atan2(g.z,-g.x)}function d(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new io(t.vertices,t.indices,t.radius,t.detail)}}class so extends io{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new so(t.radius,t.detail)}}const oa=new I,la=new I,pl=new I,ca=new dn;class n0 extends Nt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Ss*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],m=new Array(3),h={},p=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:S,b:f,c:d}=ca;if(S.fromBufferAttribute(o,c[0]),f.fromBufferAttribute(o,c[1]),d.fromBufferAttribute(o,c[2]),ca.getNormal(pl),m[0]=`${Math.round(S.x*s)},${Math.round(S.y*s)},${Math.round(S.z*s)}`,m[1]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,m[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(m[0]===m[1]||m[1]===m[2]||m[2]===m[0]))for(let g=0;g<3;g++){const b=(g+1)%3,M=m[g],w=m[b],T=ca[u[g]],C=ca[u[b]],x=`${M}_${w}`,y=`${w}_${M}`;y in h&&h[y]?(pl.dot(h[y].normal)<=r&&(p.push(T.x,T.y,T.z),p.push(C.x,C.y,C.z)),h[y]=null):x in h||(h[x]={index0:c[g],index1:c[b],normal:pl.clone()})}}for(const _ in h)if(h[_]){const{index0:S,index1:f}=h[_];oa.fromBufferAttribute(o,S),la.fromBufferAttribute(o,f),p.push(oa.x,oa.y,oa.z),p.push(la.x,la.y,la.z)}this.setAttribute("position",new Kt(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Es extends io{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Es(t.radius,t.detail)}}class rn extends Nt{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,m=t/o,h=e/l,p=[],_=[],S=[],f=[];for(let d=0;d<u;d++){const g=d*h-a;for(let b=0;b<c;b++){const M=b*m-r;_.push(M,-g,0),S.push(0,0,1),f.push(b/o),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<o;g++){const b=g+c*d,M=g+c*(d+1),w=g+1+c*(d+1),T=g+1+c*d;p.push(b,M,T),p.push(M,w,T)}this.setIndex(p),this.setAttribute("position",new Kt(_,3)),this.setAttribute("normal",new Kt(S,3)),this.setAttribute("uv",new Kt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.width,t.height,t.widthSegments,t.heightSegments)}}class be extends Nt{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],m=new I,h=new I,p=[],_=[],S=[],f=[];for(let d=0;d<=i;d++){const g=[],b=d/i;let M=0;d===0&&a===0?M=.5/e:d===i&&l===Math.PI&&(M=-.5/e);for(let w=0;w<=e;w++){const T=w/e;m.x=-t*Math.cos(s+T*r)*Math.sin(a+b*o),m.y=t*Math.cos(a+b*o),m.z=t*Math.sin(s+T*r)*Math.sin(a+b*o),_.push(m.x,m.y,m.z),h.copy(m).normalize(),S.push(h.x,h.y,h.z),f.push(T+M,1-b),g.push(c++)}u.push(g)}for(let d=0;d<i;d++)for(let g=0;g<e;g++){const b=u[d][g+1],M=u[d][g],w=u[d+1][g],T=u[d+1][g+1];(d!==0||a>0)&&p.push(b,M,T),(d!==i-1||l<Math.PI)&&p.push(M,w,T)}this.setIndex(p),this.setAttribute("position",new Kt(_,3)),this.setAttribute("normal",new Kt(S,3)),this.setAttribute("uv",new Kt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class yr extends Nt{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],u=[],m=[],h=new I,p=new I,_=new I;for(let S=0;S<=i;S++){const f=a+S/i*o;for(let d=0;d<=s;d++){const g=d/s*r;p.x=(t+e*Math.cos(f))*Math.cos(g),p.y=(t+e*Math.cos(f))*Math.sin(g),p.z=e*Math.sin(f),c.push(p.x,p.y,p.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),_.subVectors(p,h).normalize(),u.push(_.x,_.y,_.z),m.push(d/s),m.push(S/i)}}for(let S=1;S<=i;S++)for(let f=1;f<=s;f++){const d=(s+1)*S+f-1,g=(s+1)*(S-1)+f-1,b=(s+1)*(S-1)+f,M=(s+1)*S+f;l.push(d,g,M),l.push(g,b,M)}this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function Is(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function $e(n){const t={};for(let e=0;e<n.length;e++){const i=Is(n[e]);for(const s in i)t[s]=i[s]}return t}function i0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Yu(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const ur={clone:Is,merge:$e};var s0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xe extends jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s0,this.fragmentShader=r0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=i0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class qu extends Xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ht extends jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ja,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class a0 extends jn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new yt(16777215),this.specular=new yt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ja,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Ka,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ha extends jn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ja,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Ka,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class o0 extends jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class l0 extends jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ro extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class c0 extends ro{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ml=new me,Cd=new I,Rd=new I;class ju{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jc,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Cd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cd),Rd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rd),e.updateMatrixWorld(),ml.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ml,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===cr||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ml)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const da=new I,ua=new wi,Un=new I;class Ku extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(da,ua,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(da,ua,Un.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(da,ua,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(da,ua,Un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const yi=new I,Pd=new dt,Dd=new dt;class tn extends Ku{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hr*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,Pd,Dd),e.subVectors(Dd,Pd)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ss*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class h0 extends ju{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}}class Sr extends ro{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new h0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class ao extends Ku{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class d0 extends ju{constructor(){super(new ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $c extends ro{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new d0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class u0 extends ro{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const us=-90,fs=1;class f0 extends Te{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(us,fs,t,e);s.layers=this.layers,this.add(s);const r=new tn(us,fs,t,e);r.layers=this.layers,this.add(r);const a=new tn(us,fs,t,e);a.layers=this.layers,this.add(a);const o=new tn(us,fs,t,e);o.layers=this.layers,this.add(o);const l=new tn(us,fs,t,e);l.layers=this.layers,this.add(l);const c=new tn(us,fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===cr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,m=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(m,h,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class p0 extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class m0{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=g0.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function g0(){this._document.hidden===!1&&this.reset()}const Id=new me;class _0{constructor(t,e,i=0,s=1/0){this.ray=new vr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Xc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):qt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Id.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Id),this}intersectObject(t,e=!0,i=[]){return vc(t,this,i,e),i.sort(Ld),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)vc(t[s],this,i,e);return i.sort(Ld),i}}function Ld(n,t){return n.distance-t.distance}function vc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)vc(r[a],t,e,!0)}}class x0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Pt("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class Ud{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Xt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class v0 extends Yi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Pt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Nd(n,t,e,i){const s=M0(i);switch(e){case Nu:return n*t;case Ou:return n*t/s.components*s.byteLength;case Bc:return n*t/s.components*s.byteLength;case Ps:return n*t*2/s.components*s.byteLength;case zc:return n*t*2/s.components*s.byteLength;case Fu:return n*t*3/s.components*s.byteLength;case Pn:return n*t*4/s.components*s.byteLength;case Vc:return n*t*4/s.components*s.byteLength;case Ea:case Ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case wa:case Aa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Vl:case Gl:return Math.max(n,16)*Math.max(t,8)/4;case zl:case kl:return Math.max(n,8)*Math.max(t,8)/2;case Hl:case Wl:case Yl:case ql:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Xl:case jl:case Kl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Zl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case $l:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Jl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case tc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ec:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case nc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ic:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case sc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case rc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ac:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case oc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case lc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case cc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case hc:case dc:case uc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case fc:case pc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case mc:case gc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function M0(n){switch(n){case hn:case Du:return{byteLength:1,components:1};case or:case Iu:case un:return{byteLength:2,components:1};case Fc:case Oc:return{byteLength:2,components:4};case Xn:case Nc:case zn:return{byteLength:4,components:1};case Lu:case Uu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cc}}));typeof window<"u"&&(window.__THREE__?Pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zu(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function y0(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,m=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function i(o,l,c){const u=l.array,m=l.updateRanges;if(n.bindBuffer(c,o),m.length===0)n.bufferSubData(c,0,u);else{m.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<m.length;p++){const _=m[h],S=m[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,m[h]=S)}m.length=h+1;for(let p=0,_=m.length;p<_;p++){const S=m[p];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var S0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,E0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,T0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,R0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,D0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,I0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,L0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,N0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,F0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,k0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,G0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,H0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,W0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,X0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Y0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,q0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,eg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ng=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ig=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ag=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,og=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ug=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_g=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Eg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ag=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ig=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ug=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ng=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Og=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,$g=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,s_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,r_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,a_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,o_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,c_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,d_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,m_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,g_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,__=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,x_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,M_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const y_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,C_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,R_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,P_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,D_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,I_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,U_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,F_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,V_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,G_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,H_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Y_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Z_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:S0,alphahash_pars_fragment:b0,alphamap_fragment:E0,alphamap_pars_fragment:T0,alphatest_fragment:w0,alphatest_pars_fragment:A0,aomap_fragment:C0,aomap_pars_fragment:R0,batching_pars_vertex:P0,batching_vertex:D0,begin_vertex:I0,beginnormal_vertex:L0,bsdfs:U0,iridescence_fragment:N0,bumpmap_pars_fragment:F0,clipping_planes_fragment:O0,clipping_planes_pars_fragment:B0,clipping_planes_pars_vertex:z0,clipping_planes_vertex:V0,color_fragment:k0,color_pars_fragment:G0,color_pars_vertex:H0,color_vertex:W0,common:X0,cube_uv_reflection_fragment:Y0,defaultnormal_vertex:q0,displacementmap_pars_vertex:j0,displacementmap_vertex:K0,emissivemap_fragment:Z0,emissivemap_pars_fragment:$0,colorspace_fragment:J0,colorspace_pars_fragment:Q0,envmap_fragment:tg,envmap_common_pars_fragment:eg,envmap_pars_fragment:ng,envmap_pars_vertex:ig,envmap_physical_pars_fragment:pg,envmap_vertex:sg,fog_vertex:rg,fog_pars_vertex:ag,fog_fragment:og,fog_pars_fragment:lg,gradientmap_pars_fragment:cg,lightmap_pars_fragment:hg,lights_lambert_fragment:dg,lights_lambert_pars_fragment:ug,lights_pars_begin:fg,lights_toon_fragment:mg,lights_toon_pars_fragment:gg,lights_phong_fragment:_g,lights_phong_pars_fragment:xg,lights_physical_fragment:vg,lights_physical_pars_fragment:Mg,lights_fragment_begin:yg,lights_fragment_maps:Sg,lights_fragment_end:bg,logdepthbuf_fragment:Eg,logdepthbuf_pars_fragment:Tg,logdepthbuf_pars_vertex:wg,logdepthbuf_vertex:Ag,map_fragment:Cg,map_pars_fragment:Rg,map_particle_fragment:Pg,map_particle_pars_fragment:Dg,metalnessmap_fragment:Ig,metalnessmap_pars_fragment:Lg,morphinstance_vertex:Ug,morphcolor_vertex:Ng,morphnormal_vertex:Fg,morphtarget_pars_vertex:Og,morphtarget_vertex:Bg,normal_fragment_begin:zg,normal_fragment_maps:Vg,normal_pars_fragment:kg,normal_pars_vertex:Gg,normal_vertex:Hg,normalmap_pars_fragment:Wg,clearcoat_normal_fragment_begin:Xg,clearcoat_normal_fragment_maps:Yg,clearcoat_pars_fragment:qg,iridescence_pars_fragment:jg,opaque_fragment:Kg,packing:Zg,premultiplied_alpha_fragment:$g,project_vertex:Jg,dithering_fragment:Qg,dithering_pars_fragment:t_,roughnessmap_fragment:e_,roughnessmap_pars_fragment:n_,shadowmap_pars_fragment:i_,shadowmap_pars_vertex:s_,shadowmap_vertex:r_,shadowmask_pars_fragment:a_,skinbase_vertex:o_,skinning_pars_vertex:l_,skinning_vertex:c_,skinnormal_vertex:h_,specularmap_fragment:d_,specularmap_pars_fragment:u_,tonemapping_fragment:f_,tonemapping_pars_fragment:p_,transmission_fragment:m_,transmission_pars_fragment:g_,uv_pars_fragment:__,uv_pars_vertex:x_,uv_vertex:v_,worldpos_vertex:M_,background_vert:y_,background_frag:S_,backgroundCube_vert:b_,backgroundCube_frag:E_,cube_vert:T_,cube_frag:w_,depth_vert:A_,depth_frag:C_,distance_vert:R_,distance_frag:P_,equirect_vert:D_,equirect_frag:I_,linedashed_vert:L_,linedashed_frag:U_,meshbasic_vert:N_,meshbasic_frag:F_,meshlambert_vert:O_,meshlambert_frag:B_,meshmatcap_vert:z_,meshmatcap_frag:V_,meshnormal_vert:k_,meshnormal_frag:G_,meshphong_vert:H_,meshphong_frag:W_,meshphysical_vert:X_,meshphysical_frag:Y_,meshtoon_vert:q_,meshtoon_frag:j_,points_vert:K_,points_frag:Z_,shadow_vert:$_,shadow_frag:J_,sprite_vert:Q_,sprite_frag:tx},ot={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},On={basic:{uniforms:$e([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:$e([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new yt(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:$e([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:$e([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:$e([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new yt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:$e([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:$e([ot.points,ot.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:$e([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:$e([ot.common,ot.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:$e([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:$e([ot.sprite,ot.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:$e([ot.common,ot.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:$e([ot.lights,ot.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};On.physical={uniforms:$e([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const fa={r:0,b:0,g:0},Li=new vn,ex=new me;function nx(n,t,e,i,s,r){const a=new yt(0);let o=s===!0?0:1,l,c,u=null,m=0,h=null;function p(g){let b=g.isScene===!0?g.background:null;if(b&&b.isTexture){const M=g.backgroundBlurriness>0;b=t.get(b,M)}return b}function _(g){let b=!1;const M=p(g);M===null?f(a,o):M&&M.isColor&&(f(M,1),b=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(g,b){const M=p(b);M&&(M.isCubeTexture||M.mapping===$a)?(c===void 0&&(c=new $(new Je(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:Is(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Li.copy(b.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ex.makeRotationFromEuler(Li)),c.material.toneMapped=jt.getTransfer(M.colorSpace)!==te,(u!==M||m!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,m=M.version,h=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new $(new rn(2,2),new Xe({name:"BackgroundMaterial",uniforms:Is(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=jt.getTransfer(M.colorSpace)!==te,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||m!==M.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,m=M.version,h=n.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function f(g,b){g.getRGB(fa,Yu(n)),e.buffers.color.setClear(fa.r,fa.g,fa.b,b,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,b=1){a.set(g),o=b,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,f(a,o)},render:_,addToRenderList:S,dispose:d}}function ix(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(A,D,N,z,B){let H=!1;const V=m(A,z,N,D);r!==V&&(r=V,c(r.object)),H=p(A,z,N,B),H&&_(A,z,N,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,M(A,D,N,z),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return n.createVertexArray()}function c(A){return n.bindVertexArray(A)}function u(A){return n.deleteVertexArray(A)}function m(A,D,N,z){const B=z.wireframe===!0;let H=i[D.id];H===void 0&&(H={},i[D.id]=H);const V=A.isInstancedMesh===!0?A.id:0;let tt=H[V];tt===void 0&&(tt={},H[V]=tt);let Z=tt[N.id];Z===void 0&&(Z={},tt[N.id]=Z);let ut=Z[B];return ut===void 0&&(ut=h(l()),Z[B]=ut),ut}function h(A){const D=[],N=[],z=[];for(let B=0;B<e;B++)D[B]=0,N[B]=0,z[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:z,object:A,attributes:{},index:null}}function p(A,D,N,z){const B=r.attributes,H=D.attributes;let V=0;const tt=N.getAttributes();for(const Z in tt)if(tt[Z].location>=0){const _t=B[Z];let pt=H[Z];if(pt===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(pt=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(pt=A.instanceColor)),_t===void 0||_t.attribute!==pt||pt&&_t.data!==pt.data)return!0;V++}return r.attributesNum!==V||r.index!==z}function _(A,D,N,z){const B={},H=D.attributes;let V=0;const tt=N.getAttributes();for(const Z in tt)if(tt[Z].location>=0){let _t=H[Z];_t===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(_t=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(_t=A.instanceColor));const pt={};pt.attribute=_t,_t&&_t.data&&(pt.data=_t.data),B[Z]=pt,V++}r.attributes=B,r.attributesNum=V,r.index=z}function S(){const A=r.newAttributes;for(let D=0,N=A.length;D<N;D++)A[D]=0}function f(A){d(A,0)}function d(A,D){const N=r.newAttributes,z=r.enabledAttributes,B=r.attributeDivisors;N[A]=1,z[A]===0&&(n.enableVertexAttribArray(A),z[A]=1),B[A]!==D&&(n.vertexAttribDivisor(A,D),B[A]=D)}function g(){const A=r.newAttributes,D=r.enabledAttributes;for(let N=0,z=D.length;N<z;N++)D[N]!==A[N]&&(n.disableVertexAttribArray(N),D[N]=0)}function b(A,D,N,z,B,H,V){V===!0?n.vertexAttribIPointer(A,D,N,B,H):n.vertexAttribPointer(A,D,N,z,B,H)}function M(A,D,N,z){S();const B=z.attributes,H=N.getAttributes(),V=D.defaultAttributeValues;for(const tt in H){const Z=H[tt];if(Z.location>=0){let ut=B[tt];if(ut===void 0&&(tt==="instanceMatrix"&&A.instanceMatrix&&(ut=A.instanceMatrix),tt==="instanceColor"&&A.instanceColor&&(ut=A.instanceColor)),ut!==void 0){const _t=ut.normalized,pt=ut.itemSize,Vt=t.get(ut);if(Vt===void 0)continue;const _e=Vt.buffer,ge=Vt.type,j=Vt.bytesPerElement,it=ge===n.INT||ge===n.UNSIGNED_INT||ut.gpuType===Nc;if(ut.isInterleavedBufferAttribute){const at=ut.data,Ot=at.stride,Rt=ut.offset;if(at.isInstancedInterleavedBuffer){for(let Lt=0;Lt<Z.locationSize;Lt++)d(Z.location+Lt,at.meshPerAttribute);A.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Lt=0;Lt<Z.locationSize;Lt++)f(Z.location+Lt);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let Lt=0;Lt<Z.locationSize;Lt++)b(Z.location+Lt,pt/Z.locationSize,ge,_t,Ot*j,(Rt+pt/Z.locationSize*Lt)*j,it)}else{if(ut.isInstancedBufferAttribute){for(let at=0;at<Z.locationSize;at++)d(Z.location+at,ut.meshPerAttribute);A.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let at=0;at<Z.locationSize;at++)f(Z.location+at);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let at=0;at<Z.locationSize;at++)b(Z.location+at,pt/Z.locationSize,ge,_t,pt*j,pt/Z.locationSize*at*j,it)}}else if(V!==void 0){const _t=V[tt];if(_t!==void 0)switch(_t.length){case 2:n.vertexAttrib2fv(Z.location,_t);break;case 3:n.vertexAttrib3fv(Z.location,_t);break;case 4:n.vertexAttrib4fv(Z.location,_t);break;default:n.vertexAttrib1fv(Z.location,_t)}}}}g()}function w(){y();for(const A in i){const D=i[A];for(const N in D){const z=D[N];for(const B in z){const H=z[B];for(const V in H)u(H[V].object),delete H[V];delete z[B]}}delete i[A]}}function T(A){if(i[A.id]===void 0)return;const D=i[A.id];for(const N in D){const z=D[N];for(const B in z){const H=z[B];for(const V in H)u(H[V].object),delete H[V];delete z[B]}}delete i[A.id]}function C(A){for(const D in i){const N=i[D];for(const z in N){const B=N[z];if(B[A.id]===void 0)continue;const H=B[A.id];for(const V in H)u(H[V].object),delete H[V];delete B[A.id]}}}function x(A){for(const D in i){const N=i[D],z=A.isInstancedMesh===!0?A.id:0,B=N[z];if(B!==void 0){for(const H in B){const V=B[H];for(const tt in V)u(V[tt].object),delete V[tt];delete B[H]}delete N[z],Object.keys(N).length===0&&delete i[D]}}}function y(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:y,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:f,disableUnusedAttributes:g}}function sx(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function a(c,u,m){m!==0&&(n.drawArraysInstanced(i,c,u,m),e.update(u,i,m))}function o(c,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,m);let p=0;for(let _=0;_<m;_++)p+=u[_];e.update(p,i,1)}function l(c,u,m,h){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,m);let _=0;for(let S=0;S<m;S++)_+=u[S]*h[S];e.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function rx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Pn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const x=C===un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==hn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==zn&&!x)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Pt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const m=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:g,maxVaryings:b,maxFragmentUniforms:M,maxSamples:w,samples:T}}function ax(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new Si,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,h){const p=m.length!==0||h||i!==0||s;return s=h,i=m.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,h){e=u(m,h,0)},this.setState=function(m,h,p){const _=m.clippingPlanes,S=m.clipIntersection,f=m.clipShadows,d=n.get(m);if(!s||_===null||_.length===0||r&&!f)r?u(null):c();else{const g=r?0:i,b=g*4;let M=d.clippingState||null;l.value=M,M=u(_,h,b,p);for(let w=0;w!==b;++w)M[w]=e[w];d.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(m,h,p,_){const S=m!==null?m.length:0;let f=null;if(S!==0){if(f=l.value,_!==!0||f===null){const d=p+S*4,g=h.matrixWorldInverse;o.getNormalMatrix(g),(f===null||f.length<d)&&(f=new Float32Array(d));for(let b=0,M=p;b!==S;++b,M+=4)a.copy(m[b]).applyMatrix4(g,o),a.normal.toArray(f,M),f[M+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,f}}const Ti=4,Fd=[.125,.215,.35,.446,.526,.582],Oi=20,ox=256,$s=new ao,Od=new yt;let gl=null,_l=0,xl=0,vl=!1;const lx=new I;class Bd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=lx}=r;gl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(gl,_l,xl),this._renderer.xr.enabled=vl,t.scissorTest=!1,ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hi||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:We,minFilter:We,generateMipmaps:!1,type:un,format:Pn,colorSpace:Ds,depthBuffer:!1},s=zd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zd(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cx(r)),this._blurMaterial=dx(r,t,e),this._ggxMaterial=hx(r,t,e)}return s}_compileMaterial(t){const e=new $(new Nt,t);this._renderer.compile(e,$s)}_sceneToCubeUV(t,e,i,s,r){const l=new tn(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],m=this._renderer,h=m.autoClear,p=m.toneMapping;m.getClearColor(Od),m.toneMapping=Gn,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $(new Je,new sn({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,f=S.material;let d=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,d=!0):(f.color.copy(Od),d=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):M===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const w=this._cubeSize;ps(s,M*w,b>2?w:0,w,w),m.setRenderTarget(s),d&&m.render(S,l),m.render(t,l)}m.toneMapping=p,m.autoClear=h,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Hi||t.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vd());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ps(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,$s)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),m=Math.sqrt(c*c-u*u),h=0+c*1.25,p=m*h,{_lodMax:_}=this,S=this._sizeLods[i],f=3*S*(i>_-Ti?i-_+Ti:0),d=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=_-e,ps(r,f,d,3*S,2*S),s.setRenderTarget(r),s.render(o,$s),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,ps(t,f,d,3*S,2*S),s.setRenderTarget(t),s.render(o,$s)}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&qt("blur direction must be either latitudinal or longitudinal!");const u=3,m=this._lodMeshes[s];m.material=c;const h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Oi-1),S=r/_,f=isFinite(r)?1+Math.floor(u*S):Oi;f>Oi&&Pt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Oi}`);const d=[];let g=0;for(let C=0;C<Oi;++C){const x=C/S,y=Math.exp(-x*x/2);d.push(y),C===0?g+=y:C<f&&(g+=2*y)}for(let C=0;C<d.length;C++)d[C]=d[C]/g;h.envMap.value=t.texture,h.samples.value=f,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=_,h.mipInt.value=b-i;const M=this._sizeLods[s],w=3*M*(s>b-Ti?s-b+Ti:0),T=4*(this._cubeSize-M);ps(e,w,T,3*M,2*M),l.setRenderTarget(e),l.render(m,$s)}}function cx(n){const t=[],e=[],i=[];let s=n;const r=n-Ti+1+Fd.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Ti?l=Fd[a-n+Ti-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),u=-c,m=1+c,h=[u,u,m,u,m,m,u,u,m,m,u,m],p=6,_=6,S=3,f=2,d=1,g=new Float32Array(S*_*p),b=new Float32Array(f*_*p),M=new Float32Array(d*_*p);for(let T=0;T<p;T++){const C=T%3*2/3-1,x=T>2?0:-1,y=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];g.set(y,S*_*T),b.set(h,f*_*T);const P=[T,T,T,T,T,T];M.set(P,d*_*T)}const w=new Nt;w.setAttribute("position",new Jt(g,S)),w.setAttribute("uv",new Jt(b,f)),w.setAttribute("faceIndex",new Jt(M,d)),i.push(new $(w,null)),s>Ti&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function zd(n,t,e){const i=new nn(n,t,e);return i.texture.mapping=$a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ps(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function hx(n,t,e){return new Xe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ox,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function dx(n,t,e){const i=new Float32Array(Oi),s=new I(0,1,0);return new Xe({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Vd(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function kd(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function oo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class $u extends nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Wu(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Je(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ye,blending:kn});r.uniforms.tEquirect.value=e;const a=new $(s,r),o=e.minFilter;return e.minFilter===Vi&&(e.minFilter=We),new f0(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}function ux(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){const p=h.mapping;if(p===ko||p===Go)if(t.has(h)){const _=t.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const S=new $u(_.height);return S.fromEquirectangularTexture(n,h),t.set(h,S),h.addEventListener("dispose",c),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const p=h.mapping,_=p===ko||p===Go,S=p===Hi||p===Cs;if(_||S){let f=e.get(h);const d=f!==void 0?f.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new Bd(n)),f=_?i.fromEquirectangular(h,f):i.fromCubemap(h,f),f.texture.pmremVersion=h.pmremVersion,e.set(h,f),f.texture;if(f!==void 0)return f.texture;{const g=h.image;return _&&g&&g.height>0||S&&g&&l(g)?(i===null&&(i=new Bd(n)),f=_?i.fromEquirectangular(h):i.fromCubemap(h),f.texture.pmremVersion=h.pmremVersion,e.set(h,f),h.addEventListener("dispose",u),f.texture):null}}}return h}function o(h,p){return p===ko?h.mapping=Hi:p===Go&&(h.mapping=Cs),h}function l(h){let p=0;const _=6;for(let S=0;S<_;S++)h[S]!==void 0&&p++;return p===_}function c(h){const p=h.target;p.removeEventListener("dispose",c);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function m(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:m}}function fx(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Oa("WebGLRenderer: "+i+" extension not supported."),s}}}function px(n,t,e,i){const s={},r=new WeakMap;function a(m){const h=m.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];const p=r.get(h);p&&(t.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(m,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(m){const h=m.attributes;for(const p in h)t.update(h[p],n.ARRAY_BUFFER)}function c(m){const h=[],p=m.index,_=m.attributes.position;let S=0;if(_===void 0)return;if(p!==null){const g=p.array;S=p.version;for(let b=0,M=g.length;b<M;b+=3){const w=g[b+0],T=g[b+1],C=g[b+2];h.push(w,T,T,C,C,w)}}else{const g=_.array;S=_.version;for(let b=0,M=g.length/3-1;b<M;b+=3){const w=b+0,T=b+1,C=b+2;h.push(w,T,T,C,C,w)}}const f=new(_.count>=65535?Gu:ku)(h,1);f.version=S;const d=r.get(m);d&&t.remove(d),r.set(m,f)}function u(m){const h=r.get(m);if(h){const p=m.index;p!==null&&h.version<p.version&&c(m)}else c(m);return r.get(m)}return{get:o,update:l,getWireframeAttribute:u}}function mx(n,t,e){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,p){n.drawElements(i,p,r,h*a),e.update(p,i,1)}function c(h,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,h*a,_),e.update(p,i,_))}function u(h,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,h,0,_);let f=0;for(let d=0;d<_;d++)f+=p[d];e.update(f,i,1)}function m(h,p,_,S){if(_===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<h.length;d++)c(h[d]/a,p[d],S[d]);else{f.multiDrawElementsInstancedWEBGL(i,p,0,r,h,0,S,0,_);let d=0;for(let g=0;g<_;g++)d+=p[g]*S[g];e.update(d,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=m}function gx(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:qt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function _x(n,t,e){const i=new WeakMap,s=new ve;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==m){let P=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var p=P;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),S===!0&&(M=2),f===!0&&(M=3);let w=o.attributes.position.count*M,T=1;w>t.maxTextureSize&&(T=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const C=new Float32Array(w*T*4*m),x=new zu(C,w,T,m);x.type=zn,x.needsUpdate=!0;const y=M*4;for(let A=0;A<m;A++){const D=d[A],N=g[A],z=b[A],B=w*T*4*A;for(let H=0;H<D.count;H++){const V=H*y;_===!0&&(s.fromBufferAttribute(D,H),C[B+V+0]=s.x,C[B+V+1]=s.y,C[B+V+2]=s.z,C[B+V+3]=0),S===!0&&(s.fromBufferAttribute(N,H),C[B+V+4]=s.x,C[B+V+5]=s.y,C[B+V+6]=s.z,C[B+V+7]=0),f===!0&&(s.fromBufferAttribute(z,H),C[B+V+8]=s.x,C[B+V+9]=s.y,C[B+V+10]=s.z,C[B+V+11]=z.itemSize===4?s.w:1)}}h={count:m,texture:x,size:new dt(w,T)},i.set(o,h),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let _=0;for(let f=0;f<c.length;f++)_+=c[f];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function xx(n,t,e,i,s){let r=new WeakMap;function a(c){const u=s.render.frame,m=c.geometry,h=t.get(c,m);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const vx={[Rc]:"LINEAR_TONE_MAPPING",[Pc]:"REINHARD_TONE_MAPPING",[Dc]:"CINEON_TONE_MAPPING",[Za]:"ACES_FILMIC_TONE_MAPPING",[Lc]:"AGX_TONE_MAPPING",[Uc]:"NEUTRAL_TONE_MAPPING",[Ic]:"CUSTOM_TONE_MAPPING"};function Mx(n,t,e,i,s){const r=new nn(t,e,{type:n,depthBuffer:i,stencilBuffer:s}),a=new nn(t,e,{type:un,depthBuffer:!1,stencilBuffer:!1}),o=new Nt;o.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Kt([0,2,0,0,2,0],2));const l=new qu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new $(o,l),u=new ao(-1,1,1,-1,0,1);let m=null,h=null,p=!1,_,S=null,f=[],d=!1;this.setSize=function(g,b){r.setSize(g,b),a.setSize(g,b);for(let M=0;M<f.length;M++){const w=f[M];w.setSize&&w.setSize(g,b)}},this.setEffects=function(g){f=g,d=f.length>0&&f[0].isRenderPass===!0;const b=r.width,M=r.height;for(let w=0;w<f.length;w++){const T=f[w];T.setSize&&T.setSize(b,M)}},this.begin=function(g,b){if(p||g.toneMapping===Gn&&f.length===0)return!1;if(S=b,b!==null){const M=b.width,w=b.height;(r.width!==M||r.height!==w)&&this.setSize(M,w)}return d===!1&&g.setRenderTarget(r),_=g.toneMapping,g.toneMapping=Gn,!0},this.hasRenderPass=function(){return d},this.end=function(g,b){g.toneMapping=_,p=!0;let M=r,w=a;for(let T=0;T<f.length;T++){const C=f[T];if(C.enabled!==!1&&(C.render(g,w,M,b),C.needsSwap!==!1)){const x=M;M=w,w=x}}if(m!==g.outputColorSpace||h!==g.toneMapping){m=g.outputColorSpace,h=g.toneMapping,l.defines={},jt.getTransfer(m)===te&&(l.defines.SRGB_TRANSFER="");const T=vx[h];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,g.setRenderTarget(S),g.render(c,u),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Ju=new qe,Mc=new dr(1,1),Qu=new zu,tf=new Nm,ef=new Wu,Gd=[],Hd=[],Wd=new Float32Array(16),Xd=new Float32Array(9),Yd=new Float32Array(4);function Ns(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Gd[s];if(r===void 0&&(r=new Float32Array(s),Gd[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Re(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Pe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function lo(n,t){let e=Hd[t];e===void 0&&(e=new Int32Array(t),Hd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function yx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Sx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2fv(this.addr,t),Pe(e,t)}}function bx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;n.uniform3fv(this.addr,t),Pe(e,t)}}function Ex(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4fv(this.addr,t),Pe(e,t)}}function Tx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;Yd.set(i),n.uniformMatrix2fv(this.addr,!1,Yd),Pe(e,i)}}function wx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;Xd.set(i),n.uniformMatrix3fv(this.addr,!1,Xd),Pe(e,i)}}function Ax(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;Wd.set(i),n.uniformMatrix4fv(this.addr,!1,Wd),Pe(e,i)}}function Cx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Rx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2iv(this.addr,t),Pe(e,t)}}function Px(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3iv(this.addr,t),Pe(e,t)}}function Dx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4iv(this.addr,t),Pe(e,t)}}function Ix(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Lx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2uiv(this.addr,t),Pe(e,t)}}function Ux(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3uiv(this.addr,t),Pe(e,t)}}function Nx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4uiv(this.addr,t),Pe(e,t)}}function Fx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Mc.compareFunction=e.isReversedDepthBuffer()?Gc:kc,r=Mc):r=Ju,e.setTexture2D(t||r,s)}function Ox(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||tf,s)}function Bx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||ef,s)}function zx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Qu,s)}function Vx(n){switch(n){case 5126:return yx;case 35664:return Sx;case 35665:return bx;case 35666:return Ex;case 35674:return Tx;case 35675:return wx;case 35676:return Ax;case 5124:case 35670:return Cx;case 35667:case 35671:return Rx;case 35668:case 35672:return Px;case 35669:case 35673:return Dx;case 5125:return Ix;case 36294:return Lx;case 36295:return Ux;case 36296:return Nx;case 35678:case 36198:case 36298:case 36306:case 35682:return Fx;case 35679:case 36299:case 36307:return Ox;case 35680:case 36300:case 36308:case 36293:return Bx;case 36289:case 36303:case 36311:case 36292:return zx}}function kx(n,t){n.uniform1fv(this.addr,t)}function Gx(n,t){const e=Ns(t,this.size,2);n.uniform2fv(this.addr,e)}function Hx(n,t){const e=Ns(t,this.size,3);n.uniform3fv(this.addr,e)}function Wx(n,t){const e=Ns(t,this.size,4);n.uniform4fv(this.addr,e)}function Xx(n,t){const e=Ns(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Yx(n,t){const e=Ns(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function qx(n,t){const e=Ns(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function jx(n,t){n.uniform1iv(this.addr,t)}function Kx(n,t){n.uniform2iv(this.addr,t)}function Zx(n,t){n.uniform3iv(this.addr,t)}function $x(n,t){n.uniform4iv(this.addr,t)}function Jx(n,t){n.uniform1uiv(this.addr,t)}function Qx(n,t){n.uniform2uiv(this.addr,t)}function tv(n,t){n.uniform3uiv(this.addr,t)}function ev(n,t){n.uniform4uiv(this.addr,t)}function nv(n,t,e){const i=this.cache,s=t.length,r=lo(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Mc:a=Ju;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function iv(n,t,e){const i=this.cache,s=t.length,r=lo(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||tf,r[a])}function sv(n,t,e){const i=this.cache,s=t.length,r=lo(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ef,r[a])}function rv(n,t,e){const i=this.cache,s=t.length,r=lo(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Qu,r[a])}function av(n){switch(n){case 5126:return kx;case 35664:return Gx;case 35665:return Hx;case 35666:return Wx;case 35674:return Xx;case 35675:return Yx;case 35676:return qx;case 5124:case 35670:return jx;case 35667:case 35671:return Kx;case 35668:case 35672:return Zx;case 35669:case 35673:return $x;case 5125:return Jx;case 36294:return Qx;case 36295:return tv;case 36296:return ev;case 35678:case 36198:case 36298:case 36306:case 35682:return nv;case 35679:case 36299:case 36307:return iv;case 35680:case 36300:case 36308:case 36293:return sv;case 36289:case 36303:case 36311:case 36292:return rv}}class ov{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Vx(e.type)}}class lv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=av(e.type)}}class cv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Ml=/(\w+)(\])?(\[|\.)?/g;function qd(n,t){n.seq.push(t),n.map[t.id]=t}function hv(n,t,e){const i=n.name,s=i.length;for(Ml.lastIndex=0;;){const r=Ml.exec(i),a=Ml.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){qd(e,c===void 0?new ov(o,n,t):new lv(o,n,t));break}else{let m=e.map[o];m===void 0&&(m=new cv(o),qd(e,m)),e=m}}}class Ca{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);hv(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function jd(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const dv=37297;let uv=0;function fv(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Kd=new Bt;function pv(n){jt._getMatrix(Kd,jt.workingColorSpace,n);const t=`mat3( ${Kd.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(n)){case Ua:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return Pt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Zd(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+fv(n.getShaderSource(t),o)}else return r}function mv(n,t){const e=pv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const gv={[Rc]:"Linear",[Pc]:"Reinhard",[Dc]:"Cineon",[Za]:"ACESFilmic",[Lc]:"AgX",[Uc]:"Neutral",[Ic]:"Custom"};function _v(n,t){const e=gv[t];return e===void 0?(Pt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const pa=new I;function xv(){jt.getLuminanceCoefficients(pa);const n=pa.x.toFixed(4),t=pa.y.toFixed(4),e=pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nr).join(`
`)}function Mv(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function yv(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function nr(n){return n!==""}function $d(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Sv=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(n){return n.replace(Sv,Ev)}const bv=new Map;function Ev(n,t){let e=kt[t];if(e===void 0){const i=bv.get(t);if(i!==void 0)e=kt[i],Pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return yc(e)}const Tv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qd(n){return n.replace(Tv,wv)}function wv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Av={[ba]:"SHADOWMAP_TYPE_PCF",[er]:"SHADOWMAP_TYPE_VSM"};function Cv(n){return Av[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Rv={[Hi]:"ENVMAP_TYPE_CUBE",[Cs]:"ENVMAP_TYPE_CUBE",[$a]:"ENVMAP_TYPE_CUBE_UV"};function Pv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Rv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Dv={[Cs]:"ENVMAP_MODE_REFRACTION"};function Iv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Dv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Lv={[Ka]:"ENVMAP_BLENDING_MULTIPLY",[Qp]:"ENVMAP_BLENDING_MIX",[tm]:"ENVMAP_BLENDING_ADD"};function Uv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Lv[n.combine]||"ENVMAP_BLENDING_NONE"}function Nv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Fv(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Cv(e),c=Pv(e),u=Iv(e),m=Uv(e),h=Nv(e),p=vv(e),_=Mv(r),S=s.createProgram();let f,d,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(nr).join(`
`),f.length>0&&(f+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(nr).join(`
`),d.length>0&&(d+=`
`)):(f=[tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),d=[tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+m:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?kt.tonemapping_pars_fragment:"",e.toneMapping!==Gn?_v("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,mv("linearToOutputTexel",e.outputColorSpace),xv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(nr).join(`
`)),a=yc(a),a=$d(a,e),a=Jd(a,e),o=yc(o),o=$d(o,e),o=Jd(o,e),a=Qd(a),o=Qd(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",e.glslVersion===id?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=g+f+a,M=g+d+o,w=jd(s,s.VERTEX_SHADER,b),T=jd(s,s.FRAGMENT_SHADER,M);s.attachShader(S,w),s.attachShader(S,T),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function C(A){if(n.debug.checkShaderErrors){const D=s.getProgramInfoLog(S)||"",N=s.getShaderInfoLog(w)||"",z=s.getShaderInfoLog(T)||"",B=D.trim(),H=N.trim(),V=z.trim();let tt=!0,Z=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(tt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,w,T);else{const ut=Zd(s,w,"vertex"),_t=Zd(s,T,"fragment");qt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+B+`
`+ut+`
`+_t)}else B!==""?Pt("WebGLProgram: Program Info Log:",B):(H===""||V==="")&&(Z=!1);Z&&(A.diagnostics={runnable:tt,programLog:B,vertexShader:{log:H,prefix:f},fragmentShader:{log:V,prefix:d}})}s.deleteShader(w),s.deleteShader(T),x=new Ca(s,S),y=yv(s,S)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(S,dv)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=uv++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=w,this.fragmentShader=T,this}let Ov=0;class Bv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new zv(t),e.set(t,i)),i}}class zv{constructor(t){this.id=Ov++,this.code=t,this.usedTimes=0}}function Vv(n,t,e,i,s,r){const a=new Xc,o=new Bv,l=new Set,c=[],u=new Map,m=i.logarithmicDepthBuffer;let h=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,y,P,A,D){const N=A.fog,z=D.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,V=t.get(x.envMap||B,H),tt=V&&V.mapping===$a?V.image.height:null,Z=p[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Pt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const ut=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,_t=ut!==void 0?ut.length:0;let pt=0;z.morphAttributes.position!==void 0&&(pt=1),z.morphAttributes.normal!==void 0&&(pt=2),z.morphAttributes.color!==void 0&&(pt=3);let Vt,_e,ge,j;if(Z){const ne=On[Z];Vt=ne.vertexShader,_e=ne.fragmentShader}else Vt=x.vertexShader,_e=x.fragmentShader,o.update(x),ge=o.getVertexShaderID(x),j=o.getFragmentShaderID(x);const it=n.getRenderTarget(),at=n.state.buffers.depth.getReversed(),Ot=D.isInstancedMesh===!0,Rt=D.isBatchedMesh===!0,Lt=!!x.map,De=!!x.matcap,Zt=!!V,ee=!!x.aoMap,ce=!!x.lightMap,Gt=!!x.bumpMap,Me=!!x.normalMap,L=!!x.displacementMap,we=!!x.emissiveMap,Qt=!!x.metalnessMap,ue=!!x.roughnessMap,Et=x.anisotropy>0,R=x.clearcoat>0,v=x.dispersion>0,F=x.iridescence>0,q=x.sheen>0,K=x.transmission>0,Y=Et&&!!x.anisotropyMap,xt=R&&!!x.clearcoatMap,st=R&&!!x.clearcoatNormalMap,Ct=R&&!!x.clearcoatRoughnessMap,Dt=F&&!!x.iridescenceMap,J=F&&!!x.iridescenceThicknessMap,et=q&&!!x.sheenColorMap,vt=q&&!!x.sheenRoughnessMap,St=!!x.specularMap,ft=!!x.specularColorMap,Ht=!!x.specularIntensityMap,U=K&&!!x.transmissionMap,rt=K&&!!x.thicknessMap,nt=!!x.gradientMap,gt=!!x.alphaMap,Q=x.alphaTest>0,X=!!x.alphaHash,Mt=!!x.extensions;let Ut=Gn;x.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Ut=n.toneMapping);const fe={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:Vt,fragmentShader:_e,defines:x.defines,customVertexShaderID:ge,customFragmentShaderID:j,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Rt,batchingColor:Rt&&D._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&D.instanceColor!==null,instancingMorph:Ot&&D.morphTexture!==null,outputColorSpace:it===null?n.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Ds,alphaToCoverage:!!x.alphaToCoverage,map:Lt,matcap:De,envMap:Zt,envMapMode:Zt&&V.mapping,envMapCubeUVHeight:tt,aoMap:ee,lightMap:ce,bumpMap:Gt,normalMap:Me,displacementMap:L,emissiveMap:we,normalMapObjectSpace:Me&&x.normalMapType===im,normalMapTangentSpace:Me&&x.normalMapType===Ja,metalnessMap:Qt,roughnessMap:ue,anisotropy:Et,anisotropyMap:Y,clearcoat:R,clearcoatMap:xt,clearcoatNormalMap:st,clearcoatRoughnessMap:Ct,dispersion:v,iridescence:F,iridescenceMap:Dt,iridescenceThicknessMap:J,sheen:q,sheenColorMap:et,sheenRoughnessMap:vt,specularMap:St,specularColorMap:ft,specularIntensityMap:Ht,transmission:K,transmissionMap:U,thicknessMap:rt,gradientMap:nt,opaque:x.transparent===!1&&x.blending===Gi&&x.alphaToCoverage===!1,alphaMap:gt,alphaTest:Q,alphaHash:X,combine:x.combine,mapUv:Lt&&_(x.map.channel),aoMapUv:ee&&_(x.aoMap.channel),lightMapUv:ce&&_(x.lightMap.channel),bumpMapUv:Gt&&_(x.bumpMap.channel),normalMapUv:Me&&_(x.normalMap.channel),displacementMapUv:L&&_(x.displacementMap.channel),emissiveMapUv:we&&_(x.emissiveMap.channel),metalnessMapUv:Qt&&_(x.metalnessMap.channel),roughnessMapUv:ue&&_(x.roughnessMap.channel),anisotropyMapUv:Y&&_(x.anisotropyMap.channel),clearcoatMapUv:xt&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:st&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:J&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:et&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(x.sheenRoughnessMap.channel),specularMapUv:St&&_(x.specularMap.channel),specularColorMapUv:ft&&_(x.specularColorMap.channel),specularIntensityMapUv:Ht&&_(x.specularIntensityMap.channel),transmissionMapUv:U&&_(x.transmissionMap.channel),thicknessMapUv:rt&&_(x.thicknessMap.channel),alphaMapUv:gt&&_(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Me||Et),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&(Lt||gt),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&Me===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:at,skinning:D.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:pt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Lt&&x.map.isVideoTexture===!0&&jt.getTransfer(x.map.colorSpace)===te,decodeVideoTextureEmissive:we&&x.emissiveMap.isVideoTexture===!0&&jt.getTransfer(x.emissiveMap.colorSpace)===te,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Se,flipSided:x.side===Ye,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Mt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&x.extensions.multiDraw===!0||Rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return fe.vertexUv1s=l.has(1),fe.vertexUv2s=l.has(2),fe.vertexUv3s=l.has(3),l.clear(),fe}function f(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)y.push(P),y.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(d(y,x),g(y,x),y.push(n.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function d(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function g(x,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),x.push(a.mask)}function b(x){const y=p[x.type];let P;if(y){const A=On[y];P=ur.clone(A.uniforms)}else P=x.uniforms;return P}function M(x,y){let P=u.get(y);return P!==void 0?++P.usedTimes:(P=new Fv(n,y,x,s),c.push(P),u.set(y,P)),P}function w(x){if(--x.usedTimes===0){const y=c.indexOf(x);c[y]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function C(){o.dispose()}return{getParameters:S,getProgramCacheKey:f,getUniforms:b,acquireProgram:M,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:C}}function kv(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Gv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function eu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function nu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,_,S,f,d){let g=n[t];return g===void 0?(g={id:h.id,object:h,geometry:p,material:_,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:f,group:d},n[t]=g):(g.id=h.id,g.object=h,g.geometry=p,g.material=_,g.materialVariant=a(h),g.groupOrder=S,g.renderOrder=h.renderOrder,g.z=f,g.group=d),t++,g}function l(h,p,_,S,f,d){const g=o(h,p,_,S,f,d);_.transmission>0?i.push(g):_.transparent===!0?s.push(g):e.push(g)}function c(h,p,_,S,f,d){const g=o(h,p,_,S,f,d);_.transmission>0?i.unshift(g):_.transparent===!0?s.unshift(g):e.unshift(g)}function u(h,p){e.length>1&&e.sort(h||Gv),i.length>1&&i.sort(p||eu),s.length>1&&s.sort(p||eu)}function m(){for(let h=t,p=n.length;h<p;h++){const _=n[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:m,sort:u}}function Hv(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new nu,n.set(i,[a])):s>=r.length?(a=new nu,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Wv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new yt};break;case"SpotLight":e={position:new I,direction:new I,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":e={color:new yt,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function Xv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Yv=0;function qv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function jv(n){const t=new Wv,e=Xv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const s=new I,r=new me,a=new me;function o(c){let u=0,m=0,h=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,_=0,S=0,f=0,d=0,g=0,b=0,M=0,w=0,T=0,C=0;c.sort(qv);for(let y=0,P=c.length;y<P;y++){const A=c[y],D=A.color,N=A.intensity,z=A.distance;let B=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Ps?B=A.shadow.map.texture:B=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)u+=D.r*N,m+=D.g*N,h+=D.b*N;else if(A.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(A.sh.coefficients[H],N);C++}else if(A.isDirectionalLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const V=A.shadow,tt=e.get(A);tt.shadowIntensity=V.intensity,tt.shadowBias=V.bias,tt.shadowNormalBias=V.normalBias,tt.shadowRadius=V.radius,tt.shadowMapSize=V.mapSize,i.directionalShadow[p]=tt,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=A.shadow.matrix,g++}i.directional[p]=H,p++}else if(A.isSpotLight){const H=t.get(A);H.position.setFromMatrixPosition(A.matrixWorld),H.color.copy(D).multiplyScalar(N),H.distance=z,H.coneCos=Math.cos(A.angle),H.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),H.decay=A.decay,i.spot[S]=H;const V=A.shadow;if(A.map&&(i.spotLightMap[w]=A.map,w++,V.updateMatrices(A),A.castShadow&&T++),i.spotLightMatrix[S]=V.matrix,A.castShadow){const tt=e.get(A);tt.shadowIntensity=V.intensity,tt.shadowBias=V.bias,tt.shadowNormalBias=V.normalBias,tt.shadowRadius=V.radius,tt.shadowMapSize=V.mapSize,i.spotShadow[S]=tt,i.spotShadowMap[S]=B,M++}S++}else if(A.isRectAreaLight){const H=t.get(A);H.color.copy(D).multiplyScalar(N),H.halfWidth.set(A.width*.5,0,0),H.halfHeight.set(0,A.height*.5,0),i.rectArea[f]=H,f++}else if(A.isPointLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),H.distance=A.distance,H.decay=A.decay,A.castShadow){const V=A.shadow,tt=e.get(A);tt.shadowIntensity=V.intensity,tt.shadowBias=V.bias,tt.shadowNormalBias=V.normalBias,tt.shadowRadius=V.radius,tt.shadowMapSize=V.mapSize,tt.shadowCameraNear=V.camera.near,tt.shadowCameraFar=V.camera.far,i.pointShadow[_]=tt,i.pointShadowMap[_]=B,i.pointShadowMatrix[_]=A.shadow.matrix,b++}i.point[_]=H,_++}else if(A.isHemisphereLight){const H=t.get(A);H.skyColor.copy(A.color).multiplyScalar(N),H.groundColor.copy(A.groundColor).multiplyScalar(N),i.hemi[d]=H,d++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=h;const x=i.hash;(x.directionalLength!==p||x.pointLength!==_||x.spotLength!==S||x.rectAreaLength!==f||x.hemiLength!==d||x.numDirectionalShadows!==g||x.numPointShadows!==b||x.numSpotShadows!==M||x.numSpotMaps!==w||x.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=f,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,x.directionalLength=p,x.pointLength=_,x.spotLength=S,x.rectAreaLength=f,x.hemiLength=d,x.numDirectionalShadows=g,x.numPointShadows=b,x.numSpotShadows=M,x.numSpotMaps=w,x.numLightProbes=C,i.version=Yv++)}function l(c,u){let m=0,h=0,p=0,_=0,S=0;const f=u.matrixWorldInverse;for(let d=0,g=c.length;d<g;d++){const b=c[d];if(b.isDirectionalLight){const M=i.directional[m];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),m++}else if(b.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),p++}else if(b.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(f),a.identity(),r.copy(b.matrixWorld),r.premultiply(f),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(f),h++}else if(b.isHemisphereLight){const M=i.hemi[S];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(f),S++}}}return{setup:o,setupView:l,state:i}}function iu(n){const t=new jv(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Kv(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new iu(n),t.set(s,[o])):r>=a.length?(o=new iu(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const Zv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$v=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Jv=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Qv=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],su=new me,Js=new I,yl=new I;function tM(n,t,e){let i=new jc;const s=new dt,r=new dt,a=new ve,o=new o0,l=new l0,c={},u=e.maxTextureSize,m={[Wn]:Ye,[Ye]:Wn,[Se]:Se},h=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Zv,fragmentShader:$v}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Nt;_.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new $(_,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ba;let d=this.type;this.render=function(T,C,x){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;this.type===Ru&&(Pt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ba);const y=n.getRenderTarget(),P=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),D=n.state;D.setBlending(kn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const N=d!==this.type;N&&C.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(B=>B.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,B=T.length;z<B;z++){const H=T[z],V=H.shadow;if(V===void 0){Pt("WebGLShadowMap:",H,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const tt=V.getFrameExtents();s.multiply(tt),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/tt.x),s.x=r.x*tt.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/tt.y),s.y=r.y*tt.y,V.mapSize.y=r.y));const Z=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=Z,V.map===null||N===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===er){if(H.isPointLight){Pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new nn(s.x,s.y,{format:Ps,type:un,minFilter:We,magFilter:We,generateMipmaps:!1}),V.map.texture.name=H.name+".shadowMap",V.map.depthTexture=new dr(s.x,s.y,zn),V.map.depthTexture.name=H.name+".shadowMapDepth",V.map.depthTexture.format=hi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=ze,V.map.depthTexture.magFilter=ze}else H.isPointLight?(V.map=new $u(s.x),V.map.depthTexture=new e0(s.x,Xn)):(V.map=new nn(s.x,s.y),V.map.depthTexture=new dr(s.x,s.y,Xn)),V.map.depthTexture.name=H.name+".shadowMap",V.map.depthTexture.format=hi,this.type===ba?(V.map.depthTexture.compareFunction=Z?Gc:kc,V.map.depthTexture.minFilter=We,V.map.depthTexture.magFilter=We):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=ze,V.map.depthTexture.magFilter=ze);V.camera.updateProjectionMatrix()}const ut=V.map.isWebGLCubeRenderTarget?6:1;for(let _t=0;_t<ut;_t++){if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,_t),n.clear();else{_t===0&&(n.setRenderTarget(V.map),n.clear());const pt=V.getViewport(_t);a.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),D.viewport(a)}if(H.isPointLight){const pt=V.camera,Vt=V.matrix,_e=H.distance||pt.far;_e!==pt.far&&(pt.far=_e,pt.updateProjectionMatrix()),Js.setFromMatrixPosition(H.matrixWorld),pt.position.copy(Js),yl.copy(pt.position),yl.add(Jv[_t]),pt.up.copy(Qv[_t]),pt.lookAt(yl),pt.updateMatrixWorld(),Vt.makeTranslation(-Js.x,-Js.y,-Js.z),su.multiplyMatrices(pt.projectionMatrix,pt.matrixWorldInverse),V._frustum.setFromProjectionMatrix(su,pt.coordinateSystem,pt.reversedDepth)}else V.updateMatrices(H);i=V.getFrustum(),M(C,x,V.camera,H,this.type)}V.isPointLightShadow!==!0&&this.type===er&&g(V,x),V.needsUpdate=!1}d=this.type,f.needsUpdate=!1,n.setRenderTarget(y,P,A)};function g(T,C){const x=t.update(S);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new nn(s.x,s.y,{format:Ps,type:un})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(C,null,x,h,S,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(C,null,x,p,S,null)}function b(T,C,x,y){let P=null;const A=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)P=A;else if(P=x.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const D=P.uuid,N=C.uuid;let z=c[D];z===void 0&&(z={},c[D]=z);let B=z[N];B===void 0&&(B=P.clone(),z[N]=B,C.addEventListener("dispose",w)),P=B}if(P.visible=C.visible,P.wireframe=C.wireframe,y===er?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:m[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const D=n.properties.get(P);D.light=x}return P}function M(T,C,x,y,P){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===er)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const N=t.update(T),z=T.material;if(Array.isArray(z)){const B=N.groups;for(let H=0,V=B.length;H<V;H++){const tt=B[H],Z=z[tt.materialIndex];if(Z&&Z.visible){const ut=b(T,Z,y,P);T.onBeforeShadow(n,T,C,x,N,ut,tt),n.renderBufferDirect(x,null,N,ut,T,tt),T.onAfterShadow(n,T,C,x,N,ut,tt)}}}else if(z.visible){const B=b(T,z,y,P);T.onBeforeShadow(n,T,C,x,N,B,null),n.renderBufferDirect(x,null,N,B,T,null),T.onAfterShadow(n,T,C,x,N,B,null)}}const D=T.children;for(let N=0,z=D.length;N<z;N++)M(D[N],C,x,y,P)}function w(T){T.target.removeEventListener("dispose",w);for(const x in c){const y=c[x],P=T.target.uuid;P in y&&(y[P].dispose(),delete y[P])}}}function eM(n,t){function e(){let U=!1;const rt=new ve;let nt=null;const gt=new ve(0,0,0,0);return{setMask:function(Q){nt!==Q&&!U&&(n.colorMask(Q,Q,Q,Q),nt=Q)},setLocked:function(Q){U=Q},setClear:function(Q,X,Mt,Ut,fe){fe===!0&&(Q*=Ut,X*=Ut,Mt*=Ut),rt.set(Q,X,Mt,Ut),gt.equals(rt)===!1&&(n.clearColor(Q,X,Mt,Ut),gt.copy(rt))},reset:function(){U=!1,nt=null,gt.set(-1,0,0,0)}}}function i(){let U=!1,rt=!1,nt=null,gt=null,Q=null;return{setReversed:function(X){if(rt!==X){const Mt=t.get("EXT_clip_control");X?Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.ZERO_TO_ONE_EXT):Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.NEGATIVE_ONE_TO_ONE_EXT),rt=X;const Ut=Q;Q=null,this.setClear(Ut)}},getReversed:function(){return rt},setTest:function(X){X?it(n.DEPTH_TEST):at(n.DEPTH_TEST)},setMask:function(X){nt!==X&&!U&&(n.depthMask(X),nt=X)},setFunc:function(X){if(rt&&(X=fm[X]),gt!==X){switch(X){case Dl:n.depthFunc(n.NEVER);break;case Il:n.depthFunc(n.ALWAYS);break;case Ll:n.depthFunc(n.LESS);break;case As:n.depthFunc(n.LEQUAL);break;case Ul:n.depthFunc(n.EQUAL);break;case Nl:n.depthFunc(n.GEQUAL);break;case Fl:n.depthFunc(n.GREATER);break;case Ol:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}gt=X}},setLocked:function(X){U=X},setClear:function(X){Q!==X&&(Q=X,rt&&(X=1-X),n.clearDepth(X))},reset:function(){U=!1,nt=null,gt=null,Q=null,rt=!1}}}function s(){let U=!1,rt=null,nt=null,gt=null,Q=null,X=null,Mt=null,Ut=null,fe=null;return{setTest:function(ne){U||(ne?it(n.STENCIL_TEST):at(n.STENCIL_TEST))},setMask:function(ne){rt!==ne&&!U&&(n.stencilMask(ne),rt=ne)},setFunc:function(ne,Kn,Zn){(nt!==ne||gt!==Kn||Q!==Zn)&&(n.stencilFunc(ne,Kn,Zn),nt=ne,gt=Kn,Q=Zn)},setOp:function(ne,Kn,Zn){(X!==ne||Mt!==Kn||Ut!==Zn)&&(n.stencilOp(ne,Kn,Zn),X=ne,Mt=Kn,Ut=Zn)},setLocked:function(ne){U=ne},setClear:function(ne){fe!==ne&&(n.clearStencil(ne),fe=ne)},reset:function(){U=!1,rt=null,nt=null,gt=null,Q=null,X=null,Mt=null,Ut=null,fe=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},m={},h=new WeakMap,p=[],_=null,S=!1,f=null,d=null,g=null,b=null,M=null,w=null,T=null,C=new yt(0,0,0),x=0,y=!1,P=null,A=null,D=null,N=null,z=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,V=0;const tt=n.getParameter(n.VERSION);tt.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(tt)[1]),H=V>=1):tt.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),H=V>=2);let Z=null,ut={};const _t=n.getParameter(n.SCISSOR_BOX),pt=n.getParameter(n.VIEWPORT),Vt=new ve().fromArray(_t),_e=new ve().fromArray(pt);function ge(U,rt,nt,gt){const Q=new Uint8Array(4),X=n.createTexture();n.bindTexture(U,X),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Mt=0;Mt<nt;Mt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(rt,0,n.RGBA,1,1,gt,0,n.RGBA,n.UNSIGNED_BYTE,Q):n.texImage2D(rt+Mt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Q);return X}const j={};j[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(n.DEPTH_TEST),a.setFunc(As),Gt(!1),Me(Qh),it(n.CULL_FACE),ee(kn);function it(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function at(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Ot(U,rt){return m[U]!==rt?(n.bindFramebuffer(U,rt),m[U]=rt,U===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=rt),U===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=rt),!0):!1}function Rt(U,rt){let nt=p,gt=!1;if(U){nt=h.get(rt),nt===void 0&&(nt=[],h.set(rt,nt));const Q=U.textures;if(nt.length!==Q.length||nt[0]!==n.COLOR_ATTACHMENT0){for(let X=0,Mt=Q.length;X<Mt;X++)nt[X]=n.COLOR_ATTACHMENT0+X;nt.length=Q.length,gt=!0}}else nt[0]!==n.BACK&&(nt[0]=n.BACK,gt=!0);gt&&n.drawBuffers(nt)}function Lt(U){return _!==U?(n.useProgram(U),_=U,!0):!1}const De={[Fi]:n.FUNC_ADD,[Fp]:n.FUNC_SUBTRACT,[Op]:n.FUNC_REVERSE_SUBTRACT};De[Bp]=n.MIN,De[zp]=n.MAX;const Zt={[Vp]:n.ZERO,[kp]:n.ONE,[Gp]:n.SRC_COLOR,[Rl]:n.SRC_ALPHA,[jp]:n.SRC_ALPHA_SATURATE,[Yp]:n.DST_COLOR,[Wp]:n.DST_ALPHA,[Hp]:n.ONE_MINUS_SRC_COLOR,[Pl]:n.ONE_MINUS_SRC_ALPHA,[qp]:n.ONE_MINUS_DST_COLOR,[Xp]:n.ONE_MINUS_DST_ALPHA,[Kp]:n.CONSTANT_COLOR,[Zp]:n.ONE_MINUS_CONSTANT_COLOR,[$p]:n.CONSTANT_ALPHA,[Jp]:n.ONE_MINUS_CONSTANT_ALPHA};function ee(U,rt,nt,gt,Q,X,Mt,Ut,fe,ne){if(U===kn){S===!0&&(at(n.BLEND),S=!1);return}if(S===!1&&(it(n.BLEND),S=!0),U!==Np){if(U!==f||ne!==y){if((d!==Fi||M!==Fi)&&(n.blendEquation(n.FUNC_ADD),d=Fi,M=Fi),ne)switch(U){case Gi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ci:n.blendFunc(n.ONE,n.ONE);break;case td:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ed:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:qt("WebGLState: Invalid blending: ",U);break}else switch(U){case Gi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ci:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case td:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ed:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",U);break}g=null,b=null,w=null,T=null,C.set(0,0,0),x=0,f=U,y=ne}return}Q=Q||rt,X=X||nt,Mt=Mt||gt,(rt!==d||Q!==M)&&(n.blendEquationSeparate(De[rt],De[Q]),d=rt,M=Q),(nt!==g||gt!==b||X!==w||Mt!==T)&&(n.blendFuncSeparate(Zt[nt],Zt[gt],Zt[X],Zt[Mt]),g=nt,b=gt,w=X,T=Mt),(Ut.equals(C)===!1||fe!==x)&&(n.blendColor(Ut.r,Ut.g,Ut.b,fe),C.copy(Ut),x=fe),f=U,y=!1}function ce(U,rt){U.side===Se?at(n.CULL_FACE):it(n.CULL_FACE);let nt=U.side===Ye;rt&&(nt=!nt),Gt(nt),U.blending===Gi&&U.transparent===!1?ee(kn):ee(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const gt=U.stencilWrite;o.setTest(gt),gt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),we(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?it(n.SAMPLE_ALPHA_TO_COVERAGE):at(n.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(U){P!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),P=U)}function Me(U){U!==Lp?(it(n.CULL_FACE),U!==A&&(U===Qh?n.cullFace(n.BACK):U===Up?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):at(n.CULL_FACE),A=U}function L(U){U!==D&&(H&&n.lineWidth(U),D=U)}function we(U,rt,nt){U?(it(n.POLYGON_OFFSET_FILL),(N!==rt||z!==nt)&&(N=rt,z=nt,a.getReversed()&&(rt=-rt),n.polygonOffset(rt,nt))):at(n.POLYGON_OFFSET_FILL)}function Qt(U){U?it(n.SCISSOR_TEST):at(n.SCISSOR_TEST)}function ue(U){U===void 0&&(U=n.TEXTURE0+B-1),Z!==U&&(n.activeTexture(U),Z=U)}function Et(U,rt,nt){nt===void 0&&(Z===null?nt=n.TEXTURE0+B-1:nt=Z);let gt=ut[nt];gt===void 0&&(gt={type:void 0,texture:void 0},ut[nt]=gt),(gt.type!==U||gt.texture!==rt)&&(Z!==nt&&(n.activeTexture(nt),Z=nt),n.bindTexture(U,rt||j[U]),gt.type=U,gt.texture=rt)}function R(){const U=ut[Z];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(U){qt("WebGLState:",U)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(U){qt("WebGLState:",U)}}function q(){try{n.texSubImage2D(...arguments)}catch(U){qt("WebGLState:",U)}}function K(){try{n.texSubImage3D(...arguments)}catch(U){qt("WebGLState:",U)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(U){qt("WebGLState:",U)}}function xt(){try{n.compressedTexSubImage3D(...arguments)}catch(U){qt("WebGLState:",U)}}function st(){try{n.texStorage2D(...arguments)}catch(U){qt("WebGLState:",U)}}function Ct(){try{n.texStorage3D(...arguments)}catch(U){qt("WebGLState:",U)}}function Dt(){try{n.texImage2D(...arguments)}catch(U){qt("WebGLState:",U)}}function J(){try{n.texImage3D(...arguments)}catch(U){qt("WebGLState:",U)}}function et(U){Vt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Vt.copy(U))}function vt(U){_e.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),_e.copy(U))}function St(U,rt){let nt=c.get(rt);nt===void 0&&(nt=new WeakMap,c.set(rt,nt));let gt=nt.get(U);gt===void 0&&(gt=n.getUniformBlockIndex(rt,U.name),nt.set(U,gt))}function ft(U,rt){const gt=c.get(rt).get(U);l.get(rt)!==gt&&(n.uniformBlockBinding(rt,gt,U.__bindingPointIndex),l.set(rt,gt))}function Ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Z=null,ut={},m={},h=new WeakMap,p=[],_=null,S=!1,f=null,d=null,g=null,b=null,M=null,w=null,T=null,C=new yt(0,0,0),x=0,y=!1,P=null,A=null,D=null,N=null,z=null,Vt.set(0,0,n.canvas.width,n.canvas.height),_e.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:at,bindFramebuffer:Ot,drawBuffers:Rt,useProgram:Lt,setBlending:ee,setMaterial:ce,setFlipSided:Gt,setCullFace:Me,setLineWidth:L,setPolygonOffset:we,setScissorTest:Qt,activeTexture:ue,bindTexture:Et,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:Dt,texImage3D:J,updateUBOMapping:St,uniformBlockBinding:ft,texStorage2D:st,texStorage3D:Ct,texSubImage2D:q,texSubImage3D:K,compressedTexSubImage2D:Y,compressedTexSubImage3D:xt,scissor:et,viewport:vt,reset:Ht}}function nM(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,u=new WeakMap;let m;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,v){return p?new OffscreenCanvas(R,v):Na("canvas")}function S(R,v,F){let q=1;const K=Et(R);if((K.width>F||K.height>F)&&(q=F/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor(q*K.width),xt=Math.floor(q*K.height);m===void 0&&(m=_(Y,xt));const st=v?_(Y,xt):m;return st.width=Y,st.height=xt,st.getContext("2d").drawImage(R,0,0,Y,xt),Pt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Y+"x"+xt+")."),st}else return"data"in R&&Pt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function f(R){return R.generateMipmaps}function d(R){n.generateMipmap(R)}function g(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(R,v,F,q,K=!1){if(R!==null){if(n[R]!==void 0)return n[R];Pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=v;if(v===n.RED&&(F===n.FLOAT&&(Y=n.R32F),F===n.HALF_FLOAT&&(Y=n.R16F),F===n.UNSIGNED_BYTE&&(Y=n.R8)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.R8UI),F===n.UNSIGNED_SHORT&&(Y=n.R16UI),F===n.UNSIGNED_INT&&(Y=n.R32UI),F===n.BYTE&&(Y=n.R8I),F===n.SHORT&&(Y=n.R16I),F===n.INT&&(Y=n.R32I)),v===n.RG&&(F===n.FLOAT&&(Y=n.RG32F),F===n.HALF_FLOAT&&(Y=n.RG16F),F===n.UNSIGNED_BYTE&&(Y=n.RG8)),v===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RG8UI),F===n.UNSIGNED_SHORT&&(Y=n.RG16UI),F===n.UNSIGNED_INT&&(Y=n.RG32UI),F===n.BYTE&&(Y=n.RG8I),F===n.SHORT&&(Y=n.RG16I),F===n.INT&&(Y=n.RG32I)),v===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),F===n.UNSIGNED_INT&&(Y=n.RGB32UI),F===n.BYTE&&(Y=n.RGB8I),F===n.SHORT&&(Y=n.RGB16I),F===n.INT&&(Y=n.RGB32I)),v===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),F===n.UNSIGNED_INT&&(Y=n.RGBA32UI),F===n.BYTE&&(Y=n.RGBA8I),F===n.SHORT&&(Y=n.RGBA16I),F===n.INT&&(Y=n.RGBA32I)),v===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),v===n.RGBA){const xt=K?Ua:jt.getTransfer(q);F===n.FLOAT&&(Y=n.RGBA32F),F===n.HALF_FLOAT&&(Y=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Y=xt===te?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function M(R,v){let F;return R?v===null||v===Xn||v===lr?F=n.DEPTH24_STENCIL8:v===zn?F=n.DEPTH32F_STENCIL8:v===or&&(F=n.DEPTH24_STENCIL8,Pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Xn||v===lr?F=n.DEPTH_COMPONENT24:v===zn?F=n.DEPTH_COMPONENT32F:v===or&&(F=n.DEPTH_COMPONENT16),F}function w(R,v){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==ze&&R.minFilter!==We?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function T(R){const v=R.target;v.removeEventListener("dispose",T),x(v),v.isVideoTexture&&u.delete(v)}function C(R){const v=R.target;v.removeEventListener("dispose",C),P(v)}function x(R){const v=i.get(R);if(v.__webglInit===void 0)return;const F=R.source,q=h.get(F);if(q){const K=q[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&y(R),Object.keys(q).length===0&&h.delete(F)}i.remove(R)}function y(R){const v=i.get(R);n.deleteTexture(v.__webglTexture);const F=R.source,q=h.get(F);delete q[v.__cacheKey],a.memory.textures--}function P(R){const v=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let K=0;K<v.__webglFramebuffer[q].length;K++)n.deleteFramebuffer(v.__webglFramebuffer[q][K]);else n.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)n.deleteFramebuffer(v.__webglFramebuffer[q]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=R.textures;for(let q=0,K=F.length;q<K;q++){const Y=i.get(F[q]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(F[q])}i.remove(R)}let A=0;function D(){A=0}function N(){const R=A;return R>=s.maxTextures&&Pt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),A+=1,R}function z(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function B(R,v){const F=i.get(R);if(R.isVideoTexture&&Qt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&F.__version!==R.version){const q=R.image;if(q===null)Pt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Pt("WebGLRenderer: Texture marked for update but image is incomplete");else{j(F,R,v);return}}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function H(R,v){const F=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){j(F,R,v);return}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function V(R,v){const F=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){j(F,R,v);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function tt(R,v){const F=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&F.__version!==R.version){it(F,R,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}const Z={[Rs]:n.REPEAT,[ai]:n.CLAMP_TO_EDGE,[Bl]:n.MIRRORED_REPEAT},ut={[ze]:n.NEAREST,[em]:n.NEAREST_MIPMAP_NEAREST,[Fr]:n.NEAREST_MIPMAP_LINEAR,[We]:n.LINEAR,[Ho]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},_t={[sm]:n.NEVER,[cm]:n.ALWAYS,[rm]:n.LESS,[kc]:n.LEQUAL,[am]:n.EQUAL,[Gc]:n.GEQUAL,[om]:n.GREATER,[lm]:n.NOTEQUAL};function pt(R,v){if(v.type===zn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===We||v.magFilter===Ho||v.magFilter===Fr||v.magFilter===Vi||v.minFilter===We||v.minFilter===Ho||v.minFilter===Fr||v.minFilter===Vi)&&Pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Z[v.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Z[v.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Z[v.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ut[v.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ut[v.minFilter]),v.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,_t[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ze||v.minFilter!==Fr&&v.minFilter!==Vi||v.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Vt(R,v){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",T));const q=v.source;let K=h.get(q);K===void 0&&(K={},h.set(q,K));const Y=z(v);if(Y!==R.__cacheKey){K[Y]===void 0&&(K[Y]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),K[Y].usedTimes++;const xt=K[R.__cacheKey];xt!==void 0&&(K[R.__cacheKey].usedTimes--,xt.usedTimes===0&&y(v)),R.__cacheKey=Y,R.__webglTexture=K[Y].texture}return F}function _e(R,v,F){return Math.floor(Math.floor(R/F)/v)}function ge(R,v,F,q){const Y=R.updateRanges;if(Y.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,F,q,v.data);else{Y.sort((J,et)=>J.start-et.start);let xt=0;for(let J=1;J<Y.length;J++){const et=Y[xt],vt=Y[J],St=et.start+et.count,ft=_e(vt.start,v.width,4),Ht=_e(et.start,v.width,4);vt.start<=St+1&&ft===Ht&&_e(vt.start+vt.count-1,v.width,4)===ft?et.count=Math.max(et.count,vt.start+vt.count-et.start):(++xt,Y[xt]=vt)}Y.length=xt+1;const st=n.getParameter(n.UNPACK_ROW_LENGTH),Ct=n.getParameter(n.UNPACK_SKIP_PIXELS),Dt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let J=0,et=Y.length;J<et;J++){const vt=Y[J],St=Math.floor(vt.start/4),ft=Math.ceil(vt.count/4),Ht=St%v.width,U=Math.floor(St/v.width),rt=ft,nt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ht),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),e.texSubImage2D(n.TEXTURE_2D,0,Ht,U,rt,nt,F,q,v.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,st),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ct),n.pixelStorei(n.UNPACK_SKIP_ROWS,Dt)}}function j(R,v,F){let q=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=n.TEXTURE_3D);const K=Vt(R,v),Y=v.source;e.bindTexture(q,R.__webglTexture,n.TEXTURE0+F);const xt=i.get(Y);if(Y.version!==xt.__version||K===!0){e.activeTexture(n.TEXTURE0+F);const st=jt.getPrimaries(jt.workingColorSpace),Ct=v.colorSpace===bi?null:jt.getPrimaries(v.colorSpace),Dt=v.colorSpace===bi||st===Ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let J=S(v.image,!1,s.maxTextureSize);J=ue(v,J);const et=r.convert(v.format,v.colorSpace),vt=r.convert(v.type);let St=b(v.internalFormat,et,vt,v.colorSpace,v.isVideoTexture);pt(q,v);let ft;const Ht=v.mipmaps,U=v.isVideoTexture!==!0,rt=xt.__version===void 0||K===!0,nt=Y.dataReady,gt=w(v,J);if(v.isDepthTexture)St=M(v.format===ki,v.type),rt&&(U?e.texStorage2D(n.TEXTURE_2D,1,St,J.width,J.height):e.texImage2D(n.TEXTURE_2D,0,St,J.width,J.height,0,et,vt,null));else if(v.isDataTexture)if(Ht.length>0){U&&rt&&e.texStorage2D(n.TEXTURE_2D,gt,St,Ht[0].width,Ht[0].height);for(let Q=0,X=Ht.length;Q<X;Q++)ft=Ht[Q],U?nt&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,ft.width,ft.height,et,vt,ft.data):e.texImage2D(n.TEXTURE_2D,Q,St,ft.width,ft.height,0,et,vt,ft.data);v.generateMipmaps=!1}else U?(rt&&e.texStorage2D(n.TEXTURE_2D,gt,St,J.width,J.height),nt&&ge(v,J,et,vt)):e.texImage2D(n.TEXTURE_2D,0,St,J.width,J.height,0,et,vt,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){U&&rt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,St,Ht[0].width,Ht[0].height,J.depth);for(let Q=0,X=Ht.length;Q<X;Q++)if(ft=Ht[Q],v.format!==Pn)if(et!==null)if(U){if(nt)if(v.layerUpdates.size>0){const Mt=Nd(ft.width,ft.height,v.format,v.type);for(const Ut of v.layerUpdates){const fe=ft.data.subarray(Ut*Mt/ft.data.BYTES_PER_ELEMENT,(Ut+1)*Mt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Ut,ft.width,ft.height,1,et,fe)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ft.width,ft.height,J.depth,et,ft.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,St,ft.width,ft.height,J.depth,0,ft.data,0,0);else Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?nt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ft.width,ft.height,J.depth,et,vt,ft.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Q,St,ft.width,ft.height,J.depth,0,et,vt,ft.data)}else{U&&rt&&e.texStorage2D(n.TEXTURE_2D,gt,St,Ht[0].width,Ht[0].height);for(let Q=0,X=Ht.length;Q<X;Q++)ft=Ht[Q],v.format!==Pn?et!==null?U?nt&&e.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,ft.width,ft.height,et,ft.data):e.compressedTexImage2D(n.TEXTURE_2D,Q,St,ft.width,ft.height,0,ft.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?nt&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,ft.width,ft.height,et,vt,ft.data):e.texImage2D(n.TEXTURE_2D,Q,St,ft.width,ft.height,0,et,vt,ft.data)}else if(v.isDataArrayTexture)if(U){if(rt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,St,J.width,J.height,J.depth),nt)if(v.layerUpdates.size>0){const Q=Nd(J.width,J.height,v.format,v.type);for(const X of v.layerUpdates){const Mt=J.data.subarray(X*Q/J.data.BYTES_PER_ELEMENT,(X+1)*Q/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,X,J.width,J.height,1,et,vt,Mt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,et,vt,J.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,St,J.width,J.height,J.depth,0,et,vt,J.data);else if(v.isData3DTexture)U?(rt&&e.texStorage3D(n.TEXTURE_3D,gt,St,J.width,J.height,J.depth),nt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,et,vt,J.data)):e.texImage3D(n.TEXTURE_3D,0,St,J.width,J.height,J.depth,0,et,vt,J.data);else if(v.isFramebufferTexture){if(rt)if(U)e.texStorage2D(n.TEXTURE_2D,gt,St,J.width,J.height);else{let Q=J.width,X=J.height;for(let Mt=0;Mt<gt;Mt++)e.texImage2D(n.TEXTURE_2D,Mt,St,Q,X,0,et,vt,null),Q>>=1,X>>=1}}else if(Ht.length>0){if(U&&rt){const Q=Et(Ht[0]);e.texStorage2D(n.TEXTURE_2D,gt,St,Q.width,Q.height)}for(let Q=0,X=Ht.length;Q<X;Q++)ft=Ht[Q],U?nt&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,et,vt,ft):e.texImage2D(n.TEXTURE_2D,Q,St,et,vt,ft);v.generateMipmaps=!1}else if(U){if(rt){const Q=Et(J);e.texStorage2D(n.TEXTURE_2D,gt,St,Q.width,Q.height)}nt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,et,vt,J)}else e.texImage2D(n.TEXTURE_2D,0,St,et,vt,J);f(v)&&d(q),xt.__version=Y.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function it(R,v,F){if(v.image.length!==6)return;const q=Vt(R,v),K=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+F);const Y=i.get(K);if(K.version!==Y.__version||q===!0){e.activeTexture(n.TEXTURE0+F);const xt=jt.getPrimaries(jt.workingColorSpace),st=v.colorSpace===bi?null:jt.getPrimaries(v.colorSpace),Ct=v.colorSpace===bi||xt===st?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Dt=v.isCompressedTexture||v.image[0].isCompressedTexture,J=v.image[0]&&v.image[0].isDataTexture,et=[];for(let X=0;X<6;X++)!Dt&&!J?et[X]=S(v.image[X],!0,s.maxCubemapSize):et[X]=J?v.image[X].image:v.image[X],et[X]=ue(v,et[X]);const vt=et[0],St=r.convert(v.format,v.colorSpace),ft=r.convert(v.type),Ht=b(v.internalFormat,St,ft,v.colorSpace),U=v.isVideoTexture!==!0,rt=Y.__version===void 0||q===!0,nt=K.dataReady;let gt=w(v,vt);pt(n.TEXTURE_CUBE_MAP,v);let Q;if(Dt){U&&rt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Ht,vt.width,vt.height);for(let X=0;X<6;X++){Q=et[X].mipmaps;for(let Mt=0;Mt<Q.length;Mt++){const Ut=Q[Mt];v.format!==Pn?St!==null?U?nt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,Mt,0,0,Ut.width,Ut.height,St,Ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,Mt,Ht,Ut.width,Ut.height,0,Ut.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,Mt,0,0,Ut.width,Ut.height,St,ft,Ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,Mt,Ht,Ut.width,Ut.height,0,St,ft,Ut.data)}}}else{if(Q=v.mipmaps,U&&rt){Q.length>0&&gt++;const X=Et(et[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Ht,X.width,X.height)}for(let X=0;X<6;X++)if(J){U?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,et[X].width,et[X].height,St,ft,et[X].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ht,et[X].width,et[X].height,0,St,ft,et[X].data);for(let Mt=0;Mt<Q.length;Mt++){const fe=Q[Mt].image[X].image;U?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,Mt+1,0,0,fe.width,fe.height,St,ft,fe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,Mt+1,Ht,fe.width,fe.height,0,St,ft,fe.data)}}else{U?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,St,ft,et[X]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ht,St,ft,et[X]);for(let Mt=0;Mt<Q.length;Mt++){const Ut=Q[Mt];U?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,Mt+1,0,0,St,ft,Ut.image[X]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,Mt+1,Ht,St,ft,Ut.image[X])}}}f(v)&&d(n.TEXTURE_CUBE_MAP),Y.__version=K.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function at(R,v,F,q,K,Y){const xt=r.convert(F.format,F.colorSpace),st=r.convert(F.type),Ct=b(F.internalFormat,xt,st,F.colorSpace),Dt=i.get(v),J=i.get(F);if(J.__renderTarget=v,!Dt.__hasExternalTextures){const et=Math.max(1,v.width>>Y),vt=Math.max(1,v.height>>Y);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,Y,Ct,et,vt,v.depth,0,xt,st,null):e.texImage2D(K,Y,Ct,et,vt,0,xt,st,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),we(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,K,J.__webglTexture,0,L(v)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,K,J.__webglTexture,Y),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ot(R,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,R),v.depthBuffer){const q=v.depthTexture,K=q&&q.isDepthTexture?q.type:null,Y=M(v.stencilBuffer,K),xt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;we(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L(v),Y,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,L(v),Y,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Y,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xt,n.RENDERBUFFER,R)}else{const q=v.textures;for(let K=0;K<q.length;K++){const Y=q[K],xt=r.convert(Y.format,Y.colorSpace),st=r.convert(Y.type),Ct=b(Y.internalFormat,xt,st,Y.colorSpace);we(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L(v),Ct,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,L(v),Ct,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Ct,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Rt(R,v,F){const q=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(v.depthTexture);if(K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q){if(K.__webglInit===void 0&&(K.__webglInit=!0,v.depthTexture.addEventListener("dispose",T)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),pt(n.TEXTURE_CUBE_MAP,v.depthTexture);const Dt=r.convert(v.depthTexture.format),J=r.convert(v.depthTexture.type);let et;v.depthTexture.format===hi?et=n.DEPTH_COMPONENT24:v.depthTexture.format===ki&&(et=n.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,et,v.width,v.height,0,Dt,J,null)}}else B(v.depthTexture,0);const Y=K.__webglTexture,xt=L(v),st=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,Ct=v.depthTexture.format===ki?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===hi)we(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ct,st,Y,0,xt):n.framebufferTexture2D(n.FRAMEBUFFER,Ct,st,Y,0);else if(v.depthTexture.format===ki)we(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ct,st,Y,0,xt):n.framebufferTexture2D(n.FRAMEBUFFER,Ct,st,Y,0);else throw new Error("Unknown depthTexture format")}function Lt(R){const v=i.get(R),F=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){const K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=q}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(F)for(let q=0;q<6;q++)Rt(v.__webglFramebuffer[q],R,q);else{const q=R.texture.mipmaps;q&&q.length>0?Rt(v.__webglFramebuffer[0],R,0):Rt(v.__webglFramebuffer,R,0)}else if(F){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=n.createRenderbuffer(),Ot(v.__webglDepthbuffer[q],R,!1);else{const K=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,Y)}}else{const q=R.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Ot(v.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,Y)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function De(R,v,F){const q=i.get(R);v!==void 0&&at(q.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Lt(R)}function Zt(R){const v=R.texture,F=i.get(R),q=i.get(v);R.addEventListener("dispose",C);const K=R.textures,Y=R.isWebGLCubeRenderTarget===!0,xt=K.length>1;if(xt||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=v.version,a.memory.textures++),Y){F.__webglFramebuffer=[];for(let st=0;st<6;st++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[st]=[];for(let Ct=0;Ct<v.mipmaps.length;Ct++)F.__webglFramebuffer[st][Ct]=n.createFramebuffer()}else F.__webglFramebuffer[st]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let st=0;st<v.mipmaps.length;st++)F.__webglFramebuffer[st]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(xt)for(let st=0,Ct=K.length;st<Ct;st++){const Dt=i.get(K[st]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&we(R)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let st=0;st<K.length;st++){const Ct=K[st];F.__webglColorRenderbuffer[st]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[st]);const Dt=r.convert(Ct.format,Ct.colorSpace),J=r.convert(Ct.type),et=b(Ct.internalFormat,Dt,J,Ct.colorSpace,R.isXRRenderTarget===!0),vt=L(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,vt,et,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,F.__webglColorRenderbuffer[st])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Ot(F.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),pt(n.TEXTURE_CUBE_MAP,v);for(let st=0;st<6;st++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ct=0;Ct<v.mipmaps.length;Ct++)at(F.__webglFramebuffer[st][Ct],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct);else at(F.__webglFramebuffer[st],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);f(v)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let st=0,Ct=K.length;st<Ct;st++){const Dt=K[st],J=i.get(Dt);let et=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(et=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(et,J.__webglTexture),pt(et,Dt),at(F.__webglFramebuffer,R,Dt,n.COLOR_ATTACHMENT0+st,et,0),f(Dt)&&d(et)}e.unbindTexture()}else{let st=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(st=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(st,q.__webglTexture),pt(st,v),v.mipmaps&&v.mipmaps.length>0)for(let Ct=0;Ct<v.mipmaps.length;Ct++)at(F.__webglFramebuffer[Ct],R,v,n.COLOR_ATTACHMENT0,st,Ct);else at(F.__webglFramebuffer,R,v,n.COLOR_ATTACHMENT0,st,0);f(v)&&d(st),e.unbindTexture()}R.depthBuffer&&Lt(R)}function ee(R){const v=R.textures;for(let F=0,q=v.length;F<q;F++){const K=v[F];if(f(K)){const Y=g(R),xt=i.get(K).__webglTexture;e.bindTexture(Y,xt),d(Y),e.unbindTexture()}}}const ce=[],Gt=[];function Me(R){if(R.samples>0){if(we(R)===!1){const v=R.textures,F=R.width,q=R.height;let K=n.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(R),st=v.length>1;if(st)for(let Dt=0;Dt<v.length;Dt++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);const Ct=R.texture.mipmaps;Ct&&Ct.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Dt=0;Dt<v.length;Dt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),st){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[Dt]);const J=i.get(v[Dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,F,q,0,0,F,q,K,n.NEAREST),l===!0&&(ce.length=0,Gt.length=0,ce.push(n.COLOR_ATTACHMENT0+Dt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ce.push(Y),Gt.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Gt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),st)for(let Dt=0;Dt<v.length;Dt++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Dt,n.RENDERBUFFER,xt.__webglColorRenderbuffer[Dt]);const J=i.get(v[Dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Dt,n.TEXTURE_2D,J,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const v=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function L(R){return Math.min(s.maxSamples,R.samples)}function we(R){const v=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Qt(R){const v=a.render.frame;u.get(R)!==v&&(u.set(R,v),R.update())}function ue(R,v){const F=R.colorSpace,q=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==Ds&&F!==bi&&(jt.getTransfer(F)===te?(q!==Pn||K!==hn)&&Pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",F)),v}function Et(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=D,this.setTexture2D=B,this.setTexture2DArray=H,this.setTexture3D=V,this.setTextureCube=tt,this.rebindTextures=De,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=we,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function iM(n,t){function e(i,s=bi){let r;const a=jt.getTransfer(s);if(i===hn)return n.UNSIGNED_BYTE;if(i===Fc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Oc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Lu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Uu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Du)return n.BYTE;if(i===Iu)return n.SHORT;if(i===or)return n.UNSIGNED_SHORT;if(i===Nc)return n.INT;if(i===Xn)return n.UNSIGNED_INT;if(i===zn)return n.FLOAT;if(i===un)return n.HALF_FLOAT;if(i===Nu)return n.ALPHA;if(i===Fu)return n.RGB;if(i===Pn)return n.RGBA;if(i===hi)return n.DEPTH_COMPONENT;if(i===ki)return n.DEPTH_STENCIL;if(i===Ou)return n.RED;if(i===Bc)return n.RED_INTEGER;if(i===Ps)return n.RG;if(i===zc)return n.RG_INTEGER;if(i===Vc)return n.RGBA_INTEGER;if(i===Ea||i===Ta||i===wa||i===Aa)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zl||i===Vl||i===kl||i===Gl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===zl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hl||i===Wl||i===Xl||i===Yl||i===ql||i===jl||i===Kl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Hl||i===Wl)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Xl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Yl)return r.COMPRESSED_R11_EAC;if(i===ql)return r.COMPRESSED_SIGNED_R11_EAC;if(i===jl)return r.COMPRESSED_RG11_EAC;if(i===Kl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Zl||i===$l||i===Jl||i===Ql||i===tc||i===ec||i===nc||i===ic||i===sc||i===rc||i===ac||i===oc||i===lc||i===cc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Zl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$l)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ql)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tc)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ec)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===nc)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ic)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sc)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rc)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ac)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===oc)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===lc)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cc)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hc||i===dc||i===uc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===hc)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fc||i===pc||i===mc||i===gc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===fc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===mc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const sM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class aM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Xu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Xe({vertexShader:sM,fragmentShader:rM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $(new rn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oM extends Yi{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,m=null,h=null,p=null,_=null;const S=typeof XRWebGLBinding<"u",f=new aM,d={},g=e.getContextAttributes();let b=null,M=null;const w=[],T=[],C=new dt;let x=null;const y=new tn;y.viewport=new ve;const P=new tn;P.viewport=new ve;const A=[y,P],D=new p0;let N=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let it=w[j];return it===void 0&&(it=new Ko,w[j]=it),it.getTargetRaySpace()},this.getControllerGrip=function(j){let it=w[j];return it===void 0&&(it=new Ko,w[j]=it),it.getGripSpace()},this.getHand=function(j){let it=w[j];return it===void 0&&(it=new Ko,w[j]=it),it.getHandSpace()};function B(j){const it=T.indexOf(j.inputSource);if(it===-1)return;const at=w[it];at!==void 0&&(at.update(j.inputSource,j.frame,c||a),at.dispatchEvent({type:j.type,data:j.inputSource}))}function H(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",V);for(let j=0;j<w.length;j++){const it=T[j];it!==null&&(T[j]=null,w[j].disconnect(it))}N=null,z=null,f.reset();for(const j in d)delete d[j];t.setRenderTarget(b),p=null,h=null,m=null,s=null,M=null,ge.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&Pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return m===null&&S&&(m=new XRWebGLBinding(s,e)),m},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",H),s.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,Ot=null,Rt=null;g.depth&&(Rt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=g.stencil?ki:hi,Ot=g.stencil?lr:Xn);const Lt={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};m=this.getBinding(),h=m.createProjectionLayer(Lt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new nn(h.textureWidth,h.textureHeight,{format:Pn,type:hn,depthTexture:new dr(h.textureWidth,h.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const at={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new nn(p.framebufferWidth,p.framebufferHeight,{format:Pn,type:hn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ge.setContext(s),ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function V(j){for(let it=0;it<j.removed.length;it++){const at=j.removed[it],Ot=T.indexOf(at);Ot>=0&&(T[Ot]=null,w[Ot].disconnect(at))}for(let it=0;it<j.added.length;it++){const at=j.added[it];let Ot=T.indexOf(at);if(Ot===-1){for(let Lt=0;Lt<w.length;Lt++)if(Lt>=T.length){T.push(at),Ot=Lt;break}else if(T[Lt]===null){T[Lt]=at,Ot=Lt;break}if(Ot===-1)break}const Rt=w[Ot];Rt&&Rt.connect(at)}}const tt=new I,Z=new I;function ut(j,it,at){tt.setFromMatrixPosition(it.matrixWorld),Z.setFromMatrixPosition(at.matrixWorld);const Ot=tt.distanceTo(Z),Rt=it.projectionMatrix.elements,Lt=at.projectionMatrix.elements,De=Rt[14]/(Rt[10]-1),Zt=Rt[14]/(Rt[10]+1),ee=(Rt[9]+1)/Rt[5],ce=(Rt[9]-1)/Rt[5],Gt=(Rt[8]-1)/Rt[0],Me=(Lt[8]+1)/Lt[0],L=De*Gt,we=De*Me,Qt=Ot/(-Gt+Me),ue=Qt*-Gt;if(it.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ue),j.translateZ(Qt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Rt[10]===-1)j.projectionMatrix.copy(it.projectionMatrix),j.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const Et=De+Qt,R=Zt+Qt,v=L-ue,F=we+(Ot-ue),q=ee*Zt/R*Et,K=ce*Zt/R*Et;j.projectionMatrix.makePerspective(v,F,q,K,Et,R),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function _t(j,it){it===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(it.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let it=j.near,at=j.far;f.texture!==null&&(f.depthNear>0&&(it=f.depthNear),f.depthFar>0&&(at=f.depthFar)),D.near=P.near=y.near=it,D.far=P.far=y.far=at,(N!==D.near||z!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),N=D.near,z=D.far),D.layers.mask=j.layers.mask|6,y.layers.mask=D.layers.mask&-5,P.layers.mask=D.layers.mask&-3;const Ot=j.parent,Rt=D.cameras;_t(D,Ot);for(let Lt=0;Lt<Rt.length;Lt++)_t(Rt[Lt],Ot);Rt.length===2?ut(D,y,P):D.projectionMatrix.copy(y.projectionMatrix),pt(j,D,Ot)};function pt(j,it,at){at===null?j.matrix.copy(it.matrixWorld):(j.matrix.copy(at.matrixWorld),j.matrix.invert(),j.matrix.multiply(it.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(it.projectionMatrix),j.projectionMatrixInverse.copy(it.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=hr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(D)},this.getCameraTexture=function(j){return d[j]};let Vt=null;function _e(j,it){if(u=it.getViewerPose(c||a),_=it,u!==null){const at=u.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let Ot=!1;at.length!==D.cameras.length&&(D.cameras.length=0,Ot=!0);for(let Zt=0;Zt<at.length;Zt++){const ee=at[Zt];let ce=null;if(p!==null)ce=p.getViewport(ee);else{const Me=m.getViewSubImage(h,ee);ce=Me.viewport,Zt===0&&(t.setRenderTargetTextures(M,Me.colorTexture,Me.depthStencilTexture),t.setRenderTarget(M))}let Gt=A[Zt];Gt===void 0&&(Gt=new tn,Gt.layers.enable(Zt),Gt.viewport=new ve,A[Zt]=Gt),Gt.matrix.fromArray(ee.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(ee.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(ce.x,ce.y,ce.width,ce.height),Zt===0&&(D.matrix.copy(Gt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ot===!0&&D.cameras.push(Gt)}const Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){m=i.getBinding();const Zt=m.getDepthInformation(at[0]);Zt&&Zt.isValid&&Zt.texture&&f.init(Zt,s.renderState)}if(Rt&&Rt.includes("camera-access")&&S){t.state.unbindTexture(),m=i.getBinding();for(let Zt=0;Zt<at.length;Zt++){const ee=at[Zt].camera;if(ee){let ce=d[ee];ce||(ce=new Xu,d[ee]=ce);const Gt=m.getCameraImage(ee);ce.sourceTexture=Gt}}}}for(let at=0;at<w.length;at++){const Ot=T[at],Rt=w[at];Ot!==null&&Rt!==void 0&&Rt.update(Ot,it,c||a)}Vt&&Vt(j,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),_=null}const ge=new Zu;ge.setAnimationLoop(_e),this.setAnimationLoop=function(j){Vt=j},this.dispose=function(){}}}const Ui=new vn,lM=new me;function cM(n,t){function e(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function i(f,d){d.color.getRGB(f.fogColor.value,Yu(n)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,g,b,M){d.isMeshBasicMaterial?r(f,d):d.isMeshLambertMaterial?(r(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(f,d),m(f,d)):d.isMeshPhongMaterial?(r(f,d),u(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(f,d),h(f,d),d.isMeshPhysicalMaterial&&p(f,d,M)):d.isMeshMatcapMaterial?(r(f,d),_(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),S(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(a(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?l(f,d,g,b):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,e(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Ye&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,e(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Ye&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,e(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,e(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const g=t.get(d),b=g.envMap,M=g.envMapRotation;b&&(f.envMap.value=b,Ui.copy(M),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),f.envMapRotation.value.setFromMatrix4(lM.makeRotationFromEuler(Ui)),f.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,f.aoMapTransform))}function a(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform))}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,g,b){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*g,f.scale.value=b*.5,d.map&&(f.map.value=d.map,e(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function u(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function m(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function h(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function p(f,d,g){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ye&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=g.texture,f.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,d){d.matcap&&(f.matcap.value=d.matcap)}function S(f,d){const g=t.get(d).light;f.referencePosition.value.setFromMatrixPosition(g.matrixWorld),f.nearDistance.value=g.shadow.camera.near,f.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function hM(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,b){const M=b.program;i.uniformBlockBinding(g,M)}function c(g,b){let M=s[g.id];M===void 0&&(_(g),M=u(g),s[g.id]=M,g.addEventListener("dispose",f));const w=b.program;i.updateUBOMapping(g,w);const T=t.render.frame;r[g.id]!==T&&(h(g),r[g.id]=T)}function u(g){const b=m();g.__bindingPointIndex=b;const M=n.createBuffer(),w=g.__size,T=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,w,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function m(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const b=s[g.id],M=g.uniforms,w=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,C=M.length;T<C;T++){const x=Array.isArray(M[T])?M[T]:[M[T]];for(let y=0,P=x.length;y<P;y++){const A=x[y];if(p(A,T,y,w)===!0){const D=A.__offset,N=Array.isArray(A.value)?A.value:[A.value];let z=0;for(let B=0;B<N.length;B++){const H=N[B],V=S(H);typeof H=="number"||typeof H=="boolean"?(A.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,D+z,A.__data)):H.isMatrix3?(A.__data[0]=H.elements[0],A.__data[1]=H.elements[1],A.__data[2]=H.elements[2],A.__data[3]=0,A.__data[4]=H.elements[3],A.__data[5]=H.elements[4],A.__data[6]=H.elements[5],A.__data[7]=0,A.__data[8]=H.elements[6],A.__data[9]=H.elements[7],A.__data[10]=H.elements[8],A.__data[11]=0):(H.toArray(A.__data,z),z+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(g,b,M,w){const T=g.value,C=b+"_"+M;if(w[C]===void 0)return typeof T=="number"||typeof T=="boolean"?w[C]=T:w[C]=T.clone(),!0;{const x=w[C];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return w[C]=T,!0}else if(x.equals(T)===!1)return x.copy(T),!0}return!1}function _(g){const b=g.uniforms;let M=0;const w=16;for(let C=0,x=b.length;C<x;C++){const y=Array.isArray(b[C])?b[C]:[b[C]];for(let P=0,A=y.length;P<A;P++){const D=y[P],N=Array.isArray(D.value)?D.value:[D.value];for(let z=0,B=N.length;z<B;z++){const H=N[z],V=S(H),tt=M%w,Z=tt%V.boundary,ut=tt+Z;M+=Z,ut!==0&&w-ut<V.storage&&(M+=w-ut),D.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=V.storage}}}const T=M%w;return T>0&&(M+=w-T),g.__size=M,g.__cache={},this}function S(g){const b={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(b.boundary=4,b.storage=4):g.isVector2?(b.boundary=8,b.storage=8):g.isVector3||g.isColor?(b.boundary=16,b.storage=12):g.isVector4?(b.boundary=16,b.storage=16):g.isMatrix3?(b.boundary=48,b.storage=48):g.isMatrix4?(b.boundary=64,b.storage=64):g.isTexture?Pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Pt("WebGLRenderer: Unsupported uniform value type.",g),b}function f(g){const b=g.target;b.removeEventListener("dispose",f);const M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(const g in s)n.deleteBuffer(s[g]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}const dM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Nn=null;function uM(){return Nn===null&&(Nn=new Zm(dM,16,16,Ps,un),Nn.name="DFG_LUT",Nn.minFilter=We,Nn.magFilter=We,Nn.wrapS=ai,Nn.wrapT=ai,Nn.generateMipmaps=!1,Nn.needsUpdate=!0),Nn}class fM{constructor(t={}){const{canvas:e=dm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:h=!1,outputBufferType:p=hn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const S=p,f=new Set([Vc,zc,Bc]),d=new Set([hn,Xn,or,lr,Fc,Oc]),g=new Uint32Array(4),b=new Int32Array(4);let M=null,w=null;const T=[],C=[];let x=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let P=!1;this._outputColorSpace=gn;let A=0,D=0,N=null,z=-1,B=null;const H=new ve,V=new ve;let tt=null;const Z=new yt(0);let ut=0,_t=e.width,pt=e.height,Vt=1,_e=null,ge=null;const j=new ve(0,0,_t,pt),it=new ve(0,0,_t,pt);let at=!1;const Ot=new jc;let Rt=!1,Lt=!1;const De=new me,Zt=new I,ee=new ve,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function Me(){return N===null?Vt:1}let L=i;function we(E,O){return e.getContext(E,O)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Cc}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",Ut,!1),e.addEventListener("webglcontextcreationerror",fe,!1),L===null){const O="webgl2";if(L=we(O,E),L===null)throw we(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw qt("WebGLRenderer: "+E.message),E}let Qt,ue,Et,R,v,F,q,K,Y,xt,st,Ct,Dt,J,et,vt,St,ft,Ht,U,rt,nt,gt;function Q(){Qt=new fx(L),Qt.init(),rt=new iM(L,Qt),ue=new rx(L,Qt,t,rt),Et=new eM(L,Qt),ue.reversedDepthBuffer&&h&&Et.buffers.depth.setReversed(!0),R=new gx(L),v=new kv,F=new nM(L,Qt,Et,v,ue,rt,R),q=new ux(y),K=new y0(L),nt=new ix(L,K),Y=new px(L,K,R,nt),xt=new xx(L,Y,K,nt,R),ft=new _x(L,ue,F),et=new ax(v),st=new Vv(y,q,Qt,ue,nt,et),Ct=new cM(y,v),Dt=new Hv,J=new Kv(Qt),St=new nx(y,q,Et,xt,_,l),vt=new tM(y,xt,ue),gt=new hM(L,R,ue,Et),Ht=new sx(L,Qt,R),U=new mx(L,Qt,R),R.programs=st.programs,y.capabilities=ue,y.extensions=Qt,y.properties=v,y.renderLists=Dt,y.shadowMap=vt,y.state=Et,y.info=R}Q(),S!==hn&&(x=new Mx(S,e.width,e.height,s,r));const X=new oM(y,L);this.xr=X,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=Qt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Qt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Vt},this.setPixelRatio=function(E){E!==void 0&&(Vt=E,this.setSize(_t,pt,!1))},this.getSize=function(E){return E.set(_t,pt)},this.setSize=function(E,O,W=!0){if(X.isPresenting){Pt("WebGLRenderer: Can't change size while VR device is presenting.");return}_t=E,pt=O,e.width=Math.floor(E*Vt),e.height=Math.floor(O*Vt),W===!0&&(e.style.width=E+"px",e.style.height=O+"px"),x!==null&&x.setSize(e.width,e.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(_t*Vt,pt*Vt).floor()},this.setDrawingBufferSize=function(E,O,W){_t=E,pt=O,Vt=W,e.width=Math.floor(E*W),e.height=Math.floor(O*W),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(S===hn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(H)},this.getViewport=function(E){return E.copy(j)},this.setViewport=function(E,O,W,G){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,O,W,G),Et.viewport(H.copy(j).multiplyScalar(Vt).round())},this.getScissor=function(E){return E.copy(it)},this.setScissor=function(E,O,W,G){E.isVector4?it.set(E.x,E.y,E.z,E.w):it.set(E,O,W,G),Et.scissor(V.copy(it).multiplyScalar(Vt).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(E){Et.setScissorTest(at=E)},this.setOpaqueSort=function(E){_e=E},this.setTransparentSort=function(E){ge=E},this.getClearColor=function(E){return E.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,W=!0){let G=0;if(E){let k=!1;if(N!==null){const lt=N.texture.format;k=f.has(lt)}if(k){const lt=N.texture.type,mt=d.has(lt),ct=St.getClearColor(),bt=St.getClearAlpha(),wt=ct.r,Ft=ct.g,Wt=ct.b;mt?(g[0]=wt,g[1]=Ft,g[2]=Wt,g[3]=bt,L.clearBufferuiv(L.COLOR,0,g)):(b[0]=wt,b[1]=Ft,b[2]=Wt,b[3]=bt,L.clearBufferiv(L.COLOR,0,b))}else G|=L.COLOR_BUFFER_BIT}O&&(G|=L.DEPTH_BUFFER_BIT),W&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",Ut,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),St.dispose(),Dt.dispose(),J.dispose(),v.dispose(),q.dispose(),xt.dispose(),nt.dispose(),gt.dispose(),st.dispose(),X.dispose(),X.removeEventListener("sessionstart",Xh),X.removeEventListener("sessionend",Yh),Ai.stop()};function Mt(E){E.preventDefault(),Fa("WebGLRenderer: Context Lost."),P=!0}function Ut(){Fa("WebGLRenderer: Context Restored."),P=!1;const E=R.autoReset,O=vt.enabled,W=vt.autoUpdate,G=vt.needsUpdate,k=vt.type;Q(),R.autoReset=E,vt.enabled=O,vt.autoUpdate=W,vt.needsUpdate=G,vt.type=k}function fe(E){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ne(E){const O=E.target;O.removeEventListener("dispose",ne),Kn(O)}function Kn(E){Zn(E),v.remove(E)}function Zn(E){const O=v.get(E).programs;O!==void 0&&(O.forEach(function(W){st.releaseProgram(W)}),E.isShaderMaterial&&st.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,W,G,k,lt){O===null&&(O=ce);const mt=k.isMesh&&k.matrixWorld.determinant()<0,ct=Ap(E,O,W,G,k);Et.setMaterial(G,mt);let bt=W.index,wt=1;if(G.wireframe===!0){if(bt=Y.getWireframeAttribute(W),bt===void 0)return;wt=2}const Ft=W.drawRange,Wt=W.attributes.position;let At=Ft.start*wt,re=(Ft.start+Ft.count)*wt;lt!==null&&(At=Math.max(At,lt.start*wt),re=Math.min(re,(lt.start+lt.count)*wt)),bt!==null?(At=Math.max(At,0),re=Math.min(re,bt.count)):Wt!=null&&(At=Math.max(At,0),re=Math.min(re,Wt.count));const ye=re-At;if(ye<0||ye===1/0)return;nt.setup(k,G,ct,W,bt);let xe,ae=Ht;if(bt!==null&&(xe=K.get(bt),ae=U,ae.setIndex(xe)),k.isMesh)G.wireframe===!0?(Et.setLineWidth(G.wireframeLinewidth*Me()),ae.setMode(L.LINES)):ae.setMode(L.TRIANGLES);else if(k.isLine){let ke=G.linewidth;ke===void 0&&(ke=1),Et.setLineWidth(ke*Me()),k.isLineSegments?ae.setMode(L.LINES):k.isLineLoop?ae.setMode(L.LINE_LOOP):ae.setMode(L.LINE_STRIP)}else k.isPoints?ae.setMode(L.POINTS):k.isSprite&&ae.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Oa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ae.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))ae.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const ke=k._multiDrawStarts,Tt=k._multiDrawCounts,on=k._multiDrawCount,$t=bt?K.get(bt).bytesPerElement:1,Sn=v.get(G).currentProgram.getUniforms();for(let Ln=0;Ln<on;Ln++)Sn.setValue(L,"_gl_DrawID",Ln),ae.render(ke[Ln]/$t,Tt[Ln])}else if(k.isInstancedMesh)ae.renderInstances(At,ye,k.count);else if(W.isInstancedBufferGeometry){const ke=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Tt=Math.min(W.instanceCount,ke);ae.renderInstances(At,ye,Tt)}else ae.render(At,ye)};function Wh(E,O,W){E.transparent===!0&&E.side===Se&&E.forceSinglePass===!1?(E.side=Ye,E.needsUpdate=!0,Nr(E,O,W),E.side=Wn,E.needsUpdate=!0,Nr(E,O,W),E.side=Se):Nr(E,O,W)}this.compile=function(E,O,W=null){W===null&&(W=E),w=J.get(W),w.init(O),C.push(w),W.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),E!==W&&E.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),w.setupLights();const G=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const lt=k.material;if(lt)if(Array.isArray(lt))for(let mt=0;mt<lt.length;mt++){const ct=lt[mt];Wh(ct,W,k),G.add(ct)}else Wh(lt,W,k),G.add(lt)}),w=C.pop(),G},this.compileAsync=function(E,O,W=null){const G=this.compile(E,O,W);return new Promise(k=>{function lt(){if(G.forEach(function(mt){v.get(mt).currentProgram.isReady()&&G.delete(mt)}),G.size===0){k(E);return}setTimeout(lt,10)}Qt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let zo=null;function wp(E){zo&&zo(E)}function Xh(){Ai.stop()}function Yh(){Ai.start()}const Ai=new Zu;Ai.setAnimationLoop(wp),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(E){zo=E,X.setAnimationLoop(E),E===null?Ai.stop():Ai.start()},X.addEventListener("sessionstart",Xh),X.addEventListener("sessionend",Yh),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;const W=X.enabled===!0&&X.isPresenting===!0,G=x!==null&&(N===null||W)&&x.begin(y,N);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(X.cameraAutoUpdate===!0&&X.updateCamera(O),O=X.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,O,N),w=J.get(E,C.length),w.init(O),C.push(w),De.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ot.setFromProjectionMatrix(De,Vn,O.reversedDepth),Lt=this.localClippingEnabled,Rt=et.init(this.clippingPlanes,Lt),M=Dt.get(E,T.length),M.init(),T.push(M),X.enabled===!0&&X.isPresenting===!0){const mt=y.xr.getDepthSensingMesh();mt!==null&&Vo(mt,O,-1/0,y.sortObjects)}Vo(E,O,0,y.sortObjects),M.finish(),y.sortObjects===!0&&M.sort(_e,ge),Gt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Gt&&St.addToRenderList(M,E),this.info.render.frame++,Rt===!0&&et.beginShadows();const k=w.state.shadowsArray;if(vt.render(k,E,O),Rt===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&x.hasRenderPass())===!1){const mt=M.opaque,ct=M.transmissive;if(w.setupLights(),O.isArrayCamera){const bt=O.cameras;if(ct.length>0)for(let wt=0,Ft=bt.length;wt<Ft;wt++){const Wt=bt[wt];jh(mt,ct,E,Wt)}Gt&&St.render(E);for(let wt=0,Ft=bt.length;wt<Ft;wt++){const Wt=bt[wt];qh(M,E,Wt,Wt.viewport)}}else ct.length>0&&jh(mt,ct,E,O),Gt&&St.render(E),qh(M,E,O)}N!==null&&D===0&&(F.updateMultisampleRenderTarget(N),F.updateRenderTargetMipmap(N)),G&&x.end(y),E.isScene===!0&&E.onAfterRender(y,E,O),nt.resetDefaultState(),z=-1,B=null,C.pop(),C.length>0?(w=C[C.length-1],Rt===!0&&et.setGlobalState(y.clippingPlanes,w.state.camera)):w=null,T.pop(),T.length>0?M=T[T.length-1]:M=null};function Vo(E,O,W,G){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ot.intersectsSprite(E)){G&&ee.setFromMatrixPosition(E.matrixWorld).applyMatrix4(De);const mt=xt.update(E),ct=E.material;ct.visible&&M.push(E,mt,ct,W,ee.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ot.intersectsObject(E))){const mt=xt.update(E),ct=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ee.copy(E.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),ee.copy(mt.boundingSphere.center)),ee.applyMatrix4(E.matrixWorld).applyMatrix4(De)),Array.isArray(ct)){const bt=mt.groups;for(let wt=0,Ft=bt.length;wt<Ft;wt++){const Wt=bt[wt],At=ct[Wt.materialIndex];At&&At.visible&&M.push(E,mt,At,W,ee.z,Wt)}}else ct.visible&&M.push(E,mt,ct,W,ee.z,null)}}const lt=E.children;for(let mt=0,ct=lt.length;mt<ct;mt++)Vo(lt[mt],O,W,G)}function qh(E,O,W,G){const{opaque:k,transmissive:lt,transparent:mt}=E;w.setupLightsView(W),Rt===!0&&et.setGlobalState(y.clippingPlanes,W),G&&Et.viewport(H.copy(G)),k.length>0&&Ur(k,O,W),lt.length>0&&Ur(lt,O,W),mt.length>0&&Ur(mt,O,W),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function jh(E,O,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){const At=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new nn(1,1,{generateMipmaps:!0,type:At?un:hn,minFilter:Vi,samples:Math.max(4,ue.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace})}const lt=w.state.transmissionRenderTarget[G.id],mt=G.viewport||H;lt.setSize(mt.z*y.transmissionResolutionScale,mt.w*y.transmissionResolutionScale);const ct=y.getRenderTarget(),bt=y.getActiveCubeFace(),wt=y.getActiveMipmapLevel();y.setRenderTarget(lt),y.getClearColor(Z),ut=y.getClearAlpha(),ut<1&&y.setClearColor(16777215,.5),y.clear(),Gt&&St.render(W);const Ft=y.toneMapping;y.toneMapping=Gn;const Wt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),Rt===!0&&et.setGlobalState(y.clippingPlanes,G),Ur(E,W,G),F.updateMultisampleRenderTarget(lt),F.updateRenderTargetMipmap(lt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let re=0,ye=O.length;re<ye;re++){const xe=O[re],{object:ae,geometry:ke,material:Tt,group:on}=xe;if(Tt.side===Se&&ae.layers.test(G.layers)){const $t=Tt.side;Tt.side=Ye,Tt.needsUpdate=!0,Kh(ae,W,G,ke,Tt,on),Tt.side=$t,Tt.needsUpdate=!0,At=!0}}At===!0&&(F.updateMultisampleRenderTarget(lt),F.updateRenderTargetMipmap(lt))}y.setRenderTarget(ct,bt,wt),y.setClearColor(Z,ut),Wt!==void 0&&(G.viewport=Wt),y.toneMapping=Ft}function Ur(E,O,W){const G=O.isScene===!0?O.overrideMaterial:null;for(let k=0,lt=E.length;k<lt;k++){const mt=E[k],{object:ct,geometry:bt,group:wt}=mt;let Ft=mt.material;Ft.allowOverride===!0&&G!==null&&(Ft=G),ct.layers.test(W.layers)&&Kh(ct,O,W,bt,Ft,wt)}}function Kh(E,O,W,G,k,lt){E.onBeforeRender(y,O,W,G,k,lt),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(y,O,W,G,E,lt),k.transparent===!0&&k.side===Se&&k.forceSinglePass===!1?(k.side=Ye,k.needsUpdate=!0,y.renderBufferDirect(W,O,G,k,E,lt),k.side=Wn,k.needsUpdate=!0,y.renderBufferDirect(W,O,G,k,E,lt),k.side=Se):y.renderBufferDirect(W,O,G,k,E,lt),E.onAfterRender(y,O,W,G,k,lt)}function Nr(E,O,W){O.isScene!==!0&&(O=ce);const G=v.get(E),k=w.state.lights,lt=w.state.shadowsArray,mt=k.state.version,ct=st.getParameters(E,k.state,lt,O,W),bt=st.getProgramCacheKey(ct);let wt=G.programs;G.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,G.fog=O.fog;const Ft=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;G.envMap=q.get(E.envMap||G.environment,Ft),G.envMapRotation=G.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,wt===void 0&&(E.addEventListener("dispose",ne),wt=new Map,G.programs=wt);let Wt=wt.get(bt);if(Wt!==void 0){if(G.currentProgram===Wt&&G.lightsStateVersion===mt)return $h(E,ct),Wt}else ct.uniforms=st.getUniforms(E),E.onBeforeCompile(ct,y),Wt=st.acquireProgram(ct,bt),wt.set(bt,Wt),G.uniforms=ct.uniforms;const At=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(At.clippingPlanes=et.uniform),$h(E,ct),G.needsLights=Rp(E),G.lightsStateVersion=mt,G.needsLights&&(At.ambientLightColor.value=k.state.ambient,At.lightProbe.value=k.state.probe,At.directionalLights.value=k.state.directional,At.directionalLightShadows.value=k.state.directionalShadow,At.spotLights.value=k.state.spot,At.spotLightShadows.value=k.state.spotShadow,At.rectAreaLights.value=k.state.rectArea,At.ltc_1.value=k.state.rectAreaLTC1,At.ltc_2.value=k.state.rectAreaLTC2,At.pointLights.value=k.state.point,At.pointLightShadows.value=k.state.pointShadow,At.hemisphereLights.value=k.state.hemi,At.directionalShadowMatrix.value=k.state.directionalShadowMatrix,At.spotLightMatrix.value=k.state.spotLightMatrix,At.spotLightMap.value=k.state.spotLightMap,At.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=Wt,G.uniformsList=null,Wt}function Zh(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=Ca.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function $h(E,O){const W=v.get(E);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Ap(E,O,W,G,k){O.isScene!==!0&&(O=ce),F.resetTextureUnits();const lt=O.fog,mt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?O.environment:null,ct=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ds,bt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,wt=q.get(G.envMap||mt,bt),Ft=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Wt=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),At=!!W.morphAttributes.position,re=!!W.morphAttributes.normal,ye=!!W.morphAttributes.color;let xe=Gn;G.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(xe=y.toneMapping);const ae=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ke=ae!==void 0?ae.length:0,Tt=v.get(G),on=w.state.lights;if(Rt===!0&&(Lt===!0||E!==B)){const Ie=E===B&&G.id===z;et.setState(G,E,Ie)}let $t=!1;G.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==on.state.version||Tt.outputColorSpace!==ct||k.isBatchedMesh&&Tt.batching===!1||!k.isBatchedMesh&&Tt.batching===!0||k.isBatchedMesh&&Tt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Tt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Tt.instancing===!1||!k.isInstancedMesh&&Tt.instancing===!0||k.isSkinnedMesh&&Tt.skinning===!1||!k.isSkinnedMesh&&Tt.skinning===!0||k.isInstancedMesh&&Tt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Tt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Tt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Tt.instancingMorph===!1&&k.morphTexture!==null||Tt.envMap!==wt||G.fog===!0&&Tt.fog!==lt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==et.numPlanes||Tt.numIntersection!==et.numIntersection)||Tt.vertexAlphas!==Ft||Tt.vertexTangents!==Wt||Tt.morphTargets!==At||Tt.morphNormals!==re||Tt.morphColors!==ye||Tt.toneMapping!==xe||Tt.morphTargetsCount!==ke)&&($t=!0):($t=!0,Tt.__version=G.version);let Sn=Tt.currentProgram;$t===!0&&(Sn=Nr(G,O,k));let Ln=!1,Ci=!1,Ki=!1;const he=Sn.getUniforms(),Oe=Tt.uniforms;if(Et.useProgram(Sn.program)&&(Ln=!0,Ci=!0,Ki=!0),G.id!==z&&(z=G.id,Ci=!0),Ln||B!==E){Et.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),he.setValue(L,"projectionMatrix",E.projectionMatrix),he.setValue(L,"viewMatrix",E.matrixWorldInverse);const mi=he.map.cameraPosition;mi!==void 0&&mi.setValue(L,Zt.setFromMatrixPosition(E.matrixWorld)),ue.logarithmicDepthBuffer&&he.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&he.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),B!==E&&(B=E,Ci=!0,Ki=!0)}if(Tt.needsLights&&(on.state.directionalShadowMap.length>0&&he.setValue(L,"directionalShadowMap",on.state.directionalShadowMap,F),on.state.spotShadowMap.length>0&&he.setValue(L,"spotShadowMap",on.state.spotShadowMap,F),on.state.pointShadowMap.length>0&&he.setValue(L,"pointShadowMap",on.state.pointShadowMap,F)),k.isSkinnedMesh){he.setOptional(L,k,"bindMatrix"),he.setOptional(L,k,"bindMatrixInverse");const Ie=k.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),he.setValue(L,"boneTexture",Ie.boneTexture,F))}k.isBatchedMesh&&(he.setOptional(L,k,"batchingTexture"),he.setValue(L,"batchingTexture",k._matricesTexture,F),he.setOptional(L,k,"batchingIdTexture"),he.setValue(L,"batchingIdTexture",k._indirectTexture,F),he.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&he.setValue(L,"batchingColorTexture",k._colorsTexture,F));const pi=W.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&ft.update(k,W,Sn),(Ci||Tt.receiveShadow!==k.receiveShadow)&&(Tt.receiveShadow=k.receiveShadow,he.setValue(L,"receiveShadow",k.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&O.environment!==null&&(Oe.envMapIntensity.value=O.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=uM()),Ci&&(he.setValue(L,"toneMappingExposure",y.toneMappingExposure),Tt.needsLights&&Cp(Oe,Ki),lt&&G.fog===!0&&Ct.refreshFogUniforms(Oe,lt),Ct.refreshMaterialUniforms(Oe,G,Vt,pt,w.state.transmissionRenderTarget[E.id]),Ca.upload(L,Zh(Tt),Oe,F)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ca.upload(L,Zh(Tt),Oe,F),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&he.setValue(L,"center",k.center),he.setValue(L,"modelViewMatrix",k.modelViewMatrix),he.setValue(L,"normalMatrix",k.normalMatrix),he.setValue(L,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ie=G.uniformsGroups;for(let mi=0,Zi=Ie.length;mi<Zi;mi++){const Jh=Ie[mi];gt.update(Jh,Sn),gt.bind(Jh,Sn)}}return Sn}function Cp(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Rp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,O,W){const G=v.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),v.get(E.texture).__webglTexture=O,v.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){const W=v.get(E);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};const Pp=L.createFramebuffer();this.setRenderTarget=function(E,O=0,W=0){N=E,A=O,D=W;let G=null,k=!1,lt=!1;if(E){const ct=v.get(E);if(ct.__useDefaultFramebuffer!==void 0){Et.bindFramebuffer(L.FRAMEBUFFER,ct.__webglFramebuffer),H.copy(E.viewport),V.copy(E.scissor),tt=E.scissorTest,Et.viewport(H),Et.scissor(V),Et.setScissorTest(tt),z=-1;return}else if(ct.__webglFramebuffer===void 0)F.setupRenderTarget(E);else if(ct.__hasExternalTextures)F.rebindTextures(E,v.get(E.texture).__webglTexture,v.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ft=E.depthTexture;if(ct.__boundDepthTexture!==Ft){if(Ft!==null&&v.has(Ft)&&(E.width!==Ft.image.width||E.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(E)}}const bt=E.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(lt=!0);const wt=v.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(wt[O])?G=wt[O][W]:G=wt[O],k=!0):E.samples>0&&F.useMultisampledRTT(E)===!1?G=v.get(E).__webglMultisampledFramebuffer:Array.isArray(wt)?G=wt[W]:G=wt,H.copy(E.viewport),V.copy(E.scissor),tt=E.scissorTest}else H.copy(j).multiplyScalar(Vt).floor(),V.copy(it).multiplyScalar(Vt).floor(),tt=at;if(W!==0&&(G=Pp),Et.bindFramebuffer(L.FRAMEBUFFER,G)&&Et.drawBuffers(E,G),Et.viewport(H),Et.scissor(V),Et.setScissorTest(tt),k){const ct=v.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,ct.__webglTexture,W)}else if(lt){const ct=O;for(let bt=0;bt<E.textures.length;bt++){const wt=v.get(E.textures[bt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+bt,wt.__webglTexture,W,ct)}}else if(E!==null&&W!==0){const ct=v.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ct.__webglTexture,W)}z=-1},this.readRenderTargetPixels=function(E,O,W,G,k,lt,mt,ct=0){if(!(E&&E.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&mt!==void 0&&(bt=bt[mt]),bt){Et.bindFramebuffer(L.FRAMEBUFFER,bt);try{const wt=E.textures[ct],Ft=wt.format,Wt=wt.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ct),!ue.textureFormatReadable(Ft)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(Wt)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-G&&W>=0&&W<=E.height-k&&L.readPixels(O,W,G,k,rt.convert(Ft),rt.convert(Wt),lt)}finally{const wt=N!==null?v.get(N).__webglFramebuffer:null;Et.bindFramebuffer(L.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(E,O,W,G,k,lt,mt,ct=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&mt!==void 0&&(bt=bt[mt]),bt)if(O>=0&&O<=E.width-G&&W>=0&&W<=E.height-k){Et.bindFramebuffer(L.FRAMEBUFFER,bt);const wt=E.textures[ct],Ft=wt.format,Wt=wt.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ct),!ue.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const At=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,At),L.bufferData(L.PIXEL_PACK_BUFFER,lt.byteLength,L.STREAM_READ),L.readPixels(O,W,G,k,rt.convert(Ft),rt.convert(Wt),0);const re=N!==null?v.get(N).__webglFramebuffer:null;Et.bindFramebuffer(L.FRAMEBUFFER,re);const ye=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await um(L,ye,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,At),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,lt),L.deleteBuffer(At),L.deleteSync(ye),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,W=0){const G=Math.pow(2,-W),k=Math.floor(E.image.width*G),lt=Math.floor(E.image.height*G),mt=O!==null?O.x:0,ct=O!==null?O.y:0;F.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,mt,ct,k,lt),Et.unbindTexture()};const Dp=L.createFramebuffer(),Ip=L.createFramebuffer();this.copyTextureToTexture=function(E,O,W=null,G=null,k=0,lt=0){let mt,ct,bt,wt,Ft,Wt,At,re,ye;const xe=E.isCompressedTexture?E.mipmaps[lt]:E.image;if(W!==null)mt=W.max.x-W.min.x,ct=W.max.y-W.min.y,bt=W.isBox3?W.max.z-W.min.z:1,wt=W.min.x,Ft=W.min.y,Wt=W.isBox3?W.min.z:0;else{const Oe=Math.pow(2,-k);mt=Math.floor(xe.width*Oe),ct=Math.floor(xe.height*Oe),E.isDataArrayTexture?bt=xe.depth:E.isData3DTexture?bt=Math.floor(xe.depth*Oe):bt=1,wt=0,Ft=0,Wt=0}G!==null?(At=G.x,re=G.y,ye=G.z):(At=0,re=0,ye=0);const ae=rt.convert(O.format),ke=rt.convert(O.type);let Tt;O.isData3DTexture?(F.setTexture3D(O,0),Tt=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(F.setTexture2DArray(O,0),Tt=L.TEXTURE_2D_ARRAY):(F.setTexture2D(O,0),Tt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const on=L.getParameter(L.UNPACK_ROW_LENGTH),$t=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Sn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ln=L.getParameter(L.UNPACK_SKIP_ROWS),Ci=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,xe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,wt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ft),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Wt);const Ki=E.isDataArrayTexture||E.isData3DTexture,he=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){const Oe=v.get(E),pi=v.get(O),Ie=v.get(Oe.__renderTarget),mi=v.get(pi.__renderTarget);Et.bindFramebuffer(L.READ_FRAMEBUFFER,Ie.__webglFramebuffer),Et.bindFramebuffer(L.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let Zi=0;Zi<bt;Zi++)Ki&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,v.get(E).__webglTexture,k,Wt+Zi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,v.get(O).__webglTexture,lt,ye+Zi)),L.blitFramebuffer(wt,Ft,mt,ct,At,re,mt,ct,L.DEPTH_BUFFER_BIT,L.NEAREST);Et.bindFramebuffer(L.READ_FRAMEBUFFER,null),Et.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||E.isRenderTargetTexture||v.has(E)){const Oe=v.get(E),pi=v.get(O);Et.bindFramebuffer(L.READ_FRAMEBUFFER,Dp),Et.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ip);for(let Ie=0;Ie<bt;Ie++)Ki?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Oe.__webglTexture,k,Wt+Ie):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Oe.__webglTexture,k),he?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pi.__webglTexture,lt,ye+Ie):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pi.__webglTexture,lt),k!==0?L.blitFramebuffer(wt,Ft,mt,ct,At,re,mt,ct,L.COLOR_BUFFER_BIT,L.NEAREST):he?L.copyTexSubImage3D(Tt,lt,At,re,ye+Ie,wt,Ft,mt,ct):L.copyTexSubImage2D(Tt,lt,At,re,wt,Ft,mt,ct);Et.bindFramebuffer(L.READ_FRAMEBUFFER,null),Et.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else he?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Tt,lt,At,re,ye,mt,ct,bt,ae,ke,xe.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(Tt,lt,At,re,ye,mt,ct,bt,ae,xe.data):L.texSubImage3D(Tt,lt,At,re,ye,mt,ct,bt,ae,ke,xe):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,lt,At,re,mt,ct,ae,ke,xe.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,lt,At,re,xe.width,xe.height,ae,xe.data):L.texSubImage2D(L.TEXTURE_2D,lt,At,re,mt,ct,ae,ke,xe);L.pixelStorei(L.UNPACK_ROW_LENGTH,on),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,$t),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Sn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ln),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ci),lt===0&&O.generateMipmaps&&L.generateMipmap(Tt),Et.unbindTexture()},this.initRenderTarget=function(E){v.get(E).__webglFramebuffer===void 0&&F.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?F.setTextureCube(E,0):E.isData3DTexture?F.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?F.setTexture2DArray(E,0):F.setTexture2D(E,0),Et.unbindTexture()},this.resetState=function(){A=0,D=0,N=null,Et.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}const ru={type:"change"},Jc={type:"start"},nf={type:"end"},ma=new vr,au=new Si,pM=Math.cos(70*Ei.DEG2RAD),Ce=new I,Qe=2*Math.PI,oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sl=1e-6;class mM extends v0{constructor(t,e=null){super(t,e),this.state=oe.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ys.ROTATE,MIDDLE:ys.DOLLY,RIGHT:ys.PAN},this.touches={ONE:vs.ROTATE,TWO:vs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new wi,this._lastTargetPosition=new I,this._quat=new wi().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ud,this._sphericalDelta=new Ud,this._scale=1,this._panOffset=new I,this._rotateStart=new dt,this._rotateEnd=new dt,this._rotateDelta=new dt,this._panStart=new dt,this._panEnd=new dt,this._panDelta=new dt,this._dollyStart=new dt,this._dollyEnd=new dt,this._dollyDelta=new dt,this._dollyDirection=new I,this._mouse=new dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_M.bind(this),this._onPointerDown=gM.bind(this),this._onPointerUp=xM.bind(this),this._onContextMenu=TM.bind(this),this._onMouseWheel=yM.bind(this),this._onKeyDown=SM.bind(this),this._onTouchStart=bM.bind(this),this._onTouchMove=EM.bind(this),this._onMouseDown=vM.bind(this),this._onMouseMove=MM.bind(this),this._interceptControlDown=wM.bind(this),this._interceptControlUp=AM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ru),this.update(),this.state=oe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Ce.copy(e).sub(this.target),Ce.applyQuaternion(this._quat),this._spherical.setFromVector3(Ce),this.autoRotate&&this.state===oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Qe:i>Math.PI&&(i-=Qe),s<-Math.PI?s+=Qe:s>Math.PI&&(s-=Qe),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ce.setFromSpherical(this._spherical),Ce.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ce),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ce.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ce.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ma.origin.copy(this.object.position),ma.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ma.direction))<pM?this.object.lookAt(this.target):(au.setFromNormalAndCoplanarPoint(this.object.up,this.target),ma.intersectPlane(au,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Sl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sl||this._lastTargetPosition.distanceToSquared(this.target)>Sl?(this.dispatchEvent(ru),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Qe/60*this.autoRotateSpeed*t:Qe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ce.setFromMatrixColumn(e,0),Ce.multiplyScalar(-t),this._panOffset.add(Ce)}_panUp(t,e){this.screenSpacePanning===!0?Ce.setFromMatrixColumn(e,1):(Ce.setFromMatrixColumn(e,0),Ce.crossVectors(this.object.up,Ce)),Ce.multiplyScalar(t),this._panOffset.add(Ce)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ce.copy(s).sub(this.target);let r=Ce.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new dt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function gM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function _M(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function xM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(nf),this.state=oe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function vM(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ys.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=oe.DOLLY;break;case ys.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=oe.ROTATE}break;case ys.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=oe.PAN}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(Jc)}function MM(n){switch(this.state){case oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function yM(n){this.enabled===!1||this.enableZoom===!1||this.state!==oe.NONE||(n.preventDefault(),this.dispatchEvent(Jc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(nf))}function SM(n){this.enabled!==!1&&this._handleKeyDown(n)}function bM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case vs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=oe.TOUCH_ROTATE;break;case vs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=oe.TOUCH_PAN;break;default:this.state=oe.NONE}break;case 2:switch(this.touches.TWO){case vs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=oe.TOUCH_DOLLY_PAN;break;case vs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=oe.TOUCH_DOLLY_ROTATE;break;default:this.state=oe.NONE}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(Jc)}function EM(n){switch(this._trackPointer(n),this.state){case oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=oe.NONE}}function TM(n){this.enabled!==!1&&n.preventDefault()}function wM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function AM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ra={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Fs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const CM=new ao(-1,1,1,-1,0,1);class RM extends Nt{constructor(){super(),this.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Kt([0,2,0,0,2,0],2))}}const PM=new RM;class Qc{constructor(t){this._mesh=new $(PM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,CM)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class sf extends Fs{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ur.clone(t.uniforms),this.material=new Xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Qc(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ou extends Fs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class DM extends Fs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class IM{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new dt);this._width=i.width,this._height=i.height,e=new nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new sf(Ra),this.copyPass.material.blending=kn,this.timer=new m0}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ou!==void 0&&(a instanceof ou?i=!0:a instanceof DM&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new dt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class LM extends Fs{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new yt}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const UM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new yt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ls extends Fs{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new dt(t.x,t.y):new dt(256,256),this.clearColor=new yt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new nn(r,a,{type:un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const m=new nn(r,a,{type:un});m.texture.name="UnrealBloomPass.h"+u,m.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(m);const h=new nn(r,a,{type:un});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),a=Math.round(a/2)}const o=UM;this.highPassUniforms=ur.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new dt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ur.clone(Ra.uniforms),this.blendMaterial=new Xe({uniforms:this.copyUniforms,vertexShader:Ra.vertexShader,fragmentShader:Ra.fragmentShader,premultipliedAlpha:!0,blending:ci,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new yt,this._oldClearAlpha=1,this._basic=new sn,this._fsQuad=new Qc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new dt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ls.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ls.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[],i=t/3;for(let s=0;s<t;s++)e.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new Xe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new dt(.5,.5)},direction:{value:new dt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Xe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Ls.BlurDirectionX=new dt(1,0);Ls.BlurDirectionY=new dt(0,1);const ga={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class NM extends Fs{constructor(){super(),this.isOutputPass=!0,this.uniforms=ur.clone(ga.uniforms),this.material=new qu({name:ga.name,uniforms:this.uniforms,vertexShader:ga.vertexShader,fragmentShader:ga.fragmentShader}),this._fsQuad=new Qc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},jt.getTransfer(this._outputColorSpace)===te&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Rc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Pc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Dc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Za?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Lc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Uc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ic&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const FM={NV_FILTER:"grayscale(1) sepia(1) hue-rotate(90deg) brightness(1.55) contrast(1.1)",NV_AMBIENT_BOOST:2.5,NV_EMISSIVE_BOOST:3.2,AMBIENT_NORMAL:.62,AMBIENT_DARK:.09,ROV_POINT_NORMAL:2,ROV_POINT_DARK:6.5,ROV_RANGE_NORMAL:3,ROV_RANGE_DARK:5.5,ROV_VIGNETTE_GRADIENT:"radial-gradient(circle at center, transparent 42%, rgba(0,20,40,0.3) 58%, rgba(0,0,0,0.45) 68%, rgba(0,0,0,0.82) 85%, rgba(0,0,0,0.96) 100%)",NV_VIGNETTE_GRADIENT:"radial-gradient(circle at center, transparent 38%, rgba(0,8,0,0.25) 52%, rgba(0,0,0,0.70) 70%, rgba(0,0,0,0.97) 100%)"},An={logs:[],maxLogs:100,info(n,t={}){this._add("INFO",n,t)},warn(n,t={}){this._add("WARN",n,t)},error(n,t={}){this._add("ERROR",n,t)},audit(n,t={}){this._add("AUDIT",n,t)},_add(n,t,e){const i={timestamp:new Date().toISOString(),level:n,message:t,data:e};this.logs.unshift(i),this.logs.length>this.maxLogs&&this.logs.pop();const r={INFO:"#00d4ff",WARN:"#ffaa00",ERROR:"#ff0055",AUDIT:"#7c3aed"}[n]||"#ffffff";console.log(`%c[SERAFIM_${n}] %c${t}`,`color: ${r}; font-weight: bold; background: #0a0a0f; padding: 2px 4px;`,"color: #c8e8ff",e)}};class OM{constructor(t,e){this.renderer=t,this.scene=e,this.lastTime=performance.now(),this.frames=0,this.fps=0,this._initUI(),An.info("WATCHDOG: Protocol initialized (v2.7.1)")}_initUI(){const t=document.createElement("div");t.id="serafim-watchdog-overlay",t.style.cssText=`
      position: fixed; top: 20px; right: 20px;
      width: 220px; background: rgba(5, 10, 20, 0.85);
      border: 1px solid rgba(0, 212, 255, 0.3);
      border-radius: 8px; padding: 12px;
      color: #00d4ff; font-family: 'JetBrains Mono', monospace;
      font-size: 10px; z-index: 9999;
      pointer-events: none; backdrop-filter: blur(10px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    `,t.innerHTML=`
      <div style="border-bottom: 1px solid rgba(0, 212, 255, 0.2); padding-bottom: 6px; margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center;">
        <span style="font-weight: bold; letter-spacing: 1px;">WATCHDOG_v2.7.1</span>
        <div style="width: 6px; height: 6px; border-radius: 50%; background: #00ffa2; box-shadow: 0 0 8px #00ffa2;"></div>
      </div>
      <div id="wd-stats">
        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
          <span>FPS:</span> <span id="wd-fps">--</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
          <span>NODES:</span> <span id="wd-nodes">--</span>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span>INTEGRITY:</span> <span style="color: #00ffa2;">QA_PASS</span>
        </div>
      </div>
    `,document.body.appendChild(t),this.fpsEl=document.getElementById("wd-fps"),this.nodesEl=document.getElementById("wd-nodes")}update(){this.frames++;const t=performance.now();if(t>=this.lastTime+1e3){this.fps=Math.round(this.frames*1e3/(t-this.lastTime)),this.fpsEl.textContent=this.fps,this.frames=0,this.lastTime=t;let e=0;this.scene.traverse(()=>e++),this.nodesEl.textContent=e,this.fps<30?(this.fpsEl.style.color="#ff0055",An.warn("WATCHDOG: Performance drop detected",{fps:this.fps})):this.fpsEl.style.color="#00ffa2"}}runDiagnostics(){An.info("QA_ENGINE: Initializing automated diagnostics..."),this.renderer&&this.renderer.domElement&&An.info("QA_PASS: THREE_JS_CONTEXT"),this.scene&&An.info("QA_PASS: SCENE_GRAPH");const t=[];this.scene.traverse(e=>{e.isLight&&t.push(e)}),t.length>0&&An.info("QA_PASS: LIGHTING_ARRAY",{count:t.length}),document.getElementById("ui-overlay")&&An.info("QA_PASS: DOM_OVERLAY_SYNC")}}class BM{constructor(t){this.container=document.getElementById(t),this.history=[],this.historyIndex=-1,this.commands={},this.currentPersona="serafim",this.supabaseUrl="https://ihebiuxobusmbflliiwn.supabase.co",this.supabaseAnonKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloZWJpdXhvYnVzbWJmbGxpaXduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0OTk1NTcsImV4cCI6MjA5MDA3NTU1N30.IPhgQFvUSkW1UppFcKjWlxwCdbyQ8eEtrQj2G5wESrM",this._initUI(),this._registerDefaultCommands(),An.info("STERM: Terminal interface active")}_initUI(){this.container.innerHTML=`
      <div id="sterm-header" style="background: rgba(0, 212, 255, 0.15); padding: 8px 16px; border-bottom: 1px solid rgba(0, 212, 255, 0.3); display: flex; justify-content: space-between; align-items: center; cursor: move; border-radius: 8px 8px 0 0;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <div style="width: 8px; height: 8px; border-radius: 50%; background: #00d4ff; box-shadow: 0 0 10px #00d4ff;"></div>
          <span style="font-size: 11px; font-weight: 900; letter-spacing: 2px; color: #00d4ff; text-transform: uppercase;">Serafim_Terminal_v13</span>
        </div>
        <div style="display: flex; gap: 12px;">
          <span class="sterm-ctrl" id="sterm-expand" style="cursor: pointer; opacity: 0.7; font-size: 14px;">[ ]</span>
          <span class="sterm-ctrl" id="sterm-min" style="cursor: pointer; opacity: 0.7; font-size: 14px;">_</span>
        </div>
      </div>
      <div id="sterm-output" style="flex: 1; overflow-y: auto; padding: 16px; font-family: 'JetBrains Mono', monospace; font-size: 13px; line-height: 1.6; color: #e0f4ff; scrollbar-width: thin; scrollbar-color: rgba(0,212,255,0.3) transparent; text-shadow: 0 0 5px rgba(0, 212, 255, 0.2);">
        <div style="color: #00d4ff; font-weight: bold; margin-bottom: 4px;">[SYSTEM_BOOT_COMPLETE]</div>
        <div style="color: #5588aa; font-size: 11px; margin-bottom: 20px;">Authenticated as: SUPER_ADMIN // Session: ${Math.random().toString(16).slice(2,10).toUpperCase()}</div>
      </div>
      
      <div id="sterm-quick-actions" style="display: flex; gap: 8px; padding: 0 16px 8px; overflow-x: auto; scrollbar-width: none;">
        <button class="sterm-btn" onclick="document.getElementById('sterm-input').value='demo-attack'; document.getElementById('sterm-input').focus()">STORY_DEMO</button>
        <button class="sterm-btn" onclick="document.getElementById('sterm-input').value='scan google.com'; document.getElementById('sterm-input').focus()">SCAN_TARGET</button>
        <button class="sterm-btn" onclick="document.getElementById('sterm-input').value='status'; document.getElementById('sterm-input').focus()">SYS_STATUS</button>
      </div>

      <div id="sterm-input-line" style="display: flex; align-items: center; padding: 12px 16px; background: rgba(0, 20, 30, 0.4); border-top: 1px solid rgba(0, 212, 255, 0.1);">
        <span id="sterm-prompt" style="color: #00d4ff; font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: bold; margin-right: 12px; white-space: nowrap;">serafim@v13:~$</span>
        <input type="text" id="sterm-input" style="background: transparent; border: none; outline: none; color: #fff; font-family: 'JetBrains Mono', monospace; font-size: 13px; flex: 1; width: 100%;" autocomplete="off" spellcheck="false" placeholder="Enter command...">
      </div>
    `,this.output=document.getElementById("sterm-output"),this.input=document.getElementById("sterm-input"),this.prompt=document.getElementById("sterm-prompt"),this.input.addEventListener("keydown",t=>this._handleInput(t)),this.container.addEventListener("click",()=>this.input.focus()),document.getElementById("sterm-min").addEventListener("click",t=>{t.stopPropagation(),this.container.classList.toggle("minimized"),this.container.classList.remove("expanded")}),document.getElementById("sterm-expand").addEventListener("click",t=>{t.stopPropagation(),this.container.classList.toggle("expanded"),this.container.classList.remove("minimized")})}_handleInput(t){if(t.key==="Enter"){const e=this.input.value.trim();this.input.value="",e&&(this.write(`
<span style="color: #00d4ff;">serafim@v13:~$</span> ${e}`),this.history.unshift(e),this.historyIndex=-1,this.execute(e))}else t.key==="ArrowUp"?(t.preventDefault(),this.historyIndex<this.history.length-1&&(this.historyIndex++,this.input.value=this.history[this.historyIndex])):t.key==="ArrowDown"&&(t.preventDefault(),this.historyIndex>0?(this.historyIndex--,this.input.value=this.history[this.historyIndex]):(this.historyIndex=-1,this.input.value=""))}write(t,e="normal"){const i=document.createElement("div");i.innerHTML=t,this.output.appendChild(i),this.output.scrollTop=this.output.scrollHeight}writeLog(t,e="INFO"){const s={INFO:"#00d4ff",WARN:"#ffaa00",ERROR:"#ff0055",PHASE:"#00ffa2",FINDING:"#ff3366"}[e]||"#fff";this.write(`<span style="color: ${s}; font-weight: bold;">[${e}]</span> ${t}`)}async execute(t){const e=t.split(" ").filter(r=>r.length>0);if(e.length===0)return;const i=e[0].toLowerCase(),s=e.slice(1);if(this.commands[i])try{await this.commands[i].execute(s)}catch(r){this.writeLog(`ERROR: ${r.message}`,"ERROR")}else this.write(`Command not found: ${i}. Type 'help' for available commands.`,"error")}_registerDefaultCommands(){this.commands.help={description:"Show available commands",execute:async()=>{this.write("AVAILABLE COMMANDS:"),Object.keys(this.commands).forEach(t=>{this.write(`  <span style="color: #00d4ff;">${t.padEnd(12)}</span> - ${this.commands[t].description}`)})}},this.commands.clear={description:"Clear the terminal screen",execute:async()=>{this.output.innerHTML=""}},this.commands.whoami={description:"Display current user information",execute:async()=>{this.write(`USER: kffmn
ROLE: SUPER_ADMIN
AUTH: SERAFIM_BYPASS_ENABLED`)}},this.commands.version={description:"Display system version",execute:async()=>{this.write("SERAFIM_STERM v13.0.455 (Build 2026-04-26)")}},this.commands.status={description:"Check ecosystem health",execute:async()=>{this.writeLog("Checking node connectivity...","PHASE"),this.writeLog("Supabase Edge Functions: ONLINE","INFO"),this.writeLog("Fly.io Workers: 4/4 ACTIVE","INFO"),this.writeLog("Brain Memory: 1.2GB LOADED","INFO"),this.writeLog("Security Integrity: 100%","INFO")}}}registerCommand(t,e,i){this.commands[t]={description:e,execute:i}}}class zM{constructor(){this.steps=[{target:"sterm-container",title:"Terminal Tático (STERM)",content:"Aqui você executa comandos reais. Tente clicar em SCAN_TARGET para iniciar um diagnóstico forense.",position:"top-left"},{target:"serafim-watchdog-overlay",title:"Watchdog Engine",content:"Monitore a saúde do sistema e performance em tempo real. Qualquer anomalia será registrada aqui.",position:"top-right"},{target:"sterm-quick-actions",title:"Storytelling Digital",content:"Clique em STORY_DEMO para ver uma simulação completa de invasão e como a nossa Blindagem bloqueia ataques em tempo real.",position:"top-left"},{target:"rov-core-btn",title:"ROV Cam & Navegação",content:"Alterne a câmera para dentro do ROV ou use a barra de profundidade para navegar manualmente.",position:"top-center"}],this.currentStep=0,this._initUI()}_initUI(){const t=document.createElement("div");t.id="serafim-onboarding-overlay",t.style=`
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0.7);
      z-index: 10000;
      display: none;
      pointer-events: none;
      transition: opacity 0.5s;
    `,document.body.appendChild(t);const e=document.createElement("div");e.id="serafim-onboarding-tooltip",e.style=`
      position: fixed;
      width: 320px;
      background: rgba(10, 10, 15, 0.95);
      border: 1px solid #00d4ff;
      border-radius: 8px;
      padding: 20px;
      color: #fff;
      font-family: 'Inter', sans-serif;
      z-index: 10001;
      display: none;
      box-shadow: 0 0 30px rgba(0, 212, 255, 0.3);
      pointer-events: auto;
    `,e.innerHTML=`
      <div id="ob-title" style="color: #00d4ff; font-weight: bold; margin-bottom: 8px; font-size: 14px; letter-spacing: 1px;"></div>
      <div id="ob-content" style="font-size: 13px; color: #a0aec0; line-height: 1.6; margin-bottom: 16px;"></div>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span id="ob-step" style="font-size: 10px; color: #555;">Step 1 of 4</span>
        <button id="ob-next" style="background: #00d4ff; color: #000; border: none; padding: 6px 16px; border-radius: 4px; font-size: 12px; font-weight: bold; cursor: pointer;">PRÓXIMO</button>
      </div>
    `,document.body.appendChild(e),document.getElementById("ob-next").addEventListener("click",()=>this.next())}start(){localStorage.getItem("serafim_onboarding_complete")||(this.currentStep=0,this.showStep(),An.info("ONBOARDING: Guided tour started"))}showStep(){const t=this.steps[this.currentStep],e=document.getElementById(t.target),i=document.getElementById("serafim-onboarding-tooltip"),s=document.getElementById("serafim-onboarding-overlay");if(!e){this.next();return}s.style.display="block",i.style.display="block",document.getElementById("ob-title").textContent=t.title,document.getElementById("ob-content").textContent=t.content,document.getElementById("ob-step").textContent=`Passo ${this.currentStep+1} de ${this.steps.length}`;const r=e.getBoundingClientRect();t.position==="top-left"?(i.style.top=r.bottom+20+"px",i.style.left=r.left+"px"):t.position==="top-center"?(i.style.top=r.bottom+20+"px",i.style.left=r.left+r.width/2-160+"px"):t.position==="top-right"?(i.style.top=r.bottom+20+"px",i.style.right=window.innerWidth-r.right+"px",i.style.left="auto"):(i.style.top=r.bottom+20+"px",i.style.left=r.left+r.width/2-160+"px"),e.style.boxShadow="0 0 0 9999px rgba(0,0,0,0.7), 0 0 20px #00d4ff",e.style.zIndex="10001",e.style.position="fixed"}next(){const t=this.steps[this.currentStep],e=document.getElementById(t.target);e&&(e.style.boxShadow="",e.style.zIndex="",e.style.position=""),this.currentStep++,this.currentStep<this.steps.length?this.showStep():this.finish()}finish(){document.getElementById("serafim-onboarding-tooltip").style.display="none",document.getElementById("serafim-onboarding-overlay").style.display="none",localStorage.setItem("serafim_onboarding_complete","true"),An.info("ONBOARDING: Complete")}}const lu={pt:{USER_NODE:{title:"Usuário Civil (Vulnerável)",attack:"Captura de credenciais via Phishing ou Session Hijacking.",defense:"Autenticação multifator (MFA) e Blindagem de Sessão."},BOT_NODE:{title:"Crawler Automatizado",attack:"Varredura massiva em busca de diretórios expostos e vulnerabilidades conhecidas.",defense:"Implementação de WAF com Rate Limiting e detecção de anomalias."},HACKER_NODE:{title:"Agente de Ameaça (APT)",attack:"Exploração de Zero-Day e movimento lateral para escalonamento de privilégios.",defense:"Zero Trust Architecture e monitoramento de comportamento em tempo real."},SERVER_RACK:{title:"Infraestrutura de Dados",attack:"Injeção de código (RCE) para exfiltração de base de dados.",defense:"Hardening de servidor e criptografia de dados em repouso."}}};function bl(n="user",t="User"){const e=new Ee,i=new Es(.3,1),s=new a0({color:n==="hacker"?16711765:n==="bot"?8141549:54527,transparent:!0,opacity:.2,wireframe:!0}),r=new $(i,s);e.add(r);const a=new be(.12,16,16),o=new ht({color:n==="hacker"?16711765:n==="bot"?8141549:54527,emissive:n==="hacker"?16711765:n==="bot"?8141549:54527,emissiveIntensity:2}),l=new $(a,o);e.add(l);const c=new yr(.4,.01,8,32),u=new sn({color:16777215,transparent:!0,opacity:.3}),m=new $(c,u),h=new $(c,u);return h.rotation.x=Math.PI/2,e.add(m,h),e.userData={type:"USER_NODE",nodeType:n,label:t,pulseSpeed:.5+Math.random()},e}function VM(){const n=new Ee,t=new Je(1.2,2.2,1.2),e=new ht({color:657935,metalness:.8,roughness:.2}),i=new $(t,e);n.add(i);for(let s=0;s<8;s++){const r=new Je(1,.1,1.25),a=new ht({color:54527,emissive:54527,emissiveIntensity:.5+Math.random()}),o=new $(r,a);o.position.y=-.8+s*.25,n.add(o)}return n.userData={type:"SERVER_RACK"},n}const{NV_FILTER:kM,NV_AMBIENT_BOOST:rf,NV_EMISSIVE_BOOST:GM,AMBIENT_NORMAL:cu,AMBIENT_DARK:HM,ROV_POINT_NORMAL:WM,ROV_POINT_DARK:XM,ROV_RANGE_NORMAL:YM,ROV_RANGE_DARK:qM,ROV_VIGNETTE_GRADIENT:jM,NV_VIGNETTE_GRADIENT:KM}=FM,It=new Hm;It.background=new yt(657935);It.fog=new Yc(396568,.017);const di=new tn(55,window.innerWidth/window.innerHeight,.1,500);di.position.set(14,5,18);const Sc=new OM(null,It);new BM("sterm-container");const ZM=new zM;Sc.runDiagnostics();setTimeout(()=>ZM.start(),3e3);const wn={total:0,users:0,infra:0};function $M(){An.info("POPULATION: Initializing digital entities...");for(let n=0;n<60;n++){const t=Math.random()>.8?"bot":"user",e=bl(t,t==="bot"?"Crawler_Bot":"Civilian_User");e.position.set(Math.random()*40-20,Math.random()*-10,Math.random()*40-20),It.add(e),wn.total++,wn.users++}for(let n=0;n<15;n++){const t=bl("user","Sys_Admin");t.position.set(Math.random()*30-15,-15-Math.random()*10,Math.random()*30-15),It.add(t),wn.total++,wn.users++}for(let n=0;n<5;n++){const t=bl("hacker","Agente_APT");t.position.set(Math.random()*20-10,-30-Math.random()*15,Math.random()*20-10),It.add(t),wn.total++,wn.users++}for(let n=0;n<8;n++){const t=VM();t.position.set(Math.random()*25-12.5,-50-Math.random()*10,Math.random()*25-12.5),It.add(t),wn.total++,wn.infra++}JM()}function JM(){const n=document.getElementById("ui-population"),t=document.getElementById("ui-users"),e=document.getElementById("ui-infra");n&&(n.textContent=`${wn.total} Entidades`),t&&(t.textContent=wn.users),e&&(e.textContent=wn.infra)}$M();const le=new fM({antialias:!0});le.setSize(window.innerWidth,window.innerHeight);le.setPixelRatio(Math.min(window.devicePixelRatio,2));le.shadowMap.enabled=!0;le.shadowMap.type=Ru;le.physicallyCorrectLights=!0;le.toneMapping=Za;le.toneMappingExposure=1.18;le.shadowMap.enabled=!1;const QM=document.getElementById("root")??document.body;QM.appendChild(le.domElement);const Os=new IM(le),af=new LM(It,di);Os.addPass(af);const of=new Ls(new dt(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2)),.04,.4,.5);Os.addPass(of);const ty={uniforms:{tDiffuse:{value:null},tintColor:{value:new I(.85,.92,1)},tintStrength:{value:.12},vignetteOffset:{value:.9},vignetteDarkness:{value:1.15}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec3 tintColor;
    uniform float tintStrength;
    uniform float vignetteOffset;
    uniform float vignetteDarkness;
    varying vec2 vUv;
    void main() {
      vec4 texel = texture2D(tDiffuse, vUv);
      // Color grading — mix toward blue-teal
      vec3 graded = mix(texel.rgb, texel.rgb * tintColor, tintStrength);
      // Vignette — darken edges
      vec2 uv = (vUv - vec2(0.5)) * vec2(vignetteOffset);
      float vig = clamp(1.0 - dot(uv, uv), 0.0, 1.0);
      vig = pow(vig, vignetteDarkness);
      graded *= vig;
      gl_FragColor = vec4(graded, texel.a);
    }
  `},ey=new sf(ty);Os.addPass(ey);const ny=new NM;Os.addPass(ny);const Ue=new mM(di,le.domElement);Ue.enableDamping=!0;Ue.dampingFactor=.05;Ue.minDistance=8;Ue.maxDistance=45;Ue.target.set(0,-5,0);Ue.autoRotate=!0;Ue.autoRotateSpeed=.3;Ue.addEventListener("change",()=>{const n=di.position.distanceTo(Ue.target),t=Math.max(0,Math.min(1,(n-Ue.minDistance)/(Ue.maxDistance-Ue.minDistance)));le.toneMappingExposure=1.18+t*.47});const th=new c0(9424895,3366,.62);th.name="hemiLight";It.add(th);const _n=new u0(1718894,.62);_n.name="ambientLight";It.add(_n);const an=new $c(16774368,4.8);an.name="sunLight";an.position.set(12,28,8);an.castShadow=!0;an.shadow.mapSize.set(1024,1024);an.shadow.camera.near=1;an.shadow.camera.far=80;an.shadow.camera.left=-20;an.shadow.camera.right=20;an.shadow.camera.top=20;an.shadow.camera.bottom=-20;an.shadow.bias=-.001;an.shadow.normalBias=.02;It.add(an);const co=new $c(2779832,.75);co.name="fillLight";co.position.set(-8,4,-12);It.add(co);const ho=new $c(51455,.52);ho.name="rimLight";ho.position.set(-10,-14,-8);It.add(ho);const je=12,Ve=12,Pa=[6,5,5,5],ui=Pa.reduce((n,t)=>n+t,0),de=[{id:0,name:"Internet Backbone",depth:"Surface Web",color:2068424,emissive:1208240,lightColor:8382207,y:0,title:"Internet Backbone (Surface Layer)",desc:"The surface layer where most visible traffic flows. Public APIs, indexed databases and consumer-facing infrastructure. Traffic is fully exposed and monitored by major corporate nodes.",creatures:["HTTP/S Traffic","Public APIs","CDN Edges","Corporate Firewalls"]},{id:1,name:"Encrypted Grid",depth:"Deep Web",color:2179709,emissive:1255770,lightColor:5930495,y:-6,title:"Encrypted Grid (Deep Web)",desc:"Password-protected silos and internal corporate networks. Service daemons monitor all incoming requests. Unauthorized probes are silently logged and traced.",creatures:["Service Daemons","Encrypted Packets","Auth Gateways","VPN Tunnels"]},{id:2,name:"Darknet Routing",depth:"Onion Layer",color:1514066,emissive:658734,lightColor:4147657,y:-11,title:"Darknet Routing (Onion Layer)",desc:"Anonymous peer-to-peer routing where traffic bounces across encrypted relays. Identity is obfuscated through layered cryptography. Intrusion detection systems scan for anomalous behavioral signatures.",creatures:["Onion Routers","P2P Nodes","Scrapers","Crypto Mixers"]},{id:3,name:"Quantum Abyss",depth:"Zero-Day Repository",color:329750,emissive:132107,lightColor:1451098,y:-16,title:"Quantum Abyss (Zero-Day Repository)",desc:"Uncharted network depths housing zero-day exploits, APTs and experimental quantum decryption algorithms. Rogue AI fragments operate autonomously. No signal returns from the deepest nodes.",creatures:["APT Entities","Polymorphic Code","Quantum Keys","Rogue AI Fragments"]}];let hu=0;de.forEach((n,t)=>{n.y=-hu-Pa[t]/2,n.height=Pa[t],hu+=Pa[t]});let lf=null;{let s=function(f,d,g,b,M){f.clearRect(0,0,d,g),M?(f.shadowColor=M.color||"rgba(0,0,0,0.6)",f.shadowBlur=M.blur||14,f.shadowOffsetX=M.ox||0,f.shadowOffsetY=M.oy||0):(f.shadowColor="transparent",f.shadowBlur=0),f.textAlign="center",f.textBaseline="middle",f.font="900 480px Inter, sans-serif",f.fillStyle=b,f.fillText("INTERNET",d/2,g*.34),f.font="900 320px Inter, sans-serif",f.fillText("DEEP DIVING",d/2,g*.74)};var v1=s;const r=document.createElement("canvas");r.width=4096,r.height=1024;const a=r.getContext("2d");s(a,4096,1024,"rgba(210, 225, 235, 0.82)",{color:"rgba(80,130,200,0.18)",blur:0,ox:0,oy:0});const o=new Yn(r);o.anisotropy=le.capabilities.getMaxAnisotropy();const l=52,c=13,u=new sn({map:o,transparent:!0,opacity:1,depthWrite:!1,side:Se}),m=new $(new rn(l,c),u);m.name="oceanExplorerTitle3D";const h=document.createElement("canvas");h.width=4096,h.height=1024;const p=h.getContext("2d");s(p,4096,1024,"rgba(4,12,36,0.85)",null);const _=new Yn(h);_.anisotropy=le.capabilities.getMaxAnisotropy();const S=new Ee;S.name="oceanExplorerTitleGroup";for(let f=1;f>=1;f--){const d=new sn({map:_,transparent:!0,opacity:.55-f*.06,depthWrite:!1,side:Se}),g=new $(new rn(l,c),d);g.name="titleShadowLayer_"+f,g.position.z=-f*.35,S.add(g)}S.add(m),S.position.set(0,-ui/2+13,-Ve/2-4),It.add(S),lf=S}const ka=new Ee;ka.name="oceanGroup";It.add(ka);const br=[];de.forEach(n=>{const e=new Je(je,n.height+.04,Ve),i=new ht({color:n.color,transparent:!0,opacity:.9,side:Ye,roughness:.55,metalness:.02,emissive:n.emissive,emissiveIntensity:.5,polygonOffset:!0,polygonOffsetFactor:2,polygonOffsetUnits:2}),s=new $(e,i);s.name="zonebox_"+n.id,s.position.set(0,n.y,0),s.userData.zoneId=n.id,s.userData.baseColor=n.color,s.userData.baseEmissive=n.emissive,ka.add(s),br.push(s);let r;if(n.id===0){const l=je/2,c=n.height/2,u=Ve/2,m=new Float32Array([-l,-c,-u,l,-c,-u,l,-c,-u,l,-c,u,l,-c,u,-l,-c,u,-l,-c,u,-l,-c,-u,-l,-c,-u,-l,c,-u,l,-c,-u,l,c,-u,l,-c,u,l,c,u,-l,-c,u,-l,c,u]);r=new Nt,r.setAttribute("position",new Jt(m,3))}else r=new n0(e);const a=new to({color:4491519,transparent:!0,opacity:.25}),o=new t0(r,a);o.name="zoneedge_"+n.id,o.position.copy(s.position),ka.add(o)});const eh=[];de.forEach(n=>{const t=new rn(je,n.height),e=new sn({visible:!1,side:Se}),i=new $(t,e);i.name="zonepick_"+n.id,i.position.set(0,n.y,Ve/2+.01),i.userData.zoneId=n.id,It.add(i),eh.push(i)});de.forEach(n=>{const t=document.createElement("canvas");t.width=512,t.height=128;const e=t.getContext("2d");e.fillStyle="rgba(0,0,0,0)",e.fillRect(0,0,512,128),e.font="bold 38px Inter, sans-serif",e.fillStyle="rgba(160,220,255,0.85)",e.textAlign="left",e.fillText(n.name,20,55),e.font="26px Inter, sans-serif",e.fillStyle="rgba(100,180,255,0.65)",e.fillText(n.depth,20,95);const i=new Yn(t),s=new Qa({map:i,transparent:!0,depthTest:!1}),r=new qc(s);r.name="label_"+n.id,r.scale.set(6,1.5,1),r.position.set(-je/2+3,n.y+n.height/2-.5,Ve/2+.3),It.add(r)});const du=32,fr=new rn(je,Ve,du,du);fr.rotateX(-Math.PI/2);const El=fr.attributes.position,bc=[];for(let n=0;n<El.count;n++)bc.push({ox:El.getX(n),oz:El.getZ(n),phase:Math.random()*Math.PI*2});const iy=new ht({color:35020,transparent:!0,opacity:.78,roughness:.05,metalness:.6,emissive:13158,emissiveIntensity:.4}),Er=new $(fr,iy);Er.name="waveMesh";Er.position.set(0,0,0);Er.receiveShadow=!0;It.add(Er);const Tr=300,cf=new Nt,Da=new Float32Array(Tr*3),hf=new Float32Array(Tr),sy=new Float32Array(Tr);for(let n=0;n<Tr;n++)Da[n*3]=(Math.random()-.5)*je,Da[n*3+1]=Math.random()*-ui,Da[n*3+2]=(Math.random()-.5)*Ve,hf[n]=.005+Math.random()*.015,sy[n]=Math.random();cf.setAttribute("position",new Jt(Da,3));const ry=new Mr({color:8965375,size:.06,transparent:!0,opacity:.55,sizeAttenuation:!0}),Ga=new no(cf,ry);Ga.name="particles";It.add(Ga);function Dn(n,t,e=16777215){const i=new Ee;i.userData.isFish=!0;const s={};new yt(n).getHSL(s);const a=s.h>.38&&s.h<.62&&s.s>.25?14706706:new yt(n).multiplyScalar(.55).getHex(),o=new yt(n).lerp(new yt(0),.45).getHex(),l=new ht({color:n,flatShading:!0,roughness:.55,metalness:.05}),c=new ht({color:o,flatShading:!0,roughness:.6,metalness:0}),u=new ht({color:a,flatShading:!0,roughness:.5,metalness:0,side:Se}),m=new ht({color:1118481,roughness:.1}),h=t,p=new Float32Array([h*1.6,0,0,h*.2,h*.55,h*.38,h*.2,-h*.42,h*.28,h*.2,-h*.42,-h*.28,h*.2,h*.55,-h*.38,-h*.9,h*.28,h*.18,-h*.9,-h*.28,h*.18,-h*.9,-h*.28,-h*.18,-h*.9,h*.28,-h*.18,-h*1.55,0,0]),_=[0,1,4,0,4,3,1,5,8,1,8,4,5,9,8],S=[0,2,1,0,3,2,2,6,5,2,5,1,6,9,5,0,4,8,0,8,3,3,8,7,3,7,2,7,9,6,8,9,7,2,3,7];function f(M,w){const T=[];M.forEach(x=>{T.push(p[x*3],p[x*3+1],p[x*3+2])});const C=new Nt;return C.setAttribute("position",new Jt(new Float32Array(T),3)),C.computeVertexNormals(),new $(C,w)}const d=f(_,l),g=f(S,c);i.add(d),i.add(g);{const M=new Float32Array([h*.35,h*.55,0,-h*.3,h*.55,0,h*.05,h*1.15,0]),w=new Nt;w.setAttribute("position",new Jt(M,3)),w.computeVertexNormals(),i.add(new $(w,u))}[-1,1].forEach(M=>{const w=new Float32Array([h*.5,-h*.05,M*h*.38,h*0,-h*.2,M*h*.38,h*.15,-h*.15,M*h*.82]),T=new Nt;T.setAttribute("position",new Jt(w,3)),T.computeVertexNormals(),i.add(new $(T,u))}),[-1,1].forEach(M=>{const w=new Float32Array([-h*1.55,0,0,-h*1.55,M*h*.18,0,-h*2.25,M*h*.72,0]),T=new Nt;T.setAttribute("position",new Jt(w,3)),T.computeVertexNormals(),i.add(new $(T,u))});const b=new $(new be(h*.12,5,5),m);return b.position.set(h*1.1,h*.18,h*.36),i.add(b),i}function df(n){const t=new Ee;t.userData.isFish=!0;const e=n,i=new ht({color:4168373,flatShading:!0,roughness:.4,metalness:0}),s=new ht({color:13166837,flatShading:!0,roughness:.45,metalness:0}),r=new ht({color:1989746,flatShading:!0,roughness:.55,metalness:0,side:Se}),a=new ht({color:657930,roughness:.1});function o(h,p){const _=new Nt;return _.setAttribute("position",new Jt(new Float32Array(h),3)),_.computeVertexNormals(),new $(_,p)}const l=[e*2.1,0,0,e*1.4,e*.38,0,e*1.35,e*.1,e*.32,e*1.38,-e*.28,0,e*1.35,e*.1,-e*.32,e*.1,e*.52,0,e*.05,e*.12,e*.44,e*.08,-e*.38,0,e*.05,e*.12,-e*.44,-e*1.1,e*.22,0,-e*1.12,e*.04,e*.18,-e*1.08,-e*.16,0,-e*1.12,e*.04,-e*.18,-e*1.55,0,0],c=[0,1,2,0,4,1,1,5,6,1,6,2,4,8,5,4,1,5,5,9,10,5,10,6,8,12,9,8,9,5,9,13,10,12,13,9,2,6,7,2,7,3,4,3,7,4,7,8,6,10,11,6,11,7,8,7,11,8,11,12,10,13,11,12,11,13],u=[0,3,2,0,4,3,3,7,6,3,6,2,7,11,10,7,10,6,11,13,10,7,3,4,7,4,8,11,7,8,11,8,12,13,11,12];t.add(o(c.map(h=>[l[h*3],l[h*3+1],l[h*3+2]]).flat(),i)),t.add(o(u.map(h=>[l[h*3],l[h*3+1],l[h*3+2]]).flat(),s));{const h=new Float32Array([e*2.1,0,0,e*1.9,e*.12,e*.1,e*1.9,e*.12,-e*.1,e*1.9,-e*.1,0,e*2.65,-e*.06,0]),p=[0,1,2,0,2,3,0,3,4,1,0,4,2,1,4,3,2,4];t.add(o(p.map(_=>[h[_*3],h[_*3+1],h[_*3+2]]).flat(),i))}{const h=new Float32Array([e*.15,e*.52,e*.04,-e*.35,e*.52,e*.04,e*.05,e*.52,-e*.04,-e*.25,e*.52,-e*.04,-e*.08,e*1.28,0]),p=[0,2,4,2,3,4,3,1,4,1,0,4,0,1,3,0,3,2];t.add(o(p.map(_=>[h[_*3],h[_*3+1],h[_*3+2]]).flat(),r))}[-1,1].forEach(h=>{const p=new Float32Array([e*.7,-e*.35,h*e*.42,e*.35,-e*.42,h*e*.42,e*.55,-e*.28,h*e*.9,e*.15,-e*.38,h*e*.82,e*.5,-e*.46,h*e*1.1]),_=[0,2,1,2,3,1,2,4,3];t.add(o(_.map(S=>[p[S*3],p[S*3+1],p[S*3+2]]).flat(),r))}),[-1,1].forEach(h=>{const p=new Float32Array([-e*1.55,e*.04,h*e*.06,-e*1.55,-e*.04,h*e*.06,-e*1.78,e*.06,h*e*.32,-e*1.78,-e*.06,h*e*.32,-e*2.1,0,h*e*.62]),_=[0,2,1,2,3,1,2,4,3];t.add(o(_.map(S=>[p[S*3],p[S*3+1],p[S*3+2]]).flat(),r))});const m=new $(new be(e*.1,5,5),a);m.position.set(e*1.42,e*.22,e*.3),t.add(m);{const h=new Float32Array([e*1.5,e*.32,e*.28,e*1.55,e*.08,e*.34,e*1.2,e*.1,e*.42,e*1.18,e*.35,e*.35]),p=[0,1,2,0,2,3];t.add(o(p.map(_=>[h[_*3],h[_*3+1],h[_*3+2]]).flat(),new ht({color:1718852,flatShading:!0,roughness:.6})))}return t}function Bs(n,t){const e=new Ee,i=new yt(t),s=8,r=3,a=[],o=[];a.push(0,n*.62,0);const l=[{y:n*.38,r:n*.58},{y:n*.1,r:n*.92},{y:-n*.08,r:n*1}];for(let f=0;f<r;f++){const{y:d,r:g}=l[f];for(let b=0;b<s;b++){const M=b/s*Math.PI*2;a.push(Math.cos(M)*g,d,Math.sin(M)*g)}}for(let f=0;f<s;f++){const d=1+f,g=1+(f+1)%s;o.push(0,d,g)}for(let f=0;f<r-1;f++){const d=1+f*s,g=d+s;for(let b=0;b<s;b++){const M=d+b,w=d+(b+1)%s,T=g+b,C=g+(b+1)%s;o.push(M,T,w,w,T,C)}}const c=new Nt;c.setAttribute("position",new Kt(a,3)),c.setIndex(o),c.computeVertexNormals();const u=new ht({color:i,transparent:!0,opacity:.72,emissive:i,emissiveIntensity:.45,roughness:.25,metalness:0,flatShading:!0,side:Wn,depthWrite:!1}),m=new $(c,u);m.name="jellyBell",e.add(m);const h=new ht({color:i,transparent:!0,opacity:.3,emissive:i,emissiveIntensity:.2,roughness:.3,metalness:0,flatShading:!0,side:Ye,depthWrite:!1}),p=new ht({color:i,transparent:!0,opacity:.6,emissive:i,emissiveIntensity:.55,roughness:.2,flatShading:!0,side:Se,depthWrite:!1});for(let f=0;f<4;f++){const d=f/4*Math.PI*2,g=Math.cos(d)*n*.28,b=Math.sin(d)*n*.28,M=3,w=[],T=[],C=n*.65,x=3;for(let A=0;A<=x;A++){const D=-n*.08-A*C,N=n*.08*(1-A/x*.6);for(let z=0;z<M;z++){const B=z/M*Math.PI*2;w.push(Math.cos(B)*N,D,Math.sin(B)*N)}}for(let A=0;A<x;A++){const D=A*M,N=D+M;for(let z=0;z<M;z++){const B=(z+1)%M;T.push(D+z,N+z,D+B,D+B,N+z,N+B)}}const y=new Nt;y.setAttribute("position",new Kt(w,3)),y.setIndex(T),y.computeVertexNormals();const P=new $(y,p);P.position.set(g,0,b),P.rotation.y=d,e.add(P)}const _=new ht({color:i,transparent:!0,opacity:.38,emissive:i,emissiveIntensity:.5,roughness:.3,flatShading:!0,depthWrite:!1}),S=[1.8,2.4,1.5,2.8,2,1.6,2.5,1.9];for(let f=0;f<4;f++){const d=n*S[f],g=new $(new Fe(n*.018,n*.004,d,3,1),_),b=f/8*Math.PI*2+.2;g.position.set(Math.cos(b)*n*.78,-n*.08-d*.5,Math.sin(b)*n*.78),g.rotation.z=Math.sin(b)*.12,g.rotation.x=Math.cos(b)*.12,e.add(g)}return e.userData.isJelly=!0,e.userData.bellMesh=m,e.userData.jellyMats=[u,h,p,_],e}function uf(n){const t=new Ee;t.userData.isFish=!0;const e=n,i=new ht({color:1579039,flatShading:!0,roughness:.8,metalness:0,emissive:328968,emissiveIntensity:.3}),s=new ht({color:657940,flatShading:!0,roughness:.9,metalness:0}),r=new ht({color:1184282,flatShading:!0,roughness:.7,metalness:0,side:Se});new ht({color:14540236,flatShading:!0,roughness:.3});const a=new ht({color:1118464,flatShading:!0,roughness:.1}),o=new ht({color:2631728,flatShading:!0,roughness:.85});function l(S,f,d){const g=[];f.forEach(M=>{g.push(S[M*3],S[M*3+1],S[M*3+2])});const b=new Nt;return b.setAttribute("position",new Jt(new Float32Array(g),3)),b.computeVertexNormals(),new $(b,d)}const c=new Float32Array([e*1.5,0,0,e*.8,e*.5,e*.45,e*.8,-e*.55,e*.35,e*.8,-e*.55,-e*.35,e*.8,e*.5,-e*.45,-e*.2,e*.85,e*.65,-e*.2,-e*.7,e*.55,-e*.2,-e*.7,-e*.55,-e*.2,e*.85,-e*.65,-e*1.1,e*.35,e*.28,-e*1.1,-e*.3,e*.22,-e*1.1,-e*.3,-e*.22,-e*1.1,e*.35,-e*.28,-e*1.7,0,0]),u=[0,1,4,1,5,8,1,8,4,5,9,12,5,12,8,9,13,12],m=[0,2,1,0,3,2,0,4,3,1,2,6,1,6,5,4,8,7,3,4,7,2,3,7,2,7,6,5,6,10,5,10,9,8,12,11,7,8,11,6,7,11,6,11,10,10,13,9,10,11,13,11,12,13];t.add(l(c,u,i)),t.add(l(c,m,s));{const S=new Float32Array([e*1.5,-e*.1,0,e*.6,-e*.65,e*.3,e*.6,-e*.65,-e*.3,e*.6,-e*.2,0]),f=[0,1,3,0,3,2,0,2,1,1,2,3];t.add(l(S,f,s))}{const S=new Float32Array([e*.1,e*.85,0,-e*.8,e*.55,0,-e*.25,e*1.45,0]),f=new Nt;f.setAttribute("position",new Jt(S,3)),f.computeVertexNormals(),t.add(new $(f,r))}[-1,1].forEach(S=>{const f=new Float32Array([e*.3,-e*.15,S*e*.45,-e*.3,-e*.35,S*e*.45,e*0,-e*.25,S*e*1]),d=new Nt;d.setAttribute("position",new Jt(f,3)),d.computeVertexNormals(),t.add(new $(d,r))}),[-1,1].forEach(S=>{const f=new Float32Array([-e*1.7,0,0,-e*1.5,S*e*.15,0,-e*2.3,S*e*.55,0]),d=new Nt;d.setAttribute("position",new Jt(f,3)),d.computeVertexNormals(),t.add(new $(d,r))});{const S=new Float32Array([e*1,e*.5,0,e*.6,e*1.1,e*.04,e*1,e*1.55,-e*.03,e*1.35,e*1.7,0,e*1,e*.5,e*.06,e*.6,e*1.1,-e*.02,e*1,e*1.55,e*.03,e*1.35,e*1.7,e*.06]),f=[0,1,5,0,5,4,1,2,6,1,6,5,2,3,7,2,7,6];t.add(l(S,f,o))}const h=new $(new Es(e*.2,0),new ht({color:8978380,emissive:65450,emissiveIntensity:4,transparent:!0,opacity:.9,flatShading:!0,roughness:.05}));h.position.set(e*1.35,e*1.7,0),t.add(h);const p=new $(new Es(e*.18,0),a);p.position.set(e*.95,e*.28,e*.5),t.add(p);const _=new $(new Es(e*.12,0),new ht({color:14535680,emissive:16768256,emissiveIntensity:1.4,flatShading:!0,roughness:.05}));return _.position.set(e*1.05,e*.28,e*.58),t.add(_),t}function nh(n,t){const e=new Ee,i=n,s=new yt(t);function r(y,P,A){const D=new Nt;return D.setAttribute("position",new Jt(new Float32Array(y),3)),D.setIndex(P),D.computeVertexNormals(),new $(D,A)}const a=new ht({color:t,flatShading:!0,transparent:!0,opacity:.88,emissive:s,emissiveIntensity:.3,roughness:.25,metalness:0}),o=new ht({color:new yt(t).multiplyScalar(.45).getHex(),flatShading:!0,transparent:!0,opacity:.88,emissive:s,emissiveIntensity:.15,roughness:.3,metalness:0}),l=new ht({color:t,flatShading:!0,transparent:!0,opacity:.92,emissive:s,emissiveIntensity:.35,roughness:.2,metalness:0}),c=new ht({color:t,flatShading:!0,transparent:!0,opacity:.65,emissive:s,emissiveIntensity:.55,roughness:.2,metalness:0,side:Se}),u=new ht({color:16777215,emissive:new yt(t).lerp(new yt(16777215),.6).getHex(),emissiveIntensity:3.5,roughness:.05,metalness:0,transparent:!0,opacity:.92}),m=new ht({color:328968,roughness:.05,metalness:.3}),h=new ht({color:new yt(t).lerp(new yt(16777215),.4).getHex(),emissive:s,emissiveIntensity:1.8,roughness:.05,metalness:0}),p=6,_=[{z:i*1.35,r:0},{z:i*.8,r:i*.18},{z:i*.1,r:i*.44},{z:-i*.3,r:i*.48},{z:-i*.75,r:i*.32},{z:-i*1,r:i*.18}],S=[];S.push(0,0,i*1.35);for(let y=1;y<_.length;y++){const{z:P,r:A}=_[y];for(let D=0;D<p;D++){const N=D/p*Math.PI*2-Math.PI/6;S.push(Math.cos(N)*A,Math.sin(N)*A,P)}}const f=[],d=[];for(let y=0;y<p;y++){const P=1+y,A=1+(y+1)%p;y<p/2?f.push(0,P,A):d.push(0,P,A)}for(let y=0;y<_.length-2;y++){const P=1+y*p,A=P+p;for(let D=0;D<p;D++){const N=P+D,z=P+(D+1)%p,B=A+D,H=A+(D+1)%p;D<p/2?f.push(N,B,z,z,B,H):d.push(N,B,z,z,B,H)}}const g=r(S,f,a);g.name="squidMantleTop";const b=r(S,d,o);b.name="squidMantleBot",e.add(g),e.add(b);const M=[{z:-i*1,r:i*.18},{z:-i*1.35,r:i*.38},{z:-i*1.58,r:i*.34},{z:-i*1.72,r:i*.28}],w=[];for(const{z:y,r:P}of M)for(let A=0;A<p;A++){const D=A/p*Math.PI*2-Math.PI/6;w.push(Math.cos(D)*P,Math.sin(D)*P,y)}const T=[];for(let y=0;y<M.length-1;y++){const P=y*p,A=P+p;for(let D=0;D<p;D++){const N=P+D,z=P+(D+1)%p,B=A+D,H=A+(D+1)%p;T.push(N,B,z,z,B,H)}}const C=r(w,T,l);C.name="squidHead",e.add(C),[-1,1].forEach((y,P)=>{const A=[i*.85,y*i*.05,i*1.1,i*.25,y*i*.08,i*.6,i*.15,y*i*.08,i*.05,i*.55,y*i*.05,-i*.05,i*.55,y*i*.68,i*.55],N=r(A,[0,4,1,1,4,2,0,1,4,2,4,3],a);N.name="squidFin"+P,e.add(N)});for(let y=0;y<8;y++){const P=y/8*Math.PI*2,A=Math.cos(P)*i*.22,D=Math.sin(P)*i*.22,N=i*1.4+y%3*i*.1,z=i*.055,B=i*.008,H=[A+Math.cos(P)*z,D+Math.sin(P)*z,-i*1.72,A+Math.cos(P+2.094)*z,D+Math.sin(P+2.094)*z,-i*1.72,A+Math.cos(P+4.189)*z,D+Math.sin(P+4.189)*z,-i*1.72,A*2.6+Math.cos(P)*B,D*2.6+Math.sin(P)*B,-i*1.72-N,A*2.6+Math.cos(P+2.094)*B,D*2.6+Math.sin(P+2.094)*B,-i*1.72-N,A*2.6+Math.cos(P+4.189)*B,D*2.6+Math.sin(P+4.189)*B,-i*1.72-N],tt=r(H,[0,3,1,1,3,4,1,4,2,2,4,5,2,5,0,0,5,3],c);tt.name="squidArm"+y,e.add(tt)}return[-1,1].forEach((y,P)=>{const A=new $(new be(i*.18,6,5),m);A.position.set(y*i*.32,i*.04,-i*1.38),A.name="squidEye"+P,e.add(A);const D=new $(new be(i*.11,5,4),h);D.position.set(y*i*.38,i*.04,-i*1.46),D.name="squidIris"+P,e.add(D)}),[[0,-i*.45,i*.6],[i*.16,-i*.42,i*.4],[-i*.16,-i*.42,i*.4],[0,-i*.47,i*.1],[i*.18,-i*.44,-i*.05],[-i*.18,-i*.44,-i*.05],[i*.3,-i*.22,-i*1.25],[-i*.3,-i*.22,-i*1.25],[i*.2,-i*.3,-i*1.48],[-i*.2,-i*.3,-i*1.48],[0,0,i*1.3]].forEach((y,P)=>{const A=new $(new be(i*.028,4,3),u);A.position.set(...y),A.name="squidPhoto"+P,e.add(A)}),e.userData.isSquid=!0,e.userData.squidMats=[a,o,l,c],e.userData.photoMat=u,e.userData.eyeIrisMat=h,e}function ay(n){const t=new Ee;t.userData.isFish=!0;const e=new ha({color:4018272,flatShading:!0,roughness:.7,metalness:0}),i=new ha({color:14082024,flatShading:!0,roughness:.65,metalness:0}),s=new ha({color:6982298,flatShading:!0,roughness:.55,metalness:.05}),r=new ha({color:657930,roughness:.05,metalness:.2}),a=n,o=new Float32Array([a*2,0,0,a*1.5,a*.28,-a*.18,a*1.5,a*.22,a*.22,a*1.5,-a*.2,a*.18,a*1.5,-a*.18,-a*.2,a*.4,a*.5,-a*.32,a*.4,a*.42,a*.42,a*.4,-a*.36,a*.38,a*.4,-a*.34,-a*.38,-a*.8,a*.42,-a*.28,-a*.8,a*.36,a*.36,-a*.8,-a*.3,a*.3,-a*.8,-a*.28,-a*.3,-a*1.7,a*.22,-a*.14,-a*1.7,a*.18,a*.18,-a*1.7,-a*.14,a*.14,-a*1.7,-a*.13,-a*.15,-a*2.2,0,0]),l=[0,1,5,0,5,6,0,6,2,5,9,6,9,10,6,9,13,10,13,14,10,13,17,14,1,2,6,1,6,5,2,3,7,2,7,6,6,7,11,6,11,10,10,11,15,10,15,14],c=[0,3,4,0,4,8,0,8,7,0,7,3,7,8,12,7,12,11,11,12,16,11,16,15,15,16,17,3,8,7,3,7,4,8,12,11,8,11,7,4,3,8];function u(T,C,x){const y=new Nt;return y.setAttribute("position",new Jt(T.slice(),3)),y.setIndex(C),y.computeVertexNormals(),new $(y,x)}const m=u(o,l,s);m.name="sharkBodyTop";const h=u(o,c,i);h.name="sharkBodyBot",t.add(m),t.add(h);const p=new Float32Array([-a*.05,a*.48,-a*.06,-a*.05,a*.48,a*.06,-a*.55,a*1.12,-a*.04,-a*.55,a*1.12,a*.04,-a*.75,a*.48,-a*.06,-a*.75,a*.48,a*.06]),S=u(p,[0,2,1,1,2,3,2,4,3,3,4,5,0,1,4,1,5,4],e);S.name="sharkDorsal",t.add(S);const f=new Float32Array([-a*2,a*.08,-a*.06,-a*2,a*.08,a*.06,-a*2.8,a*.72,-a*.04,-a*2.8,a*.72,a*.04,-a*2.5,-a*.4,-a*.04,-a*2.5,-a*.4,a*.04]),g=u(f,[0,2,1,1,2,3,0,1,4,1,5,4,0,4,2,1,3,5],e);g.name="sharkCaudal",t.add(g),[-1,1].forEach((T,C)=>{const x=new Float32Array([a*.9,-a*.1,T*a*.12,a*.3,-a*.18,T*a*.12,a*.55,-a*.38,T*a*.8,a*.75,-a*.14,T*a*.12]),P=u(x,[0,2,1,0,3,2,0,1,3],e);P.name="sharkPec"+C,t.add(P)});const b=new Float32Array([-a*1.2,a*.12,-a*.05,-a*1.2,a*.12,a*.05,-a*1.5,a*.48,-a*.04,-a*1.5,a*.48,a*.04,-a*1.65,a*.12,-a*.05,-a*1.65,a*.12,a*.05]),w=u(b,[0,2,1,1,2,3,2,4,3,3,4,5,0,1,4,1,5,4],e);return w.name="sharkAnal2",t.add(w),[-1,1].forEach((T,C)=>{const x=new $(new be(a*.075,5,4),r);x.position.set(a*1.45,a*.18,T*a*.28),x.name="sharkEye"+C,t.add(x)}),t}function oy(n){const t=new Ee;t.userData.isFish=!0;const e=n,i=new ht({color:1714746,flatShading:!0,roughness:.65,metalness:.05}),s=new ht({color:14213096,flatShading:!0,roughness:.6,metalness:0}),r=new ht({color:1121834,flatShading:!0,roughness:.7,metalness:0}),a=new ht({color:526344,roughness:.05,metalness:.2});function o(C,x,y){const P=new Nt;return P.setAttribute("position",new Jt(new Float32Array(C),3)),P.setIndex(x),P.computeVertexNormals(),new $(P,y)}const l=new Ee;l.name="mantaWingLeft";const c=new Ee;c.name="mantaWingRight",t.add(l),t.add(c),t.userData.wingLeft=l,t.userData.wingRight=c,t.userData.isManta=!0;const u=[e*1.1,e*.06,0,e*.1,e*.1,-e*2.2,-e*1.3,e*.04,0,e*.7,e*.14,-e*1.1,-e*.55,e*.1,-e*1.3,e*.05,e*.22,0,e*1.1,-e*.04,0,-e*1.3,-e*.04,0,e*.05,-e*.08,0,e*.7,-e*.06,-e*1.1,-e*.55,-e*.06,-e*1.3,e*.1,-e*.05,-e*2.2],m=[0,3,5,3,1,5,1,4,5,4,2,5,0,5,3],h=[6,8,9,8,11,9,11,10,9,10,7,9,6,9,8],p=o(u,m,i);p.name="mantaLWingTop";const _=o(u,h,s);_.name="mantaLWingBot",l.add(p),l.add(_);const S=[e*1.1,e*.06,0,e*.1,e*.1,e*2.2,-e*1.3,e*.04,0,e*.7,e*.14,e*1.1,-e*.55,e*.1,e*1.3,e*.05,e*.22,0,e*1.1,-e*.04,0,-e*1.3,-e*.04,0,e*.05,-e*.08,0,e*.7,-e*.06,e*1.1,-e*.55,-e*.06,e*1.3,e*.1,-e*.05,e*2.2],f=[0,5,3,3,5,1,1,5,4,4,5,2,0,3,5],d=[6,9,8,8,9,11,11,9,10,10,9,7,6,8,9],g=o(S,f,i);g.name="mantaRWingTop";const b=o(S,d,s);b.name="mantaRWingBot",c.add(g),c.add(b),[-1,1].forEach((C,x)=>{const y=[e*1.1,e*.05,C*e*.05,e*1.4,e*.08,C*e*.35,e*1.55,-e*.02,C*e*.55,e*.9,e*.02,C*e*.3],A=o(y,[0,1,3,1,2,3,0,2,1],r);A.name="mantaHorn"+x,(C===-1?l:c).add(A)});const M=[-e*1.3,e*.04,e*.06,-e*1.3,e*.04,-e*.06,-e*2.8,e*0,e*.02,-e*2.8,e*0,-e*.02,-e*3.8,-e*.04,e*.01,-e*3.8,-e*.04,-e*.01],T=o(M,[0,1,2,1,3,2,2,3,4,3,5,4],r);return T.name="mantaTail",t.add(T),[-1,1].forEach((C,x)=>{const y=new $(new be(e*.06,5,4),a);y.position.set(e*.85,e*.1,C*e*.28),y.name="mantaEye"+x,t.add(y)}),t}function ff(n){const t=new Ee,e=new ht({color:9127187,roughness:.9,metalness:0}),i=new ht({color:13789470,roughness:.65,emissive:3806464,emissiveIntensity:.3}),s=new $(new Kc(n*.35,n*1.8,5,10),e);s.rotation.z=Math.PI/2,t.add(s);const r=new Fe(n*.04,n*.06,n*.14,4),a=new ht({color:8010767,roughness:.95});for(let o=0;o<3;o++){const l=o/3*Math.PI*2;for(let c=0;c<6;c++){const u=new $(r,a);u.position.set((c/5-.5)*n*1.6,Math.cos(l)*n*.37,Math.sin(l)*n*.37),u.rotation.x=l,t.add(u)}}for(let o=0;o<6;o++){const l=o/6*Math.PI*2,c=new $(new Fe(n*.03,n*.05,n*.3,4),i);c.position.set(n*1.05,Math.cos(l)*n*.17,Math.sin(l)*n*.17),c.rotation.z=Math.cos(l)*.5+Math.PI/2,t.add(c)}return t}function ly(n){const t=new Ee,e=new ht({color:855322,roughness:.7,metalness:0,emissive:263176,emissiveIntensity:.2}),i=new ht({color:1703936,roughness:.8,emissive:655360,emissiveIntensity:.3}),s=new $(new be(n*.52,8,7),i);s.scale.set(1.35,.95,1),s.position.set(-n*.38,-n*.12,0),t.add(s);const r=new $(new be(n*.35,7,6),e);r.position.set(-n*.28,n*.22,0),t.add(r);for(let o=0;o<8;o++){const l=o/7,c=Math.max(n*(.28-l*.23),.01),u=new $(new be(c,6,5),e);u.position.set(o*n*.55,Math.sin(o*.7)*n*.16,0),t.add(u)}const a=new $(new be(n*.07,6,6),new ht({color:16711935,emissive:13369548,emissiveIntensity:2.5,transparent:!0,opacity:.85}));return a.position.set(7*n*.55,0,0),t.add(a),[-1,1].forEach(o=>{const l=new $(new be(n*.11,6,6),new ht({color:13056,emissive:65348,emissiveIntensity:.7}));l.position.set(-n*.12,n*.3,o*n*.28),t.add(l)}),t}const ih=[];function se(n,t,e=.06,i=.8){const s=de[t],r=s.y-s.height/2+.5,a=s.y+s.height/2-.5;n.position.y=r+Math.random()*(a-r),n.position.x=(Math.random()-.5)*(je-2),n.position.z=(Math.random()-.5)*(Ve-2),n.userData={zoneId:t,floatAmp:e,floatSpeed:i,floatOffset:Math.random()*Math.PI*2,baseY:n.position.y,baseX:n.position.x,driftDir:(Math.random()-.5)*.003,rotSpeed:(Math.random()-.5)*.005,wobblePhase:Math.random()*Math.PI*2,isFish:!!n.userData.isFish,isManta:!!n.userData.isManta,isJelly:!!n.userData.isJelly,isSquid:!!n.userData.isSquid,wingLeft:n.userData.wingLeft||null,wingRight:n.userData.wingRight||null,bellMesh:n.userData.bellMesh||null,jellyMats:n.userData.jellyMats||null,squidMats:n.userData.squidMats||null,photoMat:n.userData.photoMat||null,eyeIrisMat:n.userData.eyeIrisMat||null},It.add(n),ih.push(n)}const pf=df(.32);pf.name="dolphin1";se(pf,0,.08,1.2);const mf=df(.28);mf.name="dolphin2";se(mf,0,.1,1);const gf=ay(.4);gf.name="shark1";se(gf,0,.05,.6);const _f=Dn(1739386,.18);_f.name="fish1";se(_f,0,.12,1.5);const xf=Dn(2992284,.15);xf.name="fish2";se(xf,0,.15,1.8);const vf=Dn(948846,.16);vf.name="fish3";se(vf,0,.1,1.3);const Mf=Dn(3915696,.14);Mf.name="fish4";se(Mf,0,.13,1.6);const yf=Bs(.3,15632639);yf.name="jelly1";se(yf,0,.07,.5);const Sf=Bs(.25,16746666);Sf.name="jelly2";se(Sf,0,.09,.7);const bf=oy(.55);bf.name="mantaRay";se(bf,0,.05,.38);const Ef=nh(.35,10040319);Ef.name="squid1";se(Ef,1,.06,.9);const Tf=nh(.3,3386111);Tf.name="squid2";se(Tf,1,.08,1.1);const wf=Dn(1127253,.18,65535);wf.name="lanternFish1";se(wf,1,.07,1);const Af=Dn(1122884,.15,8978431);Af.name="lanternFish2";se(Af,1,.09,1.2);const Cf=Dn(858675,.16,4521898);Cf.name="lanternFish3";se(Cf,1,.06,.8);const sh=Dn(3359846,.2,11206655);sh.scale.set(.7,1.5,.4);sh.name="hatchet";se(sh,1,.05,.7);const Rf=Bs(.28,4474111);Rf.name="jelly3";se(Rf,1,.06,.4);const Pf=uf(.35);Pf.name="angler1";se(Pf,2,.04,.5);const Df=uf(.28);Df.name="angler2";se(Df,2,.05,.6);const If=ly(.3);If.name="gulper1";se(If,2,.03,.4);const Lf=Dn(657940,.22,65416);Lf.name="viper1";se(Lf,2,.04,.5);const Uf=nh(.4,2228275);Uf.name="squid3";se(Uf,2,.03,.3);const Nf=Bs(.32,204);Nf.name="jelly4";se(Nf,2,.05,.3);const Ff=ff(.35);Ff.name="seaCuc1";se(Ff,3,.02,.2);const Of=ff(.3);Of.name="seaCuc2";se(Of,3,.02,.25);const Bf=Dn(1118481,.2,16777215);Bf.name="tripodFish";se(Bf,3,.02,.3);const zf=Bs(.35,16746700);zf.name="dumboOcto";se(zf,3,.03,.25);const rh=Dn(4473924,.22,14540253);rh.scale.set(.7,.5,1.2);rh.name="isopod";se(rh,3,.015,.15);const Vf=Bs(.22,13107);Vf.name="jelly5";se(Vf,3,.025,.2);const Yt=new Ee;Yt.name="shipGroup";Yt.position.set(0,0,0);It.add(Yt);const cy=new ht({color:13378048,flatShading:!0,roughness:.7,metalness:.05}),kf=new ht({color:10033664,flatShading:!0,roughness:.75,metalness:.05}),Gf=new ht({color:15262936,flatShading:!0,roughness:.6,metalness:0}),wr=new ht({color:15789802,flatShading:!0,roughness:.5,metalness:0}),hy=new ht({color:14701824,flatShading:!0,roughness:.55,metalness:0}),uo=new ht({color:1842208,flatShading:!0,roughness:.9,metalness:0}),zs=new ht({color:8030862,flatShading:!0,roughness:.55,metalness:.35}),ah=new ht({color:12107972,flatShading:!0,roughness:.45,metalness:.5});function Mn(n,t,e){const i=new Nt;return i.setAttribute("position",new Jt(new Float32Array(n),3)),i.setIndex(t),i.computeVertexNormals(),new $(i,e)}const fo=[1.92,.22,-.08,1.92,.22,.08,1.8,0,-.22,1.8,0,.22,1.65,-.44,-.16,1.65,-.44,.16,-.2,.22,-.58,-.2,.22,.58,-.2,0,-.62,-.2,0,.62,-.2,-.52,-.4,-.2,-.52,.4,-1.88,.22,-.52,-1.88,.22,.52,-1.88,0,-.54,-1.88,0,.54,-1.88,-.46,-.38,-1.88,-.46,.38],dy=[0,6,1,1,6,7,6,12,7,7,12,13,0,1,2,1,3,2],uy=[0,2,6,2,8,6,6,8,12,8,14,12,1,7,3,3,7,9,7,13,9,9,13,15],fy=[2,4,8,4,10,8,3,9,5,5,9,11,8,10,14,10,16,14,9,15,11,11,15,17,2,3,4,3,5,4,14,16,15,15,16,17],py=[4,5,10,5,11,10,10,11,16,11,17,16],Hf=Mn(fo,dy,Gf);Hf.name="hullDeck";const Wf=Mn(fo,uy,wr);Wf.name="hullSide";const Xf=Mn(fo,fy,cy);Xf.name="hullRed";const Yf=Mn(fo,py,kf);Yf.name="hullKeel";[Hf,Wf,Xf,Yf].forEach(n=>{n.castShadow=!0,Yt.add(n)});[-1,1].forEach((n,t)=>{const e=n*.61,s=Mn([1.8,-.04,e,1.8,.04,e,-1.88,.04,e,-1.88,-.04,e],[0,1,3,1,2,3],uo);s.name="waterlineStripe_"+t,Yt.add(s)});const my=[2.12,-.3,0,1.82,-.22,-.12,1.82,-.22,.12,1.62,-.46,-.1,1.62,-.46,.1],qf=Mn(my,[0,1,2,1,3,2,3,4,2,1,0,3,2,4,0,3,0,4],kf);qf.name="bowBulb";Yt.add(qf);const po=new $(new Je(3.82,.06,1.16),Gf);po.name="deckSlab";po.position.set(.02,.25,0);po.castShadow=!0;Yt.add(po);const gy=[-.15,.28,-.42,-.15,.28,.42,-1.48,.28,-.38,-1.48,.28,.38,-.2,.88,-.36,-.2,.88,.36,-1.44,.88,-.32,-1.44,.88,.32],_y=[0,4,1,1,4,5,2,3,6,3,7,6,0,2,4,2,6,4,1,5,3,3,5,7,4,6,5,5,6,7],oh=Mn(gy,_y,wr);oh.name="deckhouse";oh.castShadow=!0;Yt.add(oh);const xy=[-.22,.88,-.3,-.22,.88,.3,-1.05,.88,-.28,-1.05,.88,.28,-.26,1.36,-.26,-.26,1.36,.26,-1.02,1.36,-.24,-1.02,1.36,.24],vy=[0,4,1,1,4,5,2,3,6,3,7,6,0,2,4,2,6,4,1,5,3,3,5,7,4,6,5,5,6,7],lh=Mn(xy,vy,wr);lh.name="wheelhouse";lh.castShadow=!0;Yt.add(lh);[-.18,0,.18].forEach((n,t)=>{const e=new $(new Je(.04,.22,.14),uo);e.name="win_"+t,e.position.set(-.23,1.1,n),Yt.add(e)});[-1,1].forEach((n,t)=>{const e=[-.22,1.36,n*.28,-.22,1.36,n*.52,-.9,1.36,n*.48,-.9,1.36,n*.28,-.22,1.3,n*.28,-.22,1.3,n*.52,-.9,1.3,n*.48,-.9,1.3,n*.28],s=Mn(e,[0,1,3,1,2,3,4,7,5,5,7,6,1,5,2,2,5,6,0,4,1,1,4,5,2,6,3,3,6,7],wr);s.name="bridgeWing_"+t,Yt.add(s)});const xn=6,mo=[],ch=[];for(let n=0;n<xn;n++){const t=n/xn*Math.PI*2;mo.push(Math.cos(t)*.2,.88,Math.sin(t)*.2)}for(let n=0;n<xn;n++){const t=n/xn*Math.PI*2;mo.push(Math.cos(t)*.14,1.46,Math.sin(t)*.14)}mo.push(0,.88,0);for(let n=0;n<xn;n++){const t=n,e=(n+1)%xn;ch.push(t,e+xn,e,t,t+xn,e+xn)}for(let n=0;n<xn;n++)ch.push(xn*2,(n+1)%xn,n);const hh=Mn(mo.map((n,t)=>{const e=t%3;return e===0?n-.55:n}),ch,hy);hh.name="funnel";hh.castShadow=!0;Yt.add(hh);const dh=new $(new Fe(.145,.145,.055,6),uo);dh.name="funnelCap";dh.position.set(-.55,1.49,0);Yt.add(dh);const uh=new $(new Fe(.152,.152,.07,6),wr);uh.name="funnelStripe";uh.position.set(-.55,1.3,0);Yt.add(uh);[-1,1].forEach((n,t)=>{const e=[1.3,.28,n*.44,1.3,.28,n*.3,.92,1.02,n*.08,.92,1.02,n*.04],s=Mn(e,[0,2,1,1,2,3,0,1,3,0,3,2],zs);s.name="gantryLeg_"+t,Yt.add(s)});const fh=new $(new Je(.06,.06,.22),zs);fh.name="gantryBar";fh.position.set(.92,1.02,0);Yt.add(fh);[-1,1].forEach((n,t)=>{const e=[-.28,.28,n*.22,-.28,.28,n*.14,-.3,1.72,n*.03,-.3,1.72,n*0],s=Mn(e,[0,2,1,1,2,3,0,1,3,0,3,2],ah);s.name="mastLeg_"+t,Yt.add(s)});const ph=new $(new Je(.03,.03,.72),ah);ph.name="yardArm";ph.position.set(-.3,2.05,0);Yt.add(ph);const mh=new $(new Je(.04,.52,.04),ah);mh.name="mastPole";mh.position.set(-.3,1.98,0);Yt.add(mh);const gh=new $(new Fe(.018,.018,.22,5),zs);gh.name="radarPole";gh.position.set(-.3,2.36,0);Yt.add(gh);const go=new $(new Fe(.13,.13,.02,8),zs);go.name="radarDisc";go.rotation.x=Math.PI/2;go.position.set(-.3,2.48,0);Yt.add(go);const _o=new $(new Fe(.09,.09,.18,6),zs);_o.name="winchDrum";_o.rotation.x=Math.PI/2;_o.position.set(1.3,.38,0);Yt.add(_o);[-1,1].forEach((n,t)=>{const e=new $(new Fe(.12,.12,.025,6),zs);e.name="winchFlange_"+t,e.rotation.x=Math.PI/2,e.position.set(1.3,.38,n*.1),Yt.add(e)});const _h=new $(new Je(.22,.06,.26),uo);_h.name="winchBase";_h.position.set(1.3,.29,0);Yt.add(_h);const jf=new to({color:10136495}),My=new Nt().setFromPoints([new I(1.3,.42,0),new I(-.3,2.05,0)]),xh=new eo(My,jf);xh.name="ctdWire";Yt.add(xh);[new I(1.55,.28,0),new I(-1.8,.28,0)].forEach((n,t)=>{const e=new Nt().setFromPoints([new I(-.3,2.22,0),n]),i=new eo(e,jf);i.name="stayWire_"+t,Yt.add(i)});const vh=new $(new be(.038,5,4),new ht({color:16717824,emissive:16717824,emissiveIntensity:2.8}));vh.name="navLightRed";vh.position.set(1.55,.36,-.56);Yt.add(vh);const Mh=new $(new be(.038,5,4),new ht({color:60996,emissive:60996,emissiveIntensity:2.8}));Mh.name="navLightGreen";Mh.position.set(1.55,.36,.56);Yt.add(Mh);const yh=new $(new be(.032,5,4),new ht({color:16777215,emissive:16777215,emissiveIntensity:3.2}));yh.name="mastheadLight";yh.position.set(-.3,2.26,0);Yt.add(yh);const Sh=new $(new be(.028,5,4),new ht({color:16777215,emissive:16772829,emissiveIntensity:2}));Sh.name="sternLight";Sh.position.set(-1.88,.5,0);Yt.add(Sh);const zt=new Ee;zt.name="rovGroup";zt.position.set(1.3,-1.8,0);It.add(zt);function qn(n,t,e){const i=new Nt,s=[],r=[];for(let o=0;o<t.length;o+=3){const l=t[o]*3,c=t[o+1]*3,u=t[o+2]*3,m=n[l],h=n[l+1],p=n[l+2],_=n[c],S=n[c+1],f=n[c+2],d=n[u],g=n[u+1],b=n[u+2],M=_-m,w=S-h,T=f-p,C=d-m,x=g-h,y=b-p,P=w*y-T*x,A=T*C-M*y,D=M*x-w*C,N=Math.sqrt(P*P+A*A+D*D)||1;for(let z=0;z<3;z++)s.push([m,_,d][z],[h,S,g][z],[p,f,b][z]),r.push(P/N,A/N,D/N)}i.setAttribute("position",new Jt(new Float32Array(s),3)),i.setAttribute("normal",new Jt(new Float32Array(r),3));const a=new $(i,e);return a.castShadow=!0,a}const yy=new ht({color:16761344,roughness:.55,metalness:.25,flatShading:!0}),Ar=new ht({color:1844528,roughness:.7,metalness:.4,flatShading:!0}),bh=new ht({color:4872810,roughness:.6,metalness:.5,flatShading:!0}),Kf=new ht({color:855826,roughness:.8,metalness:.3,flatShading:!0});new ht({color:16733440,roughness:.5,metalness:.2,flatShading:!0});const Sy=[-.3,.13,.17,-.3,.13,-.17,-.3,-.1,-.2,-.3,-.1,.2,.3,.13,.14,.3,.13,-.14,.3,-.08,-.16,.3,-.08,.16],by=[0,1,2,0,2,3,4,6,5,4,7,6,0,4,5,0,5,1,3,2,6,3,6,7,0,3,7,0,7,4,1,5,6,1,6,2],Zf=qn(Sy,by,yy);Zf.name="rovBody";zt.add(Zf);const Ey=[-.26,.14,-.12,-.26,.14,.12,.1,.14,.15,.26,.14,.08,.26,.14,-.08,.1,.14,-.15,-.26,.21,-.12,-.26,.21,.12,.1,.21,.15,.26,.21,.08,.26,.21,-.08,.1,.21,-.15],Ty=[6,7,8,6,8,9,6,9,10,6,10,11,0,2,1,0,3,2,0,4,3,0,5,4,0,1,7,0,7,6,1,2,8,1,8,7,2,3,9,2,9,8,3,4,10,3,10,9,4,5,11,4,11,10,5,0,6,5,6,11],$f=qn(Ey,Ty,Ar);$f.name="rovFrame";zt.add($f);const wy=[-.18,.21,-.07,-.18,.21,.07,.04,.21,.09,.04,.21,-.09,-.14,.28,-.06,-.14,.28,.06,.02,.28,.07,.02,.28,-.07],Ay=[4,5,6,4,6,7,0,3,2,0,2,1,0,1,5,0,5,4,1,2,6,1,6,5,2,3,7,2,7,6,3,0,4,3,4,7],Jf=qn(wy,Ay,bh);Jf.name="rovPod";zt.add(Jf);const Cy=[-.3,.13,.17,-.3,.13,-.17,-.3,-.1,-.2,-.3,-.1,.2,-.42,.09,.12,-.42,.09,-.12,-.42,-.07,-.13,-.42,-.07,.13],Ry=[4,5,6,4,6,7,0,4,7,0,7,3,1,5,4,1,4,0,3,7,6,3,6,2,0,1,5,0,5,4],Qf=qn(Cy,Ry,Ar);Qf.name="rovNose";zt.add(Qf);const Py=[-.421,.09,.12,-.421,.09,-.12,-.421,-.07,-.13,-.421,-.07,.13],Dy=[0,1,2,0,2,3],tp=qn(Py,Dy,new ht({color:1120288,roughness:.9,flatShading:!0}));tp.name="rovFacePlate";zt.add(tp);[.055,-.055].forEach((n,t)=>{const e=new $(new Fe(.038,.038,.015,6),new ht({color:16777215,emissive:16774348,emissiveIntensity:3.5,flatShading:!0}));e.name="rovHeadlight_"+t,e.rotation.z=Math.PI/2,e.position.set(-.432,.01,n),zt.add(e)});const Cr=new $(new Fe(.028,.028,.015,6),new ht({color:16777215,emissive:16777215,emissiveIntensity:4.5,flatShading:!0}));Cr.name="rovLight";Cr.rotation.z=Math.PI/2;Cr.position.set(-.432,.01,0);zt.add(Cr);[-1,1].forEach((n,t)=>{const e=[],i=[];for(let h=0;h<6;h++){const p=h/6*Math.PI*2;e.push(Math.cos(p)*.095,-.11/2,Math.sin(p)*.095),e.push(Math.cos(p)*.095,.11/2,Math.sin(p)*.095)}for(let h=0;h<6;h++){const p=h,_=(h+1)%6;i.push(p*2,_*2,_*2+1,p*2,_*2+1,p*2+1)}const o=qn(e,i,Kf);o.name="rovShroud_"+t,o.rotation.x=Math.PI/2,o.position.set(.1,-.02,n*.3),zt.add(o);const l=new $(new Fe(.025,.025,.045,4),bh);l.name="rovPropHub_"+t,l.position.set(.1,-.02,n*.3),zt.add(l);const c=[.06,-.1,n*.195,.06,-.1,n*.205,.14,-.1,n*.195,.14,-.1,n*.205,.06,0,n*.195,.06,0,n*.205,.14,0,n*.195,.14,0,n*.205],m=qn(c,[0,2,3,0,3,1,4,5,7,4,7,6,0,1,5,0,5,4,2,6,7,2,7,3,0,4,6,0,6,2,1,3,7,1,7,5],Ar);m.name="rovStrut_"+t,zt.add(m)});const Ec=[],ep=[],Bi=6,_a=.085,Iy=.1;for(let n=0;n<Bi;n++){const t=n/Bi*Math.PI*2;Ec.push(Math.cos(t)*_a,0,Math.sin(t)*_a),Ec.push(Math.cos(t)*_a,Iy,Math.sin(t)*_a)}for(let n=0;n<Bi;n++){const t=n,e=(n+1)%Bi;ep.push(t,e+Bi,e,t,t+Bi,e+Bi)}const Eh=qn(Ec,ep,Kf);Eh.name="rovVThrusterShroud";Eh.position.set(.06,.21,0);zt.add(Eh);const Ia=8,ni=.18,uu=.09;for(let n=0;n<Ia;n++){const t=n/Ia*Math.PI*2,e=(n+1)/Ia*Math.PI*2,i=[Math.cos(t)*ni,-.1,Math.sin(t)*ni,Math.cos(t)*ni,-.1-uu,Math.sin(t)*ni,Math.cos(e)*ni,-.1,Math.sin(e)*ni,Math.cos(e)*ni,-.1-uu,Math.sin(e)*ni],r=qn(i,[0,2,3,0,3,1],Ar);r.name="rovBasketBar_"+n,r.position.set(-.04,0,0),zt.add(r)}const xo=new $(new yr(ni,.012,4,Ia),Ar);xo.name="rovBasketRing";xo.rotation.x=Math.PI/2;xo.position.set(-.04,-.193,0);zt.add(xo);const Ly=[-.1,.28,-.015,-.1,.28,.015,-.12,.46,-.008,-.12,.46,.008,-.08,.28,-.015,-.08,.28,.015,-.1,.46,-.008,-.1,.46,.008],Uy=[0,2,3,0,3,1,4,5,7,4,7,6,0,1,5,0,5,4,2,6,7,2,7,3,0,4,6,0,6,2,1,3,7,1,7,5],np=qn(Ly,Uy,bh);np.name="rovAntenna";zt.add(np);const Th=new $(new be(.022,5,4),new ht({color:16729088,emissive:16720384,emissiveIntensity:3,flatShading:!0}));Th.name="rovBeacon";Th.position.set(-.12,.485,0);zt.add(Th);const fu=zt.getObjectByName("rovPropHub_0"),pu=zt.getObjectByName("rovPropHub_1"),mu=zt.getObjectByName("rovBeacon"),gu=zt.getObjectByName("rovVThrusterShroud"),rr=new Sr(11197951,2,3);rr.name="rovSpotlight";const Tl=12,Ha=3.5,vo=[];for(let n=0;n<Tl;n++){const t=n/Tl,e=(n+1)/Tl,i=t*1.1,s=e*1.1,r=-(.32+t*Ha),a=new Fe(s,i,.001,20,1,!1),o=(1-t)*(1-t)*.22,l=new sn({color:11197951,transparent:!0,opacity:0,side:Se,depthWrite:!1}),c=new $(a,l);c.name="torchRing_"+n,c.rotation.z=Math.PI/2,c.position.set(r,0,0),c._baseAlpha=o,vo.push(c)}const Mo=document.createElement("canvas");Mo.width=256;Mo.height=256;const wh=Mo.getContext("2d"),Vs=wh.createRadialGradient(128,128,0,128,128,128);Vs.addColorStop(0,"rgba(255,255,255,0.95)");Vs.addColorStop(.12,"rgba(210,235,255,0.80)");Vs.addColorStop(.35,"rgba(140,200,255,0.45)");Vs.addColorStop(.65,"rgba(80,150,255,0.15)");Vs.addColorStop(1,"rgba(40,100,220,0.00)");wh.fillStyle=Vs;wh.fillRect(0,0,256,256);const Ny=new Yn(Mo),ip=new Qa({map:Ny,transparent:!0,opacity:0,blending:ci,depthWrite:!1}),ks=new qc(ip);ks.name="torchConeROV";ks.scale.set(2.8,2.8,1);ks.position.set(-2.1,0,0);ks.visible=!1;const yo=document.createElement("canvas");yo.width=256;yo.height=256;const Ah=yo.getContext("2d"),So=Ah.createRadialGradient(128,128,0,128,128,128);So.addColorStop(0,"rgba(180,220,255,0.30)");So.addColorStop(.4,"rgba(100,170,255,0.12)");So.addColorStop(1,"rgba(60,120,255,0.00)");Ah.fillStyle=So;Ah.fillRect(0,0,256,256);const Fy=new Yn(yo),sp=new Qa({map:Fy,transparent:!0,opacity:0,blending:ci,depthWrite:!1}),Gs=new qc(sp);Gs.name="torchHaloRing";Gs.scale.set(5.5,5.5,1);Gs.position.set(-2.1,0,0);Gs.visible=!1;const Oy=ip,By=sp,Rr=80,Ch=new Nt,Bn=new Float32Array(Rr*3),Ts=new Float32Array(Rr*3),Tc=new Float32Array(Rr);function rp(n){const t=Math.random(),e=t*1.1,i=Math.random()*Math.PI*2,s=Math.random()*e*.85;Bn[n*3]=-(.32+t*Ha),Bn[n*3+1]=Math.sin(i)*s,Bn[n*3+2]=Math.cos(i)*s,Ts[n*3]=(Math.random()-.5)*.0012,Ts[n*3+1]=(Math.random()-.5)*.001,Ts[n*3+2]=(Math.random()-.5)*.001,Tc[n]=Math.random()*Math.PI*2}for(let n=0;n<Rr;n++)rp(n);Ch.setAttribute("position",new Jt(Bn,3));const ap=new Mr({color:13692671,size:.045,transparent:!0,opacity:0,sizeAttenuation:!0,depthWrite:!1}),Rh=new no(Ch,ap);Rh.name="torchMotes";Rh.frustumCulled=!1;const zy=new Zc(.38,24),op=new sn({color:16777215,transparent:!0,opacity:0,side:Se,depthWrite:!1}),bo=new $(zy,op);bo.name="torchHalo";bo.rotation.y=Math.PI/2;bo.position.set(-.3,0,0);const Vy=new to({color:13421772,linewidth:2});let Wa=new Nt;const ky=new Float32Array(60);Wa.setAttribute("position",new Jt(ky,3));const Eo=new eo(Wa,Vy);Eo.name="tether";Eo.frustumCulled=!1;It.add(Eo);function Gy(){const n=new I(1.3+Yt.position.x,Yt.position.y+.42,Yt.position.z),t=zt.position.clone(),e=Wa.attributes.position.array;for(let i=0;i<20;i++){const s=i/19,r=Math.sin(s*Math.PI)*.3;e[i*3]=n.x+(t.x-n.x)*s,e[i*3+1]=n.y+(t.y-n.y)*s-r,e[i*3+2]=n.z+(t.z-n.z)*s}Wa.attributes.position.needsUpdate=!0}const pe={w:!1,a:!1,s:!1,d:!1,up:!1,down:!1,left:!1,right:!1};window.addEventListener("keydown",n=>{if(Ke)switch(n.code){case"KeyW":case"ArrowUp":pe.w=pe.up=!0,n.preventDefault();break;case"KeyS":case"ArrowDown":pe.s=pe.down=!0,n.preventDefault();break;case"KeyA":case"ArrowLeft":pe.a=pe.left=!0,n.preventDefault();break;case"KeyD":case"ArrowRight":pe.d=pe.right=!0,n.preventDefault();break}});window.addEventListener("keyup",n=>{switch(n.code){case"KeyW":case"ArrowUp":pe.w=pe.up=!1;break;case"KeyS":case"ArrowDown":pe.s=pe.down=!1;break;case"KeyA":case"ArrowLeft":pe.a=pe.left=!1;break;case"KeyD":case"ArrowRight":pe.d=pe.right=!1;break}});let To=!1,Ms={x:0,y:0};le.domElement.addEventListener("mousedown",n=>{Ke&&n.button===0&&(To=!0,Ms.x=n.clientX,Ms.y=n.clientY,le.domElement.style.cursor="grabbing")});window.addEventListener("mousemove",n=>{if(!To||!Ke)return;const t=n.clientX-Ms.x;n.clientY-Ms.y,Ms.x=n.clientX,Ms.y=n.clientY,Us.yaw-=t*Wy});window.addEventListener("mouseup",n=>{n.button===0&&(To=!1,Ke&&(le.domElement.style.cursor="grab"))});le.domElement.addEventListener("dblclick",()=>{Ke&&(Us.yaw=0,Us.pitch=0)});const xa=.045,_u=Ve/2-.4;function Hy(){Ke&&((pe.w||pe.up)&&(pr=ri=Math.min(0,ri+xa)),(pe.s||pe.down)&&(pr=ri=Math.max(-ui+.4,ri-xa)),(pe.a||pe.left)&&(zt.position.z=Math.max(-_u,zt.position.z-xa)),(pe.d||pe.right)&&(zt.position.z=Math.min(_u,zt.position.z+xa)))}const fi=new tn(80,window.innerWidth/window.innerHeight,.05,500);fi.name="rovCamera";fi.position.set(-.35,.04,0);fi.near=.35;fi.updateProjectionMatrix();zt.add(fi);const yn=new Te;yn.name="rovLookPivot";yn.rotation.y=0;zt.add(yn);yn.add(fi);yn.add(rr);vo.forEach(n=>yn.add(n));yn.add(ks);yn.add(Gs);yn.add(Rh);yn.add(bo);const Us={yaw:0,pitch:0},Wy=.0022;let ar=di,Ke=!1,Hn=null,ri=-1.8,pr=-1.8,Cn=zt.position.y,lp=Ue.target.y;const xu=.08,Xy=.55,Wi=45,Ph=new Nt,Ni=new Float32Array(Wi*3),ms=new Float32Array(Wi*3),ir=new Float32Array(Wi),La=new Float32Array(Wi);for(let n=0;n<Wi;n++)ir[n]=999,La[n]=.4+Math.random()*.5;Ph.setAttribute("position",new Jt(Ni,3));const wc=new Mr({color:8965375,size:.055,transparent:!0,opacity:0,sizeAttenuation:!0,depthWrite:!1}),Dh=new no(Ph,wc);Dh.name="rovWake";Dh.frustumCulled=!1;It.add(Dh);let Qs=!1,va=!1,Be=0;function mr(n){const t=de[n];Hn=n,pr=t.y,Ke||(lp=t.y),Yy(t),pp(),br.forEach((e,i)=>{i===n?(e.material.opacity=.97,e.material.emissiveIntensity=1.2,e.material.color.set(new yt(t.color).multiplyScalar(1.5))):(e.material.opacity=.72,e.material.emissiveIntensity=.3,e.material.color.set(de[i].color))})}function Ih(){Hn=null,qy(),pp(),br.forEach((n,t)=>{n.material.opacity=.9,n.material.emissiveIntensity=.5,n.material.color.set(de[t].color)})}const In=document.createElement("div");In.id="infoPanel";In.style.cssText=`
  position:fixed; top:50%; right:24px; transform:translateY(-50%);
  width:280px; max-height:72vh; overflow-y:auto;
  background:rgba(5,12,28,0.92);
  border:1px solid rgba(0,140,255,0.35);
  border-radius:10px; padding:22px 20px 18px;
  color:#c8e8ff; font-family:Inter,sans-serif;
  box-sizing:border-box; display:none;
  backdrop-filter:blur(12px);
  z-index:300;
  scrollbar-width:thin; scrollbar-color:rgba(0,140,255,0.4) transparent;
`;document.body.appendChild(In);const wo=document.createElement("button");wo.textContent="✕";wo.style.cssText=`
  position:absolute; top:12px; right:14px;
  background:none; border:none; color:#88aacc; font-size:16px;
  cursor:pointer; padding:2px 6px; border-radius:4px;
  font-family:Inter,sans-serif;
`;wo.addEventListener("click",Ih);In.appendChild(wo);const Lh=document.createElement("div");Lh.style.cssText="font-size:14px;font-weight:700;color:#00ccff;margin-bottom:4px;line-height:1.3;padding-right:20px;";In.appendChild(Lh);const Uh=document.createElement("div");Uh.style.cssText="font-size:11px;color:#4488aa;margin-bottom:12px;letter-spacing:0.05em;text-transform:uppercase;";In.appendChild(Uh);const Nh=document.createElement("div");Nh.style.cssText="font-size:12px;line-height:1.7;color:#aaccdd;margin-bottom:14px;";In.appendChild(Nh);const Fh=document.createElement("div");Fh.textContent="ACTIVE ENTITIES";Fh.style.cssText="font-size:10px;letter-spacing:0.12em;color:#4488aa;margin-bottom:8px;font-weight:600;";In.appendChild(Fh);const Xa=document.createElement("div");Xa.style.cssText="display:flex;flex-wrap:wrap;gap:6px;";In.appendChild(Xa);function Yy(n){Lh.textContent=n.title,Uh.textContent=n.depth,Nh.textContent=n.desc,Xa.innerHTML="",n.creatures.forEach(t=>{const e=document.createElement("span");e.textContent=t,e.style.cssText=`
      background:rgba(0,80,160,0.4);
      border:1px solid rgba(0,140,255,0.3);
      border-radius:20px; padding:3px 10px;
      font-size:11px; color:#88ccff;
      font-family:Inter,sans-serif;
    `,Xa.appendChild(e)}),In.style.display="block"}function qy(){In.style.display="none"}const qi=document.createElement("div");qi.id="hintBar";qi.style.cssText=`
  position:fixed; bottom:20px; left:50%; transform:translateX(-50%);
  background:rgba(5,12,28,0.82); border:1px solid rgba(0,140,255,0.3);
  border-radius:20px; padding:6px 8px 6px 18px; color:#88aacc;
  font-family:Inter,sans-serif; font-size:12px;
  pointer-events:auto; z-index:300; white-space:nowrap;
  backdrop-filter:blur(8px);
  display:flex; align-items:center; gap:12px;
`;document.body.appendChild(qi);const Ao=document.createElement("span");Ao.innerHTML="🖱️ <b>Click a zone</b> to explore &nbsp;|&nbsp; Drag to orbit &nbsp;|&nbsp; Scroll to zoom";Ao.style.pointerEvents="none";qi.appendChild(Ao);const Oh=document.createElement("span");Oh.textContent="|";Oh.style.cssText="color:rgba(0,140,255,0.35); pointer-events:none;";qi.appendChild(Oh);const en=document.createElement("button");en.textContent="📷 ROV Cam";en.style.cssText=`
  background:rgba(0,80,160,0.45); border:1px solid rgba(0,140,255,0.45);
  border-radius:14px; color:#88ccff; font-family:Inter,sans-serif;
  font-size:11px; font-weight:600; padding:4px 13px; cursor:pointer;
  transition:background 0.15s, color 0.15s, border-color 0.15s;
  letter-spacing:0.04em; white-space:nowrap;
`;en.addEventListener("mouseenter",()=>{Ke||(en.style.background="rgba(0,120,220,0.65)",en.style.color="#ffffff")});en.addEventListener("mouseleave",()=>{Ke||(en.style.background="rgba(0,80,160,0.45)",en.style.color="#88ccff")});qi.appendChild(en);const Co=document.createElement("div");Co.style.cssText=`
  position:fixed; inset:0; pointer-events:none; z-index:148;
  opacity:0; transition:opacity 0.6s ease;
  mix-blend-mode: normal;
`;const ii=document.createElement("canvas");ii.style.cssText="position:absolute;inset:0;width:100%;height:100%;opacity:0.08;";Co.appendChild(ii);function cp(){ii.width=window.innerWidth,ii.height=window.innerHeight;const n=ii.getContext("2d");n.clearRect(0,0,ii.width,ii.height),n.fillStyle="rgba(0,0,0,0.55)";for(let t=0;t<ii.height;t+=3)n.fillRect(0,t,ii.width,1)}cp();window.addEventListener("resize",cp);document.body.appendChild(Co);const Bh=document.createElement("div");Bh.style.cssText=`
  position:fixed; inset:0; pointer-events:none; z-index:147;
  background:rgba(0,30,0,0.45);
  opacity:0; transition:opacity 0.6s ease;
`;document.body.appendChild(Bh);function hp(n,t,e="opacity 0.5s ease"){const i=document.createElement("div");i.style.cssText=`
    position:fixed; inset:0; pointer-events:none; z-index:${t};
    overflow:hidden;
    opacity:0; transition:${e};
  `;const s=document.createElement("div");return s.style.cssText=`
    position:absolute;
    width:100vmax; height:100vmax;
    top:50%; left:50%; transform:translate(-50%,-50%);
    background: ${n};
    pointer-events:none;
  `,i.appendChild(s),document.body.appendChild(i),i}const jy=hp(KM,149,"opacity 0.6s ease"),Pr=document.createElement("div");Pr.innerHTML="🟢 NIGHT VISION";Pr.style.cssText=`
  position:fixed; top:18px; right:20px;
  background:rgba(0,20,0,0.88); border:1px solid rgba(0,255,80,0.45);
  border-radius:8px; padding:5px 14px; color:#00ff55;
  font-family:Inter,sans-serif; font-size:11px; font-weight:700;
  letter-spacing:0.12em; z-index:300; pointer-events:none;
  opacity:0; transition:opacity 0.3s;
  text-shadow: 0 0 8px rgba(0,255,80,0.7);
`;document.body.appendChild(Pr);let ji=!1;const tr=new Map;function dp(n){ji=n,Co.style.opacity=n?"1":"0",Bh.style.opacity=n?"1":"0",up(jy,n?1:0),Pr.style.opacity=n?"1":"0",Ne.textContent=n?"🌑 Night Vision: ON":"🌑 Night Vision",Ne.style.background=n?"rgba(0,100,20,0.65)":"rgba(0,80,160,0.45)",Ne.style.borderColor=n?"rgba(0,255,80,0.7)":"rgba(0,140,255,0.45)",Ne.style.color=n?"#00ff55":"#88ccff",le.domElement.style.transition="filter 0.6s ease",le.domElement.style.filter=n?kM:"none",n?(_n._nvPrevIntensity=_n.intensity,_n.intensity=Math.max(_n.intensity,rf),It.traverse(t=>{t.isMesh&&t.material&&t.material.emissiveIntensity!==void 0&&(tr.has(t)||tr.set(t,t.material.emissiveIntensity),t.material.emissiveIntensity=(tr.get(t)||0)+GM)})):(_n._nvPrevIntensity!==void 0&&(_n.intensity=_n._nvPrevIntensity),tr.forEach((t,e)=>{e.material&&(e.material.emissiveIntensity=t)}),tr.clear())}const Ky=hp(jM,150,"opacity 0.5s ease"),Ro=document.createElement("div");Ro.textContent="⬛ ROV CAM";Ro.style.cssText=`
  position:fixed; top:18px; left:50%; transform:translateX(-50%);
  background:rgba(5,12,28,0.88); border:1px solid rgba(0,200,255,0.5);
  border-radius:8px; padding:5px 16px; color:#00ddff;
  font-family:Inter,sans-serif; font-size:11px; font-weight:700;
  letter-spacing:0.12em; z-index:300; pointer-events:none;
  opacity:0; transition:opacity 0.3s;
  text-shadow: 0 0 8px rgba(0,200,255,0.6);
`;document.body.appendChild(Ro);const Po=document.createElement("div");Po.textContent="W/S · ↑/↓  Ascend / Descend     A/D · ←/→  Strafe";Po.style.cssText=`
  position:fixed; top:52px; left:50%; transform:translateX(-50%);
  color:rgba(0,200,255,0.55); font-family:Inter,sans-serif;
  font-size:10px; letter-spacing:0.06em; z-index:300;
  pointer-events:none; opacity:0; transition:opacity 0.3s;
  text-shadow: 0 0 8px rgba(0,200,255,0.6);
`;document.body.appendChild(Po);function up(n,t){n.style.opacity=String(t)}function Zy(n){Ke=n,ar=n?fi:di,Ue.enabled=!n,Ue.autoRotate=!n,Eo.visible=!n,xh.visible=!n,Er.visible=!n,It.children.forEach(t=>{t.isLineSegments&&t.name&&t.name.startsWith("zoneedge_")&&(t.visible=!n)}),zt.traverse(t=>{(t.isMesh||t.isPoints||t.isLine||t.isSprite)&&(t.visible=!n)}),Cr.visible=!n,Us.yaw=0,Us.pitch=0,yn.rotation.set(0,0,0,"YXZ"),vo.forEach(t=>{t.visible=!n}),ks.visible=n,Gs.visible=n,n?le.domElement.style.cursor="grab":(To=!1,le.domElement.style.cursor="default"),en.textContent=n?"🌐 Orbit Cam":"📷 ROV Cam",en.style.background=n?"rgba(0,160,255,0.65)":"rgba(0,80,160,0.45)",en.style.borderColor=n?"rgba(0,220,255,0.8)":"rgba(0,140,255,0.45)",en.style.color=n?"#ffffff":"#88ccff",Ro.style.opacity=n?"1":"0",Po.style.opacity=n?"1":"0",up(Ky,n?1:0),Ao.innerHTML=n?"🖱️ <b>Drag</b> to look around &nbsp;|&nbsp; W/S Ascend/Descend &nbsp;|&nbsp; A/D Strafe &nbsp;|&nbsp; Double-click resets view":"🖱️ <b>Click a zone</b> to explore &nbsp;|&nbsp; Drag to orbit &nbsp;|&nbsp; Scroll to zoom",n?(Ne.style.display="inline-block",requestAnimationFrame(()=>{Ne.style.opacity="1"})):(Ne.style.opacity="0",setTimeout(()=>{Ne.style.display="none"},350)),Pr.style.opacity=n&&ji?"1":"0",Object.keys(pe).forEach(t=>{pe[t]=!1})}en.addEventListener("click",()=>{Zy(!Ke),!Ke&&ji&&dp(!1)});const Ne=document.createElement("button");Ne.textContent="🌑 Night Vision";Ne.style.cssText=`
  background:rgba(0,80,160,0.45); border:1px solid rgba(0,140,255,0.45);
  border-radius:14px; color:#88ccff; font-family:Inter,sans-serif;
  font-size:11px; font-weight:600; padding:4px 13px; cursor:pointer;
  transition:background 0.15s, color 0.15s, border-color 0.15s, opacity 0.35s;
  letter-spacing:0.04em; white-space:nowrap;
  display:none; opacity:0;
`;Ne.addEventListener("mouseenter",()=>{ji||(Ne.style.background="rgba(0,80,20,0.65)",Ne.style.color="#88ffaa")});Ne.addEventListener("mouseleave",()=>{ji||(Ne.style.background="rgba(0,80,160,0.45)",Ne.style.color="#88ccff")});Ne.addEventListener("click",()=>{Ke&&dp(!ji)});qi.appendChild(Ne);function $y(n){for(let t=de.length-1;t>=0;t--)if(n<=de[t].y+de[t].height/2)return t;return 0}const Dr=document.createElement("div");Dr.style.cssText=`
  position:fixed; left:18px; top:50%; transform:translateY(-50%);
  display:flex; flex-direction:column; align-items:center; gap:0;
  z-index:300; user-select:none;
`;document.body.appendChild(Dr);const fn=document.createElement("button");fn.innerHTML="▲";fn.title="Scroll up";fn.style.cssText=`
  background:rgba(5,12,28,0.82); border:1px solid rgba(0,140,255,0.3);
  border-radius:6px 6px 0 0; color:#88aacc; font-size:13px;
  width:32px; height:28px; cursor:pointer; padding:0;
  font-family:Inter,sans-serif; line-height:1;
  transition:background 0.15s ease, color 0.15s ease, box-shadow 0.15s ease;
`;fn.addEventListener("mouseenter",()=>{fn.style.background="rgba(0,80,160,0.7)",fn.style.color="#ffffff"});fn.addEventListener("mouseleave",()=>{fn.style.background="rgba(5,12,28,0.82)",fn.style.color="#88aacc"});Dr.appendChild(fn);const zh=document.createElement("div");zh.style.cssText=`
  width:32px; background:rgba(5,12,28,0.72);
  border-left:1px solid rgba(0,140,255,0.3);
  border-right:1px solid rgba(0,140,255,0.3);
  display:flex; flex-direction:column; align-items:center;
  padding:6px 0; gap:0; position:relative;
`;Dr.appendChild(zh);const Vh=[];de.forEach((n,t)=>{const e=document.createElement("button");e.title=n.name,e.style.cssText=`
    width:20px; height:20px; border-radius:50%;
    background:rgba(0,80,160,0.35);
    border:1.5px solid rgba(0,140,255,0.35);
    cursor:pointer; margin:5px 0; padding:0;
    transition:background 0.2s, border-color 0.2s, transform 0.2s;
    position:relative; z-index:1;
  `,e.addEventListener("mouseenter",()=>{Hn!==t&&(e.style.background="rgba(0,120,220,0.55)")}),e.addEventListener("mouseleave",()=>{Hn!==t&&(e.style.background="rgba(0,80,160,0.35)")}),e.addEventListener("click",()=>{Hn===t?Ih():mr(t)}),zh.appendChild(e),Vh.push(e)});const pn=document.createElement("button");pn.innerHTML="▼";pn.title="Scroll down";pn.style.cssText=`
  background:rgba(5,12,28,0.82); border:1px solid rgba(0,140,255,0.3);
  border-radius:0 0 6px 6px; color:#88aacc; font-size:13px;
  width:32px; height:28px; cursor:pointer; padding:0;
  font-family:Inter,sans-serif; line-height:1;
  transition:background 0.15s ease, color 0.15s ease, box-shadow 0.15s ease;
`;pn.addEventListener("mouseenter",()=>{pn.style.background="rgba(0,80,160,0.7)",pn.style.color="#ffffff"});pn.addEventListener("mouseleave",()=>{pn.style.background="rgba(5,12,28,0.82)",pn.style.color="#88aacc"});Dr.appendChild(pn);let vu=-1,Ma=null;function fp(){const n=$y(Cn);Ma===null&&(Ma=Cn);const t=Cn-Ma;Ma=Cn;const e=Math.abs(t)>1e-4?Math.sign(t):0;n!==vu&&(vu=n,Vh.forEach((o,l)=>{(Ke||Hn===null)&&(l===n?(o.style.background="rgba(0,200,255,0.85)",o.style.borderColor="rgba(0,240,255,0.9)",o.style.transform="scale(1.25)",o.classList.add("pip-active")):(o.style.background="rgba(0,80,160,0.35)",o.style.borderColor="rgba(0,140,255,0.35)",o.style.transform="scale(1)",o.classList.remove("pip-active")))}));const i="rgba(0,160,255,0.75)",s="#ffffff",r="rgba(5,12,28,0.82)",a="#88aacc";fn.style.background=e>0?i:r,fn.style.color=e>0?s:a,pn.style.background=e<0?i:r,pn.style.color=e<0?s:a}fp();fn.addEventListener("click",()=>{const n=Hn??0,t=Math.max(0,n-1);mr(t!==n?t:0)});pn.addEventListener("click",()=>{const n=Hn??-1,t=Math.min(de.length-1,n+1);mr(t)});function pp(){Vh.forEach((n,t)=>{t===Hn?(n.style.background="rgba(0,160,255,0.85)",n.style.borderColor="rgba(0,200,255,0.9)",n.style.transform="scale(1.25)",n.classList.add("pip-active")):(n.style.background="rgba(0,80,160,0.35)",n.style.borderColor="rgba(0,140,255,0.35)",n.style.transform="scale(1)",n.classList.remove("pip-active"))})}const ws=new _0,gr=new dt;let Ac=new dt;le.domElement.addEventListener("mousedown",n=>{Ac.set(n.clientX,n.clientY)});le.domElement.addEventListener("click",n=>{var a,o;const t=n.clientX-Ac.x,e=n.clientY-Ac.y;if(Math.sqrt(t*t+e*e)>5)return;gr.set(n.clientX/window.innerWidth*2-1,-(n.clientY/window.innerHeight)*2+1),ws.setFromCamera(gr,ar);const s=ws.intersectObjects(It.children,!0).find(l=>{var c,u,m;return((u=(c=l.object.parent)==null?void 0:c.userData)==null?void 0:u.type)||((m=l.object.userData)==null?void 0:m.type)});if(s){const l=(o=(a=s.object.parent)==null?void 0:a.userData)!=null&&o.type?s.object.parent.userData:s.object.userData;if(l.type==="USER_NODE"||l.type==="SERVER_RACK"){Jy(l);return}}const r=ws.intersectObjects([...br,...eh],!1);if(r.length>0){const l=r[0].object.userData.zoneId;Hn===l?Ih():mr(l)}});function Jy(n){const t=document.getElementById("ui-overlay"),e=document.getElementById("layer-title"),i=document.getElementById("layer-desc"),s=document.getElementById("layer-level"),r=lu.pt[n.type]||lu.pt[n.nodeType]||{title:"Unknown Entity",attack:"Scanning...",defense:"Evaluating..."};e.textContent=r.title||n.label||"ENTITY_SCAN",s.textContent=n.type||"DIGITAL_TRACE",i.innerHTML=`
    <div style="margin-bottom: 15px; color: #ff0055; font-weight: bold;">[!] O ATAQUE:</div>
    <div style="margin-bottom: 20px;">${r.attack}</div>
    <div style="margin-bottom: 15px; color: #00ffa2; font-weight: bold;">[*] A DEFESA (SERAFIM):</div>
    <div>${r.defense}</div>
  `,t.classList.remove("hidden")}var Cu;(Cu=document.getElementById("close-btn"))==null||Cu.addEventListener("click",()=>{document.getElementById("ui-overlay").classList.add("hidden")});let Mu=0;le.domElement.addEventListener("mousemove",n=>{const t=performance.now();if(t-Mu<50)return;Mu=t,gr.set(n.clientX/window.innerWidth*2-1,-(n.clientY/window.innerHeight)*2+1),ws.setFromCamera(gr,di);const e=ws.intersectObjects([...br,...eh],!1);le.domElement.style.cursor=e.length>0?"pointer":"default"});const mp=new Map;function Qy(n,t){if(t<2)return;let e=null,i=new yt(65450);if(n.traverse(a=>{a.isMesh&&a.material&&!e&&(e=a.material,a.material.emissive&&a.material.emissive.isColor&&(i=a.material.emissive.clone()))}),!e)return;const s=e.emissive&&e.emissive.isColor?e.emissive.clone():new yt(0,0,0),r=new Sr(65450,0,2.2);r.name="flashLight_"+n.name,r.position.set(0,0,0),It.add(r),mp.set(n,{light:r,flashing:!1,timer:0,duration:.55+Math.random()*.35,cooldown:4+Math.random()*5,cooldownTimer:Math.random()*4,emissiveMat:e,baseEmissiveIntensity:e.emissiveIntensity||0,baseEmissive:s,flashColor:i})}ih.forEach(n=>{n.userData&&n.userData.zoneId>=2&&Qy(n,n.userData.zoneId)});const gp=[];[de[2],de[3]].forEach(n=>{for(let t=0;t<3;t++){const e=new Sr(65450,.8,2.5);e.name="bioLight_"+n.id+"_"+t,e.position.set((Math.random()-.5)*je*.7,n.y+(Math.random()-.5)*n.height*.7,(Math.random()-.5)*Ve*.7),It.add(e),gp.push({light:e,baseIntensity:.8,phase:Math.random()*Math.PI*2})}});const t1=de.map((n,t)=>{const e=[.55,.38,.22,.12],i=[7.5,6.5,5.5,4.5],s=new Sr(n.lightColor,e[t],i[t]);return s.name="zoneBounce_"+t,s.position.set(0,n.y+n.height*.42,0),It.add(s),{light:s,base:e[t],phase:t*Math.PI*.5}}),kh=256,Do=document.createElement("canvas");Do.width=kh;Do.height=kh;const e1=Do.getContext("2d"),Ir=new Yn(Do);Ir.wrapS=Rs;Ir.wrapT=Rs;Ir.repeat.set(1.5,1.5);const n1=new rn(je,Ve),_p=new sn({map:Ir,transparent:!0,opacity:.02,blending:ci,depthWrite:!1,side:Wn}),Io=new $(n1,_p);Io.name="causticMesh";Io.rotation.x=-Math.PI/2;Io.position.set(0,de[0].y-de[0].height/2+.05,0);It.add(Io);const gs=7,xp=[];for(let n=0;n<gs;n++)for(let t=0;t<gs;t++)xp.push({bx:(t+.5)/gs,by:(n+.5)/gs,px:(Math.random()-.5)*.7/gs,py:(Math.random()-.5)*.7/gs,phx:Math.random()*Math.PI*2,phy:Math.random()*Math.PI*2,spx:.18+Math.random()*.14,spy:.13+Math.random()*.14});function i1(n){const t=e1,e=kh,i=t.createImageData(e,e),s=i.data,r=xp.map(o=>({x:o.bx+o.px*Math.sin(n*o.spx+o.phx),y:o.by+o.py*Math.cos(n*o.spy+o.phy)})),a=1/e;for(let o=0;o<e;o++)for(let l=0;l<e;l++){const c=l*a,u=o*a;let m=1e9,h=1e9;for(let b=0;b<r.length;b++){let M=c-r[b].x,w=u-r[b].y;M>.5?M-=1:M<-.5&&(M+=1),w>.5?w-=1:w<-.5&&(w+=1);const T=M*M+w*w;T<m?(h=m,m=T):T<h&&(h=T)}const p=Math.sqrt(h)-Math.sqrt(m),_=Math.exp(-p*p*520),S=Math.exp(-p*p*60)*.28,f=Math.min(1,_+S),d=.06*Math.sin(m*900+n*.4),g=(o*e+l)*4;s[g]=Math.round(Math.min(255,f*(190+d*80))),s[g+1]=Math.round(f*230),s[g+2]=Math.round(f*255),s[g+3]=Math.round(f*255)}t.putImageData(i,0,0),Ir.needsUpdate=!0}const vp=de[0].height;de[0].y+vp/2;const yu=je/2,Su=Ve/2,wl=8,bu=.86,Eu=new yt(.72,.88,.96),Lo=document.createElement("canvas");Lo.width=64;Lo.height=256;const Al=Lo.getContext("2d");for(let n=0;n<64;n++){const t=(n-31.5)/31.5,e=Math.exp(-t*t*2),i=Al.createLinearGradient(0,0,0,256),s=(.35*e).toFixed(3),r=(.22*e).toFixed(3),a=(.08*e).toFixed(3),o=(.015*e).toFixed(3);i.addColorStop(0,`rgba(220,240,255,${s})`),i.addColorStop(.2,`rgba(190,225,250,${r})`),i.addColorStop(.5,`rgba(140,195,240,${a})`),i.addColorStop(.8,`rgba(90,150,210,${o})`),i.addColorStop(1,"rgba(60,120,190,0.0)"),Al.fillStyle=i,Al.fillRect(n,0,1,256)}const s1=new Yn(Lo),Uo=document.createElement("canvas");Uo.width=128;Uo.height=256;const Cl=Uo.getContext("2d");for(let n=0;n<128;n++){const t=(n-63.5)/63.5,e=Math.exp(-t*t*.7),i=Cl.createLinearGradient(0,0,0,256),s=(.38*e).toFixed(3),r=(.25*e).toFixed(3),a=(.12*e).toFixed(3),o=(.04*e).toFixed(3);i.addColorStop(0,`rgba(210,235,255,${s})`),i.addColorStop(.25,`rgba(170,215,248,${r})`),i.addColorStop(.55,`rgba(120,180,235,${a})`),i.addColorStop(.8,`rgba(70,140,210,${o})`),i.addColorStop(1,"rgba(50,110,190,0.0)"),Cl.fillStyle=i,Cl.fillRect(n,0,1,256)}const r1=new Yn(Uo),Mp=[],yp=[],a1=[{axis:"z",pos:Su-.04,ry:0,span:je,label:"front"},{axis:"z",pos:-Su+.04,ry:Math.PI,span:je,label:"back"},{axis:"x",pos:-yu+.04,ry:Math.PI/2,span:Ve,label:"left"},{axis:"x",pos:yu-.04,ry:-Math.PI/2,span:Ve,label:"right"}],Tu=vp-.3,ya=de[0].y+.15;a1.forEach(n=>{for(let t=0;t<wl;t++){const e=.8+Math.random()*.7,i=1.2+Math.random()*.6,s=(t+.5)/wl,r=(Math.random()-.5)*.6/wl,a=Math.max(.02,Math.min(.98,s+r)),o=-n.span/2+a*n.span,l=Math.abs(o)/(n.span*.5),c=bu*i,u=bu*i*2.5,m=Ei.lerp(1,.72,Math.pow(l,1.35)),h=Ei.lerp(1,.22,Math.pow(l,1.9)),p=c*m,_=u*h,S=Ei.lerp(1,.55,Math.pow(l,1.6)),f=Ei.lerp(1,.18,Math.pow(l,2)),d=s1.clone();d.needsUpdate=!0;const g=new rn(p,Tu),b=new sn({map:d,color:Eu,transparent:!0,opacity:.25*e*S,blending:ci,depthWrite:!1,side:Se}),M=new $(g,b);M.name="vline_"+n.label+"_"+t,n.axis==="z"?M.position.set(o,ya,n.pos):M.position.set(n.pos,ya,o),M.rotation.y=n.ry,M.userData.baseOpacity=.25*e*S,M.userData.idx=t,M.userData.phaseOffset=Math.random()*Math.PI*2,It.add(M),Mp.push(M);const w=r1.clone();w.needsUpdate=!0;const T=new rn(_,Tu),C=new sn({map:w,color:Eu,transparent:!0,opacity:.22*e*f,blending:ci,depthWrite:!1,side:Se}),x=new $(T,C);x.name="vline_glow_"+n.label+"_"+t,n.axis==="z"?x.position.set(o,ya,n.pos):x.position.set(n.pos,ya,o),x.rotation.y=n.ry,x.renderOrder=M.renderOrder-1,x.userData.baseOpacity=.22*e*f,x.userData.phaseOffset=M.userData.phaseOffset,It.add(x),yp.push(x)}});window._scanLineMeshes=Mp;window._glowLineMeshes=yp;const Gh=-ui-.42,Sp=new rn(120,120);Sp.rotateX(-Math.PI/2);const o1=new ht({color:857640,roughness:.95,metalness:0,emissive:330264,emissiveIntensity:.15}),No=new $(Sp,o1);No.name="groundPlane";No.position.set(0,Gh,0);No.receiveShadow=!0;It.add(No);const bp=256,Ya=document.createElement("canvas");Ya.width=Ya.height=bp;const l1=Ya.getContext("2d"),Xi=new Yn(Ya);Xi.wrapS=Xi.wrapT=Rs;Xi.repeat.set(1.8,1.8);const c1=new sn({map:Xi,transparent:!0,opacity:.04,blending:ci,depthWrite:!1}),Fo=new $(new rn(120,120),c1);Fo.name="groundCaustic";Fo.rotation.x=-Math.PI/2;Fo.position.set(0,Gh+.01,0);It.add(Fo);const qa=document.createElement("canvas");qa.width=qa.height=512;const Hh=qa.getContext("2d"),Lr=Hh.createRadialGradient(256,256,30,256,256,256);Lr.addColorStop(0,"rgba(0,0,0,0.72)");Lr.addColorStop(.28,"rgba(0,0,0,0.45)");Lr.addColorStop(.55,"rgba(0,0,0,0.18)");Lr.addColorStop(1,"rgba(0,0,0,0.0)");Hh.fillStyle=Lr;Hh.fillRect(0,0,512,512);const h1=new Yn(qa),d1=new sn({map:h1,transparent:!0,opacity:1,blending:Gi,depthWrite:!1}),Oo=new $(new rn(40,40),d1);Oo.name="groundVignette";Oo.rotation.x=-Math.PI/2;Oo.position.set(0,Gh+.02,0);It.add(Oo);const _s=5,Ep=[];for(let n=0;n<_s;n++)for(let t=0;t<_s;t++)Ep.push({bx:(t+.5)/_s,by:(n+.5)/_s,px:(Math.random()-.5)*.65/_s,py:(Math.random()-.5)*.65/_s,phx:Math.random()*Math.PI*2,phy:Math.random()*Math.PI*2,spx:.08+Math.random()*.07,spy:.07+Math.random()*.07});function u1(n){const t=l1,e=bp,i=t.createImageData(e,e),s=i.data,r=1/e,a=Ep.map(o=>({x:o.bx+o.px*Math.sin(n*o.spx+o.phx),y:o.by+o.py*Math.cos(n*o.spy+o.phy)}));for(let o=0;o<e;o++)for(let l=0;l<e;l++){const c=l*r,u=o*r;let m=1e9,h=1e9;for(let C=0;C<a.length;C++){let x=c-a[C].x,y=u-a[C].y;x>.5?x-=1:x<-.5&&(x+=1),y>.5?y-=1:y<-.5&&(y+=1);const P=x*x+y*y;P<m?(h=m,m=P):P<h&&(h=P)}const p=Math.sqrt(h)-Math.sqrt(m),_=Math.exp(-p*p*280),S=Math.exp(-p*p*30)*.22,f=Math.min(1,_+S),d=c-.5,g=u-.5,b=Math.sqrt(d*d+g*g),M=Math.max(0,1-b/.48*(b/.48)),w=f*M,T=(o*e+l)*4;s[T]=Math.round(w*22),s[T+1]=Math.round(w*58),s[T+2]=Math.round(w*110),s[T+3]=Math.round(w*255)}t.putImageData(i,0,0),Xi.needsUpdate=!0}const f1=new Je(je,.4,Ve),p1=new ht({color:987168,roughness:.95}),Bo=new $(f1,p1);Bo.name="oceanFloor";Bo.position.set(0,-ui-.2,0);Bo.receiveShadow=!0;It.add(Bo);for(let n=0;n<12;n++){const t=.15+Math.random()*.35,e=new $(new so(t,0),new ht({color:2234900,roughness:1}));e.name="rock_"+n,e.position.set((Math.random()-.5)*(je-1),-ui+.05,(Math.random()-.5)*(Ve-1)),e.rotation.set(Math.random(),Math.random(),Math.random()),It.add(e)}const si=-ui,m1=[{x:-3.2,z:-2.5},{x:2.8,z:1.8},{x:-1,z:3.2},{x:3.8,z:-3.5}],Tp=[],zi=55;m1.forEach((n,t)=>{const e=new ht({color:2759178,roughness:1}),i=new Fe(.22,.32,.55,9),s=new $(i,e);s.name="ventBase_"+t,s.position.set(n.x,si+.27,n.z),It.add(s);const r=new Fe(.14,.2,.9,9),a=new $(r,e);a.name="ventShaft_"+t,a.position.set(n.x,si+.95,n.z),It.add(a);const o=new yr(.16,.045,8,20),l=new ht({color:16733440,emissive:16729088,emissiveIntensity:3.5,roughness:.3}),c=new $(o,l);c.name="ventRim_"+t,c.rotation.x=Math.PI/2,c.position.set(n.x,si+1.42,n.z),It.add(c);for(let g=0;g<6;g++){const b=g/6*Math.PI*2+Math.random()*.4,M=.3+Math.random()*.25,w=new so(.08+Math.random()*.1,0),T=new ht({color:3811866,roughness:1}),C=new $(w,T);C.name="ventLump_"+t+"_"+g,C.position.set(n.x+Math.cos(b)*M,si+.08,n.z+Math.sin(b)*M),C.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),It.add(C)}const u=new Sr(16737792,2.8,4.5);u.name="ventLight_"+t,u.position.set(n.x,si+1.5,n.z),It.add(u);const m=new Nt,h=new Float32Array(zi*3),p=new Float32Array(zi*3),_=new Float32Array(zi),S=new Float32Array(zi);for(let g=0;g<zi;g++){_[g]=Math.random(),S[g]=.6+Math.random()*.8;const b=.08;p[g*3]=(Math.random()-.5)*b,p[g*3+1]=.007+Math.random()*.009,p[g*3+2]=(Math.random()-.5)*b,h[g*3]=n.x+(Math.random()-.5)*.12,h[g*3+1]=si+1.4+_[g]*S[g]*2.2,h[g*3+2]=n.z+(Math.random()-.5)*.12}m.setAttribute("position",new Jt(h,3));const f=new Mr({color:11162880,size:.08,transparent:!0,opacity:.35,sizeAttenuation:!0}),d=new no(m,f);d.name="ventPlume_"+t,d.frustumCulled=!1,It.add(d),Tp.push({mesh:d,geo:m,pos:h,vel:p,age:_,life:S,ox:n.x,oz:n.z,light:u,phase:Math.random()*Math.PI*2})});const g1=[{x:-3.5,z:-2.1},{x:-3,z:-2.9},{x:-2.7,z:-2.4},{x:2.5,z:2.1},{x:3.1,z:1.5},{x:2.9,z:2.4},{x:-1.3,z:3},{x:-.7,z:2.9},{x:4.1,z:-3.2},{x:3.6,z:-3.8}];g1.forEach((n,t)=>{const e=.35+Math.random()*.45,i=new Fe(.03,.04,e,6),s=new ht({color:2236962,roughness:.9}),r=new $(i,s);r.name="tubeWorm_"+t,r.position.set(n.x,si+e/2,n.z),r.rotation.z=(Math.random()-.5)*.25,It.add(r);const a=[16720418,16729156,16755370,15610675],o=new ht({color:a[t%a.length],emissive:a[t%a.length],emissiveIntensity:1.8}),l=new $(new be(.055,7,7),o);l.name="tubeWormTip_"+t,l.position.set(n.x,si+e+.04,n.z),It.add(l)});const xs={causticDepthFade:1,torchBlend:0,torchActive:!1},wu=new x0;let Fn=0;const Au=new I,Sa=new I;function _1(n){Tp.forEach(t=>{const e=t.pos,i=t.vel;for(let s=0;s<zi;s++){if(t.age[s]+=.008,t.age[s]>t.life[s]){t.age[s]=0,t.life[s]=.6+Math.random()*.8,e[s*3]=t.ox+(Math.random()-.5)*.12,e[s*3+1]=si+1.42,e[s*3+2]=t.oz+(Math.random()-.5)*.12;const u=.07;i[s*3]=(Math.random()-.5)*u,i[s*3+1]=.007+Math.random()*.009,i[s*3+2]=(Math.random()-.5)*u;continue}const r=t.age[s]/t.life[s];e[s*3]+=i[s*3]*(1+r*.8),e[s*3+1]+=i[s*3+1],e[s*3+2]+=i[s*3+2]*(1+r*.8);const a=de[3].y+de[3].height/2;e[s*3+1]>a&&(e[s*3+1]=a);const o=.0015,l=e[s*3]-t.ox,c=e[s*3+2]-t.oz;e[s*3]+=-c*o,e[s*3+2]+=l*o}t.geo.attributes.position.needsUpdate=!0,t.age.reduce((s,r)=>s+r,0)/zi/.7,t.mesh.material.opacity=.22+.1*Math.sin(n*1.8+t.phase),t.light.intensity=2.2+1.2*Math.sin(n*3.1+t.phase)})}function x1(){const n=wu.getElapsedTime();wu.getDelta;const t=Fn%2===0,e=de[2].y+de[2].height/2,s=Cn<e?Math.min(1,(e-Cn)/(de[2].height*.6)):0;Be+=(s-Be)*.035,va=Be>.01,xs.torchBlend=Be,xs.torchActive=va,xs.causticDepthFade=Math.max(0,1-Math.abs(Cn/de[0].height));const r=fr.attributes.position;for(let d=0;d<bc.length;d++){const g=bc[d],b=Math.sin(g.ox*1.2+n*1.5+g.phase)*.07+Math.sin(g.oz*.9+n*1.1+g.phase*.7)*.05+Math.sin((g.ox+g.oz)*.7+n*2)*.03;r.setY(d,b)}r.needsUpdate=!0,Fn%8===0&&fr.computeVertexNormals(),Yt.position.y=Math.sin(n*1.2)*.06+Math.sin(n*.7)*.03,Yt.rotation.z=Math.sin(n*.9)*.015,Yt.rotation.x=Math.sin(n*.6)*.01;const a=lf;a&&(a.userData.baseY===void 0&&(a.userData.baseY=a.position.y),a.position.y=a.userData.baseY+Math.sin(n*.3)*.25+Math.sin(n*.17)*.1,a.rotation.y=Math.sin(n*.15)*.015),Hy();const o=pr-ri;if(Qs=Math.abs(o)>.02,Math.abs(o)>.001){const d=Math.min(1,Math.abs(o)/ui),g=xu+(Xy-xu)*d;ri+=Math.sign(o)*Math.min(Math.abs(o),g)}else ri=pr;Cn+=(ri-Cn)*.055,zt.position.y=Cn,Ke?(zt.rotation.z=0,zt.rotation.x=0):(zt.rotation.z=(ri-Cn)*.15,zt.rotation.x=Math.sin(n*1.3)*.03),zt.position.x=1.3+Math.sin(n*.7)*.08,yn.rotation.set(0,Us.yaw,0,"YXZ");const l=Qs?18:5;if(fu&&(fu.rotation.y=n*l),pu&&(pu.rotation.y=-n*l),mu){const d=Math.sin(n*3.5)>.6?1:0;mu.material.emissiveIntensity=d*4}if(gu&&(gu.rotation.y=n*(Qs?8:2.5)),Qs){for(let d=0;d<Wi;d++)if(ir[d]>=La[d]){ir[d]=0,La[d]=.35+Math.random()*.45,Ni[d*3]=zt.position.x+.28+(Math.random()-.5)*.12,Ni[d*3+1]=zt.position.y+(Math.random()-.5)*.1,Ni[d*3+2]=zt.position.z+(Math.random()-.5)*.18,ms[d*3]=.005+Math.random()*.008,ms[d*3+1]=(Math.random()-.3)*.006,ms[d*3+2]=(Math.random()-.5)*.006;break}}let c=0;for(let d=0;d<Wi;d++)ir[d]<La[d]&&(ir[d]+=.016,Ni[d*3]+=ms[d*3],Ni[d*3+1]+=ms[d*3+1],Ni[d*3+2]+=ms[d*3+2],c++);Ph.attributes.position.needsUpdate=!0;const u=Qs&&c>0?.45:0;wc.opacity+=(u-wc.opacity)*.12,_n.intensity=cu-(cu-HM)*Be,an.intensity=3.2*(1-Be*.92),co.intensity=.45*(1-Be*.88),ho.intensity=.28*(1-Be*.8),th.intensity=.55*(1-Be*.85),ji&&(_n.intensity=Math.max(_n.intensity,rf)),rr.intensity=Ei.lerp(WM,XM,Be)*(1+.12*Math.sin(n*7.3)),rr.distance=Ei.lerp(YM,qM,Be),rr.color.setHSL(.58,.6,Ei.lerp(.7,.9,Be));const m=1+.06*Math.sin(n*9.1+.5);if(vo.forEach(d=>{d.material.opacity=d._baseAlpha*Be*m}),Oy.opacity=Be*(.55+.08*Math.sin(n*7.7))*m,By.opacity=Be*(.18+.05*Math.sin(n*5.3))*m,op.opacity=Be*(.55+.12*Math.sin(n*11.3))*m,ap.opacity=Be*.72*m,va){for(let d=0;d<Rr;d++){Bn[d*3]+=Ts[d*3],Bn[d*3+1]+=Ts[d*3+1]+Math.sin(n*.6+Tc[d])*3e-4,Bn[d*3+2]+=Ts[d*3+2]+Math.cos(n*.5+Tc[d])*3e-4;const g=Bn[d*3],b=Bn[d*3+1],M=Bn[d*3+2],w=-(g+.32),T=w/Ha*1.1,C=b*b+M*M;(w<0||w>Ha||C>T*T*1.1)&&rp(d)}Ch.attributes.position.needsUpdate=!0}Gy();const h=ar.position.y,p=8;gp.forEach(d=>{Math.abs(d.light.position.y-h)>p||(d.light.intensity=d.baseIntensity*(.7+.6*Math.sin(n*2.5+d.phase)))}),t1.forEach(d=>{d.light.intensity=d.base*(.88+.12*Math.sin(n*.4+d.phase))}),zt.getWorldPosition(Au);const _=1.8,S=Fn%3===0;if(t&&mp.forEach((d,g)=>{if(g.getWorldPosition(Sa),Math.abs(Sa.y-h)>p){d.light.intensity=0;return}if(d.light.position.copy(Sa),d.flashing){d.timer+=.016;const b=d.timer/d.duration,M=b<.18?b/.18:Math.pow(1-(b-.18)/.82,1.8),w=Math.max(0,M)*(3.5+1.2*Math.sin(n*22));d.light.intensity=w,d.emissiveMat.emissiveIntensity=d.baseEmissiveIntensity+Math.max(0,M)*4.5,d.emissiveMat.emissive&&d.emissiveMat.emissive.lerpColors(d.baseEmissive,d.flashColor,Math.max(0,M)*.8),d.timer>=d.duration&&(d.flashing=!1,d.timer=0,d.cooldownTimer=d.cooldown,d.light.intensity=0,d.emissiveMat.emissiveIntensity=d.baseEmissiveIntensity,d.emissiveMat.emissive&&d.emissiveMat.emissive.copy(d.baseEmissive))}else if(d.cooldownTimer-=.016,S&&va&&d.cooldownTimer<=0&&Au.distanceTo(Sa)<_){d.flashing=!0,d.timer=0,d.duration=.45+Math.random()*.4;const M=Math.random();d.flashColor.setHSL(M,1,.65),d.light.color.copy(d.flashColor)}}),t&&ih.forEach(d=>{const g=d.userData;if(!(!g||g.zoneId===void 0)&&!(Math.abs(d.position.y-h)>p)){if(d.position.y=g.baseY+Math.sin(n*g.floatSpeed+g.floatOffset)*g.floatAmp,d.position.x+=g.driftDir,Math.abs(d.position.x)>je/2-.8&&(g.driftDir*=-1),d.rotation.y+=g.rotSpeed,g.isFish&&(d.rotation.z=Math.sin(n*2.2+g.wobblePhase)*.08),g.isManta&&g.wingLeft&&g.wingRight){const b=Math.sin(n*1.2+g.wobblePhase)*.18;g.wingLeft.rotation.x=b,g.wingRight.rotation.x=-b}if(g.isJelly&&g.bellMesh){const b=Math.sin(n*1.8+g.wobblePhase),M=b>0?b*b:b*.3,w=1+M*.12,T=1-M*.1;if(d.scale.set(w,T,w),g.jellyMats){const C=[.45,.2,.55,.5],x=.3+.2*Math.sin(n*1.8+g.wobblePhase);g.jellyMats.forEach((y,P)=>{y.emissiveIntensity=C[P]*x/.3})}}if(g.isSquid){const b=.28+.22*Math.sin(n*1.4+g.wobblePhase);if(g.squidMats){const w=[.3,.15,.35,.55];g.squidMats.forEach((T,C)=>{T.emissiveIntensity=w[C]*(b/.28)})}if(g.photoMat){const w=2.8+1.8*Math.sin(n*3.2+g.wobblePhase)+.9*Math.sin(n*7.5+g.wobblePhase*1.7);g.photoMat.emissiveIntensity=Math.max(.8,w)}g.eyeIrisMat&&(g.eyeIrisMat.emissiveIntensity=1.2+1*Math.sin(n*1.4+g.wobblePhase+.6));const M=1+.04*Math.sin(n*1.4+g.wobblePhase);d.scale.set(M,1,M)}}}),Fn%4===0){const d=xs.causticDepthFade;window._scanLineMeshes&&window._scanLineMeshes.forEach(g=>{const b=g.userData.phaseOffset||0,M=.9+.1*Math.sin(n*.18+b);g.material.opacity=g.userData.baseOpacity*d*M,g.scale.x=1+.08*Math.sin(n*.12+b)}),window._glowLineMeshes&&window._glowLineMeshes.forEach(g=>{const b=g.userData.phaseOffset||0,M=.75+.25*Math.sin(n*.18+b);g.material.opacity=g.userData.baseOpacity*d*M,g.scale.x=1+.15*Math.sin(n*.12+b)})}const f=(1-xs.torchBlend)*xs.causticDepthFade;if(_p.opacity=.07*f,f>.005&&Fn%3===0&&i1(n),Fn%3===0&&u1(n),Xi.offset.x+=15e-5,Xi.offset.y-=1e-4,Fn%2===0&&_1(n),Fn%2===0){const d=Ga.geometry.attributes.position.array;for(let g=0;g<Tr;g++)d[g*3+1]-=hf[g]*.4,d[g*3]+=Math.sin(n*.3+g)*.003,d[g*3+1]<-ui&&(d[g*3+1]=0,d[g*3]=(Math.random()-.5)*je,d[g*3+2]=(Math.random()-.5)*Ve);Ga.geometry.attributes.position.needsUpdate=!0}fp(),Fn%5===0&&ws.setFromCamera(gr,ar),Ke||(Ue.target.y+=(lp-Ue.target.y)*.06),Ue.update(),af.camera=ar,Os.render(),Sc&&Sc.update(),Fn++}const ja=document.getElementById("parallax-title");ja&&ja.querySelector(".title-main");ja&&ja.querySelector(".title-sub");window.addEventListener("mousemove",n=>{(n.clientX/window.innerWidth-.5)*2,(n.clientY/window.innerHeight-.5)*2});le.setAnimationLoop(x1);window.addEventListener("resize",()=>{di.aspect=window.innerWidth/window.innerHeight,di.updateProjectionMatrix(),fi.aspect=window.innerWidth/window.innerHeight,fi.updateProjectionMatrix(),le.setSize(window.innerWidth,window.innerHeight),Os.setSize(window.innerWidth,window.innerHeight),of.resolution.set(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2))});
