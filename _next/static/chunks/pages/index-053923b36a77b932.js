(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(559)}])},559:function(e,t,n){"use strict";let r,i,a,o;n.r(t),n.d(t,{default:function(){return pages}});var s=n(6416),u=n(5893),c=n(9008),l=n.n(c),f=n(7294),h=n(4131),p=n.n(h);let SampleLayout=e=>{let t=(0,f.useRef)(null),r=(0,f.useRef)(null),i=(0,f.useMemo)(()=>{if(e.gui){let e=n(4376);return new e.GUI({autoPlace:!1})}},[]),a=(0,f.useRef)(null),o=(0,f.useMemo)(()=>{if(e.stats){let e=n(2792);return new e}},[]),[s,c]=(0,f.useState)(null);return(0,f.useEffect)(()=>{if(i&&r.current)for(r.current.appendChild(i.domElement);i.__controllers.length>0;)i.__controllers[0].remove();o&&a.current&&(o.dom.style.position="absolute",o.showPanel(1),a.current.appendChild(o.dom));let n={active:!0};try{let r=t.current;if(!r)throw Error("The canvas is not available");let a=e.init({canvas:r,pageState:n,gui:i,stats:o});a instanceof Promise&&a.catch(e=>{console.error(e),c(e)})}catch(e){console.error(e),c(e)}return()=>{n.active=!1}},[]),(0,u.jsxs)("main",{children:[(0,u.jsxs)(l(),{children:[(0,u.jsx)("title",{children:"Terrain X"}),(0,u.jsx)("meta",{name:"description",content:e.description}),(0,u.jsx)("meta",{httpEquiv:"origin-trial",content:e.originTrial})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{children:e.name}),(0,u.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/".concat("GPU-Gang/WebGPU-Erosion-Simulation","/tree/main/").concat(e.filename),children:"See it on Github!"}),(0,u.jsx)("p",{children:e.description}),s?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("p",{children:"Something went wrong. Do your browser and device support WebGPU?"}),(0,u.jsx)("p",{children:"".concat(s)})]}):null]}),(0,u.jsxs)("div",{className:p().canvasContainer,children:[(0,u.jsx)("div",{style:{position:"absolute",left:10},ref:a}),(0,u.jsx)("div",{style:{position:"absolute",right:10},ref:r,children:(0,u.jsx)("input",{id:"img-path",type:"file"})}),(0,u.jsx)("canvas",{ref:t})]})]})},makeSample=e=>(0,u.jsx)(SampleLayout,{...e});var d=n(4478),m=class{setResolution(e){this.resolution=e,this.aspectRatio=e[0]/e[1]}updateProjectionMatrix(){s._E.perspective(this.fovy,this.aspectRatio,this.near,this.far,this.projectionMatrix)}update(){this.controls.tick();let e=this.viewMatrix();this.right[0]=-e[0],this.right[1]=-e[4],this.right[2]=-e[8],this.up[0]=e[1],this.up[1]=e[5],this.up[2]=e[9],this.forward[0]=-e[2],this.forward[1]=-e[6],this.forward[2]=-e[10]}viewMatrix(){return this.controls.matrix}getPosition(){return this.controls.eye}constructor(e,t){this.projectionMatrix=s._E.create(),this.fovy=45,this.aspectRatio=1,this.near=.1,this.far=1e6,this.resolution=s.K4.create(400,400),this.right=s.R3.create(1,0,0),this.up=s.R3.create(0,1,0),this.forward=s.R3.create(0,0,1),this.controls=d(document.getElementById("canvas"),{eye:e,center:t,translateSpeed:-1,mode:"orbit"}),this.controls.flipX=!0,this.controls.flipY=!0,this.controls.rotate(0,3.14159,0)}},g=class{create(e){this.device=e}createIndexBuffer(){return this.idxBound||(this.idxBound=!0,this.indexBuffer=this.device.createBuffer({size:this.indices.byteLength,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(this.indices),this.indexBuffer.unmap()),this.indexBuffer}createPosBuffer(){return this.posBound||(this.posBound=!0,this.posBuffer=this.device.createBuffer({size:this.positions.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.posBuffer.getMappedRange()).set(this.positions),this.posBuffer.unmap()),this.posBuffer}createNormalBuffer(){return this.norBound||(this.norBound=!0,this.normalBuffer=this.device.createBuffer({size:this.normals.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.normalBuffer.getMappedRange()).set(this.normals),this.normalBuffer.unmap()),this.normalBuffer}createUVBuffer(){return this.uvBound||(this.uvBound=!0,this.uvBuffer=this.device.createBuffer({size:this.uvs.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.uvBuffer.getMappedRange()).set(this.uvs),this.uvBuffer.unmap()),this.uvBuffer}elemCount(){return this.count}constructor(){this.count=0,this.idxBound=!1,this.posBound=!1,this.norBound=!1,this.uvBound=!1}};function degToRad(e){return .0174533*e}var v=class extends g{create(e){super.create(e),this.indices=new Uint32Array([0,1,2,0,2,3]),this.normals=new Float32Array([0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0]),this.positions=new Float32Array([-1,-1,0,1,1,-1,0,1,1,1,0,1,-1,1,0,1]),this.uvs=new Float32Array([0,1,1,1,1,0,0,0]),this.count=this.indices.length,this.createIndexBuffer(),this.createPosBuffer(),this.createNormalBuffer(),this.createUVBuffer()}createBindGroup(e,t,n,r,i){return this.bindGroupCreated||(this.bindGroupCreated=!0,this.bindGroup=this.device.createBindGroup({layout:e.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:t,offset:n}},{binding:1,resource:r},{binding:2,resource:i.createView()}]})),this.bindGroup}getModelMatrix(){let e=s._E.identity();return s._E.rotateX(e,this.rotation[0],e),s._E.rotateY(e,this.rotation[1],e),s._E.rotateZ(e,this.rotation[2],e),s._E.scale(e,this.scale,e),s._E.translate(e,this.center,e),e}constructor(e=s.vh.create(0,0,0,0),t=s.R3.create(1,1,1),n=s.R3.create(0,0,0)){super(),this.bindGroupCreated=!1,this.center=s.vh.fromValues(e[0],e[1],e[2],1),this.scale=t,this.rotation=n,this.rotation[0]=degToRad(this.rotation[0]),this.rotation[1]=degToRad(this.rotation[1]),this.rotation[2]=degToRad(this.rotation[2])}},x=class extends v{createTerrainBindGroup(e,t,n,r,i,a){return this.bindGroupCreated||(this.bindGroupCreated=!0,this.bindGroup=this.device.createBindGroup({layout:e.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:t,offset:n}},{binding:1,resource:r},{binding:2,resource:i.createView()},{binding:3,resource:{buffer:a,offset:0}}]})),this.bindGroup}},b=class{constructor(){this.nx=256,this.ny=256,this.lowerVertX=-5,this.lowerVertY=-5,this.upperVertX=5,this.upperVertY=5,this.cellDiagX=1176.47,this.cellDiagY=1176.47}};let w=(()=>{let e,t;let n={};return function(r,i){t||(t=r.createShaderModule({label:"textured quad shaders for mip level generation",code:"struct VertexOutput {\r\n    @builtin(position) position : vec4f,\r\n    @location(0) texCoord : vec2f,\r\n}\r\n\r\n@vertex\r\nfn vertexMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {\r\n    var pos = array<vec2f, 4>(\r\n        vec2f(-1, 1), vec2f(1, 1),\r\n        vec2f(-1, -1), vec2f(1, -1)\r\n    );\r\n    var output : VertexOutput;\r\n    output.texCoord = pos[vertexIndex] * vec2f(0.5, -0.5) + vec2f(0.5);\r\n    output.position = vec4f(pos[vertexIndex], 0, 1);\r\n    return output;\r\n}\r\n\r\n@group(0) @binding(0) var imgSampler : sampler;\r\n@group(0) @binding(1) var img : texture_2d<f32>;\r\n\r\n@fragment\r\nfn fragmentMain(@location(0) texCoord : vec2f) -> @location(0) vec4f {\r\n    return textureSample(img, imgSampler, texCoord);\r\n}"}),e=r.createSampler({minFilter:"linear"})),n[i.format]||(n[i.format]=r.createRenderPipeline({label:"mip level generator pipeline",layout:"auto",vertex:{module:t,entryPoint:"vertexMain"},fragment:{module:t,entryPoint:"fragmentMain",targets:[{format:i.format}]},primitive:{topology:"triangle-strip",stripIndexFormat:"uint32"}}));let a=n[i.format],o=r.createCommandEncoder({label:"mip gen encoder"}),s=i.width,u=i.height,c=0;for(;s>1||u>1;){s=Math.max(1,s/2|0),u=Math.max(1,u/2|0);let t=r.createBindGroup({layout:a.getBindGroupLayout(0),entries:[{binding:0,resource:e},{binding:1,resource:i.createView({baseMipLevel:c,mipLevelCount:1})}]});++c;let n={label:"mip gen canvas renderPass",colorAttachments:[{view:i.createView({baseMipLevel:c,mipLevelCount:1}),loadOp:"clear",storeOp:"store"}]},l=o.beginRenderPass(n);l.setPipeline(a),l.setBindGroup(0,t),l.draw(4),l.end()}let l=o.finish();r.queue.submit([l])}})(),numMipLevels=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let r=Math.max(...t);return 1+Math.log2(r)|0};async function loadImageBitmap(e){let t=await fetch(e),n=await t.blob();return await createImageBitmap(n,{colorSpaceConversion:"none"})}async function createTextureFromImageWithMip(e,t,n){let r=await loadImageBitmap(t);return function(e,t,n,r){let i=e.createTexture({label:t,format:"rgba8unorm",mipLevelCount:r.mips?numMipLevels(n.width,n.height):1,size:[n.width,n.height],usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return console.log("mip count: "+i.mipLevelCount),!function(e,t,n,r){let{flipY:i}=r;e.queue.copyExternalImageToTexture({source:n,flipY:i},{texture:t},{width:n.width,height:n.height}),t.mipLevelCount>1&&w(e,t)}(e,i,n,!!r.flipY&&r.flipY),i}(e,t,r,n)}let y="assets/uplifts/",B=["hfTest6","hfTest2","hfTest3","hfTest1","hfTest5"],P=["alpes_noise","lambda"],R=["pattern1_bg","pattern2_bg","pattern3_bg"],S=[],_=[],T=[],I=[],C=[],U=[],A=0,D=!1,V=0,M=0,G=s.K4.fromValues(-1,-1),E=!1,L=null;function createRenderPipeline(e,t,n){let r=e.createRenderPipeline({layout:"auto",vertex:{module:e.createShaderModule({code:t}),entryPoint:"vert_main",buffers:[{arrayStride:16,attributes:[{shaderLocation:0,format:"float32x4",offset:0}]},{arrayStride:16,attributes:[{shaderLocation:1,format:"float32x4",offset:0}]},{arrayStride:8,attributes:[{shaderLocation:2,format:"float32x2",offset:0}]}]},fragment:{module:e.createShaderModule({code:t}),entryPoint:"frag_main",targets:[{format:n}]},primitive:{topology:"triangle-list",cullMode:"back"}});return r}function writeMVPUniformBuffer(e,t,n,r,i){let a=arguments.length>5&&void 0!==arguments[5]&&arguments[5],o=s._E.identity();var u=i.viewMatrix();a?s._E.multiply(o,r,o):(s._E.multiply(u,r,o),s._E.multiply(i.projectionMatrix,o,o)),e.queue.writeBuffer(t,n,new Float32Array([o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7],o[8],o[9],o[10],o[11],o[12],o[13],o[14],o[15],i.right[0],i.right[1],i.right[2],0,i.up[0],i.up[1],i.up[2],0,i.forward[0],i.forward[1],i.forward[2],0,i.getPosition()[0],i.getPosition()[1],i.getPosition()[2],0,i.resolution[0],i.resolution[1],0,0]))}function createTextureOfSize(e,t,n,r,i){return e.createTexture({label:i,size:[t,n,1],format:r?"r8unorm":"rgba8unorm",mipLevelCount:1,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT|(!r&&GPUTextureUsage.STORAGE_BINDING)|(!r&&GPUTextureUsage.COPY_SRC)})}let createTextureFromImage=(e,t,n,r,i)=>{let a=createTextureOfSize(e,t.width,t.height,n,i);return r&&e.queue.copyExternalImageToTexture({source:t},{texture:a},[t.width,t.height]),a},init=async e=>{let t,n,{canvas:u,pageState:c,gui:l,stats:f}=e;l.width=280;let h={heightfield:B[0],uplift:P[0],eraseTerrain:!1,useCustomBrush:!1,customBrush:R[0],brushScale:10,brushStrength:10,heightFieldPath:"Not in use",onClickFunc:function(){var e=document.getElementById("img-path");e.addEventListener("change",async function(){var t=e.files[0];if(e.files.length){let r=URL.createObjectURL(t),i=await fetch(r);for(var n in L=await createImageBitmap(await i.blob()),E=!0,p=0,h.heightFieldPath=t.name,l.__controllers)l.__controllers[n].updateDisplay();e.value=""}}),e.click()}},p=0;l.add(h,"heightfield",B).onFinishChange(()=>{p=0,E=!1}),l.add(h,"uplift",P).onFinishChange(()=>{p=1}),l.add(h,"eraseTerrain"),l.add(h,"useCustomBrush"),l.add(h,"customBrush",R).onFinishChange(()=>{r=T[R.indexOf(h.customBrush)],p=2}),l.add(h,"brushScale",0,10,1),l.add(h,"brushStrength",0,20),l.add(h,"heightFieldPath").name("Custom Height Map"),l.add(h,"onClickFunc").name("Upload Custom Height Map");let d=await navigator.gpu.requestAdapter(),g=await d.requestDevice();if(!c.active)return;let w=u.getContext("webgpu"),F=window.devicePixelRatio;u.width=u.clientWidth*F,u.height=u.clientHeight*F;let X=navigator.gpu.getPreferredCanvasFormat();u.addEventListener("mousedown",e=>{e.ctrlKey&&(e.stopImmediatePropagation(),D=!0,V=e.offsetX,M=e.offsetY)},!0),u.addEventListener("mousemove",e=>{e.ctrlKey&&(e.stopImmediatePropagation(),0==e.button&&(V=e.offsetX,M=e.offsetY))},!0),u.addEventListener("mouseup",()=>{D=!1}),w.configure({device:g,format:X,alphaMode:"premultiplied"}),(a=new v(s.vh.create(2.5,2.5,0,0),s.R3.create(.3,.3,1))).create(g),(o=new x(s.vh.create(0,0,0,0),s.R3.create(1,1,1))).create(g),f.showPanel(0);let Y=s.R3.create(o.center[0],o.center[1]+2,o.center[2]),N=new m(s.R3.create(0,0,-10),Y);N.setResolution(s.K4.create(u.width,u.height)),N.updateProjectionMatrix();let O=createRenderPipeline(g,"struct Uniforms {\n  modelViewProjectionMatrix : mat4x4<f32>,\n}\n@group(0) @binding(0) var<uniform> uniforms : Uniforms;\n\n@group(0) @binding(1) var mySampler : sampler;\n@group(0) @binding(2) var myTexture : texture_2d<f32>;\n\nstruct VertexOutput {\n  @builtin(position) Position : vec4<f32>,\n  @location(0) fs_UV : vec2<f32>,\n}\n\n@vertex\nfn vert_main(\n  @location(0) vs_pos: vec4<f32>,\n  @location(1) vs_nor: vec4<f32>,\n  @location(2) vs_uv: vec2<f32>) -> VertexOutput {\n  var output : VertexOutput;\n  output.Position = uniforms.modelViewProjectionMatrix * vs_pos;\n  output.fs_UV = vs_uv;\n  return output;\n}\n\n@fragment\nfn frag_main(@location(0) fs_UV : vec2<f32>) -> @location(0) vec4<f32> {\n  return textureSample(myTexture, mySampler, fs_UV);\n}",X),H=createRenderPipeline(g,"struct Uniforms {\n  modelViewProjectionMatrix : mat4x4<f32>,\n  right: vec3<f32>,\n  up: vec3<f32>,\n  forward: vec3<f32>,\n  eye: vec3<f32>,\n  screenDims: vec2<f32>,\n}\n\nstruct Terrain\n{\n    textureSize: vec2<i32>, // texture size\n    lowerLeft: vec2<f32>,   // AABB\n    upperRight: vec2<f32>,  // AABB\n}\n\n@group(0) @binding(0) var<uniform> uniforms : Uniforms;\n@group(0) @binding(1) var heightFieldSampler : sampler;\n@group(0) @binding(2) var heightfield : texture_2d<f32>;\n@group(0) @binding(3) var<uniform> terrain : Terrain;\n\nstruct VertexOutput {\n  @builtin(position) Position : vec4<f32>,\n  @location(0) fs_UV : vec2<f32>,\n}\n\n@vertex\nfn vert_main(\n  @location(0) vs_pos: vec4<f32>,\n  @location(1) vs_nor: vec4<f32>,\n  @location(2) vs_uv: vec2<f32>) -> VertexOutput {\n  var output : VertexOutput;\n  output.Position = uniforms.modelViewProjectionMatrix * vs_pos;\n  output.fs_UV = vs_uv;\n  return output;\n}\n\n// ----------- FRAG SHADER ------------ //\n\nconst PI : f32 = 3.14159265358979323;\nconst FOVY : f32 = 45.0f * PI / 180.0;\nconst MAX_ITERS : i32 = 256;\nconst MIN_DIST : f32 = 0.01f;\nconst MAX_DIST : f32 = 1000000.0f;\nconst EPSILON : f32 = MIN_DIST;\nconst heightRange : vec2<f32> = vec2(0, 1);       // hardcoded range for now\nconst K: f32 = 1.0f;                              // hardcoded Lipschitz constant\nconst lightPos: vec3<f32> = vec3(5, 12, -5);       // light position\n\n// Data structures\nstruct Ray {\n    origin: vec3<f32>,\n    direction: vec3<f32>,\n};\n\nstruct IntersectAABBResult\n{\n    hit: bool,\n    tNear: f32,\n    tFar: f32\n}\n\nstruct RaymarchResult\n{\n    hit: bool,\n    t: f32,\n    hitPoint: vec3<f32>,\n}\n\n/* =================================\n * ========= RAY FUNCTIONS =========\n * =================================\n*/\n\nfn rayCast(fs_UV: vec2<f32>) -> Ray\n{\n    var ndc : vec2<f32> = (fs_UV);\n    ndc = ndc * 2.f - vec2(1.f);\n\n    let aspect : f32 = uniforms.screenDims.x / uniforms.screenDims.y;\n    let reference : vec3<f32> = uniforms.eye + uniforms.forward;\n    let V : vec3<f32> = uniforms.up * tan(FOVY * 0.5);\n    let H : vec3<f32> = uniforms.right * tan(FOVY * 0.5) * aspect;\n    let p : vec3<f32> = reference + H * ndc.x + V * ndc.y;\n\n    return Ray(uniforms.eye, normalize(p - uniforms.eye));\n}\n\nfn intersectAABB(ray: Ray) -> IntersectAABBResult\n{\n    var result : IntersectAABBResult;\n    result.hit = false;\n    result.tNear = -1;\n    result.tFar = -1;\n\n	var rinvDir : vec3<f32> = 1.0 / ray.direction;\n	var delta : f32 = 0.1 * (heightRange.y - heightRange.x);\n	var tbot : vec3<f32> = rinvDir * (vec3(terrain.lowerLeft.x, heightRange.x - delta, terrain.lowerLeft.y) - ray.origin);\n	var ttop : vec3<f32> = rinvDir * (vec3(terrain.upperRight.x, heightRange.y + delta, terrain.upperRight.y) - ray.origin);\n\n	var tmin : vec3<f32> = min(ttop, tbot);\n	var tmax : vec3<f32> = max(ttop, tbot);\n	var t : vec2<f32> = max(tmin.xx, tmin.yz);\n	var t0 : f32 = max(t.x, t.y);\n	t = min(tmax.xx, tmax.yz);\n	var t1 : f32 = min(t.x, t.y);\n\n    result.hit = t1 > max(t0, 0.0);\n    result.tNear = t0;\n    result.tFar = t1;\n\n    return result;\n}\n\n/* ===============================\n * ======== SDF Primitives =======\n * ===============================\n*/\n\nfn sdfSphere(p: vec3<f32>) -> f32\n{\n    return distance(p, vec3(0,0,0)) - 0.257f;\n}\n\nfn sdfBox2D(p: vec2<f32>, lowerLeft: vec2<f32>, upperRight: vec2<f32>) -> f32\n{\n	var center: vec2<f32> = 0.5 * (lowerLeft + upperRight);\n	var r: vec2<f32> = 0.5 * (upperRight - lowerLeft);\n	var q: vec2<f32> = abs(p - center) - r;\n    return length(max(q, vec2(0.0))) + min(max(q.x, q.y), 0.0);\n}\n\nfn sdfBox3D(p: vec3<f32>, lowerLeft: vec3<f32>, upperRight: vec3<f32>) -> f32\n{\n	var center: vec3<f32> = 0.5 * (lowerLeft + upperRight);\n	var r: vec3<f32> = 0.5 * (upperRight - lowerLeft);\n	var q: vec3<f32> = abs(p - center) - r;\n	return length(max(q, vec3(0.0))) + min(max(q.x, max(q.y, q.z)), 0.0);\n}\n\n/* ==================================\n * ========= Operations =========\n * ==================================\n*/\n\n// Intersection from IQ\nfn sdfIntersection(sdfA: f32, sdfB: f32) -> f32\n{\n	return max(sdfA, sdfB);\n}\n\n// Remap a value in one range to a different range\nfn remap(val: f32, oldMin: f32, oldMax: f32, newMin: f32, newMax: f32) -> f32\n{\n	return newMin + (newMax - newMin) * ((val - oldMin) / (oldMax - oldMin));\n}\n\n/* ============================================\n * ======== Heightfield calculations ==========\n * ============================================\n*/\n\n// Read height from the heightfield texture given a world point\n// returns height at point\nfn getTerrainElevation(p: vec2<f32>) -> f32\n{\n    // calculate the uv value between 0 and 1\n	var numerator: vec2<f32> = p - terrain.lowerLeft;       // lower left to current point\n	var denom: vec2<f32> = terrain.upperRight - terrain.lowerLeft;  // full range\n	var uv: vec2<f32> = numerator / denom;    // remap the vec2 point to a 0->1 range\n\n    var heightCol : vec4<f32> = textureSampleLevel(heightfield, heightFieldSampler, uv, 0.0);\n    var height : f32 = heightCol.r; // black and white means same colour in all channels\n    \n    // this is between 0 and 1 --> remap to correct height range\n	return remap(height, 0.0f, 1.0f, heightRange.x, heightRange.y);\n}\n\n/* ============================================\n * ============ Main Raymarching ==============\n * ============================================\n*/\n\n// Signed distance field object\n// returns signed distance value for the terrain at the point p.\nfn terrainSdf(p: vec3<f32>) -> f32 {\n	var t : f32 = p.y - getTerrainElevation(p.xz);\n	var delta : f32 = 0.1f * (heightRange.y - heightRange.x);\n    \n    var boxSdf: f32 = sdfBox3D(p, \n                                vec3(terrain.lowerLeft.x, heightRange.x - delta, terrain.lowerLeft.y),\n                                vec3(terrain.upperRight.x, heightRange.y + delta, terrain.upperRight.y));\n\n    return sdfIntersection(boxSdf, t);\n}\n\nfn raymarchTerrain(ray: Ray) -> RaymarchResult\n{\n    var result : RaymarchResult;\n    result.hit = false;\n    result.t = -1;\n\n    var aabbTest = intersectAABB(ray);\n\n    if (!aabbTest.hit)\n    {\n        // didn't hit AABB\n        // def not hitting terrain\n        return result;\n    }\n\n    var t : f32 = max(MIN_DIST, aabbTest.tNear);        // start at the point of intersection with the AABB, don't waste unnecessary marching steps\n    var dist : f32 = 0;\n    var p: vec3<f32>;\n    \n    // Lipschitz bound is dependent on ray direction\n	var uz: f32 = abs(ray.direction.y);\n	var kr: f32 = uz + K * sqrt(1.0f - (uz * uz));\n\n    for (var i : i32 = 0; i<MAX_ITERS; i++)\n    {\n        if (t > aabbTest.tFar)\n        {\n            // passed the AABB and didn't hit anything\n            // stop raymarching\n            break;\n        }\n\n        p = ray.origin + ray.direction * t;\n\n        dist = terrainSdf(p);\n\n        if (dist < 0.0f && !result.hit)\n        {\n            result.hit = true;\n            result.t = t;\n            result.hitPoint = p;\n\n            break;\n        }\n\n        if (dist >= MAX_DIST)\n        {\n            break;\n        }\n\n        t += max(dist / kr, MIN_DIST);\n    }\n\n    return result;\n}\n\n/* ============================================\n * ================= Shading ==================\n * ============================================\n*/\n\nfn computeNormal(p: vec3<f32>, eps: vec2<f32>) -> vec3<f32>\n{\n    var e: vec3<f32> = vec3(eps.x, 0.0, eps.y);\n    return normalize(vec3(getTerrainElevation(p.xz + e.xy) - getTerrainElevation(p.xz - e.xy),\n                            getTerrainElevation(p.xz + e.yz) - getTerrainElevation(p.xz - e.yz),\n                            length(eps)\n    ));\n}\n\nfn getTerrainColour(p: vec3<f32>) -> vec4<f32>\n{\n    // TODO: texture size should probably be higher when we get it from the CPU\n	// Terrain sides and bottom\n	if (abs(sdfBox2D(p.xz, terrain.lowerLeft, terrain.upperRight)) < EPSILON\n        || abs(p.y - heightRange.x + 0.1f * (heightRange.y - heightRange.x)) < EPSILON)\n    {\n        return vec4(0.3f, 0.29f, 0.31f, 1.0f);\n    }\n	\n    var shadingMode: i32 = 0;       // hardcoded\n\n	// Terrain interior\n	if (shadingMode == 0)   // normals\n	{\n        var n: vec3<f32> = computeNormal(p, vec2(EPSILON));//(terrain.upperRight - terrain.lowerLeft) / vec2<f32>(terrain.textureSize));\n		return vec4(0.2 * (vec3(3.0) + 2.0 * n.xyz), 1.0);\n	}\n	else if (shadingMode == 1)  // lambertian\n	{\n		var lightDir: vec3<f32> = normalize(vec3(0,0,0) - lightPos); // terrain located at world 0,0,0\n        var ambientTerm: f32 = 0.2;\n        var n: vec3<f32> = computeNormal(p, vec2(EPSILON));//(terrain.upperRight - terrain.lowerLeft) / vec2<f32>(terrain.textureSize));\n        var lambertianTerm: vec3<f32> = vec3(max(dot(n, lightDir), 0.0f) + ambientTerm);\n        \n        var col: vec3<f32> = vec3(1,1,1);\n		return vec4(lambertianTerm * col, 1.0f);\n	}\n	else\n    {\n		return vec4(1.0, 1.0, 1.0, 1.0);\n    }\n}\n\n@fragment\nfn frag_main(@location(0) fs_UV : vec2<f32>) -> @location(0) vec4<f32>\n{\n    var ray : Ray = rayCast(fs_UV);\n    var raymarchResult : RaymarchResult = raymarchTerrain(ray);\n    var outColor : vec4<f32> = vec4(0,0,0.2,1);\n\n    if (raymarchResult.hit)\n    {\n        // outColor = terrainColor;\n        outColor = getTerrainColour(raymarchResult.hitPoint);\n    }\n\n    // outColor = vec4((uniforms.right), 1);\n\n    return outColor;\n}\n",X),q=g.createSampler({magFilter:"linear",minFilter:"linear"}),j=g.createBuffer({size:400,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),z=g.createBuffer({size:280,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});B.forEach(async e=>{t=await fetch("assets/heightfields/"+e+".png"),n=await createImageBitmap(await t.blob()),S.push(createTextureFromImage(g,n,!1,!0,"hf_".concat(e)))}),P.forEach(async e=>{t=await fetch(y+e+".png"),n=await createImageBitmap(await t.blob()),_.push(createTextureFromImage(g,n,!1,!0,"uplift_".concat(e)))}),t=await fetch("assets/stream/streamInput.png"),n=await createImageBitmap(await t.blob());let k=R.map(async e=>await createTextureFromImageWithMip(g,"".concat(y).concat(e,".png"),{mips:!0,flipY:!1}));r=(T=await Promise.all(k))[0];let W=g.createComputePipeline({layout:"auto",compute:{module:g.createShaderModule({code:"struct SimulationParams {\n  nx         : i32,     // array dimension\n  ny         : i32,\n  lowerVertX : f32,     // lower and upper vertices of the box of the heightfield\n  lowerVertY : f32,\n  upperVertX : f32,\n  upperVertY : f32,\n  cellDiagX  : f32,     // cell diagonal\n  cellDiagY  : f32,\n}\n\nstruct CustomBrushParams {\n  brushPosX     : f32,\n  brushPosY     : f32,\n  brushScale    : f32,\n  brushStrength : f32,\n  width         : i32,  // brush texture size\n  height        : i32,\n  erase         : f32,  // temp boolean to erase terrain\n  useCustomBrush: f32,  // boolean\n  // TODO: rotation\n}\n\nstruct AABB {\n  lowerLeft   : vec2<f32>,\n  upperRight  : vec2<f32>,\n}\n\n// Uniforms\n@group(0) @binding(0) var<uniform> simParams : SimulationParams;\n\n@group(1) @binding(1) var inElevation : texture_2d<f32>;\n@group(1) @binding(2) var outElevation : texture_storage_2d<rgba8unorm, write>;\n@group(1) @binding(3) var inUplift : texture_2d<f32>;\n@group(1) @binding(4) var outUplift : texture_storage_2d<rgba8unorm, write>;\n@group(1) @binding(5) var inStream : texture_2d<f32>;\n@group(1) @binding(6) var outStream : texture_storage_2d<rgba8unorm, write>;\n@group(1) @binding(7) var<storage, read_write> steepestFlowBuffer : array<i32>;\n\n@group(2) @binding(0) var<uniform> customBrushParams : CustomBrushParams;\n@group(2) @binding(1) var customBrush : texture_2d<f32>;\n// @group(2) @binding(2) var brushSampler : sampler;\n\n// ----------- Global parameters -----------\n// 0: Stream power\n// 1: Stream power + Hillslope (Laplacian)\n// 2: Stream power + Hillslope (Laplacian) + Debris slope\nconst erosionMode : i32 = 2;\n\nconst uplift : f32 = 0.005;//0.01;\nconst k : f32 = 0.05;//0.0005;\nconst k_d : f32 = 10.0;\nconst k_h : f32 = 3.0;//2.0;\nconst p_sa : f32 = 1.0;//0.8;\nconst p_sl : f32 = 1.0;//2.0;\nconst dt : f32 = 2.0;//1.0;\n\n// next 8 neighboring cells\nconst neighbors : array<vec2i, 8> = array<vec2i, 8>(\n  vec2i(0, 1), vec2i(1, 1), \n  vec2i(1, 0), vec2i(1, -1), \n  vec2i(0, -1), vec2i(-1, -1), \n  vec2i(-1, 0), vec2i(-1, 1)\n);\n\n// ----------- Utilities -----------\nfn ToIndex1D(i : i32, j : i32) -> i32 { return i + simParams.nx * j; }\n\nfn ToIndex1DFromCoord(p : vec2i) -> i32 { return p.x + simParams.nx * p.y; }\n\nfn Height(p : vec2i) -> f32 {\n    let color = textureLoad(inElevation, vec2u(p), 0);\n    return color.r;\n}\n\nfn UpliftAt(p : vec2i) -> f32 {\n    var color = textureLoad(inUplift, vec2u(p), 0);\n\n    var pf = vec2f(p);\n    if (customBrushParams.brushPosX != -1 && customBrushParams.brushPosY != -1) {\n      if (customBrushParams.useCustomBrush == 1) {\n        color.r = DrawBrush(pf, color.r);\n      }\n      else {\n        color.r = DrawPaint(pf, color.r);\n      }\n    }\n\n    textureStore(outUplift, p, vec4f(vec3f(color.r), 1.f));\n    return color.r; // also greyscale?\n}\n\nfn StreamAt(p : vec2i) -> f32 {\n    let color = textureLoad(inStream, vec2u(p), 0);\n    return color.r; // also greyscale?\n}\n\nfn ArrayPoint(p : vec2i) -> vec2f {\n  let lowerVert = vec2f(simParams.lowerVertX, simParams.lowerVertY);\n  let cellDiag = vec2f(simParams.cellDiagX, simParams.cellDiagY);\n  return lowerVert + vec2f(p) * cellDiag;\n}\n\nfn Point3D(p : vec2i) -> vec3f {\n  return vec3f(ArrayPoint(p), Height(p));\n}\n\nfn Slope(p : vec2i, q : vec2i) -> f32 {\n  if (p.x < 0 || p.x >= simParams.nx || p.y < 0 || p.y >= simParams.ny) { return 0.0; }\n  if (q.x < 0 || q.x >= simParams.nx || q.y < 0 || q.y >= simParams.ny) { return 0.0; }\n  if (p.x == q.x && p.y == q.y) { return 0.0; }\n\n  var d = length(ArrayPoint(q) - ArrayPoint(p));\n  return (Height(q) - Height(p)) / d;\n}\n\nfn SetFlowSteepest(i: i32, idx: i32)\n{\n  steepestFlowBuffer[i] = idx;\n}\n\nfn GetFlowSteepest(p : vec2i, id: i32) -> vec2i {\n  var d = vec2();\n  var idx: i32;\n  var maxSlope = 0.0;\n  for (var i = 0; i < 8; i++) {\n      var ss = Slope(p + neighbors[i], p);\n      if (ss > maxSlope) {\n        maxSlope = ss;\n        d = neighbors[i];\n      }\n  }\n\n  SetFlowSteepest(id, idx);\n  return d;\n}\n\nfn GetFlowSteepestFast(i : i32) -> vec2i {\n  return neighbors[steepestFlowBuffer[i]];\n}\n\nfn Stream(p : vec2i) -> f32 {\n  if (p.x < 0 || p.x >= simParams.nx || p.y < 0 || p.y >= simParams.ny) { return 0.0; }\n  \n  return StreamAt(p);\n}\n\nfn WaterSteepest(p : vec2i, id: i32) -> f32 {\n  var water = 0.0;\n  for (var i = 0; i < 8; i++) {\n      var q = p + neighbors[i];\n      var fd = vec2i(0);\n      if (true)\n      {\n        fd = GetFlowSteepestFast(ToIndex1DFromCoord(q));\n      }\n      else\n      {\n        fd = GetFlowSteepest(q, id);\n      }\n      if ((q + fd).x == p.x && (q + fd).y == p.y) {\n        water += Stream(q);\n      }\n  }\n  return water;\n}\n\nfn Laplacian(p : vec2i) -> f32 {\n  var laplacian = 0.0;\n  var i : i32 = p.x;\n  var j : i32 = p.y;\n\n  var sqrCellDiagX = simParams.cellDiagX * simParams.cellDiagX;\n  var sqrCellDiagY = simParams.cellDiagY * simParams.cellDiagY;\n\n  if (i == 0) {\n    laplacian += (Height(p) - 2.0 * Height(vec2i(i+1, j)) + Height(vec2i(i+2, j))) / sqrCellDiagX;\n  }\n  else if (i == simParams.nx - 1) {\n    laplacian += (Height(p) - 2.0 * Height(vec2i(i-1, j)) + Height(vec2i(i-2, j))) / sqrCellDiagX;\n  }\n  else {\n    laplacian += (Height(vec2i(i+1, j)) - 2.0 * Height(vec2i(i, j)) + Height(vec2i(i-1, j))) / sqrCellDiagX;\n  }\n  \n  if (j == 0) {\n    laplacian += (Height(p) - 2.0 * Height(vec2i(i, j+1)) + Height(vec2i(i, j+2))) / sqrCellDiagY;\n  }\n  else if (j == simParams.ny - 1) {\n    laplacian += (Height(p) - 2.0 * Height(vec2i(i, j-1)) + Height(vec2i(i, j-2))) / sqrCellDiagY;\n  }\n  else {\n    laplacian += (Height(vec2i(i, j+1)) - 2.0 * Height(vec2i(i, j)) + Height(vec2i(i, j-1))) / sqrCellDiagY;\n  }\n\n  return laplacian;\n}\n\nfn Read(p : vec2i) -> vec4f {\n  if (p.x < 0 || p.x >= simParams.nx || p.y < 0 || p.y >= simParams.ny) {\n    return vec4f();\n  }\n\n  var ret = vec4f();\n  ret.x = Height(p);        // Bedrock elevation\n  ret.y = StreamAt(p);      // Stream area\n  ret.z = UpliftAt(p);      // Uplift factor\n  return ret;\n}\n\nfn Write(p : vec2i, data : vec4f) {\n  textureStore(outElevation, p, vec4f(data.x));\n  textureStore(outStream, p, vec4f(data.y));\n}\n\n// Local Editing\nfn DrawPaint(pf : vec2f, colorChannel : f32) -> f32 {\n  var PAINT_STRENGTH = customBrushParams.brushStrength;\n  var PAINT_RADIUS = customBrushParams.brushScale * 2.0; // scale up for now as brush texture is using this as mip level\n\n  var dist = distance(vec2f(customBrushParams.brushPosX, customBrushParams.brushPosY), pf);\n  if (dist <= PAINT_RADIUS) {\n    var factor = 1.0 - dist * dist / (PAINT_RADIUS * PAINT_RADIUS);\n    if (customBrushParams.erase == 1) {\n      return colorChannel - PAINT_STRENGTH * factor * factor * factor;\n    }\n    else {\n      return colorChannel + PAINT_STRENGTH * factor * factor * factor;\n    }\n  }\n\n  return colorChannel;\n}\n\nfn GetBrushAABB() -> AABB {\n  var center = vec2f(customBrushParams.brushPosX, customBrushParams.brushPosY);\n  var halfWidth = f32(textureDimensions(customBrush).x / 2);\n  var halfHeight = f32(textureDimensions(customBrush).y / 2);\n  var scale = 1 + customBrushParams.brushScale;\n\n  var lowerLeft = vec2f(center.x - halfWidth / scale, center.y - halfHeight / scale);\n  var upperRight = vec2f(center.x + halfWidth / scale, center.y + halfHeight / scale);\n  return AABB(lowerLeft, upperRight);\n}\n\nfn DrawBrush(pf : vec2f, colorChannel : f32) -> f32 {\n  var bb = GetBrushAABB();\n  var minX = bb.lowerLeft.x;\n  var minY = bb.lowerLeft.y;\n  var maxX = bb.upperRight.x;\n  var maxY = bb.upperRight.y;\n  var withinBB = minX < pf.x && pf.x < maxX &&\n                  minY < pf.y && pf.y < maxY;\n  if (withinBB) {\n    // var texCoordf = vec2f((pf.x - minX) / f32(textureDimensions(customBrush).x),\n    //                       (pf.y - minY) / f32(textureDimensions(customBrush).y));\n    var pixelIdx = vec2u(u32(pf.x - minX), u32(pf.y - minY));\n\n    var strength = customBrushParams.brushStrength * 0.1; // scale down strength for now, testing\n    if (customBrushParams.erase == 1) {\n      // use brushScale as mip level; use b channel from sampled value\n      return colorChannel - textureLoad(customBrush, pixelIdx, u32(customBrushParams.brushScale)).b * strength;\n      // color.g -= textureSampleLevel(customBrush, brushSampler, texCoordf, customBrushParams.brushScale).b / customBrushParams.brushStrength;\n    }\n    else {\n      return colorChannel + textureLoad(customBrush, pixelIdx, u32(customBrushParams.brushScale)).b * strength;\n      // color.g += textureSampleLevel(customBrush, brushSampler, texCoordf, customBrushParams.brushScale).b / customBrushParams.brushStrength;\n    }\n  }\n\n  return colorChannel;      \n}\n\n@compute @workgroup_size(8, 8, 1)\nfn main(\n  @builtin(workgroup_id) WorkGroupID : vec3<u32>,\n  @builtin(local_invocation_id) LocalInvocationID : vec3<u32>,\n  @builtin(global_invocation_id) GlobalInvocationID : vec3<u32>\n) {\n  let idX = i32(GlobalInvocationID.x);\n  let idY = i32(GlobalInvocationID.y);\n\n  var id : i32 = ToIndex1D(idX, idY);\n  var p : vec2i = vec2i(idX, idY);\n  var data : vec4f = Read(p);\n  var cellDiag = vec2f(simParams.cellDiagX, simParams.cellDiagY);\n\n  var newHeight = 0.0;\n  var borderNode: bool = false;\n  var d: vec2i;\n  // Border nodes are fixed to zero (elevation and drainage)\n  if (p.x == 0 || p.x == simParams.nx - 1 ||\n      p.y == 0 || p.y == simParams.ny - 1)\n  {\n    data.x = 0.0;\n    data.y = 1.0 * length(cellDiag);\n    Write(p, data);\n    borderNode = true;\n  }\n  else\n  {\n    // Erosion at p (relative to steepest)\n    d = GetFlowSteepest(p, id);\n  }\n\n  workgroupBarrier(); // workgroup barrier must happen in uniform control flow\n\n  if (idX < 0 || idY < 0) { return; }\n  if (idX >= simParams.nx || idY >= simParams.ny) { return; }\n\n  if (borderNode)\n  {\n    return;\n  }\n\n  // Flows accumulation at p\n  var waterIncr = WaterSteepest(p, id);\n\n  data.y = 1.0 * length(cellDiag);\n  data.y += waterIncr;\n\n  var receiver = Read(p + d);\n  var pSlope = abs(Slope(p + d, p));\n\n  var erosion = k * pow(data.y, p_sa) * pow(pSlope, p_sl);\n\n  newHeight = data.x;\n  if (erosionMode == 0) {           // Stream power\n    newHeight -= dt * (erosion);\n  }\n  else if (erosionMode == 1) {      // Stream power + Hillslope erosion (Laplacian)\n    newHeight -= dt * (erosion - k_h * Laplacian(p));\n  }\n  else if (erosionMode == 2) {      // Stream power + Hillslope erosion (Laplacian) + Debris flow\n    newHeight -= dt * (erosion - k_h * Laplacian(p) - k_d * pSlope);\n  }\n\n  newHeight = max(newHeight, receiver.x);\n  newHeight += dt * uplift * data.z;\n\n  data.x = newHeight;\n  Write(p, data);\n}"}),entryPoint:"main"}}),K=g.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),Z=g.createBindGroup({label:"simulation constants",layout:W.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:K}}]}),Q=g.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),J={label:"brush bind group descriptor",layout:W.getBindGroupLayout(2),entries:[{binding:0,resource:{buffer:Q}},{binding:1,resource:r.createView()}]},$=g.createBindGroup(J),ee=new b;requestAnimationFrame(function frame(){if(!c.active)return;D?function(){let e,t,n,r,i=N.resolution[0]/window.devicePixelRatio,a=N.resolution[1]/window.devicePixelRatio,o=function(e,t,n,r,i){let a=141.3716694115407/180,o=s.R3.mulScalar(e.up,Math.tan(.5*a)),u=s.R3.mulScalar(e.right,Math.tan(.5*a)*(t/n)),c=s.R3.add(s.R3.add(e.getPosition(),e.forward),s.R3.mulScalar(u,2*r/t-1));s.R3.add(c,s.R3.mulScalar(o,2*i/n-1),c);let l=s.R3.sub(c,e.getPosition());return s.R3.normalize(l)}(N,i,a,V,M),u=s.R3.create(N.getPosition()[0],N.getPosition()[1],N.getPosition()[2]),[c,l]=(e=s.vh.create(0,1,0,0),t=s.vh.create(0,0,0,0),n=s.R3.dot(e,s.R3.sub(t,u))/s.R3.dot(e,o),r=s.R3.add(u,s.R3.mulScalar(o,n)),n<0||r[0]<ee.lowerVertX||r[0]>ee.upperVertX||r[2]<ee.lowerVertY||r[2]>ee.upperVertY?[!1,null]:[!0,r]),f=-1,h=-1;if(c){let e=s.R3.sub(s.R3.create(l[0],l[1],l[2]),s.R3.create(ee.lowerVertX,0,ee.lowerVertY)),t=s.R3.sub(s.R3.create(ee.upperVertX,0,ee.upperVertY),s.R3.create(ee.lowerVertX,0,ee.lowerVertY)),n=s.R3.div(e,t);f=Math.floor(n[0]*I[A].width),h=Math.floor(n[2]*I[A].height)}G[0]=f,G[1]=h}():(N.update(),G[0]=-1,G[1]=-1),f.begin();let e=g.createCommandEncoder();if(p>-1){if(0==p||1==p){let r,s;if(I[0]&&I[1]&&(I[0].destroy(),I[1].destroy(),C[0].destroy(),C[1].destroy(),U[0].destroy(),U[1].destroy(),i.destroy()),E)r=createTextureFromImage(g,L,!1,!0);else{let e=0;S.forEach(function(t,n){t.label=="hf_".concat(h.heightfield)&&(e=n)}),r=S[e],L&&L.close()}{let e=0;_.forEach(function(t,n){t.label=="uplift_".concat(h.uplift)&&(e=n)}),s=_[e]}var t=r.width,n=r.height;I=[0,1].map(e=>createTextureOfSize(g,t,n,!1,"hf_".concat(h.heightfield,"_").concat(e))),C=[0,1].map(e=>createTextureOfSize(g,s.width,s.height,!1,"uplift_".concat(h.uplift,"_").concat(e))),U=[0,1].map(()=>createTextureOfSize(g,t,n,!1));var u=new Float32Array(t*n*4);u.fill(0),g.queue.writeTexture({texture:U[A]},u,{offset:0,bytesPerRow:16*t,rowsPerImage:n},{width:t,height:n}),i=g.createBuffer({size:t*n*4,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE}),(u=new Float32Array(t*n)).fill(0),g.queue.writeBuffer(i,0,u.buffer),o.bindGroupCreated=!1,a.bindGroupCreated=!1,e.copyTextureToTexture({texture:r},{texture:I[A]},{width:r.width,height:r.height}),e.copyTextureToTexture({texture:s},{texture:C[A]},{width:s.width,height:s.height})}2==p&&(J.entries[1].resource=r.createView(),$=g.createBindGroup(J)),p=-1}o.createTerrainBindGroup(H,j,0,q,I[A],z),a.createBindGroup(O,j,256,q,I[A]);{let t={label:"compute bind group descriptor curr",layout:W.getBindGroupLayout(1),entries:[{binding:1,resource:I[A].createView()},{binding:2,resource:I[(A+1)%2].createView()},{binding:3,resource:C[A].createView()},{binding:4,resource:C[(A+1)%2].createView()},{binding:5,resource:U[A].createView()},{binding:6,resource:U[(A+1)%2].createView()},{binding:7,resource:{buffer:i}}]},n=g.createBindGroup(t),a=e.beginComputePass();a.setPipeline(W),g.queue.writeBuffer(K,0,new Float32Array([I[A].width,I[A].height,ee.lowerVertX,ee.lowerVertY,ee.upperVertX,ee.upperVertY,ee.cellDiagX,ee.cellDiagY]));let o=0,s=0;h.eraseTerrain&&(o=1),h.useCustomBrush&&(s=1),g.queue.writeBuffer(Q,0,new Float32Array([G[0],G[1],s?10-h.brushScale:h.brushScale,h.brushStrength,r.height,r.width,o,s])),a.setBindGroup(0,Z),a.setBindGroup(1,n),a.setBindGroup(2,$),a.dispatchWorkgroups(Math.ceil(Math.max(I[A].width,I[A].height)/8)+1,Math.ceil(Math.max(I[A].width,I[A].height)/8)+1),a.end(),A=(A+1)%2}{let t=e.beginRenderPass({colorAttachments:[{view:w.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]});t.setPipeline(H),writeMVPUniformBuffer(g,j,0,o.getModelMatrix(),N,!0),function(e,t,n){e.queue.writeBuffer(t,0,new Float32Array([I[A].width,I[A].height,n.lowerVertX,n.lowerVertY,n.upperVertX,n.upperVertY]))}(g,z,ee),t.setBindGroup(0,o.bindGroup),t.setIndexBuffer(o.indexBuffer,"uint32"),t.setVertexBuffer(0,o.posBuffer),t.setVertexBuffer(1,o.normalBuffer),t.setVertexBuffer(2,o.uvBuffer),t.drawIndexed(o.count),t.end()}{let t=e.beginRenderPass({colorAttachments:[{view:w.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"load",storeOp:"store"}]});t.setPipeline(O),writeMVPUniformBuffer(g,j,256,a.getModelMatrix(),N,!0),t.setBindGroup(0,a.bindGroup),t.setIndexBuffer(a.indexBuffer,"uint32"),t.setVertexBuffer(0,a.posBuffer),t.setVertexBuffer(1,a.normalBuffer),t.setVertexBuffer(2,a.uvBuffer),t.drawIndexed(a.count),t.end()}g.queue.submit([e.finish()]),requestAnimationFrame(frame),f.end()})};var pages=()=>makeSample({name:"Terrain X",description:"Interactive terrain authoring and erosion simulation on WebGPU",gui:!0,stats:!0,init,filename:"src/sample/terrainX/main.ts"})},4131:function(e){e.exports={canvasContainer:"SampleLayout_canvasContainer__ZTWP5"}}},function(e){e.O(0,[746,150,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);