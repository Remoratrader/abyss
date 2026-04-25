(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yc="183",vs={ROTATE:0,DOLLY:1,PAN:2},_s={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ap=0,Zh=1,Cp=2,_a=1,bd=2,$s=3,Gn=0,Ye=1,ye=2,Bn=0,Vi=1,oi=2,Kh=3,$h=4,Rp=5,Ui=100,Pp=101,Dp=102,Lp=103,Ip=104,Up=200,Np=201,Fp=202,Op=203,bl=204,El=205,Bp=206,zp=207,Vp=208,Gp=209,kp=210,Hp=211,Wp=212,Xp=213,Yp=214,Tl=0,wl=1,Al=2,bs=3,Cl=4,Rl=5,Pl=6,Dl=7,bc=0,qp=1,jp=2,zn=0,Ec=1,Tc=2,wc=3,Xa=4,Ac=5,Cc=6,Rc=7,Ed=300,Gi=301,Es=302,Fo=303,Oo=304,Ya=306,Ts=1e3,si=1001,Ll=1002,ze=1003,Zp=1004,Pr=1005,We=1006,Bo=1007,Bi=1008,ln=1009,Td=1010,wd=1011,ir=1012,Pc=1013,kn=1014,Fn=1015,hn=1016,Dc=1017,Lc=1018,sr=1020,Ad=35902,Cd=35899,Rd=1021,Pd=1022,An=1023,li=1026,zi=1027,Dd=1028,Ic=1029,ws=1030,Uc=1031,Nc=1033,xa=33776,va=33777,Ma=33778,Sa=33779,Il=35840,Ul=35841,Nl=35842,Fl=35843,Ol=36196,Bl=37492,zl=37496,Vl=37488,Gl=37489,kl=37490,Hl=37491,Wl=37808,Xl=37809,Yl=37810,ql=37811,jl=37812,Zl=37813,Kl=37814,$l=37815,Jl=37816,Ql=37817,tc=37818,ec=37819,nc=37820,ic=37821,sc=36492,rc=36494,ac=36495,oc=36283,lc=36284,cc=36285,hc=36286,Kp=3200,Fc=0,$p=1,Si="",gn="srgb",As="srgb-linear",Ca="linear",te="srgb",Zi=7680,Jh=519,Jp=512,Qp=513,t0=514,Oc=515,e0=516,n0=517,Bc=518,i0=519,uc=35044,Qh="300 es",On=2e3,rr=2001;function s0(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ra(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function r0(){const n=Ra("canvas");return n.style.display="block",n}const tu={};function Pa(...n){const t="THREE."+n.shift();console.log(t,...n)}function Ld(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Pt(...n){n=Ld(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function qt(...n){n=Ld(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Da(...n){const t=n.join(" ");t in tu||(tu[t]=!0,Pt(...n))}function a0(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const o0={[Tl]:wl,[Al]:Pl,[Cl]:Dl,[bs]:Rl,[wl]:Tl,[Pl]:Al,[Dl]:Cl,[Rl]:bs};class Wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let eu=1234567;const Ms=Math.PI/180,ar=180/Math.PI;function ri(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]).toLowerCase()}function Xt(n,t,e){return Math.max(t,Math.min(e,n))}function zc(n,t){return(n%t+t)%t}function l0(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function c0(n,t,e){return n!==t?(e-n)/(t-n):0}function tr(n,t,e){return(1-e)*n+e*t}function h0(n,t,e,i){return tr(n,t,1-Math.exp(-e*i))}function u0(n,t=1){return t-Math.abs(zc(n,t*2)-t)}function d0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function f0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function p0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function m0(n,t){return n+Math.random()*(t-n)}function g0(n){return n*(.5-Math.random())}function _0(n){n!==void 0&&(eu=n);let t=eu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function x0(n){return n*Ms}function v0(n){return n*ar}function M0(n){return(n&n-1)===0&&n!==0}function S0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function y0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function b0(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),f=a((t+i)/2),m=r((t-i)/2),u=a((t-i)/2),p=r((i-t)/2),_=a((i-t)/2);switch(s){case"XYX":n.set(o*f,l*m,l*u,o*c);break;case"YZY":n.set(l*u,o*f,l*m,o*c);break;case"ZXZ":n.set(l*m,l*u,o*f,o*c);break;case"XZX":n.set(o*f,l*_,l*p,o*c);break;case"YXY":n.set(l*p,o*f,l*_,o*c);break;case"ZYZ":n.set(l*_,l*p,o*f,o*c);break;default:Pt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ie(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const yi={DEG2RAD:Ms,RAD2DEG:ar,generateUUID:ri,clamp:Xt,euclideanModulo:zc,mapLinear:l0,inverseLerp:c0,lerp:tr,damp:h0,pingpong:u0,smoothstep:d0,smootherstep:f0,randInt:p0,randFloat:m0,randFloatSpread:g0,seededRandom:_0,degToRad:x0,radToDeg:v0,isPowerOfTwo:M0,ceilPowerOfTwo:S0,floorPowerOfTwo:y0,setQuaternionFromProperEuler:b0,normalize:ie,denormalize:wn};class ft{constructor(t=0,e=0){ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Xt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ei{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],f=i[s+2],m=i[s+3],u=r[a+0],p=r[a+1],_=r[a+2],y=r[a+3];if(m!==y||l!==u||c!==p||f!==_){let d=l*u+c*p+f*_+m*y;d<0&&(u=-u,p=-p,_=-_,y=-y,d=-d);let h=1-o;if(d<.9995){const g=Math.acos(d),b=Math.sin(g);h=Math.sin(h*g)/b,o=Math.sin(o*g)/b,l=l*h+u*o,c=c*h+p*o,f=f*h+_*o,m=m*h+y*o}else{l=l*h+u*o,c=c*h+p*o,f=f*h+_*o,m=m*h+y*o;const g=1/Math.sqrt(l*l+c*c+f*f+m*m);l*=g,c*=g,f*=g,m*=g}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=m}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],f=i[s+3],m=r[a],u=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+f*m+l*p-c*u,t[e+1]=l*_+f*u+c*m-o*p,t[e+2]=c*_+f*p+o*u-l*m,t[e+3]=f*_-o*m-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(s/2),m=o(r/2),u=l(i/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=u*f*m+c*p*_,this._y=c*p*m-u*f*_,this._z=c*f*_+u*p*m,this._w=c*f*m-u*p*_;break;case"YXZ":this._x=u*f*m+c*p*_,this._y=c*p*m-u*f*_,this._z=c*f*_-u*p*m,this._w=c*f*m+u*p*_;break;case"ZXY":this._x=u*f*m-c*p*_,this._y=c*p*m+u*f*_,this._z=c*f*_+u*p*m,this._w=c*f*m-u*p*_;break;case"ZYX":this._x=u*f*m-c*p*_,this._y=c*p*m+u*f*_,this._z=c*f*_-u*p*m,this._w=c*f*m+u*p*_;break;case"YZX":this._x=u*f*m+c*p*_,this._y=c*p*m+u*f*_,this._z=c*f*_-u*p*m,this._w=c*f*m-u*p*_;break;case"XZY":this._x=u*f*m-c*p*_,this._y=c*p*m-u*f*_,this._z=c*f*_+u*p*m,this._w=c*f*m+u*p*_;break;default:Pt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],f=e[6],m=e[10],u=i+o+m;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(f-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>m){const p=2*Math.sqrt(1+i-o-m);this._w=(f-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>m){const p=2*Math.sqrt(1+o-i-m);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+m-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,f=e._w;return this._x=i*f+a*o+s*c-r*l,this._y=s*f+a*l+r*o-i*c,this._z=r*f+a*c+i*l-s*o,this._w=a*f-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,e=Math.sin(e*c)/f,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,i=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),f=2*(o*e-r*s),m=2*(r*i-a*e);return this.x=e+l*c+a*m-o*f,this.y=i+l*f+o*c-r*m,this.z=s+l*m+r*f-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return zo.copy(this).projectOnVector(t),this.sub(zo)}reflect(t){return this.sub(zo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Xt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zo=new L,nu=new Ei;class Ot{constructor(t,e,i,s,r,a,o,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=e,f[4]=r,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],m=i[7],u=i[2],p=i[5],_=i[8],y=s[0],d=s[3],h=s[6],g=s[1],b=s[4],M=s[7],w=s[2],T=s[5],C=s[8];return r[0]=a*y+o*g+l*w,r[3]=a*d+o*b+l*T,r[6]=a*h+o*M+l*C,r[1]=c*y+f*g+m*w,r[4]=c*d+f*b+m*T,r[7]=c*h+f*M+m*C,r[2]=u*y+p*g+_*w,r[5]=u*d+p*b+_*T,r[8]=u*h+p*M+_*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return e*a*f-e*o*c-i*r*f+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8],m=f*a-o*c,u=o*l-f*r,p=c*r-a*l,_=e*m+i*u+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return t[0]=m*y,t[1]=(s*c-f*i)*y,t[2]=(o*i-s*a)*y,t[3]=u*y,t[4]=(f*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=p*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Vo.makeScale(t,e)),this}rotate(t){return this.premultiply(Vo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vo=new Ot,iu=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),su=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function E0(){const n={enabled:!0,workingColorSpace:As,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===te&&(s.r=ai(s.r),s.g=ai(s.g),s.b=ai(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(s.r=Ss(s.r),s.g=Ss(s.g),s.b=Ss(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Si?Ca:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Da("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Da("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[As]:{primaries:t,whitePoint:i,transfer:Ca,toXYZ:iu,fromXYZ:su,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:t,whitePoint:i,transfer:te,toXYZ:iu,fromXYZ:su,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),n}const jt=E0();function ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ss(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ki;class T0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ki===void 0&&(Ki=Ra("canvas")),Ki.width=t.width,Ki.height=t.height;const s=Ki.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ki}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ra("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ai(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ai(e[i]/255)*255):e[i]=ai(e[i]);return{data:e,width:t.width,height:t.height}}else return Pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let w0=0;class Vc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=ri(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Go(s[a].image)):r.push(Go(s[a]))}else r=Go(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Go(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?T0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Pt("Texture: Unable to serialize Texture."),{})}let A0=0;const ko=new L;class qe extends Wi{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,i=si,s=si,r=We,a=Bi,o=An,l=ln,c=qe.DEFAULT_ANISOTROPY,f=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=ri(),this.name="",this.source=new Vc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ko).x}get height(){return this.source.getSize(ko).y}get depth(){return this.source.getSize(ko).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Pt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Pt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ed)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ts:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case Ll:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ts:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case Ll:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Ed;qe.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,i=0,s=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],f=l[4],m=l[8],u=l[1],p=l[5],_=l[9],y=l[2],d=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(m-y)<.01&&Math.abs(_-d)<.01){if(Math.abs(f+u)<.1&&Math.abs(m+y)<.1&&Math.abs(_+d)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,M=(p+1)/2,w=(h+1)/2,T=(f+u)/4,C=(m+y)/4,x=(_+d)/4;return b>M&&b>w?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=T/i,r=C/i):M>w?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=x/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=C/r,s=x/r),this.set(i,s,r,e),this}let g=Math.sqrt((d-_)*(d-_)+(m-y)*(m-y)+(u-f)*(u-f));return Math.abs(g)<.001&&(g=1),this.x=(d-_)/g,this.y=(m-y)/g,this.z=(u-f)/g,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class C0 extends Wi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new qe(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:We,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Vc(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class en extends C0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Id extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class R0 extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class me{constructor(t,e,i,s,r,a,o,l,c,f,m,u,p,_,y,d){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,f,m,u,p,_,y,d)}set(t,e,i,s,r,a,o,l,c,f,m,u,p,_,y,d){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=f,h[10]=m,h[14]=u,h[3]=p,h[7]=_,h[11]=y,h[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,s=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),a=1/$i.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){const u=a*f,p=a*m,_=o*f,y=o*m;e[0]=l*f,e[4]=-l*m,e[8]=c,e[1]=p+_*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*f,p=l*m,_=c*f,y=c*m;e[0]=u+y*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*m,e[5]=a*f,e[9]=-o,e[2]=p*o-_,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*f,p=l*m,_=c*f,y=c*m;e[0]=u-y*o,e[4]=-a*m,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*f,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*f,p=a*m,_=o*f,y=o*m;e[0]=l*f,e[4]=_*c-p,e[8]=u*c+y,e[1]=l*m,e[5]=y*c+u,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,p=a*c,_=o*l,y=o*c;e[0]=l*f,e[4]=y-u*m,e[8]=_*m+p,e[1]=m,e[5]=a*f,e[9]=-o*f,e[2]=-c*f,e[6]=p*m+_,e[10]=u-y*m}else if(t.order==="XZY"){const u=a*l,p=a*c,_=o*l,y=o*c;e[0]=l*f,e[4]=-m,e[8]=c*f,e[1]=u*m+y,e[5]=a*f,e[9]=p*m-_,e[2]=_*m-p,e[6]=o*f,e[10]=y*m+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(P0,t,D0)}lookAt(t,e,i){const s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),pi.crossVectors(i,an),pi.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),pi.crossVectors(i,an)),pi.normalize(),Dr.crossVectors(an,pi),s[0]=pi.x,s[4]=Dr.x,s[8]=an.x,s[1]=pi.y,s[5]=Dr.y,s[9]=an.y,s[2]=pi.z,s[6]=Dr.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],m=i[5],u=i[9],p=i[13],_=i[2],y=i[6],d=i[10],h=i[14],g=i[3],b=i[7],M=i[11],w=i[15],T=s[0],C=s[4],x=s[8],S=s[12],P=s[1],A=s[5],D=s[9],N=s[13],z=s[2],B=s[6],H=s[10],V=s[14],Q=s[3],K=s[7],ut=s[11],_t=s[15];return r[0]=a*T+o*P+l*z+c*Q,r[4]=a*C+o*A+l*B+c*K,r[8]=a*x+o*D+l*H+c*ut,r[12]=a*S+o*N+l*V+c*_t,r[1]=f*T+m*P+u*z+p*Q,r[5]=f*C+m*A+u*B+p*K,r[9]=f*x+m*D+u*H+p*ut,r[13]=f*S+m*N+u*V+p*_t,r[2]=_*T+y*P+d*z+h*Q,r[6]=_*C+y*A+d*B+h*K,r[10]=_*x+y*D+d*H+h*ut,r[14]=_*S+y*N+d*V+h*_t,r[3]=g*T+b*P+M*z+w*Q,r[7]=g*C+b*A+M*B+w*K,r[11]=g*x+b*D+M*H+w*ut,r[15]=g*S+b*N+M*V+w*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],f=t[2],m=t[6],u=t[10],p=t[14],_=t[3],y=t[7],d=t[11],h=t[15],g=l*p-c*u,b=o*p-c*m,M=o*u-l*m,w=a*p-c*f,T=a*u-l*f,C=a*m-o*f;return e*(y*g-d*b+h*M)-i*(_*g-d*w+h*T)+s*(_*b-y*w+h*C)-r*(_*M-y*T+d*C)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8],m=t[9],u=t[10],p=t[11],_=t[12],y=t[13],d=t[14],h=t[15],g=e*o-i*a,b=e*l-s*a,M=e*c-r*a,w=i*l-s*o,T=i*c-r*o,C=s*c-r*l,x=f*y-m*_,S=f*d-u*_,P=f*h-p*_,A=m*d-u*y,D=m*h-p*y,N=u*h-p*d,z=g*N-b*D+M*A+w*P-T*S+C*x;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/z;return t[0]=(o*N-l*D+c*A)*B,t[1]=(s*D-i*N-r*A)*B,t[2]=(y*C-d*T+h*w)*B,t[3]=(u*T-m*C-p*w)*B,t[4]=(l*P-a*N-c*S)*B,t[5]=(e*N-s*P+r*S)*B,t[6]=(d*M-_*C-h*b)*B,t[7]=(f*C-u*M+p*b)*B,t[8]=(a*D-o*P+c*x)*B,t[9]=(i*P-e*D-r*x)*B,t[10]=(_*T-y*M+h*g)*B,t[11]=(m*M-f*T-p*g)*B,t[12]=(o*S-a*A-l*x)*B,t[13]=(e*A-i*S+s*x)*B,t[14]=(y*b-_*w-d*g)*B,t[15]=(f*w-m*b+u*g)*B,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,f=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+i,f*l-s*a,0,c*l-s*o,f*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,f=a+a,m=o+o,u=r*c,p=r*f,_=r*m,y=a*f,d=a*m,h=o*m,g=l*c,b=l*f,M=l*m,w=i.x,T=i.y,C=i.z;return s[0]=(1-(y+h))*w,s[1]=(p+M)*w,s[2]=(_-b)*w,s[3]=0,s[4]=(p-M)*T,s[5]=(1-(u+h))*T,s[6]=(d+g)*T,s[7]=0,s[8]=(_+b)*C,s[9]=(d-g)*C,s[10]=(1-(u+y))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),e.identity(),this;let a=$i.set(s[0],s[1],s[2]).length();const o=$i.set(s[4],s[5],s[6]).length(),l=$i.set(s[8],s[9],s[10]).length();r<0&&(a=-a),yn.copy(this);const c=1/a,f=1/o,m=1/l;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=f,yn.elements[5]*=f,yn.elements[6]*=f,yn.elements[8]*=m,yn.elements[9]*=m,yn.elements[10]*=m,e.setFromRotationMatrix(yn),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=On,l=!1){const c=this.elements,f=2*r/(e-t),m=2*r/(i-s),u=(e+t)/(e-t),p=(i+s)/(i-s);let _,y;if(l)_=r/(a-r),y=a*r/(a-r);else if(o===On)_=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===rr)_=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=m,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=On,l=!1){const c=this.elements,f=2/(e-t),m=2/(i-s),u=-(e+t)/(e-t),p=-(i+s)/(i-s);let _,y;if(l)_=1/(a-r),y=a/(a-r);else if(o===On)_=-2/(a-r),y=-(a+r)/(a-r);else if(o===rr)_=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=m,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const $i=new L,yn=new me,P0=new L(0,0,0),D0=new L(1,1,1),pi=new L,Dr=new L,an=new L,ru=new me,au=new Ei;class Cn{constructor(t=0,e=0,i=0,s=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],f=s[9],m=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,p),this._y=0);break;default:Pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ru,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return au.setFromEuler(this),this.setFromQuaternion(au,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class Gc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let L0=0;const ou=new L,Ji=new Ei,jn=new me,Lr=new L,zs=new L,I0=new L,U0=new Ei,lu=new L(1,0,0),cu=new L(0,1,0),hu=new L(0,0,1),uu={type:"added"},N0={type:"removed"},Qi={type:"childadded",child:null},Ho={type:"childremoved",child:null};class be extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new L,e=new Cn,i=new Ei,s=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Ot}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(lu,t)}rotateY(t){return this.rotateOnAxis(cu,t)}rotateZ(t){return this.rotateOnAxis(hu,t)}translateOnAxis(t,e){return ou.copy(t).applyQuaternion(this.quaternion),this.position.add(ou.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lu,t)}translateY(t){return this.translateOnAxis(cu,t)}translateZ(t){return this.translateOnAxis(hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Lr.copy(t):Lr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(zs,Lr,this.up):jn.lookAt(Lr,zs,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(jn),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uu),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(N0),Ho.child=t,this.dispatchEvent(Ho),Ho.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uu),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,t,I0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,U0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const m=l[c];r(t.shapes,m)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),f=a(t.images),m=a(t.shapes),u=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),m.length>0&&(i.shapes=m),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}be.DEFAULT_UP=new L(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ce extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const F0={type:"move"};class Wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const y of t.hand.values()){const d=e.getJointPose(y,i),h=this._getHandJoint(c,y);d!==null&&(h.matrix.fromArray(d.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=d.radius),h.visible=d!==null}const f=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],u=f.position.distanceTo(m.position),p=.02,_=.005;c.inputState.pinching&&u>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(F0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ce;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function Xo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Tt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,jt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=jt.workingColorSpace){if(t=zc(t,1),e=Xt(e,0,1),i=Xt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Xo(a,r,t+1/3),this.g=Xo(a,r,t),this.b=Xo(a,r,t-1/3)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,e=gn){function i(r){r!==void 0&&parseFloat(r)<1&&Pt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Pt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Pt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){const i=Ud[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Pt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return jt.workingToColorSpace(He.copy(this),t),Math.round(Xt(He.r*255,0,255))*65536+Math.round(Xt(He.g*255,0,255))*256+Math.round(Xt(He.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(He.copy(this),e);const i=He.r,s=He.g,r=He.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const m=a-o;switch(c=f<=.5?m/(a+o):m/(2-a-o),a){case i:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-i)/m+2;break;case r:l=(i-s)/m+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=gn){jt.workingToColorSpace(He.copy(this),t);const e=He.r,i=He.g,s=He.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(Ir);const i=tr(mi.h,Ir.h,e),s=tr(mi.s,Ir.s,e),r=tr(mi.l,Ir.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new Tt;Tt.NAMES=Ud;class kc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Tt(t),this.density=e}clone(){return new kc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class O0 extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const bn=new L,Zn=new L,Yo=new L,Kn=new L,ts=new L,es=new L,du=new L,qo=new L,jo=new L,Zo=new L,Ko=new ve,$o=new ve,Jo=new ve;class cn{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),bn.subVectors(t,e),s.cross(bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){bn.subVectors(s,e),Zn.subVectors(i,e),Yo.subVectors(t,e);const a=bn.dot(bn),o=bn.dot(Zn),l=bn.dot(Yo),c=Zn.dot(Zn),f=Zn.dot(Yo),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;const u=1/m,p=(c*l-o*f)*u,_=(a*f-o*l)*u;return r.set(1-p-_,_,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(a,Kn.y),l.addScaledVector(o,Kn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Ko.setScalar(0),$o.setScalar(0),Jo.setScalar(0),Ko.fromBufferAttribute(t,e),$o.fromBufferAttribute(t,i),Jo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ko,r.x),a.addScaledVector($o,r.y),a.addScaledVector(Jo,r.z),a}static isFrontFacing(t,e,i,s){return bn.subVectors(i,e),Zn.subVectors(t,e),bn.cross(Zn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),bn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;ts.subVectors(s,i),es.subVectors(r,i),qo.subVectors(t,i);const l=ts.dot(qo),c=es.dot(qo);if(l<=0&&c<=0)return e.copy(i);jo.subVectors(t,s);const f=ts.dot(jo),m=es.dot(jo);if(f>=0&&m<=f)return e.copy(s);const u=l*m-f*c;if(u<=0&&l>=0&&f<=0)return a=l/(l-f),e.copy(i).addScaledVector(ts,a);Zo.subVectors(t,r);const p=ts.dot(Zo),_=es.dot(Zo);if(_>=0&&p<=_)return e.copy(r);const y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(es,o);const d=f*_-p*m;if(d<=0&&m-f>=0&&p-_>=0)return du.subVectors(r,s),o=(m-f)/(m-f+(p-_)),e.copy(s).addScaledVector(du,o);const h=1/(d+y+u);return a=y*h,o=u*h,e.copy(i).addScaledVector(ts,a).addScaledVector(es,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class dr{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,En):En.fromBufferAttribute(r,a),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ur.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ur.copy(i.boundingBox)),Ur.applyMatrix4(t.matrixWorld),this.union(Ur)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vs),Nr.subVectors(this.max,Vs),ns.subVectors(t.a,Vs),is.subVectors(t.b,Vs),ss.subVectors(t.c,Vs),gi.subVectors(is,ns),_i.subVectors(ss,is),Ai.subVectors(ns,ss);let e=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Ai.z,Ai.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Ai.z,0,-Ai.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Ai.y,Ai.x,0];return!Qo(e,ns,is,ss,Nr)||(e=[1,0,0,0,1,0,0,0,1],!Qo(e,ns,is,ss,Nr))?!1:(Fr.crossVectors(gi,_i),e=[Fr.x,Fr.y,Fr.z],Qo(e,ns,is,ss,Nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $n=[new L,new L,new L,new L,new L,new L,new L,new L],En=new L,Ur=new dr,ns=new L,is=new L,ss=new L,gi=new L,_i=new L,Ai=new L,Vs=new L,Nr=new L,Fr=new L,Ci=new L;function Qo(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ci.fromArray(n,r);const o=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=t.dot(Ci),c=e.dot(Ci),f=i.dot(Ci);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const Te=new L,Or=new ft;let B0=0;class Jt{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:B0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=uc,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Or.fromBufferAttribute(this,e),Or.applyMatrix3(t),this.setXY(e,Or.x,Or.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=wn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ie(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uc&&(t.usage=this.usage),t}}class Nd extends Jt{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Fd extends Jt{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Zt extends Jt{constructor(t,e,i){super(new Float32Array(t),e,i)}}const z0=new dr,Gs=new L,tl=new L;class fr{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):z0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gs.subVectors(t,this.center);const e=Gs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Gs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gs.copy(t.center).add(tl)),this.expandByPoint(Gs.copy(t.center).sub(tl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let V0=0;const mn=new me,el=new be,rs=new L,on=new dr,ks=new dr,Ie=new L;class Ut extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(s0(t)?Fd:Nd)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ot().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,i){return mn.makeTranslation(t,e,i),this.applyMatrix4(mn),this}scale(t,e,i){return mn.makeScale(t,e,i),this.applyMatrix4(mn),this}lookAt(t){return el.lookAt(t),el.updateMatrix(),this.applyMatrix4(el.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Zt(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(on.min,ks.min),on.expandByPoint(Ie),Ie.addVectors(on.max,ks.max),on.expandByPoint(Ie)):(on.expandByPoint(ks.min),on.expandByPoint(ks.max))}on.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ie));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Ie.fromBufferAttribute(o,c),l&&(rs.fromBufferAttribute(t,c),Ie.add(rs)),s=Math.max(s,i.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new L,l[x]=new L;const c=new L,f=new L,m=new L,u=new ft,p=new ft,_=new ft,y=new L,d=new L;function h(x,S,P){c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,S),m.fromBufferAttribute(i,P),u.fromBufferAttribute(r,x),p.fromBufferAttribute(r,S),_.fromBufferAttribute(r,P),f.sub(c),m.sub(c),p.sub(u),_.sub(u);const A=1/(p.x*_.y-_.x*p.y);isFinite(A)&&(y.copy(f).multiplyScalar(_.y).addScaledVector(m,-p.y).multiplyScalar(A),d.copy(m).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(A),o[x].add(y),o[S].add(y),o[P].add(y),l[x].add(d),l[S].add(d),l[P].add(d))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let x=0,S=g.length;x<S;++x){const P=g[x],A=P.start,D=P.count;for(let N=A,z=A+D;N<z;N+=3)h(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const b=new L,M=new L,w=new L,T=new L;function C(x){w.fromBufferAttribute(s,x),T.copy(w);const S=o[x];b.copy(S),b.sub(w.multiplyScalar(w.dot(S))).normalize(),M.crossVectors(T,S);const A=M.dot(l[x])<0?-1:1;a.setXYZW(x,b.x,b.y,b.z,A)}for(let x=0,S=g.length;x<S;++x){const P=g[x],A=P.start,D=P.count;for(let N=A,z=A+D;N<z;N+=3)C(t.getX(N+0)),C(t.getX(N+1)),C(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jt(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,f=new L,m=new L;if(t)for(let u=0,p=t.count;u<p;u+=3){const _=t.getX(u+0),y=t.getX(u+1),d=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,d),f.subVectors(a,r),m.subVectors(s,r),f.cross(m),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,d),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),f.subVectors(a,r),m.subVectors(s,r),f.cross(m),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,l){const c=o.array,f=o.itemSize,m=o.normalized,u=new c.constructor(l.length*f);let p=0,_=0;for(let y=0,d=l.length;y<d;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*f;for(let h=0;h<f;h++)u[_++]=c[p++]}return new Jt(u,f,m)}if(this.index===null)return Pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ut,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let f=0,m=c.length;f<m;f++){const u=c[f],p=t(u,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let m=0,u=c.length;m<u;m++){const p=c[m];f.push(p.toJSON(t.data))}f.length>0&&(s[l]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const f=s[c];this.setAttribute(c,f.clone(e))}const r=t.morphAttributes;for(const c in r){const f=[],m=r[c];for(let u=0,p=m.length;u<p;u++)f.push(m[u].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,f=a.length;c<f;c++){const m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class G0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=uc,this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ke=new L;class La{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=wn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ie(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=wn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=wn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=wn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=wn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Pa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Jt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new La(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Pa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let k0=0;class ui extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=Vi,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bl,this.blendDst=El,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Pt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Pt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(i.blending=this.blending),this.side!==Gn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bl&&(i.blendSrc=this.blendSrc),this.blendDst!==El&&(i.blendDst=this.blendDst),this.blendEquation!==Ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class qa extends ui{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let as;const Hs=new L,os=new L,ls=new L,cs=new ft,Ws=new ft,Od=new me,Br=new L,Xs=new L,zr=new L,fu=new ft,nl=new ft,pu=new ft;class Hc extends be{constructor(t=new qa){if(super(),this.isSprite=!0,this.type="Sprite",as===void 0){as=new Ut;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new G0(e,5);as.setIndex([0,1,2,0,2,3]),as.setAttribute("position",new La(i,3,0,!1)),as.setAttribute("uv",new La(i,2,3,!1))}this.geometry=as,this.material=t,this.center=new ft(.5,.5),this.count=1}raycast(t,e){t.camera===null&&qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),os.setFromMatrixScale(this.matrixWorld),Od.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&os.multiplyScalar(-ls.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;Vr(Br.set(-.5,-.5,0),ls,a,os,s,r),Vr(Xs.set(.5,-.5,0),ls,a,os,s,r),Vr(zr.set(.5,.5,0),ls,a,os,s,r),fu.set(0,0),nl.set(1,0),pu.set(1,1);let o=t.ray.intersectTriangle(Br,Xs,zr,!1,Hs);if(o===null&&(Vr(Xs.set(-.5,.5,0),ls,a,os,s,r),nl.set(0,1),o=t.ray.intersectTriangle(Br,zr,Xs,!1,Hs),o===null))return;const l=t.ray.origin.distanceTo(Hs);l<t.near||l>t.far||e.push({distance:l,point:Hs.clone(),uv:cn.getInterpolation(Hs,Br,Xs,zr,fu,nl,pu,new ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Vr(n,t,e,i,s,r){cs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Ws.x=r*cs.x-s*cs.y,Ws.y=s*cs.x+r*cs.y):Ws.copy(cs),n.copy(t),n.x+=Ws.x,n.y+=Ws.y,n.applyMatrix4(Od)}const Jn=new L,il=new L,Gr=new L,xi=new L,sl=new L,kr=new L,rl=new L;class pr{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){il.copy(t).add(e).multiplyScalar(.5),Gr.copy(e).sub(t).normalize(),xi.copy(this.origin).sub(il);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Gr),o=xi.dot(this.direction),l=-xi.dot(Gr),c=xi.lengthSq(),f=Math.abs(1-a*a);let m,u,p,_;if(f>0)if(m=a*l-o,u=a*o-l,_=r*f,m>=0)if(u>=-_)if(u<=_){const y=1/f;m*=y,u*=y,p=m*(m+a*u+2*o)+u*(a*m+u+2*l)+c}else u=r,m=Math.max(0,-(a*u+o)),p=-m*m+u*(u+2*l)+c;else u=-r,m=Math.max(0,-(a*u+o)),p=-m*m+u*(u+2*l)+c;else u<=-_?(m=Math.max(0,-(-a*r+o)),u=m>0?-r:Math.min(Math.max(-r,-l),r),p=-m*m+u*(u+2*l)+c):u<=_?(m=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(m=Math.max(0,-(a*r+o)),u=m>0?r:Math.min(Math.max(-r,-l),r),p=-m*m+u*(u+2*l)+c);else u=a>0?-r:r,m=Math.max(0,-(a*u+o)),p=-m*m+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(il).addScaledVector(Gr,u),p}intersectSphere(t,e){Jn.subVectors(t.center,this.origin);const i=Jn.dot(this.direction),s=Jn.dot(Jn)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,m=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(r=(t.min.y-u.y)*f,a=(t.max.y-u.y)*f):(r=(t.max.y-u.y)*f,a=(t.min.y-u.y)*f),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(t.min.z-u.z)*m,l=(t.max.z-u.z)*m):(o=(t.max.z-u.z)*m,l=(t.min.z-u.z)*m),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,i,s,r){sl.subVectors(e,t),kr.subVectors(i,t),rl.crossVectors(sl,kr);let a=this.direction.dot(rl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xi.subVectors(this.origin,t);const l=o*this.direction.dot(kr.crossVectors(xi,kr));if(l<0)return null;const c=o*this.direction.dot(sl.cross(xi));if(c<0||l+c>a)return null;const f=-o*xi.dot(rl);return f<0?null:this.at(f/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fn extends ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const mu=new me,Ri=new pr,Hr=new fr,gu=new L,Wr=new L,Xr=new L,Yr=new L,al=new L,qr=new L,_u=new L,jr=new L;class tt extends be{constructor(t=new Ut,e=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const f=o[l],m=r[l];f!==0&&(al.fromBufferAttribute(m,t),a?qr.addScaledVector(al,f):qr.addScaledVector(al.sub(e),f))}e.add(qr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hr.copy(i.boundingSphere),Hr.applyMatrix4(r),Ri.copy(t.ray).recast(t.near),!(Hr.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Hr,gu)===null||Ri.origin.distanceToSquared(gu)>(t.far-t.near)**2))&&(mu.copy(r).invert(),Ri.copy(t.ray).applyMatrix4(mu),!(i.boundingBox!==null&&Ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ri)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,m=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=u.length;_<y;_++){const d=u[_],h=a[d.materialIndex],g=Math.max(d.start,p.start),b=Math.min(o.count,Math.min(d.start+d.count,p.start+p.count));for(let M=g,w=b;M<w;M+=3){const T=o.getX(M),C=o.getX(M+1),x=o.getX(M+2);s=Zr(this,h,t,i,c,f,m,T,C,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let d=_,h=y;d<h;d+=3){const g=o.getX(d),b=o.getX(d+1),M=o.getX(d+2);s=Zr(this,a,t,i,c,f,m,g,b,M),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=u.length;_<y;_++){const d=u[_],h=a[d.materialIndex],g=Math.max(d.start,p.start),b=Math.min(l.count,Math.min(d.start+d.count,p.start+p.count));for(let M=g,w=b;M<w;M+=3){const T=M,C=M+1,x=M+2;s=Zr(this,h,t,i,c,f,m,T,C,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let d=_,h=y;d<h;d+=3){const g=d,b=d+1,M=d+2;s=Zr(this,a,t,i,c,f,m,g,b,M),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}}function H0(n,t,e,i,s,r,a,o){let l;if(t.side===Ye?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Gn,o),l===null)return null;jr.copy(o),jr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(jr);return c<e.near||c>e.far?null:{distance:c,point:jr.clone(),object:n}}function Zr(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Wr),n.getVertexPosition(l,Xr),n.getVertexPosition(c,Yr);const f=H0(n,t,e,i,Wr,Xr,Yr,_u);if(f){const m=new L;cn.getBarycoord(_u,Wr,Xr,Yr,m),s&&(f.uv=cn.getInterpolatedAttribute(s,o,l,c,m,new ft)),r&&(f.uv1=cn.getInterpolatedAttribute(r,o,l,c,m,new ft)),a&&(f.normal=cn.getInterpolatedAttribute(a,o,l,c,m,new L),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new L,materialIndex:0};cn.getNormal(Wr,Xr,Yr,u.normal),f.face=u,f.barycoord=m}return f}class W0 extends qe{constructor(t=null,e=1,i=1,s,r,a,o,l,c=ze,f=ze,m,u){super(null,a,o,l,c,f,s,r,m,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ol=new L,X0=new L,Y0=new Ot;class Mi{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ol.subVectors(i,e).cross(X0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ol),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Y0.getNormalMatrix(t),s=this.coplanarPoint(ol).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new fr,q0=new ft(.5,.5),Kr=new L;class Wc{constructor(t=new Mi,e=new Mi,i=new Mi,s=new Mi,r=new Mi,a=new Mi){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=On,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],f=r[4],m=r[5],u=r[6],p=r[7],_=r[8],y=r[9],d=r[10],h=r[11],g=r[12],b=r[13],M=r[14],w=r[15];if(s[0].setComponents(c-a,p-f,h-_,w-g).normalize(),s[1].setComponents(c+a,p+f,h+_,w+g).normalize(),s[2].setComponents(c+o,p+m,h+y,w+b).normalize(),s[3].setComponents(c-o,p-m,h-y,w-b).normalize(),i)s[4].setComponents(l,u,d,M).normalize(),s[5].setComponents(c-l,p-u,h-d,w-M).normalize();else if(s[4].setComponents(c-l,p-u,h-d,w-M).normalize(),e===On)s[5].setComponents(c+l,p+u,h+d,w+M).normalize();else if(e===rr)s[5].setComponents(l,u,d,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){Pi.center.set(0,0,0);const e=q0.distanceTo(t.center);return Pi.radius=.7071067811865476+e,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Kr.x=s.normal.x>0?t.max.x:t.min.x,Kr.y=s.normal.y>0?t.max.y:t.min.y,Kr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ja extends ui{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ia=new L,Ua=new L,xu=new me,Ys=new pr,$r=new fr,ll=new L,vu=new L;class Za extends be{constructor(t=new Ut,e=new ja){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Ia.fromBufferAttribute(e,s-1),Ua.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Ia.distanceTo(Ua);t.setAttribute("lineDistance",new Zt(i,1))}else Pt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(s),$r.radius+=r,t.ray.intersectsSphere($r)===!1)return;xu.copy(s).invert(),Ys.copy(t.ray).applyMatrix4(xu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=i.index,u=i.attributes.position;if(f!==null){const p=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let y=p,d=_-1;y<d;y+=c){const h=f.getX(y),g=f.getX(y+1),b=Jr(this,t,Ys,l,h,g,y);b&&e.push(b)}if(this.isLineLoop){const y=f.getX(_-1),d=f.getX(p),h=Jr(this,t,Ys,l,y,d,_-1);h&&e.push(h)}}else{const p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let y=p,d=_-1;y<d;y+=c){const h=Jr(this,t,Ys,l,y,y+1,y);h&&e.push(h)}if(this.isLineLoop){const y=Jr(this,t,Ys,l,_-1,p,_-1);y&&e.push(y)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Jr(n,t,e,i,s,r,a){const o=n.geometry.attributes.position;if(Ia.fromBufferAttribute(o,s),Ua.fromBufferAttribute(o,r),e.distanceSqToSegment(Ia,Ua,ll,vu)>i)return;ll.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ll);if(!(c<t.near||c>t.far))return{distance:c,point:vu.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Mu=new L,Su=new L;class j0 extends Za{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Mu.fromBufferAttribute(e,s),Su.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Mu.distanceTo(Su);t.setAttribute("lineDistance",new Zt(i,1))}else Pt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mr extends ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const yu=new me,dc=new pr,Qr=new fr,ta=new L;class Ka extends be{constructor(t=new Ut,e=new mr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(s),Qr.radius+=r,t.ray.intersectsSphere(Qr)===!1)return;yu.copy(s).invert(),dc.copy(t.ray).applyMatrix4(yu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,m=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=u,y=p;_<y;_++){const d=c.getX(_);ta.fromBufferAttribute(m,d),bu(ta,d,l,s,t,e,this)}}else{const u=Math.max(0,a.start),p=Math.min(m.count,a.start+a.count);for(let _=u,y=p;_<y;_++)ta.fromBufferAttribute(m,_),bu(ta,_,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function bu(n,t,e,i,s,r,a){const o=dc.distanceSqToPoint(n);if(o<e){const l=new L;dc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Bd extends qe{constructor(t=[],e=Gi,i,s,r,a,o,l,c,f){super(t,e,i,s,r,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hn extends qe{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class or extends qe{constructor(t,e,i=kn,s,r,a,o=ze,l=ze,c,f=li,m=1){if(f!==li&&f!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:m};super(u,s,r,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Vc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Z0 extends or{constructor(t,e=kn,i=Gi,s,r,a=ze,o=ze,l,c=li){const f={width:t,height:t,depth:1},m=[f,f,f,f,f,f];super(t,t,e,i,s,r,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class zd extends qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class pn extends Ut{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],f=[],m=[];let u=0,p=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,s,a,2),_("x","z","y",1,-1,t,i,-e,s,a,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(m,2));function _(y,d,h,g,b,M,w,T,C,x,S){const P=M/C,A=w/x,D=M/2,N=w/2,z=T/2,B=C+1,H=x+1;let V=0,Q=0;const K=new L;for(let ut=0;ut<H;ut++){const _t=ut*A-N;for(let pt=0;pt<B;pt++){const zt=pt*P-D;K[y]=zt*g,K[d]=_t*b,K[h]=z,c.push(K.x,K.y,K.z),K[y]=0,K[d]=0,K[h]=T>0?1:-1,f.push(K.x,K.y,K.z),m.push(pt/C),m.push(1-ut/x),V+=1}}for(let ut=0;ut<x;ut++)for(let _t=0;_t<C;_t++){const pt=u+_t+B*ut,zt=u+_t+B*(ut+1),_e=u+(_t+1)+B*(ut+1),ge=u+(_t+1)+B*ut;l.push(pt,zt,ge),l.push(zt,_e,ge),Q+=6}o.addGroup(p,Q,S),p+=Q,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Xc extends Ut{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],f=e/2,m=Math.PI/2*t,u=e,p=2*m+u,_=i*2+r,y=s+1,d=new L,h=new L;for(let g=0;g<=_;g++){let b=0,M=0,w=0,T=0;if(g<=i){const S=g/i,P=S*Math.PI/2;M=-f-t*Math.cos(P),w=t*Math.sin(P),T=-t*Math.cos(P),b=S*m}else if(g<=i+r){const S=(g-i)/r;M=-f+S*e,w=t,T=0,b=m+S*u}else{const S=(g-i-r)/i,P=S*Math.PI/2;M=f+t*Math.sin(P),w=t*Math.cos(P),T=t*Math.sin(P),b=m+u+S*m}const C=Math.max(0,Math.min(1,b/p));let x=0;g===0?x=.5/s:g===_&&(x=-.5/s);for(let S=0;S<=s;S++){const P=S/s,A=P*Math.PI*2,D=Math.sin(A),N=Math.cos(A);h.x=-w*N,h.y=M,h.z=w*D,o.push(h.x,h.y,h.z),d.set(-w*N,T,w*D),d.normalize(),l.push(d.x,d.y,d.z),c.push(P+x,C)}if(g>0){const S=(g-1)*y;for(let P=0;P<s;P++){const A=S+P,D=S+P+1,N=g*y+P,z=g*y+P+1;a.push(A,D,N),a.push(D,z,N)}}}this.setIndex(a),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xc(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Yc extends Ut{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new L,f=new ft;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let m=0,u=3;m<=e;m++,u+=3){const p=i+m/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),f.x=(a[u]/t+1)/2,f.y=(a[u+1]/t+1)/2,l.push(f.x,f.y)}for(let m=1;m<=e;m++)r.push(m,m+1,0);this.setIndex(r),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(o,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Fe extends Ut{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const f=[],m=[],u=[],p=[];let _=0;const y=[],d=i/2;let h=0;g(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(f),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(p,2));function g(){const M=new L,w=new L;let T=0;const C=(e-t)/i;for(let x=0;x<=r;x++){const S=[],P=x/r,A=P*(e-t)+t;for(let D=0;D<=s;D++){const N=D/s,z=N*l+o,B=Math.sin(z),H=Math.cos(z);w.x=A*B,w.y=-P*i+d,w.z=A*H,m.push(w.x,w.y,w.z),M.set(B,C,H).normalize(),u.push(M.x,M.y,M.z),p.push(N,1-P),S.push(_++)}y.push(S)}for(let x=0;x<s;x++)for(let S=0;S<r;S++){const P=y[S][x],A=y[S+1][x],D=y[S+1][x+1],N=y[S][x+1];(t>0||S!==0)&&(f.push(P,A,N),T+=3),(e>0||S!==r-1)&&(f.push(A,D,N),T+=3)}c.addGroup(h,T,0),h+=T}function b(M){const w=_,T=new ft,C=new L;let x=0;const S=M===!0?t:e,P=M===!0?1:-1;for(let D=1;D<=s;D++)m.push(0,d*P,0),u.push(0,P,0),p.push(.5,.5),_++;const A=_;for(let D=0;D<=s;D++){const z=D/s*l+o,B=Math.cos(z),H=Math.sin(z);C.x=S*H,C.y=d*P,C.z=S*B,m.push(C.x,C.y,C.z),u.push(0,P,0),T.x=B*.5+.5,T.y=H*.5*P+.5,p.push(T.x,T.y),_++}for(let D=0;D<s;D++){const N=w+D,z=A+D;M===!0?f.push(z,z+1,N):f.push(z+1,z,N),x+=3}c.addGroup(h,x,M===!0?1:2),h+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $a extends Ut{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),c(i),f(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(g){const b=new L,M=new L,w=new L;for(let T=0;T<e.length;T+=3)p(e[T+0],b),p(e[T+1],M),p(e[T+2],w),l(b,M,w,g)}function l(g,b,M,w){const T=w+1,C=[];for(let x=0;x<=T;x++){C[x]=[];const S=g.clone().lerp(M,x/T),P=b.clone().lerp(M,x/T),A=T-x;for(let D=0;D<=A;D++)D===0&&x===T?C[x][D]=S:C[x][D]=S.clone().lerp(P,D/A)}for(let x=0;x<T;x++)for(let S=0;S<2*(T-x)-1;S++){const P=Math.floor(S/2);S%2===0?(u(C[x][P+1]),u(C[x+1][P]),u(C[x][P])):(u(C[x][P+1]),u(C[x+1][P+1]),u(C[x+1][P]))}}function c(g){const b=new L;for(let M=0;M<r.length;M+=3)b.x=r[M+0],b.y=r[M+1],b.z=r[M+2],b.normalize().multiplyScalar(g),r[M+0]=b.x,r[M+1]=b.y,r[M+2]=b.z}function f(){const g=new L;for(let b=0;b<r.length;b+=3){g.x=r[b+0],g.y=r[b+1],g.z=r[b+2];const M=d(g)/2/Math.PI+.5,w=h(g)/Math.PI+.5;a.push(M,1-w)}_(),m()}function m(){for(let g=0;g<a.length;g+=6){const b=a[g+0],M=a[g+2],w=a[g+4],T=Math.max(b,M,w),C=Math.min(b,M,w);T>.9&&C<.1&&(b<.2&&(a[g+0]+=1),M<.2&&(a[g+2]+=1),w<.2&&(a[g+4]+=1))}}function u(g){r.push(g.x,g.y,g.z)}function p(g,b){const M=g*3;b.x=t[M+0],b.y=t[M+1],b.z=t[M+2]}function _(){const g=new L,b=new L,M=new L,w=new L,T=new ft,C=new ft,x=new ft;for(let S=0,P=0;S<r.length;S+=9,P+=6){g.set(r[S+0],r[S+1],r[S+2]),b.set(r[S+3],r[S+4],r[S+5]),M.set(r[S+6],r[S+7],r[S+8]),T.set(a[P+0],a[P+1]),C.set(a[P+2],a[P+3]),x.set(a[P+4],a[P+5]),w.copy(g).add(b).add(M).divideScalar(3);const A=d(w);y(T,P+0,g,A),y(C,P+2,b,A),y(x,P+4,M,A)}}function y(g,b,M,w){w<0&&g.x===1&&(a[b]=g.x-1),M.x===0&&M.z===0&&(a[b]=w/2/Math.PI+.5)}function d(g){return Math.atan2(g.z,-g.x)}function h(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $a(t.vertices,t.indices,t.radius,t.detail)}}class Ja extends $a{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ja(t.radius,t.detail)}}const ea=new L,na=new L,cl=new L,ia=new cn;class K0 extends Ut{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Ms*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],f=["a","b","c"],m=new Array(3),u={},p=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:y,b:d,c:h}=ia;if(y.fromBufferAttribute(o,c[0]),d.fromBufferAttribute(o,c[1]),h.fromBufferAttribute(o,c[2]),ia.getNormal(cl),m[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,m[1]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,m[2]=`${Math.round(h.x*s)},${Math.round(h.y*s)},${Math.round(h.z*s)}`,!(m[0]===m[1]||m[1]===m[2]||m[2]===m[0]))for(let g=0;g<3;g++){const b=(g+1)%3,M=m[g],w=m[b],T=ia[f[g]],C=ia[f[b]],x=`${M}_${w}`,S=`${w}_${M}`;S in u&&u[S]?(cl.dot(u[S].normal)<=r&&(p.push(T.x,T.y,T.z),p.push(C.x,C.y,C.z)),u[S]=null):x in u||(u[x]={index0:c[g],index1:c[b],normal:cl.clone()})}}for(const _ in u)if(u[_]){const{index0:y,index1:d}=u[_];ea.fromBufferAttribute(o,y),na.fromBufferAttribute(o,d),p.push(ea.x,ea.y,ea.z),p.push(na.x,na.y,na.z)}this.setAttribute("position",new Zt(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class er extends $a{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new er(t.radius,t.detail)}}class nn extends Ut{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,f=l+1,m=t/o,u=e/l,p=[],_=[],y=[],d=[];for(let h=0;h<f;h++){const g=h*u-a;for(let b=0;b<c;b++){const M=b*m-r;_.push(M,-g,0),y.push(0,0,1),d.push(b/o),d.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<o;g++){const b=g+c*h,M=g+c*(h+1),w=g+1+c*(h+1),T=g+1+c*h;p.push(b,M,T),p.push(M,w,T)}this.setIndex(p),this.setAttribute("position",new Zt(_,3)),this.setAttribute("normal",new Zt(y,3)),this.setAttribute("uv",new Zt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nn(t.width,t.height,t.widthSegments,t.heightSegments)}}class we extends Ut{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const f=[],m=new L,u=new L,p=[],_=[],y=[],d=[];for(let h=0;h<=i;h++){const g=[],b=h/i;let M=0;h===0&&a===0?M=.5/e:h===i&&l===Math.PI&&(M=-.5/e);for(let w=0;w<=e;w++){const T=w/e;m.x=-t*Math.cos(s+T*r)*Math.sin(a+b*o),m.y=t*Math.cos(a+b*o),m.z=t*Math.sin(s+T*r)*Math.sin(a+b*o),_.push(m.x,m.y,m.z),u.copy(m).normalize(),y.push(u.x,u.y,u.z),d.push(T+M,1-b),g.push(c++)}f.push(g)}for(let h=0;h<i;h++)for(let g=0;g<e;g++){const b=f[h][g+1],M=f[h][g],w=f[h+1][g],T=f[h+1][g+1];(h!==0||a>0)&&p.push(b,M,T),(h!==i-1||l<Math.PI)&&p.push(M,w,T)}this.setIndex(p),this.setAttribute("position",new Zt(_,3)),this.setAttribute("normal",new Zt(y,3)),this.setAttribute("uv",new Zt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Qa extends Ut{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],f=[],m=[],u=new L,p=new L,_=new L;for(let y=0;y<=i;y++){const d=a+y/i*o;for(let h=0;h<=s;h++){const g=h/s*r;p.x=(t+e*Math.cos(d))*Math.cos(g),p.y=(t+e*Math.cos(d))*Math.sin(g),p.z=e*Math.sin(d),c.push(p.x,p.y,p.z),u.x=t*Math.cos(g),u.y=t*Math.sin(g),_.subVectors(p,u).normalize(),f.push(_.x,_.y,_.z),m.push(h/s),m.push(y/i)}}for(let y=1;y<=i;y++)for(let d=1;d<=s;d++){const h=(s+1)*y+d-1,g=(s+1)*(y-1)+d-1,b=(s+1)*(y-1)+d,M=(s+1)*y+d;l.push(h,g,M),l.push(g,b,M)}this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qa(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function Cs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function $e(n){const t={};for(let e=0;e<n.length;e++){const i=Cs(n[e]);for(const s in i)t[s]=i[s]}return t}function $0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Vd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const lr={clone:Cs,merge:$e};var J0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Q0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xe extends ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J0,this.fragmentShader=Q0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cs(t.uniforms),this.uniformsGroups=$0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Gd extends Xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ht extends ui{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fc,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sa extends ui{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fc,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=bc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tm extends ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class em extends ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class to extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class nm extends to{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const hl=new me,Eu=new L,Tu=new L;class kd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wc,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Eu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Eu),Tu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Tu),e.updateMatrixWorld(),hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===rr||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ra=new L,aa=new Ei,Ln=new L;class Hd extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ra,aa,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ra,aa,Ln.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(ra,aa,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ra,aa,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const vi=new L,wu=new ft,Au=new ft;class Qe extends Hd{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ar*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ar*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,wu,Au),e.subVectors(Au,wu)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ms*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class im extends kd{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0}}class gr extends to{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new im}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class eo extends Hd{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class sm extends kd{constructor(){super(new eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qc extends to{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new sm}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class rm extends to{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const hs=-90,us=1;class am extends be{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qe(hs,us,t,e);s.layers=this.layers,this.add(s);const r=new Qe(hs,us,t,e);r.layers=this.layers,this.add(r);const a=new Qe(hs,us,t,e);a.layers=this.layers,this.add(a);const o=new Qe(hs,us,t,e);o.layers=this.layers,this.add(o);const l=new Qe(hs,us,t,e);l.layers=this.layers,this.add(l);const c=new Qe(hs,us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===On)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===rr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,f]=this.children,m=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let d=!1;t.isWebGLRenderer===!0?d=t.state.buffers.depth.getReversed():d=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(m,u,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class om extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class lm{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=cm.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function cm(){this._document.hidden===!1&&this.reset()}const Cu=new me;class hm{constructor(t,e,i=0,s=1/0){this.ray=new pr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Gc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):qt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Cu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cu),this}intersectObject(t,e=!0,i=[]){return fc(t,this,i,e),i.sort(Ru),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)fc(t[s],this,i,e);return i.sort(Ru),i}}function Ru(n,t){return n.distance-t.distance}function fc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)fc(r[a],t,e,!0)}}class um{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Pt("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class Pu{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Xt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class dm extends Wi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Pt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Du(n,t,e,i){const s=fm(i);switch(e){case Rd:return n*t;case Dd:return n*t/s.components*s.byteLength;case Ic:return n*t/s.components*s.byteLength;case ws:return n*t*2/s.components*s.byteLength;case Uc:return n*t*2/s.components*s.byteLength;case Pd:return n*t*3/s.components*s.byteLength;case An:return n*t*4/s.components*s.byteLength;case Nc:return n*t*4/s.components*s.byteLength;case xa:case va:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ma:case Sa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ul:case Fl:return Math.max(n,16)*Math.max(t,8)/4;case Il:case Nl:return Math.max(n,8)*Math.max(t,8)/2;case Ol:case Bl:case Vl:case Gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case zl:case kl:case Hl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ql:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case jl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Zl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case $l:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case tc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ec:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case nc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ic:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case sc:case rc:case ac:return Math.ceil(n/4)*Math.ceil(t/4)*16;case oc:case lc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case cc:case hc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fm(n){switch(n){case ln:case Td:return{byteLength:1,components:1};case ir:case wd:case hn:return{byteLength:2,components:1};case Dc:case Lc:return{byteLength:2,components:4};case kn:case Pc:case Fn:return{byteLength:4,components:1};case Ad:case Cd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yc}}));typeof window<"u"&&(window.__THREE__?Pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wd(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function pm(n){const t=new WeakMap;function e(o,l){const c=o.array,f=o.usage,m=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,f),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function i(o,l,c){const f=l.array,m=l.updateRanges;if(n.bindBuffer(c,o),m.length===0)n.bufferSubData(c,0,f);else{m.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<m.length;p++){const _=m[u],y=m[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++u,m[u]=y)}m.length=u+1;for(let p=0,_=m.length;p<_;p++){const y=m[p];n.bufferSubData(c,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var mm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gm=`#ifdef USE_ALPHAHASH
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
#endif`,_m=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sm=`#ifdef USE_AOMAP
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
#endif`,ym=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bm=`#ifdef USE_BATCHING
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
#endif`,Em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Am=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cm=`#ifdef USE_IRIDESCENCE
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
#endif`,Rm=`#ifdef USE_BUMPMAP
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
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Nm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Bm=`#define PI 3.141592653589793
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
} // validated`,zm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vm=`vec3 transformedNormal = objectNormal;
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
#endif`,Gm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,km=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ym=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qm=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zm=`#ifdef USE_ENVMAP
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
#endif`,Km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$m=`#ifdef USE_ENVMAP
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
#endif`,Jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ng=`#ifdef USE_GRADIENTMAP
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
}`,ig=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ag=`uniform bool receiveShadow;
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
#endif`,og=`#ifdef USE_ENVMAP
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
#endif`,lg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dg=`PhysicalMaterial material;
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
#endif`,fg=`uniform sampler2D dfgLUT;
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
}`,pg=`
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
#endif`,mg=`#if defined( RE_IndirectDiffuse )
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
#endif`,gg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_g=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Eg=`#if defined( USE_POINTS_UV )
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
#endif`,Tg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ag=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pg=`#ifdef USE_MORPHTARGETS
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
#endif`,Dg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ig=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Og=`#ifdef USE_NORMALMAP
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
#endif`,Bg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$g=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qg=`float getShadowMask() {
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
}`,t_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e_=`#ifdef USE_SKINNING
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
#endif`,n_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i_=`#ifdef USE_SKINNING
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
#endif`,s_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,l_=`#ifdef USE_TRANSMISSION
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
#endif`,c_=`#ifdef USE_TRANSMISSION
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
#endif`,h_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const p_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m_=`uniform sampler2D t2D;
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
}`,g_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,__=`#ifdef ENVMAP_TYPE_CUBE
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
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M_=`#include <common>
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
}`,S_=`#if DEPTH_PACKING == 3200
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
}`,y_=`#define DISTANCE
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
}`,b_=`#define DISTANCE
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
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w_=`uniform float scale;
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
}`,A_=`uniform vec3 diffuse;
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
}`,C_=`#include <common>
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
}`,R_=`uniform vec3 diffuse;
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
}`,P_=`#define LAMBERT
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
}`,D_=`#define LAMBERT
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
}`,L_=`#define MATCAP
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
}`,I_=`#define MATCAP
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
}`,U_=`#define NORMAL
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
}`,N_=`#define NORMAL
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
}`,F_=`#define PHONG
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
}`,O_=`#define PHONG
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
}`,B_=`#define STANDARD
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
}`,z_=`#define STANDARD
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
}`,V_=`#define TOON
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
}`,G_=`#define TOON
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
}`,k_=`uniform float size;
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
}`,H_=`uniform vec3 diffuse;
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
}`,W_=`#include <common>
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
}`,X_=`uniform vec3 color;
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
}`,Y_=`uniform float rotation;
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
}`,q_=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:mm,alphahash_pars_fragment:gm,alphamap_fragment:_m,alphamap_pars_fragment:xm,alphatest_fragment:vm,alphatest_pars_fragment:Mm,aomap_fragment:Sm,aomap_pars_fragment:ym,batching_pars_vertex:bm,batching_vertex:Em,begin_vertex:Tm,beginnormal_vertex:wm,bsdfs:Am,iridescence_fragment:Cm,bumpmap_pars_fragment:Rm,clipping_planes_fragment:Pm,clipping_planes_pars_fragment:Dm,clipping_planes_pars_vertex:Lm,clipping_planes_vertex:Im,color_fragment:Um,color_pars_fragment:Nm,color_pars_vertex:Fm,color_vertex:Om,common:Bm,cube_uv_reflection_fragment:zm,defaultnormal_vertex:Vm,displacementmap_pars_vertex:Gm,displacementmap_vertex:km,emissivemap_fragment:Hm,emissivemap_pars_fragment:Wm,colorspace_fragment:Xm,colorspace_pars_fragment:Ym,envmap_fragment:qm,envmap_common_pars_fragment:jm,envmap_pars_fragment:Zm,envmap_pars_vertex:Km,envmap_physical_pars_fragment:og,envmap_vertex:$m,fog_vertex:Jm,fog_pars_vertex:Qm,fog_fragment:tg,fog_pars_fragment:eg,gradientmap_pars_fragment:ng,lightmap_pars_fragment:ig,lights_lambert_fragment:sg,lights_lambert_pars_fragment:rg,lights_pars_begin:ag,lights_toon_fragment:lg,lights_toon_pars_fragment:cg,lights_phong_fragment:hg,lights_phong_pars_fragment:ug,lights_physical_fragment:dg,lights_physical_pars_fragment:fg,lights_fragment_begin:pg,lights_fragment_maps:mg,lights_fragment_end:gg,logdepthbuf_fragment:_g,logdepthbuf_pars_fragment:xg,logdepthbuf_pars_vertex:vg,logdepthbuf_vertex:Mg,map_fragment:Sg,map_pars_fragment:yg,map_particle_fragment:bg,map_particle_pars_fragment:Eg,metalnessmap_fragment:Tg,metalnessmap_pars_fragment:wg,morphinstance_vertex:Ag,morphcolor_vertex:Cg,morphnormal_vertex:Rg,morphtarget_pars_vertex:Pg,morphtarget_vertex:Dg,normal_fragment_begin:Lg,normal_fragment_maps:Ig,normal_pars_fragment:Ug,normal_pars_vertex:Ng,normal_vertex:Fg,normalmap_pars_fragment:Og,clearcoat_normal_fragment_begin:Bg,clearcoat_normal_fragment_maps:zg,clearcoat_pars_fragment:Vg,iridescence_pars_fragment:Gg,opaque_fragment:kg,packing:Hg,premultiplied_alpha_fragment:Wg,project_vertex:Xg,dithering_fragment:Yg,dithering_pars_fragment:qg,roughnessmap_fragment:jg,roughnessmap_pars_fragment:Zg,shadowmap_pars_fragment:Kg,shadowmap_pars_vertex:$g,shadowmap_vertex:Jg,shadowmask_pars_fragment:Qg,skinbase_vertex:t_,skinning_pars_vertex:e_,skinning_vertex:n_,skinnormal_vertex:i_,specularmap_fragment:s_,specularmap_pars_fragment:r_,tonemapping_fragment:a_,tonemapping_pars_fragment:o_,transmission_fragment:l_,transmission_pars_fragment:c_,uv_pars_fragment:h_,uv_pars_vertex:u_,uv_vertex:d_,worldpos_vertex:f_,background_vert:p_,background_frag:m_,backgroundCube_vert:g_,backgroundCube_frag:__,cube_vert:x_,cube_frag:v_,depth_vert:M_,depth_frag:S_,distance_vert:y_,distance_frag:b_,equirect_vert:E_,equirect_frag:T_,linedashed_vert:w_,linedashed_frag:A_,meshbasic_vert:C_,meshbasic_frag:R_,meshlambert_vert:P_,meshlambert_frag:D_,meshmatcap_vert:L_,meshmatcap_frag:I_,meshnormal_vert:U_,meshnormal_frag:N_,meshphong_vert:F_,meshphong_frag:O_,meshphysical_vert:B_,meshphysical_frag:z_,meshtoon_vert:V_,meshtoon_frag:G_,points_vert:k_,points_frag:H_,shadow_vert:W_,shadow_frag:X_,sprite_vert:Y_,sprite_frag:q_},ot={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Un={basic:{uniforms:$e([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:$e([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Tt(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:$e([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:$e([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:$e([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:$e([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:$e([ot.points,ot.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:$e([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:$e([ot.common,ot.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:$e([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:$e([ot.sprite,ot.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:$e([ot.common,ot.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:$e([ot.lights,ot.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Un.physical={uniforms:$e([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const oa={r:0,b:0,g:0},Di=new Cn,j_=new me;function Z_(n,t,e,i,s,r){const a=new Tt(0);let o=s===!0?0:1,l,c,f=null,m=0,u=null;function p(g){let b=g.isScene===!0?g.background:null;if(b&&b.isTexture){const M=g.backgroundBlurriness>0;b=t.get(b,M)}return b}function _(g){let b=!1;const M=p(g);M===null?d(a,o):M&&M.isColor&&(d(M,1),b=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(g,b){const M=p(b);M&&(M.isCubeTexture||M.mapping===Ya)?(c===void 0&&(c=new tt(new pn(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:Cs(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Di.copy(b.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(j_.makeRotationFromEuler(Di)),c.material.toneMapped=jt.getTransfer(M.colorSpace)!==te,(f!==M||m!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,f=M,m=M.version,u=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new tt(new nn(2,2),new Xe({name:"BackgroundMaterial",uniforms:Cs(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=jt.getTransfer(M.colorSpace)!==te,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||m!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,f=M,m=M.version,u=n.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function d(g,b){g.getRGB(oa,Vd(n)),e.buffers.color.setClear(oa.r,oa.g,oa.b,b,r)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,b=1){a.set(g),o=b,d(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,d(a,o)},render:_,addToRenderList:y,dispose:h}}function K_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,a=!1;function o(A,D,N,z,B){let H=!1;const V=m(A,z,N,D);r!==V&&(r=V,c(r.object)),H=p(A,z,N,B),H&&_(A,z,N,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,M(A,D,N,z),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return n.createVertexArray()}function c(A){return n.bindVertexArray(A)}function f(A){return n.deleteVertexArray(A)}function m(A,D,N,z){const B=z.wireframe===!0;let H=i[D.id];H===void 0&&(H={},i[D.id]=H);const V=A.isInstancedMesh===!0?A.id:0;let Q=H[V];Q===void 0&&(Q={},H[V]=Q);let K=Q[N.id];K===void 0&&(K={},Q[N.id]=K);let ut=K[B];return ut===void 0&&(ut=u(l()),K[B]=ut),ut}function u(A){const D=[],N=[],z=[];for(let B=0;B<e;B++)D[B]=0,N[B]=0,z[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:z,object:A,attributes:{},index:null}}function p(A,D,N,z){const B=r.attributes,H=D.attributes;let V=0;const Q=N.getAttributes();for(const K in Q)if(Q[K].location>=0){const _t=B[K];let pt=H[K];if(pt===void 0&&(K==="instanceMatrix"&&A.instanceMatrix&&(pt=A.instanceMatrix),K==="instanceColor"&&A.instanceColor&&(pt=A.instanceColor)),_t===void 0||_t.attribute!==pt||pt&&_t.data!==pt.data)return!0;V++}return r.attributesNum!==V||r.index!==z}function _(A,D,N,z){const B={},H=D.attributes;let V=0;const Q=N.getAttributes();for(const K in Q)if(Q[K].location>=0){let _t=H[K];_t===void 0&&(K==="instanceMatrix"&&A.instanceMatrix&&(_t=A.instanceMatrix),K==="instanceColor"&&A.instanceColor&&(_t=A.instanceColor));const pt={};pt.attribute=_t,_t&&_t.data&&(pt.data=_t.data),B[K]=pt,V++}r.attributes=B,r.attributesNum=V,r.index=z}function y(){const A=r.newAttributes;for(let D=0,N=A.length;D<N;D++)A[D]=0}function d(A){h(A,0)}function h(A,D){const N=r.newAttributes,z=r.enabledAttributes,B=r.attributeDivisors;N[A]=1,z[A]===0&&(n.enableVertexAttribArray(A),z[A]=1),B[A]!==D&&(n.vertexAttribDivisor(A,D),B[A]=D)}function g(){const A=r.newAttributes,D=r.enabledAttributes;for(let N=0,z=D.length;N<z;N++)D[N]!==A[N]&&(n.disableVertexAttribArray(N),D[N]=0)}function b(A,D,N,z,B,H,V){V===!0?n.vertexAttribIPointer(A,D,N,B,H):n.vertexAttribPointer(A,D,N,z,B,H)}function M(A,D,N,z){y();const B=z.attributes,H=N.getAttributes(),V=D.defaultAttributeValues;for(const Q in H){const K=H[Q];if(K.location>=0){let ut=B[Q];if(ut===void 0&&(Q==="instanceMatrix"&&A.instanceMatrix&&(ut=A.instanceMatrix),Q==="instanceColor"&&A.instanceColor&&(ut=A.instanceColor)),ut!==void 0){const _t=ut.normalized,pt=ut.itemSize,zt=t.get(ut);if(zt===void 0)continue;const _e=zt.buffer,ge=zt.type,j=zt.bytesPerElement,it=ge===n.INT||ge===n.UNSIGNED_INT||ut.gpuType===Pc;if(ut.isInterleavedBufferAttribute){const at=ut.data,Ft=at.stride,Rt=ut.offset;if(at.isInstancedInterleavedBuffer){for(let Lt=0;Lt<K.locationSize;Lt++)h(K.location+Lt,at.meshPerAttribute);A.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Lt=0;Lt<K.locationSize;Lt++)d(K.location+Lt);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let Lt=0;Lt<K.locationSize;Lt++)b(K.location+Lt,pt/K.locationSize,ge,_t,Ft*j,(Rt+pt/K.locationSize*Lt)*j,it)}else{if(ut.isInstancedBufferAttribute){for(let at=0;at<K.locationSize;at++)h(K.location+at,ut.meshPerAttribute);A.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let at=0;at<K.locationSize;at++)d(K.location+at);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let at=0;at<K.locationSize;at++)b(K.location+at,pt/K.locationSize,ge,_t,pt*j,pt/K.locationSize*at*j,it)}}else if(V!==void 0){const _t=V[Q];if(_t!==void 0)switch(_t.length){case 2:n.vertexAttrib2fv(K.location,_t);break;case 3:n.vertexAttrib3fv(K.location,_t);break;case 4:n.vertexAttrib4fv(K.location,_t);break;default:n.vertexAttrib1fv(K.location,_t)}}}}g()}function w(){S();for(const A in i){const D=i[A];for(const N in D){const z=D[N];for(const B in z){const H=z[B];for(const V in H)f(H[V].object),delete H[V];delete z[B]}}delete i[A]}}function T(A){if(i[A.id]===void 0)return;const D=i[A.id];for(const N in D){const z=D[N];for(const B in z){const H=z[B];for(const V in H)f(H[V].object),delete H[V];delete z[B]}}delete i[A.id]}function C(A){for(const D in i){const N=i[D];for(const z in N){const B=N[z];if(B[A.id]===void 0)continue;const H=B[A.id];for(const V in H)f(H[V].object),delete H[V];delete B[A.id]}}}function x(A){for(const D in i){const N=i[D],z=A.isInstancedMesh===!0?A.id:0,B=N[z];if(B!==void 0){for(const H in B){const V=B[H];for(const Q in V)f(V[Q].object),delete V[Q];delete B[H]}delete N[z],Object.keys(N).length===0&&delete i[D]}}}function S(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:S,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:d,disableUnusedAttributes:g}}function $_(n,t,e){let i;function s(c){i=c}function r(c,f){n.drawArrays(i,c,f),e.update(f,i,1)}function a(c,f,m){m!==0&&(n.drawArraysInstanced(i,c,f,m),e.update(f,i,m))}function o(c,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,m);let p=0;for(let _=0;_<m;_++)p+=f[_];e.update(p,i,1)}function l(c,f,m,u){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],f[_],u[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,u,0,m);let _=0;for(let y=0;y<m;y++)_+=f[y]*u[y];e.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function J_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==An&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const x=C===hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==ln&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Fn&&!x)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const f=l(c);f!==c&&(Pt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const m=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:d,maxAttributes:h,maxVertexUniforms:g,maxVaryings:b,maxFragmentUniforms:M,maxSamples:w,samples:T}}function Q_(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new Mi,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,u){const p=m.length!==0||u||i!==0||s;return s=u,i=m.length,p},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,u){e=f(m,u,0)},this.setState=function(m,u,p){const _=m.clippingPlanes,y=m.clipIntersection,d=m.clipShadows,h=n.get(m);if(!s||_===null||_.length===0||r&&!d)r?f(null):c();else{const g=r?0:i,b=g*4;let M=h.clippingState||null;l.value=M,M=f(_,u,b,p);for(let w=0;w!==b;++w)M[w]=e[w];h.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(m,u,p,_){const y=m!==null?m.length:0;let d=null;if(y!==0){if(d=l.value,_!==!0||d===null){const h=p+y*4,g=u.matrixWorldInverse;o.getNormalMatrix(g),(d===null||d.length<h)&&(d=new Float32Array(h));for(let b=0,M=p;b!==y;++b,M+=4)a.copy(m[b]).applyMatrix4(g,o),a.normal.toArray(d,M),d[M+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,d}}const bi=4,Lu=[.125,.215,.35,.446,.526,.582],Ni=20,tx=256,qs=new eo,Iu=new Tt;let ul=null,dl=0,fl=0,pl=!1;const ex=new L;class Uu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=ex}=r;ul=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ul,dl,fl),this._renderer.xr.enabled=pl,t.scissorTest=!1,ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gi||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ul=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:We,minFilter:We,generateMipmaps:!1,type:hn,format:An,colorSpace:As,depthBuffer:!1},s=Nu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nu(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=nx(r)),this._blurMaterial=sx(r,t,e),this._ggxMaterial=ix(r,t,e)}return s}_compileMaterial(t){const e=new tt(new Ut,t);this._renderer.compile(e,qs)}_sceneToCubeUV(t,e,i,s,r){const l=new Qe(90,1,e,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],m=this._renderer,u=m.autoClear,p=m.toneMapping;m.getClearColor(Iu),m.toneMapping=zn,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new tt(new pn,new fn({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,d=y.material;let h=!1;const g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,h=!0):(d.color.copy(Iu),h=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[b],r.y,r.z)):M===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[b]));const w=this._cubeSize;ds(s,M*w,b>2?w:0,w,w),m.setRenderTarget(s),h&&m.render(y,l),m.render(t,l)}m.toneMapping=p,m.autoClear=u,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Gi||t.mapping===Es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ds(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,qs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),m=Math.sqrt(c*c-f*f),u=0+c*1.25,p=m*u,{_lodMax:_}=this,y=this._sizeLods[i],d=3*y*(i>_-bi?i-_+bi:0),h=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=_-e,ds(r,d,h,3*y,2*y),s.setRenderTarget(r),s.render(o,qs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,ds(t,d,h,3*y,2*y),s.setRenderTarget(t),s.render(o,qs)}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&qt("blur direction must be either latitudinal or longitudinal!");const f=3,m=this._lodMeshes[s];m.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ni-1),y=r/_,d=isFinite(r)?1+Math.floor(f*y):Ni;d>Ni&&Pt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ni}`);const h=[];let g=0;for(let C=0;C<Ni;++C){const x=C/y,S=Math.exp(-x*x/2);h.push(S),C===0?g+=S:C<d&&(g+=2*S)}for(let C=0;C<h.length;C++)h[C]=h[C]/g;u.envMap.value=t.texture,u.samples.value=d,u.weights.value=h,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:b}=this;u.dTheta.value=_,u.mipInt.value=b-i;const M=this._sizeLods[s],w=3*M*(s>b-bi?s-b+bi:0),T=4*(this._cubeSize-M);ds(e,w,T,3*M,2*M),l.setRenderTarget(e),l.render(m,qs)}}function nx(n){const t=[],e=[],i=[];let s=n;const r=n-bi+1+Lu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-bi?l=Lu[a-n+bi-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),f=-c,m=1+c,u=[f,f,m,f,m,m,f,f,m,m,f,m],p=6,_=6,y=3,d=2,h=1,g=new Float32Array(y*_*p),b=new Float32Array(d*_*p),M=new Float32Array(h*_*p);for(let T=0;T<p;T++){const C=T%3*2/3-1,x=T>2?0:-1,S=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];g.set(S,y*_*T),b.set(u,d*_*T);const P=[T,T,T,T,T,T];M.set(P,h*_*T)}const w=new Ut;w.setAttribute("position",new Jt(g,y)),w.setAttribute("uv",new Jt(b,d)),w.setAttribute("faceIndex",new Jt(M,h)),i.push(new tt(w,null)),s>bi&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Nu(n,t,e){const i=new en(n,t,e);return i.texture.mapping=Ya,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ds(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function ix(n,t,e){return new Xe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:no(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function sx(n,t,e){const i=new Float32Array(Ni),s=new L(0,1,0);return new Xe({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:no(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Fu(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:no(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Ou(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:no(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function no(){return`

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
	`}class Xd extends en{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Bd(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pn(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:Cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ye,blending:Bn});r.uniforms.tEquirect.value=e;const a=new tt(s,r),o=e.minFilter;return e.minFilter===Bi&&(e.minFilter=We),new am(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}function rx(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){const p=u.mapping;if(p===Fo||p===Oo)if(t.has(u)){const _=t.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const y=new Xd(_.height);return y.fromEquirectangularTexture(n,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const p=u.mapping,_=p===Fo||p===Oo,y=p===Gi||p===Es;if(_||y){let d=e.get(u);const h=d!==void 0?d.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new Uu(n)),d=_?i.fromEquirectangular(u,d):i.fromCubemap(u,d),d.texture.pmremVersion=u.pmremVersion,e.set(u,d),d.texture;if(d!==void 0)return d.texture;{const g=u.image;return _&&g&&g.height>0||y&&g&&l(g)?(i===null&&(i=new Uu(n)),d=_?i.fromEquirectangular(u):i.fromCubemap(u),d.texture.pmremVersion=u.pmremVersion,e.set(u,d),u.addEventListener("dispose",f),d.texture):null}}}return u}function o(u,p){return p===Fo?u.mapping=Gi:p===Oo&&(u.mapping=Es),u}function l(u){let p=0;const _=6;for(let y=0;y<_;y++)u[y]!==void 0&&p++;return p===_}function c(u){const p=u.target;p.removeEventListener("dispose",c);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function f(u){const p=u.target;p.removeEventListener("dispose",f);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function m(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:m}}function ax(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Da("WebGLRenderer: "+i+" extension not supported."),s}}}function ox(n,t,e,i){const s={},r=new WeakMap;function a(m){const u=m.target;u.index!==null&&t.remove(u.index);for(const _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete s[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(m,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(m){const u=m.attributes;for(const p in u)t.update(u[p],n.ARRAY_BUFFER)}function c(m){const u=[],p=m.index,_=m.attributes.position;let y=0;if(_===void 0)return;if(p!==null){const g=p.array;y=p.version;for(let b=0,M=g.length;b<M;b+=3){const w=g[b+0],T=g[b+1],C=g[b+2];u.push(w,T,T,C,C,w)}}else{const g=_.array;y=_.version;for(let b=0,M=g.length/3-1;b<M;b+=3){const w=b+0,T=b+1,C=b+2;u.push(w,T,T,C,C,w)}}const d=new(_.count>=65535?Fd:Nd)(u,1);d.version=y;const h=r.get(m);h&&t.remove(h),r.set(m,d)}function f(m){const u=r.get(m);if(u){const p=m.index;p!==null&&u.version<p.version&&c(m)}else c(m);return r.get(m)}return{get:o,update:l,getWireframeAttribute:f}}function lx(n,t,e){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,p){n.drawElements(i,p,r,u*a),e.update(p,i,1)}function c(u,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,u*a,_),e.update(p,i,_))}function f(u,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,u,0,_);let d=0;for(let h=0;h<_;h++)d+=p[h];e.update(d,i,1)}function m(u,p,_,y){if(_===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<u.length;h++)c(u[h]/a,p[h],y[h]);else{d.multiDrawElementsInstancedWEBGL(i,p,0,r,u,0,y,0,_);let h=0;for(let g=0;g<_;g++)h+=p[g]*y[g];e.update(h,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=m}function cx(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:qt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function hx(n,t,e){const i=new WeakMap,s=new ve;function r(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=f!==void 0?f.length:0;let u=i.get(o);if(u===void 0||u.count!==m){let P=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var p=P;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),y===!0&&(M=2),d===!0&&(M=3);let w=o.attributes.position.count*M,T=1;w>t.maxTextureSize&&(T=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const C=new Float32Array(w*T*4*m),x=new Id(C,w,T,m);x.type=Fn,x.needsUpdate=!0;const S=M*4;for(let A=0;A<m;A++){const D=h[A],N=g[A],z=b[A],B=w*T*4*A;for(let H=0;H<D.count;H++){const V=H*S;_===!0&&(s.fromBufferAttribute(D,H),C[B+V+0]=s.x,C[B+V+1]=s.y,C[B+V+2]=s.z,C[B+V+3]=0),y===!0&&(s.fromBufferAttribute(N,H),C[B+V+4]=s.x,C[B+V+5]=s.y,C[B+V+6]=s.z,C[B+V+7]=0),d===!0&&(s.fromBufferAttribute(z,H),C[B+V+8]=s.x,C[B+V+9]=s.y,C[B+V+10]=s.z,C[B+V+11]=z.itemSize===4?s.w:1)}}u={count:m,texture:x,size:new ft(w,T)},i.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let _=0;for(let d=0;d<c.length;d++)_+=c[d];const y=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function ux(n,t,e,i,s){let r=new WeakMap;function a(c){const f=s.render.frame,m=c.geometry,u=t.get(c,m);if(r.get(u)!==f&&(t.update(u),r.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==f&&(p.update(),r.set(p,f))}return u}function o(){r=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:o}}const dx={[Ec]:"LINEAR_TONE_MAPPING",[Tc]:"REINHARD_TONE_MAPPING",[wc]:"CINEON_TONE_MAPPING",[Xa]:"ACES_FILMIC_TONE_MAPPING",[Cc]:"AGX_TONE_MAPPING",[Rc]:"NEUTRAL_TONE_MAPPING",[Ac]:"CUSTOM_TONE_MAPPING"};function fx(n,t,e,i,s){const r=new en(t,e,{type:n,depthBuffer:i,stencilBuffer:s}),a=new en(t,e,{type:hn,depthBuffer:!1,stencilBuffer:!1}),o=new Ut;o.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Zt([0,2,0,0,2,0],2));const l=new Gd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new tt(o,l),f=new eo(-1,1,1,-1,0,1);let m=null,u=null,p=!1,_,y=null,d=[],h=!1;this.setSize=function(g,b){r.setSize(g,b),a.setSize(g,b);for(let M=0;M<d.length;M++){const w=d[M];w.setSize&&w.setSize(g,b)}},this.setEffects=function(g){d=g,h=d.length>0&&d[0].isRenderPass===!0;const b=r.width,M=r.height;for(let w=0;w<d.length;w++){const T=d[w];T.setSize&&T.setSize(b,M)}},this.begin=function(g,b){if(p||g.toneMapping===zn&&d.length===0)return!1;if(y=b,b!==null){const M=b.width,w=b.height;(r.width!==M||r.height!==w)&&this.setSize(M,w)}return h===!1&&g.setRenderTarget(r),_=g.toneMapping,g.toneMapping=zn,!0},this.hasRenderPass=function(){return h},this.end=function(g,b){g.toneMapping=_,p=!0;let M=r,w=a;for(let T=0;T<d.length;T++){const C=d[T];if(C.enabled!==!1&&(C.render(g,w,M,b),C.needsSwap!==!1)){const x=M;M=w,w=x}}if(m!==g.outputColorSpace||u!==g.toneMapping){m=g.outputColorSpace,u=g.toneMapping,l.defines={},jt.getTransfer(m)===te&&(l.defines.SRGB_TRANSFER="");const T=dx[u];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,g.setRenderTarget(y),g.render(c,f),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Yd=new qe,pc=new or(1,1),qd=new Id,jd=new R0,Zd=new Bd,Bu=[],zu=[],Vu=new Float32Array(16),Gu=new Float32Array(9),ku=new Float32Array(4);function Ds(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Bu[s];if(r===void 0&&(r=new Float32Array(s),Bu[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Re(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Pe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function io(n,t){let e=zu[t];e===void 0&&(e=new Int32Array(t),zu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function px(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function mx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2fv(this.addr,t),Pe(e,t)}}function gx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;n.uniform3fv(this.addr,t),Pe(e,t)}}function _x(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4fv(this.addr,t),Pe(e,t)}}function xx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;ku.set(i),n.uniformMatrix2fv(this.addr,!1,ku),Pe(e,i)}}function vx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;Gu.set(i),n.uniformMatrix3fv(this.addr,!1,Gu),Pe(e,i)}}function Mx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;Vu.set(i),n.uniformMatrix4fv(this.addr,!1,Vu),Pe(e,i)}}function Sx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function yx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2iv(this.addr,t),Pe(e,t)}}function bx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3iv(this.addr,t),Pe(e,t)}}function Ex(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4iv(this.addr,t),Pe(e,t)}}function Tx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function wx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2uiv(this.addr,t),Pe(e,t)}}function Ax(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3uiv(this.addr,t),Pe(e,t)}}function Cx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4uiv(this.addr,t),Pe(e,t)}}function Rx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(pc.compareFunction=e.isReversedDepthBuffer()?Bc:Oc,r=pc):r=Yd,e.setTexture2D(t||r,s)}function Px(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||jd,s)}function Dx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Zd,s)}function Lx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||qd,s)}function Ix(n){switch(n){case 5126:return px;case 35664:return mx;case 35665:return gx;case 35666:return _x;case 35674:return xx;case 35675:return vx;case 35676:return Mx;case 5124:case 35670:return Sx;case 35667:case 35671:return yx;case 35668:case 35672:return bx;case 35669:case 35673:return Ex;case 5125:return Tx;case 36294:return wx;case 36295:return Ax;case 36296:return Cx;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Px;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Lx}}function Ux(n,t){n.uniform1fv(this.addr,t)}function Nx(n,t){const e=Ds(t,this.size,2);n.uniform2fv(this.addr,e)}function Fx(n,t){const e=Ds(t,this.size,3);n.uniform3fv(this.addr,e)}function Ox(n,t){const e=Ds(t,this.size,4);n.uniform4fv(this.addr,e)}function Bx(n,t){const e=Ds(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function zx(n,t){const e=Ds(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Vx(n,t){const e=Ds(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Gx(n,t){n.uniform1iv(this.addr,t)}function kx(n,t){n.uniform2iv(this.addr,t)}function Hx(n,t){n.uniform3iv(this.addr,t)}function Wx(n,t){n.uniform4iv(this.addr,t)}function Xx(n,t){n.uniform1uiv(this.addr,t)}function Yx(n,t){n.uniform2uiv(this.addr,t)}function qx(n,t){n.uniform3uiv(this.addr,t)}function jx(n,t){n.uniform4uiv(this.addr,t)}function Zx(n,t,e){const i=this.cache,s=t.length,r=io(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=pc:a=Yd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Kx(n,t,e){const i=this.cache,s=t.length,r=io(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||jd,r[a])}function $x(n,t,e){const i=this.cache,s=t.length,r=io(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Zd,r[a])}function Jx(n,t,e){const i=this.cache,s=t.length,r=io(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||qd,r[a])}function Qx(n){switch(n){case 5126:return Ux;case 35664:return Nx;case 35665:return Fx;case 35666:return Ox;case 35674:return Bx;case 35675:return zx;case 35676:return Vx;case 5124:case 35670:return Gx;case 35667:case 35671:return kx;case 35668:case 35672:return Hx;case 35669:case 35673:return Wx;case 5125:return Xx;case 36294:return Yx;case 36295:return qx;case 36296:return jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Zx;case 35679:case 36299:case 36307:return Kx;case 35680:case 36300:case 36308:case 36293:return $x;case 36289:case 36303:case 36311:case 36292:return Jx}}class tv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ix(e.type)}}class ev{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qx(e.type)}}class nv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const ml=/(\w+)(\])?(\[|\.)?/g;function Hu(n,t){n.seq.push(t),n.map[t.id]=t}function iv(n,t,e){const i=n.name,s=i.length;for(ml.lastIndex=0;;){const r=ml.exec(i),a=ml.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Hu(e,c===void 0?new tv(o,n,t):new ev(o,n,t));break}else{let m=e.map[o];m===void 0&&(m=new nv(o),Hu(e,m)),e=m}}}class ya{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);iv(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Wu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const sv=37297;let rv=0;function av(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Xu=new Ot;function ov(n){jt._getMatrix(Xu,jt.workingColorSpace,n);const t=`mat3( ${Xu.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(n)){case Ca:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return Pt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Yu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+av(n.getShaderSource(t),o)}else return r}function lv(n,t){const e=ov(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const cv={[Ec]:"Linear",[Tc]:"Reinhard",[wc]:"Cineon",[Xa]:"ACESFilmic",[Cc]:"AgX",[Rc]:"Neutral",[Ac]:"Custom"};function hv(n,t){const e=cv[t];return e===void 0?(Pt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const la=new L;function uv(){jt.getLuminanceCoefficients(la);const n=la.x.toFixed(4),t=la.y.toFixed(4),e=la.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function fv(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function pv(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Js(n){return n!==""}function qu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ju(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function mc(n){return n.replace(mv,_v)}const gv=new Map;function _v(n,t){let e=Vt[t];if(e===void 0){const i=gv.get(t);if(i!==void 0)e=Vt[i],Pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return mc(e)}const xv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zu(n){return n.replace(xv,vv)}function vv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ku(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}const Mv={[_a]:"SHADOWMAP_TYPE_PCF",[$s]:"SHADOWMAP_TYPE_VSM"};function Sv(n){return Mv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const yv={[Gi]:"ENVMAP_TYPE_CUBE",[Es]:"ENVMAP_TYPE_CUBE",[Ya]:"ENVMAP_TYPE_CUBE_UV"};function bv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":yv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Ev={[Es]:"ENVMAP_MODE_REFRACTION"};function Tv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Ev[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const wv={[bc]:"ENVMAP_BLENDING_MULTIPLY",[qp]:"ENVMAP_BLENDING_MIX",[jp]:"ENVMAP_BLENDING_ADD"};function Av(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":wv[n.combine]||"ENVMAP_BLENDING_NONE"}function Cv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Rv(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Sv(e),c=bv(e),f=Tv(e),m=Av(e),u=Cv(e),p=dv(e),_=fv(r),y=s.createProgram();let d,h,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Js).join(`
`),d.length>0&&(d+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Js).join(`
`),h.length>0&&(h+=`
`)):(d=[Ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),h=[Ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+m:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==zn?hv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,lv("linearToOutputTexel",e.outputColorSpace),uv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Js).join(`
`)),a=mc(a),a=qu(a,e),a=ju(a,e),o=mc(o),o=qu(o,e),o=ju(o,e),a=Zu(a),o=Zu(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,d=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,h=["#define varying in",e.glslVersion===Qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=g+d+a,M=g+h+o,w=Wu(s,s.VERTEX_SHADER,b),T=Wu(s,s.FRAGMENT_SHADER,M);s.attachShader(y,w),s.attachShader(y,T),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(A){if(n.debug.checkShaderErrors){const D=s.getProgramInfoLog(y)||"",N=s.getShaderInfoLog(w)||"",z=s.getShaderInfoLog(T)||"",B=D.trim(),H=N.trim(),V=z.trim();let Q=!0,K=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,w,T);else{const ut=Yu(s,w,"vertex"),_t=Yu(s,T,"fragment");qt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+B+`
`+ut+`
`+_t)}else B!==""?Pt("WebGLProgram: Program Info Log:",B):(H===""||V==="")&&(K=!1);K&&(A.diagnostics={runnable:Q,programLog:B,vertexShader:{log:H,prefix:d},fragmentShader:{log:V,prefix:h}})}s.deleteShader(w),s.deleteShader(T),x=new ya(s,y),S=pv(s,y)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(y,sv)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rv++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=T,this}let Pv=0;class Dv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Lv(t),e.set(t,i)),i}}class Lv{constructor(t){this.id=Pv++,this.code=t,this.usedTimes=0}}function Iv(n,t,e,i,s,r){const a=new Gc,o=new Dv,l=new Set,c=[],f=new Map,m=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,S,P,A,D){const N=A.fog,z=D.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,V=t.get(x.envMap||B,H),Q=V&&V.mapping===Ya?V.image.height:null,K=p[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Pt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const ut=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,_t=ut!==void 0?ut.length:0;let pt=0;z.morphAttributes.position!==void 0&&(pt=1),z.morphAttributes.normal!==void 0&&(pt=2),z.morphAttributes.color!==void 0&&(pt=3);let zt,_e,ge,j;if(K){const ne=Un[K];zt=ne.vertexShader,_e=ne.fragmentShader}else zt=x.vertexShader,_e=x.fragmentShader,o.update(x),ge=o.getVertexShaderID(x),j=o.getFragmentShaderID(x);const it=n.getRenderTarget(),at=n.state.buffers.depth.getReversed(),Ft=D.isInstancedMesh===!0,Rt=D.isBatchedMesh===!0,Lt=!!x.map,De=!!x.matcap,Kt=!!V,ee=!!x.aoMap,ce=!!x.lightMap,kt=!!x.bumpMap,Me=!!x.normalMap,I=!!x.displacementMap,Ee=!!x.emissiveMap,Qt=!!x.metalnessMap,de=!!x.roughnessMap,bt=x.anisotropy>0,R=x.clearcoat>0,v=x.dispersion>0,F=x.iridescence>0,q=x.sheen>0,Z=x.transmission>0,Y=bt&&!!x.anisotropyMap,xt=R&&!!x.clearcoatMap,st=R&&!!x.clearcoatNormalMap,Ct=R&&!!x.clearcoatRoughnessMap,Dt=F&&!!x.iridescenceMap,$=F&&!!x.iridescenceThicknessMap,et=q&&!!x.sheenColorMap,vt=q&&!!x.sheenRoughnessMap,St=!!x.specularMap,dt=!!x.specularColorMap,Ht=!!x.specularIntensityMap,U=Z&&!!x.transmissionMap,rt=Z&&!!x.thicknessMap,nt=!!x.gradientMap,gt=!!x.alphaMap,J=x.alphaTest>0,X=!!x.alphaHash,Mt=!!x.extensions;let It=zn;x.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(It=n.toneMapping);const fe={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:zt,fragmentShader:_e,defines:x.defines,customVertexShaderID:ge,customFragmentShaderID:j,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Rt,batchingColor:Rt&&D._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&D.instanceColor!==null,instancingMorph:Ft&&D.morphTexture!==null,outputColorSpace:it===null?n.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:As,alphaToCoverage:!!x.alphaToCoverage,map:Lt,matcap:De,envMap:Kt,envMapMode:Kt&&V.mapping,envMapCubeUVHeight:Q,aoMap:ee,lightMap:ce,bumpMap:kt,normalMap:Me,displacementMap:I,emissiveMap:Ee,normalMapObjectSpace:Me&&x.normalMapType===$p,normalMapTangentSpace:Me&&x.normalMapType===Fc,metalnessMap:Qt,roughnessMap:de,anisotropy:bt,anisotropyMap:Y,clearcoat:R,clearcoatMap:xt,clearcoatNormalMap:st,clearcoatRoughnessMap:Ct,dispersion:v,iridescence:F,iridescenceMap:Dt,iridescenceThicknessMap:$,sheen:q,sheenColorMap:et,sheenRoughnessMap:vt,specularMap:St,specularColorMap:dt,specularIntensityMap:Ht,transmission:Z,transmissionMap:U,thicknessMap:rt,gradientMap:nt,opaque:x.transparent===!1&&x.blending===Vi&&x.alphaToCoverage===!1,alphaMap:gt,alphaTest:J,alphaHash:X,combine:x.combine,mapUv:Lt&&_(x.map.channel),aoMapUv:ee&&_(x.aoMap.channel),lightMapUv:ce&&_(x.lightMap.channel),bumpMapUv:kt&&_(x.bumpMap.channel),normalMapUv:Me&&_(x.normalMap.channel),displacementMapUv:I&&_(x.displacementMap.channel),emissiveMapUv:Ee&&_(x.emissiveMap.channel),metalnessMapUv:Qt&&_(x.metalnessMap.channel),roughnessMapUv:de&&_(x.roughnessMap.channel),anisotropyMapUv:Y&&_(x.anisotropyMap.channel),clearcoatMapUv:xt&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:st&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:$&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:et&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(x.sheenRoughnessMap.channel),specularMapUv:St&&_(x.specularMap.channel),specularColorMapUv:dt&&_(x.specularColorMap.channel),specularIntensityMapUv:Ht&&_(x.specularIntensityMap.channel),transmissionMapUv:U&&_(x.transmissionMap.channel),thicknessMapUv:rt&&_(x.thicknessMap.channel),alphaMapUv:gt&&_(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Me||bt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&(Lt||gt),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&Me===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:at,skinning:D.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:pt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:It,decodeVideoTexture:Lt&&x.map.isVideoTexture===!0&&jt.getTransfer(x.map.colorSpace)===te,decodeVideoTextureEmissive:Ee&&x.emissiveMap.isVideoTexture===!0&&jt.getTransfer(x.emissiveMap.colorSpace)===te,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ye,flipSided:x.side===Ye,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Mt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&x.extensions.multiDraw===!0||Rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return fe.vertexUv1s=l.has(1),fe.vertexUv2s=l.has(2),fe.vertexUv3s=l.has(3),l.clear(),fe}function d(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)S.push(P),S.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(h(S,x),g(S,x),S.push(n.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function h(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function g(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),x.push(a.mask)}function b(x){const S=p[x.type];let P;if(S){const A=Un[S];P=lr.clone(A.uniforms)}else P=x.uniforms;return P}function M(x,S){let P=f.get(S);return P!==void 0?++P.usedTimes:(P=new Rv(n,S,x,s),c.push(P),f.set(S,P)),P}function w(x){if(--x.usedTimes===0){const S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),f.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function C(){o.dispose()}return{getParameters:y,getProgramCacheKey:d,getUniforms:b,acquireProgram:M,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:C}}function Uv(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Nv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function $u(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ju(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,_,y,d,h){let g=n[t];return g===void 0?(g={id:u.id,object:u,geometry:p,material:_,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:d,group:h},n[t]=g):(g.id=u.id,g.object=u,g.geometry=p,g.material=_,g.materialVariant=a(u),g.groupOrder=y,g.renderOrder=u.renderOrder,g.z=d,g.group=h),t++,g}function l(u,p,_,y,d,h){const g=o(u,p,_,y,d,h);_.transmission>0?i.push(g):_.transparent===!0?s.push(g):e.push(g)}function c(u,p,_,y,d,h){const g=o(u,p,_,y,d,h);_.transmission>0?i.unshift(g):_.transparent===!0?s.unshift(g):e.unshift(g)}function f(u,p){e.length>1&&e.sort(u||Nv),i.length>1&&i.sort(p||$u),s.length>1&&s.sort(p||$u)}function m(){for(let u=t,p=n.length;u<p;u++){const _=n[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:m,sort:f}}function Fv(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new Ju,n.set(i,[a])):s>=r.length?(a=new Ju,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Ov(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Tt};break;case"SpotLight":e={position:new L,direction:new L,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function Bv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let zv=0;function Vv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Gv(n){const t=new Ov,e=Bv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const s=new L,r=new me,a=new me;function o(c){let f=0,m=0,u=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,_=0,y=0,d=0,h=0,g=0,b=0,M=0,w=0,T=0,C=0;c.sort(Vv);for(let S=0,P=c.length;S<P;S++){const A=c[S],D=A.color,N=A.intensity,z=A.distance;let B=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===ws?B=A.shadow.map.texture:B=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)f+=D.r*N,m+=D.g*N,u+=D.b*N;else if(A.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(A.sh.coefficients[H],N);C++}else if(A.isDirectionalLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const V=A.shadow,Q=e.get(A);Q.shadowIntensity=V.intensity,Q.shadowBias=V.bias,Q.shadowNormalBias=V.normalBias,Q.shadowRadius=V.radius,Q.shadowMapSize=V.mapSize,i.directionalShadow[p]=Q,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=A.shadow.matrix,g++}i.directional[p]=H,p++}else if(A.isSpotLight){const H=t.get(A);H.position.setFromMatrixPosition(A.matrixWorld),H.color.copy(D).multiplyScalar(N),H.distance=z,H.coneCos=Math.cos(A.angle),H.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),H.decay=A.decay,i.spot[y]=H;const V=A.shadow;if(A.map&&(i.spotLightMap[w]=A.map,w++,V.updateMatrices(A),A.castShadow&&T++),i.spotLightMatrix[y]=V.matrix,A.castShadow){const Q=e.get(A);Q.shadowIntensity=V.intensity,Q.shadowBias=V.bias,Q.shadowNormalBias=V.normalBias,Q.shadowRadius=V.radius,Q.shadowMapSize=V.mapSize,i.spotShadow[y]=Q,i.spotShadowMap[y]=B,M++}y++}else if(A.isRectAreaLight){const H=t.get(A);H.color.copy(D).multiplyScalar(N),H.halfWidth.set(A.width*.5,0,0),H.halfHeight.set(0,A.height*.5,0),i.rectArea[d]=H,d++}else if(A.isPointLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),H.distance=A.distance,H.decay=A.decay,A.castShadow){const V=A.shadow,Q=e.get(A);Q.shadowIntensity=V.intensity,Q.shadowBias=V.bias,Q.shadowNormalBias=V.normalBias,Q.shadowRadius=V.radius,Q.shadowMapSize=V.mapSize,Q.shadowCameraNear=V.camera.near,Q.shadowCameraFar=V.camera.far,i.pointShadow[_]=Q,i.pointShadowMap[_]=B,i.pointShadowMatrix[_]=A.shadow.matrix,b++}i.point[_]=H,_++}else if(A.isHemisphereLight){const H=t.get(A);H.skyColor.copy(A.color).multiplyScalar(N),H.groundColor.copy(A.groundColor).multiplyScalar(N),i.hemi[h]=H,h++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=u;const x=i.hash;(x.directionalLength!==p||x.pointLength!==_||x.spotLength!==y||x.rectAreaLength!==d||x.hemiLength!==h||x.numDirectionalShadows!==g||x.numPointShadows!==b||x.numSpotShadows!==M||x.numSpotMaps!==w||x.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=d,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,x.directionalLength=p,x.pointLength=_,x.spotLength=y,x.rectAreaLength=d,x.hemiLength=h,x.numDirectionalShadows=g,x.numPointShadows=b,x.numSpotShadows=M,x.numSpotMaps=w,x.numLightProbes=C,i.version=zv++)}function l(c,f){let m=0,u=0,p=0,_=0,y=0;const d=f.matrixWorldInverse;for(let h=0,g=c.length;h<g;h++){const b=c[h];if(b.isDirectionalLight){const M=i.directional[m];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),m++}else if(b.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),p++}else if(b.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(d),a.identity(),r.copy(b.matrixWorld),r.premultiply(d),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(d),u++}else if(b.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(d),y++}}}return{setup:o,setupView:l,state:i}}function Qu(n){const t=new Gv(n),e=[],i=[];function s(f){c.camera=f,e.length=0,i.length=0}function r(f){e.push(f)}function a(f){i.push(f)}function o(){t.setup(e)}function l(f){t.setupView(e,f)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function kv(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Qu(n),t.set(s,[o])):r>=a.length?(o=new Qu(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const Hv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wv=`uniform sampler2D shadow_pass;
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
}`,Xv=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Yv=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],td=new me,js=new L,gl=new L;function qv(n,t,e){let i=new Wc;const s=new ft,r=new ft,a=new ve,o=new tm,l=new em,c={},f=e.maxTextureSize,m={[Gn]:Ye,[Ye]:Gn,[ye]:ye},u=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Hv,fragmentShader:Wv}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const _=new Ut;_.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new tt(_,u),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_a;let h=this.type;this.render=function(T,C,x){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||T.length===0)return;this.type===bd&&(Pt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=_a);const S=n.getRenderTarget(),P=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Bn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const N=h!==this.type;N&&C.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(B=>B.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,B=T.length;z<B;z++){const H=T[z],V=H.shadow;if(V===void 0){Pt("WebGLShadowMap:",H,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const Q=V.getFrameExtents();s.multiply(Q),r.copy(V.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/Q.x),s.x=r.x*Q.x,V.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/Q.y),s.y=r.y*Q.y,V.mapSize.y=r.y));const K=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=K,V.map===null||N===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===$s){if(H.isPointLight){Pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new en(s.x,s.y,{format:ws,type:hn,minFilter:We,magFilter:We,generateMipmaps:!1}),V.map.texture.name=H.name+".shadowMap",V.map.depthTexture=new or(s.x,s.y,Fn),V.map.depthTexture.name=H.name+".shadowMapDepth",V.map.depthTexture.format=li,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=ze,V.map.depthTexture.magFilter=ze}else H.isPointLight?(V.map=new Xd(s.x),V.map.depthTexture=new Z0(s.x,kn)):(V.map=new en(s.x,s.y),V.map.depthTexture=new or(s.x,s.y,kn)),V.map.depthTexture.name=H.name+".shadowMap",V.map.depthTexture.format=li,this.type===_a?(V.map.depthTexture.compareFunction=K?Bc:Oc,V.map.depthTexture.minFilter=We,V.map.depthTexture.magFilter=We):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=ze,V.map.depthTexture.magFilter=ze);V.camera.updateProjectionMatrix()}const ut=V.map.isWebGLCubeRenderTarget?6:1;for(let _t=0;_t<ut;_t++){if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,_t),n.clear();else{_t===0&&(n.setRenderTarget(V.map),n.clear());const pt=V.getViewport(_t);a.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),D.viewport(a)}if(H.isPointLight){const pt=V.camera,zt=V.matrix,_e=H.distance||pt.far;_e!==pt.far&&(pt.far=_e,pt.updateProjectionMatrix()),js.setFromMatrixPosition(H.matrixWorld),pt.position.copy(js),gl.copy(pt.position),gl.add(Xv[_t]),pt.up.copy(Yv[_t]),pt.lookAt(gl),pt.updateMatrixWorld(),zt.makeTranslation(-js.x,-js.y,-js.z),td.multiplyMatrices(pt.projectionMatrix,pt.matrixWorldInverse),V._frustum.setFromProjectionMatrix(td,pt.coordinateSystem,pt.reversedDepth)}else V.updateMatrices(H);i=V.getFrustum(),M(C,x,V.camera,H,this.type)}V.isPointLightShadow!==!0&&this.type===$s&&g(V,x),V.needsUpdate=!1}h=this.type,d.needsUpdate=!1,n.setRenderTarget(S,P,A)};function g(T,C){const x=t.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new en(s.x,s.y,{format:ws,type:hn})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(C,null,x,u,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(C,null,x,p,y,null)}function b(T,C,x,S){let P=null;const A=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)P=A;else if(P=x.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const D=P.uuid,N=C.uuid;let z=c[D];z===void 0&&(z={},c[D]=z);let B=z[N];B===void 0&&(B=P.clone(),z[N]=B,C.addEventListener("dispose",w)),P=B}if(P.visible=C.visible,P.wireframe=C.wireframe,S===$s?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:m[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const D=n.properties.get(P);D.light=x}return P}function M(T,C,x,S,P){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===$s)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const N=t.update(T),z=T.material;if(Array.isArray(z)){const B=N.groups;for(let H=0,V=B.length;H<V;H++){const Q=B[H],K=z[Q.materialIndex];if(K&&K.visible){const ut=b(T,K,S,P);T.onBeforeShadow(n,T,C,x,N,ut,Q),n.renderBufferDirect(x,null,N,ut,T,Q),T.onAfterShadow(n,T,C,x,N,ut,Q)}}}else if(z.visible){const B=b(T,z,S,P);T.onBeforeShadow(n,T,C,x,N,B,null),n.renderBufferDirect(x,null,N,B,T,null),T.onAfterShadow(n,T,C,x,N,B,null)}}const D=T.children;for(let N=0,z=D.length;N<z;N++)M(D[N],C,x,S,P)}function w(T){T.target.removeEventListener("dispose",w);for(const x in c){const S=c[x],P=T.target.uuid;P in S&&(S[P].dispose(),delete S[P])}}}function jv(n,t){function e(){let U=!1;const rt=new ve;let nt=null;const gt=new ve(0,0,0,0);return{setMask:function(J){nt!==J&&!U&&(n.colorMask(J,J,J,J),nt=J)},setLocked:function(J){U=J},setClear:function(J,X,Mt,It,fe){fe===!0&&(J*=It,X*=It,Mt*=It),rt.set(J,X,Mt,It),gt.equals(rt)===!1&&(n.clearColor(J,X,Mt,It),gt.copy(rt))},reset:function(){U=!1,nt=null,gt.set(-1,0,0,0)}}}function i(){let U=!1,rt=!1,nt=null,gt=null,J=null;return{setReversed:function(X){if(rt!==X){const Mt=t.get("EXT_clip_control");X?Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.ZERO_TO_ONE_EXT):Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.NEGATIVE_ONE_TO_ONE_EXT),rt=X;const It=J;J=null,this.setClear(It)}},getReversed:function(){return rt},setTest:function(X){X?it(n.DEPTH_TEST):at(n.DEPTH_TEST)},setMask:function(X){nt!==X&&!U&&(n.depthMask(X),nt=X)},setFunc:function(X){if(rt&&(X=o0[X]),gt!==X){switch(X){case Tl:n.depthFunc(n.NEVER);break;case wl:n.depthFunc(n.ALWAYS);break;case Al:n.depthFunc(n.LESS);break;case bs:n.depthFunc(n.LEQUAL);break;case Cl:n.depthFunc(n.EQUAL);break;case Rl:n.depthFunc(n.GEQUAL);break;case Pl:n.depthFunc(n.GREATER);break;case Dl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}gt=X}},setLocked:function(X){U=X},setClear:function(X){J!==X&&(J=X,rt&&(X=1-X),n.clearDepth(X))},reset:function(){U=!1,nt=null,gt=null,J=null,rt=!1}}}function s(){let U=!1,rt=null,nt=null,gt=null,J=null,X=null,Mt=null,It=null,fe=null;return{setTest:function(ne){U||(ne?it(n.STENCIL_TEST):at(n.STENCIL_TEST))},setMask:function(ne){rt!==ne&&!U&&(n.stencilMask(ne),rt=ne)},setFunc:function(ne,Yn,qn){(nt!==ne||gt!==Yn||J!==qn)&&(n.stencilFunc(ne,Yn,qn),nt=ne,gt=Yn,J=qn)},setOp:function(ne,Yn,qn){(X!==ne||Mt!==Yn||It!==qn)&&(n.stencilOp(ne,Yn,qn),X=ne,Mt=Yn,It=qn)},setLocked:function(ne){U=ne},setClear:function(ne){fe!==ne&&(n.clearStencil(ne),fe=ne)},reset:function(){U=!1,rt=null,nt=null,gt=null,J=null,X=null,Mt=null,It=null,fe=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let f={},m={},u=new WeakMap,p=[],_=null,y=!1,d=null,h=null,g=null,b=null,M=null,w=null,T=null,C=new Tt(0,0,0),x=0,S=!1,P=null,A=null,D=null,N=null,z=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,V=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Q)[1]),H=V>=1):Q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),H=V>=2);let K=null,ut={};const _t=n.getParameter(n.SCISSOR_BOX),pt=n.getParameter(n.VIEWPORT),zt=new ve().fromArray(_t),_e=new ve().fromArray(pt);function ge(U,rt,nt,gt){const J=new Uint8Array(4),X=n.createTexture();n.bindTexture(U,X),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Mt=0;Mt<nt;Mt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(rt,0,n.RGBA,1,1,gt,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(rt+Mt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return X}const j={};j[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(n.DEPTH_TEST),a.setFunc(bs),kt(!1),Me(Zh),it(n.CULL_FACE),ee(Bn);function it(U){f[U]!==!0&&(n.enable(U),f[U]=!0)}function at(U){f[U]!==!1&&(n.disable(U),f[U]=!1)}function Ft(U,rt){return m[U]!==rt?(n.bindFramebuffer(U,rt),m[U]=rt,U===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=rt),U===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=rt),!0):!1}function Rt(U,rt){let nt=p,gt=!1;if(U){nt=u.get(rt),nt===void 0&&(nt=[],u.set(rt,nt));const J=U.textures;if(nt.length!==J.length||nt[0]!==n.COLOR_ATTACHMENT0){for(let X=0,Mt=J.length;X<Mt;X++)nt[X]=n.COLOR_ATTACHMENT0+X;nt.length=J.length,gt=!0}}else nt[0]!==n.BACK&&(nt[0]=n.BACK,gt=!0);gt&&n.drawBuffers(nt)}function Lt(U){return _!==U?(n.useProgram(U),_=U,!0):!1}const De={[Ui]:n.FUNC_ADD,[Pp]:n.FUNC_SUBTRACT,[Dp]:n.FUNC_REVERSE_SUBTRACT};De[Lp]=n.MIN,De[Ip]=n.MAX;const Kt={[Up]:n.ZERO,[Np]:n.ONE,[Fp]:n.SRC_COLOR,[bl]:n.SRC_ALPHA,[kp]:n.SRC_ALPHA_SATURATE,[Vp]:n.DST_COLOR,[Bp]:n.DST_ALPHA,[Op]:n.ONE_MINUS_SRC_COLOR,[El]:n.ONE_MINUS_SRC_ALPHA,[Gp]:n.ONE_MINUS_DST_COLOR,[zp]:n.ONE_MINUS_DST_ALPHA,[Hp]:n.CONSTANT_COLOR,[Wp]:n.ONE_MINUS_CONSTANT_COLOR,[Xp]:n.CONSTANT_ALPHA,[Yp]:n.ONE_MINUS_CONSTANT_ALPHA};function ee(U,rt,nt,gt,J,X,Mt,It,fe,ne){if(U===Bn){y===!0&&(at(n.BLEND),y=!1);return}if(y===!1&&(it(n.BLEND),y=!0),U!==Rp){if(U!==d||ne!==S){if((h!==Ui||M!==Ui)&&(n.blendEquation(n.FUNC_ADD),h=Ui,M=Ui),ne)switch(U){case Vi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oi:n.blendFunc(n.ONE,n.ONE);break;case Kh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $h:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:qt("WebGLState: Invalid blending: ",U);break}else switch(U){case Vi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Kh:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $h:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",U);break}g=null,b=null,w=null,T=null,C.set(0,0,0),x=0,d=U,S=ne}return}J=J||rt,X=X||nt,Mt=Mt||gt,(rt!==h||J!==M)&&(n.blendEquationSeparate(De[rt],De[J]),h=rt,M=J),(nt!==g||gt!==b||X!==w||Mt!==T)&&(n.blendFuncSeparate(Kt[nt],Kt[gt],Kt[X],Kt[Mt]),g=nt,b=gt,w=X,T=Mt),(It.equals(C)===!1||fe!==x)&&(n.blendColor(It.r,It.g,It.b,fe),C.copy(It),x=fe),d=U,S=!1}function ce(U,rt){U.side===ye?at(n.CULL_FACE):it(n.CULL_FACE);let nt=U.side===Ye;rt&&(nt=!nt),kt(nt),U.blending===Vi&&U.transparent===!1?ee(Bn):ee(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const gt=U.stencilWrite;o.setTest(gt),gt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ee(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?it(n.SAMPLE_ALPHA_TO_COVERAGE):at(n.SAMPLE_ALPHA_TO_COVERAGE)}function kt(U){P!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),P=U)}function Me(U){U!==Ap?(it(n.CULL_FACE),U!==A&&(U===Zh?n.cullFace(n.BACK):U===Cp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):at(n.CULL_FACE),A=U}function I(U){U!==D&&(H&&n.lineWidth(U),D=U)}function Ee(U,rt,nt){U?(it(n.POLYGON_OFFSET_FILL),(N!==rt||z!==nt)&&(N=rt,z=nt,a.getReversed()&&(rt=-rt),n.polygonOffset(rt,nt))):at(n.POLYGON_OFFSET_FILL)}function Qt(U){U?it(n.SCISSOR_TEST):at(n.SCISSOR_TEST)}function de(U){U===void 0&&(U=n.TEXTURE0+B-1),K!==U&&(n.activeTexture(U),K=U)}function bt(U,rt,nt){nt===void 0&&(K===null?nt=n.TEXTURE0+B-1:nt=K);let gt=ut[nt];gt===void 0&&(gt={type:void 0,texture:void 0},ut[nt]=gt),(gt.type!==U||gt.texture!==rt)&&(K!==nt&&(n.activeTexture(nt),K=nt),n.bindTexture(U,rt||j[U]),gt.type=U,gt.texture=rt)}function R(){const U=ut[K];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(U){qt("WebGLState:",U)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(U){qt("WebGLState:",U)}}function q(){try{n.texSubImage2D(...arguments)}catch(U){qt("WebGLState:",U)}}function Z(){try{n.texSubImage3D(...arguments)}catch(U){qt("WebGLState:",U)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(U){qt("WebGLState:",U)}}function xt(){try{n.compressedTexSubImage3D(...arguments)}catch(U){qt("WebGLState:",U)}}function st(){try{n.texStorage2D(...arguments)}catch(U){qt("WebGLState:",U)}}function Ct(){try{n.texStorage3D(...arguments)}catch(U){qt("WebGLState:",U)}}function Dt(){try{n.texImage2D(...arguments)}catch(U){qt("WebGLState:",U)}}function $(){try{n.texImage3D(...arguments)}catch(U){qt("WebGLState:",U)}}function et(U){zt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),zt.copy(U))}function vt(U){_e.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),_e.copy(U))}function St(U,rt){let nt=c.get(rt);nt===void 0&&(nt=new WeakMap,c.set(rt,nt));let gt=nt.get(U);gt===void 0&&(gt=n.getUniformBlockIndex(rt,U.name),nt.set(U,gt))}function dt(U,rt){const gt=c.get(rt).get(U);l.get(rt)!==gt&&(n.uniformBlockBinding(rt,gt,U.__bindingPointIndex),l.set(rt,gt))}function Ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},K=null,ut={},m={},u=new WeakMap,p=[],_=null,y=!1,d=null,h=null,g=null,b=null,M=null,w=null,T=null,C=new Tt(0,0,0),x=0,S=!1,P=null,A=null,D=null,N=null,z=null,zt.set(0,0,n.canvas.width,n.canvas.height),_e.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:at,bindFramebuffer:Ft,drawBuffers:Rt,useProgram:Lt,setBlending:ee,setMaterial:ce,setFlipSided:kt,setCullFace:Me,setLineWidth:I,setPolygonOffset:Ee,setScissorTest:Qt,activeTexture:de,bindTexture:bt,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:Dt,texImage3D:$,updateUBOMapping:St,uniformBlockBinding:dt,texStorage2D:st,texStorage3D:Ct,texSubImage2D:q,texSubImage3D:Z,compressedTexSubImage2D:Y,compressedTexSubImage3D:xt,scissor:et,viewport:vt,reset:Ht}}function Zv(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,f=new WeakMap;let m;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,v){return p?new OffscreenCanvas(R,v):Ra("canvas")}function y(R,v,F){let q=1;const Z=bt(R);if((Z.width>F||Z.height>F)&&(q=F/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor(q*Z.width),xt=Math.floor(q*Z.height);m===void 0&&(m=_(Y,xt));const st=v?_(Y,xt):m;return st.width=Y,st.height=xt,st.getContext("2d").drawImage(R,0,0,Y,xt),Pt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+xt+")."),st}else return"data"in R&&Pt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function d(R){return R.generateMipmaps}function h(R){n.generateMipmap(R)}function g(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(R,v,F,q,Z=!1){if(R!==null){if(n[R]!==void 0)return n[R];Pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=v;if(v===n.RED&&(F===n.FLOAT&&(Y=n.R32F),F===n.HALF_FLOAT&&(Y=n.R16F),F===n.UNSIGNED_BYTE&&(Y=n.R8)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.R8UI),F===n.UNSIGNED_SHORT&&(Y=n.R16UI),F===n.UNSIGNED_INT&&(Y=n.R32UI),F===n.BYTE&&(Y=n.R8I),F===n.SHORT&&(Y=n.R16I),F===n.INT&&(Y=n.R32I)),v===n.RG&&(F===n.FLOAT&&(Y=n.RG32F),F===n.HALF_FLOAT&&(Y=n.RG16F),F===n.UNSIGNED_BYTE&&(Y=n.RG8)),v===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RG8UI),F===n.UNSIGNED_SHORT&&(Y=n.RG16UI),F===n.UNSIGNED_INT&&(Y=n.RG32UI),F===n.BYTE&&(Y=n.RG8I),F===n.SHORT&&(Y=n.RG16I),F===n.INT&&(Y=n.RG32I)),v===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),F===n.UNSIGNED_INT&&(Y=n.RGB32UI),F===n.BYTE&&(Y=n.RGB8I),F===n.SHORT&&(Y=n.RGB16I),F===n.INT&&(Y=n.RGB32I)),v===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),F===n.UNSIGNED_INT&&(Y=n.RGBA32UI),F===n.BYTE&&(Y=n.RGBA8I),F===n.SHORT&&(Y=n.RGBA16I),F===n.INT&&(Y=n.RGBA32I)),v===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),v===n.RGBA){const xt=Z?Ca:jt.getTransfer(q);F===n.FLOAT&&(Y=n.RGBA32F),F===n.HALF_FLOAT&&(Y=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Y=xt===te?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function M(R,v){let F;return R?v===null||v===kn||v===sr?F=n.DEPTH24_STENCIL8:v===Fn?F=n.DEPTH32F_STENCIL8:v===ir&&(F=n.DEPTH24_STENCIL8,Pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===kn||v===sr?F=n.DEPTH_COMPONENT24:v===Fn?F=n.DEPTH_COMPONENT32F:v===ir&&(F=n.DEPTH_COMPONENT16),F}function w(R,v){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==ze&&R.minFilter!==We?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function T(R){const v=R.target;v.removeEventListener("dispose",T),x(v),v.isVideoTexture&&f.delete(v)}function C(R){const v=R.target;v.removeEventListener("dispose",C),P(v)}function x(R){const v=i.get(R);if(v.__webglInit===void 0)return;const F=R.source,q=u.get(F);if(q){const Z=q[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(R),Object.keys(q).length===0&&u.delete(F)}i.remove(R)}function S(R){const v=i.get(R);n.deleteTexture(v.__webglTexture);const F=R.source,q=u.get(F);delete q[v.__cacheKey],a.memory.textures--}function P(R){const v=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let Z=0;Z<v.__webglFramebuffer[q].length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[q][Z]);else n.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)n.deleteFramebuffer(v.__webglFramebuffer[q]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=R.textures;for(let q=0,Z=F.length;q<Z;q++){const Y=i.get(F[q]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(F[q])}i.remove(R)}let A=0;function D(){A=0}function N(){const R=A;return R>=s.maxTextures&&Pt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),A+=1,R}function z(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function B(R,v){const F=i.get(R);if(R.isVideoTexture&&Qt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&F.__version!==R.version){const q=R.image;if(q===null)Pt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Pt("WebGLRenderer: Texture marked for update but image is incomplete");else{j(F,R,v);return}}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function H(R,v){const F=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){j(F,R,v);return}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function V(R,v){const F=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){j(F,R,v);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function Q(R,v){const F=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&F.__version!==R.version){it(F,R,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}const K={[Ts]:n.REPEAT,[si]:n.CLAMP_TO_EDGE,[Ll]:n.MIRRORED_REPEAT},ut={[ze]:n.NEAREST,[Zp]:n.NEAREST_MIPMAP_NEAREST,[Pr]:n.NEAREST_MIPMAP_LINEAR,[We]:n.LINEAR,[Bo]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},_t={[Jp]:n.NEVER,[i0]:n.ALWAYS,[Qp]:n.LESS,[Oc]:n.LEQUAL,[t0]:n.EQUAL,[Bc]:n.GEQUAL,[e0]:n.GREATER,[n0]:n.NOTEQUAL};function pt(R,v){if(v.type===Fn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===We||v.magFilter===Bo||v.magFilter===Pr||v.magFilter===Bi||v.minFilter===We||v.minFilter===Bo||v.minFilter===Pr||v.minFilter===Bi)&&Pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,K[v.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,K[v.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,K[v.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ut[v.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ut[v.minFilter]),v.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,_t[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ze||v.minFilter!==Pr&&v.minFilter!==Bi||v.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function zt(R,v){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",T));const q=v.source;let Z=u.get(q);Z===void 0&&(Z={},u.set(q,Z));const Y=z(v);if(Y!==R.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[Y].usedTimes++;const xt=Z[R.__cacheKey];xt!==void 0&&(Z[R.__cacheKey].usedTimes--,xt.usedTimes===0&&S(v)),R.__cacheKey=Y,R.__webglTexture=Z[Y].texture}return F}function _e(R,v,F){return Math.floor(Math.floor(R/F)/v)}function ge(R,v,F,q){const Y=R.updateRanges;if(Y.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,F,q,v.data);else{Y.sort(($,et)=>$.start-et.start);let xt=0;for(let $=1;$<Y.length;$++){const et=Y[xt],vt=Y[$],St=et.start+et.count,dt=_e(vt.start,v.width,4),Ht=_e(et.start,v.width,4);vt.start<=St+1&&dt===Ht&&_e(vt.start+vt.count-1,v.width,4)===dt?et.count=Math.max(et.count,vt.start+vt.count-et.start):(++xt,Y[xt]=vt)}Y.length=xt+1;const st=n.getParameter(n.UNPACK_ROW_LENGTH),Ct=n.getParameter(n.UNPACK_SKIP_PIXELS),Dt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let $=0,et=Y.length;$<et;$++){const vt=Y[$],St=Math.floor(vt.start/4),dt=Math.ceil(vt.count/4),Ht=St%v.width,U=Math.floor(St/v.width),rt=dt,nt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ht),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),e.texSubImage2D(n.TEXTURE_2D,0,Ht,U,rt,nt,F,q,v.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,st),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ct),n.pixelStorei(n.UNPACK_SKIP_ROWS,Dt)}}function j(R,v,F){let q=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=n.TEXTURE_3D);const Z=zt(R,v),Y=v.source;e.bindTexture(q,R.__webglTexture,n.TEXTURE0+F);const xt=i.get(Y);if(Y.version!==xt.__version||Z===!0){e.activeTexture(n.TEXTURE0+F);const st=jt.getPrimaries(jt.workingColorSpace),Ct=v.colorSpace===Si?null:jt.getPrimaries(v.colorSpace),Dt=v.colorSpace===Si||st===Ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let $=y(v.image,!1,s.maxTextureSize);$=de(v,$);const et=r.convert(v.format,v.colorSpace),vt=r.convert(v.type);let St=b(v.internalFormat,et,vt,v.colorSpace,v.isVideoTexture);pt(q,v);let dt;const Ht=v.mipmaps,U=v.isVideoTexture!==!0,rt=xt.__version===void 0||Z===!0,nt=Y.dataReady,gt=w(v,$);if(v.isDepthTexture)St=M(v.format===zi,v.type),rt&&(U?e.texStorage2D(n.TEXTURE_2D,1,St,$.width,$.height):e.texImage2D(n.TEXTURE_2D,0,St,$.width,$.height,0,et,vt,null));else if(v.isDataTexture)if(Ht.length>0){U&&rt&&e.texStorage2D(n.TEXTURE_2D,gt,St,Ht[0].width,Ht[0].height);for(let J=0,X=Ht.length;J<X;J++)dt=Ht[J],U?nt&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,dt.width,dt.height,et,vt,dt.data):e.texImage2D(n.TEXTURE_2D,J,St,dt.width,dt.height,0,et,vt,dt.data);v.generateMipmaps=!1}else U?(rt&&e.texStorage2D(n.TEXTURE_2D,gt,St,$.width,$.height),nt&&ge(v,$,et,vt)):e.texImage2D(n.TEXTURE_2D,0,St,$.width,$.height,0,et,vt,$.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){U&&rt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,St,Ht[0].width,Ht[0].height,$.depth);for(let J=0,X=Ht.length;J<X;J++)if(dt=Ht[J],v.format!==An)if(et!==null)if(U){if(nt)if(v.layerUpdates.size>0){const Mt=Du(dt.width,dt.height,v.format,v.type);for(const It of v.layerUpdates){const fe=dt.data.subarray(It*Mt/dt.data.BYTES_PER_ELEMENT,(It+1)*Mt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,It,dt.width,dt.height,1,et,fe)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,dt.width,dt.height,$.depth,et,dt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,St,dt.width,dt.height,$.depth,0,dt.data,0,0);else Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?nt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,dt.width,dt.height,$.depth,et,vt,dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,J,St,dt.width,dt.height,$.depth,0,et,vt,dt.data)}else{U&&rt&&e.texStorage2D(n.TEXTURE_2D,gt,St,Ht[0].width,Ht[0].height);for(let J=0,X=Ht.length;J<X;J++)dt=Ht[J],v.format!==An?et!==null?U?nt&&e.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,dt.width,dt.height,et,dt.data):e.compressedTexImage2D(n.TEXTURE_2D,J,St,dt.width,dt.height,0,dt.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?nt&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,dt.width,dt.height,et,vt,dt.data):e.texImage2D(n.TEXTURE_2D,J,St,dt.width,dt.height,0,et,vt,dt.data)}else if(v.isDataArrayTexture)if(U){if(rt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,St,$.width,$.height,$.depth),nt)if(v.layerUpdates.size>0){const J=Du($.width,$.height,v.format,v.type);for(const X of v.layerUpdates){const Mt=$.data.subarray(X*J/$.data.BYTES_PER_ELEMENT,(X+1)*J/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,X,$.width,$.height,1,et,vt,Mt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,et,vt,$.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,St,$.width,$.height,$.depth,0,et,vt,$.data);else if(v.isData3DTexture)U?(rt&&e.texStorage3D(n.TEXTURE_3D,gt,St,$.width,$.height,$.depth),nt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,et,vt,$.data)):e.texImage3D(n.TEXTURE_3D,0,St,$.width,$.height,$.depth,0,et,vt,$.data);else if(v.isFramebufferTexture){if(rt)if(U)e.texStorage2D(n.TEXTURE_2D,gt,St,$.width,$.height);else{let J=$.width,X=$.height;for(let Mt=0;Mt<gt;Mt++)e.texImage2D(n.TEXTURE_2D,Mt,St,J,X,0,et,vt,null),J>>=1,X>>=1}}else if(Ht.length>0){if(U&&rt){const J=bt(Ht[0]);e.texStorage2D(n.TEXTURE_2D,gt,St,J.width,J.height)}for(let J=0,X=Ht.length;J<X;J++)dt=Ht[J],U?nt&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,et,vt,dt):e.texImage2D(n.TEXTURE_2D,J,St,et,vt,dt);v.generateMipmaps=!1}else if(U){if(rt){const J=bt($);e.texStorage2D(n.TEXTURE_2D,gt,St,J.width,J.height)}nt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,et,vt,$)}else e.texImage2D(n.TEXTURE_2D,0,St,et,vt,$);d(v)&&h(q),xt.__version=Y.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function it(R,v,F){if(v.image.length!==6)return;const q=zt(R,v),Z=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+F);const Y=i.get(Z);if(Z.version!==Y.__version||q===!0){e.activeTexture(n.TEXTURE0+F);const xt=jt.getPrimaries(jt.workingColorSpace),st=v.colorSpace===Si?null:jt.getPrimaries(v.colorSpace),Ct=v.colorSpace===Si||xt===st?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Dt=v.isCompressedTexture||v.image[0].isCompressedTexture,$=v.image[0]&&v.image[0].isDataTexture,et=[];for(let X=0;X<6;X++)!Dt&&!$?et[X]=y(v.image[X],!0,s.maxCubemapSize):et[X]=$?v.image[X].image:v.image[X],et[X]=de(v,et[X]);const vt=et[0],St=r.convert(v.format,v.colorSpace),dt=r.convert(v.type),Ht=b(v.internalFormat,St,dt,v.colorSpace),U=v.isVideoTexture!==!0,rt=Y.__version===void 0||q===!0,nt=Z.dataReady;let gt=w(v,vt);pt(n.TEXTURE_CUBE_MAP,v);let J;if(Dt){U&&rt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Ht,vt.width,vt.height);for(let X=0;X<6;X++){J=et[X].mipmaps;for(let Mt=0;Mt<J.length;Mt++){const It=J[Mt];v.format!==An?St!==null?U?nt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,Mt,0,0,It.width,It.height,St,It.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,Mt,Ht,It.width,It.height,0,It.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,Mt,0,0,It.width,It.height,St,dt,It.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,Mt,Ht,It.width,It.height,0,St,dt,It.data)}}}else{if(J=v.mipmaps,U&&rt){J.length>0&&gt++;const X=bt(et[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Ht,X.width,X.height)}for(let X=0;X<6;X++)if($){U?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,et[X].width,et[X].height,St,dt,et[X].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ht,et[X].width,et[X].height,0,St,dt,et[X].data);for(let Mt=0;Mt<J.length;Mt++){const fe=J[Mt].image[X].image;U?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,Mt+1,0,0,fe.width,fe.height,St,dt,fe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,Mt+1,Ht,fe.width,fe.height,0,St,dt,fe.data)}}else{U?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,St,dt,et[X]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ht,St,dt,et[X]);for(let Mt=0;Mt<J.length;Mt++){const It=J[Mt];U?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,Mt+1,0,0,St,dt,It.image[X]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,Mt+1,Ht,St,dt,It.image[X])}}}d(v)&&h(n.TEXTURE_CUBE_MAP),Y.__version=Z.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function at(R,v,F,q,Z,Y){const xt=r.convert(F.format,F.colorSpace),st=r.convert(F.type),Ct=b(F.internalFormat,xt,st,F.colorSpace),Dt=i.get(v),$=i.get(F);if($.__renderTarget=v,!Dt.__hasExternalTextures){const et=Math.max(1,v.width>>Y),vt=Math.max(1,v.height>>Y);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,Y,Ct,et,vt,v.depth,0,xt,st,null):e.texImage2D(Z,Y,Ct,et,vt,0,xt,st,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),Ee(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Z,$.__webglTexture,0,I(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Z,$.__webglTexture,Y),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(R,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,R),v.depthBuffer){const q=v.depthTexture,Z=q&&q.isDepthTexture?q.type:null,Y=M(v.stencilBuffer,Z),xt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ee(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I(v),Y,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,I(v),Y,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Y,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xt,n.RENDERBUFFER,R)}else{const q=v.textures;for(let Z=0;Z<q.length;Z++){const Y=q[Z],xt=r.convert(Y.format,Y.colorSpace),st=r.convert(Y.type),Ct=b(Y.internalFormat,xt,st,Y.colorSpace);Ee(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I(v),Ct,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,I(v),Ct,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Ct,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Rt(R,v,F){const q=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",T)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),pt(n.TEXTURE_CUBE_MAP,v.depthTexture);const Dt=r.convert(v.depthTexture.format),$=r.convert(v.depthTexture.type);let et;v.depthTexture.format===li?et=n.DEPTH_COMPONENT24:v.depthTexture.format===zi&&(et=n.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,et,v.width,v.height,0,Dt,$,null)}}else B(v.depthTexture,0);const Y=Z.__webglTexture,xt=I(v),st=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,Ct=v.depthTexture.format===zi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===li)Ee(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ct,st,Y,0,xt):n.framebufferTexture2D(n.FRAMEBUFFER,Ct,st,Y,0);else if(v.depthTexture.format===zi)Ee(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ct,st,Y,0,xt):n.framebufferTexture2D(n.FRAMEBUFFER,Ct,st,Y,0);else throw new Error("Unknown depthTexture format")}function Lt(R){const v=i.get(R),F=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=q}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(F)for(let q=0;q<6;q++)Rt(v.__webglFramebuffer[q],R,q);else{const q=R.texture.mipmaps;q&&q.length>0?Rt(v.__webglFramebuffer[0],R,0):Rt(v.__webglFramebuffer,R,0)}else if(F){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=n.createRenderbuffer(),Ft(v.__webglDepthbuffer[q],R,!1);else{const Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,Y)}}else{const q=R.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Ft(v.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,Y)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function De(R,v,F){const q=i.get(R);v!==void 0&&at(q.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Lt(R)}function Kt(R){const v=R.texture,F=i.get(R),q=i.get(v);R.addEventListener("dispose",C);const Z=R.textures,Y=R.isWebGLCubeRenderTarget===!0,xt=Z.length>1;if(xt||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=v.version,a.memory.textures++),Y){F.__webglFramebuffer=[];for(let st=0;st<6;st++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[st]=[];for(let Ct=0;Ct<v.mipmaps.length;Ct++)F.__webglFramebuffer[st][Ct]=n.createFramebuffer()}else F.__webglFramebuffer[st]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let st=0;st<v.mipmaps.length;st++)F.__webglFramebuffer[st]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(xt)for(let st=0,Ct=Z.length;st<Ct;st++){const Dt=i.get(Z[st]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&Ee(R)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let st=0;st<Z.length;st++){const Ct=Z[st];F.__webglColorRenderbuffer[st]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[st]);const Dt=r.convert(Ct.format,Ct.colorSpace),$=r.convert(Ct.type),et=b(Ct.internalFormat,Dt,$,Ct.colorSpace,R.isXRRenderTarget===!0),vt=I(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,vt,et,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,F.__webglColorRenderbuffer[st])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Ft(F.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),pt(n.TEXTURE_CUBE_MAP,v);for(let st=0;st<6;st++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ct=0;Ct<v.mipmaps.length;Ct++)at(F.__webglFramebuffer[st][Ct],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct);else at(F.__webglFramebuffer[st],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);d(v)&&h(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let st=0,Ct=Z.length;st<Ct;st++){const Dt=Z[st],$=i.get(Dt);let et=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(et=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(et,$.__webglTexture),pt(et,Dt),at(F.__webglFramebuffer,R,Dt,n.COLOR_ATTACHMENT0+st,et,0),d(Dt)&&h(et)}e.unbindTexture()}else{let st=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(st=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(st,q.__webglTexture),pt(st,v),v.mipmaps&&v.mipmaps.length>0)for(let Ct=0;Ct<v.mipmaps.length;Ct++)at(F.__webglFramebuffer[Ct],R,v,n.COLOR_ATTACHMENT0,st,Ct);else at(F.__webglFramebuffer,R,v,n.COLOR_ATTACHMENT0,st,0);d(v)&&h(st),e.unbindTexture()}R.depthBuffer&&Lt(R)}function ee(R){const v=R.textures;for(let F=0,q=v.length;F<q;F++){const Z=v[F];if(d(Z)){const Y=g(R),xt=i.get(Z).__webglTexture;e.bindTexture(Y,xt),h(Y),e.unbindTexture()}}}const ce=[],kt=[];function Me(R){if(R.samples>0){if(Ee(R)===!1){const v=R.textures,F=R.width,q=R.height;let Z=n.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(R),st=v.length>1;if(st)for(let Dt=0;Dt<v.length;Dt++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);const Ct=R.texture.mipmaps;Ct&&Ct.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Dt=0;Dt<v.length;Dt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),st){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[Dt]);const $=i.get(v[Dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$,0)}n.blitFramebuffer(0,0,F,q,0,0,F,q,Z,n.NEAREST),l===!0&&(ce.length=0,kt.length=0,ce.push(n.COLOR_ATTACHMENT0+Dt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ce.push(Y),kt.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,kt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),st)for(let Dt=0;Dt<v.length;Dt++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Dt,n.RENDERBUFFER,xt.__webglColorRenderbuffer[Dt]);const $=i.get(v[Dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Dt,n.TEXTURE_2D,$,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const v=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function I(R){return Math.min(s.maxSamples,R.samples)}function Ee(R){const v=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Qt(R){const v=a.render.frame;f.get(R)!==v&&(f.set(R,v),R.update())}function de(R,v){const F=R.colorSpace,q=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==As&&F!==Si&&(jt.getTransfer(F)===te?(q!==An||Z!==ln)&&Pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",F)),v}function bt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=D,this.setTexture2D=B,this.setTexture2DArray=H,this.setTexture3D=V,this.setTextureCube=Q,this.rebindTextures=De,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=Ee,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Kv(n,t){function e(i,s=Si){let r;const a=jt.getTransfer(s);if(i===ln)return n.UNSIGNED_BYTE;if(i===Dc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Lc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ad)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Cd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Td)return n.BYTE;if(i===wd)return n.SHORT;if(i===ir)return n.UNSIGNED_SHORT;if(i===Pc)return n.INT;if(i===kn)return n.UNSIGNED_INT;if(i===Fn)return n.FLOAT;if(i===hn)return n.HALF_FLOAT;if(i===Rd)return n.ALPHA;if(i===Pd)return n.RGB;if(i===An)return n.RGBA;if(i===li)return n.DEPTH_COMPONENT;if(i===zi)return n.DEPTH_STENCIL;if(i===Dd)return n.RED;if(i===Ic)return n.RED_INTEGER;if(i===ws)return n.RG;if(i===Uc)return n.RG_INTEGER;if(i===Nc)return n.RGBA_INTEGER;if(i===xa||i===va||i===Ma||i===Sa)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Il||i===Ul||i===Nl||i===Fl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Il)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ol||i===Bl||i===zl||i===Vl||i===Gl||i===kl||i===Hl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ol||i===Bl)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===zl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vl)return r.COMPRESSED_R11_EAC;if(i===Gl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===kl)return r.COMPRESSED_RG11_EAC;if(i===Hl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Wl||i===Xl||i===Yl||i===ql||i===jl||i===Zl||i===Kl||i===$l||i===Jl||i===Ql||i===tc||i===ec||i===nc||i===ic)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Wl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ql)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$l)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ql)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tc)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ec)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nc)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ic)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sc||i===rc||i===ac)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===sc)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===oc||i===lc||i===cc||i===hc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===oc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===sr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const $v=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jv=`
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

}`;class Qv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new zd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Xe({vertexShader:$v,fragmentShader:Jv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new tt(new nn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tM extends Wi{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,f=null,m=null,u=null,p=null,_=null;const y=typeof XRWebGLBinding<"u",d=new Qv,h={},g=e.getContextAttributes();let b=null,M=null;const w=[],T=[],C=new ft;let x=null;const S=new Qe;S.viewport=new ve;const P=new Qe;P.viewport=new ve;const A=[S,P],D=new om;let N=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let it=w[j];return it===void 0&&(it=new Wo,w[j]=it),it.getTargetRaySpace()},this.getControllerGrip=function(j){let it=w[j];return it===void 0&&(it=new Wo,w[j]=it),it.getGripSpace()},this.getHand=function(j){let it=w[j];return it===void 0&&(it=new Wo,w[j]=it),it.getHandSpace()};function B(j){const it=T.indexOf(j.inputSource);if(it===-1)return;const at=w[it];at!==void 0&&(at.update(j.inputSource,j.frame,c||a),at.dispatchEvent({type:j.type,data:j.inputSource}))}function H(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",V);for(let j=0;j<w.length;j++){const it=T[j];it!==null&&(T[j]=null,w[j].disconnect(it))}N=null,z=null,d.reset();for(const j in h)delete h[j];t.setRenderTarget(b),p=null,u=null,m=null,s=null,M=null,ge.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&Pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return m===null&&y&&(m=new XRWebGLBinding(s,e)),m},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",H),s.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,Ft=null,Rt=null;g.depth&&(Rt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=g.stencil?zi:li,Ft=g.stencil?sr:kn);const Lt={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};m=this.getBinding(),u=m.createProjectionLayer(Lt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new en(u.textureWidth,u.textureHeight,{format:An,type:ln,depthTexture:new or(u.textureWidth,u.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const at={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new en(p.framebufferWidth,p.framebufferHeight,{format:An,type:ln,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ge.setContext(s),ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function V(j){for(let it=0;it<j.removed.length;it++){const at=j.removed[it],Ft=T.indexOf(at);Ft>=0&&(T[Ft]=null,w[Ft].disconnect(at))}for(let it=0;it<j.added.length;it++){const at=j.added[it];let Ft=T.indexOf(at);if(Ft===-1){for(let Lt=0;Lt<w.length;Lt++)if(Lt>=T.length){T.push(at),Ft=Lt;break}else if(T[Lt]===null){T[Lt]=at,Ft=Lt;break}if(Ft===-1)break}const Rt=w[Ft];Rt&&Rt.connect(at)}}const Q=new L,K=new L;function ut(j,it,at){Q.setFromMatrixPosition(it.matrixWorld),K.setFromMatrixPosition(at.matrixWorld);const Ft=Q.distanceTo(K),Rt=it.projectionMatrix.elements,Lt=at.projectionMatrix.elements,De=Rt[14]/(Rt[10]-1),Kt=Rt[14]/(Rt[10]+1),ee=(Rt[9]+1)/Rt[5],ce=(Rt[9]-1)/Rt[5],kt=(Rt[8]-1)/Rt[0],Me=(Lt[8]+1)/Lt[0],I=De*kt,Ee=De*Me,Qt=Ft/(-kt+Me),de=Qt*-kt;if(it.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(de),j.translateZ(Qt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Rt[10]===-1)j.projectionMatrix.copy(it.projectionMatrix),j.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const bt=De+Qt,R=Kt+Qt,v=I-de,F=Ee+(Ft-de),q=ee*Kt/R*bt,Z=ce*Kt/R*bt;j.projectionMatrix.makePerspective(v,F,q,Z,bt,R),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function _t(j,it){it===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(it.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let it=j.near,at=j.far;d.texture!==null&&(d.depthNear>0&&(it=d.depthNear),d.depthFar>0&&(at=d.depthFar)),D.near=P.near=S.near=it,D.far=P.far=S.far=at,(N!==D.near||z!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),N=D.near,z=D.far),D.layers.mask=j.layers.mask|6,S.layers.mask=D.layers.mask&-5,P.layers.mask=D.layers.mask&-3;const Ft=j.parent,Rt=D.cameras;_t(D,Ft);for(let Lt=0;Lt<Rt.length;Lt++)_t(Rt[Lt],Ft);Rt.length===2?ut(D,S,P):D.projectionMatrix.copy(S.projectionMatrix),pt(j,D,Ft)};function pt(j,it,at){at===null?j.matrix.copy(it.matrixWorld):(j.matrix.copy(at.matrixWorld),j.matrix.invert(),j.matrix.multiply(it.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(it.projectionMatrix),j.projectionMatrixInverse.copy(it.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ar*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(D)},this.getCameraTexture=function(j){return h[j]};let zt=null;function _e(j,it){if(f=it.getViewerPose(c||a),_=it,f!==null){const at=f.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let Ft=!1;at.length!==D.cameras.length&&(D.cameras.length=0,Ft=!0);for(let Kt=0;Kt<at.length;Kt++){const ee=at[Kt];let ce=null;if(p!==null)ce=p.getViewport(ee);else{const Me=m.getViewSubImage(u,ee);ce=Me.viewport,Kt===0&&(t.setRenderTargetTextures(M,Me.colorTexture,Me.depthStencilTexture),t.setRenderTarget(M))}let kt=A[Kt];kt===void 0&&(kt=new Qe,kt.layers.enable(Kt),kt.viewport=new ve,A[Kt]=kt),kt.matrix.fromArray(ee.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(ee.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(ce.x,ce.y,ce.width,ce.height),Kt===0&&(D.matrix.copy(kt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ft===!0&&D.cameras.push(kt)}const Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){m=i.getBinding();const Kt=m.getDepthInformation(at[0]);Kt&&Kt.isValid&&Kt.texture&&d.init(Kt,s.renderState)}if(Rt&&Rt.includes("camera-access")&&y){t.state.unbindTexture(),m=i.getBinding();for(let Kt=0;Kt<at.length;Kt++){const ee=at[Kt].camera;if(ee){let ce=h[ee];ce||(ce=new zd,h[ee]=ce);const kt=m.getCameraImage(ee);ce.sourceTexture=kt}}}}for(let at=0;at<w.length;at++){const Ft=T[at],Rt=w[at];Ft!==null&&Rt!==void 0&&Rt.update(Ft,it,c||a)}zt&&zt(j,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),_=null}const ge=new Wd;ge.setAnimationLoop(_e),this.setAnimationLoop=function(j){zt=j},this.dispose=function(){}}}const Li=new Cn,eM=new me;function nM(n,t){function e(d,h){d.matrixAutoUpdate===!0&&d.updateMatrix(),h.value.copy(d.matrix)}function i(d,h){h.color.getRGB(d.fogColor.value,Vd(n)),h.isFog?(d.fogNear.value=h.near,d.fogFar.value=h.far):h.isFogExp2&&(d.fogDensity.value=h.density)}function s(d,h,g,b,M){h.isMeshBasicMaterial?r(d,h):h.isMeshLambertMaterial?(r(d,h),h.envMap&&(d.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(d,h),m(d,h)):h.isMeshPhongMaterial?(r(d,h),f(d,h),h.envMap&&(d.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(d,h),u(d,h),h.isMeshPhysicalMaterial&&p(d,h,M)):h.isMeshMatcapMaterial?(r(d,h),_(d,h)):h.isMeshDepthMaterial?r(d,h):h.isMeshDistanceMaterial?(r(d,h),y(d,h)):h.isMeshNormalMaterial?r(d,h):h.isLineBasicMaterial?(a(d,h),h.isLineDashedMaterial&&o(d,h)):h.isPointsMaterial?l(d,h,g,b):h.isSpriteMaterial?c(d,h):h.isShadowMaterial?(d.color.value.copy(h.color),d.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(d,h){d.opacity.value=h.opacity,h.color&&d.diffuse.value.copy(h.color),h.emissive&&d.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(d.map.value=h.map,e(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,e(h.alphaMap,d.alphaMapTransform)),h.bumpMap&&(d.bumpMap.value=h.bumpMap,e(h.bumpMap,d.bumpMapTransform),d.bumpScale.value=h.bumpScale,h.side===Ye&&(d.bumpScale.value*=-1)),h.normalMap&&(d.normalMap.value=h.normalMap,e(h.normalMap,d.normalMapTransform),d.normalScale.value.copy(h.normalScale),h.side===Ye&&d.normalScale.value.negate()),h.displacementMap&&(d.displacementMap.value=h.displacementMap,e(h.displacementMap,d.displacementMapTransform),d.displacementScale.value=h.displacementScale,d.displacementBias.value=h.displacementBias),h.emissiveMap&&(d.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,d.emissiveMapTransform)),h.specularMap&&(d.specularMap.value=h.specularMap,e(h.specularMap,d.specularMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest);const g=t.get(h),b=g.envMap,M=g.envMapRotation;b&&(d.envMap.value=b,Li.copy(M),Li.x*=-1,Li.y*=-1,Li.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),d.envMapRotation.value.setFromMatrix4(eM.makeRotationFromEuler(Li)),d.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=h.reflectivity,d.ior.value=h.ior,d.refractionRatio.value=h.refractionRatio),h.lightMap&&(d.lightMap.value=h.lightMap,d.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,d.lightMapTransform)),h.aoMap&&(d.aoMap.value=h.aoMap,d.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,d.aoMapTransform))}function a(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,h.map&&(d.map.value=h.map,e(h.map,d.mapTransform))}function o(d,h){d.dashSize.value=h.dashSize,d.totalSize.value=h.dashSize+h.gapSize,d.scale.value=h.scale}function l(d,h,g,b){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.size.value=h.size*g,d.scale.value=b*.5,h.map&&(d.map.value=h.map,e(h.map,d.uvTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,e(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function c(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.rotation.value=h.rotation,h.map&&(d.map.value=h.map,e(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,e(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function f(d,h){d.specular.value.copy(h.specular),d.shininess.value=Math.max(h.shininess,1e-4)}function m(d,h){h.gradientMap&&(d.gradientMap.value=h.gradientMap)}function u(d,h){d.metalness.value=h.metalness,h.metalnessMap&&(d.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,d.metalnessMapTransform)),d.roughness.value=h.roughness,h.roughnessMap&&(d.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,d.roughnessMapTransform)),h.envMap&&(d.envMapIntensity.value=h.envMapIntensity)}function p(d,h,g){d.ior.value=h.ior,h.sheen>0&&(d.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),d.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(d.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,d.sheenColorMapTransform)),h.sheenRoughnessMap&&(d.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,d.sheenRoughnessMapTransform))),h.clearcoat>0&&(d.clearcoat.value=h.clearcoat,d.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(d.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,d.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(d.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ye&&d.clearcoatNormalScale.value.negate())),h.dispersion>0&&(d.dispersion.value=h.dispersion),h.iridescence>0&&(d.iridescence.value=h.iridescence,d.iridescenceIOR.value=h.iridescenceIOR,d.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(d.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,d.iridescenceMapTransform)),h.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),h.transmission>0&&(d.transmission.value=h.transmission,d.transmissionSamplerMap.value=g.texture,d.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(d.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,d.transmissionMapTransform)),d.thickness.value=h.thickness,h.thicknessMap&&(d.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=h.attenuationDistance,d.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(d.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(d.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=h.specularIntensity,d.specularColor.value.copy(h.specularColor),h.specularColorMap&&(d.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,d.specularColorMapTransform)),h.specularIntensityMap&&(d.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,h){h.matcap&&(d.matcap.value=h.matcap)}function y(d,h){const g=t.get(h).light;d.referencePosition.value.setFromMatrixPosition(g.matrixWorld),d.nearDistance.value=g.shadow.camera.near,d.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function iM(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,b){const M=b.program;i.uniformBlockBinding(g,M)}function c(g,b){let M=s[g.id];M===void 0&&(_(g),M=f(g),s[g.id]=M,g.addEventListener("dispose",d));const w=b.program;i.updateUBOMapping(g,w);const T=t.render.frame;r[g.id]!==T&&(u(g),r[g.id]=T)}function f(g){const b=m();g.__bindingPointIndex=b;const M=n.createBuffer(),w=g.__size,T=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,w,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function m(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(g){const b=s[g.id],M=g.uniforms,w=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,C=M.length;T<C;T++){const x=Array.isArray(M[T])?M[T]:[M[T]];for(let S=0,P=x.length;S<P;S++){const A=x[S];if(p(A,T,S,w)===!0){const D=A.__offset,N=Array.isArray(A.value)?A.value:[A.value];let z=0;for(let B=0;B<N.length;B++){const H=N[B],V=y(H);typeof H=="number"||typeof H=="boolean"?(A.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,D+z,A.__data)):H.isMatrix3?(A.__data[0]=H.elements[0],A.__data[1]=H.elements[1],A.__data[2]=H.elements[2],A.__data[3]=0,A.__data[4]=H.elements[3],A.__data[5]=H.elements[4],A.__data[6]=H.elements[5],A.__data[7]=0,A.__data[8]=H.elements[6],A.__data[9]=H.elements[7],A.__data[10]=H.elements[8],A.__data[11]=0):(H.toArray(A.__data,z),z+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(g,b,M,w){const T=g.value,C=b+"_"+M;if(w[C]===void 0)return typeof T=="number"||typeof T=="boolean"?w[C]=T:w[C]=T.clone(),!0;{const x=w[C];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return w[C]=T,!0}else if(x.equals(T)===!1)return x.copy(T),!0}return!1}function _(g){const b=g.uniforms;let M=0;const w=16;for(let C=0,x=b.length;C<x;C++){const S=Array.isArray(b[C])?b[C]:[b[C]];for(let P=0,A=S.length;P<A;P++){const D=S[P],N=Array.isArray(D.value)?D.value:[D.value];for(let z=0,B=N.length;z<B;z++){const H=N[z],V=y(H),Q=M%w,K=Q%V.boundary,ut=Q+K;M+=K,ut!==0&&w-ut<V.storage&&(M+=w-ut),D.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=V.storage}}}const T=M%w;return T>0&&(M+=w-T),g.__size=M,g.__cache={},this}function y(g){const b={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(b.boundary=4,b.storage=4):g.isVector2?(b.boundary=8,b.storage=8):g.isVector3||g.isColor?(b.boundary=16,b.storage=12):g.isVector4?(b.boundary=16,b.storage=16):g.isMatrix3?(b.boundary=48,b.storage=48):g.isMatrix4?(b.boundary=64,b.storage=64):g.isTexture?Pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Pt("WebGLRenderer: Unsupported uniform value type.",g),b}function d(g){const b=g.target;b.removeEventListener("dispose",d);const M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function h(){for(const g in s)n.deleteBuffer(s[g]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}const sM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let In=null;function rM(){return In===null&&(In=new W0(sM,16,16,ws,hn),In.name="DFG_LUT",In.minFilter=We,In.magFilter=We,In.wrapS=si,In.wrapT=si,In.generateMipmaps=!1,In.needsUpdate=!0),In}class aM{constructor(t={}){const{canvas:e=r0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:u=!1,outputBufferType:p=ln}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const y=p,d=new Set([Nc,Uc,Ic]),h=new Set([ln,kn,ir,sr,Dc,Lc]),g=new Uint32Array(4),b=new Int32Array(4);let M=null,w=null;const T=[],C=[];let x=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let P=!1;this._outputColorSpace=gn;let A=0,D=0,N=null,z=-1,B=null;const H=new ve,V=new ve;let Q=null;const K=new Tt(0);let ut=0,_t=e.width,pt=e.height,zt=1,_e=null,ge=null;const j=new ve(0,0,_t,pt),it=new ve(0,0,_t,pt);let at=!1;const Ft=new Wc;let Rt=!1,Lt=!1;const De=new me,Kt=new L,ee=new ve,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function Me(){return N===null?zt:1}let I=i;function Ee(E,O){return e.getContext(E,O)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yc}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",fe,!1),I===null){const O="webgl2";if(I=Ee(O,E),I===null)throw Ee(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw qt("WebGLRenderer: "+E.message),E}let Qt,de,bt,R,v,F,q,Z,Y,xt,st,Ct,Dt,$,et,vt,St,dt,Ht,U,rt,nt,gt;function J(){Qt=new ax(I),Qt.init(),rt=new Kv(I,Qt),de=new J_(I,Qt,t,rt),bt=new jv(I,Qt),de.reversedDepthBuffer&&u&&bt.buffers.depth.setReversed(!0),R=new cx(I),v=new Uv,F=new Zv(I,Qt,bt,v,de,rt,R),q=new rx(S),Z=new pm(I),nt=new K_(I,Z),Y=new ox(I,Z,R,nt),xt=new ux(I,Y,Z,nt,R),dt=new hx(I,de,F),et=new Q_(v),st=new Iv(S,q,Qt,de,nt,et),Ct=new nM(S,v),Dt=new Fv,$=new kv(Qt),St=new Z_(S,q,bt,xt,_,l),vt=new qv(S,xt,de),gt=new iM(I,R,de,bt),Ht=new $_(I,Qt,R),U=new lx(I,Qt,R),R.programs=st.programs,S.capabilities=de,S.extensions=Qt,S.properties=v,S.renderLists=Dt,S.shadowMap=vt,S.state=bt,S.info=R}J(),y!==ln&&(x=new fx(y,e.width,e.height,s,r));const X=new tM(S,I);this.xr=X,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=Qt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Qt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return zt},this.setPixelRatio=function(E){E!==void 0&&(zt=E,this.setSize(_t,pt,!1))},this.getSize=function(E){return E.set(_t,pt)},this.setSize=function(E,O,W=!0){if(X.isPresenting){Pt("WebGLRenderer: Can't change size while VR device is presenting.");return}_t=E,pt=O,e.width=Math.floor(E*zt),e.height=Math.floor(O*zt),W===!0&&(e.style.width=E+"px",e.style.height=O+"px"),x!==null&&x.setSize(e.width,e.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(_t*zt,pt*zt).floor()},this.setDrawingBufferSize=function(E,O,W){_t=E,pt=O,zt=W,e.width=Math.floor(E*W),e.height=Math.floor(O*W),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(y===ln){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(H)},this.getViewport=function(E){return E.copy(j)},this.setViewport=function(E,O,W,k){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,O,W,k),bt.viewport(H.copy(j).multiplyScalar(zt).round())},this.getScissor=function(E){return E.copy(it)},this.setScissor=function(E,O,W,k){E.isVector4?it.set(E.x,E.y,E.z,E.w):it.set(E,O,W,k),bt.scissor(V.copy(it).multiplyScalar(zt).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(E){bt.setScissorTest(at=E)},this.setOpaqueSort=function(E){_e=E},this.setTransparentSort=function(E){ge=E},this.getClearColor=function(E){return E.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,W=!0){let k=0;if(E){let G=!1;if(N!==null){const lt=N.texture.format;G=d.has(lt)}if(G){const lt=N.texture.type,mt=h.has(lt),ct=St.getClearColor(),yt=St.getClearAlpha(),wt=ct.r,Nt=ct.g,Wt=ct.b;mt?(g[0]=wt,g[1]=Nt,g[2]=Wt,g[3]=yt,I.clearBufferuiv(I.COLOR,0,g)):(b[0]=wt,b[1]=Nt,b[2]=Wt,b[3]=yt,I.clearBufferiv(I.COLOR,0,b))}else k|=I.COLOR_BUFFER_BIT}O&&(k|=I.DEPTH_BUFFER_BIT),W&&(k|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),St.dispose(),Dt.dispose(),$.dispose(),v.dispose(),q.dispose(),xt.dispose(),nt.dispose(),gt.dispose(),st.dispose(),X.dispose(),X.removeEventListener("sessionstart",Gh),X.removeEventListener("sessionend",kh),Ti.stop()};function Mt(E){E.preventDefault(),Pa("WebGLRenderer: Context Lost."),P=!0}function It(){Pa("WebGLRenderer: Context Restored."),P=!1;const E=R.autoReset,O=vt.enabled,W=vt.autoUpdate,k=vt.needsUpdate,G=vt.type;J(),R.autoReset=E,vt.enabled=O,vt.autoUpdate=W,vt.needsUpdate=k,vt.type=G}function fe(E){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ne(E){const O=E.target;O.removeEventListener("dispose",ne),Yn(O)}function Yn(E){qn(E),v.remove(E)}function qn(E){const O=v.get(E).programs;O!==void 0&&(O.forEach(function(W){st.releaseProgram(W)}),E.isShaderMaterial&&st.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,W,k,G,lt){O===null&&(O=ce);const mt=G.isMesh&&G.matrixWorld.determinant()<0,ct=Sp(E,O,W,k,G);bt.setMaterial(k,mt);let yt=W.index,wt=1;if(k.wireframe===!0){if(yt=Y.getWireframeAttribute(W),yt===void 0)return;wt=2}const Nt=W.drawRange,Wt=W.attributes.position;let At=Nt.start*wt,re=(Nt.start+Nt.count)*wt;lt!==null&&(At=Math.max(At,lt.start*wt),re=Math.min(re,(lt.start+lt.count)*wt)),yt!==null?(At=Math.max(At,0),re=Math.min(re,yt.count)):Wt!=null&&(At=Math.max(At,0),re=Math.min(re,Wt.count));const Se=re-At;if(Se<0||Se===1/0)return;nt.setup(G,k,ct,W,yt);let xe,ae=Ht;if(yt!==null&&(xe=Z.get(yt),ae=U,ae.setIndex(xe)),G.isMesh)k.wireframe===!0?(bt.setLineWidth(k.wireframeLinewidth*Me()),ae.setMode(I.LINES)):ae.setMode(I.TRIANGLES);else if(G.isLine){let Ge=k.linewidth;Ge===void 0&&(Ge=1),bt.setLineWidth(Ge*Me()),G.isLineSegments?ae.setMode(I.LINES):G.isLineLoop?ae.setMode(I.LINE_LOOP):ae.setMode(I.LINE_STRIP)}else G.isPoints?ae.setMode(I.POINTS):G.isSprite&&ae.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Da("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ae.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))ae.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ge=G._multiDrawStarts,Et=G._multiDrawCounts,rn=G._multiDrawCount,$t=yt?Z.get(yt).bytesPerElement:1,Sn=v.get(k).currentProgram.getUniforms();for(let Dn=0;Dn<rn;Dn++)Sn.setValue(I,"_gl_DrawID",Dn),ae.render(Ge[Dn]/$t,Et[Dn])}else if(G.isInstancedMesh)ae.renderInstances(At,Se,G.count);else if(W.isInstancedBufferGeometry){const Ge=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Et=Math.min(W.instanceCount,Ge);ae.renderInstances(At,Se,Et)}else ae.render(At,Se)};function Vh(E,O,W){E.transparent===!0&&E.side===ye&&E.forceSinglePass===!1?(E.side=Ye,E.needsUpdate=!0,Rr(E,O,W),E.side=Gn,E.needsUpdate=!0,Rr(E,O,W),E.side=ye):Rr(E,O,W)}this.compile=function(E,O,W=null){W===null&&(W=E),w=$.get(W),w.init(O),C.push(w),W.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),E!==W&&E.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights();const k=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const lt=G.material;if(lt)if(Array.isArray(lt))for(let mt=0;mt<lt.length;mt++){const ct=lt[mt];Vh(ct,W,G),k.add(ct)}else Vh(lt,W,G),k.add(lt)}),w=C.pop(),k},this.compileAsync=function(E,O,W=null){const k=this.compile(E,O,W);return new Promise(G=>{function lt(){if(k.forEach(function(mt){v.get(mt).currentProgram.isReady()&&k.delete(mt)}),k.size===0){G(E);return}setTimeout(lt,10)}Qt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let Uo=null;function Mp(E){Uo&&Uo(E)}function Gh(){Ti.stop()}function kh(){Ti.start()}const Ti=new Wd;Ti.setAnimationLoop(Mp),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(E){Uo=E,X.setAnimationLoop(E),E===null?Ti.stop():Ti.start()},X.addEventListener("sessionstart",Gh),X.addEventListener("sessionend",kh),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;const W=X.enabled===!0&&X.isPresenting===!0,k=x!==null&&(N===null||W)&&x.begin(S,N);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(X.cameraAutoUpdate===!0&&X.updateCamera(O),O=X.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,O,N),w=$.get(E,C.length),w.init(O),C.push(w),De.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ft.setFromProjectionMatrix(De,On,O.reversedDepth),Lt=this.localClippingEnabled,Rt=et.init(this.clippingPlanes,Lt),M=Dt.get(E,T.length),M.init(),T.push(M),X.enabled===!0&&X.isPresenting===!0){const mt=S.xr.getDepthSensingMesh();mt!==null&&No(mt,O,-1/0,S.sortObjects)}No(E,O,0,S.sortObjects),M.finish(),S.sortObjects===!0&&M.sort(_e,ge),kt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,kt&&St.addToRenderList(M,E),this.info.render.frame++,Rt===!0&&et.beginShadows();const G=w.state.shadowsArray;if(vt.render(G,E,O),Rt===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&x.hasRenderPass())===!1){const mt=M.opaque,ct=M.transmissive;if(w.setupLights(),O.isArrayCamera){const yt=O.cameras;if(ct.length>0)for(let wt=0,Nt=yt.length;wt<Nt;wt++){const Wt=yt[wt];Wh(mt,ct,E,Wt)}kt&&St.render(E);for(let wt=0,Nt=yt.length;wt<Nt;wt++){const Wt=yt[wt];Hh(M,E,Wt,Wt.viewport)}}else ct.length>0&&Wh(mt,ct,E,O),kt&&St.render(E),Hh(M,E,O)}N!==null&&D===0&&(F.updateMultisampleRenderTarget(N),F.updateRenderTargetMipmap(N)),k&&x.end(S),E.isScene===!0&&E.onAfterRender(S,E,O),nt.resetDefaultState(),z=-1,B=null,C.pop(),C.length>0?(w=C[C.length-1],Rt===!0&&et.setGlobalState(S.clippingPlanes,w.state.camera)):w=null,T.pop(),T.length>0?M=T[T.length-1]:M=null};function No(E,O,W,k){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ft.intersectsSprite(E)){k&&ee.setFromMatrixPosition(E.matrixWorld).applyMatrix4(De);const mt=xt.update(E),ct=E.material;ct.visible&&M.push(E,mt,ct,W,ee.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ft.intersectsObject(E))){const mt=xt.update(E),ct=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ee.copy(E.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),ee.copy(mt.boundingSphere.center)),ee.applyMatrix4(E.matrixWorld).applyMatrix4(De)),Array.isArray(ct)){const yt=mt.groups;for(let wt=0,Nt=yt.length;wt<Nt;wt++){const Wt=yt[wt],At=ct[Wt.materialIndex];At&&At.visible&&M.push(E,mt,At,W,ee.z,Wt)}}else ct.visible&&M.push(E,mt,ct,W,ee.z,null)}}const lt=E.children;for(let mt=0,ct=lt.length;mt<ct;mt++)No(lt[mt],O,W,k)}function Hh(E,O,W,k){const{opaque:G,transmissive:lt,transparent:mt}=E;w.setupLightsView(W),Rt===!0&&et.setGlobalState(S.clippingPlanes,W),k&&bt.viewport(H.copy(k)),G.length>0&&Cr(G,O,W),lt.length>0&&Cr(lt,O,W),mt.length>0&&Cr(mt,O,W),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function Wh(E,O,W,k){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){const At=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new en(1,1,{generateMipmaps:!0,type:At?hn:ln,minFilter:Bi,samples:Math.max(4,de.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace})}const lt=w.state.transmissionRenderTarget[k.id],mt=k.viewport||H;lt.setSize(mt.z*S.transmissionResolutionScale,mt.w*S.transmissionResolutionScale);const ct=S.getRenderTarget(),yt=S.getActiveCubeFace(),wt=S.getActiveMipmapLevel();S.setRenderTarget(lt),S.getClearColor(K),ut=S.getClearAlpha(),ut<1&&S.setClearColor(16777215,.5),S.clear(),kt&&St.render(W);const Nt=S.toneMapping;S.toneMapping=zn;const Wt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),Rt===!0&&et.setGlobalState(S.clippingPlanes,k),Cr(E,W,k),F.updateMultisampleRenderTarget(lt),F.updateRenderTargetMipmap(lt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let re=0,Se=O.length;re<Se;re++){const xe=O[re],{object:ae,geometry:Ge,material:Et,group:rn}=xe;if(Et.side===ye&&ae.layers.test(k.layers)){const $t=Et.side;Et.side=Ye,Et.needsUpdate=!0,Xh(ae,W,k,Ge,Et,rn),Et.side=$t,Et.needsUpdate=!0,At=!0}}At===!0&&(F.updateMultisampleRenderTarget(lt),F.updateRenderTargetMipmap(lt))}S.setRenderTarget(ct,yt,wt),S.setClearColor(K,ut),Wt!==void 0&&(k.viewport=Wt),S.toneMapping=Nt}function Cr(E,O,W){const k=O.isScene===!0?O.overrideMaterial:null;for(let G=0,lt=E.length;G<lt;G++){const mt=E[G],{object:ct,geometry:yt,group:wt}=mt;let Nt=mt.material;Nt.allowOverride===!0&&k!==null&&(Nt=k),ct.layers.test(W.layers)&&Xh(ct,O,W,yt,Nt,wt)}}function Xh(E,O,W,k,G,lt){E.onBeforeRender(S,O,W,k,G,lt),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(S,O,W,k,E,lt),G.transparent===!0&&G.side===ye&&G.forceSinglePass===!1?(G.side=Ye,G.needsUpdate=!0,S.renderBufferDirect(W,O,k,G,E,lt),G.side=Gn,G.needsUpdate=!0,S.renderBufferDirect(W,O,k,G,E,lt),G.side=ye):S.renderBufferDirect(W,O,k,G,E,lt),E.onAfterRender(S,O,W,k,G,lt)}function Rr(E,O,W){O.isScene!==!0&&(O=ce);const k=v.get(E),G=w.state.lights,lt=w.state.shadowsArray,mt=G.state.version,ct=st.getParameters(E,G.state,lt,O,W),yt=st.getProgramCacheKey(ct);let wt=k.programs;k.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,k.fog=O.fog;const Nt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;k.envMap=q.get(E.envMap||k.environment,Nt),k.envMapRotation=k.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,wt===void 0&&(E.addEventListener("dispose",ne),wt=new Map,k.programs=wt);let Wt=wt.get(yt);if(Wt!==void 0){if(k.currentProgram===Wt&&k.lightsStateVersion===mt)return qh(E,ct),Wt}else ct.uniforms=st.getUniforms(E),E.onBeforeCompile(ct,S),Wt=st.acquireProgram(ct,yt),wt.set(yt,Wt),k.uniforms=ct.uniforms;const At=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(At.clippingPlanes=et.uniform),qh(E,ct),k.needsLights=bp(E),k.lightsStateVersion=mt,k.needsLights&&(At.ambientLightColor.value=G.state.ambient,At.lightProbe.value=G.state.probe,At.directionalLights.value=G.state.directional,At.directionalLightShadows.value=G.state.directionalShadow,At.spotLights.value=G.state.spot,At.spotLightShadows.value=G.state.spotShadow,At.rectAreaLights.value=G.state.rectArea,At.ltc_1.value=G.state.rectAreaLTC1,At.ltc_2.value=G.state.rectAreaLTC2,At.pointLights.value=G.state.point,At.pointLightShadows.value=G.state.pointShadow,At.hemisphereLights.value=G.state.hemi,At.directionalShadowMatrix.value=G.state.directionalShadowMatrix,At.spotLightMatrix.value=G.state.spotLightMatrix,At.spotLightMap.value=G.state.spotLightMap,At.pointShadowMatrix.value=G.state.pointShadowMatrix),k.currentProgram=Wt,k.uniformsList=null,Wt}function Yh(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=ya.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function qh(E,O){const W=v.get(E);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Sp(E,O,W,k,G){O.isScene!==!0&&(O=ce),F.resetTextureUnits();const lt=O.fog,mt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?O.environment:null,ct=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:As,yt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,wt=q.get(k.envMap||mt,yt),Nt=k.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Wt=!!W.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),At=!!W.morphAttributes.position,re=!!W.morphAttributes.normal,Se=!!W.morphAttributes.color;let xe=zn;k.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(xe=S.toneMapping);const ae=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ge=ae!==void 0?ae.length:0,Et=v.get(k),rn=w.state.lights;if(Rt===!0&&(Lt===!0||E!==B)){const Le=E===B&&k.id===z;et.setState(k,E,Le)}let $t=!1;k.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==rn.state.version||Et.outputColorSpace!==ct||G.isBatchedMesh&&Et.batching===!1||!G.isBatchedMesh&&Et.batching===!0||G.isBatchedMesh&&Et.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Et.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Et.instancing===!1||!G.isInstancedMesh&&Et.instancing===!0||G.isSkinnedMesh&&Et.skinning===!1||!G.isSkinnedMesh&&Et.skinning===!0||G.isInstancedMesh&&Et.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Et.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Et.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Et.instancingMorph===!1&&G.morphTexture!==null||Et.envMap!==wt||k.fog===!0&&Et.fog!==lt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==et.numPlanes||Et.numIntersection!==et.numIntersection)||Et.vertexAlphas!==Nt||Et.vertexTangents!==Wt||Et.morphTargets!==At||Et.morphNormals!==re||Et.morphColors!==Se||Et.toneMapping!==xe||Et.morphTargetsCount!==Ge)&&($t=!0):($t=!0,Et.__version=k.version);let Sn=Et.currentProgram;$t===!0&&(Sn=Rr(k,O,G));let Dn=!1,wi=!1,qi=!1;const he=Sn.getUniforms(),Oe=Et.uniforms;if(bt.useProgram(Sn.program)&&(Dn=!0,wi=!0,qi=!0),k.id!==z&&(z=k.id,wi=!0),Dn||B!==E){bt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),he.setValue(I,"projectionMatrix",E.projectionMatrix),he.setValue(I,"viewMatrix",E.matrixWorldInverse);const fi=he.map.cameraPosition;fi!==void 0&&fi.setValue(I,Kt.setFromMatrixPosition(E.matrixWorld)),de.logarithmicDepthBuffer&&he.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&he.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),B!==E&&(B=E,wi=!0,qi=!0)}if(Et.needsLights&&(rn.state.directionalShadowMap.length>0&&he.setValue(I,"directionalShadowMap",rn.state.directionalShadowMap,F),rn.state.spotShadowMap.length>0&&he.setValue(I,"spotShadowMap",rn.state.spotShadowMap,F),rn.state.pointShadowMap.length>0&&he.setValue(I,"pointShadowMap",rn.state.pointShadowMap,F)),G.isSkinnedMesh){he.setOptional(I,G,"bindMatrix"),he.setOptional(I,G,"bindMatrixInverse");const Le=G.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),he.setValue(I,"boneTexture",Le.boneTexture,F))}G.isBatchedMesh&&(he.setOptional(I,G,"batchingTexture"),he.setValue(I,"batchingTexture",G._matricesTexture,F),he.setOptional(I,G,"batchingIdTexture"),he.setValue(I,"batchingIdTexture",G._indirectTexture,F),he.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&he.setValue(I,"batchingColorTexture",G._colorsTexture,F));const di=W.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&dt.update(G,W,Sn),(wi||Et.receiveShadow!==G.receiveShadow)&&(Et.receiveShadow=G.receiveShadow,he.setValue(I,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&O.environment!==null&&(Oe.envMapIntensity.value=O.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=rM()),wi&&(he.setValue(I,"toneMappingExposure",S.toneMappingExposure),Et.needsLights&&yp(Oe,qi),lt&&k.fog===!0&&Ct.refreshFogUniforms(Oe,lt),Ct.refreshMaterialUniforms(Oe,k,zt,pt,w.state.transmissionRenderTarget[E.id]),ya.upload(I,Yh(Et),Oe,F)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ya.upload(I,Yh(Et),Oe,F),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&he.setValue(I,"center",G.center),he.setValue(I,"modelViewMatrix",G.modelViewMatrix),he.setValue(I,"normalMatrix",G.normalMatrix),he.setValue(I,"modelMatrix",G.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Le=k.uniformsGroups;for(let fi=0,ji=Le.length;fi<ji;fi++){const jh=Le[fi];gt.update(jh,Sn),gt.bind(jh,Sn)}}return Sn}function yp(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function bp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,O,W){const k=v.get(E);k.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),v.get(E.texture).__webglTexture=O,v.get(E.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:W,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){const W=v.get(E);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};const Ep=I.createFramebuffer();this.setRenderTarget=function(E,O=0,W=0){N=E,A=O,D=W;let k=null,G=!1,lt=!1;if(E){const ct=v.get(E);if(ct.__useDefaultFramebuffer!==void 0){bt.bindFramebuffer(I.FRAMEBUFFER,ct.__webglFramebuffer),H.copy(E.viewport),V.copy(E.scissor),Q=E.scissorTest,bt.viewport(H),bt.scissor(V),bt.setScissorTest(Q),z=-1;return}else if(ct.__webglFramebuffer===void 0)F.setupRenderTarget(E);else if(ct.__hasExternalTextures)F.rebindTextures(E,v.get(E.texture).__webglTexture,v.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Nt=E.depthTexture;if(ct.__boundDepthTexture!==Nt){if(Nt!==null&&v.has(Nt)&&(E.width!==Nt.image.width||E.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(E)}}const yt=E.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(lt=!0);const wt=v.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(wt[O])?k=wt[O][W]:k=wt[O],G=!0):E.samples>0&&F.useMultisampledRTT(E)===!1?k=v.get(E).__webglMultisampledFramebuffer:Array.isArray(wt)?k=wt[W]:k=wt,H.copy(E.viewport),V.copy(E.scissor),Q=E.scissorTest}else H.copy(j).multiplyScalar(zt).floor(),V.copy(it).multiplyScalar(zt).floor(),Q=at;if(W!==0&&(k=Ep),bt.bindFramebuffer(I.FRAMEBUFFER,k)&&bt.drawBuffers(E,k),bt.viewport(H),bt.scissor(V),bt.setScissorTest(Q),G){const ct=v.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,ct.__webglTexture,W)}else if(lt){const ct=O;for(let yt=0;yt<E.textures.length;yt++){const wt=v.get(E.textures[yt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+yt,wt.__webglTexture,W,ct)}}else if(E!==null&&W!==0){const ct=v.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ct.__webglTexture,W)}z=-1},this.readRenderTargetPixels=function(E,O,W,k,G,lt,mt,ct=0){if(!(E&&E.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&mt!==void 0&&(yt=yt[mt]),yt){bt.bindFramebuffer(I.FRAMEBUFFER,yt);try{const wt=E.textures[ct],Nt=wt.format,Wt=wt.type;if(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ct),!de.textureFormatReadable(Nt)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Wt)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-k&&W>=0&&W<=E.height-G&&I.readPixels(O,W,k,G,rt.convert(Nt),rt.convert(Wt),lt)}finally{const wt=N!==null?v.get(N).__webglFramebuffer:null;bt.bindFramebuffer(I.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(E,O,W,k,G,lt,mt,ct=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&mt!==void 0&&(yt=yt[mt]),yt)if(O>=0&&O<=E.width-k&&W>=0&&W<=E.height-G){bt.bindFramebuffer(I.FRAMEBUFFER,yt);const wt=E.textures[ct],Nt=wt.format,Wt=wt.type;if(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ct),!de.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const At=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,At),I.bufferData(I.PIXEL_PACK_BUFFER,lt.byteLength,I.STREAM_READ),I.readPixels(O,W,k,G,rt.convert(Nt),rt.convert(Wt),0);const re=N!==null?v.get(N).__webglFramebuffer:null;bt.bindFramebuffer(I.FRAMEBUFFER,re);const Se=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await a0(I,Se,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,At),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,lt),I.deleteBuffer(At),I.deleteSync(Se),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,W=0){const k=Math.pow(2,-W),G=Math.floor(E.image.width*k),lt=Math.floor(E.image.height*k),mt=O!==null?O.x:0,ct=O!==null?O.y:0;F.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,mt,ct,G,lt),bt.unbindTexture()};const Tp=I.createFramebuffer(),wp=I.createFramebuffer();this.copyTextureToTexture=function(E,O,W=null,k=null,G=0,lt=0){let mt,ct,yt,wt,Nt,Wt,At,re,Se;const xe=E.isCompressedTexture?E.mipmaps[lt]:E.image;if(W!==null)mt=W.max.x-W.min.x,ct=W.max.y-W.min.y,yt=W.isBox3?W.max.z-W.min.z:1,wt=W.min.x,Nt=W.min.y,Wt=W.isBox3?W.min.z:0;else{const Oe=Math.pow(2,-G);mt=Math.floor(xe.width*Oe),ct=Math.floor(xe.height*Oe),E.isDataArrayTexture?yt=xe.depth:E.isData3DTexture?yt=Math.floor(xe.depth*Oe):yt=1,wt=0,Nt=0,Wt=0}k!==null?(At=k.x,re=k.y,Se=k.z):(At=0,re=0,Se=0);const ae=rt.convert(O.format),Ge=rt.convert(O.type);let Et;O.isData3DTexture?(F.setTexture3D(O,0),Et=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(F.setTexture2DArray(O,0),Et=I.TEXTURE_2D_ARRAY):(F.setTexture2D(O,0),Et=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const rn=I.getParameter(I.UNPACK_ROW_LENGTH),$t=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Sn=I.getParameter(I.UNPACK_SKIP_PIXELS),Dn=I.getParameter(I.UNPACK_SKIP_ROWS),wi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,xe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,wt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Nt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Wt);const qi=E.isDataArrayTexture||E.isData3DTexture,he=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){const Oe=v.get(E),di=v.get(O),Le=v.get(Oe.__renderTarget),fi=v.get(di.__renderTarget);bt.bindFramebuffer(I.READ_FRAMEBUFFER,Le.__webglFramebuffer),bt.bindFramebuffer(I.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let ji=0;ji<yt;ji++)qi&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(E).__webglTexture,G,Wt+ji),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(O).__webglTexture,lt,Se+ji)),I.blitFramebuffer(wt,Nt,mt,ct,At,re,mt,ct,I.DEPTH_BUFFER_BIT,I.NEAREST);bt.bindFramebuffer(I.READ_FRAMEBUFFER,null),bt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||v.has(E)){const Oe=v.get(E),di=v.get(O);bt.bindFramebuffer(I.READ_FRAMEBUFFER,Tp),bt.bindFramebuffer(I.DRAW_FRAMEBUFFER,wp);for(let Le=0;Le<yt;Le++)qi?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Oe.__webglTexture,G,Wt+Le):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Oe.__webglTexture,G),he?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,di.__webglTexture,lt,Se+Le):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,di.__webglTexture,lt),G!==0?I.blitFramebuffer(wt,Nt,mt,ct,At,re,mt,ct,I.COLOR_BUFFER_BIT,I.NEAREST):he?I.copyTexSubImage3D(Et,lt,At,re,Se+Le,wt,Nt,mt,ct):I.copyTexSubImage2D(Et,lt,At,re,wt,Nt,mt,ct);bt.bindFramebuffer(I.READ_FRAMEBUFFER,null),bt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else he?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Et,lt,At,re,Se,mt,ct,yt,ae,Ge,xe.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(Et,lt,At,re,Se,mt,ct,yt,ae,xe.data):I.texSubImage3D(Et,lt,At,re,Se,mt,ct,yt,ae,Ge,xe):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,lt,At,re,mt,ct,ae,Ge,xe.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,lt,At,re,xe.width,xe.height,ae,xe.data):I.texSubImage2D(I.TEXTURE_2D,lt,At,re,mt,ct,ae,Ge,xe);I.pixelStorei(I.UNPACK_ROW_LENGTH,rn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,$t),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Sn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Dn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,wi),lt===0&&O.generateMipmaps&&I.generateMipmap(Et),bt.unbindTexture()},this.initRenderTarget=function(E){v.get(E).__webglFramebuffer===void 0&&F.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?F.setTextureCube(E,0):E.isData3DTexture?F.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?F.setTexture2DArray(E,0):F.setTexture2D(E,0),bt.unbindTexture()},this.resetState=function(){A=0,D=0,N=null,bt.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}const ed={type:"change"},jc={type:"start"},Kd={type:"end"},ca=new pr,nd=new Mi,oM=Math.cos(70*yi.DEG2RAD),Ae=new L,Je=2*Math.PI,oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_l=1e-6;class lM extends dm{constructor(t,e=null){super(t,e),this.state=oe.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vs.ROTATE,MIDDLE:vs.DOLLY,RIGHT:vs.PAN},this.touches={ONE:_s.ROTATE,TWO:_s.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Ei,this._lastTargetPosition=new L,this._quat=new Ei().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pu,this._sphericalDelta=new Pu,this._scale=1,this._panOffset=new L,this._rotateStart=new ft,this._rotateEnd=new ft,this._rotateDelta=new ft,this._panStart=new ft,this._panEnd=new ft,this._panDelta=new ft,this._dollyStart=new ft,this._dollyEnd=new ft,this._dollyDelta=new ft,this._dollyDirection=new L,this._mouse=new ft,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hM.bind(this),this._onPointerDown=cM.bind(this),this._onPointerUp=uM.bind(this),this._onContextMenu=xM.bind(this),this._onMouseWheel=pM.bind(this),this._onKeyDown=mM.bind(this),this._onTouchStart=gM.bind(this),this._onTouchMove=_M.bind(this),this._onMouseDown=dM.bind(this),this._onMouseMove=fM.bind(this),this._interceptControlDown=vM.bind(this),this._interceptControlUp=MM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ed),this.update(),this.state=oe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Ae.copy(e).sub(this.target),Ae.applyQuaternion(this._quat),this._spherical.setFromVector3(Ae),this.autoRotate&&this.state===oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Je:i>Math.PI&&(i-=Je),s<-Math.PI?s+=Je:s>Math.PI&&(s-=Je),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ae.setFromSpherical(this._spherical),Ae.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ae),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ae.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ae.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ca.origin.copy(this.object.position),ca.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ca.direction))<oM?this.object.lookAt(this.target):(nd.setFromNormalAndCoplanarPoint(this.object.up,this.target),ca.intersectPlane(nd,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>_l||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_l||this._lastTargetPosition.distanceToSquared(this.target)>_l?(this.dispatchEvent(ed),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Je/60*this.autoRotateSpeed*t:Je/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ae.setFromMatrixColumn(e,0),Ae.multiplyScalar(-t),this._panOffset.add(Ae)}_panUp(t,e){this.screenSpacePanning===!0?Ae.setFromMatrixColumn(e,1):(Ae.setFromMatrixColumn(e,0),Ae.crossVectors(this.object.up,Ae)),Ae.multiplyScalar(t),this._panOffset.add(Ae)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ae.copy(s).sub(this.target);let r=Ae.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Je*this._rotateDelta.x/e.clientHeight),this._rotateUp(Je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Je*this._rotateDelta.x/e.clientHeight),this._rotateUp(Je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ft,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function cM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function hM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function uM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Kd),this.state=oe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function dM(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case vs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=oe.DOLLY;break;case vs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=oe.ROTATE}break;case vs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=oe.PAN}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(jc)}function fM(n){switch(this.state){case oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function pM(n){this.enabled===!1||this.enableZoom===!1||this.state!==oe.NONE||(n.preventDefault(),this.dispatchEvent(jc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Kd))}function mM(n){this.enabled!==!1&&this._handleKeyDown(n)}function gM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case _s.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=oe.TOUCH_ROTATE;break;case _s.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=oe.TOUCH_PAN;break;default:this.state=oe.NONE}break;case 2:switch(this.touches.TWO){case _s.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=oe.TOUCH_DOLLY_PAN;break;case _s.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=oe.TOUCH_DOLLY_ROTATE;break;default:this.state=oe.NONE}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(jc)}function _M(n){switch(this._trackPointer(n),this.state){case oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=oe.NONE}}function xM(n){this.enabled!==!1&&n.preventDefault()}function vM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function MM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ba={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ls{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const SM=new eo(-1,1,1,-1,0,1);class yM extends Ut{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}}const bM=new yM;class Zc{constructor(t){this._mesh=new tt(bM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,SM)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class $d extends Ls{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=lr.clone(t.uniforms),this.material=new Xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Zc(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class id extends Ls{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class EM extends Ls{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class TM{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new ft);this._width=i.width,this._height=i.height,e=new en(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $d(ba),this.copyPass.material.blending=Bn,this.timer=new lm}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}id!==void 0&&(a instanceof id?i=!0:a instanceof EM&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ft);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class wM extends Ls{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Tt}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const AM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Tt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Rs extends Ls{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new ft(t.x,t.y):new ft(256,256),this.clearColor=new Tt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new en(r,a,{type:hn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const m=new en(r,a,{type:hn});m.texture.name="UnrealBloomPass.h"+f,m.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(m);const u=new en(r,a,{type:hn});u.texture.name="UnrealBloomPass.v"+f,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}const o=AM;this.highPassUniforms=lr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new ft(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=lr.clone(ba.uniforms),this.blendMaterial=new Xe({uniforms:this.copyUniforms,vertexShader:ba.vertexShader,fragmentShader:ba.fragmentShader,premultipliedAlpha:!0,blending:oi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Tt,this._oldClearAlpha=1,this._basic=new fn,this._fsQuad=new Zc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ft(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Rs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Rs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[],i=t/3;for(let s=0;s<t;s++)e.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new Xe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ft(.5,.5)},direction:{value:new ft(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`

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

				}`})}}Rs.BlurDirectionX=new ft(1,0);Rs.BlurDirectionY=new ft(0,1);const ha={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class CM extends Ls{constructor(){super(),this.isOutputPass=!0,this.uniforms=lr.clone(ha.uniforms),this.material=new Gd({name:ha.name,uniforms:this.uniforms,vertexShader:ha.vertexShader,fragmentShader:ha.fragmentShader}),this._fsQuad=new Zc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},jt.getTransfer(this._outputColorSpace)===te&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ec?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Tc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===wc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Cc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Rc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ac&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const RM="grayscale(1) sepia(1) hue-rotate(90deg) brightness(1.55) contrast(1.1)",Jd=2.5,PM=3.2,sd=.62,DM=.09,LM=2,IM=6.5,UM=3,NM=5.5,FM=`radial-gradient(circle at center,
    transparent 42%,
    rgba(0,20,40,0.3) 58%,
    rgba(0,0,0,0.45) 68%,
    rgba(0,0,0,0.82) 85%,
    rgba(0,0,0,0.96) 100%
  )`,OM=`radial-gradient(circle at center,
    transparent 38%,
    rgba(0,8,0,0.25) 52%,
    rgba(0,0,0,0.70) 70%,
    rgba(0,0,0,0.97) 100%
  )`,Gt=new O0;Gt.background=new Tt(857640);Gt.fog=new kc(396568,.017);const Wn=new Qe(55,window.innerWidth/window.innerHeight,.1,500);Wn.position.set(14,5,18);const le=new aM({antialias:!0});le.setSize(window.innerWidth,window.innerHeight);le.setPixelRatio(Math.min(window.devicePixelRatio,2));le.shadowMap.enabled=!0;le.shadowMap.type=bd;le.physicallyCorrectLights=!0;le.toneMapping=Xa;le.toneMappingExposure=1.18;le.shadowMap.enabled=!1;const BM=document.getElementById("root")??document.body;BM.appendChild(le.domElement);const Is=new TM(le),Qd=new wM(Gt,Wn);Is.addPass(Qd);const tf=new Rs(new ft(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2)),.04,.4,.5);Is.addPass(tf);const zM={uniforms:{tDiffuse:{value:null},tintColor:{value:new L(.85,.92,1)},tintStrength:{value:.12},vignetteOffset:{value:.9},vignetteDarkness:{value:1.15}},vertexShader:`
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
  `},VM=new $d(zM);Is.addPass(VM);const GM=new CM;Is.addPass(GM);const Ue=new lM(Wn,le.domElement);Ue.enableDamping=!0;Ue.dampingFactor=.05;Ue.minDistance=8;Ue.maxDistance=45;Ue.target.set(0,-5,0);Ue.autoRotate=!0;Ue.autoRotateSpeed=.3;Ue.addEventListener("change",()=>{const n=Wn.position.distanceTo(Ue.target),t=Math.max(0,Math.min(1,(n-Ue.minDistance)/(Ue.maxDistance-Ue.minDistance)));le.toneMappingExposure=1.18+t*.47});const Kc=new nm(9424895,3366,.62);Kc.name="hemiLight";Gt.add(Kc);const _n=new rm(1718894,.62);_n.name="ambientLight";Gt.add(_n);const sn=new qc(16774368,4.8);sn.name="sunLight";sn.position.set(12,28,8);sn.castShadow=!0;sn.shadow.mapSize.set(1024,1024);sn.shadow.camera.near=1;sn.shadow.camera.far=80;sn.shadow.camera.left=-20;sn.shadow.camera.right=20;sn.shadow.camera.top=20;sn.shadow.camera.bottom=-20;sn.shadow.bias=-.001;sn.shadow.normalBias=.02;Gt.add(sn);const so=new qc(2779832,.75);so.name="fillLight";so.position.set(-8,4,-12);Gt.add(so);const ro=new qc(51455,.52);ro.name="rimLight";ro.position.set(-10,-14,-8);Gt.add(ro);const je=12,Ve=12,Ea=[6,5,5,5],ci=Ea.reduce((n,t)=>n+t,0),ue=[{id:0,name:"Sunlight Zone",depth:"0 – 200m",color:2068424,emissive:1208240,lightColor:8382207,y:0,title:"Sunlight Zone (Epipelagic)",desc:"The sunlight zone stretches from the surface down to 200m. Sunlight penetrates fully here, enabling photosynthesis and supporting the richest biodiversity in the ocean. Home to colourful reef fish, dolphins, sharks, sea turtles, and vast schools of herring. The warm, well-lit waters teem with plankton that form the base of the marine food web.",creatures:["Dolphin","Shark","Sea Turtle","Clownfish","Jellyfish","Manta Ray"]},{id:1,name:"Twilight Zone",depth:"200 – 1000m",color:2179709,emissive:1255770,lightColor:5930495,y:-6,title:"Twilight Zone (Mesopelagic)",desc:"The twilight zone receives only faint, dim blue light. No photosynthesis occurs here, yet life thrives on marine snow — organic particles that drift down from above. Creatures like lanternfish, hatchetfish, and squid perform the largest daily migration on Earth, rising to feed at night and retreating to the dark by day. Many species are bioluminescent.",creatures:["Lanternfish","Hatchetfish","Firefly Squid","Swordfish","Oarfish"]},{id:2,name:"Midnight Zone",depth:"1000 – 4000m",color:1514066,emissive:658734,lightColor:4147657,y:-11,title:"Midnight Zone (Bathypelagic)",desc:"Complete darkness, crushing pressure, and near-freezing temperatures define the midnight zone. No sunlight reaches here — bioluminescence is the only light source. The iconic anglerfish lures prey with its glowing lure. Viperfish have transparent fangs, and giant squid lurk in the black water. Most residents are black or red (invisible in these wavelengths).",creatures:["Anglerfish","Viperfish","Giant Squid","Gulper Eel","Dragonfish"]},{id:3,name:"The Abyss",depth:"4000 – 6000m",color:329750,emissive:132107,lightColor:1451098,y:-16,title:"The Abyss (Abyssopelagic)",desc:"The abyss covers over 60% of the ocean floor. In total darkness and under immense pressure (over 600 atmospheres), specially adapted creatures survive on organic matter raining from above. Sea cucumbers drift across the sediment, tripod fish prop themselves on elongated fins, and giant isopods scavenge the barren plains. Hydrothermal vents create oases of chemosynthetic life.",creatures:["Sea Cucumber","Tripod Fish","Giant Isopod","Dumbo Octopus","Grenadier Fish"]}];let rd=0;ue.forEach((n,t)=>{n.y=-rd-Ea[t]/2,n.height=Ea[t],rd+=Ea[t]});let ef=null;{let s=function(d,h,g,b,M){d.clearRect(0,0,h,g),M?(d.shadowColor=M.color||"rgba(0,0,0,0.6)",d.shadowBlur=M.blur||14,d.shadowOffsetX=M.ox||0,d.shadowOffsetY=M.oy||0):(d.shadowColor="transparent",d.shadowBlur=0),d.textAlign="center",d.textBaseline="middle",d.font="900 480px Inter, sans-serif",d.fillStyle=b,d.fillText("OCEAN",h/2,g*.34),d.font="900 320px Inter, sans-serif",d.fillText("EXPLORER",h/2,g*.74)};var iS=s;const r=document.createElement("canvas");r.width=4096,r.height=1024;const a=r.getContext("2d");s(a,4096,1024,"rgba(210, 225, 235, 0.82)",{color:"rgba(80,130,200,0.18)",blur:0,ox:0,oy:0});const o=new Hn(r);o.anisotropy=le.capabilities.getMaxAnisotropy();const l=52,c=13,f=new fn({map:o,transparent:!0,opacity:1,depthWrite:!1,side:ye}),m=new tt(new nn(l,c),f);m.name="oceanExplorerTitle3D";const u=document.createElement("canvas");u.width=4096,u.height=1024;const p=u.getContext("2d");s(p,4096,1024,"rgba(4,12,36,0.85)",null);const _=new Hn(u);_.anisotropy=le.capabilities.getMaxAnisotropy();const y=new Ce;y.name="oceanExplorerTitleGroup";for(let d=1;d>=1;d--){const h=new fn({map:_,transparent:!0,opacity:.55-d*.06,depthWrite:!1,side:ye}),g=new tt(new nn(l,c),h);g.name="titleShadowLayer_"+d,g.position.z=-d*.35,y.add(g)}y.add(m),y.position.set(0,-ci/2+13,-Ve/2-4),Gt.add(y),ef=y}const Na=new Ce;Na.name="oceanGroup";Gt.add(Na);const _r=[];ue.forEach(n=>{const e=new pn(je,n.height+.04,Ve),i=new ht({color:n.color,transparent:!0,opacity:.9,side:Ye,roughness:.55,metalness:.02,emissive:n.emissive,emissiveIntensity:.5,polygonOffset:!0,polygonOffsetFactor:2,polygonOffsetUnits:2}),s=new tt(e,i);s.name="zonebox_"+n.id,s.position.set(0,n.y,0),s.userData.zoneId=n.id,s.userData.baseColor=n.color,s.userData.baseEmissive=n.emissive,Na.add(s),_r.push(s);let r;if(n.id===0){const l=je/2,c=n.height/2,f=Ve/2,m=new Float32Array([-l,-c,-f,l,-c,-f,l,-c,-f,l,-c,f,l,-c,f,-l,-c,f,-l,-c,f,-l,-c,-f,-l,-c,-f,-l,c,-f,l,-c,-f,l,c,-f,l,-c,f,l,c,f,-l,-c,f,-l,c,f]);r=new Ut,r.setAttribute("position",new Jt(m,3))}else r=new K0(e);const a=new ja({color:4491519,transparent:!0,opacity:.25}),o=new j0(r,a);o.name="zoneedge_"+n.id,o.position.copy(s.position),Na.add(o)});const $c=[];ue.forEach(n=>{const t=new nn(je,n.height),e=new fn({visible:!1,side:ye}),i=new tt(t,e);i.name="zonepick_"+n.id,i.position.set(0,n.y,Ve/2+.01),i.userData.zoneId=n.id,Gt.add(i),$c.push(i)});ue.forEach(n=>{const t=document.createElement("canvas");t.width=512,t.height=128;const e=t.getContext("2d");e.fillStyle="rgba(0,0,0,0)",e.fillRect(0,0,512,128),e.font="bold 38px Inter, sans-serif",e.fillStyle="rgba(160,220,255,0.85)",e.textAlign="left",e.fillText(n.name,20,55),e.font="26px Inter, sans-serif",e.fillStyle="rgba(100,180,255,0.65)",e.fillText(n.depth,20,95);const i=new Hn(t),s=new qa({map:i,transparent:!0,depthTest:!1}),r=new Hc(s);r.name="label_"+n.id,r.scale.set(6,1.5,1),r.position.set(-je/2+3,n.y+n.height/2-.5,Ve/2+.3),Gt.add(r)});const ad=32,cr=new nn(je,Ve,ad,ad);cr.rotateX(-Math.PI/2);const xl=cr.attributes.position,gc=[];for(let n=0;n<xl.count;n++)gc.push({ox:xl.getX(n),oz:xl.getZ(n),phase:Math.random()*Math.PI*2});const kM=new ht({color:35020,transparent:!0,opacity:.78,roughness:.05,metalness:.6,emissive:13158,emissiveIntensity:.4}),xr=new tt(cr,kM);xr.name="waveMesh";xr.position.set(0,0,0);xr.receiveShadow=!0;Gt.add(xr);const vr=300,nf=new Ut,Ta=new Float32Array(vr*3),sf=new Float32Array(vr),HM=new Float32Array(vr);for(let n=0;n<vr;n++)Ta[n*3]=(Math.random()-.5)*je,Ta[n*3+1]=Math.random()*-ci,Ta[n*3+2]=(Math.random()-.5)*Ve,sf[n]=.005+Math.random()*.015,HM[n]=Math.random();nf.setAttribute("position",new Jt(Ta,3));const WM=new mr({color:8965375,size:.06,transparent:!0,opacity:.55,sizeAttenuation:!0}),Fa=new Ka(nf,WM);Fa.name="particles";Gt.add(Fa);function Rn(n,t,e=16777215){const i=new Ce;i.userData.isFish=!0;const s={};new Tt(n).getHSL(s);const a=s.h>.38&&s.h<.62&&s.s>.25?14706706:new Tt(n).multiplyScalar(.55).getHex(),o=new Tt(n).lerp(new Tt(0),.45).getHex(),l=new ht({color:n,flatShading:!0,roughness:.55,metalness:.05}),c=new ht({color:o,flatShading:!0,roughness:.6,metalness:0}),f=new ht({color:a,flatShading:!0,roughness:.5,metalness:0,side:ye}),m=new ht({color:1118481,roughness:.1}),u=t,p=new Float32Array([u*1.6,0,0,u*.2,u*.55,u*.38,u*.2,-u*.42,u*.28,u*.2,-u*.42,-u*.28,u*.2,u*.55,-u*.38,-u*.9,u*.28,u*.18,-u*.9,-u*.28,u*.18,-u*.9,-u*.28,-u*.18,-u*.9,u*.28,-u*.18,-u*1.55,0,0]),_=[0,1,4,0,4,3,1,5,8,1,8,4,5,9,8],y=[0,2,1,0,3,2,2,6,5,2,5,1,6,9,5,0,4,8,0,8,3,3,8,7,3,7,2,7,9,6,8,9,7,2,3,7];function d(M,w){const T=[];M.forEach(x=>{T.push(p[x*3],p[x*3+1],p[x*3+2])});const C=new Ut;return C.setAttribute("position",new Jt(new Float32Array(T),3)),C.computeVertexNormals(),new tt(C,w)}const h=d(_,l),g=d(y,c);i.add(h),i.add(g);{const M=new Float32Array([u*.35,u*.55,0,-u*.3,u*.55,0,u*.05,u*1.15,0]),w=new Ut;w.setAttribute("position",new Jt(M,3)),w.computeVertexNormals(),i.add(new tt(w,f))}[-1,1].forEach(M=>{const w=new Float32Array([u*.5,-u*.05,M*u*.38,u*0,-u*.2,M*u*.38,u*.15,-u*.15,M*u*.82]),T=new Ut;T.setAttribute("position",new Jt(w,3)),T.computeVertexNormals(),i.add(new tt(T,f))}),[-1,1].forEach(M=>{const w=new Float32Array([-u*1.55,0,0,-u*1.55,M*u*.18,0,-u*2.25,M*u*.72,0]),T=new Ut;T.setAttribute("position",new Jt(w,3)),T.computeVertexNormals(),i.add(new tt(T,f))});const b=new tt(new we(u*.12,5,5),m);return b.position.set(u*1.1,u*.18,u*.36),i.add(b),i}function rf(n){const t=new Ce;t.userData.isFish=!0;const e=n,i=new ht({color:4168373,flatShading:!0,roughness:.4,metalness:0}),s=new ht({color:13166837,flatShading:!0,roughness:.45,metalness:0}),r=new ht({color:1989746,flatShading:!0,roughness:.55,metalness:0,side:ye}),a=new ht({color:657930,roughness:.1});function o(u,p){const _=new Ut;return _.setAttribute("position",new Jt(new Float32Array(u),3)),_.computeVertexNormals(),new tt(_,p)}const l=[e*2.1,0,0,e*1.4,e*.38,0,e*1.35,e*.1,e*.32,e*1.38,-e*.28,0,e*1.35,e*.1,-e*.32,e*.1,e*.52,0,e*.05,e*.12,e*.44,e*.08,-e*.38,0,e*.05,e*.12,-e*.44,-e*1.1,e*.22,0,-e*1.12,e*.04,e*.18,-e*1.08,-e*.16,0,-e*1.12,e*.04,-e*.18,-e*1.55,0,0],c=[0,1,2,0,4,1,1,5,6,1,6,2,4,8,5,4,1,5,5,9,10,5,10,6,8,12,9,8,9,5,9,13,10,12,13,9,2,6,7,2,7,3,4,3,7,4,7,8,6,10,11,6,11,7,8,7,11,8,11,12,10,13,11,12,11,13],f=[0,3,2,0,4,3,3,7,6,3,6,2,7,11,10,7,10,6,11,13,10,7,3,4,7,4,8,11,7,8,11,8,12,13,11,12];t.add(o(c.map(u=>[l[u*3],l[u*3+1],l[u*3+2]]).flat(),i)),t.add(o(f.map(u=>[l[u*3],l[u*3+1],l[u*3+2]]).flat(),s));{const u=new Float32Array([e*2.1,0,0,e*1.9,e*.12,e*.1,e*1.9,e*.12,-e*.1,e*1.9,-e*.1,0,e*2.65,-e*.06,0]),p=[0,1,2,0,2,3,0,3,4,1,0,4,2,1,4,3,2,4];t.add(o(p.map(_=>[u[_*3],u[_*3+1],u[_*3+2]]).flat(),i))}{const u=new Float32Array([e*.15,e*.52,e*.04,-e*.35,e*.52,e*.04,e*.05,e*.52,-e*.04,-e*.25,e*.52,-e*.04,-e*.08,e*1.28,0]),p=[0,2,4,2,3,4,3,1,4,1,0,4,0,1,3,0,3,2];t.add(o(p.map(_=>[u[_*3],u[_*3+1],u[_*3+2]]).flat(),r))}[-1,1].forEach(u=>{const p=new Float32Array([e*.7,-e*.35,u*e*.42,e*.35,-e*.42,u*e*.42,e*.55,-e*.28,u*e*.9,e*.15,-e*.38,u*e*.82,e*.5,-e*.46,u*e*1.1]),_=[0,2,1,2,3,1,2,4,3];t.add(o(_.map(y=>[p[y*3],p[y*3+1],p[y*3+2]]).flat(),r))}),[-1,1].forEach(u=>{const p=new Float32Array([-e*1.55,e*.04,u*e*.06,-e*1.55,-e*.04,u*e*.06,-e*1.78,e*.06,u*e*.32,-e*1.78,-e*.06,u*e*.32,-e*2.1,0,u*e*.62]),_=[0,2,1,2,3,1,2,4,3];t.add(o(_.map(y=>[p[y*3],p[y*3+1],p[y*3+2]]).flat(),r))});const m=new tt(new we(e*.1,5,5),a);m.position.set(e*1.42,e*.22,e*.3),t.add(m);{const u=new Float32Array([e*1.5,e*.32,e*.28,e*1.55,e*.08,e*.34,e*1.2,e*.1,e*.42,e*1.18,e*.35,e*.35]),p=[0,1,2,0,2,3];t.add(o(p.map(_=>[u[_*3],u[_*3+1],u[_*3+2]]).flat(),new ht({color:1718852,flatShading:!0,roughness:.6})))}return t}function Us(n,t){const e=new Ce,i=new Tt(t),s=8,r=3,a=[],o=[];a.push(0,n*.62,0);const l=[{y:n*.38,r:n*.58},{y:n*.1,r:n*.92},{y:-n*.08,r:n*1}];for(let d=0;d<r;d++){const{y:h,r:g}=l[d];for(let b=0;b<s;b++){const M=b/s*Math.PI*2;a.push(Math.cos(M)*g,h,Math.sin(M)*g)}}for(let d=0;d<s;d++){const h=1+d,g=1+(d+1)%s;o.push(0,h,g)}for(let d=0;d<r-1;d++){const h=1+d*s,g=h+s;for(let b=0;b<s;b++){const M=h+b,w=h+(b+1)%s,T=g+b,C=g+(b+1)%s;o.push(M,T,w,w,T,C)}}const c=new Ut;c.setAttribute("position",new Zt(a,3)),c.setIndex(o),c.computeVertexNormals();const f=new ht({color:i,transparent:!0,opacity:.72,emissive:i,emissiveIntensity:.45,roughness:.25,metalness:0,flatShading:!0,side:Gn,depthWrite:!1}),m=new tt(c,f);m.name="jellyBell",e.add(m);const u=new ht({color:i,transparent:!0,opacity:.3,emissive:i,emissiveIntensity:.2,roughness:.3,metalness:0,flatShading:!0,side:Ye,depthWrite:!1}),p=new ht({color:i,transparent:!0,opacity:.6,emissive:i,emissiveIntensity:.55,roughness:.2,flatShading:!0,side:ye,depthWrite:!1});for(let d=0;d<4;d++){const h=d/4*Math.PI*2,g=Math.cos(h)*n*.28,b=Math.sin(h)*n*.28,M=3,w=[],T=[],C=n*.65,x=3;for(let A=0;A<=x;A++){const D=-n*.08-A*C,N=n*.08*(1-A/x*.6);for(let z=0;z<M;z++){const B=z/M*Math.PI*2;w.push(Math.cos(B)*N,D,Math.sin(B)*N)}}for(let A=0;A<x;A++){const D=A*M,N=D+M;for(let z=0;z<M;z++){const B=(z+1)%M;T.push(D+z,N+z,D+B,D+B,N+z,N+B)}}const S=new Ut;S.setAttribute("position",new Zt(w,3)),S.setIndex(T),S.computeVertexNormals();const P=new tt(S,p);P.position.set(g,0,b),P.rotation.y=h,e.add(P)}const _=new ht({color:i,transparent:!0,opacity:.38,emissive:i,emissiveIntensity:.5,roughness:.3,flatShading:!0,depthWrite:!1}),y=[1.8,2.4,1.5,2.8,2,1.6,2.5,1.9];for(let d=0;d<4;d++){const h=n*y[d],g=new tt(new Fe(n*.018,n*.004,h,3,1),_),b=d/8*Math.PI*2+.2;g.position.set(Math.cos(b)*n*.78,-n*.08-h*.5,Math.sin(b)*n*.78),g.rotation.z=Math.sin(b)*.12,g.rotation.x=Math.cos(b)*.12,e.add(g)}return e.userData.isJelly=!0,e.userData.bellMesh=m,e.userData.jellyMats=[f,u,p,_],e}function af(n){const t=new Ce;t.userData.isFish=!0;const e=n,i=new ht({color:1579039,flatShading:!0,roughness:.8,metalness:0,emissive:328968,emissiveIntensity:.3}),s=new ht({color:657940,flatShading:!0,roughness:.9,metalness:0}),r=new ht({color:1184282,flatShading:!0,roughness:.7,metalness:0,side:ye});new ht({color:14540236,flatShading:!0,roughness:.3});const a=new ht({color:1118464,flatShading:!0,roughness:.1}),o=new ht({color:2631728,flatShading:!0,roughness:.85});function l(y,d,h){const g=[];d.forEach(M=>{g.push(y[M*3],y[M*3+1],y[M*3+2])});const b=new Ut;return b.setAttribute("position",new Jt(new Float32Array(g),3)),b.computeVertexNormals(),new tt(b,h)}const c=new Float32Array([e*1.5,0,0,e*.8,e*.5,e*.45,e*.8,-e*.55,e*.35,e*.8,-e*.55,-e*.35,e*.8,e*.5,-e*.45,-e*.2,e*.85,e*.65,-e*.2,-e*.7,e*.55,-e*.2,-e*.7,-e*.55,-e*.2,e*.85,-e*.65,-e*1.1,e*.35,e*.28,-e*1.1,-e*.3,e*.22,-e*1.1,-e*.3,-e*.22,-e*1.1,e*.35,-e*.28,-e*1.7,0,0]),f=[0,1,4,1,5,8,1,8,4,5,9,12,5,12,8,9,13,12],m=[0,2,1,0,3,2,0,4,3,1,2,6,1,6,5,4,8,7,3,4,7,2,3,7,2,7,6,5,6,10,5,10,9,8,12,11,7,8,11,6,7,11,6,11,10,10,13,9,10,11,13,11,12,13];t.add(l(c,f,i)),t.add(l(c,m,s));{const y=new Float32Array([e*1.5,-e*.1,0,e*.6,-e*.65,e*.3,e*.6,-e*.65,-e*.3,e*.6,-e*.2,0]),d=[0,1,3,0,3,2,0,2,1,1,2,3];t.add(l(y,d,s))}{const y=new Float32Array([e*.1,e*.85,0,-e*.8,e*.55,0,-e*.25,e*1.45,0]),d=new Ut;d.setAttribute("position",new Jt(y,3)),d.computeVertexNormals(),t.add(new tt(d,r))}[-1,1].forEach(y=>{const d=new Float32Array([e*.3,-e*.15,y*e*.45,-e*.3,-e*.35,y*e*.45,e*0,-e*.25,y*e*1]),h=new Ut;h.setAttribute("position",new Jt(d,3)),h.computeVertexNormals(),t.add(new tt(h,r))}),[-1,1].forEach(y=>{const d=new Float32Array([-e*1.7,0,0,-e*1.5,y*e*.15,0,-e*2.3,y*e*.55,0]),h=new Ut;h.setAttribute("position",new Jt(d,3)),h.computeVertexNormals(),t.add(new tt(h,r))});{const y=new Float32Array([e*1,e*.5,0,e*.6,e*1.1,e*.04,e*1,e*1.55,-e*.03,e*1.35,e*1.7,0,e*1,e*.5,e*.06,e*.6,e*1.1,-e*.02,e*1,e*1.55,e*.03,e*1.35,e*1.7,e*.06]),d=[0,1,5,0,5,4,1,2,6,1,6,5,2,3,7,2,7,6];t.add(l(y,d,o))}const u=new tt(new er(e*.2,0),new ht({color:8978380,emissive:65450,emissiveIntensity:4,transparent:!0,opacity:.9,flatShading:!0,roughness:.05}));u.position.set(e*1.35,e*1.7,0),t.add(u);const p=new tt(new er(e*.18,0),a);p.position.set(e*.95,e*.28,e*.5),t.add(p);const _=new tt(new er(e*.12,0),new ht({color:14535680,emissive:16768256,emissiveIntensity:1.4,flatShading:!0,roughness:.05}));return _.position.set(e*1.05,e*.28,e*.58),t.add(_),t}function Jc(n,t){const e=new Ce,i=n,s=new Tt(t);function r(S,P,A){const D=new Ut;return D.setAttribute("position",new Jt(new Float32Array(S),3)),D.setIndex(P),D.computeVertexNormals(),new tt(D,A)}const a=new ht({color:t,flatShading:!0,transparent:!0,opacity:.88,emissive:s,emissiveIntensity:.3,roughness:.25,metalness:0}),o=new ht({color:new Tt(t).multiplyScalar(.45).getHex(),flatShading:!0,transparent:!0,opacity:.88,emissive:s,emissiveIntensity:.15,roughness:.3,metalness:0}),l=new ht({color:t,flatShading:!0,transparent:!0,opacity:.92,emissive:s,emissiveIntensity:.35,roughness:.2,metalness:0}),c=new ht({color:t,flatShading:!0,transparent:!0,opacity:.65,emissive:s,emissiveIntensity:.55,roughness:.2,metalness:0,side:ye}),f=new ht({color:16777215,emissive:new Tt(t).lerp(new Tt(16777215),.6).getHex(),emissiveIntensity:3.5,roughness:.05,metalness:0,transparent:!0,opacity:.92}),m=new ht({color:328968,roughness:.05,metalness:.3}),u=new ht({color:new Tt(t).lerp(new Tt(16777215),.4).getHex(),emissive:s,emissiveIntensity:1.8,roughness:.05,metalness:0}),p=6,_=[{z:i*1.35,r:0},{z:i*.8,r:i*.18},{z:i*.1,r:i*.44},{z:-i*.3,r:i*.48},{z:-i*.75,r:i*.32},{z:-i*1,r:i*.18}],y=[];y.push(0,0,i*1.35);for(let S=1;S<_.length;S++){const{z:P,r:A}=_[S];for(let D=0;D<p;D++){const N=D/p*Math.PI*2-Math.PI/6;y.push(Math.cos(N)*A,Math.sin(N)*A,P)}}const d=[],h=[];for(let S=0;S<p;S++){const P=1+S,A=1+(S+1)%p;S<p/2?d.push(0,P,A):h.push(0,P,A)}for(let S=0;S<_.length-2;S++){const P=1+S*p,A=P+p;for(let D=0;D<p;D++){const N=P+D,z=P+(D+1)%p,B=A+D,H=A+(D+1)%p;D<p/2?d.push(N,B,z,z,B,H):h.push(N,B,z,z,B,H)}}const g=r(y,d,a);g.name="squidMantleTop";const b=r(y,h,o);b.name="squidMantleBot",e.add(g),e.add(b);const M=[{z:-i*1,r:i*.18},{z:-i*1.35,r:i*.38},{z:-i*1.58,r:i*.34},{z:-i*1.72,r:i*.28}],w=[];for(const{z:S,r:P}of M)for(let A=0;A<p;A++){const D=A/p*Math.PI*2-Math.PI/6;w.push(Math.cos(D)*P,Math.sin(D)*P,S)}const T=[];for(let S=0;S<M.length-1;S++){const P=S*p,A=P+p;for(let D=0;D<p;D++){const N=P+D,z=P+(D+1)%p,B=A+D,H=A+(D+1)%p;T.push(N,B,z,z,B,H)}}const C=r(w,T,l);C.name="squidHead",e.add(C),[-1,1].forEach((S,P)=>{const A=[i*.85,S*i*.05,i*1.1,i*.25,S*i*.08,i*.6,i*.15,S*i*.08,i*.05,i*.55,S*i*.05,-i*.05,i*.55,S*i*.68,i*.55],N=r(A,[0,4,1,1,4,2,0,1,4,2,4,3],a);N.name="squidFin"+P,e.add(N)});for(let S=0;S<8;S++){const P=S/8*Math.PI*2,A=Math.cos(P)*i*.22,D=Math.sin(P)*i*.22,N=i*1.4+S%3*i*.1,z=i*.055,B=i*.008,H=[A+Math.cos(P)*z,D+Math.sin(P)*z,-i*1.72,A+Math.cos(P+2.094)*z,D+Math.sin(P+2.094)*z,-i*1.72,A+Math.cos(P+4.189)*z,D+Math.sin(P+4.189)*z,-i*1.72,A*2.6+Math.cos(P)*B,D*2.6+Math.sin(P)*B,-i*1.72-N,A*2.6+Math.cos(P+2.094)*B,D*2.6+Math.sin(P+2.094)*B,-i*1.72-N,A*2.6+Math.cos(P+4.189)*B,D*2.6+Math.sin(P+4.189)*B,-i*1.72-N],Q=r(H,[0,3,1,1,3,4,1,4,2,2,4,5,2,5,0,0,5,3],c);Q.name="squidArm"+S,e.add(Q)}return[-1,1].forEach((S,P)=>{const A=new tt(new we(i*.18,6,5),m);A.position.set(S*i*.32,i*.04,-i*1.38),A.name="squidEye"+P,e.add(A);const D=new tt(new we(i*.11,5,4),u);D.position.set(S*i*.38,i*.04,-i*1.46),D.name="squidIris"+P,e.add(D)}),[[0,-i*.45,i*.6],[i*.16,-i*.42,i*.4],[-i*.16,-i*.42,i*.4],[0,-i*.47,i*.1],[i*.18,-i*.44,-i*.05],[-i*.18,-i*.44,-i*.05],[i*.3,-i*.22,-i*1.25],[-i*.3,-i*.22,-i*1.25],[i*.2,-i*.3,-i*1.48],[-i*.2,-i*.3,-i*1.48],[0,0,i*1.3]].forEach((S,P)=>{const A=new tt(new we(i*.028,4,3),f);A.position.set(...S),A.name="squidPhoto"+P,e.add(A)}),e.userData.isSquid=!0,e.userData.squidMats=[a,o,l,c],e.userData.photoMat=f,e.userData.eyeIrisMat=u,e}function XM(n){const t=new Ce;t.userData.isFish=!0;const e=new sa({color:4018272,flatShading:!0,roughness:.7,metalness:0}),i=new sa({color:14082024,flatShading:!0,roughness:.65,metalness:0}),s=new sa({color:6982298,flatShading:!0,roughness:.55,metalness:.05}),r=new sa({color:657930,roughness:.05,metalness:.2}),a=n,o=new Float32Array([a*2,0,0,a*1.5,a*.28,-a*.18,a*1.5,a*.22,a*.22,a*1.5,-a*.2,a*.18,a*1.5,-a*.18,-a*.2,a*.4,a*.5,-a*.32,a*.4,a*.42,a*.42,a*.4,-a*.36,a*.38,a*.4,-a*.34,-a*.38,-a*.8,a*.42,-a*.28,-a*.8,a*.36,a*.36,-a*.8,-a*.3,a*.3,-a*.8,-a*.28,-a*.3,-a*1.7,a*.22,-a*.14,-a*1.7,a*.18,a*.18,-a*1.7,-a*.14,a*.14,-a*1.7,-a*.13,-a*.15,-a*2.2,0,0]),l=[0,1,5,0,5,6,0,6,2,5,9,6,9,10,6,9,13,10,13,14,10,13,17,14,1,2,6,1,6,5,2,3,7,2,7,6,6,7,11,6,11,10,10,11,15,10,15,14],c=[0,3,4,0,4,8,0,8,7,0,7,3,7,8,12,7,12,11,11,12,16,11,16,15,15,16,17,3,8,7,3,7,4,8,12,11,8,11,7,4,3,8];function f(T,C,x){const S=new Ut;return S.setAttribute("position",new Jt(T.slice(),3)),S.setIndex(C),S.computeVertexNormals(),new tt(S,x)}const m=f(o,l,s);m.name="sharkBodyTop";const u=f(o,c,i);u.name="sharkBodyBot",t.add(m),t.add(u);const p=new Float32Array([-a*.05,a*.48,-a*.06,-a*.05,a*.48,a*.06,-a*.55,a*1.12,-a*.04,-a*.55,a*1.12,a*.04,-a*.75,a*.48,-a*.06,-a*.75,a*.48,a*.06]),y=f(p,[0,2,1,1,2,3,2,4,3,3,4,5,0,1,4,1,5,4],e);y.name="sharkDorsal",t.add(y);const d=new Float32Array([-a*2,a*.08,-a*.06,-a*2,a*.08,a*.06,-a*2.8,a*.72,-a*.04,-a*2.8,a*.72,a*.04,-a*2.5,-a*.4,-a*.04,-a*2.5,-a*.4,a*.04]),g=f(d,[0,2,1,1,2,3,0,1,4,1,5,4,0,4,2,1,3,5],e);g.name="sharkCaudal",t.add(g),[-1,1].forEach((T,C)=>{const x=new Float32Array([a*.9,-a*.1,T*a*.12,a*.3,-a*.18,T*a*.12,a*.55,-a*.38,T*a*.8,a*.75,-a*.14,T*a*.12]),P=f(x,[0,2,1,0,3,2,0,1,3],e);P.name="sharkPec"+C,t.add(P)});const b=new Float32Array([-a*1.2,a*.12,-a*.05,-a*1.2,a*.12,a*.05,-a*1.5,a*.48,-a*.04,-a*1.5,a*.48,a*.04,-a*1.65,a*.12,-a*.05,-a*1.65,a*.12,a*.05]),w=f(b,[0,2,1,1,2,3,2,4,3,3,4,5,0,1,4,1,5,4],e);return w.name="sharkAnal2",t.add(w),[-1,1].forEach((T,C)=>{const x=new tt(new we(a*.075,5,4),r);x.position.set(a*1.45,a*.18,T*a*.28),x.name="sharkEye"+C,t.add(x)}),t}function YM(n){const t=new Ce;t.userData.isFish=!0;const e=n,i=new ht({color:1714746,flatShading:!0,roughness:.65,metalness:.05}),s=new ht({color:14213096,flatShading:!0,roughness:.6,metalness:0}),r=new ht({color:1121834,flatShading:!0,roughness:.7,metalness:0}),a=new ht({color:526344,roughness:.05,metalness:.2});function o(C,x,S){const P=new Ut;return P.setAttribute("position",new Jt(new Float32Array(C),3)),P.setIndex(x),P.computeVertexNormals(),new tt(P,S)}const l=new Ce;l.name="mantaWingLeft";const c=new Ce;c.name="mantaWingRight",t.add(l),t.add(c),t.userData.wingLeft=l,t.userData.wingRight=c,t.userData.isManta=!0;const f=[e*1.1,e*.06,0,e*.1,e*.1,-e*2.2,-e*1.3,e*.04,0,e*.7,e*.14,-e*1.1,-e*.55,e*.1,-e*1.3,e*.05,e*.22,0,e*1.1,-e*.04,0,-e*1.3,-e*.04,0,e*.05,-e*.08,0,e*.7,-e*.06,-e*1.1,-e*.55,-e*.06,-e*1.3,e*.1,-e*.05,-e*2.2],m=[0,3,5,3,1,5,1,4,5,4,2,5,0,5,3],u=[6,8,9,8,11,9,11,10,9,10,7,9,6,9,8],p=o(f,m,i);p.name="mantaLWingTop";const _=o(f,u,s);_.name="mantaLWingBot",l.add(p),l.add(_);const y=[e*1.1,e*.06,0,e*.1,e*.1,e*2.2,-e*1.3,e*.04,0,e*.7,e*.14,e*1.1,-e*.55,e*.1,e*1.3,e*.05,e*.22,0,e*1.1,-e*.04,0,-e*1.3,-e*.04,0,e*.05,-e*.08,0,e*.7,-e*.06,e*1.1,-e*.55,-e*.06,e*1.3,e*.1,-e*.05,e*2.2],d=[0,5,3,3,5,1,1,5,4,4,5,2,0,3,5],h=[6,9,8,8,9,11,11,9,10,10,9,7,6,8,9],g=o(y,d,i);g.name="mantaRWingTop";const b=o(y,h,s);b.name="mantaRWingBot",c.add(g),c.add(b),[-1,1].forEach((C,x)=>{const S=[e*1.1,e*.05,C*e*.05,e*1.4,e*.08,C*e*.35,e*1.55,-e*.02,C*e*.55,e*.9,e*.02,C*e*.3],A=o(S,[0,1,3,1,2,3,0,2,1],r);A.name="mantaHorn"+x,(C===-1?l:c).add(A)});const M=[-e*1.3,e*.04,e*.06,-e*1.3,e*.04,-e*.06,-e*2.8,e*0,e*.02,-e*2.8,e*0,-e*.02,-e*3.8,-e*.04,e*.01,-e*3.8,-e*.04,-e*.01],T=o(M,[0,1,2,1,3,2,2,3,4,3,5,4],r);return T.name="mantaTail",t.add(T),[-1,1].forEach((C,x)=>{const S=new tt(new we(e*.06,5,4),a);S.position.set(e*.85,e*.1,C*e*.28),S.name="mantaEye"+x,t.add(S)}),t}function of(n){const t=new Ce,e=new ht({color:9127187,roughness:.9,metalness:0}),i=new ht({color:13789470,roughness:.65,emissive:3806464,emissiveIntensity:.3}),s=new tt(new Xc(n*.35,n*1.8,5,10),e);s.rotation.z=Math.PI/2,t.add(s);const r=new Fe(n*.04,n*.06,n*.14,4),a=new ht({color:8010767,roughness:.95});for(let o=0;o<3;o++){const l=o/3*Math.PI*2;for(let c=0;c<6;c++){const f=new tt(r,a);f.position.set((c/5-.5)*n*1.6,Math.cos(l)*n*.37,Math.sin(l)*n*.37),f.rotation.x=l,t.add(f)}}for(let o=0;o<6;o++){const l=o/6*Math.PI*2,c=new tt(new Fe(n*.03,n*.05,n*.3,4),i);c.position.set(n*1.05,Math.cos(l)*n*.17,Math.sin(l)*n*.17),c.rotation.z=Math.cos(l)*.5+Math.PI/2,t.add(c)}return t}function qM(n){const t=new Ce,e=new ht({color:855322,roughness:.7,metalness:0,emissive:263176,emissiveIntensity:.2}),i=new ht({color:1703936,roughness:.8,emissive:655360,emissiveIntensity:.3}),s=new tt(new we(n*.52,8,7),i);s.scale.set(1.35,.95,1),s.position.set(-n*.38,-n*.12,0),t.add(s);const r=new tt(new we(n*.35,7,6),e);r.position.set(-n*.28,n*.22,0),t.add(r);for(let o=0;o<8;o++){const l=o/7,c=Math.max(n*(.28-l*.23),.01),f=new tt(new we(c,6,5),e);f.position.set(o*n*.55,Math.sin(o*.7)*n*.16,0),t.add(f)}const a=new tt(new we(n*.07,6,6),new ht({color:16711935,emissive:13369548,emissiveIntensity:2.5,transparent:!0,opacity:.85}));return a.position.set(7*n*.55,0,0),t.add(a),[-1,1].forEach(o=>{const l=new tt(new we(n*.11,6,6),new ht({color:13056,emissive:65348,emissiveIntensity:.7}));l.position.set(-n*.12,n*.3,o*n*.28),t.add(l)}),t}const Qc=[];function se(n,t,e=.06,i=.8){const s=ue[t],r=s.y-s.height/2+.5,a=s.y+s.height/2-.5;n.position.y=r+Math.random()*(a-r),n.position.x=(Math.random()-.5)*(je-2),n.position.z=(Math.random()-.5)*(Ve-2),n.userData={zoneId:t,floatAmp:e,floatSpeed:i,floatOffset:Math.random()*Math.PI*2,baseY:n.position.y,baseX:n.position.x,driftDir:(Math.random()-.5)*.003,rotSpeed:(Math.random()-.5)*.005,wobblePhase:Math.random()*Math.PI*2,isFish:!!n.userData.isFish,isManta:!!n.userData.isManta,isJelly:!!n.userData.isJelly,isSquid:!!n.userData.isSquid,wingLeft:n.userData.wingLeft||null,wingRight:n.userData.wingRight||null,bellMesh:n.userData.bellMesh||null,jellyMats:n.userData.jellyMats||null,squidMats:n.userData.squidMats||null,photoMat:n.userData.photoMat||null,eyeIrisMat:n.userData.eyeIrisMat||null},Gt.add(n),Qc.push(n)}const lf=rf(.32);lf.name="dolphin1";se(lf,0,.08,1.2);const cf=rf(.28);cf.name="dolphin2";se(cf,0,.1,1);const hf=XM(.4);hf.name="shark1";se(hf,0,.05,.6);const uf=Rn(1739386,.18);uf.name="fish1";se(uf,0,.12,1.5);const df=Rn(2992284,.15);df.name="fish2";se(df,0,.15,1.8);const ff=Rn(948846,.16);ff.name="fish3";se(ff,0,.1,1.3);const pf=Rn(3915696,.14);pf.name="fish4";se(pf,0,.13,1.6);const mf=Us(.3,15632639);mf.name="jelly1";se(mf,0,.07,.5);const gf=Us(.25,16746666);gf.name="jelly2";se(gf,0,.09,.7);const _f=YM(.55);_f.name="mantaRay";se(_f,0,.05,.38);const xf=Jc(.35,10040319);xf.name="squid1";se(xf,1,.06,.9);const vf=Jc(.3,3386111);vf.name="squid2";se(vf,1,.08,1.1);const Mf=Rn(1127253,.18,65535);Mf.name="lanternFish1";se(Mf,1,.07,1);const Sf=Rn(1122884,.15,8978431);Sf.name="lanternFish2";se(Sf,1,.09,1.2);const yf=Rn(858675,.16,4521898);yf.name="lanternFish3";se(yf,1,.06,.8);const th=Rn(3359846,.2,11206655);th.scale.set(.7,1.5,.4);th.name="hatchet";se(th,1,.05,.7);const bf=Us(.28,4474111);bf.name="jelly3";se(bf,1,.06,.4);const Ef=af(.35);Ef.name="angler1";se(Ef,2,.04,.5);const Tf=af(.28);Tf.name="angler2";se(Tf,2,.05,.6);const wf=qM(.3);wf.name="gulper1";se(wf,2,.03,.4);const Af=Rn(657940,.22,65416);Af.name="viper1";se(Af,2,.04,.5);const Cf=Jc(.4,2228275);Cf.name="squid3";se(Cf,2,.03,.3);const Rf=Us(.32,204);Rf.name="jelly4";se(Rf,2,.05,.3);const Pf=of(.35);Pf.name="seaCuc1";se(Pf,3,.02,.2);const Df=of(.3);Df.name="seaCuc2";se(Df,3,.02,.25);const Lf=Rn(1118481,.2,16777215);Lf.name="tripodFish";se(Lf,3,.02,.3);const If=Us(.35,16746700);If.name="dumboOcto";se(If,3,.03,.25);const eh=Rn(4473924,.22,14540253);eh.scale.set(.7,.5,1.2);eh.name="isopod";se(eh,3,.015,.15);const Uf=Us(.22,13107);Uf.name="jelly5";se(Uf,3,.025,.2);const Yt=new Ce;Yt.name="shipGroup";Yt.position.set(0,0,0);Gt.add(Yt);const jM=new ht({color:13378048,flatShading:!0,roughness:.7,metalness:.05}),Nf=new ht({color:10033664,flatShading:!0,roughness:.75,metalness:.05}),Ff=new ht({color:15262936,flatShading:!0,roughness:.6,metalness:0}),Mr=new ht({color:15789802,flatShading:!0,roughness:.5,metalness:0}),ZM=new ht({color:14701824,flatShading:!0,roughness:.55,metalness:0}),ao=new ht({color:1842208,flatShading:!0,roughness:.9,metalness:0}),Ns=new ht({color:8030862,flatShading:!0,roughness:.55,metalness:.35}),nh=new ht({color:12107972,flatShading:!0,roughness:.45,metalness:.5});function vn(n,t,e){const i=new Ut;return i.setAttribute("position",new Jt(new Float32Array(n),3)),i.setIndex(t),i.computeVertexNormals(),new tt(i,e)}const oo=[1.92,.22,-.08,1.92,.22,.08,1.8,0,-.22,1.8,0,.22,1.65,-.44,-.16,1.65,-.44,.16,-.2,.22,-.58,-.2,.22,.58,-.2,0,-.62,-.2,0,.62,-.2,-.52,-.4,-.2,-.52,.4,-1.88,.22,-.52,-1.88,.22,.52,-1.88,0,-.54,-1.88,0,.54,-1.88,-.46,-.38,-1.88,-.46,.38],KM=[0,6,1,1,6,7,6,12,7,7,12,13,0,1,2,1,3,2],$M=[0,2,6,2,8,6,6,8,12,8,14,12,1,7,3,3,7,9,7,13,9,9,13,15],JM=[2,4,8,4,10,8,3,9,5,5,9,11,8,10,14,10,16,14,9,15,11,11,15,17,2,3,4,3,5,4,14,16,15,15,16,17],QM=[4,5,10,5,11,10,10,11,16,11,17,16],Of=vn(oo,KM,Ff);Of.name="hullDeck";const Bf=vn(oo,$M,Mr);Bf.name="hullSide";const zf=vn(oo,JM,jM);zf.name="hullRed";const Vf=vn(oo,QM,Nf);Vf.name="hullKeel";[Of,Bf,zf,Vf].forEach(n=>{n.castShadow=!0,Yt.add(n)});[-1,1].forEach((n,t)=>{const e=n*.61,s=vn([1.8,-.04,e,1.8,.04,e,-1.88,.04,e,-1.88,-.04,e],[0,1,3,1,2,3],ao);s.name="waterlineStripe_"+t,Yt.add(s)});const t1=[2.12,-.3,0,1.82,-.22,-.12,1.82,-.22,.12,1.62,-.46,-.1,1.62,-.46,.1],Gf=vn(t1,[0,1,2,1,3,2,3,4,2,1,0,3,2,4,0,3,0,4],Nf);Gf.name="bowBulb";Yt.add(Gf);const lo=new tt(new pn(3.82,.06,1.16),Ff);lo.name="deckSlab";lo.position.set(.02,.25,0);lo.castShadow=!0;Yt.add(lo);const e1=[-.15,.28,-.42,-.15,.28,.42,-1.48,.28,-.38,-1.48,.28,.38,-.2,.88,-.36,-.2,.88,.36,-1.44,.88,-.32,-1.44,.88,.32],n1=[0,4,1,1,4,5,2,3,6,3,7,6,0,2,4,2,6,4,1,5,3,3,5,7,4,6,5,5,6,7],ih=vn(e1,n1,Mr);ih.name="deckhouse";ih.castShadow=!0;Yt.add(ih);const i1=[-.22,.88,-.3,-.22,.88,.3,-1.05,.88,-.28,-1.05,.88,.28,-.26,1.36,-.26,-.26,1.36,.26,-1.02,1.36,-.24,-1.02,1.36,.24],s1=[0,4,1,1,4,5,2,3,6,3,7,6,0,2,4,2,6,4,1,5,3,3,5,7,4,6,5,5,6,7],sh=vn(i1,s1,Mr);sh.name="wheelhouse";sh.castShadow=!0;Yt.add(sh);[-.18,0,.18].forEach((n,t)=>{const e=new tt(new pn(.04,.22,.14),ao);e.name="win_"+t,e.position.set(-.23,1.1,n),Yt.add(e)});[-1,1].forEach((n,t)=>{const e=[-.22,1.36,n*.28,-.22,1.36,n*.52,-.9,1.36,n*.48,-.9,1.36,n*.28,-.22,1.3,n*.28,-.22,1.3,n*.52,-.9,1.3,n*.48,-.9,1.3,n*.28],s=vn(e,[0,1,3,1,2,3,4,7,5,5,7,6,1,5,2,2,5,6,0,4,1,1,4,5,2,6,3,3,6,7],Mr);s.name="bridgeWing_"+t,Yt.add(s)});const xn=6,co=[],rh=[];for(let n=0;n<xn;n++){const t=n/xn*Math.PI*2;co.push(Math.cos(t)*.2,.88,Math.sin(t)*.2)}for(let n=0;n<xn;n++){const t=n/xn*Math.PI*2;co.push(Math.cos(t)*.14,1.46,Math.sin(t)*.14)}co.push(0,.88,0);for(let n=0;n<xn;n++){const t=n,e=(n+1)%xn;rh.push(t,e+xn,e,t,t+xn,e+xn)}for(let n=0;n<xn;n++)rh.push(xn*2,(n+1)%xn,n);const ah=vn(co.map((n,t)=>{const e=t%3;return e===0?n-.55:n}),rh,ZM);ah.name="funnel";ah.castShadow=!0;Yt.add(ah);const oh=new tt(new Fe(.145,.145,.055,6),ao);oh.name="funnelCap";oh.position.set(-.55,1.49,0);Yt.add(oh);const lh=new tt(new Fe(.152,.152,.07,6),Mr);lh.name="funnelStripe";lh.position.set(-.55,1.3,0);Yt.add(lh);[-1,1].forEach((n,t)=>{const e=[1.3,.28,n*.44,1.3,.28,n*.3,.92,1.02,n*.08,.92,1.02,n*.04],s=vn(e,[0,2,1,1,2,3,0,1,3,0,3,2],Ns);s.name="gantryLeg_"+t,Yt.add(s)});const ch=new tt(new pn(.06,.06,.22),Ns);ch.name="gantryBar";ch.position.set(.92,1.02,0);Yt.add(ch);[-1,1].forEach((n,t)=>{const e=[-.28,.28,n*.22,-.28,.28,n*.14,-.3,1.72,n*.03,-.3,1.72,n*0],s=vn(e,[0,2,1,1,2,3,0,1,3,0,3,2],nh);s.name="mastLeg_"+t,Yt.add(s)});const hh=new tt(new pn(.03,.03,.72),nh);hh.name="yardArm";hh.position.set(-.3,2.05,0);Yt.add(hh);const uh=new tt(new pn(.04,.52,.04),nh);uh.name="mastPole";uh.position.set(-.3,1.98,0);Yt.add(uh);const dh=new tt(new Fe(.018,.018,.22,5),Ns);dh.name="radarPole";dh.position.set(-.3,2.36,0);Yt.add(dh);const ho=new tt(new Fe(.13,.13,.02,8),Ns);ho.name="radarDisc";ho.rotation.x=Math.PI/2;ho.position.set(-.3,2.48,0);Yt.add(ho);const uo=new tt(new Fe(.09,.09,.18,6),Ns);uo.name="winchDrum";uo.rotation.x=Math.PI/2;uo.position.set(1.3,.38,0);Yt.add(uo);[-1,1].forEach((n,t)=>{const e=new tt(new Fe(.12,.12,.025,6),Ns);e.name="winchFlange_"+t,e.rotation.x=Math.PI/2,e.position.set(1.3,.38,n*.1),Yt.add(e)});const fh=new tt(new pn(.22,.06,.26),ao);fh.name="winchBase";fh.position.set(1.3,.29,0);Yt.add(fh);const kf=new ja({color:10136495}),r1=new Ut().setFromPoints([new L(1.3,.42,0),new L(-.3,2.05,0)]),ph=new Za(r1,kf);ph.name="ctdWire";Yt.add(ph);[new L(1.55,.28,0),new L(-1.8,.28,0)].forEach((n,t)=>{const e=new Ut().setFromPoints([new L(-.3,2.22,0),n]),i=new Za(e,kf);i.name="stayWire_"+t,Yt.add(i)});const mh=new tt(new we(.038,5,4),new ht({color:16717824,emissive:16717824,emissiveIntensity:2.8}));mh.name="navLightRed";mh.position.set(1.55,.36,-.56);Yt.add(mh);const gh=new tt(new we(.038,5,4),new ht({color:60996,emissive:60996,emissiveIntensity:2.8}));gh.name="navLightGreen";gh.position.set(1.55,.36,.56);Yt.add(gh);const _h=new tt(new we(.032,5,4),new ht({color:16777215,emissive:16777215,emissiveIntensity:3.2}));_h.name="mastheadLight";_h.position.set(-.3,2.26,0);Yt.add(_h);const xh=new tt(new we(.028,5,4),new ht({color:16777215,emissive:16772829,emissiveIntensity:2}));xh.name="sternLight";xh.position.set(-1.88,.5,0);Yt.add(xh);const Bt=new Ce;Bt.name="rovGroup";Bt.position.set(1.3,-1.8,0);Gt.add(Bt);function Xn(n,t,e){const i=new Ut,s=[],r=[];for(let o=0;o<t.length;o+=3){const l=t[o]*3,c=t[o+1]*3,f=t[o+2]*3,m=n[l],u=n[l+1],p=n[l+2],_=n[c],y=n[c+1],d=n[c+2],h=n[f],g=n[f+1],b=n[f+2],M=_-m,w=y-u,T=d-p,C=h-m,x=g-u,S=b-p,P=w*S-T*x,A=T*C-M*S,D=M*x-w*C,N=Math.sqrt(P*P+A*A+D*D)||1;for(let z=0;z<3;z++)s.push([m,_,h][z],[u,y,g][z],[p,d,b][z]),r.push(P/N,A/N,D/N)}i.setAttribute("position",new Jt(new Float32Array(s),3)),i.setAttribute("normal",new Jt(new Float32Array(r),3));const a=new tt(i,e);return a.castShadow=!0,a}const a1=new ht({color:16761344,roughness:.55,metalness:.25,flatShading:!0}),Sr=new ht({color:1844528,roughness:.7,metalness:.4,flatShading:!0}),vh=new ht({color:4872810,roughness:.6,metalness:.5,flatShading:!0}),Hf=new ht({color:855826,roughness:.8,metalness:.3,flatShading:!0});new ht({color:16733440,roughness:.5,metalness:.2,flatShading:!0});const o1=[-.3,.13,.17,-.3,.13,-.17,-.3,-.1,-.2,-.3,-.1,.2,.3,.13,.14,.3,.13,-.14,.3,-.08,-.16,.3,-.08,.16],l1=[0,1,2,0,2,3,4,6,5,4,7,6,0,4,5,0,5,1,3,2,6,3,6,7,0,3,7,0,7,4,1,5,6,1,6,2],Wf=Xn(o1,l1,a1);Wf.name="rovBody";Bt.add(Wf);const c1=[-.26,.14,-.12,-.26,.14,.12,.1,.14,.15,.26,.14,.08,.26,.14,-.08,.1,.14,-.15,-.26,.21,-.12,-.26,.21,.12,.1,.21,.15,.26,.21,.08,.26,.21,-.08,.1,.21,-.15],h1=[6,7,8,6,8,9,6,9,10,6,10,11,0,2,1,0,3,2,0,4,3,0,5,4,0,1,7,0,7,6,1,2,8,1,8,7,2,3,9,2,9,8,3,4,10,3,10,9,4,5,11,4,11,10,5,0,6,5,6,11],Xf=Xn(c1,h1,Sr);Xf.name="rovFrame";Bt.add(Xf);const u1=[-.18,.21,-.07,-.18,.21,.07,.04,.21,.09,.04,.21,-.09,-.14,.28,-.06,-.14,.28,.06,.02,.28,.07,.02,.28,-.07],d1=[4,5,6,4,6,7,0,3,2,0,2,1,0,1,5,0,5,4,1,2,6,1,6,5,2,3,7,2,7,6,3,0,4,3,4,7],Yf=Xn(u1,d1,vh);Yf.name="rovPod";Bt.add(Yf);const f1=[-.3,.13,.17,-.3,.13,-.17,-.3,-.1,-.2,-.3,-.1,.2,-.42,.09,.12,-.42,.09,-.12,-.42,-.07,-.13,-.42,-.07,.13],p1=[4,5,6,4,6,7,0,4,7,0,7,3,1,5,4,1,4,0,3,7,6,3,6,2,0,1,5,0,5,4],qf=Xn(f1,p1,Sr);qf.name="rovNose";Bt.add(qf);const m1=[-.421,.09,.12,-.421,.09,-.12,-.421,-.07,-.13,-.421,-.07,.13],g1=[0,1,2,0,2,3],jf=Xn(m1,g1,new ht({color:1120288,roughness:.9,flatShading:!0}));jf.name="rovFacePlate";Bt.add(jf);[.055,-.055].forEach((n,t)=>{const e=new tt(new Fe(.038,.038,.015,6),new ht({color:16777215,emissive:16774348,emissiveIntensity:3.5,flatShading:!0}));e.name="rovHeadlight_"+t,e.rotation.z=Math.PI/2,e.position.set(-.432,.01,n),Bt.add(e)});const yr=new tt(new Fe(.028,.028,.015,6),new ht({color:16777215,emissive:16777215,emissiveIntensity:4.5,flatShading:!0}));yr.name="rovLight";yr.rotation.z=Math.PI/2;yr.position.set(-.432,.01,0);Bt.add(yr);[-1,1].forEach((n,t)=>{const e=[],i=[];for(let u=0;u<6;u++){const p=u/6*Math.PI*2;e.push(Math.cos(p)*.095,-.11/2,Math.sin(p)*.095),e.push(Math.cos(p)*.095,.11/2,Math.sin(p)*.095)}for(let u=0;u<6;u++){const p=u,_=(u+1)%6;i.push(p*2,_*2,_*2+1,p*2,_*2+1,p*2+1)}const o=Xn(e,i,Hf);o.name="rovShroud_"+t,o.rotation.x=Math.PI/2,o.position.set(.1,-.02,n*.3),Bt.add(o);const l=new tt(new Fe(.025,.025,.045,4),vh);l.name="rovPropHub_"+t,l.position.set(.1,-.02,n*.3),Bt.add(l);const c=[.06,-.1,n*.195,.06,-.1,n*.205,.14,-.1,n*.195,.14,-.1,n*.205,.06,0,n*.195,.06,0,n*.205,.14,0,n*.195,.14,0,n*.205],m=Xn(c,[0,2,3,0,3,1,4,5,7,4,7,6,0,1,5,0,5,4,2,6,7,2,7,3,0,4,6,0,6,2,1,3,7,1,7,5],Sr);m.name="rovStrut_"+t,Bt.add(m)});const _c=[],Zf=[],Fi=6,ua=.085,_1=.1;for(let n=0;n<Fi;n++){const t=n/Fi*Math.PI*2;_c.push(Math.cos(t)*ua,0,Math.sin(t)*ua),_c.push(Math.cos(t)*ua,_1,Math.sin(t)*ua)}for(let n=0;n<Fi;n++){const t=n,e=(n+1)%Fi;Zf.push(t,e+Fi,e,t,t+Fi,e+Fi)}const Mh=Xn(_c,Zf,Hf);Mh.name="rovVThrusterShroud";Mh.position.set(.06,.21,0);Bt.add(Mh);const wa=8,ti=.18,od=.09;for(let n=0;n<wa;n++){const t=n/wa*Math.PI*2,e=(n+1)/wa*Math.PI*2,i=[Math.cos(t)*ti,-.1,Math.sin(t)*ti,Math.cos(t)*ti,-.1-od,Math.sin(t)*ti,Math.cos(e)*ti,-.1,Math.sin(e)*ti,Math.cos(e)*ti,-.1-od,Math.sin(e)*ti],r=Xn(i,[0,2,3,0,3,1],Sr);r.name="rovBasketBar_"+n,r.position.set(-.04,0,0),Bt.add(r)}const fo=new tt(new Qa(ti,.012,4,wa),Sr);fo.name="rovBasketRing";fo.rotation.x=Math.PI/2;fo.position.set(-.04,-.193,0);Bt.add(fo);const x1=[-.1,.28,-.015,-.1,.28,.015,-.12,.46,-.008,-.12,.46,.008,-.08,.28,-.015,-.08,.28,.015,-.1,.46,-.008,-.1,.46,.008],v1=[0,2,3,0,3,1,4,5,7,4,7,6,0,1,5,0,5,4,2,6,7,2,7,3,0,4,6,0,6,2,1,3,7,1,7,5],Kf=Xn(x1,v1,vh);Kf.name="rovAntenna";Bt.add(Kf);const Sh=new tt(new we(.022,5,4),new ht({color:16729088,emissive:16720384,emissiveIntensity:3,flatShading:!0}));Sh.name="rovBeacon";Sh.position.set(-.12,.485,0);Bt.add(Sh);const ld=Bt.getObjectByName("rovPropHub_0"),cd=Bt.getObjectByName("rovPropHub_1"),hd=Bt.getObjectByName("rovBeacon"),ud=Bt.getObjectByName("rovVThrusterShroud"),nr=new gr(11197951,2,3);nr.name="rovSpotlight";const vl=12,Oa=3.5,po=[];for(let n=0;n<vl;n++){const t=n/vl,e=(n+1)/vl,i=t*1.1,s=e*1.1,r=-(.32+t*Oa),a=new Fe(s,i,.001,20,1,!1),o=(1-t)*(1-t)*.22,l=new fn({color:11197951,transparent:!0,opacity:0,side:ye,depthWrite:!1}),c=new tt(a,l);c.name="torchRing_"+n,c.rotation.z=Math.PI/2,c.position.set(r,0,0),c._baseAlpha=o,po.push(c)}const mo=document.createElement("canvas");mo.width=256;mo.height=256;const yh=mo.getContext("2d"),Fs=yh.createRadialGradient(128,128,0,128,128,128);Fs.addColorStop(0,"rgba(255,255,255,0.95)");Fs.addColorStop(.12,"rgba(210,235,255,0.80)");Fs.addColorStop(.35,"rgba(140,200,255,0.45)");Fs.addColorStop(.65,"rgba(80,150,255,0.15)");Fs.addColorStop(1,"rgba(40,100,220,0.00)");yh.fillStyle=Fs;yh.fillRect(0,0,256,256);const M1=new Hn(mo),$f=new qa({map:M1,transparent:!0,opacity:0,blending:oi,depthWrite:!1}),Os=new Hc($f);Os.name="torchConeROV";Os.scale.set(2.8,2.8,1);Os.position.set(-2.1,0,0);Os.visible=!1;const go=document.createElement("canvas");go.width=256;go.height=256;const bh=go.getContext("2d"),_o=bh.createRadialGradient(128,128,0,128,128,128);_o.addColorStop(0,"rgba(180,220,255,0.30)");_o.addColorStop(.4,"rgba(100,170,255,0.12)");_o.addColorStop(1,"rgba(60,120,255,0.00)");bh.fillStyle=_o;bh.fillRect(0,0,256,256);const S1=new Hn(go),Jf=new qa({map:S1,transparent:!0,opacity:0,blending:oi,depthWrite:!1}),Bs=new Hc(Jf);Bs.name="torchHaloRing";Bs.scale.set(5.5,5.5,1);Bs.position.set(-2.1,0,0);Bs.visible=!1;const y1=$f,b1=Jf,br=80,Eh=new Ut,Nn=new Float32Array(br*3),ys=new Float32Array(br*3),xc=new Float32Array(br);function Qf(n){const t=Math.random(),e=t*1.1,i=Math.random()*Math.PI*2,s=Math.random()*e*.85;Nn[n*3]=-(.32+t*Oa),Nn[n*3+1]=Math.sin(i)*s,Nn[n*3+2]=Math.cos(i)*s,ys[n*3]=(Math.random()-.5)*.0012,ys[n*3+1]=(Math.random()-.5)*.001,ys[n*3+2]=(Math.random()-.5)*.001,xc[n]=Math.random()*Math.PI*2}for(let n=0;n<br;n++)Qf(n);Eh.setAttribute("position",new Jt(Nn,3));const tp=new mr({color:13692671,size:.045,transparent:!0,opacity:0,sizeAttenuation:!0,depthWrite:!1}),Th=new Ka(Eh,tp);Th.name="torchMotes";Th.frustumCulled=!1;const E1=new Yc(.38,24),ep=new fn({color:16777215,transparent:!0,opacity:0,side:ye,depthWrite:!1}),xo=new tt(E1,ep);xo.name="torchHalo";xo.rotation.y=Math.PI/2;xo.position.set(-.3,0,0);const T1=new ja({color:13421772,linewidth:2});let Ba=new Ut;const w1=new Float32Array(60);Ba.setAttribute("position",new Jt(w1,3));const vo=new Za(Ba,T1);vo.name="tether";vo.frustumCulled=!1;Gt.add(vo);function A1(){const n=new L(1.3+Yt.position.x,Yt.position.y+.42,Yt.position.z),t=Bt.position.clone(),e=Ba.attributes.position.array;for(let i=0;i<20;i++){const s=i/19,r=Math.sin(s*Math.PI)*.3;e[i*3]=n.x+(t.x-n.x)*s,e[i*3+1]=n.y+(t.y-n.y)*s-r,e[i*3+2]=n.z+(t.z-n.z)*s}Ba.attributes.position.needsUpdate=!0}const pe={w:!1,a:!1,s:!1,d:!1,up:!1,down:!1,left:!1,right:!1};window.addEventListener("keydown",n=>{if(Ze)switch(n.code){case"KeyW":case"ArrowUp":pe.w=pe.up=!0,n.preventDefault();break;case"KeyS":case"ArrowDown":pe.s=pe.down=!0,n.preventDefault();break;case"KeyA":case"ArrowLeft":pe.a=pe.left=!0,n.preventDefault();break;case"KeyD":case"ArrowRight":pe.d=pe.right=!0,n.preventDefault();break}});window.addEventListener("keyup",n=>{switch(n.code){case"KeyW":case"ArrowUp":pe.w=pe.up=!1;break;case"KeyS":case"ArrowDown":pe.s=pe.down=!1;break;case"KeyA":case"ArrowLeft":pe.a=pe.left=!1;break;case"KeyD":case"ArrowRight":pe.d=pe.right=!1;break}});let Mo=!1,xs={x:0,y:0};le.domElement.addEventListener("mousedown",n=>{Ze&&n.button===0&&(Mo=!0,xs.x=n.clientX,xs.y=n.clientY,le.domElement.style.cursor="grabbing")});window.addEventListener("mousemove",n=>{if(!Mo||!Ze)return;const t=n.clientX-xs.x;n.clientY-xs.y,xs.x=n.clientX,xs.y=n.clientY,Ps.yaw-=t*R1});window.addEventListener("mouseup",n=>{n.button===0&&(Mo=!1,Ze&&(le.domElement.style.cursor="grab"))});le.domElement.addEventListener("dblclick",()=>{Ze&&(Ps.yaw=0,Ps.pitch=0)});const da=.045,dd=Ve/2-.4;function C1(){Ze&&((pe.w||pe.up)&&(hr=ii=Math.min(0,ii+da)),(pe.s||pe.down)&&(hr=ii=Math.max(-ci+.4,ii-da)),(pe.a||pe.left)&&(Bt.position.z=Math.max(-dd,Bt.position.z-da)),(pe.d||pe.right)&&(Bt.position.z=Math.min(dd,Bt.position.z+da)))}const hi=new Qe(80,window.innerWidth/window.innerHeight,.05,500);hi.name="rovCamera";hi.position.set(-.35,.04,0);hi.near=.35;hi.updateProjectionMatrix();Bt.add(hi);const Mn=new be;Mn.name="rovLookPivot";Mn.rotation.y=0;Bt.add(Mn);Mn.add(hi);Mn.add(nr);po.forEach(n=>Mn.add(n));Mn.add(Os);Mn.add(Bs);Mn.add(Th);Mn.add(xo);const Ps={yaw:0,pitch:0},R1=.0022;let vc=Wn,Ze=!1,Vn=null,ii=-1.8,hr=-1.8,Tn=Bt.position.y,np=Ue.target.y;const fd=.08,P1=.55,ki=45,wh=new Ut,Ii=new Float32Array(ki*3),fs=new Float32Array(ki*3),Qs=new Float32Array(ki),Aa=new Float32Array(ki);for(let n=0;n<ki;n++)Qs[n]=999,Aa[n]=.4+Math.random()*.5;wh.setAttribute("position",new Jt(Ii,3));const Mc=new mr({color:8965375,size:.055,transparent:!0,opacity:0,sizeAttenuation:!0,depthWrite:!1}),Ah=new Ka(wh,Mc);Ah.name="rovWake";Ah.frustumCulled=!1;Gt.add(Ah);let Zs=!1,fa=!1,Be=0;function ur(n){const t=ue[n];Vn=n,hr=t.y,Ze||(np=t.y),D1(t),lp(),_r.forEach((e,i)=>{i===n?(e.material.opacity=.97,e.material.emissiveIntensity=1.2,e.material.color.set(new Tt(t.color).multiplyScalar(1.5))):(e.material.opacity=.72,e.material.emissiveIntensity=.3,e.material.color.set(ue[i].color))})}function Ch(){Vn=null,L1(),lp(),_r.forEach((n,t)=>{n.material.opacity=.9,n.material.emissiveIntensity=.5,n.material.color.set(ue[t].color)})}const Pn=document.createElement("div");Pn.id="infoPanel";Pn.style.cssText=`
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
`;document.body.appendChild(Pn);const So=document.createElement("button");So.textContent="✕";So.style.cssText=`
  position:absolute; top:12px; right:14px;
  background:none; border:none; color:#88aacc; font-size:16px;
  cursor:pointer; padding:2px 6px; border-radius:4px;
  font-family:Inter,sans-serif;
`;So.addEventListener("click",Ch);Pn.appendChild(So);const Rh=document.createElement("div");Rh.style.cssText="font-size:14px;font-weight:700;color:#00ccff;margin-bottom:4px;line-height:1.3;padding-right:20px;";Pn.appendChild(Rh);const Ph=document.createElement("div");Ph.style.cssText="font-size:11px;color:#4488aa;margin-bottom:12px;letter-spacing:0.05em;text-transform:uppercase;";Pn.appendChild(Ph);const Dh=document.createElement("div");Dh.style.cssText="font-size:12px;line-height:1.7;color:#aaccdd;margin-bottom:14px;";Pn.appendChild(Dh);const Lh=document.createElement("div");Lh.textContent="NOTABLE SPECIES";Lh.style.cssText="font-size:10px;letter-spacing:0.12em;color:#4488aa;margin-bottom:8px;font-weight:600;";Pn.appendChild(Lh);const za=document.createElement("div");za.style.cssText="display:flex;flex-wrap:wrap;gap:6px;";Pn.appendChild(za);function D1(n){Rh.textContent=n.title,Ph.textContent=n.depth,Dh.textContent=n.desc,za.innerHTML="",n.creatures.forEach(t=>{const e=document.createElement("span");e.textContent=t,e.style.cssText=`
      background:rgba(0,80,160,0.4);
      border:1px solid rgba(0,140,255,0.3);
      border-radius:20px; padding:3px 10px;
      font-size:11px; color:#88ccff;
      font-family:Inter,sans-serif;
    `,za.appendChild(e)}),Pn.style.display="block"}function L1(){Pn.style.display="none"}const Xi=document.createElement("div");Xi.id="hintBar";Xi.style.cssText=`
  position:fixed; bottom:20px; left:50%; transform:translateX(-50%);
  background:rgba(5,12,28,0.82); border:1px solid rgba(0,140,255,0.3);
  border-radius:20px; padding:6px 8px 6px 18px; color:#88aacc;
  font-family:Inter,sans-serif; font-size:12px;
  pointer-events:auto; z-index:300; white-space:nowrap;
  backdrop-filter:blur(8px);
  display:flex; align-items:center; gap:12px;
`;document.body.appendChild(Xi);const yo=document.createElement("span");yo.innerHTML="🖱️ <b>Click a zone</b> to explore &nbsp;|&nbsp; Drag to orbit &nbsp;|&nbsp; Scroll to zoom";yo.style.pointerEvents="none";Xi.appendChild(yo);const Ih=document.createElement("span");Ih.textContent="|";Ih.style.cssText="color:rgba(0,140,255,0.35); pointer-events:none;";Xi.appendChild(Ih);const tn=document.createElement("button");tn.textContent="📷 ROV Cam";tn.style.cssText=`
  background:rgba(0,80,160,0.45); border:1px solid rgba(0,140,255,0.45);
  border-radius:14px; color:#88ccff; font-family:Inter,sans-serif;
  font-size:11px; font-weight:600; padding:4px 13px; cursor:pointer;
  transition:background 0.15s, color 0.15s, border-color 0.15s;
  letter-spacing:0.04em; white-space:nowrap;
`;tn.addEventListener("mouseenter",()=>{Ze||(tn.style.background="rgba(0,120,220,0.65)",tn.style.color="#ffffff")});tn.addEventListener("mouseleave",()=>{Ze||(tn.style.background="rgba(0,80,160,0.45)",tn.style.color="#88ccff")});Xi.appendChild(tn);const bo=document.createElement("div");bo.style.cssText=`
  position:fixed; inset:0; pointer-events:none; z-index:148;
  opacity:0; transition:opacity 0.6s ease;
  mix-blend-mode: normal;
`;const ei=document.createElement("canvas");ei.style.cssText="position:absolute;inset:0;width:100%;height:100%;opacity:0.08;";bo.appendChild(ei);function ip(){ei.width=window.innerWidth,ei.height=window.innerHeight;const n=ei.getContext("2d");n.clearRect(0,0,ei.width,ei.height),n.fillStyle="rgba(0,0,0,0.55)";for(let t=0;t<ei.height;t+=3)n.fillRect(0,t,ei.width,1)}ip();window.addEventListener("resize",ip);document.body.appendChild(bo);const Uh=document.createElement("div");Uh.style.cssText=`
  position:fixed; inset:0; pointer-events:none; z-index:147;
  background:rgba(0,30,0,0.45);
  opacity:0; transition:opacity 0.6s ease;
`;document.body.appendChild(Uh);function sp(n,t,e="opacity 0.5s ease"){const i=document.createElement("div");i.style.cssText=`
    position:fixed; inset:0; pointer-events:none; z-index:${t};
    overflow:hidden;
    opacity:0; transition:${e};
  `;const s=document.createElement("div");return s.style.cssText=`
    position:absolute;
    width:100vmax; height:100vmax;
    top:50%; left:50%; transform:translate(-50%,-50%);
    background: ${n};
    pointer-events:none;
  `,i.appendChild(s),document.body.appendChild(i),i}const I1=sp(OM,149,"opacity 0.6s ease"),Er=document.createElement("div");Er.innerHTML="🟢 NIGHT VISION";Er.style.cssText=`
  position:fixed; top:18px; right:20px;
  background:rgba(0,20,0,0.88); border:1px solid rgba(0,255,80,0.45);
  border-radius:8px; padding:5px 14px; color:#00ff55;
  font-family:Inter,sans-serif; font-size:11px; font-weight:700;
  letter-spacing:0.12em; z-index:300; pointer-events:none;
  opacity:0; transition:opacity 0.3s;
  text-shadow: 0 0 8px rgba(0,255,80,0.7);
`;document.body.appendChild(Er);let Yi=!1;const Ks=new Map;function rp(n){Yi=n,bo.style.opacity=n?"1":"0",Uh.style.opacity=n?"1":"0",ap(I1,n?1:0),Er.style.opacity=n?"1":"0",Ne.textContent=n?"🌑 Night Vision: ON":"🌑 Night Vision",Ne.style.background=n?"rgba(0,100,20,0.65)":"rgba(0,80,160,0.45)",Ne.style.borderColor=n?"rgba(0,255,80,0.7)":"rgba(0,140,255,0.45)",Ne.style.color=n?"#00ff55":"#88ccff",le.domElement.style.transition="filter 0.6s ease",le.domElement.style.filter=n?RM:"none",n?(_n._nvPrevIntensity=_n.intensity,_n.intensity=Math.max(_n.intensity,Jd),Gt.traverse(t=>{t.isMesh&&t.material&&t.material.emissiveIntensity!==void 0&&(Ks.has(t)||Ks.set(t,t.material.emissiveIntensity),t.material.emissiveIntensity=(Ks.get(t)||0)+PM)})):(_n._nvPrevIntensity!==void 0&&(_n.intensity=_n._nvPrevIntensity),Ks.forEach((t,e)=>{e.material&&(e.material.emissiveIntensity=t)}),Ks.clear())}const U1=sp(FM,150,"opacity 0.5s ease"),Eo=document.createElement("div");Eo.textContent="⬛ ROV CAM";Eo.style.cssText=`
  position:fixed; top:18px; left:50%; transform:translateX(-50%);
  background:rgba(5,12,28,0.88); border:1px solid rgba(0,200,255,0.5);
  border-radius:8px; padding:5px 16px; color:#00ddff;
  font-family:Inter,sans-serif; font-size:11px; font-weight:700;
  letter-spacing:0.12em; z-index:300; pointer-events:none;
  opacity:0; transition:opacity 0.3s;
  text-shadow: 0 0 8px rgba(0,200,255,0.6);
`;document.body.appendChild(Eo);const To=document.createElement("div");To.textContent="W/S · ↑/↓  Ascend / Descend     A/D · ←/→  Strafe";To.style.cssText=`
  position:fixed; top:52px; left:50%; transform:translateX(-50%);
  color:rgba(0,200,255,0.55); font-family:Inter,sans-serif;
  font-size:10px; letter-spacing:0.06em; z-index:300;
  pointer-events:none; opacity:0; transition:opacity 0.3s;
  text-shadow: 0 0 8px rgba(0,200,255,0.6);
`;document.body.appendChild(To);function ap(n,t){n.style.opacity=String(t)}function N1(n){Ze=n,vc=n?hi:Wn,Ue.enabled=!n,Ue.autoRotate=!n,vo.visible=!n,ph.visible=!n,xr.visible=!n,Gt.children.forEach(t=>{t.isLineSegments&&t.name&&t.name.startsWith("zoneedge_")&&(t.visible=!n)}),Bt.traverse(t=>{(t.isMesh||t.isPoints||t.isLine||t.isSprite)&&(t.visible=!n)}),yr.visible=!n,Ps.yaw=0,Ps.pitch=0,Mn.rotation.set(0,0,0,"YXZ"),po.forEach(t=>{t.visible=!n}),Os.visible=n,Bs.visible=n,n?le.domElement.style.cursor="grab":(Mo=!1,le.domElement.style.cursor="default"),tn.textContent=n?"🌐 Orbit Cam":"📷 ROV Cam",tn.style.background=n?"rgba(0,160,255,0.65)":"rgba(0,80,160,0.45)",tn.style.borderColor=n?"rgba(0,220,255,0.8)":"rgba(0,140,255,0.45)",tn.style.color=n?"#ffffff":"#88ccff",Eo.style.opacity=n?"1":"0",To.style.opacity=n?"1":"0",ap(U1,n?1:0),yo.innerHTML=n?"🖱️ <b>Drag</b> to look around &nbsp;|&nbsp; W/S Ascend/Descend &nbsp;|&nbsp; A/D Strafe &nbsp;|&nbsp; Double-click resets view":"🖱️ <b>Click a zone</b> to explore &nbsp;|&nbsp; Drag to orbit &nbsp;|&nbsp; Scroll to zoom",n?(Ne.style.display="inline-block",requestAnimationFrame(()=>{Ne.style.opacity="1"})):(Ne.style.opacity="0",setTimeout(()=>{Ne.style.display="none"},350)),Er.style.opacity=n&&Yi?"1":"0",Object.keys(pe).forEach(t=>{pe[t]=!1})}tn.addEventListener("click",()=>{N1(!Ze),!Ze&&Yi&&rp(!1)});const Ne=document.createElement("button");Ne.textContent="🌑 Night Vision";Ne.style.cssText=`
  background:rgba(0,80,160,0.45); border:1px solid rgba(0,140,255,0.45);
  border-radius:14px; color:#88ccff; font-family:Inter,sans-serif;
  font-size:11px; font-weight:600; padding:4px 13px; cursor:pointer;
  transition:background 0.15s, color 0.15s, border-color 0.15s, opacity 0.35s;
  letter-spacing:0.04em; white-space:nowrap;
  display:none; opacity:0;
`;Ne.addEventListener("mouseenter",()=>{Yi||(Ne.style.background="rgba(0,80,20,0.65)",Ne.style.color="#88ffaa")});Ne.addEventListener("mouseleave",()=>{Yi||(Ne.style.background="rgba(0,80,160,0.45)",Ne.style.color="#88ccff")});Ne.addEventListener("click",()=>{Ze&&rp(!Yi)});Xi.appendChild(Ne);function F1(n){for(let t=ue.length-1;t>=0;t--)if(n<=ue[t].y+ue[t].height/2)return t;return 0}const Tr=document.createElement("div");Tr.style.cssText=`
  position:fixed; left:18px; top:50%; transform:translateY(-50%);
  display:flex; flex-direction:column; align-items:center; gap:0;
  z-index:300; user-select:none;
`;document.body.appendChild(Tr);const un=document.createElement("button");un.innerHTML="▲";un.title="Scroll up";un.style.cssText=`
  background:rgba(5,12,28,0.82); border:1px solid rgba(0,140,255,0.3);
  border-radius:6px 6px 0 0; color:#88aacc; font-size:13px;
  width:32px; height:28px; cursor:pointer; padding:0;
  font-family:Inter,sans-serif; line-height:1;
  transition:background 0.15s ease, color 0.15s ease, box-shadow 0.15s ease;
`;un.addEventListener("mouseenter",()=>{un.style.background="rgba(0,80,160,0.7)",un.style.color="#ffffff"});un.addEventListener("mouseleave",()=>{un.style.background="rgba(5,12,28,0.82)",un.style.color="#88aacc"});Tr.appendChild(un);const Nh=document.createElement("div");Nh.style.cssText=`
  width:32px; background:rgba(5,12,28,0.72);
  border-left:1px solid rgba(0,140,255,0.3);
  border-right:1px solid rgba(0,140,255,0.3);
  display:flex; flex-direction:column; align-items:center;
  padding:6px 0; gap:0; position:relative;
`;Tr.appendChild(Nh);const Fh=[];ue.forEach((n,t)=>{const e=document.createElement("button");e.title=n.name,e.style.cssText=`
    width:20px; height:20px; border-radius:50%;
    background:rgba(0,80,160,0.35);
    border:1.5px solid rgba(0,140,255,0.35);
    cursor:pointer; margin:5px 0; padding:0;
    transition:background 0.2s, border-color 0.2s, transform 0.2s;
    position:relative; z-index:1;
  `,e.addEventListener("mouseenter",()=>{Vn!==t&&(e.style.background="rgba(0,120,220,0.55)")}),e.addEventListener("mouseleave",()=>{Vn!==t&&(e.style.background="rgba(0,80,160,0.35)")}),e.addEventListener("click",()=>{Vn===t?Ch():ur(t)}),Nh.appendChild(e),Fh.push(e)});const dn=document.createElement("button");dn.innerHTML="▼";dn.title="Scroll down";dn.style.cssText=`
  background:rgba(5,12,28,0.82); border:1px solid rgba(0,140,255,0.3);
  border-radius:0 0 6px 6px; color:#88aacc; font-size:13px;
  width:32px; height:28px; cursor:pointer; padding:0;
  font-family:Inter,sans-serif; line-height:1;
  transition:background 0.15s ease, color 0.15s ease, box-shadow 0.15s ease;
`;dn.addEventListener("mouseenter",()=>{dn.style.background="rgba(0,80,160,0.7)",dn.style.color="#ffffff"});dn.addEventListener("mouseleave",()=>{dn.style.background="rgba(5,12,28,0.82)",dn.style.color="#88aacc"});Tr.appendChild(dn);let pd=-1,pa=null;function op(){const n=F1(Tn);pa===null&&(pa=Tn);const t=Tn-pa;pa=Tn;const e=Math.abs(t)>1e-4?Math.sign(t):0;n!==pd&&(pd=n,Fh.forEach((o,l)=>{(Ze||Vn===null)&&(l===n?(o.style.background="rgba(0,200,255,0.85)",o.style.borderColor="rgba(0,240,255,0.9)",o.style.transform="scale(1.25)",o.classList.add("pip-active")):(o.style.background="rgba(0,80,160,0.35)",o.style.borderColor="rgba(0,140,255,0.35)",o.style.transform="scale(1)",o.classList.remove("pip-active")))}));const i="rgba(0,160,255,0.75)",s="#ffffff",r="rgba(5,12,28,0.82)",a="#88aacc";un.style.background=e>0?i:r,un.style.color=e>0?s:a,dn.style.background=e<0?i:r,dn.style.color=e<0?s:a}op();un.addEventListener("click",()=>{const n=Vn??0,t=Math.max(0,n-1);ur(t!==n?t:0)});dn.addEventListener("click",()=>{const n=Vn??-1,t=Math.min(ue.length-1,n+1);ur(t)});function lp(){Fh.forEach((n,t)=>{t===Vn?(n.style.background="rgba(0,160,255,0.85)",n.style.borderColor="rgba(0,200,255,0.9)",n.style.transform="scale(1.25)",n.classList.add("pip-active")):(n.style.background="rgba(0,80,160,0.35)",n.style.borderColor="rgba(0,140,255,0.35)",n.style.transform="scale(1)",n.classList.remove("pip-active"))})}const Va=new hm,Ga=new ft;let Sc=new ft;le.domElement.addEventListener("mousedown",n=>{Sc.set(n.clientX,n.clientY)});le.domElement.addEventListener("click",n=>{const t=n.clientX-Sc.x,e=n.clientY-Sc.y;if(Math.sqrt(t*t+e*e)>5)return;Ga.set(n.clientX/window.innerWidth*2-1,-(n.clientY/window.innerHeight)*2+1),Va.setFromCamera(Ga,Wn);const i=Va.intersectObjects([..._r,...$c],!1);if(i.length>0){const s=i[0].object.userData.zoneId;Vn===s?Ch():ur(s)}});let md=0;le.domElement.addEventListener("mousemove",n=>{const t=performance.now();if(t-md<50)return;md=t,Ga.set(n.clientX/window.innerWidth*2-1,-(n.clientY/window.innerHeight)*2+1),Va.setFromCamera(Ga,Wn);const e=Va.intersectObjects([..._r,...$c],!1);le.domElement.style.cursor=e.length>0?"pointer":"default"});const cp=new Map;function O1(n,t){if(t<2)return;let e=null,i=new Tt(65450);if(n.traverse(a=>{a.isMesh&&a.material&&!e&&(e=a.material,a.material.emissive&&a.material.emissive.isColor&&(i=a.material.emissive.clone()))}),!e)return;const s=e.emissive&&e.emissive.isColor?e.emissive.clone():new Tt(0,0,0),r=new gr(65450,0,2.2);r.name="flashLight_"+n.name,r.position.set(0,0,0),Gt.add(r),cp.set(n,{light:r,flashing:!1,timer:0,duration:.55+Math.random()*.35,cooldown:4+Math.random()*5,cooldownTimer:Math.random()*4,emissiveMat:e,baseEmissiveIntensity:e.emissiveIntensity||0,baseEmissive:s,flashColor:i})}Qc.forEach(n=>{n.userData&&n.userData.zoneId>=2&&O1(n,n.userData.zoneId)});const hp=[];[ue[2],ue[3]].forEach(n=>{for(let t=0;t<3;t++){const e=new gr(65450,.8,2.5);e.name="bioLight_"+n.id+"_"+t,e.position.set((Math.random()-.5)*je*.7,n.y+(Math.random()-.5)*n.height*.7,(Math.random()-.5)*Ve*.7),Gt.add(e),hp.push({light:e,baseIntensity:.8,phase:Math.random()*Math.PI*2})}});const B1=ue.map((n,t)=>{const e=[.55,.38,.22,.12],i=[7.5,6.5,5.5,4.5],s=new gr(n.lightColor,e[t],i[t]);return s.name="zoneBounce_"+t,s.position.set(0,n.y+n.height*.42,0),Gt.add(s),{light:s,base:e[t],phase:t*Math.PI*.5}}),Oh=256,wo=document.createElement("canvas");wo.width=Oh;wo.height=Oh;const z1=wo.getContext("2d"),wr=new Hn(wo);wr.wrapS=Ts;wr.wrapT=Ts;wr.repeat.set(1.5,1.5);const V1=new nn(je,Ve),up=new fn({map:wr,transparent:!0,opacity:.02,blending:oi,depthWrite:!1,side:Gn}),Ao=new tt(V1,up);Ao.name="causticMesh";Ao.rotation.x=-Math.PI/2;Ao.position.set(0,ue[0].y-ue[0].height/2+.05,0);Gt.add(Ao);const ps=7,dp=[];for(let n=0;n<ps;n++)for(let t=0;t<ps;t++)dp.push({bx:(t+.5)/ps,by:(n+.5)/ps,px:(Math.random()-.5)*.7/ps,py:(Math.random()-.5)*.7/ps,phx:Math.random()*Math.PI*2,phy:Math.random()*Math.PI*2,spx:.18+Math.random()*.14,spy:.13+Math.random()*.14});function G1(n){const t=z1,e=Oh,i=t.createImageData(e,e),s=i.data,r=dp.map(o=>({x:o.bx+o.px*Math.sin(n*o.spx+o.phx),y:o.by+o.py*Math.cos(n*o.spy+o.phy)})),a=1/e;for(let o=0;o<e;o++)for(let l=0;l<e;l++){const c=l*a,f=o*a;let m=1e9,u=1e9;for(let b=0;b<r.length;b++){let M=c-r[b].x,w=f-r[b].y;M>.5?M-=1:M<-.5&&(M+=1),w>.5?w-=1:w<-.5&&(w+=1);const T=M*M+w*w;T<m?(u=m,m=T):T<u&&(u=T)}const p=Math.sqrt(u)-Math.sqrt(m),_=Math.exp(-p*p*520),y=Math.exp(-p*p*60)*.28,d=Math.min(1,_+y),h=.06*Math.sin(m*900+n*.4),g=(o*e+l)*4;s[g]=Math.round(Math.min(255,d*(190+h*80))),s[g+1]=Math.round(d*230),s[g+2]=Math.round(d*255),s[g+3]=Math.round(d*255)}t.putImageData(i,0,0),wr.needsUpdate=!0}const fp=ue[0].height;ue[0].y+fp/2;const gd=je/2,_d=Ve/2,Ml=8,xd=.86,vd=new Tt(.72,.88,.96),Co=document.createElement("canvas");Co.width=64;Co.height=256;const Sl=Co.getContext("2d");for(let n=0;n<64;n++){const t=(n-31.5)/31.5,e=Math.exp(-t*t*2),i=Sl.createLinearGradient(0,0,0,256),s=(.35*e).toFixed(3),r=(.22*e).toFixed(3),a=(.08*e).toFixed(3),o=(.015*e).toFixed(3);i.addColorStop(0,`rgba(220,240,255,${s})`),i.addColorStop(.2,`rgba(190,225,250,${r})`),i.addColorStop(.5,`rgba(140,195,240,${a})`),i.addColorStop(.8,`rgba(90,150,210,${o})`),i.addColorStop(1,"rgba(60,120,190,0.0)"),Sl.fillStyle=i,Sl.fillRect(n,0,1,256)}const k1=new Hn(Co),Ro=document.createElement("canvas");Ro.width=128;Ro.height=256;const yl=Ro.getContext("2d");for(let n=0;n<128;n++){const t=(n-63.5)/63.5,e=Math.exp(-t*t*.7),i=yl.createLinearGradient(0,0,0,256),s=(.38*e).toFixed(3),r=(.25*e).toFixed(3),a=(.12*e).toFixed(3),o=(.04*e).toFixed(3);i.addColorStop(0,`rgba(210,235,255,${s})`),i.addColorStop(.25,`rgba(170,215,248,${r})`),i.addColorStop(.55,`rgba(120,180,235,${a})`),i.addColorStop(.8,`rgba(70,140,210,${o})`),i.addColorStop(1,"rgba(50,110,190,0.0)"),yl.fillStyle=i,yl.fillRect(n,0,1,256)}const H1=new Hn(Ro),pp=[],mp=[],W1=[{axis:"z",pos:_d-.04,ry:0,span:je,label:"front"},{axis:"z",pos:-_d+.04,ry:Math.PI,span:je,label:"back"},{axis:"x",pos:-gd+.04,ry:Math.PI/2,span:Ve,label:"left"},{axis:"x",pos:gd-.04,ry:-Math.PI/2,span:Ve,label:"right"}],Md=fp-.3,ma=ue[0].y+.15;W1.forEach(n=>{for(let t=0;t<Ml;t++){const e=.8+Math.random()*.7,i=1.2+Math.random()*.6,s=(t+.5)/Ml,r=(Math.random()-.5)*.6/Ml,a=Math.max(.02,Math.min(.98,s+r)),o=-n.span/2+a*n.span,l=Math.abs(o)/(n.span*.5),c=xd*i,f=xd*i*2.5,m=yi.lerp(1,.72,Math.pow(l,1.35)),u=yi.lerp(1,.22,Math.pow(l,1.9)),p=c*m,_=f*u,y=yi.lerp(1,.55,Math.pow(l,1.6)),d=yi.lerp(1,.18,Math.pow(l,2)),h=k1.clone();h.needsUpdate=!0;const g=new nn(p,Md),b=new fn({map:h,color:vd,transparent:!0,opacity:.25*e*y,blending:oi,depthWrite:!1,side:ye}),M=new tt(g,b);M.name="vline_"+n.label+"_"+t,n.axis==="z"?M.position.set(o,ma,n.pos):M.position.set(n.pos,ma,o),M.rotation.y=n.ry,M.userData.baseOpacity=.25*e*y,M.userData.idx=t,M.userData.phaseOffset=Math.random()*Math.PI*2,Gt.add(M),pp.push(M);const w=H1.clone();w.needsUpdate=!0;const T=new nn(_,Md),C=new fn({map:w,color:vd,transparent:!0,opacity:.22*e*d,blending:oi,depthWrite:!1,side:ye}),x=new tt(T,C);x.name="vline_glow_"+n.label+"_"+t,n.axis==="z"?x.position.set(o,ma,n.pos):x.position.set(n.pos,ma,o),x.rotation.y=n.ry,x.renderOrder=M.renderOrder-1,x.userData.baseOpacity=.22*e*d,x.userData.phaseOffset=M.userData.phaseOffset,Gt.add(x),mp.push(x)}});window._scanLineMeshes=pp;window._glowLineMeshes=mp;const Bh=-ci-.42,gp=new nn(120,120);gp.rotateX(-Math.PI/2);const X1=new ht({color:857640,roughness:.95,metalness:0,emissive:330264,emissiveIntensity:.15}),Po=new tt(gp,X1);Po.name="groundPlane";Po.position.set(0,Bh,0);Po.receiveShadow=!0;Gt.add(Po);const _p=256,ka=document.createElement("canvas");ka.width=ka.height=_p;const Y1=ka.getContext("2d"),Hi=new Hn(ka);Hi.wrapS=Hi.wrapT=Ts;Hi.repeat.set(1.8,1.8);const q1=new fn({map:Hi,transparent:!0,opacity:.04,blending:oi,depthWrite:!1}),Do=new tt(new nn(120,120),q1);Do.name="groundCaustic";Do.rotation.x=-Math.PI/2;Do.position.set(0,Bh+.01,0);Gt.add(Do);const Ha=document.createElement("canvas");Ha.width=Ha.height=512;const zh=Ha.getContext("2d"),Ar=zh.createRadialGradient(256,256,30,256,256,256);Ar.addColorStop(0,"rgba(0,0,0,0.72)");Ar.addColorStop(.28,"rgba(0,0,0,0.45)");Ar.addColorStop(.55,"rgba(0,0,0,0.18)");Ar.addColorStop(1,"rgba(0,0,0,0.0)");zh.fillStyle=Ar;zh.fillRect(0,0,512,512);const j1=new Hn(Ha),Z1=new fn({map:j1,transparent:!0,opacity:1,blending:Vi,depthWrite:!1}),Lo=new tt(new nn(40,40),Z1);Lo.name="groundVignette";Lo.rotation.x=-Math.PI/2;Lo.position.set(0,Bh+.02,0);Gt.add(Lo);const ms=5,xp=[];for(let n=0;n<ms;n++)for(let t=0;t<ms;t++)xp.push({bx:(t+.5)/ms,by:(n+.5)/ms,px:(Math.random()-.5)*.65/ms,py:(Math.random()-.5)*.65/ms,phx:Math.random()*Math.PI*2,phy:Math.random()*Math.PI*2,spx:.08+Math.random()*.07,spy:.07+Math.random()*.07});function K1(n){const t=Y1,e=_p,i=t.createImageData(e,e),s=i.data,r=1/e,a=xp.map(o=>({x:o.bx+o.px*Math.sin(n*o.spx+o.phx),y:o.by+o.py*Math.cos(n*o.spy+o.phy)}));for(let o=0;o<e;o++)for(let l=0;l<e;l++){const c=l*r,f=o*r;let m=1e9,u=1e9;for(let C=0;C<a.length;C++){let x=c-a[C].x,S=f-a[C].y;x>.5?x-=1:x<-.5&&(x+=1),S>.5?S-=1:S<-.5&&(S+=1);const P=x*x+S*S;P<m?(u=m,m=P):P<u&&(u=P)}const p=Math.sqrt(u)-Math.sqrt(m),_=Math.exp(-p*p*280),y=Math.exp(-p*p*30)*.22,d=Math.min(1,_+y),h=c-.5,g=f-.5,b=Math.sqrt(h*h+g*g),M=Math.max(0,1-b/.48*(b/.48)),w=d*M,T=(o*e+l)*4;s[T]=Math.round(w*22),s[T+1]=Math.round(w*58),s[T+2]=Math.round(w*110),s[T+3]=Math.round(w*255)}t.putImageData(i,0,0),Hi.needsUpdate=!0}const $1=new pn(je,.4,Ve),J1=new ht({color:987168,roughness:.95}),Io=new tt($1,J1);Io.name="oceanFloor";Io.position.set(0,-ci-.2,0);Io.receiveShadow=!0;Gt.add(Io);for(let n=0;n<12;n++){const t=.15+Math.random()*.35,e=new tt(new Ja(t,0),new ht({color:2234900,roughness:1}));e.name="rock_"+n,e.position.set((Math.random()-.5)*(je-1),-ci+.05,(Math.random()-.5)*(Ve-1)),e.rotation.set(Math.random(),Math.random(),Math.random()),Gt.add(e)}const ni=-ci,Q1=[{x:-3.2,z:-2.5},{x:2.8,z:1.8},{x:-1,z:3.2},{x:3.8,z:-3.5}],vp=[],Oi=55;Q1.forEach((n,t)=>{const e=new ht({color:2759178,roughness:1}),i=new Fe(.22,.32,.55,9),s=new tt(i,e);s.name="ventBase_"+t,s.position.set(n.x,ni+.27,n.z),Gt.add(s);const r=new Fe(.14,.2,.9,9),a=new tt(r,e);a.name="ventShaft_"+t,a.position.set(n.x,ni+.95,n.z),Gt.add(a);const o=new Qa(.16,.045,8,20),l=new ht({color:16733440,emissive:16729088,emissiveIntensity:3.5,roughness:.3}),c=new tt(o,l);c.name="ventRim_"+t,c.rotation.x=Math.PI/2,c.position.set(n.x,ni+1.42,n.z),Gt.add(c);for(let g=0;g<6;g++){const b=g/6*Math.PI*2+Math.random()*.4,M=.3+Math.random()*.25,w=new Ja(.08+Math.random()*.1,0),T=new ht({color:3811866,roughness:1}),C=new tt(w,T);C.name="ventLump_"+t+"_"+g,C.position.set(n.x+Math.cos(b)*M,ni+.08,n.z+Math.sin(b)*M),C.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),Gt.add(C)}const f=new gr(16737792,2.8,4.5);f.name="ventLight_"+t,f.position.set(n.x,ni+1.5,n.z),Gt.add(f);const m=new Ut,u=new Float32Array(Oi*3),p=new Float32Array(Oi*3),_=new Float32Array(Oi),y=new Float32Array(Oi);for(let g=0;g<Oi;g++){_[g]=Math.random(),y[g]=.6+Math.random()*.8;const b=.08;p[g*3]=(Math.random()-.5)*b,p[g*3+1]=.007+Math.random()*.009,p[g*3+2]=(Math.random()-.5)*b,u[g*3]=n.x+(Math.random()-.5)*.12,u[g*3+1]=ni+1.4+_[g]*y[g]*2.2,u[g*3+2]=n.z+(Math.random()-.5)*.12}m.setAttribute("position",new Jt(u,3));const d=new mr({color:11162880,size:.08,transparent:!0,opacity:.35,sizeAttenuation:!0}),h=new Ka(m,d);h.name="ventPlume_"+t,h.frustumCulled=!1,Gt.add(h),vp.push({mesh:h,geo:m,pos:u,vel:p,age:_,life:y,ox:n.x,oz:n.z,light:f,phase:Math.random()*Math.PI*2})});const tS=[{x:-3.5,z:-2.1},{x:-3,z:-2.9},{x:-2.7,z:-2.4},{x:2.5,z:2.1},{x:3.1,z:1.5},{x:2.9,z:2.4},{x:-1.3,z:3},{x:-.7,z:2.9},{x:4.1,z:-3.2},{x:3.6,z:-3.8}];tS.forEach((n,t)=>{const e=.35+Math.random()*.45,i=new Fe(.03,.04,e,6),s=new ht({color:2236962,roughness:.9}),r=new tt(i,s);r.name="tubeWorm_"+t,r.position.set(n.x,ni+e/2,n.z),r.rotation.z=(Math.random()-.5)*.25,Gt.add(r);const a=[16720418,16729156,16755370,15610675],o=new ht({color:a[t%a.length],emissive:a[t%a.length],emissiveIntensity:1.8}),l=new tt(new we(.055,7,7),o);l.name="tubeWormTip_"+t,l.position.set(n.x,ni+e+.04,n.z),Gt.add(l)});const gs={causticDepthFade:1,torchBlend:0,torchActive:!1},Sd=new um;let Qn=0;const yd=new L,ga=new L;function eS(n){vp.forEach(t=>{const e=t.pos,i=t.vel;for(let s=0;s<Oi;s++){if(t.age[s]+=.008,t.age[s]>t.life[s]){t.age[s]=0,t.life[s]=.6+Math.random()*.8,e[s*3]=t.ox+(Math.random()-.5)*.12,e[s*3+1]=ni+1.42,e[s*3+2]=t.oz+(Math.random()-.5)*.12;const f=.07;i[s*3]=(Math.random()-.5)*f,i[s*3+1]=.007+Math.random()*.009,i[s*3+2]=(Math.random()-.5)*f;continue}const r=t.age[s]/t.life[s];e[s*3]+=i[s*3]*(1+r*.8),e[s*3+1]+=i[s*3+1],e[s*3+2]+=i[s*3+2]*(1+r*.8);const a=ue[3].y+ue[3].height/2;e[s*3+1]>a&&(e[s*3+1]=a);const o=.0015,l=e[s*3]-t.ox,c=e[s*3+2]-t.oz;e[s*3]+=-c*o,e[s*3+2]+=l*o}t.geo.attributes.position.needsUpdate=!0,t.age.reduce((s,r)=>s+r,0)/Oi/.7,t.mesh.material.opacity=.22+.1*Math.sin(n*1.8+t.phase),t.light.intensity=2.2+1.2*Math.sin(n*3.1+t.phase)})}function nS(){const n=Sd.getElapsedTime();Sd.getDelta;const t=Qn%2===0,e=ue[2].y+ue[2].height/2,s=Tn<e?Math.min(1,(e-Tn)/(ue[2].height*.6)):0;Be+=(s-Be)*.035,fa=Be>.01,gs.torchBlend=Be,gs.torchActive=fa,gs.causticDepthFade=Math.max(0,1-Math.abs(Tn/ue[0].height));const r=cr.attributes.position;for(let h=0;h<gc.length;h++){const g=gc[h],b=Math.sin(g.ox*1.2+n*1.5+g.phase)*.07+Math.sin(g.oz*.9+n*1.1+g.phase*.7)*.05+Math.sin((g.ox+g.oz)*.7+n*2)*.03;r.setY(h,b)}r.needsUpdate=!0,Qn%8===0&&cr.computeVertexNormals(),Yt.position.y=Math.sin(n*1.2)*.06+Math.sin(n*.7)*.03,Yt.rotation.z=Math.sin(n*.9)*.015,Yt.rotation.x=Math.sin(n*.6)*.01;const a=ef;a&&(a.userData.baseY===void 0&&(a.userData.baseY=a.position.y),a.position.y=a.userData.baseY+Math.sin(n*.3)*.25+Math.sin(n*.17)*.1,a.rotation.y=Math.sin(n*.15)*.015),C1();const o=hr-ii;if(Zs=Math.abs(o)>.02,Math.abs(o)>.001){const h=Math.min(1,Math.abs(o)/ci),g=fd+(P1-fd)*h;ii+=Math.sign(o)*Math.min(Math.abs(o),g)}else ii=hr;Tn+=(ii-Tn)*.055,Bt.position.y=Tn,Ze?(Bt.rotation.z=0,Bt.rotation.x=0):(Bt.rotation.z=(ii-Tn)*.15,Bt.rotation.x=Math.sin(n*1.3)*.03),Bt.position.x=1.3+Math.sin(n*.7)*.08,Mn.rotation.set(0,Ps.yaw,0,"YXZ");const l=Zs?18:5;if(ld&&(ld.rotation.y=n*l),cd&&(cd.rotation.y=-n*l),hd){const h=Math.sin(n*3.5)>.6?1:0;hd.material.emissiveIntensity=h*4}if(ud&&(ud.rotation.y=n*(Zs?8:2.5)),Zs){for(let h=0;h<ki;h++)if(Qs[h]>=Aa[h]){Qs[h]=0,Aa[h]=.35+Math.random()*.45,Ii[h*3]=Bt.position.x+.28+(Math.random()-.5)*.12,Ii[h*3+1]=Bt.position.y+(Math.random()-.5)*.1,Ii[h*3+2]=Bt.position.z+(Math.random()-.5)*.18,fs[h*3]=.005+Math.random()*.008,fs[h*3+1]=(Math.random()-.3)*.006,fs[h*3+2]=(Math.random()-.5)*.006;break}}let c=0;for(let h=0;h<ki;h++)Qs[h]<Aa[h]&&(Qs[h]+=.016,Ii[h*3]+=fs[h*3],Ii[h*3+1]+=fs[h*3+1],Ii[h*3+2]+=fs[h*3+2],c++);wh.attributes.position.needsUpdate=!0;const f=Zs&&c>0?.45:0;Mc.opacity+=(f-Mc.opacity)*.12,_n.intensity=sd-(sd-DM)*Be,sn.intensity=3.2*(1-Be*.92),so.intensity=.45*(1-Be*.88),ro.intensity=.28*(1-Be*.8),Kc.intensity=.55*(1-Be*.85),Yi&&(_n.intensity=Math.max(_n.intensity,Jd)),nr.intensity=yi.lerp(LM,IM,Be)*(1+.12*Math.sin(n*7.3)),nr.distance=yi.lerp(UM,NM,Be),nr.color.setHSL(.58,.6,yi.lerp(.7,.9,Be));const m=1+.06*Math.sin(n*9.1+.5);if(po.forEach(h=>{h.material.opacity=h._baseAlpha*Be*m}),y1.opacity=Be*(.55+.08*Math.sin(n*7.7))*m,b1.opacity=Be*(.18+.05*Math.sin(n*5.3))*m,ep.opacity=Be*(.55+.12*Math.sin(n*11.3))*m,tp.opacity=Be*.72*m,fa){for(let h=0;h<br;h++){Nn[h*3]+=ys[h*3],Nn[h*3+1]+=ys[h*3+1]+Math.sin(n*.6+xc[h])*3e-4,Nn[h*3+2]+=ys[h*3+2]+Math.cos(n*.5+xc[h])*3e-4;const g=Nn[h*3],b=Nn[h*3+1],M=Nn[h*3+2],w=-(g+.32),T=w/Oa*1.1,C=b*b+M*M;(w<0||w>Oa||C>T*T*1.1)&&Qf(h)}Eh.attributes.position.needsUpdate=!0}A1();const u=vc.position.y,p=8;hp.forEach(h=>{Math.abs(h.light.position.y-u)>p||(h.light.intensity=h.baseIntensity*(.7+.6*Math.sin(n*2.5+h.phase)))}),B1.forEach(h=>{h.light.intensity=h.base*(.88+.12*Math.sin(n*.4+h.phase))}),Bt.getWorldPosition(yd);const _=1.8,y=Qn%3===0;if(t&&cp.forEach((h,g)=>{if(g.getWorldPosition(ga),Math.abs(ga.y-u)>p){h.light.intensity=0;return}if(h.light.position.copy(ga),h.flashing){h.timer+=.016;const b=h.timer/h.duration,M=b<.18?b/.18:Math.pow(1-(b-.18)/.82,1.8),w=Math.max(0,M)*(3.5+1.2*Math.sin(n*22));h.light.intensity=w,h.emissiveMat.emissiveIntensity=h.baseEmissiveIntensity+Math.max(0,M)*4.5,h.emissiveMat.emissive&&h.emissiveMat.emissive.lerpColors(h.baseEmissive,h.flashColor,Math.max(0,M)*.8),h.timer>=h.duration&&(h.flashing=!1,h.timer=0,h.cooldownTimer=h.cooldown,h.light.intensity=0,h.emissiveMat.emissiveIntensity=h.baseEmissiveIntensity,h.emissiveMat.emissive&&h.emissiveMat.emissive.copy(h.baseEmissive))}else if(h.cooldownTimer-=.016,y&&fa&&h.cooldownTimer<=0&&yd.distanceTo(ga)<_){h.flashing=!0,h.timer=0,h.duration=.45+Math.random()*.4;const M=Math.random();h.flashColor.setHSL(M,1,.65),h.light.color.copy(h.flashColor)}}),t&&Qc.forEach(h=>{const g=h.userData;if(!(!g||g.zoneId===void 0)&&!(Math.abs(h.position.y-u)>p)){if(h.position.y=g.baseY+Math.sin(n*g.floatSpeed+g.floatOffset)*g.floatAmp,h.position.x+=g.driftDir,Math.abs(h.position.x)>je/2-.8&&(g.driftDir*=-1),h.rotation.y+=g.rotSpeed,g.isFish&&(h.rotation.z=Math.sin(n*2.2+g.wobblePhase)*.08),g.isManta&&g.wingLeft&&g.wingRight){const b=Math.sin(n*1.2+g.wobblePhase)*.18;g.wingLeft.rotation.x=b,g.wingRight.rotation.x=-b}if(g.isJelly&&g.bellMesh){const b=Math.sin(n*1.8+g.wobblePhase),M=b>0?b*b:b*.3,w=1+M*.12,T=1-M*.1;if(h.scale.set(w,T,w),g.jellyMats){const C=[.45,.2,.55,.5],x=.3+.2*Math.sin(n*1.8+g.wobblePhase);g.jellyMats.forEach((S,P)=>{S.emissiveIntensity=C[P]*x/.3})}}if(g.isSquid){const b=.28+.22*Math.sin(n*1.4+g.wobblePhase);if(g.squidMats){const w=[.3,.15,.35,.55];g.squidMats.forEach((T,C)=>{T.emissiveIntensity=w[C]*(b/.28)})}if(g.photoMat){const w=2.8+1.8*Math.sin(n*3.2+g.wobblePhase)+.9*Math.sin(n*7.5+g.wobblePhase*1.7);g.photoMat.emissiveIntensity=Math.max(.8,w)}g.eyeIrisMat&&(g.eyeIrisMat.emissiveIntensity=1.2+1*Math.sin(n*1.4+g.wobblePhase+.6));const M=1+.04*Math.sin(n*1.4+g.wobblePhase);h.scale.set(M,1,M)}}}),Qn%4===0){const h=gs.causticDepthFade;window._scanLineMeshes&&window._scanLineMeshes.forEach(g=>{const b=g.userData.phaseOffset||0,M=.9+.1*Math.sin(n*.18+b);g.material.opacity=g.userData.baseOpacity*h*M,g.scale.x=1+.08*Math.sin(n*.12+b)}),window._glowLineMeshes&&window._glowLineMeshes.forEach(g=>{const b=g.userData.phaseOffset||0,M=.75+.25*Math.sin(n*.18+b);g.material.opacity=g.userData.baseOpacity*h*M,g.scale.x=1+.15*Math.sin(n*.12+b)})}const d=(1-gs.torchBlend)*gs.causticDepthFade;if(up.opacity=.07*d,d>.005&&Qn%3===0&&G1(n),Qn%3===0&&K1(n),Hi.offset.x+=15e-5,Hi.offset.y-=1e-4,Qn%2===0&&eS(n),Qn%2===0){const h=Fa.geometry.attributes.position.array;for(let g=0;g<vr;g++)h[g*3+1]-=sf[g]*.4,h[g*3]+=Math.sin(n*.3+g)*.003,h[g*3+1]<-ci&&(h[g*3+1]=0,h[g*3]=(Math.random()-.5)*je,h[g*3+2]=(Math.random()-.5)*Ve);Fa.geometry.attributes.position.needsUpdate=!0}op(),Ze||(Ue.target.y+=(np-Ue.target.y)*.06),Ue.update(),Qd.camera=vc,Is.render(),Qn++}const Wa=document.getElementById("parallax-title");Wa&&Wa.querySelector(".title-main");Wa&&Wa.querySelector(".title-sub");window.addEventListener("mousemove",n=>{(n.clientX/window.innerWidth-.5)*2,(n.clientY/window.innerHeight-.5)*2});le.setAnimationLoop(nS);window.addEventListener("resize",()=>{Wn.aspect=window.innerWidth/window.innerHeight,Wn.updateProjectionMatrix(),hi.aspect=window.innerWidth/window.innerHeight,hi.updateProjectionMatrix(),le.setSize(window.innerWidth,window.innerHeight),Is.setSize(window.innerWidth,window.innerHeight),tf.resolution.set(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2))});
