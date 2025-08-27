
function CreateSGWorld(){
    return new ISGWorld81();
}

var get_Item_Handler = {
    get: function (target, name) {
        if (name in target) {
            return target[name];
        }
        return target.Item(Number(name));

    }
};

class TEIUnknownHandle81{
    constructor(nativeInstanceHandle){
        this._NativeInstanceHandle = nativeInstanceHandle;
        if (TEIUnknownHandle81.finalizationRegistry === undefined) {
            TEIUnknownHandle81.finalizationRegistry = new FinalizationRegistry((nativeInstanceHandle) => {
                _NativeRelease81(nativeInstanceHandle);
            });
        }
        TEIUnknownHandle81.finalizationRegistry.register(this, nativeInstanceHandle);
    }
    get getInstanceHandle(){
        return this._NativeInstanceHandle;
    }
    ApiError(err) {        
        throw err;
    }
};

function EmvalToJS(em_val){
	if(em_val instanceof Array){
		var array = new Array;
		for(let i=0;i<em_val.length;i++){
			array.push(EmvalToJS(em_val[i]));
		}
		return array;
	}
	else
	if(typeof  em_val=="object"){        
        if ("getInstanceHandle" in em_val) {
            switch (UTF8ToString(_NativeInstanceToStringIID81(em_val.getInstanceHandle))){
                case "IID_IDateTime81":
                    return new IDateTime81(em_val.getInstanceHandle);
                case "IID_IPosition81":
                    return new IPosition81(em_val.getInstanceHandle);

                default:
                    return GetJSObjectFromHandle(em_val.getInstanceHandle)                
            }                    
        }
    };
    return em_val;
}

