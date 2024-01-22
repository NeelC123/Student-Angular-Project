import './polyfills.server.mjs';
import{$ as X,A as he,B as fe,C as c,D as m,E as P,L as pe,M as Z,O as ge,P as me,Q as ye,R as ve,U as _e,Y as Ce,a as oe,b as se,c as ae,d as N,e as O,f as $,g as h,h as V,i as le,j as A,k as x,l as f,m as p,n as ue,o as de,p as W,q,r as y,s as a,t as ce,u as E,v,w as _,x as z,y as u,z as d}from"./chunk-V76V2EYO.mjs";import{a as g,b as C}from"./chunk-VVCT4QZE.mjs";var Ve=(()=>{let e=class e{constructor(i){this.http=i,this.registrationUrl="https://7e5f-183-82-102-74.ngrok-free.app/savestudent"}createStudent(i){return this.http.post(`${this.registrationUrl}`,i)}};e.\u0275fac=function(r){return new(r||e)(le(ge))},e.\u0275prov=$({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Ie=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(a(q),a(W))},e.\u0275dir=p({type:e});let t=e;return t})(),Je=(()=>{let e=class e extends Ie{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=de(e)))(o||e)}})(),e.\u0275dir=p({type:e,features:[v]});let t=e;return t})(),Se=new V("NgValueAccessor");var Qe={provide:Se,useExisting:O(()=>B),multi:!0};function et(){let t=Z()?Z().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var tt=new V("CompositionEventMode"),B=(()=>{let e=class e extends Ie{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!et())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(a(q),a(W),a(tt,8))},e.\u0275dir=p({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&c("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},features:[P([Qe]),v]});let t=e;return t})();var Ne=new V("NgValidators"),Oe=new V("NgAsyncValidators");function xe(t){return t!=null}function Pe(t){return fe(t)?oe(t):t}function ke(t){let e={};return t.forEach(n=>{e=n!=null?g(g({},e),n):e}),Object.keys(e).length===0?null:e}function je(t,e){return e.map(n=>n(t))}function it(t){return!t.validate}function Te(t){return t.map(e=>it(e)?e:n=>e.validate(n))}function nt(t){if(!t)return null;let e=t.filter(xe);return e.length==0?null:function(n){return ke(je(n,e))}}function K(t){return t!=null?nt(Te(t)):null}function rt(t){if(!t)return null;let e=t.filter(xe);return e.length==0?null:function(n){let i=je(n,e).map(Pe);return ae(i).pipe(se(ke))}}function J(t){return t!=null?rt(Te(t)):null}function De(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function ot(t){return t._rawValidators}function st(t){return t._rawAsyncValidators}function Y(t){return t?Array.isArray(t)?t:[t]:[]}function j(t,e){return Array.isArray(t)?t.includes(e):t===e}function be(t,e){let n=Y(e);return Y(t).forEach(r=>{j(n,r)||n.push(r)}),n}function Me(t,e){return Y(e).filter(n=>!j(t,n))}var T=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=K(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=J(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},M=class extends T{get formDirective(){return null}get path(){return null}},S=class extends T{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},G=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},at={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Yt=C(g({},at),{"[class.ng-submitted]":"isSubmitted"}),Ge=(()=>{let e=class e extends G{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(S,2))},e.\u0275dir=p({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&z("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[v]});let t=e;return t})(),Re=(()=>{let e=class e extends G{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(M,10))},e.\u0275dir=p({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&z("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[v]});let t=e;return t})();var F="VALID",k="INVALID",b="PENDING",w="DISABLED";function Ue(t){return(H(t)?t.validators:t)||null}function lt(t){return Array.isArray(t)?K(t):t||null}function Be(t,e){return(H(e)?e.asyncValidators:t)||null}function ut(t){return Array.isArray(t)?J(t):t||null}function H(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function dt(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new N(1e3,"");if(!i[n])throw new N(1001,"")}function ct(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new N(1002,"")})}var R=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===F}get invalid(){return this.status===k}get pending(){return this.status==b}get disabled(){return this.status===w}get enabled(){return this.status!==w}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(be(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(be(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Me(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Me(e,this._rawAsyncValidators))}hasValidator(e){return j(this._rawValidators,e)}hasAsyncValidator(e){return j(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=b,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=w,this.errors=null,this._forEachChild(i=>{i.disable(C(g({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(C(g({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=F,this._forEachChild(i=>{i.enable(C(g({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(C(g({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===F||this.status===b)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?w:F}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=b,this._hasOwnPendingAsyncValidator=!0;let n=Pe(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new E,this.statusChanges=new E}_calculateStatus(){return this._allControlsDisabled()?w:this.errors?k:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(b)?b:this._anyControlsHaveStatus(k)?k:F}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){H(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=lt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=ut(this._rawAsyncValidators)}},U=class extends R{constructor(e,n,i){super(Ue(n),Be(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){ct(this,!0,e),Object.keys(e).forEach(i=>{dt(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var Q=new V("CallSetDisabledState",{providedIn:"root",factory:()=>ee}),ee="always";function ht(t,e){return[...e.path,t]}function He(t,e,n=ee){Le(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),pt(t,e),mt(t,e),gt(t,e),ft(t,e)}function Ae(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function ft(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function Le(t,e){let n=ot(t);e.validator!==null?t.setValidators(De(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=st(t);e.asyncValidator!==null?t.setAsyncValidators(De(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Ae(e._rawValidators,r),Ae(e._rawAsyncValidators,r)}function pt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&$e(t,e)})}function gt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&$e(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function $e(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function mt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function yt(t,e){t==null,Le(t,e)}function vt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function _t(t){return Object.getPrototypeOf(t.constructor)===Je}function Ct(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Vt(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===B?n=o:_t(o)?i=o:r=o}),r||i||n||null}var Dt={provide:M,useExisting:O(()=>te)},I=Promise.resolve(),te=(()=>{let e=class e extends M{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._directives=new Set,this.ngSubmit=new E,this.form=new U({},K(i),J(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(i){I.then(()=>{let r=this._findContainer(i.path);i.control=r.registerControl(i.name,i.control),He(i.control,i,this.callSetDisabledState),i.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(i)})}getControl(i){return this.form.get(i.path)}removeControl(i){I.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name),this._directives.delete(i)})}addFormGroup(i){I.then(()=>{let r=this._findContainer(i.path),o=new U({});yt(o,i),r.registerControl(i.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(i){I.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name)})}getFormGroup(i){return this.form.get(i.path)}updateModel(i,r){I.then(()=>{this.form.get(i.path).setValue(r)})}setValue(i){this.control.setValue(i)}onSubmit(i){return this.submitted=!0,Ct(this.form,this._directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(i){return i.pop(),i.length?this.form.get(i):this.form}};e.\u0275fac=function(r){return new(r||e)(a(Ne,10),a(Oe,10),a(Q,8))},e.\u0275dir=p({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,o){r&1&&c("submit",function(s){return o.onSubmit(s)})("reset",function(){return o.onReset()})},inputs:{options:[A.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[P([Dt]),v]});let t=e;return t})();function Ee(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Fe(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var bt=class extends R{constructor(e=null,n,i){super(Ue(n),Be(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),H(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Fe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ee(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ee(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Fe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Mt={provide:S,useExisting:O(()=>ie)},we=Promise.resolve(),ie=(()=>{let e=class e extends S{constructor(i,r,o,l,s,Ye){super(),this._changeDetectorRef=s,this.callSetDisabledState=Ye,this.control=new bt,this._registered=!1,this.name="",this.update=new E,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=Vt(this,l)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),vt(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){He(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){we.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&pe(r);we.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?ht(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(a(M,9),a(Ne,10),a(Oe,10),a(Se,10),a(ce,8),a(Q,8))},e.\u0275dir=p({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[A.None,"disabled","isDisabled"],model:[A.None,"ngModel","model"],options:[A.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[P([Mt]),v,ue]});let t=e;return t})(),We=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=p({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var At=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({});let t=e;return t})();var Et=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({imports:[At]});let t=e;return t})();var qe=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:Q,useValue:i.callSetDisabledState??ee}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({imports:[Et]});let t=e;return t})();var ne=class{constructor(){this.name="",this.email="",this.mobile=""}},re=class{constructor(){this.firstName="",this.lastName="",this.emailId="",this.gaurdian=new ne}},ze=(()=>{let e=class e{constructor(i){this.studentService=i,this.student=new re}onSubmit(){this.studentService.createStudent(this.student).subscribe(i=>{console.log(i)},i=>{console.log(i)})}};e.\u0275fac=function(r){return new(r||e)(a(Ve))},e.\u0275cmp=x({type:e,selectors:[["app-registration"]],decls:28,vars:6,consts:[[1,"container","mt-5"],[1,"form-group"],["for","firstName"],["type","text","id","firstName","name","firstName",1,"form-control",3,"ngModel","ngModelChange"],["for","lastName"],["type","text","id","lastName","name","lastName",1,"form-control",3,"ngModel","ngModelChange"],["for","emailId"],["type","email","id","emailId","name","emailId",1,"form-control",3,"ngModel","ngModelChange"],["for","guardianName"],["type","text","id","guardianName","name","guardianName",1,"form-control",3,"ngModel","ngModelChange"],["for","guardianEmail"],["type","email","id","guardianEmail","name","guardianEmail",1,"form-control",3,"ngModel","ngModelChange"],["for","guardianMobile"],["type","tel","id","guardianMobile","name","guardianMobile",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary",3,"click"]],template:function(r,o){r&1&&(u(0,"div",0)(1,"form")(2,"div",1)(3,"label",2),m(4,"First Name"),d(),u(5,"input",3),c("ngModelChange",function(s){return o.student.firstName=s}),d()(),u(6,"div",1)(7,"label",4),m(8,"Last Name"),d(),u(9,"input",5),c("ngModelChange",function(s){return o.student.lastName=s}),d()(),u(10,"div",1)(11,"label",6),m(12,"Email ID"),d(),u(13,"input",7),c("ngModelChange",function(s){return o.student.emailId=s}),d()(),u(14,"div",1)(15,"label",8),m(16,"Guardian Name"),d(),u(17,"input",9),c("ngModelChange",function(s){return o.student.gaurdian.name=s}),d()(),u(18,"div",1)(19,"label",10),m(20,"Guardian Email"),d(),u(21,"input",11),c("ngModelChange",function(s){return o.student.gaurdian.email=s}),d()(),u(22,"div",1)(23,"label",12),m(24,"Guardian Mobile"),d(),u(25,"input",13),c("ngModelChange",function(s){return o.student.gaurdian.mobile=s}),d()(),u(26,"button",14),c("click",function(){return o.onSubmit()}),m(27,"Submit"),d()()()),r&2&&(y(5),_("ngModel",o.student.firstName),y(4),_("ngModel",o.student.lastName),y(4),_("ngModel",o.student.emailId),y(4),_("ngModel",o.student.gaurdian.name),y(4),_("ngModel",o.student.gaurdian.email),y(4),_("ngModel",o.student.gaurdian.mobile))},dependencies:[We,B,Ge,Re,ie,te]});let t=e;return t})();var wt=[{path:"",component:ze}],Ze=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({imports:[X.forRoot(wt),X]});let t=e;return t})();var L=(()=>{let e=class e{constructor(){this.title="Student"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=x({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(r,o){r&1&&he(0,"router-outlet")},dependencies:[Ce]});let t=e;return t})();var Xe=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e,bootstrap:[L]}),e.\u0275inj=h({providers:[ve()],imports:[ye,Ze,qe,me]});let t=e;return t})();var It=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e,bootstrap:[L]}),e.\u0275inj=h({imports:[Xe,_e]});let t=e;return t})();export{It as a};