"use strict";(self.webpackChunkparticle_demo=self.webpackChunkparticle_demo||[]).push([[405],{4405:(t,e,o)=>{function r(t,e){if(!{}.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}o.r(e),o.d(e,{ParticleMoveScript:()=>p});var n=0;function i(t){return"__private_"+n+++"_"+t}var s=o(5965),a=i("particle");class p extends s.ScriptComponent{constructor(){super(...arguments),Object.defineProperty(this,a,{writable:!0,value:void 0})}ready(){r(this,a)[a]=this.getComponent(s.ComponentType.Particle)}step(t){this.transform.moveTo(this.mainCamera.screenToWorldSpace(s.Input.mousePosition)),s.Input.getButtonDown(s.MouseButtonCode.Left)&&(r(this,a)[a].playing?r(this,a)[a].stop():r(this,a)[a].play())}}}}]);
//# sourceMappingURL=405.de19cb11.chunk.js.map