class ISGWorld81 extends TEIUnknownHandle81 {
                constructor() {
                    super(_CreateISGWorld());
                }
    AttachEvent(eventName,eventFunc){                                
        try{
        switch(eventName){
            case  "OnLoadFinished":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnLoadFinished"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(Boolean(V0));
                                                }, 'vii'));
                break;
            case  "OnFileClosing":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnFileClosing"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc();
                                                }, 'vi'));
                break;
            case  "OnFrame":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnFrame"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc();
                                                }, 'vi'));
                break;
            case  "OnSGWorldMessage":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnSGWorldMessage"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(UTF8ToString(V0),UTF8ToString(V1));
                                                }, 'iiii'));
                break;
            case  "OnObjectAction":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnObjectAction"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(UTF8ToString(V0),GetJSObjectFromHandle(V1));
                                                }, 'viii'));
                break;
            case  "OnFileSave":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnFileSave"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc();
                                                }, 'vi'));
                break;
            case  "OnRenderQualityChanged":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnRenderQualityChanged"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(V0);
                                                }, 'vii'));
                break;
            case  "OnInputModeChanged":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnInputModeChanged"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(V0);
                                                }, 'vii'));
                break;
            case  "OnLButtonDown":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnLButtonDown"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1,V2) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0,V1,V2);
                                                }, 'iiiii'));
                break;
            case  "OnLButtonUp":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnLButtonUp"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1,V2) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0,V1,V2);
                                                }, 'iiiii'));
                break;
            case  "OnMButtonDown":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnMButtonDown"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1,V2) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0,V1,V2);
                                                }, 'iiiii'));
                break;
            case  "OnMButtonUp":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnMButtonUp"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1,V2) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0,V1,V2);
                                                }, 'iiiii'));
                break;
            case  "OnRButtonDown":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnRButtonDown"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1,V2) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0,V1,V2);
                                                }, 'iiiii'));
                break;
            case  "OnRButtonUp":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnRButtonUp"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1,V2) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0,V1,V2);
                                                }, 'iiiii'));
                break;
            case  "OnMouseWheel":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnMouseWheel"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1,V2,V3) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0,V1,V2,V3);
                                                }, 'iiiiii'));
                break;
            case  "OnProjectTreeAction":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnProjectTreeAction"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(UTF8ToString(V0),GetJSObjectFromHandle(V1));
                                                }, 'viii'));
                break;
            case  "OnSGWorld":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnSGWorld"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(V0,Emval.toValue(V1));
                                                }, 'viii'));
                break;
            case  "OnDrawHUD":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnDrawHUD"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc();
                                                }, 'vi'));
                break;
            case  "OnLButtonDblClk":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnLButtonDblClk"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1,V2) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0,V1,V2);
                                                }, 'iiiii'));
                break;
            case  "OnRButtonDblClk":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnRButtonDblClk"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1,V2) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0,V1,V2);
                                                }, 'iiiii'));
                break;
            case  "OnMButtonDblClk":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnMButtonDblClk"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1,V2) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0,V1,V2);
                                                }, 'iiiii'));
                break;
            case  "OnCreateBasicKit":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnCreateBasicKit"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(UTF8ToString(V0),UTF8ToString(V1));
                                                }, 'viii'));
                break;
            case  "OnLayerStreaming":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnLayerStreaming"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(UTF8ToString(V0),Boolean(V1));
                                                }, 'viii'));
                break;
            case  "OnDateTimeChanged":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnDateTimeChanged"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(Emval.toValue(V0));
                                                }, 'vii'));
                break;
            case  "OnContainerChanged":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnContainerChanged"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(V0,GetJSObjectFromHandle(V1));
                                                }, 'viii'));
                break;
            case  "OnCommandValueChanged":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnCommandValueChanged"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(V0,Emval.toValue(V1));
                                                }, 'viii'));
                break;
            case  "OnFileClosed":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnFileClosed"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc();
                                                }, 'vi'));
                break;
            case  "OnPresentationStatusChanged":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnPresentationStatusChanged"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(UTF8ToString(V0),V1);
                                                }, 'viii'));
                break;
            case  "OnAnalysisProgress":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnAnalysisProgress"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0,V1);
                                                }, 'iiii'));
                break;
            case  "OnAnalysisDistancePointAdded":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnAnalysisDistancePointAdded"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1,V2,V3,V4) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(GetJSObjectFromHandle(V0),V1,V2,V3,V4);
                                                }, 'viidddd'));
                break;
            case  "OnLButtonClicked":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnLButtonClicked"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1,V2) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0,V1,V2);
                                                }, 'iiiii'));
                break;
            case  "OnDataSourceFeatureIdChanged":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnDataSourceFeatureIdChanged"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1,V2) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(UTF8ToString(V0),UTF8ToString(V1),UTF8ToString(V2));
                                                }, 'viiii'));
                break;
            case  "OnKeyboard":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnKeyboard"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1,V2) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0,V1,V2);
                                                }, 'iiiii'));
                break;
            case  "OnImportFeatureLayerProgress":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnImportFeatureLayerProgress"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0,V1);
                                                }, 'iiii'));
                break;
            case  "OnNetworkLinkLoadFailed":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnNetworkLinkLoadFailed"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(UTF8ToString(V0),UTF8ToString(V1));
                                                }, 'viii'));
                break;
            case  "OnMeasurementDistanceResult":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnMeasurementDistanceResult"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(UTF8ToString(V0));
                                                }, 'iii'));
                break;
            case  "OnMeasurementAreaResult":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnMeasurementAreaResult"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(UTF8ToString(V0));
                                                }, 'iii'));
                break;
            case  "OnEndDrawMeasurement":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnEndDrawMeasurement"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(GetJSObjectFromHandle(V0));
                                                }, 'vii'));
                break;
            case  "OnDrawingGeometryChanged":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnDrawingGeometryChanged"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(GetJSObjectFromHandle(V0),Boolean(V1));
                                                }, 'viii'));
                break;
            case  "OnDrawingFinished":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnDrawingFinished"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(GetJSObjectFromHandle(V0));
                                                }, 'vii'));
                break;
            case  "OnDrawingAbort":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnDrawingAbort"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc();
                                                }, 'vi'));
                break;
            case  "OnObjectSelected":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnObjectSelected"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(UTF8ToString(V0));
                                                }, 'vii'));
                break;
            case  "OnObjectUnselected":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnObjectUnselected"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(UTF8ToString(V0));
                                                }, 'vii'));
                break;
            case  "OnFeatureLayerSaved":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnFeatureLayerSaved"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(UTF8ToString(V0));
                                                }, 'vii'));
                break;
            case  "OnFeatureLayerChanged":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnFeatureLayerChanged"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(UTF8ToString(V0));
                                                }, 'vii'));
                break;
            case  "OnObjectUnderCursorChanged":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnObjectUnderCursorChanged"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(Boolean(V0),UTF8ToString(V1));
                                                }, 'viii'));
                break;
            case  "OnCommandExecuted":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnCommandExecuted"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0,Emval.toValue(V1));
                                                }, 'iiii'));
                break;
            case  "OnPublishProgress":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnPublishProgress"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0);
                                                }, 'iid'));
                break;
            case  "OnPublishFinished":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnPublishFinished"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(UTF8ToString(V0));
                                                }, 'iii'));
                break;
            case  "OnPublishAborted":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnPublishAborted"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc();
                                                }, 'vi'));
                break;
            case  "OnMeasurementQueryResult":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnMeasurementQueryResult"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(UTF8ToString(V0),UTF8ToString(V1));
                                                }, 'iiii'));
                break;
            case  "OnPresentationEvent":
                    _NativeISGWorld81_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnPresentationEvent"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(UTF8ToString(V0));
                                                }, 'iii'));
                break;
            default:
                throw "Event name: '" + eventName + "' doesn't exist.";
        }

        }
        catch(err){
            this.ApiError(err);
        }
     }
    get Project(){
        try{
            return ((nativeHandle) => nativeHandle ? new IProject81(nativeHandle) : null)(_NativeISGWorld81_get_Project(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Navigate(){
        try{
            return ((nativeHandle) => nativeHandle ? new INavigate81(nativeHandle) : null)(_NativeISGWorld81_get_Navigate(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Creator(){
        try{
            return ((nativeHandle) => nativeHandle ? new ICreator81(nativeHandle) : null)(_NativeISGWorld81_get_Creator(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Drawing(){
        try{
            return ((nativeHandle) => nativeHandle ? new IDrawing81(nativeHandle) : null)(_NativeISGWorld81_get_Drawing(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ProjectTree(){
        try{
            return ((nativeHandle) => nativeHandle ? new IProjectTree81(nativeHandle) : null)(_NativeISGWorld81_get_ProjectTree(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Window(){
        try{
            return ((nativeHandle) => nativeHandle ? new IWindow81(nativeHandle) : null)(_NativeISGWorld81_get_Window(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Terrain(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrain81(nativeHandle) : null)(_NativeISGWorld81_get_Terrain(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get LicenseManager(){
        try{
            return ((nativeHandle) => nativeHandle ? new ILicenseManager81(nativeHandle) : null)(_NativeISGWorld81_get_LicenseManager(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get CoordServices(){
        try{
            return ((nativeHandle) => nativeHandle ? new ICoordServices81(nativeHandle) : null)(_NativeISGWorld81_get_CoordServices(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get DateTime(){
        try{
            return ((nativeHandle) => nativeHandle ? new IDateTime81(nativeHandle) : null)(_NativeISGWorld81_get_DateTime(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Version(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITEVersionInfo81(nativeHandle) : null)(_NativeISGWorld81_get_Version(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Application(){
        try{
            return ((nativeHandle) => nativeHandle ? new IApplication81(nativeHandle) : null)(_NativeISGWorld81_get_Application(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Command(){
        try{
            return ((nativeHandle) => nativeHandle ? new ICommand81(nativeHandle) : null)(_NativeISGWorld81_get_Command(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Analysis(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAnalysis81(nativeHandle) : null)(_NativeISGWorld81_get_Analysis(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get SGServer(){
        try{
            return ((nativeHandle) => nativeHandle ? new ISGServer81(nativeHandle) : null)(_NativeISGWorld81_get_SGServer(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get IgnoreAccelerators(){
        try{
            return _NativeISGWorld81_get_IgnoreAccelerators(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set IgnoreAccelerators(/*Boolean*/pVal){
            try{
                _NativeISGWorld81_put_IgnoreAccelerators(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get clsid(){
        try{
            return UTF8ToString(_NativeISGWorld81_get_clsid(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    CreateInstance(/*String*/clsid) {
        try{
            return EmvalToJS(Emval.toValue(_NativeISGWorld81_CreateInstance(this.getInstanceHandle,/*String*/allocateUTF8(String(clsid)))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DetachEvent(/*String*/bstrEventName, /*Object*/dispFunc) {
        try{
            _NativeISGWorld81_DetachEvent(this.getInstanceHandle,/*String*/allocateUTF8(String(bstrEventName)),/*Object*/Emval.toHandle(dispFunc));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetOptionParam(/*String*/paramName) {
        try{
            return EmvalToJS(Emval.toValue(_NativeISGWorld81_GetOptionParam(this.getInstanceHandle,/*String*/allocateUTF8(String(paramName)))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetParam(/*Int32*/Code) {
        try{
            return EmvalToJS(Emval.toValue(_NativeISGWorld81_GetParam(this.getInstanceHandle,/*Int32*/Code)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Open(/*String*/ProjectURL) {
        try{
            _NativeISGWorld81_Open(this.getInstanceHandle,/*String*/allocateUTF8(String(ProjectURL)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetOptionParam(/*String*/paramName, /*Object*/paramVal, /*Boolean*/bSave=false) {
        try{
            _NativeISGWorld81_SetOptionParam(this.getInstanceHandle,/*String*/allocateUTF8(String(paramName)),/*Object*/Emval.toHandle(paramVal),/*Boolean*/bSave);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetParam(/*Int32*/Code, /*Object*/Param) {
        try{
            _NativeISGWorld81_SetParam(this.getInstanceHandle,/*Int32*/Code,/*Object*/Emval.toHandle(Param));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetParamEx(/*Int32*/Code, /*Object*/Param1=0, /*Object*/Param2=0) {
        try{
            return EmvalToJS(Emval.toValue(_NativeISGWorld81_SetParamEx(this.getInstanceHandle,/*Int32*/Code,/*Object*/Emval.toHandle(Param1),/*Object*/Emval.toHandle(Param2))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ITerraExplorerObject81 extends TEIUnknownHandle81 {
    get ID(){
        try{
            return UTF8ToString(_NativeITerraExplorerObject81_get_ID(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ObjectType(){
        try{
            return _NativeITerraExplorerObject81_get_ObjectType(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get SaveInFlyFile(){
        try{
            return _NativeITerraExplorerObject81_get_SaveInFlyFile(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set SaveInFlyFile(/*Boolean*/pVal){
            try{
                _NativeITerraExplorerObject81_put_SaveInFlyFile(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    GetClientData(/*String*/Namespace) {
        try{
            return UTF8ToString(_NativeITerraExplorerObject81_GetClientData(this.getInstanceHandle,/*String*/allocateUTF8(String(Namespace))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetParam(/*Int32*/Code) {
        try{
            return EmvalToJS(Emval.toValue(_NativeITerraExplorerObject81_GetParam(this.getInstanceHandle,/*Int32*/Code)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetClientData(/*String*/Namespace, /*String*/ClientData) {
        try{
            _NativeITerraExplorerObject81_SetClientData(this.getInstanceHandle,/*String*/allocateUTF8(String(Namespace)),/*String*/allocateUTF8(String(ClientData)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetParam(/*Int32*/Code, /*Object*/Param) {
        try{
            _NativeITerraExplorerObject81_SetParam(this.getInstanceHandle,/*Int32*/Code,/*Object*/Emval.toHandle(Param));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class I3DMLFeatureLayer81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeI3DMLFeatureLayer81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FeatureProperties(){
        try{
            return ((nativeHandle) => nativeHandle ? new I3DMLFeatureProperties81(nativeHandle) : null)(_NativeI3DMLFeatureLayer81_get_FeatureProperties(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeI3DMLFeatureLayer81_get_Position(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition81*/pVal){
            try{
                _NativeI3DMLFeatureLayer81_put_Position(this.getInstanceHandle,/*IPosition81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DataSourceInfo(){
        try{
            return ((nativeHandle) => nativeHandle ? new IDataSourceInfo81(nativeHandle) : null)(_NativeI3DMLFeatureLayer81_get_DataSourceInfo(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get SelectedFeatures(){
        try{
            return ((nativeHandle) => nativeHandle ? new Proxy(new IFeatures81(nativeHandle),get_Item_Handler) : null)(_NativeI3DMLFeatureLayer81_get_SelectedFeatures(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    ExecuteGetDataSourceFeatureIdQuery(/*String*/FeatureID) {
        try{
            return ((nativeHandle) => nativeHandle ? new IFeature81(nativeHandle) : null)(_NativeI3DMLFeatureLayer81_ExecuteGetDataSourceFeatureIdQuery(this.getInstanceHandle,/*String*/allocateUTF8(String(FeatureID))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ExecuteQuery(/*String*/AttributeFilter, /*Int32*/NumOfFeatures=-1, /*String*/FromDataSourceFeatureId="", /*IGeometry*/AreaFilter=null) {
        try{
            return ((nativeHandle) => nativeHandle ? new IFeatures81(nativeHandle) : null)(_NativeI3DMLFeatureLayer81_ExecuteQuery(this.getInstanceHandle,/*String*/allocateUTF8(String(AttributeFilter)),/*Int32*/NumOfFeatures,/*String*/allocateUTF8(String(FromDataSourceFeatureId)),/*IGeometry*/AreaFilter.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ExecuteSpatialQuery(/*IGeometry*/pIGeometry, /*IntersectionType*/IntersectionType=IntersectionType81.IT_INTERSECT) {
        try{
            return ((nativeHandle) => nativeHandle ? new IFeatures81(nativeHandle) : null)(_NativeI3DMLFeatureLayer81_ExecuteSpatialQuery(this.getInstanceHandle,/*IGeometry*/pIGeometry.getInstanceHandle,/*IntersectionType*/IntersectionType));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SaveAs(/*String*/ConnectionString, /*String*/AttributeFilter, /*IGeometry*/AreaFilter) {
        try{
            return UTF8ToString(_NativeI3DMLFeatureLayer81_SaveAs(this.getInstanceHandle,/*String*/allocateUTF8(String(ConnectionString)),/*String*/allocateUTF8(String(AttributeFilter)),/*IGeometry*/AreaFilter.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IProject81 extends TEIUnknownHandle81 {
    get Name(){
        try{
            return UTF8ToString(_NativeIProject81_get_Name(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FileVersion(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITEVersionInfo81(nativeHandle) : null)(_NativeIProject81_get_FileVersion(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    Settings(/*String*/paramName){                                    
        try{
            return EmvalToJS(Emval.toValue(_NativeIProject81_get_Settings(this.getInstanceHandle,/*String*/allocateUTF8(String(paramName)))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    Close(/*Boolean*/bSuppressConfirmation=false) {
        try{
            return _NativeIProject81_Close(this.getInstanceHandle,/*Boolean*/bSuppressConfirmation)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetProjectParam(/*String*/paramName) {
        try{
            return EmvalToJS(Emval.toValue(_NativeIProject81_GetProjectParam(this.getInstanceHandle,/*String*/allocateUTF8(String(paramName)))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    LoadFiles(/*Object*/FileNamesArray, /*String*/GroupID="") {
        try{
            _NativeIProject81_LoadFiles(this.getInstanceHandle,/*Object*/Emval.toHandle(FileNamesArray),/*String*/allocateUTF8(String(GroupID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Open(/*String*/ProjectURL, /*Boolean*/Asynchronous=false, /*String*/User="", /*String*/Password="") {
        try{
            _NativeIProject81_Open(this.getInstanceHandle,/*String*/allocateUTF8(String(ProjectURL)),/*Boolean*/Asynchronous,/*String*/allocateUTF8(String(User)),/*String*/allocateUTF8(String(Password)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    PublishToSGS(/*Boolean*/HideProgressDialog=false, /*Boolean*/UseExistingLayers=true, /*Boolean*/ConvertModelLayersTo3DML=true, /*SGPublishPermission*/viewAccess=SGPublishPermission81.SG_PERMISSION_EVERYONE, /*SGPublishPermission*/editAccess=SGPublishPermission81.SG_PERMISSION_EVERYONE, /*String*/Tag="", /*String*/viewerToken="", /*String*/projectName="", /*Boolean*/UpdateExistingProject=false) {
        try{
            _NativeIProject81_PublishToSGS(this.getInstanceHandle,/*Boolean*/HideProgressDialog,/*Boolean*/UseExistingLayers,/*Boolean*/ConvertModelLayersTo3DML,/*SGPublishPermission*/viewAccess,/*SGPublishPermission*/editAccess,/*String*/allocateUTF8(String(Tag)),/*String*/allocateUTF8(String(viewerToken)),/*String*/allocateUTF8(String(projectName)),/*Boolean*/UpdateExistingProject);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Save() {
        try{
            _NativeIProject81_Save(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SaveAs(/*String*/ProjectFileName) {
        try{
            return UTF8ToString(_NativeIProject81_SaveAs(this.getInstanceHandle,/*String*/allocateUTF8(String(ProjectFileName))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetProjectParam(/*String*/paramName, /*Object*/paramVal) {
        try{
            _NativeIProject81_SetProjectParam(this.getInstanceHandle,/*String*/allocateUTF8(String(paramName)),/*Object*/Emval.toHandle(paramVal));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class INavigate81 extends TEIUnknownHandle81 {
    get UndergroundMode(){
        try{
            return _NativeINavigate81_get_UndergroundMode(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set UndergroundMode(/*Boolean*/pVal){
            try{
                _NativeINavigate81_put_UndergroundMode(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FieldOfView(){
        try{
            return _NativeINavigate81_get_FieldOfView(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FieldOfView(/*Double*/pVal){
            try{
                _NativeINavigate81_put_FieldOfView(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Speed(){
        try{
            return _NativeINavigate81_get_Speed(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Speed(/*Double*/pVal){
            try{
                _NativeINavigate81_put_Speed(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    DetectCollisionToTarget(/*IPosition81*/target) {
        try{
            return _NativeINavigate81_DetectCollisionToTarget(this.getInstanceHandle,/*IPosition81*/target.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    FlyThrough(/*Object*/arrTargets) {
        try{
            _NativeINavigate81_FlyThrough(this.getInstanceHandle,/*Object*/Emval.toHandle(arrTargets));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    FlyTo(/*Object*/target, /*ActionCode*/Pattern=ActionCode81.AC_FLYTO) {
        try{
            _NativeINavigate81_FlyTo(this.getInstanceHandle,/*Object*/Emval.toHandle(target),/*ActionCode*/Pattern);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetPosition(/*AltitudeTypeCode*/AltitudeType=AltitudeTypeCode81.ATC_TERRAIN_RELATIVE) {
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeINavigate81_GetPosition(this.getInstanceHandle,/*AltitudeTypeCode*/AltitudeType));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    JumpTo(/*Object*/target) {
        try{
            _NativeINavigate81_JumpTo(this.getInstanceHandle,/*Object*/Emval.toHandle(target));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetGPSMode(/*GPSOperationMode*/GPSMode) {
        try{
            _NativeINavigate81_SetGPSMode(this.getInstanceHandle,/*GPSOperationMode*/GPSMode);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetGPSPosition(/*IPosition81*/Position) {
        try{
            _NativeINavigate81_SetGPSPosition(this.getInstanceHandle,/*IPosition81*/Position.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetPosition(/*IPosition81*/Position) {
        try{
            _NativeINavigate81_SetPosition(this.getInstanceHandle,/*IPosition81*/Position.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Stop() {
        try{
            _NativeINavigate81_Stop(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ZoomIn(/*Double*/delta=0) {
        try{
            _NativeINavigate81_ZoomIn(this.getInstanceHandle,/*Double*/delta);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ZoomOut(/*Double*/delta=0) {
        try{
            _NativeINavigate81_ZoomOut(this.getInstanceHandle,/*Double*/delta);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ZoomTo(/*Double*/distanceFromPOI, /*Int32*/Flags=0) {
        try{
            _NativeINavigate81_ZoomTo(this.getInstanceHandle,/*Double*/distanceFromPOI,/*Int32*/Flags);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ICreator81 extends TEIUnknownHandle81 {
    get GeometryCreator(){
        try{
            return ((nativeHandle) => nativeHandle ? new IGeometryCreator81(nativeHandle) : null)(_NativeICreator81_get_GeometryCreator(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    Create3DArrow(/*IPosition81*/Position, /*Double*/Length, /*Int32*/Style=4, /*Double*/ObjectHeight=10, /*Object*/LineColor=-16711936, /*Object*/FillColor=-10197916, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrain3DArrow81(nativeHandle) : null)(_NativeICreator81_Create3DArrow(this.getInstanceHandle,/*IPosition81*/Position.getInstanceHandle,/*Double*/Length,/*Int32*/Style,/*Double*/ObjectHeight,/*Object*/Emval.toHandle(LineColor),/*Object*/Emval.toHandle(FillColor),/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Create3DPolygon(/*IGeometry*/pIGeometry, /*Double*/ObjectHeight=20, /*Object*/LineColor=-16711936, /*Object*/FillColor=-10197916, /*AltitudeTypeCode*/AltitudeType=AltitudeTypeCode81.ATC_TERRAIN_RELATIVE, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrain3DPolygon81(nativeHandle) : null)(_NativeICreator81_Create3DPolygon(this.getInstanceHandle,/*IGeometry*/pIGeometry.getInstanceHandle,/*Double*/ObjectHeight,/*Object*/Emval.toHandle(LineColor),/*Object*/Emval.toHandle(FillColor),/*AltitudeTypeCode*/AltitudeType,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateArc(/*IPosition81*/Position, /*Double*/RadiusX, /*Double*/RadiusY, /*Double*/StartAngle=-90, /*Double*/EndAngle=90, /*Object*/LineColor=-16711936, /*Object*/FillColor=-10197916, /*Int32*/NumOfSegments=-1, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainArc81(nativeHandle) : null)(_NativeICreator81_CreateArc(this.getInstanceHandle,/*IPosition81*/Position.getInstanceHandle,/*Double*/RadiusX,/*Double*/RadiusY,/*Double*/StartAngle,/*Double*/EndAngle,/*Object*/Emval.toHandle(LineColor),/*Object*/Emval.toHandle(FillColor),/*Int32*/NumOfSegments,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateArrow(/*IPosition81*/Position, /*Double*/Length, /*Int32*/Style=4, /*Object*/LineColor=-16711936, /*Object*/FillColor=-10197916, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainArrow81(nativeHandle) : null)(_NativeICreator81_CreateArrow(this.getInstanceHandle,/*IPosition81*/Position.getInstanceHandle,/*Double*/Length,/*Int32*/Style,/*Object*/Emval.toHandle(LineColor),/*Object*/Emval.toHandle(FillColor),/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateBox(/*IPosition81*/Position, /*Double*/ObjectWidth, /*Double*/ObjectDepth, /*Double*/ObjectHeight, /*Object*/LineColor=-16711936, /*Object*/FillColor=-10197916, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrain3DRectBase81(nativeHandle) : null)(_NativeICreator81_CreateBox(this.getInstanceHandle,/*IPosition81*/Position.getInstanceHandle,/*Double*/ObjectWidth,/*Double*/ObjectDepth,/*Double*/ObjectHeight,/*Object*/Emval.toHandle(LineColor),/*Object*/Emval.toHandle(FillColor),/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateBuilding(/*IGeometry*/pIGeometry, /*Double*/RoofHeight=20, /*AltitudeTypeCode*/AltitudeType=AltitudeTypeCode81.ATC_TERRAIN_RELATIVE, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainBuilding81(nativeHandle) : null)(_NativeICreator81_CreateBuilding(this.getInstanceHandle,/*IGeometry*/pIGeometry.getInstanceHandle,/*Double*/RoofHeight,/*AltitudeTypeCode*/AltitudeType,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateCircle(/*IPosition81*/Position, /*Double*/Radius, /*Object*/LineColor=-16711936, /*Object*/FillColor=-10197916, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainRegularPolygon81(nativeHandle) : null)(_NativeICreator81_CreateCircle(this.getInstanceHandle,/*IPosition81*/Position.getInstanceHandle,/*Double*/Radius,/*Object*/Emval.toHandle(LineColor),/*Object*/Emval.toHandle(FillColor),/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateColor(/*Int32*/Red=255, /*Int32*/Green=255, /*Int32*/Blue=255, /*Int32*/Alpha=255) {
        try{
            return ((nativeHandle) => nativeHandle ? new IColor81(nativeHandle) : null)(_NativeICreator81_CreateColor(this.getInstanceHandle,/*Int32*/Red,/*Int32*/Green,/*Int32*/Blue,/*Int32*/Alpha));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateCommandLineProcessAsync(/*String*/CommandLine) {
        try{
            return ((nativeHandle) => nativeHandle ? new ICommandLineProcessAsync81(nativeHandle) : null)(_NativeICreator81_CreateCommandLineProcessAsync(this.getInstanceHandle,/*String*/allocateUTF8(String(CommandLine))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateCone(/*IPosition81*/Position, /*Double*/Radius, /*Double*/ObjectHeight=20, /*Object*/LineColor=-16711936, /*Object*/FillColor=-10197916, /*Int32*/NumOfSegments=-1, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrain3DRegBase81(nativeHandle) : null)(_NativeICreator81_CreateCone(this.getInstanceHandle,/*IPosition81*/Position.getInstanceHandle,/*Double*/Radius,/*Double*/ObjectHeight,/*Object*/Emval.toHandle(LineColor),/*Object*/Emval.toHandle(FillColor),/*Int32*/NumOfSegments,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateCylinder(/*IPosition81*/Position, /*Double*/Radius, /*Double*/ObjectHeight=20, /*Object*/LineColor=-16711936, /*Object*/FillColor=-10197916, /*Int32*/NumOfSegments=-1, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrain3DRegBase81(nativeHandle) : null)(_NativeICreator81_CreateCylinder(this.getInstanceHandle,/*IPosition81*/Position.getInstanceHandle,/*Double*/Radius,/*Double*/ObjectHeight,/*Object*/Emval.toHandle(LineColor),/*Object*/Emval.toHandle(FillColor),/*Int32*/NumOfSegments,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateDynamicObject(/*Object*/Waypoints=0, /*DynamicMotionStyle*/MotionStyle=DynamicMotionStyle81.MOTION_AIRPLANE, /*DynamicObjectType*/ObjectType=DynamicObjectType81.DYNAMIC_VIRTUAL, /*String*/FileNameOrText="", /*Double*/ScaleFactor=1, /*AltitudeTypeCode*/AltitudeType=AltitudeTypeCode81.ATC_TERRAIN_RELATIVE, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainDynamicObject81(nativeHandle) : null)(_NativeICreator81_CreateDynamicObject(this.getInstanceHandle,/*Object*/Emval.toHandle(Waypoints),/*DynamicMotionStyle*/MotionStyle,/*DynamicObjectType*/ObjectType,/*String*/allocateUTF8(String(FileNameOrText)),/*Double*/ScaleFactor,/*AltitudeTypeCode*/AltitudeType,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateEffect(/*IPosition81*/Position, /*String*/EffectsXML="", /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainEffect81(nativeHandle) : null)(_NativeICreator81_CreateEffect(this.getInstanceHandle,/*IPosition81*/Position.getInstanceHandle,/*String*/allocateUTF8(String(EffectsXML)),/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateElevationLayer(/*String*/ElevationFileName, /*Double*/UpperLeftX, /*Double*/UpperLeftY, /*Double*/LowerRightX, /*Double*/LowerRightY, /*Object*/InitParam="", /*Object*/PlugName="", /*String*/GroupID="", /*String*/Description="", /*Double*/HScale=1, /*Double*/HOffset=0) {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainRasterLayer81(nativeHandle) : null)(_NativeICreator81_CreateElevationLayer(this.getInstanceHandle,/*String*/allocateUTF8(String(ElevationFileName)),/*Double*/UpperLeftX,/*Double*/UpperLeftY,/*Double*/LowerRightX,/*Double*/LowerRightY,/*Object*/Emval.toHandle(InitParam),/*Object*/Emval.toHandle(PlugName),/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description)),/*Double*/HScale,/*Double*/HOffset));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateElevationLayerAsync(/*String*/ElevationFileName, /*Double*/UpperLeftX, /*Double*/UpperLeftY, /*Double*/LowerRightX, /*Double*/LowerRightY, /*Object*/InitParam="", /*Object*/PlugName="", /*String*/GroupID="", /*String*/Description="", /*Double*/HScale=1, /*Double*/HOffset=0) {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerraExplorerAsync81(nativeHandle) : null)(_NativeICreator81_CreateElevationLayerAsync(this.getInstanceHandle,/*String*/allocateUTF8(String(ElevationFileName)),/*Double*/UpperLeftX,/*Double*/UpperLeftY,/*Double*/LowerRightX,/*Double*/LowerRightY,/*Object*/Emval.toHandle(InitParam),/*Object*/Emval.toHandle(PlugName),/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description)),/*Double*/HScale,/*Double*/HOffset));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateEllipse(/*IPosition81*/Position, /*Double*/RadiusX, /*Double*/RadiusY, /*Object*/LineColor=-16711936, /*Object*/FillColor=-10197916, /*Int32*/NumOfSegments=-1, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainEllipse81(nativeHandle) : null)(_NativeICreator81_CreateEllipse(this.getInstanceHandle,/*IPosition81*/Position.getInstanceHandle,/*Double*/RadiusX,/*Double*/RadiusY,/*Object*/Emval.toHandle(LineColor),/*Object*/Emval.toHandle(FillColor),/*Int32*/NumOfSegments,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateFeatureLayer(/*String*/layerName, /*String*/sConnectionString, /*String*/GroupID="") {
        try{
            return ((nativeHandle) => nativeHandle ? new IFeatureLayer81(nativeHandle) : null)(_NativeICreator81_CreateFeatureLayer(this.getInstanceHandle,/*String*/allocateUTF8(String(layerName)),/*String*/allocateUTF8(String(sConnectionString)),/*String*/allocateUTF8(String(GroupID))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateFeatureLayerAsync(/*String*/layerName, /*String*/sConnectionString, /*String*/GroupID="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerraExplorerAsync81(nativeHandle) : null)(_NativeICreator81_CreateFeatureLayerAsync(this.getInstanceHandle,/*String*/allocateUTF8(String(layerName)),/*String*/allocateUTF8(String(sConnectionString)),/*String*/allocateUTF8(String(GroupID))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateFromStream(/*Object*/Stream, /*String*/GroupID="") {
        try{
            return ((nativeHandle) => nativeHandle ? GetITerraExplorerObject81Derived(nativeHandle) : null)(_NativeICreator81_CreateFromStream(this.getInstanceHandle,/*Object*/Emval.toHandle(Stream),/*String*/allocateUTF8(String(GroupID))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateHoleOnTerrain(/*IGeometry*/pIGeometry, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainHole81(nativeHandle) : null)(_NativeICreator81_CreateHoleOnTerrain(this.getInstanceHandle,/*IGeometry*/pIGeometry.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateImageLabel(/*IPosition81*/Position, /*String*/ImageFileName, /*ILabelStyle81*/LabelStyle=null, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainImageLabel81(nativeHandle) : null)(_NativeICreator81_CreateImageLabel(this.getInstanceHandle,/*IPosition81*/Position.getInstanceHandle,/*String*/allocateUTF8(String(ImageFileName)),/*ILabelStyle81*/LabelStyle.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateImageLabelFromBuffer(/*IPosition81*/Position, /*Object*/buffer, /*Int32*/Width, /*Int32*/Height, /*ILabelStyle81*/LabelStyle=null, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainImageLabel81(nativeHandle) : null)(_NativeICreator81_CreateImageLabelFromBuffer(this.getInstanceHandle,/*IPosition81*/Position.getInstanceHandle,/*Object*/Emval.toHandle(buffer),/*Int32*/Width,/*Int32*/Height,/*ILabelStyle81*/LabelStyle.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateImageryLayer(/*String*/ImageryFileName, /*Double*/UpperLeftX, /*Double*/UpperLeftY, /*Double*/LowerRightX, /*Double*/LowerRightY, /*Object*/InitParam="", /*Object*/PlugName="", /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainRasterLayer81(nativeHandle) : null)(_NativeICreator81_CreateImageryLayer(this.getInstanceHandle,/*String*/allocateUTF8(String(ImageryFileName)),/*Double*/UpperLeftX,/*Double*/UpperLeftY,/*Double*/LowerRightX,/*Double*/LowerRightY,/*Object*/Emval.toHandle(InitParam),/*Object*/Emval.toHandle(PlugName),/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateImageryLayerAsync(/*String*/ImageryFileName, /*Double*/UpperLeftX, /*Double*/UpperLeftY, /*Double*/LowerRightX, /*Double*/LowerRightY, /*Object*/InitParam="", /*Object*/PlugName="", /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerraExplorerAsync81(nativeHandle) : null)(_NativeICreator81_CreateImageryLayerAsync(this.getInstanceHandle,/*String*/allocateUTF8(String(ImageryFileName)),/*Double*/UpperLeftX,/*Double*/UpperLeftY,/*Double*/LowerRightX,/*Double*/LowerRightY,/*Object*/Emval.toHandle(InitParam),/*Object*/Emval.toHandle(PlugName),/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateKMLLayer(/*String*/Path, /*String*/GroupID="") {
        try{
            return ((nativeHandle) => nativeHandle ? new IKMLLayer81(nativeHandle) : null)(_NativeICreator81_CreateKMLLayer(this.getInstanceHandle,/*String*/allocateUTF8(String(Path)),/*String*/allocateUTF8(String(GroupID))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateLabel(/*IPosition81*/Position, /*String*/Text, /*String*/ImageFileName, /*ILabelStyle81*/LabelStyle=null, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainLabel81(nativeHandle) : null)(_NativeICreator81_CreateLabel(this.getInstanceHandle,/*IPosition81*/Position.getInstanceHandle,/*String*/allocateUTF8(String(Text)),/*String*/allocateUTF8(String(ImageFileName)),/*ILabelStyle81*/LabelStyle.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateLabelStyle(/*SGLabelStyle*/ls=SGLabelStyle81.LS_DEFAULT) {
        try{
            return ((nativeHandle) => nativeHandle ? new ILabelStyle81(nativeHandle) : null)(_NativeICreator81_CreateLabelStyle(this.getInstanceHandle,/*SGLabelStyle*/ls));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateLocation(/*IPosition81*/Position=null, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainLocation81(nativeHandle) : null)(_NativeICreator81_CreateLocation(this.getInstanceHandle,/*IPosition81*/Position.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateLocationHere(/*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainLocation81(nativeHandle) : null)(_NativeICreator81_CreateLocationHere(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateMeshLayerFromFile(/*String*/FilePath, /*String*/ParentGroupID="") {
        try{
            return ((nativeHandle) => nativeHandle ? new IMeshLayer81(nativeHandle) : null)(_NativeICreator81_CreateMeshLayerFromFile(this.getInstanceHandle,/*String*/allocateUTF8(String(FilePath)),/*String*/allocateUTF8(String(ParentGroupID))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateMeshLayerFromSGS(/*String*/ServerPath, /*String*/layerName, /*String*/ParentGroupID="") {
        try{
            return ((nativeHandle) => nativeHandle ? new IMeshLayer81(nativeHandle) : null)(_NativeICreator81_CreateMeshLayerFromSGS(this.getInstanceHandle,/*String*/allocateUTF8(String(ServerPath)),/*String*/allocateUTF8(String(layerName)),/*String*/allocateUTF8(String(ParentGroupID))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateMeshLayerFromSGSAsync(/*String*/ServerPath, /*String*/layerName, /*String*/ParentGroupID="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerraExplorerAsync81(nativeHandle) : null)(_NativeICreator81_CreateMeshLayerFromSGSAsync(this.getInstanceHandle,/*String*/allocateUTF8(String(ServerPath)),/*String*/allocateUTF8(String(layerName)),/*String*/allocateUTF8(String(ParentGroupID))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateMessage(/*MsgTargetPosition*/TargetPosition, /*String*/msgData, /*MsgType*/Type, /*Boolean*/BringToFront=false) {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerraExplorerMessage81(nativeHandle) : null)(_NativeICreator81_CreateMessage(this.getInstanceHandle,/*MsgTargetPosition*/TargetPosition,/*String*/allocateUTF8(String(msgData)),/*MsgType*/Type,/*Boolean*/BringToFront));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateModel(/*IPosition81*/Position, /*String*/FileName, /*Double*/Scale=1, /*ModelTypeCode*/ModelType=ModelTypeCode81.MT_NORMAL, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainModel81(nativeHandle) : null)(_NativeICreator81_CreateModel(this.getInstanceHandle,/*IPosition81*/Position.getInstanceHandle,/*String*/allocateUTF8(String(FileName)),/*Double*/Scale,/*ModelTypeCode*/ModelType,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateNewFeatureLayer(/*String*/layerName, /*LayerGeometryType*/LayerGeomType, /*String*/sConnectionString, /*String*/GroupID="") {
        try{
            return ((nativeHandle) => nativeHandle ? new IFeatureLayer81(nativeHandle) : null)(_NativeICreator81_CreateNewFeatureLayer(this.getInstanceHandle,/*String*/allocateUTF8(String(layerName)),/*LayerGeometryType*/LayerGeomType,/*String*/allocateUTF8(String(sConnectionString)),/*String*/allocateUTF8(String(GroupID))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreatePointCloudModel(/*String*/ModelFileName, /*IPosition81*/Position, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainPointCloudModel81(nativeHandle) : null)(_NativeICreator81_CreatePointCloudModel(this.getInstanceHandle,/*String*/allocateUTF8(String(ModelFileName)),/*IPosition81*/Position.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreatePointCloudModelAsync(/*String*/ModelFileName, /*IPosition81*/Position, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerraExplorerAsync81(nativeHandle) : null)(_NativeICreator81_CreatePointCloudModelAsync(this.getInstanceHandle,/*String*/allocateUTF8(String(ModelFileName)),/*IPosition81*/Position.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreatePolygon(/*IGeometry*/pIGeometry, /*Object*/LineColor=-16711936, /*Object*/FillColor=-10197916, /*AltitudeTypeCode*/AltitudeType=AltitudeTypeCode81.ATC_ON_TERRAIN, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainPolygon81(nativeHandle) : null)(_NativeICreator81_CreatePolygon(this.getInstanceHandle,/*IGeometry*/pIGeometry.getInstanceHandle,/*Object*/Emval.toHandle(LineColor),/*Object*/Emval.toHandle(FillColor),/*AltitudeTypeCode*/AltitudeType,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreatePolygonFromArray(/*Object*/verticesArray, /*Object*/LineColor=-16711936, /*Object*/FillColor=-10197916, /*AltitudeTypeCode*/AltitudeType=AltitudeTypeCode81.ATC_ON_TERRAIN, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainPolygon81(nativeHandle) : null)(_NativeICreator81_CreatePolygonFromArray(this.getInstanceHandle,/*Object*/Emval.toHandle(verticesArray),/*Object*/Emval.toHandle(LineColor),/*Object*/Emval.toHandle(FillColor),/*AltitudeTypeCode*/AltitudeType,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreatePolyline(/*IGeometry*/pIGeometry, /*Object*/LineColor=-16711936, /*AltitudeTypeCode*/AltitudeType=AltitudeTypeCode81.ATC_ON_TERRAIN, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainPolyline81(nativeHandle) : null)(_NativeICreator81_CreatePolyline(this.getInstanceHandle,/*IGeometry*/pIGeometry.getInstanceHandle,/*Object*/Emval.toHandle(LineColor),/*AltitudeTypeCode*/AltitudeType,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreatePolylineFromArray(/*Object*/verticesArray, /*Object*/LineColor=-16711936, /*AltitudeTypeCode*/AltitudeType=AltitudeTypeCode81.ATC_ON_TERRAIN, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainPolyline81(nativeHandle) : null)(_NativeICreator81_CreatePolylineFromArray(this.getInstanceHandle,/*Object*/Emval.toHandle(verticesArray),/*Object*/Emval.toHandle(LineColor),/*AltitudeTypeCode*/AltitudeType,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreatePopupMessage(/*String*/Caption="", /*String*/Src="", /*Int32*/Left=0, /*Int32*/Top=0, /*Int32*/Width=0, /*Int32*/Height=0, /*Int32*/Timeout=-1) {
        try{
            return ((nativeHandle) => nativeHandle ? new IPopupMessage81(nativeHandle) : null)(_NativeICreator81_CreatePopupMessage(this.getInstanceHandle,/*String*/allocateUTF8(String(Caption)),/*String*/allocateUTF8(String(Src)),/*Int32*/Left,/*Int32*/Top,/*Int32*/Width,/*Int32*/Height,/*Int32*/Timeout));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreatePosition(/*Double*/X=0, /*Double*/Y=0, /*Double*/Altitude=0, /*AltitudeTypeCode*/AltitudeType=AltitudeTypeCode81.ATC_TERRAIN_RELATIVE, /*Double*/Yaw=0, /*Double*/Pitch=0, /*Double*/Roll=0, /*Double*/Distance=0) {
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeICreator81_CreatePosition(this.getInstanceHandle,/*Double*/X,/*Double*/Y,/*Double*/Altitude,/*AltitudeTypeCode*/AltitudeType,/*Double*/Yaw,/*Double*/Pitch,/*Double*/Roll,/*Double*/Distance));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreatePresentation(/*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new IPresentation81(nativeHandle) : null)(_NativeICreator81_CreatePresentation(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreatePyramid(/*IPosition81*/Position, /*Double*/ObjectWidth, /*Double*/ObjectDepth, /*Double*/ObjectHeight, /*Object*/LineColor=-16711936, /*Object*/FillColor=-10197916, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrain3DRectBase81(nativeHandle) : null)(_NativeICreator81_CreatePyramid(this.getInstanceHandle,/*IPosition81*/Position.getInstanceHandle,/*Double*/ObjectWidth,/*Double*/ObjectDepth,/*Double*/ObjectHeight,/*Object*/Emval.toHandle(LineColor),/*Object*/Emval.toHandle(FillColor),/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateRectangle(/*IPosition81*/Position, /*Double*/ObjectWidth, /*Double*/ObjectDepth, /*Object*/LineColor=-16711936, /*Object*/FillColor=-10197916, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainRectangle81(nativeHandle) : null)(_NativeICreator81_CreateRectangle(this.getInstanceHandle,/*IPosition81*/Position.getInstanceHandle,/*Double*/ObjectWidth,/*Double*/ObjectDepth,/*Object*/Emval.toHandle(LineColor),/*Object*/Emval.toHandle(FillColor),/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateRegularPolygon(/*IPosition81*/Position, /*Double*/Radius, /*Int32*/NumOfSegments, /*Object*/LineColor=-16711936, /*Object*/FillColor=-10197916, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainRegularPolygon81(nativeHandle) : null)(_NativeICreator81_CreateRegularPolygon(this.getInstanceHandle,/*IPosition81*/Position.getInstanceHandle,/*Double*/Radius,/*Int32*/NumOfSegments,/*Object*/Emval.toHandle(LineColor),/*Object*/Emval.toHandle(FillColor),/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateRouteWaypoint(/*Double*/X=0, /*Double*/Y=0, /*Double*/Altitude=0, /*Double*/Speed=300, /*Double*/Yaw=0, /*Double*/Pitch=0, /*Double*/Roll=0, /*String*/MessageID="") {
        try{
            return ((nativeHandle) => nativeHandle ? new IRouteWaypoint81(nativeHandle) : null)(_NativeICreator81_CreateRouteWaypoint(this.getInstanceHandle,/*Double*/X,/*Double*/Y,/*Double*/Altitude,/*Double*/Speed,/*Double*/Yaw,/*Double*/Pitch,/*Double*/Roll,/*String*/allocateUTF8(String(MessageID))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateScreenOverlay(/*String*/ImageFileName, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new IScreenOverlay81(nativeHandle) : null)(_NativeICreator81_CreateScreenOverlay(this.getInstanceHandle,/*String*/allocateUTF8(String(ImageFileName)),/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateSphere(/*IPosition81*/Position, /*Double*/Radius, /*SphereStyle*/Style=SphereStyle81.SPHERE_NORMAL, /*Object*/LineColor=-16711936, /*Object*/FillColor=-10197916, /*Int32*/SegmentDensity=-1, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainSphere81(nativeHandle) : null)(_NativeICreator81_CreateSphere(this.getInstanceHandle,/*IPosition81*/Position.getInstanceHandle,/*Double*/Radius,/*SphereStyle*/Style,/*Object*/Emval.toHandle(LineColor),/*Object*/Emval.toHandle(FillColor),/*Int32*/SegmentDensity,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateTerrainModifier(/*IGeometry*/pIGeometry, /*ElevationBehaviorMode*/Mode=ElevationBehaviorMode81.EB_REPLACE, /*Boolean*/Flat=true, /*Double*/Feather=0, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainModifier81(nativeHandle) : null)(_NativeICreator81_CreateTerrainModifier(this.getInstanceHandle,/*IGeometry*/pIGeometry.getInstanceHandle,/*ElevationBehaviorMode*/Mode,/*Boolean*/Flat,/*Double*/Feather,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateTextLabel(/*IPosition81*/Position, /*String*/Text, /*ILabelStyle81*/LabelStyle=null, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainLabel81(nativeHandle) : null)(_NativeICreator81_CreateTextLabel(this.getInstanceHandle,/*IPosition81*/Position.getInstanceHandle,/*String*/allocateUTF8(String(Text)),/*ILabelStyle81*/LabelStyle.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateTreeHotlink(/*String*/MessageID, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeHotlink81(nativeHandle) : null)(_NativeICreator81_CreateTreeHotlink(this.getInstanceHandle,/*String*/allocateUTF8(String(MessageID)),/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateVideoOnTerrain(/*String*/VideoFileName, /*IPosition81*/Position, /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainVideo81(nativeHandle) : null)(_NativeICreator81_CreateVideoOnTerrain(this.getInstanceHandle,/*String*/allocateUTF8(String(VideoFileName)),/*IPosition81*/Position.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DeleteObject(/*String*/ObjectID) {
        try{
            _NativeICreator81_DeleteObject(this.getInstanceHandle,/*String*/allocateUTF8(String(ObjectID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetObject(/*String*/ObjectID) {
        try{
            return ((nativeHandle) => nativeHandle ? GetITerraExplorerObject81Derived(nativeHandle) : null)(_NativeICreator81_GetObject(this.getInstanceHandle,/*String*/allocateUTF8(String(ObjectID))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IDrawing81 extends TEIUnknownHandle81 {
    DrawCircle(/*DrawingMode*/DrawingMode=DrawingMode81.DRAW_MODE_MAGNET, /*String*/GroupID="", /*Int32*/Left=2147483647, /*Int32*/Top=2147483647) {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainRegularPolygon81(nativeHandle) : null)(_NativeIDrawing81_DrawCircle(this.getInstanceHandle,/*DrawingMode*/DrawingMode,/*String*/allocateUTF8(String(GroupID)),/*Int32*/Left,/*Int32*/Top));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DrawDynamicObject(/*String*/Path, /*DrawingMode*/DrawingMode=DrawingMode81.DRAW_MODE_MAGNET, /*String*/GroupID="", /*Int32*/Left=2147483647, /*Int32*/Top=2147483647) {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainDynamicObject81(nativeHandle) : null)(_NativeIDrawing81_DrawDynamicObject(this.getInstanceHandle,/*String*/allocateUTF8(String(Path)),/*DrawingMode*/DrawingMode,/*String*/allocateUTF8(String(GroupID)),/*Int32*/Left,/*Int32*/Top));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DrawImageLabel(/*String*/ImagePath, /*DrawingMode*/DrawingMode=DrawingMode81.DRAW_MODE_MAGNET, /*String*/GroupID="", /*Int32*/Left=2147483647, /*Int32*/Top=2147483647) {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainLabel81(nativeHandle) : null)(_NativeIDrawing81_DrawImageLabel(this.getInstanceHandle,/*String*/allocateUTF8(String(ImagePath)),/*DrawingMode*/DrawingMode,/*String*/allocateUTF8(String(GroupID)),/*Int32*/Left,/*Int32*/Top));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DrawModel(/*String*/Path, /*DrawingMode*/DrawingMode=DrawingMode81.DRAW_MODE_MAGNET, /*String*/GroupID="", /*Int32*/Left=2147483647, /*Int32*/Top=2147483647) {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainModel81(nativeHandle) : null)(_NativeIDrawing81_DrawModel(this.getInstanceHandle,/*String*/allocateUTF8(String(Path)),/*DrawingMode*/DrawingMode,/*String*/allocateUTF8(String(GroupID)),/*Int32*/Left,/*Int32*/Top));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DrawPolygon(/*DrawingMode*/DrawingMode=DrawingMode81.DRAW_MODE_MAGNET, /*String*/GroupID="", /*Int32*/Left=2147483647, /*Int32*/Top=2147483647) {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainPolygon81(nativeHandle) : null)(_NativeIDrawing81_DrawPolygon(this.getInstanceHandle,/*DrawingMode*/DrawingMode,/*String*/allocateUTF8(String(GroupID)),/*Int32*/Left,/*Int32*/Top));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DrawPolyline(/*DrawingMode*/DrawingMode=DrawingMode81.DRAW_MODE_MAGNET, /*String*/GroupID="", /*Int32*/Left=2147483647, /*Int32*/Top=2147483647) {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainPolyline81(nativeHandle) : null)(_NativeIDrawing81_DrawPolyline(this.getInstanceHandle,/*DrawingMode*/DrawingMode,/*String*/allocateUTF8(String(GroupID)),/*Int32*/Left,/*Int32*/Top));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DrawRectangle(/*DrawingMode*/DrawingMode=DrawingMode81.DRAW_MODE_MAGNET, /*String*/GroupID="", /*Int32*/Left=2147483647, /*Int32*/Top=2147483647) {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainRectangle81(nativeHandle) : null)(_NativeIDrawing81_DrawRectangle(this.getInstanceHandle,/*DrawingMode*/DrawingMode,/*String*/allocateUTF8(String(GroupID)),/*Int32*/Left,/*Int32*/Top));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DrawTextLabel(/*String*/Text, /*DrawingMode*/DrawingMode=DrawingMode81.DRAW_MODE_MAGNET, /*String*/GroupID="", /*Int32*/Left=2147483647, /*Int32*/Top=2147483647) {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainLabel81(nativeHandle) : null)(_NativeIDrawing81_DrawTextLabel(this.getInstanceHandle,/*String*/allocateUTF8(String(Text)),/*DrawingMode*/DrawingMode,/*String*/allocateUTF8(String(GroupID)),/*Int32*/Left,/*Int32*/Top));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IProjectTree81 extends TEIUnknownHandle81 {
    get HiddenGroupName(){
        try{
            return UTF8ToString(_NativeIProjectTree81_get_HiddenGroupName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get HiddenGroupID(){
        try{
            return UTF8ToString(_NativeIProjectTree81_get_HiddenGroupID(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get RootID(){
        try{
            return UTF8ToString(_NativeIProjectTree81_get_RootID(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get NotInTreeID(){
        try{
            return UTF8ToString(_NativeIProjectTree81_get_NotInTreeID(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ShowSearchTool(){
        try{
            return _NativeIProjectTree81_get_ShowSearchTool(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ShowSearchTool(/*Boolean*/pVal){
            try{
                _NativeIProjectTree81_put_ShowSearchTool(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    _EditItemEmbedded(/*String*/ID, /*Object*/ParentWindow) {
        try{
            _NativeIProjectTree81__EditItemEmbedded(this.getInstanceHandle,/*String*/allocateUTF8(String(ID)),/*Object*/Emval.toHandle(ParentWindow));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateGroup(/*String*/GroupName, /*String*/ParentGroupID="") {
        try{
            return UTF8ToString(_NativeIProjectTree81_CreateGroup(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupName)),/*String*/allocateUTF8(String(ParentGroupID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateLockedGroup(/*String*/GroupName, /*String*/ParentGroupID="") {
        try{
            return UTF8ToString(_NativeIProjectTree81_CreateLockedGroup(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupName)),/*String*/allocateUTF8(String(ParentGroupID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DeleteItem(/*String*/ID) {
        try{
            _NativeIProjectTree81_DeleteItem(this.getInstanceHandle,/*String*/allocateUTF8(String(ID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    EditItem(/*String*/ID, /*EditItemFlags*/Flags=EditItemFlags81.EDIT_ITEM_USE_PROPERTY) {
        try{
            _NativeIProjectTree81_EditItem(this.getInstanceHandle,/*String*/allocateUTF8(String(ID)),/*EditItemFlags*/Flags);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    EditItemEx(/*String*/ID, /*EditItemFlags*/Flags=EditItemFlags81.EDIT_ITEM_SHOW_PROPERTY, /*Object*/propertySheetVisibleGroups=0, /*Int32*/Left=2147483647, /*Int32*/Top=2147483647) {
        try{
            _NativeIProjectTree81_EditItemEx(this.getInstanceHandle,/*String*/allocateUTF8(String(ID)),/*EditItemFlags*/Flags,/*Object*/Emval.toHandle(propertySheetVisibleGroups),/*Int32*/Left,/*Int32*/Top);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    EditItems(/*Object*/Items) {
        try{
            _NativeIProjectTree81_EditItems(this.getInstanceHandle,/*Object*/Emval.toHandle(Items));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    EnableRedraw(/*Boolean*/bEnable) {
        try{
            _NativeIProjectTree81_EnableRedraw(this.getInstanceHandle,/*Boolean*/bEnable);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    EndEdit() {
        try{
            _NativeIProjectTree81_EndEdit(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ExpandGroup(/*String*/GroupID, /*Boolean*/bExpand) {
        try{
            _NativeIProjectTree81_ExpandGroup(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*Boolean*/bExpand);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    FindItem(/*String*/PathName) {
        try{
            return UTF8ToString(_NativeIProjectTree81_FindItem(this.getInstanceHandle,/*String*/allocateUTF8(String(PathName))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetActivationCode(/*String*/GroupID) {
        try{
            return ((nativeHandle) => nativeHandle ? new IAction81(nativeHandle) : null)(_NativeIProjectTree81_GetActivationCode(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetClientData(/*String*/ID, /*String*/Namespace) {
        try{
            return UTF8ToString(_NativeIProjectTree81_GetClientData(this.getInstanceHandle,/*String*/allocateUTF8(String(ID)),/*String*/allocateUTF8(String(Namespace))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetGroupEndTime(/*String*/GroupID) {
        try{
            return EmvalToJS(Emval.toValue(_NativeIProjectTree81_GetGroupEndTime(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetGroupLocation(/*String*/GroupID) {
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeIProjectTree81_GetGroupLocation(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetGroupMessageID(/*String*/GroupID) {
        try{
            return UTF8ToString(_NativeIProjectTree81_GetGroupMessageID(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetGroupStartTime(/*String*/GroupID) {
        try{
            return EmvalToJS(Emval.toValue(_NativeIProjectTree81_GetGroupStartTime(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetItemName(/*String*/ID) {
        try{
            return UTF8ToString(_NativeIProjectTree81_GetItemName(this.getInstanceHandle,/*String*/allocateUTF8(String(ID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetLayer(/*String*/GroupID) {
        try{
            return ((nativeHandle) => nativeHandle ? new IFeatureLayer81(nativeHandle) : null)(_NativeIProjectTree81_GetLayer(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetLayerAsync(/*String*/GroupID) {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerraExplorerAsync81(nativeHandle) : null)(_NativeIProjectTree81_GetLayerAsync(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetNextItem(/*String*/ID, /*ItemCode*/Code) {
        try{
            return UTF8ToString(_NativeIProjectTree81_GetNextItem(this.getInstanceHandle,/*String*/allocateUTF8(String(ID)),/*ItemCode*/Code));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetObject(/*String*/ID) {
        try{
            return ((nativeHandle) => nativeHandle ? GetITerraExplorerObject81Derived(nativeHandle) : null)(_NativeIProjectTree81_GetObject(this.getInstanceHandle,/*String*/allocateUTF8(String(ID))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetVisibility(/*String*/ID) {
        try{
            return _NativeIProjectTree81_GetVisibility(this.getInstanceHandle,/*String*/allocateUTF8(String(ID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsExpanded(/*String*/GroupID) {
        try{
            return _NativeIProjectTree81_IsExpanded(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)))== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsGroup(/*String*/ID) {
        try{
            return _NativeIProjectTree81_IsGroup(this.getInstanceHandle,/*String*/allocateUTF8(String(ID)))== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsLayer(/*String*/GroupID) {
        try{
            return _NativeIProjectTree81_IsLayer(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)))== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsLocked(/*String*/GroupID) {
        try{
            return _NativeIProjectTree81_IsLocked(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)))== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsRadioGroup(/*String*/GroupID) {
        try{
            return _NativeIProjectTree81_IsRadioGroup(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)))== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    LoadFlyLayer(/*String*/FlyURL, /*String*/ParentGroupID="") {
        try{
            return UTF8ToString(_NativeIProjectTree81_LoadFlyLayer(this.getInstanceHandle,/*String*/allocateUTF8(String(FlyURL)),/*String*/allocateUTF8(String(ParentGroupID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    LoadFlyLayerAsync(/*String*/FlyURL, /*String*/ParentGroupID="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerraExplorerAsync81(nativeHandle) : null)(_NativeIProjectTree81_LoadFlyLayerAsync(this.getInstanceHandle,/*String*/allocateUTF8(String(FlyURL)),/*String*/allocateUTF8(String(ParentGroupID))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    LoadKmlLayer(/*String*/KmlURL, /*String*/ParentGroupID="") {
        try{
            return UTF8ToString(_NativeIProjectTree81_LoadKmlLayer(this.getInstanceHandle,/*String*/allocateUTF8(String(KmlURL)),/*String*/allocateUTF8(String(ParentGroupID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    LockGroup(/*String*/GroupID, /*Boolean*/bLock) {
        try{
            _NativeIProjectTree81_LockGroup(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*Boolean*/bLock);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    RenameGroup(/*String*/GroupID, /*String*/GroupName) {
        try{
            _NativeIProjectTree81_RenameGroup(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(GroupName)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SaveAsFly(/*String*/FlyName, /*String*/GroupID) {
        try{
            return UTF8ToString(_NativeIProjectTree81_SaveAsFly(this.getInstanceHandle,/*String*/allocateUTF8(String(FlyName)),/*String*/allocateUTF8(String(GroupID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SaveAsFlyAsync(/*String*/FlyName, /*String*/GroupID) {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerraExplorerAsync81(nativeHandle) : null)(_NativeIProjectTree81_SaveAsFlyAsync(this.getInstanceHandle,/*String*/allocateUTF8(String(FlyName)),/*String*/allocateUTF8(String(GroupID))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SaveAsKml(/*String*/KmlName, /*String*/ObjectID) {
        try{
            return UTF8ToString(_NativeIProjectTree81_SaveAsKml(this.getInstanceHandle,/*String*/allocateUTF8(String(KmlName)),/*String*/allocateUTF8(String(ObjectID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SelectItem(/*String*/ID, /*Int32*/Flags=0, /*Int32*/Reserved=0) {
        try{
            _NativeIProjectTree81_SelectItem(this.getInstanceHandle,/*String*/allocateUTF8(String(ID)),/*Int32*/Flags,/*Int32*/Reserved);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetActivationCode(/*String*/GroupID, /*ActionCode*/ACode, /*Int32*/ActivationParam=-1) {
        try{
            _NativeIProjectTree81_SetActivationCode(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*ActionCode*/ACode,/*Int32*/ActivationParam);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetClientData(/*String*/ID, /*String*/Namespace, /*String*/ClientData) {
        try{
            _NativeIProjectTree81_SetClientData(this.getInstanceHandle,/*String*/allocateUTF8(String(ID)),/*String*/allocateUTF8(String(Namespace)),/*String*/allocateUTF8(String(ClientData)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetGroupEndTime(/*String*/GroupID, /*Object*/newVal) {
        try{
            _NativeIProjectTree81_SetGroupEndTime(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*Object*/Emval.toHandle(newVal));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetGroupLocation(/*String*/GroupID, /*Object*/newVal) {
        try{
            _NativeIProjectTree81_SetGroupLocation(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*Object*/Emval.toHandle(newVal));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetGroupMessageID(/*String*/GroupID, /*String*/MessageID) {
        try{
            _NativeIProjectTree81_SetGroupMessageID(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(MessageID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetGroupStartTime(/*String*/GroupID, /*Object*/newVal) {
        try{
            _NativeIProjectTree81_SetGroupStartTime(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*Object*/Emval.toHandle(newVal));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetParent(/*String*/ID, /*String*/ParentGroupID) {
        try{
            _NativeIProjectTree81_SetParent(this.getInstanceHandle,/*String*/allocateUTF8(String(ID)),/*String*/allocateUTF8(String(ParentGroupID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetRadioGroup(/*String*/GroupID, /*Boolean*/bRadio) {
        try{
            _NativeIProjectTree81_SetRadioGroup(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*Boolean*/bRadio);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetSaveInFlyFile(/*String*/ID, /*Boolean*/bSaveInFlyFile) {
        try{
            _NativeIProjectTree81_SetSaveInFlyFile(this.getInstanceHandle,/*String*/allocateUTF8(String(ID)),/*Boolean*/bSaveInFlyFile);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetVisibility(/*String*/ID, /*Boolean*/bShow) {
        try{
            _NativeIProjectTree81_SetVisibility(this.getInstanceHandle,/*String*/allocateUTF8(String(ID)),/*Boolean*/bShow);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ShowSubTree(/*String*/GroupID, /*Int32*/Flags) {
        try{
            _NativeIProjectTree81_ShowSubTree(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*Int32*/Flags);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SortGroup(/*String*/GroupID, /*SortType*/SType=SortType81.SORT_ALPHABETICALLY_AZ) {
        try{
            _NativeIProjectTree81_SortGroup(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*SortType*/SType);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IWindow81 extends TEIUnknownHandle81 {
    get Cursor(){
        try{
            return UTF8ToString(_NativeIWindow81_get_Cursor(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Cursor(/*String*/cursorURL){
            try{
                _NativeIWindow81_put_Cursor(this.getInstanceHandle,/*String*/allocateUTF8(String(cursorURL))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DisablePresentationControl(){
        try{
            return _NativeIWindow81_get_DisablePresentationControl(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DisablePresentationControl(/*Boolean*/pVal){
            try{
                _NativeIWindow81_put_DisablePresentationControl(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Rect(){
        try{
            return ((nativeHandle) => nativeHandle ? new IScreenRect81(nativeHandle) : null)(_NativeIWindow81_get_Rect(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    CenterPixelToWorld(/*WorldPointType*/TypeFilterFlags=WorldPointType81.WPT_DEFAULT) {
        try{
            return ((nativeHandle) => nativeHandle ? new IWorldPointInfo81(nativeHandle) : null)(_NativeIWindow81_CenterPixelToWorld(this.getInstanceHandle,/*WorldPointType*/TypeFilterFlags));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetControls() {
        try{
            return _NativeIWindow81_GetControls(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetInputMode() {
        try{
            return _NativeIWindow81_GetInputMode(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetMouseInfo() {
        try{
            return ((nativeHandle) => nativeHandle ? new IMouseInfo81(nativeHandle) : null)(_NativeIWindow81_GetMouseInfo(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetPopupByCaption(/*String*/PopupCaption) {
        try{
            return ((nativeHandle) => nativeHandle ? new IPopupMessage81(nativeHandle) : null)(_NativeIWindow81_GetPopupByCaption(this.getInstanceHandle,/*String*/allocateUTF8(String(PopupCaption))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetPopups() {
        try{
            return EmvalToJS(Emval.toValue(_NativeIWindow81_GetPopups(this.getInstanceHandle)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetSnapShot(/*Boolean*/toFile=false, /*Int32*/Width=0, /*Int32*/Height=0, /*String*/Format="", /*Int32*/TerrainQuality=0) {
        try{
            return UTF8ToString(_NativeIWindow81_GetSnapShot(this.getInstanceHandle,/*Boolean*/toFile,/*Int32*/Width,/*Int32*/Height,/*String*/allocateUTF8(String(Format)),/*Int32*/TerrainQuality));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    HideMessageBarText() {
        try{
            _NativeIWindow81_HideMessageBarText(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    PixelFromWorld(/*IPosition81*/Position, /*PixelFromWorldMode*/Mode=PixelFromWorldMode81.PFW_IGNORE_Z_BUFFER) {
        try{
            return ((nativeHandle) => nativeHandle ? new IScreenPointInfo81(nativeHandle) : null)(_NativeIWindow81_PixelFromWorld(this.getInstanceHandle,/*IPosition81*/Position.getInstanceHandle,/*PixelFromWorldMode*/Mode));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    PixelToObjects(/*Int32*/PixelX, /*Int32*/PixelY, /*WorldPointType*/TypeFilterFlags=WorldPointType81.WPT_DEFAULT) {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerraExplorerObjects81(nativeHandle) : null)(_NativeIWindow81_PixelToObjects(this.getInstanceHandle,/*Int32*/PixelX,/*Int32*/PixelY,/*WorldPointType*/TypeFilterFlags));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    PixelToWorld(/*Int32*/PixelX, /*Int32*/PixelY, /*WorldPointType*/TypeFilterFlags=WorldPointType81.WPT_DEFAULT) {
        try{
            return ((nativeHandle) => nativeHandle ? new IWorldPointInfo81(nativeHandle) : null)(_NativeIWindow81_PixelToWorld(this.getInstanceHandle,/*Int32*/PixelX,/*Int32*/PixelY,/*WorldPointType*/TypeFilterFlags));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    RemovePopup(/*IPopupMessage81*/popup) {
        try{
            _NativeIWindow81_RemovePopup(this.getInstanceHandle,/*IPopupMessage81*/popup.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    RemovePopupByCaption(/*String*/PopupCaption) {
        try{
            _NativeIWindow81_RemovePopupByCaption(this.getInstanceHandle,/*String*/allocateUTF8(String(PopupCaption)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetInputMode(/*MouseInputMode*/InputMode, /*String*/cursorURL="", /*Boolean*/AllowDrag=false) {
        try{
            _NativeIWindow81_SetInputMode(this.getInstanceHandle,/*MouseInputMode*/InputMode,/*String*/allocateUTF8(String(cursorURL)),/*Boolean*/AllowDrag);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ShowControls(/*Int32*/controlFlags) {
        try{
            _NativeIWindow81_ShowControls(this.getInstanceHandle,/*Int32*/controlFlags);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ShowMessageBarText(/*String*/Text, /*MessageBarTextAlignment*/Alignment=MessageBarTextAlignment81.MBT_CENTER, /*Int32*/Timeout=5000) {
        try{
            _NativeIWindow81_ShowMessageBarText(this.getInstanceHandle,/*String*/allocateUTF8(String(Text)),/*MessageBarTextAlignment*/Alignment,/*Int32*/Timeout);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ShowPopup(/*IPopupMessage81*/popup) {
        try{
            _NativeIWindow81_ShowPopup(this.getInstanceHandle,/*IPopupMessage81*/popup.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ITerrain81 extends TEIUnknownHandle81 {
    get CoordinateSystem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ICoordinateSystem81(nativeHandle) : null)(_NativeITerrain81_get_CoordinateSystem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set CoordinateSystem(/*ICoordinateSystem81*/pVal){
            try{
                _NativeITerrain81_put_CoordinateSystem(this.getInstanceHandle,/*ICoordinateSystem81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Name(){
        try{
            return UTF8ToString(_NativeITerrain81_get_Name(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Levels(){
        try{
            return _NativeITerrain81_get_Levels(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get BestLevelWidth(){
        try{
            return _NativeITerrain81_get_BestLevelWidth(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get BestMPP(){
        try{
            return _NativeITerrain81_get_BestMPP(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Description(){
        try{
            return UTF8ToString(_NativeITerrain81_get_Description(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Left(){
        try{
            return _NativeITerrain81_get_Left(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Top(){
        try{
            return _NativeITerrain81_get_Top(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Right(){
        try{
            return _NativeITerrain81_get_Right(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Bottom(){
        try{
            return _NativeITerrain81_get_Bottom(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Opacity(){
        try{
            return _NativeITerrain81_get_Opacity(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Opacity(/*Double*/Opacity){
            try{
                _NativeITerrain81_put_Opacity(this.getInstanceHandle,/*Double*/Opacity); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get StreamQuality(){
        try{
            return _NativeITerrain81_get_StreamQuality(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    GetGroundHeightInfo(/*Double*/X, /*Double*/Y, /*AccuracyLevel*/Level, /*Boolean*/IncludeGroundObject=true) {
        try{
            return ((nativeHandle) => nativeHandle ? new IWorldPointInfo81(nativeHandle) : null)(_NativeITerrain81_GetGroundHeightInfo(this.getInstanceHandle,/*Double*/X,/*Double*/Y,/*AccuracyLevel*/Level,/*Boolean*/IncludeGroundObject));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ILicenseManager81 extends TEIUnknownHandle81 {
    GetAttribute(/*String*/Module, /*String*/AttributeName) {
        try{
            return UTF8ToString(_NativeILicenseManager81_GetAttribute(this.getInstanceHandle,/*String*/allocateUTF8(String(Module)),/*String*/allocateUTF8(String(AttributeName))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetModuleInfo(/*String*/Module) {
        try{
            return ((nativeHandle) => nativeHandle ? new IModuleLicenseInfo81(nativeHandle) : null)(_NativeILicenseManager81_GetModuleInfo(this.getInstanceHandle,/*String*/allocateUTF8(String(Module))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetPermission(/*Int32*/PermissionCode, /*Object*/parameters) {
        try{
            return _NativeILicenseManager81_GetPermission(this.getInstanceHandle,/*Int32*/PermissionCode,/*Object*/Emval.toHandle(parameters));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetClientID(/*String*/Module, /*String*/ClientID) {
        try{
            _NativeILicenseManager81_SetClientID(this.getInstanceHandle,/*String*/allocateUTF8(String(Module)),/*String*/allocateUTF8(String(ClientID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ICoordServices81 extends TEIUnknownHandle81 {
    get SourceCoordinateSystem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ICoordinateSystem81(nativeHandle) : null)(_NativeICoordServices81_get_SourceCoordinateSystem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set SourceCoordinateSystem(/*ICoordinateSystem81*/pVal){
            try{
                _NativeICoordServices81_put_SourceCoordinateSystem(this.getInstanceHandle,/*ICoordinateSystem81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ShiftGridURL(){
        try{
            return UTF8ToString(_NativeICoordServices81_get_ShiftGridURL(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ShiftGridURL(/*String*/pVal){
            try{
                _NativeICoordServices81_put_ShiftGridURL(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    ChooseCSDialog(/*String*/Title, /*String*/WellKnownText) {
        try{
            return UTF8ToString(_NativeICoordServices81_ChooseCSDialog(this.getInstanceHandle,/*String*/allocateUTF8(String(Title)),/*String*/allocateUTF8(String(WellKnownText))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ConvertCoordinateToMGRS(/*Double*/X, /*Double*/Y) {
        try{
            return UTF8ToString(_NativeICoordServices81_ConvertCoordinateToMGRS(this.getInstanceHandle,/*Double*/X,/*Double*/Y));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ConvertMGRSToCoordinate(/*String*/bstrMGRS) {
        try{
            return ((nativeHandle) => nativeHandle ? new ICoord2D81(nativeHandle) : null)(_NativeICoordServices81_ConvertMGRSToCoordinate(this.getInstanceHandle,/*String*/allocateUTF8(String(bstrMGRS))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateCoordinateSystem(/*String*/WellKnownText) {
        try{
            return ((nativeHandle) => nativeHandle ? new ICoordinateSystem81(nativeHandle) : null)(_NativeICoordServices81_CreateCoordinateSystem(this.getInstanceHandle,/*String*/allocateUTF8(String(WellKnownText))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetAimingAngles(/*IPosition81*/From, /*IPosition81*/To) {
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeICoordServices81_GetAimingAngles(this.getInstanceHandle,/*IPosition81*/From.getInstanceHandle,/*IPosition81*/To.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetDistance(/*Double*/X1, /*Double*/Y1, /*Double*/X2, /*Double*/Y2) {
        try{
            return _NativeICoordServices81_GetDistance(this.getInstanceHandle,/*Double*/X1,/*Double*/Y1,/*Double*/X2,/*Double*/Y2);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetDistance3D(/*IPosition81*/From, /*IPosition81*/To) {
        try{
            return _NativeICoordServices81_GetDistance3D(this.getInstanceHandle,/*IPosition81*/From.getInstanceHandle,/*IPosition81*/To.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetParam(/*Int32*/Code) {
        try{
            return EmvalToJS(Emval.toValue(_NativeICoordServices81_GetParam(this.getInstanceHandle,/*Int32*/Code)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    MoveCoord(/*Double*/X, /*Double*/Y, /*Double*/moveWestEast, /*Double*/moveSouthNorth) {
        try{
            return ((nativeHandle) => nativeHandle ? new ICoord2D81(nativeHandle) : null)(_NativeICoordServices81_MoveCoord(this.getInstanceHandle,/*Double*/X,/*Double*/Y,/*Double*/moveWestEast,/*Double*/moveSouthNorth));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Reproject(/*ICoordinateSystem81*/From, /*ICoordinateSystem81*/To, /*Double*/X, /*Double*/Y) {
        try{
            return ((nativeHandle) => nativeHandle ? new ICoord2D81(nativeHandle) : null)(_NativeICoordServices81_Reproject(this.getInstanceHandle,/*ICoordinateSystem81*/From.getInstanceHandle,/*ICoordinateSystem81*/To.getInstanceHandle,/*Double*/X,/*Double*/Y));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ReprojectEx(/*ICoordinateSystem81*/From, /*ICoordinateSystem81*/To, /*Double*/X, /*Double*/Y, /*Double*/Z) {
        try{
            return ((nativeHandle) => nativeHandle ? new ICoord3D81(nativeHandle) : null)(_NativeICoordServices81_ReprojectEx(this.getInstanceHandle,/*ICoordinateSystem81*/From.getInstanceHandle,/*ICoordinateSystem81*/To.getInstanceHandle,/*Double*/X,/*Double*/Y,/*Double*/Z));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetParam(/*Int32*/Code, /*Object*/Param) {
        try{
            _NativeICoordServices81_SetParam(this.getInstanceHandle,/*Int32*/Code,/*Object*/Emval.toHandle(Param));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IDateTime81 extends TEIUnknownHandle81 {
    get TimeZoneMode(){
        try{
            return _NativeIDateTime81_get_TimeZoneMode(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TimeZoneMode(/*TimeZoneType*/pVal){
            try{
                _NativeIDateTime81_put_TimeZoneMode(this.getInstanceHandle,/*TimeZoneType*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DisplaySun(){
        try{
            return _NativeIDateTime81_get_DisplaySun(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DisplaySun(/*Boolean*/pVal){
            try{
                _NativeIDateTime81_put_DisplaySun(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Current(){
        try{
            return EmvalToJS(Emval.toValue(_NativeIDateTime81_get_Current(this.getInstanceHandle))); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Current(/*Object*/pVal){
            try{
                _NativeIDateTime81_put_Current(this.getInstanceHandle,/*Object*/Emval.toHandle(pVal)); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get CurrentTimeBuffer(){
        try{
            return _NativeIDateTime81_get_CurrentTimeBuffer(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set CurrentTimeBuffer(/*Int32*/pSeconds){
            try{
                _NativeIDateTime81_put_CurrentTimeBuffer(this.getInstanceHandle,/*Int32*/pSeconds); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FixedLocalTime(){
        try{
            return EmvalToJS(Emval.toValue(_NativeIDateTime81_get_FixedLocalTime(this.getInstanceHandle))); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FixedLocalTime(/*Object*/pVal){
            try{
                _NativeIDateTime81_put_FixedLocalTime(this.getInstanceHandle,/*Object*/Emval.toHandle(pVal)); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TimeRangeStart(){
        try{
            return EmvalToJS(Emval.toValue(_NativeIDateTime81_get_TimeRangeStart(this.getInstanceHandle))); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TimeRangeStart(/*Object*/pVal){
            try{
                _NativeIDateTime81_put_TimeRangeStart(this.getInstanceHandle,/*Object*/Emval.toHandle(pVal)); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TimeRangeEnd(){
        try{
            return EmvalToJS(Emval.toValue(_NativeIDateTime81_get_TimeRangeEnd(this.getInstanceHandle))); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TimeRangeEnd(/*Object*/pVal){
            try{
                _NativeIDateTime81_put_TimeRangeEnd(this.getInstanceHandle,/*Object*/Emval.toHandle(pVal)); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TimeZoneKey(){
        try{
            return UTF8ToString(_NativeIDateTime81_get_TimeZoneKey(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TimeZoneKey(/*String*/pVal){
            try{
                _NativeIDateTime81_put_TimeZoneKey(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TimeZoneDisplayName(){
        try{
            return UTF8ToString(_NativeIDateTime81_get_TimeZoneDisplayName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeZonesXML(){
        try{
            return UTF8ToString(_NativeIDateTime81_get_TimeZonesXML(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    SetMode(/*SliderDisplayMode*/Mode) {
        try{
            _NativeIDateTime81_SetMode(this.getInstanceHandle,/*SliderDisplayMode*/Mode);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ITEVersionInfo81 extends TEIUnknownHandle81 {
    get Major(){
        try{
            return _NativeITEVersionInfo81_get_Major(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Minor(){
        try{
            return _NativeITEVersionInfo81_get_Minor(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Build(){
        try{
            return _NativeITEVersionInfo81_get_Build(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Freeze(){
        try{
            return _NativeITEVersionInfo81_get_Freeze(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Type(){
        try{
            return _NativeITEVersionInfo81_get_Type(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IApplication81 extends TEIUnknownHandle81 {
    get Containers(){
        try{
            return ((nativeHandle) => nativeHandle ? new Proxy(new IContainers81(nativeHandle),get_Item_Handler) : null)(_NativeIApplication81_get_Containers(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get CPUSaveMode(){
        try{
            return _NativeIApplication81_get_CPUSaveMode(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set CPUSaveMode(/*Boolean*/pVal){
            try{
                _NativeIApplication81_put_CPUSaveMode(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get SuppressUIErrors(){
        try{
            return _NativeIApplication81_get_SuppressUIErrors(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set SuppressUIErrors(/*Boolean*/pVal){
            try{
                _NativeIApplication81_put_SuppressUIErrors(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DataPath(){
        try{
            return UTF8ToString(_NativeIApplication81_get_DataPath(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ExecutablePath(){
        try{
            return UTF8ToString(_NativeIApplication81_get_ExecutablePath(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get EnableJoystick(){
        try{
            return _NativeIApplication81_get_EnableJoystick(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set EnableJoystick(/*Boolean*/pVal){
            try{
                _NativeIApplication81_put_EnableJoystick(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Multiple3DWindows(){
        try{
            return ((nativeHandle) => nativeHandle ? new IMultiple3DWindows81(nativeHandle) : null)(_NativeIApplication81_get_Multiple3DWindows(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Clipboard(){
        try{
            return ((nativeHandle) => nativeHandle ? new Proxy(new IClipboard81(nativeHandle),get_Item_Handler) : null)(_NativeIApplication81_get_Clipboard(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Selection(){
        try{
            return ((nativeHandle) => nativeHandle ? new Proxy(new ISelection81(nativeHandle),get_Item_Handler) : null)(_NativeIApplication81_get_Selection(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TargetFrameRate(){
        try{
            return _NativeIApplication81_get_TargetFrameRate(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TargetFrameRate(/*Int32*/pVal){
            try{
                _NativeIApplication81_put_TargetFrameRate(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Caption(){
        try{
            return UTF8ToString(_NativeIApplication81_get_Caption(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Caption(/*String*/pVal){
            try{
                _NativeIApplication81_put_Caption(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FullScreen(){
        try{
            return _NativeIApplication81_get_FullScreen(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FullScreen(/*FullScreenMode*/pVal){
            try{
                _NativeIApplication81_put_FullScreen(this.getInstanceHandle,/*FullScreenMode*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    OpenFileDialog(/*Boolean*/Folder=false, /*String*/Filter="") {
        try{
            return UTF8ToString(_NativeIApplication81_OpenFileDialog(this.getInstanceHandle,/*Boolean*/Folder,/*String*/allocateUTF8(String(Filter))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Search(/*String*/stringToSearch) {
        try{
            _NativeIApplication81_Search(this.getInstanceHandle,/*String*/allocateUTF8(String(stringToSearch)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ICommand81 extends TEIUnknownHandle81 {
    CanExecute(/*Int32*/CommandID, /*Object*/parameter=0) {
        try{
            return _NativeICommand81_CanExecute(this.getInstanceHandle,/*Int32*/CommandID,/*Object*/Emval.toHandle(parameter))== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Execute(/*Int32*/CommandID, /*Object*/parameters=0) {
        try{
            _NativeICommand81_Execute(this.getInstanceHandle,/*Int32*/CommandID,/*Object*/Emval.toHandle(parameters));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetValue(/*Int32*/CommandID) {
        try{
            return EmvalToJS(Emval.toValue(_NativeICommand81_GetValue(this.getInstanceHandle,/*Int32*/CommandID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsChecked(/*Int32*/CommandID, /*Object*/parameters=0) {
        try{
            return _NativeICommand81_IsChecked(this.getInstanceHandle,/*Int32*/CommandID,/*Object*/Emval.toHandle(parameters))== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IAnalysis81 extends TEIUnknownHandle81 {
    Create3DViewshed(/*IPosition81*/ViewerPosition, /*Double*/FieldOfViewX, /*Double*/FieldOfViewY, /*Double*/Distance, /*String*/ParentGroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new I3DViewshed81(nativeHandle) : null)(_NativeIAnalysis81_Create3DViewshed(this.getInstanceHandle,/*IPosition81*/ViewerPosition.getInstanceHandle,/*Double*/FieldOfViewX,/*Double*/FieldOfViewY,/*Double*/Distance,/*String*/allocateUTF8(String(ParentGroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateContourMap(/*Double*/UpperLeftX, /*Double*/UpperLeftY, /*Double*/LowerRightX, /*Double*/LowerRightY, /*ContourDisplayStyle*/DisplayStyle=ContourDisplayStyle81.CDS_CONTOUR_STYLE_COLORS, /*String*/PaletteID="", /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new IContourMap81(nativeHandle) : null)(_NativeIAnalysis81_CreateContourMap(this.getInstanceHandle,/*Double*/UpperLeftX,/*Double*/UpperLeftY,/*Double*/LowerRightX,/*Double*/LowerRightY,/*ContourDisplayStyle*/DisplayStyle,/*String*/allocateUTF8(String(PaletteID)),/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateFloodContinuousWaterRise(/*Double*/OriginX, /*Double*/OriginY, /*Double*/Radius, /*Double*/WaterRiseRate, /*Double*/SampleInterval, /*Double*/TimeSampleIntervalHours, /*Object*/StartTime, /*Object*/EndTime, /*String*/ParentGroupID="", /*String*/Description="") {
        try{
            return UTF8ToString(_NativeIAnalysis81_CreateFloodContinuousWaterRise(this.getInstanceHandle,/*Double*/OriginX,/*Double*/OriginY,/*Double*/Radius,/*Double*/WaterRiseRate,/*Double*/SampleInterval,/*Double*/TimeSampleIntervalHours,/*Object*/Emval.toHandle(StartTime),/*Object*/Emval.toHandle(EndTime),/*String*/allocateUTF8(String(ParentGroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateFloodSingleWaterRise(/*Double*/OriginX, /*Double*/OriginY, /*Double*/Radius, /*Double*/TotalWaterLevelRaise, /*Double*/SampleInterval, /*String*/ParentGroupID="", /*String*/Description="") {
        try{
            return UTF8ToString(_NativeIAnalysis81_CreateFloodSingleWaterRise(this.getInstanceHandle,/*Double*/OriginX,/*Double*/OriginY,/*Double*/Radius,/*Double*/TotalWaterLevelRaise,/*Double*/SampleInterval,/*String*/allocateUTF8(String(ParentGroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateLineOfSight(/*IPosition81*/ViewerPosition, /*Double*/SampleInterval, /*Object*/arrTargetPosition, /*String*/ParentGroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ILineOfSight81(nativeHandle) : null)(_NativeIAnalysis81_CreateLineOfSight(this.getInstanceHandle,/*IPosition81*/ViewerPosition.getInstanceHandle,/*Double*/SampleInterval,/*Object*/Emval.toHandle(arrTargetPosition),/*String*/allocateUTF8(String(ParentGroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateSlopeMap(/*Double*/UpperLeftX, /*Double*/UpperLeftY, /*Double*/LowerRightX, /*Double*/LowerRightY, /*SlopeDisplayStyle*/DisplayStyle=SlopeDisplayStyle81.SDS_SLOPE_STYLE_COLORS, /*String*/PaletteID="", /*String*/GroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ISlopeMap81(nativeHandle) : null)(_NativeIAnalysis81_CreateSlopeMap(this.getInstanceHandle,/*Double*/UpperLeftX,/*Double*/UpperLeftY,/*Double*/LowerRightX,/*Double*/LowerRightY,/*SlopeDisplayStyle*/DisplayStyle,/*String*/allocateUTF8(String(PaletteID)),/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateThreatDome(/*IPosition81*/Position, /*Double*/Range, /*Double*/AngularStep, /*Double*/RadialStep, /*Double*/Direction, /*Double*/HorizontalFOV, /*Double*/ElevationAngle, /*Object*/Color=-16711936, /*String*/ParentGroupID="", /*String*/Description="") {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainThreatDome81(nativeHandle) : null)(_NativeIAnalysis81_CreateThreatDome(this.getInstanceHandle,/*IPosition81*/Position.getInstanceHandle,/*Double*/Range,/*Double*/AngularStep,/*Double*/RadialStep,/*Double*/Direction,/*Double*/HorizontalFOV,/*Double*/ElevationAngle,/*Object*/Emval.toHandle(Color),/*String*/allocateUTF8(String(ParentGroupID)),/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateViewshed(/*IPosition81*/ViewerPosition, /*Double*/FieldOfView, /*Double*/SampleInterval, /*Double*/RaySpacing, /*Double*/TargetHeightAboveGround, /*Object*/TimeStart, /*Object*/TimeEnd, /*String*/ParentGroupID="", /*String*/Description="") {
        try{
            return UTF8ToString(_NativeIAnalysis81_CreateViewshed(this.getInstanceHandle,/*IPosition81*/ViewerPosition.getInstanceHandle,/*Double*/FieldOfView,/*Double*/SampleInterval,/*Double*/RaySpacing,/*Double*/TargetHeightAboveGround,/*Object*/Emval.toHandle(TimeStart),/*Object*/Emval.toHandle(TimeEnd),/*String*/allocateUTF8(String(ParentGroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateViewshedOnRoute(/*ILineString*/Route, /*MultipleViewshedAnalysisType*/AnalysisType, /*Double*/ViewerHeight, /*Double*/Distance, /*Double*/SampleInterval, /*Double*/RaySpacing, /*Double*/DistanceBetweenWaypoints, /*Object*/TimeStart, /*Object*/TimeEnd, /*String*/ParentGroupID="", /*String*/Description="") {
        try{
            return UTF8ToString(_NativeIAnalysis81_CreateViewshedOnRoute(this.getInstanceHandle,/*ILineString*/Route.getInstanceHandle,/*MultipleViewshedAnalysisType*/AnalysisType,/*Double*/ViewerHeight,/*Double*/Distance,/*Double*/SampleInterval,/*Double*/RaySpacing,/*Double*/DistanceBetweenWaypoints,/*Object*/Emval.toHandle(TimeStart),/*Object*/Emval.toHandle(TimeEnd),/*String*/allocateUTF8(String(ParentGroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    EndVisibilityQuery() {
        try{
            _NativeIAnalysis81_EndVisibilityQuery(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    HideCompareBox() {
        try{
            _NativeIAnalysis81_HideCompareBox(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    HideCrossSectionBox() {
        try{
            _NativeIAnalysis81_HideCrossSectionBox(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    MeasureTerrainArea(/*IGeometry*/pIGeometry) {
        try{
            return _NativeIAnalysis81_MeasureTerrainArea(this.getInstanceHandle,/*IGeometry*/pIGeometry.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    MeasureTerrainGroundDistance(/*IGeometry*/pIGeometry, /*Double*/SampleInterval, /*Boolean*/IncludeGroundObjects=false) {
        try{
            return _NativeIAnalysis81_MeasureTerrainGroundDistance(this.getInstanceHandle,/*IGeometry*/pIGeometry.getInstanceHandle,/*Double*/SampleInterval,/*Boolean*/IncludeGroundObjects);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    MeasureTerrainPerimeter(/*IGeometry*/pIGeometry) {
        try{
            return _NativeIAnalysis81_MeasureTerrainPerimeter(this.getInstanceHandle,/*IGeometry*/pIGeometry.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    MeasureTerrainProfile(/*IGeometry*/KeyPoints, /*Double*/SampleInterval, /*Boolean*/IncludeGroundObjects=false) {
        try{
            return ((nativeHandle) => nativeHandle ? GetIGeometry81Derived(nativeHandle) : null)(_NativeIAnalysis81_MeasureTerrainProfile(this.getInstanceHandle,/*IGeometry*/KeyPoints.getInstanceHandle,/*Double*/SampleInterval,/*Boolean*/IncludeGroundObjects));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    MeasureTerrainSurface(/*IGeometry*/pIGeometry, /*Double*/SampleInterval) {
        try{
            return _NativeIAnalysis81_MeasureTerrainSurface(this.getInstanceHandle,/*IGeometry*/pIGeometry.getInstanceHandle,/*Double*/SampleInterval);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    MeasureTerrainSurfacePerimeter(/*IGeometry*/pIGeometry, /*Double*/SampleInterval) {
        try{
            return _NativeIAnalysis81_MeasureTerrainSurfacePerimeter(this.getInstanceHandle,/*IGeometry*/pIGeometry.getInstanceHandle,/*Double*/SampleInterval);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    QueryElevationBuffer(/*Double*/UpperLeftX, /*Double*/UpperLeftY, /*Double*/ResX, /*Double*/ResY, /*Int32*/DimensionX, /*Int32*/DimensionY) {
        try{
            return EmvalToJS(Emval.toValue(_NativeIAnalysis81_QueryElevationBuffer(this.getInstanceHandle,/*Double*/UpperLeftX,/*Double*/UpperLeftY,/*Double*/ResX,/*Double*/ResY,/*Int32*/DimensionX,/*Int32*/DimensionY)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    QueryElevationBufferAsync(/*Double*/UpperLeftX, /*Double*/UpperLeftY, /*Double*/ResX, /*Double*/ResY, /*Int32*/DimensionX, /*Int32*/DimensionY) {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerraExplorerAsync81(nativeHandle) : null)(_NativeIAnalysis81_QueryElevationBufferAsync(this.getInstanceHandle,/*Double*/UpperLeftX,/*Double*/UpperLeftY,/*Double*/ResX,/*Double*/ResY,/*Int32*/DimensionX,/*Int32*/DimensionY));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    QueryPointsVisibility(/*Object*/inXYZArray) {
        try{
            return EmvalToJS(Emval.toValue(_NativeIAnalysis81_QueryPointsVisibility(this.getInstanceHandle,/*Object*/Emval.toHandle(inXYZArray))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    QueryPointVisibility(/*IPosition81*/QueryPosition) {
        try{
            return _NativeIAnalysis81_QueryPointVisibility(this.getInstanceHandle,/*IPosition81*/QueryPosition.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    QueryVisibilityDistance(/*IPosition81*/QueryPosition) {
        try{
            return _NativeIAnalysis81_QueryVisibilityDistance(this.getInstanceHandle,/*IPosition81*/QueryPosition.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetCompareGroup(/*String*/ID, /*CompareGroup*/Group) {
        try{
            _NativeIAnalysis81_SetCompareGroup(this.getInstanceHandle,/*String*/allocateUTF8(String(ID)),/*CompareGroup*/Group);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ShowCompareBox(/*ILineString*/Box, /*Boolean*/ShowIn, /*Object*/Color) {
        try{
            _NativeIAnalysis81_ShowCompareBox(this.getInstanceHandle,/*ILineString*/Box.getInstanceHandle,/*Boolean*/ShowIn,/*Object*/Emval.toHandle(Color));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ShowCrossSectionBox(/*ILineString*/Box, /*Boolean*/ShowIn, /*Object*/Color) {
        try{
            _NativeIAnalysis81_ShowCrossSectionBox(this.getInstanceHandle,/*ILineString*/Box.getInstanceHandle,/*Boolean*/ShowIn,/*Object*/Emval.toHandle(Color));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    StartShadowVisibilityQuery(/*IPosition81*/QuerySpherePosition, /*Double*/QuerySphereRadius, /*ShadowType*/Type) {
        try{
            _NativeIAnalysis81_StartShadowVisibilityQuery(this.getInstanceHandle,/*IPosition81*/QuerySpherePosition.getInstanceHandle,/*Double*/QuerySphereRadius,/*ShadowType*/Type);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    StartViewshedVisibilityQuery(/*String*/ViewshedID, /*ViewshedQuality*/Quality=ViewshedQuality81.VSQ_QUALITY_HIGH) {
        try{
            _NativeIAnalysis81_StartViewshedVisibilityQuery(this.getInstanceHandle,/*String*/allocateUTF8(String(ViewshedID)),/*ViewshedQuality*/Quality);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    StartViewshedVisibilityQueryAsync(/*String*/ViewshedID, /*ViewshedQuality*/Quality=ViewshedQuality81.VSQ_QUALITY_HIGH) {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerraExplorerAsync81(nativeHandle) : null)(_NativeIAnalysis81_StartViewshedVisibilityQueryAsync(this.getInstanceHandle,/*String*/allocateUTF8(String(ViewshedID)),/*ViewshedQuality*/Quality));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ISGServer81 extends TEIUnknownHandle81 {
    Connect(/*String*/URL, /*String*/UserName, /*String*/Password, /*Boolean*/bRememberMe=false) {
        try{
            _NativeISGServer81_Connect(this.getInstanceHandle,/*String*/allocateUTF8(String(URL)),/*String*/allocateUTF8(String(UserName)),/*String*/allocateUTF8(String(Password)),/*Boolean*/bRememberMe);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ConnectAsync(/*String*/URL, /*String*/UserName, /*String*/Password, /*Boolean*/bRememberMe=false) {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerraExplorerAsync81(nativeHandle) : null)(_NativeISGServer81_ConnectAsync(this.getInstanceHandle,/*String*/allocateUTF8(String(URL)),/*String*/allocateUTF8(String(UserName)),/*String*/allocateUTF8(String(Password)),/*Boolean*/bRememberMe));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ConnectByCookie(/*String*/URL, /*String*/sCookie, /*Boolean*/bRememberMe=false) {
        try{
            _NativeISGServer81_ConnectByCookie(this.getInstanceHandle,/*String*/allocateUTF8(String(URL)),/*String*/allocateUTF8(String(sCookie)),/*Boolean*/bRememberMe);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ConnectByCookieAsync(/*String*/URL, /*String*/sCookie, /*Boolean*/bRememberMe=false) {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerraExplorerAsync81(nativeHandle) : null)(_NativeISGServer81_ConnectByCookieAsync(this.getInstanceHandle,/*String*/allocateUTF8(String(URL)),/*String*/allocateUTF8(String(sCookie)),/*Boolean*/bRememberMe));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Disconnect() {
        try{
            _NativeISGServer81_Disconnect(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DisconnectAsync() {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerraExplorerAsync81(nativeHandle) : null)(_NativeISGServer81_DisconnectAsync(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetConnectedServer() {
        try{
            return UTF8ToString(_NativeISGServer81_GetConnectedServer(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetConnectedUser() {
        try{
            return UTF8ToString(_NativeISGServer81_GetConnectedUser(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetParam(/*Int32*/Code) {
        try{
            return EmvalToJS(Emval.toValue(_NativeISGServer81_GetParam(this.getInstanceHandle,/*Int32*/Code)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetUserDisplayName() {
        try{
            return UTF8ToString(_NativeISGServer81_GetUserDisplayName(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetVersion() {
        try{
            return UTF8ToString(_NativeISGServer81_GetVersion(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    HasPublishPermissionAsync() {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerraExplorerAsync81(nativeHandle) : null)(_NativeISGServer81_HasPublishPermissionAsync(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsLayerOwnerAsync(/*String*/URL) {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerraExplorerAsync81(nativeHandle) : null)(_NativeISGServer81_IsLayerOwnerAsync(this.getInstanceHandle,/*String*/allocateUTF8(String(URL))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsTokenLoggedIn(/*String*/Token) {
        try{
            return _NativeISGServer81_IsTokenLoggedIn(this.getInstanceHandle,/*String*/allocateUTF8(String(Token)))== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Reconnect() {
        try{
            _NativeISGServer81_Reconnect(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ReconnectAsync() {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerraExplorerAsync81(nativeHandle) : null)(_NativeISGServer81_ReconnectAsync(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetParam(/*Int32*/Code, /*Object*/Param) {
        try{
            _NativeISGServer81_SetParam(this.getInstanceHandle,/*Int32*/Code,/*Object*/Emval.toHandle(Param));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IAction81 extends TEIUnknownHandle81 {
    get Code(){
        try{
            return _NativeIAction81_get_Code(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Code(/*ActionCode*/pVal){
            try{
                _NativeIAction81_put_Code(this.getInstanceHandle,/*ActionCode*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Param(){
        try{
            return EmvalToJS(Emval.toValue(_NativeIAction81_get_Param(this.getInstanceHandle))); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Param(/*Object*/pVal){
            try{
                _NativeIAction81_put_Param(this.getInstanceHandle,/*Object*/Emval.toHandle(pVal)); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class IContainerItem81 extends TEIUnknownHandle81 {
    get ItemID(){
        try{
            return _NativeIContainerItem81_get_ItemID(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Name(){
        try{
            return UTF8ToString(_NativeIContainerItem81_get_Name(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Name(/*String*/pVal){
            try{
                _NativeIContainerItem81_put_Name(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get URL(){
        try{
            return UTF8ToString(_NativeIContainerItem81_get_URL(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set URL(/*String*/pVal){
            try{
                _NativeIContainerItem81_put_URL(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Text(){
        try{
            return UTF8ToString(_NativeIContainerItem81_get_Text(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Text(/*String*/pVal){
            try{
                _NativeIContainerItem81_put_Text(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get UseURL(){
        try{
            return _NativeIContainerItem81_get_UseURL(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set UseURL(/*Boolean*/pVal){
            try{
                _NativeIContainerItem81_put_UseURL(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get StartupSite(){
        try{
            return _NativeIContainerItem81_get_StartupSite(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set StartupSite(/*ContainerSite*/pVal){
            try{
                _NativeIContainerItem81_put_StartupSite(this.getInstanceHandle,/*ContainerSite*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get _reserved(){
        try{
            return _NativeIContainerItem81_get__reserved(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get UseEdge(){
        try{
            return _NativeIContainerItem81_get_UseEdge(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set UseEdge(/*Boolean*/pVal){
            try{
                _NativeIContainerItem81_put_UseEdge(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITreeItem81 extends TEIUnknownHandle81 {
    get Name(){
        try{
            return UTF8ToString(_NativeITreeItem81_get_Name(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Name(/*String*/pVal){
            try{
                _NativeITreeItem81_put_Name(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ShowInViewerTree(){
        try{
            return _NativeITreeItem81_get_ShowInViewerTree(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ShowInViewerTree(/*Boolean*/pVal){
            try{
                _NativeITreeItem81_put_ShowInViewerTree(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get SaveInFlyFile(){
        try{
            return _NativeITreeItem81_get_SaveInFlyFile(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set SaveInFlyFile(/*Boolean*/pVal){
            try{
                _NativeITreeItem81_put_SaveInFlyFile(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ParentGroupName(){
        try{
            return UTF8ToString(_NativeITreeItem81_get_ParentGroupName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class I3DMLFeatureProperties81 extends TEIUnknownHandle81 {
    get Tint(){
        try{
            return ((nativeHandle) => nativeHandle ? new IColor81(nativeHandle) : null)(_NativeI3DMLFeatureProperties81_get_Tint(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Tint(/*IColor81*/pVal){
            try{
                _NativeI3DMLFeatureProperties81_put_Tint(this.getInstanceHandle,/*IColor81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MessageID(){
        try{
            return UTF8ToString(_NativeI3DMLFeatureProperties81_get_MessageID(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MessageID(/*String*/pVal){
            try{
                _NativeI3DMLFeatureProperties81_put_MessageID(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Tooltip(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITooltip81(nativeHandle) : null)(_NativeI3DMLFeatureProperties81_get_Tooltip(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    GetClassification(/*String*/Name) {
        try{
            return UTF8ToString(_NativeI3DMLFeatureProperties81_GetClassification(this.getInstanceHandle,/*String*/allocateUTF8(String(Name))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsClassified(/*String*/Name) {
        try{
            return _NativeI3DMLFeatureProperties81_IsClassified(this.getInstanceHandle,/*String*/allocateUTF8(String(Name)))== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetClassification(/*String*/Name, /*String*/Value) {
        try{
            _NativeI3DMLFeatureProperties81_SetClassification(this.getInstanceHandle,/*String*/allocateUTF8(String(Name)),/*String*/allocateUTF8(String(Value)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IPosition81 extends TEIUnknownHandle81 {
    get X(){
        try{
            return _NativeIPosition81_get_X(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set X(/*Double*/pVal){
            try{
                _NativeIPosition81_put_X(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Y(){
        try{
            return _NativeIPosition81_get_Y(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Y(/*Double*/pVal){
            try{
                _NativeIPosition81_put_Y(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Altitude(){
        try{
            return _NativeIPosition81_get_Altitude(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Altitude(/*Double*/pVal){
            try{
                _NativeIPosition81_put_Altitude(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Yaw(){
        try{
            return _NativeIPosition81_get_Yaw(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Yaw(/*Double*/pVal){
            try{
                _NativeIPosition81_put_Yaw(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Pitch(){
        try{
            return _NativeIPosition81_get_Pitch(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Pitch(/*Double*/pVal){
            try{
                _NativeIPosition81_put_Pitch(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Roll(){
        try{
            return _NativeIPosition81_get_Roll(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Roll(/*Double*/pVal){
            try{
                _NativeIPosition81_put_Roll(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get AltitudeType(){
        try{
            return _NativeIPosition81_get_AltitudeType(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set AltitudeType(/*AltitudeTypeCode*/pVal){
            try{
                _NativeIPosition81_put_AltitudeType(this.getInstanceHandle,/*AltitudeTypeCode*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Distance(){
        try{
            return _NativeIPosition81_get_Distance(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Distance(/*Double*/pVal){
            try{
                _NativeIPosition81_put_Distance(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Cartesian(){
        try{
            return _NativeIPosition81_get_Cartesian(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Cartesian(/*Boolean*/pVal){
            try{
                _NativeIPosition81_put_Cartesian(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    AimTo(/*IPosition81*/Position) {
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeIPosition81_AimTo(this.getInstanceHandle,/*IPosition81*/Position.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ChangeAltitudeType(/*AltitudeTypeCode*/AltitudeType) {
        try{
            _NativeIPosition81_ChangeAltitudeType(this.getInstanceHandle,/*AltitudeTypeCode*/AltitudeType);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Copy() {
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeIPosition81_Copy(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DistanceTo(/*IPosition81*/Position) {
        try{
            return _NativeIPosition81_DistanceTo(this.getInstanceHandle,/*IPosition81*/Position.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Init(/*Double*/X=0, /*Double*/Y=0, /*Double*/Altitude=0, /*Double*/Yaw=0, /*Double*/Pitch=0, /*Double*/Roll=0, /*AltitudeTypeCode*/AltitudeType=AltitudeTypeCode81.ATC_TERRAIN_RELATIVE, /*Double*/Distance=0) {
        try{
            _NativeIPosition81_Init(this.getInstanceHandle,/*Double*/X,/*Double*/Y,/*Double*/Altitude,/*Double*/Yaw,/*Double*/Pitch,/*Double*/Roll,/*AltitudeTypeCode*/AltitudeType,/*Double*/Distance);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    InitFrom(/*Object*/val) {
        try{
            _NativeIPosition81_InitFrom(this.getInstanceHandle,/*Object*/Emval.toHandle(val));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsEqual(/*IPosition81*/Position) {
        try{
            return _NativeIPosition81_IsEqual(this.getInstanceHandle,/*IPosition81*/Position.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Lerp(/*IPosition81*/Position, /*Double*/Percentage) {
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeIPosition81_Lerp(this.getInstanceHandle,/*IPosition81*/Position.getInstanceHandle,/*Double*/Percentage));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Move(/*Double*/Distance, /*Double*/Yaw, /*Double*/Pitch) {
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeIPosition81_Move(this.getInstanceHandle,/*Double*/Distance,/*Double*/Yaw,/*Double*/Pitch));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    MoveByOrientation(/*Double*/moveForward, /*Double*/moveRight, /*Double*/moveUp) {
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeIPosition81_MoveByOrientation(this.getInstanceHandle,/*Double*/moveForward,/*Double*/moveRight,/*Double*/moveUp));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    MoveToward(/*IPosition81*/Position, /*Double*/Distance) {
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeIPosition81_MoveToward(this.getInstanceHandle,/*IPosition81*/Position.getInstanceHandle,/*Double*/Distance));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ToAbsolute(/*AccuracyLevel*/Accuracy=AccuracyLevel81.ACCURACY_NORMAL) {
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeIPosition81_ToAbsolute(this.getInstanceHandle,/*AccuracyLevel*/Accuracy));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ToRelative(/*AccuracyLevel*/Accuracy=AccuracyLevel81.ACCURACY_NORMAL) {
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeIPosition81_ToRelative(this.getInstanceHandle,/*AccuracyLevel*/Accuracy));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IDataSourceInfo81 extends TEIUnknownHandle81 {
    get ConnectionString(){
        try{
            return UTF8ToString(_NativeIDataSourceInfo81_get_ConnectionString(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ConnectionString(/*String*/pVal){
            try{
                _NativeIDataSourceInfo81_put_ConnectionString(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Attributes(){
        try{
            return ((nativeHandle) => nativeHandle ? new Proxy(new IAttributes81(nativeHandle),get_Item_Handler) : null)(_NativeIDataSourceInfo81_get_Attributes(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get HasZ(){
        try{
            return _NativeIDataSourceInfo81_get_HasZ(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get BBox(){
        try{
            return ((nativeHandle) => nativeHandle ? new IBBox2D81(nativeHandle) : null)(_NativeIDataSourceInfo81_get_BBox(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get RecordsCount(){
        try{
            return _NativeIDataSourceInfo81_get_RecordsCount(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IFeatures81 extends TEIUnknownHandle81 {
    Item(/*Object*/Index){                                    
        try{
            return ((nativeHandle) => nativeHandle ? new IFeature81(nativeHandle) : null)(_NativeIFeatures81_get_Item(this.getInstanceHandle,/*Object*/Emval.toHandle(Index)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Count(){
        try{
            return _NativeIFeatures81_get_Count(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    GetFeatureByDataSourceFeatureID(/*String*/DataSourceFeatureID) {
        try{
            return ((nativeHandle) => nativeHandle ? new IFeature81(nativeHandle) : null)(_NativeIFeatures81_GetFeatureByDataSourceFeatureID(this.getInstanceHandle,/*String*/allocateUTF8(String(DataSourceFeatureID))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetFeatureByObjectID(/*String*/ObjectID) {
        try{
            return ((nativeHandle) => nativeHandle ? new IFeature81(nativeHandle) : null)(_NativeIFeatures81_GetFeatureByObjectID(this.getInstanceHandle,/*String*/allocateUTF8(String(ObjectID))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IFeature81 extends ITerraExplorerObject81 {
    get Geometry(){
        try{
            return ((nativeHandle) => nativeHandle ? GetIGeometry81Derived(nativeHandle) : null)(_NativeIFeature81_get_Geometry(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Geometry(/*IGeometry*/pVal){
            try{
                _NativeIFeature81_put_Geometry(this.getInstanceHandle,/*IGeometry*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get GeometryZ(){
        try{
            return ((nativeHandle) => nativeHandle ? GetIGeometry81Derived(nativeHandle) : null)(_NativeIFeature81_get_GeometryZ(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FeatureAttributes(){
        try{
            return ((nativeHandle) => nativeHandle ? new Proxy(new IFeatureAttributes81(nativeHandle),get_Item_Handler) : null)(_NativeIFeature81_get_FeatureAttributes(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get State(){
        try{
            return _NativeIFeature81_get_State(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get DataSourceFeatureID(){
        try{
            return UTF8ToString(_NativeIFeature81_get_DataSourceFeatureID(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ParentGroupID(){
        try{
            return UTF8ToString(_NativeIFeature81_get_ParentGroupID(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get LayerID(){
        try{
            return UTF8ToString(_NativeIFeature81_get_LayerID(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tint(){
        try{
            return ((nativeHandle) => nativeHandle ? new IColor81(nativeHandle) : null)(_NativeIFeature81_get_Tint(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Tint(/*IColor81*/pVal){
            try{
                _NativeIFeature81_put_Tint(this.getInstanceHandle,/*IColor81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Show(){
        try{
            return _NativeIFeature81_get_Show(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Show(/*Boolean*/pVal){
            try{
                _NativeIFeature81_put_Show(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Highlight(){
        try{
            return _NativeIFeature81_get_Highlight(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Highlight(/*Boolean*/pVal){
            try{
                _NativeIFeature81_put_Highlight(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    GetProperty(/*String*/Name) {
        try{
            return EmvalToJS(Emval.toValue(_NativeIFeature81_GetProperty(this.getInstanceHandle,/*String*/allocateUTF8(String(Name)))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IMeshLayer81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeIMeshLayer81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get GroundObject(){
        try{
            return _NativeIMeshLayer81_get_GroundObject(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set GroundObject(/*Boolean*/pVal){
            try{
                _NativeIMeshLayer81_put_GroundObject(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Visibility(){
        try{
            return ((nativeHandle) => nativeHandle ? new IVisibility81(nativeHandle) : null)(_NativeIMeshLayer81_get_Visibility(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ScaleFactor(){
        try{
            return _NativeIMeshLayer81_get_ScaleFactor(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ScaleFactor(/*Double*/pVal){
            try{
                _NativeIMeshLayer81_put_ScaleFactor(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ScaleX(){
        try{
            return _NativeIMeshLayer81_get_ScaleX(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ScaleX(/*Double*/pVal){
            try{
                _NativeIMeshLayer81_put_ScaleX(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ScaleY(){
        try{
            return _NativeIMeshLayer81_get_ScaleY(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ScaleY(/*Double*/pVal){
            try{
                _NativeIMeshLayer81_put_ScaleY(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ScaleZ(){
        try{
            return _NativeIMeshLayer81_get_ScaleZ(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ScaleZ(/*Double*/pVal){
            try{
                _NativeIMeshLayer81_put_ScaleZ(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Position(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeIMeshLayer81_get_Position(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition81*/pVal){
            try{
                _NativeIMeshLayer81_put_Position(this.getInstanceHandle,/*IPosition81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get BBox(){
        try{
            return ((nativeHandle) => nativeHandle ? new IBBox3D81(nativeHandle) : null)(_NativeIMeshLayer81_get_BBox(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Path(){
        try{
            return UTF8ToString(_NativeIMeshLayer81_get_Path(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Path(/*String*/pVal){
            try{
                _NativeIMeshLayer81_put_Path(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FeatureLayers(){
        try{
            return ((nativeHandle) => nativeHandle ? new Proxy(new I3DMLFeatureLayers81(nativeHandle),get_Item_Handler) : null)(_NativeIMeshLayer81_get_FeatureLayers(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ReplaceTerrainWithMesh(){
        try{
            return _NativeIMeshLayer81_get_ReplaceTerrainWithMesh(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ReplaceTerrainWithMesh(/*ReplaceTerrainMeshType*/pVal){
            try{
                _NativeIMeshLayer81_put_ReplaceTerrainWithMesh(this.getInstanceHandle,/*ReplaceTerrainMeshType*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MeshGroundOffset(){
        try{
            return _NativeIMeshLayer81_get_MeshGroundOffset(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MeshGroundOffset(/*Double*/pVal){
            try{
                _NativeIMeshLayer81_put_MeshGroundOffset(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Oversampling(){
        try{
            return _NativeIMeshLayer81_get_Oversampling(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Oversampling(/*Oversampling*/pVal){
            try{
                _NativeIMeshLayer81_put_Oversampling(this.getInstanceHandle,/*Oversampling*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DisplayStyle(){
        try{
            return _NativeIMeshLayer81_get_DisplayStyle(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DisplayStyle(/*MeshLayerDisplayStyle*/pVal){
            try{
                _NativeIMeshLayer81_put_DisplayStyle(this.getInstanceHandle,/*MeshLayerDisplayStyle*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ReprojectElevation(){
        try{
            return _NativeIMeshLayer81_get_ReprojectElevation(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ReprojectElevation(/*Boolean*/pVal){
            try{
                _NativeIMeshLayer81_put_ReprojectElevation(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get CoordinateSystem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ICoordinateSystem81(nativeHandle) : null)(_NativeIMeshLayer81_get_CoordinateSystem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    Refresh() {
        try{
            _NativeIMeshLayer81_Refresh(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ITerraExplorerAsync81 extends TEIUnknownHandle81 {
    get State(){
        try{
            return _NativeITerraExplorerAsync81_get_State(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    Abort() {
        try{
            _NativeITerraExplorerAsync81_Abort(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    OnProgress(/*Object*/dispFunc) {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerraExplorerAsync81(nativeHandle) : null)(_NativeITerraExplorerAsync81_OnProgress(this.getInstanceHandle,/*Object*/Emval.toHandle(dispFunc)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    OnReject(/*Object*/dispFunc) {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerraExplorerAsync81(nativeHandle) : null)(_NativeITerraExplorerAsync81_OnReject(this.getInstanceHandle,/*Object*/Emval.toHandle(dispFunc)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    OnResolve(/*Object*/dispFunc) {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerraExplorerAsync81(nativeHandle) : null)(_NativeITerraExplorerAsync81_OnResolve(this.getInstanceHandle,/*Object*/Emval.toHandle(dispFunc)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IFeatureLayer81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeIFeatureLayer81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FeatureGroups(){
        try{
            return ((nativeHandle) => nativeHandle ? new Proxy(new IFeatureGroups81(nativeHandle),get_Item_Handler) : null)(_NativeIFeatureLayer81_get_FeatureGroups(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeIFeatureLayer81_get_Position(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition81*/pVal){
            try{
                _NativeIFeatureLayer81_put_Position(this.getInstanceHandle,/*IPosition81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Visibility(){
        try{
            return ((nativeHandle) => nativeHandle ? new IVisibility81(nativeHandle) : null)(_NativeIFeatureLayer81_get_Visibility(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get DataSourceInfo(){
        try{
            return ((nativeHandle) => nativeHandle ? new IDataSourceInfo81(nativeHandle) : null)(_NativeIFeatureLayer81_get_DataSourceInfo(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get GeometryType(){
        try{
            return _NativeIFeatureLayer81_get_GeometryType(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get StreamStatus(){
        try{
            return _NativeIFeatureLayer81_get_StreamStatus(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set StreamStatus(/*StreamLayerStatus*/pStreamStatus){
            try{
                _NativeIFeatureLayer81_put_StreamStatus(this.getInstanceHandle,/*StreamLayerStatus*/pStreamStatus); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get BBox(){
        try{
            return ((nativeHandle) => nativeHandle ? new IBBox2D81(nativeHandle) : null)(_NativeIFeatureLayer81_get_BBox(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set BBox(/*IBBox2D81*/pVal){
            try{
                _NativeIFeatureLayer81_put_BBox(this.getInstanceHandle,/*IBBox2D81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Filter(){
        try{
            return UTF8ToString(_NativeIFeatureLayer81_get_Filter(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Filter(/*String*/pVal){
            try{
                _NativeIFeatureLayer81_put_Filter(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get IgnoreZ(){
        try{
            return _NativeIFeatureLayer81_get_IgnoreZ(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set IgnoreZ(/*Boolean*/pVal){
            try{
                _NativeIFeatureLayer81_put_IgnoreZ(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get AltitudeUnit(){
        try{
            return _NativeIFeatureLayer81_get_AltitudeUnit(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set AltitudeUnit(/*AltitudeUnitCode*/pVal){
            try{
                _NativeIFeatureLayer81_put_AltitudeUnit(this.getInstanceHandle,/*AltitudeUnitCode*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get BlockWidth(){
        try{
            return _NativeIFeatureLayer81_get_BlockWidth(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set BlockWidth(/*Double*/pVal){
            try{
                _NativeIFeatureLayer81_put_BlockWidth(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Reproject(){
        try{
            return _NativeIFeatureLayer81_get_Reproject(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Reproject(/*Boolean*/pVal){
            try{
                _NativeIFeatureLayer81_put_Reproject(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ReprojectElevation(){
        try{
            return _NativeIFeatureLayer81_get_ReprojectElevation(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ReprojectElevation(/*Boolean*/pVal){
            try{
                _NativeIFeatureLayer81_put_ReprojectElevation(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Streaming(){
        try{
            return _NativeIFeatureLayer81_get_Streaming(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Streaming(/*Boolean*/pVal){
            try{
                _NativeIFeatureLayer81_put_Streaming(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Annotation(){
        try{
            return _NativeIFeatureLayer81_get_Annotation(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Annotation(/*Boolean*/pVal){
            try{
                _NativeIFeatureLayer81_put_Annotation(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Editable(){
        try{
            return _NativeIFeatureLayer81_get_Editable(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get DynamicAnnotationPlacement(){
        try{
            return _NativeIFeatureLayer81_get_DynamicAnnotationPlacement(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DynamicAnnotationPlacement(/*Boolean*/pVal){
            try{
                _NativeIFeatureLayer81_put_DynamicAnnotationPlacement(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MinimizeLabelDuplications(){
        try{
            return _NativeIFeatureLayer81_get_MinimizeLabelDuplications(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MinimizeLabelDuplications(/*Boolean*/pVal){
            try{
                _NativeIFeatureLayer81_put_MinimizeLabelDuplications(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get CoordinateSystem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ICoordinateSystem81(nativeHandle) : null)(_NativeIFeatureLayer81_get_CoordinateSystem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set CoordinateSystem(/*ICoordinateSystem81*/pVal){
            try{
                _NativeIFeatureLayer81_put_CoordinateSystem(this.getInstanceHandle,/*ICoordinateSystem81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get SelectedFeatures(){
        try{
            return ((nativeHandle) => nativeHandle ? new Proxy(new IFeatures81(nativeHandle),get_Item_Handler) : null)(_NativeIFeatureLayer81_get_SelectedFeatures(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    CopyStyleFrom(/*String*/LayerID) {
        try{
            _NativeIFeatureLayer81_CopyStyleFrom(this.getInstanceHandle,/*String*/allocateUTF8(String(LayerID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CopyStyleTo(/*String*/LayerID) {
        try{
            _NativeIFeatureLayer81_CopyStyleTo(this.getInstanceHandle,/*String*/allocateUTF8(String(LayerID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ExecuteQuery(/*String*/AttributeFilter, /*Int32*/NumOfFeatures=-1, /*String*/FromDataSourceFeatureId="", /*IGeometry*/AreaFilter=null) {
        try{
            return ((nativeHandle) => nativeHandle ? new IFeatures81(nativeHandle) : null)(_NativeIFeatureLayer81_ExecuteQuery(this.getInstanceHandle,/*String*/allocateUTF8(String(AttributeFilter)),/*Int32*/NumOfFeatures,/*String*/allocateUTF8(String(FromDataSourceFeatureId)),/*IGeometry*/AreaFilter.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ExecuteQueryAsync(/*String*/AttributeFilter, /*Int32*/NumOfFeatures=-1, /*String*/FromDataSourceFeatureId="", /*IGeometry*/AreaFilter=null) {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerraExplorerAsync81(nativeHandle) : null)(_NativeIFeatureLayer81_ExecuteQueryAsync(this.getInstanceHandle,/*String*/allocateUTF8(String(AttributeFilter)),/*Int32*/NumOfFeatures,/*String*/allocateUTF8(String(FromDataSourceFeatureId)),/*IGeometry*/AreaFilter.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ExecuteSpatialQuery(/*IGeometry*/pIGeometry, /*IntersectionType*/IntersectionType=IntersectionType81.IT_INTERSECT) {
        try{
            return ((nativeHandle) => nativeHandle ? new IFeatures81(nativeHandle) : null)(_NativeIFeatureLayer81_ExecuteSpatialQuery(this.getInstanceHandle,/*IGeometry*/pIGeometry.getInstanceHandle,/*IntersectionType*/IntersectionType));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Load() {
        try{
            _NativeIFeatureLayer81_Load(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    LoadAsync() {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerraExplorerAsync81(nativeHandle) : null)(_NativeIFeatureLayer81_LoadAsync(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Refresh() {
        try{
            _NativeIFeatureLayer81_Refresh(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    RefreshAsync() {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerraExplorerAsync81(nativeHandle) : null)(_NativeIFeatureLayer81_RefreshAsync(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    RefreshFeatures(/*Object*/featureIDs, /*Boolean*/bAsync=false) {
        try{
            _NativeIFeatureLayer81_RefreshFeatures(this.getInstanceHandle,/*Object*/Emval.toHandle(featureIDs),/*Boolean*/bAsync);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Save() {
        try{
            _NativeIFeatureLayer81_Save(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SaveAs(/*String*/FileName, /*String*/AttributeFilter, /*IGeometry*/AreaFilter) {
        try{
            return UTF8ToString(_NativeIFeatureLayer81_SaveAs(this.getInstanceHandle,/*String*/allocateUTF8(String(FileName)),/*String*/allocateUTF8(String(AttributeFilter)),/*IGeometry*/AreaFilter.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SaveAsync() {
        try{
            return ((nativeHandle) => nativeHandle ? new ITerraExplorerAsync81(nativeHandle) : null)(_NativeIFeatureLayer81_SaveAsync(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IKMLLayer81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeIKMLLayer81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Editable(){
        try{
            return _NativeIKMLLayer81_get_Editable(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Path(){
        try{
            return UTF8ToString(_NativeIKMLLayer81_get_Path(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    GetNetworkLink(/*String*/ObjectID) {
        try{
            return ((nativeHandle) => nativeHandle ? new INetworkLink81(nativeHandle) : null)(_NativeIKMLLayer81_GetNetworkLink(this.getInstanceHandle,/*String*/allocateUTF8(String(ObjectID))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Refresh() {
        try{
            _NativeIKMLLayer81_Refresh(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Save() {
        try{
            _NativeIKMLLayer81_Save(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SaveAs(/*String*/KmlName) {
        try{
            return UTF8ToString(_NativeIKMLLayer81_SaveAs(this.getInstanceHandle,/*String*/allocateUTF8(String(KmlName))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ILabelStyle81 extends TEIUnknownHandle81 {
    get TextColor(){
        try{
            return ((nativeHandle) => nativeHandle ? new IColor81(nativeHandle) : null)(_NativeILabelStyle81_get_TextColor(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TextColor(/*IColor81*/pVal){
            try{
                _NativeILabelStyle81_put_TextColor(this.getInstanceHandle,/*IColor81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get BackgroundColor(){
        try{
            return ((nativeHandle) => nativeHandle ? new IColor81(nativeHandle) : null)(_NativeILabelStyle81_get_BackgroundColor(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set BackgroundColor(/*IColor81*/pVal){
            try{
                _NativeILabelStyle81_put_BackgroundColor(this.getInstanceHandle,/*IColor81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FontName(){
        try{
            return UTF8ToString(_NativeILabelStyle81_get_FontName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FontName(/*String*/pVal){
            try{
                _NativeILabelStyle81_put_FontName(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FontSize(){
        try{
            return _NativeILabelStyle81_get_FontSize(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FontSize(/*Int32*/pVal){
            try{
                _NativeILabelStyle81_put_FontSize(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Bold(){
        try{
            return _NativeILabelStyle81_get_Bold(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Bold(/*Boolean*/pVal){
            try{
                _NativeILabelStyle81_put_Bold(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Italic(){
        try{
            return _NativeILabelStyle81_get_Italic(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Italic(/*Boolean*/pVal){
            try{
                _NativeILabelStyle81_put_Italic(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Underline(){
        try{
            return _NativeILabelStyle81_get_Underline(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Underline(/*Boolean*/pVal){
            try{
                _NativeILabelStyle81_put_Underline(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MaxViewingHeight(){
        try{
            return _NativeILabelStyle81_get_MaxViewingHeight(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MaxViewingHeight(/*Double*/pVal){
            try{
                _NativeILabelStyle81_put_MaxViewingHeight(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MinViewingHeight(){
        try{
            return _NativeILabelStyle81_get_MinViewingHeight(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MinViewingHeight(/*Double*/pVal){
            try{
                _NativeILabelStyle81_put_MinViewingHeight(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TextOnImage(){
        try{
            return _NativeILabelStyle81_get_TextOnImage(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TextOnImage(/*Boolean*/pVal){
            try{
                _NativeILabelStyle81_put_TextOnImage(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MultilineJustification(){
        try{
            return UTF8ToString(_NativeILabelStyle81_get_MultilineJustification(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MultilineJustification(/*String*/pVal){
            try{
                _NativeILabelStyle81_put_MultilineJustification(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TextAlignment(){
        try{
            return UTF8ToString(_NativeILabelStyle81_get_TextAlignment(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TextAlignment(/*String*/pVal){
            try{
                _NativeILabelStyle81_put_TextAlignment(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get PivotAlignment(){
        try{
            return UTF8ToString(_NativeILabelStyle81_get_PivotAlignment(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set PivotAlignment(/*String*/pVal){
            try{
                _NativeILabelStyle81_put_PivotAlignment(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get LockMode(){
        try{
            return _NativeILabelStyle81_get_LockMode(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set LockMode(/*LabelLockMode*/pVal){
            try{
                _NativeILabelStyle81_put_LockMode(this.getInstanceHandle,/*LabelLockMode*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get LineToGroundType(){
        try{
            return _NativeILabelStyle81_get_LineToGroundType(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set LineToGroundType(/*LineType*/pVal){
            try{
                _NativeILabelStyle81_put_LineToGroundType(this.getInstanceHandle,/*LineType*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get LineToGroundLength(){
        try{
            return _NativeILabelStyle81_get_LineToGroundLength(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set LineToGroundLength(/*Double*/pVal){
            try{
                _NativeILabelStyle81_put_LineToGroundLength(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get LineColor(){
        try{
            return ((nativeHandle) => nativeHandle ? new IColor81(nativeHandle) : null)(_NativeILabelStyle81_get_LineColor(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set LineColor(/*IColor81*/pVal){
            try{
                _NativeILabelStyle81_put_LineColor(this.getInstanceHandle,/*IColor81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FrameFileName(){
        try{
            return UTF8ToString(_NativeILabelStyle81_get_FrameFileName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FrameFileName(/*String*/pVal){
            try{
                _NativeILabelStyle81_put_FrameFileName(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get LimitScreenSize(){
        try{
            return _NativeILabelStyle81_get_LimitScreenSize(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set LimitScreenSize(/*Boolean*/pVal){
            try{
                _NativeILabelStyle81_put_LimitScreenSize(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Scale(){
        try{
            return _NativeILabelStyle81_get_Scale(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Scale(/*Double*/pVal){
            try{
                _NativeILabelStyle81_put_Scale(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MaxImageSize(){
        try{
            return _NativeILabelStyle81_get_MaxImageSize(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MaxImageSize(/*Int32*/pVal){
            try{
                _NativeILabelStyle81_put_MaxImageSize(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get IconColor(){
        try{
            return ((nativeHandle) => nativeHandle ? new IColor81(nativeHandle) : null)(_NativeILabelStyle81_get_IconColor(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set IconColor(/*IColor81*/pVal){
            try{
                _NativeILabelStyle81_put_IconColor(this.getInstanceHandle,/*IColor81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ShowTextBehavior(){
        try{
            return _NativeILabelStyle81_get_ShowTextBehavior(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ShowTextBehavior(/*ShowTextOptions*/pVal){
            try{
                _NativeILabelStyle81_put_ShowTextBehavior(this.getInstanceHandle,/*ShowTextOptions*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get SmallestVisibleSize(){
        try{
            return _NativeILabelStyle81_get_SmallestVisibleSize(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set SmallestVisibleSize(/*Int32*/pVal){
            try{
                _NativeILabelStyle81_put_SmallestVisibleSize(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class IColor81 extends TEIUnknownHandle81 {
    get abgrColor(){
        try{
            return _NativeIColor81_get_abgrColor(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set abgrColor(/*UInt32*/pVal){
            try{
                _NativeIColor81_put_abgrColor(this.getInstanceHandle,/*UInt32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    FromABGRColor(/*UInt32*/abgrColor) {
        try{
            _NativeIColor81_FromABGRColor(this.getInstanceHandle,/*UInt32*/abgrColor);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    FromARGBColor(/*UInt32*/ARGBColor) {
        try{
            _NativeIColor81_FromARGBColor(this.getInstanceHandle,/*UInt32*/ARGBColor);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    FromBGRColor(/*UInt32*/BGRColor) {
        try{
            _NativeIColor81_FromBGRColor(this.getInstanceHandle,/*UInt32*/BGRColor);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    FromHTMLColor(/*String*/htmlColor) {
        try{
            _NativeIColor81_FromHTMLColor(this.getInstanceHandle,/*String*/allocateUTF8(String(htmlColor)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    FromRGBColor(/*UInt32*/RGBColor) {
        try{
            _NativeIColor81_FromRGBColor(this.getInstanceHandle,/*UInt32*/RGBColor);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetAlpha() {
        try{
            return _NativeIColor81_GetAlpha(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetAlpha(/*Double*/Alpha) {
        try{
            _NativeIColor81_SetAlpha(this.getInstanceHandle,/*Double*/Alpha);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ToABGRColor() {
        try{
            return _NativeIColor81_ToABGRColor(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ToARGBColor() {
        try{
            return _NativeIColor81_ToARGBColor(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ToBGRColor() {
        try{
            return _NativeIColor81_ToBGRColor(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ToHTMLColor() {
        try{
            return UTF8ToString(_NativeIColor81_ToHTMLColor(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ToRGBColor() {
        try{
            return _NativeIColor81_ToRGBColor(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IRouteWaypoint81 extends TEIUnknownHandle81 {
    get X(){
        try{
            return _NativeIRouteWaypoint81_get_X(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set X(/*Double*/pVal){
            try{
                _NativeIRouteWaypoint81_put_X(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Y(){
        try{
            return _NativeIRouteWaypoint81_get_Y(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Y(/*Double*/pVal){
            try{
                _NativeIRouteWaypoint81_put_Y(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Altitude(){
        try{
            return _NativeIRouteWaypoint81_get_Altitude(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Altitude(/*Double*/pVal){
            try{
                _NativeIRouteWaypoint81_put_Altitude(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Yaw(){
        try{
            return _NativeIRouteWaypoint81_get_Yaw(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Yaw(/*Double*/pVal){
            try{
                _NativeIRouteWaypoint81_put_Yaw(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Pitch(){
        try{
            return _NativeIRouteWaypoint81_get_Pitch(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Pitch(/*Double*/pVal){
            try{
                _NativeIRouteWaypoint81_put_Pitch(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Roll(){
        try{
            return _NativeIRouteWaypoint81_get_Roll(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Roll(/*Double*/pVal){
            try{
                _NativeIRouteWaypoint81_put_Roll(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Speed(){
        try{
            return _NativeIRouteWaypoint81_get_Speed(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Speed(/*Double*/pVal){
            try{
                _NativeIRouteWaypoint81_put_Speed(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Time(){
        try{
            return EmvalToJS(Emval.toValue(_NativeIRouteWaypoint81_get_Time(this.getInstanceHandle))); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Time(/*Object*/pVal){
            try{
                _NativeIRouteWaypoint81_put_Time(this.getInstanceHandle,/*Object*/Emval.toHandle(pVal)); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MessageID(){
        try{
            return UTF8ToString(_NativeIRouteWaypoint81_get_MessageID(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MessageID(/*String*/pVal){
            try{
                _NativeIRouteWaypoint81_put_MessageID(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrainPolyline81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeITerrainPolyline81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return ((nativeHandle) => nativeHandle ? new IMessageObject81(nativeHandle) : null)(_NativeITerrainPolyline81_get_Message(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAction81(nativeHandle) : null)(_NativeITerrainPolyline81_get_Action(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeITerrainPolyline81_get_Position(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition81*/pVal){
            try{
                _NativeITerrainPolyline81_put_Position(this.getInstanceHandle,/*IPosition81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainObject81(nativeHandle) : null)(_NativeITerrainPolyline81_get_Terrain(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITooltip81(nativeHandle) : null)(_NativeITerrainPolyline81_get_Tooltip(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAttachment81(nativeHandle) : null)(_NativeITerrainPolyline81_get_Attachment(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return ((nativeHandle) => nativeHandle ? new IVisibility81(nativeHandle) : null)(_NativeITerrainPolyline81_get_Visibility(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITimeSpan81(nativeHandle) : null)(_NativeITerrainPolyline81_get_TimeSpan(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get LineStyle(){
        try{
            return ((nativeHandle) => nativeHandle ? new ILineStyle81(nativeHandle) : null)(_NativeITerrainPolyline81_get_LineStyle(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FillStyle(){
        try{
            return ((nativeHandle) => nativeHandle ? new IFillStyle81(nativeHandle) : null)(_NativeITerrainPolyline81_get_FillStyle(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Geometry(){
        try{
            return ((nativeHandle) => nativeHandle ? GetIGeometry81Derived(nativeHandle) : null)(_NativeITerrainPolyline81_get_Geometry(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Geometry(/*IGeometry*/pVal){
            try{
                _NativeITerrainPolyline81_put_Geometry(this.getInstanceHandle,/*IGeometry*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Spline(){
        try{
            return _NativeITerrainPolyline81_get_Spline(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Spline(/*Boolean*/pVal){
            try{
                _NativeITerrainPolyline81_put_Spline(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ExtendToGround(){
        try{
            return _NativeITerrainPolyline81_get_ExtendToGround(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ExtendToGround(/*Boolean*/pVal){
            try{
                _NativeITerrainPolyline81_put_ExtendToGround(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrainPolygon81 extends ITerrainPolyline81 {
    get VolumeClassification(){
        try{
            return ((nativeHandle) => nativeHandle ? new IVolumeClassification81(nativeHandle) : null)(_NativeITerrainPolygon81_get_VolumeClassification(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class ITerrainRectangle81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeITerrainRectangle81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return ((nativeHandle) => nativeHandle ? new IMessageObject81(nativeHandle) : null)(_NativeITerrainRectangle81_get_Message(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAction81(nativeHandle) : null)(_NativeITerrainRectangle81_get_Action(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeITerrainRectangle81_get_Position(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition81*/pVal){
            try{
                _NativeITerrainRectangle81_put_Position(this.getInstanceHandle,/*IPosition81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainObject81(nativeHandle) : null)(_NativeITerrainRectangle81_get_Terrain(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITooltip81(nativeHandle) : null)(_NativeITerrainRectangle81_get_Tooltip(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAttachment81(nativeHandle) : null)(_NativeITerrainRectangle81_get_Attachment(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return ((nativeHandle) => nativeHandle ? new IVisibility81(nativeHandle) : null)(_NativeITerrainRectangle81_get_Visibility(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITimeSpan81(nativeHandle) : null)(_NativeITerrainRectangle81_get_TimeSpan(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get LineStyle(){
        try{
            return ((nativeHandle) => nativeHandle ? new ILineStyle81(nativeHandle) : null)(_NativeITerrainRectangle81_get_LineStyle(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FillStyle(){
        try{
            return ((nativeHandle) => nativeHandle ? new IFillStyle81(nativeHandle) : null)(_NativeITerrainRectangle81_get_FillStyle(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Top(){
        try{
            return _NativeITerrainRectangle81_get_Top(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Top(/*Double*/pVal){
            try{
                _NativeITerrainRectangle81_put_Top(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Left(){
        try{
            return _NativeITerrainRectangle81_get_Left(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Left(/*Double*/pVal){
            try{
                _NativeITerrainRectangle81_put_Left(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Right(){
        try{
            return _NativeITerrainRectangle81_get_Right(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Right(/*Double*/pVal){
            try{
                _NativeITerrainRectangle81_put_Right(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Bottom(){
        try{
            return _NativeITerrainRectangle81_get_Bottom(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Bottom(/*Double*/pVal){
            try{
                _NativeITerrainRectangle81_put_Bottom(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Width(){
        try{
            return _NativeITerrainRectangle81_get_Width(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Width(/*Double*/pVal){
            try{
                _NativeITerrainRectangle81_put_Width(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Depth(){
        try{
            return _NativeITerrainRectangle81_get_Depth(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Depth(/*Double*/pVal){
            try{
                _NativeITerrainRectangle81_put_Depth(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrainRegularPolygon81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeITerrainRegularPolygon81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return ((nativeHandle) => nativeHandle ? new IMessageObject81(nativeHandle) : null)(_NativeITerrainRegularPolygon81_get_Message(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAction81(nativeHandle) : null)(_NativeITerrainRegularPolygon81_get_Action(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeITerrainRegularPolygon81_get_Position(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition81*/pVal){
            try{
                _NativeITerrainRegularPolygon81_put_Position(this.getInstanceHandle,/*IPosition81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainObject81(nativeHandle) : null)(_NativeITerrainRegularPolygon81_get_Terrain(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITooltip81(nativeHandle) : null)(_NativeITerrainRegularPolygon81_get_Tooltip(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAttachment81(nativeHandle) : null)(_NativeITerrainRegularPolygon81_get_Attachment(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return ((nativeHandle) => nativeHandle ? new IVisibility81(nativeHandle) : null)(_NativeITerrainRegularPolygon81_get_Visibility(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITimeSpan81(nativeHandle) : null)(_NativeITerrainRegularPolygon81_get_TimeSpan(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get LineStyle(){
        try{
            return ((nativeHandle) => nativeHandle ? new ILineStyle81(nativeHandle) : null)(_NativeITerrainRegularPolygon81_get_LineStyle(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FillStyle(){
        try{
            return ((nativeHandle) => nativeHandle ? new IFillStyle81(nativeHandle) : null)(_NativeITerrainRegularPolygon81_get_FillStyle(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Radius(){
        try{
            return _NativeITerrainRegularPolygon81_get_Radius(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Radius(/*Double*/pVal){
            try{
                _NativeITerrainRegularPolygon81_put_Radius(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get NumberOfSegments(){
        try{
            return _NativeITerrainRegularPolygon81_get_NumberOfSegments(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set NumberOfSegments(/*Int32*/pVal){
            try{
                _NativeITerrainRegularPolygon81_put_NumberOfSegments(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrain3DPolygon81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeITerrain3DPolygon81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return ((nativeHandle) => nativeHandle ? new IMessageObject81(nativeHandle) : null)(_NativeITerrain3DPolygon81_get_Message(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAction81(nativeHandle) : null)(_NativeITerrain3DPolygon81_get_Action(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeITerrain3DPolygon81_get_Position(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition81*/pVal){
            try{
                _NativeITerrain3DPolygon81_put_Position(this.getInstanceHandle,/*IPosition81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainObject81(nativeHandle) : null)(_NativeITerrain3DPolygon81_get_Terrain(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITooltip81(nativeHandle) : null)(_NativeITerrain3DPolygon81_get_Tooltip(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAttachment81(nativeHandle) : null)(_NativeITerrain3DPolygon81_get_Attachment(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return ((nativeHandle) => nativeHandle ? new IVisibility81(nativeHandle) : null)(_NativeITerrain3DPolygon81_get_Visibility(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITimeSpan81(nativeHandle) : null)(_NativeITerrain3DPolygon81_get_TimeSpan(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get LineStyle(){
        try{
            return ((nativeHandle) => nativeHandle ? new ILineStyle81(nativeHandle) : null)(_NativeITerrain3DPolygon81_get_LineStyle(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FillStyle(){
        try{
            return ((nativeHandle) => nativeHandle ? new IFillStyle81(nativeHandle) : null)(_NativeITerrain3DPolygon81_get_FillStyle(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Geometry(){
        try{
            return ((nativeHandle) => nativeHandle ? GetIGeometry81Derived(nativeHandle) : null)(_NativeITerrain3DPolygon81_get_Geometry(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Geometry(/*IGeometry*/pVal){
            try{
                _NativeITerrain3DPolygon81_put_Geometry(this.getInstanceHandle,/*IGeometry*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Height(){
        try{
            return _NativeITerrain3DPolygon81_get_Height(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Height(/*Double*/pVal){
            try{
                _NativeITerrain3DPolygon81_put_Height(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrainBuilding81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeITerrainBuilding81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return ((nativeHandle) => nativeHandle ? new IMessageObject81(nativeHandle) : null)(_NativeITerrainBuilding81_get_Message(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAction81(nativeHandle) : null)(_NativeITerrainBuilding81_get_Action(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeITerrainBuilding81_get_Position(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition81*/pVal){
            try{
                _NativeITerrainBuilding81_put_Position(this.getInstanceHandle,/*IPosition81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainObject81(nativeHandle) : null)(_NativeITerrainBuilding81_get_Terrain(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITooltip81(nativeHandle) : null)(_NativeITerrainBuilding81_get_Tooltip(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAttachment81(nativeHandle) : null)(_NativeITerrainBuilding81_get_Attachment(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return ((nativeHandle) => nativeHandle ? new IVisibility81(nativeHandle) : null)(_NativeITerrainBuilding81_get_Visibility(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITimeSpan81(nativeHandle) : null)(_NativeITerrainBuilding81_get_TimeSpan(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Geometry(){
        try{
            return ((nativeHandle) => nativeHandle ? GetIGeometry81Derived(nativeHandle) : null)(_NativeITerrainBuilding81_get_Geometry(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Geometry(/*IGeometry*/pVal){
            try{
                _NativeITerrainBuilding81_put_Geometry(this.getInstanceHandle,/*IGeometry*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Height(){
        try{
            return _NativeITerrainBuilding81_get_Height(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Height(/*Double*/pVal){
            try{
                _NativeITerrainBuilding81_put_Height(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Style(){
        try{
            return _NativeITerrainBuilding81_get_Style(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Style(/*BuildingStyleCode*/pVal){
            try{
                _NativeITerrainBuilding81_put_Style(this.getInstanceHandle,/*BuildingStyleCode*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Roof(){
        try{
            return ((nativeHandle) => nativeHandle ? new IRoofFace81(nativeHandle) : null)(_NativeITerrainBuilding81_get_Roof(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Sides(){
        try{
            return ((nativeHandle) => nativeHandle ? new Proxy(new IBuildingSides81(nativeHandle),get_Item_Handler) : null)(_NativeITerrainBuilding81_get_Sides(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get EnableDraw(){
        try{
            return _NativeITerrainBuilding81_get_EnableDraw(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set EnableDraw(/*Boolean*/pVal){
            try{
                _NativeITerrainBuilding81_put_EnableDraw(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TerrainTextureOffsetX(){
        try{
            return _NativeITerrainBuilding81_get_TerrainTextureOffsetX(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TerrainTextureOffsetX(/*Double*/pVal){
            try{
                _NativeITerrainBuilding81_put_TerrainTextureOffsetX(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TerrainTextureOffsetY(){
        try{
            return _NativeITerrainBuilding81_get_TerrainTextureOffsetY(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TerrainTextureOffsetY(/*Double*/pVal){
            try{
                _NativeITerrainBuilding81_put_TerrainTextureOffsetY(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrain3DRectBase81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeITerrain3DRectBase81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return ((nativeHandle) => nativeHandle ? new IMessageObject81(nativeHandle) : null)(_NativeITerrain3DRectBase81_get_Message(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAction81(nativeHandle) : null)(_NativeITerrain3DRectBase81_get_Action(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeITerrain3DRectBase81_get_Position(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition81*/pVal){
            try{
                _NativeITerrain3DRectBase81_put_Position(this.getInstanceHandle,/*IPosition81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainObject81(nativeHandle) : null)(_NativeITerrain3DRectBase81_get_Terrain(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITooltip81(nativeHandle) : null)(_NativeITerrain3DRectBase81_get_Tooltip(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAttachment81(nativeHandle) : null)(_NativeITerrain3DRectBase81_get_Attachment(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return ((nativeHandle) => nativeHandle ? new IVisibility81(nativeHandle) : null)(_NativeITerrain3DRectBase81_get_Visibility(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITimeSpan81(nativeHandle) : null)(_NativeITerrain3DRectBase81_get_TimeSpan(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get LineStyle(){
        try{
            return ((nativeHandle) => nativeHandle ? new ILineStyle81(nativeHandle) : null)(_NativeITerrain3DRectBase81_get_LineStyle(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FillStyle(){
        try{
            return ((nativeHandle) => nativeHandle ? new IFillStyle81(nativeHandle) : null)(_NativeITerrain3DRectBase81_get_FillStyle(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Top(){
        try{
            return _NativeITerrain3DRectBase81_get_Top(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Top(/*Double*/pVal){
            try{
                _NativeITerrain3DRectBase81_put_Top(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Left(){
        try{
            return _NativeITerrain3DRectBase81_get_Left(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Left(/*Double*/pVal){
            try{
                _NativeITerrain3DRectBase81_put_Left(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Right(){
        try{
            return _NativeITerrain3DRectBase81_get_Right(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Right(/*Double*/pVal){
            try{
                _NativeITerrain3DRectBase81_put_Right(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Bottom(){
        try{
            return _NativeITerrain3DRectBase81_get_Bottom(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Bottom(/*Double*/pVal){
            try{
                _NativeITerrain3DRectBase81_put_Bottom(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Width(){
        try{
            return _NativeITerrain3DRectBase81_get_Width(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Width(/*Double*/pVal){
            try{
                _NativeITerrain3DRectBase81_put_Width(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Depth(){
        try{
            return _NativeITerrain3DRectBase81_get_Depth(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Depth(/*Double*/pVal){
            try{
                _NativeITerrain3DRectBase81_put_Depth(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Height(){
        try{
            return _NativeITerrain3DRectBase81_get_Height(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Height(/*Double*/pVal){
            try{
                _NativeITerrain3DRectBase81_put_Height(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrain3DRegBase81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeITerrain3DRegBase81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return ((nativeHandle) => nativeHandle ? new IMessageObject81(nativeHandle) : null)(_NativeITerrain3DRegBase81_get_Message(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAction81(nativeHandle) : null)(_NativeITerrain3DRegBase81_get_Action(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeITerrain3DRegBase81_get_Position(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition81*/pVal){
            try{
                _NativeITerrain3DRegBase81_put_Position(this.getInstanceHandle,/*IPosition81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainObject81(nativeHandle) : null)(_NativeITerrain3DRegBase81_get_Terrain(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITooltip81(nativeHandle) : null)(_NativeITerrain3DRegBase81_get_Tooltip(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAttachment81(nativeHandle) : null)(_NativeITerrain3DRegBase81_get_Attachment(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return ((nativeHandle) => nativeHandle ? new IVisibility81(nativeHandle) : null)(_NativeITerrain3DRegBase81_get_Visibility(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITimeSpan81(nativeHandle) : null)(_NativeITerrain3DRegBase81_get_TimeSpan(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get LineStyle(){
        try{
            return ((nativeHandle) => nativeHandle ? new ILineStyle81(nativeHandle) : null)(_NativeITerrain3DRegBase81_get_LineStyle(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FillStyle(){
        try{
            return ((nativeHandle) => nativeHandle ? new IFillStyle81(nativeHandle) : null)(_NativeITerrain3DRegBase81_get_FillStyle(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Radius(){
        try{
            return _NativeITerrain3DRegBase81_get_Radius(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Radius(/*Double*/pVal){
            try{
                _NativeITerrain3DRegBase81_put_Radius(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Height(){
        try{
            return _NativeITerrain3DRegBase81_get_Height(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Height(/*Double*/pVal){
            try{
                _NativeITerrain3DRegBase81_put_Height(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get NumberOfSegments(){
        try{
            return _NativeITerrain3DRegBase81_get_NumberOfSegments(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set NumberOfSegments(/*Int32*/pVal){
            try{
                _NativeITerrain3DRegBase81_put_NumberOfSegments(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrainEllipse81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeITerrainEllipse81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return ((nativeHandle) => nativeHandle ? new IMessageObject81(nativeHandle) : null)(_NativeITerrainEllipse81_get_Message(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAction81(nativeHandle) : null)(_NativeITerrainEllipse81_get_Action(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeITerrainEllipse81_get_Position(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition81*/pVal){
            try{
                _NativeITerrainEllipse81_put_Position(this.getInstanceHandle,/*IPosition81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainObject81(nativeHandle) : null)(_NativeITerrainEllipse81_get_Terrain(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITooltip81(nativeHandle) : null)(_NativeITerrainEllipse81_get_Tooltip(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAttachment81(nativeHandle) : null)(_NativeITerrainEllipse81_get_Attachment(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return ((nativeHandle) => nativeHandle ? new IVisibility81(nativeHandle) : null)(_NativeITerrainEllipse81_get_Visibility(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITimeSpan81(nativeHandle) : null)(_NativeITerrainEllipse81_get_TimeSpan(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get LineStyle(){
        try{
            return ((nativeHandle) => nativeHandle ? new ILineStyle81(nativeHandle) : null)(_NativeITerrainEllipse81_get_LineStyle(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FillStyle(){
        try{
            return ((nativeHandle) => nativeHandle ? new IFillStyle81(nativeHandle) : null)(_NativeITerrainEllipse81_get_FillStyle(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Radius(){
        try{
            return _NativeITerrainEllipse81_get_Radius(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Radius(/*Double*/pVal){
            try{
                _NativeITerrainEllipse81_put_Radius(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Radius2(){
        try{
            return _NativeITerrainEllipse81_get_Radius2(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Radius2(/*Double*/pVal){
            try{
                _NativeITerrainEllipse81_put_Radius2(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get NumberOfSegments(){
        try{
            return _NativeITerrainEllipse81_get_NumberOfSegments(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set NumberOfSegments(/*Int32*/pVal){
            try{
                _NativeITerrainEllipse81_put_NumberOfSegments(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrainArc81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeITerrainArc81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return ((nativeHandle) => nativeHandle ? new IMessageObject81(nativeHandle) : null)(_NativeITerrainArc81_get_Message(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAction81(nativeHandle) : null)(_NativeITerrainArc81_get_Action(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeITerrainArc81_get_Position(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition81*/pVal){
            try{
                _NativeITerrainArc81_put_Position(this.getInstanceHandle,/*IPosition81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainObject81(nativeHandle) : null)(_NativeITerrainArc81_get_Terrain(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITooltip81(nativeHandle) : null)(_NativeITerrainArc81_get_Tooltip(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAttachment81(nativeHandle) : null)(_NativeITerrainArc81_get_Attachment(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return ((nativeHandle) => nativeHandle ? new IVisibility81(nativeHandle) : null)(_NativeITerrainArc81_get_Visibility(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITimeSpan81(nativeHandle) : null)(_NativeITerrainArc81_get_TimeSpan(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get LineStyle(){
        try{
            return ((nativeHandle) => nativeHandle ? new ILineStyle81(nativeHandle) : null)(_NativeITerrainArc81_get_LineStyle(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FillStyle(){
        try{
            return ((nativeHandle) => nativeHandle ? new IFillStyle81(nativeHandle) : null)(_NativeITerrainArc81_get_FillStyle(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Radius(){
        try{
            return _NativeITerrainArc81_get_Radius(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Radius(/*Double*/pVal){
            try{
                _NativeITerrainArc81_put_Radius(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Radius2(){
        try{
            return _NativeITerrainArc81_get_Radius2(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Radius2(/*Double*/pVal){
            try{
                _NativeITerrainArc81_put_Radius2(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get NumberOfSegments(){
        try{
            return _NativeITerrainArc81_get_NumberOfSegments(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set NumberOfSegments(/*Int32*/pVal){
            try{
                _NativeITerrainArc81_put_NumberOfSegments(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get StartAngle(){
        try{
            return _NativeITerrainArc81_get_StartAngle(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set StartAngle(/*Double*/pVal){
            try{
                _NativeITerrainArc81_put_StartAngle(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get EndAngle(){
        try{
            return _NativeITerrainArc81_get_EndAngle(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set EndAngle(/*Double*/pVal){
            try{
                _NativeITerrainArc81_put_EndAngle(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrainArrow81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeITerrainArrow81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return ((nativeHandle) => nativeHandle ? new IMessageObject81(nativeHandle) : null)(_NativeITerrainArrow81_get_Message(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAction81(nativeHandle) : null)(_NativeITerrainArrow81_get_Action(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeITerrainArrow81_get_Position(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition81*/pVal){
            try{
                _NativeITerrainArrow81_put_Position(this.getInstanceHandle,/*IPosition81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainObject81(nativeHandle) : null)(_NativeITerrainArrow81_get_Terrain(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITooltip81(nativeHandle) : null)(_NativeITerrainArrow81_get_Tooltip(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAttachment81(nativeHandle) : null)(_NativeITerrainArrow81_get_Attachment(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return ((nativeHandle) => nativeHandle ? new IVisibility81(nativeHandle) : null)(_NativeITerrainArrow81_get_Visibility(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITimeSpan81(nativeHandle) : null)(_NativeITerrainArrow81_get_TimeSpan(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get LineStyle(){
        try{
            return ((nativeHandle) => nativeHandle ? new ILineStyle81(nativeHandle) : null)(_NativeITerrainArrow81_get_LineStyle(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FillStyle(){
        try{
            return ((nativeHandle) => nativeHandle ? new IFillStyle81(nativeHandle) : null)(_NativeITerrainArrow81_get_FillStyle(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get HeadX(){
        try{
            return _NativeITerrainArrow81_get_HeadX(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set HeadX(/*Double*/pVal){
            try{
                _NativeITerrainArrow81_put_HeadX(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get HeadY(){
        try{
            return _NativeITerrainArrow81_get_HeadY(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set HeadY(/*Double*/pVal){
            try{
                _NativeITerrainArrow81_put_HeadY(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TailX(){
        try{
            return _NativeITerrainArrow81_get_TailX(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TailX(/*Double*/pVal){
            try{
                _NativeITerrainArrow81_put_TailX(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TailY(){
        try{
            return _NativeITerrainArrow81_get_TailY(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TailY(/*Double*/pVal){
            try{
                _NativeITerrainArrow81_put_TailY(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Style(){
        try{
            return _NativeITerrainArrow81_get_Style(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Style(/*Int32*/pVal){
            try{
                _NativeITerrainArrow81_put_Style(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrain3DArrow81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeITerrain3DArrow81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return ((nativeHandle) => nativeHandle ? new IMessageObject81(nativeHandle) : null)(_NativeITerrain3DArrow81_get_Message(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAction81(nativeHandle) : null)(_NativeITerrain3DArrow81_get_Action(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeITerrain3DArrow81_get_Position(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition81*/pVal){
            try{
                _NativeITerrain3DArrow81_put_Position(this.getInstanceHandle,/*IPosition81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainObject81(nativeHandle) : null)(_NativeITerrain3DArrow81_get_Terrain(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITooltip81(nativeHandle) : null)(_NativeITerrain3DArrow81_get_Tooltip(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAttachment81(nativeHandle) : null)(_NativeITerrain3DArrow81_get_Attachment(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return ((nativeHandle) => nativeHandle ? new IVisibility81(nativeHandle) : null)(_NativeITerrain3DArrow81_get_Visibility(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITimeSpan81(nativeHandle) : null)(_NativeITerrain3DArrow81_get_TimeSpan(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get LineStyle(){
        try{
            return ((nativeHandle) => nativeHandle ? new ILineStyle81(nativeHandle) : null)(_NativeITerrain3DArrow81_get_LineStyle(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FillStyle(){
        try{
            return ((nativeHandle) => nativeHandle ? new IFillStyle81(nativeHandle) : null)(_NativeITerrain3DArrow81_get_FillStyle(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get HeadX(){
        try{
            return _NativeITerrain3DArrow81_get_HeadX(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set HeadX(/*Double*/pVal){
            try{
                _NativeITerrain3DArrow81_put_HeadX(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get HeadY(){
        try{
            return _NativeITerrain3DArrow81_get_HeadY(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set HeadY(/*Double*/pVal){
            try{
                _NativeITerrain3DArrow81_put_HeadY(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TailX(){
        try{
            return _NativeITerrain3DArrow81_get_TailX(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TailX(/*Double*/pVal){
            try{
                _NativeITerrain3DArrow81_put_TailX(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TailY(){
        try{
            return _NativeITerrain3DArrow81_get_TailY(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TailY(/*Double*/pVal){
            try{
                _NativeITerrain3DArrow81_put_TailY(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Style(){
        try{
            return _NativeITerrain3DArrow81_get_Style(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Style(/*Int32*/pVal){
            try{
                _NativeITerrain3DArrow81_put_Style(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Height(){
        try{
            return _NativeITerrain3DArrow81_get_Height(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Height(/*Double*/pVal){
            try{
                _NativeITerrain3DArrow81_put_Height(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrainSphere81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeITerrainSphere81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return ((nativeHandle) => nativeHandle ? new IMessageObject81(nativeHandle) : null)(_NativeITerrainSphere81_get_Message(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAction81(nativeHandle) : null)(_NativeITerrainSphere81_get_Action(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeITerrainSphere81_get_Position(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition81*/pVal){
            try{
                _NativeITerrainSphere81_put_Position(this.getInstanceHandle,/*IPosition81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainObject81(nativeHandle) : null)(_NativeITerrainSphere81_get_Terrain(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITooltip81(nativeHandle) : null)(_NativeITerrainSphere81_get_Tooltip(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAttachment81(nativeHandle) : null)(_NativeITerrainSphere81_get_Attachment(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return ((nativeHandle) => nativeHandle ? new IVisibility81(nativeHandle) : null)(_NativeITerrainSphere81_get_Visibility(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITimeSpan81(nativeHandle) : null)(_NativeITerrainSphere81_get_TimeSpan(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get LineStyle(){
        try{
            return ((nativeHandle) => nativeHandle ? new ILineStyle81(nativeHandle) : null)(_NativeITerrainSphere81_get_LineStyle(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FillStyle(){
        try{
            return ((nativeHandle) => nativeHandle ? new IFillStyle81(nativeHandle) : null)(_NativeITerrainSphere81_get_FillStyle(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Radius(){
        try{
            return _NativeITerrainSphere81_get_Radius(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Radius(/*Double*/pVal){
            try{
                _NativeITerrainSphere81_put_Radius(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get SegmentDensity(){
        try{
            return _NativeITerrainSphere81_get_SegmentDensity(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set SegmentDensity(/*Int32*/pVal){
            try{
                _NativeITerrainSphere81_put_SegmentDensity(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Style(){
        try{
            return _NativeITerrainSphere81_get_Style(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Style(/*Int32*/pVal){
            try{
                _NativeITerrainSphere81_put_Style(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrainModel81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeITerrainModel81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return ((nativeHandle) => nativeHandle ? new IMessageObject81(nativeHandle) : null)(_NativeITerrainModel81_get_Message(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAction81(nativeHandle) : null)(_NativeITerrainModel81_get_Action(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeITerrainModel81_get_Position(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition81*/pVal){
            try{
                _NativeITerrainModel81_put_Position(this.getInstanceHandle,/*IPosition81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainObject81(nativeHandle) : null)(_NativeITerrainModel81_get_Terrain(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITooltip81(nativeHandle) : null)(_NativeITerrainModel81_get_Tooltip(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAttachment81(nativeHandle) : null)(_NativeITerrainModel81_get_Attachment(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return ((nativeHandle) => nativeHandle ? new IVisibility81(nativeHandle) : null)(_NativeITerrainModel81_get_Visibility(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITimeSpan81(nativeHandle) : null)(_NativeITerrainModel81_get_TimeSpan(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ModelFileName(){
        try{
            return UTF8ToString(_NativeITerrainModel81_get_ModelFileName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ModelFileName(/*String*/pVal){
            try{
                _NativeITerrainModel81_put_ModelFileName(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ScaleFactor(){
        try{
            return _NativeITerrainModel81_get_ScaleFactor(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ScaleFactor(/*Double*/pVal){
            try{
                _NativeITerrainModel81_put_ScaleFactor(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FlipTexture(){
        try{
            return _NativeITerrainModel81_get_FlipTexture(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FlipTexture(/*Boolean*/pVal){
            try{
                _NativeITerrainModel81_put_FlipTexture(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get BestLOD(){
        try{
            return _NativeITerrainModel81_get_BestLOD(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set BestLOD(/*Double*/pVal){
            try{
                _NativeITerrainModel81_put_BestLOD(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ModelType(){
        try{
            return _NativeITerrainModel81_get_ModelType(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ScaleX(){
        try{
            return _NativeITerrainModel81_get_ScaleX(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ScaleX(/*Double*/pVal){
            try{
                _NativeITerrainModel81_put_ScaleX(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ScaleY(){
        try{
            return _NativeITerrainModel81_get_ScaleY(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ScaleY(/*Double*/pVal){
            try{
                _NativeITerrainModel81_put_ScaleY(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ScaleZ(){
        try{
            return _NativeITerrainModel81_get_ScaleZ(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ScaleZ(/*Double*/pVal){
            try{
                _NativeITerrainModel81_put_ScaleZ(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrainImageLabel81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeITerrainImageLabel81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return ((nativeHandle) => nativeHandle ? new IMessageObject81(nativeHandle) : null)(_NativeITerrainImageLabel81_get_Message(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAction81(nativeHandle) : null)(_NativeITerrainImageLabel81_get_Action(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeITerrainImageLabel81_get_Position(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition81*/pVal){
            try{
                _NativeITerrainImageLabel81_put_Position(this.getInstanceHandle,/*IPosition81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainObject81(nativeHandle) : null)(_NativeITerrainImageLabel81_get_Terrain(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITooltip81(nativeHandle) : null)(_NativeITerrainImageLabel81_get_Tooltip(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAttachment81(nativeHandle) : null)(_NativeITerrainImageLabel81_get_Attachment(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return ((nativeHandle) => nativeHandle ? new IVisibility81(nativeHandle) : null)(_NativeITerrainImageLabel81_get_Visibility(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITimeSpan81(nativeHandle) : null)(_NativeITerrainImageLabel81_get_TimeSpan(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ImageFileName(){
        try{
            return UTF8ToString(_NativeITerrainImageLabel81_get_ImageFileName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ImageFileName(/*String*/pVal){
            try{
                _NativeITerrainImageLabel81_put_ImageFileName(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Style(){
        try{
            return ((nativeHandle) => nativeHandle ? new ILabelStyle81(nativeHandle) : null)(_NativeITerrainImageLabel81_get_Style(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Style(/*ILabelStyle81*/pVal){
            try{
                _NativeITerrainImageLabel81_put_Style(this.getInstanceHandle,/*ILabelStyle81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get BlendMode(){
        try{
            return _NativeITerrainImageLabel81_get_BlendMode(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set BlendMode(/*Int32*/pVal){
            try{
                _NativeITerrainImageLabel81_put_BlendMode(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    SetImageFromBuffer(/*Object*/buffer, /*Int32*/Width, /*Int32*/Height) {
        try{
            _NativeITerrainImageLabel81_SetImageFromBuffer(this.getInstanceHandle,/*Object*/Emval.toHandle(buffer),/*Int32*/Width,/*Int32*/Height);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ITerrainLabel81 extends ITerrainImageLabel81 {
    get Text(){
        try{
            return UTF8ToString(_NativeITerrainLabel81_get_Text(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Text(/*String*/pVal){
            try{
                _NativeITerrainLabel81_put_Text(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrainEffect81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeITerrainEffect81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return ((nativeHandle) => nativeHandle ? new IMessageObject81(nativeHandle) : null)(_NativeITerrainEffect81_get_Message(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAction81(nativeHandle) : null)(_NativeITerrainEffect81_get_Action(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeITerrainEffect81_get_Position(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition81*/pVal){
            try{
                _NativeITerrainEffect81_put_Position(this.getInstanceHandle,/*IPosition81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainObject81(nativeHandle) : null)(_NativeITerrainEffect81_get_Terrain(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITooltip81(nativeHandle) : null)(_NativeITerrainEffect81_get_Tooltip(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAttachment81(nativeHandle) : null)(_NativeITerrainEffect81_get_Attachment(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return ((nativeHandle) => nativeHandle ? new IVisibility81(nativeHandle) : null)(_NativeITerrainEffect81_get_Visibility(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITimeSpan81(nativeHandle) : null)(_NativeITerrainEffect81_get_TimeSpan(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get EffectXML(){
        try{
            return UTF8ToString(_NativeITerrainEffect81_get_EffectXML(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set EffectXML(/*String*/xml){
            try{
                _NativeITerrainEffect81_put_EffectXML(this.getInstanceHandle,/*String*/allocateUTF8(String(xml))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MaxViewingHeight(){
        try{
            return _NativeITerrainEffect81_get_MaxViewingHeight(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MaxViewingHeight(/*Double*/pVal){
            try{
                _NativeITerrainEffect81_put_MaxViewingHeight(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MinViewingHeight(){
        try{
            return _NativeITerrainEffect81_get_MinViewingHeight(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MinViewingHeight(/*Double*/pVal){
            try{
                _NativeITerrainEffect81_put_MinViewingHeight(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get LineToGroundType(){
        try{
            return _NativeITerrainEffect81_get_LineToGroundType(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set LineToGroundType(/*LineType*/pVal){
            try{
                _NativeITerrainEffect81_put_LineToGroundType(this.getInstanceHandle,/*LineType*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get LineToGroundLength(){
        try{
            return _NativeITerrainEffect81_get_LineToGroundLength(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set LineToGroundLength(/*Double*/pVal){
            try{
                _NativeITerrainEffect81_put_LineToGroundLength(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get LineColor(){
        try{
            return ((nativeHandle) => nativeHandle ? new IColor81(nativeHandle) : null)(_NativeITerrainEffect81_get_LineColor(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set LineColor(/*IColor81*/pVal){
            try{
                _NativeITerrainEffect81_put_LineColor(this.getInstanceHandle,/*IColor81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get LimitScreenSize(){
        try{
            return _NativeITerrainEffect81_get_LimitScreenSize(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set LimitScreenSize(/*Boolean*/pVal){
            try{
                _NativeITerrainEffect81_put_LimitScreenSize(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Scale(){
        try{
            return _NativeITerrainEffect81_get_Scale(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Scale(/*Double*/pVal){
            try{
                _NativeITerrainEffect81_put_Scale(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get SmallestVisibleSize(){
        try{
            return _NativeITerrainEffect81_get_SmallestVisibleSize(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set SmallestVisibleSize(/*Int32*/pVal){
            try{
                _NativeITerrainEffect81_put_SmallestVisibleSize(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrainLocation81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeITerrainLocation81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return ((nativeHandle) => nativeHandle ? new IMessageObject81(nativeHandle) : null)(_NativeITerrainLocation81_get_Message(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAction81(nativeHandle) : null)(_NativeITerrainLocation81_get_Action(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeITerrainLocation81_get_Position(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition81*/pVal){
            try{
                _NativeITerrainLocation81_put_Position(this.getInstanceHandle,/*IPosition81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITreeHotlink81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeITreeHotlink81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return ((nativeHandle) => nativeHandle ? new IMessageObject81(nativeHandle) : null)(_NativeITreeHotlink81_get_Message(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class ITerraExplorerMessage81 extends ITerraExplorerObject81 {
    get TargetPosition(){
        try{
            return _NativeITerraExplorerMessage81_get_TargetPosition(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TargetPosition(/*MsgTargetPosition*/pVal){
            try{
                _NativeITerraExplorerMessage81_put_TargetPosition(this.getInstanceHandle,/*MsgTargetPosition*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Text(){
        try{
            return UTF8ToString(_NativeITerraExplorerMessage81_get_Text(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Text(/*String*/pVal){
            try{
                _NativeITerraExplorerMessage81_put_Text(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get URL(){
        try{
            return UTF8ToString(_NativeITerraExplorerMessage81_get_URL(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set URL(/*String*/pVal){
            try{
                _NativeITerraExplorerMessage81_put_URL(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Type(){
        try{
            return _NativeITerraExplorerMessage81_get_Type(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Type(/*MsgType*/pVal){
            try{
                _NativeITerraExplorerMessage81_put_Type(this.getInstanceHandle,/*MsgType*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get BringToFront(){
        try{
            return _NativeITerraExplorerMessage81_get_BringToFront(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set BringToFront(/*Boolean*/pVal){
            try{
                _NativeITerraExplorerMessage81_put_BringToFront(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get UseEdge(){
        try{
            return _NativeITerraExplorerMessage81_get_UseEdge(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set UseEdge(/*Boolean*/pVal){
            try{
                _NativeITerraExplorerMessage81_put_UseEdge(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class IPopupMessage81 extends ITerraExplorerObject81 {
    get Left(){
        try{
            return _NativeIPopupMessage81_get_Left(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Left(/*Int32*/pVal){
            try{
                _NativeIPopupMessage81_put_Left(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Top(){
        try{
            return _NativeIPopupMessage81_get_Top(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Top(/*Int32*/pVal){
            try{
                _NativeIPopupMessage81_put_Top(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Width(){
        try{
            return _NativeIPopupMessage81_get_Width(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Width(/*Int32*/pVal){
            try{
                _NativeIPopupMessage81_put_Width(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Height(){
        try{
            return _NativeIPopupMessage81_get_Height(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Height(/*Int32*/pVal){
            try{
                _NativeIPopupMessage81_put_Height(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Caption(){
        try{
            return UTF8ToString(_NativeIPopupMessage81_get_Caption(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Caption(/*String*/pVal){
            try{
                _NativeIPopupMessage81_put_Caption(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Src(){
        try{
            return UTF8ToString(_NativeIPopupMessage81_get_Src(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Src(/*String*/pVal){
            try{
                _NativeIPopupMessage81_put_Src(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Timeout(){
        try{
            return _NativeIPopupMessage81_get_Timeout(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Timeout(/*Int32*/pVal){
            try{
                _NativeIPopupMessage81_put_Timeout(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get InnerHTML(){
        try{
            return UTF8ToString(_NativeIPopupMessage81_get_InnerHTML(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set InnerHTML(/*String*/pVal){
            try{
                _NativeIPopupMessage81_put_InnerHTML(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get InnerText(){
        try{
            return UTF8ToString(_NativeIPopupMessage81_get_InnerText(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set InnerText(/*String*/pVal){
            try{
                _NativeIPopupMessage81_put_InnerText(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get AllowResize(){
        try{
            return _NativeIPopupMessage81_get_AllowResize(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set AllowResize(/*Boolean*/pVal){
            try{
                _NativeIPopupMessage81_put_AllowResize(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get AllowDrag(){
        try{
            return _NativeIPopupMessage81_get_AllowDrag(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set AllowDrag(/*Boolean*/pVal){
            try{
                _NativeIPopupMessage81_put_AllowDrag(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get AnchorToView(){
        try{
            return _NativeIPopupMessage81_get_AnchorToView(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set AnchorToView(/*Boolean*/pVal){
            try{
                _NativeIPopupMessage81_put_AnchorToView(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ShowCaption(){
        try{
            return _NativeIPopupMessage81_get_ShowCaption(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ShowCaption(/*Boolean*/pVal){
            try{
                _NativeIPopupMessage81_put_ShowCaption(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FocusToRender(){
        try{
            return _NativeIPopupMessage81_get_FocusToRender(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FocusToRender(/*Boolean*/pVal){
            try{
                _NativeIPopupMessage81_put_FocusToRender(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Align(){
        try{
            return UTF8ToString(_NativeIPopupMessage81_get_Align(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Align(/*String*/pVal){
            try{
                _NativeIPopupMessage81_put_Align(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Flags(){
        try{
            return _NativeIPopupMessage81_get_Flags(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Flags(/*_HTML_POPUP_FLAGS*/pVal){
            try{
                _NativeIPopupMessage81_put_Flags(this.getInstanceHandle,/*_HTML_POPUP_FLAGS*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrainDynamicObject81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeITerrainDynamicObject81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return ((nativeHandle) => nativeHandle ? new IMessageObject81(nativeHandle) : null)(_NativeITerrainDynamicObject81_get_Message(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAction81(nativeHandle) : null)(_NativeITerrainDynamicObject81_get_Action(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeITerrainDynamicObject81_get_Position(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition81*/pVal){
            try{
                _NativeITerrainDynamicObject81_put_Position(this.getInstanceHandle,/*IPosition81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainObject81(nativeHandle) : null)(_NativeITerrainDynamicObject81_get_Terrain(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITooltip81(nativeHandle) : null)(_NativeITerrainDynamicObject81_get_Tooltip(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAttachment81(nativeHandle) : null)(_NativeITerrainDynamicObject81_get_Attachment(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return ((nativeHandle) => nativeHandle ? new IVisibility81(nativeHandle) : null)(_NativeITerrainDynamicObject81_get_Visibility(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITimeSpan81(nativeHandle) : null)(_NativeITerrainDynamicObject81_get_TimeSpan(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Waypoints(){
        try{
            return ((nativeHandle) => nativeHandle ? new Proxy(new IRouteWaypoints81(nativeHandle),get_Item_Handler) : null)(_NativeITerrainDynamicObject81_get_Waypoints(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get MotionStyle(){
        try{
            return _NativeITerrainDynamicObject81_get_MotionStyle(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MotionStyle(/*DynamicMotionStyle*/pVal){
            try{
                _NativeITerrainDynamicObject81_put_MotionStyle(this.getInstanceHandle,/*DynamicMotionStyle*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DynamicType(){
        try{
            return _NativeITerrainDynamicObject81_get_DynamicType(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DynamicType(/*DynamicObjectType*/pVal){
            try{
                _NativeITerrainDynamicObject81_put_DynamicType(this.getInstanceHandle,/*DynamicObjectType*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FileName(){
        try{
            return UTF8ToString(_NativeITerrainDynamicObject81_get_FileName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FileName(/*String*/pVal){
            try{
                _NativeITerrainDynamicObject81_put_FileName(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Text(){
        try{
            return UTF8ToString(_NativeITerrainDynamicObject81_get_Text(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Text(/*String*/pVal){
            try{
                _NativeITerrainDynamicObject81_put_Text(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TextColor(){
        try{
            return ((nativeHandle) => nativeHandle ? new IColor81(nativeHandle) : null)(_NativeITerrainDynamicObject81_get_TextColor(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TextColor(/*IColor81*/pVal){
            try{
                _NativeITerrainDynamicObject81_put_TextColor(this.getInstanceHandle,/*IColor81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get LimitScreenSize(){
        try{
            return _NativeITerrainDynamicObject81_get_LimitScreenSize(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set LimitScreenSize(/*Boolean*/pVal){
            try{
                _NativeITerrainDynamicObject81_put_LimitScreenSize(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get BackgroundColor(){
        try{
            return ((nativeHandle) => nativeHandle ? new IColor81(nativeHandle) : null)(_NativeITerrainDynamicObject81_get_BackgroundColor(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set BackgroundColor(/*IColor81*/pVal){
            try{
                _NativeITerrainDynamicObject81_put_BackgroundColor(this.getInstanceHandle,/*IColor81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FontName(){
        try{
            return UTF8ToString(_NativeITerrainDynamicObject81_get_FontName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FontName(/*String*/pVal){
            try{
                _NativeITerrainDynamicObject81_put_FontName(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FontSize(){
        try{
            return _NativeITerrainDynamicObject81_get_FontSize(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FontSize(/*Int32*/pVal){
            try{
                _NativeITerrainDynamicObject81_put_FontSize(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FontStyle(){
        try{
            return _NativeITerrainDynamicObject81_get_FontStyle(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FontStyle(/*Int32*/pVal){
            try{
                _NativeITerrainDynamicObject81_put_FontStyle(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ScaleFactor(){
        try{
            return _NativeITerrainDynamicObject81_get_ScaleFactor(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ScaleFactor(/*Double*/pVal){
            try{
                _NativeITerrainDynamicObject81_put_ScaleFactor(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FlipTexture(){
        try{
            return _NativeITerrainDynamicObject81_get_FlipTexture(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FlipTexture(/*Boolean*/pVal){
            try{
                _NativeITerrainDynamicObject81_put_FlipTexture(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get AltitudeType(){
        try{
            return _NativeITerrainDynamicObject81_get_AltitudeType(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set AltitudeType(/*AltitudeTypeCode*/pVal){
            try{
                _NativeITerrainDynamicObject81_put_AltitudeType(this.getInstanceHandle,/*AltitudeTypeCode*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Acceleration(){
        try{
            return _NativeITerrainDynamicObject81_get_Acceleration(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Acceleration(/*Double*/pVal){
            try{
                _NativeITerrainDynamicObject81_put_Acceleration(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TurnSpeed(){
        try{
            return _NativeITerrainDynamicObject81_get_TurnSpeed(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TurnSpeed(/*Double*/pVal){
            try{
                _NativeITerrainDynamicObject81_put_TurnSpeed(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get CircularRoute(){
        try{
            return _NativeITerrainDynamicObject81_get_CircularRoute(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set CircularRoute(/*CircularRouteType*/pVal){
            try{
                _NativeITerrainDynamicObject81_put_CircularRoute(this.getInstanceHandle,/*CircularRouteType*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Pause(){
        try{
            return _NativeITerrainDynamicObject81_get_Pause(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Pause(/*Boolean*/pVal){
            try{
                _NativeITerrainDynamicObject81_put_Pause(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MoveByTime(){
        try{
            return _NativeITerrainDynamicObject81_get_MoveByTime(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MoveByTime(/*Boolean*/pVal){
            try{
                _NativeITerrainDynamicObject81_put_MoveByTime(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get PlayRouteOnStartup(){
        try{
            return _NativeITerrainDynamicObject81_get_PlayRouteOnStartup(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set PlayRouteOnStartup(/*Boolean*/pVal){
            try{
                _NativeITerrainDynamicObject81_put_PlayRouteOnStartup(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TrackLineStyle(){
        try{
            return ((nativeHandle) => nativeHandle ? new ILineStyle81(nativeHandle) : null)(_NativeITerrainDynamicObject81_get_TrackLineStyle(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ShowTrack(){
        try{
            return _NativeITerrainDynamicObject81_get_ShowTrack(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ShowTrack(/*Boolean*/pVal){
            try{
                _NativeITerrainDynamicObject81_put_ShowTrack(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    RestartRoute(/*Int32*/Index=0) {
        try{
            _NativeITerrainDynamicObject81_RestartRoute(this.getInstanceHandle,/*Int32*/Index);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ITerrainRasterLayer81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeITerrainRasterLayer81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return ((nativeHandle) => nativeHandle ? new IMessageObject81(nativeHandle) : null)(_NativeITerrainRasterLayer81_get_Message(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAction81(nativeHandle) : null)(_NativeITerrainRasterLayer81_get_Action(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeITerrainRasterLayer81_get_Position(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition81*/pVal){
            try{
                _NativeITerrainRasterLayer81_put_Position(this.getInstanceHandle,/*IPosition81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainObject81(nativeHandle) : null)(_NativeITerrainRasterLayer81_get_Terrain(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITooltip81(nativeHandle) : null)(_NativeITerrainRasterLayer81_get_Tooltip(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAttachment81(nativeHandle) : null)(_NativeITerrainRasterLayer81_get_Attachment(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return ((nativeHandle) => nativeHandle ? new IVisibility81(nativeHandle) : null)(_NativeITerrainRasterLayer81_get_Visibility(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITimeSpan81(nativeHandle) : null)(_NativeITerrainRasterLayer81_get_TimeSpan(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get LineStyle(){
        try{
            return ((nativeHandle) => nativeHandle ? new ILineStyle81(nativeHandle) : null)(_NativeITerrainRasterLayer81_get_LineStyle(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Geometry(){
        try{
            return ((nativeHandle) => nativeHandle ? GetIGeometry81Derived(nativeHandle) : null)(_NativeITerrainRasterLayer81_get_Geometry(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Geometry(/*IGeometry*/pVal){
            try{
                _NativeITerrainRasterLayer81_put_Geometry(this.getInstanceHandle,/*IGeometry*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FillColor(){
        try{
            return ((nativeHandle) => nativeHandle ? new IColor81(nativeHandle) : null)(_NativeITerrainRasterLayer81_get_FillColor(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FillColor(/*IColor81*/pVal){
            try{
                _NativeITerrainRasterLayer81_put_FillColor(this.getInstanceHandle,/*IColor81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FileName(){
        try{
            return UTF8ToString(_NativeITerrainRasterLayer81_get_FileName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get InitParam(){
        try{
            return UTF8ToString(_NativeITerrainRasterLayer81_get_InitParam(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get PlugName(){
        try{
            return UTF8ToString(_NativeITerrainRasterLayer81_get_PlugName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get DisplayName(){
        try{
            return UTF8ToString(_NativeITerrainRasterLayer81_get_DisplayName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get CoordinateSystem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ICoordinateSystem81(nativeHandle) : null)(_NativeITerrainRasterLayer81_get_CoordinateSystem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set CoordinateSystem(/*ICoordinateSystem81*/pVal){
            try{
                _NativeITerrainRasterLayer81_put_CoordinateSystem(this.getInstanceHandle,/*ICoordinateSystem81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get UseNull(){
        try{
            return _NativeITerrainRasterLayer81_get_UseNull(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set UseNull(/*Boolean*/pVal){
            try{
                _NativeITerrainRasterLayer81_put_UseNull(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get NullValue(){
        try{
            return EmvalToJS(Emval.toValue(_NativeITerrainRasterLayer81_get_NullValue(this.getInstanceHandle))); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set NullValue(/*Object*/pVal){
            try{
                _NativeITerrainRasterLayer81_put_NullValue(this.getInstanceHandle,/*Object*/Emval.toHandle(pVal)); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get NullTolerance(){
        try{
            return _NativeITerrainRasterLayer81_get_NullTolerance(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set NullTolerance(/*Double*/pVal){
            try{
                _NativeITerrainRasterLayer81_put_NullTolerance(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ElevationScale(){
        try{
            return _NativeITerrainRasterLayer81_get_ElevationScale(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ElevationScale(/*Double*/pVal){
            try{
                _NativeITerrainRasterLayer81_put_ElevationScale(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ElevationOffset(){
        try{
            return _NativeITerrainRasterLayer81_get_ElevationOffset(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ElevationOffset(/*Double*/pVal){
            try{
                _NativeITerrainRasterLayer81_put_ElevationOffset(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ReprojectElevation(){
        try{
            return _NativeITerrainRasterLayer81_get_ReprojectElevation(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ReprojectElevation(/*Boolean*/pVal){
            try{
                _NativeITerrainRasterLayer81_put_ReprojectElevation(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Reproject(){
        try{
            return _NativeITerrainRasterLayer81_get_Reproject(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Reproject(/*Boolean*/pVal){
            try{
                _NativeITerrainRasterLayer81_put_Reproject(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Imagery(){
        try{
            return _NativeITerrainRasterLayer81_get_Imagery(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Elevation(){
        try{
            return _NativeITerrainRasterLayer81_get_Elevation(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get DataSourceWKT(){
        try{
            return UTF8ToString(_NativeITerrainRasterLayer81_get_DataSourceWKT(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get DataSourceBBox(){
        try{
            return ((nativeHandle) => nativeHandle ? new IBBox2D81(nativeHandle) : null)(_NativeITerrainRasterLayer81_get_DataSourceBBox(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    Refresh(/*Int32*/AutoRefreshTimeInterval) {
        try{
            _NativeITerrainRasterLayer81_Refresh(this.getInstanceHandle,/*Int32*/AutoRefreshTimeInterval);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    RefreshRect(/*Double*/MinX, /*Double*/MinY, /*Double*/MaxX, /*Double*/MaxY) {
        try{
            _NativeITerrainRasterLayer81_RefreshRect(this.getInstanceHandle,/*Double*/MinX,/*Double*/MinY,/*Double*/MaxX,/*Double*/MaxY);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ITerrainVideo81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeITerrainVideo81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return ((nativeHandle) => nativeHandle ? new IMessageObject81(nativeHandle) : null)(_NativeITerrainVideo81_get_Message(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAction81(nativeHandle) : null)(_NativeITerrainVideo81_get_Action(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeITerrainVideo81_get_Position(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition81*/pVal){
            try{
                _NativeITerrainVideo81_put_Position(this.getInstanceHandle,/*IPosition81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainObject81(nativeHandle) : null)(_NativeITerrainVideo81_get_Terrain(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITooltip81(nativeHandle) : null)(_NativeITerrainVideo81_get_Tooltip(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAttachment81(nativeHandle) : null)(_NativeITerrainVideo81_get_Attachment(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return ((nativeHandle) => nativeHandle ? new IVisibility81(nativeHandle) : null)(_NativeITerrainVideo81_get_Visibility(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITimeSpan81(nativeHandle) : null)(_NativeITerrainVideo81_get_TimeSpan(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get VideoFileName(){
        try{
            return UTF8ToString(_NativeITerrainVideo81_get_VideoFileName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set VideoFileName(/*String*/pVal){
            try{
                _NativeITerrainVideo81_put_VideoFileName(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TelemetryFileName(){
        try{
            return UTF8ToString(_NativeITerrainVideo81_get_TelemetryFileName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TelemetryFileName(/*String*/pVal){
            try{
                _NativeITerrainVideo81_put_TelemetryFileName(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get UseTelemetry(){
        try{
            return _NativeITerrainVideo81_get_UseTelemetry(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set UseTelemetry(/*Boolean*/pVal){
            try{
                _NativeITerrainVideo81_put_UseTelemetry(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ProjectionFieldOfView(){
        try{
            return _NativeITerrainVideo81_get_ProjectionFieldOfView(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ProjectionFieldOfView(/*Double*/pVal){
            try{
                _NativeITerrainVideo81_put_ProjectionFieldOfView(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get VideoOpacity(){
        try{
            return _NativeITerrainVideo81_get_VideoOpacity(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set VideoOpacity(/*Double*/pVal){
            try{
                _NativeITerrainVideo81_put_VideoOpacity(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ShowProjectionLines(){
        try{
            return _NativeITerrainVideo81_get_ShowProjectionLines(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ShowProjectionLines(/*Boolean*/pVal){
            try{
                _NativeITerrainVideo81_put_ShowProjectionLines(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ProjectionLinesLength(){
        try{
            return _NativeITerrainVideo81_get_ProjectionLinesLength(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ProjectionLinesLength(/*Double*/pVal){
            try{
                _NativeITerrainVideo81_put_ProjectionLinesLength(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ShowProjector(){
        try{
            return _NativeITerrainVideo81_get_ShowProjector(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ShowProjector(/*Boolean*/pVal){
            try{
                _NativeITerrainVideo81_put_ShowProjector(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ProjectorLength(){
        try{
            return _NativeITerrainVideo81_get_ProjectorLength(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ProjectorLength(/*Double*/pVal){
            try{
                _NativeITerrainVideo81_put_ProjectorLength(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Volume(){
        try{
            return _NativeITerrainVideo81_get_Volume(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Volume(/*Int32*/pVal){
            try{
                _NativeITerrainVideo81_put_Volume(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Mute(){
        try{
            return _NativeITerrainVideo81_get_Mute(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Mute(/*Boolean*/pVal){
            try{
                _NativeITerrainVideo81_put_Mute(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get PlayVideoOnStartup(){
        try{
            return _NativeITerrainVideo81_get_PlayVideoOnStartup(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set PlayVideoOnStartup(/*Boolean*/pVal){
            try{
                _NativeITerrainVideo81_put_PlayVideoOnStartup(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get VideoLength(){
        try{
            return _NativeITerrainVideo81_get_VideoLength(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get VideoPosition(){
        try{
            return _NativeITerrainVideo81_get_VideoPosition(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set VideoPosition(/*Double*/pVal){
            try{
                _NativeITerrainVideo81_put_VideoPosition(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get CanSeek(){
        try{
            return _NativeITerrainVideo81_get_CanSeek(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get PlayStatus(){
        try{
            return _NativeITerrainVideo81_get_PlayStatus(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get MaximumProjectionDistance(){
        try{
            return _NativeITerrainVideo81_get_MaximumProjectionDistance(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MaximumProjectionDistance(/*Double*/pVal){
            try{
                _NativeITerrainVideo81_put_MaximumProjectionDistance(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ProjectOnHiddenSurfaces(){
        try{
            return _NativeITerrainVideo81_get_ProjectOnHiddenSurfaces(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ProjectOnHiddenSurfaces(/*Boolean*/pVal){
            try{
                _NativeITerrainVideo81_put_ProjectOnHiddenSurfaces(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    PlayVideo(/*VideoPlayStatus*/Play=VideoPlayStatus81.VPS_PLAY) {
        try{
            _NativeITerrainVideo81_PlayVideo(this.getInstanceHandle,/*VideoPlayStatus*/Play);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetImage(/*Object*/Image, /*Int32*/Format=0, /*Object*/Param=null) {
        try{
            _NativeITerrainVideo81_SetImage(this.getInstanceHandle,/*Object*/Emval.toHandle(Image),/*Int32*/Format,/*Object*/Emval.toHandle(Param));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ITerrainPointCloudModel81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeITerrainPointCloudModel81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return ((nativeHandle) => nativeHandle ? new IMessageObject81(nativeHandle) : null)(_NativeITerrainPointCloudModel81_get_Message(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAction81(nativeHandle) : null)(_NativeITerrainPointCloudModel81_get_Action(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeITerrainPointCloudModel81_get_Position(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition81*/pVal){
            try{
                _NativeITerrainPointCloudModel81_put_Position(this.getInstanceHandle,/*IPosition81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainObject81(nativeHandle) : null)(_NativeITerrainPointCloudModel81_get_Terrain(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITooltip81(nativeHandle) : null)(_NativeITerrainPointCloudModel81_get_Tooltip(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAttachment81(nativeHandle) : null)(_NativeITerrainPointCloudModel81_get_Attachment(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return ((nativeHandle) => nativeHandle ? new IVisibility81(nativeHandle) : null)(_NativeITerrainPointCloudModel81_get_Visibility(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITimeSpan81(nativeHandle) : null)(_NativeITerrainPointCloudModel81_get_TimeSpan(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ModelFileName(){
        try{
            return UTF8ToString(_NativeITerrainPointCloudModel81_get_ModelFileName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ModelFileName(/*String*/pVal){
            try{
                _NativeITerrainPointCloudModel81_put_ModelFileName(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ScaleFactor(){
        try{
            return _NativeITerrainPointCloudModel81_get_ScaleFactor(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ScaleFactor(/*Double*/pVal){
            try{
                _NativeITerrainPointCloudModel81_put_ScaleFactor(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FlattenBelowTerrain(){
        try{
            return _NativeITerrainPointCloudModel81_get_FlattenBelowTerrain(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FlattenBelowTerrain(/*Boolean*/pVal){
            try{
                _NativeITerrainPointCloudModel81_put_FlattenBelowTerrain(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get HideBelowImagery(){
        try{
            return _NativeITerrainPointCloudModel81_get_HideBelowImagery(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set HideBelowImagery(/*Boolean*/pVal){
            try{
                _NativeITerrainPointCloudModel81_put_HideBelowImagery(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MinIntensity(){
        try{
            return _NativeITerrainPointCloudModel81_get_MinIntensity(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MinIntensity(/*Double*/pVal){
            try{
                _NativeITerrainPointCloudModel81_put_MinIntensity(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MaxIntensity(){
        try{
            return _NativeITerrainPointCloudModel81_get_MaxIntensity(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MaxIntensity(/*Double*/pVal){
            try{
                _NativeITerrainPointCloudModel81_put_MaxIntensity(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get IntensityBlend(){
        try{
            return _NativeITerrainPointCloudModel81_get_IntensityBlend(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set IntensityBlend(/*Double*/pVal){
            try{
                _NativeITerrainPointCloudModel81_put_IntensityBlend(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get PointSamplingInterval(){
        try{
            return _NativeITerrainPointCloudModel81_get_PointSamplingInterval(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set PointSamplingInterval(/*Double*/pVal){
            try{
                _NativeITerrainPointCloudModel81_put_PointSamplingInterval(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get PointSize(){
        try{
            return _NativeITerrainPointCloudModel81_get_PointSize(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set PointSize(/*Double*/pVal){
            try{
                _NativeITerrainPointCloudModel81_put_PointSize(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get PointColor(){
        try{
            return ((nativeHandle) => nativeHandle ? new IColor81(nativeHandle) : null)(_NativeITerrainPointCloudModel81_get_PointColor(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set PointColor(/*IColor81*/pVal){
            try{
                _NativeITerrainPointCloudModel81_put_PointColor(this.getInstanceHandle,/*IColor81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DataFormat(){
        try{
            return _NativeITerrainPointCloudModel81_get_DataFormat(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get DefaultLocation(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPointCloudDefaultLocation81(nativeHandle) : null)(_NativeITerrainPointCloudModel81_get_DefaultLocation(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    CopyStyleFrom(/*String*/PointCloudObjectID) {
        try{
            _NativeITerrainPointCloudModel81_CopyStyleFrom(this.getInstanceHandle,/*String*/allocateUTF8(String(PointCloudObjectID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CopyStyleTo(/*String*/PointCloudObjectID) {
        try{
            _NativeITerrainPointCloudModel81_CopyStyleTo(this.getInstanceHandle,/*String*/allocateUTF8(String(PointCloudObjectID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetClassification(/*String*/Name) {
        try{
            return UTF8ToString(_NativeITerrainPointCloudModel81_GetClassification(this.getInstanceHandle,/*String*/allocateUTF8(String(Name))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsClassified(/*String*/Name) {
        try{
            return _NativeITerrainPointCloudModel81_IsClassified(this.getInstanceHandle,/*String*/allocateUTF8(String(Name)))== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    OpenStyleEditorDialog(/*String*/Name) {
        try{
            _NativeITerrainPointCloudModel81_OpenStyleEditorDialog(this.getInstanceHandle,/*String*/allocateUTF8(String(Name)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetClassification(/*String*/Name, /*String*/Value) {
        try{
            _NativeITerrainPointCloudModel81_SetClassification(this.getInstanceHandle,/*String*/allocateUTF8(String(Name)),/*String*/allocateUTF8(String(Value)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ITerrainModifier81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeITerrainModifier81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return ((nativeHandle) => nativeHandle ? new IMessageObject81(nativeHandle) : null)(_NativeITerrainModifier81_get_Message(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAction81(nativeHandle) : null)(_NativeITerrainModifier81_get_Action(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeITerrainModifier81_get_Position(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition81*/pVal){
            try{
                _NativeITerrainModifier81_put_Position(this.getInstanceHandle,/*IPosition81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainObject81(nativeHandle) : null)(_NativeITerrainModifier81_get_Terrain(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITooltip81(nativeHandle) : null)(_NativeITerrainModifier81_get_Tooltip(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAttachment81(nativeHandle) : null)(_NativeITerrainModifier81_get_Attachment(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return ((nativeHandle) => nativeHandle ? new IVisibility81(nativeHandle) : null)(_NativeITerrainModifier81_get_Visibility(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITimeSpan81(nativeHandle) : null)(_NativeITerrainModifier81_get_TimeSpan(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Geometry(){
        try{
            return ((nativeHandle) => nativeHandle ? GetIGeometry81Derived(nativeHandle) : null)(_NativeITerrainModifier81_get_Geometry(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Geometry(/*IGeometry*/pVal){
            try{
                _NativeITerrainModifier81_put_Geometry(this.getInstanceHandle,/*IGeometry*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ElevationBehavior(){
        try{
            return _NativeITerrainModifier81_get_ElevationBehavior(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ElevationBehavior(/*ElevationBehaviorMode*/pVal){
            try{
                _NativeITerrainModifier81_put_ElevationBehavior(this.getInstanceHandle,/*ElevationBehaviorMode*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Flat(){
        try{
            return _NativeITerrainModifier81_get_Flat(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Flat(/*Boolean*/newVal){
            try{
                _NativeITerrainModifier81_put_Flat(this.getInstanceHandle,/*Boolean*/newVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ApplyTo(){
        try{
            return UTF8ToString(_NativeITerrainModifier81_get_ApplyTo(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ApplyTo(/*String*/MeshObjectID){
            try{
                _NativeITerrainModifier81_put_ApplyTo(this.getInstanceHandle,/*String*/allocateUTF8(String(MeshObjectID))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DrawOrder(){
        try{
            return _NativeITerrainModifier81_get_DrawOrder(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DrawOrder(/*Double*/pVal){
            try{
                _NativeITerrainModifier81_put_DrawOrder(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    GetFeather() {
        try{
            return _NativeITerrainModifier81_GetFeather(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetFeather(/*Double*/dFeather) {
        try{
            _NativeITerrainModifier81_SetFeather(this.getInstanceHandle,/*Double*/dFeather);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ITerrainHole81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeITerrainHole81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return ((nativeHandle) => nativeHandle ? new IMessageObject81(nativeHandle) : null)(_NativeITerrainHole81_get_Message(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAction81(nativeHandle) : null)(_NativeITerrainHole81_get_Action(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeITerrainHole81_get_Position(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition81*/pVal){
            try{
                _NativeITerrainHole81_put_Position(this.getInstanceHandle,/*IPosition81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainObject81(nativeHandle) : null)(_NativeITerrainHole81_get_Terrain(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITooltip81(nativeHandle) : null)(_NativeITerrainHole81_get_Tooltip(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAttachment81(nativeHandle) : null)(_NativeITerrainHole81_get_Attachment(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return ((nativeHandle) => nativeHandle ? new IVisibility81(nativeHandle) : null)(_NativeITerrainHole81_get_Visibility(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITimeSpan81(nativeHandle) : null)(_NativeITerrainHole81_get_TimeSpan(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Geometry(){
        try{
            return ((nativeHandle) => nativeHandle ? GetIGeometry81Derived(nativeHandle) : null)(_NativeITerrainHole81_get_Geometry(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Geometry(/*IGeometry*/pVal){
            try{
                _NativeITerrainHole81_put_Geometry(this.getInstanceHandle,/*IGeometry*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class IPresentation81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeIPresentation81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get SpeedFactor(){
        try{
            return _NativeIPresentation81_get_SpeedFactor(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set SpeedFactor(/*Double*/pVal){
            try{
                _NativeIPresentation81_put_SpeedFactor(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get CurrentlyPlayingActionId(){
        try{
            return UTF8ToString(_NativeIPresentation81_get_CurrentlyPlayingActionId(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get LoopMode(){
        try{
            return _NativeIPresentation81_get_LoopMode(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set LoopMode(/*Boolean*/pVal){
            try{
                _NativeIPresentation81_put_LoopMode(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get PresentationJSON(){
        try{
            return UTF8ToString(_NativeIPresentation81_get_PresentationJSON(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set PresentationJSON(/*String*/pVal){
            try{
                _NativeIPresentation81_put_PresentationJSON(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get PresentationJSONSchema(){
        try{
            return UTF8ToString(_NativeIPresentation81_get_PresentationJSONSchema(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get SettingsJSON(){
        try{
            return UTF8ToString(_NativeIPresentation81_get_SettingsJSON(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set SettingsJSON(/*String*/pVal){
            try{
                _NativeIPresentation81_put_SettingsJSON(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get PlayingPresentationJSON(){
        try{
            return UTF8ToString(_NativeIPresentation81_get_PlayingPresentationJSON(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Status(){
        try{
            return UTF8ToString(_NativeIPresentation81_get_Status(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    CopyItem(/*String*/ItemID, /*String*/NewParentID, /*String*/InsertBeforeID) {
        try{
            _NativeIPresentation81_CopyItem(this.getInstanceHandle,/*String*/allocateUTF8(String(ItemID)),/*String*/allocateUTF8(String(NewParentID)),/*String*/allocateUTF8(String(InsertBeforeID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateAction(/*String*/ActionData) {
        try{
            return ((nativeHandle) => nativeHandle ? new IPresentationItem81(nativeHandle) : null)(_NativeIPresentation81_CreateAction(this.getInstanceHandle,/*String*/allocateUTF8(String(ActionData))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateMovie(/*Int32*/FrameSize, /*Int32*/FramesPerSecond, /*Boolean*/HideOverlay) {
        try{
            _NativeIPresentation81_CreateMovie(this.getInstanceHandle,/*Int32*/FrameSize,/*Int32*/FramesPerSecond,/*Boolean*/HideOverlay);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateStep(/*String*/Description) {
        try{
            return ((nativeHandle) => nativeHandle ? new IPresentationItem81(nativeHandle) : null)(_NativeIPresentation81_CreateStep(this.getInstanceHandle,/*String*/allocateUTF8(String(Description))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DeleteItem(/*String*/ItemID) {
        try{
            _NativeIPresentation81_DeleteItem(this.getInstanceHandle,/*String*/allocateUTF8(String(ItemID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetItem(/*String*/ItemID) {
        try{
            return ((nativeHandle) => nativeHandle ? new IPresentationItem81(nativeHandle) : null)(_NativeIPresentation81_GetItem(this.getInstanceHandle,/*String*/allocateUTF8(String(ItemID))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetItemPosition(/*String*/ItemID) {
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeIPresentation81_GetItemPosition(this.getInstanceHandle,/*String*/allocateUTF8(String(ItemID))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    MoveItem(/*String*/ItemID, /*String*/NewParentID, /*String*/InsertBeforeID) {
        try{
            _NativeIPresentation81_MoveItem(this.getInstanceHandle,/*String*/allocateUTF8(String(ItemID)),/*String*/allocateUTF8(String(NewParentID)),/*String*/allocateUTF8(String(InsertBeforeID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    NextStep() {
        try{
            _NativeIPresentation81_NextStep(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Pause() {
        try{
            _NativeIPresentation81_Pause(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Play() {
        try{
            _NativeIPresentation81_Play(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    PlayFromID(/*String*/PresentationItemID) {
        try{
            _NativeIPresentation81_PlayFromID(this.getInstanceHandle,/*String*/allocateUTF8(String(PresentationItemID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    PreviousStep() {
        try{
            _NativeIPresentation81_PreviousStep(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ShowPath(/*String*/ItemID, /*Boolean*/Show, /*Boolean*/withAnimation) {
        try{
            _NativeIPresentation81_ShowPath(this.getInstanceHandle,/*String*/allocateUTF8(String(ItemID)),/*Boolean*/Show,/*Boolean*/withAnimation);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SkipAction() {
        try{
            _NativeIPresentation81_SkipAction(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Stop() {
        try{
            _NativeIPresentation81_Stop(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    StopMovie() {
        try{
            _NativeIPresentation81_StopMovie(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IScreenOverlay81 extends ITerraExplorerObject81 {
    get ImageFileName(){
        try{
            return UTF8ToString(_NativeIScreenOverlay81_get_ImageFileName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ImageFileName(/*String*/pVal){
            try{
                _NativeIScreenOverlay81_put_ImageFileName(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get OverlayXY(){
        try{
            return ((nativeHandle) => nativeHandle ? new IScreenOverlayXY81(nativeHandle) : null)(_NativeIScreenOverlay81_get_OverlayXY(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ScreenXY(){
        try{
            return ((nativeHandle) => nativeHandle ? new IScreenOverlayXY81(nativeHandle) : null)(_NativeIScreenOverlay81_get_ScreenXY(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Size(){
        try{
            return ((nativeHandle) => nativeHandle ? new IScreenOverlayXY81(nativeHandle) : null)(_NativeIScreenOverlay81_get_Size(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Rotation(){
        try{
            return _NativeIScreenOverlay81_get_Rotation(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Rotation(/*Double*/pVal){
            try{
                _NativeIScreenOverlay81_put_Rotation(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Color(){
        try{
            return ((nativeHandle) => nativeHandle ? new IColor81(nativeHandle) : null)(_NativeIScreenOverlay81_get_Color(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Color(/*IColor81*/pVal){
            try{
                _NativeIScreenOverlay81_put_Color(this.getInstanceHandle,/*IColor81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DrawOrder(){
        try{
            return _NativeIScreenOverlay81_get_DrawOrder(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DrawOrder(/*Int32*/pVal){
            try{
                _NativeIScreenOverlay81_put_DrawOrder(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ICommandLineProcessAsync81 extends TEIUnknownHandle81 {
    Abort() {
        try{
            _NativeICommandLineProcessAsync81_Abort(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    OnExit(/*Object*/dispFunc) {
        try{
            return ((nativeHandle) => nativeHandle ? new ICommandLineProcessAsync81(nativeHandle) : null)(_NativeICommandLineProcessAsync81_OnExit(this.getInstanceHandle,/*Object*/Emval.toHandle(dispFunc)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    OnStderr(/*Object*/dispFunc) {
        try{
            return ((nativeHandle) => nativeHandle ? new ICommandLineProcessAsync81(nativeHandle) : null)(_NativeICommandLineProcessAsync81_OnStderr(this.getInstanceHandle,/*Object*/Emval.toHandle(dispFunc)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    OnStdout(/*Object*/dispFunc) {
        try{
            return ((nativeHandle) => nativeHandle ? new ICommandLineProcessAsync81(nativeHandle) : null)(_NativeICommandLineProcessAsync81_OnStdout(this.getInstanceHandle,/*Object*/Emval.toHandle(dispFunc)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IVisibility81 extends TEIUnknownHandle81 {
    get Show(){
        try{
            return _NativeIVisibility81_get_Show(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Show(/*Boolean*/pVal){
            try{
                _NativeIVisibility81_put_Show(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MaxVisibilityDistance(){
        try{
            return _NativeIVisibility81_get_MaxVisibilityDistance(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MaxVisibilityDistance(/*Double*/pVal){
            try{
                _NativeIVisibility81_put_MaxVisibilityDistance(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MinVisibilityDistance(){
        try{
            return _NativeIVisibility81_get_MinVisibilityDistance(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MinVisibilityDistance(/*Double*/pVal){
            try{
                _NativeIVisibility81_put_MinVisibilityDistance(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ShowThroughDistance(){
        try{
            return _NativeIVisibility81_get_ShowThroughDistance(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ShowThroughDistance(/*Double*/pVal){
            try{
                _NativeIVisibility81_put_ShowThroughDistance(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class IBBox3D81 extends TEIUnknownHandle81 {
    get MinX(){
        try{
            return _NativeIBBox3D81_get_MinX(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MinX(/*Double*/pVal){
            try{
                _NativeIBBox3D81_put_MinX(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MinY(){
        try{
            return _NativeIBBox3D81_get_MinY(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MinY(/*Double*/pVal){
            try{
                _NativeIBBox3D81_put_MinY(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MinHeight(){
        try{
            return _NativeIBBox3D81_get_MinHeight(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MinHeight(/*Double*/pVal){
            try{
                _NativeIBBox3D81_put_MinHeight(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MaxX(){
        try{
            return _NativeIBBox3D81_get_MaxX(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MaxX(/*Double*/pVal){
            try{
                _NativeIBBox3D81_put_MaxX(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MaxY(){
        try{
            return _NativeIBBox3D81_get_MaxY(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MaxY(/*Double*/pVal){
            try{
                _NativeIBBox3D81_put_MaxY(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MaxHeight(){
        try{
            return _NativeIBBox3D81_get_MaxHeight(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MaxHeight(/*Double*/pVal){
            try{
                _NativeIBBox3D81_put_MaxHeight(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class I3DMLFeatureLayers81 extends TEIUnknownHandle81 {
    Item(/*Object*/Index){                                    
        try{
            return ((nativeHandle) => nativeHandle ? new I3DMLFeatureLayer81(nativeHandle) : null)(_NativeI3DMLFeatureLayers81_get_Item(this.getInstanceHandle,/*Object*/Emval.toHandle(Index)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Count(){
        try{
            return _NativeI3DMLFeatureLayers81_get_Count(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class ICoordinateSystem81 extends TEIUnknownHandle81 {
    get WellKnownText(){
        try{
            return UTF8ToString(_NativeICoordinateSystem81_get_WellKnownText(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set WellKnownText(/*String*/pVal){
            try{
                _NativeICoordinateSystem81_put_WellKnownText(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get WktDescription(){
        try{
            return UTF8ToString(_NativeICoordinateSystem81_get_WktDescription(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get PrettyWkt(){
        try{
            return UTF8ToString(_NativeICoordinateSystem81_get_PrettyWkt(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FactorToMeter(){
        try{
            return _NativeICoordinateSystem81_get_FactorToMeter(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    GetFactorToMeterEx(/*Double*/Y) {
        try{
            return _NativeICoordinateSystem81_GetFactorToMeterEx(this.getInstanceHandle,/*Double*/Y);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    InitFromBMG(/*String*/Group, /*String*/Sys, /*String*/Datum, /*String*/Unit) {
        try{
            _NativeICoordinateSystem81_InitFromBMG(this.getInstanceHandle,/*String*/allocateUTF8(String(Group)),/*String*/allocateUTF8(String(Sys)),/*String*/allocateUTF8(String(Datum)),/*String*/allocateUTF8(String(Unit)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    InitFromEPSG(/*Int32*/EPSG) {
        try{
            _NativeICoordinateSystem81_InitFromEPSG(this.getInstanceHandle,/*Int32*/EPSG);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    InitLatLong() {
        try{
            _NativeICoordinateSystem81_InitLatLong(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsCompound() {
        try{
            return _NativeICoordinateSystem81_IsCompound(this.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsGeocentric() {
        try{
            return _NativeICoordinateSystem81_IsGeocentric(this.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsPlanar() {
        try{
            return _NativeICoordinateSystem81_IsPlanar(this.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsSame(/*ICoordinateSystem81*/pCoordinateSystem) {
        try{
            return _NativeICoordinateSystem81_IsSame(this.getInstanceHandle,/*ICoordinateSystem81*/pCoordinateSystem.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsWktValid() {
        try{
            return _NativeICoordinateSystem81_IsWktValid(this.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    WriteWellKnownTextToFile(/*String*/FileName="") {
        try{
            return UTF8ToString(_NativeICoordinateSystem81_WriteWellKnownTextToFile(this.getInstanceHandle,/*String*/allocateUTF8(String(FileName))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IFeatureGroups81 extends TEIUnknownHandle81 {
    Item(/*Object*/Index){                                    
        try{
            return ((nativeHandle) => nativeHandle ? new IFeatureGroup81(nativeHandle) : null)(_NativeIFeatureGroups81_get_Item(this.getInstanceHandle,/*Object*/Emval.toHandle(Index)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Count(){
        try{
            return _NativeIFeatureGroups81_get_Count(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Polyline(){
        try{
            return ((nativeHandle) => nativeHandle ? new IFeatureGroup81(nativeHandle) : null)(_NativeIFeatureGroups81_get_Polyline(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Polygon(){
        try{
            return ((nativeHandle) => nativeHandle ? new IFeatureGroup81(nativeHandle) : null)(_NativeIFeatureGroups81_get_Polygon(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Point(){
        try{
            return ((nativeHandle) => nativeHandle ? new IFeatureGroup81(nativeHandle) : null)(_NativeIFeatureGroups81_get_Point(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Annotation(){
        try{
            return ((nativeHandle) => nativeHandle ? new IFeatureGroup81(nativeHandle) : null)(_NativeIFeatureGroups81_get_Annotation(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Text(){
        try{
            return ((nativeHandle) => nativeHandle ? new IFeatureGroup81(nativeHandle) : null)(_NativeIFeatureGroups81_get_Text(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    SetClassification(/*String*/Name, /*String*/Value) {
        try{
            _NativeIFeatureGroups81_SetClassification(this.getInstanceHandle,/*String*/allocateUTF8(String(Name)),/*String*/allocateUTF8(String(Value)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetProperty(/*String*/Name, /*Object*/Value) {
        try{
            _NativeIFeatureGroups81_SetProperty(this.getInstanceHandle,/*String*/allocateUTF8(String(Name)),/*Object*/Emval.toHandle(Value));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IBBox2D81 extends TEIUnknownHandle81 {
    get MinX(){
        try{
            return _NativeIBBox2D81_get_MinX(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MinX(/*Double*/pVal){
            try{
                _NativeIBBox2D81_put_MinX(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MinY(){
        try{
            return _NativeIBBox2D81_get_MinY(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MinY(/*Double*/pVal){
            try{
                _NativeIBBox2D81_put_MinY(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MaxX(){
        try{
            return _NativeIBBox2D81_get_MaxX(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MaxX(/*Double*/pVal){
            try{
                _NativeIBBox2D81_put_MaxX(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MaxY(){
        try{
            return _NativeIBBox2D81_get_MaxY(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MaxY(/*Double*/pVal){
            try{
                _NativeIBBox2D81_put_MaxY(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class IFeatureGroup81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeIFeatureGroup81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Features(){
        try{
            return ((nativeHandle) => nativeHandle ? new Proxy(new IFeatures81(nativeHandle),get_Item_Handler) : null)(_NativeIFeatureGroup81_get_Features(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get GeometryType(){
        try{
            return _NativeIFeatureGroup81_get_GeometryType(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get DisplayAs(){
        try{
            return _NativeIFeatureGroup81_get_DisplayAs(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DisplayAs(/*ObjectTypeCode*/ObjectType){
            try{
                _NativeIFeatureGroup81_put_DisplayAs(this.getInstanceHandle,/*ObjectTypeCode*/ObjectType); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    CreateFeature(/*Object*/Geometry, /*String*/Attributes="") {
        try{
            return UTF8ToString(_NativeIFeatureGroup81_CreateFeature(this.getInstanceHandle,/*Object*/Emval.toHandle(Geometry),/*String*/allocateUTF8(String(Attributes))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DrawFeature(/*DrawingMode*/DrawingMode=DrawingMode81.DRAW_MODE_MAGNET, /*Int32*/Left=2147483647, /*Int32*/Top=2147483647) {
        try{
            return ((nativeHandle) => nativeHandle ? new IFeature81(nativeHandle) : null)(_NativeIFeatureGroup81_DrawFeature(this.getInstanceHandle,/*DrawingMode*/DrawingMode,/*Int32*/Left,/*Int32*/Top));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ExecuteGetDataSourceFeatureIdQuery(/*String*/FeatureID) {
        try{
            return ((nativeHandle) => nativeHandle ? new IFeature81(nativeHandle) : null)(_NativeIFeatureGroup81_ExecuteGetDataSourceFeatureIdQuery(this.getInstanceHandle,/*String*/allocateUTF8(String(FeatureID))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetClassification(/*String*/Name) {
        try{
            return UTF8ToString(_NativeIFeatureGroup81_GetClassification(this.getInstanceHandle,/*String*/allocateUTF8(String(Name))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetCurrentFeatures() {
        try{
            return ((nativeHandle) => nativeHandle ? new IFeatures81(nativeHandle) : null)(_NativeIFeatureGroup81_GetCurrentFeatures(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetFeatureByObjectID(/*String*/ObjectID) {
        try{
            return ((nativeHandle) => nativeHandle ? new IFeature81(nativeHandle) : null)(_NativeIFeatureGroup81_GetFeatureByObjectID(this.getInstanceHandle,/*String*/allocateUTF8(String(ObjectID))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetProperty(/*String*/Name) {
        try{
            return EmvalToJS(Emval.toValue(_NativeIFeatureGroup81_GetProperty(this.getInstanceHandle,/*String*/allocateUTF8(String(Name)))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsAnnotation() {
        try{
            return _NativeIFeatureGroup81_IsAnnotation(this.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsClassified(/*String*/Name) {
        try{
            return _NativeIFeatureGroup81_IsClassified(this.getInstanceHandle,/*String*/allocateUTF8(String(Name)))== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    OpenStyleEditorDialog(/*String*/Name) {
        try{
            _NativeIFeatureGroup81_OpenStyleEditorDialog(this.getInstanceHandle,/*String*/allocateUTF8(String(Name)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    RemoveFeature(/*String*/ObjectID) {
        try{
            _NativeIFeatureGroup81_RemoveFeature(this.getInstanceHandle,/*String*/allocateUTF8(String(ObjectID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetClassification(/*String*/Name, /*String*/Value) {
        try{
            _NativeIFeatureGroup81_SetClassification(this.getInstanceHandle,/*String*/allocateUTF8(String(Name)),/*String*/allocateUTF8(String(Value)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetProperty(/*String*/Name, /*Object*/Value) {
        try{
            _NativeIFeatureGroup81_SetProperty(this.getInstanceHandle,/*String*/allocateUTF8(String(Name)),/*Object*/Emval.toHandle(Value));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IFeatureAttributes81 extends TEIUnknownHandle81 {
    Item(/*Object*/Index){                                    
        try{
            return ((nativeHandle) => nativeHandle ? new IFeatureAttribute81(nativeHandle) : null)(_NativeIFeatureAttributes81_get_Item(this.getInstanceHandle,/*Object*/Emval.toHandle(Index)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Count(){
        try{
            return _NativeIFeatureAttributes81_get_Count(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    GetFeatureAttribute(/*String*/attributeNameStr) {
        try{
            return ((nativeHandle) => nativeHandle ? new IFeatureAttribute81(nativeHandle) : null)(_NativeIFeatureAttributes81_GetFeatureAttribute(this.getInstanceHandle,/*String*/allocateUTF8(String(attributeNameStr))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IFeatureAttribute81 extends TEIUnknownHandle81 {
    get Name(){
        try{
            return UTF8ToString(_NativeIFeatureAttribute81_get_Name(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Value(){
        try{
            return UTF8ToString(_NativeIFeatureAttribute81_get_Value(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Value(/*String*/pVal){
            try{
                _NativeIFeatureAttribute81_put_Value(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class IAttributes81 extends TEIUnknownHandle81 {
    Item(/*Object*/Index){                                    
        try{
            return ((nativeHandle) => nativeHandle ? new IAttribute81(nativeHandle) : null)(_NativeIAttributes81_get_Item(this.getInstanceHandle,/*Object*/Emval.toHandle(Index)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Count(){
        try{
            return _NativeIAttributes81_get_Count(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    Attribute(/*Object*/Index){                                    
        try{
            return ((nativeHandle) => nativeHandle ? new IAttribute81(nativeHandle) : null)(_NativeIAttributes81_get_Attribute(this.getInstanceHandle,/*Object*/Emval.toHandle(Index)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ImportAll(/*Boolean*/val){
            try{
                _NativeIAttributes81_put_ImportAll(this.getInstanceHandle,/*Boolean*/val); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    CreateAttribute(/*String*/AttributeName, /*AttributeTypeCode*/attributeType, /*Int32*/Size, /*Int32*/Precision=15) {
        try{
            _NativeIAttributes81_CreateAttribute(this.getInstanceHandle,/*String*/allocateUTF8(String(AttributeName)),/*AttributeTypeCode*/attributeType,/*Int32*/Size,/*Int32*/Precision);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsAttributeExist(/*String*/AttributeName) {
        try{
            return _NativeIAttributes81_IsAttributeExist(this.getInstanceHandle,/*String*/allocateUTF8(String(AttributeName)))== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IAttribute81 extends TEIUnknownHandle81 {
    get Name(){
        try{
            return UTF8ToString(_NativeIAttribute81_get_Name(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Name(/*String*/pVal){
            try{
                _NativeIAttribute81_put_Name(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Type(){
        try{
            return _NativeIAttribute81_get_Type(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Type(/*AttributeTypeCode*/pVal){
            try{
                _NativeIAttribute81_put_Type(this.getInstanceHandle,/*AttributeTypeCode*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Size(){
        try{
            return _NativeIAttribute81_get_Size(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Size(/*Int32*/pVal){
            try{
                _NativeIAttribute81_put_Size(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Import(){
        try{
            return _NativeIAttribute81_get_Import(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Import(/*Boolean*/pVal){
            try{
                _NativeIAttribute81_put_Import(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class INetworkLink81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeINetworkLink81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Path(){
        try{
            return UTF8ToString(_NativeINetworkLink81_get_Path(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Path(/*String*/pVal){
            try{
                _NativeINetworkLink81_put_Path(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get AutoRefreshInterval(){
        try{
            return _NativeINetworkLink81_get_AutoRefreshInterval(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set AutoRefreshInterval(/*Int32*/seconds){
            try{
                _NativeINetworkLink81_put_AutoRefreshInterval(this.getInstanceHandle,/*Int32*/seconds); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get RefreshAfterStopInterval(){
        try{
            return _NativeINetworkLink81_get_RefreshAfterStopInterval(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set RefreshAfterStopInterval(/*Int32*/seconds){
            try{
                _NativeINetworkLink81_put_RefreshAfterStopInterval(this.getInstanceHandle,/*Int32*/seconds); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    Refresh() {
        try{
            _NativeINetworkLink81_Refresh(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IMessageObject81 extends TEIUnknownHandle81 {
    get MessageID(){
        try{
            return UTF8ToString(_NativeIMessageObject81_get_MessageID(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MessageID(/*String*/pVal){
            try{
                _NativeIMessageObject81_put_MessageID(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    Activate() {
        try{
            _NativeIMessageObject81_Activate(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetMessageObject() {
        try{
            return ((nativeHandle) => nativeHandle ? GetITerraExplorerObject81Derived(nativeHandle) : null)(_NativeIMessageObject81_GetMessageObject(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ITerrainObject81 extends TEIUnknownHandle81 {
    get GroundObject(){
        try{
            return _NativeITerrainObject81_get_GroundObject(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set GroundObject(/*Boolean*/pVal){
            try{
                _NativeITerrainObject81_put_GroundObject(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DrawOrder(){
        try{
            return _NativeITerrainObject81_get_DrawOrder(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DrawOrder(/*Double*/pVal){
            try{
                _NativeITerrainObject81_put_DrawOrder(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get BBox(){
        try{
            return ((nativeHandle) => nativeHandle ? new IBBox3D81(nativeHandle) : null)(_NativeITerrainObject81_get_BBox(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tint(){
        try{
            return ((nativeHandle) => nativeHandle ? new IColor81(nativeHandle) : null)(_NativeITerrainObject81_get_Tint(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Tint(/*IColor81*/pVal){
            try{
                _NativeITerrainObject81_put_Tint(this.getInstanceHandle,/*IColor81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Highlight(){
        try{
            return _NativeITerrainObject81_get_Highlight(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Highlight(/*Boolean*/pVal){
            try{
                _NativeITerrainObject81_put_Highlight(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    GetRecommendedDistance() {
        try{
            return _NativeITerrainObject81_GetRecommendedDistance(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ITooltip81 extends TEIUnknownHandle81 {
    get Text(){
        try{
            return UTF8ToString(_NativeITooltip81_get_Text(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Text(/*String*/pVal){
            try{
                _NativeITooltip81_put_Text(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class IAttachment81 extends TEIUnknownHandle81 {
    get IsAttached(){
        try{
            return _NativeIAttachment81_get_IsAttached(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get AutoDetach(){
        try{
            return _NativeIAttachment81_get_AutoDetach(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set AutoDetach(/*Boolean*/pVal){
            try{
                _NativeIAttachment81_put_AutoDetach(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DeltaX(){
        try{
            return _NativeIAttachment81_get_DeltaX(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DeltaX(/*Double*/DeltaX){
            try{
                _NativeIAttachment81_put_DeltaX(this.getInstanceHandle,/*Double*/DeltaX); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DeltaY(){
        try{
            return _NativeIAttachment81_get_DeltaY(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DeltaY(/*Double*/DeltaY){
            try{
                _NativeIAttachment81_put_DeltaY(this.getInstanceHandle,/*Double*/DeltaY); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DeltaAltitude(){
        try{
            return _NativeIAttachment81_get_DeltaAltitude(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DeltaAltitude(/*Double*/DeltaAltitude){
            try{
                _NativeIAttachment81_put_DeltaAltitude(this.getInstanceHandle,/*Double*/DeltaAltitude); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DeltaPitch(){
        try{
            return _NativeIAttachment81_get_DeltaPitch(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DeltaPitch(/*Double*/DeltaPitch){
            try{
                _NativeIAttachment81_put_DeltaPitch(this.getInstanceHandle,/*Double*/DeltaPitch); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DeltaYaw(){
        try{
            return _NativeIAttachment81_get_DeltaYaw(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DeltaYaw(/*Double*/DeltaYaw){
            try{
                _NativeIAttachment81_put_DeltaYaw(this.getInstanceHandle,/*Double*/DeltaYaw); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DeltaRoll(){
        try{
            return _NativeIAttachment81_get_DeltaRoll(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DeltaRoll(/*Double*/DeltaRoll){
            try{
                _NativeIAttachment81_put_DeltaRoll(this.getInstanceHandle,/*Double*/DeltaRoll); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get AttachedToID(){
        try{
            return UTF8ToString(_NativeIAttachment81_get_AttachedToID(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    AttachTo(/*String*/ObjectID, /*Double*/DeltaX, /*Double*/DeltaY, /*Double*/DeltaAltitude, /*Double*/DeltaYaw, /*Double*/DeltaPitch, /*Double*/DeltaRoll) {
        try{
            _NativeIAttachment81_AttachTo(this.getInstanceHandle,/*String*/allocateUTF8(String(ObjectID)),/*Double*/DeltaX,/*Double*/DeltaY,/*Double*/DeltaAltitude,/*Double*/DeltaYaw,/*Double*/DeltaPitch,/*Double*/DeltaRoll);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ITimeSpan81 extends TEIUnknownHandle81 {
    get Start(){
        try{
            return EmvalToJS(Emval.toValue(_NativeITimeSpan81_get_Start(this.getInstanceHandle))); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Start(/*Object*/pVal){
            try{
                _NativeITimeSpan81_put_Start(this.getInstanceHandle,/*Object*/Emval.toHandle(pVal)); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get End(){
        try{
            return EmvalToJS(Emval.toValue(_NativeITimeSpan81_get_End(this.getInstanceHandle))); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set End(/*Object*/pVal){
            try{
                _NativeITimeSpan81_put_End(this.getInstanceHandle,/*Object*/Emval.toHandle(pVal)); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ILineStyle81 extends TEIUnknownHandle81 {
    get Color(){
        try{
            return ((nativeHandle) => nativeHandle ? new IColor81(nativeHandle) : null)(_NativeILineStyle81_get_Color(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Color(/*IColor81*/pVal){
            try{
                _NativeILineStyle81_put_Color(this.getInstanceHandle,/*IColor81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Width(){
        try{
            return _NativeILineStyle81_get_Width(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Width(/*Double*/pVal){
            try{
                _NativeILineStyle81_put_Width(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get BackColor(){
        try{
            return ((nativeHandle) => nativeHandle ? new IColor81(nativeHandle) : null)(_NativeILineStyle81_get_BackColor(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set BackColor(/*IColor81*/pVal){
            try{
                _NativeILineStyle81_put_BackColor(this.getInstanceHandle,/*IColor81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Pattern(){
        try{
            return _NativeILineStyle81_get_Pattern(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Pattern(/*UInt32*/pVal){
            try{
                _NativeILineStyle81_put_Pattern(this.getInstanceHandle,/*UInt32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class IFillStyle81 extends TEIUnknownHandle81 {
    get Color(){
        try{
            return ((nativeHandle) => nativeHandle ? new IColor81(nativeHandle) : null)(_NativeIFillStyle81_get_Color(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Color(/*IColor81*/pVal){
            try{
                _NativeIFillStyle81_put_Color(this.getInstanceHandle,/*IColor81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Texture(){
        try{
            return ((nativeHandle) => nativeHandle ? new IObjectTexture81(nativeHandle) : null)(_NativeIFillStyle81_get_Texture(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IObjectTexture81 extends TEIUnknownHandle81 {
    get FileName(){
        try{
            return UTF8ToString(_NativeIObjectTexture81_get_FileName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FileName(/*String*/pVal){
            try{
                _NativeIObjectTexture81_put_FileName(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TilingMethod(){
        try{
            return _NativeIObjectTexture81_get_TilingMethod(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TilingMethod(/*TilingMethodCode*/pVal){
            try{
                _NativeIObjectTexture81_put_TilingMethod(this.getInstanceHandle,/*TilingMethodCode*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ScaleX(){
        try{
            return _NativeIObjectTexture81_get_ScaleX(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ScaleX(/*Double*/pVal){
            try{
                _NativeIObjectTexture81_put_ScaleX(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ScaleY(){
        try{
            return _NativeIObjectTexture81_get_ScaleY(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ScaleY(/*Double*/pVal){
            try{
                _NativeIObjectTexture81_put_ScaleY(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get RotateAngle(){
        try{
            return _NativeIObjectTexture81_get_RotateAngle(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set RotateAngle(/*Double*/pVal){
            try{
                _NativeIObjectTexture81_put_RotateAngle(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get XScrollRate(){
        try{
            return _NativeIObjectTexture81_get_XScrollRate(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set XScrollRate(/*Double*/pVal){
            try{
                _NativeIObjectTexture81_put_XScrollRate(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get YScrollRate(){
        try{
            return _NativeIObjectTexture81_get_YScrollRate(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set YScrollRate(/*Double*/pVal){
            try{
                _NativeIObjectTexture81_put_YScrollRate(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class IVolumeClassification81 extends TEIUnknownHandle81 {
    get Mode(){
        try{
            return _NativeIVolumeClassification81_get_Mode(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Mode(/*VolumeMode*/pVal){
            try{
                _NativeIVolumeClassification81_put_Mode(this.getInstanceHandle,/*VolumeMode*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ExtrudeUpFront(){
        try{
            return _NativeIVolumeClassification81_get_ExtrudeUpFront(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ExtrudeUpFront(/*Double*/Val){
            try{
                _NativeIVolumeClassification81_put_ExtrudeUpFront(this.getInstanceHandle,/*Double*/Val); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ExtrudeDownBack(){
        try{
            return _NativeIVolumeClassification81_get_ExtrudeDownBack(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ExtrudeDownBack(/*Double*/Val){
            try{
                _NativeIVolumeClassification81_put_ExtrudeDownBack(this.getInstanceHandle,/*Double*/Val); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get buffer(){
        try{
            return _NativeIVolumeClassification81_get_buffer(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set buffer(/*Double*/Val){
            try{
                _NativeIVolumeClassification81_put_buffer(this.getInstanceHandle,/*Double*/Val); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Vertical(){
        try{
            return _NativeIVolumeClassification81_get_Vertical(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IBuildingFace81 extends TEIUnknownHandle81 {
    get FillType(){
        try{
            return _NativeIBuildingFace81_get_FillType(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FillType(/*FaceFillTypeCode*/pVal){
            try{
                _NativeIBuildingFace81_put_FillType(this.getInstanceHandle,/*FaceFillTypeCode*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Color(){
        try{
            return ((nativeHandle) => nativeHandle ? new IColor81(nativeHandle) : null)(_NativeIBuildingFace81_get_Color(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Color(/*IColor81*/pVal){
            try{
                _NativeIBuildingFace81_put_Color(this.getInstanceHandle,/*IColor81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Texture(){
        try{
            return ((nativeHandle) => nativeHandle ? new IObjectTexture81(nativeHandle) : null)(_NativeIBuildingFace81_get_Texture(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IRoofFace81 extends IBuildingFace81 {
    get Style(){
        try{
            return _NativeIRoofFace81_get_Style(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Style(/*RoofStyleCode*/pVal){
            try{
                _NativeIRoofFace81_put_Style(this.getInstanceHandle,/*RoofStyleCode*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get RooftopDeltaHeight(){
        try{
            return _NativeIRoofFace81_get_RooftopDeltaHeight(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set RooftopDeltaHeight(/*Double*/pVal){
            try{
                _NativeIRoofFace81_put_RooftopDeltaHeight(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class IBuildingSides81 extends IBuildingFace81 {
    Item(/*Object*/Index){                                    
        try{
            return ((nativeHandle) => nativeHandle ? new IBuildingFace81(nativeHandle) : null)(_NativeIBuildingSides81_get_Item(this.getInstanceHandle,/*Object*/Emval.toHandle(Index)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Count(){
        try{
            return _NativeIBuildingSides81_get_Count(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IRouteWaypoints81 extends TEIUnknownHandle81 {
    Item(/*Object*/Index){                                    
        try{
            return ((nativeHandle) => nativeHandle ? new IRouteWaypoint81(nativeHandle) : null)(_NativeIRouteWaypoints81_get_Item(this.getInstanceHandle,/*Object*/Emval.toHandle(Index)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Count(){
        try{
            return _NativeIRouteWaypoints81_get_Count(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Current(){
        try{
            return _NativeIRouteWaypoints81_get_Current(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    AddWaypoint(/*IRouteWaypoint81*/pWaypoint) {
        try{
            _NativeIRouteWaypoints81_AddWaypoint(this.getInstanceHandle,/*IRouteWaypoint81*/pWaypoint.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DeleteWaypoint(/*Int32*/Index) {
        try{
            _NativeIRouteWaypoints81_DeleteWaypoint(this.getInstanceHandle,/*Int32*/Index);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    FromArray(/*Object*/Waypoints) {
        try{
            _NativeIRouteWaypoints81_FromArray(this.getInstanceHandle,/*Object*/Emval.toHandle(Waypoints));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetWaypoint(/*Int32*/Index) {
        try{
            return ((nativeHandle) => nativeHandle ? new IRouteWaypoint81(nativeHandle) : null)(_NativeIRouteWaypoints81_GetWaypoint(this.getInstanceHandle,/*Int32*/Index));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    InsertWaypoint(/*Int32*/IndexInsertAfter, /*IRouteWaypoint81*/pWaypoint) {
        try{
            _NativeIRouteWaypoints81_InsertWaypoint(this.getInstanceHandle,/*Int32*/IndexInsertAfter,/*IRouteWaypoint81*/pWaypoint.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ModifyWaypoint(/*Int32*/Index, /*IRouteWaypoint81*/pWaypoint) {
        try{
            _NativeIRouteWaypoints81_ModifyWaypoint(this.getInstanceHandle,/*Int32*/Index,/*IRouteWaypoint81*/pWaypoint.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ToArray() {
        try{
            return EmvalToJS(Emval.toValue(_NativeIRouteWaypoints81_ToArray(this.getInstanceHandle)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IPointCloudDefaultLocation81 extends TEIUnknownHandle81 {
    get X(){
        try{
            return _NativeIPointCloudDefaultLocation81_get_X(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Y(){
        try{
            return _NativeIPointCloudDefaultLocation81_get_Y(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Altitude(){
        try{
            return _NativeIPointCloudDefaultLocation81_get_Altitude(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get CoordinateSystem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ICoordinateSystem81(nativeHandle) : null)(_NativeIPointCloudDefaultLocation81_get_CoordinateSystem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IPresentationItem81 extends TEIUnknownHandle81 {
    get ID(){
        try{
            return UTF8ToString(_NativeIPresentationItem81_get_ID(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Description(){
        try{
            return UTF8ToString(_NativeIPresentationItem81_get_Description(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ItemJSON(){
        try{
            return UTF8ToString(_NativeIPresentationItem81_get_ItemJSON(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ItemJSON(/*String*/pVal){
            try{
                _NativeIPresentationItem81_put_ItemJSON(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Type(){
        try{
            return _NativeIPresentationItem81_get_Type(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Parent(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPresentationItem81(nativeHandle) : null)(_NativeIPresentationItem81_get_PARENT(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get NextSibling(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPresentationItem81(nativeHandle) : null)(_NativeIPresentationItem81_get_NextSibling(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get PreviousSibling(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPresentationItem81(nativeHandle) : null)(_NativeIPresentationItem81_get_PreviousSibling(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FirstChild(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPresentationItem81(nativeHandle) : null)(_NativeIPresentationItem81_get_FirstChild(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    IsParentOf(/*String*/PresentationItemID) {
        try{
            return _NativeIPresentationItem81_IsParentOf(this.getInstanceHandle,/*String*/allocateUTF8(String(PresentationItemID)))== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IScreenOverlayXY81 extends TEIUnknownHandle81 {
    get X(){
        try{
            return _NativeIScreenOverlayXY81_get_X(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set X(/*Double*/pVal){
            try{
                _NativeIScreenOverlayXY81_put_X(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Y(){
        try{
            return _NativeIScreenOverlayXY81_get_Y(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Y(/*Double*/pVal){
            try{
                _NativeIScreenOverlayXY81_put_Y(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get XUnit(){
        try{
            return _NativeIScreenOverlayXY81_get_XUnit(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set XUnit(/*ScreenOverlayUnits*/pVal){
            try{
                _NativeIScreenOverlayXY81_put_XUnit(this.getInstanceHandle,/*ScreenOverlayUnits*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get YUnit(){
        try{
            return _NativeIScreenOverlayXY81_get_YUnit(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set YUnit(/*ScreenOverlayUnits*/pVal){
            try{
                _NativeIScreenOverlayXY81_put_YUnit(this.getInstanceHandle,/*ScreenOverlayUnits*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class IWorldPointInfo81 extends TEIUnknownHandle81 {
    get Position(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeIWorldPointInfo81_get_Position(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ObjectID(){
        try{
            return UTF8ToString(_NativeIWorldPointInfo81_get_ObjectID(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Type(){
        try{
            return _NativeIWorldPointInfo81_get_Type(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class ITerraExplorerObjects81 extends TEIUnknownHandle81 {
    Item(/*Object*/Index){                                    
        try{
            return ((nativeHandle) => nativeHandle ? GetITerraExplorerObject81Derived(nativeHandle) : null)(_NativeITerraExplorerObjects81_get_Item(this.getInstanceHandle,/*Object*/Emval.toHandle(Index)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Count(){
        try{
            return _NativeITerraExplorerObjects81_get_Count(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IScreenPointInfo81 extends TEIUnknownHandle81 {
    get X(){
        try{
            return _NativeIScreenPointInfo81_get_X(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Y(){
        try{
            return _NativeIScreenPointInfo81_get_Y(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get InsideScreenRect(){
        try{
            return _NativeIScreenPointInfo81_get_InsideScreenRect(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get PointBehindCamera(){
        try{
            return _NativeIScreenPointInfo81_get_PointBehindCamera(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IMouseInfo81 extends TEIUnknownHandle81 {
    get X(){
        try{
            return _NativeIMouseInfo81_get_X(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Y(){
        try{
            return _NativeIMouseInfo81_get_Y(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get delta(){
        try{
            return _NativeIMouseInfo81_get_delta(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Flags(){
        try{
            return _NativeIMouseInfo81_get_Flags(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IScreenRect81 extends TEIUnknownHandle81 {
    get Left(){
        try{
            return _NativeIScreenRect81_get_Left(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Top(){
        try{
            return _NativeIScreenRect81_get_Top(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Width(){
        try{
            return _NativeIScreenRect81_get_Width(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Height(){
        try{
            return _NativeIScreenRect81_get_Height(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IModuleLicenseInfo81 extends TEIUnknownHandle81 {
    get Module(){
        try{
            return UTF8ToString(_NativeIModuleLicenseInfo81_get_Module(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Exist(){
        try{
            return _NativeIModuleLicenseInfo81_get_Exist(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Valid(){
        try{
            return _NativeIModuleLicenseInfo81_get_Valid(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ErrCode(){
        try{
            return _NativeIModuleLicenseInfo81_get_ErrCode(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ErrCodeEx(){
        try{
            return _NativeIModuleLicenseInfo81_get_ErrCodeEx(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ErrString(){
        try{
            return UTF8ToString(_NativeIModuleLicenseInfo81_get_ErrString(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get PurchaseType(){
        try{
            return UTF8ToString(_NativeIModuleLicenseInfo81_get_PurchaseType(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ExpirationDate(){
        try{
            return EmvalToJS(Emval.toValue(_NativeIModuleLicenseInfo81_get_ExpirationDate(this.getInstanceHandle))); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Version(){
        try{
            return UTF8ToString(_NativeIModuleLicenseInfo81_get_Version(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IContainers81 extends TEIUnknownHandle81 {
    Item(/*Object*/Index){                                    
        try{
            return ((nativeHandle) => nativeHandle ? new IContainer81(nativeHandle) : null)(_NativeIContainers81_get_Item(this.getInstanceHandle,/*Object*/Emval.toHandle(Index)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Count(){
        try{
            return _NativeIContainers81_get_Count(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    AddContainer(/*String*/Name, /*String*/URL, /*ContainerSite*/StartupSite) {
        try{
            return _NativeIContainers81_AddContainer(this.getInstanceHandle,/*String*/allocateUTF8(String(Name)),/*String*/allocateUTF8(String(URL)),/*ContainerSite*/StartupSite);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetContainer(/*Int32*/Index) {
        try{
            return ((nativeHandle) => nativeHandle ? new IContainerItem81(nativeHandle) : null)(_NativeIContainers81_GetContainer(this.getInstanceHandle,/*Int32*/Index));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    RemoveContainer(/*Int32*/Index) {
        try{
            _NativeIContainers81_RemoveContainer(this.getInstanceHandle,/*Int32*/Index);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IMultiple3DWindows81 extends TEIUnknownHandle81 {
    IsLeader() {
        try{
            return _NativeIMultiple3DWindows81_IsLeader(this.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    LinkPosition(/*Object*/target, /*Double*/OffsetX=0, /*Double*/OffsetY=0, /*Double*/OffsetAltitude=0, /*Double*/OffsetYaw=0, /*Double*/OffsetPitch=0, /*LinkPositionFlags*/LinkFlags=LinkPositionFlags81.LP_NONE) {
        try{
            _NativeIMultiple3DWindows81_LinkPosition(this.getInstanceHandle,/*Object*/Emval.toHandle(target),/*Double*/OffsetX,/*Double*/OffsetY,/*Double*/OffsetAltitude,/*Double*/OffsetYaw,/*Double*/OffsetPitch,/*LinkPositionFlags*/LinkFlags);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetAsLeader() {
        try{
            _NativeIMultiple3DWindows81_SetAsLeader(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    UnlinkPosition() {
        try{
            _NativeIMultiple3DWindows81_UnlinkPosition(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IClipboard81 extends TEIUnknownHandle81 {
    Item(/*Object*/Index){                                    
        try{
            return ((nativeHandle) => nativeHandle ? GetITerraExplorerObject81Derived(nativeHandle) : null)(_NativeIClipboard81_get_Item(this.getInstanceHandle,/*Object*/Emval.toHandle(Index)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Count(){
        try{
            return _NativeIClipboard81_get_Count(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    AddObject(/*String*/ObjectID) {
        try{
            _NativeIClipboard81_AddObject(this.getInstanceHandle,/*String*/allocateUTF8(String(ObjectID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    RemoveAll() {
        try{
            _NativeIClipboard81_RemoveAll(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ISelection81 extends TEIUnknownHandle81 {
    Item(/*Object*/Index){                                    
        try{
            return ((nativeHandle) => nativeHandle ? GetITerraExplorerObject81Derived(nativeHandle) : null)(_NativeISelection81_get_Item(this.getInstanceHandle,/*Object*/Emval.toHandle(Index)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Count(){
        try{
            return _NativeISelection81_get_Count(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    Add(/*String*/ObjectID) {
        try{
            _NativeISelection81_Add(this.getInstanceHandle,/*String*/allocateUTF8(String(ObjectID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CanAdd(/*String*/ObjectID) {
        try{
            return _NativeISelection81_CanAdd(this.getInstanceHandle,/*String*/allocateUTF8(String(ObjectID)))== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Remove(/*String*/ObjectID) {
        try{
            _NativeISelection81_Remove(this.getInstanceHandle,/*String*/allocateUTF8(String(ObjectID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    RemoveAll() {
        try{
            _NativeISelection81_RemoveAll(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class I3DViewshed81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeI3DViewshed81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return ((nativeHandle) => nativeHandle ? new IMessageObject81(nativeHandle) : null)(_NativeI3DViewshed81_get_Message(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAction81(nativeHandle) : null)(_NativeI3DViewshed81_get_Action(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeI3DViewshed81_get_Position(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition81*/pVal){
            try{
                _NativeI3DViewshed81_put_Position(this.getInstanceHandle,/*IPosition81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainObject81(nativeHandle) : null)(_NativeI3DViewshed81_get_Terrain(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITooltip81(nativeHandle) : null)(_NativeI3DViewshed81_get_Tooltip(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAttachment81(nativeHandle) : null)(_NativeI3DViewshed81_get_Attachment(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return ((nativeHandle) => nativeHandle ? new IVisibility81(nativeHandle) : null)(_NativeI3DViewshed81_get_Visibility(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITimeSpan81(nativeHandle) : null)(_NativeI3DViewshed81_get_TimeSpan(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FieldOfViewX(){
        try{
            return _NativeI3DViewshed81_get_FieldOfViewX(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FieldOfViewX(/*Double*/pVal){
            try{
                _NativeI3DViewshed81_put_FieldOfViewX(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FieldOfViewY(){
        try{
            return _NativeI3DViewshed81_get_FieldOfViewY(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FieldOfViewY(/*Double*/pVal){
            try{
                _NativeI3DViewshed81_put_FieldOfViewY(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Distance(){
        try{
            return _NativeI3DViewshed81_get_Distance(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Distance(/*Double*/pVal){
            try{
                _NativeI3DViewshed81_put_Distance(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get RayColor(){
        try{
            return ((nativeHandle) => nativeHandle ? new IColor81(nativeHandle) : null)(_NativeI3DViewshed81_get_RayColor(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set RayColor(/*IColor81*/pVal){
            try{
                _NativeI3DViewshed81_put_RayColor(this.getInstanceHandle,/*IColor81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get VisibleAreaColor(){
        try{
            return ((nativeHandle) => nativeHandle ? new IColor81(nativeHandle) : null)(_NativeI3DViewshed81_get_VisibleAreaColor(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set VisibleAreaColor(/*IColor81*/pVal){
            try{
                _NativeI3DViewshed81_put_VisibleAreaColor(this.getInstanceHandle,/*IColor81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get HiddenAreaColor(){
        try{
            return ((nativeHandle) => nativeHandle ? new IColor81(nativeHandle) : null)(_NativeI3DViewshed81_get_HiddenAreaColor(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set HiddenAreaColor(/*IColor81*/pVal){
            try{
                _NativeI3DViewshed81_put_HiddenAreaColor(this.getInstanceHandle,/*IColor81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Quality(){
        try{
            return _NativeI3DViewshed81_get_Quality(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Quality(/*ViewshedQuality*/pVal){
            try{
                _NativeI3DViewshed81_put_Quality(this.getInstanceHandle,/*ViewshedQuality*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get RefreshRate(){
        try{
            return _NativeI3DViewshed81_get_RefreshRate(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set RefreshRate(/*ViewshedRefreshRate*/pVal){
            try{
                _NativeI3DViewshed81_put_RefreshRate(this.getInstanceHandle,/*ViewshedRefreshRate*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ILineOfSight81 extends ITerraExplorerObject81 {
    get VisibleTargets(){
        try{
            return EmvalToJS(Emval.toValue(_NativeILineOfSight81_get_VisibleTargets(this.getInstanceHandle))); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get HiddenTargets(){
        try{
            return EmvalToJS(Emval.toValue(_NativeILineOfSight81_get_HiddenTargets(this.getInstanceHandle))); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class ITerrainThreatDome81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeITerrainThreatDome81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return ((nativeHandle) => nativeHandle ? new IMessageObject81(nativeHandle) : null)(_NativeITerrainThreatDome81_get_Message(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAction81(nativeHandle) : null)(_NativeITerrainThreatDome81_get_Action(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeITerrainThreatDome81_get_Position(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition81*/pVal){
            try{
                _NativeITerrainThreatDome81_put_Position(this.getInstanceHandle,/*IPosition81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainObject81(nativeHandle) : null)(_NativeITerrainThreatDome81_get_Terrain(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITooltip81(nativeHandle) : null)(_NativeITerrainThreatDome81_get_Tooltip(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return ((nativeHandle) => nativeHandle ? new IVisibility81(nativeHandle) : null)(_NativeITerrainThreatDome81_get_Visibility(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITimeSpan81(nativeHandle) : null)(_NativeITerrainThreatDome81_get_TimeSpan(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Color(){
        try{
            return ((nativeHandle) => nativeHandle ? new IColor81(nativeHandle) : null)(_NativeITerrainThreatDome81_get_Color(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Color(/*IColor81*/pVal){
            try{
                _NativeITerrainThreatDome81_put_Color(this.getInstanceHandle,/*IColor81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Range(){
        try{
            return _NativeITerrainThreatDome81_get_Range(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get AngularStep(){
        try{
            return _NativeITerrainThreatDome81_get_AngularStep(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get RadialStep(){
        try{
            return _NativeITerrainThreatDome81_get_RadialStep(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Direction(){
        try{
            return _NativeITerrainThreatDome81_get_Direction(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get HorizontalFOV(){
        try{
            return _NativeITerrainThreatDome81_get_HorizontalFOV(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ElevationAngle(){
        try{
            return _NativeITerrainThreatDome81_get_ElevationAngle(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get HorizontalStartAngle(){
        try{
            return _NativeITerrainThreatDome81_get_HorizontalStartAngle(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get HorizontalEndAngle(){
        try{
            return _NativeITerrainThreatDome81_get_HorizontalEndAngle(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IContourMap81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeIContourMap81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return ((nativeHandle) => nativeHandle ? new IMessageObject81(nativeHandle) : null)(_NativeIContourMap81_get_Message(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAction81(nativeHandle) : null)(_NativeIContourMap81_get_Action(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeIContourMap81_get_Position(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition81*/pVal){
            try{
                _NativeIContourMap81_put_Position(this.getInstanceHandle,/*IPosition81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainObject81(nativeHandle) : null)(_NativeIContourMap81_get_Terrain(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITooltip81(nativeHandle) : null)(_NativeIContourMap81_get_Tooltip(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAttachment81(nativeHandle) : null)(_NativeIContourMap81_get_Attachment(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return ((nativeHandle) => nativeHandle ? new IVisibility81(nativeHandle) : null)(_NativeIContourMap81_get_Visibility(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITimeSpan81(nativeHandle) : null)(_NativeIContourMap81_get_TimeSpan(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Top(){
        try{
            return _NativeIContourMap81_get_Top(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Top(/*Double*/pVal){
            try{
                _NativeIContourMap81_put_Top(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Left(){
        try{
            return _NativeIContourMap81_get_Left(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Left(/*Double*/pVal){
            try{
                _NativeIContourMap81_put_Left(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Right(){
        try{
            return _NativeIContourMap81_get_Right(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Right(/*Double*/pVal){
            try{
                _NativeIContourMap81_put_Right(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Bottom(){
        try{
            return _NativeIContourMap81_get_Bottom(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Bottom(/*Double*/pVal){
            try{
                _NativeIContourMap81_put_Bottom(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Width(){
        try{
            return _NativeIContourMap81_get_Width(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Width(/*Double*/pVal){
            try{
                _NativeIContourMap81_put_Width(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Depth(){
        try{
            return _NativeIContourMap81_get_Depth(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Depth(/*Double*/pVal){
            try{
                _NativeIContourMap81_put_Depth(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DisplayStyle(){
        try{
            return _NativeIContourMap81_get_DisplayStyle(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DisplayStyle(/*ContourDisplayStyle*/pVal){
            try{
                _NativeIContourMap81_put_DisplayStyle(this.getInstanceHandle,/*ContourDisplayStyle*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get UseMinMaxValues(){
        try{
            return _NativeIContourMap81_get_UseMinMaxValues(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set UseMinMaxValues(/*Boolean*/pVal){
            try{
                _NativeIContourMap81_put_UseMinMaxValues(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MinElevation(){
        try{
            return _NativeIContourMap81_get_MinElevation(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MinElevation(/*Double*/pVal){
            try{
                _NativeIContourMap81_put_MinElevation(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MaxElevation(){
        try{
            return _NativeIContourMap81_get_MaxElevation(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MaxElevation(/*Double*/pVal){
            try{
                _NativeIContourMap81_put_MaxElevation(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ColorOutsideOfRange(){
        try{
            return _NativeIContourMap81_get_ColorOutsideOfRange(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ColorOutsideOfRange(/*ContourColorOutsideOfRange*/pVal){
            try{
                _NativeIContourMap81_put_ColorOutsideOfRange(this.getInstanceHandle,/*ContourColorOutsideOfRange*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get CoverageArea(){
        try{
            return _NativeIContourMap81_get_CoverageArea(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set CoverageArea(/*CoverageArea*/pVal){
            try{
                _NativeIContourMap81_put_CoverageArea(this.getInstanceHandle,/*CoverageArea*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get PaletteID(){
        try{
            return UTF8ToString(_NativeIContourMap81_get_PaletteID(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set PaletteID(/*String*/pVal){
            try{
                _NativeIContourMap81_put_PaletteID(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ContourLinesColor(){
        try{
            return ((nativeHandle) => nativeHandle ? new IColor81(nativeHandle) : null)(_NativeIContourMap81_get_ContourLinesColor(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ContourLinesColor(/*IColor81*/pVal){
            try{
                _NativeIContourMap81_put_ContourLinesColor(this.getInstanceHandle,/*IColor81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ContourLinesInterval(){
        try{
            return _NativeIContourMap81_get_ContourLinesInterval(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ContourLinesInterval(/*Double*/pVal){
            try{
                _NativeIContourMap81_put_ContourLinesInterval(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Opacity(){
        try{
            return _NativeIContourMap81_get_Opacity(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Opacity(/*Double*/Opacity){
            try{
                _NativeIContourMap81_put_Opacity(this.getInstanceHandle,/*Double*/Opacity); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ISlopeMap81 extends ITerraExplorerObject81 {
    get TreeItem(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITreeItem81(nativeHandle) : null)(_NativeISlopeMap81_get_TreeItem(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return ((nativeHandle) => nativeHandle ? new IMessageObject81(nativeHandle) : null)(_NativeISlopeMap81_get_Message(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAction81(nativeHandle) : null)(_NativeISlopeMap81_get_Action(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPosition81(nativeHandle) : null)(_NativeISlopeMap81_get_Position(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition81*/pVal){
            try{
                _NativeISlopeMap81_put_Position(this.getInstanceHandle,/*IPosition81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITerrainObject81(nativeHandle) : null)(_NativeISlopeMap81_get_Terrain(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITooltip81(nativeHandle) : null)(_NativeISlopeMap81_get_Tooltip(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return ((nativeHandle) => nativeHandle ? new IAttachment81(nativeHandle) : null)(_NativeISlopeMap81_get_Attachment(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return ((nativeHandle) => nativeHandle ? new IVisibility81(nativeHandle) : null)(_NativeISlopeMap81_get_Visibility(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return ((nativeHandle) => nativeHandle ? new ITimeSpan81(nativeHandle) : null)(_NativeISlopeMap81_get_TimeSpan(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Top(){
        try{
            return _NativeISlopeMap81_get_Top(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Top(/*Double*/pVal){
            try{
                _NativeISlopeMap81_put_Top(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Left(){
        try{
            return _NativeISlopeMap81_get_Left(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Left(/*Double*/pVal){
            try{
                _NativeISlopeMap81_put_Left(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Right(){
        try{
            return _NativeISlopeMap81_get_Right(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Right(/*Double*/pVal){
            try{
                _NativeISlopeMap81_put_Right(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Bottom(){
        try{
            return _NativeISlopeMap81_get_Bottom(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Bottom(/*Double*/pVal){
            try{
                _NativeISlopeMap81_put_Bottom(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Width(){
        try{
            return _NativeISlopeMap81_get_Width(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Width(/*Double*/pVal){
            try{
                _NativeISlopeMap81_put_Width(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Depth(){
        try{
            return _NativeISlopeMap81_get_Depth(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Depth(/*Double*/pVal){
            try{
                _NativeISlopeMap81_put_Depth(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DisplayStyle(){
        try{
            return _NativeISlopeMap81_get_DisplayStyle(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DisplayStyle(/*SlopeDisplayStyle*/pVal){
            try{
                _NativeISlopeMap81_put_DisplayStyle(this.getInstanceHandle,/*SlopeDisplayStyle*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get CoverageArea(){
        try{
            return _NativeISlopeMap81_get_CoverageArea(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set CoverageArea(/*CoverageArea*/pVal){
            try{
                _NativeISlopeMap81_put_CoverageArea(this.getInstanceHandle,/*CoverageArea*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get PaletteID(){
        try{
            return UTF8ToString(_NativeISlopeMap81_get_PaletteID(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set PaletteID(/*String*/pVal){
            try{
                _NativeISlopeMap81_put_PaletteID(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ArrowColor(){
        try{
            return ((nativeHandle) => nativeHandle ? new IColor81(nativeHandle) : null)(_NativeISlopeMap81_get_ArrowColor(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ArrowColor(/*IColor81*/pVal){
            try{
                _NativeISlopeMap81_put_ArrowColor(this.getInstanceHandle,/*IColor81*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Opacity(){
        try{
            return _NativeISlopeMap81_get_Opacity(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Opacity(/*Double*/Opacity){
            try{
                _NativeISlopeMap81_put_Opacity(this.getInstanceHandle,/*Double*/Opacity); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ObjectTypeCode81 {
    OT_UNDEFINED = 0;
    OT_POLYLINE = 1;
    OT_POLYGON = 2;
    OT_RECTANGLE = 3;
    OT_REGULAR_POLYGON = 4;
    OT_CIRCLE = 5;
    OT_3D_POLYGON = 6;
    OT_BUILDING = 7;
    OT_BOX = 8;
    OT_PYRAMID = 9;
    OT_CYLINDER = 10;
    OT_CONE = 11;
    OT_ELLIPSE = 12;
    OT_ARC = 13;
    OT_ARROW = 14;
    OT_3D_ARROW = 15;
    OT_SPHERE = 16;
    OT_MODEL = 17;
    OT_LABEL = 18;
    OT_LOCATION = 19;
    OT_TREE_HOTLINK = 20;
    OT_ROUTE = 21;
    OT_MESSAGE = 22;
    OT_DYNAMIC = 23;
    OT_IMAGE_LABEL = 24;
    OT_THREAT_DOME = 25;
    OT_IMAGERY_LAYER = 26;
    OT_TERRAIN_VIDEO = 27;
    OT_POINT_CLOUD = 28;
    OT_ELEVATION_LAYER = 29;
    OT_TERRAIN_MODIFIER = 30;
    OT_TERRAIN_HOLE = 31;
    OT_POPUP_MESSAGE = 32;
    OT_FEATURE = 33;
    OT_PRESENTATION = 34;
    OT_ANALYSIS_LOS = 35;
    OT_FEATURE_LAYER = 36;
    OT_FEATURE_GROUP = 37;
    OT_3D_MESH_LAYER = 38;
    OT_3D_MESH_FEATURE_LAYER = 39;
    OT_KML_LAYER = 40;
    OT_3D_VIEWSHED = 41;
    OT_CONTOUR_MAP = 42;
    OT_SLOPE_MAP = 43;
    OT_EFFECT = 44;
    OT_NETWORK_LINK = 45;
    OT_SCREEN_OVERLAY = 46;
};
class IGeometry81 extends TEIUnknownHandle81 {
    get Dimension(){
        try{
            return _NativeIGeometry81_get_Dimension(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Envelope(){
        try{
            return ((nativeHandle) => nativeHandle ? GetIGeometry81Derived(nativeHandle) : null)(_NativeIGeometry81_get_Envelope(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get GeometryType(){
        try{
            return _NativeIGeometry81_get_GeometryType(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get GeometryTypeStr(){
        try{
            return UTF8ToString(_NativeIGeometry81_get_GeometryTypeStr(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Wks(){
        try{
            return ((nativeHandle) => nativeHandle ? new IWks81(nativeHandle) : null)(_NativeIGeometry81_get_Wks(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get SpatialOperator(){
        try{
            return ((nativeHandle) => nativeHandle ? new ISpatialOperator81(nativeHandle) : null)(_NativeIGeometry81_get_SpatialOperator(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get SpatialRelation(){
        try{
            return ((nativeHandle) => nativeHandle ? new ISpatialRelation81(nativeHandle) : null)(_NativeIGeometry81_get_SpatialRelation(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    Clone() {
        try{
            return ((nativeHandle) => nativeHandle ? GetIGeometry81Derived(nativeHandle) : null)(_NativeIGeometry81_Clone(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    EndEdit() {
        try{
            return ((nativeHandle) => nativeHandle ? GetIGeometry81Derived(nativeHandle) : null)(_NativeIGeometry81_EndEdit(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsEmpty() {
        try{
            return _NativeIGeometry81_IsEmpty(this.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsSimple() {
        try{
            return _NativeIGeometry81_IsSimple(this.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetEmpty() {
        try{
            _NativeIGeometry81_SetEmpty(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    StartEdit() {
        try{
            _NativeIGeometry81_StartEdit(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IntersectionType81 {
    IT_NONE = 0;
    IT_INTERSECT = 1;
    IT_WITHIN = 2;
};
class SGPublishPermission81 {
    SG_PERMISSION_ONLY_ME = 0;
    SG_PERMISSION_MY_GROUP = 1;
    SG_PERMISSION_MY_SITE = 2;
    SG_PERMISSION_EVERYONE = 3;
};
class ActionCode81 {
    AC_FLYTO = 0;
    AC_CIRCLEPATTERN = 1;
    AC_OVALPATTERN = 2;
    AC_LINEPATTERN = 3;
    AC_ARCPATTERN = 4;
    AC_FOLLOWBEHIND = 5;
    AC_FOLLOWABOVE = 6;
    AC_FOLLOWBELOW = 7;
    AC_FOLLOWRIGHT = 8;
    AC_FOLLOWLEFT = 9;
    AC_FOLLOWBEHINDANDABOVE = 10;
    AC_FOLLOWCOCKPIT = 11;
    AC_FOLLOWFROMGROUND = 12;
    AC_STOP = 13;
    AC_JUMP = 14;
    AC_DELETE = 15;
    AC_EDIT_FINISHED = 16;
    AC_OBJECT_ADDED = 17;
    AC_PLAY = 18;
    AC_SHOW = 19;
    AC_EDIT_STARTED = 20;
    AC_SELCHANGED = 21;
    AC_WAYPOINT_REACHED = 22;
    AC_GROUP_ADDED = 23;
    AC_LAYER_ADDED = 24;
    AC_LAYER_REFRESHED = 25;
    AC_ITEM_MOVED = 26;
    AC_LAYER_REMOVED = 27;
    AC_3DML_ADDED = 28;
    AC_3DML_REMOVED = 29;
    AC_DRAWING_OBJECT_STARTED = 30;
    AC_DRAWING_OBJECT_FINISHED = 31;
    AC_EDIT_CHANGE = 32;
};
class AltitudeTypeCode81 {
    ATC_TERRAIN_RELATIVE = 0;
    ATC_PIVOT_RELATIVE = 1;
    ATC_ON_TERRAIN = 2;
    ATC_TERRAIN_ABSOLUTE = 3;
    ATC_3DML_RELATIVE = 4;
};
class GPSOperationMode81 {
    GPS_MODE_OFF = 0;
    GPS_MODE_SHOW_LOCATION_INDICATOR = 2;
    GPS_MODE_FOLLOW = 4;
    GPS_MODE_NONE = 999;
};
class IGeometryCreator81 extends TEIUnknownHandle81 {
    CreateGeometryFromWKB(/*Object*/buffer) {
        try{
            return ((nativeHandle) => nativeHandle ? GetIGeometry81Derived(nativeHandle) : null)(_NativeIGeometryCreator81_CreateGeometryFromWKB(this.getInstanceHandle,/*Object*/Emval.toHandle(buffer)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateGeometryFromWKT(/*String*/buffer) {
        try{
            return ((nativeHandle) => nativeHandle ? GetIGeometry81Derived(nativeHandle) : null)(_NativeIGeometryCreator81_CreateGeometryFromWKT(this.getInstanceHandle,/*String*/allocateUTF8(String(buffer))));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateLinearRingGeometry(/*Object*/Vertices) {
        try{
            return ((nativeHandle) => nativeHandle ? new ILinearRing81(nativeHandle) : null)(_NativeIGeometryCreator81_CreateLinearRingGeometry(this.getInstanceHandle,/*Object*/Emval.toHandle(Vertices)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateLineStringGeometry(/*Object*/Vertices) {
        try{
            return ((nativeHandle) => nativeHandle ? new ILineString81(nativeHandle) : null)(_NativeIGeometryCreator81_CreateLineStringGeometry(this.getInstanceHandle,/*Object*/Emval.toHandle(Vertices)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateMultiLineStringGeometry(/*Object*/lineStringList) {
        try{
            return ((nativeHandle) => nativeHandle ? new IMultiLineString81(nativeHandle) : null)(_NativeIGeometryCreator81_CreateMultiLineStringGeometry(this.getInstanceHandle,/*Object*/Emval.toHandle(lineStringList)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateMultiPointGeometry(/*Object*/pointList) {
        try{
            return ((nativeHandle) => nativeHandle ? new IMultiPoint81(nativeHandle) : null)(_NativeIGeometryCreator81_CreateMultiPointGeometry(this.getInstanceHandle,/*Object*/Emval.toHandle(pointList)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateMultiPolygonGeometry(/*Object*/polygonList) {
        try{
            return ((nativeHandle) => nativeHandle ? new IMultiPolygon81(nativeHandle) : null)(_NativeIGeometryCreator81_CreateMultiPolygonGeometry(this.getInstanceHandle,/*Object*/Emval.toHandle(polygonList)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreatePointGeometry(/*Object*/vertex) {
        try{
            return ((nativeHandle) => nativeHandle ? new IPoint81(nativeHandle) : null)(_NativeIGeometryCreator81_CreatePointGeometry(this.getInstanceHandle,/*Object*/Emval.toHandle(vertex)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreatePolygonGeometry(/*Object*/ExteriorRing, /*Object*/interiorRingList=0) {
        try{
            return ((nativeHandle) => nativeHandle ? new IPolygon81(nativeHandle) : null)(_NativeIGeometryCreator81_CreatePolygonGeometry(this.getInstanceHandle,/*Object*/Emval.toHandle(ExteriorRing),/*Object*/Emval.toHandle(interiorRingList)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class DynamicMotionStyle81 {
    MOTION_GROUND_VEHICLE = 0;
    MOTION_AIRPLANE = 1;
    MOTION_HELICOPTER = 2;
    MOTION_HOVER = 3;
    MOTION_MANUAL = 4;
};
class DynamicObjectType81 {
    DYNAMIC_3D_MODEL = 0;
    DYNAMIC_TEXT_LABEL = 1;
    DYNAMIC_IMAGE_LABEL = 2;
    DYNAMIC_VIRTUAL = 3;
};
class SGLabelStyle81 {
    LS_DEFAULT = 0;
    LS_STREET = 1;
    LS_STATE = 2;
};
class MsgTargetPosition81 {
    MTP_LEFT = 0;
    MTP_MAIN = 2;
    MTP_MESSAGE_BAR = 3;
    MTP_FLOAT = 4;
    MTP_POPUP = 5;
};
class MsgType81 {
    TYPE_TEXT = 0;
    TYPE_URL = 1;
    TYPE_SCRIPT = 3;
};
class ModelTypeCode81 {
    MT_NORMAL = 0;
    MT_ANIMATION = 1;
    MT_PROGRESSIVE = 2;
};
class LayerGeometryType81 {
    LGT_POINT = 0;
    LGT_POLYLINE = 1;
    LGT_POLYGON = 2;
    LGT_COLLECTION = 3;
    LGT_NONE = -1;
};
class SphereStyle81 {
    SPHERE_NORMAL = 0;
    SPHERE_UPPER_HALF = 1;
    SPHERE_LOWER_HALF = 2;
    SPHERE_UPPER_HALF_BASE = 3;
    SPHERE_LOWER_HALF_BASE = 4;
};
class ElevationBehaviorMode81 {
    EB_REPLACE = 0;
    EB_BELOW = 1;
    EB_ABOVE = 2;
    EB_OFFSET = 3;
};
class DrawingMode81 {
    DRAW_MODE_SHOW_PROPERTY = 1;
    DRAW_MODE_SHOW_PROPERTY_TOOLBAR = 2;
    DRAW_MODE_MAGNET = 4;
    DRAW_MODE_XY = 8;
};
class EditItemFlags81 {
    EDIT_ITEM_USE_PROPERTY = 0;
    EDIT_ITEM = 1;
    EDIT_ITEM_VERTICES = 2;
    EDIT_ITEM_BUILDING_ROOF = 3;
    EDIT_ITEM_MOVE_Y = 4;
    EDIT_ITEM_SNAP = 5;
    EDIT_ITEM_VERTICES_Y = 6;
    EDIT_ITEM_DRAG_TO_CURSOR = 7;
    EDIT_ITEM_SHOW_PROPERTY = 256;
    EDIT_ITEM_SHOW_PROPERTY_TOOLBAR = 512;
    EDIT_ITEM_SHOW_PROPERTY_WITHOUT_TOOLBAR = 1024;
    EDIT_ITEM_SHOW_PROPERTY_WITH_UNDO_REDO_TOOLBAR = 2048;
    EDIT_ITEM_MOVE_MODE_XY = 4096;
    EDIT_ITEM_MOVE_MODE_Z = 8192;
    EDIT_ITEM_MOVE_MODE_MAGNET = 16384;
    EDIT_ITEM_SNAP_ON = 32768;
};
class ItemCode81 {
    SELECTED = 10;
    CHILD = 11;
    FIRSTVISIBLE = 12;
    NEXT = 13;
    NEXTVISIBLE = 14;
    PARENT = 15;
    PREVIOUS = 16;
    PREVIOUSVISIBLE = 17;
    ROOT = 18;
};
class SortType81 {
    SORT_ALPHABETICALLY_AZ = 0;
    SORT_ALPHABETICALLY_ZA = 1;
    SORT_BY_TYPE = 2;
    SORT_NO_SORT = 3;
};
class WorldPointType81 {
    WPT_TERRAIN = 0;
    WPT_MODEL = 1;
    WPT_LABEL = 2;
    WPT_PRIMITIVE = 4;
    WPT_ANIM = 8;
    WPT_BUILDING = 16;
    WPT_SKY = 32;
    WPT_ACCURATE_CPT = 64;
    WPT_BBOX_CPT = 128;
    WPT_VIDEO = 256;
    WPT_UNDERGROUND = 512;
    WPT_SCREEN_OVERLAY = 1024;
    WPT_SCREEN_CONTROL = 2048;
    WPT_SCREEN_COVERED = 4096;
    WPT_3DML = 8192;
    WPT_SURFACE = 65536;
    WPT_DEFAULT = -1;
};
class MouseInputMode81 {
    MI_FREE_FLIGHT = 0;
    MI_COM_CLIENT = 1;
    MI_CONTROLLED_FLIGHT = 2;
    MI_EDIT = 3;
    MI_MEASUREMENT = 4;
};
class PixelFromWorldMode81 {
    PFW_IGNORE_Z_BUFFER = 0;
    PFW_USE_Z_BUFFER = 1;
};
class MessageBarTextAlignment81 {
    MBT_LEFT = 0;
    MBT_CENTER = 1;
    MBT_RIGHT = 2;
};
class AccuracyLevel81 {
    ACCURACY_NORMAL = 0;
    ACCURACY_BEST_FROM_MEMORY = 1;
    ACCURACY_FORCE_BEST_RENDERED = 2;
};
class PermissionType81 {
    LMP_ENABLE_ALL = 0;
    LMP_DISABLE_API = 1;
    LMP_DISABLE_UI = 2;
    LMP_DISABLE_ALL = -1;
};
class ICoord2D81 extends TEIUnknownHandle81 {
    get X(){
        try{
            return _NativeICoord2D81_get_X(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set X(/*Double*/pVal){
            try{
                _NativeICoord2D81_put_X(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Y(){
        try{
            return _NativeICoord2D81_get_Y(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Y(/*Double*/pVal){
            try{
                _NativeICoord2D81_put_Y(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ICoord3D81 extends TEIUnknownHandle81 {
    get X(){
        try{
            return _NativeICoord3D81_get_X(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set X(/*Double*/pVal){
            try{
                _NativeICoord3D81_put_X(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Y(){
        try{
            return _NativeICoord3D81_get_Y(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Y(/*Double*/pVal){
            try{
                _NativeICoord3D81_put_Y(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Z(){
        try{
            return _NativeICoord3D81_get_Z(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Z(/*Double*/pVal){
            try{
                _NativeICoord3D81_put_Z(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class TimeZoneType81 {
    TIME_ZONE_TYPE_MY_COMPUTER = 0;
    TIME_ZONE_TYPE_UTC = 1;
    TIME_ZONE_TYPE_SPECIFIC = 2;
};
class SliderDisplayMode81 {
    MODE_TIME_NONE = 0;
    MODE_FIXED_TIME = 1;
    MODE_TIME = 2;
    MODE_RANGE_PROJECT = 4;
    MODE_RANGE_CUSTOM = 8;
    MODE_ADJUST_FOR_GROUP = 16;
};
class TEVersionType81 {
    TEVT_PRO = 0;
    TEVT_PLUS = 1;
    TEVT_VIEWER = 2;
    TEVT_UNKNOWN = -1;
};
class FullScreenMode81 {
    FULL_SCREEN_NONE = 0;
    FULL_SCREEN_STANDARD = 1;
    FULL_SCREEN_D3D = 2;
    FULL_SCREEN_STEREOSCOPIC = 3;
    FULL_SCREEN_WITH_CAPTION = 4;
};
class ContourDisplayStyle81 {
    CDS_CONTOUR_STYLE_LINES = 0;
    CDS_CONTOUR_STYLE_COLORS = 1;
    CDS_CONTOUR_STYLE_LINES_AND_COLORS = 2;
    CDS_CONTOUR_STYLE_DEFAULT = -1;
};
class SlopeDisplayStyle81 {
    SDS_SLOPE_STYLE_DIRECTION = 0;
    SDS_SLOPE_STYLE_COLORS = 1;
    SDS_SLOPE_STYLE_DIRECTION_AND_COLORS = 2;
    SDS_SLOPE_STYLE_DEFAULT = -1;
};
class ILineString81 extends IGeometry81 {
    get Length(){
        try{
            return _NativeILineString81_get_Length(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get StartPoint(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPoint81(nativeHandle) : null)(_NativeILineString81_get_StartPoint(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get EndPoint(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPoint81(nativeHandle) : null)(_NativeILineString81_get_EndPoint(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    Value(/*Double*/t){                                    
        try{
            return ((nativeHandle) => nativeHandle ? new IPoint81(nativeHandle) : null)(_NativeILineString81_get_Value(this.getInstanceHandle,/*Double*/t));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get NumPoints(){
        try{
            return _NativeILineString81_get_NumPoints(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Points(){
        try{
            return ((nativeHandle) => nativeHandle ? new Proxy(new IPoints81(nativeHandle),get_Item_Handler) : null)(_NativeILineString81_get_Points(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    IsClosed() {
        try{
            return _NativeILineString81_IsClosed(this.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class MultipleViewshedAnalysisType81 {
    MVT_VIEWSHED_ON_ROUTE = 0;
    MVT_TIMESPAN_VIEWSHED_ON_ROUTE = 1;
    MVT_CUMULATIVE_VIEWSHED_ON_ROUTE = 2;
    MVT_NOT_VALID = -1;
};
class CompareGroup81 {
    CG_ALL_OBJECTS = 0;
    CG_GROUP_1 = 1;
    CG_GROUP_2 = 2;
};
class ShadowType81 {
    STP_NONE = 0;
    STP_GLOBAL = 1;
    STP_SELECTION = 2;
};
class ViewshedQuality81 {
    VSQ_QUALITY_LOW = 0;
    VSQ_QUALITY_MEDIUM = 1;
    VSQ_QUALITY_HIGH = 2;
};
class ContainerSite81 {
    CS_DOCK_LEFT = 0;
    CS_DOCK_RIGHT = 1;
    CS_DOCK_TOP = 2;
    CS_DOCK_BOTTOM = 3;
    CS_DOCK_FLOAT = 4;
    CS_MAIN = 5;
    CS_NOT_VALID = -1;
};
class FeatureState81 {
    FS_NONE = 0;
    FS_NEW = 1;
    FS_MODIFIED = 2;
    FS_DELETED = 3;
};
class ReplaceTerrainMeshType81 {
    REPLACE_TERRAIN_NONE = 0;
    REPLACE_TERRAIN_WITH_3DML_GROUND_LAYER = 1;
    REPLACE_TERRAIN_WITH_SIMPLIFIED_MESH = 2;
};
class Oversampling81 {
    OVERSAMPLING_LOW = 75;
    OVERSAMPLING_NORMAL = 100;
    OVERSAMPLING_HIGH = 125;
    OVERSAMPLING_BEST = 150;
};
class MeshLayerDisplayStyle81 {
    MLDM_NORMAL = 0;
    MLDM_XRAY = 2;
    MLDM_SOLID = 3;
    MLDM_ADD_WIRE = 32768;
    MLDM_UNKNOWN = 65535;
};
class AsyncState81 {
    ASYNC_STATE_PENDING = 0;
    ASYNC_STATE_FULFILLED = 1;
    ASYNC_STATE_REJECTED = 2;
};
class StreamLayerStatus81 {
    SLS_NOT_STREAMED_LAYER = 0;
    SLS_STREAMING = 1;
    SLS_STREAM_PAUSED = 2;
};
class AltitudeUnitCode81 {
    AU_METER = 0;
    AU_FEET = 1;
    AU_CENTIMETER = 2;
    AU_DECIMETER = 3;
    AU_INCHE = 4;
    AU_YARD = 5;
    AU_UNDEFINED = -1;
};
class LabelLockMode81 {
    LM_DECAL = 0;
    LM_AXIS = 1;
    LM_AXIS_TEXTUP = 2;
    LM_AXIS_AUTOPITCH = 3;
    LM_AXIS_AUTOPITCH_TEXTUP = 4;
    LM_AXIS_AUTOYAW = 5;
};
class LineType81 {
    LINE_TYPE_NONE = 0;
    LINE_TYPE_TO_GROUND = 1;
    LINE_TYPE_CUSTOM = 2;
};
class ShowTextOptions81 {
    SHOW_TEXT_ALWAYS = 0;
    SHOW_TEXT_ON_HOVER = 1;
};
class BuildingStyleCode81 {
    BS_STRETCH_TERRAIN = 0;
    BS_POLYGONS = 1;
};
class _HTML_POPUP_FLAGS81 {
    HTML_POPUP_NONE = 0;
    HTML_POPUP_ANCHOR_3D_WINDOW = 1;
    HTML_POPUP_ALLOW_DRAG = 2;
    HTML_POPUP_NO_CAPTION = 4;
    HTML_POPUP_USE_DEFAULT_POS = 8;
    HTML_POPUP_USE_LAST_SIZE = 16;
    HTML_POPUP_ALLOW_RESIZE = 32;
    HTML_POPUP_ADD_SHADOW = 64;
    HTML_POPUP_NO_BORDER = 128;
    HTML_POPUP_SET_FOCUS_TO_RENDER = 256;
    HTML_POPUP_NOT_USE_POINTER = 512;
    HTML_POPUP_ALWAYS_VISIBLE = 1024;
    HTML_POPUP_USE_LAST_POS = 2048;
    HTML_POPUP_USE_TEXT_AS_INNER_HTML = 4096;
    HTML_POPUP_USE_AUTO_SIZE = 8192;
    HTML_POPUP_OPEN_LINK_IN_EXTERNAL_BROWSER = 16384;
    HTML_POPUP_BRING_TO_FRONT = 32768;
    HTML_POPUP_ROUNDED_CORNERS = 65536;
    HTML_POPUP_USE_EDGE = 131072;
    HTML_POPUP_MODAL_STYLE = 262144;
};
class CircularRouteType81 {
    CRT_STOP_AT_THE_END = 0;
    CRT_MOVE_TO_START = 1;
    CRT_JUMP_TO_START = 2;
};
class VideoPlayStatus81 {
    VPS_PAUSE = 0;
    VPS_PLAY = 1;
    VPS_STOP = 2;
};
class CPTDataFormat81 {
    CPT_DF_INTENSITY = 0;
    CPT_DF_RGB = 1;
};
class AttributeTypeCode81 {
    AT_TEXT = 0;
    AT_INTEGER = 1;
    AT_DOUBLE = 2;
    AT_UNKNOWN = -1;
};
class TilingMethodCode81 {
    TM_TILES_PER_SIDE = 0;
    TM_TILES_PER_AXIS = 0;
    TM_METERS_PER_TILE = 1;
    TM_UNDEFINED = -1;
};
class VolumeMode81 {
    VM_NONE = 0;
    VM_3D_POLYGON = 1;
    VM_COLORIZE_OBJECTS_AND_LAYERS = 2;
};
class FaceFillTypeCode81 {
    FACE_COLOR = 0;
    FACE_TEXTURE = 1;
    FACE_TERRAIN_TEXTURE = 2;
    FACE_UNDEFINED = -1;
};
class RoofStyleCode81 {
    ROOFTOP_FLAT = 0;
    ROOFTOP_ANGULAR = 1;
};
class PresentationItemType81 {
    PIT_STEP = 0;
    PIT_ACTION = 1;
};
class ScreenOverlayUnits81 {
    SO_UNIT_FRACTION = 0;
    SO_UNIT_PIXEL = 1;
    SO_UNIT_INSET_PIXELS = 2;
};
class LinkPositionFlags81 {
    LP_NONE = 0;
    LP_ABSOLUTE_ALTITUDE = 1;
    LP_ABSOLUTE_YAW = 2;
    LP_ABSOLUTE_PITCH = 4;
    LP_FACTOR_ALTITUDE = 2048;
    LP_FOLLOWER_ONLY = 4096;
};
class ViewshedRefreshRate81 {
    VSRR_REFRESH_RATE_SLOW = 0;
    VSRR_REFRESH_RATE_HEIGH = 1;
};
class ContourColorOutsideOfRange81 {
    CCOR_TRANSPARENT = 0;
    CCOR_RED_BLUE = 1;
};
class CoverageArea81 {
    CA_RECTANGLE = 0;
    CA_ENTIRE_TERRAIN = 1;
};
class SGGeometryTypeId81 {
    SG_POINT = 0;
    SG_LINESTRING = 1;
    SG_LINEARRING = 2;
    SG_POLYGON = 3;
    SG_MULTIPOINT = 4;
    SG_MULTILINESTRING = 5;
    SG_MULTIPOLYGON = 6;
};
class IWks81 extends TEIUnknownHandle81 {
    ExportToWKB(/*Boolean*/b3Dimension) {
        try{
            return EmvalToJS(Emval.toValue(_NativeIWks81_ExportToWKB(this.getInstanceHandle,/*Boolean*/b3Dimension)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ExportToWKT() {
        try{
            return UTF8ToString(_NativeIWks81_ExportToWKT(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ImportFromWKB(/*Object*/buffer) {
        try{
            _NativeIWks81_ImportFromWKB(this.getInstanceHandle,/*Object*/Emval.toHandle(buffer));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ImportFromWKT(/*String*/wkt) {
        try{
            _NativeIWks81_ImportFromWKT(this.getInstanceHandle,/*String*/allocateUTF8(String(wkt)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ISpatialOperator81 extends TEIUnknownHandle81 {
    Boundary() {
        try{
            return ((nativeHandle) => nativeHandle ? GetIGeometry81Derived(nativeHandle) : null)(_NativeISpatialOperator81_Boundary(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Buffer(/*Double*/buffer) {
        try{
            return ((nativeHandle) => nativeHandle ? GetIGeometry81Derived(nativeHandle) : null)(_NativeISpatialOperator81_Buffer(this.getInstanceHandle,/*Double*/buffer));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Difference(/*IGeometry*/otherGeometry) {
        try{
            return ((nativeHandle) => nativeHandle ? GetIGeometry81Derived(nativeHandle) : null)(_NativeISpatialOperator81_Difference(this.getInstanceHandle,/*IGeometry*/otherGeometry.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Distance(/*IGeometry*/otherGeometry) {
        try{
            return _NativeISpatialOperator81_Distance(this.getInstanceHandle,/*IGeometry*/otherGeometry.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Intersection(/*IGeometry*/otherGeometry) {
        try{
            return ((nativeHandle) => nativeHandle ? GetIGeometry81Derived(nativeHandle) : null)(_NativeISpatialOperator81_Intersection(this.getInstanceHandle,/*IGeometry*/otherGeometry.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SymmetricDifference(/*IGeometry*/otherGeometry) {
        try{
            return ((nativeHandle) => nativeHandle ? GetIGeometry81Derived(nativeHandle) : null)(_NativeISpatialOperator81_SymmetricDifference(this.getInstanceHandle,/*IGeometry*/otherGeometry.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Union(/*IGeometry*/otherGeometry) {
        try{
            return ((nativeHandle) => nativeHandle ? GetIGeometry81Derived(nativeHandle) : null)(_NativeISpatialOperator81_Union(this.getInstanceHandle,/*IGeometry*/otherGeometry.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ISpatialRelation81 extends TEIUnknownHandle81 {
    Contains(/*IGeometry*/otherGeometry) {
        try{
            return _NativeISpatialRelation81_Contains(this.getInstanceHandle,/*IGeometry*/otherGeometry.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Crosses(/*IGeometry*/otherGeometry) {
        try{
            return _NativeISpatialRelation81_Crosses(this.getInstanceHandle,/*IGeometry*/otherGeometry.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Disjoint(/*IGeometry*/otherGeometry) {
        try{
            return _NativeISpatialRelation81_Disjoint(this.getInstanceHandle,/*IGeometry*/otherGeometry.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Intersects(/*IGeometry*/otherGeometry) {
        try{
            return _NativeISpatialRelation81_Intersects(this.getInstanceHandle,/*IGeometry*/otherGeometry.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Overlaps(/*IGeometry*/otherGeometry) {
        try{
            return _NativeISpatialRelation81_Overlaps(this.getInstanceHandle,/*IGeometry*/otherGeometry.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Touches(/*IGeometry*/otherGeometry) {
        try{
            return _NativeISpatialRelation81_Touches(this.getInstanceHandle,/*IGeometry*/otherGeometry.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Within(/*IGeometry*/otherGeometry) {
        try{
            return _NativeISpatialRelation81_Within(this.getInstanceHandle,/*IGeometry*/otherGeometry.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ILinearRing81 extends ILineString81 {
    get Area(){
        try{
            return _NativeILinearRing81_get_Area(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Centroid(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPoint81(nativeHandle) : null)(_NativeILinearRing81_get_Centroid(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IGeometryCollection81 extends IGeometry81 {
    Item(/*Object*/Index){                                    
        try{
            return ((nativeHandle) => nativeHandle ? GetIGeometry81Derived(nativeHandle) : null)(_NativeIGeometryCollection81_get_Item(this.getInstanceHandle,/*Object*/Emval.toHandle(Index)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Count(){
        try{
            return _NativeIGeometryCollection81_get_Count(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get NumGeometries(){
        try{
            return _NativeIGeometryCollection81_get_NumGeometries(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    Geometry(/*Int32*/Index){                                    
        try{
            return ((nativeHandle) => nativeHandle ? GetIGeometry81Derived(nativeHandle) : null)(_NativeIGeometryCollection81_get_Geometry(this.getInstanceHandle,/*Int32*/Index));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    AddGeometry(/*Object*/pVal) {
        try{
            return ((nativeHandle) => nativeHandle ? GetIGeometry81Derived(nativeHandle) : null)(_NativeIGeometryCollection81_AddGeometry(this.getInstanceHandle,/*Object*/Emval.toHandle(pVal)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DeleteGeometry(/*Int32*/Index) {
        try{
            _NativeIGeometryCollection81_DeleteGeometry(this.getInstanceHandle,/*Int32*/Index);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IMultiLineString81 extends IGeometryCollection81 {
    get Length(){
        try{
            return _NativeIMultiLineString81_get_Length(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    IsClosed() {
        try{
            return _NativeIMultiLineString81_IsClosed(this.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IMultiPoint81 extends IGeometryCollection81 {
};
class IMultiPolygon81 extends IGeometryCollection81 {
    get Area(){
        try{
            return _NativeIMultiPolygon81_get_Area(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Centroid(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPoint81(nativeHandle) : null)(_NativeIMultiPolygon81_get_Centroid(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get PointOnSurface(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPoint81(nativeHandle) : null)(_NativeIMultiPolygon81_get_PointOnSurface(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IPoint81 extends IGeometry81 {
    get X(){
        try{
            return _NativeIPoint81_get_X(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set X(/*Double*/X){
            try{
                _NativeIPoint81_put_X(this.getInstanceHandle,/*Double*/X); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Y(){
        try{
            return _NativeIPoint81_get_Y(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Y(/*Double*/Y){
            try{
                _NativeIPoint81_put_Y(this.getInstanceHandle,/*Double*/Y); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Z(){
        try{
            return _NativeIPoint81_get_Z(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Z(/*Double*/Z){
            try{
                _NativeIPoint81_put_Z(this.getInstanceHandle,/*Double*/Z); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class IPolygon81 extends IGeometry81 {
    get Area(){
        try{
            return _NativeIPolygon81_get_Area(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Centroid(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPoint81(nativeHandle) : null)(_NativeIPolygon81_get_Centroid(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get PointOnSurface(){
        try{
            return ((nativeHandle) => nativeHandle ? new IPoint81(nativeHandle) : null)(_NativeIPolygon81_get_PointOnSurface(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ExteriorRing(){
        try{
            return ((nativeHandle) => nativeHandle ? new ILinearRing81(nativeHandle) : null)(_NativeIPolygon81_get_ExteriorRing(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    InteriorRing(/*Int32*/Index){                                    
        try{
            return ((nativeHandle) => nativeHandle ? new ILinearRing81(nativeHandle) : null)(_NativeIPolygon81_get_InteriorRing(this.getInstanceHandle,/*Int32*/Index));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get NumInteriorRings(){
        try{
            return _NativeIPolygon81_get_NumInteriorRings(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Rings(){
        try{
            return ((nativeHandle) => nativeHandle ? new Proxy(new IRings81(nativeHandle),get_Item_Handler) : null)(_NativeIPolygon81_get_Rings(this.getInstanceHandle));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IPoints81 extends TEIUnknownHandle81 {
    Item(/*Object*/Index){                                    
        try{
            return ((nativeHandle) => nativeHandle ? new IPoint81(nativeHandle) : null)(_NativeIPoints81_get_Item(this.getInstanceHandle,/*Object*/Emval.toHandle(Index)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Count(){
        try{
            return _NativeIPoints81_get_Count(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    AddPoint(/*Double*/X, /*Double*/Y, /*Double*/Z) {
        try{
            _NativeIPoints81_AddPoint(this.getInstanceHandle,/*Double*/X,/*Double*/Y,/*Double*/Z);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DeletePoint(/*Int32*/Index) {
        try{
            _NativeIPoints81_DeletePoint(this.getInstanceHandle,/*Int32*/Index);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    InsertPoint(/*Int32*/InsertAfterIndex, /*Double*/X, /*Double*/Y, /*Double*/Z) {
        try{
            _NativeIPoints81_InsertPoint(this.getInstanceHandle,/*Int32*/InsertAfterIndex,/*Double*/X,/*Double*/Y,/*Double*/Z);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ToArray() {
        try{
            return EmvalToJS(Emval.toValue(_NativeIPoints81_ToArray(this.getInstanceHandle)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IRings81 extends TEIUnknownHandle81 {
    Item(/*Object*/Index){                                    
        try{
            return ((nativeHandle) => nativeHandle ? new ILinearRing81(nativeHandle) : null)(_NativeIRings81_get_Item(this.getInstanceHandle,/*Object*/Emval.toHandle(Index)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Count(){
        try{
            return _NativeIRings81_get_Count(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    AddRing(/*Object*/val=0) {
        try{
            return ((nativeHandle) => nativeHandle ? new ILinearRing81(nativeHandle) : null)(_NativeIRings81_AddRing(this.getInstanceHandle,/*Object*/Emval.toHandle(val)));;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DeleteRing(/*Int32*/Index) {
        try{
            _NativeIRings81_DeleteRing(this.getInstanceHandle,/*Int32*/Index);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
function GetITerraExplorerObject81Derived(handle){
    var iid = UTF8ToString(_Native_GetITerraExplorerObject81DerivedIID(handle));//also increase the ref count of handle
    switch(iid)
    {
        
    case "IID_I3DMLFeatureLayer81":
         return new I3DMLFeatureLayer81(handle);
    case "IID_IFeature81":
         return new IFeature81(handle);
    case "IID_IMeshLayer81":
         return new IMeshLayer81(handle);
    case "IID_IFeatureLayer81":
         return new IFeatureLayer81(handle);
    case "IID_IKMLLayer81":
         return new IKMLLayer81(handle);
    case "IID_ITerrainPolyline81":
         return new ITerrainPolyline81(handle);
    case "IID_ITerrainPolygon81":
         return new ITerrainPolygon81(handle);
    case "IID_ITerrainRectangle81":
         return new ITerrainRectangle81(handle);
    case "IID_ITerrainRegularPolygon81":
         return new ITerrainRegularPolygon81(handle);
    case "IID_ITerrain3DPolygon81":
         return new ITerrain3DPolygon81(handle);
    case "IID_ITerrainBuilding81":
         return new ITerrainBuilding81(handle);
    case "IID_ITerrain3DRectBase81":
         return new ITerrain3DRectBase81(handle);
    case "IID_ITerrain3DRegBase81":
         return new ITerrain3DRegBase81(handle);
    case "IID_ITerrainEllipse81":
         return new ITerrainEllipse81(handle);
    case "IID_ITerrainArc81":
         return new ITerrainArc81(handle);
    case "IID_ITerrainArrow81":
         return new ITerrainArrow81(handle);
    case "IID_ITerrain3DArrow81":
         return new ITerrain3DArrow81(handle);
    case "IID_ITerrainSphere81":
         return new ITerrainSphere81(handle);
    case "IID_ITerrainModel81":
         return new ITerrainModel81(handle);
    case "IID_ITerrainImageLabel81":
         return new ITerrainImageLabel81(handle);
    case "IID_ITerrainLabel81":
         return new ITerrainLabel81(handle);
    case "IID_ITerrainEffect81":
         return new ITerrainEffect81(handle);
    case "IID_ITerrainLocation81":
         return new ITerrainLocation81(handle);
    case "IID_ITreeHotlink81":
         return new ITreeHotlink81(handle);
    case "IID_ITerraExplorerMessage81":
         return new ITerraExplorerMessage81(handle);
    case "IID_IPopupMessage81":
         return new IPopupMessage81(handle);
    case "IID_ITerrainDynamicObject81":
         return new ITerrainDynamicObject81(handle);
    case "IID_ITerrainRasterLayer81":
         return new ITerrainRasterLayer81(handle);
    case "IID_ITerrainVideo81":
         return new ITerrainVideo81(handle);
    case "IID_ITerrainPointCloudModel81":
         return new ITerrainPointCloudModel81(handle);
    case "IID_ITerrainModifier81":
         return new ITerrainModifier81(handle);
    case "IID_ITerrainHole81":
         return new ITerrainHole81(handle);
    case "IID_IPresentation81":
         return new IPresentation81(handle);
    case "IID_IScreenOverlay81":
         return new IScreenOverlay81(handle);
    case "IID_IFeatureGroup81":
         return new IFeatureGroup81(handle);
    case "IID_INetworkLink81":
         return new INetworkLink81(handle);
    case "IID_I3DViewshed81":
         return new I3DViewshed81(handle);
    case "IID_ILineOfSight81":
         return new ILineOfSight81(handle);
    case "IID_ITerrainThreatDome81":
         return new ITerrainThreatDome81(handle);
    case "IID_IContourMap81":
         return new IContourMap81(handle);
    case "IID_ISlopeMap81":
         return new ISlopeMap81(handle);        
    }
    return null;
}
function GetIGeometry81Derived(handle){
    var iid = UTF8ToString(_Native_GetIGeometry81DerivedIID(handle));//also increase the ref count of handle
    switch(iid)
    {
        
    case "IID_ILineString":
         return new ILineString81(handle);
    case "IID_ILinearRing":
         return new ILinearRing81(handle);
    case "IID_IGeometryCollection":
         return new IGeometryCollection81(handle);
    case "IID_IMultiLineString":
         return new IMultiLineString81(handle);
    case "IID_IMultiPoint":
         return new IMultiPoint81(handle);
    case "IID_IMultiPolygon":
         return new IMultiPolygon81(handle);
    case "IID_IPoint":
         return new IPoint81(handle);
    case "IID_IPolygon":
         return new IPolygon81(handle);        
    }
    return null;
}
function GetJSObjectFromHandle(handle){
    var iid = UTF8ToString(_Native_GetIID81(handle));//also increase the ref count of handle
    switch(iid)
    {
        
    case "IID_SGWorld81":
         return new SGWorld81(handle);
     case "IID_ITerraExplorerObject81":
         return GetITerraExplorerObject81Derived(handle);
    case "IID_I3DMLFeatureLayer81":
         return new I3DMLFeatureLayer81(handle);
    case "IID_IProject81":
         return new IProject81(handle);
    case "IID_INavigate81":
         return new INavigate81(handle);
    case "IID_ICreator81":
         return new ICreator81(handle);
    case "IID_IDrawing81":
         return new IDrawing81(handle);
    case "IID_IProjectTree81":
         return new IProjectTree81(handle);
    case "IID_IWindow81":
         return new IWindow81(handle);
    case "IID_ITerrain81":
         return new ITerrain81(handle);
    case "IID_ILicenseManager81":
         return new ILicenseManager81(handle);
    case "IID_ICoordServices81":
         return new ICoordServices81(handle);
    case "IID_IDateTime81":
         return new IDateTime81(handle);
    case "IID_ITEVersionInfo81":
         return new ITEVersionInfo81(handle);
    case "IID_IApplication81":
         return new IApplication81(handle);
    case "IID_ICommand81":
         return new ICommand81(handle);
    case "IID_IAnalysis81":
         return new IAnalysis81(handle);
    case "IID_ISGServer81":
         return new ISGServer81(handle);
    case "IID_IAction81":
         return new IAction81(handle);
    case "IID_IContainerItem81":
         return new IContainerItem81(handle);
    case "IID_ITreeItem81":
         return new ITreeItem81(handle);
    case "IID_I3DMLFeatureProperties81":
         return new I3DMLFeatureProperties81(handle);
    case "IID_IPosition81":
         return new IPosition81(handle);
    case "IID_IDataSourceInfo81":
         return new IDataSourceInfo81(handle);
    case "IID_IFeatures81":
         return new IFeatures81(handle);
    case "IID_IFeature81":
         return new IFeature81(handle);
    case "IID_IMeshLayer81":
         return new IMeshLayer81(handle);
    case "IID_ITerraExplorerAsync81":
         return new ITerraExplorerAsync81(handle);
    case "IID_IFeatureLayer81":
         return new IFeatureLayer81(handle);
    case "IID_IKMLLayer81":
         return new IKMLLayer81(handle);
    case "IID_ILabelStyle81":
         return new ILabelStyle81(handle);
    case "IID_IColor81":
         return new IColor81(handle);
    case "IID_IRouteWaypoint81":
         return new IRouteWaypoint81(handle);
    case "IID_ITerrainPolyline81":
         return new ITerrainPolyline81(handle);
    case "IID_ITerrainPolygon81":
         return new ITerrainPolygon81(handle);
    case "IID_ITerrainRectangle81":
         return new ITerrainRectangle81(handle);
    case "IID_ITerrainRegularPolygon81":
         return new ITerrainRegularPolygon81(handle);
    case "IID_ITerrain3DPolygon81":
         return new ITerrain3DPolygon81(handle);
    case "IID_ITerrainBuilding81":
         return new ITerrainBuilding81(handle);
    case "IID_ITerrain3DRectBase81":
         return new ITerrain3DRectBase81(handle);
    case "IID_ITerrain3DRegBase81":
         return new ITerrain3DRegBase81(handle);
    case "IID_ITerrainEllipse81":
         return new ITerrainEllipse81(handle);
    case "IID_ITerrainArc81":
         return new ITerrainArc81(handle);
    case "IID_ITerrainArrow81":
         return new ITerrainArrow81(handle);
    case "IID_ITerrain3DArrow81":
         return new ITerrain3DArrow81(handle);
    case "IID_ITerrainSphere81":
         return new ITerrainSphere81(handle);
    case "IID_ITerrainModel81":
         return new ITerrainModel81(handle);
    case "IID_ITerrainImageLabel81":
         return new ITerrainImageLabel81(handle);
    case "IID_ITerrainLabel81":
         return new ITerrainLabel81(handle);
    case "IID_ITerrainEffect81":
         return new ITerrainEffect81(handle);
    case "IID_ITerrainLocation81":
         return new ITerrainLocation81(handle);
    case "IID_ITreeHotlink81":
         return new ITreeHotlink81(handle);
    case "IID_ITerraExplorerMessage81":
         return new ITerraExplorerMessage81(handle);
    case "IID_IPopupMessage81":
         return new IPopupMessage81(handle);
    case "IID_ITerrainDynamicObject81":
         return new ITerrainDynamicObject81(handle);
    case "IID_ITerrainRasterLayer81":
         return new ITerrainRasterLayer81(handle);
    case "IID_ITerrainVideo81":
         return new ITerrainVideo81(handle);
    case "IID_ITerrainPointCloudModel81":
         return new ITerrainPointCloudModel81(handle);
    case "IID_ITerrainModifier81":
         return new ITerrainModifier81(handle);
    case "IID_ITerrainHole81":
         return new ITerrainHole81(handle);
    case "IID_IPresentation81":
         return new IPresentation81(handle);
    case "IID_IScreenOverlay81":
         return new IScreenOverlay81(handle);
    case "IID_ICommandLineProcessAsync81":
         return new ICommandLineProcessAsync81(handle);
    case "IID_IVisibility81":
         return new IVisibility81(handle);
    case "IID_IBBox3D81":
         return new IBBox3D81(handle);
    case "IID_I3DMLFeatureLayers81":
         return new I3DMLFeatureLayers81(handle);
    case "IID_ICoordinateSystem81":
         return new ICoordinateSystem81(handle);
    case "IID_IFeatureGroups81":
         return new IFeatureGroups81(handle);
    case "IID_IBBox2D81":
         return new IBBox2D81(handle);
    case "IID_IFeatureGroup81":
         return new IFeatureGroup81(handle);
    case "IID_IFeatureAttributes81":
         return new IFeatureAttributes81(handle);
    case "IID_IFeatureAttribute81":
         return new IFeatureAttribute81(handle);
    case "IID_IAttributes81":
         return new IAttributes81(handle);
    case "IID_IAttribute81":
         return new IAttribute81(handle);
    case "IID_INetworkLink81":
         return new INetworkLink81(handle);
    case "IID_IMessageObject81":
         return new IMessageObject81(handle);
    case "IID_ITerrainObject81":
         return new ITerrainObject81(handle);
    case "IID_ITooltip81":
         return new ITooltip81(handle);
    case "IID_IAttachment81":
         return new IAttachment81(handle);
    case "IID_ITimeSpan81":
         return new ITimeSpan81(handle);
    case "IID_ILineStyle81":
         return new ILineStyle81(handle);
    case "IID_IFillStyle81":
         return new IFillStyle81(handle);
    case "IID_IObjectTexture81":
         return new IObjectTexture81(handle);
    case "IID_IVolumeClassification81":
         return new IVolumeClassification81(handle);
    case "IID_IBuildingFace81":
         return new IBuildingFace81(handle);
    case "IID_IRoofFace81":
         return new IRoofFace81(handle);
    case "IID_IBuildingSides81":
         return new IBuildingSides81(handle);
    case "IID_IRouteWaypoints81":
         return new IRouteWaypoints81(handle);
    case "IID_IPointCloudDefaultLocation81":
         return new IPointCloudDefaultLocation81(handle);
    case "IID_IPresentationItem81":
         return new IPresentationItem81(handle);
    case "IID_IScreenOverlayXY81":
         return new IScreenOverlayXY81(handle);
    case "IID_IWorldPointInfo81":
         return new IWorldPointInfo81(handle);
    case "IID_ITerraExplorerObjects81":
         return new ITerraExplorerObjects81(handle);
    case "IID_IScreenPointInfo81":
         return new IScreenPointInfo81(handle);
    case "IID_IMouseInfo81":
         return new IMouseInfo81(handle);
    case "IID_IScreenRect81":
         return new IScreenRect81(handle);
    case "IID_IModuleLicenseInfo81":
         return new IModuleLicenseInfo81(handle);
    case "IID_IContainers81":
         return new IContainers81(handle);
    case "IID_IMultiple3DWindows81":
         return new IMultiple3DWindows81(handle);
    case "IID_IClipboard81":
         return new IClipboard81(handle);
    case "IID_ISelection81":
         return new ISelection81(handle);
    case "IID_I3DViewshed81":
         return new I3DViewshed81(handle);
    case "IID_ILineOfSight81":
         return new ILineOfSight81(handle);
    case "IID_ITerrainThreatDome81":
         return new ITerrainThreatDome81(handle);
    case "IID_IContourMap81":
         return new IContourMap81(handle);
    case "IID_ISlopeMap81":
         return new ISlopeMap81(handle);
     case "IID_IGeometry":
         return GetIGeometry81Derived(handle);
    case "IID_IGeometryCreator":
         return new IGeometryCreator81(handle);
    case "IID_ICoord2D":
         return new ICoord2D81(handle);
    case "IID_ICoord3D":
         return new ICoord3D81(handle);
    case "IID_ILineString":
         return new ILineString81(handle);
    case "IID_IWks":
         return new IWks81(handle);
    case "IID_ISpatialOperator":
         return new ISpatialOperator81(handle);
    case "IID_ISpatialRelation":
         return new ISpatialRelation81(handle);
    case "IID_ILinearRing":
         return new ILinearRing81(handle);
    case "IID_IGeometryCollection":
         return new IGeometryCollection81(handle);
    case "IID_IMultiLineString":
         return new IMultiLineString81(handle);
    case "IID_IMultiPoint":
         return new IMultiPoint81(handle);
    case "IID_IMultiPolygon":
         return new IMultiPolygon81(handle);
    case "IID_IPoint":
         return new IPoint81(handle);
    case "IID_IPolygon":
         return new IPolygon81(handle);
    case "IID_IPoints":
         return new IPoints81(handle);
    case "IID_IRings":
         return new IRings81(handle);        
    }
    return null;
}