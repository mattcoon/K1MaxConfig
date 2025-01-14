import{S as o}from"./Viewer-8a8ed1d4.js";import"./helperFunctions-e76223cf.js";import"./index-f28d7425.js";import"./vuetify-f4a6879d.js";import"./overlayscrollbars-44d87bcf.js";import"./echarts-ff51454d.js";import"./codemirror-0a1db0c7.js";const e="glowMapGenerationPixelShader",i="#if defined(DIFFUSE_ISLINEAR) || defined(EMISSIVE_ISLINEAR)\n#include<helperFunctions>\n#endif\n#ifdef DIFFUSE\nvarying vec2 vUVDiffuse;uniform sampler2D diffuseSampler;\n#endif\n#ifdef OPACITY\nvarying vec2 vUVOpacity;uniform sampler2D opacitySampler;uniform float opacityIntensity;\n#endif\n#ifdef EMISSIVE\nvarying vec2 vUVEmissive;uniform sampler2D emissiveSampler;\n#endif\n#ifdef VERTEXALPHA\nvarying vec4 vColor;\n#endif\nuniform vec4 glowColor;uniform float glowIntensity;\n#include<clipPlaneFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void)\n{\n#include<clipPlaneFragment>\nvec4 finalColor=glowColor;\n#ifdef DIFFUSE\nvec4 albedoTexture=texture2D(diffuseSampler,vUVDiffuse);\n#ifdef DIFFUSE_ISLINEAR\nalbedoTexture=toGammaSpace(albedoTexture);\n#endif\n#ifdef GLOW\nfinalColor.a*=albedoTexture.a;\n#endif\n#ifdef HIGHLIGHT\nfinalColor.a=albedoTexture.a;\n#endif\n#endif\n#ifdef OPACITY\nvec4 opacityMap=texture2D(opacitySampler,vUVOpacity);\n#ifdef OPACITYRGB\nfinalColor.a*=getLuminance(opacityMap.rgb);\n#else\nfinalColor.a*=opacityMap.a;\n#endif\nfinalColor.a*=opacityIntensity;\n#endif\n#ifdef VERTEXALPHA\nfinalColor.a*=vColor.a;\n#endif\n#ifdef ALPHATEST\nif (finalColor.a<ALPHATESTVALUE)\ndiscard;\n#endif\n#ifdef EMISSIVE\nvec4 emissive=texture2D(emissiveSampler,vUVEmissive);\n#ifdef EMISSIVE_ISLINEAR\nemissive=toGammaSpace(emissive);\n#endif\ngl_FragColor=emissive*finalColor*glowIntensity;\n#else\ngl_FragColor=finalColor*glowIntensity;\n#endif\n#ifdef HIGHLIGHT\ngl_FragColor.a=glowColor.a;\n#endif\n}";o.ShadersStore[e]=i;const m={name:e,shader:i};export{m as glowMapGenerationPixelShader};