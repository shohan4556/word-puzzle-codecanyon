(function(){"use strict";var n,r,t,o,i,e,a,l,u,f,c;("undefined"!=typeof exports&&null!==exports?exports:window).wordfind=(n="abcdefghijklmnoprstuvwy",o={horizontal:function(n,r,t,o,i){return o>=n+i},horizontalBack:function(n,r,t,o,i){return n+1>=i},vertical:function(n,r,t,o,i){return t>=r+i},verticalUp:function(n,r,t,o,i){return r+1>=i},diagonal:function(n,r,t,o,i){return o>=n+i&&t>=r+i},diagonalBack:function(n,r,t,o,i){return n+1>=i&&t>=r+i},diagonalUp:function(n,r,t,o,i){return o>=n+i&&r+1>=i},diagonalUpBack:function(n,r,t,o,i){return n+1>=i&&r+1>=i}},i={horizontal:function(n,r,t){return{x:0,y:r+1}},horizontalBack:function(n,r,t){return{x:t-1,y:r}},vertical:function(n,r,t){return{x:0,y:r+100}},verticalUp:function(n,r,t){return{x:0,y:t-1}},diagonal:function(n,r,t){return{x:0,y:r+1}},diagonalBack:function(n,r,t){return{x:t-1,y:n>=t-1?r+1:r}},diagonalUp:function(n,r,t){return{x:0,y:r<t-1?t-1:r+1}},diagonalUpBack:function(n,r,t){return{x:t-1,y:n>=t-1?r+1:r}}},e=function(n,r){var t,o,i,e=[];for(t=0;t<r.height;t++)for(e.push([]),o=0;o<r.width;o++)e[t].push("");for(t=0,i=n.length;t<i;t++)if(!a(e,r,n[t]))return null;return e},a=function(n,r,o){var i=l(n,r,o);if(0===i.length)return!1;var e=i[Math.floor(Math.random()*i.length)];return c(n,o,e.x,e.y,t[e.orientation]),!0},l=function(n,r,e){for(var a=[],l=r.height,c=r.width,h=e.length,g=0,v=0,p=r.orientations.length;v<p;v++)for(var d=r.orientations[v],s=o[d],x=t[d],y=i[d],k=0,B=0;B<l;)if(s(k,B,l,c,h)){var w=u(e,n,k,B,x);(w>=g||!r.preferOverlap&&w>-1)&&(g=w,a.push({x:k,y:B,orientation:d,overlap:w})),++k>=c&&(k=0,B++)}else{var U=y(k,B,h);k=U.x,B=U.y}return r.preferOverlap?f(a,g):a},u=function(n,r,t,o,i){for(var e=0,a=0,l=n.length;a<l;a++){var u=i(t,o,a),f=r[u.y][u.x];if(f===n[a])e++;else if(""!==f)return-1}return e},f=function(n,r){for(var t=[],o=0,i=n.length;o<i;o++)n[o].overlap>=r&&t.push(n[o]);return t},c=function(n,r,t,o,i){for(var e=0,a=r.length;e<a;e++){var l=i(t,o,e);n[l.y][l.x]=r[e]}},{validOrientations:r=["horizontal","horizontalBack","vertical","verticalUp","diagonal","diagonalUp","diagonalBack","diagonalUpBack"],orientations:t={horizontal:function(n,r,t){return{x:n+t,y:r}},horizontalBack:function(n,r,t){return{x:n-t,y:r}},vertical:function(n,r,t){return{x:n,y:r+t}},verticalUp:function(n,r,t){return{x:n,y:r-t}},diagonal:function(n,r,t){return{x:n+t,y:r+t}},diagonalBack:function(n,r,t){return{x:n-t,y:r+t}},diagonalUp:function(n,r,t){return{x:n+t,y:r-t}},diagonalUpBack:function(n,r,t){return{x:n-t,y:r-t}}},newPuzzle:function(n,t){var o,i,a=0,l=t||{};o=n.slice(0).sort((function(n,r){return n.length<r.length?1:0}));for(var u={height:l.height||o[0].length,width:l.width||o[0].length,orientations:l.orientations||r,fillBlanks:void 0===l.fillBlanks||l.fillBlanks,maxAttempts:l.maxAttempts||3,preferOverlap:void 0===l.preferOverlap||l.preferOverlap};!i;){for(;!i&&a++<u.maxAttempts;)i=e(o,u);i||(u.height++,u.width++,a=0)}return u.fillBlanks&&this.fillBlanks(i,u),i},fillBlanks:function(r){for(var t=0,o=r.length;t<o;t++)for(var i=0,e=r[t].length;i<e;i++)if(!r[t][i]){var a=Math.floor(23*Math.random());r[t][i]=n[a]}},solve:function(n,t){for(var o={height:n.length,width:n[0].length,orientations:r,preferOverlap:!0},i=[],e=[],a=0,u=t.length;a<u;a++){var f=t[a],c=l(n,o,f);c.length>0&&c[0].overlap===f.length?(c[0].word=f,i.push(c[0])):e.push(f)}return{found:i,notFound:e}},print:function(n){for(var r="",t=0,o=n.length;t<o;t++){for(var i=n[t],e=0,a=i.length;e<a;e++)r+=(""===i[e]?" ":i[e])+" ";r+="\n"}return console.log(r),r}})}).call(this);